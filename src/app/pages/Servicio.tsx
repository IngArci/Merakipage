import { motion } from 'motion/react';
import { MessageCircle, Phone, Mail, MapPin, Clock, HelpCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { LeadForm } from '../components/shared/LeadForm';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

export default function Servicio() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Teléfono',
      description: '+57 300 123 4567',
      action: 'Llamar ahora',
      link: 'tel:+573001234567'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Chat directo con un asesor',
      action: 'Iniciar chat',
      link: 'https://wa.me/573001234567'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'info@meraki.com',
      action: 'Enviar email',
      link: 'mailto:info@meraki.com'
    },
    {
      icon: MapPin,
      title: 'Oficina',
      description: 'Calle Principal 123, Ciudad',
      action: 'Ver mapa',
      link: '#'
    }
  ];

  const faqs = [
    {
      question: '¿Cuál es el área máxima que puedo construir de mi terreno?',
      answer: 'Resulta de multiplicar el área del terreno por 30% según acuerdo N° 16 de 2017 expedido por el concejo municipal de Alvarado – Tolima, el resultado es el área que podemos construir bajo cubierta de la vivienda, ya sea de un piso o dos pisos.'
    },
    {
      question: '¿Cuántos pisos puede tener mi Tiny House?',
      answer: 'La Tiny House debe tener dos pisos como máximo con antepecho.'
    },
    {
      question: '¿Qué altura puede tener mi Tiny House?',
      answer: 'Según la propiedad horizontal de nuestros condominios la altura máxima de las viviendas de un piso es: 3.60 metros y para viviendas de dos pisos es: 7.20 metros.'
    },
    {
      question: '¿Puedo cambiar las fachadas de mi Tiny House?',
      answer: 'No, los condominios cuentan con propiedad horizontal donde se estipula a detalle las fachadas que debe respetar todo el condominio.'
    },
    {
      question: '¿Cuál es el área que puedo construir de mi local comercial?',
      answer: 'El área construida para local comercial es el 100%.'
    },
    {
      question: '¿Qué es una Promesa de Compraventa?',
      answer: 'Es un contrato que se suscribe entre comprador y vendedor, en el cual se establecen las obligaciones a cargo de cada una de las partes.'
    },
    {
      question: '¿Qué es una escritura pública de compraventa?',
      answer: 'Es el documento legal que se otorga ante un notario, mediante el cual se transfiere el dominio de un bien inmueble.'
    },
    {
      question: '¿A partir de cuando se asume el pago de la cuota de administración?',
      answer: 'Por regla general, LOS PROMITENTES COMPRADORES asumirán el pago de la cuota de administración aprobada por la asamblea de copropietarios, a partir del momento en que el GRUPO CONSTRUCTOR MERAKI efectué la entrega de la administración a la asamblea de copropietarios, así no se le haya hecho entrega legal y material de la propiedad o lote que está adquiriendo.'
    },
    {
      question: '¿Cómo debo proceder para poder vender el terreno objeto del Contrato de Promesa de Compraventa?',
      answer: 'Debe proceder en primer lugar, a solicitar mediante escrito, la autorización por parte del GRUPO CONSTRUCTOR MERAKI de "ceder los derechos y obligaciones que para usted se derivan del Contrato de Promesa de Compraventa", solicitud que se encuentra sujeta al cumplimiento de dos requisitos: 1) Pagar la suma equivalente al 5% sobre el valor total del Contrato de Promesa de Compraventa suscrito. 2) Que el pago de las obligaciones contraídas por parte de EL(LOS) PROMITENTE(S) COMPRADOR(ES) se encuentra al día.'
    },
    {
      question: '¿Debo asumir intereses de mora cuando pago en una fecha posterior a la pactada?',
      answer: 'Si se realiza el pago de los compromisos pactados en una fecha posterior al vencimiento, se deben asumir intereses por mora sobre el valor vencido por los días en que incurrió en mora, lo cual está regulado en el contrato de promesa de compraventa, en el parágrafo primero de la Clausula Tercera.'
    },
    {
      question: '¿Si no cancelo la cuota pactada puedo perder la oportunidad de comprar?',
      answer: 'Si no cancela cumplidamente los compromisos de pago pactados, la mora en el pago de la cuota inicial mayor a 30 días es causal de dejar sin efecto la promesa de compraventa, lo que significa que pierde la oportunidad de la compra del inmueble y debe asumir la cláusula penal (Clausula Cuarta). De igual forma, si el cliente decide voluntariamente dejar sin efecto la oferta por cualquier causa, se aplica la cláusula penal.'
    },
    {
      question: 'Si voy a cambiar de forma de pago, ¿qué debo hacer?',
      answer: 'Debe enviar un comunicado firmado por quienes aparezcan como titulares del negocio, presentado la nueva propuesta de pago y anexando los documentos que sustenten la misma. Esta comunicación debe ser remita al correo electrónico servicioalcliente.grupomeraki@gmail.com, para que pueda remitirse a la Dependencia correspondiente. Máximo dentro de los 15 días hábiles siguientes al recibo de esta comunicación, le informaremos si la misma es viable o no y las condiciones que correspondan.'
    },
    {
      question: 'Si me atraso con los pagos ¿Me reportan a centrales de riesgo?',
      answer: 'El contrato de promesa de compraventa en el parágrafo sexto de la Clausula Tercera, faculta al GRUPO CONSTRUCTOR MERAKI para poder reportar en centrales de riesgo el no cumplimiento de las obligaciones.'
    },
    {
      question: '¿Cuándo se firma la escritura pública de mi terreno?',
      answer: 'Por regla general, la fecha de firma de escrituras se encuentra estipulada en la promesa de compraventa en su Clausula Sexta, en donde se establece que se tiene como plazo para llevar a cabo el otorgamiento de la escritura pública, treinta y seis (36) meses, contados a partir de la firma del contrato de promesa de compraventa, previa constatación del cumplimiento de los siguientes requisitos: 1) Que EL(LOS) PROMITENTE(S) COMPRADOR(ES) haya cancelado la totalidad de los valores correspondientes a la cuota inicial y el saldo a pagar establecido en la CLÁUSULA SEGUNDA del presente contrato y presente el respectivo certificado de paz y salvo expedido por el área administrativa del GRUPO CONSTRUCTOR MERAKI S.A.S ZOMAC.'
    }
  ];

  const hours = [
    { day: 'Lunes - Jueves', time: '7:00 AM - 5:00 PM' },
    { day: 'Viernes', time: '7:00 AM - 4:00 PM' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1640323240640-ee731d18dcb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjdXN0b21lciUyMHNlcnZpY2UlMjBzdXBwb3J0JTIwdGVhbXxlbnwxfHx8fDE3NzM4NzEzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
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
              ¿Cómo podemos ayudarte?
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Nuestro equipo está listo para resolver todas tus dudas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#0d060a]">
              Canales de Atención
            </h2>
            <p className="text-xl text-gray-600">
              Elige el medio que prefieras para contactarnos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl transition-all group h-full flex flex-col"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#B68110] to-[#F4BA3E] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-[#0d060a]">{method.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{method.description}</p>
                <Button
                  variant="outline"
                  className="border-[#B7871C] text-[#947018] hover:bg-[#B7871C] hover:text-white mt-auto"
                  asChild
                >
                  <a href={method.link} target={method.link.startsWith('http') ? '_blank' : undefined} rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    {method.action}
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#B68110] to-[#F4BA3E] flex items-center justify-center shadow-xl">
                  <Clock className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl mb-4 text-[#0d060a]">
                Horarios de Atención
              </h2>
              <p className="text-xl text-gray-600">
                Estamos disponibles para atenderte en los siguientes horarios
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {hours.map((schedule, index) => (
                <motion.div
                  key={schedule.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#F4BA3E]/20 hover:border-[#F4BA3E]/50 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#947018]/20 to-[#F4BA3E]/20 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-[#947018]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#0d060a] mb-1">{schedule.day}</h3>
                        <p className="text-2xl text-[#947018] font-bold">{schedule.time}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-[#947018] via-[#B7871C] to-[#F4BA3E] rounded-2xl p-8 text-center shadow-2xl"
            >
              <div className="flex items-center justify-center mb-4">
                <MessageCircle className="w-8 h-8 text-white mr-3" />
                <h3 className="text-2xl text-white font-semibold">¿Necesitas atención urgente?</h3>
              </div>
              <p className="text-white/90 text-lg mb-6">
                Contáctanos por WhatsApp y te responderemos lo antes posible
              </p>
              <Button
                size="lg"
                className="bg-white text-[#947018] hover:bg-gray-100 shadow-lg"
                asChild
              >
                <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contactar por WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="w-12 h-12 text-[#B7871C]" />
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 text-[#0d060a]">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Encuentra respuestas a las dudas más comunes
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gray-50 rounded-lg px-6 border-none"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-lg text-[#0d060a] pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              ¿No encuentras la respuesta que buscas?
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#B68110] to-[#F4BA3E] hover:from-[#947018] hover:to-[#B7871C] text-white"
              asChild
            >
              <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer">
                Contactar un asesor
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-br from-[#947018] via-[#B7871C] to-[#F4BA3E]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl mb-6">
                Envíanos tu consulta
              </h2>
              <p className="text-xl mb-8">
                Completa el formulario y te responderemos en menos de 24 horas
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-lg">✓</span>
                  </div>
                  <span>Respuesta rápida y personalizada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-lg">✓</span>
                  </div>
                  <span>Asesoría sin compromiso</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-lg">✓</span>
                  </div>
                  <span>Atención profesional</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <LeadForm 
                title="Formulario de contacto"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
