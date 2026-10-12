import React, { useState } from "react";
import {
  Layers,
  TrendingDown,
  TrendingUp,
  ChevronRight,
  Sparkles,
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
    title: "Piece 1: Introduction & Essential Diagram Parameters",
    badge: "Introduction Anchor",
    color: "#4338ca",
    borderColor: "#c7d2fe",
    bgLight: "#eef2ff",
    icon: <BookOpen size={20} color="#4f46e5" />,
    summary:
      "A Band 9 report begins with an unambiguous paraphrase of the essential parameters: comparative diagram format, dual oceanic states (Normal vs. El Niño), Pacific Ocean basin, and atmosphere-marine interaction.",
    pieces: [
      {
        label: "Visual Format & Subject",
        value: "Comparative Atmospheric & Oceanographic Cross-Sections",
        detail:
          "Two vertical cross-section diagrams illustrating meteorological and oceanic circulation across the Pacific Ocean.",
        band9Application:
          "“The diagrams illustrate the atmospheric and oceanic differences between normal weather conditions and an El Niño phenomenon across the Pacific Ocean.”"
      },
      {
        label: "Geographic Scope",
        value: "West Pacific (Australia) to East Pacific (Peru)",
        detail:
          "Tracks atmospheric and marine patterns between the western basin (Australia) and the eastern coastline (Peru).",
        band9Application:
          "“...spanning the equatorial Pacific from Australia in the west to Peru along the eastern rim.”"
      },
      {
        label: "Key Measurement Layers",
        value: "Upper Winds, Surface Warm Pool & Deep Cool Thermocline",
        detail:
          "Diagram details wind directions (trade winds and upper winds), water temperature layers, upwelling vectors, and rainfall/fishery insets.",
        band9Application:
          "“...depicting wind vectors, thermal water stratification, and resultant coastal weather and fisheries.”"
      }
    ]
  },
  {
    id: "overview",
    title: "Piece 2: Macro Overview (Grand Ocean-Atmospheric Inversion)",
    badge: "Overview Engine",
    color: "#0369a1",
    borderColor: "#bae6fd",
    bgLight: "#f0f9ff",
    icon: <Layers size={20} color="#0284c7" />,
    summary:
      "The macro overview must identify the fundamental systematic reversal: westward winds and Australian rain vs. eastward warm water surge, Australian drought, and Peruvian fishery collapse.",
    pieces: [
      {
        label: "Atmospheric & Wind Reversal",
        value: "Strong Westward Trade Winds vs. Eastward Flow",
        detail:
          "Trade winds blow strongly westwards normally, but weaken markedly during El Niño while upper winds reverse eastwards.",
        band9Application:
          "“Overall, normal conditions feature strong trade winds pushing warm water westward, whereas an El Niño event sees trade winds weaken and winds shift eastwards.”"
      },
      {
        label: "Terrestrial Weather Inversion",
        value: "Australian Rain vs. Scorching Aridity",
        detail:
          "Australia shifts from convective storm clouds and abundant rainfall to clear skies, blazing sunshine, and severe drought.",
        band9Application:
          "“...displacing convective rainfall from Australia, which experiences severe drought, eastwards toward South America.”"
      },
      {
        label: "Peruvian Marine Disruption",
        value: "Booming Fisheries vs. Nutrient Starvation",
        detail:
          "Active upwelling and thriving fish populations under normal conditions invert to suppressed nutrients and fishery collapse during El Niño.",
        band9Application:
          "“Concurrently, the cessation of nutrient-rich upwelling off the Peruvian coast causes commercial fish stocks to collapse.”"
      }
    ]
  },
  {
    id: "body1_normal",
    title: "Piece 3: Body 1 (Normal Pacific Equilibrium)",
    badge: "Body 1 Focus",
    color: "#059669",
    borderColor: "#a7f3d0",
    bgLight: "#ecfdf5",
    icon: <TrendingUp size={20} color="#059669" />,
    summary:
      "Examine the standard baseline: robust trade winds, deep western warm pool, convective precipitation over Australia, and productive cold upwelling off Peru.",
    pieces: [
      {
        label: "Easterly Trade Winds & Warm Pool",
        value: "Strong Westward Surface Flow",
        detail:
          "Powerful trade winds blow from east to west, pushing surface warm water into a thick reservoir off the Australian coast.",
        band9Application:
          "“Under normal conditions, powerful trade winds blow westward from the East Pacific, causing warm surface water to accumulate in the western basin.”"
      },
      {
        label: "Australian Convective Rain",
        value: "Storm Clouds & Flourishing Flora",
        detail:
          "Warm western water generates intense atmospheric convection, producing storm clouds and abundant rainfall over Australia.",
        band9Application:
          "“This generates convective storm clouds and substantial rainfall over Australia, sustaining lush terrestrial ecosystems.”"
      },
      {
        label: "Peruvian Upwelling & Fish Stock",
        value: "Cool Water, Rich Nutrients & 2 Thriving Fish",
        detail:
          "Deep cold water laden with nutrients rises along Peru; clear skies accompany flourishing fish populations (indicated by an upward arrow).",
        band9Application:
          "“Meanwhile, off the Peruvian coast, cool water laden with rich nutrients wells up from the ocean depths beneath sunny skies, fostering flourishing fish populations.”"
      }
    ]
  },
  {
    id: "body2_elnino",
    title: "Piece 4: Body 2 (El Niño Climatic Reversal)",
    badge: "Body 2 Focus",
    color: "#dc2626",
    borderColor: "#fecaca",
    bgLight: "#fff1f2",
    icon: <TrendingDown size={20} color="#dc2626" />,
    summary:
      "Deconstruct the El Niño disruption: weakened trade winds, eastward warm water surge, Australian drought, and Peruvian torrential rain and fishery crash.",
    pieces: [
      {
        label: "Weakened Winds & Eastward Surge",
        value: "Warm Water Propelled Eastward",
        detail:
          "Trade winds weaken while upper winds blow strongly eastward; warm water surges across the Pacific, capping the thermocline.",
        band9Application:
          "“During an El Niño phase, this circulation undergoes a marked reversal: trade winds weaken, and warm surface water is propelled eastwards across the basin.”"
      },
      {
        label: "Australian Drought",
        value: "Blazing Sun, Withered Land & Aridity",
        detail:
          "Deprived of warm convective sea surfaces, Australia endures clear skies, scorching sunshine, and severe drought.",
        band9Application:
          "“Consequently, Australia suffers from scorching sunshine and severe drought, with an absence of rain clouds.”"
      },
      {
        label: "Peruvian Rain & Fishery Collapse",
        value: "Storm Clouds, Poor Nutrients & 1 Thin Fish",
        detail:
          "Storm clouds shift to Peru bringing torrential rain; capped thermocline blocks upwelling, leaving waters poor in nutrients and crashing fish stocks (downward arrow).",
        band9Application:
          "“In contrast, storm clouds migrate to Peru, bringing heavy rain accompanied by suppressed upwelling and a precipitous decline in coastal fish stocks.”"
      }
    ]
  },
  {
    id: "lexicon",
    title: "Piece 5: Oceanographic & Comparative Lexicon",
    badge: "Band 9 Vocabulary",
    color: "#7c3aed",
    borderColor: "#ddd6fe",
    bgLight: "#f5f3ff",
    icon: <Sparkles size={20} color="#7c3aed" />,
    summary:
      "Band 9 candidates employ precise natural science collocations and comparative discourse markers to clearly link cause and effect across the two systems.",
    pieces: [
      {
        label: "Marine Dynamics Collocations",
        value: "Upwelling, Thermocline, Nutrient-Dense",
        detail:
          "Technical descriptors that accurately explain why marine organisms flourish or starve.",
        band9Application:
          "“...halting the upward transport of nutrient-dense water and severely depressing the thermocline.”"
      },
      {
        label: "Atmospheric & Wind Flow",
        value: "Atmospheric Convection, Prevailing Trade Winds",
        detail:
          "Accurately captures the directional forces of winds and vertical moisture lifting.",
        band9Application:
          "“...attenuated trade winds allow warm water to surge eastwards, triggering intense convective precipitation over South America.”"
      },
      {
        label: "Ecological & Severity Descriptors",
        value: "Precipitous Decline, Prolonged Aridity, Climatic Inversion",
        detail:
          "High-impact lexical items for describing environmental extremes.",
        band9Application:
          "“...resulting in prolonged aridity across Australia alongside a precipitous decline in Peruvian marine harvests.”"
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
            Pacific Ocean Normal vs. El Niño: Logical Deconstruction Mindmap
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
