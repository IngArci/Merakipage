import { motion } from 'motion/react';
import { Award, Shield, MessageCircle } from 'lucide-react';
import { Button } from '../../../components/ui/button';

interface Asesor {
  nombre: string;
  cargo?: string;
  whatsapp: string;
}

interface NosotrosAsesoresProps {
  asesores: Asesor[];
}

export function NosotrosAsesores({ asesores }: NosotrosAsesoresProps) {
  const handleWhatsapp = (asesor: Asesor) => {
    const message = encodeURIComponent(
      `Hola ${asesor.nombre.split(' ')[0]}, consulto por este canal verificado de la página de Meraki.`
    );
    window.open(`https://wa.me/${asesor.whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <section className="py-24 relative z-10" id="asesores">
      <div className="container mx-auto px-4 lg:px-8 text-center mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl mb-6 font-bold">
            Asesores <span className="text-[#F4BA3E]">Oficiales</span>
          </h2>
          <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold tracking-widest uppercase mb-10">
            <Shield className="w-3.5 h-3.5 mr-2" />
            Canal de Venta Verificado
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {asesores.map((asesor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#0a0a0a] rounded-[2.5rem] p-10 border border-white/5 hover:border-[#F4BA3E]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Decorative Shield Watermark */}
              <div className="absolute top-[-10%] right-[-10%] opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-700">
                <Shield className="w-48 h-48 text-white" />
              </div>

              <div className="flex flex-col h-full relative z-10">
                <div className="w-12 h-12 mb-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-[#F4BA3E] transition-all duration-500">
                  <Award className="w-6 h-6 text-[#F4BA3E] group-hover:text-black transition-colors" />
                </div>

                <div className="mb-10 text-left">
                  <h3 className="text-xl mb-2 text-white font-bold uppercase tracking-tight">{asesor.nombre}</h3>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-3 h-3 text-green-500" />
                    <p className="text-gray-500 font-bold tracking-widest uppercase text-[9px]">Oficial Certificado</p>
                  </div>
                </div>

                <div className="mt-auto">
                  <Button
                    onClick={() => handleWhatsapp(asesor)}
                    className="w-full h-12 bg-white/5 hover:bg-[#F4BA3E] text-white hover:text-black border border-white/10 hover:border-[#F4BA3E] rounded-2xl transition-all duration-500 text-[10px] font-bold tracking-widest uppercase"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contactar
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
