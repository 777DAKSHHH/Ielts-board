import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  GitBranch,
  Clock3,
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Tv
} from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";
import { TouchTimer } from "../common/TouchTimer";

interface Step2BrainstormProps {
  formattedTime: string;
  isRunning: boolean;
  isFinished: boolean;
  onTimerToggle: () => void;
  onTimerReset: () => void;
}

interface SectorDetail {
  id: string;
  label: string;
  badge: string;
  in2002: string;
  today: string;
  band9Phrase: string;
}

const SECTOR_HIGHLIGHTS: SectorDetail[] = [
  {
    id: "nw",
    label: "Top-Left Corner",
    badge: "Residential",
    in2002: "Woodland / Trees",
    today: "New Apartments",
    band9Phrase: "“The trees in the top-left corner were removed to make way for a block of new apartments.”"
  },
  {
    id: "w",
    label: "Left of City Centre",
    badge: "Rail Transit",
    in2002: "Open Land",
    today: "New Train Station",
    band9Phrase: "“A new train station was erected directly to the left of the city centre, introducing rail connectivity.”"
  },
  {
    id: "e",
    label: "Right of City Centre",
    badge: "Tech Sector",
    in2002: "Industrial Factory",
    today: "Software Company",
    band9Phrase: "“The industrial factory to the right of the central core was demolished and replaced by modern software company towers.”"
  },
  {
    id: "s",
    label: "Directly Below Centre",
    badge: "Adaptive Reuse",
    in2002: "Old Cinema",
    today: "Pub",
    band9Phrase: "“Directly below the city centre, the historic cinema underwent adaptive reuse and was converted into a pub.”"
  },
  {
    id: "sw",
    label: "Bottom-Left Corner",
    badge: "Sports Leisure",
    in2002: "Woodland / Trees",
    today: "Football Stadium",
    band9Phrase: "“The trees in the bottom-left corner were felled to construct a sizeable modern football stadium.”"
  },
  {
    id: "preserved",
    label: "City Centre & Anchor",
    badge: "Anchor Point",
    in2002: "City Centre & Shopping",
    today: "Identical Footprint",
    band9Phrase: "“Taking the central city centre as an anchor, the core itself, the shopping centre directly above it, and two woodland areas stayed virtually intact.”"
  }
];

