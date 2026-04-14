import { lazy, Suspense } from 'react';
import { projectsData } from '../data/projectsData';
import { SEO } from '../components/shared/SEO';

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
    .filter(([_, data]) => data.status === 'lanzamiento')
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
      <Suspense fallback={<div className="min-h-[400px] bg-black" />}>
        <PromoBanner />
        <ProjectsSection projects={projects} />
        <CasasSection />
        <ReferralSection />
        <BenefitsSection />
        <NosotrosPreviewSection />
        <LeadFormSection />
      </Suspense>
    </div>
  );
}
