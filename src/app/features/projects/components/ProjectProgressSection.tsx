import { motion } from 'motion/react';
import { Calendar, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';

interface ProgressUpdate {
  date: string;
  title: string;
  images: string[];
}

interface ProjectProgressSectionProps {
  progress: ProgressUpdate[];
}

export function ProjectProgressSection({ progress }: ProjectProgressSectionProps) {
  if (!progress || progress.length === 0) return null;

  return (
    <section id="avances" className="py-24 bg-gradient-to-b from-black via-[#0d060a] to-black relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-white text-center">Avances de Obra</h2>
            <div className="h-1.5 w-40 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent mx-auto mb-8" />
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Sigue de cerca la evolución de tu futuro hogar. Transparencia y compromiso en cada etapa.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            {progress.length > 1 && (
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#F4BA3E]/50 via-[#F4BA3E]/20 to-transparent hidden md:block" />
            )}

            <div className="space-y-16">
              {progress.map((update, index) => (
                <ProgressCard 
                  key={index} 
                  update={update} 
                  index={index} 
                  isLast={index === progress.length - 1}
                  total={progress.length}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md hover:bg-[#F4BA3E] border border-white/10 hover:border-[#F4BA3E] flex items-center justify-center transition-all group shadow-xl"
    >
      <ChevronLeft className="w-6 h-6 text-white group-hover:text-black" />
    </button>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md hover:bg-[#F4BA3E] border border-white/10 hover:border-[#F4BA3E] flex items-center justify-center transition-all group shadow-xl"
    >
      <ChevronRight className="w-6 h-6 text-white group-hover:text-black" />
    </button>
  );
}

export function ProgressCard({ update, index, isLast, total }: { update: ProgressUpdate, index: number, isLast: boolean, total: number }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "slick-dots !bottom-6",
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center space-x-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2.5 h-2.5 rounded-full bg-white/20 hover:bg-white/50 transition-all border border-white/10" />
    )
  };

  return (
    <div className="relative md:pl-20">
      {/* Timeline Dot */}
      {total > 1 && (
        <div className="absolute left-6 top-8 hidden md:flex items-center justify-center z-10">
          <div className="w-4 h-4 rounded-full bg-black border-2 border-[#F4BA3E] shadow-[0_0_15px_rgba(244,186,62,0.5)]" />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gradient-to-br from-[#1a1a1a] via-black to-black p-8 md:p-10 rounded-3xl border border-[#F4BA3E]/10 hover:border-[#F4BA3E]/30 transition-all shadow-2xl relative overflow-hidden group"
      >
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F4BA3E]/5 to-transparent pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F4BA3E]/10 flex items-center justify-center border border-[#F4BA3E]/20">
              <Calendar className="w-6 h-6 text-[#F4BA3E]" />
            </div>
            <div>
              <p className="text-[#F4BA3E] text-sm font-medium tracking-wider uppercase mb-1">{update.date}</p>
              <p className="text-gray-300 text-lg leading-relaxed font-light tracking-wide max-w-3xl">
                {(update as any).title || (update as any).text}
              </p>
            </div>
          </div>

        </div>



        {/* Carrusel de imágenes */}
        <div className="progress-carousel-container relative">
          <Slider {...settings}>
            {update.images.map((image, imgIndex) => (
              <div key={imgIndex} className="px-1 outline-none">
                <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 transition-transform duration-500 group-hover:scale-[1.01]">
                  <img
                    src={image}
                    alt={`Avance ${index + 1} - ${imgIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 pt-20">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                        <Camera className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white/90 text-sm font-light tracking-wide">Registro fotográfico {imgIndex + 1}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </div>
  );
}
