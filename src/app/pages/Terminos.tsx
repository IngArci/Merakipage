import { TerminosHero, TerminosContent } from '../features/legal/components/TerminosComponents';

export default function Terminos() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <TerminosHero />
      <TerminosContent />
    </div>
  );
}
