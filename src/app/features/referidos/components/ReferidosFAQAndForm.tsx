import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import { LeadForm } from '../../../components/shared/LeadForm';

const faqs = [
  { question: '¿Quién puede ser referidor?', answer: 'Cualquier persona mayor de edad puede participar en nuestro programa de referidos. No necesitas experiencia previa en ventas.' },
  { question: '¿Cuánto puedo ganar?', answer: 'Dependiendo del valor del terreno o casa vendida, puedes ganar entre $2 millones y $20 millones por cada referido exitoso.' },
  { question: '¿Cómo recibo mi pago?', answer: 'Una vez se formalice la venta de tu referido, procesamos tu pago en un plazo máximo de 30 días hábiles mediante transferencia bancaria.' },
  { question: '¿Puedo referir varios proyectos?', answer: 'Sí, no hay límite. Puedes referir tantos proyectos como desees y acumular comisiones por cada venta exitosa.' },
];

export function ReferidosFAQAndForm() {
  return (
    <>
      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#0d060a]">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas saber sobre el programa</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl mb-3 text-[#947018]">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registro" className="py-24 bg-gradient-to-br from-[#947018] via-[#B7871C] to-[#F4BA3E]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-white">
              <h2 className="text-4xl md:text-5xl mb-6">Únete al Programa</h2>
              <p className="text-xl mb-8">Completa el formulario y nuestro equipo te contactará para darte toda la información sobre cómo empezar a ganar con Meraki.</p>
              <div className="space-y-4">
                {['Sin costo de inscripción', 'Material promocional incluido', 'Capacitación completa'].map(item => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <LeadForm title="Regístrate como referidor" subtitle="Empieza a ganar hoy mismo" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
