import { motion } from 'motion/react';
import { 
  FileText, 
  Trash2, 
  Save,
  Upload,
  Loader2,
  ExternalLink,
  CreditCard
} from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { useFirestoreCollection } from '@/hooks/useFirestoreCollection';
import type { PaymentInstructionData } from '../types/admin.types';

interface AdminInstructivosProps {
  currentInstructivo: PaymentInstructionData;
  setCurrentInstructivo: (doc: PaymentInstructionData) => void;
  isUploading: boolean;
  onDocUpload: (file: File) => Promise<void>;
  handleSaveDoc: () => void;
  handleDeleteDoc: (id: string) => void;
}

export function AdminInstructivos({
  currentInstructivo,
  setCurrentInstructivo,
  isUploading,
  onDocUpload,
  handleSaveDoc,
  handleDeleteDoc
}: AdminInstructivosProps) {
  
  // Real-time fetch of existing instructions
  const { data: existingDocs, loading } = useFirestoreCollection<PaymentInstructionData>(
    'payment_instructions'
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

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-b from-[#1a1a1a] to-black p-8 rounded-2xl border border-[#F4BA3E]/30 mb-8"
      >
        <div className="flex items-center space-x-3 mb-6">
          <CreditCard className="w-6 h-6 text-[#F4BA3E]" />
          <h2 className="text-2xl text-white">Nuevo Instructivo de Pago</h2>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-300 mb-2 block">Banco *</label>
              <select
                value={currentInstructivo.bank}
                onChange={(e) => setCurrentInstructivo({ ...currentInstructivo, bank: e.target.value })}
                className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white focus:outline-none focus:border-[#F4BA3E] transition-colors"
              >
                <option value="Bancolombia">Bancolombia</option>
                <option value="Davivenda">Davivenda</option>
              </select>
            </div>
            <div>
              <label className="text-gray-300 mb-2 block">Categoría *</label>
              <input
                type="text"
                placeholder="Ej: APP, Portal Web, Cañón de Arizona"
                value={currentInstructivo.category}
                onChange={(e) => setCurrentInstructivo({ ...currentInstructivo, category: e.target.value })}
                className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#F4BA3E] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-gray-300 mb-2 block">Título del Instructivo *</label>
            <input
              type="text"
              placeholder="Ej: Cómo realizar tus pagos"
              value={currentInstructivo.title}
              onChange={(e) => setCurrentInstructivo({ ...currentInstructivo, title: e.target.value })}
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
                  id="instructivo-upload"
                />
                <label
                  htmlFor="instructivo-upload"
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
                      {currentInstructivo.fileUrl ? 'Archivo seleccionado' : 'Seleccionar PDF de la computadora'}
                    </>
                  )}
                </label>
              </div>
            </div>
            {currentInstructivo.fileUrl && !isUploading && (
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
            Guardar Instructivo
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
          <h2 className="text-2xl text-white font-light">Instructivos Existentes</h2>
          <span className="text-gray-500 text-sm">{existingDocs.length} archivos</span>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-[#F4BA3E]" />
          </div>
        ) : existingDocs.length === 0 ? (
          <div className="text-center py-12 text-gray-500 border border-dashed border-white/10 rounded-2xl">
            No hay instructivos registrados.
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
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[12px] px-2 py-0.5 bg-[#F4BA3E]/10 text-[#F4BA3E] border border-[#F4BA3E]/20 rounded-full font-bold uppercase">
                        {doc.bank}
                      </span>
                      <span className="text-[12px] px-2 py-0.5 bg-white/5 text-gray-400 border border-white/10 rounded-full font-bold uppercase">
                        {doc.category}
                      </span>
                    </div>
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
