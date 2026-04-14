import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, MapPin, Home, Users } from 'lucide-react';

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
}

const STATS: StatItem[] = [
  {
    icon: Home,
    value: 1650,
    suffix: '+',
    label: 'Lotes Vendidos',
    sublabel: 'Familias que ya invirtieron con Meraki',
  },
  {
    icon: TrendingUp,
    value: 5,
    suffix: '+',
    label: 'Proyectos Activos',
    sublabel: 'En Melgar, Alvarado y Mariquita',
  },
  {
    icon: MapPin,
    value: 5,
    suffix: '',
    label: 'Ciudades',
    sublabel: 'Ibagué, Melgar, Alvarado, Mariquita y Fusagasugá',
  },
  {
    icon: Users,
    value: 25,
    suffix: '+',
    label: 'Años de Experiencia',
    sublabel: 'Construyendo sueños en el Tolima',
  },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

function StatCard({ stat, index, animate }: { stat: StatItem; index: number; animate: boolean }) {
  const count = useCountUp(stat.value, 1800, animate);
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="relative group flex flex-col items-center text-center p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#F4BA3E]/25 hover:bg-white/[0.04] transition-all duration-500"
    >
      {/* glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#F4BA3E]/0 to-[#947018]/0 group-hover:from-[#F4BA3E]/5 group-hover:to-[#947018]/5 transition-all duration-500" />

      <div className="relative z-10">
        <div className="w-14 h-14 mb-6 mx-auto rounded-2xl bg-gradient-to-br from-[#947018] to-[#F4BA3E] flex items-center justify-center shadow-lg shadow-[#F4BA3E]/10 group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-7 h-7 text-black" />
        </div>

        <div className="flex items-end justify-center gap-1 mb-2">
          {stat.prefix && (
            <span className="text-3xl font-bold text-[#F4BA3E] leading-none mb-1">{stat.prefix}</span>
          )}
          <span className="text-5xl md:text-6xl font-bold text-white leading-none">
            {count}
          </span>
          <span className="text-3xl font-bold text-[#F4BA3E] leading-none mb-1">{stat.suffix}</span>
        </div>

        <p className="text-white font-bold text-lg mb-1 tracking-tight uppercase">{stat.label}</p>
        <p className="text-gray-500 text-xs tracking-wide">{stat.sublabel}</p>
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-black relative overflow-hidden">
      {/* decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F4BA3E]/20 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-6">
            <TrendingUp className="w-4 h-4 text-[#F4BA3E]" />
            <span className="text-[#F4BA3E] text-[10px] font-bold tracking-[0.3em] uppercase">Resultados que Hablan</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
            Más de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4BA3E] via-[#FFF18F] to-[#B7871C]">
              1600 Familias
            </span>{' '}
            ya Invirtieron
          </h2>
          <div className="h-[1.5px] w-24 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent mx-auto mt-6 opacity-40" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} animate={animate} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F4BA3E]/20 to-transparent" />
    </section>
  );
}
