import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface Amenity {
  icon: LucideIcon;
  name: string;
  description: string;
}

interface ProjectAmenitiesProps {
  amenities: Amenity[];
}

export function ProjectAmenities({ amenities }: ProjectAmenitiesProps) {
  return (
    <section id="amenidades" className="py-16 bg-gradient-to-b from-black via-[#0d060a] to-black">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl mb-6 text-white">Amenidades</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] mb-12" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.05,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                {/* Glow effect background */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#947018] to-[#F4BA3E] rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
                
                <div className="relative h-full bg-[#111111]/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 group-hover:border-[#F4BA3E]/40 transition-all duration-300 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-black border border-[#F4BA3E]/20 flex items-center justify-center mb-4 group-hover:border-[#F4BA3E]/60 transition-colors shadow-xl overflow-hidden relative">
                    {/* Inner glow on hover */}
                    <div className="absolute inset-0 bg-[#F4BA3E]/0 group-hover:bg-[#F4BA3E]/5 transition-colors duration-300"></div>
                    <amenity.icon className="w-8 h-8 text-[#F4BA3E] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  
                  <h3 className="text-sm md:text-base text-white font-medium tracking-wide group-hover:text-[#F4BA3E] transition-colors">
                    {amenity.name}
                  </h3>
                  
                  {amenity.description && (
                    <p className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                      {amenity.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
