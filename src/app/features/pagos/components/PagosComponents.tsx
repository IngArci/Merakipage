import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  CreditCard, 
  Smartphone, 
  Globe, 
  FileText, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  Download,
  Loader2
} from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useFirestoreCollection } from '@/hooks/useFirestoreCollection';
import type { PaymentInstructionData } from '../../admin/types/admin.types';
import './PagosStyles.css';

const proyectos = [
  { id: 'canyon-arizona', nombre: 'Cañón de Arizona', url: 'https://portalpagos.davivienda.com/#/comercio/6713/COMPANIA%20CONSTRUCTORA%20MERAKI%20SM%20S.A.S', logo: '/images/pagos/circulo-canon.png' },
  { id: 'laguna-mar', nombre: 'Laguna Mar', url: 'https://portalpagos.davivienda.com/#/comercio/6638/GRUPO%20CONSTRUCTOR%20MERAKI%20SAS%20ZOMAC', logo: '/images/pagos/circulo-laguna.png' },
  { id: 'rio-claro', nombre: 'Río Claro', url: 'https://portalpagos.davivienda.com/#/comercio/6638/GRUPO%20CONSTRUCTOR%20MERAKI%20SAS%20ZOMAC', logo: '/images/pagos/circulo-rio.png' },
  { id: 'protector', nombre: 'Sobre Montaña', url: 'https://portalpagos.davivienda.com/#/comercio/6638/GRUPO%20CONSTRUCTOR%20MERAKI%20SAS%20ZOMAC', logo: '/images/pagos/circulo-sobre.png' },
  { id: 'grande', nombre: 'Llano Grande', url: 'https://portalpagos.davivienda.com/#/comercio/6638/GRUPO%20CONSTRUCTOR%20MERAKI%20SAS%20ZOMAC', logo: '/images/pagos/circulo-llano.png' },
  { id: 'arizona-1', nombre: 'Arizona I', url: 'https://portalpagos.davivienda.com/#/comercio/6638/GRUPO%20CONSTRUCTOR%20MERAKI%20SAS%20ZOMAC', logo: '/images/pagos/circulo-arizona1.png' },
  { id: 'arizona-2', nombre: 'Arizona II', url: 'https://portalpagos.davivienda.com/#/comercio/6638/GRUPO%20CONSTRUCTOR%20MERAKI%20SAS%20ZOMAC', logo: '/images/pagos/circulo-arizona2.png' },
  { id: 'grand-arizona', nombre: 'Grand Arizona', url: 'https://portalpagos.davivienda.com/#/comercio/6638/GRUPO%20CONSTRUCTOR%20MERAKI%20SAS%20ZOMAC', logo: '/images/pagos/circulo-grand.png' },
];

// Static instructivos array removed in favor of Firestore data

