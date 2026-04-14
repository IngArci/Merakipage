import { useState, useEffect, FormEvent } from 'react';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../../../lib/firebase';
import type { ClubKey, TipoCita } from '../types';
import { DIRECCION_CITA } from '../constants';
import {
  formateaFecha,
  obtenerBloquesPorFechaYTipo,
  esFestivoBloqueado,
  isFechaValidaPorTipo,
} from '../utils';

// ─── Types ──────────────────────────────────────────────────────────────────
export interface FormState {
  nombre: string;
  correo: string;
  celular: string;
  documento: string;
  club: ClubKey | '';
  sector: string;
  numeroTerreno: string;
  tipoCita: TipoCita;
  fecha: Date | null;
  hora: string;
  motivo: string;
}

export const EMPTY_FORM: FormState = {
  nombre: '', correo: '', celular: '', documento: '',
  club: '', sector: '', numeroTerreno: '',
  tipoCita: '', fecha: null, hora: '', motivo: '',
};

// ─── Hook ───────────────────────────────────────────────────────────────────
export function useCarteraForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [horariosOcupados, setHorariosOcupados] = useState<string[]>([]);
  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [success, setSuccess] = useState(false);

  const set = <K extends keyof FormState>(key: K, val: FormState[K]) =>
    setForm(f => ({ ...f, [key]: val }));

  // Reset sector al cambiar club
  useEffect(() => { set('sector', ''); }, [form.club]);

  // Cargar horarios ocupados al cambiar fecha
  useEffect(() => {
    if (!form.fecha) { setHorariosOcupados([]); set('hora', ''); return; }
    (async () => {
      const q = query(collection(db, 'usuarios'), where('fecha', '==', formateaFecha(form.fecha!)));
      const snap = await getDocs(q);
      const ocupados: string[] = [];
      snap.forEach(d => { if (d.data().hora) ocupados.push(d.data().hora as string); });
      setHorariosOcupados(ocupados);
      set('hora', '');
    })();
  }, [form.fecha]);

  const bloques = obtenerBloquesPorFechaYTipo(form.fecha, form.tipoCita);
  const horariosDisponibles = bloques.filter(b => !horariosOcupados.includes(b.valor));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (enviando) return;
    setEnviando(true); setMensaje('');

    if (!form.tipoCita) { setMensaje('Selecciona el tipo de cita.'); setEnviando(false); return; }
    if (!form.fecha || !form.club || !form.sector) { setMensaje('Completa todos los campos requeridos.'); setEnviando(false); return; }
    if (esFestivoBloqueado(form.fecha)) { setMensaje('No se pueden agendar citas en esa fecha.'); set('fecha', null); set('hora', ''); setEnviando(false); return; }
    if (!isFechaValidaPorTipo(form.fecha, form.tipoCita)) { setMensaje('Fecha no válida para el tipo de cita.'); setEnviando(false); return; }
    if (!bloques.some(b => b.valor === form.hora)) { setMensaje('Selecciona una hora válida.'); setEnviando(false); return; }
    if (horariosOcupados.includes(form.hora)) { setMensaje('¡Este horario ya está reservado!'); setEnviando(false); return; }

    try {
      const datos = {
        nombre: form.nombre, documento: form.documento, correo: form.correo,
        celular: form.celular, club: form.club, sector: form.sector,
        numeroterreno: form.numeroTerreno, fecha: formateaFecha(form.fecha),
        hora: form.hora, direccion: DIRECCION_CITA, motivo: form.motivo, tipoCita: form.tipoCita,
      };
      await addDoc(collection(db, 'usuarios'), { ...datos, creado: new Date() });
      await fetch('https://grupoconstructormeraki.com.co/enviar-cita.php', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(datos),
      });
      setSuccess(true);
    } catch (err) {
      setMensaje(`Error al guardar: ${err instanceof Error ? err.message : ''}`);
    }
    setEnviando(false);
  };

  const reset = () => {
    setForm(EMPTY_FORM);
    setSuccess(false);
    setMensaje('');
  };

  return {
    form, set, handleSubmit,
    horariosDisponibles, enviando, mensaje,
    success, setSuccess, reset
  };
}
