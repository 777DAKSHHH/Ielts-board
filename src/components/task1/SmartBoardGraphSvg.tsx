import React, { useState } from "react";
import {
  RotateCcw,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Info,
  CheckCircle2,
  Users,
  Award,
  Layers,
  PieChart as PieIcon,
  ChevronRight,
  ShieldAlert
} from "lucide-react";
import {
  TASK1_DATA,
  SPENDING_CATEGORIES,
  SPENDING_YEARS,
  SPENDING_HOTSPOTS
} from "../../data/task1Data";
import { SpendingCategoryKey, SpendingCategoryItem } from "../../types/task1";

export type DiagramViewMode =
  | "all"
  | "1981"
  | "1991"
  | "2001"
  | "teachers_salaries"
  | "other_workers_salaries"
  | "furniture_and_equipment"
  | "resources"
  | "insurance"
  | "staff_only"
  | "non_staff_only"
  | string;

export type TableHighlightMode = DiagramViewMode;
export type GraphHighlightMode = DiagramViewMode;

interface SmartBoardDiagramProps {
  onSelectCountry?: (id: string) => void;
  selectedCountryId?: string | null;
  highlightMode?: DiagramViewMode;
  onHighlightModeChange?: (mode: DiagramViewMode) => void;
  selectedCohortId?: string;
  onSelectCohort?: (id: string) => void;
  showInternalToolbar?: boolean;
  showDeepDiveCard?: boolean;
  forcedLayoutMode?: "stacked" | "split";
}

// Math helpers for SVG Pie Arcs
function polarToCartesian(cx: number, cy: number, r: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(angleInRadians),
    y: cy + r * Math.sin(angleInRadians)
  };
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const deltaAngle = endAngle - startAngle;
  const safeEndAngle = deltaAngle >= 360 ? startAngle + 359.99 : endAngle;
  const start = polarToCartesian(cx, cy, r, safeEndAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = safeEndAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M", cx, cy,
    "L", end.x, end.y,
    "A", r, r, 0, largeArcFlag, 1, start.x, start.y,
    "Z"
  ].join(" ");
}

