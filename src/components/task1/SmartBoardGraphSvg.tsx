import React, { useState } from "react";
import { RotateCcw, TrendingDown, TrendingUp, GitCommit, Layers } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export type GraphHighlightMode =
  | "all"
  | "decreasers"
  | "increasers"
  | "intersections"
  | "uk"
  | "sweden"
  | "italy"
  | "portugal";

interface SmartBoardGraphSvgProps {
  onSelectCountry?: (countryId: string) => void;
  selectedCountryId?: string | null;
  highlightMode?: GraphHighlightMode;
  onHighlightModeChange?: (mode: GraphHighlightMode) => void;
  showInternalToolbar?: boolean;
}

const FILTER_DETAILS: Record<
  GraphHighlightMode,
  { label: string; icon: React.ReactNode; color: string; description: string }
> = {
  all: {
    label: "All 4 Countries",
    icon: <RotateCcw size={13} />,
    color: "var(--slate-900)",
    description:
      "Displaying full 40-year trajectories (1967–2007) for the United Kingdom, Sweden, Italy, and Portugal in metric tonnes per capita."
  },
  decreasers: {
    label: "Net Decreasers (UK & Sweden)",
    icon: <TrendingDown size={13} />,
    color: "#0284c7",
    description:
      "Highlighting the two nations experiencing overall decline: the UK's steady downward descent and Sweden's dramatic 1977 peak followed by a 30-year plunge."
  },
  increasers: {
    label: "Net Increasers (Italy & Portugal)",
    icon: <TrendingUp size={13} />,
    color: "#b91c1c",
    description:
      "Highlighting the two nations with substantial growth: Italy's steady ascent and plateau (+81%), and Portugal's four-fold surge (+350%)."
  },
  intersections: {
    label: "Crossovers & Convergences",
    icon: <GitCommit size={13} />,
    color: "#d97706",
    description:
      "Highlighting critical inflection points: Italy overtaking Sweden around 1987 (~6.8 tonnes), and Sweden converging with Portugal in 2007 (~5.4 tonnes)."
  },
  uk: {
    label: "United Kingdom Only",
    icon: <Layers size={13} />,
    color: "#9333ea",
    description:
      "Dominant emitter throughout the 40 years: started highest at ~10.8 tonnes and dropped steadily to finish at ~8.7 tonnes."
  },
  sweden: {
    label: "Sweden Only",
    icon: <Layers size={13} />,
    color: "#0284c7",
    description:
      "Most volatile nation: started at 8.6 tonnes, spiked to an apex of 10.2 tonnes in 1977, then plummeted to 5.4 tonnes."
  },
  italy: {
    label: "Italy Only",
    icon: <Layers size={13} />,
    color: "#b91c1c",
    description:
      "Steady growth: rose from 4.2 to 6.7 tonnes to surpass Sweden in 1987, reaching a permanent plateau at 7.6 tonnes from 1997."
  },
  portugal: {
    label: "Portugal Only",
    icon: <Layers size={13} />,
    color: "#1e293b",
    description:
      "Steepest proportional rise: surged from a negligible 1.2 tonnes to quadruple, meeting Sweden at 5.4 tonnes in 2007."
  }
};

