import React, { useState } from "react";
import {
  Sun,
  Layers,
  Flame,
  Recycle,
  FileCheck2,
  ChevronRight,
  Sparkles
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
    id: "base",
    title: "Piece 1: The Solar Input & Autotrophic Base",
    badge: "Starting Point",
    color: "#166534",
    borderColor: "#bbf7d0",
    bgLight: "#f0fdf4",
    icon: <Sun size={20} color="#16a34a" />,
    summary: "The entire ecosystem is fueled by solar radiation entering at the bottom into Primary Producers.",
    pieces: [
      {
        label: "Light energy",
        value: "External Input",
        detail: "Injected directly into the base of the pyramid via an upward arrow. Fuels the entire chain.",
        band9Application: "'Primary producers capture solar radiation, converting light energy into baseline biomass...'"
      },
      {
        label: "Primary producers",
        value: "20,000 kcal/m²/yr",
        detail: "Green base representing trees, grass, and plants. Contains 100% of the system's baseline energy.",
        band9Application: "'...synthesising a substantial 20,000 kcal/m²/yr, which anchors the trophic pyramid.'"
      }
    ]
  },
  {
    id: "consumers",
    title: "Piece 2: The Ascending Trophic Ladder (10% Rule)",
    badge: "Vertical Highway",
    color: "#0369a1",
    borderColor: "#bae6fd",
    bgLight: "#f0f9ff",
    icon: <Layers size={20} color="#0284c7" />,
    summary: "Energy drops by an exact factor of 10 (90% reduction) at each ascending consumer tier.",
    pieces: [
      {
        label: "Primary consumers",
        value: "2,000 kcal/m²/yr (10%)",
        detail: "Insects (grasshopper, butterfly, caterpillar, ant) and mice eating primary producers.",
        band9Application: "'Primary consumers retain exactly one-tenth (2,000 kcal/m²/yr) of the primary energy...'"
      },
      {
        label: "Secondary consumers",
        value: "200 kcal/m²/yr (1%)",
        detail: "Small predators (rodent, bird, frog) consuming insects and small herbivores.",
        band9Application: "'Secondary consumers assimilate a further reduced 200 kcal/m²/yr...'"
      },
      {
        label: "Tertiary consumers",
        value: "20 kcal/m²/yr (0.1%)",
        detail: "Predatory reptiles (snakes) hunting secondary consumers.",
        band9Application: "'...which drops by another magnitude to 20 kcal/m²/yr among tertiary predatory reptiles...'"
      },
      {
        label: "Quaternary consumers",
        value: "2 kcal/m²/yr (0.01%)",
        detail: "Apex raptors (eagle/hawk) at the summit of the ecological pyramid.",
        band9Application: "'...culminating at the apex with quaternary raptors receiving a mere 2 kcal/m²/yr.'"
      }
    ]
  },
  {
    id: "heat",
    title: "Piece 3: The Thermal Energy Leak (Heat Dissipation)",
    badge: "Entropy & Loss",
    color: "#c2410c",
    borderColor: "#fed7aa",
    bgLight: "#fff7ed",
    icon: <Flame size={20} color="#ea580c" />,
    summary: "Squiggly arrows marked 'Heat' show that energy is permanently lost to the atmosphere at every level.",
    pieces: [
      {
        label: "Multilevel Dissipation",
        value: "All 5 Tiers + Decomposers",
        detail: "Every organism continuously radiates metabolic heat into the surrounding atmosphere.",
        band9Application: "'Throughout the entire sequence, substantial energy is continuously dissipated as metabolic heat...'"
      },
      {
        label: "Unidirectional Pathway",
        value: "Irreversible",
        detail: "Unlike matter, heat energy cannot be recaptured by plants. It is permanently lost from the system.",
        band9Application: "'...representing an irreversible thermal loss from each successive consumer tier.'"
      }
    ]
  },
  {
    id: "decomposers",
    title: "Piece 4: Biological Detritus Flow (Decomposers)",
    badge: "Waste Sink",
    color: "#15803d",
    borderColor: "#bbf7d0",
    bgLight: "#f0fdf4",
    icon: <Recycle size={20} color="#16a34a" />,
    summary: "Biological detritus and dead tissue from all 5 tiers of the pyramid flow directly into Decomposers, which release heat.",
    pieces: [
      {
        label: "Waste & dead matter",
        value: "From All Tiers",
        detail: "Pink, yellow, cyan, and green arrows converge into decomposers from quaternary, secondary, primary consumers, and primary producers.",
        band9Application: "'Organic waste and deceased matter from across the pyramid are channelled directly into decomposers...'"
      },
      {
        label: "DECOMPOSERS Box",
        value: "Processing Sink",
        detail: "Saprophytic microorganisms break down carrion and unassimilated waste from every level.",
        band9Application: "'...which break down biological detritus from both plants and animals...'"
      },
      {
        label: "Decomposer Heat Output",
        value: "Metabolic Release",
        detail: "A squiggly arrow shows heat escaping from decomposers into the atmosphere.",
        band9Application: "'...concurrently releasing metabolic heat into the atmosphere during biological decomposition.'"
      }
    ]
  },
  {
    id: "essay_architecture",
    title: "Piece 5: The IELTS Essay Architecture",
    badge: "Band 9 Structure",
    color: "#475569",
    borderColor: "#cbd5e1",
    bgLight: "#f8fafc",
    icon: <FileCheck2 size={20} color="#334155" />,
    summary: "How to assemble these pieces into a clean 170-180 word Band 9 response.",
    pieces: [
      {
        label: "Introduction",
        value: "1 Sentence",
        detail: "Paraphrase: Diagram illustrates energy and biomass flows across five trophic tiers in an ecological food chain, alongside heat loss and waste channeling to decomposers.",
        band9Application: "'The diagram illustrates the stages and energy flows across five distinct trophic levels in an ecological food chain, alongside the continuous dissipation of metabolic heat and the funneling of waste and dead matter to decomposers.'"
      },
      {
        label: "Macro Overview",
        value: "2 Sentences",
        detail: "Sentence 1: Unidirectional upward energy flow with 10-fold reduction. Sentence 2: Constant heat loss alongside waste convergence into decomposers.",
        band9Application: "'Overall, energy transfers upward with a tenfold reduction at each successive tier, while metabolic heat escapes continuously and biological waste from all tiers is channeled into decomposers.'"
      },
      {
        label: "Body Paragraph 1",
        value: "The Vertical Pyramid",
        detail: "Detail the energy figures: 20,000 → 2,000 → 200 → 20 → 2 kcal/m²/yr, highlighting the 90% loss per tier.",
        band9Application: "Focus on primary producers up through quaternary raptors, emphasizing the factor-of-ten diminution."
      },
      {
        label: "Body Paragraph 2",
        value: "Heat & Waste Flow",
        detail: "Detail the squiggly heat arrows radiating from all tiers and decomposers, and the convergence of waste/dead matter into decomposers.",
        band9Application: "Highlight that biological waste from every level converges on decomposers, which also radiate thermal heat."
      }
    ]
  }
];

