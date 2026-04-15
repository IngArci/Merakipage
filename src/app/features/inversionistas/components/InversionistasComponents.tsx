import { motion } from 'motion/react';
import { Play, Users, TrendingUp, Award, CheckCircle, Heart } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Link } from 'react-router';
import { useFirestoreCollection } from '../../../hooks/useFirestoreCollection';

export interface InversionistaVideo {
  id: string;
  videoId: string;
  title: string;
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

  if (loading || videos.length === 0) return null;

  return (
    <section className="py-16 bg-gradient-to-b from-black to-[#0d060a]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] bg-clip-text text-transparent">Videos de Testimonios</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Escucha directamente de nuestros inversionistas sobre su experiencia con Meraki</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div key={video.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group">
              <div className="relative overflow-hidden rounded-2xl border border-[#F4BA3E]/20 hover:border-[#F4BA3E]/50 transition-all shadow-xl bg-black">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 bg-gradient-to-b from-transparent to-black/20">
                  <h3 className="text-white font-medium group-hover:text-[#F4BA3E] transition-colors line-clamp-2">{video.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



export function InversionistasGallery() {
  const { data: photos, loading } = useFirestoreCollection<InversionistaPhoto>('inversionistas_galeria');

  if (loading || photos.length === 0) return null;

  return (
    <section className="py-16 bg-gradient-to-b from-black to-[#0d060a]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] bg-clip-text text-transparent">Momentos Memorables</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Capturando la felicidad de nuestras familias inversionistas</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((image, index) => (
            <motion.div key={image.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group relative overflow-hidden rounded-xl border border-[#F4BA3E]/20 hover:border-[#F4BA3E]/50 transition-all cursor-pointer aspect-square">
              <img src={image.imageUrl} alt={image.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white text-sm p-4 font-medium">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
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
