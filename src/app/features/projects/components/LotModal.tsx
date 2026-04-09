import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LotModalProps {
  lot: any;
  isOpen: boolean;
  onClose: () => void;
}

export const LotModal = ({ lot, isOpen, onClose }: LotModalProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!isOpen || !lot) return null;

  const status = String(lot.estado || lot.status || "").toUpperCase().trim();
  const blockContact = status !== "DISPONIBLE";

  const COLORS = {
    gold: "#CFAB42",
    white: "#FFFFFF",
    black: "#000000",
    gray: "#BFBFBF",
    border: "rgba(207,171,66,0.35)",
  };

  const getStatusStyle = () => {
    if (status === "DISPONIBLE") return { color: "#1be91e", border: `1px solid ${COLORS.gold}` };
    if (status === "NEGOCIACION" || status === "NEGOCIACIÓN" || status === "SEPARADO") return { color: "#30d8e0", border: `1px solid ${COLORS.gold}` };
    if (status === "VENDIDO" || status === "GERENCIA") return { color: "#ff0000", border: `1px solid ${COLORS.gold}` };
    return { color: COLORS.gray, border: `1px solid ${COLORS.border}` };
  };

  const buttonStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px",
    background: "#CFAB42",
    color: "#000",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    letterSpacing: "2px",
    fontSize: "13px",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(4px)",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            gap: 30,
            zIndex: 9999,
            padding: 20,
            overflowY: "auto",
            alignItems: isMobile ? "flex-start" : "center",
            paddingTop: isMobile ? 40 : 20,
          }}
        >
          <motion.div 
            initial={{ opacity: 0, x: isMobile ? 0 : 40, y: isMobile ? 40 : 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: isMobile ? 0 : 40, y: isMobile ? 40 : 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0.85, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()} 
            style={{
              width: "min(500px, 100%)",
              background: COLORS.black,
              padding: 28,
              border: `1px solid ${COLORS.border}`,
              zIndex: 2,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div>
                <div style={{ color: COLORS.gray, fontSize: 11, letterSpacing: 3, marginBottom: 6 }}>
                  INFORMACIÓN DEL TERRENO
                </div>
                <div style={{ color: COLORS.gold, fontSize: 26, letterSpacing: 2 }}>
                  TERRENO {lot.numeroTerreno || lot.lote} - {lot.codigo ?? lot.code ?? "—"}
                </div>
              </div>

              <button onClick={onClose} style={{ background: "transparent", border: `1px solid ${COLORS.border}`, color: COLORS.gray, padding: "6px 12px", cursor: "pointer" }}>
                ✕
              </button>
            </div>

            <div style={{ display: "grid", gap: 14, marginBottom: 22, fontSize: 14 }}>
              <div>
                <div style={{ color: "#BFBFBF", fontSize: 11, letterSpacing: 2 }}>SECTOR</div>
                <div style={{ color: "#FFFFFF" }}>{lot.sector || "General"}</div>
              </div>
              <div>
                <div style={{ color: "#BFBFBF", fontSize: 11, letterSpacing: 2 }}>ÁREA</div>
                <div style={{ color: "#FFFFFF" }}>{lot.area ?? lot.areaM2 ? `${lot.area ?? lot.areaM2} m²` : "—"}</div>
              </div>

              <div>
                <div style={{ color: COLORS.gray, fontSize: 11, letterSpacing: 2 }}>ESTADO</div>
                <div style={{ marginTop: 6 }}>
                  <span style={{ padding: "6px 14px", fontSize: 12, letterSpacing: 2, ...getStatusStyle() }}>
                    {status}
                  </span>
                </div>
              </div>
            </div>

            {!blockContact && (
              <button
                onClick={() => {
                  const phone = "573176820728";
                  const text = `Hola, estoy interesado en el terreno ${lot.numeroTerreno || lot.lote}. ¿Podrían darme más información?`;
                  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
                }}
                style={buttonStyle}
              >
                CONTACTAR ASESOR
              </button>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
