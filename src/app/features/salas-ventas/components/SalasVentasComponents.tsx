import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Navigation, Calendar, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../../../components/shared/ImageWithFallback';
import { Button } from '../../../components/ui/button';
import { salasVentasData } from '../data/salasVentasData';

// ── Shared handlers (page-level) ───────────────────────────────────────────
export const handleGetDirections = (lat: number, lng: number) =>
  window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`, '_blank');

export const handleWhatsApp = (phone: string, name: string, isGeneral: boolean = false) => {
  const message = isGeneral
    ? encodeURIComponent('Hola, deseo información sobre los proyectos de Meraki.')
    : encodeURIComponent(`Hola, me gustaría información sobre la ${name}.`);
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
};

// ── Components ──────────────────────────────────────────────────────────────

export function SalasVentasHero() {
  return (
    <section className="relative py-32 pt-40 overflow-hidden z-10">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10">
            <Sparkles className="w-4 h-4 text-[#F4BA3E]" />
            <span className="text-[#F4BA3E] text-[10px] font-bold tracking-[0.3em] uppercase">Presencia Nacional</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white tracking-tight leading-tight uppercase">
            Nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4BA3E] via-[#FFF18F] to-[#B7871C]">Salas de Ventas</span>
          </h1>
          <div className="h-[1.5px] w-24 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent mx-auto mb-10 opacity-40" />
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Visítanos en cualquiera de nuestras sedes y descubre tu <span className="text-white font-medium">inversión ideal</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm">
            {[{ icon: MapPin, label: '5 Sedes a nivel nacional' }, { icon: Clock, label: 'Horarios flexibles' }].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center space-x-2 text-gray-400">
                <div className="w-8 h-8 rounded-full bg-[#F4BA3E]/10 border border-[#F4BA3E]/20 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#F4BA3E]" />
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function SalasVentasGrid() {
  return (
    <section className="py-16 relative z-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {salasVentasData.map((sala, index) => (
            <motion.div
              key={sala.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white/[0.02] border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl lg:h-[580px] min-h-[500px]`}
            >
              {/* Image side */}
              <div className="lg:w-1/2 h-[360px] lg:h-full relative group overflow-hidden">
                <ImageWithFallback
                  src={sala.image}
                  alt={sala.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d060a]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="px-5 py-2 bg-gradient-to-r from-[#947018] to-[#F4BA3E] text-black font-bold rounded-full text-sm tracking-wider uppercase">
                    {sala.city}
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-[#0d060a] overflow-hidden">
                <h2 className="text-xl md:text-2xl lg:text-[1.75rem] font-bold mb-6 text-white tracking-tight uppercase leading-[1.1]">{sala.name}</h2>

                <div className="space-y-5 mb-8">
                  {[
                    { icon: MapPin, label: 'Dirección', value: sala.address, href: null },
                    { icon: Phone, label: 'Teléfono', value: sala.phone, href: `tel:${sala.phone}` },
                    { icon: Mail, label: 'Correo', value: sala.email, href: `mailto:${sala.email}` },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start space-x-4">
                      <div className="w-9 h-9 rounded-xl bg-[#F4BA3E]/10 border border-[#F4BA3E]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-[#F4BA3E]" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-white text-sm hover:text-[#F4BA3E] transition-colors">{value}</a>
                        ) : (
                          <p className="text-white text-sm">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}

                  <div className="flex items-start space-x-4">
                    <div className="w-9 h-9 rounded-xl bg-[#F4BA3E]/10 border border-[#F4BA3E]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-[#F4BA3E]" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">Horarios</p>
                      <p className="text-white text-sm">{sala.schedule.weekdays}</p>
                      {sala.schedule.friday && <p className="text-white text-sm">{sala.schedule.friday}</p>}
                      <p className="text-white text-sm">{sala.schedule.saturday}</p>
                      <p className="text-white text-sm">{sala.schedule.sunday}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {sala.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 text-xs tracking-wide hover:border-[#F4BA3E]/30 hover:text-[#F4BA3E] transition-colors">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button onClick={() => handleGetDirections(sala.coordinates.lat, sala.coordinates.lng)} className="flex-1 min-w-[160px] h-12 bg-gradient-to-r from-[#947018] to-[#F4BA3E] hover:from-[#F4BA3E] hover:to-[#947018] text-black font-bold rounded-2xl text-xs tracking-widest uppercase transition-all duration-500">
                    <Navigation className="w-4 h-4 mr-2" />Cómo llegar
                  </Button>
                  <Button onClick={() => handleWhatsApp(sala.whatsapp, sala.name)} className="flex-1 min-w-[160px] h-12 bg-green-600/80 hover:bg-green-500 text-white font-bold rounded-2xl text-xs tracking-widest uppercase transition-all duration-500 border border-green-500/30">
                    <Phone className="w-4 h-4 mr-2" />WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SalasVentasCTA() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-[#947018]/20 via-[#F4BA3E]/10 to-[#947018]/20 rounded-[3rem] p-12 md:p-20 text-center border border-[#F4BA3E]/20 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#0d060a]/60 rounded-[3rem]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
              ¡VISITANOS  <span className="text-[#F4BA3E]">AHORA!+</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-light">
              Nuestro equipo de asesores está listo para ayudarte a encontrar la inversión perfecta para tu futuro.
            </p>
            <Button
              onClick={() => handleWhatsApp('573176820728', '', true)}
              className="h-14 px-12 bg-gradient-to-r from-[#947018] to-[#F4BA3E] hover:from-[#F4BA3E] hover:to-[#947018] text-black font-bold rounded-2xl text-sm tracking-widest uppercase transition-all duration-500 shadow-2xl shadow-[#F4BA3E]/20"
            >
              <Phone className="w-5 h-5 mr-3" />Contactar ahora
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
