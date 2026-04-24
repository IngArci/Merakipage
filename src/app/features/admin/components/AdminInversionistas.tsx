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
import { useFirestoreCollection } from '@/hooks/useFirestoreCollection';
import type { InversionistaVideo } from '../../inversionistas/components/InversionistasComponents';
import type { InversionistaPhotoData, InversionistaVideoData } from '../types/admin.types';

interface AdminInversionistasProps {
  // Testimonios Videos
  inversionistaVideos: InversionistaVideoData[];
  invVideoUrl: string;
  setInvVideoUrl: (url: string) => void;
  invVideoTitle: string;
  setInvVideoTitle: (title: string) => void;
  invVideoOrder: string;
  setInvVideoOrder: (order: string) => void;
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

  // Firestore Management
  handleUpdateFirestoreDoc: (collectionName: string, docId: string, data: any) => Promise<void>;
  handleDeleteFirestoreDoc: (collectionName: string, docId: string) => Promise<void>;
}

export function AdminInversionistas({
  inversionistaVideos,
  invVideoUrl,
  setInvVideoUrl,
  invVideoTitle,
  setInvVideoTitle,
  invVideoOrder,
  setInvVideoOrder,
  handleAddInversionistaVideo,
  handleDeleteInversionistaVideo,
  handlePublishInversionistaVideos,
  currentInvPhoto,
  setCurrentInvPhoto,
  isUploading,
  onPhotoUpload,
  handleSaveInversionistaPhoto,
  handleUpdateFirestoreDoc,
  handleDeleteFirestoreDoc
}: AdminInversionistasProps) {
  const { data: existingVideos, loading: loadingVideos } = useFirestoreCollection<InversionistaVideo>('inversionistas_testimonios');
  const { data: existingPhotos, loading: loadingPhotos } = useFirestoreCollection<InversionistaPhotoData & { id: string }>('inversionistas_galeria');

  const [editingVideoOrder, setEditingVideoOrder] = React.useState<Record<string, string>>({});
  const [editingPhotoOrder, setEditingPhotoOrder] = React.useState<Record<string, string>>({});

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-400 mb-2 text-sm uppercase tracking-wider">Título del Testimonio</label>
              <input
                type="text"
                placeholder="Ej: Familia González"
                value={invVideoTitle}
                onChange={(e) => setInvVideoTitle(e.target.value)}
                className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white focus:outline-none focus:border-[#F4BA3E] transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2 text-sm uppercase tracking-wider">Orden (1=Primero)</label>
              <input
                type="number"
                value={invVideoOrder}
                onChange={(e) => setInvVideoOrder(e.target.value)}
                className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white focus:outline-none focus:border-[#F4BA3E] transition-colors"
                min="1"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2 text-sm uppercase tracking-wider">URL de YouTube / TikTok</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Pegar link aquí..."
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
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-white truncate flex-1 mr-2">{video.title}</p>
                      <span className="bg-[#F4BA3E]/20 text-[#F4BA3E] text-[12px] px-2 py-0.5 rounded border border-[#F4BA3E]/30">
                        Orden: {video.order}
                      </span>
                    </div>
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

        <hr className="my-10 border-[#F4BA3E]/10" />

        {/* GESTIÓN DE VIDEOS EXISTENTES */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#F4BA3E]/10 pb-4">
            <h3 className="text-xl text-white font-bold flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse" />
              Administrar Videos Publicados
            </h3>
          </div>

          {!loadingVideos && existingVideos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...existingVideos].sort((a, b) => (a.order ?? 999) - (b.order ?? 999)).map((video) => {
                const isVertical = video.type === 'tiktok' || video.type === 'shorts' || (video.videoId.length >= 15 && /^\d+$/.test(video.videoId));
                const isTikTok = video.type === 'tiktok' || (video.videoId.length >= 15 && /^\d+$/.test(video.videoId));
                
                return (
                  <div key={video.id} className="bg-black/60 rounded-xl border border-[#F4BA3E]/20 overflow-hidden flex flex-col">
                    <div className="aspect-video bg-gray-900 border-b border-[#F4BA3E]/10 relative">
                      <iframe
                        src={isTikTok 
                          ? `https://www.tiktok.com/embed/v2/${video.videoId}?lang=es-ES`
                          : `https://www.youtube.com/embed/${video.videoId}?color=white&controls=0&modestbranding=1`
                        }
                        className={`w-full h-full pointer-events-none opacity-60 ${isVertical ? 'scale-110 object-cover' : ''}`}
                        title={video.title}
                      />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Video className="w-10 h-10 text-white/20" />
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    <p className="text-white text-sm font-medium line-clamp-1">{video.title}</p>
                    
                    <div className="flex items-end gap-3">
                      <div className="flex-1">
                        <label className="text-[12px] uppercase tracking-widest text-gray-500 mb-1 block font-bold">Orden</label>
                        <input
                          type="number"
                          value={editingVideoOrder[video.id] ?? (video.order || '')}
                          onChange={(e) => setEditingVideoOrder(prev => ({ ...prev, [video.id]: e.target.value }))}
                          className="w-full bg-black/40 border border-[#F4BA3E]/30 rounded-lg px-3 py-2 text-white text-sm focus:border-[#F4BA3E] outline-none"
                        />
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleUpdateFirestoreDoc('inversionistas_testimonios', video.id, { 
                            order: parseInt(editingVideoOrder[video.id] || String(video.order || 999)) 
                          })}
                          className="p-2.5 bg-[#F4BA3E] text-black rounded-lg hover:bg-yellow-500 transition-colors"
                          title="Actualizar Orden"
                        >
                          <Save className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteFirestoreDoc('inversionistas_testimonios', video.id)}
                          className="p-2.5 bg-red-600/20 text-red-500 border border-red-600/30 rounded-lg hover:bg-red-600 hover:text-white transition-all"
                          title="Eliminar Permanente"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8 bg-black/20 rounded-xl border border-dashed border-[#F4BA3E]/10 italic">
              No hay videos publicados todavía.
            </p>
          )}
        </div>
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

          <div className="bg-black/50 rounded-2xl border border-[#F4BA3E]/10 p-6 flex flex-col h-full min-h-[500px]">
            <h3 className="text-gray-400 mb-6 text-sm uppercase tracking-wider flex items-center shrink-0">
              <span className="w-2 h-2 bg-[#F4BA3E] rounded-full mr-3" />
              Administrar Galería Ya Publicada
            </h3>
            
            <div className="grid grid-cols-2 gap-4 overflow-y-auto pr-2 custom-scrollbar flex-grow">
              {!loadingPhotos && existingPhotos.length > 0 ? (
                existingPhotos.map((photo) => (
                  <div key={photo.id} className="relative aspect-square rounded-xl overflow-hidden group border border-white/5 bg-gray-900">
                    <img src={photo.imageUrl} alt={photo.caption} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-100 flex flex-col justify-end p-2">
                      <p className="text-[12px] text-white line-clamp-2 mb-2 font-medium leading-tight">{photo.caption}</p>
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleDeleteFirestoreDoc('inversionistas_galeria', photo.id)}
                          className="bg-red-600/80 hover:bg-red-600 text-white p-1.5 rounded-lg flex-1 flex justify-center transition-colors"
                          title="Eliminar de Galería"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-10 text-gray-600 italic">
                  No hay fotos en la galería todavía.
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