export const SmartBoardGraphSvg: React.FC<SmartBoardGraphSvgProps> = ({
  onSelectCountry,
  selectedCountryId,
  highlightMode: externalHighlightMode,
  onHighlightModeChange,
  showInternalToolbar = true
}) => {
  const [internalHighlightMode, setInternalHighlightMode] =
    useState<GraphHighlightMode>("all");
  const [activeTooltip, setActiveTooltip] = useState<{
    country: string;
    year: number;
    value: number;
    annotation?: string;
    x: number;
    y: number;
    color: string;
  } | null>(null);

  const activeMode = externalHighlightMode ?? internalHighlightMode;

  const setHighlightMode = (mode: GraphHighlightMode) => {
    if (onHighlightModeChange) {
      onHighlightModeChange(mode);
    } else {
      setInternalHighlightMode(mode);
    }
  };

  const isCountryDimmed = (countryId: string) => {
    if (activeMode === "all") return false;
    if (activeMode === "decreasers") return countryId !== "uk" && countryId !== "sweden";
    if (activeMode === "increasers") return countryId !== "italy" && countryId !== "portugal";
    if (activeMode === "intersections") return false;
    return activeMode !== countryId;
  };

  const isCountryHighlighted = (countryId: string) => {
    if (selectedCountryId === countryId) return true;
    if (activeMode === "all") return true;
    if (activeMode === "decreasers") return countryId === "uk" || countryId === "sweden";
    if (activeMode === "increasers") return countryId === "italy" || countryId === "portugal";
    return activeMode === countryId;
  };

  /*
   * Plot Coordinates:
   * Origin (0 tonnes): y = 460
   * 12 tonnes: y = 100
   * 1 tonne = 30 px
   * Years: 1967 -> 180, 1977 -> 345, 1987 -> 510, 1997 -> 675, 2007 -> 840
   */
  const yearToX = (yr: number): number => {
    switch (yr) {
      case 1967: return 180;
      case 1977: return 345;
      case 1987: return 510;
      case 1997: return 675;
      case 2007: return 840;
      default: return 180 + ((yr - 1967) / 40) * 660;
    }
  };

  const valToY = (val: number): number => {
    return 460 - val * 30;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        userSelect: "none",
        position: "relative"
      }}
    >
      {/* Aspect Mode Quick Toolbar */}
      {showInternalToolbar && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "8px",
            padding: "8px 12px",
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(8px)",
            borderBottom: "1.5px solid var(--border-subtle)",
            zIndex: 10
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                color: "var(--slate-500)",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                marginRight: "4px"
              }}
            >
              Smart Focus:
            </span>
            {(
              [
                "all",
                "decreasers",
                "increasers",
                "intersections",
                "uk",
                "sweden",
                "italy",
                "portugal"
              ] as const
            ).map((mode) => {
              const details = FILTER_DETAILS[mode];
              const isActive = activeMode === mode;
              return (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setHighlightMode(mode)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "4px 10px",
                    borderRadius: "8px",
                    fontSize: "0.78rem",
                    fontWeight: 750,
                    border: isActive ? `1.5px solid ${details.color}` : "1.5px solid var(--border-subtle)",
                    background: isActive ? details.color : "#ffffff",
                    color: isActive ? "#ffffff" : "var(--slate-700)",
                    cursor: "pointer",
                    boxShadow: isActive ? "0 2px 6px rgba(0,0,0,0.15)" : "none",
                    transition: "all 0.15s ease"
                  }}
                >
                  {details.icon}
                  <span>{details.label}</span>
                </button>
              );
            })}
          </div>

          <div
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--slate-600)",
              fontStyle: "italic"
            }}
          >
            ✦ Tap any line or data point to inspect details
          </div>
        </div>
      )}

      {/* SVG Canvas Container */}
      <div
        style={{
          flex: 1,
          width: "100%",
          minHeight: "440px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <svg
          viewBox="0 0 940 630"
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "560px",
            display: "block"
          }}
        >
          <defs>
            {/* Drop shadow for tooltip & active markers */}
            <filter id="marker-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.25" />
            </filter>
            <filter id="intersection-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#f59e0b" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* Graph Title (Exact terms from prompt image) */}
          <text
            x="510"
            y="36"
            textAnchor="middle"
            fontSize="19"
            fontWeight="800"
            fill="#0f172a"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            Average Carbon Dioxide (CO2) Emissions per person
          </text>
          <text
            x="510"
            y="60"
            textAnchor="middle"
            fontSize="16"
            fontWeight="750"
            fill="#334155"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            1967 - 2007
          </text>

          {/* Y-Axis Title (Rotated) */}
          <text
            transform="rotate(-90 100 280)"
            x="100"
            y="280"
            textAnchor="middle"
            fontSize="15"
            fontWeight="750"
            fill="#0f172a"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            CO2 Emissions in Metric Tonnes
          </text>

          {/* Grid lines and Y-axis scale (0 to 12) */}
          {[0, 2, 4, 6, 8, 10, 12].map((val) => {
            const y = valToY(val);
            const isZero = val === 0;
            return (
              <g key={val}>
                <line
                  x1="180"
                  y1={y}
                  x2="840"
                  y2={y}
                  stroke={isZero ? "#000000" : "#000000"}
                  strokeWidth={isZero ? 4.5 : val % 4 === 0 ? 3.5 : 3.0}
                  strokeLinecap="square"
                />
                <text
                  x="165"
                  y={y + 5}
                  textAnchor="end"
                  fontSize="16"
                  fontWeight="800"
                  fill="#000000"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  {val}
                </text>
              </g>
            );
          })}

          {/* Y-Axis Solid Line */}
          <line x1="180" y1="100" x2="180" y2="460" stroke="#000000" strokeWidth="4.5" strokeLinecap="square" />

          {/* X-Axis Ticks & Year Labels */}
          {[1967, 1977, 1987, 1997, 2007].map((yr) => {
            const x = yearToX(yr);
            return (
              <g key={yr}>
                <line x1={x} y1="460" x2={x} y2="475" stroke="#000000" strokeWidth="4" strokeLinecap="square" />
                <text
                  x={x}
                  y="500"
                  textAnchor="middle"
                  fontSize="16"
                  fontWeight="800"
                  fill="#000000"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  {yr}
                </text>
              </g>
            );
          })}

          {/* ============================================================== */}
          {/* NATION TREND LINES & POINTS */}
          {/* ============================================================== */}

          {TASK1_DATA.graphData.countries.map((country) => {
            const dimmed = isCountryDimmed(country.id);
            const highlighted = isCountryHighlighted(country.id);

            // Construct SVG path string
            const pathString = country.dataPoints
              .map((pt, i) => `${i === 0 ? "M" : "L"} ${yearToX(pt.year)} ${valToY(pt.value)}`)
              .join(" ");

            return (
              <g
                key={country.id}
                onClick={() => {
                  if (onSelectCountry) onSelectCountry(country.id);
                }}
                style={{
                  cursor: "pointer",
                  transition: "opacity 0.25s ease"
                }}
                opacity={dimmed ? 0.16 : 1}
              >
                {/* Wider invisible hit area for easy touch / mouse click */}
                <path
                  d={pathString}
                  fill="none"
                  stroke="transparent"
                  strokeWidth="24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Visible Chart Line */}
                <path
                  d={pathString}
                  fill="none"
                  stroke={country.color}
                  strokeWidth={highlighted ? 4.5 : 3.5}
                  strokeDasharray={country.strokeDashArray}
                  strokeLinecap={country.lineStyle === "dotted" ? "round" : "square"}
                  strokeLinejoin="round"
                  filter={highlighted && activeMode !== "all" ? "url(#marker-glow)" : undefined}
                />

                {/* Data Points / Markers */}
                {country.dataPoints.map((pt) => {
                  const cx = yearToX(pt.year);
                  const cy = valToY(pt.value);
                  const isHovered =
                    activeTooltip?.country === country.name && activeTooltip?.year === pt.year;

                  return (
                    <g
                      key={pt.year}
                      onMouseEnter={() =>
                        setActiveTooltip({
                          country: country.name,
                          year: pt.year,
                          value: pt.value,
                          annotation: pt.annotation,
                          x: cx,
                          y: cy,
                          color: country.color
                        })
                      }
                      onMouseLeave={() => setActiveTooltip(null)}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTooltip({
                          country: country.name,
                          year: pt.year,
                          value: pt.value,
                          annotation: pt.annotation,
                          x: cx,
                          y: cy,
                          color: country.color
                        });
                        if (onSelectCountry) onSelectCountry(country.id);
                      }}
                    >
                      {/* Touch target circle */}
                      <circle cx={cx} cy={cy} r="14" fill="transparent" />

                      {/* Visible marker */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isHovered ? 7.5 : 5}
                        fill={country.color}
                        stroke="#ffffff"
                        strokeWidth="2.5"
                        filter="url(#marker-glow)"
                      />

                      {/* Optional inline value pill for active countries */}
                      {highlighted && activeMode !== "all" && (
                        <text
                          x={cx}
                          y={country.id === "portugal" && pt.year === 1967 ? cy - 12 : cy - 10}
                          textAnchor="middle"
                          fontSize="11"
                          fontWeight="800"
                          fill={country.color}
                          fontFamily="system-ui, -apple-system, sans-serif"
                        >
                          {pt.value.toFixed(1)}t
                        </text>
                      )}
                    </g>
                  );
                })}
              </g>
            );
          })}

          {/* ============================================================== */}
          {/* SPECIAL INFLECTION / INTERSECTION HIGHLIGHTS */}
          {/* ============================================================== */}
          {activeMode === "intersections" && (
            <g>
              {/* 1977 Sweden Peak Highlight */}
              <circle
                cx={yearToX(1977)}
                cy={valToY(10.2)}
                r="16"
                fill="none"
                stroke="#0284c7"
                strokeWidth="3"
                strokeDasharray="4 2"
                filter="url(#intersection-glow)"
              />
              <rect
                x={yearToX(1977) - 60}
                y={valToY(10.2) - 46}
                width="120"
                height="26"
                rx="6"
                fill="#0284c7"
              />
              <text
                x={yearToX(1977)}
                y={valToY(10.2) - 29}
                textAnchor="middle"
                fontSize="11"
                fontWeight="800"
                fill="#ffffff"
              >
                1977 Apex: 10.2t
              </text>

              {/* 1987 Italy-Sweden Crossover */}
              <circle
                cx={yearToX(1987)}
                cy={valToY(6.8)}
                r="16"
                fill="none"
                stroke="#d97706"
                strokeWidth="3.5"
                filter="url(#intersection-glow)"
              />
              <rect
                x={yearToX(1987) + 16}
                y={valToY(6.8) - 18}
                width="164"
                height="36"
                rx="8"
                fill="#78350f"
              />
              <text
                x={yearToX(1987) + 24}
                y={valToY(6.8) - 4}
                fontSize="11"
                fontWeight="800"
                fill="#fef3c7"
              >
                1987: Italy Overtakes Sweden
              </text>
              <text
                x={yearToX(1987) + 24}
                y={valToY(6.8) + 10}
                fontSize="10"
                fontWeight="600"
                fill="#ffffff"
              >
                Intersection at ~6.8 tonnes
              </text>

              {/* 2007 Sweden-Portugal Convergence */}
              <circle
                cx={yearToX(2007)}
                cy={valToY(5.4)}
                r="16"
                fill="none"
                stroke="#10b981"
                strokeWidth="3.5"
                filter="url(#intersection-glow)"
              />
              <rect
                x={yearToX(2007) - 180}
                y={valToY(5.4) - 18}
                width="164"
                height="36"
                rx="8"
                fill="#064e3b"
              />
              <text
                x={yearToX(2007) - 172}
                y={valToY(5.4) - 4}
                fontSize="11"
                fontWeight="800"
                fill="#d1fae5"
              >
                2007: Convergence
              </text>
              <text
                x={yearToX(2007) - 172}
                y={valToY(5.4) + 10}
                fontSize="10"
                fontWeight="600"
                fill="#ffffff"
              >
                Sweden & Portugal meet at 5.4t
              </text>
            </g>
          )}

          {/* ============================================================== */}
          {/* LEGEND BOX (Exact terms from prompt image: UK, Sweden, Italy, Portgual) */}
          {/* ============================================================== */}
          <g transform="translate(170, 525)">
            <rect
              x="0"
              y="0"
              width="680"
              height="85"
              fill="#ffffff"
              stroke="#000000"
              strokeWidth="1.5"
              rx="4"
            />

            {/* Column 1: UK & Sweden */}
            {/* United Kingdom */}
            <g
              onClick={() => setHighlightMode("uk")}
              style={{ cursor: "pointer" }}
              opacity={activeMode === "uk" || activeMode === "all" || activeMode === "decreasers" ? 1 : 0.4}
            >
              <line
                x1="25"
                y1="30"
                x2="135"
                y2="30"
                stroke="#9333ea"
                strokeWidth="4.5"
                strokeDasharray="14 5 3 5"
              />
              <circle cx="80" cy="30" r="4.5" fill="#9333ea" />
              <text
                x="150"
                y="35"
                fontSize="16"
                fontWeight="800"
                fill="#000000"
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                United Kingdom
              </text>
            </g>

            {/* Sweden */}
            <g
              onClick={() => setHighlightMode("sweden")}
              style={{ cursor: "pointer" }}
              opacity={activeMode === "sweden" || activeMode === "all" || activeMode === "decreasers" ? 1 : 0.4}
            >
              <line
                x1="25"
                y1="64"
                x2="135"
                y2="64"
                stroke="#0284c7"
                strokeWidth="4.5"
                strokeDasharray="10 8"
              />
              <circle cx="80" cy="64" r="4.5" fill="#0284c7" />
              <text
                x="150"
                y="69"
                fontSize="16"
                fontWeight="800"
                fill="#000000"
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                Sweden
              </text>
            </g>

            {/* Column 2: Italy & Portgual */}
            {/* Italy */}
            <g
              onClick={() => setHighlightMode("italy")}
              style={{ cursor: "pointer" }}
              opacity={activeMode === "italy" || activeMode === "all" || activeMode === "increasers" ? 1 : 0.4}
            >
              <line
                x1="380"
                y1="30"
                x2="480"
                y2="30"
                stroke="#b91c1c"
                strokeWidth="4.5"
              />
              <circle cx="430" cy="30" r="4.5" fill="#b91c1c" />
              <text
                x="500"
                y="35"
                fontSize="16"
                fontWeight="800"
                fill="#000000"
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                Italy
              </text>
            </g>

            {/* Portgual (Exact term in image) */}
            <g
              onClick={() => setHighlightMode("portugal")}
              style={{ cursor: "pointer" }}
              opacity={activeMode === "portugal" || activeMode === "all" || activeMode === "increasers" ? 1 : 0.4}
            >
              <line
                x1="380"
                y1="64"
                x2="480"
                y2="64"
                stroke="#1e293b"
                strokeWidth="4.5"
                strokeDasharray="4 6"
                strokeLinecap="round"
              />
              <circle cx="430" cy="64" r="4.5" fill="#1e293b" />
              <text
                x="500"
                y="69"
                fontSize="16"
                fontWeight="800"
                fill="#000000"
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                Portgual
              </text>
            </g>
          </g>
        </svg>

        {/* Floating Tooltip */}
        {activeTooltip && (
          <div
            style={{
              position: "absolute",
              left: `${(activeTooltip.x / 940) * 100}%`,
              top: `${(activeTooltip.y / 630) * 100}%`,
              transform: "translate(-50%, -125%)",
              background: "rgba(15, 23, 42, 0.95)",
              color: "#ffffff",
              padding: "10px 14px",
              borderRadius: "12px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
              fontSize: "0.85rem",
              lineHeight: 1.4,
              pointerEvents: "none",
              zIndex: 30,
              minWidth: "160px",
              border: `2px solid ${activeTooltip.color}`,
              backdropFilter: "blur(6px)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
              <strong style={{ color: activeTooltip.color, fontSize: "0.92rem" }}>
                {activeTooltip.country}
              </strong>
              <span style={{ background: "rgba(255,255,255,0.15)", padding: "1px 6px", borderRadius: "6px", fontSize: "0.75rem" }}>
                {activeTooltip.year}
              </span>
            </div>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, marginTop: "4px" }}>
              {activeTooltip.value} <span style={{ fontSize: "0.78rem", fontWeight: 500 }}>metric tonnes</span>
            </div>
            {activeTooltip.annotation && (
              <div style={{ fontSize: "0.78rem", color: "#cbd5e1", marginTop: "4px" }}>
                {activeTooltip.annotation}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Description Strip below SVG */}
      <div
        style={{
          padding: "10px 18px",
          background: "var(--slate-50)",
          borderTop: "1px solid var(--border-subtle)",
          fontSize: "0.85rem",
          color: "var(--slate-700)",
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}
      >
        <span
          className="apple-badge accent"
          style={{
            background: FILTER_DETAILS[activeMode].color,
            color: "#ffffff",
            fontSize: "0.72rem",
            padding: "2px 8px",
            flexShrink: 0
          }}
        >
          {FILTER_DETAILS[activeMode].label}
        </span>
        <span style={{ lineHeight: 1.45 }}>{FILTER_DETAILS[activeMode].description}</span>
      </div>
    </div>
  );
};
