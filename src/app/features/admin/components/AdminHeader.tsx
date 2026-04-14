import { motion } from 'motion/react';
import { LogOut } from 'lucide-react';
import { auth } from '../../../../lib/firebase';
import { signOut } from 'firebase/auth';

export function AdminHeader() {
  const handleLogout = () => {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
      signOut(auth);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
    >
      <div>
        <h1 className="text-5xl mb-4 text-white">Panel Administrativo</h1>
        <div className="h-1 w-32 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018]" />
        <p className="text-gray-300 mt-4">Gestiona los contenidos del sitio web</p>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors bg-white/5 px-4 py-2 rounded-lg border border-white/5 hover:border-red-500/20"
      >
        <LogOut className="w-5 h-5" />
        <span className="text-sm font-medium">Cerrar Sesión</span>
      </button>
    </motion.div>
  );
}
