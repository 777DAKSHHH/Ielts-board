import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
  Tv,
  Map,
  HelpCircle,
  ImageIcon,
  Columns,
  Maximize,
  Compass
} from "lucide-react";
import { TASK1_DATA, PACIFIC_CONDITIONS, COMPARISON_HOTSPOTS } from "../../data/task1Data";
import { TouchTimer } from "../common/TouchTimer";
import { SmartBoardTableMatrix, DiagramViewMode } from "./SmartBoardGraphSvg";
import { BitsAndPiecesMindmap } from "./BitsAndPiecesMindmap";
import { BitsAndPiecesFlashcards } from "./BitsAndPiecesFlashcards";
import { PacificConditionFeature } from "../../types/task1";

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
  const [stageLayout, setStageLayout] = useState<"split" | "full_width">("full_width");
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const [selectedCondition, setSelectedCondition] = useState<PacificConditionFeature>(PACIFIC_CONDITIONS[0]);
  const [highlightMode, setHighlightMode] = useState<DiagramViewMode>("all");

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

  const handleSelectViewMode = (
    mode: "smartboard_table" | "mindmap" | "flashcards" | "original_image"
  ) => {
    setViewMode(mode);
  };

  const openFullscreen = () => {
    setZoomLevel(1);
    setIsEnlarged(true);
  };

  return (
    <div className="stage-card-wrapper">
      {/* Step Header */}
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 02 / 08 • Task Prompt &amp; Diagram Analysis
        </span>
        <h2 className="stage-title">Deconstruct the Normal vs. El Niño Pacific Comparative Diagrams</h2>
        <p className="stage-subtitle">
          Examine the prompt, deconstruct the dual ocean cross-sections (trade winds, warm pool displacement, and cold upwelling), and contrast the regional climatic impacts on Australia and Peru.
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
          instruction="Focus Timer: 3 minutes to analyze the two Pacific diagrams, compare the atmospheric trade winds and water layers, and note the rainfall vs. drought and fishery shifts."
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
            <Tv size={14} /> 4K Diagram Engine
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
            <ImageIcon size={14} /> Original Exam Diagram
          </button>
        </div>

        {/* Layout & Entire Screen Triggers */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Layout Toggle */}
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
                <Maximize size={13} /> Full Width Diagram View
              </>
            ) : (
              <>
                <Columns size={13} /> Split View (Prompt + Diagram)
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
              display: "flex",
              alignItems: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
            }}
          >
            <Maximize2 size={14} /> Entire Screen Mode
          </button>
        </div>
      </div>

      {/* STAGE MAIN CONTENT AREA */}
      {stageLayout === "full_width" ? (
        /* FULL WIDTH VISUAL VIEW */
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Main Visual Display */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "16px",
              boxShadow: "var(--shadow-sm)"
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
                  alt="IELTS Academic Task 1 Pacific Ocean Diagram"
                  style={{
                    maxHeight: "520px",
                    maxWidth: "100%",
                    objectFit: "contain",
                    borderRadius: "10px",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                    border: "1px solid var(--border-subtle)"
                  }}
                />
                <div style={{ marginTop: "12px", color: "var(--slate-600)", fontSize: "0.82rem", fontWeight: 600 }}>
                  Official Cambridge IELTS Academic Question Diagram • Pacific Ocean Normal vs. El Niño
                </div>
              </div>
            )}
          </div>

          {/* Under-Diagram 2-Col Strip: Prompt Card + System Inspector */}
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "14px" }}>
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

            {/* Pacific System Quick Inspector */}
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
                  <Compass size={17} color="var(--apple-blue)" />
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                    Climatic System Inspector
                  </h4>
                </div>
                <span className="apple-badge neutral" style={{ fontSize: "0.7rem" }}>
                  Tap condition to inspect
                </span>
              </div>

              {/* Condition Selector Pills */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {PACIFIC_CONDITIONS.map((cond) => {
                  const isSelected = selectedCondition.id === cond.id;
                  const isNormal = cond.id === "normal";
                  return (
                    <button
                      key={cond.id}
                      type="button"
                      onClick={() => {
                        setSelectedCondition(cond);
                        setHighlightMode(cond.id as DiagramViewMode);
                      }}
                      style={{
                        padding: "8px 12px",
                        borderRadius: "10px",
                        fontSize: "0.8rem",
                        fontWeight: 750,
                        border: isSelected
                          ? `2px solid ${isNormal ? "#0284c7" : "#dc2626"}`
                          : "1.5px solid var(--border-subtle)",
                        background: isSelected
                          ? isNormal ? "#0284c7" : "#dc2626"
                          : "var(--slate-50)",
                        color: isSelected ? "#ffffff" : "var(--slate-800)",
                        cursor: "pointer",
                        textAlign: "center",
                        transition: "all 0.15s ease"
                      }}
                    >
                      {cond.title}
                    </button>
                  );
                })}
              </div>

              {/* Active Condition Details */}
              <div
                style={{
                  background: selectedCondition.id === "normal" ? "#f0f9ff" : "#fff1f2",
                  border: `1.5px solid ${selectedCondition.id === "normal" ? "#bae6fd" : "#fecaca"}`,
                  borderRadius: "12px",
                  padding: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  fontSize: "0.82rem"
                }}
              >
                <div>
                  <strong style={{ color: "var(--slate-900)" }}>💨 Atmospheric Winds:</strong>{" "}
                  {selectedCondition.tradeWinds}
                </div>
                <div>
                  <strong style={{ color: "var(--slate-900)" }}>🌊 Ocean Currents:</strong>{" "}
                  {selectedCondition.waterThermocline}
                </div>
                <div>
                  <strong style={{ color: "var(--slate-900)" }}>🇦🇺 Australia:</strong>{" "}
                  {selectedCondition.australiaCondition.climate}
                </div>
                <div>
                  <strong style={{ color: "var(--slate-900)" }}>🇵🇪 Peru:</strong>{" "}
                  {selectedCondition.peruCondition.fisheryStatus}
                </div>
                <div style={{ marginTop: "4px", fontStyle: "italic", color: "var(--slate-800)", borderTop: "1px dashed var(--border-subtle)", paddingTop: "6px" }}>
                  {selectedCondition.band9Phrase}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* SPLIT 2-COLUMN VIEW */
        <div className="stage-grid-2col">
          {/* Left Column: Visual Container */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "14px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            {viewMode === "smartboard_table" && (
              <SmartBoardTableMatrix
                highlightMode={highlightMode}
                onHighlightModeChange={(mode) => setHighlightMode(mode)}
                showInternalToolbar={true}
                showDeepDiveCard={false}
              />
            )}

            {viewMode === "mindmap" && <BitsAndPiecesMindmap />}

            {viewMode === "flashcards" && <BitsAndPiecesFlashcards />}

            {viewMode === "original_image" && (
              <div style={{ textAlign: "center", padding: "10px" }}>
                <img
                  src={`materials/${TASK1_DATA.imageFileName}`}
                  alt="Pacific Ocean El Nino Diagram"
                  style={{ maxWidth: "100%", maxHeight: "400px", borderRadius: "10px", objectFit: "contain" }}
                />
              </div>
            )}
          </div>

          {/* Right Column: Prompt & Inspector */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {/* Prompt */}
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

            {/* Quick Summary Highlights */}
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
              {COMPARISON_HOTSPOTS.slice(0, 3).map((h) => (
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

      {/* FULLSCREEN ENLARGED MODAL (Entire Screen Mode) */}
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
                      Smart Board Entire Screen Engine • Pacific Ocean Normal vs. El Niño
                    </h3>
                    <p style={{ fontSize: "0.74rem", color: "#94a3b8", margin: 0 }}>
                      Atmospheric Winds, Warm Pool Displacement, Nutrient Upwelling &amp; Ecological Inversion
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
                    onClick={() => setViewMode("smartboard_table")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "6px 12px",
                      fontSize: "0.78rem",
                      fontWeight: 750,
                      borderRadius: "8px",
                      border: "none",
                      background: viewMode === "smartboard_table" ? "var(--apple-blue)" : "transparent",
                      color: "#ffffff",
                      cursor: "pointer"
                    }}
                  >
                    <Tv size={13} /> 4K Diagram Engine
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
                    <ImageIcon size={13} /> Original Exam Diagram
                  </button>
                </div>

                {/* Right Contextual Controls */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  {(viewMode === "smartboard_table" || viewMode === "original_image") && (
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

                  {/* Inspector Toggle */}
                  {viewMode === "smartboard_table" && (
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

              {/* Fullscreen Body Content */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  overflow: "hidden",
                  background: "#f1f5f9"
                }}
              >
                {/* Left/Center Visual Stage */}
                <div
                  style={{
                    flex: 1,
                    overflowY: "auto",
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "1600px",
                      transform: `scale(${zoomLevel})`,
                      transformOrigin: "top center",
                      transition: "transform 0.15s ease"
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
                          padding: "24px",
                          background: "#ffffff",
                          borderRadius: "16px",
                          boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
                        }}
                      >
                        <img
                          src={`materials/${TASK1_DATA.imageFileName}`}
                          alt="Official Cambridge IELTS Pacific Diagram"
                          style={{
                            maxHeight: "82vh",
                            maxWidth: "96%",
                            objectFit: "contain",
                            borderRadius: "12px",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Side Inspector Drawer in Fullscreen */}
                {viewMode === "smartboard_table" && fullscreenShowInspector && (
                  <div
                    style={{
                      width: "360px",
                      background: "#ffffff",
                      borderLeft: "1.5px solid var(--border-subtle)",
                      display: "flex",
                      flexDirection: "column",
                      padding: "18px",
                      overflowY: "auto",
                      gap: "14px",
                      flexShrink: 0
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)" }}>
                        Pacific Systems Inspector
                      </strong>
                      <span className="apple-badge accent" style={{ fontSize: "0.68rem" }}>
                        Interactive
                      </span>
                    </div>

                    {/* Condition selection */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                      {PACIFIC_CONDITIONS.map((cond) => {
                        const isSelected = selectedCondition.id === cond.id;
                        return (
                          <button
                            key={cond.id}
                            type="button"
                            onClick={() => {
                              setSelectedCondition(cond);
                              setHighlightMode(cond.id as DiagramViewMode);
                            }}
                            style={{
                              padding: "7px 10px",
                              borderRadius: "8px",
                              fontSize: "0.75rem",
                              fontWeight: 750,
                              background: isSelected ? "var(--slate-900)" : "var(--slate-100)",
                              color: isSelected ? "#ffffff" : "var(--slate-800)",
                              border: "none",
                              cursor: "pointer"
                            }}
                          >
                            {cond.title}
                          </button>
                        );
                      })}
                    </div>

                    {/* Details */}
                    <div
                      style={{
                        background: "var(--slate-50)",
                        borderRadius: "12px",
                        padding: "12px",
                        border: "1px solid var(--border-subtle)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                        fontSize: "0.82rem"
                      }}
                    >
                      <div>
                        <strong style={{ color: "var(--slate-900)" }}>Winds:</strong> {selectedCondition.tradeWinds}
                      </div>
                      <div>
                        <strong style={{ color: "var(--slate-900)" }}>Water:</strong> {selectedCondition.waterThermocline}
                      </div>
                      <div>
                        <strong style={{ color: "var(--slate-900)" }}>Upwelling:</strong> {selectedCondition.upwellingStatus}
                      </div>
                      <div>
                        <strong style={{ color: "var(--slate-900)" }}>Australia:</strong> {selectedCondition.australiaCondition.climate}
                      </div>
                      <div>
                        <strong style={{ color: "var(--slate-900)" }}>Peru:</strong> {selectedCondition.peruCondition.fisheryStatus}
                      </div>
                    </div>

                    <div style={{ background: "#f8fafc", padding: "12px", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
                      <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "var(--apple-blue)", marginBottom: "4px" }}>
                        BAND 9 OBSERVATION:
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "var(--slate-800)", fontStyle: "italic", lineHeight: 1.4 }}>
                        {selectedCondition.band9Phrase}
                      </div>
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
