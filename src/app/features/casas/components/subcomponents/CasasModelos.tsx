import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { CASAS_DATA } from '../../lib/constants';
import { GoldDivider } from './CasasHero';

export function CasasModelos() {
  const [activeLuxuryModel, setActiveLuxuryModel] = useState(CASAS_DATA.luxuryModels[0]);

  return (
    <section id="modelos" className="py-24 bg-[#0d060a] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F4BA3E]/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">Modelos Modulares</h2>
          <p className="text-[#F4BA3E]/80 text-lg sm:text-xl max-w-2xl mx-auto">Viviendas listas para habitar con diseño contemporáneo</p>
        </div>

        {/* Triple Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {CASAS_DATA.modularModels.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-[2.5rem] hover:border-[#F4BA3E]/40 transition-all duration-500 hover:bg-white/10 flex flex-col"
            >
              <div className="mb-8 overflow-hidden rounded-2xl aspect-video relative">
                <img src={model.image} alt={model.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-[#F4BA3E] text-[#0d060a] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Premium
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{model.name}</h3>
              <p className="text-[#F4BA3E] font-medium mb-6 text-sm sm:text-base">{model.area}</p>
              <div className="space-y-3 mb-8 flex-grow">
                {model.features.map(f => (
                  <div key={f} className="flex items-center text-gray-400 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F4BA3E] mr-3" /> {f}
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-[12px] text-gray-500 uppercase font-bold tracking-widest mb-1">Precio de inversión</p>
                <p className="text-2xl sm:text-3xl font-bold text-white">{model.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Luxury & Base Models Section */}
        <div className="bg-[#111] p-6 sm:p-10 md:p-16 rounded-[2.5rem] sm:rounded-[4rem] border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Línea <span className="text-[#F4BA3E]">Luxury Comfort</span></h2>
              <GoldDivider />
              <p className="text-gray-400 text-base md:text-lg mb-8 sm:mb-12 leading-relaxed italic">
                {CASAS_DATA.cta.desc}
              </p>
              <div className="space-y-4 sm:space-y-6">
                {CASAS_DATA.luxuryModels.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setActiveLuxuryModel(model)}
                    className={`w-full group flex flex-col sm:flex-row sm:items-center justify-between p-5 sm:p-6 rounded-2xl transition-all cursor-pointer gap-3 text-left border ${activeLuxuryModel.id === model.id
                        ? 'bg-[#F4BA3E]/20 border-[#F4BA3E]/50'
                        : 'bg-white/5 border-white/5 hover:bg-[#F4BA3E]/10 hover:border-[#F4BA3E]/20'
                      }`}
                  >
                    <div>
                      <h4 className={`text-lg sm:text-xl font-bold transition-colors ${activeLuxuryModel.id === model.id ? 'text-[#F4BA3E]' : 'text-white'
                        }`}>{model.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-500">{model.area}</p>
                    </div>
                    <p className="text-lg sm:text-xl font-bold text-[#F4BA3E]">{model.price}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-[2rem] sm:rounded-[3rem] h-[400px] sm:h-[600px]">
              <div className="absolute -inset-4 bg-[#F4BA3E]/10 rounded-[3rem] blur-2xl group-hover:bg-[#F4BA3E]/20 transition-all duration-700" />
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeLuxuryModel.id}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  src={activeLuxuryModel.image}
                  alt={activeLuxuryModel.name}
                  className="relative z-10 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CasasTradicionales() {
  return (
    <section id="tradicionales" className="pb-24 bg-[#0d060a] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16 uppercase tracking-tight">Casas Tradicionales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {CASAS_DATA.traditionalModels.map(model => (
              <TraditionalCard key={model.id} model={model} />
            ))}
          </div>
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

      {/* Subtle overlay for text legibility */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-10" />

      {/* Image Pagination Dots */}
      <div className="absolute top-6 right-6 flex space-x-2 z-20">
        {model.images.map((_: any, idx: number) => (
          <button
            key={idx}
            onClick={() => setActiveImageIndex(idx)}
            className={`w-10 h-1 rounded-full transition-all ${activeImageIndex === idx ? 'bg-[#F4BA3E] w-12' : 'bg-white/30 hover:bg-white/50'
              }`}
          />
        ))}
      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 text-left z-20">
        <span className="text-[12px] sm:text-xs font-bold text-[#F4BA3E] uppercase tracking-[0.2em] mb-2 block">{model.label}</span>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{model.name}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center text-[#F4BA3E]">

        </div>
      </div>

      {/* Navigation Paddles (Visible on Hover) */}
      <button
        onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : model.images.length - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-[#F4BA3E] hover:text-black z-30"
      >
        <span className="sr-only">Anterior</span>
        ←
      </button>
      <button
        onClick={() => setActiveImageIndex((prev) => (prev < model.images.length - 1 ? prev + 1 : 0))}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-[#F4BA3E] hover:text-black z-30"
      >
        <span className="sr-only">Siguiente</span>
        →
      </button>
    </div>
  );
}
