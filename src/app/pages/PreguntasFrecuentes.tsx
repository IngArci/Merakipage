import { motion } from 'motion/react';
import { FAQHero, FAQList } from '../features/faq/components/FAQComponents';

export default function PreguntasFrecuentes() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black min-h-screen"
    >
      <FAQHero />
      <FAQList />

      {/* Final CTA or decorative element if needed */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 text-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#F4BA3E] to-transparent mx-auto mb-10 opacity-30" />
          <p className="text-gray-500 text-sm tracking-widest uppercase font-bold">
            ¿Aún tienes dudas? Contacta con nosotros
          </p>
        </div>
      </section>
    </motion.main>
  );
}
