import { motion } from 'motion/react';
import { Star, Quote, Play, Users, TrendingUp, Award, CheckCircle, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router';

export default function Inversionistas() {
  const testimonials = [
    {
      name: 'Carlos Rodríguez',
      location: 'Bogotá',
      project: 'Río Claro',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      quote: 'Invertir con Meraki fue la mejor decisión financiera que he tomado. En solo 2 años, mi terreno se ha valorizado un 45%. El proceso fue transparente y el equipo siempre estuvo disponible.',
      investment: '$85,000 USD',
      appreciation: '45%',
      year: '2023'
    },
    {
      name: 'María Fernanda López',
      location: 'Medellín',
      project: 'Laguna Mar',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      quote: 'Como madre de familia, buscaba un lugar seguro para el futuro de mis hijos. Meraki no solo me ofreció una inversión, sino un lugar donde crear recuerdos inolvidables cada fin de semana.',
      investment: '$120,000 USD',
      appreciation: '38%',
      year: '2024'
    },
    {
      name: 'Andrés Martínez',
      location: 'Cali',
      project: 'Cañón de Arizona',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      quote: 'La calidad de las amenidades y la naturaleza del entorno superaron todas mis expectativas. El club campestre es un verdadero paraíso y mi inversión ha sido excelente.',
      investment: '$95,000 USD',
      appreciation: '52%',
      year: '2022'
    },
    {
      name: 'Patricia Gómez',
      location: 'Bucaramanga',
      project: 'Río Claro',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      quote: 'Recomendé a 3 amigos a través del programa de referidos y las comisiones fueron excelentes. Ahora todos somos parte de la familia Meraki y disfrutamos juntos de este hermoso lugar.',
      investment: '$78,000 USD',
      appreciation: '41%',
      year: '2023'
    },
    {
      name: 'Jorge Ramírez & Familia',
      location: 'Barranquilla',
      project: 'Laguna Mar',
      image: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=400',
      quote: 'Nuestros hijos crecen rodeados de naturaleza los fines de semana. La inversión ha sido rentable, pero lo más valioso es la calidad de vida que nos brinda.',
      investment: '$135,000 USD',
      appreciation: '48%',
      year: '2024'
    },
    {
      name: 'Diana Morales',
      location: 'Cartagena',
      project: 'Cañón de Arizona',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      quote: 'Como empresaria, valoro mucho la transparencia y profesionalismo. Meraki cumplió cada promesa. El retorno de inversión ha sido superior a cualquier otro inmueble que tengo.',
      investment: '$110,000 USD',
      appreciation: '55%',
      year: '2022'
    }
  ];

  const stats = [
    { icon: Users, value: '2,500+', label: 'Familias Inversionistas' },
    { icon: TrendingUp, value: '47%', label: 'Valorización Promedio' },
    { icon: Award, value: '15+', label: 'Años de Experiencia' },
    { icon: CheckCircle, value: '98%', label: 'Satisfacción del Cliente' }
  ];

  const videoTestimonials = [
    {
      thumbnail: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600',
      title: 'Familia Martínez - Entrega de Terreno',
      duration: '3:45',
      views: '12.5K'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600',
      title: 'Testimonial: Mi Inversión en 2 Años',
      duration: '2:30',
      views: '8.2K'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
      title: 'Tour Virtual - Club Campestre Río Claro',
      duration: '5:12',
      views: '25.3K'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600',
      title: 'Ceremonia de Entrega - Laguna Mar',
      duration: '4:20',
      views: '15.7K'
    }
  ];

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
      caption: 'Entrega de escrituras - Familia González'
    },
    {
      url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
      caption: 'Primer día en el nuevo terreno'
    },
    {
      url: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800',
      caption: 'Celebrando la inversión familiar'
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800',
      caption: 'Evento de inversionistas 2025'
    },
    {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      caption: 'Niños disfrutando las amenidades'
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
      caption: 'Inauguración Club Campestre'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black via-[#0d060a] to-black border-b border-[#F4BA3E]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#947018] via-[#B7871C] to-[#F4BA3E] flex items-center justify-center shadow-lg shadow-[#F4BA3E]/30">
                  <Heart className="w-10 h-10 text-black" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] bg-clip-text text-transparent">
                Historias de Éxito que Inspiran
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Conoce a las familias que confiaron en Meraki y transformaron sus vidas con inversiones inteligentes
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-[#0d060a] to-black p-4 rounded-lg border border-[#F4BA3E]/30 min-w-[150px]"
                    >
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

      {/* Video Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-black to-[#0d060a]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-white">
              <span className="bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] bg-clip-text text-transparent">
                Videos de Testimonios
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Escucha directamente de nuestros inversionistas sobre su experiencia con Meraki
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg border border-[#F4BA3E]/20 hover:border-[#F4BA3E]/50 transition-all">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#947018] to-[#F4BA3E] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-black ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                    <div className="text-xs text-gray-300 mb-1">{video.views} vistas</div>
                    <div className="text-sm text-[#F4BA3E]">{video.duration}</div>
                  </div>
                </div>
                <h3 className="mt-3 text-sm text-white group-hover:text-[#F4BA3E] transition-colors">
                  {video.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-[#0d060a] to-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-white">
              <span className="bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] bg-clip-text text-transparent">
                Lo que Dicen Nuestros Inversionistas
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Testimonios reales de familias que han crecido con nosotros
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#0d060a] to-black p-6 rounded-lg border border-[#F4BA3E]/20 hover:border-[#F4BA3E]/50 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#F4BA3E]/30"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg text-white mb-1">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                    <p className="text-xs text-[#F4BA3E]">{testimonial.project}</p>
                  </div>
                  <Quote className="w-8 h-8 text-[#F4BA3E]/30" />
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F4BA3E] text-[#F4BA3E]" />
                  ))}
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-black to-[#0d060a]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-white">
              <span className="bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] bg-clip-text text-transparent">
                Momentos Memorables
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Capturando la felicidad de nuestras familias inversionistas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg border border-[#F4BA3E]/20 hover:border-[#F4BA3E]/50 transition-all cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-sm p-4">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0d060a] via-black to-[#0d060a] relative overflow-hidden border-t border-[#F4BA3E]/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F4BA3E] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#B7871C] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
              Tú También Puedes Ser Parte de{' '}
              <span className="bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] bg-clip-text text-transparent">
                Estas Historias de Éxito
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Únete a más de 2,500 familias que han confiado en Meraki para su inversión inmobiliaria
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] hover:from-[#FFF18F] hover:via-[#F4BA3E] hover:to-[#FFF18F] text-black shadow-lg shadow-[#F4BA3E]/30 text-lg px-8"
                asChild
              >
                <Link to="/proyectos">Explorar Proyectos</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#F4BA3E] text-[#F4BA3E] hover:bg-[#F4BA3E] hover:text-black text-lg px-8"
                asChild
              >
                <Link to="/contacto">Agendar Asesoría</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}