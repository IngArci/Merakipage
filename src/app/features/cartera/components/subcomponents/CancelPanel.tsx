import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { collection, query, where, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Field } from './Field';

const INPUT = 'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4BA3E]/40 focus:border-[#F4BA3E]/40 transition';

interface CancelPanelProps {
  onClose: () => void;
}

export function CancelPanel({ onClose }: CancelPanelProps) {
  const [doc, setDoc] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMsg('Buscando cita...');
    const q = query(collection(db, 'usuarios'), where('documento', '==', doc));
    const snap = await getDocs(q);
    
    if (snap.empty) {
      setMsg('No se encontrÃ³ ninguna cita con ese documento.');
      return;
    }

    const citaDoc = snap.docs[0];
    await deleteDoc(citaDoc.ref);

    try {
      await fetch('https://grupoconstructormeraki.com.co/enviar-cita.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...citaDoc.data(), cancelacion: true }),
      });
      setMsg('Cita cancelada. Te enviamos confirmaciÃ³n por correo.');
    } catch {
      setMsg('Cita eliminada, pero no se pudo enviar el correo.');
    }
    setDoc('');
  };

  return (
    <motion.div
      key="cancel"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      className="bg-white/5 border border-white/10 rounded-3xl p-8"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl text-white font-semibold">Cancelar Cita</h3>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
        >
          <X className="w-4 h-4 text-white" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Field label="NÃºmero de documento de la cita a cancelar">
          <input
            type="text"
            value={doc}
            onChange={e => setDoc(e.target.value)}
            required
            placeholder="NÃºmero de documento"
            className={INPUT}
          />
        </Field>
        <button
          type="submit"
          className="w-full py-3 bg-red-500/80 hover:bg-red-600 text-white font-bold rounded-xl text-sm transition-colors"
        >
          Cancelar cita
        </button>
        {msg && (
          <p className={`text-sm text-center font-medium ${msg.startsWith('Cita cancelada') ? 'text-green-400' : 'text-amber-400'}`}>
            {msg}
          </p>
        )}
      </form>
    </motion.div>
  );
}
