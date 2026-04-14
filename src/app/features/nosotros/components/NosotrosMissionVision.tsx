import { motion } from 'motion/react';
import { Target, TrendingUp } from 'lucide-react';

export function NosotrosMissionVision() {
  return (
    <section className="py-24 relative z-10" id="mision-vision">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-[#0a0a0a] rounded-[3rem] border border-white/5 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#F4BA3E]/5 blur-[50px] rounded-full" />
            <div className="w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-[#111] to-[#010101] border border-[#F4BA3E]/20 flex items-center justify-center shadow-xl">
              <Target className="w-8 h-8 text-[#F4BA3E]" />
            </div>
            <h3 className="text-3xl mb-6 text-white font-bold uppercase tracking-tighter">Misión</h3>
            <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
              Fomentar proyectos urbanísticos de "Tiny Houses" con zonas sociales innovadoras bajo el concepto "EL CAMPO SU SEGUNDO HOGAR" ofreciendo espacios y terrenos, eco house & glamping con todo el confort de la ciudad, pero en el campo, donde cualquier persona pueda construir la Tiny House de sus sueños, interactúe con la naturaleza y así lograr un estilo de vida saludable y sostenible para todo aquel que obtenga su Tiny House con el Grupo Constructor Meraki.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-[#0a0a0a] rounded-[3rem] border border-white/5 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#F4BA3E]/5 blur-[50px] rounded-full" />
            <div className="w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-[#111] to-[#010101] border border-[#F4BA3E]/20 flex items-center justify-center shadow-xl">
              <TrendingUp className="w-8 h-8 text-[#F4BA3E]" />
            </div>
            <h3 className="text-3xl mb-6 text-white font-bold uppercase tracking-tighter">Visión</h3>
            <div className="text-sm md:text-base text-gray-400 font-light leading-relaxed space-y-4">
              <p>Al 2030 posicionarnos en el país y el mundo como líderes en proyectos urbanísticos de "Tiny Houses, TERRENOS CAMPESTRES, ECO HOUSE & GLAMPING".</p>
              <p>Ser amigables con el ecosistema y ser los conciliadores del hombre con el campo, con el fin de mejorar la calidad de vida para que el hombre vuelva a su provincia terruño o pueblo, a disfrutar con sus amigos, familia, compartir vivencias inolvidables con su naturaleza, gastronomía, idiosincrasia y costumbres.</p>
              <p>Impulsar el agroturismo en las provincias. Así, como ser el punto de conexión para la economía colaborativa, a través del intercambio de hospedaje en Tiny Houses.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
