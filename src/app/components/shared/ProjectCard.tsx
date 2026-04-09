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
}

export function ProjectCard({ title, location, sizes, image, slug }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-gradient-to-b from-[#1a1a1a] to-black rounded-2xl shadow-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(244,186,62,0.3)] transition-all duration-300 border border-[#F4BA3E]/20 hover:border-[#F4BA3E]/50 h-full flex flex-col"
    >
      <div className="relative h-64 overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          Disponible
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl mb-3 text-white">{title}</h3>
        
        <div className="flex items-center text-gray-400 mb-3">
          <MapPin className="w-4 h-4 mr-2 text-[#F4BA3E]" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="mb-6 flex-grow">
          <p className="text-sm text-gray-500 mb-1">Tamaños disponibles:</p>
          <p className="text-base text-gray-300">{sizes}</p>
        </div>
        
        <Button
          className="w-full bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] hover:from-[#FFF18F] hover:via-[#F4BA3E] hover:to-[#FFF18F] text-black shadow-lg mt-auto"
          asChild
        >
          <Link to={`/proyectos/${slug}`}>Ver más detalles</Link>
        </Button>
      </div>
    </motion.div>
  );
}