export const BitsAndPiecesMindmap: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>("base");

  const currentBranch = MINDMAP_BRANCHES.find((b) => b.id === selectedBranchId) || MINDMAP_BRANCHES[0];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
      {/* Concept Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "16px",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "#0f172a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff"
            }}
          >
            <Sparkles size={18} />
          </div>
          <div>
            <h4 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 800, color: "var(--slate-900)" }}>
              The "Bits &amp; Pieces" Deconstruction Mindmap
            </h4>
            <p style={{ margin: "2px 0 0 0", fontSize: "0.82rem", color: "var(--slate-600)" }}>
              Break down the diagram into 5 bite-sized conceptual pieces for analysis before writing.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span className="apple-badge accent" style={{ fontSize: "0.74rem" }}>
            5 Conceptual Nodes
          </span>
          <span className="apple-badge success" style={{ fontSize: "0.74rem" }}>
            Touch Interactive
          </span>
        </div>
      </div>

      {/* Interactive Branch Navigation Buttons */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "8px"
        }}
      >
        {MINDMAP_BRANCHES.map((branch, index) => {
          const isSelected = branch.id === selectedBranchId;
          return (
            <button
              key={branch.id}
              type="button"
              onClick={() => setSelectedBranchId(branch.id)}
              className="apple-touch-btn"
              style={{
                padding: "12px 10px",
                borderRadius: "14px",
                border: isSelected ? `2px solid ${branch.color}` : "1.5px solid var(--border-subtle)",
                background: isSelected ? branch.bgLight : "#ffffff",
                boxShadow: isSelected ? "0 4px 12px rgba(0,0,0,0.08)" : "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "6px",
                textAlign: "left",
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    color: isSelected ? branch.color : "var(--slate-500)",
                    textTransform: "uppercase"
                  }}
                >
                  Piece {index + 1}
                </span>
                {branch.icon}
              </div>
              <strong
                style={{
                  fontSize: "0.86rem",
                  color: isSelected ? branch.color : "var(--slate-800)",
                  lineHeight: 1.3
                }}
              >
                {branch.title.split(": ")[1]}
              </strong>
            </button>
          );
        })}
      </div>

      {/* Selected Node Expanded Canvas */}
      <div
        style={{
          background: "#ffffff",
          border: `2px solid ${currentBranch.borderColor}`,
          borderRadius: "18px",
          padding: "20px 24px",
          boxShadow: "var(--shadow-md)",
          display: "flex",
          flexDirection: "column",
          gap: "18px"
        }}
      >
        {/* Node Banner */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
              <span
                style={{
                  background: currentBranch.color,
                  color: "#ffffff",
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  padding: "3px 8px",
                  borderRadius: "6px"
                }}
              >
                {currentBranch.badge}
              </span>
              <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 800, color: "var(--slate-900)" }}>
                {currentBranch.title}
              </h3>
            </div>
            <p style={{ margin: 0, fontSize: "0.92rem", color: "var(--slate-600)" }}>
              {currentBranch.summary}
            </p>
          </div>
        </div>

        {/* Detailed Bit & Pieces Cards */}
        <div style={{ display: "grid", gridTemplateColumns: currentBranch.pieces.length > 2 ? "1fr 1fr" : "1fr", gap: "14px" }}>
          {currentBranch.pieces.map((piece, idx) => (
            <div
              key={idx}
              style={{
                background: "var(--slate-50)",
                border: "1.5px solid var(--border-subtle)",
                borderRadius: "14px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--slate-900)" }}>
                  {piece.label}
                </span>
                {piece.value && (
                  <span
                    style={{
                      background: "#ffffff",
                      border: "1px solid var(--border-subtle)",
                      padding: "2px 8px",
                      borderRadius: "6px",
                      fontSize: "0.78rem",
                      fontWeight: 750,
                      color: currentBranch.color
                    }}
                  >
                    {piece.value}
                  </span>
                )}
              </div>

              <p style={{ margin: 0, fontSize: "0.84rem", color: "var(--slate-700)", lineHeight: 1.45 }}>
                {piece.detail}
              </p>

              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  fontSize: "0.8rem",
                  color: "var(--slate-800)",
                  fontStyle: "italic",
                  lineHeight: 1.4
                }}
              >
                <span style={{ fontWeight: 700, fontStyle: "normal", color: currentBranch.color, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <ChevronRight size={13} /> Band 9 Phrasing:
                </span>{" "}
                {piece.band9Application}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
