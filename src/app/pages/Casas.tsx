import { motion } from 'motion/react';
import { CheckCircle, Home, Maximize, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { LeadForm } from '../components/shared/LeadForm';
import { Link } from 'react-router';

export default function Casas() {
  const models = [
    {
      name: 'Tiny House Moderna',
      size: '35m²',
      bedrooms: 1,
      bathrooms: 1,
      price: 'Desde $120 millones',
      image: 'https://images.unsplash.com/photo-1760802288759-5a06e0db753a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdGlueSUyMGhvdXNlJTIwY2hhbGV0fGVufDF8fHx8MTc3Mzg0NTUzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Cocina integrada', 'Baño completo', 'Terraza', 'Paneles solares']
    },
    {
      name: 'Chalet Ejecutivo',
      size: '65m²',
      bedrooms: 2,
      bathrooms: 2,
      price: 'Desde $220 millones',
      image: 'https://images.unsplash.com/photo-1724048413085-1c8d81b3ffa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3VudHJ5JTIwaG91c2UlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc3Mzg0NTUzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Sala-comedor', 'Cocina equipada', 'Deck de madera', 'Chimenea']
    },
    {
      name: 'Casa Campestre Premium',
      size: '120m²',
      bedrooms: 3,
      bathrooms: 3,
      price: 'Desde $380 millones',
      image: 'https://images.unsplash.com/photo-1758565811272-e79917ca0adc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb3VudHJ5c2lkZSUyMGVzdGF0ZSUyMG5hdHVyYWwlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzczODQ1NTI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['BBQ área', 'Piscina', 'Garaje', 'Amplio jardín']
    }
  ];

  const benefits = [
    {
      icon: Home,
      title: 'Diseño Personalizado',
      description: 'Adaptamos cada modelo a tus necesidades y gustos'
    },
    {
      icon: Zap,
      title: 'Construcción Rápida',
      description: 'Entrega en 4-6 meses según el modelo'
    },
    {
      icon: Maximize,
      title: 'Espacios Funcionales',
      description: 'Máximo aprovechamiento de cada metro cuadrado'
    },
    {
      icon: CheckCircle,
      title: 'Calidad Garantizada',
      description: 'Materiales de primera y acabados premium'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1762438421221-1626a4958dbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMG5hdHVyZSUyMGNvdW50cnlzaWRlfGVufDF8fHx8MTc3Mzg0NTUzMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              Casas Campestres que Inspiran
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Diseños modernos en armonía con la naturaleza
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#B68110] to-[#F4BA3E] hover:from-[#947018] hover:to-[#B7871C] text-white"
              asChild
            >
              <a href="#modelos">Ver modelos</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#0d060a]">
              ¿Por qué elegir nuestras casas?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Calidad, diseño y funcionalidad en cada detalle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#B68110] to-[#F4BA3E] flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-[#0d060a]">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="modelos" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#0d060a]">
              Nuestros Modelos
            </h2>
            <p className="text-xl text-gray-600">
              Encuentra la casa perfecta para tu estilo de vida
            </p>
          </div>

          <div className="space-y-24">
            {models.map((model, index) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                  />
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-3xl md:text-4xl mb-4 text-[#0d060a]">
                    {model.name}
                  </h3>

                  <div className="flex items-center space-x-6 mb-6 text-gray-600">
                    <div>
                      <span className="block text-2xl text-[#947018]">{model.size}</span>
                      <span className="text-sm">Área construida</span>
                    </div>
                    <div className="w-px h-12 bg-gray-300" />
                    <div>
                      <span className="block text-2xl text-[#947018]">{model.bedrooms}</span>
                      <span className="text-sm">Habitaciones</span>
                    </div>
                    <div className="w-px h-12 bg-gray-300" />
                    <div>
                      <span className="block text-2xl text-[#947018]">{model.bathrooms}</span>
                      <span className="text-sm">Baños</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-3xl text-[#B7871C] mb-2">{model.price}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg mb-4 text-[#0d060a]">Características:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {model.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-[#B7871C] flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#B68110] to-[#F4BA3E] hover:from-[#947018] hover:to-[#B7871C] text-white"
                    asChild
                  >
                    <Link to="/contacto">Solicitar cotización</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#947018] via-[#B7871C] to-[#F4BA3E]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl mb-6">
                ¿Listo para construir tu casa de ensueño?
              </h2>
              <p className="text-xl mb-6">
                Agenda una cita con nuestros arquitectos y recibe asesoría personalizada.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6" />
                  <span>Financiamiento disponible</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6" />
                  <span>Planes de pago flexibles</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6" />
                  <span>Entrega garantizada</span>
                </li>
              </ul>
            </div>

            <LeadForm />
          </div>
        </div>
      </section>
    </div>
  );
}
