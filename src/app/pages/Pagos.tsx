import { PagosHero, PagosInfo, PagosSearch, PagosProyectos, PagosInstructivos } from '../features/pagos/components/PagosComponents';

export default function Pagos() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <PagosHero />
      <PagosInfo />
      <PagosSearch />
      <PagosProyectos />
      <PagosInstructivos />
    </div>
  );
}