export const Step2Brainstorm: React.FC<Step2BrainstormProps> = ({
  formattedTime,
  isRunning,
  isFinished,
  onTimerToggle,
  onTimerReset
}) => {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedSector, setSelectedSector] = useState<SectorDetail | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsEnlarged(false);
      }
    };
    if (isEnlarged) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isEnlarged]);

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 02 / 08 • Task Prompt & Map Analysis
        </span>
        <h2 className="stage-title">Read the Task and Analyse Kimsville Town Maps</h2>
        <p className="stage-subtitle">
          Examine the prompt, identify the contrasting spatial and functional changes between 2002 and today, and plan your two body paragraphs.
        </p>
      </div>

      <div style={{ marginBottom: "18px" }}>
        <TouchTimer
          formattedTime={formattedTime}
          isRunning={isRunning}
          isFinished={isFinished}
          onToggle={onTimerToggle}
          onReset={onTimerReset}
          instruction="Focus Timer: compare 2002 with today—note demolitions, replacements, new constructions, and preserved areas."
        />
      </div>

      <div className="stage-grid-2col" style={{ alignItems: "start" }}>
        {/* Left Column: Prompt & Grouping Strategy */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ background: "var(--slate-50)", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <FileText size={18} color="var(--slate-800)" />
              <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--slate-900)" }}>IELTS Academic Writing Task 1</h4>
            </div>
            <div style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", borderRadius: "14px", padding: "16px", fontSize: "0.98rem", fontWeight: 600, color: "var(--slate-900)", lineHeight: 1.55, boxShadow: "var(--shadow-sm)" }}>
              {TASK1_DATA.questionText.split("\n\n").map((chunk, index) => (
                <p key={index} style={{ margin: index === TASK1_DATA.questionText.split("\n\n").length - 1 ? 0 : "10px 0" }}>{chunk}</p>
              ))}
            </div>
          </div>

          {/* IDP IELTS Compass & Anchor Rule Alert */}
          <div
            style={{
              background: "#fffbeb",
              border: "1.5px solid #fde68a",
              borderRadius: "18px",
              padding: "16px 18px",
              display: "flex",
              flexDirection: "column",
              gap: "6px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  background: "#d97706",
                  color: "#ffffff",
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  padding: "3px 8px",
                  borderRadius: "6px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}
              >
                IDP IELTS Exam Rule
              </span>
              <span style={{ fontSize: "0.88rem", fontWeight: 750, color: "#92400e" }}>
                Zero Compass = Use Central Anchor Point
              </span>
            </div>
            <p style={{ fontSize: "0.84rem", color: "#78350f", lineHeight: 1.5, margin: 0 }}>
              Because the prompt and original maps contain <strong>no compass rose</strong>, candidates are strictly penalized for fabricating cardinal directions (N/S/E/W). You must establish a fixed landmark that remains unchanged across both maps—here, the <strong>“City Centre”</strong> of Kimsville—and describe all spatial relationships relative to it (e.g. <em>“to the left of the city centre”</em>, <em>“directly above / beneath”</em>, <em>“in the top-left / bottom-left corner”</em>).
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "18px", boxShadow: "var(--shadow-sm)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <GitBranch size={17} color="var(--slate-800)" />
              <h5 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--slate-900)" }}>Analytical Grouping Strategy</h5>
            </div>
            <p style={{ fontSize: "0.88rem", color: "var(--slate-700)", lineHeight: 1.5, margin: 0 }}>
              <strong>Body 1 (Left-Hand & Upper Sectors):</strong> Woodland cleared for new apartments in the top-left, new train station built to the left of the city centre; shopping centre directly above and top-right trees preserved.<br />
              <strong style={{ marginTop: "4px", display: "inline-block" }}>Body 2 (Right-Hand & Lower Sectors):</strong> Industrial factory to the right replaced by a modern software company; old cinema directly below converted to a pub; football stadium replaces bottom-left trees; bottom-right woodland and city centre anchor preserved.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--slate-500)", fontSize: "0.82rem" }}>
            <Clock3 size={15} /> Write at least 150 words and spend about 20 minutes on this task.
          </div>
        </div>

        {/* Map Column with Click-to-Enlarge Lightbox */}
        <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "14px", boxShadow: "var(--shadow-sm)", display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* Smartboard Display Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "2px 4px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Tv size={16} color="var(--apple-blue)" />
              <span style={{ fontSize: "0.85rem", fontWeight: 750, color: "var(--slate-800)" }}>
                Ultra HD Senses Smartboard Ready
              </span>
            </div>
            <span className="apple-badge success" style={{ fontSize: "0.72rem", padding: "2px 8px" }}>
              4K Vector Graphic
            </span>
          </div>

          {/* Interactive Map Visual */}
          <div
            onClick={() => {
              setIsEnlarged(true);
              setZoomLevel(1);
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsEnlarged(true);
                setZoomLevel(1);
              }
            }}
            title="Click or tap to enlarge maps to fullscreen 4K projection"
            style={{
              position: "relative",
              borderRadius: "14px",
              overflow: "hidden",
              cursor: "zoom-in",
              border: "1.5px solid var(--border-subtle)",
              background: "#f8fafc"
            }}
          >
            <img
              src={`materials/${TASK1_DATA.imageFileName}`}
              alt="Kimsville comparative town maps 2002 vs today"
              style={{
                display: "block",
                width: "100%",
                maxHeight: "440px",
                objectFit: "contain",
                transition: "transform 0.2s ease"
              }}
            />

            {/* Smartboard Tap to Enlarge Floating Badge */}
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "rgba(15, 23, 42, 0.85)",
                backdropFilter: "blur(8px)",
                color: "#ffffff",
                padding: "6px 12px",
                borderRadius: "999px",
                fontSize: "0.78rem",
                fontWeight: 650,
                display: "flex",
                alignItems: "center",
                gap: "6px",
                boxShadow: "0 4px 14px rgba(0,0,0,0.22)",
                pointerEvents: "none"
              }}
            >
              <Maximize2 size={13} /> Tap to Project Fullscreen
            </div>
          </div>

          {/* Touch-Friendly Sector Inspector for Smartboard */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "2px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--slate-600)" }}>
                Interactive Touch Inspector:
              </span>
              <button
                onClick={() => {
                  setIsEnlarged(true);
                  setZoomLevel(1);
                }}
                className="apple-touch-btn secondary"
                style={{ minHeight: "32px", padding: "0 10px", fontSize: "0.78rem", gap: "5px" }}
              >
                <Maximize2 size={13} /> Fullscreen
              </button>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {SECTOR_HIGHLIGHTS.map((sector) => {
                const isActive = selectedSector?.id === sector.id;
                return (
                  <button
                    key={sector.id}
                    onClick={() => setSelectedSector(isActive ? null : sector)}
                    style={{
                      padding: "5px 10px",
                      borderRadius: "8px",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      background: isActive ? "var(--slate-900)" : "var(--slate-100)",
                      color: isActive ? "#ffffff" : "var(--slate-700)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.15s ease"
                    }}
                  >
                    {sector.label}
                  </button>
                );
              })}
            </div>

            {/* Selected Sector Callout */}
            {selectedSector && (
              <div
                style={{
                  background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
                  border: "1px solid #bfdbfe",
                  borderRadius: "12px",
                  padding: "10px 14px",
                  fontSize: "0.85rem",
                  color: "#1e3a8a",
                  lineHeight: 1.45
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                  <Sparkles size={14} color="var(--apple-blue)" />
                  <strong>{selectedSector.label} ({selectedSector.badge}):</strong>
                  <span style={{ color: "#475569", fontSize: "0.8rem" }}>
                    {selectedSector.in2002} <ArrowRight size={12} style={{ verticalAlign: "middle" }} /> {selectedSector.today}
                  </span>
                </div>
                <div style={{ fontStyle: "italic", color: "#1e40af" }}>
                  {selectedSector.band9Phrase}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Interactive Lightbox Modal for Smartboard */}
      <AnimatePresence>
        {isEnlarged && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsEnlarged(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              background: "rgba(15, 23, 42, 0.92)",
              backdropFilter: "blur(18px)",
              display: "flex",
              flexDirection: "column",
              padding: "16px"
            }}
          >
            {/* Lightbox Toolbar */}
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 20px",
                background: "rgba(30, 41, 59, 0.8)",
                borderRadius: "16px",
                marginBottom: "12px",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#ffffff"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span className="apple-badge accent" style={{ background: "var(--apple-blue)", color: "#fff", padding: "4px 10px" }}>
                  4K Senses Smartboard Projection
                </span>
                <span style={{ fontSize: "1.05rem", fontWeight: 750 }}>
                  Kimsville Town Maps: 2002 vs Today
                </span>
              </div>

              {/* Large Smartboard Touch Controls */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button
                  onClick={() => setZoomLevel((prev) => Math.min(2.5, prev + 0.25))}
                  className="apple-touch-btn secondary"
                  style={{ minHeight: "42px", padding: "0 14px", color: "#fff", background: "rgba(255,255,255,0.18)", border: "none", fontSize: "0.85rem", gap: "6px" }}
                  title="Zoom In"
                >
                  <ZoomIn size={18} /> Zoom In
                </button>
                <button
                  onClick={() => setZoomLevel((prev) => Math.max(0.75, prev - 0.25))}
                  className="apple-touch-btn secondary"
                  style={{ minHeight: "42px", padding: "0 14px", color: "#fff", background: "rgba(255,255,255,0.18)", border: "none", fontSize: "0.85rem", gap: "6px" }}
                  title="Zoom Out"
                >
                  <ZoomOut size={18} /> Zoom Out
                </button>
                <button
                  onClick={() => setZoomLevel(1)}
                  className="apple-touch-btn secondary"
                  style={{ minHeight: "42px", padding: "0 14px", color: "#fff", background: "rgba(255,255,255,0.18)", border: "none", fontSize: "0.85rem", gap: "6px" }}
                  title="Reset Zoom"
                >
                  <RotateCcw size={16} /> 100% Reset
                </button>
                <button
                  onClick={() => setIsEnlarged(false)}
                  className="apple-touch-btn"
                  style={{ minHeight: "42px", padding: "0 18px", background: "rgba(239, 68, 68, 0.9)", color: "#fff", border: "none", fontWeight: 700, gap: "6px" }}
                  title="Close (Esc)"
                >
                  <X size={19} /> Close
                </button>
              </div>
            </div>

            {/* Lightbox Image Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "auto",
                borderRadius: "18px",
                background: "rgba(0, 0, 0, 0.45)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "16px"
              }}
            >
              <motion.img
                src={`materials/${TASK1_DATA.imageFileName}`}
                alt="Enlarged Kimsville comparative town maps"
                animate={{ scale: zoomLevel }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                style={{
                  maxWidth: "94vw",
                  maxHeight: "84vh",
                  objectFit: "contain",
                  borderRadius: "12px",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.55)"
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
