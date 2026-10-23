import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Maximize2,
  X,
  Map,
  HelpCircle,
  ImageIcon,
  Columns,
  Sparkles,
  TrendingUp,
  Award,
  Layers,
  CheckCircle2,
  Users,
  Compass,
  ArrowRight,
  ShieldCheck,
  LayoutGrid
} from "lucide-react";
import {
  TASK1_DATA,
  ACTIVITY_DATA,
  ACTIVITY_GENDERS,
  ACTIVITY_HOTSPOTS
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
  // Default to side-by-side split view for zero-scroll on smart boards
  const [stageLayout, setStageLayout] = useState<"split" | "full_width">("split");
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [selectedCohortId, setSelectedCohortId] = useState<string>("35_to_44");
  const [highlightMode, setHighlightMode] = useState<DiagramViewMode>("all");
  const [dockTab, setDockTab] = useState<"cohort" | "prompt" | "hotspots">("cohort");

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

  // Synchronized active cohort data
  const activeCohort =
    ACTIVITY_DATA.find((g) => g.id === selectedCohortId) || ACTIVITY_DATA[2];

  const activeHotspot =
    ACTIVITY_HOTSPOTS.find((h) => h.ageGroup === activeCohort.ageGroup) ||
    ACTIVITY_HOTSPOTS[1];

  // Presenter Dock Component for zero-scroll smart board teaching
  const renderPresenterDock = (inModal = false) => (
    <div
      style={{
        background: "#ffffff",
        border: "1.5px solid var(--border-subtle, #cbd5e1)",
        borderRadius: "20px",
        padding: inModal ? "18px 22px" : "16px 18px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        height: "100%",
        minHeight: inModal ? "auto" : "420px"
      }}
    >
      {/* Dock Tabs Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "8px",
          borderBottom: "1.5px solid #f1f5f9",
          paddingBottom: "10px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Sparkles size={16} color="#2563eb" />
          <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#0f172a" }}>
            Smart Board Presenter Dock
          </span>
        </div>

        {/* 3 Dock Tabs */}
        <div style={{ display: "flex", gap: "4px", background: "#f1f5f9", padding: "3px", borderRadius: "8px" }}>
          {[
            { id: "cohort", label: "🎯 Active Cohort" },
            { id: "prompt", label: "📝 Prompt" },
            { id: "hotspots", label: "⭐ Hotspots" }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setDockTab(tab.id as any)}
              style={{
                padding: "5px 10px",
                borderRadius: "6px",
                fontSize: "0.74rem",
                fontWeight: 750,
                border: "none",
                background: dockTab === tab.id ? "#ffffff" : "transparent",
                color: dockTab === tab.id ? "#0f172a" : "#64748b",
                boxShadow: dockTab === tab.id ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                cursor: "pointer"
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Dock Content: Tab 1 - Active Cohort Deep Dive */}
      {dockTab === "cohort" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
          {/* Quick Cohort Tap Strip */}
          <div style={{ display: "flex", alignItems: "center", gap: "5px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 750, color: "#64748b", marginRight: "2px" }}>
              TAP COHORT:
            </span>
            {ACTIVITY_DATA.map((grp) => {
              const isSelected = selectedCohortId === grp.id;
              return (
                <button
                  key={grp.id}
                  type="button"
                  onClick={() => {
                    setSelectedCohortId(grp.id);
                    setHighlightMode(grp.id as DiagramViewMode);
                  }}
                  style={{
                    padding: "3px 8px",
                    borderRadius: "6px",
                    fontSize: "0.72rem",
                    fontWeight: 750,
                    border: isSelected ? "1.5px solid #0f172a" : "1px solid #e2e8f0",
                    background: isSelected ? "#0f172a" : "#f8fafc",
                    color: isSelected ? "#ffffff" : "#475569",
                    cursor: "pointer"
                  }}
                >
                  {grp.shortLabel}
                </button>
              );
            })}
          </div>

          {/* Active Cohort Name & Dominance Banner */}
          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              padding: "10px 14px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase" }}>
                Selected Age Cohort
              </span>
              <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a" }}>
                {activeCohort.ageGroup}
              </div>
            </div>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                padding: "4px 9px",
                borderRadius: "6px",
                background:
                  activeCohort.higherGender === "male"
                    ? "#fef2f2"
                    : activeCohort.genderGap > 6
                    ? "#eff6ff"
                    : "#f0fdf4",
                color:
                  activeCohort.higherGender === "male"
                    ? "#dc2626"
                    : activeCohort.genderGap > 6
                    ? "#1e40af"
                    : "#166534",
                border: "1px solid currentColor"
              }}
            >
              {activeCohort.higherGender === "male"
                ? `Male Lead (+${Math.abs(activeCohort.genderGap)}%)`
                : activeCohort.genderGap > 6
                ? `Female Lead (+${activeCohort.genderGap}%)`
                : `Near Parity (${activeCohort.genderGap}%)`}
            </span>
          </div>

          {/* Stat Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
            {/* Men */}
            <div
              style={{
                background: "#0f172a",
                color: "#ffffff",
                padding: "9px 10px",
                borderRadius: "10px",
                textAlign: "center"
              }}
            >
              <div style={{ fontSize: "0.68rem", color: "#94a3b8", fontWeight: 700 }}>MEN</div>
              <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff" }}>
                {activeCohort.male}%
              </div>
              <div style={{ fontSize: "0.65rem", color: "#cbd5e1" }}>
                {activeCohort.isPeak === "male"
                  ? "★ Male Peak"
                  : activeCohort.isTrough === "male"
                  ? "▼ Lowest Figure"
                  : "Active Rate"}
              </div>
            </div>

            {/* Women */}
            <div
              style={{
                background: "#f1f5f9",
                border: "1px solid #cbd5e1",
                padding: "9px 10px",
                borderRadius: "10px",
                textAlign: "center"
              }}
            >
              <div style={{ fontSize: "0.68rem", color: "#64748b", fontWeight: 700 }}>WOMEN</div>
              <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0f172a" }}>
                {activeCohort.ageGroup === "55 to 64" ? "53%" : `${activeCohort.female}%`}
              </div>
              <div style={{ fontSize: "0.65rem", color: "#64748b" }}>
                {activeCohort.isPeak === "female" ? "▲ Overall Peak" : "Active Rate"}
              </div>
            </div>

            {/* Gap Difference */}
            <div
              style={{
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
                padding: "9px 10px",
                borderRadius: "10px",
                textAlign: "center"
              }}
            >
              <div style={{ fontSize: "0.68rem", color: "#1e40af", fontWeight: 700 }}>GAP DIFF</div>
              <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1d4ed8" }}>
                {Math.abs(activeCohort.genderGap).toFixed(1)}
              </div>
              <div style={{ fontSize: "0.65rem", color: "#3b82f6" }}>percentage pts</div>
            </div>
          </div>

          {/* Annotation Detail */}
          {activeCohort.annotation && (
            <p style={{ fontSize: "0.8rem", color: "#475569", margin: 0, lineHeight: 1.45 }}>
              <strong>Feature Note:</strong> {activeCohort.annotation}
            </p>
          )}

          {/* Band 9 Analytical Sentence Box */}
          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #cbd5e1",
              borderLeft: "3.5px solid #2563eb",
              borderRadius: "10px",
              padding: "10px 12px",
              fontSize: "0.84rem",
              lineHeight: 1.5,
              color: "#1e293b",
              marginTop: "auto"
            }}
          >
            <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "#2563eb", marginBottom: "3px" }}>
              BAND 9 SENTENCE:
            </div>
            <em>{activeHotspot.band9Sentence}</em>
          </div>
        </div>
      )}

      {/* Dock Content: Tab 2 - Task Prompt */}
      {dockTab === "prompt" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              padding: "12px",
              fontSize: "0.88rem",
              fontWeight: 650,
              lineHeight: 1.5,
              color: "#0f172a"
            }}
          >
            {TASK1_DATA.questionText.split("\n\n").map((chunk, i) => (
              <p key={i} style={{ marginBottom: i < 2 ? "6px" : 0 }}>
                {chunk}
              </p>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", fontSize: "0.78rem" }}>
            <div style={{ background: "#f1f5f9", padding: "8px 10px", borderRadius: "8px" }}>
              <span style={{ color: "#64748b" }}>Format:</span>
              <strong style={{ display: "block", color: "#0f172a" }}>Double Bar Chart</strong>
            </div>
            <div style={{ background: "#f1f5f9", padding: "8px 10px", borderRadius: "8px" }}>
              <span style={{ color: "#64748b" }}>Scale:</span>
              <strong style={{ display: "block", color: "#0f172a" }}>Percentage (%)</strong>
            </div>
            <div style={{ background: "#f1f5f9", padding: "8px 10px", borderRadius: "8px" }}>
              <span style={{ color: "#64748b" }}>Scope:</span>
              <strong style={{ display: "block", color: "#0f172a" }}>Australia (2010)</strong>
            </div>
            <div style={{ background: "#f1f5f9", padding: "8px 10px", borderRadius: "8px" }}>
              <span style={{ color: "#64748b" }}>Target:</span>
              <strong style={{ display: "block", color: "#0f172a" }}>150+ Words</strong>
            </div>
          </div>
        </div>
      )}

      {/* Dock Content: Tab 3 - Strategic Hotspots List */}
      {dockTab === "hotspots" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1, overflowY: "auto" }}>
          {ACTIVITY_HOTSPOTS.map((h) => {
            const isMatch = activeCohort.ageGroup === h.ageGroup;
            return (
              <div
                key={h.id}
                onClick={() => {
                  const target = ACTIVITY_DATA.find((g) => g.ageGroup === h.ageGroup);
                  if (target) {
                    setSelectedCohortId(target.id);
                    setHighlightMode(target.id as DiagramViewMode);
                  }
                }}
                style={{
                  background: isMatch ? "#eff6ff" : "#f8fafc",
                  border: isMatch ? "1.5px solid #2563eb" : "1px solid #e2e8f0",
                  borderRadius: "10px",
                  padding: "8px 10px",
                  cursor: "pointer",
                  fontSize: "0.8rem",
                  transition: "all 0.15s ease"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong style={{ color: "#0f172a" }}>{h.title}</strong>
                  <span style={{ fontSize: "0.72rem", color: "#2563eb", fontWeight: 700 }}>
                    {h.ageGroup}
                  </span>
                </div>
                <div style={{ fontSize: "0.75rem", color: "#475569", marginTop: "2px" }}>
                  {h.gapText}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <div className="stage-card-wrapper" style={{ width: "100%", minWidth: 0 }}>
      {/* Step Header */}
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 02 / 08 • Task Prompt &amp; Double Bar Chart Engine
        </span>
        <h2 className="stage-title">Deconstruct the Australian Physical Activity (2010) Bar Chart</h2>
        <p className="stage-subtitle">
          Examine the prompt, deconstruct regular exercise participation across six age cohorts in 2010, identify the youth male lead (52.8%), the mid-life low (39.5%), the female peak (53.3%), and senior convergence (47%).
        </p>
      </div>

      {/* Focus Timer */}
      <div style={{ marginBottom: "12px" }}>
        <TouchTimer
          formattedTime={formattedTime}
          isRunning={isRunning}
          isFinished={isFinished}
          onToggle={onTimerToggle}
          onReset={onTimerReset}
          instruction="Focus Timer: 3 minutes to analyze the double bar chart, note the youth male lead (15–24), the 13% gender gap at 35–44, the female peak at 45–54, and senior parity at 65+."
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
          marginBottom: "14px",
          boxShadow: "var(--shadow-sm)",
          width: "100%"
        }}
      >
        {/* 4 View Mode Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--slate-800)", marginRight: "4px" }}>
            TEACHING VIEW:
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
            <TrendingUp size={14} color="#2563eb" /> Interactive Double Bar Chart
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
            <Map size={14} /> Mindmap
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
            <HelpCircle size={14} /> Flashcards
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
            <ImageIcon size={14} /> Original Exam Graphic
          </button>
        </div>

        {/* Layout & Fullscreen Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {/* Layout Toggle: Side-by-Side (Zero Scroll) vs Full Width */}
          <button
            type="button"
            onClick={() => setStageLayout(stageLayout === "split" ? "full_width" : "split")}
            className="apple-touch-btn secondary"
            style={{
              padding: "7px 12px",
              fontSize: "0.76rem",
              fontWeight: 750,
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: stageLayout === "split" ? "#eff6ff" : "#ffffff",
              color: stageLayout === "split" ? "#1e40af" : "#334155",
              border: stageLayout === "split" ? "1.5px solid #3b82f6" : "1px solid var(--border-subtle)"
            }}
          >
            <Columns size={13} color={stageLayout === "split" ? "#2563eb" : "#64748b"} />
            {stageLayout === "split" ? "Zero-Scroll Board Mode ✓" : "Switch to Zero-Scroll Mode"}
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
            <Maximize2 size={13} /> Fullscreen Board
          </button>
        </div>
      </div>

      {/* STAGE CONTAINER: ZERO-SCROLL SPLIT VIEW (DEFAULT) */}
      {stageLayout === "split" ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.28fr 1fr",
            gap: "16px",
            width: "100%",
            alignItems: "stretch"
          }}
        >
          {/* Left Column: Visual Container (Chart without tall bottom cards) */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "14px",
              boxShadow: "var(--shadow-sm)",
              minWidth: 0,
              display: "flex",
              flexDirection: "column"
            }}
          >
            {viewMode === "smartboard_table" && (
              <SmartBoardTableMatrix
                highlightMode={highlightMode}
                onHighlightModeChange={(mode) => setHighlightMode(mode)}
                selectedCohortId={selectedCohortId}
                onSelectCohort={(id) => setSelectedCohortId(id)}
                showInternalToolbar={true}
                showDeepDiveCard={false} // Hidden on left because Live Presenter Dock on the right handles it with zero scroll!
              />
            )}

            {viewMode === "mindmap" && <BitsAndPiecesMindmap />}

            {viewMode === "flashcards" && <BitsAndPiecesFlashcards />}

            {viewMode === "original_image" && (
              <div style={{ textAlign: "center", padding: "10px" }}>
                <img
                  src={`materials/${TASK1_DATA.imageFileName}`}
                  alt="Australian Physical Activity 2010 Bar Chart"
                  style={{ maxWidth: "100%", maxHeight: "400px", borderRadius: "10px", objectFit: "contain" }}
                />
              </div>
            )}
          </div>

          {/* Right Column: Live Smart Board Presenter Dock (Directly Beside Chart!) */}
          <div style={{ minWidth: 0, height: "100%" }}>
            {renderPresenterDock(false)}
          </div>
        </div>
      ) : (
        /* FULL-WIDTH VIEW */
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", minWidth: 0 }}>
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
                selectedCohortId={selectedCohortId}
                onSelectCohort={(id) => setSelectedCohortId(id)}
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
                  alt="IELTS Academic Task 1 Australian Physical Activity 2010 Double Bar Chart"
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
                  Official Cambridge IELTS Academic Question Diagram • Percentage of Australian Men and Women Doing Regular Physical Activity in 2010
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

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                {ACTIVITY_HOTSPOTS.map((h) => {
                  const targetGrp = ACTIVITY_DATA.find((g) => g.ageGroup === h.ageGroup);
                  const isSelected = targetGrp && selectedCohortId === targetGrp.id;
                  return (
                    <button
                      key={h.id}
                      type="button"
                      onClick={() => {
                        if (targetGrp) {
                          setSelectedCohortId(targetGrp.id);
                          setHighlightMode(targetGrp.id as DiagramViewMode);
                        }
                      }}
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
                  <strong style={{ color: "#0f172a" }}>Male Participation:</strong>{" "}
                  {activeCohort.male}%
                </div>
                <div>
                  <strong style={{ color: "#475569" }}>Female Participation:</strong>{" "}
                  {activeCohort.female}%
                </div>
                <div style={{ marginTop: "4px", fontStyle: "italic", color: "var(--slate-800)", borderTop: "1px dashed var(--border-subtle)", paddingTop: "6px" }}>
                  {activeHotspot.band9Sentence}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FULLSCREEN ZERO-SCROLL ENLARGED MODAL */}
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
                <TrendingUp size={22} color="var(--apple-blue)" />
                <div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 800, margin: 0, color: "#ffffff" }}>
                    Smart Board Zero-Scroll Presentation • Australian Physical Activity by Age &amp; Gender (2010)
                  </h3>
                  <p style={{ fontSize: "0.76rem", color: "#94a3b8", margin: "2px 0 0 0" }}>
                    Double Bar Chart • 6 Age Cohorts • Live Synchronized Presenter Dock
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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

            {/* Fullscreen Content: Side-by-Side Zero-Scroll Kiosk Layout */}
            <div
              style={{
                flex: 1,
                padding: "16px 24px",
                background: "#f1f5f9",
                display: "grid",
                gridTemplateColumns: "1.3fr 1fr",
                gap: "16px",
                alignItems: "stretch",
                overflow: "hidden"
              }}
            >
              {/* Left Column: Big Chart */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "16px",
                  border: "1.5px solid #cbd5e1",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.05)"
                }}
              >
                <SmartBoardTableMatrix
                  highlightMode={highlightMode}
                  onHighlightModeChange={(mode) => setHighlightMode(mode)}
                  selectedCohortId={selectedCohortId}
                  onSelectCohort={(id) => setSelectedCohortId(id)}
                  showInternalToolbar={true}
                  showDeepDiveCard={false}
                />
              </div>

              {/* Right Column: Presenter Dock (fits full height without scroll!) */}
              <div style={{ height: "100%", overflowY: "auto" }}>
                {renderPresenterDock(true)}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
