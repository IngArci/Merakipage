import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Button } from '../../../components/ui/button';

export function NosotrosPreviewSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-[#0d060a] to-black relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#F4BA3E] opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Únete a los Inversionistas del Futuro
            </h2>

            <p className="text-lg text-gray-300 mb-6">
              En Grupo Constructor Meraki, transformamos terrenos en paraísos naturales
              donde las familias pueden crear recuerdos inolvidables.
            </p>

            <p className="text-lg text-gray-300 mb-8">
              Con más de 25 años de experiencia, somos líderes en desarrollo de
              clubes campestres, ofreciendo inversiones seguras y rentables.
            </p>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#F4BA3E] text-[#F4BA3E] hover:bg-[#F4BA3E] hover:text-black"
              asChild
            >
              <Link to="/inversionistas">Conoce historias de éxito</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1758519288905-38b7b00c1023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBoYW5kc2hha2UlMjBzdWNjZXNzfGVufDF8fHx8MTc3Mzg0NTUzMXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Nosotros"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl border-2 border-[#F4BA3E]/20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
