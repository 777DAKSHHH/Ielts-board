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
  LayoutGrid,
  PieChart as PieIcon
} from "lucide-react";
import {
  TASK1_DATA,
  SPENDING_CATEGORIES,
  SPENDING_YEARS,
  SPENDING_HOTSPOTS
} from "../../data/task1Data";
import { SpendingCategoryKey, SpendingCategoryItem } from "../../types/task1";
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
  const [selectedCategoryId, setSelectedCategoryId] = useState<SpendingCategoryKey>("teachers_salaries");
  const [highlightMode, setHighlightMode] = useState<DiagramViewMode>("all");
  const [dockTab, setDockTab] = useState<"category" | "prompt" | "hotspots">("category");

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

  // Synchronized active category data
  const activeCategory =
    SPENDING_CATEGORIES.find((c) => c.id === selectedCategoryId) || SPENDING_CATEGORIES[0];

  const activeHotspot =
    SPENDING_HOTSPOTS.find((h) => h.category === activeCategory.label) || SPENDING_HOTSPOTS[0];

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
            { id: "category", label: "🎯 Active Category" },
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

      {/* Dock Content: Tab 1 - Active Category Deep Dive */}
      {dockTab === "category" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
          {/* Quick Category Tap Strip */}
          <div style={{ display: "flex", alignItems: "center", gap: "5px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 750, color: "#64748b", marginRight: "2px" }}>
              TAP CATEGORY:
            </span>
            {SPENDING_CATEGORIES.map((cat) => {
              const isSelected = selectedCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategoryId(cat.id);
                    setHighlightMode(cat.id as DiagramViewMode);
                  }}
                  style={{
                    padding: "3px 8px",
                    borderRadius: "6px",
                    fontSize: "0.72rem",
                    fontWeight: 750,
                    border: isSelected ? `1.5px solid ${cat.color}` : "1px solid #e2e8f0",
                    background: isSelected ? `${cat.color}18` : "#f8fafc",
                    color: isSelected ? cat.color : "#475569",
                    cursor: "pointer"
                  }}
                >
                  {cat.shortLabel}
                </button>
              );
            })}
          </div>

          {/* Active Category Name & Dominance Banner */}
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
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: activeCategory.color
                }}
              />
              <div>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase" }}>
                  Selected Expense Category
                </span>
                <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a" }}>
                  {activeCategory.label}
                </div>
              </div>
            </div>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                padding: "4px 9px",
                borderRadius: "6px",
                background: activeCategory.group === "staff" ? "#dbeafe" : "#fef3c7",
                color: activeCategory.group === "staff" ? "#1e40af" : "#92400e",
                border: "1px solid currentColor"
              }}
            >
              {activeCategory.group === "staff" ? "Staff Costs" : "Operational / Capital"}
            </span>
          </div>

          {/* 3-Year Stat Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
            {/* 1981 */}
            <div
              style={{
                background: "#f1f5f9",
                border: "1px solid #cbd5e1",
                padding: "9px 10px",
                borderRadius: "10px",
                textAlign: "center"
              }}
            >
              <div style={{ fontSize: "0.68rem", color: "#64748b", fontWeight: 700 }}>1981</div>
              <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0f172a" }}>
                {activeCategory.y1981}%
              </div>
              <div style={{ fontSize: "0.65rem", color: "#64748b" }}>Baseline Year</div>
            </div>

            {/* 1991 */}
            <div
              style={{
                background: "#f1f5f9",
                border: "1px solid #cbd5e1",
                padding: "9px 10px",
                borderRadius: "10px",
                textAlign: "center"
              }}
            >
              <div style={{ fontSize: "0.68rem", color: "#64748b", fontWeight: 700 }}>1991</div>
              <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0f172a" }}>
                {activeCategory.y1991}%
              </div>
              <div style={{ fontSize: "0.65rem", color: "#64748b" }}>
                {activeCategory.id === "teachers_salaries"
                  ? "★ 50% Peak"
                  : activeCategory.id === "furniture_and_equipment"
                  ? "▼ 5% Slump"
                  : "Mid-Decade"}
              </div>
            </div>

            {/* 2001 */}
            <div
              style={{
                background: activeCategory.netChange >= 0 ? "#eff6ff" : "#fef2f2",
                border:
                  activeCategory.netChange >= 0
                    ? "1px solid #bfdbfe"
                    : "1px solid #fecaca",
                padding: "9px 10px",
                borderRadius: "10px",
                textAlign: "center"
              }}
            >
              <div
                style={{
                  fontSize: "0.68rem",
                  color: activeCategory.netChange >= 0 ? "#1e40af" : "#991b1b",
                  fontWeight: 700
                }}
              >
                2001
              </div>
              <div
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 800,
                  color: activeCategory.netChange >= 0 ? "#1d4ed8" : "#b91c1c"
                }}
              >
                {activeCategory.y2001}%
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                  color: activeCategory.netChange >= 0 ? "#2563eb" : "#dc2626"
                }}
              >
                Net: {activeCategory.netChange >= 0 ? "+" : ""}
                {activeCategory.netChange}%
              </div>
            </div>
          </div>

          {/* Annotation Detail */}
          <p style={{ fontSize: "0.82rem", color: "#475569", margin: 0, lineHeight: 1.45 }}>
            <strong>Analytical Trajectory:</strong> {activeCategory.trendDescription}
          </p>

          {/* Band 9 Analytical Sentence Box */}
          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #cbd5e1",
              borderLeft: `3.5px solid ${activeCategory.color}`,
              borderRadius: "10px",
              padding: "10px 12px",
              fontSize: "0.84rem",
              lineHeight: 1.5,
              color: "#1e293b",
              marginTop: "auto"
            }}
          >
            <div
              style={{
                fontSize: "0.72rem",
                fontWeight: 800,
                color: activeCategory.color,
                marginBottom: "3px"
              }}
            >
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
              <strong style={{ display: "block", color: "#0f172a" }}>Three Pie Charts</strong>
            </div>
            <div style={{ background: "#f1f5f9", padding: "8px 10px", borderRadius: "8px" }}>
              <span style={{ color: "#64748b" }}>Scale:</span>
              <strong style={{ display: "block", color: "#0f172a" }}>Percentage (%)</strong>
            </div>
            <div style={{ background: "#f1f5f9", padding: "8px 10px", borderRadius: "8px" }}>
              <span style={{ color: "#64748b" }}>Scope:</span>
              <strong style={{ display: "block", color: "#0f172a" }}>1 UK School (1981–2001)</strong>
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
          {SPENDING_HOTSPOTS.map((h) => {
            const isMatch = activeCategory.label === h.category;
            return (
              <div
                key={h.id}
                onClick={() => {
                  const target = SPENDING_CATEGORIES.find((c) => c.label === h.category);
                  if (target) {
                    setSelectedCategoryId(target.id);
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
                    {h.y1981}% → {h.y2001}%
                  </span>
                </div>
                <div style={{ fontSize: "0.75rem", color: "#475569", marginTop: "2px" }}>
                  {h.keyFeature}
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
          Step 02 / 08 • Task Prompt &amp; School Spending Pie Charts
        </span>
        <h2 className="stage-title">Deconstruct the UK School Spending Pie Charts (1981, 1991, 2001)</h2>
        <p className="stage-subtitle">
          Examine the prompt, deconstruct expenditure across five categories over a 20-year span, identify the teachers' salary predominance (40% → 50% → 45%), other workers' continuous fall (28% → 15%), furniture's resurgence (5% → 23%), and insurance quadrupling (2% → 8%).
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
          instruction="Focus Timer: 3 minutes to analyze the three pie charts, note teachers' salaries commanding the lion's share, furniture's plunge to 5% and surge to 23%, and insurance quadrupling."
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
          boxShadow: "var(--shadow-sm)"
        }}
      >
        {/* Left: View Mode Buttons */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={() => handleSelectViewMode("smartboard_table")}
            style={{
              padding: "6px 12px",
              borderRadius: "10px",
              fontSize: "0.82rem",
              fontWeight: 750,
              border: viewMode === "smartboard_table" ? "1.5px solid #0f172a" : "1px solid #e2e8f0",
              background: viewMode === "smartboard_table" ? "#0f172a" : "#f8fafc",
              color: viewMode === "smartboard_table" ? "#ffffff" : "#475569",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <PieIcon size={14} />
            <span>Interactive Pie Charts</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectViewMode("mindmap")}
            style={{
              padding: "6px 12px",
              borderRadius: "10px",
              fontSize: "0.82rem",
              fontWeight: 750,
              border: viewMode === "mindmap" ? "1.5px solid #2563eb" : "1px solid #e2e8f0",
              background: viewMode === "mindmap" ? "#eff6ff" : "#f8fafc",
              color: viewMode === "mindmap" ? "#1e40af" : "#475569",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <Map size={14} />
            <span>Strategic Mindmap</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectViewMode("flashcards")}
            style={{
              padding: "6px 12px",
              borderRadius: "10px",
              fontSize: "0.82rem",
              fontWeight: 750,
              border: viewMode === "flashcards" ? "1.5px solid #059669" : "1px solid #e2e8f0",
              background: viewMode === "flashcards" ? "#ecfdf5" : "#f8fafc",
              color: viewMode === "flashcards" ? "#065f46" : "#475569",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <HelpCircle size={14} />
            <span>Flashcards</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectViewMode("original_image")}
            style={{
              padding: "6px 12px",
              borderRadius: "10px",
              fontSize: "0.82rem",
              fontWeight: 750,
              border: viewMode === "original_image" ? "1.5px solid #7c3aed" : "1px solid #e2e8f0",
              background: viewMode === "original_image" ? "#f5f3ff" : "#f8fafc",
              color: viewMode === "original_image" ? "#5b21b6" : "#475569",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <ImageIcon size={14} />
            <span>Original Exam Scan</span>
          </button>
        </div>

        {/* Right: Layout Switcher & Fullscreen */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {/* Split vs Full-Width Layout Toggles */}
          <div style={{ display: "flex", background: "#f1f5f9", padding: "2px", borderRadius: "8px" }}>
            <button
              type="button"
              onClick={() => setStageLayout("split")}
              title="Split View (Chart + Presenter Dock Side-by-Side)"
              style={{
                padding: "4px 8px",
                borderRadius: "6px",
                border: "none",
                background: stageLayout === "split" ? "#ffffff" : "transparent",
                color: stageLayout === "split" ? "#0f172a" : "#64748b",
                boxShadow: stageLayout === "split" ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "0.74rem",
                fontWeight: 700
              }}
            >
              <Columns size={13} />
              <span>Zero-Scroll Split</span>
            </button>
            <button
              type="button"
              onClick={() => setStageLayout("full_width")}
              title="Full Width Stage"
              style={{
                padding: "4px 8px",
                borderRadius: "6px",
                border: "none",
                background: stageLayout === "full_width" ? "#ffffff" : "transparent",
                color: stageLayout === "full_width" ? "#0f172a" : "#64748b",
                boxShadow: stageLayout === "full_width" ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "0.74rem",
                fontWeight: 700
              }}
            >
              <LayoutGrid size={13} />
              <span>Full Width</span>
            </button>
          </div>

          {/* Fullscreen Button */}
          <button
            type="button"
            onClick={openFullscreen}
            style={{
              padding: "6px 12px",
              borderRadius: "8px",
              border: "1px solid #cbd5e1",
              background: "#ffffff",
              color: "#0f172a",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.75rem",
              fontWeight: 750
            }}
          >
            <Maximize2 size={13} />
            <span>Enlarge</span>
          </button>
        </div>
      </div>

      {/* STAGE WORKSPACE: ZERO-SCROLL SPLIT OR FULL WIDTH */}
      {stageLayout === "split" ? (
        /* ZERO-SCROLL SPLIT VIEW: Chart on left, Presenter Dock on right */
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.45fr 1fr",
            gap: "14px",
            alignItems: "start",
            width: "100%",
            minWidth: 0
          }}
        >
          {/* Left Column: Visual Stage */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "16px",
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
                selectedCohortId={selectedCategoryId}
                onSelectCohort={(id) => setSelectedCategoryId(id as SpendingCategoryKey)}
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
                  alt="UK School Spending Pie Charts"
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
                selectedCohortId={selectedCategoryId}
                onSelectCohort={(id) => setSelectedCategoryId(id as SpendingCategoryKey)}
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
                  alt="IELTS Academic Task 1 UK School Spending Three Pie Charts"
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
                  Official Cambridge IELTS Academic Question Diagram • Three Pie Charts: Spending of One UK School (1981, 1991, 2001)
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
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Sparkles size={17} color="#d97706" />
                <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Strategic Spending Hotspots (Examiner Key Features)
                </h4>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxHeight: "200px", overflowY: "auto" }}>
                {SPENDING_HOTSPOTS.map((h) => {
                  const targetCat = SPENDING_CATEGORIES.find((c) => c.label === h.category);
                  return (
                    <div
                      key={h.id}
                      onClick={() => {
                        if (targetCat) {
                          setSelectedCategoryId(targetCat.id);
                          setHighlightMode(targetCat.id as DiagramViewMode);
                        }
                      }}
                      style={{
                        padding: "8px 12px",
                        borderRadius: "10px",
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        cursor: "pointer"
                      }}
                    >
                      <div>
                        <strong style={{ fontSize: "0.85rem", color: "#0f172a" }}>{h.title}</strong>
                        <div style={{ fontSize: "0.74rem", color: "#64748b" }}>{h.keyFeature}</div>
                      </div>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 800,
                          padding: "2px 8px",
                          borderRadius: "6px",
                          background: "#e0f2fe",
                          color: "#0369a1"
                        }}
                      >
                        {h.y1981}% → {h.y2001}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FULLSCREEN SMARTBOARD MODAL */}
      <AnimatePresence>
        {isEnlarged && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(15, 23, 42, 0.85)",
              backdropFilter: "blur(8px)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px"
            }}
          >
            <div
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                width: "95vw",
                maxWidth: "1400px",
                maxHeight: "92vh",
                overflowY: "auto",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                position: "relative",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            >
              {/* Modal Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1.5px solid #f1f5f9", paddingBottom: "12px" }}>
                <div>
                  <span className="apple-badge accent" style={{ marginBottom: "4px" }}>
                    Enlarged Presentation Mode
                  </span>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                    UK School Spending Three Pie Charts (1981, 1991, 2001)
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsEnlarged(false)}
                  style={{
                    padding: "8px",
                    borderRadius: "10px",
                    border: "1px solid #e2e8f0",
                    background: "#f8fafc",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <X size={20} color="#0f172a" />
                </button>
              </div>

              {/* Modal Split View */}
              <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "18px", alignItems: "start" }}>
                <div style={{ background: "#ffffff", borderRadius: "18px", border: "1.5px solid #e2e8f0", padding: "16px" }}>
                  <SmartBoardTableMatrix
                    highlightMode={highlightMode}
                    onHighlightModeChange={(mode) => setHighlightMode(mode)}
                    selectedCohortId={selectedCategoryId}
                    onSelectCohort={(id) => setSelectedCategoryId(id as SpendingCategoryKey)}
                    showInternalToolbar={true}
                    showDeepDiveCard={false}
                  />
                </div>
                <div>{renderPresenterDock(true)}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
