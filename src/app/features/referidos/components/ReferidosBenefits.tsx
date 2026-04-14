import { motion } from 'motion/react';
import { CalendarCheck, ClipboardList, FileCheck, Share2 } from 'lucide-react';

const benefits = [
  {
    icon: CalendarCheck,
    title: 'Pago en 30 días',
    description:
      'El bono se paga dentro de los 30 días calendario siguientes a la radicación de la cuenta de cobro, una vez verificada la información.',
    highlight: true,
  },
  {
    icon: ClipboardList,
    title: 'Registro previo',
    description:
      'Registra tu referido en la página web con mínimo 24 horas de antelación a la venta para que el beneficio sea válido.',
    highlight: false,
  },
  {
    icon: FileCheck,
    title: 'Beneficio por predio',
    description:
      'El beneficio aplica una vez por cada predio vendido. El referido debe estar al día con su obligación de pago para que sea válido.',
    highlight: false,
  },
  {
    icon: Share2,
    title: 'Sin límites de referidos',
    description:
      'Puedes referir a cuantas personas quieras. Cada venta exitosa genera un beneficio independiente para ti.',
    highlight: true,
  },
];

export function ReferidosBenefits() {
  return (
    <section className="py-24 bg-black relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F4BA3E]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#F4BA3E] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Programa de Recompensas</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter leading-tight">
            Beneficios <span className="text-[#F4BA3E]">Exclusivos</span>
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent" />
          </div>
          <p className="text-xl text-gray-400 font-light italic max-w-2xl mx-auto">
            "Todo lo que ganas al participar en nuestro programa de embajadores"
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-[2.5rem] text-center border transition-all duration-500 hover:translate-y-[-8px] ${
                benefit.highlight
                  ? 'bg-gradient-to-br from-[#947018] to-[#B7871C] text-black border-transparent shadow-[0_20px_40px_rgba(182,129,16,0.3)]'
                  : 'bg-white/5 border-white/10 text-white backdrop-blur-sm hover:border-[#F4BA3E]/40 hover:bg-white/10'
              }`}
            >
              <div
                className={`w-18 h-18 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                  benefit.highlight ? 'bg-black/10' : 'bg-[#F4BA3E]/10 border border-[#F4BA3E]/20'
                }`}
              >
                <benefit.icon className={`w-10 h-10 ${benefit.highlight ? 'text-black' : 'text-[#F4BA3E]'}`} />
              </div>
              <h3
                className={`text-xl font-bold mb-4 uppercase tracking-tight ${benefit.highlight ? 'text-black' : 'text-white'}`}
              >
                {benefit.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  benefit.highlight ? 'text-black/80 font-medium' : 'text-gray-400 font-light'
                }`}
              >
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
