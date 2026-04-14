import { SEO } from '../components/shared/SEO';
import { ReferidosHero } from '../features/referidos/components/ReferidosHero';
import { ReferidosSteps } from '../features/referidos/components/ReferidosSteps';
import { ReferidosBenefits } from '../features/referidos/components/ReferidosBenefits';
import { ReferidosFormRegistro } from '../features/referidos/components/ReferidosFormRegistro';
import { ReferidosTerminos } from '../features/referidos/components/ReferidosTerminos';

export default function Referidos() {
  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Programa de Referidos Inmobiliario | Gana hasta $3M por Referido | Meraki"
        description="Refiere a un amigo o familiar y gana entre $2M y $3M por cada lote vendido en Tolima. Sin experiencia en ventas. ¡Regístrate gratis y empieza a ganar hoy!"
        canonical="/referidos"
      />
      <ReferidosHero />
      <ReferidosSteps />
      <ReferidosBenefits />
      <ReferidosFormRegistro />
      <ReferidosTerminos />
    </div>
  );
}
