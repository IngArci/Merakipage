import { motion } from 'motion/react';
import { Stage } from '../../../types/project';

interface ProjectStagesProps {
  stages?: Stage[];
}

export function ProjectStages({ stages }: ProjectStagesProps) {
  if (!stages || stages.length === 0) return null;

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-light text-black tracking-tight mb-4">
            Etapas del Proyecto
          </h2>
          <div className="w-20 h-1 bg-[#F4BA3E] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              {stage.subtitle && (
                <span className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">
                  {stage.subtitle}
                </span>
              )}
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden flex items-center justify-center p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={stage.image}
                  alt={stage.name}
                  className="max-w-full max-h-full object-contain transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=' + stage.name;
                  }}
                />
              </motion.div>

              <h3 className="mt-6 text-2xl font-semibold text-black/80 group-hover:text-black transition-colors duration-300">
                {stage.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
