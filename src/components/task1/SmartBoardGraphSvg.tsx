import React, { useState } from "react";
import {
  RotateCcw,
  Sparkles,
  Award,
  Layers,
  Eye,
  EyeOff,
  Maximize2,
  TrendingUp,
  BarChart2,
  PieChart as PieIcon,
  AlertCircle
} from "lucide-react";
import { PROFESSIONS_DATA } from "../../data/task1Data";

export type DiagramViewMode =
  | "all"
  | "business-men"
  | "movie-producers"
  | "doctors"
  | "writers"
  | "programmers"
  | "lawyers"
  | "chefs"
  | "lecturers"
  | "macro-hours"
  | "macro-stress"
  | "macro-paradox"
  | string;

export type TableHighlightMode = DiagramViewMode;
export type GraphHighlightMode = DiagramViewMode;

export interface ParameterMetric {
  label: string;
  value: string;
}

export interface HotspotDefinition {
  id: string;
  box: "hours" | "stress" | "paradox" | "all" | string;
  country?: string;
  category?: string;
  number: string;
  name: string;
  equipmentOrRole: string; // Analytical role / rank
  color: string;
  pin: { left: string; top: string };
  highlight: { x: string; y: string; w: string; h: string };
  description: string;
  band9Phrase: string;
  grammaticalFocus: string;
  examinerFocus?: string;
  parameterMetrics?: ParameterMetric[];
}

