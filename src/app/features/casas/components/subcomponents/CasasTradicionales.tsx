import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CASAS_DATA } from '../../lib/constants';

export function CasasTradicionales() {
  return (
    <section id="modelos" className="py-24 bg-[#0d060a] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Casas Tradicionales</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] mx-auto" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">Construcción convencional con la más alta calidad y diseño arquitectónico.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CASAS_DATA.traditionalModels.map(model => (
            <TraditionalCard key={model.id} model={model} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TraditionalCard({ model }: { model: any }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev < model.images.length - 1 ? prev + 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, [model.images.length]);

  return (
    <div className="relative group overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[#050505] border border-white/5 h-[400px] sm:h-[500px] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4BA3E]/5 to-transparent pointer-events-none" />
      
      <AnimatePresence mode="wait">
        <motion.img
          key={activeImageIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          src={model.images[activeImageIndex]}
          alt={model.name}
          className="relative z-10 w-full h-full object-contain p-4 sm:p-8"
        />
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-10" />

      <div className="absolute top-6 right-6 flex space-x-2 z-20">
        {model.images.map((_: any, idx: number) => (
          <button
            key={idx}
            onClick={() => setActiveImageIndex(idx)}
            className={`w-10 h-1 rounded-full transition-all ${activeImageIndex === idx ? 'bg-[#F4BA3E] w-12' : 'bg-white/30 hover:bg-white/50'}`}
          />
        ))}
      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 text-left z-20">
        <span className="text-[12px] sm:text-xs font-bold text-[#F4BA3E] uppercase tracking-[0.2em] mb-2 block">{model.label}</span>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{model.name}</h3>
      </div>

      <button
        onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : model.images.length - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-[#F4BA3E] hover:text-black z-30"
      >
        ←
      </button>
      <button
        onClick={() => setActiveImageIndex((prev) => (prev < model.images.length - 1 ? prev + 1 : 0))}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-[#F4BA3E] hover:text-black z-30"
      >
        →
      </button>
    </div>
  );
}
