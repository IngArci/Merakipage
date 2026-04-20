import { motion } from 'motion/react';

export function PromoBanner() {
  const videoSrc = '/images/puerta/video-puerta.mp4';

  return (
    <section className="relative w-full overflow-hidden bg-black flex justify-center">
      
      <div className="relative w-full max-w-[1600px] flex items-center justify-center">
        
        {/* VIDEO OPTIMIZADO */}
        <video 
          src={videoSrc}
          className="w-full h-auto min-h-[50vh] md:min-h-0 object-cover md:object-contain"
          muted 
          loop 
          playsInline
          preload="none" 
          poster="/images/puerta/PORTADA-PAGINA-WEB-1 (1).webp"
        />

        {/* BOTÓN */}
        <div className="absolute inset-x-0 bottom-[6%] sm:bottom-[8%] md:bottom-[7%] lg:bottom-[8%] flex justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-[180px] sm:max-w-[240px] md:max-w-[300px] lg:max-w-[380px] xl:max-w-[420px]"
          >
            <a 
              href="https://puertabono.grupoconstructormeraki.com.co/" 
              target="_blank" 
              rel="noopener"
              className="block transform transition-all duration-300 hover:scale-105 active:scale-95 drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
            >
              <img
                src="/images/puerta/boton-opt.webp"
                alt="Ir a la promoción"
                className="w-full h-auto pointer-events-none"
                width="400"
                height="57"
                loading="lazy"
              />
            </a>
          </motion.div>
        </div>

      </div>
      
      {/* Bordes decorativos */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--gold-5)] to-transparent opacity-20" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold-5)] to-transparent opacity-20" />
    
    </section>
  );
}