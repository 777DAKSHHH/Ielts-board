import React, { useState } from "react";
import {
  RotateCcw,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Tv,
  Radio as RadioIcon,
  Clock,
  Layers,
  Eye,
  Crosshair,
  Info
} from "lucide-react";
import {
  TASK1_DATA,
  HOURLY_AUDIENCE_DATA,
  MEDIA_CHANNELS,
  AUDIENCE_HOTSPOTS
} from "../../data/task1Data";
import { HourlyAudiencePoint } from "../../types/task1";

export type DiagramViewMode =
  | "all"
  | "morning"
  | "midday"
  | "evening"
  | "overnight"
  | "tv"
  | "radio"
  | string;

export type TableHighlightMode = DiagramViewMode;
export type GraphHighlightMode = DiagramViewMode;

interface SmartBoardDiagramProps {
  onSelectCountry?: (id: string) => void;
  selectedCountryId?: string | null;
  highlightMode?: DiagramViewMode;
  onHighlightModeChange?: (mode: DiagramViewMode) => void;
  showInternalToolbar?: boolean;
  showDeepDiveCard?: boolean;
  forcedLayoutMode?: "stacked" | "split";
}

// Catmull-Rom or Cardinal Spline to SVG path generator
function createSmoothPath(points: { x: number; y: number }[]): string {
  if (points.length === 0) return "";
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

  let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = i > 0 ? points[i - 1] : points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = i < points.length - 2 ? points[i + 2] : p2;

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }
  return d;
}

