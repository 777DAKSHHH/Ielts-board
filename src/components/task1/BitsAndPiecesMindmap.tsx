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
  CheckCircle2
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
    title: "Piece 1: Introduction & Chart Parameters",
    badge: "Introduction Anchor",
    color: "#4338ca",
    borderColor: "#c7d2fe",
    bgLight: "#eef2ff",
    icon: <BookOpen size={20} color="#4f46e5" />,
    summary:
      "A Band 9 introduction paraphrases the essential parameters: graphic format (double bar chart), demographic subject (Australian men and women), age distribution (six distinct cohorts from 15 to 65+), temporal anchor (2010), and measurement unit (percentage of demographic cohort / %).",
    pieces: [
      {
        label: "Visual Format & Action",
        value: "Double Bar Chart (Clustered Columns)",
        detail:
          "Dual vertical columns comparing male and female regular exercise participation across six age cohorts.",
        band9Application:
          "“The bar chart compares the proportions of Australian men and women across six distinct age brackets who engaged in regular physical activity in the year 2010...”"
      },
      {
        label: "Demographic Target & Gender",
        value: "Australian Men and Women (6 Age Brackets)",
        detail:
          "Six demographic brackets: 15–24, 25–34, 35–44, 45–54, 55–64, and 65 and over.",
        band9Application:
          "“...tracking physical exercise rates among Australian males and females segmented into six generational cohorts...”"
      },
      {
        label: "Measurement Scale & Year",
        value: "Percentage Scale (%) in 2010",
        detail:
          "Y-axis calibrated in percentage points (0% to 60%); survey conducted in Australia in 2010.",
        band9Application:
          "“...measured as a percentage of each demographic cohort (%) in the year 2010.”"
      }
    ]
  },
  {
    id: "overview",
    title: "Piece 2: Macro Overview (3-Pillar Synthesis)",
    badge: "Overview Engine",
    color: "#0369a1",
    borderColor: "#bae6fd",
    bgLight: "#f0f9ff",
    icon: <Layers size={20} color="#0284c7" />,
    summary:
      "The macro overview must synthesize the three decisive macro features: 1) Overall female superiority across 5 out of 6 age cohorts; 2) Youth inversion where young men lead (52.8% vs 47.7%); 3) Middle-age divergence (female peak of 53.3% vs male low of 39.5%) culminating in senior convergence (~47%).",
    pieces: [
      {
        label: "Pillar 1: Overall Female Preponderance",
        value: "Women lead across 5 out of 6 age groups",
        detail:
          "Australian females consistently out-participated males from age 25 through retirement.",
        band9Application:
          "“Overall, Australian females generally recorded higher rates of regular physical exercise than males across most age cohorts...”"
      },
      {
        label: "Pillar 2: Youth Inversion (Sole Male Lead)",
        value: "Men lead only in 15–24 cohort (52.8% vs 47.7%)",
        detail:
          "The youngest demographic is the only age bracket where male physical activity surpassed female levels.",
        band9Application:
          "“...with the notable exception of the youngest demographic (aged 15 to 24), where men recorded their sole statistical advantage.”"
      },
      {
        label: "Pillar 3: Divergence & Senior Convergence",
        value: "Female Peak (53.3%) vs Male Dip (39.5%) & 47% Parity",
        detail:
          "Females peaked in middle age (45–54), males followed a U-shaped dip to 39.5%, before both sexes converged in old age.",
        band9Application:
          "“Additionally, while female participation peaked during mid-adulthood, male activity exhibited a distinct dip-and-recovery trajectory, touching its lowest point before rebounding to converge with women in retirement.”"
      }
    ]
  },
  {
    id: "body1_females",
    title: "Piece 3: Body 1 (Female Trajectory & Mid-Life Dominance)",
    badge: "Body 1 Focus",
    color: "#64748b",
    borderColor: "#cbd5e1",
    bgLight: "#f8fafc",
    icon: <Users size={20} color="#64748b" />,
    summary:
      "Document the female trajectory: baseline start at 47.7%, steady rise to 48.9% (25–34) and 52.5% (35–44), peak of 53.3% (45–54), sustained plateau at 53.0% (55–64), and retirement decline to 47.1%.",
    pieces: [
      {
        label: "Feature 1: Youth Baseline",
        value: "15–24 Cohort: 47.7%",
        detail:
          "Women start at 47.7% in the youngest group, representing their second-lowest participation level.",
        band9Application:
          "“Focusing first on females, regular exercise commenced at 47.7% among those aged 15 to 24...”"
      },
      {
        label: "Feature 2: Mid-Life Ascent & Peak Rate",
        value: "45–54 Cohort: 53.3% (Global Peak) & 53.0% Plateau",
        detail:
          "Rises through 48.9% and 52.5% to achieve 53.3% at ages 45–54, holding steady at 53.0% at ages 55–64.",
        band9Application:
          "“Physical activity reached its peak among women aged 45 to 54 at 53.3%, representing the highest figure in the entire chart, and remained sustained at 53.0% in the following bracket.”"
      },
      {
        label: "Feature 3: Senior Tapering",
        value: "65 and Over: Receding to 47.1%",
        detail:
          "Senior women experience a noticeable 5.9-point drop, ending at 47.1%.",
        band9Application:
          "“However, female involvement experienced a noticeable decline among seniors aged 65 and over, receding to 47.1%.”"
      }
    ]
  },
  {
    id: "body2_males",
    title: "Piece 4: Body 2 (Male U-Shaped Trend & Gender Contrasts)",
    badge: "Body 2 Focus",
    color: "#0f172a",
    borderColor: "#94a3b8",
    bgLight: "#f1f5f9",
    icon: <TrendingUp size={20} color="#0f172a" />,
    summary:
      "Document the male trend and gender comparisons: youth peak at 52.8% (sole male lead), sharp slump to 42.2% and chart trough of 39.5% (widest 13.0% disparity), progressive rebound to 43.1% and 45.1%, and convergence at 46.7% vs 47.1% among seniors.",
    pieces: [
      {
        label: "Feature 1: Youth Advantage & Slump",
        value: "15–24: 52.8% (Peak) → 25–34: 42.2%",
        detail:
          "Men lead women by 5.1 points at age 15–24 (52.8% vs 47.7%), before tumbling by 10.6 points to 42.2%.",
        band9Application:
          "“In sharp contrast, Australian men recorded their peak physical activity in the youngest cohort (15 to 24) at 52.8%, outstripping young females by 5.1 percentage points before slumping to 42.2%.”"
      },
      {
        label: "Feature 2: Lowest Point & 13.0% Gap",
        value: "35–44 Cohort: 39.5% (Lowest Point)",
        detail:
          "Bottoms out at 39.5%, opening a 13.0 percentage point divide with active women (52.5%).",
        band9Application:
          "“Thereafter, male participation dropped to its lowest point of 39.5% in the 35-to-44 bracket, generating the widest gender divergence of 13.0%.”"
      },
      {
        label: "Feature 3: Rebound & Retirement Parity",
        value: "45–54 (43.1%) → 55–64 (45.1%) → 65+ (46.7% vs 47.1%)",
        detail:
          "Stages a continuous rebound across older brackets, reaching 46.7% at age 65+ to virtually equal women (47.1%).",
        band9Application:
          "“Nevertheless, male exercise figures staged a steady rebound, rising through 43.1% and 45.1%, ultimately reaching 46.7% in the 65-and-over cohort to virtually match their female counterparts (47.1%).”"
      }
    ]
  }
];

