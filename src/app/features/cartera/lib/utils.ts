import type { BloqueHorario, TipoCita } from './types';
import {
  DIAS_JORNADA_COMPLETA,
  FECHAS_BLOQUEADAS,
  bloquesManana,
  bloquesJueves,
} from './constants';

/** Formatea una Date como "dd-mm-yyyy" */
export function formateaFecha(fecha: Date): string {
  const d = String(fecha.getDate()).padStart(2, '0');
  const m = String(fecha.getMonth() + 1).padStart(2, '0');
  return `${d}-${m}-${fecha.getFullYear()}`;
}

/** Devuelve true si la fecha es un día de jornada completa especial */
export function esJornadaCompleta(date: Date): boolean {
  const d = date.getDate(), m = date.getMonth(), y = date.getFullYear();
  return DIAS_JORNADA_COMPLETA.some(f => f.dia === d && f.mes === m && f.ano === y);
}

/** Devuelve true si la fecha es un festivo bloqueado */
export function esFestivoBloqueado(date: Date): boolean {
  const d = date.getDate(), m = date.getMonth(), y = date.getFullYear();
  return FECHAS_BLOQUEADAS.some(f => f.dia === d && f.mes === m && f.ano === y);
}

/** Devuelve true si el día es válido para el tipo de cita */
export function isFechaValidaPorTipo(date: Date, tipo: TipoCita): boolean {
  if (!tipo) return false;
  if (esFestivoBloqueado(date)) return false;
  if (esJornadaCompleta(date)) return true; // cualquier tipo

  const hoy = new Date(); hoy.setHours(0, 0, 0, 0);
  const copia = new Date(date); copia.setHours(0, 0, 0, 0);
  if (copia < hoy) return false;

  const day = date.getDay();
  if (tipo === 'presencial') return day === 2 || day === 4; // mar o jue
  if (tipo === 'virtual')    return day === 4;              // solo jue
  return false;
}

/** Devuelve los bloques horarios disponibles para una fecha y tipo de cita */
export function obtenerBloquesPorFechaYTipo(
  fecha: Date | null,
  tipo: TipoCita
): BloqueHorario[] {
  if (!fecha || !tipo) return [];

  const day = fecha.getDay();
  let bloques: BloqueHorario[] = [];

  if (esJornadaCompleta(fecha)) {
    bloques = bloquesJueves;
  } else if (tipo === 'presencial' && day === 2) {
    bloques = bloquesManana;
  } else if (day === 4) {
    bloques = bloquesJueves;
  }

  // Filtra los bloques ya pasados si es hoy
  const ahora = new Date();
  const hoy   = new Date(); hoy.setHours(0, 0, 0, 0);
  const copia  = new Date(fecha); copia.setHours(0, 0, 0, 0);

  if (copia.getTime() === hoy.getTime()) {
    const ahoraMin = ahora.getHours() * 60 + ahora.getMinutes();
    bloques = bloques.filter(b => {
      const [h, m] = b.valor.split(':').map(Number);
      return h * 60 + m > ahoraMin;
    });
  }

  return bloques;
}
