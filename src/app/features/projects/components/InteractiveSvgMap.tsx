import React from 'react';

interface InteractiveSvgMapProps {
  svgRef: React.RefObject<SVGSVGElement | null>;
  projectData: any;
  activeSector: any;
  mappedLots: any[];
  onLotClick: (lot: any) => void;
}

export function InteractiveSvgMap({ 
    svgRef, 
    projectData, 
    activeSector, 
    mappedLots, 
    onLotClick 
}: InteractiveSvgMapProps) {
    const displayImage = activeSector?.planImage || projectData?.planImage;
    const viewBoxW = activeSector?.planSize?.w || projectData?.planSize?.w || 2000;
    const viewBoxH = activeSector?.planSize?.h || projectData?.planSize?.h || 1500;
    const iconSize = 28;

    return (
        <svg
            ref={svgRef}
            viewBox={`0 0 ${viewBoxW} ${viewBoxH}`}
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-full block"
            style={{ maxHeight: '75vh' }}
        >
            {/* Embedded map image */}
            {displayImage && (
                <image
                  href={displayImage}
                  x="0"
                  y="0"
                  width={viewBoxW}
                  height={viewBoxH}
                  preserveAspectRatio="none"
                />
            )}

            {mappedLots.map((lot, i) => {
                const status = String(lot.status || "").toUpperCase().trim();
                const isSold = status === "VENDIDO" || status === "GERENCIA";
                const isNego = status === "NEGOCIACION" || status === "NEGOCIACIÓN" || status === "SEPARADO";

                const cx = lot.cx || lot.x || (i * 50 + 50);
                const cy = lot.cy || lot.y || 100;
                const r = lot.r || 12;

                return (
                    <g
                        key={lot.id || i}
                        onClick={() => onLotClick(lot)}
                        className="cursor-pointer transition-all duration-300 hover:opacity-90"
                    >
                        {lot.d && !isSold && !isNego ? (
                            <path
                                d={lot.d}
                                fill="#22c55e"
                                stroke="#fff"
                                strokeWidth="1.5"
                                fillOpacity={0.8}
                            />
                        ) : null}

                        {/* EMOJIS FOR SOLD/NEGOTIATION */}
                        {isSold && (
                            <image
                                href="/sold-happy.png"
                                x={cx - iconSize / 2}
                                y={cy - iconSize / 2}
                                width={iconSize}
                                height={iconSize}
                            />
                        )}
                        {isNego && (
                            <image
                                href="/negotiation.png"
                                x={cx - iconSize / 2}
                                y={cy - iconSize / 2}
                                width={iconSize}
                                height={iconSize}
                            />
                        )}

                        {/* DOT FOR AVAILABLE */}
                        {!isSold && !isNego && !lot.d && (
                            <circle
                                cx={cx} cy={cy} r={r}
                                fill="#22c55e" stroke="#ffffff" strokeWidth="2"
                                fillOpacity={0.8}
                            />
                        )}

                        {/* TEXT TAG */}
                        {(!isSold && !isNego) && (
                            <text
                                x={lot.textX || cx}
                                y={lot.textY || cy}
                                textAnchor="middle" dominantBaseline="central"
                                fill="#ffffff" fontSize={lot.fontSize || "12"} fontWeight="bold"
                                pointerEvents="none"
                                style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9)' }}
                            >
                                {lot.numeroTerreno}
                            </text>
                        )}
                    </g>
                );
            })}
        </svg>
    );
}
