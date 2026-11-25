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
  Filter,
  ShoppingBag,
  Utensils,
  PieChart as PieIcon
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
    title: "Piece 1: Introduction & Survey Scope",
    badge: "Intro Anchor",
    color: "#2563eb",
    borderColor: "#bfdbfe",
    bgLight: "#eff6ff",
    icon: <BookOpen size={18} color="#2563eb" />,
    summary:
      "A Band 9 introduction paraphrases the multi-graphic parameters: two tables and a pie chart delineating visitor satisfaction percentages regarding shops, restaurants, and overall architectural design at a newly opened shopping complex in Auckland, New Zealand.",
    tableCorrelation:
      "Captures data format (2 tables + 1 pie chart), geographic location (Auckland, New Zealand), and 3 evaluated domains (Retail, Dining, Architectural Design).",
    pieces: [
      {
        label: "Graphic Types & Reporting Verbs",
        value: "Tables & Pie Chart",
        detail:
          "Delineates multi-graphic visual representations illustrating discrete customer satisfaction tiers.",
        band9Application:
          "“The two tables and accompanying pie chart delineate the results of a visitor satisfaction survey regarding a newly opened shopping complex in Auckland, New Zealand...”"
      },
      {
        label: "Subject & Geographic Scope",
        value: "Auckland Complex",
        detail:
          "Accurately names the retail and entertainment facility along with its specific geographic setting.",
        band9Application:
          "“...evaluating visitor sentiment across retail shops, dining establishments, and overall architectural design...”"
      },
      {
        label: "Measurement Scale & Sentiment Tiers",
        value: "4 Sentiment Tiers (%)",
        detail:
          "Specifies the 4 sentiment categories: very satisfied, satisfied, dissatisfied, and no comment.",
        band9Application:
          "“...expressed in percentage terms across four distinct sentiment classifications.”"
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
      "Synthesizes overarching patterns: predominant positive approval across all three sectors (with design reaching 79% combined approval), contrasted against the striking gender disparity in restaurant dissatisfaction (females 4x higher than males).",
    tableCorrelation:
      "Synthesizes overarching positive sentiment across retail and dining tables and design pie chart, while highlighting key gender contrasts.",
    pieces: [
      {
        label: "Pillar 1: Predominant Overall Approval",
        value: "Dominant Satisfaction",
        detail:
          "Explicitly captures that the vast majority of visitors rated the complex favorably, with design registering the peak positive aggregate.",
        band9Application:
          "“Overall, the shopping complex garnered predominantly positive feedback across all evaluated domains, with architectural design receiving the highest aggregate approval.”"
      },
      {
        label: "Pillar 2: Divergence & Gender Disparity",
        value: "Equal Shops vs Divergent Dining",
        detail:
          "Contrasts identical 20% shop dissatisfaction with dramatic restaurant divergence where female dissatisfaction exceeds males fourfold.",
        band9Application:
          "“Notably, while dissatisfaction with retail shops was identical between genders, dining facilities revealed a pronounced disparity, as females were considerably more critical than males.”"
      }
    ]
  },
  {
    id: "body1-tables",
    title: "Piece 3: Body 1 — Retail Shops & Dining Gender Disparity (Tables 1 & 2)",
    badge: "Tables Breakdown",
    color: "#16a34a",
    borderColor: "#bbf7d0",
    bgLight: "#f0fdf4",
    icon: <ShoppingBag size={18} color="#16a34a" />,
    summary:
      "Compares male vs female ratings in Table 1 (Shops) and Table 2 (Restaurants). Highlights female extreme satisfaction doubling males in retail (34% vs 17%), equal 20% dissatisfaction, and the dramatic 21% female dining dissatisfaction versus 5% for males.",
    tableCorrelation:
      "Covers Table 1 (Shops) and Table 2 (Restaurants) with precise gender comparisons and proportion ratios.",
    pieces: [
      {
        label: "1. Retail Shops: Double Female Extreme Satisfaction",
        value: "34% vs 17% Very Satisfied",
        detail:
          "Female shoppers were twice as likely as males to be very satisfied (34% vs 17%), while 45% of men and 37% of women reported being satisfied.",
        band9Application:
          "“In retail shops, 45% of male visitors were satisfied alongside 17% who were very satisfied. By comparison, female shoppers demonstrated considerably higher enthusiasm, with 34% describing themselves as very satisfied—exactly double the male proportion...”"
      },
      {
        label: "2. Retail Shops: Identical Dissatisfaction",
        value: "20% Parity for Both Sexes",
        detail:
          "Despite enthusiasm differences, both male and female cohorts registered identical 20% dissatisfaction rates, while male neutrality (18%) doubled females (9%).",
        band9Application:
          "“...while dissatisfaction rates for both sexes were identical at 20%.”"
      },
      {
        label: "3. Dining Establishments: Stark Disparity",
        value: "80% Male Approval vs 21% Female Dissat",
        detail:
          "Men registered peak satisfaction (55% satisfied + 25% very satisfied = 80%) with only 5% dissatisfaction; female dissatisfaction was quadruple at 21%.",
        band9Application:
          "“Regarding dining establishments, male visitors expressed overwhelming contentment, with 55% satisfied and 25% very satisfied, whereas dissatisfaction was negligible at just 5%. In sharp contrast, female dissatisfaction stood at 21%, more than fourfold higher than that of their male counterparts.”"
      }
    ]
  },
  {
    id: "body2-design",
    title: "Piece 4: Body 2 — Complex Architectural Design & Neutrality (Pie Chart)",
    badge: "Pie Chart Deep Dive",
    color: "#ea580c",
    borderColor: "#fed7aa",
    bgLight: "#fff7ed",
    icon: <PieIcon size={18} color="#ea580c" />,
    summary:
      "Details the pie chart proportions: satisfied (62%), very satisfied (17%), bringing total positive sentiment to nearly four-fifths (79%), with minority dissatisfaction (10%) and indifference (11%).",
    tableCorrelation:
      "Covers the Design pie chart, reporting proportions as fractions, percentages, and cumulative sums.",
    pieces: [
      {
        label: "1. Dominant Majority Approval",
        value: "62% Satisfied (~5/8)",
        detail:
          "Nearly two-thirds of all respondents reported being satisfied with the layout and aesthetic design of the shopping center.",
        band9Application:
          "“Regarding the complex's design, the pie chart indicates widespread acclaim, with nearly two-thirds of respondents (62%) reporting satisfaction.”"
      },
      {
        label: "2. Cumulative Positive Reception",
        value: "79% Aggregate Favorable",
        detail:
          "An additional 17% declared themselves very satisfied, establishing a commanding 79% overall positive reception.",
        band9Application:
          "“An additional 17% were very satisfied, bringing total positive sentiment to 79%...”"
      },
      {
        label: "3. Marginal Criticism & Neutrality",
        value: "10% Dissat • 11% No Comment",
        detail:
          "Only one in ten visitors was dissatisfied, mirroring the 11% proportion who offered no comment.",
        band9Application:
          "“...whereas negative appraisals and neutral responses were marginal at 10% and 11% respectively.”"
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
