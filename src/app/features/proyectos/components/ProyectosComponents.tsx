import { motion } from 'motion/react';
import { ProjectCard } from '../../../components/shared/ProjectCard';
import { LeadForm } from '../../../components/shared/LeadForm';
import { Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

interface Project {
  slug: string;
  title: string;
  images?: string[];
  region: string;
  location?: { nearbyPlaces?: string[] };
  sizes?: any;
  status: string;
}

interface ProyectosGridProps {
  enVenta: Project[];
  entregados: Project[];
}

// Helper component for section headers
const SectionHeader = ({ icon: Icon, title, subtitle, colorClass }: { icon: any, title: string, subtitle: string, colorClass: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <div className="flex items-center justify-center mb-6">
      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-[0_0_30px_rgba(244,186,62,0.1)] rotate-3`}>
        <Icon className="w-10 h-10 text-white -rotate-3" />
      </div>
    </div>
    <span className="text-[#F4BA3E] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Exclusividad Meraki</span>
    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter">
      {title}
    </h2>
    <div className="flex justify-center mb-8">
      <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent" />
    </div>
    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed italic">
      "{subtitle}"
    </p>
  </motion.div>
);

export function ProyectosHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1758565811272-e79917ca0adc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Proyectos Campestres"
          className="w-full h-full object-cover grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0d060a]/90 to-[#0d060a]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-[#F4BA3E] font-bold tracking-[0.5em] uppercase text-sm mb-6 block">Catálogo de Inversión</span>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 uppercase tracking-tighter leading-none">
            Nuestros <span className="text-[#F4BA3E]">Proyectos</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            Explora los condominios campestres más exclusivos de Colombia, diseñados para transformar tu visión de futuro.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function ProyectosGrid({ enVenta, entregados }: ProyectosGridProps) {
  const renderGrid = (projects: Project[], delay = 0) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project, index) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: (index + delay) * 0.1, duration: 0.5 }}
          className="h-full"
        >
          <ProjectCard
            slug={project.slug}
            title={project.title}
            image={project.images?.[0] || ''}
            location={`${project.region}${project.location?.nearbyPlaces?.[0] ? ` - ${project.location.nearbyPlaces[0]}` : ''}`}
            sizes={project.sizes}
            status={project.status}
          />
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="bg-[#0d060a]">
      {/* En Venta Section */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F4BA3E]/20 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            icon={Rocket}
            title="En venta"
            subtitle="Nuevas oportunidades de inversión con  exclusiva y alta valorización."
            colorClass="from-[#B68110] to-[#F4BA3E]"
          />
          {renderGrid(enVenta)}
        </div>
      </section>

      {/* Entregados Section */}
      <section className="py-24 bg-gradient-to-b from-[#0d060a] to-black relative">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#F4BA3E]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            icon={CheckCircle2}
            title="Proyectos Entregados"
            subtitle="Casos de éxito donde la visión se convirtió en realidad para cientos de familias."
            colorClass="from-[#373634] to-[#6b582b]"
          />
          {renderGrid(entregados, enVenta.length)}
        </div>
      </section>
    </div>
  );
}

export function ProyectosCTA() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#F4BA3E] font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Asesoría Personalizada</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-tighter leading-tight">
                ¿Buscas algo <br />
                <span className="text-[#F4BA3E]">Realmente Único?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
                Contáctanos y te ayudaremos a encontrar el terreno perfecto para tu visión. Nuestros expertos están listos para guiarte en cada paso.
              </p>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 rounded-full bg-[#F4BA3E]/20 flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-[#F4BA3E]" />
                </div>
                <p className="text-white font-bold tracking-widest text-lg uppercase">Encuentra tu lugar hoy</p>
              </div>
            </div>
            <div>
              <LeadForm
                title="Agendar Cita"
                subtitle="Un asesor experto se contactará contigo para ayudarte a encontrar la inversión perfecta."
                formLink="https://api.leadconnectorhq.com/widget/form/chDoVa9nMDI8U5j5PnUo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
