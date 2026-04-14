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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Gift className="w-8 h-8 text-[#F4BA3E]" />
            <span className="text-[#FFF18F] text-sm tracking-wider uppercase">
              Programa especial
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-[#FFF18F] via-[#F4BA3E] to-[#FFF18F] bg-clip-text text-transparent">
            Gana Recomendando con Meraki
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Forma parte de nuestro programa de referidos y obtén beneficios exclusivos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#B68110] to-[#F4BA3E] flex items-center justify-center">
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl mb-3">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#B68110] via-[#F4BA3E] to-[#FFF18F] hover:from-[#FFF18F] hover:via-[#F4BA3E] hover:to-[#B68110] text-black shadow-2xl text-lg px-8 py-6"
            asChild
          >
            <Link to="/referidos">
              Quiero referir
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
