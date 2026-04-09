import { normalizeText } from "./inventoryFormatters";

export function filterLots(
  currentLots: any[],
  filterSector?: string | null,
  searchTerm?: string | null,
  filterStatus?: string | null,
  minArea?: number | string | null,
  maxArea?: number | string | null
) {
  let result = currentLots;

  if (filterSector) {
    result = result.filter(
      (l) => String(l.sector || "GENERAL").toUpperCase() === filterSector.toUpperCase(),
    );
  }
  if (filterStatus) {
    result = result.filter((l) => l.status === filterStatus.toUpperCase());
  }

  // FILTRO POR ÁREA
  if (minArea) {
    result = result.filter((l) => Number(l.areaM2) >= Number(minArea));
  }

  if (maxArea) {
    result = result.filter((l) => Number(l.areaM2) <= Number(maxArea));
  }

  const normalizedSearch = normalizeText(searchTerm || "");
  if (!normalizedSearch) return result;

  const terms = normalizedSearch.split(" ").filter(Boolean);

  const filtered = result.filter((l) => {
    const searchableText = normalizeText(
      [
        l.numeroTerreno,
        l.lote,
        l.code,
        l.sector,
        l.observaciones,
        l.status,
      ].join(" "),
    );

    return terms.every((term) => searchableText.includes(term));
  });

  return filtered.sort((a, b) => {
    const aNumero = normalizeText(a.numeroTerreno);
    const bNumero = normalizeText(b.numeroTerreno);
    const aLote = normalizeText(a.lote);
    const bLote = normalizeText(b.lote);
    const aCode = normalizeText(a.code);
    const bCode = normalizeText(b.code);

    const aExactScore =
      aNumero === normalizedSearch ||
        aLote === normalizedSearch ||
        aCode === normalizedSearch
        ? 1
        : 0;

    const bExactScore =
      bNumero === normalizedSearch ||
        bLote === normalizedSearch ||
        bCode === normalizedSearch
        ? 1
        : 0;

    if (bExactScore !== aExactScore) {
      return bExactScore - aExactScore;
    }

    return String(a.numeroTerreno).localeCompare(
      String(b.numeroTerreno),
      undefined,
      { numeric: true },
    );
  });
}
