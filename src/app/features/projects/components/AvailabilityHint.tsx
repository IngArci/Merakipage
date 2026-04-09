import React from 'react';

export const AvailabilityHint = () => {
  return (
    <div className="flex gap-6 mt-4 p-4 bg-zinc-900/50 rounded-xl justify-center mb-8 border border-zinc-800">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-green-500 shadow-md ring-2 ring-green-500/30"></div>
        <span className="text-sm font-medium text-zinc-300">Disponible</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-blue-500 shadow-md ring-2 ring-blue-500/30"></div>
        <span className="text-sm font-medium text-zinc-300">Separado / Negociación</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-yellow-500 shadow-md ring-2 ring-yellow-500/30"></div>
        <span className="text-sm font-medium text-zinc-300">Vendido</span>
      </div>
    </div>
  );
};
