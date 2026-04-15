import { lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import { projectsData } from '../data/projectsData';
import { SEO } from '../components/shared/SEO';
import { Skeleton } from '../components/ui/skeleton';

// Critical Section (Static)
import { HeroSection } from '../features/home/components/HeroSection';
import { StatsSection } from '../features/home/components/StatsSection';

// Non-Critical Sections (Lazy)
const PromoBanner = lazy(() => import('../features/home/components/PromoBanner').then(m => ({ default: m.PromoBanner })));
const ProjectsSection = lazy(() => import('../features/home/components/ProjectsSection').then(m => ({ default: m.ProjectsSection })));
const CasasSection = lazy(() => import('../features/home/components/CasasSection').then(m => ({ default: m.CasasSection })));
const ReferralSection = lazy(() => import('../features/home/components/ReferralSection').then(m => ({ default: m.ReferralSection })));
const BenefitsSection = lazy(() => import('../features/home/components/BenefitsSection').then(m => ({ default: m.BenefitsSection })));
const NosotrosPreviewSection = lazy(() => import('../features/home/components/NosotrosPreviewSection').then(m => ({ default: m.NosotrosPreviewSection })));
const LeadFormSection = lazy(() => import('../features/home/components/LeadFormSection').then(m => ({ default: m.LeadFormSection })));

export default function Home() {
  const projects = Object.entries(projectsData)
    .filter(([_, data]) => data.status === 'en-venta')
    .slice(0, 3)
    .map(([slug, data]) => ({
      ...data,
      slug,
    }));

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Lotes Campestres en Tolima | Meraki - Inversión en Melgar, Alvarado y Mariquita"
        description="Compra tu lote campestre en Tolima desde $87M. Proyectos en Melgar, Alvarado y Mariquita con club, piscina y valorización garantizada. ¡Agenda tu asesoría gratis!"
        canonical="/"
        preloadImage="https://images.unsplash.com/photo-1758565811272-e79917ca0adc?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb3VudHJ5c2lkZSUyMGVzdGF0ZSUyMGNvdW50cnlzaWRlJTIwbGFuZCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3Mzg0NTUyOXww&ixlib=rb-4.1.0&q=60&w=1000"
      />
      <HeroSection />
      <StatsSection />
      <Suspense fallback={
        <div className="max-w-7xl mx-auto px-4 py-20 space-y-12">
          <Skeleton className="h-[400px] w-full rounded-2xl" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Skeleton className="h-[500px] rounded-xl" />
            <Skeleton className="h-[500px] rounded-xl" />
            <Skeleton className="h-[500px] rounded-xl" />
          </div>
        </div>
      }>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
        >
          <PromoBanner />
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, delay: 0.1 }}
        >
          <ProjectsSection projects={projects} />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, delay: 0.1 }}
        >
          <CasasSection />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, delay: 0.1 }}
        >
          <ReferralSection />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, delay: 0.1 }}
        >
          <BenefitsSection />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, delay: 0.1 }}
        >
          <NosotrosPreviewSection/>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, delay: 0.1 }}
        >
          <LeadFormSection />
        </motion.div>
      </Suspense>
    </div>
  );
}
