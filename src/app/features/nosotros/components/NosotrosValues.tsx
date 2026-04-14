import { motion } from 'motion/react';
import { Heart, Shield, Target, Users } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Pasión', description: 'Hacemos nuestro trabajo con amor y dedicación' },
  { icon: Shield, title: 'Confianza', description: 'Transparencia y honestidad en cada negocio' },
  { icon: Target, title: 'Excelencia', description: 'Buscamos la perfección en cada proyecto' },
  { icon: Users, title: 'Compromiso', description: 'Tu satisfacción es nuestra prioridad' },
];

export function NosotrosValues() {
  return (
    <section className="py-24 relative z-10" id="valores">
      <div className="container mx-auto px-4 lg:px-8 text-center mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl mb-4 font-bold">Nuestra <span className="text-[#F4BA3E]">Filosofía</span></h2>
          <p className="text-base text-gray-500 font-light max-w-2xl mx-auto italic">"Poner el alma en cada decisión para construir legados excepcionales."</p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 bg-white/[0.03] backdrop-blur-2xl border border-white/5 rounded-[2.5rem] hover:bg-white/5 hover:border-[#F4BA3E]/20 transition-all duration-500"
            >
              <div className="w-14 h-14 mb-8 rounded-2xl bg-gradient-to-br from-[#111] to-[#010101] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <value.icon className="w-6 h-6 text-[#F4BA3E]" />
              </div>
              <h3 className="text-xl mb-3 text-white font-bold">{value.title}</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