// 8 Primary Profession Hotspots
export const PROFESSION_HOTSPOTS: HotspotDefinition[] = [
  {
    id: "business-men",
    box: "hours",
    number: "70 hrs / 11%",
    name: "Business Men • 70 hrs/wk | 11% Stress",
    equipmentOrRole: "Rank 1 in Hours (Workweek Leader)",
    color: "#ec4899",
    pin: { left: "88%", top: "25%" },
    highlight: { x: "85%", y: "15%", w: "12%", h: "70%" },
    description:
      "Business men logged the longest workweek of all professions at an astounding 70 hours—nearly triple the hours of lecturers. However, they accounted for a modest 11% of stress sufferers.",
    band9Phrase:
      "“Business men worked the longest week of all professions at 70 hours, yet represented a comparatively modest 11% of stress sufferers.”",
    grammaticalFocus: "Superlative Ranking + Contrastive Conjunction: 'worked the longest week of all professions at 70 hours, yet represented...'",
    examinerFocus: "Demonstrates key contrast between maximum workweek duration and moderate illness prevalence.",
    parameterMetrics: [
      { label: "Weekly Hours", value: "70 hrs (Peak)" },
      { label: "Stress Share", value: "11% (Rank 4)" },
      { label: "Hours Rank", value: "1st of 8" },
      { label: "Stress Rank", value: "4th of 8" }
    ]
  },
  {
    id: "movie-producers",
    box: "stress",
    number: "60 hrs / 25%",
    name: "Movie Producers • 60 hrs/wk | 25% Stress",
    equipmentOrRole: "Rank 1 in Stress Illness (1 in 4)",
    color: "#0891b2",
    pin: { left: "68%", top: "35%" },
    highlight: { x: "65%", y: "25%", w: "12%", h: "60%" },
    description:
      "Movie producers endured the greatest stress burden, comprising a quarter (25%) of all stress-related illness cases while also recording the second highest workweek at 60 hours.",
    band9Phrase:
      "“Movie producers experienced the greatest stress burden, accounting for a full quarter (25%) of all reported illness cases alongside a 60-hour workweek.”",
    grammaticalFocus: "Fractional Collocation: 'accounting for a full quarter (25%) of all reported illness cases'",
    examinerFocus: "Essential leader: represents the dominant segment in the pie chart distribution.",
    parameterMetrics: [
      { label: "Weekly Hours", value: "60 hrs (Rank 2)" },
      { label: "Stress Share", value: "25% (Peak / 1 in 4)" },
      { label: "Hours Rank", value: "2nd of 8" },
      { label: "Stress Rank", value: "1st of 8" }
    ]
  },
  {
    id: "doctors",
    box: "hours",
    number: "52 hrs / 15%",
    name: "Doctors • 52 hrs/wk | 15% Stress",
    equipmentOrRole: "Rank 3 in Hours & Rank 3 in Stress",
    color: "#c026d3",
    pin: { left: "28%", top: "45%" },
    highlight: { x: "25%", y: "35%", w: "12%", h: "50%" },
    description:
      "Doctors logged an average of 52 hours per week, holding the third highest position in both weekly working hours and stress-related illness at 15%.",
    band9Phrase:
      "“Doctors followed with 52 hours per week and constituted 15% of the individuals suffering from occupational stress.”",
    grammaticalFocus: "Quantitative Sequencing: 'Doctors followed with 52 hours per week and constituted 15%...'",
    examinerFocus: "Exhibits consistent dual-ranking alignment across both charts.",
    parameterMetrics: [
      { label: "Weekly Hours", value: "52 hrs (Rank 3)" },
      { label: "Stress Share", value: "15% (Rank 3)" },
      { label: "Hours Rank", value: "3rd of 8" },
      { label: "Stress Rank", value: "3rd of 8" }
    ]
  },
  {
    id: "writers",
    box: "stress",
    number: "45 hrs / 8%",
    name: "Writers • 45 hrs/wk | 8% Stress",
    equipmentOrRole: "Rank 4 in Hours | Joint Rank 6 in Stress",
    color: "#84cc16",
    pin: { left: "15%", top: "52%" },
    highlight: { x: "12%", y: "42%", w: "12%", h: "45%" },
    description:
      "Writers averaged 45 hours weekly, while contributing 8% to the stress illness total—sharing exact parity with lawyers despite logging 10 hours more per week.",
    band9Phrase:
      "“Writers averaged 45 hours on the job, contributing 8% to the stress illness total.”",
    grammaticalFocus: "Participial Addition: 'Writers averaged 45 hours on the job, contributing 8%...'",
    examinerFocus: "Useful comparison anchor for parity with lawyers.",
    parameterMetrics: [
      { label: "Weekly Hours", value: "45 hrs (Rank 4)" },
      { label: "Stress Share", value: "8% (Joint Rank 6)" },
      { label: "Hours Rank", value: "4th of 8" },
      { label: "Stress Rank", value: "6th of 8" }
    ]
  },
  {
    id: "programmers",
    box: "hours",
    number: "40 hrs / 5%",
    name: "Programmers • 40 hrs/wk | 5% Stress",
    equipmentOrRole: "Standard 40h Baseline & Lowest Stress (5%)",
    color: "#a3e635",
    pin: { left: "78%", top: "60%" },
    highlight: { x: "75%", y: "50%", w: "12%", h: "40%" },
    description:
      "Programmers maintained a conventional 40-hour workweek and recorded the absolute lowest prevalence of stress-related illness across all surveyed occupations at just 5%.",
    band9Phrase:
      "“Programmers completed a standard 40-hour workweek while recording the lowest incidence of stress-related illness at merely 5%.”",
    grammaticalFocus: "Absolute Superlative Minimum: 'recording the lowest incidence of stress-related illness at merely 5%'",
    examinerFocus: "Mandatory floor figure in the pie chart distribution.",
    parameterMetrics: [
      { label: "Weekly Hours", value: "40 hrs (Baseline)" },
      { label: "Stress Share", value: "5% (Lowest Floor)" },
      { label: "Hours Rank", value: "5th of 8" },
      { label: "Stress Rank", value: "8th of 8" }
    ]
  },
  {
    id: "lawyers",
    box: "stress",
    number: "35 hrs / 8%",
    name: "Lawyers • 35 hrs/wk | 8% Stress",
    equipmentOrRole: "Rank 6 in Hours | Joint Parity in Stress (8%)",
    color: "#3b82f6",
    pin: { left: "55%", top: "65%" },
    highlight: { x: "52%", y: "55%", w: "12%", h: "35%" },
    description:
      "Lawyers worked an average of 35 hours weekly, matching writers with an identical 8% share of stress-related illness sufferers.",
    band9Phrase:
      "“Lawyers worked an average of 35 hours weekly and matched writers with an identical 8% share of stress illness sufferers.”",
    grammaticalFocus: "Equivalence Formulation: 'matched writers with an identical 8% share'",
    examinerFocus: "Synthesizes data points to avoid repetitive mechanical listings.",
    parameterMetrics: [
      { label: "Weekly Hours", value: "35 hrs (Rank 6)" },
      { label: "Stress Share", value: "8% (Joint Rank 6)" },
      { label: "Hours Rank", value: "6th of 8" },
      { label: "Stress Rank", value: "6th of 8" }
    ]
  },
  {
    id: "chefs",
    box: "hours",
    number: "30 hrs / 10%",
    name: "Chefs • 30 hrs/wk | 10% Stress",
    equipmentOrRole: "Rank 7 in Hours | 1 in 10 in Stress",
    color: "#f59e0b",
    pin: { left: "38%", top: "70%" },
    highlight: { x: "35%", y: "60%", w: "12%", h: "30%" },
    description:
      "Chefs worked an average of 30 hours per week and accounted for exactly one-tenth (10%) of stress illness sufferers.",
    band9Phrase:
      "“Chefs recorded an average of 30 hours of work per week and represented exactly one-tenth of stress-related illness cases.”",
    grammaticalFocus: "Fractional Precision: 'represented exactly one-tenth of stress-related illness cases'",
    examinerFocus: "Clean intermediate grouping between high-stress and low-stress sectors.",
    parameterMetrics: [
      { label: "Weekly Hours", value: "30 hrs (Rank 7)" },
      { label: "Stress Share", value: "10% (Rank 5)" },
      { label: "Hours Rank", value: "7th of 8" },
      { label: "Stress Rank", value: "5th of 8" }
    ]
  },
  {
    id: "lecturers",
    box: "paradox",
    number: "25 hrs / 18%",
    name: "Lecturers • 25 hrs/wk | 18% Stress (Central Paradox)",
    equipmentOrRole: "Fewest Hours (25h) vs 2nd Highest Stress (18%)",
    color: "#0d9488",
    pin: { left: "48%", top: "75%" },
    highlight: { x: "45%", y: "65%", w: "12%", h: "25%" },
    description:
      "The Central Paradox: Lecturers worked the shortest week of all surveyed groups at just 25 hours, yet constituted the second largest proportion of stress illness sufferers at 18%—exceeding doctors and business men.",
    band9Phrase:
      "“Paradoxically, lecturers logged the shortest workweek at just 25 hours, yet represented the second largest proportion of stress sufferers at 18%.”",
    grammaticalFocus: "Adverbial Concession: 'Paradoxically, lecturers logged the shortest workweek... yet represented the second largest proportion...'",
    examinerFocus: "Core analytical requirement for Band 9 Task Achievement: recognizing non-correlation between hours and stress.",
    parameterMetrics: [
      { label: "Weekly Hours", value: "25 hrs (Lowest)" },
      { label: "Stress Share", value: "18% (Rank 2)" },
      { label: "Hours Rank", value: "8th of 8 (Fewest)" },
      { label: "Stress Rank", value: "2nd of 8 (2nd Highest)" }
    ]
  }
];

