import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../../components/ui/button';

export function HeroSection() {
  return (
    <section
      className="relative w-full flex items-start overflow-hidden"
      style={{ height: '100dvh', minHeight: '100dvh' }}
    >
      <style>{`
        @keyframes fadeInUpLCP {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-lcp-animate {
          animation: fadeInUpLCP 0.8s ease-out forwards;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('/hero.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          /* Móvil: posición centrada en el área más visual */
          background-position: 60% center;
        }
        @media (min-width: 640px) {
          .hero-bg {
            background-position: center center;
          }
        }
      `}</style>


      <div className="hero-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/50 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/40 sm:to-black/10" />


      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 pt-28 pb-16 sm:pt-32 md:pt-36 lg:pt-40">
        <div className="max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <div className="hero-lcp-animate">


            <div className="mb-5 md:mb-7">
              <img
                src="/vive.webp"
                alt="Vive en un Club de Campo - Meraki"
                className="block w-auto h-auto object-contain
                  max-w-[190px]
                  sm:max-w-[280px]
                  md:max-w-[360px]
                  lg:max-w-[450px]
                  xl:max-w-[530px]
                "
              />
            </div>

            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-200 mb-7 md:mb-9 max-w-md leading-relaxed drop-shadow-lg">
              Invierte en terrenos campestres y vive la experiencia de un club de campo
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#B68110] to-[#F4BA3E] hover:from-[#947018] hover:to-[#B7871C] text-white shadow-2xl text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
                asChild
              >
                <Link to="/proyectos">
                  Ver proyectos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#F4BA3E] text-[#F4BA3E] hover:bg-[#F4BA3E] hover:text-black text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
                asChild
              >
                <Link to="/contacto">Quiero invertir</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}