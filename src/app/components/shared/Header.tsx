import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import logoMeraki from "../../../assets/logos/logo.webp";
import { useScrollSpy } from '../../hooks/useScrollSpy';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Detectar si estamos en una página de detalle de proyecto
  const isProjectDetail = location.pathname.includes('/proyectos/') && location.pathname !== '/proyectos';

  // Detectar si estamos en la página de Nosotros
  const isNosotrosPage = location.pathname === '/nosotros';

  const menuItems = [
    { name: 'INICIO', path: '/' },
    { name: 'CLUBS DE CAMPO', path: '/proyectos' },
    { name: 'PAGOS', path: '/pagos' },
    { name: 'REFERIDOS', path: '/referidos' },
    { name: 'NOSOTROS', path: '/nosotros' },
    { name: 'SERVICIO AL CLIENTE', path: '/servicio' },
    { name: 'CARTERA', path: '/cartera' },
  ];

  // Apartados para las páginas de detalle de proyectos
  const projectDetailSections = [
    { name: 'DESCRIPCIÓN', anchor: 'descripcion' },
    { name: 'UBICACIÓN', anchor: 'ubicacion' },
    { name: 'AMENIDADES', anchor: 'amenidades' },
    { name: 'PLANO MAESTRO', anchor: 'plano' },
    { name: 'AVANCES', anchor: 'avances' },
  ];

  // Apartados para la página de Nosotros
  const nosotrosSections = [
    { name: 'HISTORIA', anchor: 'historia' },
    { name: 'VALORES', anchor: 'valores' },
    { name: 'MISIÓN Y VISIÓN', anchor: 'mision-vision' },
    { name: 'ASESORES', anchor: 'asesores' },
    { name: 'FERIAS', anchor: 'ferias' },
  ];

  const currentSections = isProjectDetail ? projectDetailSections : isNosotrosPage ? nosotrosSections : [];
  const activeSectionId = useScrollSpy(currentSections.map(s => s.anchor), 100);

  // Función para hacer scroll suave a una sección
  const scrollToSection = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      const headerOffset = 100; // Offset para el header fijo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    // Delay micro on mobile to give visual feedback before menu abruptly vanishes
    setTimeout(() => setIsMenuOpen(false), 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#F4BA3E]/20 shadow-2xl">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={logoMeraki}
              alt="Grupo Constructor Meraki"
              className="h-auto w-[179px]"
              width="179"
              height="70"
              {...({ fetchpriority: "high" } as any)}
            />
          </Link>

          {/* Desktop Menu - Condicional */}
          <div className="hidden lg:flex items-center space-x-8">
            {isProjectDetail ? (
              // Menú para detalle de proyecto
              <>
                <Link
                  to="/"
                  className="text-sm transition-colors hover:text-[#F4BA3E] text-[#F4BA3E]"
                >
                  VOLVER A INICIO
                </Link>
                {projectDetailSections.map((section) => (
                  <button
                    key={section.anchor}
                    onClick={() => scrollToSection(section.anchor)}
                    className={`text-sm transition-colors text-[#F4BA3E] hover:text-[#F4BA3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4BA3E] ${activeSectionId === section.anchor ? 'text-[#F4BA3E] font-medium' : 'text-gray-300'
                      }`}
                  >
                    {section.name}
                  </button>
                ))}
                <Button
                  className="bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] hover:from-[#FFF18F] hover:via-[#F4BA3E] hover:to-[#FFF18F] text-black shadow-lg shadow-[#F4BA3E]/30 transition-transform duration-300 hover:scale-[1.03] active:scale-95 focus-visible:ring-2 focus-visible:ring-[#F4BA3E] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  onClick={() => scrollToSection('contacto')}
                >
                  SOLICITO INFORMACIÓN
                </Button>
              </>
            ) : isNosotrosPage ? (
              // Menú para la página de Nosotros
              <>
                {nosotrosSections.map((section) => (
                  <button
                    key={section.anchor}
                    onClick={() => scrollToSection(section.anchor)}
                    className={`text-sm transition-colors hover:text-[#F4BA3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4BA3E] ${activeSectionId === section.anchor ? 'text-[#F4BA3E] font-medium' : 'text-gray-300'
                      }`}
                  >
                    {section.name}
                  </button>
                ))}
                <Button
                  className="bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] hover:from-[#FFF18F] hover:via-[#F4BA3E] hover:to-[#FFF18F] text-black shadow-lg shadow-[#F4BA3E]/30 transition-transform duration-300 hover:scale-[1.03] active:scale-95 focus-visible:ring-2 focus-visible:ring-[#F4BA3E] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  asChild
                >
                  <Link to="/">VOLVER AL INICIO</Link>
                </Button>
              </>
            ) : (
              // Menú normal
              <>
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-[#F4BA3E] transition-colors hover:text-[#F4BA3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4BA3E] ${location.pathname === item.path
                      ? 'text-[#F4BA3E]'
                      : 'text-white'
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  className="bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] hover:from-[#FFF18F] hover:via-[#F4BA3E] hover:to-[#FFF18F] text-black shadow-lg shadow-[#F4BA3E]/30 transition-transform duration-300 hover:scale-[1.03] active:scale-95 focus-visible:ring-2 focus-visible:ring-[#F4BA3E] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  asChild
                >
                  <Link to="/contacto">INVERTIR AHORA</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-[#F4BA3E]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu - Condicional */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-6"
          >
            <div className="flex flex-col space-y-4">
              {isProjectDetail ? (
                // Menú móvil para detalle de proyecto
                <>
                  <Link
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm py-2 transition-colors hover:text-[#F4BA3E] text-[#F4BA3E] text-left"
                  >
                    VOLVER A INICIO
                  </Link>
                  {projectDetailSections.map((section) => (
                    <button
                      key={section.anchor}
                      onClick={() => scrollToSection(section.anchor)}
                      className={`text-sm py-2 transition-colors hover:text-[#F4BA3E] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4BA3E] ${activeSectionId === section.anchor ? 'text-[#F4BA3E] font-medium' : 'text-gray-300'
                        }`}
                    >
                      {section.name}
                    </button>
                  ))}
                  <Button
                    className="bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] hover:from-[#FFF18F] hover:via-[#F4BA3E] hover:to-[#FFF18F] text-black w-full active:scale-95 transition-transform"
                    onClick={() => scrollToSection('contacto')}
                  >
                    SOLICITAR INFORMACIÓN
                  </Button>
                </>
              ) : isNosotrosPage ? (
                // Menú móvil para la página de Nosotros
                <>
                  {nosotrosSections.map((section) => (
                    <button
                      key={section.anchor}
                      onClick={() => scrollToSection(section.anchor)}
                      className={`text-sm py-2 transition-colors hover:text-[#F4BA3E] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4BA3E] ${activeSectionId === section.anchor ? 'text-[#F4BA3E] font-medium' : 'text-gray-300'
                        }`}
                    >
                      {section.name}
                    </button>
                  ))}
                  <Button
                    className="bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] hover:from-[#FFF18F] hover:via-[#F4BA3E] hover:to-[#FFF18F] text-black w-full active:scale-95 transition-transform"
                    asChild
                  >
                    <Link to="/">VOLVER AL INICIO</Link>
                  </Button>
                </>
              ) : (
                // Menú móvil normal
                <>
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-sm py-2 transition-colors hover:text-[#F4BA3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4BA3E] ${location.pathname === item.path
                        ? 'text-[#F4BA3E]'
                        : 'text-gray-300'
                        }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button
                    className="bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] hover:from-[#FFF18F] hover:via-[#F4BA3E] hover:to-[#FFF18F] text-black w-full active:scale-95 transition-transform"
                    asChild
                  >
                    <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
                      INVERTIR AHORA
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}