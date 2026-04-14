import { motion } from 'motion/react';
import { MessageCircle, Send, Banknote, Share2 } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: MessageCircle,
    title: 'Invita',
    description: 'Invita a tus amigos y familiares a conocer los proyectos del Grupo Constructor Meraki.',
  },
  {
    number: '2',
    icon: Send,
    title: 'Danos a conocer tu referido',
    description: 'Registra los datos de tu referido en el formulario que se presenta a continuación.',
  },
  {
    number: '3',
    icon: Banknote,
    title: 'Recibe',
    description:
      'Si quien refiere es propietario con obligación vigente, el pago se abonará al saldo pendiente al finalizar su plan. Si no eres propietario, la comisión se cancela una vez el referido pague su 4ª cuota ordinaria.',
  },
  {
    number: '4',
    icon: Share2,
    title: 'Ayúdanos a crecer',
    description: '¡Síguenos en nuestras redes sociales y comparte nuestras publicaciones!',
  },
];

export function ReferidosSteps() {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#F4BA3E] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Proceso de Registro</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter leading-tight">
            ¿Cómo <span className="text-[#F4BA3E]">Funciona?</span>
          </h2>
          <div className="flex justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent" />
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center gap-6 group"
            >
              <div className="w-28 h-28 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:border-[#F4BA3E]/40 group-hover:bg-white/10 group-hover:rotate-3">
                <step.icon className="w-12 h-12 text-[#F4BA3E] transition-transform group-hover:-rotate-3" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                  <span className="text-[#F4BA3E] mr-2 font-black">{step.number}.</span> {step.title}
                </h3>
                <p className="text-sm text-gray-500 max-w-xs leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
