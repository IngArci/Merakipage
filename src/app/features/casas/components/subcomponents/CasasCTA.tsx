import { Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import { LeadForm } from '../../../../components/shared/LeadForm';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../../components/ui/accordion';
import { CASAS_DATA } from '../../lib/constants';
import { GoldDivider } from './CasasHero';

export function CasasCTA() {
  return (
    <section className="py-24 bg-[#0d060a] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Applications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 md:mb-40">
            {CASAS_DATA.uses.map(use => (
              <div key={use.title} className="bg-white/5 border border-white/5 p-6 sm:p-8 rounded-3xl hover:border-[#F4BA3E]/20 transition-all duration-300 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-6 rounded-full bg-[#F4BA3E] flex items-center justify-center shadow-lg shadow-[#F4BA3E]/10 flex-shrink-0">
                  <use.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#0d060a]" />
                </div>
                <h5 className="text-white text-xl sm:text-2xl font-bold mb-3 tracking-tight">{use.title}</h5>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{use.desc}</p>
              </div>
            ))}
          </div>

          {/* Investment Block */}
          <div className="relative group p-[1px] rounded-[3rem] sm:rounded-[5rem] overflow-hidden">
            {/* Animated border gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F4BA3E]/20 via-transparent to-[#F4BA3E]/20 opacity-50" />

            <div className="relative bg-[#0d060a] p-8 sm:p-12 md:p-24 rounded-[3rem] sm:rounded-[5rem] overflow-hidden">
              {/* Background Glows */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F4BA3E]/10 rounded-full blur-[120px] -mr-64 -mt-64" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F4BA3E]/5 rounded-full blur-[100px] -ml-48 -mb-48" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-6 sm:mb-8">
                    <div className="w-10 h-[2px] bg-[#F4BA3E]" />
                    <span className="text-[#F4BA3E] font-bold uppercase tracking-[0.4em] text-xs sm:text-sm">Oportunidad Única</span>
                  </div>

                  <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 sm:mb-10 uppercase tracking-tighter leading-[0.95]">
                    Para <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018]">Disfrutar & Rentar</span>
                  </h2>

                  <p className="text-lg sm:text-2xl text-gray-400 mb-10 sm:mb-14 leading-relaxed font-light">
                    {CASAS_DATA.cta.desc}
                  </p>

                  <div className="inline-flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md group/cta hover:border-[#F4BA3E]/40 transition-all duration-500">
                    <div className="w-14 h-14 rounded-xl bg-[#F4BA3E] flex items-center justify-center shadow-[0_0_20px_rgba(244,186,62,0.3)] group-hover/cta:scale-110 transition-transform">
                      <Smartphone className="w-7 h-7 text-[#0d060a]" />
                    </div>
                    <div>
                      <p className="text-white font-bold tracking-widest text-sm uppercase">Contacta a un Asesor</p>
                      <p className="text-[#F4BA3E] text-xs font-medium uppercase tracking-wider">Atención inmediata</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Decorative frame for the form */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#F4BA3E]/20 to-transparent rounded-[3.5rem] blur-xl opacity-50" />

                  <div className="relative bg-white/5 p-1 rounded-[3rem] sm:rounded-[3.5rem] border border-white/10 backdrop-blur-2xl shadow-2xl">
                    <div className="bg-[#050505]/90 p-8 sm:p-12 rounded-[2.9rem] sm:rounded-[3.4rem]">
                      <LeadForm
                        title="Inicia tu Proyecto"
                        subtitle="Déjanos tus datos para una asesoría personalizada"
                        formLink="https://api.leadconnectorhq.com/widget/form/chDoVa9nMDI8U5j5PnUo"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-32 md:mt-40 max-w-4xl mx-auto">
            <div className="text-center mb-16 px-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 uppercase tracking-tight">Preguntas Frecuentes</h2>
              <div className="flex justify-center"><GoldDivider /></div>
            </div>
            <div className="px-2">
              <Accordion type="single" collapsible className="space-y-4">
                {CASAS_DATA.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-white/5 border border-white/5 rounded-2xl px-6 sm:px-8 overflow-hidden data-[state=open]:border-[#F4BA3E]/40 transition-all">
                    <AccordionTrigger className="text-left py-4 sm:py-6 text-white hover:text-[#F4BA3E] hover:no-underline font-bold text-base sm:text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 pb-6 sm:pb-8 leading-relaxed border-t border-white/5 pt-4 text-sm sm:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
