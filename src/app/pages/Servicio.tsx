import { SEO } from '../components/shared/SEO';
import { ServicioHero, ServicioContactMethods, ServicioHours, ServicioFAQ } from '../features/servicio/components/ServicioComponents';

export default function Servicio() {
  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Servicio al Cliente | Grupo Constructor Meraki"
        description="¿Tienes dudas sobre tu lote campestre en Tolima? Contáctanos por WhatsApp, teléfono o correo. Horario de atención: Lunes a Jueves 7AM–5PM, Viernes 7AM–4PM."
        canonical="/servicio"
      />
      <ServicioHero />
      <ServicioContactMethods />
      <ServicioHours />
      <ServicioFAQ />
    </div>
  );
}
