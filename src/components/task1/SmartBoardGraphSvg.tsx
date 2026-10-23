import React, { useState } from "react";
import {
  RotateCcw,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Eye,
  Info,
  CheckCircle2,
  Users,
  Award,
  Layers
} from "lucide-react";
import {
  TASK1_DATA,
  ACTIVITY_DATA,
  ACTIVITY_GENDERS,
  ACTIVITY_HOTSPOTS
} from "../../data/task1Data";
import { ActivityAgeGroup } from "../../types/task1";

export type DiagramViewMode =
  | "all"
  | "15_to_24"
  | "25_to_34"
  | "35_to_44"
  | "45_to_54"
  | "55_to_64"
  | "65_and_over"
  | "male_only"
  | "female_only"
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

export const SmartBoardTableMatrix: React.FC<SmartBoardDiagramProps> = ({
  highlightMode = "all",
  onHighlightModeChange,
  selectedCohortId: controlledCohortId,
  onSelectCohort,
  showInternalToolbar = true,
  showDeepDiveCard = true
}) => {
  const [activeMode, setActiveMode] = useState<DiagramViewMode>(highlightMode);
  const [showMale, setShowMale] = useState(true);
  const [showFemale, setShowFemale] = useState(true);
  const [hoveredGroup, setHoveredGroup] = useState<ActivityAgeGroup | null>(null);
  const [internalCohortId, setInternalCohortId] = useState<string>("35_to_44");

  const effectiveCohortId = controlledCohortId || internalCohortId;

  const handleModeChange = (mode: DiagramViewMode) => {
    setActiveMode(mode);
    if (onHighlightModeChange) onHighlightModeChange(mode);

    if (mode === "male_only") {
      setShowMale(true);
      setShowFemale(false);
    } else if (mode === "female_only") {
      setShowMale(false);
      setShowFemale(true);
    } else {
      setShowMale(true);
      setShowFemale(true);
      if (mode !== "all") {
        setInternalCohortId(mode);
        if (onSelectCohort) onSelectCohort(mode);
      }
    }
  };

  const handleReset = () => {
    setActiveMode("all");
    setShowMale(true);
    setShowFemale(true);
    setInternalCohortId("35_to_44");
    if (onSelectCohort) onSelectCohort("35_to_44");
    if (onHighlightModeChange) onHighlightModeChange("all");
  };

  // SVG Geometry Settings
  const svgWidth = 920;
  const svgHeight = 410;
  const margin = { top: 52, right: 36, bottom: 64, left: 60 };
  const chartWidth = svgWidth - margin.left - margin.right;
  const chartHeight = svgHeight - margin.top - margin.bottom;

  // Y-Scale: 0 to 60 (%)
  const maxY = 60;
  const yTicks = [0, 10, 20, 30, 40, 50, 60];

  const getYPos = (val: number) => {
    return margin.top + chartHeight - (val / maxY) * chartHeight;
  };

  // 6 Age Groups
  const numGroups = ACTIVITY_DATA.length;
  const groupSlotWidth = chartWidth / numGroups;
  const barWidth = 36;
  const barGap = 6;
  const clusterWidth = barWidth * 2 + barGap;

  const activeCohort =
    ACTIVITY_DATA.find((g) => g.id === effectiveCohortId) ||
    hoveredGroup ||
    ACTIVITY_DATA[2]; // default 35 to 44

  const activeHotspot = ACTIVITY_HOTSPOTS.find(
    (h) => h.ageGroup === activeCohort.ageGroup
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        width: "100%",
        fontFamily: "var(--font-sans, -apple-system, BlinkMacSystemFont, sans-serif)"
      }}
    >
      {/* Smart Board Control Strip */}
      {showInternalToolbar && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
            background: "#f8fafc",
            border: "1.5px solid var(--border-subtle, #e2e8f0)",
            borderRadius: "14px",
            padding: "8px 12px"
          }}
        >
          {/* Preset Hotspot Filters */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 800,
                color: "#1e293b",
                marginRight: "4px"
              }}
            >
              HIGHLIGHT COHORT:
            </span>

            {[
              { id: "all", label: "All Demographics" },
              { id: "15_to_24", label: "15–24 (Male Lead)" },
              { id: "35_to_44", label: "35–44 (Widest Gap / Low Point)" },
              { id: "45_to_54", label: "45–54 (Female Peak)" },
              { id: "65_and_over", label: "65+ (Convergence)" }
            ].map((btn) => {
              const isSelected = activeMode === btn.id;
              return (
                <button
                  key={btn.id}
                  type="button"
                  onClick={() => handleModeChange(btn.id)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "8px",
                    fontSize: "0.76rem",
                    fontWeight: 750,
                    border: isSelected ? "1.5px solid #0f172a" : "1px solid #cbd5e1",
                    background: isSelected ? "#0f172a" : "#ffffff",
                    color: isSelected ? "#ffffff" : "#334155",
                    cursor: "pointer",
                    transition: "all 0.15s ease"
                  }}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>

          {/* Gender Filter Toggles & Reset */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <button
              type="button"
              onClick={() => {
                setShowMale(!showMale);
              }}
              style={{
                padding: "6px 10px",
                borderRadius: "8px",
                fontSize: "0.75rem",
                fontWeight: 700,
                border: "1px solid #cbd5e1",
                background: showMale ? "#0f172a" : "#f1f5f9",
                color: showMale ? "#ffffff" : "#64748b",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px"
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "2px",
                  background: showMale ? "#ffffff" : "#0f172a",
                  display: "inline-block"
                }}
              />
              Men {showMale ? "On" : "Off"}
            </button>

            <button
              type="button"
              onClick={() => {
                setShowFemale(!showFemale);
              }}
              style={{
                padding: "6px 10px",
                borderRadius: "8px",
                fontSize: "0.75rem",
                fontWeight: 700,
                border: "1px solid #cbd5e1",
                background: showFemale ? "#64748b" : "#f1f5f9",
                color: showFemale ? "#ffffff" : "#64748b",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px"
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "2px",
                  background: "#cbd5e1",
                  border: "1px solid #94a3b8",
                  display: "inline-block"
                }}
              />
              Women {showFemale ? "On" : "Off"}
            </button>

            <button
              type="button"
              onClick={handleReset}
              title="Reset Chart View"
              style={{
                padding: "6px 10px",
                borderRadius: "8px",
                fontSize: "0.75rem",
                fontWeight: 700,
                border: "1px solid #cbd5e1",
                background: "#ffffff",
                color: "#64748b",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px"
              }}
            >
              <RotateCcw size={12} /> Reset
            </button>
          </div>
        </div>
      )}

      {/* Main Interactive Double Bar Chart SVG Canvas */}
      <div
        style={{
          width: "100%",
          background: "#ffffff",
          borderRadius: "16px",
          border: "1.5px solid #e2e8f0",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
          overflow: "hidden",
          position: "relative"
        }}
      >
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          style={{ width: "100%", height: "auto", display: "block" }}
        >
          {/* Background fill */}
          <rect width={svgWidth} height={svgHeight} fill="#ffffff" />

          {/* Chart Header Title inside SVG */}
          <text
            x={svgWidth / 2}
            y={32}
            textAnchor="middle"
            fill="#334155"
            fontSize="15"
            fontWeight="700"
            letterSpacing="-0.01em"
          >
            Percentage of Australian men and women doing regular physical activity in 2010
          </text>

          {/* Y-Axis Gridlines and Labels */}
          {yTicks.map((val) => {
            const yPos = getYPos(val);
            const isZero = val === 0;
            return (
              <g key={val}>
                <line
                  x1={margin.left}
                  y1={yPos}
                  x2={svgWidth - margin.right}
                  y2={yPos}
                  stroke={isZero ? "#94a3b8" : "#f1f5f9"}
                  strokeWidth={isZero ? 1.5 : 1}
                />
                <text
                  x={margin.left - 12}
                  y={yPos + 4}
                  textAnchor="end"
                  fill="#64748b"
                  fontSize="12.5"
                  fontWeight="600"
                >
                  {val}
                </text>
              </g>
            );
          })}

          {/* Y-Axis Main Baseline */}
          <line
            x1={margin.left}
            y1={margin.top}
            x2={margin.left}
            y2={margin.top + chartHeight}
            stroke="#94a3b8"
            strokeWidth={1.5}
          />

          {/* Render Clustered Bars for Each Age Cohort */}
          {ACTIVITY_DATA.map((group, index) => {
            const groupCenterX = margin.left + (index + 0.5) * groupSlotWidth;
            const maleX = groupCenterX - clusterWidth / 2;
            const femaleX = maleX + barWidth + barGap;

            const maleY = getYPos(group.male);
            const maleBarHeight = getYPos(0) - maleY;

            const femaleY = getYPos(group.female);
            const femaleBarHeight = getYPos(0) - femaleY;

            const isCohortSelected =
              activeMode === group.id ||
              effectiveCohortId === group.id ||
              hoveredGroup?.id === group.id;

            const isDimmed =
              activeMode !== "all" &&
              activeMode !== "male_only" &&
              activeMode !== "female_only" &&
              !isCohortSelected;

            return (
              <g
                key={group.id}
                cursor="pointer"
                opacity={isDimmed ? 0.3 : 1}
                onMouseEnter={() => setHoveredGroup(group)}
                onMouseLeave={() => setHoveredGroup(null)}
                onClick={() => {
                  setInternalCohortId(group.id);
                  if (onSelectCohort) onSelectCohort(group.id);
                  if (activeMode !== "male_only" && activeMode !== "female_only") {
                    setActiveMode(group.id);
                  }
                }}
                style={{ transition: "opacity 0.2s ease" }}
              >
                {/* Highlight Background Pillar if selected */}
                {isCohortSelected && (
                  <rect
                    x={groupCenterX - groupSlotWidth / 2 + 4}
                    y={margin.top}
                    width={groupSlotWidth - 8}
                    height={chartHeight}
                    fill="rgba(59, 130, 246, 0.05)"
                    rx={8}
                    stroke="rgba(59, 130, 246, 0.2)"
                    strokeWidth={1}
                    strokeDasharray="4 3"
                  />
                )}

                {/* Male Bar (Black: #0f172a) */}
                {showMale && (
                  <g>
                    <rect
                      x={maleX}
                      y={maleY}
                      width={barWidth}
                      height={maleBarHeight}
                      fill="#0f172a"
                      rx={2}
                      style={{ transition: "all 0.25s ease" }}
                    />
                    {/* Value Label above Male Bar */}
                    <text
                      x={maleX + barWidth / 2}
                      y={maleY - 7}
                      textAnchor="middle"
                      fill="#0f172a"
                      fontSize="12.5"
                      fontWeight="750"
                    >
                      {group.male}
                    </text>
                  </g>
                )}

                {/* Female Bar (Light Grey: #cbd5e1 with subtle border) */}
                {showFemale && (
                  <g>
                    <rect
                      x={femaleX}
                      y={femaleY}
                      width={barWidth}
                      height={femaleBarHeight}
                      fill="#cbd5e1"
                      stroke="#94a3b8"
                      strokeWidth={1}
                      rx={2}
                      style={{ transition: "all 0.25s ease" }}
                    />
                    {/* Value Label above Female Bar (displaying 53 for 55 to 64 as in original graphic) */}
                    <text
                      x={femaleX + barWidth / 2}
                      y={femaleY - 7}
                      textAnchor="middle"
                      fill="#475569"
                      fontSize="12.5"
                      fontWeight="750"
                    >
                      {group.ageGroup === "55 to 64" ? "53" : group.female}
                    </text>
                  </g>
                )}

                {/* X-Axis Category Label */}
                <text
                  x={groupCenterX}
                  y={margin.top + chartHeight + 24}
                  textAnchor="middle"
                  fill={isCohortSelected ? "#0f172a" : "#475569"}
                  fontSize={isCohortSelected ? "13.5" : "13"}
                  fontWeight={isCohortSelected ? "800" : "600"}
                >
                  {group.ageGroup}
                </text>

                {/* Special Hotspot Badges on Canvas */}
                {group.id === "15_to_24" && (
                  <g>
                    <rect
                      x={groupCenterX - 56}
                      y={margin.top + chartHeight + 36}
                      width={112}
                      height={18}
                      rx={4}
                      fill="#fef2f2"
                      stroke="#fecaca"
                      strokeWidth={0.8}
                    />
                    <text
                      x={groupCenterX}
                      y={margin.top + chartHeight + 49}
                      textAnchor="middle"
                      fill="#dc2626"
                      fontSize="9.5"
                      fontWeight="750"
                    >
                      ★ Sole Male Lead (+5.1%)
                    </text>
                  </g>
                )}

                {group.id === "35_to_44" && (
                  <g>
                    <rect
                      x={groupCenterX - 56}
                      y={margin.top + chartHeight + 36}
                      width={112}
                      height={18}
                      rx={4}
                      fill="#eff6ff"
                      stroke="#bfdbfe"
                      strokeWidth={0.8}
                    />
                    <text
                      x={groupCenterX}
                      y={margin.top + chartHeight + 49}
                      textAnchor="middle"
                      fill="#2563eb"
                      fontSize="9.5"
                      fontWeight="750"
                    >
                      Widest Gap (13.0%) • Lowest Point
                    </text>
                  </g>
                )}

                {group.id === "45_to_54" && (
                  <g>
                    <rect
                      x={groupCenterX - 56}
                      y={margin.top + chartHeight + 36}
                      width={112}
                      height={18}
                      rx={4}
                      fill="#f0fdf4"
                      stroke="#bbf7d0"
                      strokeWidth={0.8}
                    />
                    <text
                      x={groupCenterX}
                      y={margin.top + chartHeight + 49}
                      textAnchor="middle"
                      fill="#16a34a"
                      fontSize="9.5"
                      fontWeight="750"
                    >
                      ▲ Overall Peak (53.3%)
                    </text>
                  </g>
                )}

                {group.id === "65_and_over" && (
                  <g>
                    <rect
                      x={groupCenterX - 56}
                      y={margin.top + chartHeight + 36}
                      width={112}
                      height={18}
                      rx={4}
                      fill="#f8fafc"
                      stroke="#cbd5e1"
                      strokeWidth={0.8}
                    />
                    <text
                      x={groupCenterX}
                      y={margin.top + chartHeight + 49}
                      textAnchor="middle"
                      fill="#475569"
                      fontSize="9.5"
                      fontWeight="750"
                    >
                      ≈ Virtual Parity (0.4%)
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {/* Interactive Legend Box at Bottom Center */}
          <g transform={`translate(${svgWidth / 2 - 120}, ${svgHeight - 16})`}>
            {/* Male Legend Item */}
            <g
              cursor="pointer"
              onClick={() => setShowMale(!showMale)}
              opacity={showMale ? 1 : 0.4}
            >
              <rect
                x={0}
                y={-10}
                width={14}
                height={14}
                fill="#0f172a"
                rx={2}
              />
              <text
                x={22}
                y={2}
                fill="#1e293b"
                fontSize="12.5"
                fontWeight="700"
              >
                ■ Male
              </text>
            </g>

            {/* Female Legend Item */}
            <g
              cursor="pointer"
              transform="translate(130, 0)"
              onClick={() => setShowFemale(!showFemale)}
              opacity={showFemale ? 1 : 0.4}
            >
              <rect
                x={0}
                y={-10}
                width={14}
                height={14}
                fill="#cbd5e1"
                stroke="#94a3b8"
                strokeWidth={1}
                rx={2}
              />
              <text
                x={22}
                y={2}
                fill="#475569"
                fontSize="12.5"
                fontWeight="700"
              >
                ■ Female
              </text>
            </g>
          </g>
        </svg>
      </div>

      {/* Active Demographic Deep-Dive Card */}
      {showDeepDiveCard && (
        <div
          style={{
            background: "#ffffff",
            border: "1.5px solid var(--border-subtle, #e2e8f0)",
            borderRadius: "16px",
            padding: "16px 20px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
            alignItems: "center"
          }}
        >
          {/* Left Column: Stat Summary */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <span
                style={{
                  background: "#0f172a",
                  color: "#ffffff",
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  padding: "3px 8px",
                  borderRadius: "6px"
                }}
              >
                COHORT: {activeCohort.ageGroup}
              </span>
              {activeCohort.higherGender === "male" ? (
                <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#dc2626" }}>
                  Male Dominance (+{Math.abs(activeCohort.genderGap)}%)
                </span>
              ) : activeCohort.genderGap > 5 ? (
                <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#2563eb" }}>
                  Female Dominance (+{activeCohort.genderGap}%)
                </span>
              ) : (
                <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#16a34a" }}>
                  Near Convergence (Gap: {activeCohort.genderGap}%)
                </span>
              )}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    background: "#0f172a",
                    borderRadius: "3px",
                    display: "inline-block"
                  }}
                />
                <span style={{ fontSize: "0.85rem", color: "#64748b" }}>Men:</span>
                <strong style={{ fontSize: "1.15rem", color: "#0f172a" }}>
                  {activeCohort.male}%
                </strong>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    background: "#cbd5e1",
                    border: "1px solid #94a3b8",
                    borderRadius: "3px",
                    display: "inline-block"
                  }}
                />
                <span style={{ fontSize: "0.85rem", color: "#64748b" }}>Women:</span>
                <strong style={{ fontSize: "1.15rem", color: "#334155" }}>
                  {activeCohort.female}%
                </strong>
              </div>

              <div style={{ fontSize: "0.82rem", color: "#64748b", borderLeft: "1px solid #e2e8f0", paddingLeft: "12px" }}>
                Difference:{" "}
                <strong style={{ color: "#0f172a" }}>
                  {Math.abs(activeCohort.genderGap).toFixed(1)} percentage points
                </strong>
              </div>
            </div>

            {activeCohort.annotation && (
              <p style={{ fontSize: "0.82rem", color: "#475569", margin: "6px 0 0 0" }}>
                {activeCohort.annotation}
              </p>
            )}
          </div>

          {/* Right Column: Band 9 Academic Sentence Formulation */}
          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              padding: "12px 14px",
              fontSize: "0.84rem",
              lineHeight: 1.5,
              color: "#334155"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
              <Sparkles size={14} color="#2563eb" />
              <strong style={{ color: "#0f172a", fontSize: "0.82rem" }}>
                Band 9 Analytical Sentence:
              </strong>
            </div>
            {activeHotspot ? (
              <em>{activeHotspot.band9Sentence}</em>
            ) : (
              <em>
                “In the {activeCohort.ageGroup} bracket, {activeCohort.higherGender === "male" ? "men" : "women"} registered a participation rate of {activeCohort.higherGender === "male" ? activeCohort.male : activeCohort.female}%, exceeding their counterparts by {Math.abs(activeCohort.genderGap)} percentage points.”
              </em>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
