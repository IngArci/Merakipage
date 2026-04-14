import { CheckCircle2 } from 'lucide-react';
import { CASAS_DATA } from '../../lib/constants';
import { GoldDivider } from './CasasHero';

export function CasasBenefits() {
  return (
    <section id="proceso" className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Section 1: Inclusiones */}
          <div className="space-y-10 sm:space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 uppercase tracking-tighter italic">¿Qué Incluye?</h2>
              <div className="w-16 sm:w-20 h-1 bg-[#F4BA3E]" />
            </div>
            <div className="space-y-6 sm:space-y-8">
              {CASAS_DATA.inclusions.map(item => (
                <div key={item.id} className="flex gap-4 sm:gap-6">
                  <span className="text-3xl sm:text-4xl font-bold text-[#F4BA3E]/20">{item.id}</span>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Especificaciones Técnicas */}
          <div className="space-y-10 sm:space-y-12 p-6 sm:p-8 bg-white/5 rounded-[2.5rem] sm:rounded-[3rem] border border-white/10 backdrop-blur-sm">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 uppercase tracking-tighter italic">Ficha Técnica</h2>
              <div className="w-16 sm:w-20 h-1 bg-[#F4BA3E]" />
            </div>
            <div className="space-y-6 sm:space-y-8">
              {CASAS_DATA.technicalSpecs.map(spec => (
                <div key={spec.title} className="flex gap-4 sm:gap-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F4BA3E]/10 flex items-center justify-center border border-[#F4BA3E]/20 text-[#F4BA3E] flex-shrink-0">
                    <spec.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-md font-bold text-white mb-1 uppercase tracking-widest leading-tight">{spec.title}</h4>
                    <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed">{spec.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Ventajas Clave */}
          <div className="space-y-10 sm:space-y-12 md:col-span-2 lg:col-span-1">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 uppercase tracking-tighter italic">Ventajas Clave</h2>
              <div className="w-16 sm:w-20 h-1 bg-[#F4BA3E]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {CASAS_DATA.advantages.map(adv => (
                <div key={adv.title} className="p-5 sm:p-6 bg-gradient-to-br from-white/10 to-transparent rounded-2xl border border-white/5 hover:border-[#F4BA3E]/40 transition-all group">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#F4BA3E] mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-sm sm:text-base text-white font-bold mb-2 uppercase tracking-tight">{adv.title}</h4>
                  <p className="text-gray-500 text-[10px] sm:text-sm">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Process Section */}
        <div className="mt-32 md:mt-40">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight">Proceso de Fabricación</h2>
            <div className="flex justify-center"><GoldDivider /></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-[40px] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F4BA3E]/30 to-transparent" />
            
            {CASAS_DATA.manufacturingProcess.map(step => (
              <div key={step.step} className="relative z-10 text-center px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full bg-[#0d060a] border-2 border-[#F4BA3E] flex items-center justify-center text-3xl sm:text-4xl font-bold text-[#F4BA3E] shadow-[0_0_30px_rgba(244,186,62,0.2)]">
                  {step.step}
                </div>
                <h4 className="text-sm sm:text-base text-white font-bold mb-4 uppercase tracking-widest leading-snug">{step.title}</h4>
                <p className="text-gray-500 text-[10px] sm:text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
