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
  AlertCircle,
  FileImage,
  CheckCircle2,
  Sliders,
  ChevronRight,
  ArrowRight,
  PieChart as PieIcon,
  Table as TableIcon,
  ShoppingBag,
  Utensils,
  Compass
} from "lucide-react";

export type DiagramViewMode =
  | "all"
  | "shops-male"
  | "shops-female"
  | "restaurants-male"
  | "restaurants-female"
  | "design-satisfied"
  | "design-very-satisfied"
  | "design-dissatisfied-no-comment"
  | "phase-1"
  | "phase-2"
  | "macro-overview"
  | string;

export type TableHighlightMode = DiagramViewMode;
export type GraphHighlightMode = DiagramViewMode;

export interface ParameterMetric {
  label: string;
  value: string;
}

export interface HotspotDefinition {
  id: string;
  box: string;
  country?: string;
  category?: string;
  number: string;
  name: string;
  equipmentOrRole: string;
  color: string;
  pin: { left: string; top: string };
  highlight: { x: string; y: string; w: string; h: string };
  description: string;
  band9Phrase: string;
  grammaticalFocus: string;
  examinerFocus?: string;
  parameterMetrics?: ParameterMetric[];
}

export const STAGE_HOTSPOTS: HotspotDefinition[] = [
  {
    id: "shops-male",
    box: "phase-1",
    category: "Table 1 • Shops",
    number: "01",
    name: "Shops: Male (62% Positive)",
    equipmentOrRole: "45% Satisfied • 17% Very Satisfied",
    color: "#2563eb",
    pin: { left: "48%", top: "40%" },
    highlight: { x: "8%", y: "36%", w: "84%", h: "6%" },
    description:
      "45% of male visitors were satisfied with retail shops and 17% very satisfied (62% combined positive), while 20% were dissatisfied and 18% gave no comment.",
    band9Phrase:
      "“For retail shops, 45% of men reported being satisfied alongside 17% who were very satisfied, yielding an overall positive rating of 62%.”",
    grammaticalFocus: "Compound quantitative structure: 'alongside 17% who were very satisfied, yielding an overall positive rating of...'",
    examinerFocus: "Contrast with female 'very satisfied' rate (17% vs 34%).",
    parameterMetrics: [
      { label: "Very Satisfied", value: "17%" },
      { label: "Satisfied", value: "45%" },
      { label: "Dissatisfied", value: "20%" },
      { label: "No Comment", value: "18%" }
    ]
  },
  {
    id: "shops-female",
    box: "phase-1",
    category: "Table 1 • Shops",
    number: "02",
    name: "Shops: Female (71% Positive)",
    equipmentOrRole: "34% Very Satisfied (2x Male) • 37% Satisfied",
    color: "#db2777",
    pin: { left: "48%", top: "45%" },
    highlight: { x: "8%", y: "42%", w: "84%", h: "6%" },
    description:
      "Female shoppers demonstrated higher extreme satisfaction, with 34% very satisfied (exactly twice the male rate of 17%) and 37% satisfied, while dissatisfaction matched men at 20%.",
    band9Phrase:
      "“Female shoppers were notably more enthusiastic, with 34% describing themselves as very satisfied—exactly double the male figure of 17%—while an identical 20% expressed dissatisfaction.”",
    grammaticalFocus: "Parenthetical dash comparison: '—exactly double the male figure of 17%—while an identical 20% expressed...'",
    examinerFocus: "Must highlight the doubling of extreme satisfaction (34% vs 17%) and identical dissatisfaction (20%).",
    parameterMetrics: [
      { label: "Very Satisfied", value: "34% (Double Men)" },
      { label: "Satisfied", value: "37%" },
      { label: "Dissatisfied", value: "20% (Identical)" },
      { label: "No Comment", value: "9%" }
    ]
  },
  {
    id: "restaurants-male",
    box: "phase-1",
    category: "Table 2 • Dining",
    number: "03",
    name: "Dining: Male (80% Positive)",
    equipmentOrRole: "55% Satisfied • 25% Very Satisfied (Peak)",
    color: "#0284c7",
    pin: { left: "48%", top: "58%" },
    highlight: { x: "8%", y: "55%", w: "84%", h: "6%" },
    description:
      "Men expressed overwhelming satisfaction with the complex's restaurants, with 55% satisfied and 25% very satisfied (80% total positive), while dissatisfaction was minuscule at only 5%.",
    band9Phrase:
      "“Male visitors expressed overwhelming contentment with dining facilities, with 55% satisfied and 25% very satisfied, whereas dissatisfaction was negligible at a mere 5%.”",
    grammaticalFocus: "Adverbial contrast with restrictive modifier: 'whereas dissatisfaction was negligible at a mere 5%.'",
    examinerFocus: "Highest satisfaction in any individual service category (80%); contrast with high female dissatisfaction.",
    parameterMetrics: [
      { label: "Very Satisfied", value: "25%" },
      { label: "Satisfied", value: "55% (Peak)" },
      { label: "Dissatisfied", value: "5% (Lowest)" },
      { label: "No Comment", value: "15%" }
    ]
  },
  {
    id: "restaurants-female",
    box: "phase-1",
    category: "Table 2 • Dining",
    number: "04",
    name: "Dining: Female (59% Positive)",
    equipmentOrRole: "21% Dissatisfied (4x Male) • 32% Satisfied",
    color: "#e11d48",
    pin: { left: "48%", top: "63%" },
    highlight: { x: "8%", y: "60%", w: "84%", h: "6%" },
    description:
      "Women were far less pleased with dining options: only 59% were satisfied or very satisfied, while their dissatisfaction rate reached 21%—more than quadruple the male rate of 5%.",
    band9Phrase:
      "“In sharp contrast, female dissatisfaction with dining establishments stood at 21%, more than fourfold higher than the corresponding figure for males.”",
    grammaticalFocus: "Multiplicative comparative phrase: 'more than fourfold higher than the corresponding figure for males.'",
    examinerFocus: "Key disparity: 21% female dissatisfaction vs 5% male dissatisfaction.",
    parameterMetrics: [
      { label: "Very Satisfied", value: "27%" },
      { label: "Satisfied", value: "32%" },
      { label: "Dissatisfied", value: "21% (4x Men)" },
      { label: "No Comment", value: "20%" }
    ]
  },
  {
    id: "design-satisfied",
    box: "phase-2",
    category: "Pie • Design",
    number: "05",
    name: "Design: Satisfied (62% Plurality)",
    equipmentOrRole: "62% Satisfied (~5/8 of respondents)",
    color: "#059669",
    pin: { left: "50%", top: "86%" },
    highlight: { x: "15%", y: "78%", w: "70%", h: "18%" },
    description:
      "Nearly two-thirds of all respondents (62%) reported being satisfied with the architectural and interior design of the complex, forming the single largest opinion cohort.",
    band9Phrase:
      "“Regarding the shopping complex's design, the pie chart indicates widespread acclaim, with nearly two-thirds of respondents (62%) reporting they were satisfied.”",
    grammaticalFocus: "Proportional fraction approximation: 'with nearly two-thirds of respondents (62%) reporting they were satisfied.'",
    examinerFocus: "Identify 62% as the dominant slice of the pie chart.",
    parameterMetrics: [
      { label: "Segment", value: "Satisfied" },
      { label: "Share", value: "62%" },
      { label: "Proportion", value: "~5/8 of respondents" },
      { label: "Category", value: "Complex Design" }
    ]
  },
  {
    id: "design-very-satisfied",
    box: "phase-2",
    category: "Pie • Design",
    number: "06",
    name: "Design: Very Satisfied (79% Total)",
    equipmentOrRole: "17% Very Satisfied • 79% Aggregate Total",
    color: "#16a34a",
    pin: { left: "54%", top: "75%" },
    highlight: { x: "38%", y: "73%", w: "24%", h: "10%" },
    description:
      "An additional 17% described themselves as very satisfied with the design, bringing the aggregate positive approval to almost four-fifths (79%).",
    band9Phrase:
      "“An additional 17% described the design as very satisfying, elevating the aggregate positive rating to nearly four-fifths (79%).”",
    grammaticalFocus: "Participial result clause: 'elevating the aggregate positive rating to nearly four-fifths (79%).'",
    examinerFocus: "Combined positive design rating (62% + 17% = 79%).",
    parameterMetrics: [
      { label: "Segment", value: "Very Satisfied" },
      { label: "Share", value: "17%" },
      { label: "Aggregate Positive", value: "79%" },
      { label: "Category", value: "Complex Design" }
    ]
  },
  {
    id: "design-dissatisfied-no-comment",
    box: "phase-2",
    category: "Pie • Design",
    number: "07",
    name: "Design: Dissat & Neutral (21%)",
    equipmentOrRole: "10% Dissatisfied • 11% No Comment",
    color: "#64748b",
    pin: { left: "26%", top: "76%" },
    highlight: { x: "12%", y: "72%", w: "26%", h: "11%" },
    description:
      "Negative and neutral sentiment toward the complex's design was marginal, with 10% dissatisfied and 11% offering no comment.",
    band9Phrase:
      "“Conversely, adverse and indifferent reactions were minimal, with dissatisfied patrons constituting exactly a tenth (10%), closely mirrored by 11% who gave no comment.”",
    grammaticalFocus: "Fractional synonym: 'constituting exactly a tenth (10%), closely mirrored by...'",
    examinerFocus: "Report the marginal 10% and 11% segments completing the 100% total.",
    parameterMetrics: [
      { label: "Dissatisfied", value: "10% (1/10)" },
      { label: "No Comment", value: "11%" },
      { label: "Combined Non-Positive", value: "21%" },
      { label: "Category", value: "Complex Design" }
    ]
  }
];

