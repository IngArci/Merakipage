import { motion } from 'motion/react';

export function CarteraHero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1758519289022-5f9dea0d8cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-[#947018]/60" />
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
          <h1 className="text-5xl md:text-6xl mb-6 text-white font-bold uppercase tracking-tight">
            Gestión de Cartera Meraki
          </h1>
          <p className="text-xl md:text-2xl text-[#F4BA3E] font-medium max-w-2xl mx-auto">
            Tu confianza nos impulsa a mantener una gestión clara y responsable
          </p>
        </motion.div>
      </div>
    </section>
  );
}