// Macro & Analytical Hotspots
export const MACRO_HOTSPOTS: HotspotDefinition[] = [
  {
    id: "macro-hours",
    box: "hours",
    number: "25h – 70h",
    name: "Macro Trend 1 • Weekly Working Hours Spectrum",
    equipmentOrRole: "Bar Chart Range: 25 hrs (Lecturers) to 70 hrs (Business men)",
    color: "#ef4444",
    pin: { left: "50%", top: "10%" },
    highlight: { x: "5%", y: "5%", w: "90%", h: "45%" },
    description:
      "Business men worked the longest week by a considerable margin at 70 hours, followed by movie producers (60h) and doctors (52h), while lecturers recorded the lowest figure at just 25 hours.",
    band9Phrase:
      "“Overall, business men committed the longest hours per week by a considerable margin, whereas lecturers logged the fewest hours.”",
    grammaticalFocus: "Macro Overview Sentence 1: 'Overall, business men committed the longest hours... whereas lecturers logged the fewest hours.'",
    examinerFocus: "Essential opening pillar of the zero-number overview.",
    parameterMetrics: [
      { label: "Peak Workweek", value: "Business men (70 hrs)" },
      { label: "Minimum Workweek", value: "Lecturers (25 hrs)" },
      { label: "Spectrum Span", value: "45-hour gap between extremes" }
    ]
  },
  {
    id: "macro-stress",
    box: "stress",
    number: "5% – 25%",
    name: "Macro Trend 2 • Stress Illness Distribution",
    equipmentOrRole: "Pie Chart Range: 5% (Programmers) to 25% (Movie Producers)",
    color: "#0284c7",
    pin: { left: "50%", top: "60%" },
    highlight: { x: "5%", y: "50%", w: "90%", h: "45%" },
    description:
      "Movie producers made up the single largest cohort of stress illness sufferers at 25%, with lecturers ranking second at 18%. In contrast, programmers formed the smallest proportion at only 5%.",
    band9Phrase:
      "“Movie producers and lecturers constituted the two largest segments of stress sufferers, while programmers recorded the lowest prevalence of stress-induced illnesses.”",
    grammaticalFocus: "Macro Contrast: 'constituted the two largest segments... while programmers recorded the lowest prevalence'",
    examinerFocus: "Essential second pillar of the zero-number overview.",
    parameterMetrics: [
      { label: "Peak Stress Group", value: "Movie producers (25% / 1 in 4)" },
      { label: "Lowest Stress Group", value: "Programmers (5%)" },
      { label: "Top 2 Combined", value: "43% of total illness (Producers + Lecturers)" }
    ]
  },
  {
    id: "macro-paradox",
    box: "paradox",
    number: "Non-Correlation",
    name: "Macro Insight 3 • Absence of Direct Correlation",
    equipmentOrRole: "Core Analytical Contrast: Working Time vs Illness Rate",
    color: "#8b5cf6",
    pin: { left: "50%", top: "45%" },
    highlight: { x: "10%", y: "25%", w: "80%", h: "50%" },
    description:
      "There was no direct correlation between hours worked and stress illness. Despite working the shortest week (25h), lecturers were second highest in stress (18%), whereas business men worked 70h but had only 11% stress.",
    band9Phrase:
      "“However, working time did not correlate directly with stress-related conditions; movie producers and lecturers constituted the two largest segments of stress sufferers...”",
    grammaticalFocus: "Analytical Transition: 'However, working time did not correlate directly with stress-related conditions...'",
    examinerFocus: "The critical discriminator between Band 7 (pure listing) and Band 9 (synthesis).",
    parameterMetrics: [
      { label: "Correlation Type", value: "No direct / inverse relationship" },
      { label: "Lecturer Disparity", value: "Lowest hours (25h) → 2nd highest stress (18%)" },
      { label: "Business Men Disparity", value: "Highest hours (70h) → Modest stress (11%)" }
    ]
  }
];

