import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../../../components/ui/button';

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
          src="https://images.unsplash.com/photo-1758565811272-e79917ca0adc?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb3VudHJ5c2lkZSUyMGVzdGF0ZSUyMGNvdW50cnlzaWRlJTIwbGFuZ2RldmVsb3BtZW50fGVufDF8fHx8MTc3Mzg0NTUyOXww&ixlib=rb-4.1.0&q=60&w=1000"
          alt="Lotes campestres en Tolima - Proyectos Meraki en Melgar, Alvarado y Mariquita"
          className="w-full h-full object-cover"
          fetchpriority="high"
          loading="eager"
          width="1000"
          height="667"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="hero-lcp-animate">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-6 h-6 text-[#F4BA3E]" />
              <span className="text-[#FFF18F] text-sm tracking-wider uppercase">
                Inversión segura en naturaleza
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl mb-6 text-white leading-tight">
              Haz del campo tu segundo hogar
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-10">
              Invierte en terrenos campestres y vive la experiencia de un club de campo
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#B68110] to-[#F4BA3E] hover:from-[#947018] hover:to-[#B7871C] text-white shadow-2xl text-lg px-8 py-6"
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
                className="border-2 border-[#F4BA3E] text-[#F4BA3E] hover:bg-[#F4BA3E] hover:text-black text-lg px-8 py-6"
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
