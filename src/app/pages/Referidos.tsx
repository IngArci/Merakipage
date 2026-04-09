import { motion } from 'motion/react';
import { Gift, Users, CheckCircle, TrendingUp, Share2, DollarSign, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { LeadForm } from '../components/shared/LeadForm';

export default function Referidos() {
  const steps = [
    {
      number: '01',
      icon: Users,
      title: 'Recomienda',
      description: 'Comparte Meraki con amigos, familiares o conocidos que estén buscando invertir en terrenos o casas campestres.'
    },
    {
      number: '02',
      icon: CheckCircle,
      title: 'Se concreta la venta',
      description: 'Tu referido firma el contrato de compra y realiza el pago inicial de su inversión en cualquiera de nuestros proyectos.'
    },
    {
      number: '03',
      icon: Gift,
      title: 'Recibes tu beneficio',
      description: 'Una vez formalizada la venta, recibes tu recompensa. ¡Así de fácil!'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Comisiones atractivas',
      description: 'Hasta 5% del valor de la venta',
      highlight: true
    },
    {
      icon: Clock,
      title: 'Pago inmediato',
      description: 'Recibe tu comisión en máximo 30 días',
      highlight: false
    },
    {
      icon: Share2,
      title: 'Sin límites',
      description: 'Refiere cuantos quieras y gana más',
      highlight: false
    },
    {
      icon: TrendingUp,
      title: 'Bonos adicionales',
      description: 'Incentivos por metas alcanzadas',
      highlight: true
    }
  ];

  const faqs = [
    {
      question: '¿Quién puede ser referidor?',
      answer: 'Cualquier persona mayor de edad puede participar en nuestro programa de referidos. No necesitas experiencia previa en ventas.'
    },
    {
      question: '¿Cuánto puedo ganar?',
      answer: 'Dependiendo del valor del terreno o casa vendida, puedes ganar entre $2 millones y $20 millones por cada referido exitoso.'
    },
    {
      question: '¿Cómo recibo mi pago?',
      answer: 'Una vez se formalice la venta de tu referido, procesamos tu pago en un plazo máximo de 30 días hábiles mediante transferencia bancaria.'
    },
    {
      question: '¿Puedo referir varios proyectos?',
      answer: 'Sí, no hay límite. Puedes referir tantos proyectos como desees y acumular comisiones por cada venta exitosa.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1758599543157-bc1a94fec33c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ldHdvcmtpbmclMjBoYW5kc2hha2UlMjBwYXJ0bmVyc2hpcHxlbnwxfHx8fDE3NzM4NzEzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
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
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Gift className="w-8 h-8 text-[#F4BA3E]" />
                <span className="text-[#FFF18F] text-sm tracking-wider uppercase">
                  Programa de Referidos
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl mb-6 text-white">
                Gana Dinero Recomendando Meraki
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-10">
                Comparte oportunidades de inversión y recibe beneficios extraordinarios
              </p>

              <Button
                size="lg"
                className="bg-gradient-to-r from-[#B68110] to-[#FFF18F] hover:from-[#F4BA3E] hover:to-[#FFF18F] text-[#0d060a] shadow-2xl text-lg px-8 py-6"
                asChild
              >
                <a href="#registro">Quiero ser referidor</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#0d060a]">
              ¿Cómo funciona?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un proceso simple y transparente en solo 3 pasos
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col md:flex-row items-center gap-8"
                >
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#B68110] to-[#F4BA3E] flex items-center justify-center">
                        <step.icon className="w-16 h-16 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-[#FFF18F] flex items-center justify-center border-4 border-white">
                        <span className="text-2xl text-[#0d060a]">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl mb-3 text-[#0d060a]">{step.title}</h3>
                    <p className="text-lg text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#0d060a]">
              Beneficios Exclusivos
            </h2>
            <p className="text-xl text-gray-600">
              Más razones para unirte a nuestro programa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-2xl text-center ${
                  benefit.highlight
                    ? 'bg-gradient-to-br from-[#947018] to-[#B7871C] text-white shadow-2xl transform scale-105'
                    : 'bg-white shadow-lg'
                }`}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  benefit.highlight
                    ? 'bg-white/20'
                    : 'bg-gradient-to-br from-[#B68110] to-[#F4BA3E]'
                }`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.highlight ? 'text-white' : 'text-white'}`} />
                </div>
                <h3 className={`text-xl mb-2 ${benefit.highlight ? 'text-white' : 'text-[#0d060a]'}`}>
                  {benefit.title}
                </h3>
                <p className={benefit.highlight ? 'text-white/90' : 'text-gray-600'}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#0d060a]">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Todo lo que necesitas saber sobre el programa
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl mb-3 text-[#947018]">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registro" className="py-24 bg-gradient-to-br from-[#947018] via-[#B7871C] to-[#F4BA3E]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl mb-6">
                Únete al Programa
              </h2>
              <p className="text-xl mb-8">
                Completa el formulario y nuestro equipo te contactará para darte 
                toda la información sobre cómo empezar a ganar con Meraki.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6" />
                  <span className="text-lg">Sin costo de inscripción</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6" />
                  <span className="text-lg">Material promocional incluido</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6" />
                  <span className="text-lg">Capacitación completa</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <LeadForm 
                title="Regístrate como referidor"
                subtitle="Empieza a ganar hoy mismo"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
