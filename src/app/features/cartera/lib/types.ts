export type ClubKey =
  | 'LLANO GRANDE'
  | 'RIO CLARO'
  | 'LAGUNA MAR'
  | 'CAÑON DE ARIZONA'
  | 'GRAN ARIZONA'
  | 'PROTECTOR';

export type TipoCita = 'presencial' | 'virtual' | '';

export interface BloqueHorario {
  valor: string;
  texto: string;
}
