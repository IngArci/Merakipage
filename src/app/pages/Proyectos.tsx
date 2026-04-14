import { projectsData } from '../data/projectsData';
import { SEO } from '../components/shared/SEO';
import { ProyectosHero, ProyectosGrid, ProyectosCTA } from '../features/proyectos/components/ProyectosComponents';

export default function Proyectos() {
  const allProjects = Object.entries(projectsData).map(([slug, data]) => ({ ...data, slug }));
  const enLanzamiento = allProjects.filter(p => p.status === 'lanzamiento');
  const entregados = allProjects.filter(p => p.status === 'entregado');

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Proyectos de Lotes Campestres en Tolima | Rio Claro, Laguna Mar y Más"
        description="Descubre nuestros proyectos de lotes campestres: Rio Claro en Mariquita, Laguna Mar en Melgar y Cañón de Arizona en Alvarado. Desde $87M con amenidades de club exclusivo."
        canonical="/proyectos"
      />
      <ProyectosHero />
      <ProyectosGrid enLanzamiento={enLanzamiento} entregados={entregados} />
      <ProyectosCTA />
    </div>
  );
}
