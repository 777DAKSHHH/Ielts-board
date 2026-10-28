import React, { useState } from "react";
import {
  Layers,
  TrendingDown,
  TrendingUp,
  ChevronRight,
  Sparkles,
  BookOpen,
  Users,
  Award,
  CheckCircle2,
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
  pieces: MindmapPiece[];
}

const MINDMAP_BRANCHES: MindmapBranch[] = [
  {
    id: "parameters",
    title: "Piece 1: Introduction & Pie Chart Parameters",
    badge: "Introduction Anchor",
    color: "#2563eb",
    borderColor: "#bfdbfe",
    bgLight: "#eff6ff",
    icon: <BookOpen size={20} color="#2563eb" />,
    summary:
      "A Band 9 introduction paraphrases all essential parameters: visual format (three pie charts), institution (one UK school), five spending categories, 20-year multi-decade temporal span (1981, 1991, 2001), and the percentage measurement scale (%).",
    pieces: [
      {
        label: "Visual Format & Action",
        value: "Three Pie Charts (Proportional Spending)",
        detail:
          "Three circular pie charts illustrating proportional budget distribution across five operational categories.",
        band9Application:
          "“The three pie charts illustrate the proportion of annual expenditure allocated across five different categories by a single school in the United Kingdom...”"
      },
      {
        label: "Temporal Scope & Surveyed Years",
        value: "Three Distinct Milestone Years: 1981, 1991, 2001",
        detail:
          "A 20-year chronological span tracked at decade intervals across three distinct snapshot years.",
        band9Application:
          "“...tracking expenditure patterns in three separate years: 1981, 1991, and 2001.”"
      },
      {
        label: "Categorical Scope & Unit",
        value: "5 Categories • Percentage Unit (%)",
        detail:
          "Staff salaries (teachers & other workers), furniture/equipment, resources (books), and insurance, summing to 100% per year.",
        band9Application:
          "“...segmented into five budgetary sectors, with figures expressed as a percentage of total annual outlay.”"
      }
    ]
  },
  {
    id: "overview",
    title: "Piece 2: Macro Overview (3-Pillar Synthesis)",
    badge: "Overview Engine",
    color: "#059669",
    borderColor: "#a7f3d0",
    bgLight: "#ecfdf5",
    icon: <Layers size={20} color="#059669" />,
    summary:
      "The macro overview synthesizes the three decisive high-level features: 1) Teachers' salaries consistently swallowed the lion's share (peaking at 50%); 2) Insurance consistently absorbed the smallest share despite quadrupling (2% to 8%); 3) Volatility in furniture/equipment (falling to 5% then surging to 23%) vs general decline in other staff and resources.",
    pieces: [
      {
        label: "Pillar 1: Teachers' Salaries Lion's Share",
        value: "Dominant cost in all 3 periods (40% → 50% → 45%)",
        detail:
          "Teachers' salaries formed the single largest outlay in every year, absorbing up to half the budget in 1991.",
        band9Application:
          "“Overall, teachers’ salaries consistently represented the largest share of the school’s budget throughout the entire twenty-year timeframe, peaking at precisely half of all expenditure in 1991.”"
      },
      {
        label: "Pillar 2: Insurance as Smallest Outlay",
        value: "Lowest share in all years (2% → 3% → 8%)",
        detail:
          "Insurance remained the smallest allocation throughout, even though it experienced a continuous fourfold surge.",
        band9Application:
          "“Conversely, insurance consistently accounted for the lowest proportion, despite undergoing a continuous fourfold increase.”"
      },
      {
        label: "Pillar 3: Furniture Volatility vs Staff Reductions",
        value: "Furniture: 15% → 5% → 23% Resurgence",
        detail:
          "Furniture collapsed in 1991 before rebounding strongly to 23%, while other workers' salaries fell steadily.",
        band9Application:
          "“Furthermore, while other workers’ salaries and resources saw overall reductions by 2001, spending on furniture and equipment exhibited dramatic fluctuation, recovering strongly after an initial slump.”"
      }
    ]
  },
  {
    id: "body1_staff",
    title: "Piece 3: Body 1 (Staff Remuneration & Wage Trajectories)",
    badge: "Body 1 Focus",
    color: "#7c3aed",
    borderColor: "#ddd6fe",
    bgLight: "#f5f3ff",
    icon: <Users size={20} color="#7c3aed" />,
    summary:
      "Document staff-related costs: Teachers' salaries began at 40%, peaked at 50% in 1991, and moderated to 45% in 2001. Other workers' salaries declined continuously from 28% to 22% and almost halved to 15%. Combined staff costs consistently accounted for 60%–72% of total outlay.",
    pieces: [
      {
        label: "Feature 1: Teachers' Dominant Trajectory",
        value: "40% (1981) → 50% (1991 Peak) → 45% (2001)",
        detail:
          "Teachers' pay was the premier cost in every year, expanding by 10 points in 1991 before easing to 45%.",
        band9Application:
          "“In terms of staffing costs, teachers’ salaries constituted the school’s principal outlay in every year surveyed, beginning at 40% in 1981, climbing to a peak of 50% in 1991, and subsequently dipping to 45% in 2001.”"
      },
      {
        label: "Feature 2: Other Staff Wage Decline",
        value: "28% (1981) → 22% (1991) → 15% (2001)",
        detail:
          "Other workers' salaries formed the second-largest cost in 1981 but dropped steadily, nearly halving by 2001.",
        band9Application:
          "“By contrast, expenditure on other workers’ salaries followed an unbroken downward trajectory; having formed the second-largest cost at 28% in 1981, it diminished to 22% in 1991 before almost halving to 15% by 2001.”"
      },
      {
        label: "Feature 3: Combined Staff Outlay Synthesis",
        value: "68% (1981) → 72% (1991) → 60% (2001)",
        detail:
          "Staff wages consistently absorbed well over half the budget, reaching nearly three-quarters in 1991.",
        band9Application:
          "“Combined, staff remuneration consistently absorbed well over half of the school’s annual funding, ranging between 60% and 72%.”"
      }
    ]
  },
  {
    id: "body2_non_staff",
    title: "Piece 4: Body 2 (Non-Staff Operational & Capital Outlay)",
    badge: "Body 2 Focus",
    color: "#d97706",
    borderColor: "#fde68a",
    bgLight: "#fffbeb",
    icon: <TrendingUp size={20} color="#d97706" />,
    summary:
      "Document the three non-staff categories: Furniture & equipment plunged from 15% to 5% before surging to 23% (2nd largest item). Resources e.g. books rose from 15% to 20% then dropped to 9%. Insurance edged from 2% to 3% then surged to 8% (quadrupled).",
    pieces: [
      {
        label: "Feature 1: Furniture Fluctuation & Resurgence",
        value: "15% (1981) → 5% (1991) → 23% (2001)",
        detail:
          "Plummeted by two-thirds in 1991 to just 5%, then rebounded by 18 points to become the second most expensive cost.",
        band9Application:
          "“Turning to non-staff expenditure, allocations for furniture and equipment stood at 15% in 1981, plummeted to just 5% in 1991, and then experienced a dramatic resurgence to 23% in 2001...”"
      },
      {
        label: "Feature 2: Resources (Books) Rise and Fall",
        value: "15% (1981) → 20% (1991) → 9% (2001)",
        detail:
          "Initially tied with furniture in 1981 at 15%, expanded to 20% in 1991, but shrank to single digits (9%) in 2001.",
        band9Application:
          "“Meanwhile, spending on educational resources such as books initially rose from 15% to 20% between 1981 and 1991, before declining steeply to a twenty-year low of 9% in 2001.”"
      },
      {
        label: "Feature 3: Insurance Fourfold Expansion",
        value: "2% (1981) → 3% (1991) → 8% (2001)",
        detail:
          "Ranked last in all three charts, starting at a negligible 2% before rising to 3% and quadrupling to 8%.",
        band9Application:
          "“Finally, insurance accounted for the smallest percentage in all three periods, edging up from a negligible 2% in 1981 to 3% in 1991, before surging to 8% in 2001.”"
      }
    ]
  }
];

