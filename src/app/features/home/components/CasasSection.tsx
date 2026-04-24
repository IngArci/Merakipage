import { motion } from 'motion/react';
import { Link } from 'react-router';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../../../components/ui/button';

export function CasasSection() {
  const houseBenefits = [
    { title: 'Inversión Inteligente', description: 'Alta demanda en Airbnb y proyectos de Glamping' },
    { title: 'Calidad de Exportación', description: 'Estructura sismorresistente fabricada en planta' },
    { title: 'Instalación Rápida', description: 'Tu proyecto listo para operar en tiempo récord' }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-[#F4BA3E]/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#B68110] to-[#F4BA3E] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src="/images/casas/tinyhouse.webp"
              alt="Tiny House Meraki"
              className="relative w-full h-[400px] md:h-[550px] object-cover rounded-2xl shadow-2xl border border-white/10"
              width="800"
              height="550"
              loading="lazy"
              {...({ fetchpriority: "low" } as any)}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#F4BA3E] font-bold tracking-[0.3em] uppercase mb-4 block text-sm">Tu forma de invertir</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white uppercase tracking-tighter leading-tight">

              <span className="text-[#F4BA3E]">MODELO DE CASAS</span>
            </h2>

            <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
              Descubre una forma moderna y rentable de conectar con la naturaleza.
              Nuestras estructuras combinan arquitectura de vanguardia con la
              funcionalidad ideal para turismo y vivienda campestre.
            </p>

            <div className="space-y-6 mb-12">
              {houseBenefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start space-x-4">
                  <div className="bg-[#F4BA3E]/10 p-2 rounded-lg mt-1 border border-[#F4BA3E]/20">
                    <CheckCircle className="w-5 h-5 text-[#F4BA3E]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">{benefit.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-[#F4BA3E] hover:bg-[#B7871C] text-black font-bold rounded-full px-10 py-7 text-lg group shadow-[0_0_30px_rgba(244,186,62,0.2)]"
              asChild
            >
              <Link to="/casas">
                Conoce los modelos
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
