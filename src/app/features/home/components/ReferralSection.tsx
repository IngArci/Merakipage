import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Gift, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../../../components/ui/button';

export function ReferralSection() {
  const steps = [
    {
      icon: Users,
      title: '1. Recomienda',
      description: 'Comparte Meraki con tus amigos y familiares'
    },
    {
      icon: CheckCircle,
      title: '2. Se concreta la venta',
      description: 'Tu referido invierte en uno de nuestros proyectos'
    },
    {
      icon: Gift,
      title: '3. Recibes tu beneficio',
      description: 'Obtén recompensas atractivas por cada referido exitoso'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-black via-[#0d060a] to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#F4BA3E] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#B7871C] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#947018] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center space-x-2 mb-6">
                <Gift className="w-8 h-8 text-[#F4BA3E]" />
                <span className="text-[#FFF18F] text-sm tracking-wider uppercase font-bold">
                  Programa especial
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 bg-gradient-to-r from-[#FFF18F] via-[#F4BA3E] to-[#FFF18F] bg-clip-text text-transparent tracking-tighter uppercase leading-none">
                REFIERE
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white uppercase tracking-tight">
                y gana con meraki
              </h2>
              <p className="text-xl text-gray-300 max-w-xl font-light">
                Forma parte de nuestro programa de referidos y obtén beneficios exclusivos al recomendar nuestros proyectos.
              </p>
            </motion.div>

            <div className="flex flex-col gap-6 mb-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-6 group bg-white/5 border border-white/5 rounded-2xl p-4 hover:bg-white/10 hover:border-[#F4BA3E]/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 shrink-0 rounded-xl bg-gradient-to-br from-[#B68110] to-[#F4BA3E] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-white uppercase tracking-tight">{step.title}</h3>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#B68110] via-[#F4BA3E] to-[#FFF18F] hover:from-[#FFF18F] hover:via-[#F4BA3E] hover:to-[#B68110] text-black font-extrabold shadow-[0_0_30px_rgba(244,186,62,0.3)] hover:shadow-[0_0_40px_rgba(244,186,62,0.5)] text-sm px-10 py-7 uppercase tracking-[0.2em] rounded-full transition-all duration-500 w-full sm:w-auto"
                asChild
              >
                <Link to="/referidos">
                  Quiero referir
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>


          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-center items-center relative"
          >

            <div className="absolute w-[80%] h-[80%] bg-[#F4BA3E]/10 blur-[100px] rounded-full pointer-events-none" />

            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              src="/images/referidos/3.webp"
              alt="Gánese 3 Millones por cada Referido"
              className="w-full max-w-sm xl:max-w-md object-contain drop-shadow-[0_20px_50px_rgba(244,186,62,0.25)] relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
