import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { LeadForm } from '../../../components/shared/LeadForm';

export function LeadFormSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0d060a] via-black to-[#0d060a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#F4BA3E] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#B7871C] rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-white via-[#FFF18F] to-white bg-clip-text text-transparent">
              ¿Listo para invertir en tu futuro?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Completa el formulario y un asesor experto te contactará para 
              ayudarte a encontrar la inversión perfecta para ti.
            </p>
            <div className="flex items-center space-x-3">
              <MessageCircle className="w-6 h-6 text-[#F4BA3E]" />
              <span className="text-lg">Respuesta en menos de 24 horas</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <LeadForm formLink="https://api.leadconnectorhq.com/widget/form/chDoVa9nMDI8U5j5PnUo" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
