import { useState } from 'react';
import { Navigate, Link } from 'react-router';
import { SEO } from '../components/shared/SEO';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';

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
import { ProjectGallerySection } from '../features/projects/components/ProjectGallerySection';
import { ProjectContactSection } from '../features/projects/components/ProjectContactSection';

export default function ProyectoDetalle() {
  const [selectedImage, setSelectedImage] = useState(0);
  const { slug, project, combinedProgress, combinedVideos, galleryImages, isValid } = useProjectDetails();

  if (!isValid || !project || !slug) {
    return <Navigate to="/proyectos" replace />;
  }

  const isDelivered = project.status === 'entregado';
  const showPlan = !isDelivered || slug === 'llano-grande';
  

  return (
    <div className="min-h-screen pt-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Inicio</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/proyectos">Proyectos</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-primary">{project.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
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
        images={galleryImages}
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

      {showPlan && (
        <ProjectMasterPlan
          masterPlan={project.masterPlan}
          totalLots={project.totalLots}
          availableLots={project.availableLots}
          projectSlug={slug}
        />
      )}

      <ProjectContactSection 
        projectTitle={project.title}
        formLink={project.formLink}
      />

      {/* Secciones Dinámicas según Estado */}
      {isDelivered ? (
        <>
          {slug === 'llano-grande' && (
            <ProjectVideosSection
              informesGestion={combinedVideos.informesGestion}
              avancesObra={combinedVideos.avancesObra}
            />
          )}
          <ProjectGallerySection 
            images={galleryImages}
            videos={slug === 'llano-grande' ? { informesGestion: [], avancesObra: [] } : combinedVideos}
          />
          {slug === 'llano-grande' && <ProjectProgressSection progress={combinedProgress} />}
        </>
      ) : (
        <>
          <ProjectVideosSection
            informesGestion={combinedVideos.informesGestion}
            avancesObra={combinedVideos.avancesObra}
          />
          <ProjectProgressSection progress={combinedProgress} />
        </>
      )}
    </div>
  );
}