export const BitsAndPiecesMindmap: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>("parameters");
  const [selectedPieceIndex, setSelectedPieceIndex] = useState<number>(0);

  const activeBranch =
    MINDMAP_BRANCHES.find((b) => b.id === selectedBranchId) || MINDMAP_BRANCHES[0];
  const activePiece = activeBranch.pieces[selectedPieceIndex] || activeBranch.pieces[0];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        width: "100%",
        fontFamily: "inherit"
      }}
    >
      {/* Mindmap Branch Tabs */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "8px"
        }}
      >
        {MINDMAP_BRANCHES.map((branch) => {
          const isSelected = selectedBranchId === branch.id;
          return (
            <button
              key={branch.id}
              onClick={() => {
                setSelectedBranchId(branch.id);
                setSelectedPieceIndex(0);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 14px",
                borderRadius: "12px",
                border: isSelected ? `2px solid ${branch.color}` : "1.5px solid #e2e8f0",
                background: isSelected ? branch.bgLight : "#ffffff",
                cursor: "pointer",
                textAlign: "left",
                boxShadow: isSelected ? "0 2px 8px rgba(0,0,0,0.05)" : "none",
                transition: "all 0.15s ease"
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: isSelected ? branch.color : "#f1f5f9",
                  color: isSelected ? "#ffffff" : "#64748b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}
              >
                {branch.icon}
              </div>
              <div style={{ minWidth: 0 }}>
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
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 750,
                    color: "#0f172a",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  }}
                >
                  {branch.title.split(":")[1]?.trim() || branch.title}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Branch Deep Dive Stage */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "16px",
          border: `1.5px solid ${activeBranch.borderColor}`,
          padding: "18px 20px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
          display: "flex",
          flexDirection: "column",
          gap: "14px"
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
            <span
              style={{
                fontSize: "0.74rem",
                fontWeight: 800,
                padding: "3px 8px",
                borderRadius: "6px",
                background: activeBranch.bgLight,
                color: activeBranch.color
              }}
            >
              {activeBranch.badge}
            </span>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
              {activeBranch.title}
            </h3>
          </div>
          <p style={{ fontSize: "0.86rem", color: "#475569", margin: 0, lineHeight: 1.5 }}>
            {activeBranch.summary}
          </p>
        </div>

        {/* Pieces Selector Strip */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {activeBranch.pieces.map((piece, idx) => {
            const isPieceActive = selectedPieceIndex === idx;
            return (
              <button
                key={piece.label}
                onClick={() => setSelectedPieceIndex(idx)}
                style={{
                  padding: "6px 12px",
                  borderRadius: "8px",
                  fontSize: "0.78rem",
                  fontWeight: 750,
                  border: isPieceActive
                    ? `1.5px solid ${activeBranch.color}`
                    : "1px solid #e2e8f0",
                  background: isPieceActive ? activeBranch.color : "#f8fafc",
                  color: isPieceActive ? "#ffffff" : "#334155",
                  cursor: "pointer",
                  transition: "all 0.15s ease"
                }}
              >
                {piece.label}
              </button>
            );
          })}
        </div>

        {/* Selected Piece Interactive Card */}
        {activePiece && (
          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "14px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <strong style={{ fontSize: "0.95rem", color: "#0f172a" }}>{activePiece.label}</strong>
              {activePiece.value && (
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    padding: "3px 10px",
                    borderRadius: "6px",
                    background: "#ffffff",
                    border: "1px solid #cbd5e1",
                    color: activeBranch.color
                  }}
                >
                  {activePiece.value}
                </span>
              )}
            </div>

            <p style={{ fontSize: "0.86rem", color: "#334155", margin: 0, lineHeight: 1.5 }}>
              {activePiece.detail}
            </p>

            <div
              style={{
                background: "#ffffff",
                borderLeft: `3.5px solid ${activeBranch.color}`,
                borderRadius: "8px",
                padding: "12px 14px",
                fontSize: "0.9rem",
                color: "#1e293b",
                lineHeight: 1.55,
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
              }}
            >
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  color: activeBranch.color,
                  marginBottom: "4px"
                }}
              >
                BAND 9 MODEL CITATION:
              </div>
              <em>{activePiece.band9Application}</em>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
