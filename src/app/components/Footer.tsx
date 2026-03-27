import { Link } from 'react-router';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import logoMeraki from "../../assets/logo.png";

// SVG personalizado para TikTok
const TikTokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black via-[#0d060a] to-black text-white border-t border-[#F4BA3E]/20">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo y descripción */}
          <div>
            <div className="mb-6">
              <img 
                src={logoMeraki} 
                alt="Grupo Constructor Meraki" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Especialistas en venta de terrenos campestres y casas de campo. 
              Tu inversión segura en el paraíso natural.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] hover:bg-gradient-to-br hover:from-[#947018] hover:to-[#F4BA3E] flex items-center justify-center transition-all border border-[#F4BA3E]/20">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] hover:bg-gradient-to-br hover:from-[#947018] hover:to-[#F4BA3E] flex items-center justify-center transition-all border border-[#F4BA3E]/20">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] hover:bg-gradient-to-br hover:from-[#947018] hover:to-[#F4BA3E] flex items-center justify-center transition-all border border-[#F4BA3E]/20">
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg mb-6 text-[#F4BA3E]">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#F4BA3E] text-sm transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/proyectos" className="text-gray-400 hover:text-[#F4BA3E] text-sm transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/casas" className="text-gray-400 hover:text-[#F4BA3E] text-sm transition-colors">
                  Casas Campestres
                </Link>
              </li>
              <li>
                <Link to="/referidos" className="text-gray-400 hover:text-[#F4BA3E] text-sm transition-colors">
                  Plan de Referidos
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-400 hover:text-[#F4BA3E] text-sm transition-colors">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg mb-6 text-[#F4BA3E]">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/servicio" className="text-gray-400 hover:text-[#F4BA3E] text-sm transition-colors">
                  Servicio al Cliente
                </Link>
              </li>
              <li>
                <Link to="/cartera" className="text-gray-400 hover:text-[#F4BA3E] text-sm transition-colors">
                  Cartera y Pagos
                </Link>
              </li>
              <li>
                <Link to="/salas-ventas" className="text-gray-400 hover:text-[#F4BA3E] text-sm transition-colors">
                  Nuestras Salas de Ventas
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-[#F4BA3E] text-sm transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-[#F4BA3E] text-sm transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg mb-6 text-[#F4BA3E]">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#F4BA3E] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Cra. 7 #57-129<br />Ibagué, Tolima
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#F4BA3E] flex-shrink-0" />
                <span className="text-gray-400 text-sm">+57 317 682 0728</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#F4BA3E] flex-shrink-0" />
                <span className="text-gray-400 text-sm">servicioalcliente.grupomeraki@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-[#F4BA3E]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2026 Grupo Constructor Meraki. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacidad" className="text-gray-400 hover:text-[#F4BA3E] text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/terminos" className="text-gray-400 hover:text-[#F4BA3E] text-sm transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}