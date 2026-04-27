import { motion } from 'motion/react';
import { ProjectStage } from '@/types/project';
import { Clock } from 'lucide-react';

interface ProjectStagesProps {
  stages?: ProjectStage[];
}

export function ProjectStages({ stages }: ProjectStagesProps) {
  if (!stages || stages.length === 0) return null;

  const available = stages.filter((s) => s.available);
  const upcoming = stages.filter((s) => !s.available);

  return (
    <section className="py-16 bg-gradient-to-b from-black via-[#0d060a] to-black">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl mb-6 text-white">Etapas del Proyecto</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] mb-12" />

          {/* ── AVAILABLE ── */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#F4BA3E] uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#F4BA3E] inline-block" />
                Disponibles para la venta
              </span>
              <div className="flex-1 h-px bg-[#F4BA3E]/20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
              {available.map((stage, index) => (
                <motion.div
                  key={stage.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
                  whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.2 } }}
                  className="group relative"
                >
                  {/* Glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#947018] to-[#F4BA3E] rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300" />

                  <div className="relative bg-[#111111]/80 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-[#F4BA3E]/40 transition-all duration-300 flex flex-col items-center text-center p-8">
                    {/* Logo */}
                    <div className="w-56 h-56 flex items-center justify-center mb-6 relative">
                      <div className="absolute inset-0 bg-[#F4BA3E]/0 group-hover:bg-[#F4BA3E]/5 rounded-full transition-colors duration-300 blur-xl" />
                      <img
                        src={stage.image}
                        alt={stage.name}
                        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://via.placeholder.com/144x144?text=' + stage.name;
                        }}
                      />
                    </div>

                    {/* Subtitle */}
                    <span className="text-xs font-semibold text-[#F4BA3E]/70 uppercase tracking-[0.25em] mb-2">
                      {stage.subtitle}
                    </span>

                    {/* Name */}
                    <h3 className="text-xl font-medium text-white group-hover:text-[#F4BA3E] transition-colors duration-300">
                      {stage.name}
                    </h3>

                    {/* Divider */}
                    <div className="w-10 h-px bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] my-4" />

                    {/* Tag */}
                    <span className="text-xs font-bold px-3 py-1 rounded-full border border-[#F4BA3E]/40 text-[#F4BA3E] tracking-wider">
                      EN VENTA
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── UPCOMING ── */}
          {upcoming.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 uppercase tracking-widest">
                  <Clock size={14} className="text-gray-600" />
                  Próximamente
                </span>
                <div className="flex-1 h-px bg-white/5" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcoming.map((stage, index) => (
                  <motion.div
                    key={stage.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
                    className="group relative"
                  >
                    <div className="relative bg-[#111111]/60 rounded-2xl border border-white/5 flex flex-col items-center text-center p-6">
                      {/* Logo desaturated */}
                      <div className="w-44 h-44 flex items-center justify-center mb-5">
                        <img
                          src={stage.image}
                          alt={stage.name}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              'https://via.placeholder.com/96x96?text=' + stage.name;
                          }}
                        />
                      </div>

                      {/* Subtitle */}
                      <span className="text-xs font-semibold text-gray-600 uppercase tracking-[0.25em] mb-2">
                        {stage.subtitle}
                      </span>

                      {/* Name */}
                      <h3 className="text-base font-medium text-gray-500 mb-4">
                        {stage.name}
                      </h3>

                      {/* Animated pulse tag */}
                      <div className="flex items-center gap-2">
                        <motion.span
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                          className="w-1.5 h-1.5 rounded-full bg-gray-600 inline-block"
                        />
                        <span className="text-xs text-gray-600 uppercase tracking-widest">
                          En desarrollo
                        </span>
                        <motion.span
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
                          className="w-1.5 h-1.5 rounded-full bg-gray-600 inline-block"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
