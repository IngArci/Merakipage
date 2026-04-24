import React, { useState, useRef, useMemo } from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import { useOptimizedInventory } from '../hooks/useOptimizedInventory';
import { useMasterPlan } from '../hooks/useMasterPlan';
import { joinLots, normalizeCode } from '@/utils/joinLots';
import { exportSvgToPdf } from '@/utils/exportSvgToPdf';
import { AvailabilityHint } from './AvailabilityHint';
import { LotModal } from './LotModal';
import { StaticMasterPlan } from './StaticMasterPlan';
import { SectorControls } from './SectorControls';
import { InteractiveSvgMap } from './InteractiveSvgMap';
import { MapInteractionHint } from './MapInteractionHint';

interface ProjectMasterPlanProps {
  masterPlan?: string;
  totalLots: number;
  availableLots: number;
  projectSlug: string;
}

export function ProjectMasterPlan({ masterPlan, totalLots, availableLots, projectSlug }: ProjectMasterPlanProps) {
  const {
    projectData,
    coords,
    activeSector,
    setActiveSector,
    isInteractive,
    isLoading,
    lotSectorMap
  } = useMasterPlan(projectSlug);

  const { currentLots, loadingInventory, fetchLotDetails } = useOptimizedInventory(isInteractive ? projectSlug : null);
  const svgRef = useRef<SVGSVGElement>(null);

  const [selectedLot, setSelectedLot] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Memoized lot mapping logic
  const mappedLots = useMemo(() => {
    const joined = joinLots(coords, currentLots);
    return joined.filter(lot => lot.inSheet);
  }, [coords, currentLots]);

  const salesProgress = Math.round(((totalLots - availableLots) / totalLots) * 100);

  const handleLotClick = async (lot: any) => {
    setHasInteracted(true);
    setSelectedLot(lot);
    setIsModalOpen(true);
    if (!lot.areaM2 || !lot.observaciones) {
      await fetchLotDetails(lot.id);
    }
  };

  if (isLoading) {
    return (
      <section id="plano" className="py-16 bg-black flex justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-[#F4BA3E] border-t-transparent rounded-full" />
      </section>
    );
  }

  if (!isInteractive) {
    return (
      <StaticMasterPlan 
        masterPlan={masterPlan}
        totalLots={totalLots}
        availableLots={availableLots}
        salesProgress={salesProgress}
      />
    );
  }

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

          <SectorControls 
            projectData={projectData}
            activeSector={activeSector}
            onSelectSector={setActiveSector}
          />

          <div className="w-full relative bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
            <div 
              onMouseDown={() => setHasInteracted(true)}
              onTouchStart={() => setHasInteracted(true)}
              className="h-[65vh] md:h-[80vh] w-full cursor-grab active:cursor-grabbing relative bg-[#111]"
            >
              {loadingInventory && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#F4BA3E]"></div>
                </div>
              )}

              <div className="w-full h-full relative flex items-center justify-center p-4">
                <InteractiveSvgMap 
                    svgRef={svgRef}
                    projectData={projectData}
                    activeSector={activeSector}
                    mappedLots={mappedLots}
                    onLotClick={handleLotClick}
                />
                
                {!hasInteracted && (
                  <MapInteractionHint onInteraction={() => setHasInteracted(true)} />
                )}
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
          projectName={projectData?.name}
          projectSlug={projectSlug}
          sectorName={activeSector?.name || (selectedLot ? lotSectorMap[normalizeCode(selectedLot.code)] : undefined)}
          projectData={projectData}
        />
      </div>
    </section>
  );
}