export const SmartBoardTableMatrix: React.FC<SmartBoardDiagramProps> = ({
  highlightMode = "all",
  onHighlightModeChange,
  showInternalToolbar = true,
  showDeepDiveCard = true
}) => {
  const [activePhase, setActivePhase] = useState<DiagramViewMode>(highlightMode);
  const [showTv, setShowTv] = useState(true);
  const [showRadio, setShowRadio] = useState(true);
  const [hoveredHour, setHoveredHour] = useState<HourlyAudiencePoint | null>(null);
  const [selectedHotspotId, setSelectedHotspotId] = useState<string>("radio_peak");

  const handlePhaseChange = (phase: DiagramViewMode) => {
    setActivePhase(phase);
    if (onHighlightModeChange) onHighlightModeChange(phase);
  };

  // SVG Chart Geometry
  const chartWidth = 740;
  const chartHeight = 370;
  const margin = { top: 32, right: 36, bottom: 54, left: 60 };
  const innerWidth = chartWidth - margin.left - margin.right;
  const innerHeight = chartHeight - margin.top - margin.bottom;

  const minHour = 1;
  const maxHour = 24;
  const maxPercent = 50;

  const xScale = (hour: number) =>
    margin.left + ((hour - minHour) / (maxHour - minHour)) * innerWidth;

  const yScale = (val: number) =>
    margin.top + innerHeight - (Math.max(0, Math.min(val, maxPercent)) / maxPercent) * innerHeight;

  // Gridlines: Y-axis 0% to 50% in 5% increments
  const yTicks = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

  // X-axis main hour ticks matching the graph
  const xTicks = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23];

  // Prepare points
  const tvPoints = HOURLY_AUDIENCE_DATA.map((p) => ({
    x: xScale(p.hour),
    y: yScale(p.tv),
    point: p
  }));

  const radioPoints = HOURLY_AUDIENCE_DATA.map((p) => ({
    x: xScale(p.hour),
    y: yScale(p.radio),
    point: p
  }));

  const tvPathD = createSmoothPath(tvPoints);
  const radioPathD = createSmoothPath(radioPoints);

  // Area paths for gradient fills
  const tvAreaD = `${tvPathD} L ${xScale(24)} ${yScale(0)} L ${xScale(1)} ${yScale(0)} Z`;
  const radioAreaD = `${radioPathD} L ${xScale(24)} ${yScale(0)} L ${xScale(1)} ${yScale(0)} Z`;

  // Landmark coordinates
  const radioPeakPoint = HOURLY_AUDIENCE_DATA.find((p) => p.isPeak === "radio") || HOURLY_AUDIENCE_DATA[8];
  const tvPeakPoint = HOURLY_AUDIENCE_DATA.find((p) => p.hour === 20.5) || HOURLY_AUDIENCE_DATA[20];
  const crossoverPoint = HOURLY_AUDIENCE_DATA.find((p) => p.isCrossover) || HOURLY_AUDIENCE_DATA[13];

  // Highlight band for phases
  const getPhaseHighlightBand = () => {
    switch (activePhase) {
      case "morning":
        return { start: 6, end: 10, title: "Morning Rush & Radio Peak (06:00 – 10:00)" };
      case "midday":
        return { start: 12, end: 14, title: "Midday Crossover Point (12:00 – 14:00)" };
      case "evening":
        return { start: 17, end: 22, title: "Prime-Time Television Surge (17:00 – 22:00)" };
      case "overnight":
        return { start: 1, end: 6, title: "Nocturnal Trough (01:00 – 06:00)" };
      default:
        return null;
    }
  };

  const highlightBand = getPhaseHighlightBand();
  const activeHover = hoveredHour || crossoverPoint;

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
      {/* SmartBoard Interactive Control Bar */}
      {showInternalToolbar && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px",
            background: "#ffffff",
            padding: "12px 18px",
            borderRadius: "16px",
            border: "1.5px solid var(--border-subtle)",
            boxShadow: "var(--shadow-sm)"
          }}
        >
          {/* Phase Filter Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 750, color: "var(--slate-500)", marginRight: "4px" }}>
              DIURNAL PHASES:
            </span>
            {[
              { id: "all", label: "All 24 Hours", icon: <Clock size={14} /> },
              { id: "morning", label: "Morning Rush (Radio Peak)", icon: <TrendingUp size={14} color="#dc2626" /> },
              { id: "midday", label: "Midday Crossover (13:00)", icon: <Sparkles size={14} color="#d97706" /> },
              { id: "evening", label: "Prime-Time TV Surge", icon: <Tv size={14} color="#2563eb" /> },
              { id: "overnight", label: "Nocturnal Lull (<5%)", icon: <TrendingDown size={14} color="#64748b" /> }
            ].map((phase) => {
              const isActive = activePhase === phase.id;
              return (
                <button
                  key={phase.id}
                  onClick={() => handlePhaseChange(phase.id as DiagramViewMode)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "7px 12px",
                    borderRadius: "10px",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    border: isActive ? "2px solid var(--slate-900)" : "1px solid var(--border-subtle)",
                    background: isActive ? "var(--slate-900)" : "var(--slate-50)",
                    color: isActive ? "#ffffff" : "var(--slate-700)",
                    cursor: "pointer",
                    transition: "all 0.15s ease"
                  }}
                >
                  {phase.icon}
                  {phase.label}
                </button>
              );
            })}
          </div>

          {/* Channel Legend & Toggle Switches */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={() => setShowTv(!showTv)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 12px",
                borderRadius: "10px",
                background: showTv ? "#eff6ff" : "var(--slate-100)",
                border: `2px solid ${showTv ? "#2563eb" : "var(--slate-300)"}`,
                cursor: "pointer"
              }}
            >
              <div
                style={{
                  width: "14px",
                  height: "4px",
                  background: showTv ? "#2563eb" : "var(--slate-400)",
                  borderRadius: "2px"
                }}
              />
              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  color: showTv ? "#1e40af" : "var(--slate-500)"
                }}
              >
                TV (Blue)
              </span>
            </button>

            <button
              onClick={() => setShowRadio(!showRadio)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 12px",
                borderRadius: "10px",
                background: showRadio ? "#fef2f2" : "var(--slate-100)",
                border: `2px solid ${showRadio ? "#dc2626" : "var(--slate-300)"}`,
                cursor: "pointer"
              }}
            >
              <div
                style={{
                  width: "14px",
                  height: "4px",
                  background: showRadio ? "#dc2626" : "var(--slate-400)",
                  borderRadius: "2px"
                }}
              />
              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  color: showRadio ? "#991b1b" : "var(--slate-500)"
                }}
              >
                Radio (Red)
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Main Interactive Vector Line Graph Canvas */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          border: "1.5px solid var(--border-subtle)",
          padding: "20px 22px 16px 22px",
          boxShadow: "var(--shadow-sm)",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          position: "relative"
        }}
      >
        {/* Title Header Matching Real IELTS Chart */}
        <div style={{ textAlign: "center", marginBottom: "4px" }}>
          <h3
            style={{
              fontSize: "1.15rem",
              fontWeight: 800,
              color: "var(--slate-900)",
              letterSpacing: "-0.01em",
              margin: 0
            }}
          >
            Radio and Television audiences in UK, October - December 1992
          </h3>
          <p style={{ fontSize: "0.82rem", color: "var(--slate-500)", marginTop: "3px", margin: 0 }}>
            Source: UK Audience Measurement • 24-Hour Diurnal Cycle • Percentage of UK population aged 4+
          </p>
        </div>

        {/* SVG Viewport */}
        <div style={{ width: "100%", overflowX: "auto" }}>
          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              userSelect: "none"
            }}
          >
            <defs>
              {/* TV Area Gradient */}
              <linearGradient id="tvGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.22" />
                <stop offset="85%" stopColor="#2563eb" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
              </linearGradient>

              {/* Radio Area Gradient */}
              <linearGradient id="radioGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#dc2626" stopOpacity="0.22" />
                <stop offset="85%" stopColor="#dc2626" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
              </linearGradient>

              {/* Filter glow for peaks */}
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Background Phase Highlight Band */}
            {highlightBand && (
              <g>
                <rect
                  x={xScale(highlightBand.start)}
                  y={margin.top}
                  width={xScale(highlightBand.end) - xScale(highlightBand.start)}
                  height={innerHeight}
                  fill="rgba(245, 158, 11, 0.08)"
                  stroke="rgba(245, 158, 11, 0.35)"
                  strokeDasharray="4 4"
                  rx="6"
                />
                <text
                  x={xScale((highlightBand.start + highlightBand.end) / 2)}
                  y={margin.top + 18}
                  textAnchor="middle"
                  fill="#b45309"
                  fontSize="11"
                  fontWeight="700"
                >
                  {highlightBand.title}
                </text>
              </g>
            )}

            {/* Horizontal Gridlines & Y-Axis Labels */}
            {yTicks.map((tick) => {
              const y = yScale(tick);
              return (
                <g key={tick}>
                  <line
                    x1={margin.left}
                    y1={y}
                    x2={margin.left + innerWidth}
                    y2={y}
                    stroke={tick === 0 ? "var(--slate-800)" : "#e2e8f0"}
                    strokeWidth={tick === 0 ? 1.5 : 1}
                    strokeDasharray={tick === 0 ? "none" : tick % 10 === 0 ? "none" : "2 2"}
                  />
                  <text
                    x={margin.left - 10}
                    y={y + 4}
                    textAnchor="end"
                    fill={tick === 0 ? "var(--slate-800)" : "#64748b"}
                    fontSize="11"
                    fontWeight={tick % 10 === 0 ? "700" : "500"}
                  >
                    {tick}%
                  </text>
                </g>
              );
            })}

            {/* Vertical Hour Tick Lines & Labels */}
            {xTicks.map((hour) => {
              const x = xScale(hour);
              return (
                <g key={hour}>
                  <line
                    x1={x}
                    y1={margin.top}
                    x2={x}
                    y2={margin.top + innerHeight}
                    stroke="#f1f5f9"
                    strokeWidth={1}
                  />
                  <line
                    x1={x}
                    y1={margin.top + innerHeight}
                    x2={x}
                    y2={margin.top + innerHeight + 6}
                    stroke="var(--slate-600)"
                    strokeWidth={1.5}
                  />
                  <text
                    x={x}
                    y={margin.top + innerHeight + 20}
                    textAnchor="middle"
                    fill="var(--slate-800)"
                    fontSize="11.5"
                    fontWeight="700"
                  >
                    {hour.toFixed(2)}
                  </text>
                </g>
              );
            })}

            {/* Intermediate minor hour tick notches */}
            {[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24].map((hour) => {
              const x = xScale(hour);
              return (
                <line
                  key={`minor-${hour}`}
                  x1={x}
                  y1={margin.top + innerHeight}
                  x2={x}
                  y2={margin.top + innerHeight + 4}
                  stroke="#94a3b8"
                  strokeWidth={1}
                />
              );
            })}

            {/* Y-Axis Title (Rotated) */}
            <text
              transform={`rotate(-90)`}
              x={-(margin.top + innerHeight / 2)}
              y={16}
              textAnchor="middle"
              fill="#64748b"
              fontSize="11.5"
              fontWeight="700"
              letterSpacing="0.02em"
            >
              Percentage of UK population (over 4-years old)
            </text>

            {/* X-Axis Title */}
            <text
              x={margin.left + innerWidth / 2}
              y={chartHeight - 8}
              textAnchor="middle"
              fill="#64748b"
              fontSize="12"
              fontWeight="700"
            >
              Time of day or night
            </text>

            {/* Inset Legend inside SVG matching original layout */}
            <g transform={`translate(${margin.left + 22}, ${margin.top + 16})`}>
              <rect
                x="0"
                y="0"
                width="100"
                height="48"
                fill="#ffffff"
                stroke="#e2e8f0"
                strokeWidth="1"
                rx="8"
                opacity="0.95"
              />
              <line x1="12" y1="16" x2="34" y2="16" stroke="#2563eb" strokeWidth="3.5" />
              <text x="42" y="20" fill="var(--slate-800)" fontSize="11" fontWeight="750">
                TV
              </text>

              <line x1="12" y1="34" x2="34" y2="34" stroke="#dc2626" strokeWidth="3.5" />
              <text x="42" y="38" fill="var(--slate-800)" fontSize="11" fontWeight="750">
                Radio
              </text>
            </g>

            {/* TV Filled Area & Curve */}
            {showTv && (
              <g>
                <path d={tvAreaD} fill="url(#tvGradient)" />
                <path
                  d={tvPathD}
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            )}

            {/* Radio Filled Area & Curve */}
            {showRadio && (
              <g>
                <path d={radioAreaD} fill="url(#radioGradient)" />
                <path
                  d={radioPathD}
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            )}

            {/* Landmark 1: Radio Peak Callout at 8:30 (27%) */}
            {showRadio && (
              <g transform={`translate(${xScale(radioPeakPoint.hour)}, ${yScale(radioPeakPoint.radio)})`}>
                <circle r="6" fill="#dc2626" stroke="#ffffff" strokeWidth="2.5" filter="url(#glow)" />
                <circle r="12" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
                <g transform="translate(-50, -32)">
                  <rect
                    x="0"
                    y="0"
                    width="100"
                    height="24"
                    rx="6"
                    fill="#dc2626"
                    filter="url(#glow)"
                  />
                  <text
                    x="50"
                    y="16"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="10"
                    fontWeight="800"
                  >
                    Radio Apex: ~27%
                  </text>
                </g>
              </g>
            )}

            {/* Landmark 2: Midday Crossover Callout at 13:00 (15%) */}
            <g transform={`translate(${xScale(crossoverPoint.hour)}, ${yScale(15)})`}>
              <circle r="7" fill="#d97706" stroke="#ffffff" strokeWidth="2.5" filter="url(#glow)" />
              <line x1="0" y1="-28" x2="0" y2="-8" stroke="#d97706" strokeWidth="1.5" strokeDasharray="2 2" />
              <g transform="translate(-65, -52)">
                <rect
                  x="0"
                  y="0"
                  width="130"
                  height="24"
                  rx="6"
                  fill="#78350f"
                />
                <text
                  x="65"
                  y="16"
                  textAnchor="middle"
                  fill="#fef3c7"
                  fontSize="10"
                  fontWeight="800"
                >
                  13:00 Crossover: 15%
                </text>
              </g>
            </g>

            {/* Landmark 3: TV Evening Peak Callout at 20:30 (45%) */}
            {showTv && (
              <g transform={`translate(${xScale(20.5)}, ${yScale(45)})`}>
                <circle r="6" fill="#2563eb" stroke="#ffffff" strokeWidth="2.5" filter="url(#glow)" />
                <circle r="12" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
                <g transform="translate(-55, -32)">
                  <rect
                    x="0"
                    y="0"
                    width="110"
                    height="24"
                    rx="6"
                    fill="#1e40af"
                    filter="url(#glow)"
                  />
                  <text
                    x="55"
                    y="16"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="10"
                    fontWeight="800"
                  >
                    TV Prime Peak: 45%
                  </text>
                </g>
              </g>
            )}

            {/* Interactive Vertical Cursor Tracking */}
            {activeHover && (
              <g>
                <line
                  x1={xScale(activeHover.hour)}
                  y1={margin.top}
                  x2={xScale(activeHover.hour)}
                  y2={margin.top + innerHeight}
                  stroke="var(--slate-700)"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                />
                {showTv && (
                  <circle
                    cx={xScale(activeHover.hour)}
                    cy={yScale(activeHover.tv)}
                    r="5"
                    fill="#2563eb"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                )}
                {showRadio && (
                  <circle
                    cx={xScale(activeHover.hour)}
                    cy={yScale(activeHover.radio)}
                    r="5"
                    fill="#dc2626"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                )}
              </g>
            )}

            {/* Interactive Hover Columns over the whole chart */}
            {HOURLY_AUDIENCE_DATA.map((p) => {
              const x = xScale(p.hour);
              const colWidth = innerWidth / (HOURLY_AUDIENCE_DATA.length - 1);
              return (
                <rect
                  key={p.hour}
                  x={x - colWidth / 2}
                  y={margin.top}
                  width={colWidth}
                  height={innerHeight}
                  fill="transparent"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHoveredHour(p)}
                  onClick={() => setHoveredHour(p)}
                />
              );
            })}
          </svg>
        </div>

        {/* Live Touch Hover Inspector Banner */}
        <div
          style={{
            background: "var(--slate-50)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "14px",
            padding: "12px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "var(--slate-900)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Clock size={18} />
            </div>
            <div>
              <div style={{ fontSize: "0.78rem", color: "var(--slate-500)", fontWeight: 700 }}>
                HOURLY INSPECTION
              </div>
              <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--slate-900)" }}>
                {activeHover.timeLabel} ({activeHover.hour >= 12 ? `${activeHover.hour === 12 ? 12 : (activeHover.hour - 12).toFixed(1)} pm` : `${activeHover.hour.toFixed(1)} am`})
              </div>
            </div>
          </div>

          {/* TV & Radio Data Pills */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <div
              style={{
                background: "#eff6ff",
                border: "1.5px solid #bfdbfe",
                borderRadius: "10px",
                padding: "8px 14px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#2563eb" }} />
              <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1e40af" }}>
                TV Audience: <strong>{activeHover.tv}%</strong>
              </span>
            </div>

            <div
              style={{
                background: "#fef2f2",
                border: "1.5px solid #fecaca",
                borderRadius: "10px",
                padding: "8px 14px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#dc2626" }} />
              <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#991b1b" }}>
                Radio Audience: <strong>{activeHover.radio}%</strong>
              </span>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid var(--border-default)",
                borderRadius: "10px",
                padding: "8px 14px",
                fontSize: "0.85rem",
                color: "var(--slate-700)"
              }}
            >
              <strong>Leadership:</strong>{" "}
              {activeHover.tv > activeHover.radio ? (
                <span style={{ color: "#2563eb", fontWeight: 750 }}>
                  TV leads by +{(activeHover.tv - activeHover.radio).toFixed(1)}%
                </span>
              ) : activeHover.radio > activeHover.tv ? (
                <span style={{ color: "#dc2626", fontWeight: 750 }}>
                  Radio leads by +{(activeHover.radio - activeHover.tv).toFixed(1)}%
                </span>
              ) : (
                <span style={{ color: "#d97706", fontWeight: 750 }}>
                  Equal Convergence (15%)
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Deep-Dive Analytical Hotspot Cards */}
      {showDeepDiveCard && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "12px"
          }}
        >
          {AUDIENCE_HOTSPOTS.map((hotspot) => {
            const isSelected = selectedHotspotId === hotspot.id;
            return (
              <div
                key={hotspot.id}
                onClick={() => {
                  setSelectedHotspotId(hotspot.id);
                  handlePhaseChange(hotspot.zone as DiagramViewMode);
                }}
                style={{
                  background: isSelected ? "#f8fafc" : "#ffffff",
                  border: isSelected ? "2px solid var(--slate-900)" : "1.5px solid var(--border-subtle)",
                  borderRadius: "16px",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  boxShadow: isSelected ? "var(--shadow-md)" : "var(--shadow-sm)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span
                    className="apple-badge neutral"
                    style={{
                      fontSize: "0.72rem",
                      background:
                        hotspot.zone === "morning"
                          ? "#fee2e2"
                          : hotspot.zone === "midday"
                          ? "#fef3c7"
                          : hotspot.zone === "evening"
                          ? "#dbeafe"
                          : "#f1f5f9",
                      color:
                        hotspot.zone === "morning"
                          ? "#991b1b"
                          : hotspot.zone === "midday"
                          ? "#92400e"
                          : hotspot.zone === "evening"
                          ? "#1e40af"
                          : "#475569",
                      fontWeight: 800
                    }}
                  >
                    {hotspot.timeRange}
                  </span>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--slate-500)" }}>
                    {hotspot.zone.toUpperCase()}
                  </span>
                </div>

                <h4 style={{ fontSize: "0.98rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  {hotspot.title}
                </h4>

                <p style={{ fontSize: "0.82rem", color: "var(--slate-600)", lineHeight: 1.45, margin: 0 }}>
                  {hotspot.contrastKey}
                </p>

                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "10px",
                    padding: "8px 10px",
                    fontSize: "0.8rem",
                    color: "var(--slate-700)",
                    fontStyle: "italic",
                    marginTop: "4px"
                  }}
                >
                  {hotspot.band9Sentence}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
