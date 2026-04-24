import { motion } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQ_DATA } from '../data/faqData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/ui/accordion';

export function FAQHero() {
  return (
    <section className="relative py-32 pt-40 overflow-hidden bg-[#0d060a]">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#947018]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#F4BA3E]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8">
            <Sparkles className="w-4 h-4 text-[#F4BA3E]" />
            <span className="text-[#F4BA3E] text-[12px] font-bold tracking-[0.3em] uppercase">Centro de Ayuda</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white tracking-tight leading-tight uppercase">
            Preguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4BA3E] via-[#FFF18F] to-[#B7871C]">Frecuentes</span>
          </h1>
          <div className="h-[1.5px] w-24 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent mx-auto mb-10 opacity-40" />
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Resolvemos todas tus dudas sobre nuestros proyectos, procesos legales y formas de inversión.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function FAQList() {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-24">
          {FAQ_DATA.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: catIndex * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
                <div className="max-w-xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F4BA3E]/10 border border-[#F4BA3E]/20 flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-[#F4BA3E]" />
                    </div>
                    <h2 className="text-3xl font-bold text-white uppercase tracking-tight">{category.title}</h2>
                  </div>
                  <p className="text-gray-400 font-light">{category.description}</p>
                </div>
                <span className="text-[#F4BA3E]/40 text-sm font-bold tracking-widest uppercase italic">
                  {category.items.length} Preguntas
                </span>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <AccordionItem
                    key={itemIndex}
                    value={`item-${catIndex}-${itemIndex}`}
                    className="bg-white/[0.02] border border-white/5 rounded-3xl px-8 overflow-hidden transition-all duration-300 data-[state=open]:border-[#F4BA3E]/30 data-[state=open]:bg-white/[0.04]"
                  >
                    <AccordionTrigger className="text-left py-8 text-white hover:text-[#F4BA3E] hover:no-underline transition-colors group">
                      <span className="text-lg font-medium pr-8 leading-snug">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 pb-8 leading-relaxed text-base pt-2 border-t border-white/5 mt-2">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {item.answer}
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
