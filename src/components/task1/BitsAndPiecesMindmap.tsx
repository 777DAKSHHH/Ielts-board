import React, { useState } from "react";
import {
  Layers,
  ChevronRight,
  Sparkles,
  BookOpen,
  Award,
  CheckCircle2,
  Table,
  TrendingUp,
  Eye,
  ArrowRight,
  FileSpreadsheet
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
      "A Band 9 introduction paraphrases the prompt parameters: the proportion of national consumer spending allocated to three distinct sectors across five European nations in 2002.",
    tableCorrelation:
      "Sets up the entire 5x3 table matrix: 5 rows (Ireland, Italy, Spain, Sweden, Turkey) across 3 expenditure columns in the calendar year 2002.",
    pieces: [
      {
        label: "Visual Format & Topic",
        value: "Comparative Data Table (Household Budgets)",
        detail:
          "Presents consumer expenditure proportions across 5 nations in 2002, measured strictly in percentage shares of total national spending.",
        band9Application:
          "“The table compares the proportion of national consumer expenditure allocated to three broad categories of goods and services across five European countries in 2002.”"
      },
      {
        label: "Geographic & Temporal Parameters",
        value: "5 European Countries • Single Year (2002)",
        detail:
          "Ireland, Italy, Spain, Sweden, and Turkey in 2002 (requires static past simple verbs: 'allocated', 'accounted for', 'stood at').",
        band9Application:
          "“...across five European countries—namely Ireland, Italy, Spain, Sweden, and Turkey—during the year 2002.”"
      },
      {
        label: "Expenditure Category Classification",
        value: "3 Primary Consumer Sectors",
        detail:
          "Food/Drink/Tobacco (basic sustenance), Clothing/Footwear (semi-essential attire), and Leisure/Education (discretionary spending).",
        band9Application:
          "“...categorized into basic sustenance (food, drink, and tobacco), apparel and footwear, and leisure and education.”"
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
      "Synthesizes macro trends without quoting any numerical statistics: 1) Food was universally the dominant category; 2) Leisure was universally the lowest; 3) Turkish/Irish households spent most on food, while Italy led in clothing.",
    tableCorrelation:
      "Extracts global macro hierarchies: Column 1 > Column 2 > Column 3 across all 5 nations, plus key outliers Turkey, Ireland, and Italy.",
    pieces: [
      {
        label: "Pillar 1: Sustenance as Universal Leader",
        value: "Dominant Spending Across All 5 Nations",
        detail:
          "Food, drinks, and tobacco represented the highest proportion of household spending in every single surveyed country without exception.",
        band9Application:
          "“Overall, consumer expenditure was consistently highest on food, drinks, and tobacco across all five nations...”"
      },
      {
        label: "Pillar 2: Leisure/Education as Universal Minority",
        value: "Lowest Expenditure Proportion Throughout",
        detail:
          "Recreation and education accounted for the smallest portion of consumer budgets in every country, never exceeding single digits.",
        band9Application:
          "“...whereas leisure and education consistently accounted for the smallest share of spending throughout.”"
      },
      {
        label: "Pillar 3: National Outliers & Divergences",
        value: "Turkey & Ireland (Food) vs Italy (Clothing)",
        detail:
          "Turkish and Irish consumers spent far more on food than their peers, whereas Italy directed the largest relative share towards attire.",
        band9Application:
          "“Furthermore, Turkish and Irish consumers devoted significantly larger proportions to sustenance than other nations, while Italy recorded the largest proportion on clothing and footwear.”"
      }
    ]
  },
  {
    id: "body1-food",
    title: "Piece 3: Body 1 — Food, Drink & Tobacco (Dominant Sector)",
    badge: "Body 1 Dominance",
    color: "#2563eb",
    borderColor: "#bfdbfe",
    bgLight: "#eff6ff",
    icon: <TrendingUp size={18} color="#2563eb" />,
    summary:
      "Reports and compares the dominant food sector: Turkey's global peak (32.14%) and Ireland's close second (28.91%) contrasted against Spain (18.80%), Italy (16.36%), and Sweden (15.77%).",
    tableCorrelation:
      "Covers the entire Column 2 data: Turkey (32.14%) > Ireland (28.91%) >> Spain (18.80%) > Italy (16.36%) > Sweden (15.77%).",
    pieces: [
      {
        label: "The Upper Tier: Turkey & Ireland",
        value: "32.14% (Global Peak) & 28.91%",
        detail:
          "Turkey allocated nearly a third of all consumer expenditure to sustenance, followed closely by Ireland at over a quarter.",
        band9Application:
          "“In terms of food, drinks, and tobacco, Turkey allocated the highest proportion of any country, with nearly a third of all consumer expenditure (32.14%) directed towards this category, closely followed by Ireland at 28.91%.”"
      },
      {
        label: "The Lower Tier: Spain, Italy & Sweden",
        value: "18.80%, 16.36% & 15.77%",
        detail:
          "The other three nations spent substantially less on food; Spain stood at 18.80%, while Italy and Sweden registered just 16.36% and 15.77%.",
        band9Application:
          "“In marked contrast, the remaining three nations registered substantially lower figures; Spain recorded 18.80%, while Italy and Sweden spent the least on sustenance at 16.36% and 15.77% respectively.”"
      }
    ]
  },
  {
    id: "body2-clothing-leisure",
    title: "Piece 4: Body 2 — Clothing & Leisure Sectors",
    badge: "Body 2 Synthesis",
    color: "#d97706",
    borderColor: "#fed7aa",
    bgLight: "#fff7ed",
    icon: <Table size={18} color="#d97706" />,
    summary:
      "Reports Italy's undisputed lead in clothing (9.00%) against the 6.5% cluster, and contrasts the minor figures for leisure and education (1.98% to 4.35%).",
    tableCorrelation:
      "Covers Columns 3 & 4: Clothing (Italy 9.00% leader, Sweden 5.40% lowest) + Leisure (Turkey 4.35% leader, Spain 1.98% absolute lowest).",
    pieces: [
      {
        label: "Clothing & Footwear Outlier: Italy",
        value: "9.00% (Undisputed Leader)",
        detail:
          "Italy dedicated 9.00% to clothing, clearly outspending Turkey (6.63%), Spain (6.51%), and Ireland (6.43%), while Sweden lagged at 5.40%.",
        band9Application:
          "“Turning to clothing and footwear, Italy was the undisputed leader at exactly 9.00%, outstripping Turkey (6.63%), Spain (6.51%), and Ireland (6.43%), with Sweden recording the lowest share at 5.40%.”"
      },
      {
        label: "Leisure & Education: Minor Allocations",
        value: "1.98% – 4.35% (Spain Table Floor)",
        detail:
          "Turkey again led at 4.35%, followed by Sweden (3.22%) and Italy (3.20%), while Spain recorded the lowest figure in the entire table at 1.98%.",
        band9Application:
          "“Finally, leisure and education represented the smallest expenditure throughout; Turkey again topped the list at 4.35%, followed by Sweden (3.22%) and Italy (3.20%), while Spain registered the lowest single figure in the table at just 1.98%.”"
      }
    ]
  }
];

export const BitsAndPiecesMindmap: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>("parameters");
  const [viewStyle, setViewStyle] = useState<"smart_table" | "pamphlet_scan">("smart_table");

  const activeBranch =
    MINDMAP_BRANCHES.find((b) => b.id === selectedBranchId) || MINDMAP_BRANCHES[0];

  const tableRows = [
    { country: "Ireland", food: "28.91%", clothing: "6.43%", leisure: "2.21%" },
    { country: "Italy", food: "16.36%", clothing: "9.00%", leisure: "3.20%" },
    { country: "Spain", food: "18.80%", clothing: "6.51%", leisure: "1.98%" },
    { country: "Sweden", food: "15.77%", clothing: "5.40%", leisure: "3.22%" },
    { country: "Turkey", food: "32.14%", clothing: "6.63%", leisure: "4.35%" }
  ];

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

      {/* Side-by-Side Reference POV Grid (Diagram/Table on Left, Mindmap on Right) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(340px, 0.95fr) minmax(360px, 1.05fr)",
          gap: "16px",
          alignItems: "start",
          width: "100%"
        }}
      >
        {/* Left Column: Reference Task Visual (Smart Board Style Table or Pamphlet Scan) */}
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
          {/* Header with View Toggle */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "6px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Eye size={17} color="#2563eb" />
              <strong style={{ fontSize: "0.92rem", color: "#0f172a" }}>
                Reference Task Visual
              </strong>
            </div>
            <div style={{ display: "flex", gap: "4px", background: "#f1f5f9", padding: "2px", borderRadius: "6px" }}>
              <button
                type="button"
                onClick={() => setViewStyle("smart_table")}
                style={{
                  padding: "3px 8px",
                  fontSize: "0.72rem",
                  fontWeight: 750,
                  borderRadius: "5px",
                  border: "none",
                  background: viewStyle === "smart_table" ? "#ffffff" : "transparent",
                  color: viewStyle === "smart_table" ? "#0f172a" : "#64748b",
                  cursor: "pointer"
                }}
              >
                Smart Table
              </button>
              <button
                type="button"
                onClick={() => setViewStyle("pamphlet_scan")}
                style={{
                  padding: "3px 8px",
                  fontSize: "0.72rem",
                  fontWeight: 750,
                  borderRadius: "5px",
                  border: "none",
                  background: viewStyle === "pamphlet_scan" ? "#ffffff" : "transparent",
                  color: viewStyle === "pamphlet_scan" ? "#0f172a" : "#64748b",
                  cursor: "pointer"
                }}
              >
                Pamphlet Scan
              </button>
            </div>
          </div>

          {/* Authentic Smart Board Styled Table — Clean, Crisp, Never Congested */}
          {viewStyle === "smart_table" ? (
            <div
              style={{
                borderRadius: "10px",
                border: "2px solid #cbd5e1",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "0.82rem",
                  textAlign: "center"
                }}
              >
                <thead>
                  <tr style={{ background: "#346294", color: "#ffffff" }}>
                    <th style={{ padding: "8px 10px", textAlign: "left", borderRight: "1.5px solid #ffffff", width: "25%" }}>
                      Country
                    </th>
                    <th style={{ padding: "8px 10px", borderRight: "1.5px solid #ffffff", width: "25%" }}>
                      Food/Drink
                    </th>
                    <th style={{ padding: "8px 10px", borderRight: "1.5px solid #ffffff", width: "25%" }}>
                      Clothing
                    </th>
                    <th style={{ padding: "8px 10px", width: "25%" }}>
                      Leisure
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((r, i) => {
                    const isEven = i % 2 === 0;
                    const bg = isEven ? "#cddbe8" : "#e4edf5";
                    return (
                      <tr key={r.country} style={{ borderBottom: "1.5px solid #ffffff" }}>
                        <td style={{ background: "#4478ae", color: "#ffffff", padding: "8px 10px", textAlign: "left", fontWeight: 700, borderRight: "1.5px solid #ffffff" }}>
                          {r.country}
                        </td>
                        <td style={{ background: bg, padding: "8px 10px", fontWeight: 650, color: "#1e293b", borderRight: "1.5px solid #ffffff" }}>
                          {r.food}
                        </td>
                        <td style={{ background: bg, padding: "8px 10px", fontWeight: 650, color: "#1e293b", borderRight: "1.5px solid #ffffff" }}>
                          {r.clothing}
                        </td>
                        <td style={{ background: bg, padding: "8px 10px", fontWeight: 650, color: "#1e293b" }}>
                          {r.leisure}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div
              style={{
                background: "#f8fafc",
                border: "1.5px solid #cbd5e1",
                borderRadius: "10px",
                overflow: "hidden"
              }}
            >
              <img
                src="materials/consumer_spending_table_2002.jpg"
                alt="Consumer Spending Table Scan"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "contain"
                }}
              />
            </div>
          )}

          {/* Quick Cross-Reference Insights Strip */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.76rem" }}>
            <div
              style={{
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
                borderRadius: "8px",
                padding: "7px 10px",
                color: "#1e40af",
                lineHeight: 1.4
              }}
            >
              <strong>Food/Drink/Tobacco:</strong> Ranks 1st in all 5 nations (Turkey 32.14% peak → Sweden 15.77% lowest).
            </div>

            <div
              style={{
                background: "#fff7ed",
                border: "1px solid #fed7aa",
                borderRadius: "8px",
                padding: "7px 10px",
                color: "#9a3412",
                lineHeight: 1.4
              }}
            >
              <strong>Clothing/Footwear:</strong> Ranks 2nd throughout (Italy 9.00% leader → Sweden 5.40% lowest).
            </div>

            <div
              style={{
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderRadius: "8px",
                padding: "7px 10px",
                color: "#166534",
                lineHeight: 1.4
              }}
            >
              <strong>Leisure/Education:</strong> Ranks 3rd throughout (Turkey 4.35% leader → Spain 1.98% floor).
            </div>
          </div>

          {/* Active Branch Visual Correlation Callout */}
          <div
            style={{
              background: activeBranch.bgLight,
              border: `1.5px solid ${activeBranch.borderColor}`,
              borderRadius: "10px",
              padding: "10px 12px",
              fontSize: "0.78rem",
              color: "#334155",
              lineHeight: 1.45
            }}
          >
            <div style={{ fontWeight: 800, color: activeBranch.color, marginBottom: "3px" }}>
              ✦ Visual Anchor for {activeBranch.title.split(":")[0]}:
            </div>
            {activeBranch.tableCorrelation}
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
                {activeBranch.pieces.length} Core Elements
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
