import { useParams, Navigate } from 'react-router';
import { motion } from 'motion/react';
import {
  Home,
  TreePine,
  Waves,
  Dumbbell,
  ShoppingBag,
  Shield,
  Camera,
  Check
} from 'lucide-react';
import { LeadForm } from '../components/shared/LeadForm';
import { useState } from 'react';

// Feature Components
import { ProjectHero } from '../features/projects/components/ProjectHero';
import { ProjectDescription } from '../features/projects/components/ProjectDescription';
import { ProjectLocation } from '../features/projects/components/ProjectLocation';
import { ProjectAmenities } from '../features/projects/components/ProjectAmenities';
import { ProjectMasterPlan } from '../features/projects/components/ProjectMasterPlan';
import { ProjectVideosSection } from '../features/projects/components/ProjectVideosSection';
import { ProjectProgressSection } from '../features/projects/components/ProjectProgressSection';

import { useFirestoreCollection } from '../hooks/useFirestoreCollection';

import { projectsData } from '../data/projectsData';

export default function ProyectoDetalle() {
  const { slug } = useParams<{ slug: string }>();
  const [selectedImage, setSelectedImage] = useState(0);

  if (!slug || !projectsData[slug as keyof typeof projectsData]) {
    return <Navigate to="/proyectos" replace />;
  }

  const project = projectsData[slug as keyof typeof projectsData];


  const { data: firebaseAvances } = useFirestoreCollection<any>('avances_obra', 'projectSlug', slug);
  const { data: firebaseVideos } = useFirestoreCollection<any>('videos_youtube', 'projectSlug', slug);

  const combinedProgress = [...(firebaseAvances || []), ...(project.progress || [])];

  const combinedVideos = {
    informesGestion: [
      ...(firebaseVideos?.filter(v => v.category === 'informesGestion').map(v => v.videoId) || []),
      ...(project.videos?.informesGestion || [])
    ],
    avancesObra: [
      ...(firebaseVideos?.filter(v => v.category === 'avancesObra').map(v => v.videoId) || []),
      ...(project.videos?.avancesObra || [])
    ]
  };

  return (
    <div className="min-h-screen pt-20 bg-black">
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

      <ProjectLocation
        address={project.location.address}
        coordinates={project.location.coordinates}
        nearbyPlaces={project.location.nearbyPlaces}
        mapIframe={(project.location as any).mapIframe}
      />

      <ProjectAmenities amenities={project.amenities} />

      <ProjectMasterPlan
        masterPlan={project.masterPlan}
        totalLots={project.totalLots}
        availableLots={project.availableLots}
        projectSlug={slug}
      />
      {/* Contact Form */}
      <section id="contacto" className="py-16 bg-gradient-to-b from-black via-[#0d060a] to-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl mb-6 text-white">
                ¿Interesado en {project.title}?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Solicita más información sobre este proyecto. Un asesor especializado
                te contactará para resolver todas tus dudas y programar una visita.
              </p>

              <div className="space-y-4">
                {[
                  'Asesoría personalizada',
                  'Visita guiada gratuita',
                  'Plan de financiamiento flexible',
                  'Beneficios exclusivos'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#F4BA3E]" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <LeadForm
                title="Solicita información"
                subtitle={`Proyecto ${project.title}`}
              />
            </motion.div>
          </div>
        </div>
      </section>
      <ProjectVideosSection
        informesGestion={combinedVideos.informesGestion}
        avancesObra={combinedVideos.avancesObra}
      />

      <ProjectProgressSection progress={combinedProgress} />


    </div>
  );
}
