// Dynamic imports for heavy libraries to keep bundle size small

// Since the `Merakipage` UI has a dark theme, we'll keep the styles similar but export the PDF cleanly.
export const exportSvgToPdf = async (svgRef, summary, selectedProject) => {
  if (!svgRef.current) return;

  try {
    const svgElement = svgRef.current;
    
    // Create a temporary container
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.top = '-9999px';
    container.style.background = '#000000'; // Dark background
    container.style.padding = '40px';
    container.style.width = '1920px'; // High resolution width
    document.body.appendChild(container);

    // Title
    const header = document.createElement('div');
    header.style.textAlign = 'center';
    header.style.marginBottom = '30px';
    header.innerHTML = `
      <h1 style="color: #F4BA3E; font-size: 32px; font-family: sans-serif; margin: 0;">Resumen del Proyecto: ${selectedProject.toUpperCase()}</h1>
      <p style="color: #aaaaaa; font-size: 16px; font-family: sans-serif; margin-top: 10px;">Fecha: ${new Date().toLocaleDateString()}</p>
    `;
    container.appendChild(header);

    // Legend
    const legend = document.createElement('div');
    legend.style.display = 'flex';
    legend.style.justifyContent = 'center';
    legend.style.gap = '30px';
    legend.style.marginBottom = '20px';
    legend.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px;">
        <div style="width: 16px; height: 16px; border-radius: 50%; background: #22c55e;"></div>
        <span style="color: #fff; font-family: sans-serif;">Disponible</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        <div style="width: 16px; height: 16px; border-radius: 50%; background: #3b82f6;"></div>
        <span style="color: #fff; font-family: sans-serif;">Separado / Negociación</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        <div style="width: 16px; height: 16px; border-radius: 50%; background: #eab308;"></div>
        <span style="color: #fff; font-family: sans-serif;">Vendido</span>
      </div>
    `;
    container.appendChild(legend);

    // Clone the SVG content to avoid altering actual UI
    const clonedSvg = svgElement.cloneNode(true);
    clonedSvg.style.width = '100%';
    clonedSvg.style.height = 'auto';
    clonedSvg.style.transform = 'none'; // reset zooms
    
    const svgContainer = document.createElement('div');
    svgContainer.style.background = 'transparent';
    svgContainer.appendChild(clonedSvg);
    container.appendChild(svgContainer);

    // Dynamically load heavy dependencies only when needed
    const html2canvas = (await import('html2canvas')).default;
    const { jsPDF } = await import('jspdf');

    // Convert to canvas
    const canvas = await html2canvas(container, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#000000'
    });

    document.body.removeChild(container);

    const pdf = new jsPDF('l', 'px', [canvas.width, canvas.height]);
    
    // Add the image to PDF
    const imgData = canvas.toDataURL('image/png', 1.0);
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    
    pdf.save(`disponibilidad_${selectedProject}_${new Date().toISOString().split('T')[0]}.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Hubo un error al generar el PDF.');
  }
};
