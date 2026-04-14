import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import Slider from 'react-slick';

interface VideoSectionProps {
  informesGestion?: string[];
  avancesObra?: string[];
}

export function ProjectVideosSection({ informesGestion, avancesObra }: VideoSectionProps) {
  return (
    <section id="noticias" className="py-16 bg-gradient-to-b from-black via-[#0d060a] to-black">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl mb-6 text-white">Noticias de tu Club Campestre</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {informesGestion && informesGestion.length > 0 && (
              <div>
                <h3 className="text-2xl text-white mb-6">Informes de Gestión</h3>
                <VideoCarouselCompact videos={informesGestion} />
              </div>
            )}

            {avancesObra && avancesObra.length > 0 && (
              <div>
                <h3 className="text-2xl text-white mb-6">Avances de Obra</h3>
                <VideoCarouselCompact videos={avancesObra} />

              </div>
            )}
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
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-[#F4BA3E] border border-[#F4BA3E]/30 hover:border-[#F4BA3E] flex items-center justify-center transition-all group"
    >
      <ChevronLeft className="w-6 h-6 text-[#F4BA3E] group-hover:text-black" />
    </button>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-[#F4BA3E] border border-[#F4BA3E]/30 hover:border-[#F4BA3E] flex items-center justify-center transition-all group"
    >
      <ChevronRight className="w-6 h-6 text-[#F4BA3E] group-hover:text-black" />
    </button>
  );
}

export function VideoCarouselCompact({ videos }: { videos: string[] }) {
  const settings = {
    dots: true,
    infinite: videos.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: videos.length > 1,
    autoplaySpeed: 4000,
    prevArrow: videos.length > 1 ? <PrevArrow /> : undefined,
    nextArrow: videos.length > 1 ? <NextArrow /> : undefined,
    dotsClass: "slick-dots !bottom-4",
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center space-x-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 transition-all" />
    )
  };

  return (
    <div className="videos-carousel-compact">
      <Slider {...settings}>
        {videos.map((videoId, index) => (
          <div key={index} className="px-2">
            <div className="relative h-64 rounded-xl overflow-hidden border border-[#F4BA3E]/20">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Video ${index + 1}`}
                className="w-full h-full object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center space-x-2">
                  <Camera className="w-4 h-4 text-[#F4BA3E]" />
                  <span className="text-white text-sm">Video {index + 1}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
