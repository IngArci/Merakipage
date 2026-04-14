import { SEO } from '../components/shared/SEO';
import { SalasVentasHero, SalasVentasGrid, SalasVentasCTA } from '../features/salas-ventas/components/SalasVentasComponents';

export default function SalasVentas() {
  return (
    <div className="min-h-screen bg-[#0d060a] text-white font-light overflow-x-hidden selection:bg-[#F4BA3E]/30">
      <SEO
        title="Salas de Ventas | Meraki - Ibagué, Melgar, Alvarado, Mariquita y Fusagasugá"
        description="Visítanos en nuestras salas de ventas en Ibagué, Melgar, Alvarado, Mariquita y Fusagasugá. Asesórate personalmente sobre lotes campestres. ¡Te esperamos!"
        canonical="/salas-ventas"
      />
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F4BA3E]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#B7871C]/5 rounded-full blur-[80px]" />
      </div>

      <SalasVentasHero />
      <SalasVentasGrid />
      <SalasVentasCTA />
    </div>
  );
}
