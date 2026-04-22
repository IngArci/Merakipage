import { motion } from 'motion/react';
import { Gift } from 'lucide-react';
import { Button } from '../../../components/ui/button';

export function ReferidosHero() {
  return (
    <section className="relative py-32 overflow-hidden flex items-center min-h-[70vh]">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/referidos/referidos.webp')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F4BA3E]/10 rounded-full blur-[120px]" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="h-px w-10 bg-[#F4BA3E]/50" />
              <span className="text-[#F4BA3E] text-xs font-bold tracking-[0.5em] uppercase">Plan Referidos</span>
              <div className="h-px w-10 bg-[#F4BA3E]/50" />
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 text-white uppercase tracking-tighter leading-none">
              Gana Dinero <br />
              <span className="text-[#F4BA3E]">Recomendando  A Meraki</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed italic">
              "Comparte oportunidades de inversión exclusivas y recibe beneficios extraordinarios por cada referido exitoso."
            </p>
            <Button size="lg" className="bg-[#F4BA3E] hover:bg-[#B7871C] text-black font-extrabold rounded-full px-12 py-8 text-sm tracking-[0.2em] shadow-[0_0_30px_rgba(244,186,62,0.3)] transition-all uppercase" asChild>
              <a href="#registro">Quiero ser referidor</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
