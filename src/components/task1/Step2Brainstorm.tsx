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
  GitCommit,
  Columns,
  Maximize,
  Compass,
  CheckCircle2,
  School
} from "lucide-react";
import { TASK1_DATA, SCHOOLS_DATA } from "../../data/task1Data";
import { TouchTimer } from "../common/TouchTimer";
import { SmartBoardTableMatrix, TableHighlightMode } from "./SmartBoardGraphSvg";
import { BitsAndPiecesMindmap } from "./BitsAndPiecesMindmap";
import { BitsAndPiecesFlashcards } from "./BitsAndPiecesFlashcards";
import { SchoolData } from "../../types/task1";

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
  // Default to full_width so the table matrix has generous 8-column space with large clear numbers
  const [stageLayout, setStageLayout] = useState<"split" | "full_width">("full_width");
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const schoolsList = SCHOOLS_DATA;
  const [selectedSchool, setSelectedSchool] = useState<SchoolData>(schoolsList[0]);
  const [highlightMode, setHighlightMode] = useState<TableHighlightMode>("all");

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

  const handleTableSelectSchool = (schoolId: string) => {
    const found = schoolsList.find((c) => c.id === schoolId);
    if (found) {
      setSelectedSchool(found);
    }
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
          Step 02 / 08 • Task Prompt &amp; Table Analysis
        </span>
        <h2 className="stage-title">Deconstruct the Higher Education Progression Table (1995–2000)</h2>
        <p className="stage-subtitle">
          Examine the prompt, identify the contrasting trajectories (Harble &amp; Fairfield rising vs. Greystone falling), and note the 1997 equalisation &amp; 1999 triple convergence milestones.
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
          instruction="Focus Timer: 3 minutes to analyze the five secondary schools, group the risers vs. decliner, and pinpoint the 1997 (75%) equalisation and 1999 (60%) triple convergence points."
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
            <Tv size={14} /> 4K Table Matrix
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
            <ImageIcon size={14} /> Original Task Table
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
            title={stageLayout === "split" ? "Expand Visual to Full Stage Width (Recommended for Table)" : "Switch to 2-Column Split View"}
          >
            {stageLayout === "split" ? (
              <>
                <Maximize size={13} /> Full Width Table View
              </>
            ) : (
              <>
                <Columns size={13} /> Split View (Prompt + Table)
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

      {/* STAGE VIEWPORT (Full Width Recommended vs Split Mode) */}
      {stageLayout === "full_width" ? (
        /* Full Width Stage Layout: Generous Horizontal Space For Perfect Table Readability */
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Main Visual Display Full Width */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: viewMode === "smartboard_table" ? "0" : "20px",
              boxShadow: "var(--shadow-sm)",
              minHeight: "560px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden"
            }}
          >
            {viewMode === "smartboard_table" && (
              <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%", minHeight: "560px" }}>
                <SmartBoardTableMatrix
                  selectedCountryId={selectedSchool.id}
                  onSelectCountry={handleTableSelectSchool}
                  highlightMode={highlightMode}
                  onHighlightModeChange={setHighlightMode}
                  showInternalToolbar={true}
                  showDeepDiveCard={false}
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
                  alt="Original IELTS Task 1 Test Paper Table"
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

          {/* Lower Pedagogical Deconstruction Section: Task Prompt & Analysis Side-by-Side */}
          <div className="stage-grid-2col" style={{ alignItems: "stretch", gap: "16px" }}>
            {/* 1. Official Task 1 Question Prompt */}
            <div
              style={{
                background: "var(--slate-50)",
                border: "1.5px solid var(--border-subtle)",
                borderRadius: "20px",
                padding: "20px 22px",
                display: "flex",
                flexDirection: "column",
                gap: "12px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <FileText size={18} color="var(--slate-800)" />
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 750, margin: 0 }}>
                    Official IELTS Task 1 Prompt
                  </h4>
                </div>
                <span className="apple-badge accent">{TASK1_DATA.taskType}</span>
              </div>

              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "14px",
                  padding: "16px 18px",
                  fontSize: "1.02rem",
                  fontWeight: 650,
                  lineHeight: 1.6,
                  color: "var(--slate-900)",
                  boxShadow: "var(--shadow-sm)"
                }}
              >
                {TASK1_DATA.questionText.split("\n\n").map((chunk, i) => (
                  <p key={i} style={{ margin: i === 0 ? "0 0 8px 0" : "0" }}>
                    {chunk}
                  </p>
                ))}
              </div>

              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", fontSize: "0.76rem" }}>
                <span className="apple-badge neutral">150+ Words Minimum</span>
                <span className="apple-badge neutral">~20 Minutes Recommended</span>
                <span className="apple-badge neutral">Unit: Percentage of leavers (%)</span>
              </div>
            </div>

            {/* 2. Interactive Table Deconstruction Pillars */}
            <div
              style={{
                background: "#ffffff",
                border: "1.5px solid var(--border-subtle)",
                borderRadius: "20px",
                padding: "20px 22px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                boxShadow: "var(--shadow-sm)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Compass size={18} color="var(--apple-blue)" />
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 750, margin: 0 }}>
                    Table Analysis &amp; Core Pillars
                  </h4>
                </div>
                <span className="apple-badge neutral" style={{ fontSize: "0.72rem" }}>
                  4 Essential Anchors
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.86rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                  <CheckCircle2 size={16} color="var(--apple-blue)" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span><strong>Metric &amp; Scope:</strong> Tracks the percentage of secondary school leavers entering higher/tertiary education across 5 institutions from 1995 to 2000.</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                  <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span><strong>Macro 4-to-1 Dichotomy:</strong> 4 institutions expanded (Harble, Fairfield, Royston, Crackend), while Greystone High was the sole continuous decliner (90% down to 70%).</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                  <CheckCircle2 size={16} color="#7c3aed" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span><strong>1997 &amp; 1999 Milestones:</strong> 1997 equalisation between Fairfield &amp; Greystone at 75%; 1999 triple convergence among Royston, Harble &amp; Crackend at 60%.</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                  <CheckCircle2 size={16} color="#d97706" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span><strong>Hierarchy Inversion:</strong> Harble surged from last place (30%) to finish 1st (80%), nearly tripling its baseline.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Split 2-Column Mode */
        <div className="stage-grid-2col" style={{ alignItems: "stretch", minHeight: "540px" }}>
          {/* Left Column: Visual Display Container */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: viewMode === "smartboard_table" ? "0" : "18px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxShadow: "var(--shadow-sm)",
              minHeight: "530px"
            }}
          >
            {viewMode === "smartboard_table" && (
              <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
                <SmartBoardTableMatrix
                  selectedCountryId={selectedSchool.id}
                  onSelectCountry={handleTableSelectSchool}
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
                  alt="Original IELTS Task 1 Test Paper Table"
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

          {/* Right Column: Prompt Card + School Analysis */}
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
                  fontSize: "1.02rem",
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

            {/* School Quick Inspector */}
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
                  <School size={18} color="var(--apple-blue)" />
                  <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--slate-900)" }}>
                    Secondary School Inspector
                  </h4>
                </div>
                <span className="apple-badge neutral" style={{ fontSize: "0.72rem" }}>
                  Tap school to inspect
                </span>
              </div>

              {/* School Selector Pills in Exam Order */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "6px" }}>
                {schoolsList.map((c) => {
                  const isSelected = selectedSchool.id === c.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => {
                        setSelectedSchool(c);
                        setHighlightMode(c.id as TableHighlightMode);
                      }}
                      style={{
                        padding: "8px 2px",
                        borderRadius: "10px",
                        fontSize: "0.76rem",
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

              {/* Active School Detail Box */}
              <div
                style={{
                  background: "var(--slate-50)",
                  border: `1.5px solid ${selectedSchool.color}`,
                  borderRadius: "14px",
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "6px" }}>
                  <strong style={{ fontSize: "1.02rem", color: selectedSchool.color }}>
                    {selectedSchool.name}
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
                    {selectedSchool.netChange}
                  </span>
                </div>

                {/* Data points summary row (6 years) */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(6, 1fr)",
                    gap: "4px",
                    background: "#ffffff",
                    padding: "8px",
                    borderRadius: "10px",
                    border: "1px solid var(--border-subtle)",
                    textAlign: "center"
                  }}
                >
                  {selectedSchool.dataPoints.map((pt) => (
                    <div key={pt.year}>
                      <div style={{ fontSize: "0.68rem", fontWeight: 700, color: "var(--slate-500)" }}>
                        {pt.year}
                      </div>
                      <div style={{ fontSize: "0.95rem", fontWeight: 800, color: selectedSchool.color }}>
                        {pt.value}%
                      </div>
                    </div>
                  ))}
                </div>

                <p style={{ fontSize: "0.85rem", color: "var(--slate-700)", margin: 0, lineHeight: 1.45 }}>
                  {selectedSchool.trendSummary}
                </p>

                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    borderLeft: `3px solid ${selectedSchool.color}`,
                    fontSize: "0.82rem",
                    fontStyle: "italic",
                    color: "var(--slate-800)",
                    lineHeight: 1.4
                  }}
                >
                  {selectedSchool.band9Phrase}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FULLSCREEN SMART BOARD MODAL */}
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
                      Smart Board Entire Screen Engine • Higher Education Progression Table (1995–2000)
                    </h3>
                    <p style={{ fontSize: "0.74rem", color: "#94a3b8", margin: 0 }}>
                      Royston, Greystone, Harble, Fairfield, Crackend • Unit: Percentage (%)
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
                    <Tv size={13} /> 4K Table Matrix
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
                    <ImageIcon size={13} /> Original Exam Table
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

              {/* Fullscreen Body */}
              <div style={{ flex: 1, display: "flex", overflow: "hidden", minHeight: 0 }}>
                {/* 1. 4K Table Matrix in Fullscreen */}
                {viewMode === "smartboard_table" && (
                  <>
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "stretch",
                        justifyContent: "flex-start",
                        background: "#ffffff",
                        overflowY: "auto",
                        overflowX: "auto",
                        padding: "16px"
                      }}
                    >
                      <div
                        style={{
                          transform: `scale(${zoomLevel})`,
                          transformOrigin: "top center",
                          transition: "transform 0.15s ease",
                          width: "100%",
                          maxWidth: "1350px",
                          margin: "0 auto"
                        }}
                      >
                        <SmartBoardTableMatrix
                          selectedCountryId={selectedSchool.id}
                          onSelectCountry={handleTableSelectSchool}
                          highlightMode={highlightMode}
                          onHighlightModeChange={setHighlightMode}
                          showInternalToolbar={true}
                          showDeepDiveCard={!fullscreenShowInspector}
                        />
                      </div>
                    </div>

                    {fullscreenShowInspector && (
                      <div
                        style={{
                          width: "350px",
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
                          <School size={18} color="var(--apple-blue)" />
                          <h4 style={{ fontSize: "1rem", fontWeight: 800, margin: 0 }}>
                            Secondary School Inspector
                          </h4>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                          {schoolsList.map((c) => {
                            const isSelected = selectedSchool.id === c.id;
                            return (
                              <button
                                key={c.id}
                                type="button"
                                onClick={() => {
                                  setSelectedSchool(c);
                                  setHighlightMode(c.id as TableHighlightMode);
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
                            border: `1.5px solid ${selectedSchool.color}`,
                            borderRadius: "14px",
                            padding: "16px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px"
                          }}
                        >
                          <strong style={{ fontSize: "1.1rem", color: selectedSchool.color }}>
                            {selectedSchool.name}
                          </strong>
                          <span className="apple-badge neutral" style={{ alignSelf: "flex-start", fontSize: "0.72rem" }}>
                            {selectedSchool.badge}
                          </span>

                          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "4px", background: "var(--slate-50)", padding: "8px", borderRadius: "8px", textAlign: "center" }}>
                            {selectedSchool.dataPoints.map((pt) => (
                              <div key={pt.year}>
                                <div style={{ fontSize: "0.68rem", color: "var(--slate-500)" }}>{pt.year}</div>
                                <div style={{ fontSize: "0.92rem", fontWeight: 800, color: selectedSchool.color }}>{pt.value}%</div>
                              </div>
                            ))}
                          </div>

                          <p style={{ fontSize: "0.85rem", color: "var(--slate-700)", margin: 0, lineHeight: 1.45 }}>
                            {selectedSchool.trendSummary}
                          </p>

                          <div style={{ fontSize: "0.82rem", fontStyle: "italic", color: "var(--slate-800)", borderLeft: `3px solid ${selectedSchool.color}`, paddingLeft: "8px" }}>
                            {selectedSchool.band9Phrase}
                          </div>
                        </div>

                        {/* Quick Milestones Card */}
                        <div style={{ background: "#ffffff", border: "1.5px solid #fde68a", borderRadius: "14px", padding: "14px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px", color: "#92400e" }}>
                            <GitCommit size={15} />
                            <strong style={{ fontSize: "0.88rem" }}>Key Table Milestones:</strong>
                          </div>
                          <div style={{ fontSize: "0.8rem", color: "#78350f", lineHeight: 1.5 }}>
                            • <strong>1997:</strong> Fairfield &amp; Greystone equalised at 75%<br />
                            • <strong>1999:</strong> Royston, Harble &amp; Crackend triple tie at 60%<br />
                            • <strong>2000:</strong> Harble 1st place (80%) vs. Greystone 3rd (70%)
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

                {/* 4. Original Exam Table in Entire Screen */}
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
                        alt="Original IELTS Task 1 Test Paper Table"
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
