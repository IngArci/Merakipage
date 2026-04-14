import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function PromoBanner() {
  const [videoSrc, setVideoSrc] = useState<string>('');

  useEffect(() => {
    // Delay video loading until after first paint
    const timer = setTimeout(() => {
      setVideoSrc('https://grupoconstructormeraki.com.co/wp-content/uploads/2026/02/Video-sin-titulo-‐-Hecho-con-Clipchamp-1.mp4');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden group bg-black flex justify-center">
      {/* Container with relative centering for the video - Responsive max-widths */}
      <div className="relative w-full max-w-[1600px] flex items-center justify-center">
        {videoSrc ? (
          <video 
            src={videoSrc}
            className="w-full h-auto min-h-[50vh] md:min-h-0 object-cover md:object-contain"
            autoPlay 
            muted 
            loop 
            playsInline
            preload="metadata"
            poster="/images/puerta/PORTADA-PAGINA-WEB-1 (1).webp"
          />
        ) : (
          <div className="w-full h-auto min-h-[50vh] md:min-h-0 bg-black flex items-center justify-center">
             <img 
               src="/images/puerta/PORTADA-PAGINA-WEB-1 (1).webp" 
               alt="Cargando promoción..."
               className="w-full h-auto object-cover opacity-50"
             />
          </div>
        )}

        {/* Button Overlay - Responsive positioning and scaling */}
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
                src="/images/puerta/Boton.png"
                alt="Ir a la promoción"
                className="w-full h-auto pointer-events-none"
                width="420"
                height="80"
              />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Border */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--gold-5)] to-transparent opacity-20" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold-5)] to-transparent opacity-20" />
    </section>
  );
}
