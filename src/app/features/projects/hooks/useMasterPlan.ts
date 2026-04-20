import { useState, useEffect } from 'react';
import { normalizeCode } from '@/utils/joinLots';

export function useMasterPlan(projectSlug: string) {
  const [projectData, setProjectData] = useState<any>(null);
  const [coords, setCoords] = useState<any[]>([]);
  const [activeSector, setActiveSector] = useState<any>(null);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch project metadata from projects.json
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
          // Auto-select first sector if there's no general plan image
          if (!found.planImage && found.sectors && found.sectors.length > 0) {
            setActiveSector(found.sectors[0]);
          }
        } else {
          setIsInteractive(false);
        }
        setIsLoading(false);
      })
      .catch(e => {
        console.error("Error loading projects.json:", e);
        if (alive) setIsLoading(false);
      });
    return () => { alive = false };
  }, [projectSlug]);

  // Fetch coordinates for the active sector or main project
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
    } else {
        setCoords([]);
    }

    return () => { alive = false };
  }, [projectData, activeSector]);

  const [lotSectorMap, setLotSectorMap] = useState<Record<string, string>>({});

  // Background sector mapping for the general plan
  useEffect(() => {
    if (!projectData?.sectors || projectData.sectors.length === 0) return;
    
    let alive = true;
    const newMap: Record<string, string> = {};

    // Helper to normalize and map sector codes
    const mapSector = (sector: any) => {
      if (!sector.coordsFile) return Promise.resolve();
      return fetch(sector.coordsFile)
        .then(res => res.json())
        .then(data => {
          if (!alive) return;
          const coordsList = Array.isArray(data) ? data : [];
          coordsList.forEach((c: any) => {
            const rawCode = String(c.code || c.codigo || c.numeroTerreno || c.lote || "").trim();
            const normalizedKey = normalizeCode(rawCode);
            if (normalizedKey) newMap[normalizedKey] = sector.name;
          });
        })
        .catch(err => console.error(`Error mapping sector ${sector.name}:`, err));
    };

    Promise.all(projectData.sectors.map(mapSector)).then(() => {
      if (alive) setLotSectorMap(newMap);
    });

    return () => { alive = false };
  }, [projectData]);

  return {
    projectData,
    coords,
    activeSector,
    setActiveSector,
    isInteractive,
    isLoading,
    lotSectorMap
  };
}
