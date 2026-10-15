import React, { useState } from "react";
import {
  RotateCcw,
  Sparkles,
  BarChart3,
  TrendingDown,
  TrendingUp,
  Disc,
  Download,
  ShoppingBag,
  Radio,
  FileText,
  Eye,
  Columns,
  Rows
} from "lucide-react";
import {
  TASK1_DATA,
  MUSIC_FORMATS,
  COUNTRY_MARKETS,
  TASK1_HOTSPOTS
} from "../../data/task1Data";
import { CountryKey, FormatKey, MusicFormatItem } from "../../types/task1";

export type DiagramViewMode =
  | "all"
  | "shop_cds"
  | "online_cds"
  | "downloads"
  | "cassettes"
  | "vinyl"
  | "germany"
  | "france"
  | "italy"
  | "normal"
  | "el_nino";

export type TableHighlightMode = DiagramViewMode | string;
export type GraphHighlightMode = TableHighlightMode;

interface SmartBoardDiagramProps {
  onSelectCountry?: (id: string) => void;
  selectedCountryId?: string | null;
  highlightMode?: DiagramViewMode | string;
  onHighlightModeChange?: (mode: DiagramViewMode) => void;
  showInternalToolbar?: boolean;
  showDeepDiveCard?: boolean;
}

export const SmartBoardTableMatrix: React.FC<SmartBoardDiagramProps> = ({
  highlightMode = "all",
  onHighlightModeChange,
  showInternalToolbar = true,
  showDeepDiveCard = true
}) => {
  const [selectedFormatId, setSelectedFormatId] = useState<FormatKey>("shop_cds");
  const [selectedCountry, setSelectedCountry] = useState<CountryKey | "all">("all");
  const [layoutMode, setLayoutMode] = useState<"stacked" | "split">("stacked");
  const [activeYear, setActiveYear] = useState<"both" | 1997 | 2007>("both");
  const [hoveredBar, setHoveredBar] = useState<{
    year: number;
    format: string;
    country: string;
    value: number;
  } | null>(null);

  const selectedFormat =
    MUSIC_FORMATS.find((f) => f.id === selectedFormatId) || MUSIC_FORMATS[0];

  const handleFormatSelect = (id: FormatKey) => {
    setSelectedFormatId(id);
    if (onHighlightModeChange) onHighlightModeChange(id);
  };

  const handleCountryToggle = (country: CountryKey | "all") => {
    setSelectedCountry(country);
    if (onHighlightModeChange && country !== "all") {
      onHighlightModeChange(country);
    } else if (onHighlightModeChange) {
      onHighlightModeChange("all");
    }
  };

  // SVG Chart Geometry
  const chartWidth = 560;
  const chartHeight = 300;
  const margin = { top: 38, right: 46, bottom: 35, left: 165 };
  const innerWidth = chartWidth - margin.left - margin.right;
  const innerHeight = chartHeight - margin.top - margin.bottom;

  const maxVal = 40; // Max x-axis scale 40 million euros
  const xScale = (val: number) => (val / maxVal) * innerWidth;

  const rowHeight = innerHeight / MUSIC_FORMATS.length;
  const barHeight = 10;
  const barSpacing = 2.5;

  const renderSingleChart = (year: 1997 | 2007) => {
    const is1997 = year === 1997;
    return (
      <div
        style={{
          background: "#ffffff",
          border: "2px solid var(--border-subtle)",
          borderRadius: "18px",
          padding: "16px 18px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          flex: 1
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                fontSize: "1.25rem",
                fontWeight: 900,
                color: "#0f172a",
                letterSpacing: "-0.02em"
              }}
            >
              {year}
            </span>
            <span
              className="apple-badge neutral"
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                background: is1997 ? "#f1f5f9" : "#eff6ff",
                color: is1997 ? "#334155" : "#1d4ed8"
              }}
            >
              {is1997 ? "Baseline Period (Pre-Digital)" : "Decade Later (Digital Shift)"}
            </span>
          </div>

          <div style={{ fontSize: "0.78rem", color: "var(--slate-500)", fontWeight: 600 }}>
            Unit: <strong>million euros (€m)</strong>
          </div>
        </div>

        {/* SVG Container */}
        <div style={{ width: "100%", overflowX: "auto" }}>
          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            style={{ width: "100%", height: "auto", display: "block", minWidth: "480px" }}
          >
            <defs>
              {/* Pattern for Italy (Dotted / Textured Pattern matching exam scan) */}
              <pattern
                id={`italy-pattern-${year}`}
                width="6"
                height="6"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.5" fill="#475569" />
                <circle cx="5" cy="5" r="1.5" fill="#475569" />
              </pattern>

              {/* Germany solid pattern with micro-texture */}
              <pattern
                id={`germany-pattern-${year}`}
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <rect width="8" height="8" fill="#0f172a" />
                <line x1="0" y1="0" x2="8" y2="8" stroke="#334155" strokeWidth="1" />
              </pattern>
            </defs>

            {/* Vertical Gridlines & X-Axis Labels */}
            {[0, 10, 20, 30, 40].map((tick) => {
              const x = margin.left + xScale(tick);
              return (
                <g key={tick}>
                  <line
                    x1={x}
                    y1={margin.top - 8}
                    x2={x}
                    y2={margin.top + innerHeight}
                    stroke={tick === 0 ? "#0f172a" : "#cbd5e1"}
                    strokeWidth={tick === 0 ? 2 : 1}
                    strokeDasharray={tick === 0 ? "none" : "3,3"}
                  />
                  <text
                    x={x}
                    y={margin.top + innerHeight + 16}
                    textAnchor="middle"
                    fill="#334155"
                    fontSize="11"
                    fontWeight="700"
                  >
                    {tick}
                  </text>
                </g>
              );
            })}

            {/* Sub-ticks at 5, 15, 25, 35 */}
            {[5, 15, 25, 35].map((subTick) => {
              const x = margin.left + xScale(subTick);
              return (
                <line
                  key={subTick}
                  x1={x}
                  y1={margin.top + innerHeight}
                  x2={x}
                  y2={margin.top + innerHeight + 5}
                  stroke="#94a3b8"
                  strokeWidth="1"
                />
              );
            })}

            {/* X-Axis bottom title */}
            <text
              x={margin.left + innerWidth / 2}
              y={margin.top + innerHeight + 30}
              textAnchor="middle"
              fill="#475569"
              fontSize="11"
              fontWeight="800"
              letterSpacing="0.04em"
            >
              million euros
            </text>

            {/* Format Rows */}
            {MUSIC_FORMATS.map((format, fIdx) => {
              const rowY = margin.top + fIdx * rowHeight;
              const isSelectedFormat = selectedFormatId === format.id;

              const valGer = is1997 ? format.profits.germany.y1997 : format.profits.germany.y2007;
              const valFra = is1997 ? format.profits.france.y1997 : format.profits.france.y2007;
              const valIta = is1997 ? format.profits.italy.y1997 : format.profits.italy.y2007;

              const gerY = rowY + 5;
              const fraY = gerY + barHeight + barSpacing;
              const itaY = fraY + barHeight + barSpacing;

              const gerHighlight =
                (selectedCountry === "all" || selectedCountry === "germany") &&
                (highlightMode === "all" || highlightMode === format.id || highlightMode === "germany");
              const fraHighlight =
                (selectedCountry === "all" || selectedCountry === "france") &&
                (highlightMode === "all" || highlightMode === format.id || highlightMode === "france");
              const itaHighlight =
                (selectedCountry === "all" || selectedCountry === "italy") &&
                (highlightMode === "all" || highlightMode === format.id || highlightMode === "italy");

              return (
                <g
                  key={format.id}
                  onClick={() => handleFormatSelect(format.id)}
                  style={{ cursor: "pointer" }}
                >
                  {/* Subtle row highlight */}
                  {isSelectedFormat && (
                    <rect
                      x={8}
                      y={rowY}
                      width={chartWidth - 16}
                      height={rowHeight}
                      fill="rgba(59, 130, 246, 0.06)"
                      rx="6"
                    />
                  )}

                  {/* Format Label */}
                  <text
                    x={margin.left - 12}
                    y={rowY + rowHeight / 2 - 2}
                    textAnchor="end"
                    fill={isSelectedFormat ? "#0284c7" : "#0f172a"}
                    fontSize="11"
                    fontWeight={isSelectedFormat ? "800" : "650"}
                  >
                    {format.name}
                  </text>

                  {/* Germany Bar (Solid Dark) */}
                  <g
                    onMouseEnter={() =>
                      setHoveredBar({
                        year,
                        format: format.name,
                        country: "Germany",
                        value: valGer
                      })
                    }
                    onMouseLeave={() => setHoveredBar(null)}
                  >
                    <rect
                      x={margin.left}
                      y={gerY}
                      width={Math.max(xScale(valGer), valGer > 0 ? 3 : 0)}
                      height={barHeight}
                      fill={`url(#germany-pattern-${year})`}
                      stroke="#0f172a"
                      strokeWidth="1.5"
                      opacity={gerHighlight ? 1 : 0.22}
                      rx="1"
                    />
                    {valGer > 0 && (
                      <text
                        x={margin.left + xScale(valGer) + 4}
                        y={gerY + barHeight - 2}
                        fontSize="9.5"
                        fontWeight="750"
                        fill={gerHighlight ? "#0f172a" : "#94a3b8"}
                      >
                        {valGer}
                      </text>
                    )}
                  </g>

                  {/* France Bar (White / Hollow) */}
                  <g
                    onMouseEnter={() =>
                      setHoveredBar({
                        year,
                        format: format.name,
                        country: "France",
                        value: valFra
                      })
                    }
                    onMouseLeave={() => setHoveredBar(null)}
                  >
                    <rect
                      x={margin.left}
                      y={fraY}
                      width={Math.max(xScale(valFra), valFra > 0 ? 3 : 0)}
                      height={barHeight}
                      fill="#ffffff"
                      stroke="#0f172a"
                      strokeWidth="1.6"
                      opacity={fraHighlight ? 1 : 0.22}
                      rx="1"
                    />
                    {valFra > 0 && (
                      <text
                        x={margin.left + xScale(valFra) + 4}
                        y={fraY + barHeight - 2}
                        fontSize="9.5"
                        fontWeight="750"
                        fill={fraHighlight ? "#0f172a" : "#94a3b8"}
                      >
                        {valFra}
                      </text>
                    )}
                  </g>

                  {/* Italy Bar (Dotted / Textured) */}
                  <g
                    onMouseEnter={() =>
                      setHoveredBar({
                        year,
                        format: format.name,
                        country: "Italy",
                        value: valIta
                      })
                    }
                    onMouseLeave={() => setHoveredBar(null)}
                  >
                    <rect
                      x={margin.left}
                      y={itaY}
                      width={Math.max(xScale(valIta), valIta > 0 ? 3 : 0)}
                      height={barHeight}
                      fill={`url(#italy-pattern-${year})`}
                      stroke="#475569"
                      strokeWidth="1.4"
                      opacity={itaHighlight ? 1 : 0.22}
                      rx="1"
                    />
                    {valIta > 0 && (
                      <text
                        x={margin.left + xScale(valIta) + 4}
                        y={itaY + barHeight - 2}
                        fontSize="9.5"
                        fontWeight="750"
                        fill={itaHighlight ? "#0f172a" : "#94a3b8"}
                      >
                        {valIta}
                      </text>
                    )}
                  </g>

                  {/* Zero / Extinct marker if all are 0 */}
                  {valGer === 0 && valFra === 0 && valIta === 0 && (
                    <text
                      x={margin.left + 8}
                      y={rowY + rowHeight / 2 + 3}
                      fill="#dc2626"
                      fontSize="9.5"
                      fontWeight="700"
                    >
                      (0 €m - Extinct)
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
      {/* Interactive Control & Legend Toolbar */}
      {showInternalToolbar && (
        <div
          style={{
            background: "var(--slate-50)",
            border: "1.5px solid var(--border-subtle)",
            borderRadius: "16px",
            padding: "12px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px"
          }}
        >
          {/* Country Legend Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#0f172a", marginRight: "4px" }}>
              LEGEND / FILTER:
            </span>

            <button
              onClick={() => handleCountryToggle("all")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "8px",
                border: "1px solid var(--border-subtle)",
                background: selectedCountry === "all" ? "var(--slate-900)" : "#ffffff",
                color: selectedCountry === "all" ? "#ffffff" : "var(--slate-700)",
                fontSize: "0.78rem",
                fontWeight: 750,
                cursor: "pointer"
              }}
            >
              <RotateCcw size={12} /> All Markets
            </button>

            {/* Germany Legend */}
            <button
              onClick={() => handleCountryToggle("germany")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                padding: "6px 12px",
                borderRadius: "8px",
                border: "1.5px solid #0f172a",
                background: selectedCountry === "germany" ? "#0f172a" : "#ffffff",
                color: selectedCountry === "germany" ? "#ffffff" : "#0f172a",
                fontSize: "0.78rem",
                fontWeight: 750,
                cursor: "pointer"
              }}
            >
              <span
                style={{
                  width: "14px",
                  height: "10px",
                  background: "#0f172a",
                  borderRadius: "2px",
                  border: "1px solid #ffffff",
                  display: "inline-block"
                }}
              />
              GERMANY
            </button>

            {/* France Legend */}
            <button
              onClick={() => handleCountryToggle("france")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                padding: "6px 12px",
                borderRadius: "8px",
                border: "1.5px solid #0f172a",
                background: selectedCountry === "france" ? "#e2e8f0" : "#ffffff",
                color: "#0f172a",
                fontSize: "0.78rem",
                fontWeight: 750,
                cursor: "pointer"
              }}
            >
              <span
                style={{
                  width: "14px",
                  height: "10px",
                  background: "#ffffff",
                  borderRadius: "2px",
                  border: "1.8px solid #0f172a",
                  display: "inline-block"
                }}
              />
              FRANCE
            </button>

            {/* Italy Legend */}
            <button
              onClick={() => handleCountryToggle("italy")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                padding: "6px 12px",
                borderRadius: "8px",
                border: "1.5px solid #475569",
                background: selectedCountry === "italy" ? "#cbd5e1" : "#ffffff",
                color: "#0f172a",
                fontSize: "0.78rem",
                fontWeight: 750,
                cursor: "pointer"
              }}
            >
              <span
                style={{
                  width: "14px",
                  height: "10px",
                  background: "radial-gradient(#475569 25%, #ffffff 25%) 0 0/4px 4px",
                  borderRadius: "2px",
                  border: "1px solid #475569",
                  display: "inline-block"
                }}
              />
              ITALY
            </button>
          </div>

          {/* Layout Toggle: Stacked vs Split */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "0.78rem", color: "var(--slate-500)", fontWeight: 700 }}>
              Layout:
            </span>
            <button
              onClick={() => setLayoutMode("stacked")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "5px 10px",
                borderRadius: "8px",
                border: "1px solid var(--border-subtle)",
                background: layoutMode === "stacked" ? "var(--slate-800)" : "#ffffff",
                color: layoutMode === "stacked" ? "#ffffff" : "var(--slate-700)",
                fontSize: "0.74rem",
                fontWeight: 700,
                cursor: "pointer"
              }}
            >
              <Rows size={13} /> Stacked (Exam Order)
            </button>
            <button
              onClick={() => setLayoutMode("split")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "5px 10px",
                borderRadius: "8px",
                border: "1px solid var(--border-subtle)",
                background: layoutMode === "split" ? "var(--slate-800)" : "#ffffff",
                color: layoutMode === "split" ? "#ffffff" : "var(--slate-700)",
                fontSize: "0.74rem",
                fontWeight: 700,
                cursor: "pointer"
              }}
            >
              <Columns size={13} /> Side-by-Side (Widescreen)
            </button>
          </div>
        </div>
      )}

      {/* Hovered Bar Live Indicator Pill */}
      {hoveredBar && (
        <div
          style={{
            background: "#0f172a",
            color: "#ffffff",
            padding: "8px 14px",
            borderRadius: "10px",
            fontSize: "0.86rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
          }}
        >
          <div>
            <strong>{hoveredBar.country}</strong> in <strong>{hoveredBar.year}</strong>:{" "}
            <em>{hoveredBar.format}</em>
          </div>
          <div style={{ fontSize: "1rem", fontWeight: 800, color: "#38bdf8" }}>
            {hoveredBar.value} million euros
          </div>
        </div>
      )}

      {/* Main Bar Charts Container */}
      <div
        style={{
          display: "flex",
          flexDirection: layoutMode === "stacked" ? "column" : "row",
          gap: "16px",
          width: "100%"
        }}
      >
        {renderSingleChart(1997)}
        {renderSingleChart(2007)}
      </div>

      {/* Deep-Dive Interactive Format Inspector */}
      {showDeepDiveCard && (
        <div
          style={{
            background: "#ffffff",
            border: "2px solid var(--border-subtle)",
            borderRadius: "18px",
            padding: "20px 22px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.03)",
            display: "flex",
            flexDirection: "column",
            gap: "14px"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "var(--apple-blue)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Disc size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Interactive Format Inspector: {selectedFormat.name}
                </h4>
                <span className="apple-badge neutral" style={{ fontSize: "0.72rem", marginTop: "3px" }}>
                  Category: {selectedFormat.category}
                </span>
              </div>
            </div>

            {/* Quick Format Switcher Chips */}
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {MUSIC_FORMATS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => handleFormatSelect(f.id)}
                  style={{
                    padding: "5px 10px",
                    borderRadius: "8px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    border: "1px solid var(--border-subtle)",
                    background: selectedFormatId === f.id ? "var(--slate-900)" : "var(--slate-100)",
                    color: selectedFormatId === f.id ? "#ffffff" : "var(--slate-700)",
                    cursor: "pointer"
                  }}
                >
                  {f.shortLabel}
                </button>
              ))}
            </div>
          </div>

          {/* 3 Country Comparative Cards for Selected Format */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
            {COUNTRY_MARKETS.map((country) => {
              const details = selectedFormat.profits[country.id];
              const isContraction = details.y2007 < details.y1997;
              const isGrowth = details.y2007 > details.y1997;

              return (
                <div
                  key={country.id}
                  style={{
                    background: "var(--slate-50)",
                    border: "1.5px solid var(--border-subtle)",
                    borderRadius: "14px",
                    padding: "14px 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)" }}>
                      {country.name}
                    </strong>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        padding: "2px 8px",
                        borderRadius: "6px",
                        background: isGrowth ? "#dcfce7" : isContraction ? "#fee2e2" : "#f1f5f9",
                        color: isGrowth ? "#15803d" : isContraction ? "#b91c1c" : "#475569"
                      }}
                    >
                      {details.change}
                    </span>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "4px" }}>
                    <div>
                      <div style={{ fontSize: "0.72rem", color: "var(--slate-500)", fontWeight: 600 }}>1997</div>
                      <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--slate-800)" }}>
                        {details.y1997} €m
                      </div>
                    </div>
                    <div style={{ color: "var(--slate-400)", fontSize: "1rem" }}>➔</div>
                    <div>
                      <div style={{ fontSize: "0.72rem", color: "var(--slate-500)", fontWeight: 600 }}>2007</div>
                      <div
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: 800,
                          color: isGrowth ? "#16a34a" : isContraction ? "#dc2626" : "var(--slate-800)"
                        }}
                      >
                        {details.y2007} €m
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      background: "#ffffff",
                      borderRadius: "8px",
                      padding: "8px 10px",
                      border: "1px solid var(--border-subtle)",
                      fontSize: "0.78rem",
                      color: "var(--slate-700)",
                      lineHeight: 1.4,
                      marginTop: "4px"
                    }}
                  >
                    <em>Band 9:</em> “{details.band9Citation}”
                  </div>
                </div>
              );
            })}
          </div>

          {/* Band 9 Analytical Commentary Banner */}
          <div
            style={{
              background: "#eff6ff",
              border: "1px solid #bfdbfe",
              borderRadius: "12px",
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}
          >
            <Sparkles size={18} color="#2563eb" style={{ flexShrink: 0 }} />
            <p style={{ margin: 0, fontSize: "0.88rem", color: "#1e40af", lineHeight: 1.5 }}>
              {selectedFormat.band9Phrase}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
