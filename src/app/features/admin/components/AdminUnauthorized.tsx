import { ShieldAlert, LogOut } from 'lucide-react';
import { signOut } from 'firebase/auth';
import { auth } from '../../../../lib/firebase';
import { motion } from 'motion/react';

export function AdminUnauthorized() {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center"
      >
        <div className="bg-[#111] border border-red-500/20 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
          <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldAlert className="w-10 h-10 text-red-500" />
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">Acceso Denegado</h1>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Tu cuenta no tiene permisos de administrador para acceder a este panel.
          </p>

          <button
            onClick={handleLogout}
            className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-xl transition-all border border-white/10 flex items-center justify-center space-x-2"
          >
            <LogOut className="w-5 h-5" />
            <span>Cerrar Sesión</span>
          </button>
          
          <p className="mt-8 text-xs text-gray-600 uppercase tracking-widest font-bold">
            Grupo Constructor Meraki - Seguridad
          </p>
        </div>
      </motion.div>
    </div>
  );
}
