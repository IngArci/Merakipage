import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ImageIcon, 
  Youtube,
  Users,
  MapPin,
  FolderOpen
} from 'lucide-react';

// Feature Components
import { ProjectSelector } from '../features/admin/components/ProjectSelector';
import { AdminAvances, type ProgressUpdate } from '../features/admin/components/AdminAvances';
import { AdminVideos, type VideoData } from '../features/admin/components/AdminVideos';
import { AdminFerias, type FeriaData } from '../features/admin/components/AdminFerias';
import { AdminAsesores, type AsesorData } from '../features/admin/components/AdminAsesores';

// Firebase imports
import { db, storage } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Proyectos disponibles
const proyectos = [
  { id: 'rio-claro', name: 'Río Claro' },
  { id: 'laguna-mar', name: 'Laguna Mar' },
  { id: 'cañon-arizona', name: 'Cañón de Arizona' },
  { id: 'valle-escondido', name: 'Valle Escondido' },
  { id: 'bosques-paraiso', name: 'Bosques del Paraíso' },
  { id: 'montana-dorada', name: 'Montaña Dorada' }
];

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

// Función para subir imágenes a Firebase Storage
async function uploadImage(file: File, path: string): Promise<string> {
  const fileRef = ref(storage, `${path}/${Date.now()}_${file.name}`);
  const snapshot = await uploadBytes(fileRef, file);
  return await getDownloadURL(snapshot.ref);
}

