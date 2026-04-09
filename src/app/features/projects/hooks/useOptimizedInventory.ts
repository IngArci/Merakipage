import { useEffect, useMemo } from 'react';
import { useInventoryStore } from '../store/useInventoryStore';

export function useOptimizedInventory(selectedProject: string | null) {
  const { summary, fullLots, loading, subscribeToProject, fetchLotDetails, cleanup } = useInventoryStore();

  useEffect(() => {
    if (selectedProject) {
      subscribeToProject(selectedProject);
    }
    
    return () => {
        // cleanup might be ignored if switching fast, but useful on unmount
    };
  }, [selectedProject, subscribeToProject]);

  const currentLots = useMemo(() => {
    return Object.entries(summary).map(([id, data]) => ({
      id,
      status: data.s,
      areaM2: data.a,
      numeroTerreno: data.n,
      code: data.c || data.n || "",
      proyecto: selectedProject,
      ...((fullLots && fullLots[id]) || {})
    })).sort((a, b) => 
      String(a.numeroTerreno).localeCompare(String(b.numeroTerreno), undefined, { numeric: true, sensitivity: 'base' })
    );
  }, [summary, fullLots, selectedProject]);

  return {
    currentLots,
    loadingInventory: loading,
    fetchLotDetails,
    cleanup
  };
}
