import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Navigation, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';

interface SalaVenta {
  id: number;
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  schedule: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  image: string;
  features: string[];
}

const salasVentas: SalaVenta[] = [
  {
    id: 1,
    name: 'Sala de Ventas Principal',
    city: 'Bogotá',
    address: 'Cra. 7 #71-21, Torre A, Oficina 502',
    phone: '+57 (601) 234 5678',
    email: 'bogota@meraki.com',
    whatsapp: '573001234567',
    schedule: {
      weekdays: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
      saturday: 'Sábados: 9:00 AM - 4:00 PM',
      sunday: 'Domingos: 10:00 AM - 2:00 PM',
    },
    coordinates: {
      lat: 4.6533326,
      lng: -74.0836333,
    },
    image: 'https://images.unsplash.com/photo-1734937743443-a50fff0c0b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBzYWxlcyUyMG9mZmljZSUyMGludGVyaW9yfGVufDF8fHx8MTc3Mzg1MjE4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Parqueadero gratuito', 'Wifi disponible', 'Café de cortesía', 'Sala de espera cómoda'],
  },
  {
    id: 2,
    name: 'Sala de Ventas Norte',
    city: 'Chía',
    address: 'Autopista Norte Km 2, Centro Comercial Fontanar, Local 2-15',
    phone: '+57 (601) 345 6789',
    email: 'chia@meraki.com',
    whatsapp: '573001234568',
    schedule: {
      weekdays: 'Lunes a Viernes: 9:00 AM - 6:00 PM',
      saturday: 'Sábados: 10:00 AM - 5:00 PM',
      sunday: 'Domingos: 10:00 AM - 3:00 PM',
    },
    coordinates: {
      lat: 4.8578532,
      lng: -74.0519906,
    },
    image: 'https://images.unsplash.com/photo-1758448721149-aa0ce8e1b2c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVhbCUyMGVzdGF0ZSUyMG9mZmljZSUyMHJlY2VwdGlvbnxlbnwxfHx8fDE3NzM4NTIxODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Zona comercial', 'Acceso fácil', 'Atención personalizada', 'Tours virtuales'],
  },
  {
    id: 3,
    name: 'Sala de Ventas Occidente',
    city: 'Medellín',
    address: 'Calle 10 #40-36, El Poblado, Edificio Forum',
    phone: '+57 (604) 456 7890',
    email: 'medellin@meraki.com',
    whatsapp: '573001234569',
    schedule: {
      weekdays: 'Lunes a Viernes: 8:30 AM - 6:30 PM',
      saturday: 'Sábados: 9:00 AM - 5:00 PM',
      sunday: 'Domingos: Cerrado',
    },
    coordinates: {
      lat: 6.2476376,
      lng: -75.5658153,
    },
    image: 'https://images.unsplash.com/photo-1769546253924-9e23d794be53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwc2FsZXMlMjBzaG93cm9vbSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzM4NTIxODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Ubicación premium', 'Modelos 3D', 'Sala de juntas', 'Asesoría financiera'],
  },
  {
    id: 4,
    name: 'Sala de Ventas Caribe',
    city: 'Cartagena',
    address: 'Av. San Martín #8-14, Bocagrande',
    phone: '+57 (605) 567 8901',
    email: 'cartagena@meraki.com',
    whatsapp: '573001234570',
    schedule: {
      weekdays: 'Lunes a Viernes: 9:00 AM - 5:00 PM',
      saturday: 'Sábados: 10:00 AM - 4:00 PM',
      sunday: 'Domingos: 11:00 AM - 3:00 PM',
    },
    coordinates: {
      lat: 10.3910485,
      lng: -75.5477574,
    },
    image: 'https://images.unsplash.com/photo-1678830776200-194e61896644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MzgyNDYxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Vista al mar', 'Ambiente relajado', 'Refrigerios', 'Material informativo'],
  },
];

export default function SalasVentas() {
  const handleGetDirections = (lat: number, lng: number, name: string) => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`, '_blank');
  };

  const handleWhatsApp = (phone: string, name: string) => {
    const message = encodeURIComponent(`Hola, me gustaría información sobre la ${name}`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleScheduleVisit = (email: string, name: string) => {
    window.location.href = `mailto:${email}?subject=Agendar visita a ${name}&body=Hola, me gustaría agendar una visita a su sala de ventas.`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#947018]/20 via-transparent to-[#947018]/20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
              <span className="bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] bg-clip-text text-transparent">
                Nuestras Salas de Ventas
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Visítanos en cualquiera de nuestras sedes y descubre tu inversión ideal
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-[#F4BA3E]" />
                <span>4 Sedes a nivel nacional</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-[#F4BA3E]" />
                <span>Horarios flexibles</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Salas de Ventas */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {salasVentas.map((sala, index) => (
              <motion.div
                key={sala.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1a1a1a] to-black rounded-3xl overflow-hidden border border-[#F4BA3E]/30 shadow-2xl"
              >
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-[400px] md:h-auto ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <ImageWithFallback
                      src={sala.image}
                      alt={sala.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <span className="px-4 py-2 bg-gradient-to-r from-[#947018] to-[#F4BA3E] text-black font-bold rounded-full text-sm">
                        {sala.city}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl lg:text-4xl mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {sala.name}
                    </h2>

                    {/* Contact Info */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-[#F4BA3E] flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">Dirección</p>
                          <p className="text-white">{sala.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Phone className="w-5 h-5 text-[#F4BA3E] flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">Teléfono</p>
                          <a href={`tel:${sala.phone}`} className="text-white hover:text-[#F4BA3E] transition-colors">
                            {sala.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Mail className="w-5 h-5 text-[#F4BA3E] flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">Correo</p>
                          <a href={`mailto:${sala.email}`} className="text-white hover:text-[#F4BA3E] transition-colors">
                            {sala.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-[#F4BA3E] flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">Horarios de Atención</p>
                          <p className="text-white text-sm">{sala.schedule.weekdays}</p>
                          <p className="text-white text-sm">{sala.schedule.saturday}</p>
                          <p className="text-white text-sm">{sala.schedule.sunday}</p>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <p className="text-gray-400 text-sm uppercase tracking-wide mb-3">Características</p>
                      <div className="flex flex-wrap gap-2">
                        {sala.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-[#F4BA3E]/10 border border-[#F4BA3E]/30 rounded-full text-[#F4BA3E] text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <Button
                        onClick={() => handleGetDirections(sala.coordinates.lat, sala.coordinates.lng, sala.name)}
                        className="flex-1 min-w-[200px] bg-gradient-to-r from-[#947018] to-[#F4BA3E] hover:from-[#F4BA3E] hover:to-[#947018] text-black font-semibold"
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        Cómo llegar
                      </Button>
                      
                      <Button
                        onClick={() => handleWhatsApp(sala.whatsapp, sala.name)}
                        className="flex-1 min-w-[200px] bg-green-600 hover:bg-green-700 text-white font-semibold"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>

                      <Button
                        onClick={() => handleScheduleVisit(sala.email, sala.name)}
                        className="flex-1 min-w-[200px] bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white border border-[#F4BA3E]/30 font-semibold"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Agendar visita
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl lg:text-5xl text-black mb-6">
              ¿Listo para visitarnos?
            </h2>
            <p className="text-black/80 text-xl mb-8 max-w-2xl mx-auto">
              Nuestro equipo de asesores está listo para ayudarte a encontrar la inversión perfecta
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => handleWhatsApp('573001234567', 'cualquier sala de ventas')}
                className="bg-black hover:bg-black/90 text-[#F4BA3E] font-bold px-8 py-6 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contactar ahora
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
