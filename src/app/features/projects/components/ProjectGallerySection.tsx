import { motion } from 'motion/react';
import { Camera, Play, Image as ImageIcon, ArrowLeft, ArrowRight } from 'lucide-react';
import  Slider  from 'react-slick';
import { VideoCarouselCompact } from './ProjectVideosSection';

interface ProjectGallerySectionProps {
  images: string[];
  videos: {
    informesGestion: string[];
    avancesObra: string[];
  };
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-[#F4BA3E]/30 hover:bg-[#F4BA3E] hover:text-black transition-all flex items-center justify-center group"
    >
      <ArrowLeft className="w-6 h-6 text-[#F4BA3E] group-hover:text-black" />
    </button>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-[#F4BA3E]/30 hover:bg-[#F4BA3E] hover:text-black transition-all flex items-center justify-center group"
    >
      <ArrowRight className="w-6 h-6 text-[#F4BA3E] group-hover:text-black" />
    </button>
  );
}

export function ProjectGallerySection({ images, videos }: ProjectGallerySectionProps) {
  const hasImages = images && images.length > 0;
  const hasVideos = (videos.informesGestion.length > 0 || videos.avancesObra.length > 0);

  if (!hasImages && !hasVideos) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "slick-dots !bottom-10",
  };

  return (
    <section id="galeria" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F4BA3E]/20 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#F4BA3E] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Resultado Final</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">Fotos y Videos</h2>
          <div className="h-1 w-24 bg-[#F4BA3E] mx-auto mb-8 rounded-full shadow-[0_0_15px_rgba(244,186,62,0.4)]" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed italic">
            "Explora el testimonio visual de un sueño que ya es realidad. Calidad y cumplimiento en cada detalle."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Photo Gallery */}
          {hasImages && (
            <div className={`${hasVideos ? 'lg:col-span-12' : 'lg:col-span-12'} mb-12`}>
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#0d060a] shadow-2xl">
                <Slider {...settings}>
                  {images.map((img, index) => (
                    <div key={index} className="outline-none">
                      <div className="relative h-[500px] md:h-[700px] bg-black">
                        <img
                          src={img}
                          alt={`Galería ${index + 1}`}
                          className="w-full h-full object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-10 left-10 flex items-center space-x-3 bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10">
                          <ImageIcon className="w-5 h-5 text-[#F4BA3E]" />
                          <span className="text-white font-medium tracking-wide">Imagen {index + 1} de {images.length}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          )}

          {/* Videos Section */}
          {hasVideos && (
            <div className="lg:col-span-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {videos.informesGestion.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-[#F4BA3E]/10 flex items-center justify-center">
                        <Play className="w-5 h-5 text-[#F4BA3E]" />
                      </div>
                      <h3 className="text-2xl text-white font-light uppercase tracking-wide">Testimonios y Gestión</h3>
                    </div>
                    <VideoCarouselCompact videos={videos.informesGestion} />
                  </motion.div>
                )}
                
                {videos.avancesObra.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-[#F4BA3E]/10 flex items-center justify-center">
                        <Camera className="w-5 h-5 text-[#F4BA3E]" />
                      </div>
                      <h3 className="text-2xl text-white font-light uppercase tracking-wide">Registros de Obra</h3>
                    </div>
                    <VideoCarouselCompact videos={videos.avancesObra} />
                  </motion.div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
