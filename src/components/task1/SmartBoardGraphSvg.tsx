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
  Sliders
} from "lucide-react";
import { WHEAT_EXPORTS_DATA } from "../../data/task1Data";

export type DiagramViewMode =
  | "all"
  | "canada"
  | "european-community"
  | "australia"
  | "macro-apex"
  | "macro-growth-decline"
  | "macro-overtaking"
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

export const REGION_HOTSPOTS: HotspotDefinition[] = [
  {
    id: "canada",
    box: "canada",
    number: "19m → 25m → 19m",
    name: "Canada • Volatile Rollercoaster (19m → 19m)",
    equipmentOrRole: "Global Peak in 1988 (25m) & Zero Net Change",
    color: "#0f172a",
    pin: { left: "60%", top: "18%" },
    highlight: { x: "50%", y: "15%", w: "20%", h: "35%" },
    description:
      "Canada started as the top exporter at 19 million tonnes in 1985, surged to an overall peak of 25 million in 1988, plummeted to 14 million in 1989, and rebounded back to 19 million tonnes in 1990.",
    band9Phrase:
      "“Canadian wheat exports exhibited marked volatility, surging to an overall peak of 25 million tonnes in 1988 before plunging sharply and eventually returning to their starting level of 19 million tonnes.”",
    grammaticalFocus: "Participial clauses + adverbial contrast: 'surging to an overall peak... before plunging sharply and eventually returning...'",
    examinerFocus: "Essential features: global peak in 1988, steep 1989 plunge, and exact return to initial baseline.",
    parameterMetrics: [
      { label: "1985 Start", value: "19m tonnes (Initial #1)" },
      { label: "1988 Peak", value: "25m tonnes (Overall Apex)" },
      { label: "1989 Trough", value: "14m tonnes (-11m drop)" },
      { label: "1990 Finish", value: "19m tonnes (0m net)" }
    ]
  },
  {
    id: "european-community",
    box: "european-community",
    number: "17m → 14m → 21m",
    name: "European Community • Sustained Growth (17m → 21m)",
    equipmentOrRole: "Market Leader by 1990 (21m tonnes)",
    color: "#0284c7",
    pin: { left: "88%", top: "30%" },
    highlight: { x: "70%", y: "25%", w: "25%", h: "40%" },
    description:
      "The European Community dipped from 17 to a low of 14 million tonnes in 1986, plateaued at 15 million in 1987–1988, and then experienced a strong expansion to 21 million tonnes in 1990, overtaking all competitors.",
    band9Phrase:
      "“Despite an initial dip to 14 million tonnes in 1986, the European Community experienced sustained growth over the subsequent four years, eventually overtaking both competitors to finish as the leading exporter at 21 million tonnes.”",
    grammaticalFocus: "Concessive prepositional opening: 'Despite an initial dip to 14 million tonnes in 1986, the European Community experienced...'",
    examinerFocus: "Demonstrates synthesis of initial drop, plateau, and late dominance.",
    parameterMetrics: [
      { label: "1985 Start", value: "17m tonnes (Rank #2)" },
      { label: "1986 Dip", value: "14m tonnes (Low point)" },
      { label: "1987-88 Plateau", value: "15m tonnes (Stable)" },
      { label: "1990 Finish", value: "21m tonnes (Final #1 Leader)" }
    ]
  },
  {
    id: "australia",
    box: "australia",
    number: "15m → 16m → 11m",
    name: "Australia • Continuous Decline (15m → 11m)",
    equipmentOrRole: "Lowest Exporter in 1990 (11m tonnes)",
    color: "#64748b",
    pin: { left: "85%", top: "65%" },
    highlight: { x: "60%", y: "55%", w: "35%", h: "35%" },
    description:
      "Australia began at 15 million tonnes, rose briefly to 16 million in 1986, and then underwent a steady 3-year contraction down to 11 million tonnes in 1989, where it leveled off through 1990.",
    band9Phrase:
      "“Australia followed a consistent downward trajectory after a modest rise in 1986, steadily diminishing to 11 million tonnes by 1989 and remaining static through 1990 to finish in the lowest position.”",
    grammaticalFocus: "Temporal prepositional phrase + progressive participle: 'steadily diminishing to 11 million tonnes by 1989 and remaining static...'",
    examinerFocus: "Accurate reporting of steady decline, 2-year plateau, and lowest rank.",
    parameterMetrics: [
      { label: "1985 Start", value: "15m tonnes (Rank #3)" },
      { label: "1986 Peak", value: "16m tonnes (+1m rise)" },
      { label: "1989-90 Floor", value: "11m tonnes (Lowest figure)" },
      { label: "Net Change", value: "-4m tonnes" }
    ]
  }
];

