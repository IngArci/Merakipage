import { MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router';
import { motion } from 'motion/react';

interface ProjectCardProps {
  title: string;
  location: string;
  sizes: string;
  image: string;
  slug: string;
  status?: string;
}

export function ProjectCard({ title, location, sizes, image, slug, status }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group bg-gradient-to-b from-[var(--dark-1)] to-[var(--black-pure)] rounded-2xl shadow-2xl overflow-hidden hover:shadow-[0_0_40px_rgba(244,186,62,0.15)] transition-all duration-500 border border-[var(--gold-5)]/10 hover:border-[var(--gold-5)]/40 h-full flex flex-col relative"
    >
      <div className="relative h-64 overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
          width="600"
          height="450"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--black-pure)] via-transparent to-transparent opacity-60" />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-[var(--gold-1)] via-[var(--gold-5)] to-[var(--gold-1)] text-black px-4 py-1.5 rounded-full text-xs font-bold shadow-xl backdrop-blur-sm">
          {status === 'lanzamiento' ? 'LANZAMIENTO' : 'ENTREGADO'}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow bg-[var(--grad-glass)]">
        <h3 className="text-2xl mb-3 text-white font-light tracking-tight group-hover:text-[var(--gold-5)] transition-colors duration-300">
          {title}
        </h3>
        
        <div className="flex items-center text-gray-400 mb-4">
          <MapPin className="w-4 h-4 mr-2 text-[var(--gold-5)]" />
          <span className="text-sm font-light tracking-wide">{location}</span>
        </div>
        
        <div className="mb-8 flex-grow">
          <p className="text-[10px] text-[var(--gold-5)] uppercase tracking-widest font-bold mb-1 opacity-70">Dimensiones</p>
          <p className="text-base text-gray-300 font-light italic">{sizes}</p>
        </div>
        
        <Button
          className="w-full bg-gradient-to-r from-[var(--gold-1)] via-[var(--gold-5)] to-[var(--gold-1)] hover:brightness-110 text-black shadow-lg mt-auto font-bold tracking-widest text-xs h-12 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(244,186,62,0.3)]"
          asChild
        >
          <Link to={`/proyectos/${slug}`}>EXPLORAR PROYECTO</Link>
        </Button>
      </div>
    </motion.div>
  );
}