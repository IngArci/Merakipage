import { motion } from 'motion/react';

const PILLARS = [
  { label: 'Transparencia financiera', color: 'bg-[#F4BA3E]' },
  { label: 'Acompañamiento personalizado', color: 'bg-[#B7871C]' },
  { label: 'Soluciones responsables', color: 'bg-[#947018]' },
];

const GoldDivider = () => (
  <div className="flex items-center justify-center">
    <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent" />
    <div className="mx-4 w-2 h-2 bg-[#F4BA3E] rounded-full" />
    <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent" />
  </div>
);

export function CarteraInfo() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
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
          <GoldDivider />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            {/* ── Texto ─────────────────────────────────────────────────── */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                En <span className="text-[#F4BA3E] font-semibold">Grupo Constructor Meraki</span> entendemos
                la importancia de una administración financiera transparente y un acompañamiento respetuoso
                en cada etapa del proceso.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                Por eso, este espacio ha sido creado para brindarte información precisa sobre tus obligaciones,
                resolver inquietudes y apoyarte en la construcción de acuerdos que se ajusten a tus necesidades,
                siempre con orden, claridad y responsabilidad.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                Nuestro compromiso es garantizar una comunicación oportuna y un servicio que refleje la
                seriedad con la que asumimos cada situación.
              </p>

              {/* Pilares */}
              <div className="flex items-center space-x-4 pt-4">
                <div className="w-1 h-20 bg-gradient-to-b from-[#F4BA3E] via-[#B7871C] to-transparent rounded-full" />
                <div className="space-y-2">
                  {PILLARS.map(({ label, color }) => (
                    <div key={label} className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${color}`} />
                      <span className="text-sm text-gray-400">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Lado derecho ──────────────────────────────────────────── */}
            <div className="flex flex-col items-center justify-center space-y-8">
              {/* Badge de trayectoria */}
              <div className="relative">
                <div className="absolute inset-0  from-[#F4BA3E]/20 via-[#B7871C]/20 to-transparent blur-3xl scale-110" />
                <div className="relative  from-[#F4BA3E]/10 to-transparent p-12 rounded-2xl border border-[#F4BA3E]/30 text-center">
                  <img
                    src='/images/cartera/CARTERA.webp'
                    alt="Hero Background"
                    className="w-full  object-cover"
                  />
                </div>
              </div>

              {/* Frase Nunca */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl shadow-2xl"
              >
                <img
                  src="/images/Nunca.png"
                  alt="Nunca nos cansaremos de mejorar para ti"
                  className="h-10 w-auto object-contain"
                />
              </motion.div>
            </div>
          </div>

          <div className="mt-16">
            <GoldDivider />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
