import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hand } from 'lucide-react';

interface MapInteractionHintProps {
  onInteraction?: () => void;
}

export function MapInteractionHint({ onInteraction }: MapInteractionHintProps) {
  const [isVisible, setIsVisible] = useState(true);


  const handleDismiss = () => {
    setIsVisible(false);
    if (onInteraction) onInteraction();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
        >
          <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-3xl shadow-2xl flex flex-col items-center gap-4 max-w-[280px] text-center">
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-[#F4BA3E] p-4 rounded-2xl shadow-[0_0_20px_rgba(244,186,62,0.4)]"
              >
                <Hand />
              </motion.div>

              {/* Pulse effect */}
              <motion.div
                animate={{
                  scale: [1, 2],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                className="absolute inset-0 bg-[#F4BA3E] rounded-2xl -z-10"
              />
            </div>

            <div className="space-y-1">
              <h4 className="text-white font-bold text-lg">¡Explora el Plano!</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">
                !Escoge el terreno de su inversion.!
              </p>
            </div>

            <button
              onClick={handleDismiss}
              className="pointer-events-auto mt-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Entendido
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
