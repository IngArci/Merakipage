import { motion } from 'motion/react';

const stats = [
  { number: '25+', label: 'Años de experiencia' },
  { number: '25+', label: 'Proyectos entregados' },
  { number: '5,000+', label: 'Clientes satisfechos' },
  { number: '100%', label: 'Proyectos legales' },
];

export function NosotrosStats() {
  return (
    <section className="py-20 relative z-20" id="estadisticas">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-white/[0.02] backdrop-blur-2xl border border-white/5 rounded-[3rem] p-10 md:p-14">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl font-bold mb-3 text-white group-hover:text-[#F4BA3E] transition-colors duration-500">
                {stat.number}
              </div>
              <div className="h-[1.5px] w-6 bg-[#F4BA3E]/30 mx-auto mb-4 group-hover:w-10 transition-all duration-500" />
              <div className="text-[9px] text-gray-400 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