export function PagosHero() {
  return (
    <section className="relative py-12 bg-gradient-to-b from-black via-[#0d060a] to-black border-b border-[#F4BA3E]/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#947018] via-[#B7871C] to-[#F4BA3E] flex items-center justify-center shadow-lg shadow-[#F4BA3E]/30">
                <CreditCard className="w-8 h-8 text-black" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl mb-4 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] bg-clip-text text-transparent">Realiza tu Pago</h1>
            <p className="text-lg text-gray-300">Paga las cuotas de tu inversión de forma segura y rápida</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function PagosInfo() {
  return (
    <section className="py-12 bg-gradient-to-b from-black to-[#0d060a]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#947018]/10 to-[#F4BA3E]/5 p-8 rounded-lg border border-[#F4BA3E]/30">
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-[#F4BA3E] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl text-[#F4BA3E] mb-4">Información Importante</h3>
                <ul className="space-y-3 text-gray-300">
                  {['Guarda siempre tu comprobante de pago como respaldo de la transacción.', 'Los pagos pueden tardar hasta 24 horas hábiles en verse reflejados en tu cuenta.', 'Si tienes problemas con tu pago, contáctanos al WhatsApp +57 314 786 8069.', 'Verifica que tu código de referencia sea correcto antes de confirmar el pago.', 'Envía tu comprobante al correo: servicioalcliente.grupomeraki@gmail.com para agilizar la confirmación.'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#F4BA3E] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PagosSearch() {
  const [proyecto, setProyecto] = useState('');
  const [sector, setSector] = useState('');
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');
  const [status, setStatus] = useState('Aquí tu código de pago');
  const [data, setData] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'proyectos_resumen'));
        const allStats: Record<string, any> = {};
        querySnapshot.forEach((doc) => {
          allStats[doc.id] = doc.data();
        });
        setData(allStats);
      } catch (err) {
        console.error('Error loading inventory:', err);
        setStatus('No se pudo cargar la base de datos.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const limpiar = (str: string) => (str || '').trim().toUpperCase();
  const limpiarNumero = (num: string | number) => String(num).replace(/^0+/, '').trim();
  const humanizar = (id: string) => id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Extraer lista de proyectos y sectores dinámicamente
  const listaProyectos = Object.keys(data).sort();

  const sectoresDisponibles = (() => {
    if (!proyecto || !data[proyecto]) return [];
    const projectDoc = data[proyecto];
    const sectorsSet = new Set<string>();

    // Obtener candidatos de la raíz y de 'lots'
    let candidatos = Object.values(projectDoc);
    if (projectDoc.lots && typeof projectDoc.lots === 'object') {
      candidatos = [...candidatos, ...Object.values(projectDoc.lots)];
    }

    candidatos.forEach((lot: any) => {
      if (lot && typeof lot === 'object' && !lot.lastUpdated) {
        const s = lot.sec || lot.sector || lot.sectorName || lot.s_name || lot.sn || 'GENERAL';
        if (s !== undefined) sectorsSet.add(limpiar(s));
      }
    });

    return Array.from(sectorsSet).sort();
  })();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setResultado('');
    setStatus('');

    if (!proyecto || !sector || !numero) {
      setStatus('Por favor completa todos los campos.');
      return;
    }

    const projectDoc = data[proyecto] || {};

    let candidatos = Object.values(projectDoc);
    if (projectDoc.lots && typeof projectDoc.lots === 'object') {
      candidatos = [...candidatos, ...Object.values(projectDoc.lots)];
    }

    const match = candidatos.find((lot: any) => {
      // Ignorar campos que no son objetos de lote (ej: fecha de actualización o el propio mapa 'lots')
      if (!lot || typeof lot !== 'object' || lot.lastUpdated || lot.sec === undefined && lot.sector === undefined && lot.s_name === undefined) {
        return false;
      }

      const lotSector = limpiar(lot.sec || lot.sector || lot.sectorName || lot.s_name || lot.sn || 'GENERAL');
      const lotNum = limpiarNumero(lot.n || lot.lote || lot.numeroTerreno || '');

      const searchSector = limpiar(sector);
      const searchNum = limpiarNumero(numero);

      const isMatch = (lotSector === searchSector || (searchSector === 'GENERAL' && (lotSector === '' || lotSector === 'GENERAL'))) &&
        lotNum === searchNum;

      return isMatch;
    });

    if (match) {
      const anyMatch = match as any;
      console.log('DEBUG: Match encontrado:', anyMatch);
      if (anyMatch.codigo || anyMatch.c || anyMatch.code) {
        setResultado(anyMatch.codigo || anyMatch.c || anyMatch.code);
        setStatus('');
      } else {
        setStatus('El terreno existe pero no tiene un código de pago asignado.');
      }
    } else {
      console.log('DEBUG: No match para:', { sector, numero });
      setStatus('Terreno no encontrado para ese proyecto y sector.');
    }
  };

  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="busca-terreno-container mx-auto">
          <h2>
            Buscar Código de Terreno<br />
            <span style={{ fontSize: '0.9em', color: '#faf6ed', fontWeight: 400 }}>
              Grupo Constructor Meraki
            </span>
          </h2>

          <form onSubmit={handleSearch} id="terreno-form">
            <label htmlFor="proyecto">Club de Campo</label>
            <select
              id="proyecto"
              required
              value={proyecto}
              onChange={(e) => {
                setProyecto(e.target.value);
                setSector('');
              }}
            >
              <option value="">Seleccione su club de campo</option>
              {listaProyectos.map(p => (
                <option key={p} value={p}>{humanizar(p)}</option>
              ))}
            </select>

            <label htmlFor="sector">Sector</label>
            <select
              id="sector"
              required
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              disabled={!proyecto}
            >
              <option value="">Seleccione un sector</option>
              {sectoresDisponibles.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <label htmlFor="numero">N° del terreno</label>
            <input
              id="numero"
              type="text"
              required
              autoComplete="off"
              placeholder="Ejemplo: 11"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />

            <button type="submit" disabled={loading}>
              {loading ? 'Cargando datos...' : 'Buscar código'}
            </button>
          </form>

          {status && <div id="status">{status}</div>}
          {resultado && (
            <div id="resultado">
              <span style={{ fontSize: '1.2em' }}>
                <strong>0{resultado}</strong>
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function PagosProyectos() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#0d060a] to-black">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] bg-clip-text text-transparent">Selecciona tu Proyecto</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Haz clic en el logo de tu proyecto para acceder a la pasarela de pagos</p>
        </motion.div>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
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
              className="
              group relative aspect-square 
              flex items-center justify-center 
              rounded-full overflow-hidden
              hover:bg-white/5 
              transition-all duration-300
              "
            >

              {/* Contenedor uniforme */}
              <div className="w-[100%] h-[100%] flex items-center justify-center">
                <img
                  src={proyecto.logo}
                  alt={proyecto.nombre}
                  className={`object-contain transition-transform duration-300 group-hover:scale-110
                      ${["Sobre Montaña", "Río Claro", "Llano Grande"].includes(proyecto.nombre)
                      ? "max-w-[90%] max-h-[90%]"
                      : "max-w-full max-h-full"
                    }
  `}
                />
              </div>

              {/* Overlay con nombre + icono */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3 bg-gradient-to-t from-black/70 to-transparent rounded-xl">

                <div className="text-center">
                  <p className="text-white text-xs font-semibold">
                    {proyecto.nombre}
                  </p>

                  <ExternalLink className="w-4 h-4 text-[#F4BA3E] mx-auto mt-1" />
                </div>

              </div>

            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PagosInstructivos() {
  const { data: docs, loading } = useFirestoreCollection<PaymentInstructionData>('payment_instructions');

  if (loading) {
    return (
      <div className="py-20 flex flex-col items-center justify-center text-[#F4BA3E]">
        <Loader2 className="w-12 h-12 animate-spin mb-4" />
        <p className="text-gray-400">Cargando instructivos...</p>
      </div>
    );
  }

  if (docs.length === 0) return null;

  // Group instructions by Bank and then by Category
  const groupedDocs: Record<string, Record<string, PaymentInstructionData[]>> = {};

  docs.forEach(doc => {
    if (!groupedDocs[doc.bank]) groupedDocs[doc.bank] = {};
    if (!groupedDocs[doc.bank][doc.category]) groupedDocs[doc.bank][doc.category] = [];
    groupedDocs[doc.bank][doc.category].push(doc);
  });

  const banksOrder = ['Bancolombia', 'Davivenda'];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#0d060a]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] bg-clip-text text-transparent uppercase tracking-tight">
            Instructivos para pago
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            En esta sección podrá encontrar los instructivos de las diferentes plataformas para poder realizar el pago de su obligación.
          </p>
        </motion.div>

        <div className="space-y-24">
          {banksOrder.filter(bank => groupedDocs[bank]).map((bank) => (
            <div key={bank}>
              {/* Bank Header */}
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-light text-[#F4BA3E] uppercase tracking-[0.2em]">
                  {bank}
                </h3>
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#F4BA3E]/50 to-transparent mx-auto mt-4" />
              </div>

              {/* Categories within Bank */}
              <div className="space-y-16">
                {Object.entries(groupedDocs[bank]).map(([category, items]) => (
                  <div key={category}>
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-10">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                      <h4 className="text-xl md:text-2xl font-medium text-white/80 uppercase tracking-widest px-6">
                        {category}
                      </h4>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                    </div>

                    {/* Instructions Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                      {items.map((doc, i) => (
                        <InstructionCard key={doc.id || i} doc={doc} i={i} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstructionCard({ doc, i }: { doc: PaymentInstructionData; i: number }) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (url: string, filename: string) => {
    try {
      setIsDownloading(true);
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename.endsWith('.pdf') ? filename : `${filename}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error downloading file:', error);
      window.open(url, '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleView = () => {
    window.open(doc.fileUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05 }}
      className="group relative cursor-pointer"
      onClick={handleView}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-[#B68110] to-[#F4BA3E] rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition duration-500"></div>
      <div className="relative bg-[#0d060a] border border-white/5 rounded-3xl p-8 hover:border-[#F4BA3E]/30 transition-all duration-500 flex flex-col h-full">
        <div className="flex items-start justify-between mb-8">
          <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-[#F4BA3E]/10 transition-colors">
            <FileText className="w-8 h-8 text-[#F4BA3E]" />
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Guía PDF</span>
            <span className="px-3 py-1 bg-red-500/10 text-red-500 text-[10px] font-bold rounded-lg border border-red-500/20 uppercase tracking-tighter">Instructivo</span>
          </div>
        </div>

        <h3 className="text-xl text-white font-medium mb-8 group-hover:text-[#F4BA3E] transition-colors leading-snug flex-grow">
          {doc.title}
        </h3>
        
        <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Contenido</span>
            <span className="text-xs text-gray-400">Paso a paso</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDownload(doc.fileUrl, doc.title);
            }}
            disabled={isDownloading}
            className="flex items-center justify-center w-12 h-12 bg-white/5 hover:bg-[#F4BA3E] rounded-2xl text-[#F4BA3E] hover:text-black transition-all duration-300 transform group-hover:scale-110 shadow-lg disabled:opacity-50"
          >
            {isDownloading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Download className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
