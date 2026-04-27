import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function NosotrosHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden z-10 pt-20">
      <div className="absolute inset-0">
        <img
          src='/images/nosotros/FUNDIDO.webp'
          alt="Hero Background"
          className="w-full  object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d060a] via-[#0d060a]/50 to-[#0d060a]/20" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10">
            <Sparkles className="w-4 h-4 text-[#F4BA3E]" />
            <span className="text-[#F4BA3E] text-[12px] font-bold tracking-[0.3em] uppercase">Trayectoria • 25 Años</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white tracking-tight leading-tight uppercase">
            Grupo Constructor <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4BA3E] via-[#FFF18F] to-[#B7871C]">Meraki</span>
          </h1>

          <div className="h-[1.5px] w-24 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent mx-auto mb-10 opacity-40" />

          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Arquitectura campestre de alto nivel, <br className="hidden md:block" /> transformando terrenos en <span className="text-white font-medium">hogares de ensueño</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
