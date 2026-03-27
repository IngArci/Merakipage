import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, CreditCard, Smartphone, Globe, FileText, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import logoArizona from "../../assets/logo.png";

export default function Pagos() {
  const [searchCode, setSearchCode] = useState('');
  const [expandedInstructivo, setExpandedInstructivo] = useState<string | null>(null);

  const proyectos = [
    {
      id: 'canyon-arizona',
      nombre: 'Cañón de Arizona',
      url: 'https://pagos.meraki.com/canyon-arizona',
      logo: logoArizona,
    },
    {
      id: 'laguna-mar',
      nombre: 'Laguna Mar',
      url: 'https://pagos.meraki.com/laguna-mar',
      logo: logoArizona,
    },
    {
      id: 'rio-claro',
      nombre: 'Río Claro',
      url: 'https://pagos.meraki.com/rio-claro',
      logo: logoArizona,
    },
    {
      id: 'protector',
      nombre: 'The Protector',
      url: 'https://pagos.meraki.com/protector',
      logo: logoArizona,
    },
    {
      id: 'grande',
      nombre: 'Grande',
      url: 'https://pagos.meraki.com/grande',
      logo: logoArizona,
    },
    {
      id: 'arizona-1',
      nombre: 'Arizona I',
      url: 'https://pagos.meraki.com/arizona-1',
      logo: logoArizona,
    },
    {
      id: 'arizona-2',
      nombre: 'Arizona II',
      url: 'https://pagos.meraki.com/arizona-2',
      logo: logoArizona,
    },
    {
      id: 'grand-arizona',
      nombre: 'Grand Arizona',
      url: 'https://pagos.meraki.com/grand-arizona',
      logo: logoArizona,
    }
  ];

  const instructivos = [
    {
      id: 'bancolombia-app',
      banco: 'Bancolombia',
      tipo: 'Aplicación Móvil',
      icon: Smartphone,
      pasos: [
        'Ingresa a la app de Bancolombia con tu usuario y contraseña',
        'Selecciona la opción "Transferencias y Pagos"',
        'Elige "Pagar facturas y servicios"',
        'Busca "Grupo Constructor Meraki" en el buscador',
        'Ingresa tu código de referencia de pago',
        'Verifica el monto a pagar',
        'Confirma la transacción con tu clave dinámica',
        'Guarda el comprobante de pago'
      ]
    },
    {
      id: 'bancolombia-web',
      banco: 'Bancolombia',
      tipo: 'Página Web',
      icon: Globe,
      pasos: [
        'Ingresa a www.bancolombia.com',
        'Inicia sesión en "Sucursal Virtual Personas"',
        'Ve a "Pagos" en el menú principal',
        'Selecciona "Pago de facturas"',
        'Busca "Grupo Constructor Meraki" en empresas afiliadas',
        'Ingresa tu código de referencia de pago',
        'Selecciona la cuenta de origen',
        'Verifica el valor a pagar',
        'Confirma con tu clave de seguridad',
        'Descarga el comprobante de pago'
      ]
    },
    {
      id: 'davivienda-app',
      banco: 'Davivienda',
      tipo: 'Aplicación Móvil',
      icon: Smartphone,
      pasos: [
        'Abre la app Davivienda Móvil',
        'Inicia sesión con tus credenciales',
        'Toca en "Pagar"',
        'Selecciona "Pago de facturas"',
        'Busca "Grupo Constructor Meraki"',
        'Ingresa tu número de referencia',
        'Verifica el monto',
        'Confirma con tu clave',
        'Guarda el comprobante digital'
      ]
    },
    {
      id: 'davivienda-web',
      banco: 'Davivienda',
      tipo: 'Página Web',
      icon: Globe,
      pasos: [
        'Accede a www.davivienda.com',
        'Ingresa a "Banca Virtual"',
        'Haz clic en "Pagos"',
        'Selecciona "Empresas y servicios"',
        'Busca "Grupo Constructor Meraki" en el listado',
        'Ingresa tu código de pago',
        'Selecciona tu producto de origen',
        'Verifica los datos y el valor',
        'Autoriza la transacción',
        'Imprime o descarga tu comprobante'
      ]
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de búsqueda
    alert(`Buscando código: ${searchCode}`);
  };

  const toggleInstructivo = (id: string) => {
    setExpandedInstructivo(expandedInstructivo === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-b from-black via-[#0d060a] to-black border-b border-[#F4BA3E]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#947018] via-[#B7871C] to-[#F4BA3E] flex items-center justify-center shadow-lg shadow-[#F4BA3E]/30">
                  <CreditCard className="w-8 h-8 text-black" />
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] bg-clip-text text-transparent">
                Realiza tu Pago
              </h1>
              <p className="text-lg text-gray-300">
                Paga las cuotas de tu inversión de forma segura y rápida
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Información Importante */}
      <section className="py-12 bg-gradient-to-b from-black to-[#0d060a]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#947018]/10 to-[#F4BA3E]/5 p-8 rounded-lg border border-[#F4BA3E]/30">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-[#F4BA3E] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl text-[#F4BA3E] mb-4">Información Importante</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-[#F4BA3E] mt-1">•</span>
                      <span>Guarda siempre tu comprobante de pago como respaldo de la transacción.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F4BA3E] mt-1">•</span>
                      <span>Los pagos pueden tardar hasta 24 horas hábiles en verse reflejados en tu cuenta.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F4BA3E] mt-1">•</span>
                      <span>Si tienes problemas con tu pago, contáctanos al WhatsApp +57 300 123 4567.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F4BA3E] mt-1">•</span>
                      <span>Verifica que tu código de referencia sea correcto antes de confirmar el pago.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F4BA3E] mt-1">•</span>
                      <span>Envía tu comprobante al correo: pagos@meraki.com para agilizar la confirmación.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Búsqueda */}
      <section className="py-12 bg-gradient-to-b from-[#0d060a] to-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-[#0d060a] to-black p-8 rounded-lg border border-[#F4BA3E]/30">
              <h2 className="text-2xl text-[#F4BA3E] mb-4 text-center">Busca tu Código de Pago</h2>
              <p className="text-gray-400 text-center mb-6">
                Ingresa tu código de referencia para consultar el estado de tus pagos
              </p>
              <form onSubmit={handleSearch} className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchCode}
                    onChange={(e) => setSearchCode(e.target.value)}
                    placeholder="Ej: MER-2024-001234"
                    className="w-full pl-12 pr-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#F4BA3E] transition-colors"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] hover:from-[#FFF18F] hover:via-[#F4BA3E] hover:to-[#FFF18F] text-black px-8"
                >
                  Buscar
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="py-16 bg-gradient-to-b from-[#0d060a] to-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-white">
              <span className="bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] bg-clip-text text-transparent">
                Selecciona tu Proyecto
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Haz clic en el logo de tu proyecto para acceder a la pasarela de pagos
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {proyectos.map((proyecto, index) => (
                <motion.a
                  key={proyecto.id}
                  href={proyecto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative aspect-square bg-white rounded-full border-4 border-gray-200 hover:border-[#F4BA3E] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#F4BA3E]/20 overflow-hidden flex items-center justify-center"
                >
                  <img
                    src={proyecto.logo}
                    alt={proyecto.nombre}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="text-center">
                      <p className="text-white text-sm font-semibold">{proyecto.nombre}</p>
                      <ExternalLink className="w-4 h-4 text-[#F4BA3E] mx-auto mt-1" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instructivos de Pago */}
      <section className="py-16 bg-gradient-to-b from-black to-[#0d060a]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-white">
              <span className="bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] bg-clip-text text-transparent">
                Instructivos de Pago
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Sigue estos pasos para realizar tu pago según tu entidad bancaria
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {instructivos.map((instructivo, index) => {
              const Icon = instructivo.icon;
              const isExpanded = expandedInstructivo === instructivo.id;

              return (
                <motion.div
                  key={instructivo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#0d060a] to-black border border-[#F4BA3E]/20 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleInstructivo(instructivo.id)}
                    className="w-full flex items-center justify-between p-6 hover:bg-[#0d060a]/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#947018] to-[#F4BA3E] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg text-white font-semibold">{instructivo.banco}</h3>
                        <p className="text-sm text-gray-400">{instructivo.tipo}</p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-[#F4BA3E]" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-[#F4BA3E]" />
                    )}
                  </button>

                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-[#F4BA3E]/20 px-6 pb-6"
                    >
                      <div className="pt-6 space-y-4">
                        {instructivo.pasos.map((paso, pasoIndex) => (
                          <div key={pasoIndex} className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#947018] to-[#F4BA3E] flex items-center justify-center text-black font-bold text-sm">
                              {pasoIndex + 1}
                            </div>
                            <p className="text-gray-300 pt-1">{paso}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
