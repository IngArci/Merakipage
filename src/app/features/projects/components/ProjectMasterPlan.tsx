import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Download, ZoomIn, ZoomOut, Maximize } from 'lucide-react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { useOptimizedInventory } from '../hooks/useOptimizedInventory';
import { joinLots } from '../../../utils/joinLots';
import { exportSvgToPdf } from '../../../utils/exportSvgToPdf';
import { AvailabilityHint } from './AvailabilityHint';
import { LotModal } from './LotModal';

interface ProjectMasterPlanProps {
  masterPlan: string;
  totalLots: number;
  availableLots: number;
  projectSlug: string;
}

export function ProjectMasterPlan({ masterPlan, totalLots, availableLots, projectSlug }: ProjectMasterPlanProps) {
  const [projectData, setProjectData] = useState<any>(null);
  const [coords, setCoords] = useState<any[]>([]);
  const [activeSector, setActiveSector] = useState<any>(null);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { currentLots, loadingInventory, fetchLotDetails } = useOptimizedInventory(isInteractive ? projectSlug : null);
  const svgRef = useRef<SVGSVGElement>(null);

  const [selectedLot, setSelectedLot] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => {
        if (!alive) return;
        const list = Array.isArray(data) ? data : data?.projects || [];
        const found = list.find((p: any) => p.id === projectSlug);
        if (found) {
          setProjectData(found);
          setIsInteractive(true);
        } else {
          setIsInteractive(false);
        }
        setIsLoading(false);
      })
      .catch(e => {
        console.error(e);
        setIsLoading(false);
      });
    return () => { alive = false };
  }, [projectSlug]);

  useEffect(() => {
    if (!projectData) return;
    let alive = true;

    const target = activeSector || projectData;
    const url = target.coordsFile;

    if (url) {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          if (alive) setCoords(Array.isArray(data) ? data : []);
        })
        .catch(err => {
          console.error("Coordinate fetch error:", err);
          if (alive) setCoords([]);
        });
    }

    return () => { alive = false };
  }, [projectData, activeSector]);

  const salesProgress = Math.round(((totalLots - availableLots) / totalLots) * 100);

  const mappedLots = (() => {
    const joined = joinLots(coords, currentLots);
    return joined.filter(lot => lot.inSheet);
  })();

  const handleLotClick = async (lot: any) => {
    setSelectedLot(lot);
    setIsModalOpen(true);
    if (!lot.areaM2 || !lot.observaciones) {
      await fetchLotDetails(lot.id);
    }
  };

  const getLotColor = (status: string) => {
    const s = String(status || "").toUpperCase().trim();
    if (s === "DISPONIBLE") return "rgba(255, 255, 255, 0)"; // Transparent or Green 
    if (s === "VENDIDO" || s === "GERENCIA") return "#eab308";
    if (s === "SEPARADO" || s === "NEGOCIACION") return "#3b82f6";
    return "#22c55e"; // Default available
  };

  const iconSize = 28;

  if (isLoading) {
    return <section id="plano" className="py-16 bg-black flex justify-center"><div className="animate-spin w-12 h-12 border-4 border-[#F4BA3E] border-t-transparent rounded-full" /></section>;
  }

  // --- STATIC FALLBACK ---
  if (!isInteractive) {
    return (
      <section id="plano" className="py-16 bg-gradient-to-b from-black via-[#1a1a1a] to-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-6xl mx-auto">
            <h2 className="text-4xl mb-6 text-white">Plano Maestro</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] mb-12" />
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#F4BA3E]/30">
              <img src={masterPlan} alt="Plano maestro del proyecto" className="w-full h-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gradient-to-b from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F4BA3E]/20 text-center">
                <p className="text-4xl text-[#F4BA3E] mb-2 font-semibold">{totalLots}</p><p className="text-gray-300">Total de Lotes</p>
              </div>
              <div className="bg-gradient-to-b from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F4BA3E]/20 text-center">
                <p className="text-4xl text-[#F4BA3E] mb-2 font-semibold">{availableLots}</p><p className="text-gray-300">Lotes Disponibles</p>
              </div>
              <div className="bg-gradient-to-b from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F4BA3E]/20 text-center">
                <p className="text-4xl text-[#F4BA3E] mb-2 font-semibold">{salesProgress}%</p><p className="text-gray-300">Avance de Ventas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // --- INTERACTIVE MAP ---
  const displayImage = activeSector?.planImage || projectData?.planImage;
  const viewBoxW = activeSector?.planSize?.w || projectData?.planSize?.w || 2000;
  const viewBoxH = activeSector?.planSize?.h || projectData?.planSize?.h || 1500;

  return (
    <section id="plano" className="py-16 bg-gradient-to-b from-black via-[rgba(15,10,5,1)] to-black relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <h2 className="text-4xl mb-6 text-white font-light">Plano <span className="font-bold text-[#F4BA3E]">Interactivo</span></h2>
              <div className="h-1 w-32 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018]" />
            </div>

            <button
              onClick={() => exportSvgToPdf(svgRef, currentLots, projectData.name)}
              className="mt-6 md:mt-0 bg-[#F4BA3E]/10 hover:bg-[#F4BA3E] text-[#F4BA3E] hover:text-black transition-all px-6 py-3 border border-[#F4BA3E]/40 rounded-xl flex items-center gap-2 group whitespace-nowrap font-medium"
            >
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Descargar Disponibilidad
            </button>
          </div>

          {projectData?.sectors && projectData.sectors.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-6 bg-zinc-900/40 p-4 rounded-xl border border-zinc-800">
              <button
                onClick={() => setActiveSector(null)}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${!activeSector ? 'bg-[#F4BA3E] text-black shadow-[0_0_15px_rgba(244,186,62,0.3)]' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'}`}
              >
                PROYECTO GENERAL
              </button>
              {projectData.sectors.map((sector: any) => (
                <button
                  key={sector.id}
                  onClick={() => setActiveSector(sector)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${activeSector?.id === sector.id ? 'bg-[#F4BA3E] text-black shadow-[0_0_15px_rgba(244,186,62,0.3)]' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'}`}
                  style={activeSector?.id !== sector.id && sector.color ? { borderBottom: `3px solid ${sector.color}` } : {}}
                >
                  {sector.name.toUpperCase()}
                </button>
              ))}
              <strong className="text-zinc-400 text-sm">👆 Haz clic sobre un terreno para ver más información</strong>
            </div>
          )}

          <div className="w-full relative bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="h-[65vh] md:h-[80vh] w-full cursor-grab active:cursor-grabbing relative bg-[#111]">
              {loadingInventory && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#F4BA3E]"></div>
                </div>
              )}

              <div className="w-full h-full relative flex items-center justify-center p-4">
                <svg
                  ref={svgRef}
                  viewBox={`0 0 ${viewBoxW} ${viewBoxH}`}
                  preserveAspectRatio="xMidYMid meet"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: 'block',
                    maxHeight: '75vh'
                  }}
                >
                  {/* Embebed map image inside SVG for flawless PDF export */}
                  {displayImage && (
                    <image
                      href={displayImage}
                      x="0"
                      y="0"
                      width={viewBoxW}
                      height={viewBoxH}
                      preserveAspectRatio="none"
                    />
                  )}

                  {mappedLots.map((lot, i) => {
                    const status = String(lot.status || "").toUpperCase().trim();
                    const isSold = status === "VENDIDO" || status === "GERENCIA";
                    const isNego = status === "NEGOCIACION" || status === "NEGOCIACIÓN" || status === "SEPARADO";

                    const cx = lot.cx || lot.x || (i * 50 + 50);
                    const cy = lot.cy || lot.y || 100;
                    const r = lot.r || 12;

                    return (
                      <g
                        key={lot.id || i}
                        onClick={() => handleLotClick(lot)}
                        className="cursor-pointer transition-all duration-300 hover:opacity-90"
                      >
                        {lot.d && !isSold && !isNego ? (
                          <path
                            d={lot.d}
                            fill="#22c55e"
                            stroke="#fff"
                            strokeWidth="1.5"
                            fillOpacity={0.8}
                          />
                        ) : null}

                        {/* EMOJIS FOR SOLD/NEGOTIATION ON THE MAP */}
                        {isSold && (
                          <image
                            href="/sold-happy.png"
                            x={cx - iconSize / 2}
                            y={cy - iconSize / 2}
                            width={iconSize}
                            height={iconSize}
                          />
                        )}
                        {isNego && (
                          <image
                            href="/negotiation.png"
                            x={cx - iconSize / 2}
                            y={cy - iconSize / 2}
                            width={iconSize}
                            height={iconSize}
                          />
                        )}

                        {/* DOT FOR AVAILABLE */}
                        {!isSold && !isNego && !lot.d && (
                          <circle
                            cx={cx} cy={cy} r={r}
                            fill="#22c55e" stroke="#ffffff" strokeWidth="2"
                            fillOpacity={0.8}
                          />
                        )}

                        {/* TEXT TAG */}
                        {(!isSold && !isNego) && (
                          <text
                            x={lot.textX || cx}
                            y={lot.textY || cy}
                            textAnchor="middle" dominantBaseline="central"
                            fill="#ffffff" fontSize={lot.fontSize || "12"} fontWeight="bold"
                            pointerEvents="none"
                            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9)' }}
                          >
                            {lot.numeroTerreno}
                          </text>
                        )}
                      </g>
                    )
                  })}
                </svg>
              </div>
            </div>

            <div className="bg-black/90 border-t border-zinc-800 p-4">
              <AvailabilityHint />
            </div>
          </div>
        </motion.div>

        <LotModal
          lot={selectedLot}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
}
