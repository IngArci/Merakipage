import jsPDF from "jspdf";
import { Canvg } from "canvg";

export async function exportSvgToPdf(
  svgRef: any,
  lots: any[],
  projectName: string = "Plano"
) {
  if (!svgRef?.current) return;
  const svgElement = svgRef.current;
  const clone = svgElement.cloneNode(true);

  // We explicitly preserve image hrefs that Canvg can render
  const viewBox = clone.getAttribute("viewBox");
  let width = 1000;
  let height = 1000;

  if (viewBox) {
    const [, , w, h] = viewBox.split(/\s+/).map(Number);
    width = w;
    height = h;
  }

  const maxPixels = 28_000_000;
  let scale = 2.8;

  if (width * height > maxPixels) {
    scale = Math.sqrt(maxPixels / (width * height));
  }

  const canvas = document.createElement("canvas");
  canvas.width = Math.round(width * scale);
  canvas.height = Math.round(height * scale);

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Render a dark background BEFORE rendering the SVG so it matches Merakipage UI and doesn't end up transparent if there is no image
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.scale(scale, scale);

  // Note: For Canvg to correctly render the background image (like /llanogrande.jpg), 
  // they need to be loaded explicitly, but Canvg handles same-origin href properly.
  const svgText = new XMLSerializer().serializeToString(clone);

  try {
    const v = await Canvg.fromString(ctx, svgText, {
      ignoreMouse: true,
      ignoreAnimation: true,
      anonymousCrossOrigin: true,
    });

    await v.render();

    const imgData = canvas.toDataURL("image/jpeg", 0.97);

    const pdf = new jsPDF({
      orientation: width > height ? "landscape" : "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "JPEG", 0, 0, canvas.width, canvas.height);

    pdf.save(`disponibilidad_${projectName}_${new Date().toISOString().split('T')[0]}.pdf`);
  } catch (error) {
    console.error("Error generating SVG to PDF via Canvg:", error);
    alert('Hubo un error al generar la descarga.');
  }
}
