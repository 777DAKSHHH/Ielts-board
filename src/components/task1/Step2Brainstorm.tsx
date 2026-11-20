import React, { useState, useEffect, useRef } from "react";
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
  Table,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  LayoutGrid,
  Eye,
  Info
} from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";
import { TouchTimer } from "../common/TouchTimer";
import {
  SmartBoardTableMatrix,
  DiagramViewMode,
  HotspotDefinition,
  STAGE_HOTSPOTS,
  MACRO_HOTSPOTS,
  TABLE_CELL_HOTSPOTS,
  CATEGORY_HOTSPOTS,
  ALL_HOTSPOTS
} from "./SmartBoardGraphSvg";
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
  const [selectedHotspotId, setSelectedHotspotId] = useState<string>("stage-1");
  const [highlightMode, setHighlightMode] = useState<DiagramViewMode>("stage-1");
  const [dockTab, setDockTab] = useState<"category" | "prompt" | "hotspots">("category");

  // Normal view refs for smooth auto-scrolling
  const dockFeedRef = useRef<HTMLDivElement>(null);
  const stageCardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const scrollerSpineRef = useRef<HTMLDivElement>(null);
  const spineStageRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Modal view refs
  const modalDockFeedRef = useRef<HTMLDivElement>(null);
  const modalStageCardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const modalScrollerSpineRef = useRef<HTMLDivElement>(null);
  const modalSpineStageRefs = useRef<Record<string, HTMLDivElement | null>>({});

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

  // Smooth scroll helper that scrolls ONLY inside the target scroll container without jumping the window
  const scrollToTargetElement = (
    container: HTMLDivElement | null,
    target: HTMLDivElement | null
  ) => {
    if (!container || !target) return;
    const containerRect = container.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const targetOffset = targetRect.top - containerRect.top + container.scrollTop - 10;
    container.scrollTo({
      top: Math.max(0, targetOffset),
      behavior: "smooth"
    });
  };

  // Auto-scroll effect whenever a stage is selected (from visualizer, spine, or dock)
  useEffect(() => {
    if (!selectedHotspotId) return;

    // Normal split view
    const dockEl = stageCardRefs.current[selectedHotspotId];
    if (dockEl && dockFeedRef.current) {
      scrollToTargetElement(dockFeedRef.current, dockEl);
    }
    const spineEl = spineStageRefs.current[selectedHotspotId];
    if (spineEl && scrollerSpineRef.current) {
      scrollToTargetElement(scrollerSpineRef.current, spineEl);
    }

    // Fullscreen presentation modal
    if (isEnlarged) {
      const modalDockEl = modalStageCardRefs.current[selectedHotspotId];
      if (modalDockEl && modalDockFeedRef.current) {
        scrollToTargetElement(modalDockFeedRef.current, modalDockEl);
      }
      const modalSpineEl = modalSpineStageRefs.current[selectedHotspotId];
      if (modalSpineEl && modalScrollerSpineRef.current) {
        scrollToTargetElement(modalScrollerSpineRef.current, modalSpineEl);
      }
    }
  }, [selectedHotspotId, isEnlarged, dockTab]);

  const handleSelectViewMode = (
    mode: "smartboard_table" | "mindmap" | "flashcards" | "original_image"
  ) => {
    setViewMode(mode);
  };

  const openFullscreen = () => {
    setIsEnlarged(true);
  };

  // Synchronized active component data (from Smartboard Table Hotspots)
  const activeHotspot: HotspotDefinition =
    ALL_HOTSPOTS.find((h) => h.id === selectedHotspotId) || STAGE_HOTSPOTS[0];

  const handleSelectComponent = (id: string) => {
    setSelectedHotspotId(id);
    setHighlightMode(id as DiagramViewMode);
    if (dockTab !== "category") {
      setDockTab("category");
    }
  };

  // ==========================================
  // 1. INDIVIDUAL STAGE SCROLLER SPINE
  // Placed directly between Visualizer & Presenter Dock
  // ==========================================
  const renderStageScroller = (inModal = false) => {
    const currentSpineRef = inModal ? modalScrollerSpineRef : scrollerSpineRef;
    const currentStageRefs = inModal ? modalSpineStageRefs : spineStageRefs;

    return (
      <div
        style={{
          background: "#ffffff",
          border: "1.5px solid var(--border-subtle, #cbd5e1)",
          borderRadius: "20px",
          padding: "14px 10px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          height: "100%",
          minHeight: inModal ? "auto" : "400px"
        }}
      >
        {/* Scroller Spine Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "8px",
            borderBottom: "1.5px solid #f1f5f9"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Layers size={15} color="#0284c7" />
            <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#0f172a" }}>
              Stage Scroller
            </span>
          </div>
          <span
            style={{
              fontSize: "0.68rem",
              fontWeight: 800,
              background: "#eff6ff",
              color: "#0284c7",
              padding: "2px 6px",
              borderRadius: "4px"
            }}
          >
            7 Stages
          </span>
        </div>

        {/* Quick Phase Jump Badges */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
          <button
            type="button"
            onClick={() => handleSelectComponent("stage-1")}
            style={{
              padding: "4px 6px",
              borderRadius: "6px",
              fontSize: "0.68rem",
              fontWeight: 750,
              border: selectedHotspotId === "stage-1" || selectedHotspotId === "stage-2" || selectedHotspotId === "stage-3"
                ? "1.5px solid #16a34a"
                : "1px solid #e2e8f0",
              background: selectedHotspotId === "stage-1" || selectedHotspotId === "stage-2" || selectedHotspotId === "stage-3"
                ? "#f0fdf4"
                : "#f8fafc",
              color: selectedHotspotId === "stage-1" || selectedHotspotId === "stage-2" || selectedHotspotId === "stage-3"
                ? "#166534"
                : "#475569",
              cursor: "pointer"
            }}
          >
            Phase 1 (1–3)
          </button>
          <button
            type="button"
            onClick={() => handleSelectComponent("stage-4")}
            style={{
              padding: "4px 6px",
              borderRadius: "6px",
              fontSize: "0.68rem",
              fontWeight: 750,
              border: selectedHotspotId === "stage-4" || selectedHotspotId === "stage-5" || selectedHotspotId === "stage-6" || selectedHotspotId === "stage-7"
                ? "1.5px solid #ea580c"
                : "1px solid #e2e8f0",
              background: selectedHotspotId === "stage-4" || selectedHotspotId === "stage-5" || selectedHotspotId === "stage-6" || selectedHotspotId === "stage-7"
                ? "#fff7ed"
                : "#f8fafc",
              color: selectedHotspotId === "stage-4" || selectedHotspotId === "stage-5" || selectedHotspotId === "stage-6" || selectedHotspotId === "stage-7"
                ? "#c2410c"
                : "#475569",
              cursor: "pointer"
            }}
          >
            Phase 2 (4–7)
          </button>
        </div>

        {/* Interactive Vertical Stages Spine with Touch-friendly Cards */}
        <div
          ref={currentSpineRef}
          className="custom-smart-scroller"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "7px",
            overflowY: "auto",
            flex: 1,
            paddingRight: "2px"
          }}
        >
          {STAGE_HOTSPOTS.map((st, idx) => {
            const isSelected = selectedHotspotId === st.id;
            const stageShortTitles = [
              "Growing",
              "Harvesting",
              "Crushing",
              "Purifying",
              "Evaporator",
              "Centrifuge",
              "Drying & Cooling"
            ];
            const stageSubtitles = [
              "12–18m Field",
              "Dual Method",
              "Roller Mill",
              "Limestone Filter",
              "Thermal Syrup",
              "Rotational Spin",
              "Refined Sugar"
            ];

            return (
              <div
                key={st.id}
                ref={(el) => {
                  currentStageRefs.current[st.id] = el;
                }}
                onClick={() => handleSelectComponent(st.id)}
                style={{
                  position: "relative",
                  padding: "8px 9px",
                  borderRadius: "10px",
                  background: isSelected ? `${st.color}14` : "#f8fafc",
                  border: isSelected ? `2px solid ${st.color}` : "1px solid #e2e8f0",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "8px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
                  {/* Number Badge */}
                  <span
                    style={{
                      width: "25px",
                      height: "25px",
                      borderRadius: "7px",
                      background: st.color,
                      color: "#ffffff",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}
                  >
                    {st.number.replace("Stage ", "")}
                  </span>

                  {/* Title & Tag */}
                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: isSelected ? 800 : 700,
                        color: isSelected ? st.color : "#0f172a",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                      }}
                    >
                      {stageShortTitles[idx]}
                    </div>
                    <div
                      style={{
                        fontSize: "0.66rem",
                        color: "#64748b",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                      }}
                    >
                      {stageSubtitles[idx]}
                    </div>
                  </div>
                </div>

                {/* Active Indicator Arrow */}
                {isSelected ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: st.color,
                      flexShrink: 0
                    }}
                  >
                    <ArrowRight size={14} />
                  </div>
                ) : (
                  <ChevronRight size={13} color="#94a3b8" style={{ flexShrink: 0 }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // ==========================================
  // 2. SMART BOARD PRESENTER DOCK WITH AUTO-SCROLL
  // ==========================================
  const renderPresenterDock = (inModal = false) => {
    const currentFeedRef = inModal ? modalDockFeedRef : dockFeedRef;
    const currentStageRefs = inModal ? modalStageCardRefs : stageCardRefs;

    return (
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
          minHeight: inModal ? "auto" : "400px"
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
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 800,
                padding: "2px 7px",
                borderRadius: "5px",
                background: `${activeHotspot.color}15`,
                color: activeHotspot.color
              }}
            >
              {activeHotspot.category || activeHotspot.number}
            </span>
          </div>

          {/* 3 Dock Tabs */}
          <div style={{ display: "flex", gap: "4px", background: "#f1f5f9", padding: "3px", borderRadius: "8px" }}>
            {[
              { id: "category", label: "🎯 Stage Feed & Auto-Scroll" },
              { id: "prompt", label: "📝 Prompt Parameters" },
              { id: "hotspots", label: "⭐ All Stages" }
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

        {/* Dock Content: Tab 1 - Auto-Scrolling Stage Feed */}
        {dockTab === "category" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1, minHeight: 0 }}>
            {/* Quick Stage Jump Buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: "4px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 800, color: "#0284c7", marginRight: "2px", textTransform: "uppercase" }}>
                Quick Jump:
              </span>
              {STAGE_HOTSPOTS.map((st) => {
                const isSelected = selectedHotspotId === st.id;
                return (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => handleSelectComponent(st.id)}
                    style={{
                      padding: "3px 8px",
                      borderRadius: "6px",
                      fontSize: "0.72rem",
                      fontWeight: 750,
                      border: isSelected ? `1.5px solid ${st.color}` : "1px solid #e2e8f0",
                      background: isSelected ? `${st.color}18` : "#f8fafc",
                      color: isSelected ? st.color : "#475569",
                      cursor: "pointer",
                      transition: "all 0.15s ease"
                    }}
                  >
                    {st.number.replace("Stage ", "S")}
                  </button>
                );
              })}
            </div>

            {/* Auto-Scrollable Feed of all 7 Stage Deep Dives */}
            <div
              ref={currentFeedRef}
              className="custom-smart-scroller"
              style={{
                overflowY: "auto",
                maxHeight: inModal ? "calc(88vh - 200px)" : "440px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                paddingRight: "4px"
              }}
            >
              {STAGE_HOTSPOTS.map((st) => {
                const isActive = selectedHotspotId === st.id;
                return (
                  <div
                    key={st.id}
                    ref={(el) => {
                      currentStageRefs.current[st.id] = el;
                    }}
                    onClick={() => handleSelectComponent(st.id)}
                    style={{
                      background: "#ffffff",
                      border: isActive ? `2px solid ${st.color}` : "1.5px solid #e2e8f0",
                      borderRadius: "14px",
                      padding: "14px",
                      boxShadow: isActive ? `0 4px 18px ${st.color}20` : "0 2px 8px rgba(0,0,0,0.03)",
                      transition: "all 0.2s ease",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px"
                    }}
                  >
                    {/* Card Header */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span
                          style={{
                            padding: "4px 10px",
                            borderRadius: "7px",
                            background: st.color,
                            color: "#ffffff",
                            fontSize: "0.78rem",
                            fontWeight: 800
                          }}
                        >
                          {st.number}
                        </span>
                        <div>
                          <div style={{ fontSize: "0.68rem", fontWeight: 750, color: "#64748b", textTransform: "uppercase" }}>
                            {st.box === "phase-1" ? "Phase 1: Agricultural & Extraction" : "Phase 2: Chemical & Refining"}
                          </div>
                          <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0f172a" }}>
                            {st.name}
                          </div>
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        {isActive && (
                          <span
                            style={{
                              fontSize: "0.68rem",
                              fontWeight: 800,
                              padding: "2px 8px",
                              borderRadius: "5px",
                              background: `${st.color}18`,
                              color: st.color,
                              border: `1px solid ${st.color}40`
                            }}
                          >
                            ★ ACTIVE ON SMART BOARD
                          </span>
                        )}
                        <span
                          style={{
                            fontSize: "0.74rem",
                            fontWeight: 750,
                            padding: "3px 9px",
                            borderRadius: "6px",
                            background: "#f8fafc",
                            color: st.color,
                            border: `1px solid ${st.color}35`
                          }}
                        >
                          {st.equipmentOrRole}
                        </span>
                      </div>
                    </div>

                    {/* 4 Parameter Metric Stat Cards */}
                    {st.parameterMetrics && (
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: "6px" }}>
                        {st.parameterMetrics.map((pm, pidx) => (
                          <div
                            key={pidx}
                            style={{
                              background: "#f8fafc",
                              border: "1px solid #e2e8f0",
                              padding: "6px 8px",
                              borderRadius: "8px",
                              textAlign: "center"
                            }}
                          >
                            <div style={{ fontSize: "0.64rem", color: "#64748b", fontWeight: 700 }}>
                              {pm.label}
                            </div>
                            <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#0f172a", marginTop: "1px" }}>
                              {pm.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Operational Mechanics Description */}
                    <div
                      style={{
                        background: "#ffffff",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px",
                        padding: "8px 10px",
                        fontSize: "0.80rem",
                        color: "#334155",
                        lineHeight: 1.45
                      }}
                    >
                      <strong style={{ color: "#0f172a", display: "block", marginBottom: "2px" }}>
                        Analytical Insight:
                      </strong>
                      {st.description}
                    </div>

                    {/* Band 9 Analytical Sentence Box */}
                    <div
                      style={{
                        background: "#f8fafc",
                        border: "1px solid #cbd5e1",
                        borderLeft: `3.5px solid ${st.color}`,
                        borderRadius: "8px",
                        padding: "8px 10px",
                        fontSize: "0.82rem",
                        lineHeight: 1.5,
                        color: "#1e293b"
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 800,
                          color: st.color,
                          marginBottom: "2px"
                        }}
                      >
                        ★ BAND 9 MODEL SENTENCE:
                      </div>
                      <em>{st.band9Phrase}</em>
                    </div>

                    {/* Grammar & Examiner Anchor */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "6px",
                        flexWrap: "wrap",
                        background: "#f1f5f9",
                        padding: "5px 8px",
                        borderRadius: "6px",
                        fontSize: "0.72rem"
                      }}
                    >
                      <span style={{ color: "#475569" }}>
                        <strong>Grammar:</strong> {st.grammaticalFocus}
                      </span>
                      {st.examinerFocus && (
                        <span style={{ color: "#0369a1", fontWeight: 750 }}>
                          {st.examinerFocus}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
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
                <strong style={{ display: "block", color: "#0f172a" }}>Process Diagram (7 Stages)</strong>
              </div>
              <div style={{ background: "#f1f5f9", padding: "8px 10px", borderRadius: "8px" }}>
                <span style={{ color: "#64748b" }}>Raw Material:</span>
                <strong style={{ display: "block", color: "#0f172a" }}>Sugarcane (12–18m Growth)</strong>
              </div>
              <div style={{ background: "#f1f5f9", padding: "8px 10px", borderRadius: "8px" }}>
                <span style={{ color: "#64748b" }}>End Product:</span>
                <strong style={{ display: "block", color: "#0f172a" }}>Refined Dry Sugar Crystals</strong>
              </div>
              <div style={{ background: "#f1f5f9", padding: "8px 10px", borderRadius: "8px" }}>
                <span style={{ color: "#64748b" }}>Bifurcation:</span>
                <strong style={{ display: "block", color: "#0f172a" }}>Agricultural (1–3) vs Chemical (4–7)</strong>
              </div>
            </div>
          </div>
        )}

        {/* Dock Content: Tab 3 - All Stages Directory */}
        {dockTab === "hotspots" && (
          <div className="custom-smart-scroller" style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1, overflowY: "auto" }}>
            {STAGE_HOTSPOTS.map((h) => {
              const isMatch = selectedHotspotId === h.id;
              return (
                <div
                  key={h.id}
                  onClick={() => handleSelectComponent(h.id)}
                  style={{
                    background: isMatch ? "#eff6ff" : "#f8fafc",
                    border: isMatch ? `1.5px solid ${h.color}` : "1px solid #e2e8f0",
                    borderRadius: "10px",
                    padding: "7px 10px",
                    cursor: "pointer",
                    fontSize: "0.8rem",
                    transition: "all 0.15s ease",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span
                      style={{
                        width: "30px",
                        height: "24px",
                        borderRadius: "6px",
                        background: h.color,
                        color: "#ffffff",
                        fontSize: "0.68rem",
                        fontWeight: 800,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      {h.number.replace("Stage ", "")}
                    </span>
                    <div>
                      <strong style={{ color: "#0f172a", fontSize: "0.82rem" }}>{h.name}</strong>
                      <div style={{ fontSize: "0.72rem", color: "#64748b" }}>{h.equipmentOrRole}</div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 750,
                      padding: "2px 6px",
                      borderRadius: "4px",
                      background: `${h.color}15`,
                      color: h.color
                    }}
                  >
                    {h.box.toUpperCase()}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="stage-card-wrapper" style={{ width: "100%", minWidth: 0 }}>
      {/* Step Header */}
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 02 / 08 • Process Diagram Deconstruction &amp; Brainstorm
        </span>
        <h2 className="stage-title">Deconstruct Process Diagram: Making Sugar from Sugarcane</h2>
        <p className="stage-subtitle">
          Analyze the 7 sequential stages from raw field cultivation to refined crystalline sugar. Identify key features: field maturation (12–18 months), dual harvesting (combine harvester vs manual hand sickle), mechanical roller crushing, limestone purification, thermal evaporation, and centrifugal separation.
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
          instruction="Focus Timer: 3 minutes to deconstruct the 7 sugarcane processing stages: field maturation (12–18m), dual harvesting, roller crushing, limestone filtration, thermal evaporation, centrifugal separation, and final drying."
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
            <Table size={14} />
            <span>Interactive Process Engine</span>
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
              title="Split View (Process Visualizer + Stage Scroller + Presenter Dock)"
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

      {/* STAGE WORKSPACE: ZERO-SCROLL 3-COLUMN SPLIT OR FULL WIDTH */}
      {stageLayout === "split" && viewMode === "smartboard_table" ? (
        /* ZERO-SCROLL 3-COLUMN SPLIT VIEW: Visualizer (Left) | Individual Scroller Spine (Middle) | Presenter Dock (Right) */
        <div className="stage-split-grid">
          {/* Left Column: 7-Stage Process Visualizer */}
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
            <SmartBoardTableMatrix
              highlightMode={highlightMode}
              onHighlightModeChange={(mode: DiagramViewMode) => {
                setHighlightMode(mode);
                if (mode !== "all" && mode !== "both") {
                  setSelectedHotspotId(mode);
                }
              }}
              selectedCohortId={selectedHotspotId}
              onSelectCohort={(id) => handleSelectComponent(id)}
              showInternalToolbar={true}
              showDeepDiveCard={false}
            />
          </div>

          {/* Middle Column: Individual Stage Scroller Spine */}
          <div style={{ minWidth: 0, height: "100%" }}>
            {renderStageScroller(false)}
          </div>

          {/* Right Column: Live Smart Board Presenter Dock (with Auto-Scroll) */}
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
                onHighlightModeChange={(mode: DiagramViewMode) => {
                  setHighlightMode(mode);
                  if (mode !== "all" && mode !== "both") {
                    setSelectedHotspotId(mode);
                  }
                }}
                selectedCohortId={selectedHotspotId}
                onSelectCohort={(id) => handleSelectComponent(id)}
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
                  src={TASK1_DATA.imageFileName.startsWith('/') ? TASK1_DATA.imageFileName : '/' + TASK1_DATA.imageFileName}
                  alt="IELTS Academic Task 1 Making Sugar from Sugarcane Process Diagram"
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
                  Official Cambridge IELTS Academic Question Diagram • The Process of Making Sugar from Sugarcane (7 Stages)
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

            {/* Strategic 7-Stage Process Inspector */}
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
                <Sparkles size={17} color="#2563eb" />
                <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  7-Stage Manufacturing Process Inspector
                </h4>
              </div>
              <div className="custom-smart-scroller" style={{ display: "flex", flexDirection: "column", gap: "8px", maxHeight: "240px", overflowY: "auto" }}>
                {STAGE_HOTSPOTS.map((h) => {
                  const isSelected = selectedHotspotId === h.id;
                  return (
                    <div
                      key={h.id}
                      onClick={() => handleSelectComponent(h.id)}
                      style={{
                        padding: "8px 12px",
                        borderRadius: "10px",
                        background: isSelected ? "#eff6ff" : "#f8fafc",
                        border: isSelected ? `1.5px solid ${h.color}` : "1px solid #e2e8f0",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        cursor: "pointer",
                        transition: "all 0.15s ease"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span
                          style={{
                            width: "32px",
                            height: "24px",
                            borderRadius: "6px",
                            background: h.color,
                            color: "#ffffff",
                            fontSize: "0.7rem",
                            fontWeight: 800,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                          }}
                        >
                          {h.number.replace("Stage ", "")}
                        </span>
                        <div>
                          <strong style={{ fontSize: "0.85rem", color: "#0f172a" }}>{h.name}</strong>
                          <div style={{ fontSize: "0.74rem", color: "#64748b" }}>{h.equipmentOrRole}</div>
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: "0.74rem",
                          fontWeight: 800,
                          padding: "2px 8px",
                          borderRadius: "6px",
                          background: `${h.color}15`,
                          color: h.color
                        }}
                      >
                        {h.box.toUpperCase()}
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
              padding: "20px"
            }}
          >
            <div
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                width: "96vw",
                maxWidth: "1550px",
                maxHeight: "94vh",
                overflowY: "auto",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
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
                    The Process of Making Sugar from Sugarcane (7 Stages)
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

              {/* Modal 3-Column Split View: Visualizer (Left) | Scroller Spine (Middle) | Presenter Dock (Right) */}
              <div style={{ display: "grid", gridTemplateColumns: "1.3fr 210px 1.2fr", gap: "14px", alignItems: "stretch", minHeight: "560px" }}>
                <div style={{ background: "#ffffff", borderRadius: "18px", border: "1.5px solid #e2e8f0", padding: "16px" }}>
                  <SmartBoardTableMatrix
                    highlightMode={highlightMode}
                    onHighlightModeChange={(mode: DiagramViewMode) => {
                      setHighlightMode(mode);
                      if (mode !== "all" && mode !== "both") {
                        setSelectedHotspotId(mode);
                      }
                    }}
                    selectedCohortId={selectedHotspotId}
                    onSelectCohort={(id) => handleSelectComponent(id)}
                    showInternalToolbar={true}
                    showDeepDiveCard={false}
                  />
                </div>
                <div>{renderStageScroller(true)}</div>
                <div>{renderPresenterDock(true)}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
