import { useState } from 'react';
import { db } from '../../../../lib/firebase';
import { collection, addDoc, serverTimestamp, deleteDoc, doc } from 'firebase/firestore';
import { extractYoutubeId, uploadImage } from '../utils/adminUtils';


import type { ProgressUpdate } from '../components/AdminAvances';
import type { VideoData } from '../components/AdminVideos';
import type { FeriaData } from '../components/AdminFerias';
import type { AsesorData } from '../components/AdminAsesores';
import type { LegalDocData } from '../types/admin.types';

export function useAdminActions(selectedProject: string, proyectos: any[]) {
  const [isUploading, setIsUploading] = useState(false);


  const [avances, setAvances] = useState<ProgressUpdate[]>([]);
  const [currentAvance, setCurrentAvance] = useState<ProgressUpdate>({
    date: '',
    text: '',
    images: []
  });
  const [imageUrl, setImageUrl] = useState('');


  const [videos, setVideos] = useState<VideoData[]>([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoCategory, setVideoCategory] = useState<'informesGestion' | 'avancesObra'>('informesGestion');


  const [ferias, setFerias] = useState<FeriaData[]>([]);
  const [currentFeria, setCurrentFeria] = useState<FeriaData>({
    nombre: '',
    fecha: '',
    lugar: '',
    descripcion: '',
    logros: '',
    images: []
  });


  const [asesores, setAsesores] = useState<AsesorData[]>([]);
  const [currentAsesor, setCurrentAsesor] = useState<AsesorData>({
    nombre: '',
    cargo: 'Agente Inmobiliario',
    foto: '',
    whatsapp: ''
  });

  const [currentDoc, setCurrentDoc] = useState<LegalDocData>({
    title: '',
    fileUrl: '',
    projectSlug: ''
  });

  const [galeriaImages, setGaleriaImages] = useState<string[]>([]);


  const handleGalleryUpload = async (files: FileList) => {
    if (!selectedProject) {
      alert('Por favor selecciona un proyecto primero');
      return;
    }
    setIsUploading(true);
    try {
      const uploadPromises = Array.from(files).map(file =>
        uploadImage(file, `galeria/${selectedProject}`)
      );
      const urls = await Promise.all(uploadPromises);
      setGaleriaImages(prev => [...prev, ...urls]);
    } catch (error) {
      console.error('Error al subir imágenes de galería:', error);
      alert('Error al subir una o más imágenes.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveGalleryImage = (index: number) => {
    setGaleriaImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSaveGallery = async () => {
    if (!selectedProject || galeriaImages.length === 0) {
      alert('Selecciona un proyecto y carga fotos antes de guardar');
      return;
    }
    try {
      const galeriaRef = collection(db, 'galeria_fotos');
      for (const url of galeriaImages) {
        await addDoc(galeriaRef, {
          imageUrl: url,
          projectSlug: selectedProject,
          createdAt: serverTimestamp()
        });
      }
      alert('✅ Galería guardada con éxito');
      setGaleriaImages([]);
    } catch (error) {
      console.error('Error al guardar galería:', error);
      alert('Error al guardar la galería.');
    }
  };


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
    setCurrentAvance(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSaveAvance = () => {
    if (currentAvance.date && currentAvance.text) {
      setAvances([...avances, currentAvance]);
      setCurrentAvance({ date: '', text: '', images: [] });
    } else {
      alert('Por favor completa todos los campos requeridos');
    }
  };

  const handleDeleteAvance = (index: number) => {
    setAvances(avances.filter((_, i) => i !== index));
  };

  const handlePublishAvances = async () => {
    if (!selectedProject || avances.length === 0) {
      alert('Selecciona un proyecto y asegúrate de tener avances para publicar');
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

      const projectName = proyectos.find(p => p.id === selectedProject)?.name;
      alert(`✅ Se han publicado ${avances.length} avances para el proyecto ${projectName}`);
      setAvances([]);
    } catch (error) {
      console.error('Error al publicar avances:', error);
      alert('Error al publicar los avances.');
    }
  };


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
    if (!selectedProject || videos.length === 0) {
      alert('Selecciona un proyecto y asegúrate de tener videos para publicar');
      return;
    }

    try {
      const videosRef = collection(db, 'videos_youtube');
      for (const video of videos) {
        await addDoc(videosRef, {
          ...video,
          videoId: video.videoUrl,
          projectSlug: selectedProject,
          createdAt: serverTimestamp()
        });
      }

      const projectName = proyectos.find(p => p.id === selectedProject)?.name;
      alert(`✅ Se han publicado ${videos.length} videos para el proyecto ${projectName}`);
      setVideos([]);
    } catch (error) {
      console.error('Error al publicar videos:', error);
      alert('Error al publicar los videos.');
    }
  };


  const handleFeriaUpload = async (file: File) => {
    setIsUploading(true);
    try {
      const url = await uploadImage(file, 'ferias');
      setCurrentFeria(prev => ({
        ...prev,
        images: [...prev.images, url]
      }));
    } catch (error) {
      console.error('Error uploading feria image:', error);
      alert('Error al subir la imagen.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveFeriaImage = (index: number) => {
    setCurrentFeria(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSaveFeria = async () => {
    const f = currentFeria;
    if (f.nombre && f.fecha && f.lugar && f.descripcion && f.logros) {
      try {
        const feriasRef = collection(db, 'ferias_eventos');
        await addDoc(feriasRef, { ...f, createdAt: serverTimestamp() });
        alert('✅ Feria publicada con éxito');
        setCurrentFeria({ nombre: '', fecha: '', lugar: '', descripcion: '', logros: '', images: [] });
      } catch (error) {
        console.error('Error al guardar feria:', error);
        alert('Error al guardar la feria.');
      }
    } else {
      alert('Por favor completa todos los campos requeridos');
    }
  };

  const handleDeleteFeria = (index: number) => {
    setFerias(prev => prev.filter((_, i) => i !== index));
  };

  const handleAsesorUpload = async (file: File) => {
    setIsUploading(true);
    try {
      const url = await uploadImage(file, 'asesores');
      setCurrentAsesor(prev => ({ ...prev, foto: url }));
    } catch (error) {
      console.error('Error uploading asesor photo:', error);
      alert('Error al subir la foto.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSaveAsesor = async () => {
    const a = currentAsesor;
    if (a.nombre && a.cargo && a.foto && a.whatsapp) {
      try {
        const asesoresRef = collection(db, 'asesores');
        await addDoc(asesoresRef, { ...a, createdAt: serverTimestamp() });
        alert('✅ Asesor guardado con éxito');
        setCurrentAsesor({ nombre: '', cargo: 'Agente Inmobiliario', foto: '', whatsapp: '' });
      } catch (error) {
        console.error('Error al guardar asesor:', error);
        alert('Error al guardar el asesor.');
      }
    } else {
      alert('Por favor completa todos los campos requeridos');
    }
  };

  const handleDeleteAsesor = (index: number) => {
    setAsesores(prev => prev.filter((_, i) => i !== index));
  };

  const handleDocUpload = async (file: File) => {
    if (!selectedProject) {
      alert('Por favor selecciona un proyecto primero');
      return;
    }
    setIsUploading(true);
    try {
      const url = await uploadImage(file, `legal_documents/${selectedProject}`, true);
      setCurrentDoc((prev: LegalDocData) => ({ ...prev, fileUrl: url }));
    } catch (error) {
      console.error('Error uploading document:', error);
      alert('Error al subir el documento.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSaveDoc = async () => {
    if (selectedProject && currentDoc.title && currentDoc.fileUrl) {
      try {
        const docsRef = collection(db, 'legal_documents');
        await addDoc(docsRef, {
          ...currentDoc,
          projectSlug: selectedProject,
          createdAt: serverTimestamp()
        });
        alert('✅ Documento guardado con éxito');
        setCurrentDoc({ title: '', fileUrl: '', projectSlug: '' });
      } catch (error) {
        console.error('Error al guardar el documento:', error);
        alert('Error al guardar el documento.');
      }
    } else {
      alert('Por favor completa todos los campos (Proyecto, Título y Archivo)');
    }
  };

  const handleDeleteDoc = async (id: string) => {
    if (confirm('¿Estás seguro de que deseas eliminar este documento?')) {
      try {
        await deleteDoc(doc(db, 'legal_documents', id));
        alert('✅ Documento eliminado con éxito');
      } catch (error) {
        console.error('Error al eliminar el documento:', error);
        alert('Error al eliminar el documento.');
      }
    }
  };

  return {
    isUploading,
    avances,
    currentAvance,
    setCurrentAvance,
    imageUrl,
    setImageUrl,
    handleAvanceUpload,
    handleRemoveImage,
    handleSaveAvance,
    handleDeleteAvance,
    handlePublishAvances,

    videos,
    videoUrl,
    setVideoUrl,
    videoCategory,
    setVideoCategory,
    handleAddVideo,
    handleDeleteVideo,
    handlePublishVideos,

    ferias,
    currentFeria,
    setCurrentFeria,
    handleFeriaUpload,
    handleRemoveFeriaImage,
    handleSaveFeria,
    handleDeleteFeria,

    asesores,
    currentAsesor,
    setCurrentAsesor,
    handleAsesorUpload,
    handleSaveAsesor,
    handleDeleteAsesor,

    currentDoc,
    setCurrentDoc,
    handleDocUpload,
    handleSaveDoc,
    handleDeleteDoc,
    galeriaImages,
    handleGalleryUpload,
    handleRemoveGalleryImage,
    handleSaveGallery
  };
}
