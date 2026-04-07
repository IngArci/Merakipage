import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Upload, 
  Calendar, 
  Percent, 
  Image as ImageIcon, 
  Plus, 
  Trash2, 
  Save,
  FolderOpen,
  Video,
  Youtube,
  Users,
  MapPin,
  Phone
} from 'lucide-react';
import { Button } from '../components/ui/button';

// Proyectos disponibles
const proyectos = [
  { id: 'rio-claro', name: 'Río Claro' },
  { id: 'laguna-mar', name: 'Laguna Mar' },
  { id: 'canon-arizona', name: 'Cañón de Arizona' },
  { id: 'valle-escondido', name: 'Valle Escondido' },
  { id: 'bosques-paraiso', name: 'Bosques del Paraíso' },
  { id: 'montana-dorada', name: 'Montaña Dorada' }
];

interface ProgressUpdate {
  date: string;
  text: string;
  percentage: number;
  images: string[];
}

interface VideoData {
  videoUrl: string;
  category: 'informesGestion' | 'avancesObra';
}

interface FeriaData {
  nombre: string;
  fecha: string;
  lugar: string;
  descripcion: string;
  logros: string;
  images: string[];
}

interface AsesorData {
  nombre: string;
  cargo: string;
  foto: string;
  whatsapp: string;
}

// Función para extraer el ID del video de YouTube de diferentes formatos de URL
function extractYoutubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  
  return null;
}

