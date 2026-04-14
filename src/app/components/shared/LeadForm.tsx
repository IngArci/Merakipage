import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner';

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  formLink?: string;
}

export function LeadForm({ title = "¿Quieres más información?", subtitle, formLink }: LeadFormProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead submitted:', formData);
    toast.success('¡Gracias! Nos pondremos en contacto contigo pronto.');
    setFormData({ nombre: '', telefono: '', email: '', mensaje: '' });
  };

  useEffect(() => {
    if (formLink && formLink.includes('leadconnectorhq.com')) {
      const script = document.createElement('script');
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        // Optional: remove script on unmount if desired, 
        // though usually safe to keep for other forms
      };
    }
  }, [formLink]);

  if (formLink) {
    const isLeadConnector = formLink.includes('leadconnectorhq.com');
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <div className="w-full h-[750px] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <iframe
            src={formLink}
            style={{ width: '100%', height: '100%', border: 'none' }}
            id={isLeadConnector ? `inline-${formLink.split('/').pop()}` : undefined}
            data-auto-height="true"
            data-handle-iframe-events="true"
            data-dot--complete="true"
            title={title}
          ></iframe>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-[var(--gold-1)] to-[var(--gold-5)] rounded-[2rem] opacity-20 blur-2xl group-hover:opacity-30 transition duration-1000"></div>

      <div className={`relative bg-[var(--dark-1)]/80 backdrop-blur-xl rounded-[2rem] border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.4)] p-8 md:p-12`}>
        <div className="mb-10 text-center">
          <h3 className="text-3xl font-light text-white mb-3 tracking-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="text-gray-500 text-sm font-light tracking-wide italic">
              {subtitle}
            </p>
          )}
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-[var(--gold-5)] to-transparent mx-auto mt-6 opacity-40"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="nombre" className="text-gray-400 font-medium text-[10px] uppercase tracking-widest pl-1">Nombre Completo</Label>
              <Input
                id="nombre"
                type="text"
                placeholder="Juan Pérez"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                required
                className="h-14 bg-white/[0.03] border-white/10 focus:border-[var(--gold-5)]/40 focus:ring-0 text-white placeholder:text-gray-700 rounded-2xl transition-all duration-300 font-light"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefono" className="text-gray-400 font-medium text-[10px] uppercase tracking-widest pl-1">Teléfono</Label>
              <Input
                id="telefono"
                type="tel"
                placeholder="+57 "
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                required
                className="h-14 bg-white/[0.03] border-white/10 focus:border-[var(--gold-5)]/40 focus:ring-0 text-white placeholder:text-gray-700 rounded-2xl transition-all duration-300 font-light"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-400 font-medium text-[10px] uppercase tracking-widest pl-1">Correo Electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="correo@ejemplo.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="h-14 bg-white/[0.03] border-white/10 focus:border-[var(--gold-5)]/40 focus:ring-0 text-white placeholder:text-gray-700 rounded-2xl transition-all duration-300 font-light"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensaje" className="text-gray-400 font-medium text-[10px] uppercase tracking-widest pl-1">Mensaje</Label>
            <Textarea
              id="mensaje"
              placeholder="Cuéntanos más sobre lo que buscas..."
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              required
              className="min-h-[120px] bg-white/[0.03] border-white/10 focus:border-[var(--gold-5)]/40 focus:ring-0 text-white placeholder:text-gray-700 rounded-2xl transition-all duration-300 font-light resize-none py-4"
            />
          </div>

          <Button
            type="submit"
            className="w-full h-14 bg-gradient-to-r from-[var(--gold-1)] to-[var(--gold-5)] hover:brightness-125 text-black font-bold text-sm tracking-[0.2em] rounded-2xl shadow-xl transform transition-all active:scale-[0.98] duration-300 uppercase"
          >
            Enviar Solicitud
          </Button>
        </form>
      </div>
    </div>
  );
}