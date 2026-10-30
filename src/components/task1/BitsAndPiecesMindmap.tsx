import React, { useState } from "react";
import {
  Layers,
  ChevronRight,
  Sparkles,
  BookOpen,
  Award,
  CheckCircle2,
  Workflow,
  Flame,
  Boxes,
  Eye,
  ArrowRight
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
  diagramCorrelation: string;
  pieces: MindmapPiece[];
}

const MINDMAP_BRANCHES: MindmapBranch[] = [
  {
    id: "parameters",
    title: "Piece 1: Introduction & Diagram Parameters",
    badge: "Introduction Anchor",
    color: "#2563eb",
    borderColor: "#bfdbfe",
    bgLight: "#eff6ff",
    icon: <BookOpen size={18} color="#2563eb" />,
    summary:
      "A Band 9 introduction paraphrases the two visual diagrams: the multi-stage industrial procedure involved in manufacturing cement, followed by how it is combined with other raw ingredients to produce concrete.",
    diagramCorrelation:
      "Correlates with the overall prompt scope: links Diagram 1 (Cement Production) directly to Diagram 2 (Concrete Production).",
    pieces: [
      {
        label: "Visual Format & Scope",
        value: "Two Process Diagrams (Dual Flowchart)",
        detail:
          "Left diagram depicts a linear 5-stage manufacturing sequence; right diagram illustrates a proportional batch mixing procedure.",
        band9Application:
          "“The two diagrams illustrate the multi-stage industrial procedure involved in manufacturing cement, followed by how it is subsequently combined with other raw ingredients to produce concrete.”"
      },
      {
        label: "Raw Material Inputs",
        value: "Limestone & Clay (Cement) • 4 Ingredients (Concrete)",
        detail:
          "Cement relies on quarried limestone and clay. Concrete combines gravel (50%), sand (25%), cement (15%), and water (10%).",
        band9Application:
          "“...tracking the transformation of raw minerals into finished cement, and its subsequent role as a binding agent in concrete formulation.”"
      },
      {
        label: "Inter-Process Functional Prerequisite",
        value: "Cement as 15% Mandatory Binder",
        detail:
          "Cement is not just an independent product; it is the vital 15% binder required for the second manufacturing process.",
        band9Application:
          "“...wherein finished cement serves as the essential binder in the secondary concrete production process.”"
      }
    ]
  },
  {
    id: "overview",
    title: "Piece 2: Macro Overview (2-Pillar Synthesis)",
    badge: "Overview Engine",
    color: "#059669",
    borderColor: "#a7f3d0",
    bgLight: "#ecfdf5",
    icon: <Layers size={18} color="#059669" />,
    summary:
      "The macro overview contrasts the fundamental nature of the two operations: 1) Cement is a complex, multi-stage linear sequence requiring mechanical pulverization and intense heat; 2) Concrete is a simple, single-stage batch mixing process where coarse and fine aggregates form the vast bulk of the mixture, bound together by cement and water without quoting exact statistics.",
    diagramCorrelation:
      "Synthesizes the macro contrast between the linear thermal pipeline of Box 1 and the mechanical batch mixer of Box 2.",
    pieces: [
      {
        label: "Pillar 1: Multi-Step Sequential Cement Process",
        value: "Linear Industrial Pipeline with Thermal Transformation",
        detail:
          "Involves 5 consecutive mechanical and chemical stages: crushing, mixing, rotating heating, milling, and bagging.",
        band9Application:
          "“Overall, cement production is a multi-step, sequential process requiring specialized equipment, physical crushing, and intense heating...”"
      },
      {
        label: "Pillar 2: Single-Stage Concrete Batch Blend",
        value: "Mechanical Batch Mixing with Dominant Aggregates",
        detail:
          "Concrete is produced in a single step inside a rotating drum where aggregates form the dominant bulk and cement acts as a binding agent (all numerical percentages are reserved for Body Paragraph 2).",
        band9Application:
          "“...whereas concrete manufacturing is a straightforward, single-stage batch mixing procedure wherein coarse and fine aggregates constitute the vast majority of the mixture, bound together by cement and activated with water.”"
      }
    ]
  },
  {
    id: "cement-flow",
    title: "Piece 3: Body 1 — The 5 Cement Stages",
    badge: "Body 1 Sequence",
    color: "#ea580c",
    borderColor: "#fed7aa",
    bgLight: "#fff7ed",
    icon: <Flame size={18} color="#ea580c" />,
    summary:
      "Systematically report each stage of cement production using precise passive voice constructions and sequential linkers: Crusher → Mixer → Rotating Heater → Grinder → Bags.",
    diagramCorrelation:
      "Correlates with Diagram 1 (left box): Limestone/Clay → Crusher → Powder → Mixer → Rotating Kiln → Grinder → Bags.",
    pieces: [
      {
        label: "Stage 1 & 2: Crushing & Blending",
        value: "Limestone + Clay → Crusher → Mixer",
        detail:
          "Limestone and clay are pulverized into fine powder by a mechanical crusher, then mixed to achieve a uniform blend.",
        band9Application:
          "“Initially, limestone and clay are passed through a crusher to be pulverized into powder, which is then fed into an industrial mixer.”"
      },
      {
        label: "Stage 3: Thermal Kiln Heating",
        value: "Rotating Heater with Heat Applied from Base",
        detail:
          "The powder travels down an inclined rotating cylinder while intense heat is applied from the lower end.",
        band9Application:
          "“Next, the mixture enters an inclined rotating cylinder heater where it is subjected to high heat applied from the lower end as the drum turns.”"
      },
      {
        label: "Stage 4 & 5: Grinding & Packaging",
        value: "Conveyor Belt → Grinder → Bags",
        detail:
          "The heated material travels via conveyor belt into a grinder to be milled into fine cement, then poured into commercial bags.",
        band9Application:
          "“After thermal treatment, the substance is transported along a conveyor belt to a grinder, before the finished cement is packaged into bags.”"
      }
    ]
  },
  {
    id: "concrete-mix",
    title: "Piece 4: Body 2 — Concrete Formulation & Mixer",
    badge: "Body 2 Synthesis",
    color: "#7c3aed",
    borderColor: "#ddd6fe",
    bgLight: "#f5f3ff",
    icon: <Boxes size={18} color="#7c3aed" />,
    summary:
      "Report the exact proportions of all four concrete ingredients in descending order, detailing their roles and their simultaneous loading into the rotating concrete mixer drum.",
    diagramCorrelation:
      "Correlates with Diagram 2 (right box): Cement 15%, Water 10%, Sand 25%, Gravel* 50% poured into the rotating Concrete mixer.",
    pieces: [
      {
        label: "Dominant Aggregate: Gravel (50%)",
        value: "Half (50%) of Total Composition",
        detail:
          "Gravel (small stones) constitutes half of the entire mixture, acting as the main structural coarse aggregate.",
        band9Application:
          "“Gravel, consisting of small stones, constitutes half (50%) of the total mixture, serving as the primary coarse aggregate.”"
      },
      {
        label: "Fine Aggregate: Sand (25%)",
        value: "One Quarter (25%) of Composition",
        detail:
          "Sand acts as the fine aggregate, filling voids between stones and making total aggregates 75%.",
        band9Application:
          "“Sand accounts for a quarter (25%) of the blend, functioning as a fine aggregate.”"
      },
      {
        label: "Binder & Hydration: Cement (15%) & Water (10%)",
        value: "15% Cement Binder • 10% Water Activator",
        detail:
          "Cement binds the stones together, while 10% water initiates hydration to create the wet concrete slurry.",
        band9Application:
          "“Cement makes up 15% to bind the components together, while water represents the smallest portion at 10% to activate hydration.”"
      },
      {
        label: "Mechanical Agitation: Concrete Mixer",
        value: "Rotating Drum Blending All 4 Ingredients",
        detail:
          "All ingredients are poured simultaneously into a cylindrical mixer rotating clockwise to yield usable wet concrete.",
        band9Application:
          "“Once all four elements are poured simultaneously into the concrete drum, the machine rotates to blend the slurry into usable wet concrete.”"
      }
    ]
  }
];

