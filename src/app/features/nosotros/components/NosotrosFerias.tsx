import { motion } from 'motion/react';
import { Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Feria {
  id?: string;
  nombre: string;
  fecha: string;
  lugar: string;
  descripcion: string;
  logros: string;
  images?: string[];
}

interface NosotrosFeriasProps {
  ferias: Feria[];
}

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#F4BA3E] backdrop-blur-md border border-white/10 rounded-full p-3 shadow-2xl transition-all duration-300 group"
    aria-label="Siguiente imagen"
  >
    <ChevronRight className="w-5 h-5 text-white group-hover:text-black" />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#F4BA3E] backdrop-blur-md border border-white/10 rounded-full p-3 shadow-2xl transition-all duration-300 group"
    aria-label="Imagen anterior"
  >
    <ChevronLeft className="w-5 h-5 text-white group-hover:text-black" />
  </button>
);

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  dotsClass: 'slick-dots custom-dots',
};

export function NosotrosFerias({ ferias }: NosotrosFeriasProps) {
  if (ferias.length === 0) {
    return (
      <section className="py-24 relative z-10" id="ferias">
        <div className="container mx-auto px-4 text-center">
          <div className="py-20 bg-white/[0.02] rounded-3xl border border-dashed border-white/10">
            <p className="text-gray-500 font-light tracking-widest uppercase">Próximas participaciones en ferias próximamente</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 relative z-10" id="ferias">
      {/* Section Header */}
      <div className="container mx-auto px-4 lg:px-8 text-center mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl mb-6 font-bold">Ferias <span className="text-[#F4BA3E]">Inmobiliarias</span></h2>
          <div className="h-1 w-16 bg-[#F4BA3E] mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto italic">
            Nuestra participación en los eventos más importantes del sector inmobiliario colombiano
          </p>
        </motion.div>
      </div>

      {/* Split Layout Events */}
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {ferias.map((feria, index) => (
            <motion.div
              key={feria.id || index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white/[0.02] border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl`}
            >
              {/* Image / Carousel Side */}
              <div className="lg:w-1/2 min-h-[400px] lg:min-h-[500px] relative overflow-hidden">
                <Slider {...carouselSettings} className="h-full [&_.slick-track]:h-full [&_.slick-list]:h-full">
                  {feria.images?.map((image, imgIndex) => (
                    <div key={imgIndex} className="h-full min-h-[400px] lg:min-h-[500px] relative">
                      <img src={image} alt={feria.nombre} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                  ))}
                </Slider>
              </div>

              {/* Text / Info Side */}
              <div className="lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center bg-[#0d060a]">
                <div className="flex flex-wrap gap-2 mb-6">
                  <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F4BA3E]/10 border border-[#F4BA3E]/20 text-[#F4BA3E] text-[9px] font-bold tracking-widest uppercase">
                    <Calendar className="w-3 h-3" />
                    <span>{feria.fecha}</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[9px] font-bold tracking-widest uppercase">
                    <MapPin className="w-3 h-3" />
                    <span>{feria.lugar}</span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white uppercase tracking-tight">
                  {feria.nombre}
                </h3>

                <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed mb-6">
                  {feria.descripcion}
                </p>

                <div className="p-5 bg-white/[0.03] rounded-2xl border-l-[3px] border-[#F4BA3E]">
                  <h4 className="text-[8px] uppercase tracking-widest font-bold text-[#F4BA3E] mb-1.5">Logro Destacado</h4>
                  <p className="text-sm text-white font-serif italic leading-snug">"{feria.logros}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
