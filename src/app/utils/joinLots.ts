export function normalizeCode(value: any) {
  const raw = String(value ?? "").trim();
  if (!raw) return "";

  const clean = raw.replace(/[^a-zA-Z0-9]/g, "");

  if (/^\d+$/.test(clean)) {
    return String(parseInt(clean, 10));
  }

  return clean.toUpperCase();
}

export function normalizeStatus(value: any) {
  return String(value ?? "DISPONIBLE")
    .trim()
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function normalizeArea(value: any) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

const slug = (s: string) =>
  String(s ?? "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

export function joinLots(coords: any[] = [], inventoryRows: any[] = []) {
  const inventoryMap = new Map();

  for (const row of inventoryRows) {
    const rawCode = String(
      row.code || row.codigo || row.numeroTerreno || row.lote || "",
    ).trim();

    const normalizedKey = normalizeCode(rawCode);

    if (!normalizedKey) continue;

    inventoryMap.set(normalizedKey, {
      id: row.id || rawCode,
      code: rawCode,
      numeroTerreno: String(row.numeroTerreno || row.lote || rawCode),
      lote: String(row.lote || row.numeroTerreno || rawCode),
      areaM2: normalizeArea(row.areaM2 || row.area || 0),
      status: normalizeStatus(row.status || row.estado || "DISPONIBLE"),
      sector: row.sector || "",
      proyecto: row.proyecto || row.projecto || "",
      observaciones: row.observaciones || "",
      updatedAt: row.updatedAt || "",
      fechaSeparacion: row.fechaSeparacion || "",
      inSheet: true,
    });
  }

  return coords.map((c, index) => {
    const rawCode = String(
      c.code || c.codigo || c.numeroTerreno || c.lote || "",
    ).trim();

    const normalizedKey = normalizeCode(rawCode);
    const inv = inventoryMap.get(normalizedKey);

    const sectorName = inv?.sector || c.sector || "";
    const sectorKey = c.sectorKey || slug(sectorName);
    const sectorId = c.sectorId || slug(sectorName);

    return {
      ...c,
      cx: c.cx ?? c.x,
      cy: c.cy ?? c.y,
      id: inv?.id || c.id || `${rawCode}-${index}`,
      code: inv?.code || rawCode,
      numeroTerreno:
        inv?.numeroTerreno || String(c.numeroTerreno || c.lote || rawCode),
      lote: inv?.lote || String(c.lote || c.numeroTerreno || rawCode),
      areaM2: inv?.areaM2 ?? normalizeArea(c.areaM2 || c.area || null),
      status: inv?.status || normalizeStatus(c.status || "DISPONIBLE"),
      sector: sectorName,
      sectorKey,
      sectorId,
      proyecto: inv?.proyecto || "",
      observaciones: inv?.observaciones || "",
      updatedAt: inv?.updatedAt || "",
      fechaSeparacion: inv?.fechaSeparacion || "",
      inSheet: !!inv,
    };
  });
}