export const MACRO_HOTSPOTS: HotspotDefinition[] = [
  {
    id: "macro-apex",
    box: "apex",
    number: "25m (1988)",
    name: "Macro Trend 1 • Overall Apex of the Graph",
    equipmentOrRole: "Global High Point: Canada in 1988 (25m tonnes)",
    color: "#ef4444",
    pin: { left: "60%", top: "15%" },
    highlight: { x: "48%", y: "10%", w: "18%", h: "30%" },
    description:
      "Canada achieved the single highest export figure across the entire surveyed timeframe at 25 million tonnes in 1988, standing 10 million tonnes above the European Community and 13 million above Australia.",
    band9Phrase:
      "“...registering both the overall peak and a dramatic plunge before returning to its starting level.”",
    grammaticalFocus: "Macro Overview descriptor without raw numerical figures.",
    examinerFocus: "Identifies the singular peak of the whole diagram.",
    parameterMetrics: [
      { label: "Apex Region", value: "Canada" },
      { label: "Apex Year", value: "1988" },
      { label: "Apex Volume", value: "25 million tonnes" }
    ]
  },
  {
    id: "macro-growth-decline",
    box: "growth",
    number: "+4m vs -4m",
    name: "Macro Trend 2 • Divergence: Growth vs Decline",
    equipmentOrRole: "Contrasting Trajectories: EC Ascending vs Australia Diminishing",
    color: "#0284c7",
    pin: { left: "80%", top: "45%" },
    highlight: { x: "65%", y: "20%", w: "30%", h: "70%" },
    description:
      "The European Community was the only region to achieve net growth over the period (+4 million tonnes), in polar opposition to Australia, which was the only area to suffer a net decline (-4 million tonnes).",
    band9Phrase:
      "“Overall, the European Community witnessed sustained upward growth over the period to become the dominant wheat exporter by 1990, whereas Australia underwent a steady downward trajectory to finish in the lowest position.”",
    grammaticalFocus: "Complex comparative clause: 'witnessed sustained upward growth... whereas Australia underwent a steady downward trajectory...'",
    examinerFocus: "Zero Numbers Rule: captures macro trajectories cleanly.",
    parameterMetrics: [
      { label: "Growing Region", value: "European Community (+4m)" },
      { label: "Declining Region", value: "Australia (-4m)" },
      { label: "Fluctuating Region", value: "Canada (0m net)" }
    ]
  },
  {
    id: "macro-overtaking",
    box: "overtaking",
    number: "1989–1990",
    name: "Macro Trend 3 • The Overtaking Pivot",
    equipmentOrRole: "Rank Reversal: EC Surpasses Canada and Australia",
    color: "#10b981",
    pin: { left: "75%", top: "35%" },
    highlight: { x: "65%", y: "30%", w: "25%", h: "40%" },
    description:
      "Between 1988 and 1989, a dramatic intersection occurred: while Canadian exports collapsed by 11m tonnes, the European Community surged by 4m tonnes, overtaking Canada to claim first place.",
    band9Phrase:
      "“...overtaking both Canada and Australia to become the top exporter.”",
    grammaticalFocus: "Participial adverbial phrase describing rank change.",
    examinerFocus: "Key comparative intersection required for Band 9 Task Achievement.",
    parameterMetrics: [
      { label: "1985 Leader", value: "Canada (19m tonnes)" },
      { label: "1990 Leader", value: "European Community (21m tonnes)" },
      { label: "Crossover Year", value: "1989" }
    ]
  }
];