// Compatibility aliases
export const TABLE_CELL_HOTSPOTS = PROFESSION_HOTSPOTS;
export const CATEGORY_HOTSPOTS = MACRO_HOTSPOTS;
export const COUNTRY_HOTSPOTS = PROFESSION_HOTSPOTS;
export const ALL_HOTSPOTS = [...PROFESSION_HOTSPOTS, ...MACRO_HOTSPOTS];

// Colors for the Pie Chart slices (matching prompt visual)
const PIE_SLICES = [
  { id: "movie-producers", name: "Movie Producers", percent: 25, color: "#0891b2", text: "25%" },
  { id: "lecturers", name: "Lecturers", percent: 18, color: "#0d9488", text: "18%" },
  { id: "doctors", name: "Doctors", percent: 15, color: "#c026d3", text: "15%" },
  { id: "business-men", name: "Business men", percent: 11, color: "#ec4899", text: "11%" },
  { id: "chefs", name: "Chefs", percent: 10, color: "#f59e0b", text: "10%" },
  { id: "writers", name: "Writers", percent: 8, color: "#84cc16", text: "8%" },
  { id: "lawyers", name: "Lawyers", percent: 8, color: "#3b82f6", text: "8%" },
  { id: "programmers", name: "Programmers", percent: 5, color: "#a3e635", text: "5%" }
];

