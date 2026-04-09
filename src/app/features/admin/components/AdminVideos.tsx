import { motion } from 'motion/react';
import { 
  Plus, 
  Trash2, 
  Upload,
  Video,
  Youtube
} from 'lucide-react';
import { Button } from '../../../components/ui/button';

export interface VideoData {
  videoUrl: string;
  category: 'informesGestion' | 'avancesObra';
}

interface AdminVideosProps {
  videos: VideoData[];
  videoUrl: string;
  setVideoUrl: (url: string) => void;
  videoCategory: 'informesGestion' | 'avancesObra';
  setVideoCategory: (category: 'informesGestion' | 'avancesObra') => void;
  handleAddVideo: () => void;
  handleDeleteVideo: (index: number) => void;
  handlePublishVideos: () => void;
}

export function AdminVideos({
  videos,
  videoUrl,
  setVideoUrl,
  videoCategory,
  setVideoCategory,
  handleAddVideo,
  handleDeleteVideo,
  handlePublishVideos
}: AdminVideosProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-b from-[#1a1a1a] to-black p-8 rounded-2xl border border-[#F4BA3E]/30 mb-8"
      >
        <div className="flex items-center space-x-3 mb-6">
          <Youtube className="w-6 h-6 text-[#F4BA3E]" />
          <h2 className="text-2xl text-white">Agregar Video de YouTube</h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="flex items-center space-x-2 text-gray-300 mb-2">
              <Video className="w-4 h-4 text-[#F4BA3E]" />
              <span>Categoría del Video *</span>
            </label>
            <select
              value={videoCategory}
              onChange={(e) => setVideoCategory(e.target.value as 'informesGestion' | 'avancesObra')}
              className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white focus:outline-none focus:border-[#F4BA3E] transition-colors"
            >
              <option value="informesGestion">Informes de Gestión</option>
              <option value="avancesObra">Avances de Obra</option>
            </select>
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-300 mb-2">
              <Youtube className="w-4 h-4 text-[#F4BA3E]" />
              <span>URL del Video de YouTube *</span>
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="https://www.youtube.com/watch?v=... o https://youtu.be/..."
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddVideo()}
                className="flex-1 px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#F4BA3E] transition-colors"
              />
              <Button
                onClick={handleAddVideo}
                className="bg-gradient-to-r from-[#947018] to-[#F4BA3E] hover:from-[#FFF18F] hover:to-[#F4BA3E] text-black"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Formatos válidos: youtube.com/watch?v=ID, youtu.be/ID, youtube.com/embed/ID o solo el ID
            </p>
          </div>
        </div>
      </motion.div>

      {videos.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-b from-[#1a1a1a] to-black p-8 rounded-2xl border border-[#F4BA3E]/30 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-white">Videos para Publicar ({videos.length})</h2>
            <Button
              onClick={handlePublishVideos}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Upload className="w-4 h-4 mr-2" />
              Publicar Todos
            </Button>
          </div>

          <div className="space-y-8">
            {videos.filter(v => v.category === 'informesGestion').length > 0 && (
              <div>
                <h3 className="text-xl text-[#F4BA3E] mb-4">Informes de Gestión ({videos.filter(v => v.category === 'informesGestion').length})</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {videos.map((video, index) => 
                    video.category === 'informesGestion' && (
                      <div key={index} className="relative group">
                        <div className="aspect-video rounded-xl overflow-hidden border border-[#F4BA3E]/20">
                          <iframe
                            src={`https://www.youtube.com/embed/${video.videoUrl}`}
                            title={`Video ${index + 1}`}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <button
                          onClick={() => handleDeleteVideo(index)}
                          className="absolute top-2 right-2 w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        >
                          <Trash2 className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {videos.filter(v => v.category === 'avancesObra').length > 0 && (
              <div>
                <h3 className="text-xl text-[#F4BA3E] mb-4">Avances de Obra ({videos.filter(v => v.category === 'avancesObra').length})</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {videos.map((video, index) => 
                    video.category === 'avancesObra' && (
                      <div key={index} className="relative group">
                        <div className="aspect-video rounded-xl overflow-hidden border border-[#F4BA3E]/20">
                          <iframe
                            src={`https://www.youtube.com/embed/${video.videoUrl}`}
                            title={`Video ${index + 1}`}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <button
                          onClick={() => handleDeleteVideo(index)}
                          className="absolute top-2 right-2 w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        >
                          <Trash2 className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </>
  );
}
