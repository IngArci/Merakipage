import React from 'react';

interface SectorControlsProps {
  projectData: any;
  activeSector: any;
  onSelectSector: (sector: any) => void;
}

export function SectorControls({ projectData, activeSector, onSelectSector }: SectorControlsProps) {
  if (!projectData?.sectors || projectData.sectors.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3 mb-6 bg-zinc-900/40 p-4 rounded-xl border border-zinc-800">
      {projectData?.planImage && (
        <button
          onClick={() => onSelectSector(null)}
          className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
            !activeSector 
              ? 'bg-[#F4BA3E] text-black shadow-[0_0_15px_rgba(244,186,62,0.3)]' 
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
          }`}
        >
          PROYECTO GENERAL
        </button>
      )}
      
      {projectData.sectors.map((sector: any) => (
        <button
          key={sector.id}
          onClick={() => onSelectSector(sector)}
          className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
            activeSector?.id === sector.id 
              ? 'bg-[#F4BA3E] text-black shadow-[0_0_15px_rgba(244,186,62,0.3)]' 
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
          }`}
          style={activeSector?.id !== sector.id && sector.color ? { borderBottom: `3px solid ${sector.color}` } : {}}
        >
          {sector.name.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