export default function Admin() {
  const [selectedProject, setSelectedProject] = useState('');
  const [activeTab, setActiveTab ] = useState<'avances' | 'videos' | 'ferias' | 'asesores'>('avances');
  
  // Estados para avances de obra
  const [avances, setAvances] = useState<ProgressUpdate[]>([]);
  const [currentAvance, setCurrentAvance] = useState<ProgressUpdate>({
    date: '',
    text: '',
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
  const [isUploading, setIsUploading] = useState(false);

  // Handlers para avances
  const handleAvanceUpload = async (files: FileList) => {
    if (!selectedProject) {
      alert('Por favor selecciona un proyecto primero');
      return;
    }
    setIsUploading(true);
    try {
      const uploadPromises = Array.from(files).map(file => 
        uploadImage(file, `avances/${selectedProject}`)
      );
      const urls = await Promise.all(uploadPromises);
      
      setCurrentAvance(prev => ({
        ...prev,
        images: [...prev.images, ...urls]
      }));
    } catch (error) {
      console.error('Error al subir imágenes de avance:', error);
      alert('Error al subir una o más imágenes.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveImage = (index: number) => {
    setCurrentAvance({
      ...currentAvance,
      images: currentAvance.images.filter((_, i) => i !== index)
    });
  };

  const handleSaveAvance = () => {
    if (currentAvance.date && currentAvance.text) {
      setAvances([...avances, currentAvance]);
      setCurrentAvance({
        date: '',
        text: '',
        images: []
      });
    } else {
      alert('Por favor completa todos los campos requeridos');
    }
  };

  const handleDeleteAvance = (index: number) => {
    setAvances(avances.filter((_, i) => i !== index));
  };

  const handlePublishAvances = async () => {
    if (!selectedProject) {
      alert('Por favor selecciona un proyecto');
      return;
    }
    
    if (avances.length === 0) {
      alert('No hay avances para publicar');
      return;
    }

    try {
      const avancesRef = collection(db, 'avances_obra');
      for (const avance of avances) {
        await addDoc(avancesRef, {
          ...avance,
          projectSlug: selectedProject,
          createdAt: serverTimestamp()
        });
      }
      
      alert(`✅ Se han publicado ${avances.length} avances para el proyecto ${proyectos.find(p => p.id === selectedProject)?.name}`);
      setAvances([]);
    } catch (error) {
      console.error('Error al publicar avances:', error);
      alert('Hubo un error al publicar los avances. Por favor intenta de nuevo.');
    }
  };

  // Handlers para videos
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

  const handleDeleteVideo = (index: number) => {
    setVideos(videos.filter((_, i) => i !== index));
  };

  const handlePublishVideos = async () => {
    if (!selectedProject) {
      alert('Por favor selecciona un proyecto');
      return;
    }
    
    if (videos.length === 0) {
      alert('No hay videos para publicar');
      return;
    }

    try {
      const videosRef = collection(db, 'videos_youtube');
      for (const video of videos) {
        await addDoc(videosRef, {
          ...video,
          videoId: video.videoUrl, // En Admin lo llamamos videoUrl pero es el ID
          projectSlug: selectedProject,
          createdAt: serverTimestamp()
        });
      }

      alert(`✅ Se han publicado ${videos.length} videos para el proyecto ${proyectos.find(p => p.id === selectedProject)?.name}`);
      setVideos([]);
    } catch (error) {
      console.error('Error al publicar videos:', error);
      alert('Hubo un error al publicar los videos.');
    }
  };

  const handleFeriaUpload = async (file: File) => {
    setIsUploading(true);
    try {
      const url = await uploadImage(file, 'ferias');
      setCurrentFeria({
        ...currentFeria,
        images: [...currentFeria.images, url]
      });
    } catch (error) {
      console.error('Error al subir imagen de feria:', error);
      alert('Error al subir la imagen.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveFeriaImage = (index: number) => {
    setCurrentFeria({
      ...currentFeria,
      images: currentFeria.images.filter((_, i) => i !== index)
    });
  };

  const handleSaveFeria = async () => {
    if (currentFeria.nombre && currentFeria.fecha && currentFeria.lugar && currentFeria.descripcion && currentFeria.logros) {
      try {
        const feriasRef = collection(db, 'ferias_eventos');
        await addDoc(feriasRef, {
          ...currentFeria,
          createdAt: serverTimestamp()
        });
        
        alert('✅ Feria publicada con éxito');
        setCurrentFeria({
          nombre: '',
          fecha: '',
          lugar: '',
          descripcion: '',
          logros: '',
          images: []
        });
      } catch (error) {
        console.error('Error al guardar feria:', error);
        alert('Error al guardar la feria.');
      }
    } else {
      alert('Por favor completa todos los campos requeridos');
    }
  };

  const handleDeleteFeria = (index: number) => {
    setFerias(ferias.filter((_, i) => i !== index));
  };

  // Handlers para asesores
  const handleAsesorUpload = async (file: File) => {
    setIsUploading(true);
    try {
      const url = await uploadImage(file, 'asesores');
      setCurrentAsesor({
        ...currentAsesor,
        foto: url
      });
    } catch (error) {
      console.error('Error al subir foto de asesor:', error);
      alert('Error al subir la foto.');
    } finally {
      setIsUploading(false);
    }
  };
  const handleSaveAsesor = async () => {
    if (currentAsesor.nombre && currentAsesor.cargo && currentAsesor.foto && currentAsesor.whatsapp) {
      try {
        const asesoresRef = collection(db, 'asesores');
        await addDoc(asesoresRef, {
          ...currentAsesor,
          createdAt: serverTimestamp()
        });
        
        alert('✅ Asesor guardado con éxito');
        setCurrentAsesor({
          nombre: '',
          cargo: 'Agente Inmobiliario',
          foto: '',
          whatsapp: ''
        });
      } catch (error) {
        console.error('Error al guardar asesor:', error);
        alert('Error al guardar el asesor.');
      }
    } else {
      alert('Por favor completa todos los campos requeridos');
    }
  };

  const handleDeleteAsesor = (index: number) => {
    setAsesores(asesores.filter((_, i) => i !== index));
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

        {/* Selector de Proyecto */}
        {(activeTab === 'avances' || activeTab === 'videos') && (
          <ProjectSelector 
            proyectos={proyectos}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        )}

        {/* Mensajes de feedback cuando no hay proyecto seleccionado */}
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

        {/* Contenido según tab activo */}
        {activeTab === 'avances' && selectedProject && (
          <AdminAvances 
            avances={avances}
            currentAvance={currentAvance}
            setCurrentAvance={setCurrentAvance}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            isUploading={isUploading}
            onImageUpload={handleAvanceUpload}
            handleRemoveImage={handleRemoveImage}
            handleSaveAvance={handleSaveAvance}
            handleDeleteAvance={handleDeleteAvance}
            handlePublishAvances={handlePublishAvances}
          />
        )}

        {activeTab === 'videos' && selectedProject && (
          <AdminVideos 
            videos={videos}
            videoUrl={videoUrl}
            setVideoUrl={setVideoUrl}
            videoCategory={videoCategory}
            setVideoCategory={setVideoCategory}
            handleAddVideo={handleAddVideo}
            handleDeleteVideo={handleDeleteVideo}
            handlePublishVideos={handlePublishVideos}
          />
        )}

        {activeTab === 'ferias' && (
          <AdminFerias 
            ferias={ferias}
            currentFeria={currentFeria}
            setCurrentFeria={setCurrentFeria}
            isUploading={isUploading}
            onImageUpload={handleFeriaUpload}
            handleRemoveFeriaImage={handleRemoveFeriaImage}
            handleSaveFeria={handleSaveFeria}
            handleDeleteFeria={handleDeleteFeria}
          />
        )}

        {activeTab === 'asesores' && (
          <AdminAsesores 
            asesores={asesores}
            currentAsesor={currentAsesor}
            setCurrentAsesor={setCurrentAsesor}
            isUploading={isUploading}
            onImageUpload={handleAsesorUpload}
            handleSaveAsesor={handleSaveAsesor}
            handleDeleteAsesor={handleDeleteAsesor}
          />
        )}
      </div>
    </div>
  );
}
