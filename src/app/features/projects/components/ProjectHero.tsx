import { motion } from 'motion/react';
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
  deliveryDate
}: ProjectHeroProps) {
  return (
    <section className="relative py-12 bg-gradient-to-b from-black via-[#0d060a] to-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link to="/proyectos">
            <Button variant="outline" className="border-[#F4BA3E] text-[#F4BA3E] hover:bg-[#F4BA3E] hover:text-black">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a proyectos
            </Button>
          </Link>
        </motion.div>

        {/* Title and Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-6xl mb-4 text-white">{title}</h1>
          <div className="flex items-center text-gray-300 mb-4">
            <MapPin className="w-5 h-5 mr-2 text-[#F4BA3E]" />
            <span className="text-xl">{region}</span>
          </div>
          <p className="text-xl text-gray-400">{shortDescription}</p>
        </motion.div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[500px] rounded-2xl overflow-hidden border-2 border-[#F4BA3E]/30"
          >
            <img
              src={images[selectedImage]}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedImage(index)}
                className={`relative h-[240px] rounded-xl overflow-hidden cursor-pointer transition-all ${selectedImage === index
                  ? 'border-4 border-[#F4BA3E] scale-95'
                  : 'border-2 border-[#F4BA3E]/20 hover:border-[#F4BA3E]/50'
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-gradient-to-b from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F4BA3E]/20">
            {/* pendiente si el jefe quiere que diga precios desde */}
            <p className="text-gray-400 text-sm mb-2">Desde</p>
            <p className="text-2xl text-[#F4BA3E] font-semibold">{priceFrom}</p>
          </div>
          <div className="bg-gradient-to-b from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F4BA3E]/20">
            <p className="text-gray-400 text-sm mb-2">Tamaños</p>
            <p className="text-2xl text-white font-semibold">{sizes}</p>
          </div>
          <div className="bg-gradient-to-b from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F4BA3E]/20">
            <p className="text-gray-400 text-sm mb-2">Disponibles</p>
            <p className="text-2xl text-white font-semibold">{availableLots}/{totalLots}</p>
          </div>
          {/* revision con el jefe si quiere que diga fecha de entrega */}
          {/* <div className="bg-gradient-to-b from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F4BA3E]/20">
            <p className="text-gray-400 text-sm mb-2">Entrega</p>
            <p className="text-2xl text-white font-semibold">{deliveryDate}</p>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
