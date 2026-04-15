import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../../components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes fadeInUpLCP {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-lcp-animate {
          animation: fadeInUpLCP 0.8s ease-out forwards;
        }
      `}</style>


      <div className="absolute inset-0">
        <img
          src='/hero.webp'
          alt="Lotes campestres en Tolima - Proyectos Meraki en Melgar, Alvarado y Mariquita"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          loading="eager"
          width="1000"
          height="667"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-black/0" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-24 md:py-0">
        <div className="max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <div className="hero-lcp-animate">


            <div className="mb-6 md:mb-8">
              <img
                src="/vive.webp"
                alt="Título Meraki"
                className="
                  block
                  w-auto
                  max-w-[220px]
                  sm:max-w-[300px]
                  md:max-w-[380px]
                  lg:max-w-[480px]
                  xl:max-w-[560px]
                  h-auto
                  object-contain
                "
              />
            </div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-10 max-w-md leading-relaxed">
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
