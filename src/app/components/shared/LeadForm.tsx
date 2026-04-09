import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner';

interface LeadFormProps {
  title?: string;
  subtitle?: string;
}

export function LeadForm({ title = "¿Quieres más información?", subtitle }: LeadFormProps) {
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

  return (
    <div className="relative group">

      <div className="absolute -inset-1 bg-gradient-to-r from-[#947018] to-[#F4BA3E] rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition duration-1000"></div>

      <div className="relative bg-[#0A0A0A] rounded-2xl p-8 md:p-10 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-white mb-2 tracking-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="text-gray-400 text-sm font-light">
              {subtitle}
            </p>
          )}
          <div className="h-1 w-12 bg-[#F4BA3E] mt-4"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="nombre" className="text-white font-medium text-sm">Nombre Completo</Label>
              <Input
                id="nombre"
                type="text"
                placeholder="Juan Pérez"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                required
                className="h-12 bg-[#141414] border-white/20 focus:border-[#F4BA3E] focus:ring-0 text-white placeholder:text-gray-600 rounded-lg transition-all"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefono" className="text-white font-medium text-sm">Teléfono</Label>
              <Input
                id="telefono"
                type="tel"
                placeholder="+57 "
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                required
                className="h-12 bg-[#141414] border-white/20 focus:border-[#F4BA3E] focus:ring-0 text-white placeholder:text-gray-600 rounded-lg transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white font-medium text-sm">Correo Electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="correo@ejemplo.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="h-12 bg-[#141414] border-white/20 focus:border-[#F4BA3E] focus:ring-0 text-white placeholder:text-gray-600 rounded-lg transition-all"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensaje" className="text-white font-medium text-sm">¿Cómo podemos ayudarte?</Label>
            <Textarea
              id="mensaje"
              placeholder="Cuéntanos más sobre lo que buscas..."
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              required
              className="min-h-[100px] bg-[#141414] border-white/20 focus:border-[#F4BA3E] focus:ring-0 text-white placeholder:text-gray-600 rounded-lg transition-all resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full h-14 bg-gradient-to-r from-[#B7871C] to-[#F4BA3E] hover:from-[#F4BA3E] hover:to-[#B7871C] text-black font-bold text-lg rounded-lg shadow-xl transform transition-all active:scale-95"
          >
            Enviar Solicitud
          </Button>
        </form>
      </div>
    </div>
  );
}