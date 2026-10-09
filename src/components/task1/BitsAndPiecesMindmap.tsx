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

interface MindmapPiece {
  label: string;
  value?: string;
  detail: string;
  band9Application: string;
}

interface MindmapBranch {
  id: string;
  title: string;
  badge: string;
  color: string;
  borderColor: string;
  bgLight: string;
  icon: React.ReactNode;
  summary: string;
  pieces: MindmapPiece[];
}

const MINDMAP_BRANCHES: MindmapBranch[] = [
  {
    id: "parameters",
    title: "Piece 1: Introduction & Essential Table Parameters",
    badge: "Introduction Anchor",
    color: "#4338ca",
    borderColor: "#c7d2fe",
    bgLight: "#eef2ff",
    icon: <BookOpen size={20} color="#4f46e5" />,
    summary:
      "A Band 9 report begins with an unambiguous paraphrase of the four core parameters: specific subject, five tracked institutions, six-year timeframe, and percentage units.",
    pieces: [
      {
        label: "Subject & Metric",
        value: "Higher Education Progression Rate",
        detail:
          "Measures the percentage of secondary school pupils who proceeded to tertiary/university education.",
        band9Application:
          "“The table illustrates the proportion of pupils who proceeded to tertiary education from five secondary schools...”"
      },
      {
        label: "Five Institutions & Years",
        value: "Royston, Greystone, Harble, Fairfield, Crackend (1995–2000)",
        detail:
          "Five schools tracked across six consecutive annual intervals from 1995 to 2000.",
        band9Application:
          "“...namely Royston Academy, Greystone High, Harble Secondary, Fairfield Girls, and Crackend Boys between 1995 and 2000.”"
      },
      {
        label: "Unit of Measurement",
        value: "Percentages (%)",
        detail:
          "Data points range from a low of 30% (Harble in 1995) to a high of 90% (Greystone in 1995).",
        band9Application:
          "“...with all figures calibrated in percentages of the graduating cohort.”"
      }
    ]
  },
  {
    id: "overview",
    title: "Piece 2: Macro Overview (4-to-1 Split & Dominant Divergence)",
    badge: "Overview Engine",
    color: "#0369a1",
    borderColor: "#bae6fd",
    bgLight: "#f0f9ff",
    icon: <Layers size={20} color="#0284c7" />,
    summary:
      "Key macro features: four rising schools versus one solitary decliner, along with the most dramatic riser and the most stable institution.",
    pieces: [
      {
        label: "4-to-1 Trajectory Split",
        value: "4 Rose vs. 1 Fell (Greystone Sole Decliner)",
        detail:
          "Tertiary entry expanded across four schools, while Greystone High was the only school to suffer an uninterrupted decline.",
        band9Application:
          "“Overall, higher education entry rates rose in four out of the five secondary schools, with Greystone High being the sole institution to experience a continuous downward trend.”"
      },
      {
        label: "Meteoric Surge",
        value: "Harble Secondary: 30% → 80% (1st Place)",
        detail:
          "Nearly tripled its initial percentage to vault from last place in 1995 to first place in 2000.",
        band9Application:
          "“Furthermore, while Harble Secondary exhibited the most dramatic expansion to finish with the highest percentage...”"
      },
      {
        label: "Static Baseline",
        value: "Crackend Boys: Stable between 59% & 62%",
        detail:
          "Oscillated within a tight 3-percentage-point band throughout the entire six-year span.",
        band9Application:
          "“...Crackend Boys maintained notable consistency throughout the six-year period.”"
      }
    ]
  },
  {
    id: "body1_risers",
    title: "Piece 3: Body 1 (The Surging Risers: Harble & Fairfield)",
    badge: "Body 1 Focus",
    color: "#059669",
    borderColor: "#a7f3d0",
    bgLight: "#ecfdf5",
    icon: <TrendingUp size={20} color="#059669" />,
    summary:
      "Cluster Harble Secondary and Fairfield Girls in Body 1. Both displayed substantial upward momentum to finish as the top two performers in 2000.",
    pieces: [
      {
        label: "Harble Secondary (Meteoric Surge)",
        value: "30% → 80% (+50% pts, Nearly Tripled)",
        detail:
          "Lowest starter at 30% in 1995, rose to 35% (1996), 40% (1997), 50% (1998), 60% (1999), before surging by 20% in 2000 to finish 1st at 80%.",
        band9Application:
          "“Starting with the lowest figure of 30% in 1995, Harble Secondary rose steadily to 40% in 1997 and 60% in 1999, before jumping by 20 percentage points to finish at a peak of 80%—nearly tripling its baseline.”"
      },
      {
        label: "Fairfield Girls (Strong Riser)",
        value: "65% → 79% (+14% pts, 2nd Place)",
        detail:
          "Started second at 65%, rose to 75% in 1997 (tying Greystone) and held 75% in 1998 (leading). Rebounded from a 1999 dip (70%) to end at 79%.",
        band9Application:
          "“Fairfield Girls climbed from 65% in 1995 to equalize with Greystone at 75% in 1997. Despite a transient dip to 70% in 1999, Fairfield rebounded to conclude at 79%, securing second position.”"
      }
    ]
  },
  {
    id: "body2_others",
    title: "Piece 4: Body 2 (Decliner & Moderates: Greystone, Royston, Crackend)",
    badge: "Body 2 Focus",
    color: "#dc2626",
    borderColor: "#fecaca",
    bgLight: "#fef2f2",
    icon: <TrendingDown size={20} color="#dc2626" />,
    summary:
      "Cluster Greystone High, Royston Academy, and Crackend Boys in Body 2. Highlights Greystone's uninterrupted fall, Royston's stepped rise, and Crackend's unwavering stability.",
    pieces: [
      {
        label: "Greystone High (Solitary Decliner)",
        value: "90% → 70% (-20% pts, Unbroken Slide)",
        detail:
          "Commanding 25-point lead in 1995 (90%), fell steeply to 80% (1996) and 75% (1997), followed by gradual declines to 73%, 72%, and 70% (slipping to 3rd).",
        band9Application:
          "“Greystone High was the only school to decline, surrendering its commanding initial lead of 90% as it fell consecutively each year to end at 70%.”"
      },
      {
        label: "Royston Academy (Stepped Growth)",
        value: "50% → 60% (+10% pts, Stepped Pattern)",
        detail:
          "Began at 50%, stepped to 52% and 54% (1997–98 plateau), then stepped up to 60% (1999–2000 plateau).",
        band9Application:
          "“Meanwhile, Royston Academy progressed in a stepped manner from 50% to plateau at 54% in 1997–1998, before leveling off at 60% from 1999 onwards.”"
      },
      {
        label: "Crackend Boys (Static Baseline)",
        value: "60% → 62% (+2% pts, Static Baseline)",
        detail:
          "Oscillated tightly between 59% and 62% across the entire timeframe, exhibiting near-total stability.",
        band9Application:
          "“Crackend Boys displayed remarkable stability, fluctuating narrowly between 59% and 62% across the entire timeframe.”"
      }
    ]
  },
  {
    id: "intersections",
    title: "Piece 5: Critical Intersections & Hierarchy Inversion",
    badge: "Band 9 High-Scoring Milestones",
    color: "#7c3aed",
    borderColor: "#ddd6fe",
    bgLight: "#faf5ff",
    icon: <GitCommit size={20} color="#7c3aed" />,
    summary:
      "To achieve Band 8+, identify and report the exact numerical crossover points where school trajectories intersected or tied.",
    pieces: [
      {
        label: "1997 Crossover",
        value: "Fairfield & Greystone Equalize at 75%",
        detail:
          "In 1997, Fairfield Girls' upward climb and Greystone High's decline intersected at exactly 75%, before Fairfield took the lead in 1998.",
        band9Application:
          "“In 1997, Fairfield Girls equalized with Greystone High at exactly 75%, prior to overtaking the former leader in 1998.”"
      },
      {
        label: "1999 Triple Convergence",
        value: "Royston, Harble & Crackend Tie at 60%",
        detail:
          "In 1999, Royston's stepped climb, Harble's accelerating surge, and Crackend's steady rate all met at exactly 60%.",
        band9Application:
          "“Notably, in 1999, Royston, Harble, and Crackend all converged at an identical figure of exactly 60%.”"
      },
      {
        label: "2000 Complete Hierarchy Inversion",
        value: "Harble 1st (80%) vs. Greystone 3rd (70%)",
        detail:
          "Harble leaped from bottom place (30%) to top place (80%), while Greystone dropped from top place (90%) to third place (70%).",
        band9Application:
          "“By the close of the period, the initial hierarchy had inverted, with Harble displacing Greystone at the top of the table.”"
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
            Higher Education Progression: Logical Deconstruction Mindmap
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

          {/* Optional Entire Screen Trigger */}
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

      {/* Horizontal Branch Quick-Jumper Pills */}
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
              onClick={() => setActiveBranchId(b.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "10px",
                border: isSelected ? `2px solid ${b.color}` : "1.5px solid var(--border-subtle)",
                background: isSelected ? b.bgLight : "#ffffff",
                color: isSelected ? b.color : "var(--slate-700)",
                fontWeight: isSelected ? 800 : 650,
                fontSize: "0.82rem",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.15s ease",
                boxShadow: isSelected ? `0 2px 8px ${b.color}25` : "none"
              }}
            >
              <span style={{ display: "flex", alignItems: "center" }}>{b.icon}</span>
              <span>{b.title.split(":")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Mode 1: Dual-Pane Deep Dive Inspector */}
      {layoutMode === "dual_pane" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isEntireScreen ? "340px 1fr" : "300px 1fr",
            gap: "16px",
            flex: 1,
            minHeight: "480px"
          }}
        >
          {/* Left Column: Branch Selector List */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              background: "#ffffff",
              padding: "14px",
              borderRadius: "16px",
              border: "1.5px solid var(--border-subtle)",
              overflowY: "auto"
            }}
          >
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: 800,
                color: "var(--slate-400)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "4px"
              }}
            >
              Select Architecture Branch:
            </div>

            {MINDMAP_BRANCHES.map((branch) => {
              const isSelected = branch.id === activeBranchId;
              return (
                <div
                  key={branch.id}
                  onClick={() => setActiveBranchId(branch.id)}
                  style={{
                    padding: "12px",
                    borderRadius: "12px",
                    border: isSelected ? `2px solid ${branch.color}` : "1.5px solid var(--border-subtle)",
                    background: isSelected ? branch.bgLight : "var(--slate-50)",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    transition: "all 0.15s ease"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      {branch.icon}
                      <span
                        style={{
                          fontWeight: 800,
                          fontSize: "0.86rem",
                          color: isSelected ? branch.color : "var(--slate-900)"
                        }}
                      >
                        {branch.badge}
                      </span>
                    </div>
                    <ChevronRight size={15} color={isSelected ? branch.color : "var(--slate-400)"} />
                  </div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--slate-800)" }}>
                    {branch.title.split(": ")[1]}
                  </div>
                  <div
                    style={{
                      fontSize: "0.74rem",
                      color: "var(--slate-500)",
                      lineHeight: 1.35,
                      marginTop: "2px"
                    }}
                  >
                    {branch.pieces.length} analytical focal points
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Branch Cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              background: "#ffffff",
              padding: "20px",
              borderRadius: "16px",
              border: `2px solid ${activeBranch.borderColor}`,
              overflowY: "auto"
            }}
          >
            {/* Active Branch Header */}
            <div
              style={{
                borderBottom: `1.5px solid ${activeBranch.borderColor}`,
                paddingBottom: "12px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <span
                  style={{
                    background: activeBranch.color,
                    color: "#ffffff",
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    padding: "3px 8px",
                    borderRadius: "6px"
                  }}
                >
                  {activeBranch.badge}
                </span>
                <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  {activeBranch.title}
                </h4>
              </div>
              <p style={{ margin: "6px 0 0", fontSize: "0.88rem", color: "var(--slate-600)", lineHeight: 1.5 }}>
                {activeBranch.summary}
              </p>
            </div>

            {/* Pieces Grid */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {activeBranch.pieces.map((piece, idx) => (
                <div
                  key={piece.label}
                  style={{
                    background: activeBranch.bgLight,
                    border: `1.5px solid ${activeBranch.borderColor}`,
                    borderRadius: "14px",
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "6px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span
                        style={{
                          width: "22px",
                          height: "22px",
                          borderRadius: "50%",
                          background: activeBranch.color,
                          color: "#ffffff",
                          fontSize: "0.75rem",
                          fontWeight: 800,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        {idx + 1}
                      </span>
                      <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)" }}>
                        {piece.label}
                      </strong>
                    </div>
                    {piece.value && (
                      <span
                        style={{
                          background: "#ffffff",
                          border: `1px solid ${activeBranch.borderColor}`,
                          borderRadius: "8px",
                          padding: "3px 10px",
                          fontSize: "0.82rem",
                          fontWeight: 800,
                          color: activeBranch.color
                        }}
                      >
                        {piece.value}
                      </span>
                    )}
                  </div>

                  <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
                    {piece.detail}
                  </p>

                  <div
                    style={{
                      background: "#ffffff",
                      borderRadius: "10px",
                      padding: "10px 12px",
                      border: "1px solid var(--border-subtle)",
                      marginTop: "4px"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "3px" }}>
                      <Sparkles size={13} color={activeBranch.color} />
                      <span style={{ fontSize: "0.72rem", fontWeight: 800, color: activeBranch.color, textTransform: "uppercase" }}>
                        Band 9 Lexical Application
                      </span>
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.88rem",
                        fontStyle: "italic",
                        color: "var(--slate-800)",
                        lineHeight: 1.55
                      }}
                    >
                      {piece.band9Application}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: All 5 Branches Overview View */}
      {layoutMode === "all_branches" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isEntireScreen ? "repeat(3, 1fr)" : "repeat(2, 1fr)",
            gap: "16px"
          }}
        >
          {MINDMAP_BRANCHES.map((b) => (
            <div
              key={b.id}
              style={{
                background: "#ffffff",
                border: `2px solid ${b.borderColor}`,
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    background: b.color,
                    color: "#ffffff",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    padding: "2px 6px",
                    borderRadius: "6px"
                  }}
                >
                  {b.badge}
                </span>
                <h4 style={{ margin: 0, fontSize: "0.95rem", fontWeight: 800, color: "var(--slate-900)" }}>
                  {b.title.split(": ")[1]}
                </h4>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {b.pieces.map((piece) => (
                  <div
                    key={piece.label}
                    style={{
                      background: b.bgLight,
                      borderRadius: "10px",
                      padding: "10px",
                      border: `1px solid ${b.borderColor}`
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: "0.82rem", color: b.color }}>
                      {piece.label}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "var(--slate-700)", marginTop: "2px", lineHeight: 1.4 }}>
                      {piece.detail}
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