// Bar Chart Professions in exact order from prompt image
const BAR_PROFESSIONS = [
  { id: "writers", name: "Writers", hours: 45 },
  { id: "doctors", name: "Doctors", hours: 52 },
  { id: "chefs", name: "Chefs", hours: 30 },
  { id: "lecturers", name: "Lecturers", hours: 25 },
  { id: "lawyers", name: "Lawyers", hours: 35 },
  { id: "movie-producers", name: "Movie Producers", hours: 60 },
  { id: "programmers", name: "Programmers", hours: 40 },
  { id: "business-men", name: "Business men", hours: 70 }
];

interface SmartBoardTableMatrixProps {
  highlightMode?: DiagramViewMode;
  onHighlightModeChange?: (mode: DiagramViewMode) => void;
  selectedComponentId?: string;
  selectedCohortId?: string;
  onSelectComponent?: (id: string) => void;
  onSelectCohort?: (id: string) => void;
  showInternalToolbar?: boolean;
  showDeepDiveCard?: boolean;
}

export const SmartBoardTableMatrix: React.FC<SmartBoardTableMatrixProps> = ({
  highlightMode = "all",
  onHighlightModeChange,
  selectedComponentId,
  selectedCohortId,
  onSelectComponent,
  onSelectCohort,
  showInternalToolbar,
  showDeepDiveCard = true
}) => {
  const [activeTab, setActiveTab] = useState<"smartboard_vector" | "scanned_exam">("smartboard_vector");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeId = selectedCohortId || selectedComponentId || (highlightMode !== "all" ? highlightMode : null);
  const activeHotspot = ALL_HOTSPOTS.find((h) => h.id === activeId);

  const handleSelect = (id: string) => {
    if (onSelectCohort) onSelectCohort(id);
    if (onSelectComponent) onSelectComponent(id);
    if (onHighlightModeChange) onHighlightModeChange(id as DiagramViewMode);
  };

  // SVG dimensions for the Bar Chart
  const barChartWidth = 560;
  const barChartHeight = 260;
  const barMargin = { top: 30, right: 20, bottom: 50, left: 45 };
  const innerWidth = barChartWidth - barMargin.left - barMargin.right;
  const innerHeight = barChartHeight - barMargin.top - barMargin.bottom;
  const maxHours = 70;

  // Calculate SVG Pie paths
  const pieSize = 240;
  const center = pieSize / 2;
  const radius = 90;

  let cumulativeAngle = -Math.PI / 2; // Start from top
  const piePaths = PIE_SLICES.map((slice) => {
    const angle = (slice.percent / 100) * (2 * Math.PI);
    const startAngle = cumulativeAngle;
    const endAngle = cumulativeAngle + angle;
    cumulativeAngle = endAngle;

    const x1 = center + radius * Math.cos(startAngle);
    const y1 = center + radius * Math.sin(startAngle);
    const x2 = center + radius * Math.cos(endAngle);
    const y2 = center + radius * Math.sin(endAngle);

    const midAngle = startAngle + angle / 2;
    const labelRadius = radius * 0.65;
    const labelX = center + labelRadius * Math.cos(midAngle);
    const labelY = center + labelRadius * Math.sin(midAngle);

    const largeArcFlag = angle > Math.PI ? 1 : 0;
    const pathData = `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

    return {
      ...slice,
      pathData,
      labelX,
      labelY
    };
  });

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
      {/* Top Controls: View Mode Toggle & Active Highlight Pill */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            type="button"
            onClick={() => setActiveTab("smartboard_vector")}
            style={{
              padding: "7px 14px",
              borderRadius: "10px",
              fontSize: "0.82rem",
              fontWeight: 800,
              border: activeTab === "smartboard_vector" ? "2px solid #0f172a" : "1.5px solid #cbd5e1",
              background: activeTab === "smartboard_vector" ? "#0f172a" : "#ffffff",
              color: activeTab === "smartboard_vector" ? "#ffffff" : "#475569",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <BarChart2 size={15} />
            <span>SmartBoard Vector View</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("scanned_exam")}
            style={{
              padding: "7px 14px",
              borderRadius: "10px",
              fontSize: "0.82rem",
              fontWeight: 800,
              border: activeTab === "scanned_exam" ? "2px solid #0f172a" : "1.5px solid #cbd5e1",
              background: activeTab === "scanned_exam" ? "#0f172a" : "#ffffff",
              color: activeTab === "scanned_exam" ? "#ffffff" : "#475569",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <Eye size={15} />
            <span>Authentic Exam Scan</span>
          </button>
        </div>

        {/* Quick Filter Strips */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748b" }}>Quick Focus:</span>
          {[
            { id: "business-men", label: "Business Men (70h)" },
            { id: "movie-producers", label: "Producers (25% stress)" },
            { id: "lecturers", label: "Lecturer Paradox (25h / 18%)" },
            { id: "programmers", label: "Programmers (5%)" }
          ].map((pill) => {
            const isSelected = activeId === pill.id;
            return (
              <button
                key={pill.id}
                type="button"
                onClick={() => handleSelect(pill.id)}
                style={{
                  padding: "4px 10px",
                  borderRadius: "8px",
                  fontSize: "0.74rem",
                  fontWeight: 750,
                  border: isSelected ? "1.5px solid #2563eb" : "1px solid #e2e8f0",
                  background: isSelected ? "#eff6ff" : "#f8fafc",
                  color: isSelected ? "#1d4ed8" : "#475569",
                  cursor: "pointer"
                }}
              >
                {pill.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Visual Display Container */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          border: "1.5px solid var(--border-subtle, #cbd5e1)",
          boxShadow: "0 4px 18px rgba(0,0,0,0.04)",
          overflow: "hidden",
          padding: "20px"
        }}
      >
        {activeTab === "smartboard_vector" ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Top Prompt Instruction Banner */}
            <div
              style={{
                background: "#f8fafc",
                borderLeft: "4px solid #2563eb",
                padding: "12px 16px",
                borderRadius: "0 10px 10px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "8px"
              }}
            >
              <div>
                <strong style={{ fontSize: "0.92rem", color: "#0f172a" }}>
                  IELTS Academic Task 1 • Dual Visual Breakdown
                </strong>
                <p style={{ fontSize: "0.82rem", color: "#64748b", margin: "2px 0 0" }}>
                  Graph 1 (Bar Chart): Hours worked per week • Graph 2 (Pie Chart): Proportion suffering from stress-related illness.
                </p>
              </div>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  padding: "3px 10px",
                  borderRadius: "6px",
                  background: "#dcfce7",
                  color: "#166534"
                }}
              >
                Tap any bar or slice to inspect
              </span>
            </div>

            {/* Dual Chart Grid: Left = Bar Chart, Right = Pie Chart */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))",
                gap: "24px",
                alignItems: "center"
              }}
            >
              {/* GRAPH 1: BAR CHART */}
              <div
                style={{
                  background: "#ffffff",
                  border: "1.5px solid #e2e8f0",
                  borderRadius: "16px",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
                }}
              >
                <div style={{ textAlign: "center", marginBottom: "10px" }}>
                  <h4 style={{ fontSize: "1.02rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                    Average number of hours worked per week
                  </h4>
                  <span style={{ fontSize: "0.74rem", color: "#64748b" }}>
                    Red bars represent weekly hours logged across 8 professional groups
                  </span>
                </div>

                <svg
                  viewBox={`0 0 ${barChartWidth} ${barChartHeight}`}
                  style={{ width: "100%", height: "auto", maxHeight: "250px" }}
                >
                  {/* Grid Lines and Y-Axis Ticks (0, 10, 20, 30, 40, 50, 60, 70) */}
                  {[0, 10, 20, 30, 40, 50, 60, 70].map((tick) => {
                    const y = barMargin.top + innerHeight - (tick / maxHours) * innerHeight;
                    return (
                      <g key={tick}>
                        <line
                          x1={barMargin.left}
                          y1={y}
                          x2={barMargin.left + innerWidth}
                          y2={y}
                          stroke="#e2e8f0"
                          strokeDasharray={tick === 0 ? "none" : "3,3"}
                        />
                        <text
                          x={barMargin.left - 8}
                          y={y + 4}
                          textAnchor="end"
                          fontSize="11"
                          fontWeight="600"
                          fill="#64748b"
                        >
                          {tick}
                        </text>
                      </g>
                    );
                  })}

                  {/* Y-Axis Line */}
                  <line
                    x1={barMargin.left}
                    y1={barMargin.top}
                    x2={barMargin.left}
                    y2={barMargin.top + innerHeight}
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />

                  {/* X-Axis Line */}
                  <line
                    x1={barMargin.left}
                    y1={barMargin.top + innerHeight}
                    x2={barMargin.left + innerWidth}
                    y2={barMargin.top + innerHeight}
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />

                  {/* 8 Bars */}
                  {BAR_PROFESSIONS.map((prof, index) => {
                    const barCount = BAR_PROFESSIONS.length;
                    const slotWidth = innerWidth / barCount;
                    const barWidth = 26;
                    const x = barMargin.left + index * slotWidth + (slotWidth - barWidth) / 2;
                    const barHeight = (prof.hours / maxHours) * innerHeight;
                    const y = barMargin.top + innerHeight - barHeight;

                    const isSelected = activeId === prof.id;
                    const isHovered = hoveredId === prof.id;

                    return (
                      <g
                        key={prof.id}
                        onClick={() => handleSelect(prof.id)}
                        onMouseEnter={() => setHoveredId(prof.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        style={{ cursor: "pointer" }}
                      >
                        {/* Bar Rect */}
                        <rect
                          x={x}
                          y={y}
                          width={barWidth}
                          height={barHeight}
                          fill={isSelected ? "#b91c1c" : isHovered ? "#ea580c" : "#dc2626"}
                          rx="3"
                          stroke={isSelected ? "#0f172a" : "none"}
                          strokeWidth={isSelected ? 2 : 0}
                          style={{ transition: "all 0.15s ease" }}
                        />

                        {/* Exact Value Label above bar */}
                        <text
                          x={x + barWidth / 2}
                          y={y - 5}
                          textAnchor="middle"
                          fontSize="11"
                          fontWeight="800"
                          fill={isSelected ? "#0f172a" : "#dc2626"}
                        >
                          {prof.hours}
                        </text>

                        {/* Angled Label below axis */}
                        <text
                          x={x + barWidth / 2}
                          y={barMargin.top + innerHeight + 14}
                          textAnchor="end"
                          fontSize="10"
                          fontWeight={isSelected ? "800" : "600"}
                          fill={isSelected ? "#0f172a" : "#334155"}
                          transform={`rotate(-40, ${x + barWidth / 2}, ${barMargin.top + innerHeight + 14})`}
                        >
                          {prof.name}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* GRAPH 2: PIE CHART */}
              <div
                style={{
                  background: "#ffffff",
                  border: "1.5px solid #e2e8f0",
                  borderRadius: "16px",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
                }}
              >
                <div style={{ textAlign: "center", marginBottom: "10px" }}>
                  <h4 style={{ fontSize: "1.02rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                    Occupations of people suffering from stress related illness
                  </h4>
                  <span style={{ fontSize: "0.74rem", color: "#64748b" }}>
                    Percentages indicate each profession's share of the illness cohort (Total = 100%)
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "16px",
                    width: "100%"
                  }}
                >
                  {/* SVG Pie */}
                  <svg
                    viewBox={`0 0 ${pieSize} ${pieSize}`}
                    style={{ width: "210px", height: "210px" }}
                  >
                    {piePaths.map((slice) => {
                      const isSelected = activeId === slice.id;
                      const isHovered = hoveredId === slice.id;

                      return (
                        <g
                          key={slice.id}
                          onClick={() => handleSelect(slice.id)}
                          onMouseEnter={() => setHoveredId(slice.id)}
                          onMouseLeave={() => setHoveredId(null)}
                          style={{ cursor: "pointer" }}
                        >
                          <path
                            d={slice.pathData}
                            fill={slice.color}
                            stroke="#ffffff"
                            strokeWidth={isSelected ? "3" : "1.5"}
                            opacity={isSelected || isHovered ? 1 : 0.9}
                            style={{
                              transition: "all 0.2s ease",
                              filter: isSelected ? "drop-shadow(0 4px 6px rgba(0,0,0,0.3))" : "none"
                            }}
                          />
                          <text
                            x={slice.labelX}
                            y={slice.labelY}
                            textAnchor="middle"
                            dominantBaseline="central"
                            fontSize="11"
                            fontWeight="800"
                            fill="#ffffff"
                            style={{ pointerEvents: "none" }}
                          >
                            {slice.text}
                          </text>
                        </g>
                      );
                    })}
                  </svg>

                  {/* Pie Legend (Matching image style) */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      background: "#f8fafc",
                      padding: "8px 12px",
                      borderRadius: "12px",
                      border: "1px solid #e2e8f0"
                    }}
                  >
                    {PIE_SLICES.map((slice) => {
                      const isSelected = activeId === slice.id;
                      return (
                        <div
                          key={slice.id}
                          onClick={() => handleSelect(slice.id)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "7px",
                            cursor: "pointer",
                            padding: "3px 6px",
                            borderRadius: "6px",
                            background: isSelected ? "#e2e8f0" : "transparent"
                          }}
                        >
                          <span
                            style={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "2px",
                              background: slice.color,
                              display: "inline-block"
                            }}
                          />
                          <span
                            style={{
                              fontSize: "0.78rem",
                              fontWeight: isSelected ? 800 : 600,
                              color: isSelected ? "#0f172a" : "#475569"
                            }}
                          >
                            {slice.name} ({slice.percent}%)
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Scanned Exam Visual View */
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#475569" }}>
                Authentic Cambridge Exam Paper Question Scan
              </span>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  background: "#eff6ff",
                  color: "#1e40af",
                  padding: "2px 8px",
                  borderRadius: "6px"
                }}
              >
                Official Visual
              </span>
            </div>

            <img
              src="materials/hours_worked_stress_levels.jpg"
              alt="Official IELTS Prompt: Hours worked and stress levels"
              style={{
                maxWidth: "100%",
                maxHeight: "420px",
                objectFit: "contain",
                borderRadius: "12px",
                border: "1px solid #cbd5e1",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)"
              }}
            />
          </div>
        )}
      </div>

      {/* Synchronized Deep Dive Card */}
      {showDeepDiveCard && activeHotspot && (
        <div
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            border: `1.5px solid ${activeHotspot.color}50`,
            padding: "16px 20px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
            display: "flex",
            flexDirection: "column",
            gap: "10px"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Award size={18} color={activeHotspot.color} />
              <h4 style={{ fontSize: "1.02rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                {activeHotspot.name}
              </h4>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  padding: "2px 8px",
                  borderRadius: "6px",
                  background: `${activeHotspot.color}18`,
                  color: activeHotspot.color
                }}
              >
                {activeHotspot.equipmentOrRole}
              </span>
            </div>

            <span
              style={{
                fontSize: "0.74rem",
                fontWeight: 800,
                padding: "3px 10px",
                borderRadius: "8px",
                background: "#f1f5f9",
                color: "#334155"
              }}
            >
              {activeHotspot.grammaticalFocus}
            </span>
          </div>

          <p style={{ fontSize: "0.88rem", color: "#334155", margin: 0, lineHeight: 1.5 }}>
            <strong>Analytical Insight:</strong> {activeHotspot.description}
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderLeft: `3.5px solid ${activeHotspot.color}`,
              borderRadius: "8px",
              padding: "10px 14px",
              fontSize: "0.92rem",
              color: "#1e293b",
              lineHeight: 1.55,
              fontStyle: "italic"
            }}
          >
            {activeHotspot.band9Phrase}
          </div>

          {/* Key Metrics Strip */}
          {activeHotspot.parameterMetrics && activeHotspot.parameterMetrics.length > 0 && (
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "2px" }}>
              {activeHotspot.parameterMetrics.map((pm) => (
                <div
                  key={pm.label}
                  style={{
                    background: "#f1f5f9",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "0.74rem",
                    color: "#334155"
                  }}
                >
                  <strong style={{ color: "#0f172a" }}>{pm.label}:</strong> {pm.value}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
