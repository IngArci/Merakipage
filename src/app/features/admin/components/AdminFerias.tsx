import { motion } from 'motion/react';
import { 
  Calendar, 
  Plus, 
  Trash2, 
  Save,
  Upload,
  Users,
  Image as ImageIcon,
  Loader2
} from 'lucide-react';
import { Button } from '../../../components/ui/button';

export interface FeriaData {
  nombre: string;
  fecha: string;
  lugar: string;
  descripcion: string;
  logros: string;
  images: string[];
}

interface AdminFeriasProps {
  ferias: FeriaData[];
  currentFeria: FeriaData;
  setCurrentFeria: (feria: FeriaData) => void;
  isUploading: boolean;
  onImageUpload: (file: File) => Promise<void>;
  handleRemoveFeriaImage: (index: number) => void;
  handleSaveFeria: () => void;
  handleDeleteFeria: (index: number) => void;
}

export function AdminFerias({
  ferias,
  currentFeria,
  setCurrentFeria,
  isUploading,
  onImageUpload,
  handleRemoveFeriaImage,
  handleSaveFeria,
  handleDeleteFeria
}: AdminFeriasProps) {
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await onImageUpload(file);
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
          <Users className="w-6 h-6 text-[#F4BA3E]" />
          <h2 className="text-2xl text-white">Nueva Feria o Evento</h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-gray-300 mb-2 block">Nombre de la Feria o Evento *</label>
            <input
              type="text"
              placeholder="Ej: Feria de Inmobiliaria 2026"
              value={currentFeria.nombre}
              onChange={(e) => setCurrentFeria({ ...currentFeria, nombre: e.target.value })}
              className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#F4BA3E] transition-colors"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-300 mb-2">
              <Calendar className="w-4 h-4 text-[#F4BA3E]" />
              <span>Fecha de la Feria o Evento *</span>
            </label>
            <input
              type="text"
              placeholder="Ej: Marzo 2026"
              value={currentFeria.fecha}
              onChange={(e) => setCurrentFeria({ ...currentFeria, fecha: e.target.value })}
              className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#F4BA3E] transition-colors"
            />
          </div>

          <div>
            <label className="text-gray-300 mb-2 block">Lugar de la Feria o Evento *</label>
            <input
              type="text"
              placeholder="Ej: Centro Comercial XYZ"
              value={currentFeria.lugar}
              onChange={(e) => setCurrentFeria({ ...currentFeria, lugar: e.target.value })}
              className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#F4BA3E] transition-colors"
            />
          </div>

          <div>
            <label className="text-gray-300 mb-2 block">Descripción de la Feria o Evento *</label>
            <textarea
              placeholder="Describe la feria o evento..."
              value={currentFeria.descripcion}
              onChange={(e) => setCurrentFeria({ ...currentFeria, descripcion: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#F4BA3E] transition-colors resize-none"
            />
          </div>

          <div>
            <label className="text-gray-300 mb-2 block">Logros de la Feria o Evento *</label>
            <textarea
              placeholder="Describe los logros de la feria o evento..."
              value={currentFeria.logros}
              onChange={(e) => setCurrentFeria({ ...currentFeria, logros: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#F4BA3E] transition-colors resize-none"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-300 mb-2">
              <ImageIcon className="w-4 h-4 text-[#F4BA3E]" />
              <span>Imágenes de la Feria o Evento</span>
            </label>
            
            <div className="flex space-x-2 mb-4">
              <div className="flex-1 relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  disabled={isUploading}
                  className="hidden"
                  id="feria-file-upload"
                />
                <label
                  htmlFor="feria-file-upload"
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
                      Seleccionar imagen de la computadora
                    </>
                  )}
                </label>
              </div>
            </div>

            {currentFeria.images.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {currentFeria.images.map((img, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={img}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg border-2 border-[#F4BA3E]/30"
                    />
                    <button
                      onClick={() => handleRemoveFeriaImage(index)}
                      className="absolute top-2 right-2 w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Button
            onClick={handleSaveFeria}
            className="w-full bg-gradient-to-r from-[#947018] to-[#F4BA3E] hover:from-[#FFF18F] hover:to-[#F4BA3E] text-black text-lg py-6"
          >
            <Save className="w-5 h-5 mr-2" />
            Guardar Feria
          </Button>
        </div>
      </motion.div>

      {ferias.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-b from-[#1a1a1a] to-black p-8 rounded-2xl border border-[#F4BA3E]/30 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-white">Ferias para Publicar ({ferias.length})</h2>
            <Button
              onClick={() => alert('Publicar Ferias')}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Upload className="w-4 h-4 mr-2" />
              Publicar Todos
            </Button>
          </div>

          <div className="space-y-4">
            {ferias.map((feria, index) => (
              <div
                key={index}
                className="bg-black/50 p-6 rounded-xl border border-[#F4BA3E]/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-[#F4BA3E] font-semibold">{feria.nombre}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-[#F4BA3E] font-semibold">{feria.fecha}</span>
                    </div>
                    <p className="text-gray-300">{feria.descripcion}</p>
                    <p className="text-gray-300">{feria.logros}</p>
                  </div>
                  <Button
                    onClick={() => handleDeleteFeria(index)}
                    variant="outline"
                    size="sm"
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                {feria.images.length > 0 && (
                  <div className="flex space-x-2 overflow-x-auto">
                    {feria.images.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={`Feria ${index + 1} - ${imgIndex + 1}`}
                        className="w-24 h-24 object-cover rounded-lg border border-[#F4BA3E]/30"
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
