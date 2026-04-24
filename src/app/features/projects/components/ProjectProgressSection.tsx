import { motion } from 'motion/react';
import { Calendar, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import { ProgressUpdate } from '@/types/project';

interface ProjectProgressSectionProps {
  progress: ProgressUpdate[];
}

export function ProjectProgressSection({ progress }: ProjectProgressSectionProps) {
  if (!progress || progress.length === 0) return null;

  return (
    <section id="avances" className="py-24 bg-[#0d060a] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F4BA3E]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C19B31]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-white tracking-tight">AVANCES DE OBRA DE TU CLUB DE CAMPO</h2>
            <div className="h-1 w-20 bg-[#F4BA3E] mx-auto mb-5 rounded-full shadow-[0_0_15px_rgba(244,186,62,0.4)]" />
            <p className="text-sm md:text-base text-white-400 max-w-2xl mx-auto font-light leading-relaxed">
              Sigue de cerca la evolución de tu inversión porque con Meraki a la fija.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line - Visible on all screens */}
            {progress.length > 1 && (
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F4BA3E] via-[#F4BA3E]/20 to-transparent" />
            )}

            <div className="space-y-8 md:space-y-12">
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
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-[#F4BA3E] text-white backdrop-blur-xl border border-[#F4BA3E]/40 hover:brightness-95 transition-all flex items-center justify-center group"
    >
      <ChevronLeft className="w-5 h-5 text-white" />
    </button>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-[#F4BA3E] text-white backdrop-blur-xl border border-[#F4BA3E]/40 hover:brightness-95 transition-all flex items-center justify-center group"
    >
      <ChevronRight className="w-5 h-5 text-white" />
    </button>
  );
}

export function ProgressCard({ update, index, total }: { update: ProgressUpdate, index: number, isLast: boolean, total: number }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "slick-dots !bottom-8",
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center space-x-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/60 transition-all" />
    )
  };

  return (
    <div className="relative pl-10 md:pl-24">
      {/* Timeline Dot */}
      {total > 1 && (
        <div className="absolute left-[9px] md:left-[25px] top-10 flex items-center justify-center z-10">
          <div className="w-4 h-4 rounded-full bg-black border-[3px] border-[#F4BA3E] shadow-[0_0_15px_rgba(244,186,62,0.6)]" />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, x: 15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        className="bg-[#141414] rounded-[2rem] border border-white/5 overflow-hidden group hover:border-[#F4BA3E]/20 transition-all duration-500 shadow-xl"
      >
        <div className="p-4 md:p-6 pb-3 md:pb-4">
          <div className="flex flex-col gap-6">
            {/* Glass Date Badge */}
            <div className="inline-flex items-center self-start px-4 py-2 rounded-full bg-gradient-to-r from-[#F4BA3E]/10 to-transparent border border-[#F4BA3E]/20 backdrop-blur-md">
              <Calendar className="w-4 h-4 text-[#F4BA3E] mr-2.5" />
              <span className="text-[#F4BA3E] text-xs md:text-sm font-semibold tracking-[0.1em] uppercase">
                {update.date}
              </span>
            </div>

            {/* Description Text */}
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-normal max-w-4xl tracking-tight line-clamp-4">
              {update.title || update.text}
            </p>
          </div>
        </div>

        {/* Carousel de imágenes */}
        <div className="px-3 md:px-4 pb-4 md:pb-6">
          <div className="relative rounded-[1rem] md:rounded-[1.5rem] overflow-hidden border border-white/5">
            <Slider {...settings}>
              {update.images.map((image, imgIndex) => (
                <div key={imgIndex} className="outline-none">
                  <div className="relative h-[380px] md:h-[530px] bg-[#141414] flex items-center justify-center">
                    <img
                      src={image}
                      alt={`Avance ${index + 1} - ${imgIndex + 1}`}
                      className="w-full h-full object-contain"
                    />
                    {/* Badge inferior */}
                    <div className="absolute inset-x-0 bottom-0 p-3 md:p-5">
                      <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-md w-fit px-3 py-1.5 rounded-full border border-white/10">
                        <Camera className="w-3 h-3 text-[#F4BA3E]" />
                        <span className="text-white/90 text-xs font-medium">Registro fotográfico {imgIndex + 1}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
