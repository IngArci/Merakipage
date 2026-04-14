import { PrivacidadHero, PrivacidadContent } from '../features/legal/components/PrivacidadComponents';

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <PrivacidadHero />
      <PrivacidadContent />
    </div>
  );
}
