import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../../components/ui/button';

export function HeroSection() {
  return (
    <section
      className="relative w-full flex flex-col md:block overflow-hidden bg-black md:h-[100dvh] md:min-h-[100dvh]"
    >
      <style>{`
        @keyframes fadeInUpLCP {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-lcp-animate {
          animation: fadeInUpLCP 0.8s ease-out forwards;
        }
        .hero-bg {
          background-image: url('/projects/hero.webp');
          background-repeat: no-repeat;
        }
        @media (max-width: 767px) {
          .hero-bg {
            position: relative;
            background-size: contain;
            background-position: center;
            height: 75vw;
            width: 100%;
          }
          .hero-content {
            padding: 20px 20px 40px;
            background: black;
            position: relative;
            z-index: 20;
          }
        }
        @media (min-width: 768px) {
          .hero-bg {
            position: absolute;
            inset: 0;
            background-size: 100% 100%;
            background-position: center center;
          }
          .hero-content {
            position: relative;
            z-index: 10;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: 10rem;
          }
        }
      `}</style>


      <div className="hero-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/50 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/40 sm:to-black/10 z-[5] hidden md:block" />


      <div className="container mx-auto px-6 sm:px-8 lg:px-12 hero-content">
        <div className="max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto md:mx-0">
          <div className="hero-lcp-animate text-center md:text-left">
            <div className="mb-4 md:mb-7 flex justify-center md:justify-start">
              <img
                src="/projects/vive-opt.webp"
                alt="Vive en un Club de Campo - Meraki"
                width="400"
                height="162"
                className="block w-auto h-auto object-contain
                  max-w-[220px]
                  sm:max-w-[280px]
                  md:max-w-[360px]
                  lg:max-w-[450px]
                  xl:max-w-[530px]
                "
              />
            </div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 md:mb-9 max-w-md mx-auto md:mx-0 leading-relaxed drop-shadow-xl font-medium">
              Invierte en terrenos campestres y vive la experiencia de un club de campo
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6">
              <Button
                size="lg"
                className="relative group bg-gradient-to-r from-[#B68110] via-[#F4BA3E] to-[#B68110] text-black font-black shadow-[0_0_15px_rgba(244,186,62,0.3)] text-sm md:text-lg px-6 md:px-10 py-5 md:py-7 uppercase tracking-wider rounded-full transition-all duration-500 overflow-hidden"
                asChild
              >
                <Link to="/proyectos">
                  <span className="relative z-10 flex items-center justify-center">
                    Ver proyectos
                    <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-white/5 backdrop-blur-md border-2 border-[#F4BA3E]/40 text-white hover:bg-[#F4BA3E] hover:text-black text-sm md:text-lg px-6 md:px-10 py-5 md:py-7 uppercase tracking-wider rounded-full transition-all duration-500 font-bold"
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