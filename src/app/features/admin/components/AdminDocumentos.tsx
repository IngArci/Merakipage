import { motion } from 'motion/react';
import { 
  FileText, 
  Trash2, 
  Save,
  Upload,
  Loader2,
  ExternalLink
} from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { useFirestoreCollection } from '../../../hooks/useFirestoreCollection';
import type { LegalDocData } from '../types/admin.types';

interface AdminDocumentosProps {
  selectedProject: string;
  currentDoc: LegalDocData;
  setCurrentDoc: (doc: LegalDocData) => void;
  isUploading: boolean;
  onDocUpload: (file: File) => Promise<void>;
  handleSaveDoc: () => void;
  handleDeleteDoc: (id: string) => void;
}

export function AdminDocumentos({
  selectedProject,
  currentDoc,
  setCurrentDoc,
  isUploading,
  onDocUpload,
  handleSaveDoc,
  handleDeleteDoc
}: AdminDocumentosProps) {
  
  // Real-time fetch of existing documents for the selected project
  const { data: existingDocs, loading } = useFirestoreCollection<LegalDocData>(
    'legal_documents',
    'projectSlug',
    selectedProject
  );

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        alert('Por favor selecciona solo archivos PDF');
        return;
      }
      await onDocUpload(file);
    }
  };

  if (!selectedProject) {
    return null; // The parent component handles the "select project" message
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-b from-[#1a1a1a] to-black p-8 rounded-2xl border border-[#F4BA3E]/30 mb-8"
      >
        <div className="flex items-center space-x-3 mb-6">
          <FileText className="w-6 h-6 text-[#F4BA3E]" />
          <h2 className="text-2xl text-white">Nuevo Documento Legal</h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-gray-300 mb-2 block">Título del Documento *</label>
            <input
              type="text"
              placeholder="Ej: Cámara de Comercio"
              value={currentDoc.title}
              onChange={(e) => setCurrentDoc({ ...currentDoc, title: e.target.value })}
              className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#F4BA3E] transition-colors"
            />
          </div>

          <div>
            <label className="text-gray-300 mb-2 block">Archivo PDF *</label>
            <div className="flex space-x-2 mb-4">
              <div className="flex-1 relative">
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  disabled={isUploading}
                  className="hidden"
                  id="legal-doc-upload"
                />
                <label
                  htmlFor="legal-doc-upload"
                  className={`flex items-center justify-center w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-gray-400 cursor-pointer hover:border-[#F4BA3E] transition-all ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isUploading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin text-[#F4BA3E]" />
                      Subiendo...
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5 mr-2 text-[#F4BA3E]" />
                      {currentDoc.fileUrl ? 'Archivo seleccionado' : 'Seleccionar PDF de la computadora'}
                    </>
                  )}
                </label>
              </div>
            </div>
            {currentDoc.fileUrl && !isUploading && (
              <div className="mt-2 flex items-center space-x-2 text-green-500 text-sm">
                <FileText className="w-4 h-4" />
                <span>PDF listo para guardar</span>
              </div>
            )}
          </div>

          <Button
            onClick={handleSaveDoc}
            className="w-full bg-gradient-to-r from-[#947018] to-[#F4BA3E] hover:from-[#FFF18F] hover:to-[#F4BA3E] text-black text-lg py-6"
          >
            <Save className="w-5 h-5 mr-2" />
            Guardar Documento
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-b from-[#1a1a1a] to-black p-8 rounded-2xl border border-[#F4BA3E]/30 mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl text-white font-light">Documentos Existentes</h2>
          <span className="text-gray-500 text-sm">{existingDocs.length} archivos</span>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-[#F4BA3E]" />
          </div>
        ) : existingDocs.length === 0 ? (
          <div className="text-center py-12 text-gray-500 border border-dashed border-white/10 rounded-2xl">
            No hay documentos legales registrados para este proyecto.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {existingDocs.map((doc) => (
              <div
                key={doc.id}
                className="bg-black/50 p-5 rounded-xl border border-[#F4BA3E]/20 hover:border-[#F4BA3E]/50 transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0 pr-4">
                    <div className="flex items-center space-x-2 mb-1">
                      <FileText className="w-4 h-4 text-[#F4BA3E] flex-shrink-0" />
                      <h3 className="text-white font-medium truncate">{doc.title}</h3>
                    </div>
                    <p className="text-xs text-gray-500 italic">Subido en: {doc.createdAt?.toDate?.() ? doc.createdAt.toDate().toLocaleDateString() : 'Recién subido'}</p>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={doc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                      title="Ver PDF"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <Button
                      onClick={() => doc.id && handleDeleteDoc(doc.id)}
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0 border-red-500/30 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-lg shadow-red-500/0 hover:shadow-red-500/20"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </>
  );
}
