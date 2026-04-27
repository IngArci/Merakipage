import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { ArrowLeft, MapPin } from 'lucide-react';
import { Button } from '../../../components/ui/button';

interface ProjectHeroProps {
  title: string;
  region: string;
  shortDescription: string;
  images: string[];
  selectedImage: number;
  setSelectedImage: (index: number) => void;
  priceFrom: string;
  sizes: string;
  availableLots: number;
  totalLots: number;
  deliveryDate: string;
  priceFromUSD?: string;
  showStats?: boolean;
}

export function ProjectHero({
  title,
  region,
  shortDescription,
  images,
  selectedImage,
  setSelectedImage,
  priceFrom,
  sizes,
  availableLots,
  totalLots,
  deliveryDate,
  priceFromUSD,
  showStats = true
}: ProjectHeroProps) {
  // ... (previous logic) ...
  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setSelectedImage((selectedImage + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [selectedImage, images, setSelectedImage]);

  return (
    <section className="relative py-16 bg-gradient-to-b from-[var(--black-pure)] via-[var(--dark-2)] to-[var(--black-pure)]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <Link to="/proyectos">
            <Button variant="outline" className="border-[var(--gold-5)]/30 text-[var(--gold-5)] hover:bg-[var(--gold-5)] hover:text-black transition-all duration-300 rounded-full px-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Catálogo de proyectos
            </Button>
          </Link>
        </motion.div>

        {/* Title and Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl mb-6 text-white font-light tracking-tight leading-tight">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-300">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-[var(--gold-5)]" />
              <span className="text-xl font-light">{region}</span>
            </div>
            <div className="h-4 w-px bg-gray-700 hidden md:block" />
            <p className="text-xl text-gray-400 font-light max-w-2xl italic leading-relaxed">
              {shortDescription}
            </p>
          </div>
        </motion.div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-8 relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden border border-[var(--gold-5)]/20 shadow-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImage}
                src={images[selectedImage]}
                alt={title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--black-pure)]/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 overflow-y-auto max-h-[600px] pr-2 scrollbar-hide">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedImage(index)}
                className={`relative h-[240px] lg:h-[190px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${selectedImage === index
                  ? 'ring-2 ring-[var(--gold-5)] ring-offset-4 ring-offset-[var(--black-pure)] scale-[0.98]'
                  : 'opacity-50 hover:opacity-100 grayscale hover:grayscale-0'
                  }`}
              >
                <img
                  src={image}
                  alt={`${title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto"
          >
            <div className="bg-white/[0.02] backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-[var(--gold-5)]/20 transition-all duration-500 group text-center">
              <p className="text-[var(--gold-5)] text-[12px] uppercase tracking-[0.2em] font-bold mb-3 opacity-60">Inversión Desde</p>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-3">
                  <p className="text-2xl md:text-3xl text-white font-light">{priceFrom}</p>
                  <div className="flex items-center gap-1.5 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                    <img 
                      src="https://flagcdn.com/w40/co.png" 
                      alt="Colombia" 
                      className="w-4 h-auto rounded-sm opacity-80" 
                    />
                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">COP</span>
                  </div>
                </div>
                {priceFromUSD && (
                  <div className="flex items-center gap-3 mt-1 border-t border-white/5 pt-2 w-full justify-center">
                    <p className="text-lg md:text-xl text-gray-400 font-light">{priceFromUSD}</p>
                    <div className="flex items-center gap-1.5 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                      <img 
                        src="https://flagcdn.com/w40/us.png" 
                        alt="USA" 
                        className="w-4 h-auto rounded-sm opacity-80" 
                      />
                      <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">USD</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="bg-white/[0.02] backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-[var(--gold-5)]/20 transition-all duration-500 group text-center">
              <p className="text-[var(--gold-5)] text-[12px] uppercase tracking-[0.2em] font-bold mb-3 opacity-60">Áreas Disponibles</p>
              <p className="text-2xl md:text-3xl text-white font-light">{sizes}</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
