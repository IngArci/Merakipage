import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { CASAS_DATA } from '../../lib/constants';

export function CasasModulares() {
  return (
    <section id="modulares" className="py-24 bg-[#0d060a] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Casas Modulares</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] mx-auto" />
          <p className="text-[#F4BA3E]/80 text-lg sm:text-xl max-w-2xl mx-auto mt-6">Viviendas versátiles y eficientes con diseño contemporáneo.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  Modular
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{model.name}</h3>
              <p className="text-[#F4BA3E] font-medium mb-6 text-sm sm:text-base">{model.area}</p>
              <div className="space-y-3 flex-grow">
                {model.features.map(f => (
                  <div key={f} className="flex items-center text-gray-400 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F4BA3E] mr-3" /> {f}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
