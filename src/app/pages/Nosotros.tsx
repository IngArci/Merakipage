import { SEO } from '../components/shared/SEO';
import { useFirestoreCached } from '../hooks/useFirestoreCached';
import { NosotrosHero } from '../features/nosotros/components/NosotrosHero';
import { NosotrosStory } from '../features/nosotros/components/NosotrosStory';
import { NosotrosStats } from '../features/nosotros/components/NosotrosStats';
import { NosotrosValues } from '../features/nosotros/components/NosotrosValues';
import { NosotrosMissionVision } from '../features/nosotros/components/NosotrosMissionVision';
import { NosotrosAsesores } from '../features/nosotros/components/NosotrosAsesores';
import { NosotrosFerias } from '../features/nosotros/components/NosotrosFerias';


export default function Nosotros() {
  // ✅ Caché 30 min + getDocs — ferias y asesores no cambian en tiempo real
  const { data: firebaseFerias } = useFirestoreCached<any>('ferias_eventos');
  const { data: firebaseAsesores } = useFirestoreCached<any>('asesores');

  const asesores = [...(firebaseAsesores || [])];
  const ferias = [...(firebaseFerias || [])];

  return (
    <div className="min-h-screen bg-[#0d060a] text-white selection:bg-[#F4BA3E]/30 font-light overflow-x-hidden">
      <SEO
        title="Quiénes Somos | Grupo Constructor Meraki - Constructora en Ibagué"
        description="Conoce al equipo detrás de Grupo Constructor Meraki: más de 10 años construyendo sueños en el Tolima. Expertos en lotes campestres en Melgar, Alvarado y Mariquita."
        canonical="/nosotros"
      />
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F4BA3E]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#B7871C]/5 rounded-full blur-[80px]" />
      </div>

      <NosotrosHero />
      <NosotrosStory />
      <NosotrosStats />
      <NosotrosValues />
      <NosotrosMissionVision />
      <NosotrosAsesores asesores={asesores} />
      <NosotrosFerias ferias={ferias} />
    </div>
  );
}
