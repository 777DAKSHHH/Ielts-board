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
  tableCorrelation: string;
  pieces: MindmapPiece[];
}

const MINDMAP_BRANCHES: MindmapBranch[] = [
  {
    id: "parameters",
    title: "Piece 1: Introduction & Data Parameters",
    badge: "Intro Anchor",
    color: "#2563eb",
    borderColor: "#bfdbfe",
    bgLight: "#eff6ff",
    icon: <BookOpen size={18} color="#2563eb" />,
    summary:
      "A Band 9 introduction paraphrases the line graph parameters: three regions (Australia, Canada, European Community), wheat export volumes in millions of tonnes, tracked across the six-year period from 1985 to 1990.",
    tableCorrelation:
      "Captures the line graph: 3 distinct areas, 6 annual time points (1985–1990), with Y-axis scaled from 0 to 30 million tonnes.",
    pieces: [
      {
        label: "Visual Graphic & Scope",
        value: "Multi-Line Graph",
        detail:
          "Tracks volume changes and comparative trajectories in agricultural wheat exports across six years.",
        band9Application:
          "“The line graph illustrates the volume of wheat exported by three different areas—Australia, Canada, and the European Community—between 1985 and 1990, measured in millions of tonnes.”"
      },
      {
        label: "Target Regions",
        value: "3 Areas (Canada, EC, Australia)",
        detail:
          "Canada (initial #1), European Community (growing to #1), and Australia (declining to #3).",
        band9Application:
          "“...three major agricultural exporters: Australia, Canada, and the European Community.”"
      },
      {
        label: "Timeframe & Units",
        value: "1985–1990 • Millions of Tonnes",
        detail:
          "A historical six-year timeframe requiring past simple and past perfect comparative tenses.",
        band9Application:
          "“...over a six-year timeframe spanning from 1985 through 1990, expressed in millions of tonnes.”"
      }
    ]
  },
  {
    id: "overview",
    title: "Piece 2: Macro Qualitative Overview (Zero Numbers)",
    badge: "Overview Engine",
    color: "#059669",
    borderColor: "#a7f3d0",
    bgLight: "#ecfdf5",
    icon: <Layers size={18} color="#059669" />,
    summary:
      "Synthesizes overarching trajectories without raw numerical data: 1) European Community experienced sustained growth to finish as the market leader; 2) Australia underwent a steady downward trajectory to finish lowest; 3) Canada exhibited marked volatility with the overall apex and a plunge before returning to its baseline.",
    tableCorrelation:
      "Contrasts the expanding region (EC) against the contracting region (Australia) and the volatile oscillating region (Canada).",
    pieces: [
      {
        label: "Pillar 1: European Community Growth",
        value: "Upward Trajectory to Dominant Leader",
        detail:
          "Sustained expansion over the second half of the period allowed the EC to surpass both competitors by 1990.",
        band9Application:
          "“Overall, the European Community witnessed sustained upward growth over the period to become the dominant wheat exporter by 1990...”"
      },
      {
        label: "Pillar 2: Australian Contraction",
        value: "Steady Downward Trajectory to Lowest Rank",
        detail:
          "Australia declined steadily after 1986, finishing in the lowest position among the three areas.",
        band9Application:
          "“...whereas Australia underwent a steady downward trajectory to finish in the lowest position.”"
      },
      {
        label: "Pillar 3: Canadian Volatility",
        value: "Overall Apex, Dramatic Plunge & Baseline Return",
        detail:
          "Canada experienced the most erratic pattern, registering the graph's highest peak before plummeting and returning to its starting point.",
        band9Application:
          "“In contrast, Canada exhibited marked volatility throughout the six-year span, registering both the overall peak and a dramatic plunge before returning to its starting level.”"
      }
    ]
  },
  {
    id: "body1-canada-australia",
    title: "Piece 3: Body 1 — Canada & Australia Analysis",
    badge: "Volatile vs Declining",
    color: "#0f172a",
    borderColor: "#cbd5e1",
    bgLight: "#f8fafc",
    icon: <TrendingUp size={18} color="#0f172a" />,
    summary:
      "Reports Canada's opening lead (19m tonnes in 1985), climb to the 1988 global apex (25m tonnes), steep slump to 14m in 1989, and recovery to 19m in 1990; contrasted with Australia's brief rise to 16m in 1986, followed by steady decline to 11m in 1989–90.",
    tableCorrelation:
      "Covers Canada's rollercoaster trajectory and Australia's 4-year decline down to the lowest rank.",
    pieces: [
      {
        label: "1. Canada Starting Lead & 1988 Apex",
        value: "19m (1985) → 25m (1988 Peak)",
        detail:
          "Started as leader at 19 million tonnes, dipped slightly to 17m in 1986, then surged to the highest point on the whole graph at 25m tonnes in 1988.",
        band9Application:
          "“In 1985, Canada was the leading wheat exporter at 19 million tonnes. Following a minor dip to 17 million tonnes in 1986, Canadian shipments surged rapidly to reach the highest point on the entire graph at 25 million tonnes in 1988.”"
      },
      {
        label: "2. Canada 1989 Slump & Baseline Rebound",
        value: "14m (1989) → 19m (1990 Rebound)",
        detail:
          "Plunged by 11m tonnes in 1989, then recovered by 5m tonnes to end at exactly the same level as it started.",
        band9Application:
          "“However, this was immediately followed by a steep plunge to 14 million tonnes in 1989, after which exports rebounded back to their initial level of 19 million tonnes in 1990.”"
      },
      {
        label: "3. Australia Peak & Steady Decline",
        value: "15m (1985) → 16m (1986) → 11m (1989–90)",
        detail:
          "Began at 15m, peaked briefly at 16m, and then diminished continuously to level off at 11m tonnes across the final two years.",
        band9Application:
          "“In contrast, Australia commenced at 15 million tonnes and rose slightly to a peak of 16 million tonnes in 1986. Thereafter, Australian wheat exports steadily declined over the subsequent three years to 11 million tonnes in 1989, where they remained unchanged through 1990...”"
      }
    ]
  },
  {
    id: "body2-ec",
    title: "Piece 4: Body 2 — European Community Ascent",
    badge: "Market Leader",
    color: "#0284c7",
    borderColor: "#bae6fd",
    bgLight: "#f0f9ff",
    icon: <Sparkles size={18} color="#0284c7" />,
    summary:
      "Details the European Community's opening in second place at 17m tonnes in 1985, dip to a period low of 14m in 1986, two-year plateau at 15m (1987–88), and final two-year surge to 21m tonnes in 1990, overtaking both competitors.",
    tableCorrelation:
      "Tracks the European Community from second position down to 14m, through its 15m plateau, and up to its 21m apex as the market leader.",
    pieces: [
      {
        label: "1. Initial Dip to Period Trough",
        value: "17m (1985) → 14m (1986 Trough)",
        detail:
          "Started in second position, then dropped to its lowest recorded figure across the entire period.",
        band9Application:
          "“Wheat exports from the European Community started in second place at 17 million tonnes in 1985 before declining to a period low of 14 million tonnes in 1986.”"
      },
      {
        label: "2. Two-Year Stability Plateau",
        value: "15m tonnes (1987 & 1988)",
        detail:
          "Stabilized after a modest recovery, holding steady at 15m tonnes across both consecutive years.",
        band9Application:
          "“The figures then plateaued at 15 million tonnes between 1987 and 1988.”"
      },
      {
        label: "3. Rapid Ascent & Overtaking Competitors",
        value: "19m (1989) → 21m (1990 Apex)",
        detail:
          "Leaped to 19m tonnes in 1989, matching Canada, and rose further to 21m in 1990 to finish as the undisputed leader.",
        band9Application:
          "“Over the final two years, the European Community experienced a significant expansion, with export volumes climbing sharply to 19 million tonnes in 1989 and reaching an apex of 21 million tonnes in 1990. By doing so, the European Community overtook both Canada and Australia to become the top exporter.”"
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
