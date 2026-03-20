import { motion } from 'motion/react';
import { ProjectCard } from '../components/ProjectCard';
import { LeadForm } from '../components/LeadForm';
import { Rocket, CheckCircle2 } from 'lucide-react';

export default function Proyectos() {
  const enLanzamiento = [
    {
      title: 'Valle Escondido',
      location: 'Cundinamarca - A 2 horas de Bogotá',
      sizes: '700m², 1,000m², 1,500m²',
      image: 'https://images.unsplash.com/photo-1758565811272-e79917ca0adc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb3VudHJ5c2lkZSUyMGVzdGF0ZSUyMG5hdHVyYWwlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzczODQ1NTI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      slug: 'valle-escondido'
    },
    {
      title: 'Bosques del Paraíso',
      location: 'Eje Cafetero - Armenia',
      sizes: '500m², 800m², 1,200m²',
      image: 'https://images.unsplash.com/photo-1724048413085-1c8d81b3ffa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3VudHJ5JTIwaG91c2UlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc3Mzg0NTUzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      slug: 'bosques-paraiso'
    },
    {
      title: 'Montaña Dorada',
      location: 'Quindío - A 20 min de Montenegro',
      sizes: '600m², 1,000m², 1,800m²',
      image: 'https://images.unsplash.com/photo-1762438421221-1626a4958dbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMG5hdHVyZSUyMGNvdW50cnlzaWRlfGVufDF8fHx8MTc3Mzg0NTUzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      slug: 'montana-dorada'
    }
  ];

  const entregados = [
    {
      title: 'Río Claro',
      location: 'Valle del Cauca - A 45 min de Cali',
      sizes: '500m², 750m², 1,000m²',
      image: 'https://images.unsplash.com/photo-1600257729950-13a634d32697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHJpdmVyJTIwbGFuZHNjYXBlJTIwbmF0dXJlfGVufDF8fHx8MTc3Mzg0NTUzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      slug: 'rio-claro'
    },
    {
      title: 'Laguna Mar',
      location: 'Antioquia - A 1 hora de Medellín',
      sizes: '600m², 900m², 1,200m²',
      image: 'https://images.unsplash.com/photo-1618479357329-14dd10e76f5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWdvb24lMjB0cm9waWNhbCUyMG5hdHVyYWwlMjB3YXRlcnxlbnwxfHx8fDE3NzM4NDU1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      slug: 'laguna-mar'
    },
    {
      title: 'Cañón de Arizona',
      location: 'Santander - A 30 min de Bucaramanga',
      sizes: '800m², 1,500m², 2,000m²',
      image: 'https://images.unsplash.com/photo-1764223531702-1614efb82e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwbGFuZCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3Mzg0NTUzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      slug: 'canon-arizona'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0d060a] via-[#373634] to-[#947018]">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1758565811272-e79917ca0adc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb3VudHJ5c2lkZSUyMGVzdGF0ZSUyMG5hdHVyYWwlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzczODQ1NTI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              Nuestros Proyectos
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Descubre los condominios campestres más exclusivos de Colombia
            </p>
          </motion.div>
        </div>
      </section>

      {/* En Lanzamiento Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#B68110] to-[#F4BA3E] flex items-center justify-center">
                <Rocket className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 text-[#0d060a]">
              En Lanzamiento
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nuevas oportunidades de inversión con preventa exclusiva
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enLanzamiento.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Entregados Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 text-[#0d060a]">
              Entregados
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proyectos finalizados con éxito y familias felices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {entregados.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl mb-6 text-[#0d060a]">
                ¿No encuentras lo que buscas?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Contáctanos y te ayudaremos a encontrar el terreno perfecto para ti.
              </p>
              <p className="text-base text-gray-600">
                Nuestros asesores están listos para brindarte información detallada 
                sobre cada proyecto, opciones de financiamiento y beneficios exclusivos.
              </p>
            </div>

            <LeadForm 
              title="Solicita información"
              subtitle="Te responderemos en menos de 24 horas"
            />
          </div>
        </div>
      </section>
    </div>
  );
}