import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar } from 'lucide-react';

import type { ClubKey } from '../lib/types';
import { proyectosSectores } from '../lib/constants';
import { isFechaValidaPorTipo } from '../lib/utils';
import { CustomSelect } from './ui/CustomSelect';


import { Field } from './subcomponents/Field';
import { SuccessScreen } from './subcomponents/SuccessScreen';
import { CancelPanel } from './subcomponents/CancelPanel';

import { useCarteraForm } from '../lib/hooks/useCarteraForm';

const DP_STYLES = `
  .cartera-dp .react-datepicker { background:#1a1a1a; border:1px solid rgba(244,186,62,0.3); color:#fff; border-radius:1rem; font-family:inherit; }
  .cartera-dp .react-datepicker__header { background:#111; border-bottom:1px solid rgba(244,186,62,0.2); border-radius:1rem 1rem 0 0; }
  .cartera-dp .react-datepicker__current-month, .cartera-dp .react-datepicker__day-name { color:#F4BA3E; }
  .cartera-dp .react-datepicker__day { color:#e5e5e5; border-radius:0.5rem; }
  .cartera-dp .react-datepicker__day:hover { background:rgba(244,186,62,0.2); color:#fff; }
  .cartera-dp .react-datepicker__day--selected { background:#F4BA3E !important; color:#000 !important; }
  .cartera-dp .react-datepicker__day--disabled { color:#555 !important; }
  .cartera-dp .react-datepicker__navigation-icon::before { border-color:#F4BA3E; }
  .cartera-dp .react-datepicker__input-container input { width:100%; }
`;

const INPUT = 'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4BA3E]/40 focus:border-[#F4BA3E]/40 transition';

export function CarteraForm() {
  const {
    form, set, handleSubmit,
    horariosDisponibles, enviando, mensaje,
    success, reset
  } = useCarteraForm();

  const [cancelar, setCancelar] = useState(false);

  const clubOpts = (Object.keys(proyectosSectores) as ClubKey[]).map(k => ({ value: k, label: k }));
  const sectorOpts = form.club ? proyectosSectores[form.club as ClubKey].map(s => ({ value: s, label: s })) : [];
  const horaOpts = horariosDisponibles.map(b => ({ value: b.valor, label: b.texto }));

  const fechaLabel = form.tipoCita === 'presencial' ? 'Fecha (martes o jueves)' : 'Fecha (jueves)';

  return (
    <section id="agendar-cita" className="py-20 bg-[#0d060a] cartera-dp relative overflow-hidden">
      <style>{DP_STYLES}</style>

      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F4BA3E]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#B7871C]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">

          <div className="text-center mb-10">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-[#B68110] to-[#F4BA3E] flex items-center justify-center shadow-lg shadow-[#F4BA3E]/20">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-3 text-center">Agenda tu Cita</h2>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent mx-auto mb-4" />
            <p className="text-gray-400 text-sm text-center">Nuestro equipo confirmará tu solicitud a la brevedad</p>
          </div>

          <AnimatePresence mode="wait">
            {success ? (
              <SuccessScreen key="success" onReset={reset} />
            ) : cancelar ? (
              <CancelPanel key="cancel" onClose={() => setCancelar(false)} />
            ) : (
              <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Nombre completo">
                    <input type="text" required placeholder="Tu nombre" value={form.nombre} onChange={e => set('nombre', e.target.value)} className={INPUT} />
                  </Field>
                  <Field label="Correo electrónico">
                    <input type="email" required placeholder="tu@email.com" value={form.correo} onChange={e => set('correo', e.target.value)} className={INPUT} />
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Celular">
                    <input type="tel" required placeholder="+57 300 0000" value={form.celular} onChange={e => set('celular', e.target.value)} className={INPUT} />
                  </Field>
                  <Field label="Documento">
                    <input type="text" required placeholder="Documento de identidad" value={form.documento} onChange={e => set('documento', e.target.value)} className={INPUT} />
                  </Field>
                </div>

                <Field label="Club de Campo / Proyecto">
                  <CustomSelect value={form.club} onChange={v => set('club', v as ClubKey)} options={clubOpts} placeholder="Selecciona proyecto" />
                </Field>

                <Field label="Sector">
                  <CustomSelect value={form.sector} onChange={v => set('sector', v)} options={sectorOpts} placeholder="Selecciona sector" disabled={!form.club} />
                </Field>

                <Field label="Tipo de Cita">
                  <div className="grid grid-cols-2 gap-3">
                    {['presencial', 'virtual'].map(t => (
                      <button key={t} type="button" onClick={() => set('tipoCita', t as any)} className={`py-3 rounded-xl text-sm font-semibold border capitalize transition-all ${form.tipoCita === t ? 'bg-[#F4BA3E] text-black border-[#F4BA3E]' : 'bg-white/5 text-gray-300 border-white/10 hover:border-[#F4BA3E]/20'}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </Field>

                <Field label={fechaLabel}>
                  <DatePicker
                    selected={form.fecha}
                    onChange={(d: Date | null) => set('fecha', d)}
                    filterDate={(d: Date) => isFechaValidaPorTipo(d, form.tipoCita)}
                    dateFormat="dd-MM-yyyy"
                    minDate={new Date()}
                    placeholderText="Seleccionar fecha"
                    disabled={!form.tipoCita}
                    className={INPUT}
                    wrapperClassName="w-full"
                    popperClassName="cartera-dp"
                  />
                </Field>

                {form.fecha && (
                  <Field label="Hora disponible">
                    <CustomSelect value={form.hora} onChange={v => set('hora', v)} options={horaOpts} placeholder={horariosDisponibles.length ? "Seleccionar hora" : "No hay horarios"} disabled={!horariosDisponibles.length} />
                  </Field>
                )}

                <Field label="Motivo de la cita">
                  <textarea rows={3} placeholder="Breve descripción..." value={form.motivo} onChange={e => set('motivo', e.target.value)} className={`${INPUT} resize-none`} />
                </Field>

                {mensaje && <p className="text-sm text-center text-amber-500 font-medium">{mensaje}</p>}

                <button type="submit" disabled={enviando} className="w-full py-4 bg-gradient-to-r from-[#B68110] to-[#F4BA3E] text-black font-bold rounded-2xl text-sm tracking-wide transition-all shadow-lg shadow-[#F4BA3E]/20 disabled:opacity-50">
                  {enviando ? 'Guardando...' : 'Agendar Cita'}
                </button>

                <button type="button" onClick={() => setCancelar(true)} className="w-full text-sm text-gray-500 hover:text-amber-500 transition-colors underline">
                  ¿Deseas cancelar una cita previa?
                </button>

              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
