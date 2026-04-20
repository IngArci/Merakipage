import { InversionistasHero, InversionistasVideoGrid, InversionistasGallery, InversionistasCTA } from '../features/inversionistas/components/InversionistasComponents';
import { SEO } from '../components/shared/SEO';

export default function Inversionistas() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <SEO 
        title="Inversionistas | Meraki - Oportunidades de Inversión en Lotes Campestres"
        description="Descubre por qué invertir en el Grupo Constructor Meraki. Rentabilidad garantizada, proyectos con alta valorización en Tolima y respaldo jurídico sólido. ¡Únete a nuestra red de inversionistas!"
        canonical="/inversionistas"
      />
      <InversionistasHero />
      <InversionistasVideoGrid />
      <InversionistasGallery />
      <InversionistasCTA />
    </div>
  );
}
