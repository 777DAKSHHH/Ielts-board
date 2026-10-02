import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
  Tv,
  Layers,
  Map,
  HelpCircle,
  ImageIcon,
  Zap,
  Flame,
  Recycle,
  Sun,
  ArrowUpRight
} from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";
import { TouchTimer } from "../common/TouchTimer";
import { SmartBoardPyramidSvg, HighlightMode } from "./SmartBoardPyramidSvg";
import { BitsAndPiecesMindmap } from "./BitsAndPiecesMindmap";
import { BitsAndPiecesFlashcards } from "./BitsAndPiecesFlashcards";

interface Step2BrainstormProps {
  formattedTime: string;
  isRunning: boolean;
  isFinished: boolean;
  onTimerToggle: () => void;
  onTimerReset: () => void;
}

export interface TrophicHighlight {
  id: string;
  name: string;
  badge: string;
  energyKcal: string;
  organisms: string;
  heatLoss: string;
  band9Phrase: string;
}

const TROPHIC_HIGHLIGHTS: TrophicHighlight[] = [
  {
    id: "tier1",
    name: "Tier 1: Primary Producers",
    badge: "100% Baseline Energy",
    energyKcal: "20,000 kcal/m²/yr",
    organisms: "Flora, trees, and vegetation (autotrophs)",
    heatLoss: "Metabolic heat via plant respiration",
    band9Phrase: "“Primary producers capture 20,000 kcal/m²/yr of solar energy through photosynthesis, forming the foundational biomass of the ecosystem.”"
  },
  {
    id: "tier2",
    name: "Tier 2: Primary Consumers",
    badge: "10% Retained (90% Lost)",
    energyKcal: "2,000 kcal/m²/yr",
    organisms: "Herbivores & insects: mice, grasshoppers, butterflies, caterpillars, ants",
    heatLoss: "Kinetic energy & body heat",
    band9Phrase: "“Primary consumers assimilate only 2,000 kcal/m²/yr, representing an immediate 90% dissipation of caloric energy.”"
  },
  {
    id: "tier3",
    name: "Tier 3: Secondary Consumers",
    badge: "1% of Base Retained",
    energyKcal: "200 kcal/m²/yr",
    organisms: "Mesopredators: rodents, insectivorous birds, frogs",
    heatLoss: "Thermoregulation & foraging heat",
    band9Phrase: "“Secondary consumers retain a further diminished 200 kcal/m²/yr, sustaining the factor-of-ten attenuation rule.”"
  },
  {
    id: "tier4",
    name: "Tier 4: Tertiary Consumers",
    badge: "0.1% of Base Retained",
    energyKcal: "20 kcal/m²/yr",
    organisms: "Predatory reptiles: snakes",
    heatLoss: "Predatory metabolism",
    band9Phrase: "“Tertiary consumers assimilate a modest 20 kcal/m²/yr, as energy becomes progressively scarcer.”"
  },
  {
    id: "tier5",
    name: "Tier 5: Quaternary Consumers",
    badge: "0.01% Apex Biomass",
    energyKcal: "2 kcal/m²/yr",
    organisms: "Apex raptors: eagles and hawks",
    heatLoss: "Apex metabolic dissipation",
    band9Phrase: "“At the pyramid's pinnacle, quaternary consumers receive a mere 2 kcal/m²/yr—one ten-thousandth of the baseline energy.”"
  },
  {
    id: "decomposers",
    name: "Decomposers & Detritus Processing",
    badge: "Waste Sink",
    energyKcal: "Receives waste from all 5 tiers",
    organisms: "Bacteria, fungi, and detritivores",
    heatLoss: "Microbial decomposition heat",
    band9Phrase: "“Concurrently, biological waste and dead matter from all levels of the pyramid are funneled into decomposers, which also radiate metabolic heat into the atmosphere.”"
  }
];

