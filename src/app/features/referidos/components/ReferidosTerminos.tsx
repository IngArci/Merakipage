import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

const terminos = [
  {
    num: 1,
    titulo: 'Registro del referido',
    texto:
      'Todo referido deberá estar registrado en la página web de la compañía con un mínimo de veinticuatro (24) horas de antelación a la realización de la venta.',
  },
  {
    num: 2,
    titulo: 'Aplicación única por predio',
    texto: 'El beneficio de referido aplica una vez por cada predio vendido.',
  },
  {
    num: 3,
    titulo: 'Estado de cuenta del referido',
    texto:
      'El cliente referido (nuevo comprador) debe estar al día con su obligación de pago para que el beneficio sea válido.',
  },
  {
    num: 4,
    titulo: 'Cuotas mínimas pagadas por el referido',
    texto:
      'Si el plan de pagos del referido tiene cuotas iguales o superiores a $1.500.000, el pago del beneficio se realizará una vez haya cancelado la tercera (3ª) cuota y esté al día. Si el plan de pagos tiene cuotas inferiores a $1.500.000, el beneficio se entregará una vez el referido haya pagado la quinta (5ª) cuota y esté al día.',
  },
  {
    num: 5,
    titulo: 'Invalidez del beneficio',
    texto:
      'No se reconocerá el pago de referido si el nuevo cliente (referido) no cumple las condiciones del negocio o no está al día con sus pagos.',
  },
  {
    num: 6,
    titulo: 'Radicación del beneficio',
    texto:
      'Para solicitar el pago por referido, el referente deberá radicar una cuenta de cobro en la oficina de Servicio al Cliente. La solicitud estará sujeta a verificación.',
  },
  {
    num: 7,
    titulo: 'Plazo de pago',
    texto:
      'El pago del bono de referido se realizará dentro de los 30 días calendario siguientes a la radicación, una vez verificada la información y según la cuenta bancaria certificada que haya entregado el referente.',
  },
  {
    num: 8,
    titulo: 'Descuentos de ley',
    texto:
      'Todos los pagos por referido estarán sujetos a los descuentos establecidos por la ley vigente.',
  },
  {
    num: 9,
    titulo: 'Referentes con obligación vigente',
    texto:
      'Si el referente es un propietario con obligación activa con la compañía, el valor del pago por referido será abonado al saldo pendiente al finalizar su plan de pagos.',
  },
  {
    num: 10,
    titulo: 'Validez del beneficio',
    texto:
      'El pago por referido solo se otorgará si la persona que refiere cumple con su propia obligación contractual y no se retracta del negocio. En caso de retracto, no se pagará el bono por referido.',
  },
];

export function ReferidosTerminos() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F4BA3E]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          {/* Cabecera */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-[#F4BA3E]/10 flex items-center justify-center flex-shrink-0 border border-[#F4BA3E]/30 shadow-[0_0_20px_rgba(244,186,62,0.1)]">
              <ShieldCheck className="w-6 h-6 text-[#F4BA3E]" />
            </div>
            <div>
              <span className="text-[#F4BA3E] font-bold tracking-[0.3em] uppercase text-[12px] mb-1 block">Condiciones Generales</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter leasing-none">
                Términos y <span className="text-[#F4BA3E]">Restricciones</span>
              </h2>
            </div>
          </div>

          {/* Lista */}
          <div className="space-y-4">
            {terminos.map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex gap-5 bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 hover:border-[#F4BA3E]/30 transition-all duration-300 group"
              >
                {/* Número */}
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#F4BA3E]/10 border border-[#F4BA3E]/20 flex items-center justify-center transition-colors group-hover:bg-[#F4BA3E] group-hover:text-black">
                  <span className="text-xs font-black text-[#F4BA3E] group-hover:text-black transition-colors">{item.num}</span>
                </div>
                {/* Texto */}
                <div>
                  <p className="text-base font-bold text-white mb-2 uppercase tracking-tight">{item.titulo}</p>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">{item.texto}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
