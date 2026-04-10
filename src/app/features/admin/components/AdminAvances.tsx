import { motion } from 'motion/react';
import { 
  Calendar, 
  Percent, 
  Image as ImageIcon, 
  Plus, 
  Trash2, 
  Save,
  Upload,
  Loader2
} from 'lucide-react';
import { Button } from '../../../components/ui/button';

export interface ProgressUpdate {
  date: string;
  text: string;
  images: string[];
}

interface AdminAvancesProps {
  avances: ProgressUpdate[];
  currentAvance: ProgressUpdate;
  setCurrentAvance: (avance: ProgressUpdate) => void;
  imageUrl: string;
  setImageUrl: (url: string) => void;
  isUploading: boolean;
  onImageUpload: (files: FileList) => Promise<void>;
  handleRemoveImage: (index: number) => void;
  handleSaveAvance: () => void;
  handleDeleteAvance: (index: number) => void;
  handlePublishAvances: () => void;
}

export function AdminAvances({
  avances,
  currentAvance,
  setCurrentAvance,
  imageUrl,
  isUploading,
  onImageUpload,
  handleRemoveImage,
  handleSaveAvance,
  handleDeleteAvance,
  handlePublishAvances
}: AdminAvancesProps) {
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      await onImageUpload(files);
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
          <Plus className="w-6 h-6 text-[#F4BA3E]" />
          <h2 className="text-2xl text-white">Nuevo Avance de Obra</h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="flex items-center space-x-2 text-gray-300 mb-2">
              <Calendar className="w-4 h-4 text-[#F4BA3E]" />
              <span>Fecha del Avance *</span>
            </label>
            <input
              type="text"
              placeholder="Ej: Marzo 2026"
              value={currentAvance.date}
              onChange={(e) => setCurrentAvance({ ...currentAvance, date: e.target.value })}
              className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#F4BA3E] transition-colors"
            />
          </div>



          <div>
            <label className="text-gray-300 mb-2 block">Texto Descriptivo *</label>
            <textarea
              placeholder="Describe el avance de obra..."
              value={currentAvance.text}
              onChange={(e) => setCurrentAvance({ ...currentAvance, text: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#F4BA3E] transition-colors resize-none"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-300 mb-2">
              <ImageIcon className="w-4 h-4 text-[#F4BA3E]" />
              <span>Imágenes del Avance</span>
            </label>
            
            <div className="flex space-x-2 mb-4">
              <div className="flex-1 relative">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  disabled={isUploading}
                  className="hidden"
                  id="avance-file-upload"
                />
                <label
                  htmlFor="avance-file-upload"
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

            {currentAvance.images.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {currentAvance.images.map((img, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={img}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg border-2 border-[#F4BA3E]/30"
                    />
                    <button
                      onClick={() => handleRemoveImage(index)}
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
            onClick={handleSaveAvance}
            className="w-full bg-gradient-to-r from-[#947018] to-[#F4BA3E] hover:from-[#FFF18F] hover:to-[#F4BA3E] text-black text-lg py-6"
          >
            <Save className="w-5 h-5 mr-2" />
            Guardar Avance
          </Button>
        </div>
      </motion.div>

      {avances.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-b from-[#1a1a1a] to-black p-8 rounded-2xl border border-[#F4BA3E]/30 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-white">Avances para Publicar ({avances.length})</h2>
            <Button
              onClick={handlePublishAvances}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Upload className="w-4 h-4 mr-2" />
              Publicar Todos
            </Button>
          </div>

          <div className="space-y-4">
            {avances.map((avance, index) => (
              <div
                key={index}
                className="bg-black/50 p-6 rounded-xl border border-[#F4BA3E]/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-[#F4BA3E] font-semibold">{avance.date}</span>
                    </div>
                    <p className="text-gray-300">{avance.text}</p>
                  </div>
                  <Button
                    onClick={() => handleDeleteAvance(index)}
                    variant="outline"
                    size="sm"
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                {avance.images.length > 0 && (
                  <div className="flex space-x-2 overflow-x-auto">
                    {avance.images.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={`Avance ${index + 1} - ${imgIndex + 1}`}
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
