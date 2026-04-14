import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { LeadForm } from '../../../components/shared/LeadForm';

interface ProjectContactSectionProps {
  projectTitle: string;
  formLink?: string;
}

export function ProjectContactSection({ projectTitle, formLink }: ProjectContactSectionProps) {
  const benefits = [
    'Asesoría personalizada',
    'Visita guiada gratuita',
    'Plan de financiamiento flexible',
    'Beneficios exclusivos'
  ];

  return (
    <section id="contacto" className="py-16 bg-gradient-to-b from-black via-[#0d060a] to-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6 text-white font-light">
              ¿Interesado en <span className="font-bold text-[#F4BA3E]">{projectTitle}</span>?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Solicita más información sobre este proyecto. Un asesor especializado
              te contactará para resolver todas tus dudas y programar una visita.
            </p>

            <div className="space-y-4">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#F4BA3E]" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <LeadForm
              title="Solicita información"
              subtitle={`Proyecto ${projectTitle}`}
              formLink={formLink}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
