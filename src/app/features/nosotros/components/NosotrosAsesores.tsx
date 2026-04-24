import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Shield, MessageCircle, Search, AlertTriangle, User } from 'lucide-react';
import { Button } from '../../../components/ui/button';

interface Asesor {
  nombre: string;
  cargo?: string;
  foto?: string;
  whatsapp: string;
}

interface NosotrosAsesoresProps {
  asesores: Asesor[];
}

export function NosotrosAsesores({ asesores }: NosotrosAsesoresProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAsesores = asesores.filter(asesor =>
    asesor.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleWhatsapp = (asesor: Asesor) => {
    const message = encodeURIComponent(
      `Hola ${asesor.nombre.split(' ')[0]}, vengo de la página web y vi que eres asesor(a) de Grupo Constructor Meraki, quiero más información.`
    );
    window.open(`https://wa.me/${asesor.whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <section className="py-24 relative z-10" id="asesores">
      <div className="container mx-auto px-4 lg:px-8 text-center mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl mb-6 font-bold">
            Brokers <span className="text-[#F4BA3E]">Inmobiliarios</span>
          </h2>
          <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[12px] font-bold tracking-widest uppercase mb-10">
            <Shield className="w-3.5 h-3.5 mr-2" />
            Canal de Venta Verificado
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto relative mb-16"
        >
          <div className="relative group">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Search className={`w-5 h-5 transition-colors duration-300 ${searchTerm ? 'text-[#F4BA3E]' : 'text-gray-500'}`} />
            </div>
            <input
              type="text"
              placeholder="Buscar por nombre del asesor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-white/10 hover:border-[#F4BA3E]/30 focus:border-[#F4BA3E] focus:outline-none rounded-2xl py-4 pl-14 pr-6 text-white text-sm transition-all duration-300 shadow-2xl"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-5 flex items-center text-gray-500 hover:text-white transition-colors"
              >
                Limpiar
              </button>
            )}
          </div>
          <p className="text-[12px] text-[#F4BA3E] mt-3 uppercase tracking-widest font-semibold drop-shadow-sm">Verifica la identidad de tu asesor en nuestro registro oficial</p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <AnimatePresence mode="wait">
          {searchTerm === '' ? (
            <motion.div
              key="initial"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center py-10"
            >
              <div className="w-20 h-20 bg-[#F4BA3E]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#F4BA3E]/30 shadow-[0_8px_30px_rgba(244,186,62,0.12)]">
                <Shield className="w-10 h-10 text-[#F4BA3E]" />
              </div>
              <p className="text-[#F4BA3E] max-w-sm mx-auto text-sm font-medium drop-shadow-sm">
                Ingresa el nombre completo del asesor para verificar si forma parte de nuestro equipo oficial.
              </p>
            </motion.div>
          ) : filteredAsesores.length > 0 ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {filteredAsesores.map((asesor, index) => (
                <motion.div
                  key={asesor.nombre}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative bg-gradient-to-br from-[#0a0a0a] to-[#111111] rounded-[2.5rem] p-10 border border-white/5 hover:border-[#F4BA3E]/20 transition-all duration-500 overflow-hidden"
                >
                  {/* Decorative Shield Watermark */}
                  <div className="absolute top-[-10%] right-[-10%] opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-700">
                    <Shield className="w-56 h-56 text-white" />
                  </div>

                  <div className="flex flex-col h-full relative z-10">
                    <div className="flex items-start justify-between mb-10">
                      <div className="relative">
                        <div className="relative p-1 rounded-[1.5rem] bg-gradient-to-br from-[#947018] via-[#F4BA3E] to-[#947018] group-hover:shadow-[0_0_20px_rgba(244,186,62,0.3)] transition-all duration-500">
                          {asesor.foto ? (
                            <div className="w-24 h-24 rounded-[1.25rem] overflow-hidden bg-black">
                              <img
                                src={asesor.foto}
                                alt={asesor.nombre}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                            </div>
                          ) : (
                            <div className="w-24 h-24 bg-[#111111] rounded-[1.25rem] flex items-center justify-center">
                              <User className="w-10 h-10 text-gray-700" />
                            </div>
                          )}
                        </div>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#F4BA3E] rounded-xl flex items-center justify-center border-4 border-[#0a0a0a] shadow-xl"
                        >
                          <Award className="w-5 h-5 text-black" />
                        </motion.div>
                      </div>

                      <div className="flex flex-col items-end">
                        <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                          <Shield className="w-3.5 h-3.5 text-green-500" />
                          <span className="text-[12px] text-green-500 font-bold uppercase tracking-[0.15em]">Verificado</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-10 text-left">
                      <h3 className="text-2xl mb-2 text-white font-extrabold uppercase tracking-tight leading-tight">
                        {asesor.nombre}
                      </h3>
                      <div className="flex items-center space-x-2.5">
                        <div className="w-2 h-2 rounded-full bg-[#F4BA3E] animate-pulse" />
                        <p className="text-gray-400 font-bold tracking-[0.2em] uppercase text-[12px]">Agente Inmobiliario</p>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <Button
                        onClick={() => handleWhatsapp(asesor)}
                        className="w-full h-14 bg-white/5 hover:bg-[#F4BA3E] text-white hover:text-black border border-white/10 hover:border-[#F4BA3E] rounded-2xl transition-all duration-500 text-[13px] font-bold tracking-[0.2em] uppercase shadow-lg hover:shadow-[#F4BA3E]/20"
                      >
                        <MessageCircle className="w-4.5 h-4.5 mr-2.5" />
                        Contactar Asesor
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-md mx-auto py-16 px-8 rounded-[2.5rem] bg-red-500/5 border border-red-500/20 text-center"
            >
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl text-white font-bold mb-3 uppercase tracking-tight">Asesor No Encontrado</h3>
              <p className="text-gray-400 text-sm mb-6">El nombre "<span className="text-white font-medium">{searchTerm}</span>" no figura en nuestro registro de asesores certificados.</p>
              <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/10">
                <p className="text-red-400 text-[12px] font-bold uppercase tracking-widest">⚠️ Advertencia de Seguridad</p>
                <p className="text-gray-500 text-[12px] mt-1">Por tu seguridad, solo realiza transacciones con personal verificado en este portal oficial.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}


