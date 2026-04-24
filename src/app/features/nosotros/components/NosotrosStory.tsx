import { motion } from 'motion/react';

export function NosotrosStory() {
  return (
    <section className="py-24 relative z-10" id="historia">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 p-1.5 bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem] border border-white/5 shadow-2xl">
              <div className="overflow-hidden rounded-[2.2rem]">
                <img
                  src='/images/nosotros/NOSOTROS.webp'
                  alt="Equipo Meraki"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>

            {/* Floating Foundation Label */}
            <div className="absolute -bottom-6 -right-6 bg-[#0a0a0a] backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-2xl z-20">
              <div className="text-3xl font-bold text-[#F4BA3E]">2001</div>
              <div className="text-[12px] uppercase tracking-widest text-gray-400 mt-1 font-bold">Fundación</div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-[#B7871C]/10 border border-[#B7871C]/20 text-[#B7871C] text-[12px] font-bold tracking-[0.3em] uppercase mb-6">
              Nuestra Historia
            </div>
            <h2 className="text-4xl md:text-5xl mb-8 text-white font-bold tracking-tight leading-tight">
              El Arte de <br /><span className="text-[#F4BA3E]">Trascender</span>
            </h2>

            <div className="space-y-6 text-base text-gray-400 leading-relaxed font-light">
              <p>En Grupo Constructor Meraki, no solo desarrollamos proyectos, los creamos con propósito.
                Nuestro nombre nace de una filosofía: hacer las cosas con el alma, con dedicación y con la convicción de que cada detalle importa.</p>
              <p><span className="text-white font-medium">Grupo Constructor Meraki</span> Por eso, cuando decimos “Creamos con pasión”, no es solo un eslogan, es la forma en la que concebimos cada uno de nuestros clubes de campo.</p>
              <p>Con
                Creamos espacios pensados para vivir mejor, para conectar con la naturaleza, para invertir con seguridad y para construir un futuro con tranquilidad. Cada terreno campestre que desarrollamos refleja nuestro compromiso con la calidad, la planeación y la confianza.</p>
              <p>Somos una compañia que cree en hacer las cosas bien desde el inicio: con proyectos reales, ubicaciones estratégicas y una visión clara de valorización y bienestar para quienes confían en nosotros.</p>
              <p>
                Más que desarrollar proyectos, en  <span className="text-[#F4BA3E]">Meraki</span> creamos lugares donde las personas pueden cumplir un sueño:
                hacer del campo su segundo hogar.</p>

              <div className="pt-6 flex items-center space-x-4">
                <div className="w-12 h-[1px] bg-[#F4BA3E]/30" />
                <span className="text-[12px] uppercase tracking-[0.4em] text-[#F4BA3E] font-bold">Hecho con el Alma</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
