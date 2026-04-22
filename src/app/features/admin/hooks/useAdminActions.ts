import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { extractYoutubeId, uploadImage } from '../utils/adminUtils';


import type { ProgressUpdate } from '../components/AdminAvances';
import type { VideoData } from '../components/AdminVideos';
import type { FeriaData } from '../components/AdminFerias';
import type { AsesorData } from '../components/AdminAsesores';
import type { LegalDocData, InversionistaVideoData, InversionistaPhotoData, PaymentInstructionData } from '../types/admin.types';

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

  const [inversionistaVideos, setInversionistaVideos] = useState<InversionistaVideoData[]>([]);
  const [invVideoUrl, setInvVideoUrl] = useState('');
  const [invVideoTitle, setInvVideoTitle] = useState('');
  const [invVideoOrder, setInvVideoOrder] = useState('1');

  const [inversionistaPhotos, setInversionistaPhotos] = useState<InversionistaPhotoData[]>([]);
  const [currentInvPhoto, setCurrentInvPhoto] = useState<InversionistaPhotoData>({
    imageUrl: '',
    caption: ''
  });

  const [currentInstructivo, setCurrentInstructivo] = useState<PaymentInstructionData>({
    title: '',
    fileUrl: '',
    bank: 'Bancolombia',
    category: ''
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
      console.error('Error al subir imÃ¡genes de galerÃ­a:', error);
      alert('Error al subir una o mÃ¡s imÃ¡genes.');
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
      alert('âœ… GalerÃ­a guardada con Ã©xito');
      setGaleriaImages([]);
    } catch (error) {
      console.error('Error al guardar galerÃ­a:', error);
      alert('Error al guardar la galerÃ­a.');
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
      console.error('Error al subir imÃ¡genes de avance:', error);
      alert('Error al subir una o mÃ¡s imÃ¡genes.');
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
      alert('Selecciona un proyecto y asegÃºrate de tener avances para publicar');
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
      alert(`âœ… Se han publicado ${avances.length} avances para el proyecto ${projectName}`);
      setAvances([]);
    } catch (error) {
      console.error('Error al publicar avances:', error);
      alert('Error al publicar los avances.');
    }
  };


  const handleAddVideo = () => {
    if (videoUrl.trim()) {
      const result = extractYoutubeId(videoUrl);
      if (result) {
        setVideos([...videos, { videoUrl: result.id, category: videoCategory }]);
        setVideoUrl('');
      } else {
        alert('Por favor ingresa una URL vÃ¡lida de YouTube');
      }
    }
  };

  const handleDeleteVideo = (index: number) => {
    setVideos(videos.filter((_, i) => i !== index));
  };

  const handlePublishVideos = async () => {
    if (!selectedProject || videos.length === 0) {
      alert('Selecciona un proyecto y asegÃºrate de tener videos para publicar');
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
      alert(`âœ… Se han publicado ${videos.length} videos para el proyecto ${projectName}`);
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
        alert('âœ… Feria publicada con Ã©xito');
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
        alert('âœ… Asesor guardado con Ã©xito');
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
      const url = await uploadImage(file, `legal_documents/${selectedProject}`, false);
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
        alert('âœ… Documento guardado con Ã©xito');
        setCurrentDoc({ title: '', fileUrl: '', projectSlug: '' });
      } catch (error) {
        console.error('Error al guardar el documento:', error);
        alert('Error al guardar el documento.');
      }
    } else {
      alert('Por favor completa todos los campos (Proyecto, TÃ­tulo y Archivo)');
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

  const handleInstructivoUpload = async (file: File) => {
    setIsUploading(true);
    try {
      const url = await uploadImage(file, 'payment_instructions', false);
      setCurrentInstructivo((prev: PaymentInstructionData) => ({ ...prev, fileUrl: url }));
    } catch (error) {
      console.error('Error uploading instructivo:', error);
      alert('Error al subir el instructivo.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSaveInstructivo = async () => {
    if (currentInstructivo.title && currentInstructivo.fileUrl && currentInstructivo.bank && currentInstructivo.category) {
      try {
        const instructivosRef = collection(db, 'payment_instructions');
        await addDoc(instructivosRef, {
          ...currentInstructivo,
          createdAt: serverTimestamp()
        });
        alert('✅ Instructivo guardado con éxito');
        setCurrentInstructivo({ title: '', fileUrl: '', bank: 'Bancolombia', category: '' });
      } catch (error) {
        console.error('Error al guardar el instructivo:', error);
        alert('Error al guardar el instructivo.');
      }
    } else {
      alert('Por favor completa todos los campos (Banco, Categoría, Título y Archivo)');
    }
  };

  const handleDeleteInstructivo = async (id: string) => {
    if (confirm('¿Estás seguro de que deseas eliminar este instructivo?')) {
      try {
        await deleteDoc(doc(db, 'payment_instructions', id));
        alert('✅ Instructivo eliminado con éxito');
      } catch (error) {
        console.error('Error al eliminar el instructivo:', error);
        alert('Error al eliminar el instructivo.');
      }
    }
  };

  const handleAddInversionistaVideo = () => {
    if (invVideoUrl.trim() && invVideoTitle.trim()) {
      const result = extractYoutubeId(invVideoUrl);
      if (result) {
        setInversionistaVideos([...inversionistaVideos, { 
          videoId: result.id, 
          type: result.type,
          title: invVideoTitle,
          order: parseInt(invVideoOrder) || 0
        }]);
        setInvVideoUrl('');
        setInvVideoTitle('');
        setInvVideoOrder((prev) => (parseInt(prev) + 1).toString());
      } else {
        alert('Por favor ingresa una URL vÃ¡lida de YouTube');
      }
    } else {
      alert('Por favor completa el tÃ­tulo y la URL del video');
    }
  };

  const handleDeleteInversionistaVideo = (index: number) => {
    setInversionistaVideos(inversionistaVideos.filter((_, i) => i !== index));
  };

  const handlePublishInversionistaVideos = async () => {
    if (inversionistaVideos.length === 0) return;
    try {
      const videosRef = collection(db, 'inversionistas_testimonios');
      for (const video of inversionistaVideos) {
        await addDoc(videosRef, {
          ...video,
          createdAt: serverTimestamp()
        });
      }
      alert('âœ… Videos de testimonios publicados con Ã©xito');
      setInversionistaVideos([]);
    } catch (error) {
      console.error('Error al publicar videos de inversionistas:', error);
      alert('Error al publicar los videos.');
    }
  };

  const handleInversionistaPhotoUpload = async (file: File) => {
    setIsUploading(true);
    try {
      const url = await uploadImage(file, 'inversionistas');
      setCurrentInvPhoto(prev => ({ ...prev, imageUrl: url }));
    } catch (error) {
      console.error('Error uploading inversionista photo:', error);
      alert('Error al subir la foto.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSaveInversionistaPhoto = async () => {
    if (currentInvPhoto.imageUrl && currentInvPhoto.caption) {
      try {
        const galeriaRef = collection(db, 'inversionistas_galeria');
        await addDoc(galeriaRef, {
          ...currentInvPhoto,
          createdAt: serverTimestamp()
        });
        alert('âœ… Foto de momento memorable guardada');
        setCurrentInvPhoto({ imageUrl: '', caption: '' });
      } catch (error) {
        console.error('Error al guardar foto de inversionista:', error);
        alert('Error al guardar la foto.');
      }
    } else {
      alert('Por favor sube una foto y agrega una descripciÃ³n');
    }
  };

  const handleDeleteInversionistaPhoto = (index: number) => {
    setInversionistaPhotos(prev => prev.filter((_, i) => i !== index));
  };


  const handleUpdateFirestoreDoc = async (collectionName: string, docId: string, data: any) => {
    try {
      const docRef = doc(db, collectionName, docId);
      await updateDoc(docRef, data);
      alert('âœ… Cambios guardados con Ã©xito');
    } catch (error) {
      console.error('Error updating firestore doc:', error);
      alert('Error al actualizar los datos.');
    }
  };

  const handleDeleteFirestoreDoc = async (collectionName: string, docId: string) => {
    if (!window.confirm('Â¿EstÃ¡s seguro de que deseas eliminar este elemento de forma permanente?')) return;
    try {
      const docRef = doc(db, collectionName, docId);
      await deleteDoc(docRef);
      alert('âœ… Elemento eliminado correctamente');
    } catch (error) {
      console.error('Error deleting firestore doc:', error);
      alert('Error al eliminar el elemento.');
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
    handleSaveGallery,

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

    inversionistaPhotos,
    currentInvPhoto,
    setCurrentInvPhoto,
    handleInversionistaPhotoUpload,
    handleSaveInversionistaPhoto,
    handleDeleteInversionistaPhoto,

    handleUpdateFirestoreDoc,
    handleDeleteFirestoreDoc,
    currentInstructivo,
    setCurrentInstructivo,
    handleInstructivoUpload,
    handleSaveInstructivo,
    handleDeleteInstructivo
  };
}