export const SmartBoardTableMatrix: React.FC<SmartBoardDiagramProps> = ({
  highlightMode = "all",
  onHighlightModeChange,
  selectedCohortId: controlledCategoryId,
  onSelectCohort,
  showInternalToolbar = true,
  showDeepDiveCard = true
}) => {
  const [activeMode, setActiveMode] = useState<DiagramViewMode>(highlightMode);
  const [internalCategoryId, setInternalCategoryId] = useState<SpendingCategoryKey>("teachers_salaries");
  const [hoveredCategory, setHoveredCategory] = useState<SpendingCategoryItem | null>(null);
  const [yearFilter, setYearFilter] = useState<"all" | "1981" | "1991" | "2001">("all");

  const effectiveCategoryId = (controlledCategoryId as SpendingCategoryKey) || internalCategoryId;

  const handleSelectCategory = (catId: SpendingCategoryKey) => {
    setInternalCategoryId(catId);
    if (onSelectCohort) onSelectCohort(catId);
    if (onHighlightModeChange) onHighlightModeChange(catId);
  };

  const handleReset = () => {
    setActiveMode("all");
    setYearFilter("all");
    setInternalCategoryId("teachers_salaries");
    setHoveredCategory(null);
    if (onSelectCohort) onSelectCohort("teachers_salaries");
    if (onHighlightModeChange) onHighlightModeChange("all");
  };

  const activeCategory =
    SPENDING_CATEGORIES.find((c) => c.id === effectiveCategoryId) || SPENDING_CATEGORIES[0];

  const activeHotspot =
    SPENDING_HOTSPOTS.find((h) => h.category === activeCategory.label) || SPENDING_HOTSPOTS[0];

  // Visible years based on filter
  const displayedYears =
    yearFilter === "all"
      ? SPENDING_YEARS
      : SPENDING_YEARS.filter((y) => y.year.toString() === yearFilter);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "100%",
        fontFamily: "inherit"
      }}
    >
      {/* SmartBoard Presentation Controls Toolbar */}
      {showInternalToolbar && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
            background: "#ffffff",
            padding: "10px 14px",
            borderRadius: "14px",
            border: "1px solid var(--border-subtle, #cbd5e1)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
          }}
        >
          {/* Year View Toggles */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--slate-500, #64748b)" }}>
              Year:
            </span>
            {(["all", "1981", "1991", "2001"] as const).map((yr) => (
              <button
                key={yr}
                onClick={() => setYearFilter(yr)}
                style={{
                  padding: "5px 12px",
                  borderRadius: "8px",
                  fontSize: "0.78rem",
                  fontWeight: 750,
                  border: yearFilter === yr ? "1.5px solid #0f172a" : "1px solid #e2e8f0",
                  background: yearFilter === yr ? "#0f172a" : "#f8fafc",
                  color: yearFilter === yr ? "#ffffff" : "#334155",
                  cursor: "pointer",
                  transition: "all 0.15s ease"
                }}
              >
                {yr === "all" ? "All 3 Years" : yr}
              </button>
            ))}
          </div>

          {/* Category Highlight Quick-Toggles */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--slate-500, #64748b)" }}>
              Filter:
            </span>
            {SPENDING_CATEGORIES.map((cat) => {
              const isSelected = effectiveCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelectCategory(cat.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 10px",
                    borderRadius: "8px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    border: isSelected ? `2px solid ${cat.color}` : "1px solid #e2e8f0",
                    background: isSelected ? `${cat.color}18` : "#ffffff",
                    color: isSelected ? cat.color : "#475569",
                    cursor: "pointer",
                    boxShadow: isSelected ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
                    transition: "all 0.15s ease"
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: cat.color
                    }}
                  />
                  <span>{cat.shortLabel}</span>
                </button>
              );
            })}

            <button
              onClick={handleReset}
              title="Reset Filters"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "4px 8px",
                borderRadius: "8px",
                fontSize: "0.75rem",
                fontWeight: 700,
                border: "1px solid #e2e8f0",
                background: "#f1f5f9",
                color: "#475569",
                cursor: "pointer"
              }}
            >
              <RotateCcw size={12} />
              <span>Reset</span>
            </button>
          </div>
        </div>
      )}

      {/* Interactive Pie Charts Grid */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "18px",
          border: "1.5px solid var(--border-subtle, #cbd5e1)",
          padding: "16px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
          display: "flex",
          flexDirection: "column",
          gap: "14px"
        }}
      >
        {/* Main Charts Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              displayedYears.length === 3
                ? "repeat(3, 1fr)"
                : "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "14px"
          }}
        >
          {displayedYears.map((yearData) => {
            // Calculate slice angles for this pie
            let currentAngle = 0;
            const computedSlices = yearData.slices.map((slice) => {
              const sliceAngle = (slice.percentage / 100) * 360;
              const startAngle = currentAngle;
              const endAngle = currentAngle + sliceAngle;
              currentAngle = endAngle;
              const midAngle = startAngle + sliceAngle / 2;
              return {
                ...slice,
                startAngle,
                endAngle,
                midAngle
              };
            });

            const pieSize = 250;
            const cx = pieSize / 2;
            const cy = pieSize / 2;
            const radius = 95;

            return (
              <div
                key={yearData.year}
                style={{
                  background: "#f8fafc",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  padding: "14px 10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  position: "relative"
                }}
              >
                {/* Year Header & Total Badges */}
                <div style={{ textAlign: "center", width: "100%" }}>
                  <div
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 850,
                      color: "#0f172a",
                      letterSpacing: "-0.01em"
                    }}
                  >
                    Total School Spending {yearData.year}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "8px",
                      marginTop: "4px"
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 750,
                        padding: "2px 7px",
                        borderRadius: "6px",
                        background: "#dbeafe",
                        color: "#1e40af"
                      }}
                    >
                      Staff: {yearData.totalStaffPercent}%
                    </span>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 750,
                        padding: "2px 7px",
                        borderRadius: "6px",
                        background: "#fef3c7",
                        color: "#92400e"
                      }}
                    >
                      Non-Staff: {yearData.totalNonStaffPercent}%
                    </span>
                  </div>
                </div>

                {/* SVG Pie Chart Canvas */}
                <svg
                  viewBox={`0 0 ${pieSize} ${pieSize}`}
                  style={{
                    width: "100%",
                    maxWidth: "250px",
                    height: "auto",
                    overflow: "visible"
                  }}
                >
                  <defs>
                    <filter id={`shadow-${yearData.year}`} x="-10%" y="-10%" width="120%" height="120%">
                      <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
                    </filter>
                  </defs>

                  {/* Render Slices */}
                  {computedSlices.map((slice) => {
                    const isSelected = effectiveCategoryId === slice.categoryId;
                    const pathD = describeArc(cx, cy, radius, slice.startAngle, slice.endAngle);

                    // Label coordinates
                    // If slice is small (<= 5%), place label outside with pointer
                    const isSmall = slice.percentage <= 5;
                    const labelDist = isSmall ? radius * 1.25 : radius * 0.65;
                    const labelPos = polarToCartesian(cx, cy, labelDist, slice.midAngle);
                    const pointerStart = polarToCartesian(cx, cy, radius * 0.95, slice.midAngle);

                    return (
                      <g
                        key={slice.categoryId}
                        onClick={() => handleSelectCategory(slice.categoryId)}
                        onMouseEnter={() => {
                          const cat = SPENDING_CATEGORIES.find((c) => c.id === slice.categoryId);
                          if (cat) setHoveredCategory(cat);
                        }}
                        onMouseLeave={() => setHoveredCategory(null)}
                        style={{ cursor: "pointer" }}
                      >
                        {/* Slice Path */}
                        <path
                          d={pathD}
                          fill={slice.color}
                          stroke="#ffffff"
                          strokeWidth={isSelected ? 3.5 : 1.5}
                          opacity={effectiveCategoryId && !isSelected ? 0.45 : 1}
                          filter={isSelected ? `url(#shadow-${yearData.year})` : undefined}
                          transform={
                            isSelected
                              ? `scale(1.03) translate(${cx * -0.03}, ${cy * -0.03})`
                              : undefined
                          }
                          style={{
                            transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                            transformOrigin: `${cx}px ${cy}px`
                          }}
                        />

                        {/* Leader line for small slices */}
                        {isSmall && (
                          <line
                            x1={pointerStart.x}
                            y1={pointerStart.y}
                            x2={labelPos.x}
                            y2={labelPos.y}
                            stroke="#475569"
                            strokeWidth="1"
                            strokeDasharray="2,2"
                          />
                        )}

                        {/* Percentage Label */}
                        <text
                          x={labelPos.x}
                          y={labelPos.y}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fill={isSmall ? "#0f172a" : "#ffffff"}
                          fontSize={isSmall ? "11px" : "12px"}
                          fontWeight="800"
                          style={{
                            textShadow: isSmall
                              ? "0 1px 2px rgba(255,255,255,0.8)"
                              : "0 1px 3px rgba(0,0,0,0.5)",
                            pointerEvents: "none"
                          }}
                        >
                          {slice.percentage}%
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Slices Mini-Breakdown Table for Classroom Zero-Scroll Viewing */}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    marginTop: "4px"
                  }}
                >
                  {yearData.slices.map((slice) => {
                    const isSelected = effectiveCategoryId === slice.categoryId;
                    return (
                      <div
                        key={slice.categoryId}
                        onClick={() => handleSelectCategory(slice.categoryId)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "4px 8px",
                          borderRadius: "6px",
                          background: isSelected ? "#e2e8f0" : "#ffffff",
                          border: isSelected ? `1.5px solid ${slice.color}` : "1px solid #f1f5f9",
                          fontSize: "0.75rem",
                          cursor: "pointer",
                          fontWeight: isSelected ? 800 : 600,
                          color: isSelected ? "#0f172a" : "#475569"
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <span
                            style={{
                              width: "8px",
                              height: "8px",
                              borderRadius: "2px",
                              background: slice.color
                            }}
                          />
                          <span>{slice.label}</span>
                        </div>
                        <span
                          style={{
                            fontWeight: 850,
                            color: isSelected ? slice.color : "#1e293b"
                          }}
                        >
                          {slice.percentage}%
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Multi-Year Trend Tracker Strip Across 1981 -> 1991 -> 2001 */}
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "14px",
            border: "1px solid #e2e8f0",
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                background: activeCategory.color
              }}
            />
            <strong style={{ fontSize: "0.95rem", color: "#0f172a" }}>
              Active Focus: {activeCategory.label}
            </strong>
            <span
              style={{
                fontSize: "0.75rem",
                padding: "2px 8px",
                borderRadius: "6px",
                background: activeCategory.group === "staff" ? "#dbeafe" : "#fef3c7",
                color: activeCategory.group === "staff" ? "#1e40af" : "#92400e",
                fontWeight: 750
              }}
            >
              {activeCategory.group === "staff" ? "Staff Costs" : "Operational / Capital Costs"}
            </span>
          </div>

          {/* 3-Year Trajectory Badges */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                background: "#ffffff",
                padding: "4px 10px",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                fontSize: "0.82rem"
              }}
            >
              <span style={{ color: "#64748b", fontWeight: 600 }}>1981: </span>
              <strong style={{ color: "#0f172a" }}>{activeCategory.y1981}%</strong>
            </div>
            <ChevronRight size={14} color="#94a3b8" />
            <div
              style={{
                background: "#ffffff",
                padding: "4px 10px",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                fontSize: "0.82rem"
              }}
            >
              <span style={{ color: "#64748b", fontWeight: 600 }}>1991: </span>
              <strong style={{ color: "#0f172a" }}>{activeCategory.y1991}%</strong>
            </div>
            <ChevronRight size={14} color="#94a3b8" />
            <div
              style={{
                background: "#ffffff",
                padding: "4px 10px",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                fontSize: "0.82rem"
              }}
            >
              <span style={{ color: "#64748b", fontWeight: 600 }}>2001: </span>
              <strong style={{ color: "#0f172a" }}>{activeCategory.y2001}%</strong>
            </div>

            <div
              style={{
                padding: "4px 10px",
                borderRadius: "8px",
                fontSize: "0.82rem",
                fontWeight: 800,
                background:
                  activeCategory.netChange > 0
                    ? "#dcfce7"
                    : activeCategory.netChange < 0
                    ? "#fee2e2"
                    : "#f1f5f9",
                color:
                  activeCategory.netChange > 0
                    ? "#166534"
                    : activeCategory.netChange < 0
                    ? "#991b1b"
                    : "#475569"
              }}
            >
              20-Yr Net: {activeCategory.netChange > 0 ? "+" : ""}
              {activeCategory.netChange}%
            </div>
          </div>
        </div>
      </div>

      {/* SmartBoard Pedagogical Deep Dive Card */}
      {showDeepDiveCard && activeCategory && (
        <div
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            border: `1.5px solid ${activeCategory.color}40`,
            padding: "16px 20px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
            display: "flex",
            flexDirection: "column",
            gap: "10px"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Award size={18} color={activeCategory.color} />
              <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                {activeHotspot.title}
              </h4>
            </div>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                padding: "3px 10px",
                borderRadius: "8px",
                background: `${activeCategory.color}15`,
                color: activeCategory.color
              }}
            >
              Band 9 Essential Citation
            </span>
          </div>

          <p style={{ fontSize: "0.88rem", color: "#334155", margin: 0, lineHeight: 1.5 }}>
            <strong>Analytical Trajectory:</strong> {activeCategory.trendDescription}
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderLeft: `3px solid ${activeCategory.color}`,
              borderRadius: "8px",
              padding: "10px 14px",
              fontSize: "0.9rem",
              color: "#1e293b",
              lineHeight: 1.55,
              fontStyle: "italic"
            }}
          >
            {activeCategory.band9Phrase}
          </div>
        </div>
      )}
    </div>
  );
};
