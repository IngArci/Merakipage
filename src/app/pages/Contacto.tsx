import { SEO } from '../components/shared/SEO';
import { ContactoHero, ContactoContent } from '../features/contacto/components/ContactoComponents';

export default function Contacto() {
  return (
    <div className="min-h-screen pt-20 bg-black">
      <SEO
        title="Contacto | Grupo Constructor Meraki - Lotes en Tolima"
        description="Contáctanos para información sobre lotes campestres en Melgar, Alvarado y Mariquita. Llámanos al +57 317 682 0728 o escríbenos por WhatsApp. ¡Asesoría gratis!"
        canonical="/contacto"
      />
      <ContactoHero />
      <ContactoContent />
    </div>
  );
}
