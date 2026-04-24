import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../../../components/ui/button';
import { CASAS_DATA } from '../../lib/constants';

export const GoldDivider = () => (
  <div className="flex items-center space-x-4 mb-8">
    <div className="h-px w-12 bg-gradient-to-r from-[#F4BA3E] to-transparent" />
    <div className="w-2 h-2 rounded-full bg-[#F4BA3E]" />
  </div>
);

export function CasasHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/casas/modular-main.png" 
          alt="Tiny House Meraki" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d060a] via-[#0d060a]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d060a] via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#F4BA3E] font-bold tracking-[0.3em] uppercase mb-4 block text-[12px] sm:text-sm">Innovación Arquitectónica</span>
            <h1 className="text-3xl sm:text-6xl md:text-8xl font-bold text-white mb-6 uppercase tracking-tighter leading-none">
              {CASAS_DATA.concept.title}
            </h1>
            <GoldDivider />
            <p className="text-base sm:text-xl md:text-2xl text-white/90 font-light mb-8 leading-relaxed max-w-2xl">
              {CASAS_DATA.concept.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#F4BA3E] hover:bg-[#B7871C] text-[#0d060a] font-bold rounded-full px-8 py-5 sm:py-7 text-base sm:text-lg group w-full sm:w-auto" asChild>
                <a href="#modelos">
                  Explorar Modelos <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-5 sm:py-7 text-base sm:text-lg backdrop-blur-sm w-full sm:w-auto" asChild>
                <a href="#proceso">Nuestro Proceso</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
