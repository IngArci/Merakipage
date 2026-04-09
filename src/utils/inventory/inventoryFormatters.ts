export function normalizeText(text: string | null | undefined): string {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function normalizeLot(documento: any) {
  const data = documento.data();

  return {
    id: documento.id,
    ...data,
    code: String(
      data.code || data.codigo || data.numeroTerreno || data.lote || "",
    ),
    numeroTerreno: String(data.numeroTerreno || data.lote || "0"),
    lote: String(data.lote || data.numeroTerreno || "0"),
    areaM2: Number(data.areaM2 || data.area || 0),
    sector: data.sector || "GENERAL",
    observaciones: data.observaciones || "",
    status: data.status
      ? String(data.status).trim().toUpperCase()
      : "DISPONIBLE",
  };
}

export function sortLotsByNumero(lots: any[]) {
  return [...lots].sort((a, b) =>
    String(a.numeroTerreno).localeCompare(String(b.numeroTerreno), undefined, {
      numeric: true,
    }),
  );
}

export function sortLogsByFecha(logs: any[]) {
  return [...logs].sort((a, b) => {
    const ta = a.fechaHora ? new Date(a.fechaHora).getTime() : 0;
    const tb = b.fechaHora ? new Date(b.fechaHora).getTime() : 0;
    return tb - ta;
  });
}

export function isSameLocalDate(isoDate: string | Date | null | undefined, selectedDate: string | null | undefined): boolean {
  if (!isoDate || !selectedDate) return false;

  const d = new Date(isoDate);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd}` === selectedDate;
}
