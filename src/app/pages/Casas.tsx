import { SEO } from '../components/shared/SEO';
import { 
  CasasHero, 
  CasasTradicionales, 
  CasasModulares, 
  CasasTinyHouse, 
  CasasEcoHouse, 
  CasasMediterraneas, 
  CasasCTA 
} from '../features/casas/components/CasasComponents';

export default function Casas() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Casas Campestres y Tiny Houses en Tolima | Meraki"
        description="Adquiere tu Tiny House o Casa Modular Campestre en el Tolima. Fabricación en planta, entrega en 15 días. Ideal para glamping, Airbnb y segunda vivienda."
        canonical="/casas"
      />
      <CasasHero />
      <CasasTradicionales />
      <CasasModulares />
      <CasasTinyHouse />
      <CasasEcoHouse />
      <CasasMediterraneas />
      <CasasCTA />
    </div>
  );
}
