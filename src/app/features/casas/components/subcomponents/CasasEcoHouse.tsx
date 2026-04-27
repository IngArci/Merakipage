import { motion } from 'motion/react';
import { Leaf, CheckCircle2 } from 'lucide-react';
import { CASAS_DATA } from '../../lib/constants';

export function CasasEcoHouse() {
  return (
    <section id="eco-house" className="py-24 bg-[#0d060a] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-6 h-6 text-green-500" />
            <span className="text-green-500 font-bold tracking-widest uppercase text-sm">Sustentabilidad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Casa <span className="text-[#F4BA3E]">Eco House</span></h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] mx-auto" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">Viviendas diseñadas en armonía con el medio ambiente, utilizando materiales sostenibles y tecnología de bajo impacto.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {CASAS_DATA.ecoHouseModels.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-green-500/40 transition-all duration-500 group"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={model.image} alt={model.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{model.name}</h3>
                <p className="text-green-500 font-medium mb-6">{model.area}</p>
                <div className="space-y-3">
                  {model.features.map(f => (
                    <div key={f} className="flex items-center text-gray-400 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-3" /> {f}
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