export const BitsAndPiecesMindmap: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>("parameters");
  const activeBranch =
    MINDMAP_BRANCHES.find((b) => b.id === selectedBranchId) || MINDMAP_BRANCHES[0];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        width: "100%"
      }}
    >
      {/* Branch Navigation Pills (Top Bar) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
          background: "#ffffff",
          borderRadius: "14px",
          border: "1.5px solid var(--border-subtle, #cbd5e1)",
          padding: "10px 14px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Sparkles size={16} color="#2563eb" />
          <strong style={{ fontSize: "0.88rem", color: "#0f172a" }}>
            Strategic Mindmap Pillars:
          </strong>
        </div>

        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {MINDMAP_BRANCHES.map((b) => {
            const isSelected = b.id === selectedBranchId;
            return (
              <button
                key={b.id}
                onClick={() => setSelectedBranchId(b.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  fontSize: "0.8rem",
                  fontWeight: 750,
                  border: isSelected ? `2px solid ${b.color}` : "1px solid #e2e8f0",
                  background: isSelected ? b.bgLight : "#ffffff",
                  color: isSelected ? b.color : "#475569",
                  cursor: "pointer",
                  boxShadow: isSelected ? "0 2px 6px rgba(0,0,0,0.05)" : "none",
                  transition: "all 0.15s ease"
                }}
              >
                {b.icon}
                <span>{b.title.split(":")[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Side-by-Side Reference POV Grid (Diagram on Left, Mindmap on Right) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(320px, 0.9fr) minmax(360px, 1.1fr)",
          gap: "16px",
          alignItems: "start",
          width: "100%"
        }}
      >
        {/* Left Column: Reference Task Diagram (Same Style as Smart Board) */}
        <div
          style={{
            background: "#ffffff",
            border: "1.5px solid var(--border-subtle, #cbd5e1)",
            borderRadius: "18px",
            padding: "16px",
            boxShadow: "var(--shadow-sm)",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            position: "sticky",
            top: "12px"
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Eye size={17} color="#2563eb" />
              <strong style={{ fontSize: "0.95rem", color: "#0f172a" }}>
                Reference Task Diagram (Student Pamphlet)
              </strong>
            </div>
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 750,
                background: "#eff6ff",
                color: "#1e40af",
                padding: "2px 8px",
                borderRadius: "6px"
              }}
            >
              Side-by-Side POV
            </span>
          </div>

          {/* Diagram Box: Two authentic pamphlet boxes rendered side by side */}
          <div
            style={{
              background: "#f8fafc",
              border: "1.5px solid #cbd5e1",
              borderRadius: "12px",
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <img
              src="materials/cement_concrete_diagrams_clean.png"
              alt="Cement and Concrete Production Diagrams from Pamphlet"
              style={{
                width: "100%",
                maxHeight: "360px",
                objectFit: "contain",
                display: "block",
                borderRadius: "6px"
              }}
            />
          </div>

          {/* Quick Cross-Reference Guide */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.78rem" }}>
            <div
              style={{
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
                borderRadius: "8px",
                padding: "8px 10px",
                color: "#1e40af",
                lineHeight: 1.4
              }}
            >
              <strong>Diagram 1 (Left):</strong> Cement Pipeline — 5 Linear Steps (Crushing → Blending → Rotary Kiln + Heat → Milling → Bagging).
            </div>

            <div
              style={{
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderRadius: "8px",
                padding: "8px 10px",
                color: "#166534",
                lineHeight: 1.4
              }}
            >
              <strong>Diagram 2 (Right):</strong> Concrete Mixer — 4 Ingredients (Gravel 50%, Sand 25%, Cement 15%, Water 10%).
            </div>
          </div>

          {/* Active Branch Visual Correlation Callout */}
          <div
            style={{
              background: activeBranch.bgLight,
              border: `1.5px solid ${activeBranch.borderColor}`,
              borderRadius: "10px",
              padding: "10px 12px",
              fontSize: "0.8rem",
              color: "#334155",
              lineHeight: 1.45
            }}
          >
            <div style={{ fontWeight: 800, color: activeBranch.color, marginBottom: "3px" }}>
              ✦ Visual Anchor for {activeBranch.title.split(":")[0]}:
            </div>
            {activeBranch.diagramCorrelation}
          </div>
        </div>

        {/* Right Column: Strategic Mindmap Decomposition Content */}
        <div
          style={{
            background: "#ffffff",
            border: "1.5px solid var(--border-subtle, #cbd5e1)",
            borderRadius: "18px",
            padding: "18px 20px",
            boxShadow: "var(--shadow-sm)",
            display: "flex",
            flexDirection: "column",
            gap: "12px"
          }}
        >
          {/* Active Branch Header */}
          <div
            style={{
              background: activeBranch.bgLight,
              border: `1.5px solid ${activeBranch.borderColor}`,
              borderRadius: "12px",
              padding: "12px 16px",
              display: "flex",
              flexDirection: "column",
              gap: "6px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    background: activeBranch.color,
                    color: "#ffffff",
                    padding: "2px 8px",
                    borderRadius: "6px"
                  }}
                >
                  {activeBranch.badge}
                </span>
                <strong style={{ fontSize: "1rem", color: "#0f172a" }}>
                  {activeBranch.title}
                </strong>
              </div>
              <span style={{ fontSize: "0.76rem", fontWeight: 700, color: activeBranch.color }}>
                {activeBranch.pieces.length} Core Components
              </span>
            </div>
            <p style={{ fontSize: "0.85rem", color: "#334155", margin: 0, lineHeight: 1.45 }}>
              {activeBranch.summary}
            </p>
          </div>

          {/* Pieces Cards List (Spacious & Clean with Zero Congestion) */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {activeBranch.pieces.map((p, idx) => (
              <div
                key={idx}
                style={{
                  background: "#ffffff",
                  border: "1.5px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.02)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "6px" }}>
                  <strong style={{ fontSize: "0.92rem", color: "#0f172a" }}>
                    {p.label}
                  </strong>
                  {p.value && (
                    <span
                      style={{
                        fontSize: "0.76rem",
                        fontWeight: 750,
                        padding: "2px 8px",
                        borderRadius: "6px",
                        background: "#f1f5f9",
                        color: "#334155"
                      }}
                    >
                      {p.value}
                    </span>
                  )}
                </div>
                <p style={{ fontSize: "0.84rem", color: "#64748b", margin: 0, lineHeight: 1.45 }}>
                  {p.detail}
                </p>
                <div
                  style={{
                    background: "#f8fafc",
                    borderLeft: `3px solid ${activeBranch.color}`,
                    borderRadius: "6px",
                    padding: "8px 12px",
                    fontSize: "0.85rem",
                    color: "#1e293b",
                    fontStyle: "italic",
                    lineHeight: 1.45
                  }}
                >
                  {p.band9Application}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
