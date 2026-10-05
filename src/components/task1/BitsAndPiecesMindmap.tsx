import React, { useState } from "react";
import {
  Layers,
  TrendingDown,
  TrendingUp,
  ChevronRight,
  Sparkles,
  GitCommit,
  BookOpen,
  Maximize2,
  Grid,
  Columns
} from "lucide-react";

interface MindmapBranch {
  id: string;
  title: string;
  badge: string;
  color: string;
  borderColor: string;
  bgLight: string;
  icon: React.ReactNode;
  summary: string;
  pieces: {
    label: string;
    value?: string;
    detail: string;
    band9Application: string;
  }[];
}

const MINDMAP_BRANCHES: MindmapBranch[] = [
  {
    id: "parameters",
    title: "Piece 1: Introduction & Essential Graph Parameters",
    badge: "Introduction Anchor",
    color: "#4338ca",
    borderColor: "#c7d2fe",
    bgLight: "#eef2ff",
    icon: <BookOpen size={20} color="#4f46e5" />,
    summary:
      "Every high-scoring report begins with an unambiguous paraphrase of the four key parameters: metric, subjects, timeframe, and unit.",
    pieces: [
      {
        label: "Metric & Subject",
        value: "Average CO2 emissions per person",
        detail:
          "Measures per capita carbon dioxide released into the environment across four European countries.",
        band9Application:
          "“The line graph illustrates average carbon dioxide (CO2) emissions per person across four European countries...”"
      },
      {
        label: "Countries & Timeframe",
        value: "UK, Sweden, Italy, Portugal (1967–2007)",
        detail:
          "Four nations tracked over a continuous 40-year historical timespan at 10-year recorded intervals.",
        band9Application:
          "“...namely the United Kingdom, Sweden, Italy, and Portugal, spanning a forty-year period from 1967 to 2007...”"
      },
      {
        label: "Unit of Measurement",
        value: "Metric Tonnes",
        detail:
          "Displayed along the vertical Y-axis ranging from 0 to 12 metric tonnes.",
        band9Application:
          "“...with measurements calibrated in metric tonnes per individual.”"
      }
    ]
  },
  {
    id: "overview",
    title: "Piece 2: Macro Overview (The Strategic 2-Way Dichotomy)",
    badge: "Overview Engine",
    color: "#0369a1",
    borderColor: "#bae6fd",
    bgLight: "#f0f9ff",
    icon: <Layers size={20} color="#0284c7" />,
    summary:
      "The examiner looks for two contrasting macro trends: two countries with overall reductions versus two with sustained expansion.",
    pieces: [
      {
        label: "Divergence Pattern",
        value: "2 Decreasers vs. 2 Increasers",
        detail:
          "UK and Sweden experienced long-term net reductions, whereas Italy and Portugal saw significant increases.",
        band9Application:
          "“Overall, emissions in the UK and Sweden followed a downward trajectory, whereas Italy and Portugal experienced substantial growth.”"
      },
      {
        label: "Dominant Standout",
        value: "UK Supremacy Throughout",
        detail:
          "Despite decreasing, the UK remained the highest emitter in every single year measured.",
        band9Application:
          "“Although the United Kingdom consistently recorded the highest emissions throughout the timeframe...”"
      },
      {
        label: "Extreme Trajectories",
        value: "Sweden Peak/Plunge vs Portugal Quadrupling",
        detail:
          "Sweden showed the most volatility (peaked then plunged), while Portugal experienced a dramatic 4-fold surge to converge with Sweden.",
        band9Application:
          "“...Sweden exhibited the most volatile fluctuation, while Portugal registered the steepest proportional increase to converge with Sweden by 2007.”"
      }
    ]
  },
  {
    id: "decreasers",
    title: "Piece 3: Body 1 (The Net Decreasers: UK & Sweden)",
    badge: "Body 1 Focus",
    color: "#7e22ce",
    borderColor: "#e9d5ff",
    bgLight: "#faf5ff",
    icon: <TrendingDown size={20} color="#9333ea" />,
    summary:
      "Cluster UK and Sweden together in Body Paragraph 1. Both began high (&gt;8.5 tonnes) and finished with net declines, though Sweden was far more volatile.",
    pieces: [
      {
        label: "United Kingdom (-.-.-.)",
        value: "10.8t → 8.7t (-2.1t net)",
        detail:
          "Dominant emitter throughout. Nearly flat between 1967 and 1977 (~10.7t), then experienced a steady, unbroken descent to 8.7t.",
        band9Application:
          "“Starting at approximately 10.8 metric tonnes per person in 1967, British emissions remained nearly unchanged in 1977 before undergoing a steady, uninterrupted decline to 8.7 tonnes by 2007.”"
      },
      {
        label: "Sweden (- - -)",
        value: "8.6t → 10.2t (Peak) → 5.4t",
        detail:
          "Second highest initially (8.6t), surged rapidly to an apex above 10t in 1977, then collapsed over 30 years to 5.4t (nearly halved from peak).",
        band9Application:
          "“Sweden climbed sharply to peak at approximately 10.2 tonnes in 1977... thereafter plummeting precipitously over the remaining thirty years to 5.4 tonnes.”"
      }
    ]
  },
  {
    id: "increasers",
    title: "Piece 4: Body 2 (The Net Increasers: Italy & Portugal)",
    badge: "Body 2 Focus",
    color: "#b91c1c",
    borderColor: "#fecaca",
    bgLight: "#fef2f2",
    icon: <TrendingUp size={20} color="#b91c1c" />,
    summary:
      "Cluster Italy and Portugal together in Body Paragraph 2. Both started lower (&lt;4.5 tonnes) and experienced substantial, continuous per capita growth.",
    pieces: [
      {
        label: "Italy (———)",
        value: "4.2t → 7.6t (+81% growth)",
        detail:
          "Started 3rd at 4.2t in 1967, rose steadily to 6.2t (1977) and 6.7t (1987), overtaking Sweden, then plateaued identically at 7.6t from 1997 to 2007.",
        band9Application:
          "“Italy expanded steadily over three decades, surpassing Sweden around 1987, before plateauing identically at 7.6 tonnes from 1997 through 2007.”"
      },
      {
        label: "Portugal (••••)",
        value: "1.2t → 5.4t (>4-Fold Surge)",
        detail:
          "Lowest contributor by far in 1967 (1.2t). Experienced continuous, rapid expansion over 40 years, closing the gap to equalize with Sweden at 5.4t.",
        band9Application:
          "“Portugal underwent a dramatic, more than four-fold surge, ascending steadily to finish at 5.4 metric tonnes in 2007, precisely converging with Sweden.”"
      }
    ]
  },
  {
    id: "intersections",
    title: "Piece 5: Critical Intersections & Ranking Shifts",
    badge: "Band 9 High-Scoring Details",
    color: "#c2410c",
    borderColor: "#ffedd5",
    bgLight: "#fff7ed",
    icon: <GitCommit size={20} color="#ea580c" />,
    summary:
      "To reach Band 8+, you must report the exact intersection points where lines crossed and rankings shifted.",
    pieces: [
      {
        label: "1987 Milestone",
        value: "Italy Overtakes Sweden (~6.8t)",
        detail:
          "Around 1987, Italy's rising emissions line crossed Sweden's rapidly plunging line, promoting Italy to the second-highest position.",
        band9Application:
          "“...reaching 6.7 metric tonnes in 1987, at which point Italy officially overtook Sweden's declining figure.”"
      },
      {
        label: "2007 Milestone",
        value: "Sweden & Portugal Convergence (5.4t)",
        detail:
          "By the end of the timeframe in 2007, Sweden's 30-year descent and Portugal's 40-year climb met precisely at 5.4 metric tonnes.",
        band9Application:
          "“...before concluding the survey period by precisely converging with Sweden at an identical 5.4 metric tonnes per person.”"
      }
    ]
  }
];

