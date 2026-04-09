import { motion } from 'motion/react';
import { MapPin, Check } from 'lucide-react';

interface ProjectLocationProps {
  address: string;
  coordinates: string;
  nearbyPlaces: string[];
  mapIframe?: string;
}

export function ProjectLocation({ address, coordinates, nearbyPlaces, mapIframe }: ProjectLocationProps) {
  return (
    <section id="ubicacion" className="py-16 bg-gradient-to-b from-black via-[#1a1a1a] to-black">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl mb-6 text-white">Ubicación Estratégica</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] mb-12" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-b from-[#1a1a1a] to-black p-8 rounded-2xl border border-[#F4BA3E]/20">
              <div className="flex items-start space-x-3 mb-6">
                <MapPin className="w-6 h-6 text-[#F4BA3E] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl text-white mb-2">Dirección</h3>
                  <p className="text-gray-300">{address}</p>
                  <p className="text-gray-500 text-sm mt-2">{coordinates}</p>
                </div>
              </div>

              <h3 className="text-xl text-white mb-4 mt-8">Cercanías</h3>
              <ul className="space-y-3">
                {nearbyPlaces.map((place, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#F4BA3E] flex-shrink-0" />
                    <span className="text-gray-300">{place}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map Placeholder or Iframe */}
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border-2 border-[#F4BA3E]/30">
              {mapIframe ? (
                <iframe
                  src={mapIframe}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del proyecto"
                />
              ) : (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1080&q=80"
                    alt="Mapa de ubicación"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center p-6">
                    <p className="text-white text-center">Ubicación privilegiada con fácil acceso</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
