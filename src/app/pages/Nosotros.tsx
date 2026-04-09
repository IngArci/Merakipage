import { motion } from 'motion/react';
import { Award, Users, TrendingUp, Target, Heart, Shield, MessageCircle, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useFirestoreCollection } from '../hooks/useFirestoreCollection';

export default function Nosotros() {
  const values = [
    {
      icon: Heart,
      title: 'Pasión',
      description: 'Hacemos nuestro trabajo con amor y dedicación'
    },
    {
      icon: Shield,
      title: 'Confianza',
      description: 'Transparencia y honestidad en cada negocio'
    },
    {
      icon: Target,
      title: 'Excelencia',
      description: 'Buscamos la perfección en cada proyecto'
    },
    {
      icon: Users,
      title: 'Compromiso',
      description: 'Tu satisfacción es nuestra prioridad'
    }
  ];

  const stats = [
    { number: '15+', label: 'Años de experiencia' },
    { number: '25+', label: 'Proyectos entregados' },
    { number: '5,000+', label: 'Clientes satisfechos' },
    { number: '100%', label: 'Proyectos legales' }
  ];

  // Fetch dynamic data from Firebase
  const { data: firebaseFerias } = useFirestoreCollection<any>('ferias_eventos');
  const { data: firebaseAsesores } = useFirestoreCollection<any>('asesores');

  const staticFerias = [
    {
      id: 1,
      nombre: 'Expo Inmobiliaria Bogotá 2026',
      fecha: 'Marzo 5-8, 2026',
      lugar: 'Corferias - Bogotá, Colombia',
      descripcion: 'Nuestra más reciente participación en la Expo Inmobiliaria Bogotá 2026 fue un éxito rotundo. Presentamos nuestros nuevos proyectos campestres con gran acogida del público interesado en inversiones inmobiliarias sostenibles.',
      logros: 'Más de 500 leads cualificados, 45 preventas cerradas y reconocimiento como Mejor Stand de Proyectos Campestres.',
      images: [
        'https://images.unsplash.com/photo-1761195689615-9469b65dac01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkZSUyMHNob3clMjBleGhpYml0aW9uJTIwYm9vdGglMjBwZW9wbGV8ZW58MXx8fHwxNzczODUyOTIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1760001551764-14eddf965019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnZlbnRpb24lMjBleHBvJTIwaGFsbHxlbnwxfHx8fDE3NzM4NTI5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwY29uZmVyZW5jZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzM4NTI5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1627552133260-45d786f552a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGhpYml0aW9uJTIwZmFpciUyMGV2ZW50JTIwYm9vdGglMjBtb2Rlcm58ZW58MXx8fHwxNzczODUyOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    },
    {
      id: 2,
      nombre: 'Feria Raíces - Medellín 2025',
      fecha: 'Noviembre 10-13, 2025',
      lugar: 'Plaza Mayor - Medellín, Colombia',
      descripcion: 'En Feria Raíces Medellín 2025 consolidamos nuestra presencia en el eje cafetero presentando nuestros proyectos de casas campestres de lujo. La respuesta del público antioqueño superó nuestras expectativas.',
      logros: '380 contactos comerciales, 32 ventas cerradas durante el evento y alianzas estratégicas con 5 entidades financieras.',
      images: [
        'https://images.unsplash.com/photo-1760001551764-14eddf965019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZW50aW9uJTIwY2VudGVyJTIwZXhoaWJpdGlvbiUyMGNyb3dkfGVufDF8fHx8MTc3Mzg1MjkyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1695462131551-5a08f1a1581c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwZXZlbnQlMjBuZXR3b3JraW5nJTIwcGVvcGxlfGVufDF8fHx8MTc3Mzg1MjkyNXww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1759912255935-e9af25c17c18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4aGliaXRpb24lMjBtb2Rlcm4lMjBib290aHxlbnwxfHx8fDE3NzM4NTI5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    },
    {
      id: 3,
      nombre: 'Expo Vivienda Colombia 2025',
      fecha: 'Agosto 18-21, 2025',
      lugar: 'Centro de Convenciones - Cartagena',
      descripcion: 'Nuestra participación en Cartagena nos permitió conectar con inversionistas internacionales interesados en el mercado inmobiliario colombiano. Presentamos la exclusividad de nuestros condominios tipo club de campo.',
      logros: '250 leads internacionales, 28 preventa y cobertura en 3 medios nacionales especializados en bienes raíces.',
      images: [
        'https://images.unsplash.com/photo-1762497403897-c105a5bc61e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBvJTIwZmFpciUyMGNvbmZlcmVuY2UlMjBoYWxsfGVufDF8fHx8MTc3Mzg1MjkyNXww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1627552133260-45d786f552a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGhpYml0aW9uJTIwZmFpciUyMGV2ZW50JTIwYm9vdGglMjBtb2Rlcm58ZW58MXx8fHwxNzczODUyOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1761195689615-9469b65dac01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkZSUyMHNob3clMjBleGhpYml0aW9uJTIwYm9vdGglMjBwZW9wbGV8ZW58MXx8fHwxNzczODUyOTIxfDA&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    }
  ];

  const combinedFerias = [...(firebaseFerias || []), ...staticFerias];

  const staticAsesores = [
    {
      nombre: 'Carlos Martínez',
      cargo: 'Agente Inmobiliario',
      foto: 'https://images.unsplash.com/photo-1680540692052-79fde1108370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjBwb3J0cmFpdCUyMG1hbnxlbnwxfHx8fDE3NzM4NTI0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      whatsapp: '573001234571'
    },
    {
      nombre: 'María Rodríguez',
      cargo: 'Agente Inmobiliario',
      foto: 'https://images.unsplash.com/photo-1770199105714-a5a349546346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwcmVhbCUyMGVzdGF0ZSUyMGFnZW50fGVufDF8fHx8MTc3Mzg1MjQ1OHww&ixlib=rb-4.1.0&q=80&w=1080',
      whatsapp: '573001234572'
    },
    {
      nombre: 'Andrés López',
      cargo: 'Agente Inmobiliario',
      foto: 'https://images.unsplash.com/photo-1750741268857-7e44510f867d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHN1aXQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM3ODQzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      whatsapp: '573001234573'
    }
  ];

  const combinedAsesores = [...(firebaseAsesores || []), ...staticAsesores];

  // Custom arrow components for carousel
  const NextArrow = ({ onClick }: any) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all"
      aria-label="Siguiente imagen"
    >
      <ChevronRight className="w-6 h-6 text-[#0d060a]" />
    </button>
  );

  const PrevArrow = ({ onClick }: any) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all"
      aria-label="Imagen anterior"
    >
      <ChevronLeft className="w-6 h-6 text-[#0d060a]" />
    </button>
  );

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1665069181618-5618c9b621ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMHRlYW18ZW58MXx8fHwxNzczODcxMzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-[#947018]/60" />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#F4BA3E] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B7871C] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              Construyendo Sueños, Creando Legados
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Somos Grupo Constructor Meraki, expertos en desarrollo de proyectos 
              campestres que transforman vidas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white" id="historia">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1758519288905-38b7b00c1023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBoYW5kc2hha2UlMjBzdWNjZXNzfGVufDF8fHx8MTc3Mzg0NTUzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Equipo Meraki"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 text-[#0d060a]">
                Nuestra Historia
              </h2>
              
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Grupo Constructor Meraki nació en 2009 con una visión clara: 
                  crear espacios donde las familias colombianas pudieran conectar 
                  con la naturaleza sin sacrificar comodidad y seguridad.
                </p>
                
                <p>
                  Con más de 15 años de experiencia, nos hemos consolidado como 
                  líderes en el desarrollo de condominios campestres tipo club de campo, 
                  entregando proyectos que superan las expectativas de nuestros clientes.
                </p>

                <p>
                  La palabra "Meraki" proviene del griego y significa hacer algo con 
                  pasión, creatividad y amor. Eso es exactamente lo que ponemos en 
                  cada proyecto: nuestra alma.
                </p>

                <p>
                  Hoy, con más de 5,000 familias satisfechas y 25 proyectos entregados, 
                  continuamos creciendo con el compromiso de ofrecer inversiones seguras 
                  y espacios únicos en armonía con la naturaleza.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-[#947018] via-[#B7871C] to-[#F4BA3E]" id="estadisticas">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl mb-2 text-white">
                  {stat.number}
                </div>
                <div className="text-lg text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white" id="valores">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#0d060a]">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada una de nuestras decisiones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#B68110] to-[#F4BA3E] flex items-center justify-center">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl mb-3 text-[#0d060a]">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50" id="mision-vision">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-[#B68110] to-[#F4BA3E] flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl mb-4 text-[#0d060a]">Misión</h3>
              <p className="text-lg text-gray-600">
                Desarrollar proyectos inmobiliarios campestres de alta calidad 
                que conecten a las familias con la naturaleza, ofreciendo inversiones 
                seguras, rentables y sostenibles, con un compromiso inquebrantable 
                hacia la excelencia y la satisfacción del cliente.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-[#B68110] to-[#F4BA3E] flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl mb-4 text-[#0d060a]">Visión</h3>
              <p className="text-lg text-gray-600">
                Ser reconocidos como la empresa líder en desarrollo de condominios 
                campestres en Colombia, expandiendo nuestra presencia a nivel nacional 
                e internacional, creando comunidades sostenibles que mejoren la calidad 
                de vida de miles de familias.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white" id="equipo">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Award className="w-16 h-16 mx-auto mb-6 text-[#B7871C]" />
              <h2 className="text-4xl md:text-5xl mb-6 text-[#0d060a]">
                Un Equipo de Expertos
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contamos con un equipo multidisciplinario de arquitectos, ingenieros, 
                abogados y expertos en bienes raíces que trabajan día a día para 
                garantizar que cada proyecto cumpla con los más altos estándares de calidad.
              </p>
              <p className="text-lg text-gray-600">
                Nuestro compromiso con la innovación, la sostenibilidad y la satisfacción 
                del cliente nos ha permitido mantener un crecimiento constante y construir 
                relaciones duraderas con nuestros inversionistas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Asesores Section */}
      <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white" id="asesores">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl mb-4 text-[#0d060a]">
                Nuestros Asesores Inmobiliarios
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Profesionales expertos listos para ayudarte a encontrar la inversión perfecta
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {combinedAsesores.map((asesor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={asesor.foto}
                    alt={asesor.nombre}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-2 text-[#0d060a]">{asesor.nombre}</h3>
                  <p className="text-[#B7871C] font-semibold mb-4">{asesor.cargo}</p>
                  <Button
                    onClick={() => {
                      const message = encodeURIComponent(`Hola ${asesor.nombre.split(' ')[0]}, me gustaría información sobre los proyectos disponibles`);
                      window.open(`https://wa.me/${asesor.whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
                    }}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contactar por WhatsApp
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="certificaciones">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#0d060a]">
              Certificaciones y Reconocimientos
            </h2>
            <p className="text-xl text-gray-600">
              Respaldados por las mejores entidades del sector
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <p className="text-lg text-gray-700 text-center">
                ✓ Cámara Colombiana de la Construcción (CAMACOL)
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <p className="text-lg text-gray-700 text-center">
                ✓ Lonja de Propiedad Raíz
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <p className="text-lg text-gray-700 text-center">
                ✓ ISO 9001:2015 Certificado
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50" id="ferias">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Calendar className="w-16 h-16 mx-auto mb-6 text-[#B7871C]" />
              <h2 className="text-4xl md:text-5xl mb-4 text-[#0d060a]">
                Ferias Inmobiliarias
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nuestra participación en los eventos más importantes del sector inmobiliario colombiano
              </p>
            </motion.div>
          </div>

          <div className="space-y-16 max-w-7xl mx-auto">
            {combinedFerias.map((feria, index) => (
              <motion.div
                key={feria.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Carousel */}
                  <div className="relative h-[400px] lg:h-[600px]">
                    <Slider {...carouselSettings}>
                      {feria.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="relative h-[400px] lg:h-[600px]">
                          <img
                            src={image}
                            alt={`${feria.nombre} - Imagen ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>

                  {/* Información */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-3xl md:text-4xl mb-4 text-[#0d060a]">
                        {feria.nombre}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-gray-600 mb-3">
                        <Calendar className="w-5 h-5 text-[#B7871C]" />
                        <span className="text-lg">{feria.fecha}</span>
                      </div>

                      <div className="flex items-center gap-2 text-gray-600 mb-6">
                        <MapPin className="w-5 h-5 text-[#B7871C]" />
                        <span className="text-lg">{feria.lugar}</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl mb-3 text-[#0d060a]">Experiencia</h4>
                        <p className="text-gray-600 leading-relaxed">
                          {feria.descripcion}
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-[#F4BA3E]/10 to-[#B7871C]/10 p-6 rounded-2xl border-l-4 border-[#B7871C]">
                        <h4 className="text-xl mb-3 text-[#0d060a]">Logros Destacados</h4>
                        <p className="text-gray-700 leading-relaxed">
                          {feria.logros}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
