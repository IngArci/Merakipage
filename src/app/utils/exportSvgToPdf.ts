import jsPDF from "jspdf";
import { Canvg } from "canvg";

export async function exportSvgToPdf(
  svgRef: any,
  lots: any[],
  projectName: string = "Plano"
) {
  if (!svgRef?.current) return;
  const svgElement = svgRef.current;
  
  // Clone to modify without affecting live UI
  const clone = svgElement.cloneNode(true) as SVGSVGElement;

  // Clean the clone of UI-specific constraints
  clone.removeAttribute("class");
  clone.removeAttribute("style");
  
  const viewBox = clone.getAttribute("viewBox");
  let nativeW = 2000;
  let nativeH = 1500;

  if (viewBox) {
    const [, , w, h] = viewBox.split(/\s+/).map(Number);
    nativeW = w;
    nativeH = h;
  }

  // Explicitly set width and height attributes to match viewBox 
  // This is CRITICAL for Canvg to know the intended native resolution
  clone.setAttribute("width", nativeW.toString());
  clone.setAttribute("height", nativeH.toString());

  // Use a high resolution scale factor (3x ensures sharp text even on large plans)
  const scale = 3.0;
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(nativeW * scale);
  canvas.height = Math.round(nativeH * scale);

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Render a dark background BEFORE rendering the SVG
  ctx.fillStyle = "#0d060a";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  // Serialize the prepared clone
  const svgText = new XMLSerializer().serializeToString(clone);

  try {
    const v = await Canvg.fromString(ctx, svgText, {
      ignoreMouse: true,
      ignoreAnimation: true,
      anonymousCrossOrigin: true,
    });

    // We use resize to ensure it fills the high-res canvas perfectly
    v.resize(canvas.width, canvas.height, 'xMidYMid meet');
    
    await v.render();

    const imgData = canvas.toDataURL("image/jpeg", 0.95);

    const pdf = new jsPDF({
      orientation: nativeW > nativeH ? "landscape" : "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "JPEG", 0, 0, canvas.width, canvas.height);

    const dateStr = new Date().toISOString().split('T')[0];
    pdf.save(`disponibilidad_${projectName}_${dateStr}.pdf`);
  } catch (error) {
    console.error("Error generating SVG to PDF via Canvg:", error);
    alert('Hubo un error al generar la descarga.');
  }
}