export default function Admin() {
  const [selectedProject, setSelectedProject] = useState('');
  const [activeTab, setActiveTab] = useState<'avances' | 'videos' | 'ferias' | 'asesores'>('avances');
  
  // Estados para avances de obra
  const [avances, setAvances] = useState<ProgressUpdate[]>([]);
  const [currentAvance, setCurrentAvance] = useState<ProgressUpdate>({
    date: '',
    text: '',
    percentage: 0,
    images: []
  });
  const [imageUrl, setImageUrl] = useState('');

  // Estados para videos
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoCategory, setVideoCategory] = useState<'informesGestion' | 'avancesObra'>('informesGestion');

  // Estados para ferias
  const [ferias, setFerias] = useState<FeriaData[]>([]);
  const [currentFeria, setCurrentFeria] = useState<FeriaData>({
    nombre: '',
    fecha: '',
    lugar: '',
    descripcion: '',
    logros: '',
    images: []
  });
  const [feriaImageUrl, setFeriaImageUrl] = useState('');

  // Estados para asesores
  const [asesores, setAsesores] = useState<AsesorData[]>([]);
  const [currentAsesor, setCurrentAsesor] = useState<AsesorData>({
    nombre: '',
    cargo: 'Agente Inmobiliario',
    foto: '',
    whatsapp: ''
  });

  // Agregar imagen al avance actual
  const handleAddImage = () => {
    if (imageUrl.trim()) {
      setCurrentAvance({
        ...currentAvance,
        images: [...currentAvance.images, imageUrl]
      });
      setImageUrl('');
    }
  };

  // Eliminar imagen del avance actual
  const handleRemoveImage = (index: number) => {
    setCurrentAvance({
      ...currentAvance,
      images: currentAvance.images.filter((_, i) => i !== index)
    });
  };

  // Guardar avance
  const handleSaveAvance = () => {
    if (currentAvance.date && currentAvance.text && currentAvance.percentage > 0) {
      setAvances([...avances, currentAvance]);
      setCurrentAvance({
        date: '',
        text: '',
        percentage: 0,
        images: []
      });
    } else {
      alert('Por favor completa todos los campos requeridos');
    }
  };

  // Eliminar avance
  const handleDeleteAvance = (index: number) => {
    setAvances(avances.filter((_, i) => i !== index));
  };

  // Agregar video
  const handleAddVideo = () => {
    if (videoUrl.trim()) {
      const videoId = extractYoutubeId(videoUrl);
      if (videoId) {
        setVideos([...videos, { videoUrl: videoId, category: videoCategory }]);
        setVideoUrl('');
      } else {
        alert('Por favor ingresa una URL válida de YouTube');
      }
    }
  };

  // Eliminar video
  const handleDeleteVideo = (index: number) => {
    setVideos(videos.filter((_, i) => i !== index));
  };

  // Agregar imagen a la feria actual
  const handleAddFeriaImage = () => {
    if (feriaImageUrl.trim()) {
      setCurrentFeria({
        ...currentFeria,
        images: [...currentFeria.images, feriaImageUrl]
      });
      setFeriaImageUrl('');
    }
  };

  // Eliminar imagen de la feria actual
  const handleRemoveFeriaImage = (index: number) => {
    setCurrentFeria({
      ...currentFeria,
      images: currentFeria.images.filter((_, i) => i !== index)
    });
  };

  // Guardar feria
  const handleSaveFeria = () => {
    if (currentFeria.nombre && currentFeria.fecha && currentFeria.lugar && currentFeria.descripcion && currentFeria.logros) {
      setFerias([...ferias, currentFeria]);
      setCurrentFeria({
        nombre: '',
        fecha: '',
        lugar: '',
        descripcion: '',
        logros: '',
        images: []
      });
    } else {
      alert('Por favor completa todos los campos requeridos');
    }
  };

  // Eliminar feria
  const handleDeleteFeria = (index: number) => {
    setFerias(ferias.filter((_, i) => i !== index));
  };

  // Guardar asesor
  const handleSaveAsesor = () => {
    if (currentAsesor.nombre && currentAsesor.cargo && currentAsesor.foto && currentAsesor.whatsapp) {
      setAsesores([...asesores, currentAsesor]);
      setCurrentAsesor({
        nombre: '',
        cargo: 'Agente Inmobiliario',
        foto: '',
        whatsapp: ''
      });
    } else {
      alert('Por favor completa todos los campos requeridos');
    }
  };

  // Eliminar asesor
  const handleDeleteAsesor = (index: number) => {
    setAsesores(asesores.filter((_, i) => i !== index));
  };

  // Publicar todos los avances
  const handlePublishAvances = () => {
    if (!selectedProject) {
      alert('Por favor selecciona un proyecto');
      return;
    }
    
    if (avances.length === 0) {
      alert('No hay avances para publicar');
      return;
    }

    console.log('Publicando avances para', selectedProject, avances);
    alert(`✅ Se han publicado ${avances.length} avances para el proyecto ${proyectos.find(p => p.id === selectedProject)?.name}`);
    
    // Limpiar después de publicar
    setAvances([]);
  };

  // Publicar todos los videos
  const handlePublishVideos = () => {
    if (!selectedProject) {
      alert('Por favor selecciona un proyecto');
      return;
    }
    
    if (videos.length === 0) {
      alert('No hay videos para publicar');
      return;
    }

    const informesGestion = videos.filter(v => v.category === 'informesGestion').map(v => v.videoUrl);
    const avancesObra = videos.filter(v => v.category === 'avancesObra').map(v => v.videoUrl);

    console.log('Publicando videos para', selectedProject, { informesGestion, avancesObra });
    alert(`✅ Se han publicado ${videos.length} videos para el proyecto ${proyectos.find(p => p.id === selectedProject)?.name}\n\nInformes de Gestión: ${informesGestion.length}\nAvances de Obra: ${avancesObra.length}`);
    
    // Limpiar después de publicar
    setVideos([]);
  };

  return (
    <div className="min-h-screen pt-20 bg-black pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl mb-4 text-white">Panel Administrativo</h1>
          <div className="h-1 w-32 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018]" />
          <p className="text-gray-300 mt-4">Gestiona los contenidos del sitio web</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex space-x-4 border-b border-[#F4BA3E]/20">
            <button
              onClick={() => setActiveTab('avances')}
              className={`px-6 py-3 text-lg font-semibold transition-all relative ${
                activeTab === 'avances'
                  ? 'text-[#F4BA3E]'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              <ImageIcon className="w-5 h-5 inline-block mr-2" />
              Avances de Obra
              {activeTab === 'avances' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 text-lg font-semibold transition-all relative ${
                activeTab === 'videos'
                  ? 'text-[#F4BA3E]'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              <Youtube className="w-5 h-5 inline-block mr-2" />
              Videos de YouTube
              {activeTab === 'videos' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('ferias')}
              className={`px-6 py-3 text-lg font-semibold transition-all relative ${
                activeTab === 'ferias'
                  ? 'text-[#F4BA3E]'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              <Users className="w-5 h-5 inline-block mr-2" />
              Ferias y Eventos
              {activeTab === 'ferias' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('asesores')}
              className={`px-6 py-3 text-lg font-semibold transition-all relative ${
                activeTab === 'asesores'
                  ? 'text-[#F4BA3E]'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              <MapPin className="w-5 h-5 inline-block mr-2" />
              Asesores
              {activeTab === 'asesores' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018]" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Selector de Proyecto - Solo para Avances y Videos */}
        {(activeTab === 'avances' || activeTab === 'videos') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-b from-[#1a1a1a] to-black p-8 rounded-2xl border border-[#F4BA3E]/30 mb-8"
          >
            <div className="flex items-center space-x-3 mb-4">
              <FolderOpen className="w-6 h-6 text-[#F4BA3E]" />
              <h2 className="text-2xl text-white">Seleccionar Proyecto</h2>
            </div>
            
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white focus:outline-none focus:border-[#F4BA3E] transition-colors"
            >
              <option value="">-- Selecciona un proyecto --</option>
              {proyectos.map((proyecto) => (
                <option key={proyecto.id} value={proyecto.id}>
                  {proyecto.name}
                </option>
              ))}
            </select>
          </motion.div>
        )}

        {/* Contenido según tab activo */}
        {activeTab === 'avances' && !selectedProject && (
          <div className="text-center py-16">
            <FolderOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">Selecciona un proyecto para gestionar sus avances de obra</p>
          </div>
        )}

        {activeTab === 'videos' && !selectedProject && (
          <div className="text-center py-16">
            <FolderOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">Selecciona un proyecto para gestionar sus videos</p>
          </div>
        )}

        {/* Avances de Obra */}
        {activeTab === 'avances' && selectedProject && (
          <>
            {/* Formulario de Nuevo Avance */}
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
                {/* Fecha */}
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

                {/* Porcentaje */}
                <div>
                  <label className="flex items-center space-x-2 text-gray-300 mb-2">
                    <Percent className="w-4 h-4 text-[#F4BA3E]" />
                    <span>Porcentaje Completado * ({currentAvance.percentage}%)</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={currentAvance.percentage}
                    onChange={(e) => setCurrentAvance({ ...currentAvance, percentage: parseInt(e.target.value) })}
                    className="w-full h-3 bg-black/50 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-[#947018] [&::-webkit-slider-thumb]:to-[#F4BA3E] [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                </div>

                {/* Texto Descriptivo */}
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

                {/* Imágenes */}
                <div>
                  <label className="flex items-center space-x-2 text-gray-300 mb-2">
                    <ImageIcon className="w-4 h-4 text-[#F4BA3E]" />
                    <span>Imágenes del Avance</span>
                  </label>
                  
                  <div className="flex space-x-2 mb-4">
                    <input
                      type="text"
                      placeholder="URL de la imagen"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleAddImage()}
                      className="flex-1 px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#F4BA3E] transition-colors"
                    />
                    <Button
                      onClick={handleAddImage}
                      className="bg-gradient-to-r from-[#947018] to-[#F4BA3E] hover:from-[#FFF18F] hover:to-[#F4BA3E] text-black"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Preview de Imágenes */}
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

                {/* Botón Guardar Avance */}
                <Button
                  onClick={handleSaveAvance}
                  className="w-full bg-gradient-to-r from-[#947018] to-[#F4BA3E] hover:from-[#FFF18F] hover:to-[#F4BA3E] text-black text-lg py-6"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Guardar Avance
                </Button>
              </div>
            </motion.div>

            {/* Lista de Avances Guardados */}
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
                            <span className="text-gray-400">•</span>
                            <span className="text-[#F4BA3E] font-semibold">{avance.percentage}%</span>
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
        )}

        {/* Videos de YouTube */}
        {activeTab === 'videos' && selectedProject && (
          <>
            {/* Formulario de Nuevo Video */}
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
                {/* Categoría */}
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

                {/* URL del Video */}
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

            {/* Lista de Videos Guardados */}
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

                {/* Videos por categoría */}
                <div className="space-y-8">
                  {/* Informes de Gestión */}
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

                  {/* Avances de Obra */}
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
        )}

        {/* Ferias y Eventos */}
        {activeTab === 'ferias' && (
          <>
            {/* Formulario de Nueva Feria */}
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
                {/* Nombre */}
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

                {/* Fecha */}
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

                {/* Lugar */}
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

                {/* Descripción */}
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

                {/* Logros */}
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

                {/* Imágenes */}
                <div>
                  <label className="flex items-center space-x-2 text-gray-300 mb-2">
                    <ImageIcon className="w-4 h-4 text-[#F4BA3E]" />
                    <span>Imágenes de la Feria o Evento</span>
                  </label>
                  
                  <div className="flex space-x-2 mb-4">
                    <input
                      type="text"
                      placeholder="URL de la imagen"
                      value={feriaImageUrl}
                      onChange={(e) => setFeriaImageUrl(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleAddFeriaImage()}
                      className="flex-1 px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#F4BA3E] transition-colors"
                    />
                    <Button
                      onClick={handleAddFeriaImage}
                      className="bg-gradient-to-r from-[#947018] to-[#F4BA3E] hover:from-[#FFF18F] hover:to-[#F4BA3E] text-black"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Preview de Imágenes */}
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

                {/* Botón Guardar Feria */}
                <Button
                  onClick={handleSaveFeria}
                  className="w-full bg-gradient-to-r from-[#947018] to-[#F4BA3E] hover:from-[#FFF18F] hover:to-[#F4BA3E] text-black text-lg py-6"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Guardar Feria
                </Button>
              </div>
            </motion.div>

            {/* Lista de Ferias Guardadas */}
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
        )}

        {/* Asesores */}
        {activeTab === 'asesores' && (
          <>
            {/* Formulario de Nuevo Asesor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-b from-[#1a1a1a] to-black p-8 rounded-2xl border border-[#F4BA3E]/30 mb-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-6 h-6 text-[#F4BA3E]" />
                <h2 className="text-2xl text-white">Nuevo Asesor</h2>
              </div>

              <div className="space-y-6">
                {/* Nombre */}
                <div>
                  <label className="text-gray-300 mb-2 block">Nombre del Asesor *</label>
                  <input
                    type="text"
                    placeholder="Ej: Juan Pérez"
                    value={currentAsesor.nombre}
                    onChange={(e) => setCurrentAsesor({ ...currentAsesor, nombre: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#F4BA3E] transition-colors"
                  />
                </div>

                {/* Cargo */}
                <div>
                  <label className="text-gray-300 mb-2 block">Cargo del Asesor *</label>
                  <input
                    type="text"
                    placeholder="Ej: Agente Inmobiliario"
                    value={currentAsesor.cargo}
                    onChange={(e) => setCurrentAsesor({ ...currentAsesor, cargo: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#F4BA3E] transition-colors"
                  />
                </div>

                {/* Foto */}
                <div>
                  <label className="text-gray-300 mb-2 block">Foto del Asesor *</label>
                  <input
                    type="text"
                    placeholder="URL de la foto"
                    value={currentAsesor.foto}
                    onChange={(e) => setCurrentAsesor({ ...currentAsesor, foto: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#F4BA3E] transition-colors"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="text-gray-300 mb-2 block">WhatsApp del Asesor *</label>
                  <input
                    type="text"
                    placeholder="Ej: +52 123 456 7890"
                    value={currentAsesor.whatsapp}
                    onChange={(e) => setCurrentAsesor({ ...currentAsesor, whatsapp: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#F4BA3E] transition-colors"
                  />
                </div>

                {/* Botón Guardar Asesor */}
                <Button
                  onClick={handleSaveAsesor}
                  className="w-full bg-gradient-to-r from-[#947018] to-[#F4BA3E] hover:from-[#FFF18F] hover:to-[#F4BA3E] text-black text-lg py-6"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Guardar Asesor
                </Button>
              </div>
            </motion.div>

            {/* Lista de Asesores Guardados */}
            {asesores.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-b from-[#1a1a1a] to-black p-8 rounded-2xl border border-[#F4BA3E]/30 mb-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl text-white">Asesores para Publicar ({asesores.length})</h2>
                  <Button
                    onClick={() => alert('Publicar Asesores')}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Publicar Todos
                  </Button>
                </div>

                <div className="space-y-4">
                  {asesores.map((asesor, index) => (
                    <div
                      key={index}
                      className="bg-black/50 p-6 rounded-xl border border-[#F4BA3E]/20"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-2">
                            <span className="text-[#F4BA3E] font-semibold">{asesor.nombre}</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-[#F4BA3E] font-semibold">{asesor.cargo}</span>
                          </div>
                          <p className="text-gray-300">{asesor.foto}</p>
                          <p className="text-gray-300">{asesor.whatsapp}</p>
                        </div>
                        <Button
                          onClick={() => handleDeleteAsesor(index)}
                          variant="outline"
                          size="sm"
                          className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      {asesor.foto && (
                        <div className="flex space-x-2 overflow-x-auto">
                          <img
                            src={asesor.foto}
                            alt={`Asesor ${index + 1}`}
                            className="w-24 h-24 object-cover rounded-lg border border-[#F4BA3E]/30"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
}