import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { ProjectCard } from '../../../components/shared/ProjectCard';
import { Project } from '../../../types/project';

interface ProjectsSectionProps {
  projects: (Project & { slug: string })[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-[var(--black-pure)] via-[var(--dark-2)] to-[var(--black-pure)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--gold-5)] opacity-[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--gold-3)] opacity-[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[var(--gold-5)] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Catalogo Exclusivo</span>
          <h2 className="text-4xl md:text-6xl mb-6 text-white font-light tracking-tight">
            Nuestros <span className="text-[var(--gold-5)] font-normal italic"> Clubs de campo</span>
          </h2>
          <div className="h-px w-40 mx-auto bg-gradient-to-r from-transparent via-[var(--gold-5)] to-transparent mb-8 opacity-40" />
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Descubre clubes campestres diseñados para quienes buscan el equilibrio perfecto entre lujo y naturaleza.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              image={project.images?.[0] || ''}
              location={`${project.region}${project.location?.nearbyPlaces?.[0] ? ` - ${project.location.nearbyPlaces[0]}` : ''}`}
              sizes={project.sizes}
              status={project.status}
            />
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
  );
}
