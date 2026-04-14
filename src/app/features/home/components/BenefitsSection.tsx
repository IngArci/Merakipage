import { motion } from 'motion/react';
import { FileText, Layout, Home, Award, Clock, CheckCircle2, Camera, Handshake } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: FileText,
      title: 'Trámite de Licencia',
      description: 'Trámite de licencia de construcción ante la oficina de planeación municipal de Alvarado, Tolima (costo total incluido)'
    },
    {
      icon: Layout,
      title: 'Planos Profesionales',
      description: 'Planos arquitectónicos y estructurales de su vivienda (costo total incluido)'
    },
    {
      icon: Home,
      title: 'Diseño Personalizado',
      description: 'Diseño interno personalizado (costo total incluido)'
    },
    {
      icon: Award,
      title: 'Garantía de Obra',
      description: 'Garantía de acabados y estabilidad de la obra'
    },
    {
      icon: Clock,
      title: 'Cumplimiento',
      description: 'Cumplimiento en tiempo'
    },
    {
      icon: CheckCircle2,
      title: 'Entrega Segura',
      description: 'Entrega a satisfacción'
    },
    {
      icon: Camera,
      title: 'Seguimiento Real',
      description: 'Seguimiento de la construcción mediante informes quincenales indicando el avance de la obra con registro fotográfico en tiempo real'
    },
    {
      icon: Handshake,
      title: 'Asesoría Experta',
      description: 'Asesoría personalizada en tiempo real de la obra con el profesional director de obra arquitecto'
    }
  ];

  return (
    <section className="py-24 bg-[#0d060a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#F4BA3E]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#B7871C]/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-[#B7871C]/10 border border-[#B7871C]/20 text-[#B7871C] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">Excelencia Meraki</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white uppercase tracking-tight">
            Garantías y Beneficios <br /> <span className="text-[#F4BA3E]">de Construir con Nosotros</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent mb-8" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light italic">
            "Construimos con el alma, garantizamos para siempre."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-[2.5rem] bg-gradient-to-b from-[#111] to-[#010101] border border-white/5 hover:border-[#F4BA3E]/40 transition-all duration-500 shadow-2xl"
            >
              <div className="w-14 h-14 mb-8 rounded-2xl bg-[#0d060a] border border-[#F4BA3E]/30 flex items-center justify-center shadow-lg group-hover:bg-[#F4BA3E] transition-all duration-500 overflow-hidden relative">
                <benefit.icon className="w-6 h-6 text-[#F4BA3E] group-hover:text-black transition-colors" />
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              
              <h3 className="text-lg mb-4 text-white font-bold tracking-tight uppercase group-hover:text-[#F4BA3E] transition-colors">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">{benefit.description}</p>
              
              {/* Bottom decorative line */}
              <div className="absolute bottom-6 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
