import React, { useState } from "react";
import {
  Layers,
  ChevronRight,
  Sparkles,
  BookOpen,
  Award,
  CheckCircle2,
  TrendingUp,
  BarChart2,
  Eye,
  ArrowRight,
  Flame,
  Filter
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
  tableCorrelation: string;
  pieces: MindmapPiece[];
}

const MINDMAP_BRANCHES: MindmapBranch[] = [
  {
    id: "parameters",
    title: "Piece 1: Introduction & Process Scope",
    badge: "Intro Anchor",
    color: "#2563eb",
    borderColor: "#bfdbfe",
    bgLight: "#eff6ff",
    icon: <BookOpen size={18} color="#2563eb" />,
    summary:
      "A Band 9 introduction paraphrases the process diagram parameters: the 7 sequential stages involved in manufacturing refined sugar from raw sugarcane, spanning from initial agricultural cultivation to final industrial drying and cooling.",
    tableCorrelation:
      "Captures the manufacturing journey: raw plant inputs (sugarcane), 7 sequential transformations, and refined consumer sugar crystals.",
    pieces: [
      {
        label: "Graphic Type & Reporting Verb",
        value: "Process Diagram",
        detail:
          "Delineates an ordered industrial manufacturing procedure with clear sequential progression.",
        band9Application:
          "“The process diagram delineates the seven sequential stages involved in the manufacture of refined sugar from raw sugarcane...”"
      },
      {
        label: "Commodity & Material Span",
        value: "Sugarcane to Refined Sugar",
        detail:
          "Accurately names the agricultural raw material and the refined crystallized food product.",
        band9Application:
          "“...spanning from initial field cultivation to final drying and cooling.”"
      },
      {
        label: "Structural Architecture",
        value: "7 Linear Stages",
        detail:
          "Specifies the exact number of stages without repeating colloquial vocabulary from the prompt.",
        band9Application:
          "“...a multi-stage manufacturing procedure consisting of seven ordered phases.”"
      }
    ]
  },
  {
    id: "overview",
    title: "Piece 2: Macro Qualitative Overview (2-Sentence Synthesis)",
    badge: "Overview Engine",
    color: "#059669",
    borderColor: "#a7f3d0",
    bgLight: "#ecfdf5",
    icon: <Layers size={18} color="#059669" />,
    summary:
      "Synthesizes the linear sequence from start to finish, stating total stage count and contrasting the agricultural harvesting phase (machine vs manual) against chemical/thermal industrial processing.",
    tableCorrelation:
      "Divides the 7 stages into Phase 1 (Agricultural & Mechanical Extraction) and Phase 2 (Chemical Purification, Evaporation, Separation, Drying).",
    pieces: [
      {
        label: "Pillar 1: Linear Span & Culmination",
        value: "Cultivation to Dry Sugar",
        detail:
          "Explicitly states the starting point (field growing) and concluding outcome (dry refined sugar crystals).",
        band9Application:
          "“Overall, the manufacturing process is a linear sequence comprising seven distinct stages, beginning with agricultural cultivation and harvesting and culminating in the industrial refinement and drying of pure sugar crystals.”"
      },
      {
        label: "Pillar 2: Natural Bifurcation & Dual Harvesting",
        value: "Agricultural vs Chemical Split",
        detail:
          "Contrasts early mechanical/manual farming operations with advanced chemical filtration and thermal evaporation.",
        band9Application:
          "“Notably, while the initial stages involve agricultural harvesting (performed either mechanically or manually) and mechanical juice extraction, the subsequent phases rely on chemical purification, thermal evaporation, and centrifugal separation.”"
      }
    ]
  },
  {
    id: "body1-agricultural",
    title: "Piece 3: Body 1 — Agricultural & Extraction Flow (Stages 1–3)",
    badge: "Field to Juice",
    color: "#16a34a",
    borderColor: "#bbf7d0",
    bgLight: "#f0fdf4",
    icon: <TrendingUp size={18} color="#16a34a" />,
    summary:
      "Covers the 12–18 month growing cycle in fields, the dual mechanised vs manual harvesting methods, and crushing raw stalks through rotating cylindrical rollers to extract liquid juice.",
    tableCorrelation:
      "Covers Stages 1, 2, and 3: raw crop cultivation, reaping, and physical juice extraction.",
    pieces: [
      {
        label: "1. Stage 1: Maturation Cycle",
        value: "12–18 Months Growing",
        detail:
          "Sugarcanes are planted and mature in agricultural fields over a 12 to 18-month duration.",
        band9Application:
          "“To begin with, sugarcanes are grown in agricultural fields over a maturation period lasting between 12 and 18 months.”"
      },
      {
        label: "2. Stage 2: Dual Harvesting Methods",
        value: "Combine Machine vs Manual Sickle",
        detail:
          "Candidate must report both automated combine vehicles and agricultural laborers cutting stalks by hand.",
        band9Application:
          "“Once fully grown, the canes are harvested using one of two methods: either mechanically utilizing combine harvesters or manually by agricultural laborers cutting the stalks with hand blades.”"
      },
      {
        label: "3. Stage 3: Roller Crushing & Juice Extraction",
        value: "Rotating Cylindrical Rollers",
        detail:
          "Harvested stalks pass through heavy mechanical rollers that crush the fiber to express liquid juice.",
        band9Application:
          "“Following the harvest, the raw stalks are fed through heavy rotating rollers in a crushing mill, which compress the plant material to extract raw liquid juice.”"
      }
    ]
  },
  {
    id: "body2-refinement",
    title: "Piece 4: Body 2 — Chemical & Thermal Refining (Stages 4–7)",
    badge: "Juice to Crystals",
    color: "#ea580c",
    borderColor: "#fed7aa",
    bgLight: "#fff7ed",
    icon: <Flame size={18} color="#ea580c" />,
    summary:
      "Details limestone filtration to remove impurities, thermal evaporation into thick syrup, high-speed centrifugal separation of solid crystals, and final drying and cooling drum.",
    tableCorrelation:
      "Covers Stages 4, 5, 6, and 7: chemical purification, boiling into syrup, centrifuge crystal extraction, and final refined sugar packaging.",
    pieces: [
      {
        label: "1. Stage 4: Limestone Purification",
        value: "Limestone Filter Funnel",
        detail:
          "Raw extracted juice is filtered through limestone to eliminate sediment, debris, and impurities.",
        band9Application:
          "“In the subsequent phase, the extracted juice is poured through a limestone filter in order to purify it and eliminate unwanted particulates.”"
      },
      {
        label: "2. Stage 5: Thermal Evaporation into Syrup",
        value: "Evaporator Chamber Over Heat",
        detail:
          "Clarified liquid is boiled over heat, evaporating moisture and condensing the juice into thick syrup.",
        band9Application:
          "“Thereafter, the clarified liquid is transferred to an evaporator vat where it is heated over an open heat source; during this boiling phase, water evaporates, transforming the juice into a thick syrup.”"
      },
      {
        label: "3. Stages 6 & 7: Centrifuge & Cylinder Drying",
        value: "Centrifugal Separation & Drying Drum",
        detail:
          "Syrup is spun rapidly to separate crystals; crystals are cooled and dried to produce consumer-ready refined sugar.",
        band9Application:
          "“Next, this syrup is introduced into a high-speed centrifuge, which spins rapidly to separate solid sugar crystals from the remaining liquid. Finally, in the culminating stage, the damp crystals are fed into a cylindrical container for drying and cooling, yielding finished refined sugar ready for commercial distribution.”"
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
        width: "100%",
        fontFamily: "system-ui, -apple-system, sans-serif"
      }}
    >
      {/* 4 Branch Selector Pills */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "10px"
        }}
      >
        {MINDMAP_BRANCHES.map((branch) => {
          const isSelected = selectedBranchId === branch.id;
          return (
            <div
              key={branch.id}
              onClick={() => setSelectedBranchId(branch.id)}
              style={{
                background: isSelected ? branch.bgLight : "#ffffff",
                border: isSelected ? `2px solid ${branch.color}` : "1.5px solid #cbd5e1",
                borderRadius: "14px",
                padding: "12px 14px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                boxShadow: isSelected ? "0 4px 12px rgba(0,0,0,0.06)" : "none",
                transition: "all 0.15s ease"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  {branch.icon}
                  <strong style={{ fontSize: "0.88rem", color: "#0f172a" }}>{branch.title.split(":")[0]}</strong>
                </div>
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    padding: "2px 6px",
                    borderRadius: "4px",
                    background: `${branch.color}15`,
                    color: branch.color
                  }}
                >
                  {branch.badge}
                </span>
              </div>
              <span style={{ fontSize: "0.78rem", color: "#475569", fontWeight: 650 }}>
                {branch.title.split(":")[1]?.trim()}
              </span>
            </div>
          );
        })}
      </div>

      {/* Active Branch Deep Dive Card */}
      <div
        style={{
          background: "#ffffff",
          border: `1.5px solid ${activeBranch.borderColor}`,
          borderRadius: "20px",
          padding: "22px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.03)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: activeBranch.bgLight,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {activeBranch.icon}
            </div>
            <div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                {activeBranch.title}
              </h3>
              <p style={{ fontSize: "0.82rem", color: "#64748b", margin: "2px 0 0" }}>
                {activeBranch.tableCorrelation}
              </p>
            </div>
          </div>
        </div>

        <p style={{ fontSize: "0.92rem", color: "#334155", margin: 0, lineHeight: 1.55 }}>
          {activeBranch.summary}
        </p>

        {/* 3 Sub-Pieces Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "12px", marginTop: "4px" }}>
          {activeBranch.pieces.map((piece, i) => (
            <div
              key={piece.label}
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "14px",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.78rem", fontWeight: 800, color: activeBranch.color }}>
                  {piece.label}
                </span>
                {piece.value && (
                  <span style={{ fontSize: "0.72rem", background: "#ffffff", padding: "2px 7px", borderRadius: "5px", border: "1px solid #cbd5e1", fontWeight: 750, color: "#0f172a" }}>
                    {piece.value}
                  </span>
                )}
              </div>
              <p style={{ fontSize: "0.84rem", color: "#475569", margin: 0, lineHeight: 1.45 }}>
                {piece.detail}
              </p>
              <div style={{ marginTop: "auto", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "8px 10px" }}>
                <span style={{ fontSize: "0.68rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase" }}>Band 9 Model Text</span>
                <p style={{ fontSize: "0.82rem", color: "#0f172a", fontStyle: "italic", margin: "2px 0 0", lineHeight: 1.4 }}>
                  {piece.band9Application}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
