import { motion } from 'motion/react';
import { 
  Image as ImageIcon, 
  Trash2, 
  Save,
  Upload,
  Loader2
} from 'lucide-react';
import { Button } from '../../../components/ui/button';

interface AdminGaleriaProps {
  images: string[];
  isUploading: boolean;
  onImageUpload: (files: FileList) => Promise<void>;
  handleRemoveImage: (index: number) => void;
  handleSaveGallery: () => void;
}

export function AdminGaleria({
  images,
  isUploading,
  onImageUpload,
  handleRemoveImage,
  handleSaveGallery
}: AdminGaleriaProps) {
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      await onImageUpload(files);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-gradient-to-b from-[#1a1a1a] to-black p-8 rounded-2xl border border-[#F4BA3E]/30 mb-8"
    >
      <div className="flex items-center space-x-3 mb-6">
        <ImageIcon className="w-6 h-6 text-[#F4BA3E]" />
        <h2 className="text-2xl text-white">Gestión de Galería Final</h2>
      </div>

      <div className="space-y-6">
        <p className="text-gray-400 font-light italic">
          "Sube aquí las mejores fotografías del proyecto terminado. Estas imágenes aparecerán en el slider principal de la página de detalles."
        </p>

        <div>
          <label className="flex items-center space-x-2 text-gray-300 mb-4">
            <Upload className="w-4 h-4 text-[#F4BA3E]" />
            <span>Cargar Fotografías</span>
          </label>
          
          <div className="flex space-x-2 mb-8">
            <div className="flex-1 relative">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                disabled={isUploading}
                className="hidden"
                id="gallery-file-upload"
              />
              <label
                htmlFor="gallery-file-upload"
                className={`flex items-center justify-center w-full px-6 py-8 bg-black/50 border-2 border-dashed border-[#F4BA3E]/30 rounded-2xl text-gray-400 cursor-pointer hover:border-[#F4BA3E] hover:bg-[#F4BA3E]/5 transition-all ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isUploading ? (
                  <>
                    <Loader2 className="w-6 h-6 mr-3 animate-spin text-[#F4BA3E]" />
                    <span className="text-lg">Subiendo fotografías...</span>
                  </>
                ) : (
                  <div className="text-center">
                    <ImageIcon className="w-10 h-10 mx-auto mb-3 text-[#F4BA3E]/50" />
                    <span className="text-lg block mb-1 text-white/80">Arrastra o selecciona imágenes</span>
                    <span className="text-sm text-gray-500">Puedes seleccionar múltiples archivos a la vez</span>
                  </div>
                )}
              </label>
            </div>
          </div>

          {images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
              {images.map((img, index) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  key={index} 
                  className="relative group aspect-square"
                >
                  <img
                    src={img}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl border-2 border-[#F4BA3E]/20 group-hover:border-[#F4BA3E]/50 transition-all"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                    <button
                      onClick={() => handleRemoveImage(index)}
                      className="w-10 h-10 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                    >
                      <Trash2 className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <Button
          onClick={handleSaveGallery}
          disabled={images.length === 0 || isUploading}
          className="w-full bg-[#F4BA3E] hover:bg-[#dec180] text-black text-lg py-6 font-bold shadow-[0_0_20px_rgba(244,186,62,0.2)]"
        >
          <Save className="w-5 h-5 mr-2" />
          Guardar Imágenes en la Galería Pública
        </Button>
      </div>
    </motion.div>
  );
}
