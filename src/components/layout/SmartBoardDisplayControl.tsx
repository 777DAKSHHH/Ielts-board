import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Minimize2, Sun, Type, RotateCcw, Monitor } from "lucide-react";
import { tactilePress } from "../../motion";
import { BoardScaleHook } from "../../hooks/useBoardScale";

interface SmartBoardDisplayControlProps {
  boardScale: BoardScaleHook;
}

export const SmartBoardDisplayControl: React.FC<SmartBoardDisplayControlProps> = ({ boardScale }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close popup when tapping outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const presets = [
    { label: "Laptop / Compact", scale: 1.0, icon: "💻", desc: "Standard 100% for desk view" },
    { label: "Classroom", scale: 1.15, icon: "🏫", desc: "Front & mid-row legibility" },
    { label: "Senses Board (Optimal)", scale: 1.28, icon: "📺", desc: "Recommended for 65\"-86\" Senses panels" },
    { label: "Back Row / 4K Panel", scale: 1.45, icon: "🔭", desc: "Large hall & distant viewing" }
  ];

  return (
    <div ref={containerRef} style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
      {/* Quick Tactile Stepper Group */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          background: "var(--slate-100)",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "10px",
          padding: "2px",
          gap: "2px"
        }}
      >
        {/* Decrease Text Size */}
        <motion.button
          whileTap={tactilePress}
          onClick={boardScale.decreaseScale}
          className="apple-touch-btn"
          style={{
            minHeight: "34px",
            minWidth: "32px",
            padding: "0 6px",
            borderRadius: "7px",
            background: "#ffffff",
            color: "var(--slate-700)",
            border: "1px solid var(--border-default)",
            fontSize: "0.82rem",
            fontWeight: 800,
            boxShadow: "var(--shadow-xs)"
          }}
          title="Decrease text size for closer viewing"
          aria-label="Decrease text size"
        >
          A-
        </motion.button>

        {/* Current Size Trigger Button */}
        <motion.button
          whileTap={tactilePress}
          onClick={() => setIsOpen((prev) => !prev)}
          className="apple-touch-btn"
          style={{
            minHeight: "34px",
            padding: "0 10px",
            borderRadius: "7px",
            background: isOpen ? "var(--slate-900)" : "#ffffff",
            color: isOpen ? "#ffffff" : "var(--slate-900)",
            border: `1px solid ${isOpen ? "var(--slate-900)" : "var(--border-default)"}`,
            fontSize: "0.82rem",
            fontWeight: 750,
            gap: "5px",
            boxShadow: "var(--shadow-xs)"
          }}
          title="Open Smart Board display & text size controls"
        >
          <Type size={14} />
          <span>{boardScale.scalePercent}%</span>
        </motion.button>

        {/* Increase Text Size */}
        <motion.button
          whileTap={tactilePress}
          onClick={boardScale.increaseScale}
          className="apple-touch-btn"
          style={{
            minHeight: "34px",
            minWidth: "32px",
            padding: "0 6px",
            borderRadius: "7px",
            background: "#ffffff",
            color: "var(--slate-700)",
            border: "1px solid var(--border-default)",
            fontSize: "0.88rem",
            fontWeight: 800,
            boxShadow: "var(--shadow-xs)"
          }}
          title="Increase text size for back-row students"
          aria-label="Increase text size"
        >
          A+
        </motion.button>
      </div>

      {/* Popout Control Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.16 }}
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              right: 0,
              width: "320px",
              background: "#ffffff",
              border: "1.5px solid var(--border-default)",
              borderRadius: "16px",
              boxShadow: "var(--shadow-xl)",
              padding: "16px",
              zIndex: 100,
              display: "flex",
              flexDirection: "column",
              gap: "14px"
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1.5px solid var(--border-subtle)", paddingBottom: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Monitor size={18} color="var(--apple-blue)" />
                <h4 style={{ margin: 0, fontSize: "0.96rem", fontWeight: 800, color: "var(--slate-900)" }}>
                  Senses Board Visibility
                </h4>
              </div>
              <button
                onClick={boardScale.resetScale}
                className="apple-touch-btn secondary"
                style={{ minHeight: "26px", padding: "2px 8px", fontSize: "0.75rem", gap: "4px" }}
                title="Reset to default 128%"
              >
                <RotateCcw size={12} />
                <span>Reset</span>
              </button>
            </div>

            {/* Presets List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ fontSize: "0.76rem", fontWeight: 750, color: "var(--slate-500)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Classroom Distance Presets
              </div>
              {presets.map((item) => {
                const isActive = Math.abs(boardScale.scale - item.scale) < 0.04;
                return (
                  <button
                    key={item.label}
                    onClick={() => {
                      boardScale.setScale(item.scale);
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 12px",
                      borderRadius: "10px",
                      border: isActive ? "2px solid var(--apple-blue)" : "1px solid var(--border-subtle)",
                      background: isActive ? "#eff6ff" : "var(--slate-50)",
                      textAlign: "left",
                      cursor: "pointer",
                      transition: "all 0.12s ease"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                      <div>
                        <div style={{ fontSize: "0.86rem", fontWeight: 750, color: isActive ? "var(--apple-blue)" : "var(--slate-900)" }}>
                          {item.label}
                        </div>
                        <div style={{ fontSize: "0.74rem", color: "var(--slate-600)" }}>
                          {item.desc}
                        </div>
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 800,
                        color: isActive ? "var(--apple-blue)" : "var(--slate-600)"
                      }}
                    >
                      {Math.round(item.scale * 100)}%
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Teaching Clarity Toggles */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", borderTop: "1.5px solid var(--border-subtle)", paddingTop: "12px" }}>
              <div style={{ fontSize: "0.76rem", fontWeight: 750, color: "var(--slate-500)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Classroom Clarity Tools
              </div>

              {/* High Contrast Toggle */}
              <button
                onClick={boardScale.toggleHighContrast}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "9px 12px",
                  borderRadius: "10px",
                  border: boardScale.isHighContrast ? "2px solid #ea580c" : "1px solid var(--border-subtle)",
                  background: boardScale.isHighContrast ? "#fff7ed" : "var(--slate-50)",
                  cursor: "pointer",
                  textAlign: "left"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Sun size={17} color={boardScale.isHighContrast ? "#ea580c" : "var(--slate-700)"} />
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 750, color: "var(--slate-900)" }}>
                      Ultra-Clarity Contrast
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "var(--slate-600)" }}>
                      Cuts glare from classroom lights
                    </div>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "0.74rem",
                    fontWeight: 800,
                    padding: "2px 8px",
                    borderRadius: "6px",
                    background: boardScale.isHighContrast ? "#ea580c" : "var(--slate-200)",
                    color: boardScale.isHighContrast ? "#ffffff" : "var(--slate-700)"
                  }}
                >
                  {boardScale.isHighContrast ? "ON" : "OFF"}
                </span>
              </button>

              {/* Fullscreen Mode */}
              <button
                onClick={boardScale.toggleFullscreen}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "9px 12px",
                  borderRadius: "10px",
                  border: boardScale.isFullscreen ? "2px solid var(--apple-blue)" : "1px solid var(--border-subtle)",
                  background: boardScale.isFullscreen ? "#eff6ff" : "var(--slate-50)",
                  cursor: "pointer",
                  textAlign: "left"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  {boardScale.isFullscreen ? (
                    <Minimize2 size={17} color="var(--apple-blue)" />
                  ) : (
                    <Maximize2 size={17} color="var(--slate-700)" />
                  )}
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 750, color: "var(--slate-900)" }}>
                      Full Screen Stage
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "var(--slate-600)" }}>
                      Hides browser bars for max board space
                    </div>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "0.74rem",
                    fontWeight: 800,
                    padding: "2px 8px",
                    borderRadius: "6px",
                    background: boardScale.isFullscreen ? "var(--apple-blue)" : "var(--slate-200)",
                    color: boardScale.isFullscreen ? "#ffffff" : "var(--slate-700)"
                  }}
                >
                  {boardScale.isFullscreen ? "ACTIVE" : "EXPAND"}
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
