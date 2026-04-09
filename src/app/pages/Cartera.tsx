import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Video, Users } from 'lucide-react';
import { Button } from '../components/ui/button';


export default function Cartera() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    codigoReferencia: '',
    tipoReunion: '',
    lugar: '',
    fecha: '',
    hora: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío
    alert('Solicitud enviada. Nos pondremos en contacto contigo pronto.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1758519289022-5f9dea0d8cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBmaW5hbmNpYWwlMjBwbGFubmluZ3xlbnwxfHx8fDE3NzM5NTIxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-[#947018]/60" />

        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#F4BA3E] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B7871C] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              Gestión de Cartera Meraki
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 italic">
              Tu confianza nos impulsa a mantener una gestión clara y responsable
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-black relative overflow-hidden">

        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#F4BA3E] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#B7871C] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            {/* Línea decorativa superior */}
            <div className="flex items-center justify-center mb-12">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent" />
              <div className="mx-4 w-2 h-2 bg-[#F4BA3E] rounded-full" />
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent" />
            </div>

            {/* Contenido principal */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Columna de texto */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                    En <span className="text-[#F4BA3E] font-semibold">Grupo Constructor Meraki</span> entendemos la importancia de una administración financiera transparente y un acompañamiento respetuoso en cada etapa del proceso.
                  </p>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                    Este espacio ha sido creado para brindarte información precisa sobre tus obligaciones, resolver inquietudes y apoyarte en la construcción de acuerdos que se ajusten a tus necesidades, siempre con orden, claridad y responsabilidad.
                  </p>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                    Nuestro compromiso es garantizar una comunicación oportuna y un servicio que refleje la seriedad con la que asumimos cada situación.
                  </p>
                </div>

                {/* Decoración lateral */}
                <div className="flex items-center space-x-4 pt-6">
                  <div className="w-1 h-20 bg-gradient-to-b from-[#F4BA3E] via-[#B7871C] to-transparent" />
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-[#F4BA3E] rounded-full" />
                      <span className="text-sm text-gray-400">Transparencia financiera</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-[#B7871C] rounded-full" />
                      <span className="text-sm text-gray-400">Acompañamiento personalizado</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-[#947018] rounded-full" />
                      <span className="text-sm text-gray-400">Soluciones responsables</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna de imagen */}
              <div className="flex flex-col items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  {/* Resplandor dorado detrás de la imagen */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F4BA3E]/20 via-[#B7871C]/20 to-transparent blur-3xl scale-110" />

                  {/* Imagen con marco elegante */}
                  <div className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-2 border-[#F4BA3E]/30">
                    <img
                      src={""}
                      alt="Nunca nos cansaremos de mejorar para ti"
                      className="max-w-full h-auto relative z-10"
                    />
                    {/* Esquinas decorativas */}
                    <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#F4BA3E]" />
                    <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#F4BA3E]" />
                    <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#F4BA3E]" />
                    <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#F4BA3E]" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Línea decorativa inferior */}
            <div className="flex items-center justify-center mt-16">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent" />
              <div className="mx-4 w-2 h-2 bg-[#F4BA3E] rounded-full" />
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formulario de Agendar Cita */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#B68110] to-[#F4BA3E] flex items-center justify-center shadow-lg shadow-[#F4BA3E]/30">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl mb-4 text-[#0d060a]">
                Agenda tu Cita
              </h2>
              <p className="text-xl text-gray-600">
                Completa el formulario y nuestro equipo se pondrá en contacto contigo
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border-2 border-[#F4BA3E]/30 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4BA3E] focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4BA3E] focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4BA3E] focus:border-transparent"
                    placeholder="+57 300 123 4567"
                  />
                </div>

                <div>
                  <label htmlFor="codigoReferencia" className="block text-sm font-medium text-gray-700 mb-2">
                    Código de Referencia *
                  </label>
                  <input
                    type="text"
                    id="codigoReferencia"
                    name="codigoReferencia"
                    required
                    value={formData.codigoReferencia}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4BA3E] focus:border-transparent"
                    placeholder="MER-2024-001234"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="tipoReunion" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Reunión *
                </label>
                <select
                  id="tipoReunion"
                  name="tipoReunion"
                  required
                  value={formData.tipoReunion}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4BA3E] focus:border-transparent bg-white"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="virtual">Virtual</option>
                  <option value="presencial">Presencial</option>
                </select>
              </div>

              {formData.tipoReunion === 'presencial' && (
                <div className="mb-6">
                  <label htmlFor="lugar" className="block text-sm font-medium text-gray-700 mb-2">
                    Lugar de Reunión *
                  </label>
                  <select
                    id="lugar"
                    name="lugar"
                    required
                    value={formData.lugar}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4BA3E] focus:border-transparent bg-white"
                  >
                    <option value="">Selecciona un lugar</option>
                    <option value="club-campo-1">Club de Campo - Cañón de Arizona</option>
                    <option value="club-campo-2">Club de Campo - Laguna Mar</option>
                    <option value="club-campo-3">Club de Campo - Río Claro</option>
                    <option value="terreno-1">Terreno - The Protector</option>
                    <option value="terreno-2">Terreno - Grande</option>
                    <option value="terreno-3">Terreno - Arizona I</option>
                    <option value="terreno-4">Terreno - Arizona II</option>
                    <option value="terreno-5">Terreno - Grand Arizona</option>
                    <option value="oficina">Oficina Principal Meraki</option>
                  </select>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="fecha" className="block text-sm font-medium text-gray-700 mb-2">
                    Fecha Preferida *
                  </label>
                  <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    required
                    value={formData.fecha}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4BA3E] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="hora" className="block text-sm font-medium text-gray-700 mb-2">
                    Hora Preferida *
                  </label>
                  <input
                    type="time"
                    id="hora"
                    name="hora"
                    required
                    value={formData.hora}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4BA3E] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje o Motivo de la Cita
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4BA3E] focus:border-transparent resize-none"
                  placeholder="Describe brevemente el motivo de tu cita..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#B68110] to-[#F4BA3E] hover:from-[#947018] hover:to-[#B7871C] text-white py-4 text-lg shadow-lg shadow-[#F4BA3E]/30"
              >
                Solicitar Cita
              </Button>
            </form>

            {/* Información de Contacto Adicional */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200">
                <Video className="w-8 h-8 text-[#B7871C] mx-auto mb-3" />
                <h3 className="text-sm font-semibold text-gray-700 mb-1">Reuniones Virtuales</h3>
                <p className="text-xs text-gray-500">Vía Zoom o Google Meet</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200">
                <MapPin className="w-8 h-8 text-[#B7871C] mx-auto mb-3" />
                <h3 className="text-sm font-semibold text-gray-700 mb-1">Visita Nuestros Proyectos</h3>
                <p className="text-xs text-gray-500">En el lugar de tu preferencia</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200">
                <Users className="w-8 h-8 text-[#B7871C] mx-auto mb-3" />
                <h3 className="text-sm font-semibold text-gray-700 mb-1">Atención Personalizada</h3>
                <p className="text-xs text-gray-500">Equipo especializado en cartera</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
