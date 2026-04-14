import { useState } from 'react';
import { Navigate } from 'react-router';
import { SEO } from '../components/shared/SEO';

// Hooks
import { useProjectDetails } from '../features/projects/hooks/useProjectDetails';

// Feature Components
import { ProjectHero } from '../features/projects/components/ProjectHero';
import { ProjectDescription } from '../features/projects/components/ProjectDescription';
import { ProjectStages } from '../features/projects/components/ProjectStages';
import { ProjectLocation } from '../features/projects/components/ProjectLocation';
import { ProjectAmenities } from '../features/projects/components/ProjectAmenities';
import { ProjectMasterPlan } from '../features/projects/components/ProjectMasterPlan';
import { ProjectVideosSection } from '../features/projects/components/ProjectVideosSection';
import { ProjectProgressSection } from '../features/projects/components/ProjectProgressSection';
import { ProjectContactSection } from '../features/projects/components/ProjectContactSection';

export default function ProyectoDetalle() {
  const [selectedImage, setSelectedImage] = useState(0);
  const { slug, project, combinedProgress, combinedVideos, isValid } = useProjectDetails();

  if (!isValid || !project || !slug) {
    return <Navigate to="/proyectos" replace />;
  }

  return (
    <div className="min-h-screen pt-20 bg-black">
      <SEO
        title={`${project.title} | Lotes en ${project.region}, Tolima`}
        description={`${project.shortDescription} Lotes desde ${project.priceFrom}. ${project.availableLots} lotes disponibles. ¡Agenda tu visita con Meraki!`}
        canonical={`/proyectos/${slug}`}
        ogImage={project.images[0]}
        ogType="website"
      />
      <ProjectHero
        title={project.title}
        region={project.region}
        shortDescription={project.shortDescription}
        images={project.images}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        priceFrom={project.priceFrom}
        sizes={project.sizes}
        availableLots={project.availableLots}
        totalLots={project.totalLots}
        deliveryDate={project.deliveryDate}
      />

      <ProjectDescription description={project.description} />

      {project.stages && <ProjectStages stages={project.stages} />}

      <ProjectLocation
        address={project.location.address}
        coordinates={project.location.coordinates}
        nearbyPlaces={project.location.nearbyPlaces}
        mapIframe={project.location.mapIframe}
      />

      <ProjectAmenities amenities={project.amenities} />

      <ProjectMasterPlan
        masterPlan={project.masterPlan}
        totalLots={project.totalLots}
        availableLots={project.availableLots}
        projectSlug={slug}
      />

      <ProjectContactSection 
        projectTitle={project.title}
        formLink={project.formLink}
      />

      <ProjectVideosSection
        informesGestion={combinedVideos.informesGestion}
        avancesObra={combinedVideos.avancesObra}
      />

      <ProjectProgressSection progress={combinedProgress} />
    </div>
  );
}
