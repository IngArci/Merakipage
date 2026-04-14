import type { BloqueHorario, ClubKey } from './types';

// ─── Proyectos y sectores ────────────────────────────────────────────────────
export const proyectosSectores: Record<ClubKey, string[]> = {
  'LLANO GRANDE':     ['EL POBLADO', 'SANTA HELENA', 'SAN ANTONIO', 'MALL GUATAPE', 'VALLE DE ABURRÁ'],
  'RIO CLARO':        ['RIO LAGUNILLA', 'RIO MEDINA', 'RIO GUALÍ'],
  'LAGUNA MAR':       ['MAR CANARIAS', 'MAR SANTORINI'],
  'CAÑON DE ARIZONA': ['TEXAS', 'COLORADO', 'LAS VEGAS', 'LOS ANGELES', 'SAN FRANCISCO'],
  'GRAN ARIZONA':     ['LA TEBAIDA', 'CABECERA DEL LLANO', 'LA MINA', 'LAS VIOLETAS', 'CHIPALO', 'POTRERITO'],
  'PROTECTOR':        ['GLAMPING'],
};

// ─── Dirección de cita presencial ────────────────────────────────────────────
export const DIRECCION_CITA = 'Cra. 7 #57-129, Ibagué, Tolima';

// ─── Bloques horarios ────────────────────────────────────────────────────────
export const bloquesManana: BloqueHorario[] = [
  { valor: '7:40',  texto: '7:40 AM'  },
  { valor: '8:00',  texto: '8:00 AM'  },
  { valor: '8:20',  texto: '8:20 AM'  },
  { valor: '8:40',  texto: '8:40 AM'  },
  { valor: '9:00',  texto: '9:00 AM'  },
  { valor: '9:20',  texto: '9:20 AM'  },
  { valor: '9:40',  texto: '9:40 AM'  },
  { valor: '10:00', texto: '10:00 AM' },
  { valor: '10:20', texto: '10:20 AM' },
  { valor: '10:40', texto: '10:40 AM' },
  { valor: '11:00', texto: '11:00 AM' },
  { valor: '11:20', texto: '11:20 AM' },
  { valor: '11:40', texto: '11:40 AM' },
  { valor: '12:00', texto: '12:00 PM' },
];

export const bloquesTarde: BloqueHorario[] = [
  { valor: '14:00', texto: '2:00 PM'  },
  { valor: '14:20', texto: '2:20 PM'  },
  { valor: '14:40', texto: '2:40 PM'  },
  { valor: '15:00', texto: '3:00 PM'  },
  { valor: '15:20', texto: '3:20 PM'  },
  { valor: '15:40', texto: '3:40 PM'  },
  { valor: '16:00', texto: '4:00 PM'  },
  { valor: '16:20', texto: '4:20 PM'  },
];

export const bloquesJueves: BloqueHorario[] = [...bloquesManana, ...bloquesTarde];

// ─── Fechas especiales ───────────────────────────────────────────────────────
export const DIAS_JORNADA_COMPLETA = [
  { dia: 23, mes: 11, ano: 2025 },
  { dia: 30, mes: 11, ano: 2025 },
];

export const FECHAS_BLOQUEADAS = [
  { dia: 25, mes: 11, ano: 2025 },
  { dia: 1,  mes: 0,  ano: 2026 },
  { dia: 2,  mes: 3,  ano: 2026 },
  { dia: 4,  mes: 3,  ano: 2026 },
  { dia: 8,  mes: 11, ano: 2026 },
];