export const MACRO_HOTSPOTS: HotspotDefinition[] = [
  {
    id: "phase-1",
    box: "phase-1",
    number: "Tables 1 & 2",
    name: "Tables 1 & 2: Shops & Restaurants (Gender Breakdown)",
    equipmentOrRole: "Retail Facilities (Double Female Very Satisfied) & Restaurants (Quadruple Female Dissatisfaction)",
    color: "#2563eb",
    pin: { left: "48%", top: "35%" },
    highlight: { x: "5%", y: "30%", w: "90%", h: "38%" },
    description:
      "The two tables break down shopper satisfaction by gender across retail shops and dining amenities, demonstrating female enthusiasm for shops alongside male dominance in dining contentment.",
    band9Phrase:
      "“Examining the retail and dining facilities, female patrons were twice as likely to be very satisfied with shops (34% vs 17%), whereas men expressed overwhelming contentment with restaurants (80% vs 59%).”",
    grammaticalFocus: "Compound comparative structure: 'whereas men expressed overwhelming contentment with restaurants...'",
    examinerFocus: "Ideal grouping for Body Paragraph 1: synthesizes all gender-specific comparisons.",
    parameterMetrics: [
      { label: "Tables", value: "Table 1 (Shops) & Table 2 (Restaurants)" },
      { label: "Metric", value: "Male vs Female Proportions" },
      { label: "Peak Positive", value: "Men in Restaurants (80%)" },
      { label: "Body Para", value: "Body Paragraph 1" }
    ]
  },
  {
    id: "phase-2",
    box: "phase-2",
    number: "Pie Chart",
    name: "Pie Chart: Complex Architectural Design (Overall)",
    equipmentOrRole: "62% Satisfied | 17% Very Satisfied (79% Aggregate Approval)",
    color: "#059669",
    pin: { left: "50%", top: "80%" },
    highlight: { x: "10%", y: "70%", w: "80%", h: "28%" },
    description:
      "The pie chart captures holistic visitor satisfaction with the architectural and interior design of the shopping center, showing widespread approval (79% positive) and minimal discontent (10%).",
    band9Phrase:
      "“Turning to the architectural design of the shopping center, the pie chart reveals widespread public satisfaction, with nearly four-fifths of visitors (79%) registering approval.”",
    grammaticalFocus: "Participial transition: 'Turning to the architectural design of the shopping center, the pie chart reveals...'",
    examinerFocus: "Ideal grouping for Body Paragraph 2: reports design breakdown and makes cross-category comparisons.",
    parameterMetrics: [
      { label: "Graphic", value: "Pie Chart" },
      { label: "Target", value: "Complex Architectural Design" },
      { label: "Approval", value: "79% (62% + 17%)" },
      { label: "Body Para", value: "Body Paragraph 2" }
    ]
  },
  {
    id: "macro-overview",
    box: "overview",
    number: "Overview",
    name: "Survey Macro Synthesis (High Approval & Key Gender Disparity)",
    equipmentOrRole: "Predominantly Favorable Across All 3 Amenities • Design Peak • Dining Gender Divide",
    color: "#7c3aed",
    pin: { left: "50%", top: "28%" },
    highlight: { x: "5%", y: "26%", w: "90%", h: "70%" },
    description:
      "A comprehensive synthesis: public reaction was predominantly positive across all three amenities, with design securing the highest combined satisfaction (79%), while restaurants exhibited the most pronounced gender divergence.",
    band9Phrase:
      "“Overall, visitor feedback across all three evaluated criteria was predominantly favorable. Notably, the complex's design achieved the highest overall level of approval, while dining amenities elicited the starkest gender divide.”",
    grammaticalFocus: "Two-sentence overview formula: Sentence 1 captures general positive dominance; Sentence 2 captures the peak feature and primary contrast.",
    examinerFocus: "Mandatory overview requirements: report general trend, identify highest category, and highlight key contrast.",
    parameterMetrics: [
      { label: "General Trend", value: "Predominantly Favorable" },
      { label: "Highest Overall", value: "Design (79% Approval)" },
      { label: "Highest Category", value: "Men in Restaurants (80%)" },
      { label: "Starkest Divide", value: "Dining Dissatisfaction (21% vs 5%)" }
    ]
  }
];

