import { motion } from 'motion/react';
import { Link } from 'react-router';
import { 
  CheckCircle, 
  Award, 
  Shield, 
  TrendingUp, 
  MapPin,
  Gift,
  Users,
  ArrowRight,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { ProjectCard } from '../components/ProjectCard';
import { LeadForm } from '../components/LeadForm';

export default function Home() {
  const projects = [
    {
      title: 'Río Claro',
      location: 'Valle del Cauca',
      sizes: '500m² - 1,000m²',
      image: 'https://images.unsplash.com/photo-1600257729950-13a634d32697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHJpdmVyJTIwbGFuZHNjYXBlJTIwbmF0dXJlfGVufDF8fHx8MTc3Mzg0NTUzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      slug: 'rio-claro'
    },
    {
      title: 'Laguna Mar',
      location: 'Antioquia',
      sizes: '600m² - 1,200m²',
      image: 'https://images.unsplash.com/photo-1618479357329-14dd10e76f5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWdvb24lMjB0cm9waWNhbCUyMG5hdHVyYWwlMjB3YXRlcnxlbnwxfHx8fDE3NzM4NDU1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      slug: 'laguna-mar'
    },
    {
      title: 'Cañón de Arizona',
      location: 'Santander',
      sizes: '800m² - 2,000m²',
      image: 'https://images.unsplash.com/photo-1764223531702-1614efb82e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwbGFuZCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3Mzg0NTUzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      slug: 'canon-arizona'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Propiedad Legal',
      description: 'Títulos de propiedad 100% legales y registrados'
    },
    {
      icon: Award,
      title: 'Licencias',
      description: 'Todos nuestros proyectos cuentan con licencias al día'
    },
    {
      icon: CheckCircle,
      title: 'Servicios Garantizados',
      description: 'Agua, luz, vías pavimentadas y seguridad'
    },
    {
      icon: MapPin,
      title: 'Ubicación Estratégica',
      description: 'Cercanía a ciudades principales y naturaleza'
    },
    {
      icon: TrendingUp,
      title: 'Alta Valorización',
      description: 'Inversión segura con alta rentabilidad'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1758565811272-e79917ca0adc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb3VudHJ5c2lkZSUyMGVzdGF0ZSUyMG5hdHVyYWwlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzczODQ1NTI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <Sparkles className="w-6 h-6 text-[#F4BA3E]" />
                <span className="text-[#FFF18F] text-sm tracking-wider uppercase">
                  Inversión segura en naturaleza
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl mb-6 text-white leading-tight">
                Haz del campo tu segundo hogar
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-10">
                Invierte en terrenos campestres y vive la experiencia de un club de campo
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#B68110] to-[#F4BA3E] hover:from-[#947018] hover:to-[#B7871C] text-white shadow-2xl text-lg px-8 py-6"
                  asChild
                >
                  <Link to="/proyectos">
                    Ver proyectos
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#F4BA3E] text-[#F4BA3E] hover:bg-[#F4BA3E] hover:text-black text-lg px-8 py-6"
                  asChild
                >
                  <Link to="/contacto">Quiero invertir</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-gradient-to-b from-black via-[#0d060a] to-black relative">
        {/* Decorative gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4BA3E] opacity-5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B7871C] opacity-5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-white">
              Nuestros Proyectos
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Descubre los mejores condominios campestres tipo club de campo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] hover:from-[#B7871C] hover:via-[#FFF18F] hover:to-[#B7871C] text-black shadow-2xl"
              asChild
            >
              <Link to="/proyectos">
                Ver todos los proyectos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Casas Section */}
      <section className="py-24 bg-gradient-to-b from-black via-[#1a1a1a] to-black relative">
        {/* Decorative gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F4BA3E] opacity-5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1760802288759-5a06e0db753a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdGlueSUyMGhvdXNlJTIwY2hhbGV0fGVufDF8fHx8MTc3Mzg0NTUzMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Casas campestres"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl border-2 border-[#F4BA3E]/20"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 text-white">
                Casas Campestres Modernas
              </h2>
              
              <p className="text-lg text-gray-300 mb-8">
                Descubre nuestros modelos de casas campestres, diseñadas para brindarte 
                comodidad, elegancia y una conexión única con la naturaleza.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#F4BA3E] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg mb-1 text-white">Diseño Moderno</h4>
                    <p className="text-gray-400">Arquitectura contemporánea y funcional</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#F4BA3E] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg mb-1 text-white">Rodeado de Naturaleza</h4>
                    <p className="text-gray-400">Vistas panorámicas y aire puro</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#F4BA3E] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg mb-1 text-white">Inversión Rentable</h4>
                    <p className="text-gray-400">Alta demanda y valorización</p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-[#B68110] to-[#F4BA3E] hover:from-[#947018] hover:to-[#B7871C] text-black shadow-2xl"
                asChild
              >
                <Link to="/casas">
                  Conoce los modelos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Referral Program Section */}
      <section className="py-24 bg-gradient-to-br from-black via-[#0d060a] to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#F4BA3E] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#B7871C] rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#947018] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Gift className="w-8 h-8 text-[#F4BA3E]" />
              <span className="text-[#FFF18F] text-sm tracking-wider uppercase">
                Programa especial
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-[#FFF18F] via-[#F4BA3E] to-[#FFF18F] bg-clip-text text-transparent">
              Gana Recomendando con Meraki
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Forma parte de nuestro programa de referidos y obtén beneficios exclusivos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#B68110] to-[#F4BA3E] flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl mb-3">1. Recomienda</h3>
              <p className="text-gray-300">
                Comparte Meraki con tus amigos y familiares
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#B68110] to-[#F4BA3E] flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl mb-3">2. Se concreta la venta</h3>
              <p className="text-gray-300">
                Tu referido invierte en uno de nuestros proyectos
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#B68110] to-[#F4BA3E] flex items-center justify-center">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl mb-3">3. Recibes tu beneficio</h3>
              <p className="text-gray-300">
                Obtén recompensas atractivas por cada referido exitoso
              </p>
            </motion.div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#B68110] via-[#F4BA3E] to-[#FFF18F] hover:from-[#FFF18F] hover:via-[#F4BA3E] hover:to-[#B68110] text-black shadow-2xl text-lg px-8 py-6"
              asChild
            >
              <Link to="/referidos">
                Quiero referir
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-black via-[#1a1a1a] to-black relative">
        {/* Decorative gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#F4BA3E] opacity-5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#B7871C] opacity-5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-white">
              Las Garantías Meraki
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tu tranquilidad es nuestra prioridad
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-to-b from-[#1a1a1a] to-black border border-[#F4BA3E]/20 hover:border-[#F4BA3E]/50 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#B68110] to-[#F4BA3E] flex items-center justify-center shadow-lg shadow-[#F4BA3E]/20">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosotros Preview Section */}
      <section className="py-24 bg-gradient-to-b from-black via-[#0d060a] to-black relative">
        {/* Decorative gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#F4BA3E] opacity-5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 text-white">
                Únete a los Inversionistas del Futuro
              </h2>
              
              <p className="text-lg text-gray-300 mb-6">
                En Grupo Constructor Meraki, transformamos terrenos en paraísos naturales 
                donde las familias pueden crear recuerdos inolvidables.
              </p>

              <p className="text-lg text-gray-300 mb-8">
                Con más de 15 años de experiencia, somos líderes en desarrollo de 
                condominios campestres, ofreciendo inversiones seguras y rentables.
              </p>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#F4BA3E] text-[#F4BA3E] hover:bg-[#F4BA3E] hover:text-black"
                asChild
              >
                <Link to="/inversionistas">Conoce historias de éxito</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1758519288905-38b7b00c1023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBoYW5kc2hha2UlMjBzdWNjZXNzfGVufDF8fHx8MTc3Mzg0NTUzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nosotros"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl border-2 border-[#F4BA3E]/20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-24 bg-gradient-to-br from-[#0d060a] via-black to-[#0d060a] relative overflow-hidden">
        {/* Decorative gradient effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent" />
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#F4BA3E] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#B7871C] rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-white via-[#FFF18F] to-white bg-clip-text text-transparent">
                ¿Listo para invertir en tu futuro?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Completa el formulario y un asesor experto te contactará para 
                ayudarte a encontrar la inversión perfecta para ti.
              </p>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-6 h-6 text-[#F4BA3E]" />
                <span className="text-lg">Respuesta en menos de 24 horas</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <LeadForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}