interface BitsAndPiecesMindmapProps {
  isEntireScreen?: boolean;
  onToggleFullscreen?: () => void;
}

export const BitsAndPiecesMindmap: React.FC<BitsAndPiecesMindmapProps> = ({
  isEntireScreen = false,
  onToggleFullscreen
}) => {
  const [activeBranchId, setActiveBranchId] = useState<string>("overview");
  const [layoutMode, setLayoutMode] = useState<"dual_pane" | "all_branches">("dual_pane");

  const activeBranch =
    MINDMAP_BRANCHES.find((b) => b.id === activeBranchId) || MINDMAP_BRANCHES[0];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        padding: isEntireScreen ? "20px 28px" : "16px",
        background: isEntireScreen ? "#f8fafc" : "var(--slate-50)",
        borderRadius: isEntireScreen ? "0" : "18px",
        overflowY: "auto",
        boxSizing: "border-box"
      }}
    >
      {/* Top Header Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "14px",
          background: "#ffffff",
          padding: "10px 16px",
          borderRadius: "14px",
          border: "1.5px solid var(--border-subtle)",
          boxShadow: "var(--shadow-sm)"
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              className="apple-badge accent"
              style={{ fontSize: "0.74rem", fontWeight: 800 }}
            >
              Bits &amp; Pieces Mindmap Engine
            </span>
            <span style={{ fontSize: "0.78rem", color: "var(--slate-500)", fontWeight: 650 }}>
              5 Core Architectural Branches
            </span>
          </div>
          <h3
            style={{
              fontSize: isEntireScreen ? "1.25rem" : "1.08rem",
              fontWeight: 800,
              color: "var(--slate-900)",
              margin: "3px 0 0"
            }}
          >
            CO2 Emissions Line Graph: Logical Deconstruction Mindmap
          </h3>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          {/* Layout Mode Switcher */}
          <div
            style={{
              display: "flex",
              background: "var(--slate-100)",
              borderRadius: "10px",
              padding: "3px"
            }}
          >
            <button
              type="button"
              onClick={() => setLayoutMode("dual_pane")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "5px 10px",
                borderRadius: "7px",
                border: "none",
                fontSize: "0.76rem",
                fontWeight: 750,
                cursor: "pointer",
                background: layoutMode === "dual_pane" ? "#ffffff" : "transparent",
                color: layoutMode === "dual_pane" ? "var(--slate-900)" : "var(--slate-600)",
                boxShadow: layoutMode === "dual_pane" ? "var(--shadow-sm)" : "none"
              }}
            >
              <Columns size={13} /> Deep Dive Inspector
            </button>
            <button
              type="button"
              onClick={() => setLayoutMode("all_branches")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "5px 10px",
                borderRadius: "7px",
                border: "none",
                fontSize: "0.76rem",
                fontWeight: 750,
                cursor: "pointer",
                background: layoutMode === "all_branches" ? "#ffffff" : "transparent",
                color: layoutMode === "all_branches" ? "var(--slate-900)" : "var(--slate-600)",
                boxShadow: layoutMode === "all_branches" ? "var(--shadow-sm)" : "none"
              }}
            >
              <Grid size={13} /> All 5 Branches View
            </button>
          </div>

          {/* Optional Entire Screen Trigger if not already full-screen */}
          {!isEntireScreen && onToggleFullscreen && (
            <button
              type="button"
              onClick={onToggleFullscreen}
              className="apple-touch-btn primary"
              style={{
                padding: "6px 14px",
                fontSize: "0.78rem",
                fontWeight: 750,
                gap: "5px",
                boxShadow: "0 2px 6px rgba(0, 113, 227, 0.2)"
              }}
            >
              <Maximize2 size={13} /> Entire Screen
            </button>
          )}
        </div>
      </div>

      {/* Horizontal Branch Quick-Jumper Pills (Available in both modes) */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          overflowX: "auto",
          paddingBottom: "8px",
          marginBottom: "12px"
        }}
      >
        {MINDMAP_BRANCHES.map((b) => {
          const isSelected = b.id === activeBranchId;
          return (
            <button
              key={b.id}
              type="button"
              onClick={() => {
                setActiveBranchId(b.id);
                if (layoutMode === "all_branches") {
                  const el = document.getElementById(`mindmap-branch-${b.id}`);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "10px",
                border: isSelected ? `1.5px solid ${b.color}` : "1px solid var(--border-subtle)",
                background: isSelected ? b.bgLight : "#ffffff",
                color: isSelected ? b.color : "var(--slate-700)",
                fontSize: "0.78rem",
                fontWeight: 750,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.15s ease",
                boxShadow: isSelected ? "var(--shadow-sm)" : "none"
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: b.color
                }}
              />
              {b.badge}
            </button>
          );
        })}
      </div>

      {/* DUAL PANE VIEW */}
      {layoutMode === "dual_pane" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isEntireScreen ? "330px 1fr" : "minmax(250px, 300px) 1fr",
            gap: isEntireScreen ? "20px" : "14px",
            flex: 1,
            minHeight: 0
          }}
        >
          {/* Left Column: Interactive Branch Selectors */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", overflowY: "auto" }}>
            {MINDMAP_BRANCHES.map((branch) => {
              const isSelected = branch.id === activeBranchId;
              return (
                <button
                  key={branch.id}
                  onClick={() => setActiveBranchId(branch.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: isEntireScreen ? "14px 16px" : "11px 13px",
                    borderRadius: "14px",
                    background: isSelected ? "#ffffff" : "transparent",
                    border: isSelected ? `2px solid ${branch.color}` : "1.5px solid var(--border-subtle)",
                    boxShadow: isSelected ? "0 4px 14px rgba(0,0,0,0.06)" : "none",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.15s ease"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        width: isEntireScreen ? "40px" : "34px",
                        height: isEntireScreen ? "40px" : "34px",
                        borderRadius: "10px",
                        background: branch.bgLight,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      {branch.icon}
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 800,
                          color: branch.color,
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                          display: "block"
                        }}
                      >
                        {branch.badge}
                      </span>
                      <strong
                        style={{
                          fontSize: isEntireScreen ? "0.96rem" : "0.86rem",
                          color: "var(--slate-900)"
                        }}
                      >
                        {branch.title.split(":")[0]}
                      </strong>
                    </div>
                  </div>
                  <ChevronRight
                    size={16}
                    color={isSelected ? branch.color : "var(--slate-400)"}
                    style={{
                      transform: isSelected ? "translateX(2px)" : "none",
                      transition: "transform 0.15s ease"
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Branch Breakdown */}
          <div
            style={{
              background: "#ffffff",
              border: `2px solid ${activeBranch.borderColor}`,
              borderRadius: "18px",
              padding: isEntireScreen ? "24px 28px" : "18px 20px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto"
            }}
          >
            {/* Branch Header */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
              <span
                className="apple-badge"
                style={{
                  background: activeBranch.color,
                  color: "#ffffff",
                  fontSize: isEntireScreen ? "0.8rem" : "0.72rem",
                  fontWeight: 800,
                  padding: "3px 10px"
                }}
              >
                {activeBranch.badge}
              </span>
              <h4
                style={{
                  fontSize: isEntireScreen ? "1.28rem" : "1.08rem",
                  fontWeight: 800,
                  color: "var(--slate-900)",
                  margin: 0
                }}
              >
                {activeBranch.title}
              </h4>
            </div>

            <p
              style={{
                fontSize: isEntireScreen ? "1rem" : "0.88rem",
                color: "var(--slate-600)",
                margin: "0 0 16px",
                lineHeight: 1.55
              }}
            >
              {activeBranch.summary}
            </p>

            {/* Sub-pieces Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
              {activeBranch.pieces.map((piece, idx) => (
                <div
                  key={idx}
                  style={{
                    background: activeBranch.bgLight,
                    border: `1.5px solid ${activeBranch.borderColor}`,
                    borderRadius: "14px",
                    padding: isEntireScreen ? "16px 20px" : "13px 16px"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "6px",
                      flexWrap: "wrap",
                      gap: "6px"
                    }}
                  >
                    <strong
                      style={{
                        fontSize: isEntireScreen ? "1.08rem" : "0.95rem",
                        color: activeBranch.color
                      }}
                    >
                      {piece.label}
                    </strong>
                    {piece.value && (
                      <span
                        style={{
                          fontSize: isEntireScreen ? "0.85rem" : "0.78rem",
                          fontWeight: 750,
                          background: "#ffffff",
                          padding: "3px 10px",
                          borderRadius: "8px",
                          border: `1px solid ${activeBranch.borderColor}`,
                          color: "var(--slate-800)"
                        }}
                      >
                        {piece.value}
                      </span>
                    )}
                  </div>

                  <p
                    style={{
                      fontSize: isEntireScreen ? "0.95rem" : "0.85rem",
                      color: "var(--slate-700)",
                      margin: "0 0 10px",
                      lineHeight: 1.5
                    }}
                  >
                    {piece.detail}
                  </p>

                  <div
                    style={{
                      background: "#ffffff",
                      borderRadius: "10px",
                      padding: isEntireScreen ? "12px 16px" : "9px 13px",
                      borderLeft: `3.5px solid ${activeBranch.color}`
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "3px" }}>
                      <Sparkles size={12} color={activeBranch.color} />
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 800,
                          color: "var(--slate-500)",
                          textTransform: "uppercase"
                        }}
                      >
                        Band 9 Phrasing:
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: isEntireScreen ? "0.94rem" : "0.84rem",
                        fontStyle: "italic",
                        color: "var(--slate-800)",
                        lineHeight: 1.5
                      }}
                    >
                      {piece.band9Application}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ALL 5 BRANCHES VIEW (Expansive Grid for 4K / Smart Board) */}
      {layoutMode === "all_branches" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isEntireScreen ? "repeat(2, 1fr)" : "1fr",
            gap: "16px",
            overflowY: "auto"
          }}
        >
          {MINDMAP_BRANCHES.map((branch) => (
            <div
              key={branch.id}
              id={`mindmap-branch-${branch.id}`}
              style={{
                background: "#ffffff",
                border: `2px solid ${branch.borderColor}`,
                borderRadius: "16px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                boxShadow: "var(--shadow-sm)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      background: branch.bgLight,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    {branch.icon}
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 800,
                        color: branch.color,
                        textTransform: "uppercase"
                      }}
                    >
                      {branch.badge}
                    </span>
                    <h4 style={{ fontSize: "1.02rem", fontWeight: 800, margin: 0, color: "var(--slate-900)" }}>
                      {branch.title}
                    </h4>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
                {branch.summary}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {branch.pieces.map((piece, i) => (
                  <div
                    key={i}
                    style={{
                      background: branch.bgLight,
                      border: `1px solid ${branch.borderColor}`,
                      borderRadius: "10px",
                      padding: "10px 12px"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <strong style={{ fontSize: "0.88rem", color: branch.color }}>{piece.label}</strong>
                      {piece.value && (
                        <span style={{ fontSize: "0.74rem", fontWeight: 700, background: "#ffffff", padding: "1px 6px", borderRadius: "5px", border: `1px solid ${branch.borderColor}` }}>
                          {piece.value}
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: "0.82rem", color: "var(--slate-700)", margin: "0 0 6px", lineHeight: 1.4 }}>
                      {piece.detail}
                    </p>
                    <div style={{ background: "#ffffff", padding: "6px 10px", borderRadius: "6px", borderLeft: `2.5px solid ${branch.color}`, fontSize: "0.8rem", fontStyle: "italic", color: "var(--slate-800)" }}>
                      {piece.band9Application}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
