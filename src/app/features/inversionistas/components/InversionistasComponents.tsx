import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Play, Users, TrendingUp, Award, CheckCircle, Heart, ChevronDown } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Link } from 'react-router';
import { useFirestoreCollection } from '@/hooks/useFirestoreCollection';

export interface InversionistaVideo {
  id: string;
  videoId: string;
  title: string;
  order?: number;
  type?: 'youtube' | 'tiktok' | 'shorts';
  createdAt: any;
}

export interface InversionistaPhoto {
  id: string;
  imageUrl: string;
  caption: string;
  createdAt: any;
}

export const stats = [
  { icon: Users, value: '1,500+', label: 'Familias Inversionistas' },
  { icon: TrendingUp, value: '47%', label: 'Valorización Promedio' },
  { icon: Award, value: '25+', label: 'Años de Experiencia' },
  { icon: CheckCircle, value: '98%', label: 'Satisfacción del Cliente' },
];

export function InversionistasHero() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-[#0d060a] to-black border-b border-[#F4BA3E]/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#947018] via-[#B7871C] to-[#F4BA3E] flex items-center justify-center shadow-lg shadow-[#F4BA3E]/30">
                <Heart className="w-10 h-10 text-black" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] bg-clip-text text-transparent">
              Historias de Éxito que Inspiran
            </h1>
            <p className="text-xl text-gray-300 mb-8">Conoce a las familias que confiaron en Meraki y transformaron sus vidas con inversiones inteligentes</p>
            <div className="flex flex-wrap justify-center gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-[#0d060a] to-black p-4 rounded-lg border border-[#F4BA3E]/30 min-w-[150px]">
                    <Icon className="w-6 h-6 text-[#F4BA3E] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-[#F4BA3E]">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function InversionistasVideoGrid() {
  const { data: videos, loading } = useFirestoreCollection<InversionistaVideo>('inversionistas_testimonios');
  const [visibleCount, setVisibleCount] = useState(6);

  if (loading || videos.length === 0) return null;

  // Ordenar videos: Primero por el campo 'order' (ascendente), 
  // y como respaldo por fecha de creación (descendente)
  const sortedVideos = [...videos].sort((a, b) => {
    const orderA = a.order ?? 999;
    const orderB = b.order ?? 999;

    if (orderA !== orderB) {
      return orderA - orderB;
    }

    // Si el orden es igual, mostrar el más reciente primero
    const dateA = a.createdAt?.seconds ?? 0;
    const dateB = b.createdAt?.seconds ?? 0;
    return dateB - dateA;
  });

  const visibleVideos = sortedVideos.slice(0, visibleCount);
  const hasMore = visibleCount < sortedVideos.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section className="py-16 bg-[#060405] relative border-t border-[#F4BA3E]/10">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 font-bold bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] bg-clip-text text-transparent">
            Videos de Testimonios
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Escucha directamente de nuestras familias inversionistas sobre su experiencia con Meraki
          </p>
        </motion.div>

        {/* Layout Grid Estricto para asegurar que todos los cuadros sean idénticos en tamaño */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visibleVideos.map((video, index) => {
            const isVertical = video.type === 'tiktok' || video.type === 'shorts' || (video.videoId.length >= 15 && /^\d+$/.test(video.videoId));
            const isTikTok = video.type === 'tiktok' || (video.videoId.length >= 15 && /^\d+$/.test(video.videoId));

            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
                className="group flex flex-col h-full"
              >
                <div className="relative overflow-hidden rounded-2xl border border-[#F4BA3E]/20 hover:border-[#F4BA3E]/60 transition-all duration-500 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.8)] hover:shadow-[0_10px_40px_-10px_rgba(244,186,62,0.15)] bg-[#0b0806] flex flex-col h-full transform hover:-translate-y-1">

                  <div className="w-full bg-[#0b0806] py-10 flex flex-col items-center justify-center overflow-hidden border-b border-[#F4BA3E]/10 relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1f160b] to-[#0b0806] flex-grow">
                    {/* Resplandor trasero */}
                    <div className="absolute inset-0 bg-[#F4BA3E]/5 blur-3xl rounded-full scale-110 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                    {/* Frame de Móvil Premium (Estilo iPhone) Uniforme para Todos */}
                    <div className="relative w-full max-w-[270px] aspect-[9/16] rounded-[36px] border-[6px] border-[#181310] bg-black shadow-[0_20px_40px_rgba(0,0,0,0.8)] overflow-hidden group-hover:border-[#382b1d] transition-colors duration-500 ring-1 ring-white/5">

                      {/* Notch / Dynamic Island */}
                      <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                        <div className="w-[40%] h-full bg-[#181310] rounded-b-xl group-hover:bg-[#382b1d] transition-colors duration-500 shadow-sm flex items-center justify-center pointer-events-none">
                          <div className="w-1.5 h-1.5 rounded-full bg-black/50 border border-white/5" />
                        </div>
                      </div>

                      {isVertical ? (
                        <iframe
                          src={isTikTok
                            ? `https://www.tiktok.com/embed/v2/${video.videoId}?lang=es-ES`
                            : `https://www.youtube.com/embed/${video.videoId}?color=white&controls=1&modestbranding=1&rel=0&autoplay=0`
                          }
                          className="absolute inset-x-0 top-0 w-full h-[105%] z-10 scale-[1.02] transform bg-black"
                          allowFullScreen
                          scrolling="no"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          style={{ border: 'none' }}
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col justify-center bg-black z-10 pointer-events-auto">
                          {/* El video 16:9 completo sin recortes, centrado en letterbox */}
                          <iframe
                            src={`https://www.youtube.com/embed/${video.videoId}?color=white&controls=1&modestbranding=1`}
                            title={video.title}
                            className="w-full aspect-video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ border: 'none' }}
                          />
                        </div>
                      )}

                      {/* Desvanecido Inferior (Oculta footers intrusivos en móviles) */}
                      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />
                    </div>
                  </div>


                  {/* Panel de Título Uniforme */}
                  <div className="px-6 py-5 bg-gradient-to-b from-[#0e0a08] to-[#040203] flex-grow flex flex-col justify-center relative">
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#F4BA3E]/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-2 h-2 rounded-full ${isTikTok ? 'bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.8)]' : 'bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]'} animate-pulse`} />
                      <h4 className="text-[#947018] text-[12px] uppercase font-bold tracking-[0.2em] opacity-80 decoration-[#F4BA3E]">
                        {isTikTok ? "TikTok Short" : "Testimonio YouTube"}
                      </h4>
                    </div>

                    <h3 className="text-[#eaddc5] font-medium text-[18px] md:text-base group-hover:text-white transition-colors leading-relaxed line-clamp-2">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Botón Ver Más */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={handleLoadMore}
              className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full border border-[#F4BA3E]/30 hover:border-[#F4BA3E] transition-all duration-500"
            >
              {/* Efecto de fondo al hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4BA3E]/0 via-[#F4BA3E]/5 to-[#F4BA3E]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

              <div className="relative flex items-center space-x-3 text-[#F4BA3E]">
                <span className="font-bold uppercase tracking-widest text-sm">Ver más testimonios</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </div>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}



export function InversionistasGallery() {
  const { data: photos, loading } = useFirestoreCollection<InversionistaPhoto>('inversionistas_galeria');

  if (loading || photos.length === 0) return null;


  const duplicatedPhotos = [...photos, ...photos];

  return (
    <section className="py-20 bg-[#060405] relative border-t border-[#F4BA3E]/10 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 font-bold bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] bg-clip-text text-transparent">
            Registro de Inversionistas
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Galería oficial inmersiva de nuestras familias fundadoras
          </p>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden pb-10">
        {/* Sombras laterales para difuminar los bordes del carrusel */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#060405] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#060405] to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex gap-6 lg:gap-8 w-max px-4 py-8 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: Math.max(30, photos.length * 5) }}
        >
          {duplicatedPhotos.map((image, index) => (
            <motion.div
              key={`${image.id}-${index}`}
              className="group flex flex-col bg-[#0b0806] border border-[#F4BA3E]/20 rounded-2xl overflow-hidden hover:border-[#F4BA3E]/60 transition-colors duration-00 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.8)] hover:shadow-[0_10px_40px_-10px_rgba(244,186,62,0.15)] w-[280px] md:w-[320px] shrink-0"
              whileHover={{ y: -5 }} // Sutil elevación extra para la tarjeta dentro del carrusel
            >
              {/* Contenedor Cuadrado Uniforme para la Imagen */}
              <div className="relative aspect-square w-full overflow-hidden bg-black border-b border-[#F4BA3E]/10">
                <img
                  src={image.imageUrl}
                  alt={image.caption}
                  className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Área de Texto y Decoración Minimalista Inferior */}
              <div className="px-5 pt-6 pb-6 flex-grow flex flex-col justify-start items-center text-center relative">

                {/* Sello o Viñeta Central */}
                <div className="absolute -top-[14px] w-7 h-7 bg-[#0b0806] rounded-full border border-[#F4BA3E]/40 flex items-center justify-center shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#FFF18F] to-[#947018]" />
                </div>

                <h4 className="text-[#947018] group-hover:text-[#F4BA3E] transition-colors text-[13px] uppercase font-bold tracking-[0.25em] mb-3">
                  Inversionista
                </h4>

                <p className="text-[#dfd0b5] text-sm md:text-[18px] font-light leading-relaxed line-clamp-3">
                  {image.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function InversionistasCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0d060a] via-black to-[#0d060a] relative overflow-hidden border-t border-[#F4BA3E]/20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F4BA3E] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#B7871C] rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl mb-6 text-white">
            Tú También Puedes Ser Parte de{' '}
            <span className="bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] bg-clip-text text-transparent">Estas Historias de Éxito</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">Únete a más de 2,500 familias que han confiado en Meraki para su inversión inmobiliaria</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] hover:from-[#FFF18F] hover:via-[#F4BA3E] hover:to-[#FFF18F] text-black shadow-lg shadow-[#F4BA3E]/30 text-lg px-8" asChild>
              <Link to="/proyectos">Explorar Proyectos</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-[#F4BA3E] text-[#F4BA3E] hover:bg-[#F4BA3E] hover:text-black text-lg px-8" asChild>
              <Link to="/contacto">Agendar Asesoría</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