export const Step2Brainstorm: React.FC<Step2BrainstormProps> = ({
  formattedTime,
  isRunning,
  isFinished,
  onTimerToggle,
  onTimerReset
}) => {
  const [viewMode, setViewMode] = useState<"smartboard_vector" | "mindmap" | "flashcards" | "original_image">("smartboard_vector");
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedTier, setSelectedTier] = useState<TrophicHighlight | null>(TROPHIC_HIGHLIGHTS[0]);
  const [highlightMode, setHighlightMode] = useState<HighlightMode>("all");

  // Fullscreen specific toggles
  const [fullscreenShowInspector, setFullscreenShowInspector] = useState(true);
  const [fullscreenGraphicMode, setFullscreenGraphicMode] = useState<"vector" | "original">("vector");

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

  const handleSvgSelectTier = (tierId: string) => {
    const found = TROPHIC_HIGHLIGHTS.find((t) => t.id === tierId);
    if (found) {
      setSelectedTier(found);
    }
  };

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 02 / 08 • Task Prompt &amp; Pyramid Analysis
        </span>
        <h2 className="stage-title">Deconstruct the Ecological Food Chain &amp; Energy Pyramid</h2>
        <p className="stage-subtitle">
          Examine the prompt, identify the 5 ascending trophic tiers, the 10% biomass rule, metabolic heat dissipation, and the decomposer waste flow.
        </p>
      </div>

      <div style={{ marginBottom: "14px" }}>
        <TouchTimer
          formattedTime={formattedTime}
          isRunning={isRunning}
          isFinished={isFinished}
          onToggle={onTimerToggle}
          onReset={onTimerReset}
          instruction="Focus Timer: 3 minutes to analyse the ascending energy metrics (20,000 down to 2 kcal), heat loss arrows, and decomposers."
        />
      </div>

      {/* SMART BOARD PEDAGOGICAL MODE SWITCHER */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "8px",
          background: "#ffffff",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "16px",
          padding: "8px 12px",
          marginBottom: "16px",
          boxShadow: "var(--shadow-sm)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--slate-800)", marginRight: "4px" }}>
            BOARD TEACHING VIEW:
          </span>

          <button
            type="button"
            onClick={() => setViewMode("smartboard_vector")}
            className="apple-touch-btn"
            style={{
              padding: "7px 14px",
              fontSize: "0.78rem",
              fontWeight: 750,
              background: viewMode === "smartboard_vector" ? "var(--slate-900)" : "var(--slate-100)",
              color: viewMode === "smartboard_vector" ? "#ffffff" : "var(--slate-700)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <Tv size={14} /> 4K Smart Board Vector
          </button>

          <button
            type="button"
            onClick={() => setViewMode("mindmap")}
            className="apple-touch-btn"
            style={{
              padding: "7px 14px",
              fontSize: "0.78rem",
              fontWeight: 750,
              background: viewMode === "mindmap" ? "#0284c7" : "var(--slate-100)",
              color: viewMode === "mindmap" ? "#ffffff" : "#0369a1",
              border: "1px solid var(--border-subtle)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <Map size={14} /> Bits &amp; Pieces Mindmap
          </button>

          <button
            type="button"
            onClick={() => setViewMode("flashcards")}
            className="apple-touch-btn"
            style={{
              padding: "7px 14px",
              fontSize: "0.78rem",
              fontWeight: 750,
              background: viewMode === "flashcards" ? "#8b5cf6" : "var(--slate-100)",
              color: viewMode === "flashcards" ? "#ffffff" : "#6d28d9",
              border: "1px solid var(--border-subtle)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <HelpCircle size={14} /> Classroom Flashcards (6)
          </button>

          <button
            type="button"
            onClick={() => setViewMode("original_image")}
            className="apple-touch-btn"
            style={{
              padding: "7px 14px",
              fontSize: "0.78rem",
              fontWeight: 750,
              background: viewMode === "original_image" ? "#475569" : "var(--slate-100)",
              color: viewMode === "original_image" ? "#ffffff" : "var(--slate-600)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <ImageIcon size={14} /> Original Exam Drawing
          </button>
        </div>

        <button
          type="button"
          onClick={() => {
            setFullscreenGraphicMode(viewMode === "original_image" ? "original" : "vector");
            setIsEnlarged(true);
            setZoomLevel(1);
          }}
          className="apple-touch-btn primary"
          style={{
            fontSize: "0.76rem",
            padding: "6px 14px",
            display: "flex",
            alignItems: "center",
            gap: "6px"
          }}
        >
          <Maximize2 size={13} /> Fullscreen Cinema View
        </button>
      </div>

      {/* CONDITIONAL DISPLAY BASED ON ACTIVE TEACHING VIEW */}
      {viewMode === "mindmap" && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          <BitsAndPiecesMindmap />
        </motion.div>
      )}

      {viewMode === "flashcards" && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          <BitsAndPiecesFlashcards />
        </motion.div>
      )}

      {(viewMode === "smartboard_vector" || viewMode === "original_image") && (
        <div className="stage-grid-2col" style={{ alignItems: "start" }}>
          {/* Left Column: Prompt & Essay Structure */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {/* Prompt Box */}
            <div style={{ background: "var(--slate-50)", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "18px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <FileText size={18} color="var(--slate-800)" />
                <h4 style={{ fontSize: "1.02rem", fontWeight: 700, color: "var(--slate-900)" }}>IELTS Academic Writing Task 1</h4>
              </div>
              <div style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", borderRadius: "14px", padding: "14px 16px", fontSize: "0.95rem", fontWeight: 600, color: "var(--slate-900)", lineHeight: 1.55, boxShadow: "var(--shadow-sm)" }}>
                {TASK1_DATA.questionText.split("\n\n").map((chunk, index) => (
                  <p key={index} style={{ margin: index === TASK1_DATA.questionText.split("\n\n").length - 1 ? 0 : "10px 0" }}>{chunk}</p>
                ))}
              </div>
            </div>

            {/* IELTS Ecological Process Architecture Card */}
            <div
              style={{
                background: "#f0fdf4",
                border: "1.5px solid #bbf7d0",
                borderRadius: "18px",
                padding: "16px 18px",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    background: "#16a34a",
                    color: "#ffffff",
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    padding: "3px 8px",
                    borderRadius: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px"
                  }}
                >
                  IELTS Process Rule
                </span>
                <span style={{ fontSize: "0.88rem", fontWeight: 750, color: "#166534" }}>
                  Two Parallel Phenomena: Energy Gradient + Waste Processing
                </span>
              </div>
              <p style={{ margin: 0, fontSize: "0.82rem", color: "#14532d", lineHeight: 1.5 }}>
                A Band 9 overview <strong>must report both systems</strong>: (1) The vertical upward trophic transfer featuring an exact 90% energy drop per tier, and (2) Continuous metabolic heat loss alongside biological waste channeling from all tiers into decomposers.
              </p>
            </div>

            {/* Essay Planning Strategy Card */}
            <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "16px 18px", boxShadow: "var(--shadow-sm)", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Layers size={18} color="var(--apple-blue)" />
                <h5 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--slate-900)" }}>Recommended 4-Paragraph Structure</h5>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", fontSize: "0.82rem" }}>
                <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
                  <strong style={{ color: "var(--apple-blue)" }}>Intro + Overview:</strong>
                  <p style={{ margin: "4px 0 0 0", color: "var(--slate-600)" }}>Paraphrase prompt + highlight 5 trophic tiers, 10% biomass rule, and heat/waste flows.</p>
                </div>
                <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
                  <strong style={{ color: "var(--apple-blue)" }}>Body 1 (Upward Energy):</strong>
                  <p style={{ margin: "4px 0 0 0", color: "var(--slate-600)" }}>Detail Tier 1 (Producers, 20,000 kcal) up to Tier 5 (Apex raptors, 2 kcal) with tenfold decreases.</p>
                </div>
                <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
                  <strong style={{ color: "#d97706" }}>Body 2 (Heat Loss):</strong>
                  <p style={{ margin: "4px 0 0 0", color: "var(--slate-600)" }}>Describe metabolic heat dissipation escaping to the atmosphere across all levels.</p>
                </div>
                <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
                  <strong style={{ color: "#16a34a" }}>Body 2 (Decomposers):</strong>
                  <p style={{ margin: "4px 0 0 0", color: "var(--slate-600)" }}>Explain waste/dead matter from all 5 tiers channeling into decomposers, releasing heat.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Diagram with Smart Board 4K Vector or Original Image & Trophic Inspector */}
          <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "14px", boxShadow: "var(--shadow-sm)", display: "flex", flexDirection: "column", gap: "12px" }}>
            {/* View Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "2px 4px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Tv size={16} color="var(--apple-blue)" />
                <span style={{ fontSize: "0.85rem", fontWeight: 750, color: "var(--slate-800)" }}>
                  {viewMode === "smartboard_vector" ? "Ultra-HD 4K Smart Board Vector (Zero-Loss Scalability)" : "Original Exam Paper Drawing"}
                </span>
              </div>
              <span className="apple-badge success" style={{ fontSize: "0.72rem", padding: "2px 8px" }}>
                {viewMode === "smartboard_vector" ? "100% Exact Wording" : "Scanned Original"}
              </span>
            </div>

            {/* Display Component */}
            {viewMode === "smartboard_vector" ? (
              <SmartBoardPyramidSvg
                onSelectTier={handleSvgSelectTier}
                selectedTierId={selectedTier?.id}
                highlightMode={highlightMode}
                onHighlightModeChange={setHighlightMode}
                showInternalToolbar={true}
              />
            ) : (
              <div
                onClick={() => {
                  setFullscreenGraphicMode("original");
                  setIsEnlarged(true);
                  setZoomLevel(1);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setFullscreenGraphicMode("original");
                    setIsEnlarged(true);
                    setZoomLevel(1);
                  }
                }}
                title="Click or tap to enlarge diagram to fullscreen projection"
                style={{
                  position: "relative",
                  borderRadius: "14px",
                  overflow: "hidden",
                  cursor: "zoom-in",
                  border: "1.5px solid var(--border-subtle)",
                  background: "#ffffff"
                }}
              >
                <img
                  src={`materials/${TASK1_DATA.imageFileName}`}
                  alt="Food production chain and energy pyramid diagram"
                  style={{
                    display: "block",
                    width: "100%",
                    maxHeight: "440px",
                    objectFit: "contain",
                    transition: "transform 0.2s ease"
                  }}
                />

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
            )}

            {/* Touch-Friendly Trophic Inspector for Smartboard */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "2px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--slate-600)" }}>
                  Interactive Trophic Inspector:
                </span>
                <span style={{ fontSize: "0.74rem", color: "var(--slate-400)" }}>
                  Tap any tier to inspect
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px" }}>
                {TROPHIC_HIGHLIGHTS.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedTier(tier)}
                    className="apple-touch-btn secondary"
                    style={{
                      minHeight: "36px",
                      padding: "6px 8px",
                      fontSize: "0.76rem",
                      fontWeight: 700,
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background: selectedTier?.id === tier.id ? "var(--slate-900)" : "#ffffff",
                      color: selectedTier?.id === tier.id ? "#ffffff" : "var(--slate-800)",
                      border: selectedTier?.id === tier.id ? "1.5px solid var(--slate-900)" : "1px solid var(--border-subtle)",
                      boxShadow: selectedTier?.id === tier.id ? "0 2px 8px rgba(0,0,0,0.15)" : "none"
                    }}
                  >
                    <span>{tier.name.split(":")[0]}</span>
                    <span style={{ fontSize: "0.68rem", opacity: 0.85 }}>{tier.energyKcal.split(" ")[0]}</span>
                  </button>
                ))}
              </div>

              {selectedTier && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    background: "var(--slate-50)",
                    border: "1.5px solid var(--apple-blue)",
                    borderRadius: "12px",
                    padding: "12px 14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <strong style={{ fontSize: "0.9rem", color: "var(--slate-900)" }}>
                      {selectedTier.name}
                    </strong>
                    <span className="apple-badge accent" style={{ fontSize: "0.7rem", padding: "2px 8px" }}>
                      {selectedTier.badge}
                    </span>
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--slate-700)", lineHeight: 1.45 }}>
                    <div><strong>Biomass Energy:</strong> {selectedTier.energyKcal}</div>
                    <div><strong>Organisms:</strong> {selectedTier.organisms}</div>
                    <div><strong>Thermal Loss:</strong> {selectedTier.heatLoss}</div>
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--apple-blue)", fontStyle: "italic", background: "#ffffff", padding: "8px 10px", borderRadius: "8px", border: "1px solid var(--border-subtle)" }}>
                    {selectedTier.band9Phrase}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FULLSCREEN CINEMA VIEW — COMPLETE SMART BOARD WORKSTATION */}
      <AnimatePresence>
        {isEnlarged && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              background: "rgba(15, 23, 42, 0.96)",
              backdropFilter: "blur(18px)",
              display: "flex",
              flexDirection: "column",
              padding: "14px"
            }}
          >
            {/* Modal Top Interactive Control Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "10px",
                padding: "10px 14px",
                background: "rgba(30, 41, 59, 0.9)",
                borderRadius: "16px",
                marginBottom: "12px",
                border: "1px solid rgba(255,255,255,0.12)"
              }}
            >
              {/* Title & Graphic Switcher */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#ffffff", flexWrap: "wrap" }}>
                <Tv size={20} color="var(--apple-blue)" />
                <span style={{ fontSize: "0.98rem", fontWeight: 750 }}>
                  Smartboard Cinema View
                </span>

                {/* Switch between Vector and Original Drawing */}
                <div style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.1)", borderRadius: "8px", padding: "2px" }}>
                  <button
                    type="button"
                    onClick={() => setFullscreenGraphicMode("vector")}
                    style={{
                      padding: "4px 10px",
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      borderRadius: "6px",
                      border: "none",
                      cursor: "pointer",
                      background: fullscreenGraphicMode === "vector" ? "var(--apple-blue)" : "transparent",
                      color: "#ffffff"
                    }}
                  >
                    4K Vector
                  </button>
                  <button
                    type="button"
                    onClick={() => setFullscreenGraphicMode("original")}
                    style={{
                      padding: "4px 10px",
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      borderRadius: "6px",
                      border: "none",
                      cursor: "pointer",
                      background: fullscreenGraphicMode === "original" ? "var(--apple-blue)" : "transparent",
                      color: "#ffffff"
                    }}
                  >
                    Original Drawing
                  </button>
                </div>

                {/* Smart Board Focus Toolbar in Fullscreen */}
                {fullscreenGraphicMode === "vector" && (
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", background: "rgba(0,0,0,0.35)", padding: "3px 6px", borderRadius: "8px", flexWrap: "wrap" }}>
                    <button
                      type="button"
                      onClick={() => setHighlightMode("all")}
                      style={{
                        padding: "3px 8px",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        borderRadius: "5px",
                        border: "none",
                        cursor: "pointer",
                        background: highlightMode === "all" ? "#ffffff" : "transparent",
                        color: highlightMode === "all" ? "#0f172a" : "#cbd5e1"
                      }}
                    >
                      All
                    </button>
                    <button
                      type="button"
                      onClick={() => setHighlightMode("light_energy")}
                      style={{
                        padding: "3px 8px",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        borderRadius: "5px",
                        border: "none",
                        cursor: "pointer",
                        background: highlightMode === "light_energy" ? "#ca8a04" : "transparent",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        gap: "3px"
                      }}
                    >
                      <Sun size={10} /> Light energy
                    </button>
                    <button
                      type="button"
                      onClick={() => setHighlightMode("biomass")}
                      style={{
                        padding: "3px 8px",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        borderRadius: "5px",
                        border: "none",
                        cursor: "pointer",
                        background: highlightMode === "biomass" ? "#0284c7" : "transparent",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        gap: "3px"
                      }}
                    >
                      <Zap size={10} /> Biomass (10×)
                    </button>
                    <button
                      type="button"
                      onClick={() => setHighlightMode("heat")}
                      style={{
                        padding: "3px 8px",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        borderRadius: "5px",
                        border: "none",
                        cursor: "pointer",
                        background: highlightMode === "heat" ? "#ea580c" : "transparent",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        gap: "3px"
                      }}
                    >
                      <Flame size={10} /> Heat
                    </button>
                    <button
                      type="button"
                      onClick={() => setHighlightMode("waste")}
                      style={{
                        padding: "3px 8px",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        borderRadius: "5px",
                        border: "none",
                        cursor: "pointer",
                        background: highlightMode === "waste" ? "#e11d48" : "transparent",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        gap: "3px"
                      }}
                    >
                      <ArrowUpRight size={10} /> Waste &amp; dead matter
                    </button>
                    <button
                      type="button"
                      onClick={() => setHighlightMode("decomposers")}
                      style={{
                        padding: "3px 8px",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        borderRadius: "5px",
                        border: "none",
                        cursor: "pointer",
                        background: highlightMode === "decomposers" ? "#16a34a" : "transparent",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        gap: "3px"
                      }}
                    >
                      <Recycle size={10} /> DECOMPOSERS
                    </button>
                  </div>
                )}
              </div>

              {/* Action Buttons: Inspector Toggle, Zoom Controls, Close */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                <button
                  type="button"
                  onClick={() => setFullscreenShowInspector(!fullscreenShowInspector)}
                  className="apple-touch-btn"
                  style={{
                    minHeight: "34px",
                    padding: "0 10px",
                    background: fullscreenShowInspector ? "var(--apple-blue)" : "rgba(255,255,255,0.12)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "0.76rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px"
                  }}
                  title="Toggle Trophic Inspector Panel"
                >
                  <Layers size={13} /> {fullscreenShowInspector ? "Hide Inspector" : "Show Inspector"}
                </button>

                {/* Zoom Controls */}
                <div style={{ display: "flex", alignItems: "center", gap: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "8px", padding: "2px" }}>
                  <button
                    type="button"
                    onClick={() => setZoomLevel((z) => Math.max(0.7, z - 0.2))}
                    style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: "4px 8px" }}
                    title="Zoom Out"
                  >
                    <ZoomOut size={15} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setZoomLevel(1)}
                    style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: "4px 8px", fontSize: "0.72rem", fontWeight: 700 }}
                    title="Reset Zoom"
                  >
                    {Math.round(zoomLevel * 100)}%
                  </button>
                  <button
                    type="button"
                    onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.2))}
                    style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: "4px 8px" }}
                    title="Zoom In"
                  >
                    <ZoomIn size={15} />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setIsEnlarged(false)}
                  className="apple-touch-btn primary"
                  style={{ minHeight: "34px", padding: "0 14px", gap: "6px", background: "#ef4444", border: "none", fontSize: "0.76rem" }}
                  title="Close Fullscreen (Esc)"
                >
                  <X size={15} /> Close
                </button>
              </div>
            </div>

            {/* Modal Body: Diagram Stage + Interactive Smart Board Panels */}
            <div style={{ flex: 1, display: "flex", gap: "14px", overflow: "hidden", position: "relative" }}>
              {/* Graphic Center Stage */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "auto",
                  borderRadius: "18px",
                  background: "#ffffff",
                  padding: "16px",
                  position: "relative"
                }}
              >
                {fullscreenGraphicMode === "vector" ? (
                  <div
                    style={{
                      transform: `scale(${zoomLevel})`,
                      transformOrigin: "center center",
                      transition: "transform 0.15s ease-out",
                      width: "100%",
                      maxWidth: "1080px"
                    }}
                  >
                    <SmartBoardPyramidSvg
                      onSelectTier={handleSvgSelectTier}
                      selectedTierId={selectedTier?.id}
                      highlightMode={highlightMode}
                      onHighlightModeChange={setHighlightMode}
                      showInternalToolbar={false}
                    />
                  </div>
                ) : (
                  <img
                    src={`materials/${TASK1_DATA.imageFileName}`}
                    alt="Food production chain and energy pyramid diagram fullscreen"
                    style={{
                      transform: `scale(${zoomLevel})`,
                      transformOrigin: "center center",
                      transition: "transform 0.15s ease-out",
                      maxWidth: "100%",
                      maxHeight: "82vh",
                      objectFit: "contain",
                      boxShadow: "0 20px 50px rgba(0,0,0,0.3)"
                    }}
                  />
                )}
              </div>

              {/* Right Panel: Interactive Trophic Inspector in Fullscreen */}
              {fullscreenShowInspector && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  style={{
                    width: "360px",
                    background: "rgba(30, 41, 59, 0.95)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "18px",
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    overflowY: "auto",
                    color: "#ffffff"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Layers size={16} color="var(--apple-blue)" />
                      <strong style={{ fontSize: "0.92rem" }}>Trophic Inspector</strong>
                    </div>
                    <span style={{ fontSize: "0.72rem", color: "#94a3b8" }}>Tap tier to inspect</span>
                  </div>

                  {/* 6 Tier Buttons */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                    {TROPHIC_HIGHLIGHTS.map((tier) => (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setSelectedTier(tier)}
                        style={{
                          padding: "8px 6px",
                          borderRadius: "10px",
                          border: selectedTier?.id === tier.id ? "2px solid #38bdf8" : "1px solid rgba(255,255,255,0.12)",
                          background: selectedTier?.id === tier.id ? "rgba(56, 189, 248, 0.2)" : "rgba(255,255,255,0.05)",
                          color: selectedTier?.id === tier.id ? "#38bdf8" : "#e2e8f0",
                          cursor: "pointer",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          fontSize: "0.74rem",
                          fontWeight: 700,
                          textAlign: "center"
                        }}
                      >
                        <span>{tier.name.split(":")[0]}</span>
                        <span style={{ fontSize: "0.68rem", opacity: 0.8 }}>{tier.energyKcal.split(" ")[0]}</span>
                      </button>
                    ))}
                  </div>

                  {/* Active Tier Inspector Details Card */}
                  {selectedTier && (
                    <div
                      style={{
                        background: "rgba(15, 23, 42, 0.8)",
                        border: "1px solid rgba(56, 189, 248, 0.3)",
                        borderRadius: "14px",
                        padding: "14px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px"
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "0.92rem", fontWeight: 800, color: "#38bdf8" }}>
                          {selectedTier.name}
                        </span>
                        <span
                          style={{
                            background: "rgba(56, 189, 248, 0.2)",
                            color: "#38bdf8",
                            fontSize: "0.68rem",
                            fontWeight: 800,
                            padding: "2px 6px",
                            borderRadius: "4px"
                          }}
                        >
                          {selectedTier.badge}
                        </span>
                      </div>

                      <div style={{ fontSize: "0.8rem", color: "#cbd5e1", lineHeight: 1.5, display: "flex", flexDirection: "column", gap: "4px" }}>
                        <div><strong style={{ color: "#ffffff" }}>Biomass Energy:</strong> {selectedTier.energyKcal}</div>
                        <div><strong style={{ color: "#ffffff" }}>Organisms:</strong> {selectedTier.organisms}</div>
                        <div><strong style={{ color: "#ffffff" }}>Thermal Loss:</strong> {selectedTier.heatLoss}</div>
                      </div>

                      <div
                        style={{
                          background: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          borderRadius: "8px",
                          padding: "8px 10px",
                          fontSize: "0.78rem",
                          color: "#93c5fd",
                          fontStyle: "italic",
                          lineHeight: 1.45
                        }}
                      >
                        {selectedTier.band9Phrase}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
