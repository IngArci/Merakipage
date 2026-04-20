import { RefObject } from 'react';


const imageUrlToBase64 = async (url: string): Promise<string> => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  } catch (e) {
    console.error('Error inlining image:', url, e);
    return url; // Fallback to original URL
  }
};

export const exportSvgToPdf = async (
  svgRef: RefObject<SVGSVGElement | null>,
  summary: any,
  selectedProject: string
) => {
  if (!svgRef.current) return;

  try {
    const svgElement = svgRef.current;

    // Get real dimensions from viewBox
    const viewBoxAttr = svgElement.getAttribute('viewBox');
    let baseWidth = 1920;
    let baseHeight = 1080;
    if (viewBoxAttr) {
      const parts = viewBoxAttr.split(/[ ,]+/).map(Number);
      if (parts.length === 4) {
        baseWidth = parts[2];
        baseHeight = parts[3];
      }
    }

    const clonedSvg = svgElement.cloneNode(true) as SVGSVGElement;
    clonedSvg.setAttribute('width', baseWidth.toString());
    clonedSvg.setAttribute('height', baseHeight.toString());
    clonedSvg.style.width = `${baseWidth}px`;
    clonedSvg.style.height = `${baseHeight}px`;
    clonedSvg.style.transform = 'none';

    const images = Array.from(clonedSvg.querySelectorAll('image'));
    await Promise.all(images.map(async (img) => {
      const href = img.getAttribute('href') || img.getAttribute('xlink:href');
      if (href && !href.startsWith('data:')) {
        const b64 = await imageUrlToBase64(href);
        img.setAttribute('href', b64);
        img.removeAttribute('xlink:href');
      }
    }));

    // Dynamically load heavy dependencies only when needed
    const { jsPDF } = await import('jspdf');
    const { Canvg } = await import('canvg');

    // Create high-resolution canvas
    const scale = 2; // High quality
    const canvas = document.createElement('canvas');
    canvas.width = baseWidth * scale;
    canvas.height = baseHeight * scale;
    const ctx = canvas.getContext('2d');

    if (!ctx) throw new Error('Could not get canvas context');

    // Serialize SVG with inlined images
    const svgString = new XMLSerializer().serializeToString(clonedSvg);
    
    // Render SVG to canvas using canvg
    const v = await Canvg.fromString(ctx, svgString);
    await v.render();

    // Create PDF with EXACT dimensions from viewBox
    // Convert pixels to points (pt) for maximum stability in jsPDF
    // 1px = 0.75pt (standard conversion)
    const widthPt = baseWidth * 0.75;
    const heightPt = baseHeight * 0.75;
    
    const pdf = new jsPDF(
      baseWidth > baseHeight ? 'l' : 'p',
      'pt',
      [widthPt, heightPt]
    );

    // Add the scaled canvas image to the PDF
    // We scale it to match the page size in points exactly
    const imgData = canvas.toDataURL('image/png', 1.0);
    pdf.addImage(imgData, 'PNG', 0, 0, widthPt, heightPt);

    pdf.save(`disponibilidad_${selectedProject}_${new Date().toISOString().split('T')[0]}.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Hubo un error al generar el PDF.');
  }
};