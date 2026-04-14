import { motion } from 'motion/react';
import { MessageCircle, Phone, Mail, MapPin, Clock, HelpCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { LeadForm } from '../../../components/shared/LeadForm';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../components/ui/accordion';

const contactMethods = [
  { icon: Phone, title: 'Teléfono', description: '+57 314 786 8069', action: 'Llamar ahora', link: 'tel:+573147868069' },
  { icon: MessageCircle, title: 'WhatsApp', description: 'Chat directo con un asesor', action: 'Iniciar chat', link: 'https://wa.me/573147868069' },
  { icon: Mail, title: 'Email', description: 'servicioalcliente.grupomeraki@gmail.com', action: 'Enviar email', link: 'mailto:servicioalcliente.grupomeraki@gmail.com' },
  { icon: MapPin, title: 'Oficina', description: 'Barrio Casa Club, Cra 3 #42 – 92, Ibagué Colombia', action: 'Ver mapa', link: '#' },
];

const faqs = [
  { question: '¿Cuál es el área máxima que puedo construir de mi terreno?', answer: 'Resulta de multiplicar el área del terreno por 30% según acuerdo N° 16 de 2017 expedido por el concejo municipal de Alvarado – Tolima.' },
  { question: '¿Cuántos pisos puede tener mi Tiny House?', answer: 'La Tiny House debe tener dos pisos como máximo con antepecho.' },
  { question: '¿Qué altura puede tener mi Tiny House?', answer: 'La altura máxima de las viviendas de un piso es: 3.60 metros y para viviendas de dos pisos es: 7.20 metros.' },
  { question: '¿Puedo cambiar las fachadas de mi Tiny House?', answer: 'No, los condominios cuentan con propiedad horizontal donde se estipulan las fachadas que debe respetar todo el condominio.' },
  { question: '¿Cuál es el área que puedo construir de mi local comercial?', answer: 'El área construida para local comercial es el 100%.' },
  { question: '¿Qué es una Promesa de Compraventa?', answer: 'Es un contrato que se suscribe entre comprador y vendedor, en el cual se establecen las obligaciones a cargo de cada una de las partes.' },
  { question: '¿Qué es una escritura pública de compraventa?', answer: 'Es el documento legal que se otorga ante un notario, mediante el cual se transfiere el dominio de un bien inmueble.' },
  { question: '¿A partir de cuando se asume el pago de la cuota de administración?', answer: 'A partir del momento en que el GRUPO CONSTRUCTOR MERAKI efectuué la entrega de la administración a la asamblea de copropietarios.' },
  { question: '¿Cómo debo proceder para poder vender el terreno objeto del Contrato de Promesa de Compraventa?', answer: 'Debe solicitar autorización por parte del GRUPO CONSTRUCTOR MERAKI de "ceder los derechos y obligaciones", cumpliendo los requisitos de pago del 5% sobre el valor total y tener los pagos al día.' },
  { question: '¿Debo asumir intereses de mora cuando pago en una fecha posterior a la pactada?', answer: 'Sí, se deben asumir intereses por mora sobre el valor vencido por los días en que incurrió en mora, según el parágrafo primero de la Clausula Tercera.' },
  { question: '¿Si no cancelo la cuota pactada puedo perder la oportunidad de comprar?', answer: 'Sí, la mora mayor a 30 días es causal de dejar sin efecto la promesa de compraventa y se aplica la cláusula penal.' },
  { question: 'Si voy a cambiar de forma de pago, ¿qué debo hacer?', answer: 'Debe enviar un comunicado firmado al correo servicioalcliente.grupomeraki@gmail.com con la nueva propuesta de pago y documentos que la sustenten.' },
  { question: 'Si me atraso con los pagos ¿Me reportan a centrales de riesgo?', answer: 'Sí, el contrato faculta al GRUPO CONSTRUCTOR MERAKI para poder reportar en centrales de riesgo el no cumplimiento de las obligaciones.' },
  { question: '¿Cuándo se firma la escritura pública de mi terreno?', answer: 'El plazo es de treinta y seis (36) meses contados a partir de la firma del contrato de promesa de compraventa, una vez cancelada la totalidad de los valores pactados.' },
];

const hours = [
  { day: 'Lunes - Jueves', time: '7:00 AM - 5:00 PM' },
  { day: 'Viernes', time: '7:00 AM - 4:00 PM' },
];

// Helper divider component
const GoldDivider = () => (
  <div className="flex items-center justify-center">
    <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent" />
    <div className="mx-4 w-2 h-2 bg-[#F4BA3E] rounded-full" />
    <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent" />
  </div>
);

export function ServicioHero() {
  return (
    <section className="relative py-20 md:py-40 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-[center_25%]"
        style={{ backgroundImage: "url('/images/IMAGEN-SERVICIO.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

      {/* Glow effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] bg-[#F4BA3E]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl mb-6 text-white font-bold uppercase tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            Servicio al Cliente
          </h1>
          <GoldDivider />
          <p className="text-lg md:text-xl lg:text-2xl text-[#F4BA3E] font-medium mt-8 tracking-wide drop-shadow-md">
            ¿Cómo podemos ayudarte hoy?
          </p>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed opacity-90 text-sm md:text-base">
            Nuestro equipo de especialistas está listo para brindarte el acompañamiento y las respuestas que necesitas con la seriedad que nos caracteriza.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function ServicioContactMethods() {
  return (
    <section className="py-24 bg-[#0d060a] relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F4BA3E]/20 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight">Canales de Atención</h2>
          <p className="text-base md:text-lg text-[#F4BA3E]/80">Elige el medio que mejor se adapte a ti</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-7 md:p-8 rounded-3xl hover:border-[#F4BA3E]/30 transition-all duration-500 hover:bg-white/10 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#B68110] to-[#F4BA3E] flex items-center justify-center shadow-lg shadow-[#B7871C]/20 group-hover:scale-110 transition-transform duration-500">
                <method.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F4BA3E] transition-colors">{method.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-7 md:mb-8 leading-relaxed flex-grow break-all overflow-hidden opacity-80">
                {method.description}
              </p>
              <Button
                variant="outline"
                className="w-full border-[#F4BA3E]/40 text-[#F4BA3E] hover:bg-[#F4BA3E] hover:text-black hover:border-[#F4BA3E] transition-all rounded-xl py-5 text-xs uppercase font-bold tracking-widest bg-transparent"
                asChild
              >
                <a
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {method.action}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicioHours() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-px bg-[#F4BA3E]" />
                <span className="text-[#F4BA3E] uppercase tracking-widest text-sm font-bold">Disponibilidad</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">Horarios de Oficina</h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Estamos comprometidos con brindarte una atención oportuna dentro de nuestros horarios establecidos.
              </p>

              <div className="space-y-4">
                {hours.map((schedule, index) => (
                  <div key={schedule.day} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 gap-2">
                    <span className="text-gray-300 font-medium">{schedule.day}</span>
                    <span className="text-[#F4BA3E] font-bold">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-1 bg-gradient-to-br from-[#B68110] via-[#F4BA3E] to-[#947018] rounded-[2.5rem]"
            >
              <div className="bg-[#0d060a] p-10 rounded-[2.4rem] text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                  <MessageCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl text-white font-bold mb-4 italic">¿Atención Directa?</h3>
                <p className="text-gray-400 text-lg mb-8">
                  Escríbenos por WhatsApp y un asesor especializado te responderá lo antes posible.
                </p>
                <Button
                  size="lg"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl py-6 shadow-lg shadow-green-500/20"
                  asChild
                >
                  <a href="https://wa.me/+573147868069" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-3" />Contactar por WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicioFAQ() {
  return (
    <section className="py-24 bg-[#0d060a] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-12 h-12 text-[#F4BA3E]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight">Preguntas Frecuentes</h2>
          <GoldDivider />
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-4 md:px-8 overflow-hidden transition-all duration-300 data-[state=open]:border-[#F4BA3E]/40"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-white hover:text-[#F4BA3E] transition-colors">
                  <span className="text-base md:text-lg font-medium pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-8 leading-relaxed border-t border-white/5 pt-4 text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>

      {/* Background glow */}
      <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-[#947018]/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
