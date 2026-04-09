import { motion } from 'motion/react';
import { ProjectCard } from '../components/shared/ProjectCard';
import { LeadForm } from '../components/shared/LeadForm';
import { Rocket, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function Proyectos() {
  const allProjects = Object.entries(projectsData).map(([slug, data]) => ({
    ...data,
    slug,
    location: `${data.region} - ${data.location.nearbyPlaces[0]}`,
    image: data.images[0]
  }));

  const enLanzamiento = allProjects.filter(p => p.status === 'lanzamiento');
  const entregados = allProjects.filter(p => p.status === 'entregado');

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