export const BitsAndPiecesMindmap: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>("parameters");
  const selectedBranch =
    MINDMAP_BRANCHES.find((b) => b.id === selectedBranchId) || MINDMAP_BRANCHES[0];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        width: "100%",
        fontFamily: "var(--font-sans)"
      }}
    >
      {/* Branch Selector Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "10px"
        }}
      >
        {MINDMAP_BRANCHES.map((branch) => {
          const isSelected = selectedBranchId === branch.id;
          return (
            <button
              key={branch.id}
              onClick={() => setSelectedBranchId(branch.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 16px",
                borderRadius: "16px",
                border: isSelected ? `2px solid ${branch.color}` : "1.5px solid var(--border-subtle)",
                background: isSelected ? branch.bgLight : "#ffffff",
                boxShadow: isSelected ? "var(--shadow-sm)" : "none",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.15s ease"
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: isSelected ? branch.color : "var(--slate-100)",
                  color: isSelected ? "#ffffff" : "var(--slate-600)",
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
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    color: isSelected ? branch.color : "var(--slate-500)",
                    display: "block"
                  }}
                >
                  {branch.badge}
                </span>
                <strong
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--slate-900)",
                    display: "block",
                    lineHeight: 1.3
                  }}
                >
                  {branch.title}
                </strong>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Branch Deep Dive */}
      <div
        style={{
          background: "#ffffff",
          border: `1.5px solid ${selectedBranch.borderColor}`,
          borderRadius: "20px",
          padding: "22px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          boxShadow: "var(--shadow-sm)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: selectedBranch.color,
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {selectedBranch.icon}
            </div>
            <div>
              <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                {selectedBranch.title}
              </h4>
              <p style={{ fontSize: "0.84rem", color: "var(--slate-600)", margin: "2px 0 0 0" }}>
                {selectedBranch.summary}
              </p>
            </div>
          </div>
        </div>

        {/* Pieces List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {selectedBranch.pieces.map((piece, i) => (
            <div
              key={piece.label}
              style={{
                background: "var(--slate-50)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "14px",
                padding: "16px 18px",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "6px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>
                    {i + 1}
                  </span>
                  <strong style={{ fontSize: "0.92rem", color: "var(--slate-900)" }}>
                    {piece.label}
                  </strong>
                </div>
                {piece.value && (
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      padding: "3px 9px",
                      borderRadius: "6px",
                      background: selectedBranch.bgLight,
                      color: selectedBranch.color,
                      border: `1px solid ${selectedBranch.borderColor}`
                    }}
                  >
                    {piece.value}
                  </span>
                )}
              </div>

              <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
                {piece.detail}
              </p>

              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "10px",
                  padding: "10px 14px",
                  fontSize: "0.86rem",
                  fontStyle: "italic",
                  color: "var(--slate-800)",
                  lineHeight: 1.55,
                  borderLeft: `3px solid ${selectedBranch.color}`
                }}
              >
                {piece.band9Application}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
