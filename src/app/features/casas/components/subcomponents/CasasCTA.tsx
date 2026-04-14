import { Smartphone } from 'lucide-react';
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
          <div className="bg-gradient-to-br from-[#111] to-black p-8 sm:p-12 md:p-20 rounded-[2.5rem] sm:rounded-[4rem] border border-white/5 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <span className="text-[#F4BA3E] font-bold uppercase tracking-[0.4em] mb-4 sm:mb-6 block text-xs sm:text-sm">Oportunidad Única</span>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 sm:mb-8 uppercase tracking-tighter leading-none">
                  Inversión Inteligente, <span className="text-[#F4BA3E]">Retorno Garantizado</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-10 leading-relaxed italic">
                  "{CASAS_DATA.cta.desc}"
                </p>
                <div className="flex items-center space-x-4 sm:space-x-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F4BA3E]/20 flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-[#F4BA3E]" />
                  </div>
                  <p className="text-white font-bold tracking-widest text-base sm:text-lg uppercase">Contacta a un Asesor Hoy</p>
                </div>
              </div>
              
              <div className="bg-white/5 p-1 rounded-[2.5rem] sm:rounded-[3rem] backdrop-blur-xl">
                <div className="bg-[#0d060a] p-6 sm:p-10 rounded-[2.4rem] sm:rounded-[2.8rem]">
                  <LeadForm title="Agendar Asesoría" formLink="https://api.leadconnectorhq.com/widget/form/chDoVa9nMDI8U5j5PnUo" />
                </div>
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
