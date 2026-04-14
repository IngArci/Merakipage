import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

interface SuccessScreenProps {
  onReset: () => void;
}

export function SuccessScreen({ onReset }: SuccessScreenProps) {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center"
    >
      <CheckCircle2 className="w-16 h-16 text-[#F4BA3E] mx-auto mb-4" />
      <h3 className="text-2xl text-white font-semibold mb-2">¡Cita agendada!</h3>
      <p className="text-gray-400 mb-6">
        Hemos guardado tu información y te enviaremos un correo de confirmación.
      </p>
      <button
        onClick={onReset}
        className="px-8 py-3 bg-[#F4BA3E] text-black font-bold rounded-xl text-sm hover:bg-[#B7871C] transition-colors"
      >
        Agendar otra cita
      </button>
    </motion.div>
  );
}
