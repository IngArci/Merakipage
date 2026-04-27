import { motion } from 'motion/react';
import { Palmtree, CheckCircle2 } from 'lucide-react';
import { CASAS_DATA } from '../../lib/constants';

export function CasasMediterraneas() {
  return (
    <section id="mediterraneas" className="py-24 bg-[#0d060a] relative overflow-hidden border-t border-white/5">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Palmtree className="w-6 h-6 text-blue-400" />
            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Estilo & Sofisticación</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Casas <span className="text-[#F4BA3E]">Mediterráneas</span></h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] mx-auto" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">Inspiradas en la arquitectura de las costas europeas, combinando frescura, luz y elegancia atemporal.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {CASAS_DATA.mediterraneaModels.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#111] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-400/40 transition-all duration-500 group shadow-2xl"
            >
              <div className="aspect-video overflow-hidden">
                <img src={model.image} alt={model.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{model.name}</h3>
                <p className="text-blue-400 font-medium mb-6">{model.area}</p>
                <div className="space-y-3">
                  {model.features.map(f => (
                    <div key={f} className="flex items-center text-gray-400 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mr-3" /> {f}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