// Compatibility aliases
export const PROFESSION_HOTSPOTS = REGION_HOTSPOTS;
export const TABLE_CELL_HOTSPOTS = REGION_HOTSPOTS;
export const CATEGORY_HOTSPOTS = MACRO_HOTSPOTS;
export const COUNTRY_HOTSPOTS = REGION_HOTSPOTS;
export const ALL_HOTSPOTS = [...REGION_HOTSPOTS, ...MACRO_HOTSPOTS];

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
  showDeepDiveCard = true
}) => {
  const [activeTab, setActiveTab] = useState<"smartboard_vector" | "scanned_exam">("smartboard_vector");
  const [hoveredPoint, setHoveredPoint] = useState<{ region: string; year: number; value: number } | null>(null);

  const activeId = selectedCohortId || selectedComponentId || (highlightMode !== "all" ? highlightMode : null);
  const activeHotspot = ALL_HOTSPOTS.find((h) => h.id === activeId) || REGION_HOTSPOTS[0];

  const handleSelect = (id: string) => {
    if (onSelectCohort) onSelectCohort(id);
    if (onSelectComponent) onSelectComponent(id);
    if (onHighlightModeChange) onHighlightModeChange(id as DiagramViewMode);
  };

  // Dimensions for authentic Cambridge line graph SVG
  const svgWidth = 660;
  const svgHeight = 310;
  const margin = { top: 35, right: 35, bottom: 45, left: 55 };
  const plotWidth = svgWidth - margin.left - margin.right;
  const plotHeight = svgHeight - margin.top - margin.bottom;

  const years = [1985, 1986, 1987, 1988, 1989, 1990];
  const yTicks = [0, 5, 10, 15, 20, 25, 30];

  const getX = (year: number) => {
    const idx = years.indexOf(year);
    return margin.left + (idx / (years.length - 1)) * plotWidth;
  };

  const getY = (val: number) => {
    return margin.top + plotHeight - (val / 30) * plotHeight;
  };

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
            <span>SmartBoard Vector Graph</span>
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
            <FileImage size={15} />
            <span>Exam Paper Scan</span>
          </button>
        </div>

        {/* Region Filter Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={() => handleSelect("all")}
            style={{
              padding: "5px 10px",
              borderRadius: "8px",
              fontSize: "0.76rem",
              fontWeight: 750,
              border: activeId === "all" || !activeId ? "1.5px solid #0f172a" : "1px solid #e2e8f0",
              background: activeId === "all" || !activeId ? "#0f172a" : "#ffffff",
              color: activeId === "all" || !activeId ? "#ffffff" : "#64748b",
              cursor: "pointer"
            }}
          >
            All 3 Regions
          </button>

          {WHEAT_EXPORTS_DATA.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => handleSelect(r.id)}
              style={{
                padding: "5px 10px",
                borderRadius: "8px",
                fontSize: "0.76rem",
                fontWeight: 750,
                border: activeId === r.id ? `2px solid ${r.color}` : "1px solid #e2e8f0",
                background: activeId === r.id ? `${r.color}15` : "#ffffff",
                color: activeId === r.id ? r.color : "#64748b",
                cursor: "pointer"
              }}
            >
              {r.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === "scanned_exam" ? (
        <div
          style={{
            background: "#ffffff",
            border: "1.5px solid var(--border-default, #cbd5e1)",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "var(--shadow-sm)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            minHeight: "420px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", paddingBottom: "10px", borderBottom: "1px solid #e2e8f0" }}>
            <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#0f172a" }}>
              Authentic IELTS Academic Writing Task 1 Diagram Scan
            </span>
            <span style={{ fontSize: "0.76rem", color: "#64748b" }}>Wheat Exports 1985–1990 (in millions of tonnes)</span>
          </div>

          <img
            src="/materials/wheat_exports_1985_1990.jpg"
            alt="IELTS Academic Task 1 Wheat Exports 1985-1990 Line Graph"
            style={{
              maxWidth: "100%",
              maxHeight: "380px",
              objectFit: "contain",
              borderRadius: "12px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.06)"
            }}
          />
        </div>
      ) : (
        /* SmartBoard Vector View: Authentic Cambridge Line Graph */
        <div
          style={{
            background: "#ffffff",
            border: "1.5px solid var(--border-default, #cbd5e1)",
            borderRadius: "20px",
            padding: "22px 24px",
            boxShadow: "var(--shadow-sm)",
            display: "flex",
            flexDirection: "column",
            gap: "14px"
          }}
        >
          {/* Graph Title & Unit */}
          <div style={{ textAlign: "center" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
              Wheat Exports 1985-1990 <span style={{ fontSize: "0.88rem", fontWeight: 500, color: "#64748b" }}>(in millions of tonnes)</span>
            </h3>
          </div>

          {/* SVG Vector Canvas */}
          <div style={{ width: "100%", overflowX: "auto", display: "flex", justifyContent: "center" }}>
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              style={{ width: "100%", maxWidth: "700px", height: "auto" }}
            >
              {/* Horizontal Grid lines and Y-axis labels */}
              {yTicks.map((val) => {
                const y = getY(val);
                return (
                  <g key={val}>
                    <line
                      x1={margin.left}
                      y1={y}
                      x2={margin.left + plotWidth}
                      y2={y}
                      stroke={val === 0 ? "#0f172a" : "#cbd5e1"}
                      strokeWidth={val === 0 ? 1.5 : 1}
                    />
                    <text
                      x={margin.left - 12}
                      y={y + 4}
                      textAnchor="end"
                      fontSize="12"
                      fontWeight="600"
                      fill="#475569"
                    >
                      {val}
                    </text>
                  </g>
                );
              })}

              {/* X-axis years */}
              {years.map((year) => {
                const x = getX(year);
                return (
                  <g key={year}>
                    <line
                      x1={x}
                      y1={margin.top}
                      x2={x}
                      y2={margin.top + plotHeight}
                      stroke="#f1f5f9"
                      strokeWidth="1"
                    />
                    <text
                      x={x}
                      y={margin.top + plotHeight + 22}
                      textAnchor="middle"
                      fontSize="13"
                      fontWeight="700"
                      fill="#0f172a"
                    >
                      {year}
                    </text>
                  </g>
                );
              })}

              {/* Data Series Polylines */}
              {WHEAT_EXPORTS_DATA.map((r) => {
                const isRegionActive = activeId === "all" || !activeId || activeId === r.id;
                const strokeColor = r.color;
                const opacity = isRegionActive ? 1 : 0.2;
                const strokeWidth = activeId === r.id ? 3.5 : 2.5;

                const pointsString = r.dataPoints
                  .map((p) => `${getX(p.year)},${getY(p.value)}`)
                  .join(" ");

                return (
                  <g key={r.id} style={{ opacity, transition: "opacity 0.2s ease" }}>
                    {/* The Line */}
                    <polyline
                      points={pointsString}
                      fill="none"
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />

                    {/* Data Points with Authentic Geometric Markers */}
                    {r.dataPoints.map((p) => {
                      const cx = getX(p.year);
                      const cy = getY(p.value);

                      return (
                        <g
                          key={p.year}
                          onClick={() => handleSelect(r.id)}
                          onMouseEnter={() => setHoveredPoint({ region: r.name, year: p.year, value: p.value })}
                          onMouseLeave={() => setHoveredPoint(null)}
                          style={{ cursor: "pointer" }}
                        >
                          {/* Marker based on authentic exam symbol */}
                          {r.markerType === "square" ? (
                            /* Australia: Square marker */
                            <rect
                              x={cx - 5}
                              y={cy - 5}
                              width={10}
                              height={10}
                              fill={r.color}
                              stroke="#ffffff"
                              strokeWidth={1.5}
                            />
                          ) : r.markerType === "circle" ? (
                            /* Canada: Circle marker */
                            <circle
                              cx={cx}
                              cy={cy}
                              r={5.5}
                              fill={r.color}
                              stroke="#ffffff"
                              strokeWidth={1.5}
                            />
                          ) : (
                            /* European Community: Triangle marker */
                            <polygon
                              points={`${cx},${cy - 6.5} ${cx - 6},${cy + 4.5} ${cx + 6},${cy + 4.5}`}
                              fill={r.color}
                              stroke="#ffffff"
                              strokeWidth={1.5}
                            />
                          )}

                          {/* Numerical value label above/below point for instant visual reading */}
                          <text
                            x={cx}
                            y={r.id === "canada" && p.year === 1988 ? cy - 10 : r.id === "australia" ? cy + 16 : cy - 9}
                            textAnchor="middle"
                            fontSize="11"
                            fontWeight="800"
                            fill={strokeColor}
                          >
                            {p.value}
                          </text>
                        </g>
                      );
                    })}
                  </g>
                );
              })}

              {/* Hover Tooltip Overlay */}
              {hoveredPoint && (
                <g>
                  <rect
                    x={getX(hoveredPoint.year) - 55}
                    y={getY(hoveredPoint.value) - 40}
                    width={110}
                    height={26}
                    rx={6}
                    fill="#0f172a"
                    opacity={0.92}
                  />
                  <text
                    x={getX(hoveredPoint.year)}
                    y={getY(hoveredPoint.value) - 23}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="11"
                    fontWeight="700"
                  >
                    {hoveredPoint.year}: {hoveredPoint.value}m tonnes
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Authentic Cambridge Diagram Legend at Bottom */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "28px",
              paddingTop: "10px",
              borderTop: "1px solid #f1f5f9",
              flexWrap: "wrap"
            }}
          >
            {/* Australia */}
            <div
              onClick={() => handleSelect("australia")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                padding: "4px 8px",
                borderRadius: "6px",
                background: activeId === "australia" ? "#f1f5f9" : "transparent"
              }}
            >
              <svg width="24" height="14">
                <line x1="0" y1="7" x2="24" y2="7" stroke="#64748b" strokeWidth="2.5" />
                <rect x="7" y="2" width="10" height="10" fill="#64748b" stroke="#ffffff" strokeWidth="1" />
              </svg>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#334155" }}>Australia</span>
            </div>

            {/* Canada */}
            <div
              onClick={() => handleSelect("canada")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                padding: "4px 8px",
                borderRadius: "6px",
                background: activeId === "canada" ? "#f1f5f9" : "transparent"
              }}
            >
              <svg width="24" height="14">
                <line x1="0" y1="7" x2="24" y2="7" stroke="#0f172a" strokeWidth="2.5" />
                <circle cx="12" cy="7" r="5" fill="#0f172a" stroke="#ffffff" strokeWidth="1" />
              </svg>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0f172a" }}>Canada</span>
            </div>

            {/* European Community */}
            <div
              onClick={() => handleSelect("european-community")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                padding: "4px 8px",
                borderRadius: "6px",
                background: activeId === "european-community" ? "#f1f5f9" : "transparent"
              }}
            >
              <svg width="24" height="14">
                <line x1="0" y1="7" x2="24" y2="7" stroke="#0284c7" strokeWidth="2.5" />
                <polygon points="12,2 6,12 18,12" fill="#0284c7" stroke="#ffffff" strokeWidth="1" />
              </svg>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0284c7" }}>European Community</span>
            </div>
          </div>
        </div>
      )}

      {/* Deep Dive Insight Card for Active Selection */}
      {showDeepDiveCard && activeHotspot && (
        <div
          style={{
            background: "#ffffff",
            border: "1.5px solid var(--border-default, #cbd5e1)",
            borderRadius: "18px",
            padding: "18px 20px",
            boxShadow: "var(--shadow-sm)",
            display: "flex",
            flexDirection: "column",
            gap: "10px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                  background: activeHotspot.color
                }}
              />
              <strong style={{ fontSize: "1rem", color: "#0f172a" }}>{activeHotspot.name}</strong>
            </div>
            <span
              style={{
                fontSize: "0.76rem",
                fontWeight: 750,
                background: "#f1f5f9",
                color: "#334155",
                padding: "3px 8px",
                borderRadius: "6px"
              }}
            >
              {activeHotspot.equipmentOrRole}
            </span>
          </div>

          <p style={{ fontSize: "0.88rem", color: "#475569", margin: 0, lineHeight: 1.5 }}>
            {activeHotspot.description}
          </p>

          <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "10px 14px" }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase" }}>Band 9 Model Phrase</span>
            <p style={{ margin: "2px 0 0", fontSize: "0.88rem", fontWeight: 650, color: "#0f172a", fontStyle: "italic" }}>
              {activeHotspot.band9Phrase}
            </p>
          </div>

          {activeHotspot.parameterMetrics && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "8px", marginTop: "4px" }}>
              {activeHotspot.parameterMetrics.map((m) => (
                <div key={m.label} style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "6px 10px" }}>
                  <div style={{ fontSize: "0.68rem", color: "#64748b", fontWeight: 700 }}>{m.label}</div>
                  <div style={{ fontSize: "0.82rem", color: "#0f172a", fontWeight: 800 }}>{m.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
