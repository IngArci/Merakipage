import { CarteraHero, CarteraInfo, CarteraForm } from '../features/cartera/components';

export default function Cartera() {
  return (
    <div className="min-h-screen pt-20 bg-[#0d060a]">
      <CarteraHero />
      <CarteraInfo />
      <CarteraForm />
    </div>
  );
}
