import { InversionistasHero, InversionistasVideoGrid, InversionistasTestimonials, InversionistasGallery, InversionistasCTA } from '../features/inversionistas/components/InversionistasComponents';

export default function Inversionistas() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <InversionistasHero />
      <InversionistasVideoGrid />
      <InversionistasTestimonials />
      <InversionistasGallery />
      <InversionistasCTA />
    </div>
  );
}
