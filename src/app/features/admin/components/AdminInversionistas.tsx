import React from 'react';
import { motion } from 'motion/react';
import { 
  Plus, 
  Trash2, 
  Upload,
  Video,
  Youtube,
  Image as ImageIcon,
  Save,
  Loader2,
  Quote
} from 'lucide-react';
import { Button } from '../../../components/ui/button';
import type { InversionistaVideoData, InversionistaPhotoData } from '../types/admin.types';

interface AdminInversionistasProps {
  // Testimonios Videos
  inversionistaVideos: InversionistaVideoData[];
  invVideoUrl: string;
  setInvVideoUrl: (url: string) => void;
  invVideoTitle: string;
  setInvVideoTitle: (title: string) => void;
  handleAddInversionistaVideo: () => void;
  handleDeleteInversionistaVideo: (index: number) => void;
  handlePublishInversionistaVideos: () => void;

  // Momentos Memorables Photos
  currentInvPhoto: InversionistaPhotoData;
  setCurrentInvPhoto: React.Dispatch<React.SetStateAction<InversionistaPhotoData>>;
  isUploading: boolean;
  onPhotoUpload: (file: File) => Promise<void>;
  handleSaveInversionistaPhoto: () => void;
  handleDeleteInversionistaPhoto: (index: number) => void;
}

export function AdminInversionistas({
  inversionistaVideos,
  invVideoUrl,
  setInvVideoUrl,
  invVideoTitle,
  setInvVideoTitle,
  handleAddInversionistaVideo,
  handleDeleteInversionistaVideo,
  handlePublishInversionistaVideos,
  currentInvPhoto,
  setCurrentInvPhoto,
  isUploading,
  onPhotoUpload,
  handleSaveInversionistaPhoto,
}: AdminInversionistasProps) {

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await onPhotoUpload(file);
    }
  };

  return (
    <div className="space-y-12">
      {/* SECCIÓN VIDEOS TESTIMONIOS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-b from-[#1a1a1a] to-black p-8 rounded-2xl border border-[#F4BA3E]/30"
      >
        <div className="flex items-center space-x-3 mb-6">
          <Youtube className="w-6 h-6 text-[#F4BA3E]" />
          <h2 className="text-2xl text-white font-bold">Videos de Testimonios</h2>
        </div>

        <div className="space-y-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400 mb-2 text-sm uppercase tracking-wider">Título del Testimonio</label>
              <input
                type="text"
                placeholder="Ej: Familia González - Entrega Río Claro"
                value={invVideoTitle}
                onChange={(e) => setInvVideoTitle(e.target.value)}
                className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white focus:outline-none focus:border-[#F4BA3E] transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2 text-sm uppercase tracking-wider">URL de YouTube</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={invVideoUrl}
                  onChange={(e) => setInvVideoUrl(e.target.value)}
                  className="flex-1 px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white focus:outline-none focus:border-[#F4BA3E] transition-colors"
                />
                <Button
                  onClick={handleAddInversionistaVideo}
                  className="bg-[#F4BA3E] hover:bg-[#dec180] text-black"
                >
                  <Plus className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {inversionistaVideos.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4 border-b border-[#F4BA3E]/10 pb-2">
              <h3 className="text-lg text-[#F4BA3E]">Lista de videos para publicar ({inversionistaVideos.length})</h3>
              <Button onClick={handlePublishInversionistaVideos} className="bg-green-600 hover:bg-green-700 text-white">
                <Upload className="w-4 h-4 mr-2" /> Publicar Todos
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inversionistaVideos.map((video, index) => (
                <div key={index} className="relative group rounded-xl overflow-hidden border border-[#F4BA3E]/20 bg-black/40">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm text-white truncate">{video.title}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteInversionistaVideo(index)}
                    className="absolute top-2 right-2 p-2 bg-red-600 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* SECCIÓN MOMENTOS MEMORABLES */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-b from-[#1a1a1a] to-black p-8 rounded-2xl border border-[#F4BA3E]/30"
      >
        <div className="flex items-center space-x-3 mb-6">
          <ImageIcon className="w-6 h-6 text-[#F4BA3E]" />
          <h2 className="text-2xl text-white font-bold">Momentos Memorables (Fotos)</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-gray-400 mb-2 text-sm uppercase tracking-wider">Cargar Fotografía</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                disabled={isUploading}
                id="inv-photo-upload"
                className="hidden"
              />
              <label
                htmlFor="inv-photo-upload"
                className={`flex flex-col items-center justify-center p-8 border-2 border-dashed border-[#F4BA3E]/30 rounded-2xl cursor-pointer hover:bg-[#F4BA3E]/5 transition-all ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isUploading ? (
                  <Loader2 className="w-10 h-10 animate-spin text-[#F4BA3E]" />
                ) : (
                  <>
                    <Upload className="w-10 h-10 text-[#F4BA3E]/50 mb-2" />
                    <span className="text-gray-300">Click para subir foto</span>
                  </>
                )}
              </label>
            </div>

            <div>
              <label className="block text-gray-400 mb-2 text-sm uppercase tracking-wider">Descripción / Pie de foto</label>
              <textarea
                placeholder="Ej: Inauguración Club Campestre - Familias Meraki"
                value={currentInvPhoto.caption}
                onChange={(e) => setCurrentInvPhoto(prev => ({ ...prev, caption: e.target.value }))}
                className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white focus:outline-none focus:border-[#F4BA3E] transition-colors h-24 resize-none"
              />
            </div>

            <Button
              onClick={handleSaveInversionistaPhoto}
              disabled={isUploading || !currentInvPhoto.imageUrl}
              className="w-full bg-[#F4BA3E] hover:bg-[#dec180] text-black font-bold h-12"
            >
              <Save className="w-5 h-5 mr-2" /> Guardar Foto en Galería
            </Button>
          </div>

          <div className="bg-black/50 rounded-2xl border border-[#F4BA3E]/10 p-6">
            <h3 className="text-gray-400 mb-4 text-sm uppercase tracking-wider">Vista Previa</h3>
            {currentInvPhoto.imageUrl ? (
              <div className="space-y-4">
                <div className="aspect-video rounded-xl overflow-hidden border border-[#F4BA3E]/30">
                  <img src={currentInvPhoto.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                </div>
                <p className="text-[#F4BA3E] text-center italic">"{currentInvPhoto.caption || 'Sin descripción'}"</p>
              </div>
            ) : (
              <div className="h-48 flex items-center justify-center border-2 border-dashed border-gray-800 rounded-xl">
                <p className="text-gray-600">Sube una imagen para ver la vista previa</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
