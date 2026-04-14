import { motion } from 'motion/react';
import { LeadForm } from '../../../components/shared/LeadForm';

export function ContactoHero() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-black via-[#0d060a] to-black">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#F4BA3E] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B7871C] rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-6 text-white">Empieza Tu Inversión Hoy</h1>
          <p className="text-xl md:text-2xl text-gray-200">Da el primer paso hacia tu sueño campestre</p>
        </motion.div>
      </div>
    </section>
  );
}

export function ContactoContent() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-[#0d060a] to-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl mb-6 text-white">¿Listo para invertir?</h2>
            <p className="text-lg text-gray-300 mb-8">Completa el formulario y uno de nuestros asesores te contactará para brindarte información personalizada sobre nuestros proyectos, opciones de financiamiento y beneficios exclusivos.</p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-4 text-[#F4BA3E]">¿Qué sucede después?</h3>
                <ul className="space-y-3">
                  {['Un asesor te contacta en menos de 24 horas', 'Recibe información detallada de proyectos', 'Agenda una visita guiada gratuita', 'Obtén un plan de inversión personalizado'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-6 h-6 rounded-full bg-gradient-to-br from-[#B68110] to-[#F4BA3E] text-black text-center mr-3 flex-shrink-0 text-sm leading-6 font-semibold">{i + 1}</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-gradient-to-r from-[#1a1a1a] to-black rounded-lg border border-[#F4BA3E]/30">
                <p className="text-gray-300"><strong className="text-[#F4BA3E]">Sin compromiso:</strong> Solicitar información es completamente gratis y no implica ningún compromiso de compra.</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <LeadForm 
              title="Solicita información" 
              subtitle="Tu futuro comienza aquí" 
              formLink="https://api.leadconnectorhq.com/widget/form/chDoVa9nMDI8U5j5PnUo"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
