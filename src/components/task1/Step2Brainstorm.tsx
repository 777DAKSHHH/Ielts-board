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
  GitCommit,
  Columns,
  Maximize
} from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";
import { TouchTimer } from "../common/TouchTimer";
import { SmartBoardGraphSvg, GraphHighlightMode } from "./SmartBoardGraphSvg";
import { BitsAndPiecesMindmap } from "./BitsAndPiecesMindmap";
import { BitsAndPiecesFlashcards } from "./BitsAndPiecesFlashcards";
import { CountryData } from "../../types/task1";

interface Step2BrainstormProps {
  formattedTime: string;
  isRunning: boolean;
  isFinished: boolean;
  onTimerToggle: () => void;
  onTimerReset: () => void;
}

export const Step2Brainstorm: React.FC<Step2BrainstormProps> = ({
  formattedTime,
  isRunning,
  isFinished,
  onTimerToggle,
  onTimerReset
}) => {
  const [viewMode, setViewMode] = useState<
    "smartboard_vector" | "mindmap" | "flashcards" | "original_image"
  >("smartboard_vector");
  const [stageLayout, setStageLayout] = useState<"split" | "full_width">("split");
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState<CountryData>(
    TASK1_DATA.graphData.countries[0]
  );
  const [highlightMode, setHighlightMode] = useState<GraphHighlightMode>("all");

  // Fullscreen specific toggles
  const [fullscreenShowInspector, setFullscreenShowInspector] = useState(true);

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

  // When switching to mindmap or flashcards in embedded view, full_width gives optimal readability
  const handleSelectViewMode = (
    mode: "smartboard_vector" | "mindmap" | "flashcards" | "original_image"
  ) => {
    setViewMode(mode);
    if (mode === "mindmap" || mode === "flashcards") {
      setStageLayout("full_width");
    }
  };

  const handleSvgSelectCountry = (countryId: string) => {
    const found = TASK1_DATA.graphData.countries.find((c) => c.id === countryId);
    if (found) {
      setSelectedCountry(found);
    }
  };

  const openFullscreen = () => {
    setZoomLevel(1);
    setIsEnlarged(true);
  };

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 02 / 08 • Task Prompt &amp; Graph Analysis
        </span>
        <h2 className="stage-title">Deconstruct the 40-Year CO2 Emissions Line Graph</h2>
        <p className="stage-subtitle">
          Examine the prompt, identify the two distinct 20-year trajectories (UK &amp; Sweden falling vs. Italy &amp; Portugal rising), and note critical crossover and convergence milestones.
        </p>
      </div>

      <div style={{ marginBottom: "14px" }}>
        <TouchTimer
          formattedTime={formattedTime}
          isRunning={isRunning}
          isFinished={isFinished}
          onToggle={onTimerToggle}
          onReset={onTimerReset}
          instruction="Focus Timer: 3 minutes to analyze the two diverging groups (net decline vs net growth) and pinpoint the 1987 and 2007 intersection points."
        />
      </div>

      {/* SMART BOARD VIEW SWITCHER & CONTROL STRIP */}
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
        {/* 4 View Mode Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--slate-800)", marginRight: "4px" }}>
            BOARD TEACHING VIEW:
          </span>

          <button
            type="button"
            onClick={() => handleSelectViewMode("smartboard_vector")}
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
            onClick={() => handleSelectViewMode("mindmap")}
            className="apple-touch-btn"
            style={{
              padding: "7px 14px",
              fontSize: "0.78rem",
              fontWeight: 750,
              background: viewMode === "mindmap" ? "var(--slate-900)" : "var(--slate-100)",
              color: viewMode === "mindmap" ? "#ffffff" : "var(--slate-700)",
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
            onClick={() => handleSelectViewMode("flashcards")}
            className="apple-touch-btn"
            style={{
              padding: "7px 14px",
              fontSize: "0.78rem",
              fontWeight: 750,
              background: viewMode === "flashcards" ? "var(--slate-900)" : "var(--slate-100)",
              color: viewMode === "flashcards" ? "#ffffff" : "var(--slate-700)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <HelpCircle size={14} /> Bits &amp; Pieces Flashcards
          </button>

          <button
            type="button"
            onClick={() => handleSelectViewMode("original_image")}
            className="apple-touch-btn"
            style={{
              padding: "7px 14px",
              fontSize: "0.78rem",
              fontWeight: 750,
              background: viewMode === "original_image" ? "var(--slate-900)" : "var(--slate-100)",
              color: viewMode === "original_image" ? "#ffffff" : "var(--slate-700)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <ImageIcon size={14} /> Original Test Graph
          </button>
        </div>

        {/* Layout & Entire Screen Triggers */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Embedded Split vs Full Width Toggle */}
          <button
            type="button"
            onClick={() => setStageLayout((l) => (l === "split" ? "full_width" : "split"))}
            className="apple-touch-btn secondary"
            style={{
              padding: "7px 12px",
              fontSize: "0.78rem",
              fontWeight: 700,
              gap: "5px",
              display: "flex",
              alignItems: "center"
            }}
            title={stageLayout === "split" ? "Expand Visual to Full Stage Width" : "Switch to 2-Column Split View"}
          >
            {stageLayout === "split" ? (
              <>
                <Maximize size={13} /> Full Width Stage
              </>
            ) : (
              <>
                <Columns size={13} /> Split View
              </>
            )}
          </button>

          {/* Fullscreen Smart Board Button */}
          <button
            type="button"
            onClick={openFullscreen}
            className="apple-touch-btn primary"
            style={{
              padding: "7px 16px",
              fontSize: "0.78rem",
              fontWeight: 750,
              gap: "6px",
              boxShadow: "0 2px 8px rgba(0, 113, 227, 0.25)"
            }}
            title="Open Current Sub-Topic Across Entire Screen"
          >
            <Maximize2 size={14} /> Entire Screen Mode
          </button>
        </div>
      </div>

      {/* STAGE VIEWPORT (Split Mode vs Full Width Mode) */}
      {stageLayout === "split" ? (
        /* Standard 2-Column Split */
        <div className="stage-grid-2col" style={{ alignItems: "stretch", minHeight: "540px" }}>
          {/* Left Column: Visual Display Container */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: viewMode === "smartboard_vector" ? "0" : "18px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxShadow: "var(--shadow-sm)",
              minHeight: "530px"
            }}
          >
            {viewMode === "smartboard_vector" && (
              <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
                <SmartBoardGraphSvg
                  selectedCountryId={selectedCountry.id}
                  onSelectCountry={handleSvgSelectCountry}
                  highlightMode={highlightMode}
                  onHighlightModeChange={setHighlightMode}
                  showInternalToolbar={true}
                />
              </div>
            )}

            {viewMode === "mindmap" && (
              <div style={{ flex: 1, minHeight: "480px" }}>
                <BitsAndPiecesMindmap onToggleFullscreen={openFullscreen} />
              </div>
            )}

            {viewMode === "flashcards" && (
              <div style={{ flex: 1, minHeight: "480px" }}>
                <BitsAndPiecesFlashcards onToggleFullscreen={openFullscreen} />
              </div>
            )}

            {viewMode === "original_image" && (
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px",
                  background: "#f8fafc",
                  borderRadius: "14px",
                  position: "relative"
                }}
              >
                <img
                  src={`materials/${TASK1_DATA.imageFileName}`}
                  alt="Original IELTS Task 1 Test Paper Graph"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "460px",
                    objectFit: "contain",
                    borderRadius: "8px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)"
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    background: "rgba(15, 23, 42, 0.8)",
                    color: "#ffffff",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "0.76rem",
                    fontWeight: 600,
                    backdropFilter: "blur(4px)"
                  }}
                >
                  Original Exam Paper Reproduction
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Prompt Card + Country Tier Inspector */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {/* Main Task Prompt */}
            <div
              style={{
                background: "var(--slate-50)",
                border: "1.5px solid var(--border-subtle)",
                borderRadius: "20px",
                padding: "20px 22px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "12px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                  <FileText size={18} color="var(--slate-800)" />
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700 }}>IELTS Academic Writing Task 1</h4>
                </div>
                <span className="apple-badge accent">{TASK1_DATA.taskType}</span>
              </div>
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "14px",
                  padding: "16px 18px",
                  fontSize: "1.05rem",
                  fontWeight: 650,
                  lineHeight: 1.55,
                  boxShadow: "var(--shadow-sm)",
                  color: "var(--slate-900)"
                }}
              >
                {TASK1_DATA.questionText.split("\n\n").map((chunk, i) => (
                  <p key={i} style={{ marginBottom: i < 2 ? "8px" : 0 }}>
                    {chunk}
                  </p>
                ))}
              </div>
            </div>

            {/* Interactive Country Inspector */}
            <div
              style={{
                background: "#ffffff",
                border: "1.5px solid var(--border-subtle)",
                borderRadius: "20px",
                padding: "18px 20px",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                gap: "12px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Layers size={18} color="var(--apple-blue)" />
                  <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--slate-900)" }}>
                    Country Data Inspector
                  </h4>
                </div>
                <span className="apple-badge neutral" style={{ fontSize: "0.72rem" }}>
                  Select country to view data
                </span>
              </div>

              {/* Country Selector Pills */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px" }}>
                {TASK1_DATA.graphData.countries.map((c) => {
                  const isSelected = selectedCountry.id === c.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => {
                        setSelectedCountry(c);
                        setHighlightMode(c.id as GraphHighlightMode);
                      }}
                      style={{
                        padding: "8px 4px",
                        borderRadius: "10px",
                        fontSize: "0.78rem",
                        fontWeight: 750,
                        border: isSelected ? `2px solid ${c.color}` : "1.5px solid var(--border-subtle)",
                        background: isSelected ? c.color : "var(--slate-50)",
                        color: isSelected ? "#ffffff" : "var(--slate-800)",
                        cursor: "pointer",
                        textAlign: "center",
                        transition: "all 0.15s ease",
                        boxShadow: isSelected ? "0 2px 6px rgba(0,0,0,0.12)" : "none"
                      }}
                    >
                      {c.name.split(" ")[0]}
                    </button>
                  );
                })}
              </div>

              {/* Active Country Detail Box */}
              <div
                style={{
                  background: "var(--slate-50)",
                  border: `1.5px solid ${selectedCountry.color}`,
                  borderRadius: "14px",
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "6px" }}>
                  <strong style={{ fontSize: "1.02rem", color: selectedCountry.color }}>
                    {selectedCountry.name}
                  </strong>
                  <span
                    style={{
                      fontSize: "0.74rem",
                      fontWeight: 755,
                      background: "#ffffff",
                      padding: "2px 8px",
                      borderRadius: "6px",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--slate-700)"
                    }}
                  >
                    {selectedCountry.netChange}
                  </span>
                </div>

                {/* Data points summary row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gap: "4px",
                    background: "#ffffff",
                    padding: "8px",
                    borderRadius: "10px",
                    border: "1px solid var(--border-subtle)",
                    textAlign: "center"
                  }}
                >
                  {selectedCountry.dataPoints.map((pt) => (
                    <div key={pt.year}>
                      <div style={{ fontSize: "0.68rem", fontWeight: 700, color: "var(--slate-500)" }}>
                        {pt.year}
                      </div>
                      <div style={{ fontSize: "0.9rem", fontWeight: 800, color: selectedCountry.color }}>
                        {pt.value}t
                      </div>
                    </div>
                  ))}
                </div>

                <p style={{ fontSize: "0.85rem", color: "var(--slate-700)", margin: 0, lineHeight: 1.45 }}>
                  {selectedCountry.trendSummary}
                </p>

                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    borderLeft: `3px solid ${selectedCountry.color}`,
                    fontSize: "0.82rem",
                    fontStyle: "italic",
                    color: "var(--slate-800)",
                    lineHeight: 1.4
                  }}
                >
                  {selectedCountry.band9Phrase}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Full Width Stage Layout (Maximum horizontal space for Mindmap/Visual) */
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Main Visual Display Full Width */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: viewMode === "smartboard_vector" ? "0" : "20px",
              boxShadow: "var(--shadow-sm)",
              minHeight: "560px",
              display: "flex",
              flexDirection: "column"
            }}
          >
            {viewMode === "smartboard_vector" && (
              <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%", minHeight: "560px" }}>
                <SmartBoardGraphSvg
                  selectedCountryId={selectedCountry.id}
                  onSelectCountry={handleSvgSelectCountry}
                  highlightMode={highlightMode}
                  onHighlightModeChange={setHighlightMode}
                  showInternalToolbar={true}
                />
              </div>
            )}

            {viewMode === "mindmap" && (
              <div style={{ flex: 1, minHeight: "540px" }}>
                <BitsAndPiecesMindmap isEntireScreen={false} onToggleFullscreen={openFullscreen} />
              </div>
            )}

            {viewMode === "flashcards" && (
              <div style={{ flex: 1, minHeight: "500px" }}>
                <BitsAndPiecesFlashcards isEntireScreen={false} onToggleFullscreen={openFullscreen} />
              </div>
            )}

            {viewMode === "original_image" && (
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                  background: "#f8fafc",
                  borderRadius: "16px"
                }}
              >
                <img
                  src={`materials/${TASK1_DATA.imageFileName}`}
                  alt="Original IELTS Task 1 Test Paper Graph"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "520px",
                    objectFit: "contain",
                    borderRadius: "8px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)"
                  }}
                />
              </div>
            )}
          </div>

          {/* Collapsible Lower Section: Prompt & Inspector Side-by-Side */}
          <div className="stage-grid-2col" style={{ alignItems: "stretch" }}>
            {/* Prompt */}
            <div
              style={{
                background: "var(--slate-50)",
                border: "1.5px solid var(--border-subtle)",
                borderRadius: "18px",
                padding: "18px 20px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <FileText size={17} color="var(--slate-800)" />
                <h4 style={{ fontSize: "1rem", fontWeight: 750, margin: 0 }}>Task 1 Prompt</h4>
                <span className="apple-badge accent" style={{ marginLeft: "auto", fontSize: "0.72rem" }}>
                  {TASK1_DATA.taskType}
                </span>
              </div>
              <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--slate-800)", lineHeight: 1.5 }}>
                {TASK1_DATA.questionText}
              </p>
            </div>

            {/* Compact Country Inspector */}
            <div
              style={{
                background: "#ffffff",
                border: "1.5px solid var(--border-subtle)",
                borderRadius: "18px",
                padding: "18px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)" }}>Country Quick Inspector</strong>
                <div style={{ display: "flex", gap: "4px" }}>
                  {TASK1_DATA.graphData.countries.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        setSelectedCountry(c);
                        setHighlightMode(c.id as GraphHighlightMode);
                      }}
                      style={{
                        padding: "3px 8px",
                        borderRadius: "6px",
                        fontSize: "0.74rem",
                        fontWeight: 750,
                        border: selectedCountry.id === c.id ? `2px solid ${c.color}` : "1px solid var(--border-subtle)",
                        background: selectedCountry.id === c.id ? c.color : "#ffffff",
                        color: selectedCountry.id === c.id ? "#ffffff" : "var(--slate-700)",
                        cursor: "pointer"
                      }}
                    >
                      {c.name.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ fontSize: "0.86rem", color: "var(--slate-700)" }}>
                <strong style={{ color: selectedCountry.color }}>{selectedCountry.name}:</strong> {selectedCountry.trendSummary} ({selectedCountry.netChange})
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FULLSCREEN SMART BOARD MODAL (Supports ALL 4 Sub-topics across entire screen) */}
      <AnimatePresence>
        {isEnlarged && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(15, 23, 42, 0.88)",
              backdropFilter: "blur(16px)",
              padding: "12px"
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              style={{
                width: "99vw",
                height: "96vh",
                background: "#ffffff",
                borderRadius: "22px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                boxShadow: "0 25px 60px rgba(0,0,0,0.5)"
              }}
            >
              {/* Fullscreen Header Bar */}
              <div
                style={{
                  padding: "10px 20px",
                  background: "var(--slate-900)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexShrink: 0,
                  flexWrap: "wrap",
                  gap: "10px"
                }}
              >
                {/* Title */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Tv size={20} color="var(--apple-blue)" />
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 800, margin: 0, color: "#ffffff" }}>
                      Smart Board Entire Screen Engine • CO2 Emissions (1967–2007)
                    </h3>
                    <p style={{ fontSize: "0.74rem", color: "#94a3b8", margin: 0 }}>
                      United Kingdom, Sweden, Italy, Portugal • Units: Metric Tonnes per person
                    </p>
                  </div>
                </div>

                {/* Sub-Topic Switcher Strip Inside Fullscreen */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    padding: "3px"
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setViewMode("smartboard_vector")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "6px 12px",
                      fontSize: "0.78rem",
                      fontWeight: 750,
                      borderRadius: "8px",
                      border: "none",
                      background: viewMode === "smartboard_vector" ? "var(--apple-blue)" : "transparent",
                      color: "#ffffff",
                      cursor: "pointer"
                    }}
                  >
                    <Tv size={13} /> 4K Vector Graph
                  </button>

                  <button
                    type="button"
                    onClick={() => setViewMode("mindmap")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "6px 12px",
                      fontSize: "0.78rem",
                      fontWeight: 750,
                      borderRadius: "8px",
                      border: "none",
                      background: viewMode === "mindmap" ? "var(--apple-blue)" : "transparent",
                      color: "#ffffff",
                      cursor: "pointer"
                    }}
                  >
                    <Map size={13} /> Bits &amp; Pieces Mindmap
                  </button>

                  <button
                    type="button"
                    onClick={() => setViewMode("flashcards")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "6px 12px",
                      fontSize: "0.78rem",
                      fontWeight: 750,
                      borderRadius: "8px",
                      border: "none",
                      background: viewMode === "flashcards" ? "var(--apple-blue)" : "transparent",
                      color: "#ffffff",
                      cursor: "pointer"
                    }}
                  >
                    <HelpCircle size={13} /> Bits &amp; Pieces Flashcards
                  </button>

                  <button
                    type="button"
                    onClick={() => setViewMode("original_image")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "6px 12px",
                      fontSize: "0.78rem",
                      fontWeight: 750,
                      borderRadius: "8px",
                      border: "none",
                      background: viewMode === "original_image" ? "var(--apple-blue)" : "transparent",
                      color: "#ffffff",
                      cursor: "pointer"
                    }}
                  >
                    <ImageIcon size={13} /> Original Exam Graph
                  </button>
                </div>

                {/* Right Contextual Controls */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  {/* Zoom controls for vector or image */}
                  {(viewMode === "smartboard_vector" || viewMode === "original_image") && (
                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <button
                        type="button"
                        onClick={() => setZoomLevel((z) => Math.max(0.7, z - 0.1))}
                        className="apple-touch-btn secondary"
                        style={{ minHeight: "30px", width: "30px", padding: 0 }}
                        title="Zoom Out"
                      >
                        <ZoomOut size={14} />
                      </button>
                      <span style={{ fontSize: "0.76rem", color: "#cbd5e1", minWidth: "36px", textAlign: "center" }}>
                        {Math.round(zoomLevel * 100)}%
                      </span>
                      <button
                        type="button"
                        onClick={() => setZoomLevel((z) => Math.min(1.8, z + 0.1))}
                        className="apple-touch-btn secondary"
                        style={{ minHeight: "30px", width: "30px", padding: 0 }}
                        title="Zoom In"
                      >
                        <ZoomIn size={14} />
                      </button>
                    </div>
                  )}

                  {/* Inspector Toggle for Vector Mode */}
                  {viewMode === "smartboard_vector" && (
                    <button
                      type="button"
                      onClick={() => setFullscreenShowInspector(!fullscreenShowInspector)}
                      className="apple-touch-btn secondary"
                      style={{ minHeight: "30px", padding: "0 10px", fontSize: "0.76rem" }}
                    >
                      {fullscreenShowInspector ? "Hide Inspector" : "Show Inspector"}
                    </button>
                  )}

                  {/* Close Fullscreen Button */}
                  <button
                    type="button"
                    onClick={() => setIsEnlarged(false)}
                    className="apple-touch-btn secondary"
                    style={{ minHeight: "32px", width: "32px", padding: 0, borderRadius: "50%" }}
                    title="Close Fullscreen (Esc)"
                  >
                    <X size={17} />
                  </button>
                </div>
              </div>

              {/* Fullscreen Body */}
              <div style={{ flex: 1, display: "flex", overflow: "hidden", minHeight: 0 }}>
                {/* 1. Vector Graph in Fullscreen */}
                {viewMode === "smartboard_vector" && (
                  <>
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#ffffff",
                        overflow: "auto",
                        padding: "16px"
                      }}
                    >
                      <div
                        style={{
                          transform: `scale(${zoomLevel})`,
                          transformOrigin: "center center",
                          transition: "transform 0.15s ease",
                          width: "100%",
                          maxWidth: "1150px",
                          height: "100%"
                        }}
                      >
                        <SmartBoardGraphSvg
                          selectedCountryId={selectedCountry.id}
                          onSelectCountry={handleSvgSelectCountry}
                          highlightMode={highlightMode}
                          onHighlightModeChange={setHighlightMode}
                          showInternalToolbar={true}
                        />
                      </div>
                    </div>

                    {fullscreenShowInspector && (
                      <div
                        style={{
                          width: "340px",
                          borderLeft: "1.5px solid var(--border-subtle)",
                          background: "var(--slate-50)",
                          padding: "20px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "14px",
                          overflowY: "auto",
                          flexShrink: 0
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <Layers size={18} color="var(--apple-blue)" />
                          <h4 style={{ fontSize: "1rem", fontWeight: 800, margin: 0 }}>
                            Country Inspector
                          </h4>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                          {TASK1_DATA.graphData.countries.map((c) => {
                            const isSelected = selectedCountry.id === c.id;
                            return (
                              <button
                                key={c.id}
                                type="button"
                                onClick={() => {
                                  setSelectedCountry(c);
                                  setHighlightMode(c.id as GraphHighlightMode);
                                }}
                                style={{
                                  padding: "8px",
                                  borderRadius: "8px",
                                  fontSize: "0.8rem",
                                  fontWeight: 750,
                                  background: isSelected ? c.color : "#ffffff",
                                  color: isSelected ? "#ffffff" : "var(--slate-800)",
                                  border: isSelected ? `2px solid ${c.color}` : "1px solid var(--border-subtle)",
                                  cursor: "pointer"
                                }}
                              >
                                {c.name}
                              </button>
                            );
                          })}
                        </div>

                        <div
                          style={{
                            background: "#ffffff",
                            border: `1.5px solid ${selectedCountry.color}`,
                            borderRadius: "14px",
                            padding: "16px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px"
                          }}
                        >
                          <strong style={{ fontSize: "1.1rem", color: selectedCountry.color }}>
                            {selectedCountry.name}
                          </strong>
                          <span className="apple-badge neutral" style={{ alignSelf: "flex-start", fontSize: "0.72rem" }}>
                            {selectedCountry.badge}
                          </span>

                          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "4px", background: "var(--slate-50)", padding: "8px", borderRadius: "8px", textAlign: "center" }}>
                            {selectedCountry.dataPoints.map((pt) => (
                              <div key={pt.year}>
                                <div style={{ fontSize: "0.68rem", color: "var(--slate-500)" }}>{pt.year}</div>
                                <div style={{ fontSize: "0.88rem", fontWeight: 800, color: selectedCountry.color }}>{pt.value}t</div>
                              </div>
                            ))}
                          </div>

                          <p style={{ fontSize: "0.85rem", color: "var(--slate-700)", margin: 0, lineHeight: 1.45 }}>
                            {selectedCountry.trendSummary}
                          </p>

                          <div style={{ fontSize: "0.82rem", fontStyle: "italic", color: "var(--slate-800)", borderLeft: `3px solid ${selectedCountry.color}`, paddingLeft: "8px" }}>
                            {selectedCountry.band9Phrase}
                          </div>
                        </div>

                        {/* Quick Crossovers Card */}
                        <div style={{ background: "#ffffff", border: "1.5px solid #fde68a", borderRadius: "14px", padding: "14px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px", color: "#92400e" }}>
                            <GitCommit size={15} />
                            <strong style={{ fontSize: "0.88rem" }}>Key Inflection Points:</strong>
                          </div>
                          <div style={{ fontSize: "0.8rem", color: "#78350f", lineHeight: 1.45 }}>
                            • <strong>1987:</strong> Italy overtakes Sweden (~6.8t)<br />
                            • <strong>2007:</strong> Sweden &amp; Portugal converge (5.4t)
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* 2. Bits & Pieces Mindmap in Entire Screen */}
                {viewMode === "mindmap" && (
                  <div style={{ flex: 1, height: "100%", overflow: "hidden" }}>
                    <BitsAndPiecesMindmap isEntireScreen={true} />
                  </div>
                )}

                {/* 3. Bits & Pieces Flashcards in Entire Screen */}
                {viewMode === "flashcards" && (
                  <div style={{ flex: 1, height: "100%", overflow: "hidden", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", maxWidth: "1200px", height: "100%" }}>
                      <BitsAndPiecesFlashcards isEntireScreen={true} />
                    </div>
                  </div>
                )}

                {/* 4. Original Exam Graph in Entire Screen */}
                {viewMode === "original_image" && (
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#0f172a",
                      overflow: "auto",
                      padding: "20px"
                    }}
                  >
                    <div
                      style={{
                        transform: `scale(${zoomLevel})`,
                        transformOrigin: "center center",
                        transition: "transform 0.15s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <img
                        src={`materials/${TASK1_DATA.imageFileName}`}
                        alt="Original IELTS Task 1 Test Paper Graph"
                        style={{
                          maxWidth: "90vw",
                          maxHeight: "85vh",
                          objectFit: "contain",
                          borderRadius: "10px",
                          boxShadow: "0 10px 40px rgba(0,0,0,0.6)"
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
