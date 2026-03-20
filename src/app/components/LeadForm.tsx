import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
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
    interes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead submitted:', formData);
    toast.success('¡Gracias! Nos pondremos en contacto contigo pronto.');
    setFormData({ nombre: '', telefono: '', email: '', interes: '' });
  };

  return (
    <div className="bg-gradient-to-b from-[#1a1a1a] to-black rounded-2xl shadow-2xl p-8 border-2 border-[#F4BA3E]/30">
      <h3 className="text-2xl mb-2 text-white">{title}</h3>
      {subtitle && <p className="text-gray-400 mb-6">{subtitle}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="nombre" className="text-gray-300">Nombre completo</Label>
          <Input
            id="nombre"
            type="text"
            placeholder="Juan Pérez"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            required
            className="bg-black/50 border-[#F4BA3E]/30 focus:border-[#F4BA3E] focus:ring-[#F4BA3E] text-white placeholder:text-gray-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="telefono" className="text-gray-300">Teléfono</Label>
          <Input
            id="telefono"
            type="tel"
            placeholder="+57 300 123 4567"
            value={formData.telefono}
            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
            required
            className="bg-black/50 border-[#F4BA3E]/30 focus:border-[#F4BA3E] focus:ring-[#F4BA3E] text-white placeholder:text-gray-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-300">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="juan@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="bg-black/50 border-[#F4BA3E]/30 focus:border-[#F4BA3E] focus:ring-[#F4BA3E] text-white placeholder:text-gray-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="interes" className="text-gray-300">Me interesa</Label>
          <Select 
            value={formData.interes} 
            onValueChange={(value) => setFormData({ ...formData, interes: value })}
          >
            <SelectTrigger className="bg-black/50 border-[#F4BA3E]/30 focus:border-[#F4BA3E] focus:ring-[#F4BA3E] text-white">
              <SelectValue placeholder="Selecciona una opción" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-[#F4BA3E]/30">
              <SelectItem value="terrenos" className="text-white hover:bg-[#F4BA3E]/20">Terrenos campestres</SelectItem>
              <SelectItem value="casas" className="text-white hover:bg-[#F4BA3E]/20">Casas campestres</SelectItem>
              <SelectItem value="referidos" className="text-white hover:bg-[#F4BA3E]/20">Plan de referidos</SelectItem>
              <SelectItem value="informacion" className="text-white hover:bg-[#F4BA3E]/20">Información general</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] hover:from-[#FFF18F] hover:via-[#F4BA3E] hover:to-[#FFF18F] text-black shadow-lg font-semibold"
        >
          Quiero más información
        </Button>
      </form>
    </div>
  );
}