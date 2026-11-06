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
  BarChart2,
  PieChart as PieIcon,
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
      "A Band 9 introduction paraphrases the dual visual parameters: the bar chart delineates average weekly working hours, while the pie chart demonstrates the proportion suffering from stress-related illness across eight professional groups.",
    tableCorrelation:
      "Captures both visual graphics: Bar Chart (0 to 70 hours/week) and Pie Chart (proportions summing to 100%) across 8 distinct occupations.",
    pieces: [
      {
        label: "Visual Graphics & Scope",
        value: "Dual Graph (Bar Chart + Pie Chart)",
        detail:
          "Combines labor volume (hours worked) with occupational health outcomes (stress illness proportion) across 8 groups.",
        band9Application:
          "“The bar chart and pie chart illustrate the average weekly working hours and the proportion of individuals suffering from stress-related illnesses across eight professional occupations.”"
      },
      {
        label: "Target Occupations",
        value: "8 Professional Sectors",
        detail:
          "Business men, movie producers, doctors, writers, programmers, lawyers, chefs, and lecturers.",
        band9Application:
          "“...across eight distinct occupational categories, ranging from commercial executives to academic lecturers.”"
      },
      {
        label: "Comparative Dynamic",
        value: "Workload Volume vs Health Incidence",
        detail:
          "Enables examiners to see immediate qualitative comparisons between how long each profession worked and how severely they suffered from stress.",
        band9Application:
          "“...enabling direct evaluation between occupational time commitment and psychological health burdens.”"
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
      "Synthesizes overarching trends without quoting numerical statistics: 1) Business men committed the longest hours while lecturers worked the least; 2) Working time did not correlate directly with stress; 3) Movie producers and lecturers led in illness, while programmers recorded the lowest rate.",
    tableCorrelation:
      "Synthesizes extremes from both visuals: Hours extreme (Business men vs Lecturers) and Stress extreme (Producers vs Programmers), underscoring the non-correlation paradox.",
    pieces: [
      {
        label: "Pillar 1: Working Hours Spectrum",
        value: "Business Men Peak vs Lecturers Floor",
        detail:
          "Business men worked the longest week of all professions by a noticeable margin, whereas lecturers spent the fewest hours on the job.",
        band9Application:
          "“Overall, business men committed the longest hours per week by a considerable margin, whereas lecturers logged the fewest hours.”"
      },
      {
        label: "Pillar 2: The Non-Correlation Paradox",
        value: "Disparity Between Labor and Health Strain",
        detail:
          "There was no direct linear relationship between long hours and stress illness; movie producers and lecturers formed the two largest groups of stress sufferers.",
        band9Application:
          "“However, working time did not correlate directly with stress-related conditions; movie producers and lecturers constituted the two largest segments of stress sufferers...”"
      },
      {
        label: "Pillar 3: The Minimum Illness Floor",
        value: "Programmers Record Minimum Stress",
        detail:
          "Despite working a standard 40-hour week, programmers recorded the absolute lowest prevalence of stress illness.",
        band9Application:
          "“...while programmers recorded the lowest prevalence of stress-induced illnesses throughout the surveyed cohort.”"
      }
    ]
  },
  {
    id: "body1-hours",
    title: "Piece 3: Body 1 — Weekly Hours Worked (Bar Chart)",
    badge: "Bar Chart Breakdown",
    color: "#dc2626",
    borderColor: "#fecaca",
    bgLight: "#fef2f2",
    icon: <BarChart2 size={18} color="#dc2626" />,
    summary:
      "Ranks the weekly working hours in descending order from the longest workweeks (Business men 70h, Movie producers 60h, Doctors 52h) to intermediate groups (Writers 45h, Programmers 40h) and the lower tier (Lawyers 35h, Chefs 30h, Lecturers 25h).",
    tableCorrelation:
      "Covers all 8 bars in the bar chart: 70h, 60h, 52h, 45h, 40h, 35h, 30h, 25h.",
    pieces: [
      {
        label: "1. Peak Workweek Leader",
        value: "Business Men (70 hrs/week)",
        detail:
          "Business men worked the longest week of all professions at 70 hours—nearly triple the hours of lecturers.",
        band9Application:
          "“Regarding working hours, business men logged the longest workweek at an average of 70 hours...”"
      },
      {
        label: "2. Upper Tier Followers",
        value: "Movie Producers (60h) & Doctors (52h)",
        detail:
          "Movie producers followed at 60 hours per week, while doctors averaged 52 hours.",
        band9Application:
          "“...followed by movie producers and doctors at 60 and 52 hours per week respectively.”"
      },
      {
        label: "3. Intermediate Standard & Baseline",
        value: "Writers (45h) & Programmers (40h)",
        detail:
          "Writers averaged 45 hours, while programmers completed a standard 40-hour workweek.",
        band9Application:
          "“Writers averaged 45 hours on the job, while programmers completed a standard 40-hour week.”"
      },
      {
        label: "4. Lower Tier & Workweek Minimum",
        value: "Lawyers (35h), Chefs (30h) & Lecturers (25h)",
        detail:
          "Lawyers and chefs completed 35 and 30 hours respectively, while lecturers worked the least at just 25 hours per week.",
        band9Application:
          "“Lawyers and chefs worked somewhat fewer hours (35 and 30 hours respectively), whereas lecturers recorded the lowest figure across all groups at merely 25 hours per week.”"
      }
    ]
  },
  {
    id: "body2-stress",
    title: "Piece 4: Body 2 — Stress Illness & Contrasts (Pie Chart)",
    badge: "Pie Chart Breakdown",
    color: "#0891b2",
    borderColor: "#a5f3fc",
    bgLight: "#ecfeff",
    icon: <PieIcon size={18} color="#0891b2" />,
    summary:
      "Details each profession's share of the stress illness cohort: Movie producers leading at 25%, the central lecturer paradox at 18%, down through Doctors (15%), Business men (11%), Chefs (10%), Writers & Lawyers (8% each), and Programmers (5%).",
    tableCorrelation:
      "Deconstructs the pie chart slices summing to 100%, emphasizing the central paradox where lecturers work the least yet suffer the 2nd highest stress.",
    pieces: [
      {
        label: "1. Dominant Slice (Peak Stress)",
        value: "Movie Producers (25% / One in Four)",
        detail:
          "Movie producers constituted a full quarter of all individuals suffering from stress-related illness.",
        band9Application:
          "“In terms of stress-related illness, movie producers accounted for the largest single proportion at exactly 25%.”"
      },
      {
        label: "2. The Central Paradox",
        value: "Lecturers (18% — 2nd Highest Stress)",
        detail:
          "Despite logging the shortest workweek (25h), lecturers made up the second highest share of stress sufferers at 18%.",
        band9Application:
          "“Paradoxically, lecturers represented the second highest group at 18%, despite working the fewest hours.”"
      },
      {
        label: "3. Moderate Stress & Business Men Disparity",
        value: "Doctors (15%) & Business Men (11%)",
        detail:
          "Doctors constituted 15%, while business men made up only 11% of stress cases despite their 70-hour workweek.",
        band9Application:
          "“Doctors constituted 15% of the total, whereas business men comprised a modest 11% despite their extensive workweek.”"
      },
      {
        label: "4. Parities & Minimum Floor",
        value: "Chefs (10%), Writers & Lawyers (8%), Programmers (5%)",
        detail:
          "Chefs made up 10%, writers and lawyers tied at 8% each, and programmers formed the smallest segment at 5%.",
        band9Application:
          "“Chefs made up exactly one-tenth of sufferers, while writers and lawyers shared an identical 8% each. At merely 5%, programmers formed the smallest proportion of the illness cohort.”"
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
      {/* Top Banner */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "16px",
          border: "1.5px solid var(--border-subtle, #cbd5e1)",
          padding: "16px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
            <Sparkles size={18} color="#2563eb" />
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
              Dual Visual Strategic Decomposition Mindmap
            </h3>
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 800,
                background: "#eff6ff",
                color: "#1d4ed8",
                padding: "2px 8px",
                borderRadius: "6px"
              }}
            >
              Dual Graph Framework
            </span>
          </div>
          <p style={{ fontSize: "0.85rem", color: "#64748b", margin: 0 }}>
            Master the structural anatomy: Introduction scope, zero-number macro overview, Bar Chart labor flow, and Pie Chart health synthesis.
          </p>
        </div>

        <span
          style={{
            fontSize: "0.76rem",
            fontWeight: 800,
            background: "#f1f5f9",
            color: "#475569",
            padding: "4px 10px",
            borderRadius: "8px"
          }}
        >
          4 Architecture Pillars
        </span>
      </div>

      {/* Main 2-Column Responsive Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: "16px",
          alignItems: "stretch"
        }}
      >
        {/* Left Column: Interactive Pillar Navigator */}
        <div
          style={{
            background: "#ffffff",
            border: "1.5px solid var(--border-subtle, #cbd5e1)",
            borderRadius: "18px",
            padding: "16px",
            boxShadow: "var(--shadow-sm)",
            display: "flex",
            flexDirection: "column",
            gap: "10px"
          }}
        >
          <div style={{ fontSize: "0.82rem", fontWeight: 750, color: "#64748b", paddingLeft: "4px" }}>
            Select Strategic Architectural Pillar:
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
            {MINDMAP_BRANCHES.map((b) => {
              const isSelected = selectedBranchId === b.id;
              return (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setSelectedBranchId(b.id)}
                  style={{
                    padding: "12px 14px",
                    borderRadius: "12px",
                    border: isSelected ? `2px solid ${b.color}` : "1.5px solid #e2e8f0",
                    background: isSelected ? b.bgLight : "#f8fafc",
                    textAlign: "left",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                    boxShadow: isSelected ? "0 4px 12px rgba(0,0,0,0.05)" : "none",
                    transition: "all 0.15s ease"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: isSelected ? b.color : "#ffffff",
                        color: isSelected ? "#ffffff" : b.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: isSelected ? "none" : `1px solid ${b.borderColor}`
                      }}
                    >
                      {b.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.88rem",
                          fontWeight: 800,
                          color: isSelected ? "#0f172a" : "#334155"
                        }}
                      >
                        {b.title}
                      </div>
                      <div style={{ fontSize: "0.72rem", color: "#64748b" }}>
                        {b.pieces.length} Essential Analytical Components
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={16} color={isSelected ? b.color : "#94a3b8"} />
                </button>
              );
            })}
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

          {/* Pieces Cards List */}
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