export const REGION_HOTSPOTS = STAGE_HOTSPOTS;
export const PROFESSION_HOTSPOTS = STAGE_HOTSPOTS;
export const TABLE_CELL_HOTSPOTS = STAGE_HOTSPOTS;
export const CATEGORY_HOTSPOTS = MACRO_HOTSPOTS;
export const COUNTRY_HOTSPOTS = STAGE_HOTSPOTS;
export const ALL_HOTSPOTS = [...STAGE_HOTSPOTS, ...MACRO_HOTSPOTS];

interface SmartBoardTableMatrixProps {
  highlightMode?: DiagramViewMode;
  onHighlightModeChange?: (mode: DiagramViewMode) => void;
  selectedComponentId?: string | null;
  onSelectComponent?: (id: string) => void;
  selectedCohortId?: string | null;
  onSelectCohort?: (id: string) => void;
  inModal?: boolean;
  showInternalToolbar?: boolean;
  showDeepDiveCard?: boolean;
}

export const SmartBoardTableMatrix: React.FC<SmartBoardTableMatrixProps> = ({
  highlightMode = "shops-male",
  onHighlightModeChange,
  selectedComponentId,
  onSelectComponent,
  selectedCohortId,
  onSelectCohort,
  inModal = false,
  showInternalToolbar,
  showDeepDiveCard
}) => {
  const [activeTab, setActiveTab] = useState<"scanned_exam" | "smartboard_vector">("scanned_exam");
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const activeId =
    selectedCohortId ||
    selectedComponentId ||
    (highlightMode !== "all" ? highlightMode : null) ||
    "shops-male";

  const activeHotspot =
    ALL_HOTSPOTS.find((h) => h.id === activeId) || STAGE_HOTSPOTS[0];

  const handleSelect = (id: string) => {
    if (onSelectComponent) onSelectComponent(id);
    if (onSelectCohort) onSelectCohort(id);
    if (onHighlightModeChange) onHighlightModeChange(id as DiagramViewMode);
  };

  return (
    <div
      style={{
        background: "#ffffff",
        border: "1.5px solid var(--border-subtle, #cbd5e1)",
        borderRadius: "20px",
        padding: inModal ? "18px 22px" : "16px 18px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        height: "100%",
        minHeight: inModal ? "auto" : "440px"
      }}
    >
      {/* Header Controls: Tab Switcher & Zoom */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "8px",
          borderBottom: "1.5px solid #f1f5f9",
          paddingBottom: "10px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <FileImage size={17} color="#2563eb" />
          <span style={{ fontSize: "0.86rem", fontWeight: 800, color: "#0f172a" }}>
            Survey Matrix Visualizer
          </span>
          <span
            style={{
              fontSize: "0.72rem",
              fontWeight: 800,
              background: "#eff6ff",
              color: "#1e40af",
              padding: "2px 7px",
              borderRadius: "5px",
              border: "1px solid #bfdbfe"
            }}
          >
            Cambridge Official
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* View Mode Switcher */}
          <div style={{ display: "flex", gap: "4px", background: "#f1f5f9", padding: "3px", borderRadius: "8px" }}>
            <button
              type="button"
              onClick={() => setActiveTab("scanned_exam")}
              style={{
                padding: "4px 10px",
                borderRadius: "6px",
                fontSize: "0.74rem",
                fontWeight: 750,
                border: "none",
                background: activeTab === "scanned_exam" ? "#ffffff" : "transparent",
                color: activeTab === "scanned_exam" ? "#0f172a" : "#64748b",
                boxShadow: activeTab === "scanned_exam" ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
                cursor: "pointer"
              }}
            >
              Interactive Scanned Charts
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("smartboard_vector")}
              style={{
                padding: "4px 10px",
                borderRadius: "6px",
                fontSize: "0.74rem",
                fontWeight: 750,
                border: "none",
                background: activeTab === "smartboard_vector" ? "#ffffff" : "transparent",
                color: activeTab === "smartboard_vector" ? "#0f172a" : "#64748b",
                boxShadow: activeTab === "smartboard_vector" ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
                cursor: "pointer"
              }}
            >
              SmartBoard Data Matrix
            </button>
          </div>

          {/* Reset Zoom */}
          {activeTab === "scanned_exam" && (
            <button
              type="button"
              onClick={() => setZoomLevel((z) => (z === 1 ? 1.3 : 1))}
              style={{
                padding: "4px 9px",
                borderRadius: "6px",
                fontSize: "0.72rem",
                fontWeight: 750,
                background: "#f8fafc",
                border: "1px solid #cbd5e1",
                color: "#475569",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px"
              }}
            >
              <Maximize2 size={13} />
              <span>{zoomLevel === 1 ? "Zoom 130%" : "Reset 100%"}</span>
            </button>
          )}
        </div>
      </div>

      {/* TAB 1: INTERACTIVE SCANNED EXAM DIAGRAM WITH HOTSPOT PINS */}
      {activeTab === "scanned_exam" && (
        <div
          style={{
            position: "relative",
            width: "100%",
            flex: 1,
            minHeight: inModal ? "480px" : "380px",
            background: "#ffffff",
            borderRadius: "14px",
            border: "1px solid #e2e8f0",
            overflow: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px"
          }}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "580px",
              width: "100%",
              transform: `scale(${zoomLevel})`,
              transformOrigin: "center center",
              transition: "transform 0.2s ease"
            }}
          >
            {/* Scanned Original Image */}
            <img
              src="/materials/auckland_shopping_complex_survey.jpg"
              alt="Survey of a new shopping complex in Auckland, New Zealand - Cambridge IELTS Task 1"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "10px",
                boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
                pointerEvents: "none"
              }}
            />

            {/* Interactive Pulsing Hotspot Pins */}
            {STAGE_HOTSPOTS.map((stage) => {
              const isActive = activeId === stage.id;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => handleSelect(stage.id)}
                  title={`${stage.name}: ${stage.equipmentOrRole}`}
                  style={{
                    position: "absolute",
                    left: stage.pin.left,
                    top: stage.pin.top,
                    transform: "translate(-50%, -50%)",
                    width: isActive ? "32px" : "26px",
                    height: isActive ? "32px" : "26px",
                    borderRadius: "50%",
                    background: stage.color,
                    color: "#ffffff",
                    border: "2.5px solid #ffffff",
                    boxShadow: isActive
                      ? `0 0 0 5px ${stage.color}45, 0 4px 12px rgba(0,0,0,0.3)`
                      : "0 2px 8px rgba(0,0,0,0.25)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 850,
                    fontSize: isActive ? "0.80rem" : "0.70rem",
                    transition: "all 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
                    zIndex: isActive ? 20 : 10
                  }}
                >
                  {stage.id.includes("male") ? (stage.id.includes("female") ? "F" : "M") : "%"}
                </button>
              );
            })}

            {/* Active Highlight Bounding Box */}
            {activeHotspot && activeHotspot.highlight && (
              <div
                style={{
                  position: "absolute",
                  left: activeHotspot.highlight.x,
                  top: activeHotspot.highlight.y,
                  width: activeHotspot.highlight.w,
                  height: activeHotspot.highlight.h,
                  border: `2.5px dashed ${activeHotspot.color}`,
                  borderRadius: "8px",
                  background: `${activeHotspot.color}15`,
                  pointerEvents: "none",
                  transition: "all 0.2s ease"
                }}
              />
            )}
          </div>
        </div>
      )}

      {/* TAB 2: INTERACTIVE SMARTBOARD DATA MATRIX */}
      {activeTab === "smartboard_vector" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            flex: 1,
            overflowY: "auto",
            padding: "4px"
          }}
        >
          {/* Section 1: Tables for Shops and Restaurants */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {/* Table 1: Shops */}
            <div
              style={{
                background: "#f8fafc",
                border: "1.5px solid #cbd5e1",
                borderRadius: "14px",
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <ShoppingBag size={15} color="#2563eb" />
                  <strong style={{ fontSize: "0.85rem", color: "#0f172a" }}>Shops (Satisfaction %)</strong>
                </div>
                <span style={{ fontSize: "0.68rem", background: "#eff6ff", color: "#1e40af", padding: "1px 6px", borderRadius: "4px", fontWeight: 700 }}>
                  Table 1
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {[
                  { id: "shops-male", gender: "Male", vs: 17, s: 45, d: 20, nc: 18, totalPos: 62 },
                  { id: "shops-female", gender: "Female", vs: 34, s: 37, d: 20, nc: 9, totalPos: 71 }
                ].map((row) => {
                  const isSelected = activeId === row.id;
                  return (
                    <div
                      key={row.id}
                      onClick={() => handleSelect(row.id)}
                      style={{
                        background: isSelected ? "#eff6ff" : "#ffffff",
                        border: isSelected ? "2px solid #2563eb" : "1px solid #e2e8f0",
                        borderRadius: "8px",
                        padding: "8px 10px",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                        boxShadow: isSelected ? "0 2px 8px rgba(37,99,235,0.12)" : "none",
                        transition: "all 0.15s ease"
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <strong style={{ fontSize: "0.80rem", color: isSelected ? "#1d4ed8" : "#0f172a" }}>
                          {row.gender} Shoppers
                        </strong>
                        <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#166534", background: "#dcfce7", padding: "1px 6px", borderRadius: "4px" }}>
                          {row.totalPos}% Positive
                        </span>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4px", fontSize: "0.72rem", color: "#475569", textAlign: "center" }}>
                        <div style={{ background: "#f1f5f9", padding: "2px", borderRadius: "4px" }}>
                          <span style={{ display: "block", fontSize: "0.64rem", color: "#64748b" }}>V. Sat</span>
                          <strong>{row.vs}%</strong>
                        </div>
                        <div style={{ background: "#f1f5f9", padding: "2px", borderRadius: "4px" }}>
                          <span style={{ display: "block", fontSize: "0.64rem", color: "#64748b" }}>Sat</span>
                          <strong>{row.s}%</strong>
                        </div>
                        <div style={{ background: "#fee2e2", padding: "2px", borderRadius: "4px", color: "#991b1b" }}>
                          <span style={{ display: "block", fontSize: "0.64rem", color: "#b91c1c" }}>Dissat</span>
                          <strong>{row.d}%</strong>
                        </div>
                        <div style={{ background: "#f1f5f9", padding: "2px", borderRadius: "4px" }}>
                          <span style={{ display: "block", fontSize: "0.64rem", color: "#64748b" }}>No Com</span>
                          <strong>{row.nc}%</strong>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Table 2: Restaurants */}
            <div
              style={{
                background: "#f8fafc",
                border: "1.5px solid #cbd5e1",
                borderRadius: "14px",
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Utensils size={15} color="#ea580c" />
                  <strong style={{ fontSize: "0.85rem", color: "#0f172a" }}>Restaurants (Satisfaction %)</strong>
                </div>
                <span style={{ fontSize: "0.68rem", background: "#fff7ed", color: "#c2410c", padding: "1px 6px", borderRadius: "4px", fontWeight: 700 }}>
                  Table 2
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {[
                  { id: "restaurants-male", gender: "Male", vs: 25, s: 55, d: 5, nc: 15, totalPos: 80 },
                  { id: "restaurants-female", gender: "Female", vs: 27, s: 32, d: 21, nc: 20, totalPos: 59 }
                ].map((row) => {
                  const isSelected = activeId === row.id;
                  return (
                    <div
                      key={row.id}
                      onClick={() => handleSelect(row.id)}
                      style={{
                        background: isSelected ? "#fff7ed" : "#ffffff",
                        border: isSelected ? "2px solid #ea580c" : "1px solid #e2e8f0",
                        borderRadius: "8px",
                        padding: "8px 10px",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                        boxShadow: isSelected ? "0 2px 8px rgba(234,88,12,0.12)" : "none",
                        transition: "all 0.15s ease"
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <strong style={{ fontSize: "0.80rem", color: isSelected ? "#c2410c" : "#0f172a" }}>
                          {row.gender} Shoppers
                        </strong>
                        <span style={{ fontSize: "0.72rem", fontWeight: 800, color: row.totalPos >= 80 ? "#166534" : "#b45309", background: row.totalPos >= 80 ? "#dcfce7" : "#fef3c7", padding: "1px 6px", borderRadius: "4px" }}>
                          {row.totalPos}% Positive
                        </span>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4px", fontSize: "0.72rem", color: "#475569", textAlign: "center" }}>
                        <div style={{ background: "#f1f5f9", padding: "2px", borderRadius: "4px" }}>
                          <span style={{ display: "block", fontSize: "0.64rem", color: "#64748b" }}>V. Sat</span>
                          <strong>{row.vs}%</strong>
                        </div>
                        <div style={{ background: "#f1f5f9", padding: "2px", borderRadius: "4px" }}>
                          <span style={{ display: "block", fontSize: "0.64rem", color: "#64748b" }}>Sat</span>
                          <strong>{row.s}%</strong>
                        </div>
                        <div style={{ background: row.d > 10 ? "#fee2e2" : "#f1f5f9", padding: "2px", borderRadius: "4px", color: row.d > 10 ? "#991b1b" : "#475569" }}>
                          <span style={{ display: "block", fontSize: "0.64rem", color: row.d > 10 ? "#b91c1c" : "#64748b" }}>Dissat</span>
                          <strong>{row.d}%</strong>
                        </div>
                        <div style={{ background: "#f1f5f9", padding: "2px", borderRadius: "4px" }}>
                          <span style={{ display: "block", fontSize: "0.64rem", color: "#64748b" }}>No Com</span>
                          <strong>{row.nc}%</strong>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section 2: Complex Design Pie Chart */}
          <div
            style={{
              background: "#f0fdf4",
              border: "1.5px solid #bbf7d0",
              borderRadius: "14px",
              padding: "12px 14px",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Compass size={15} color="#16a34a" />
                <strong style={{ fontSize: "0.85rem", color: "#14532d" }}>
                  Complex Architectural Design (Pie Chart Breakdown)
                </strong>
              </div>
              <span style={{ fontSize: "0.72rem", background: "#dcfce7", color: "#166534", fontWeight: 800, padding: "2px 7px", borderRadius: "4px" }}>
                79% Aggregate Positive Approval
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
              {[
                { id: "design-satisfied", label: "Satisfied", val: "62%", desc: "Nearly two-thirds (Dominant majority)", color: "#059669" },
                { id: "design-very-satisfied", label: "Very Satisfied", val: "17%", desc: "Brings total approval to 79%", color: "#16a34a" },
                { id: "design-dissatisfied-no-comment", label: "Dissatisfied / No Com", val: "10% / 11%", desc: "Marginal non-positive response", color: "#64748b" }
              ].map((pieItem) => {
                const isSelected = activeId === pieItem.id;
                return (
                  <div
                    key={pieItem.id}
                    onClick={() => handleSelect(pieItem.id)}
                    style={{
                      background: isSelected ? "#ffffff" : "rgba(255,255,255,0.7)",
                      border: isSelected ? `2px solid ${pieItem.color}` : "1px solid #dcfce7",
                      borderRadius: "10px",
                      padding: "8px 10px",
                      cursor: "pointer",
                      boxShadow: isSelected ? "0 4px 12px rgba(22, 163, 74, 0.15)" : "none",
                      transition: "all 0.15s ease"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2px" }}>
                      <strong style={{ fontSize: "0.80rem", color: "#0f172a" }}>{pieItem.label}</strong>
                      <span style={{ fontSize: "0.76rem", fontWeight: 850, color: pieItem.color }}>{pieItem.val}</span>
                    </div>
                    <span style={{ fontSize: "0.68rem", color: "#64748b", display: "block" }}>{pieItem.desc}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
