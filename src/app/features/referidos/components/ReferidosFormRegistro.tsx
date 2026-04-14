import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

interface FormData {
  ref_nombre: string;
  ref_celular: string;
  quien_nombre: string;
  quien_documento: string;
  quien_celular: string;
  observaciones: string;
  politica: boolean;
}

const INITIAL: FormData = {
  ref_nombre: '',
  ref_celular: '',
  quien_nombre: '',
  quien_documento: '',
  quien_celular: '',
  observaciones: '',
  politica: false,
};

export function ReferidosFormRegistro() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('https://grupoconstructormeraki.com.co/send-referidos.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          politica: form.politica ? '1' : '',
        }),
      });
      const result = await res.json();
      if (!res.ok || !result.ok) throw new Error();
      setSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setError('Hubo un problema al enviar. Por favor intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="registro" className="py-24 bg-black relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4BA3E]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F4BA3E]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatePresence mode="wait">
          {!success ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-[#F4BA3E]/20 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent opacity-30" />
              {/* Header */}
              <div className="text-center mb-10">
                <div className="w-20 h-20 rounded-2xl bg-[#F4BA3E]/10 flex items-center justify-center mx-auto mb-6 border border-[#F4BA3E]/20 rotate-3">
                  <CheckCircle2 className="w-10 h-10 text-[#F4BA3E] -rotate-3" />
                </div>
                <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">Plan de Referidos</h2>
                <div className="h-px w-16 bg-[#F4BA3E]/40 mx-auto my-4" />
                <p className="text-sm text-gray-400 uppercase tracking-widest">Registra los datos de tu referido</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Fila 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Nombre del Referido" name="ref_nombre" value={form.ref_nombre} onChange={handleChange} required />
                  <Field label="Celular del Referido" name="ref_celular" value={form.ref_celular} onChange={handleChange} maxLength={20} required />
                </div>

                {/* Fila 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Nombre de Quien Refiere" name="quien_nombre" value={form.quien_nombre} onChange={handleChange} required />
                  <Field label="Número de Documento" name="quien_documento" value={form.quien_documento} onChange={handleChange} required />
                </div>

                {/* Celular */}
                <Field label="Celular" name="quien_celular" value={form.quien_celular} onChange={handleChange} maxLength={20} required />

                {/* Observaciones */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-[#F4BA3E] uppercase tracking-widest ml-1">
                    Observaciones
                  </label>
                  <textarea
                    name="observaciones"
                    value={form.observaciones}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="px-5 py-4 rounded-2xl text-sm bg-white/5 border border-white/10 text-white shadow-inner resize-none focus:outline-none focus:border-[#F4BA3E]/50 focus:bg-white/10 transition-all duration-300"
                    placeholder="Cuéntanos más detalles..."
                  />
                </div>

                {/* Política */}
                <label className="flex items-center gap-4 cursor-pointer p-2 rounded-xl hover:bg-white/5 transition-colors group">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      name="politica"
                      checked={form.politica}
                      onChange={handleChange}
                      required
                      className="peer h-5 w-5 opacity-0 absolute"
                    />
                    <div className="h-5 w-5 bg-white/5 border border-white/20 rounded-md peer-checked:bg-[#F4BA3E] peer-checked:border-[#F4BA3E] transition-all flex items-center justify-center">
                      <CheckCircle2 className={`w-4 h-4 text-black transition-opacity ${form.politica ? 'opacity-100' : 'opacity-0'}`} />
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 font-light">
                    Acepto la{' '}
                    <a
                      href="#"
                      className="text-[#F4BA3E] hover:text-white underline underline-offset-4 transition-colors"
                    >
                      política de tratamiento de información
                    </a>
                  </span>
                </label>

                {/* Error */}
                {error && (
                  <p className="text-sm text-red-500 text-center">{error}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 bg-gradient-to-r from-[#B68110] via-[#F4BA3E] to-[#B68110] hover:brightness-110 text-black font-extrabold rounded-2xl text-xs tracking-[0.2em] transition-all duration-500 disabled:opacity-50 shadow-[0_0_30px_rgba(244,186,62,0.2)] hover:shadow-[0_0_40px_rgba(244,186,62,0.4)] uppercase"
                >
                  {loading ? 'Procesando...' : 'Registrar Referido'}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-[#F4BA3E]/20 rounded-[2.5rem] p-12 shadow-2xl text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent opacity-30" />
              <img
                src="https://grupoconstructormeraki.com.co/wp-content/uploads/2026/02/logo.png"
                alt="Meraki"
                className="h-14 mx-auto mb-6 object-contain"
              />
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="w-16 h-16 text-[#B49537]" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2 uppercase tracking-tighter">¡Registro Exitoso!</h2>
              <p className="text-gray-400 mb-8 font-light">Hemos recibido la información de tu referido correctamente.</p>

              <div className="bg-white/5 border border-[#F4BA3E]/20 rounded-2xl p-6 text-left mb-10">
                <p className="font-bold text-[#F4BA3E] mb-2 uppercase tracking-widest text-xs">Próximos pasos</p>
                <p className="text-sm text-gray-300 leading-relaxed">Nuestro equipo comercial validará los datos y se pondrá en contacto con tu referido. Te mantendremos informado sobre el progreso.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/"
                  className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl text-xs tracking-widest hover:bg-white/20 transition-all uppercase"
                >
                  Volver al inicio
                </a>
                <button
                  onClick={() => { setSuccess(false); setForm(INITIAL); }}
                  className="px-8 py-4 bg-[#F4BA3E] text-black font-bold rounded-xl text-xs tracking-widest hover:brightness-110 transition-all uppercase shadow-[0_0_20px_rgba(244,186,62,0.2)]"
                >
                  Nuevo registro
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// ─── Sub-componente campo ────────────────────────────────────────────────────
function Field({
  label,
  name,
  value,
  onChange,
  required,
  maxLength,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-bold text-[#F4BA3E] uppercase tracking-widest ml-1">
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        maxLength={maxLength}
        className="px-5 py-3 h-14 rounded-2xl text-sm bg-white/5 border border-white/10 text-white shadow-inner focus:outline-none focus:border-[#F4BA3E]/50 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600"
        placeholder={`Ingresa ${label.toLowerCase()}...`}
      />
    </div>
  );
}
