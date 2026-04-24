import { useState } from 'react';
import { MessageCircle, X, Phone, CreditCard, Headphones } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface WhatsAppArea {
  name: string;
  description: string;
  phone: string;
  icon: typeof Phone;
  color: string;
}

const whatsappAreas: WhatsAppArea[] = [
  {
    name: 'Ventas',
    description: 'Información sobre proyectos e inversión',
    phone: '573176820728',
    icon: Phone,
    color: 'from-blue-500 to-blue-600',
  },

  {
    name: 'Servicio al Cliente',
    description: 'Soporte y atención general',
    phone: '573147868069',
    icon: Headphones,
    color: 'from-emerald-500 to-emerald-600',
  },
];

export function WhatsAppMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleAreaClick = (phone: string, areaName: string) => {
    const message = encodeURIComponent(`Hola, me gustaría hablar con el área de ${areaName}`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="absolute bottom-20 right-0 w-80 bg-gradient-to-b from-[#1a1a1a] to-black rounded-2xl shadow-2xl border border-[#F4BA3E]/30 overflow-hidden z-50"
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 border border-[#F4BA3E]/30 hover:border-[#F4BA3E]/60 flex items-center justify-center transition-all group"
                aria-label="Cerrar menú"
              >
                <X className="w-4 h-4 text-gray-400 group-hover:text-[#F4BA3E] transition-colors" />
              </button>

              {/* Header */}
              <div className="bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] p-5">
                <h3 className="text-black font-bold text-lg pr-8">¡CONTACTANOS AHORA!</h3>
                <p className="text-black/70 text-sm mt-1">Selecciona el área de tu interés</p>
              </div>

              {/* Menu Items */}
              <div className="p-3">
                {whatsappAreas.map((area, index) => (
                  <motion.button
                    key={area.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    onClick={() => handleAreaClick(area.phone, area.name)}
                    className="w-full flex items-start space-x-4 p-4 rounded-xl hover:bg-[#F4BA3E]/10 transition-all group border border-transparent hover:border-[#F4BA3E]/30 mb-2 last:mb-0"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${area.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="text-white font-semibold mb-1 group-hover:text-[#F4BA3E] transition-colors">
                        {area.name}
                      </h4>
                      <p className="text-gray-400 text-sm leading-snug">{area.description}</p>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Footer */}
              <div className="p-4 bg-black/50 border-t border-[#F4BA3E]/20">
                <div className="flex items-center justify-center space-x-2">
                  <img
                    src="/images/whatsapp-opt.webp"
                    alt="WhatsApp"
                    className="w-4 h-4 object-contain"
                  />
                  <p className="text-gray-400 text-xs">
                    Serás redirigido a WhatsApp
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all relative ${isOpen
          ? 'bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
          : 'bg-transparent hover:scale-110'
          }`}
        aria-label={isOpen ? 'Cerrar menú de WhatsApp' : 'Abrir menú de WhatsApp'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-8 h-8 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="/images/whatsapp-opt.webp"
                alt="WhatsApp"
                className="w-16 h-16 object-contain drop-shadow-xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Pulse animation when closed */}
      {!isOpen && (
        <>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 rounded-full bg-green-400/20 -z-10"
          />

          {/* Notification badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full border-2 border-white flex items-center justify-center shadow-lg"
          >
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-white text-xs font-bold"
            >
              2
            </motion.span>
          </motion.div>
        </>
      )}
    </div>
  );
}