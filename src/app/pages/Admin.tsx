import { useState } from 'react';
import { FolderOpen } from 'lucide-react';

// Hooks & Utils
import { useAdminActions } from '../features/admin/hooks/useAdminActions';

import { AdminGaleria } from '../features/admin/components/AdminGaleria';

// Feature Components
import { ProjectSelector } from '../features/admin/components/ProjectSelector';
import { AdminAvances } from '../features/admin/components/AdminAvances';
import { AdminVideos } from '../features/admin/components/AdminVideos';
import { AdminFerias } from '../features/admin/components/AdminFerias';
import { AdminAsesores } from '../features/admin/components/AdminAsesores';
import { AdminDocumentos } from '../features/admin/components/AdminDocumentos';
import { AdminInstructivos } from '../features/admin/components/AdminInstructivos';
import { AdminHeader } from '../features/admin/components/AdminHeader';
import { AdminTabs, type AdminTab } from '../features/admin/components/AdminTabs';
import { AdminInversionistas } from '../features/admin/components/AdminInversionistas';

// Static Data
import { projectsData } from '@/data/projectsData';

const proyectos = Object.entries(projectsData).map(([id, data]) => ({
  id,
  name: data.title,
  status: data.status
}));

export default function Admin() {
  const [selectedProject, setSelectedProject] = useState('');
  const [activeTab, setActiveTab ] = useState<AdminTab>('avances');
  
  const admin = useAdminActions(selectedProject, proyectos);

  const currentProject = selectedProject ? projectsData[selectedProject] : null;
  const projectStatus = currentProject?.status;

  const showProjectSelector = activeTab === 'avances' || activeTab === 'videos' || activeTab === 'documentos' || activeTab === 'galeria';
  const showNoProjectMessage = showProjectSelector && !selectedProject;

  return (
    <div className="min-h-screen pt-20 bg-black pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <AdminHeader />
        <AdminTabs 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          projectStatus={projectStatus}
          projectSlug={selectedProject}
        />

        {showProjectSelector && (
          <ProjectSelector 
            proyectos={proyectos}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        )}
        
        {/* ... (rest of the messages) */}

        {/* Tab Content */}
        {activeTab === 'galeria' && selectedProject && (
          <AdminGaleria 
            images={admin.galeriaImages}
            isUploading={admin.isUploading}
            onImageUpload={admin.handleGalleryUpload}
            handleRemoveImage={admin.handleRemoveGalleryImage}
            handleSaveGallery={admin.handleSaveGallery}
          />
        )}

        {activeTab === 'avances' && selectedProject && (
          <AdminAvances 
            avances={admin.avances}
            currentAvance={admin.currentAvance}
            setCurrentAvance={admin.setCurrentAvance}
            imageUrl={admin.imageUrl}
            setImageUrl={admin.setImageUrl}
            isUploading={admin.isUploading}
            onImageUpload={admin.handleAvanceUpload}
            handleRemoveImage={admin.handleRemoveImage}
            handleSaveAvance={admin.handleSaveAvance}
            handleDeleteAvance={admin.handleDeleteAvance}
            handlePublishAvances={admin.handlePublishAvances}
          />
        )}

        {activeTab === 'videos' && selectedProject && (
          <AdminVideos 
            videos={admin.videos}
            videoUrl={admin.videoUrl}
            setVideoUrl={admin.setVideoUrl}
            videoCategory={admin.videoCategory}
            setVideoCategory={admin.setVideoCategory}
            handleAddVideo={admin.handleAddVideo}
            handleDeleteVideo={admin.handleDeleteVideo}
            handlePublishVideos={admin.handlePublishVideos}
          />
        )}

        {activeTab === 'ferias' && (
          <AdminFerias 
            ferias={admin.ferias}
            currentFeria={admin.currentFeria}
            setCurrentFeria={admin.setCurrentFeria}
            isUploading={admin.isUploading}
            onImageUpload={admin.handleFeriaUpload}
            handleRemoveFeriaImage={admin.handleRemoveFeriaImage}
            handleSaveFeria={admin.handleSaveFeria}
            handleDeleteFeria={admin.handleDeleteFeria}
          />
        )}

        {activeTab === 'asesores' && (
          <AdminAsesores 
            asesores={admin.asesores}
            currentAsesor={admin.currentAsesor}
            setCurrentAsesor={admin.setCurrentAsesor}
            isUploading={admin.isUploading}
            onImageUpload={admin.handleAsesorUpload}
            handleSaveAsesor={admin.handleSaveAsesor}
            handleDeleteAsesor={admin.handleDeleteAsesor}
          />
        )}

        {activeTab === 'documentos' && selectedProject && (
          <AdminDocumentos
            selectedProject={selectedProject}
            currentDoc={admin.currentDoc}
            setCurrentDoc={admin.setCurrentDoc}
            isUploading={admin.isUploading}
            onDocUpload={admin.handleDocUpload}
            handleSaveDoc={admin.handleSaveDoc}
            handleDeleteDoc={admin.handleDeleteDoc}
          />
        )}

        {activeTab === 'inversionistas' && (
          <AdminInversionistas 
            inversionistaVideos={admin.inversionistaVideos}
            invVideoUrl={admin.invVideoUrl}
            setInvVideoUrl={admin.setInvVideoUrl}
            invVideoTitle={admin.invVideoTitle}
            setInvVideoTitle={admin.setInvVideoTitle}
            invVideoOrder={admin.invVideoOrder}
            setInvVideoOrder={admin.setInvVideoOrder}
            handleAddInversionistaVideo={admin.handleAddInversionistaVideo}
            handleDeleteInversionistaVideo={admin.handleDeleteInversionistaVideo}
            handlePublishInversionistaVideos={admin.handlePublishInversionistaVideos}
            currentInvPhoto={admin.currentInvPhoto}
            setCurrentInvPhoto={admin.setCurrentInvPhoto}
            isUploading={admin.isUploading}
            onPhotoUpload={admin.handleInversionistaPhotoUpload}
            handleSaveInversionistaPhoto={admin.handleSaveInversionistaPhoto}
            handleDeleteInversionistaPhoto={admin.handleDeleteInversionistaPhoto}
            handleUpdateFirestoreDoc={admin.handleUpdateFirestoreDoc}
            handleDeleteFirestoreDoc={admin.handleDeleteFirestoreDoc}
          />
        )}

        {activeTab === 'instructivos' && (
          <AdminInstructivos
            currentInstructivo={admin.currentInstructivo}
            setCurrentInstructivo={admin.setCurrentInstructivo}
            isUploading={admin.isUploading}
            onDocUpload={admin.handleInstructivoUpload}
            handleSaveDoc={admin.handleSaveInstructivo}
            handleDeleteDoc={admin.handleDeleteInstructivo}
          />
        )}
      </div>
    </div>
  );
}
