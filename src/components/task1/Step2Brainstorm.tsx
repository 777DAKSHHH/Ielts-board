import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Maximize2,
  X,
  Tv,
  Map,
  HelpCircle,
  ImageIcon,
  Columns,
  Sparkles,
  BarChart3,
  Disc,
  Rows
} from "lucide-react";
import {
  TASK1_DATA,
  MUSIC_FORMATS,
  COUNTRY_MARKETS,
  TASK1_HOTSPOTS
} from "../../data/task1Data";
import { TouchTimer } from "../common/TouchTimer";
import { SmartBoardTableMatrix, DiagramViewMode } from "./SmartBoardGraphSvg";
import { BitsAndPiecesMindmap } from "./BitsAndPiecesMindmap";
import { BitsAndPiecesFlashcards } from "./BitsAndPiecesFlashcards";

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
    "smartboard_table" | "mindmap" | "flashcards" | "original_image"
  >("smartboard_table");
  const [stageLayout, setStageLayout] = useState<"full_width" | "split">("full_width");
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [fullscreenGraphLayout, setFullscreenGraphLayout] = useState<"split" | "stacked">("split");
  const [selectedHotspotId, setSelectedHotspotId] = useState<string>(TASK1_HOTSPOTS[0].id);
  const [highlightMode, setHighlightMode] = useState<DiagramViewMode>("all");

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

  const handleSelectViewMode = (
    mode: "smartboard_table" | "mindmap" | "flashcards" | "original_image"
  ) => {
    setViewMode(mode);
  };

  const openFullscreen = () => {
    setIsEnlarged(true);
  };

  const selectedHotspot =
    TASK1_HOTSPOTS.find((h) => h.id === selectedHotspotId) || TASK1_HOTSPOTS[0];

  return (
    <div className="stage-card-wrapper" style={{ width: "100%", minWidth: 0 }}>
      {/* Step Header */}
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 02 / 08 • Task Prompt &amp; Bar Graph Engine
        </span>
        <h2 className="stage-title">Deconstruct the SMG Entertainment Dual Bar Charts (1997 vs 2007)</h2>
        <p className="stage-subtitle">
          Examine the prompt, deconstruct the 5 audio distribution formats across Germany, France, and Italy, track the collapse of legacy analog media to zero, and contrast retail CD drops against the emergence of online orders and digital downloads.
        </p>
      </div>

      {/* Focus Timer */}
      <div style={{ marginBottom: "14px" }}>
        <TouchTimer
          formattedTime={formattedTime}
          isRunning={isRunning}
          isFinished={isFinished}
          onToggle={onTimerToggle}
          onReset={onTimerReset}
          instruction="Focus Timer: 3 minutes to analyze the two bar charts, identify the dominant shop CD category, note the extinction of cassettes/vinyl, and trace the rise of digital downloads."
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
          boxShadow: "var(--shadow-sm)",
          width: "100%"
        }}
      >
        {/* 4 View Mode Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--slate-800)", marginRight: "4px" }}>
            BOARD TEACHING VIEW:
          </span>

          <button
            type="button"
            onClick={() => handleSelectViewMode("smartboard_table")}
            className="apple-touch-btn"
            style={{
              padding: "7px 14px",
              fontSize: "0.78rem",
              fontWeight: 750,
              background: viewMode === "smartboard_table" ? "var(--slate-900)" : "var(--slate-100)",
              color: viewMode === "smartboard_table" ? "#ffffff" : "var(--slate-700)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <BarChart3 size={14} /> 4K Bar Graph Engine
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
            <ImageIcon size={14} /> Original Exam Pamphlet
          </button>
        </div>

        {/* Layout & Fullscreen Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <button
            type="button"
            onClick={() => setStageLayout(stageLayout === "full_width" ? "split" : "full_width")}
            className="apple-touch-btn secondary"
            style={{
              padding: "7px 12px",
              fontSize: "0.76rem",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "5px"
            }}
          >
            <Columns size={13} />
            {stageLayout === "full_width" ? "Split Prompt View" : "Full Stage View"}
          </button>

          <button
            type="button"
            onClick={openFullscreen}
            className="apple-touch-btn primary"
            style={{
              padding: "7px 14px",
              fontSize: "0.76rem",
              fontWeight: 750,
              display: "flex",
              alignItems: "center",
              gap: "5px"
            }}
          >
            <Maximize2 size={13} /> Fullscreen
          </button>
        </div>
      </div>

      {/* STAGE CONTAINER: FULL-WIDTH OR SPLIT VIEW */}
      {stageLayout === "full_width" ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", minWidth: 0 }}>
          {/* Main Visual Display */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "16px",
              boxShadow: "var(--shadow-sm)",
              width: "100%",
              minWidth: 0
            }}
          >
            {viewMode === "smartboard_table" && (
              <SmartBoardTableMatrix
                highlightMode={highlightMode}
                onHighlightModeChange={(mode) => setHighlightMode(mode)}
                showInternalToolbar={true}
                showDeepDiveCard={true}
              />
            )}

            {viewMode === "mindmap" && <BitsAndPiecesMindmap />}

            {viewMode === "flashcards" && <BitsAndPiecesFlashcards />}

            {viewMode === "original_image" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                  background: "#f8fafc",
                  borderRadius: "14px",
                  minHeight: "440px"
                }}
              >
                <img
                  src={`materials/${TASK1_DATA.imageFileName}`}
                  alt="IELTS Academic Task 1 SMG Entertainment Bar Graphs"
                  style={{
                    maxHeight: "560px",
                    maxWidth: "100%",
                    objectFit: "contain",
                    borderRadius: "10px",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                    border: "1px solid var(--border-subtle)"
                  }}
                />
                <div style={{ marginTop: "12px", color: "var(--slate-600)", fontSize: "0.82rem", fontWeight: 600 }}>
                  Official Cambridge IELTS Academic Question Diagram • SMG Entertainment Bar Graphs (1997 vs 2007)
                </div>
              </div>
            )}
          </div>

          {/* Under-Diagram 2-Col Strip: Prompt Card + Hotspots Inspector */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "14px", width: "100%" }}>
            {/* Task Prompt Card */}
            <div
              style={{
                background: "var(--slate-50)",
                border: "1.5px solid var(--border-subtle)",
                borderRadius: "18px",
                padding: "18px 20px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <FileText size={17} color="var(--slate-800)" />
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                    IELTS Academic Writing Task 1
                  </h4>
                </div>
                <span className="apple-badge accent">{TASK1_DATA.taskType}</span>
              </div>
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "12px",
                  padding: "14px 16px",
                  fontSize: "0.95rem",
                  fontWeight: 650,
                  lineHeight: 1.5,
                  boxShadow: "var(--shadow-sm)",
                  color: "var(--slate-900)"
                }}
              >
                {TASK1_DATA.questionText.split("\n\n").map((chunk, i) => (
                  <p key={i} style={{ marginBottom: i < 2 ? "6px" : 0 }}>
                    {chunk}
                  </p>
                ))}
              </div>
            </div>

            {/* Strategic Hotspots Quick Inspector */}
            <div
              style={{
                background: "#ffffff",
                border: "1.5px solid var(--border-subtle)",
                borderRadius: "18px",
                padding: "18px 20px",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Sparkles size={17} color="var(--apple-blue)" />
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                    Strategic Comparison Hotspots
                  </h4>
                </div>
                <span className="apple-badge neutral" style={{ fontSize: "0.7rem" }}>
                  Tap hotspot to view
                </span>
              </div>

              {/* Hotspot Selector Chips */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                {TASK1_HOTSPOTS.map((h) => {
                  const isSelected = selectedHotspotId === h.id;
                  return (
                    <button
                      key={h.id}
                      type="button"
                      onClick={() => setSelectedHotspotId(h.id)}
                      style={{
                        padding: "7px 10px",
                        borderRadius: "8px",
                        fontSize: "0.76rem",
                        fontWeight: 750,
                        border: isSelected ? "1.5px solid var(--slate-900)" : "1px solid var(--border-subtle)",
                        background: isSelected ? "var(--slate-900)" : "var(--slate-50)",
                        color: isSelected ? "#ffffff" : "var(--slate-800)",
                        cursor: "pointer",
                        textAlign: "left",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      }}
                    >
                      {h.title}
                    </button>
                  );
                })}
              </div>

              {/* Active Hotspot Details */}
              <div
                style={{
                  background: "var(--slate-50)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "12px",
                  padding: "12px 14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  fontSize: "0.82rem"
                }}
              >
                <div>
                  <strong style={{ color: "var(--slate-900)" }}>1997 Baseline:</strong>{" "}
                  {selectedHotspot.normalState}
                </div>
                <div>
                  <strong style={{ color: "var(--slate-900)" }}>2007 Transformation:</strong>{" "}
                  {selectedHotspot.elNinoState}
                </div>
                <div style={{ marginTop: "4px", fontStyle: "italic", color: "var(--slate-800)", borderTop: "1px dashed var(--border-subtle)", paddingTop: "6px" }}>
                  {selectedHotspot.band9Sentence}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* SPLIT 2-COLUMN VIEW (Chart neatly stacked on left so it never glithes or overflows) */
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "16px", width: "100%", alignItems: "start" }}>
          {/* Left Column: Visual Container (Forced stacked so charts fit comfortably) */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "14px",
              boxShadow: "var(--shadow-sm)",
              minWidth: 0
            }}
          >
            {viewMode === "smartboard_table" && (
              <SmartBoardTableMatrix
                highlightMode={highlightMode}
                onHighlightModeChange={(mode) => setHighlightMode(mode)}
                showInternalToolbar={true}
                showDeepDiveCard={false}
                forcedLayoutMode="stacked"
              />
            )}

            {viewMode === "mindmap" && <BitsAndPiecesMindmap />}

            {viewMode === "flashcards" && <BitsAndPiecesFlashcards />}

            {viewMode === "original_image" && (
              <div style={{ textAlign: "center", padding: "10px" }}>
                <img
                  src={`materials/${TASK1_DATA.imageFileName}`}
                  alt="SMG Entertainment Bar Graph"
                  style={{ maxWidth: "100%", maxHeight: "400px", borderRadius: "10px", objectFit: "contain" }}
                />
              </div>
            )}
          </div>

          {/* Right Column: Prompt & Key Highlights */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", minWidth: 0 }}>
            <div
              style={{
                background: "var(--slate-50)",
                border: "1.5px solid var(--border-subtle)",
                borderRadius: "18px",
                padding: "18px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                <span className="apple-badge accent">{TASK1_DATA.taskType}</span>
                <span style={{ fontSize: "0.74rem", color: "var(--slate-500)" }}>150+ Words Required</span>
              </div>
              <div style={{ fontSize: "0.95rem", fontWeight: 650, color: "var(--slate-900)", lineHeight: 1.5 }}>
                {TASK1_DATA.questionText.split("\n\n").map((chunk, i) => (
                  <p key={i} style={{ marginBottom: i < 2 ? "6px" : 0 }}>
                    {chunk}
                  </p>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1.5px solid var(--border-subtle)",
                borderRadius: "18px",
                padding: "18px",
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              }}
            >
              <strong style={{ fontSize: "0.92rem", color: "var(--slate-900)" }}>
                Key Comparison Highlights:
              </strong>
              {TASK1_HOTSPOTS.map((h) => (
                <div
                  key={h.id}
                  style={{
                    background: "var(--slate-50)",
                    padding: "10px 12px",
                    borderRadius: "10px",
                    border: "1px solid var(--border-subtle)",
                    fontSize: "0.82rem"
                  }}
                >
                  <strong style={{ color: "var(--slate-900)" }}>{h.title}:</strong>
                  <div style={{ color: "var(--slate-700)", marginTop: "2px" }}>{h.contrastKey}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FULLSCREEN ENLARGED MODAL (Rock-Solid Board View - Zero Transform Glitches) */}
      <AnimatePresence>
        {isEnlarged && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              display: "flex",
              flexDirection: "column",
              background: "#0f172a",
              overflow: "hidden"
            }}
          >
            {/* Fullscreen Header Bar */}
            <div
              style={{
                padding: "12px 24px",
                background: "#090d16",
                borderBottom: "1px solid #1e293b",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: 0,
                flexWrap: "wrap",
                gap: "12px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Tv size={22} color="var(--apple-blue)" />
                <div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 800, margin: 0, color: "#ffffff" }}>
                    Smart Board Fullscreen Engine • SMG Entertainment Bar Graphs (1997 vs 2007)
                  </h3>
                  <p style={{ fontSize: "0.76rem", color: "#94a3b8", margin: "2px 0 0 0" }}>
                    Germany, France &amp; Italy • Financial Scale: Million Euros (€m)
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {/* Fullscreen Layout Switcher */}
                <div style={{ display: "flex", background: "#1e293b", padding: "3px", borderRadius: "10px", gap: "4px" }}>
                  <button
                    onClick={() => setFullscreenGraphLayout("split")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "5px 12px",
                      borderRadius: "7px",
                      border: "none",
                      background: fullscreenGraphLayout === "split" ? "var(--apple-blue)" : "transparent",
                      color: "#ffffff",
                      fontSize: "0.76rem",
                      fontWeight: 750,
                      cursor: "pointer"
                    }}
                  >
                    <Columns size={13} /> Side-by-Side (Widescreen)
                  </button>
                  <button
                    onClick={() => setFullscreenGraphLayout("stacked")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "5px 12px",
                      borderRadius: "7px",
                      border: "none",
                      background: fullscreenGraphLayout === "stacked" ? "var(--apple-blue)" : "transparent",
                      color: "#ffffff",
                      fontSize: "0.76rem",
                      fontWeight: 750,
                      cursor: "pointer"
                    }}
                  >
                    <Rows size={13} /> Stacked (Exam Order)
                  </button>
                </div>

                <button
                  onClick={() => setIsEnlarged(false)}
                  style={{
                    background: "#ef4444",
                    border: "none",
                    color: "#ffffff",
                    padding: "7px 16px",
                    borderRadius: "9px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontWeight: 750,
                    fontSize: "0.82rem"
                  }}
                >
                  <X size={15} /> Exit Fullscreen (Esc)
                </button>
              </div>
            </div>

            {/* Fullscreen Scrollable Content */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "20px 28px",
                background: "#f1f5f9",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: "1500px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px"
                }}
              >
                <SmartBoardTableMatrix
                  highlightMode={highlightMode}
                  onHighlightModeChange={(mode) => setHighlightMode(mode)}
                  showInternalToolbar={true}
                  showDeepDiveCard={true}
                  forcedLayoutMode={fullscreenGraphLayout}
                />
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
