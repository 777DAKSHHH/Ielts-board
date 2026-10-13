import React, { useState } from "react";
import {
  Wind,
  CloudRain,
  Fish,
  RotateCcw,
  Layers,
  Flame,
  Droplets,
  Compass,
  Split,
  Eye,
  Sparkles
} from "lucide-react";
import { PACIFIC_CONDITIONS, COMPARISON_HOTSPOTS, TASK1_DATA } from "../../data/task1Data";

export type DiagramViewMode =
  | "all"
  | "normal"
  | "el_nino"
  | "trade_winds"
  | "upwelling"
  | "rain_drought"
  | "fisheries";

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

const FILTER_DETAILS: Record<
  DiagramViewMode,
  { label: string; icon: React.ReactNode; color: string; description: string; targetHotspotId?: string }
> = {
  all: {
    label: "Side-by-Side Dual System",
    icon: <RotateCcw size={13} />,
    color: "var(--slate-900)",
    description: "Simultaneously compare Normal equilibrium against El Niño disruption across the Pacific Ocean."
  },
  normal: {
    label: "Normal Conditions (Equilibrium)",
    icon: <Droplets size={13} />,
    color: "#0284c7",
    description: "Strong trade winds push warm water west, delivering rain to Australia and fueling nutrient upwelling off Peru."
  },
  el_nino: {
    label: "El Niño Conditions (Disruption)",
    icon: <Flame size={13} />,
    color: "#dc2626",
    description: "Weakened trade winds let warm water surge eastwards, causing Australian drought and Peruvian fishery collapse."
  },
  trade_winds: {
    label: "Trade Winds Dynamic",
    icon: <Wind size={13} />,
    color: "#4f46e5",
    description: "Trade winds blow strongly westward in normal conditions, but weaken significantly during El Niño with reversed upper flows.",
    targetHotspotId: "trade-winds"
  },
  upwelling: {
    label: "Peruvian Upwelling & Nutrients",
    icon: <Layers size={13} />,
    color: "#059669",
    description: "Cold nutrient upwelling flourishes off Peru normally, but is suppressed by the eastward warm pool during El Niño.",
    targetHotspotId: "upwelling-nutrients"
  },
  rain_drought: {
    label: "Precipitation Inversion",
    icon: <CloudRain size={13} />,
    color: "#2563eb",
    description: "Rainfall shifts from West Pacific / Australia (normal) to Central / East Pacific & Peru (El Niño).",
    targetHotspotId: "australia-weather"
  },
  fisheries: {
    label: "Peruvian Fishery Impact",
    icon: <Fish size={13} />,
    color: "#d97706",
    description: "Booming fish stocks under normal nutrient-rich upwelling vs. severe fishery crash during El Niño nutrient starvation.",
    targetHotspotId: "peru-weather-fishery"
  }
};

/**
 * Normal Conditions Studio Image View
 * Renders the user-generated high-definition 3D model with tactile SVG touch hotspot overlays.
 */
const NormalConditionsStudioImage: React.FC<{
  selectedHotspot: string;
  onSelectHotspot: (id: string) => void;
}> = ({ selectedHotspot, onSelectHotspot }) => {
  const isWindsActive = selectedHotspot === "trade-winds";
  const isWarmWaterActive = selectedHotspot === "warm-pool";
  const isUpwellingActive = selectedHotspot === "upwelling-nutrients";
  const isAustraliaActive = selectedHotspot === "australia-weather";
  const isPeruActive = selectedHotspot === "peru-weather-fishery";

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        borderRadius: "14px",
        overflow: "hidden",
        border: "1.5px solid #bae6fd",
        boxShadow: "0 4px 16px rgba(2, 132, 199, 0.08)",
        background: "#0f172a",
        userSelect: "none"
      }}
    >
      <img
        src="materials/ielts-task1-normal-hd.jpg"
        alt="Normal Conditions - High Definition 3D Model"
        style={{ width: "100%", height: "auto", display: "block" }}
      />

      {/* Interactive SVG Touch Hotspot Overlay */}
      <svg
        viewBox="0 0 1024 235"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none"
        }}
      >
        <defs>
          <filter id="studio-glow-blue" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#0284c7" floodOpacity="0.75" />
          </filter>
          <filter id="studio-glow-amber" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#f59e0b" floodOpacity="0.75" />
          </filter>
        </defs>

        {/* 1. Australia Weather & Vegetation (Inset + Storm Cloud) */}
        <g
          pointerEvents="auto"
          cursor="pointer"
          onClick={() => onSelectHotspot("australia-weather")}
          style={{ transition: "all 0.2s ease" }}
        >
          <rect
            x="20"
            y="125"
            width="180"
            height="102"
            rx="8"
            fill={isAustraliaActive ? "rgba(34, 197, 94, 0.18)" : "transparent"}
            stroke={isAustraliaActive ? "#16a34a" : "rgba(34, 197, 94, 0.35)"}
            strokeWidth={isAustraliaActive ? 2.5 : 1.2}
            strokeDasharray={isAustraliaActive ? undefined : "4 3"}
            filter={isAustraliaActive ? "url(#studio-glow-amber)" : undefined}
          />
          <rect
            x="360"
            y="12"
            width="215"
            height="145"
            rx="14"
            fill={isAustraliaActive ? "rgba(2, 132, 199, 0.14)" : "transparent"}
            stroke={isAustraliaActive ? "#0284c7" : "transparent"}
            strokeWidth={2}
            strokeDasharray="4 2"
          />
          {isAustraliaActive && (
            <g transform="translate(110, 134)">
              <rect x="-46" y="-12" width="92" height="20" rx="10" fill="#15803d" />
              <text x="0" y="2" textAnchor="middle" fontSize="10" fontWeight="800" fill="#ffffff">
                LUSH &amp; RAIN
              </text>
            </g>
          )}
        </g>

        {/* 2. Trade Winds & Upper Air Circulation */}
        <g
          pointerEvents="auto"
          cursor="pointer"
          onClick={() => onSelectHotspot("trade-winds")}
          style={{ transition: "all 0.2s ease" }}
        >
          {/* West Pacific Ribbon */}
          <rect
            x="215"
            y="42"
            width="140"
            height="105"
            rx="12"
            fill={isWindsActive ? "rgba(37, 99, 235, 0.16)" : "transparent"}
            stroke={isWindsActive ? "#2563eb" : "rgba(37, 99, 235, 0.35)"}
            strokeWidth={isWindsActive ? 2.5 : 1}
            strokeDasharray={isWindsActive ? undefined : "3 3"}
            filter={isWindsActive ? "url(#studio-glow-blue)" : undefined}
          />
          {/* East Pacific Trade Wind Ribbon */}
          <rect
            x="640"
            y="44"
            width="225"
            height="105"
            rx="12"
            fill={isWindsActive ? "rgba(37, 99, 235, 0.16)" : "transparent"}
            stroke={isWindsActive ? "#2563eb" : "rgba(37, 99, 235, 0.35)"}
            strokeWidth={isWindsActive ? 2.5 : 1}
            strokeDasharray={isWindsActive ? undefined : "3 3"}
            filter={isWindsActive ? "url(#studio-glow-blue)" : undefined}
          />
          {isWindsActive && (
            <g transform="translate(750, 48)">
              <rect x="-56" y="-12" width="112" height="20" rx="10" fill="#1d4ed8" />
              <text x="0" y="2" textAnchor="middle" fontSize="10" fontWeight="800" fill="#ffffff">
                STRONG TRADES
              </text>
            </g>
          )}
        </g>

        {/* 3. Deep Warm Water Pool */}
        <g
          pointerEvents="auto"
          cursor="pointer"
          onClick={() => onSelectHotspot("warm-pool")}
          style={{ transition: "all 0.2s ease" }}
        >
          <polygon
            points="215,128 680,128 680,165 215,225"
            fill={isWarmWaterActive ? "rgba(59, 130, 246, 0.2)" : "transparent"}
            stroke={isWarmWaterActive ? "#38bdf8" : "transparent"}
            strokeWidth={2}
          />
          {isWarmWaterActive && (
            <g transform="translate(350, 160)">
              <rect x="-50" y="-12" width="100" height="20" rx="10" fill="#0284c7" />
              <text x="0" y="2" textAnchor="middle" fontSize="10" fontWeight="800" fill="#ffffff">
                DEEP WARM POOL
              </text>
            </g>
          )}
        </g>

        {/* 4. Cool Water & Nutrient Upwelling */}
        <g
          pointerEvents="auto"
          cursor="pointer"
          onClick={() => onSelectHotspot("upwelling-nutrients")}
          style={{ transition: "all 0.2s ease" }}
        >
          <rect
            x="565"
            y="142"
            width="185"
            height="85"
            rx="8"
            fill={isUpwellingActive ? "rgba(56, 189, 248, 0.18)" : "transparent"}
            stroke={isUpwellingActive ? "#38bdf8" : "rgba(56, 189, 248, 0.35)"}
            strokeWidth={isUpwellingActive ? 2.5 : 1}
            strokeDasharray={isUpwellingActive ? undefined : "3 3"}
            filter={isUpwellingActive ? "url(#studio-glow-blue)" : undefined}
          />
          {isUpwellingActive && (
            <g transform="translate(660, 215)">
              <rect x="-56" y="-12" width="112" height="20" rx="10" fill="#0369a1" />
              <text x="0" y="2" textAnchor="middle" fontSize="10" fontWeight="800" fill="#ffffff">
                UPWELLING ACTIVE ↑
              </text>
            </g>
          )}
        </g>

        {/* 5. Peru Weather & Commercial Fishery */}
        <g
          pointerEvents="auto"
          cursor="pointer"
          onClick={() => onSelectHotspot("peru-weather-fishery")}
          style={{ transition: "all 0.2s ease" }}
        >
          <rect
            x="850"
            y="125"
            width="155"
            height="102"
            rx="8"
            fill={isPeruActive ? "rgba(234, 179, 8, 0.16)" : "transparent"}
            stroke={isPeruActive ? "#eab308" : "rgba(234, 179, 8, 0.4)"}
            strokeWidth={isPeruActive ? 2.5 : 1.2}
            strokeDasharray={isPeruActive ? undefined : "4 3"}
            filter={isPeruActive ? "url(#studio-glow-amber)" : undefined}
          />
          {isPeruActive && (
            <g transform="translate(930, 134)">
              <rect x="-48" y="-12" width="96" height="20" rx="10" fill="#b45309" />
              <text x="0" y="2" textAnchor="middle" fontSize="10" fontWeight="800" fill="#ffffff">
                BOOMING FISH ↑
              </text>
            </g>
          )}
        </g>
      </svg>
    </div>
  );
};

/**
 * El Niño Conditions Studio Image View
 * Renders the user-generated high-definition 3D model with tactile SVG touch hotspot overlays.
 */
const ElNinoConditionsStudioImage: React.FC<{
  selectedHotspot: string;
  onSelectHotspot: (id: string) => void;
}> = ({ selectedHotspot, onSelectHotspot }) => {
  const isWindsActive = selectedHotspot === "trade-winds";
  const isWarmWaterActive = selectedHotspot === "warm-pool";
  const isUpwellingActive = selectedHotspot === "upwelling-nutrients";
  const isAustraliaActive = selectedHotspot === "australia-weather";
  const isPeruActive = selectedHotspot === "peru-weather-fishery";

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        borderRadius: "14px",
        overflow: "hidden",
        border: "1.5px solid #fecaca",
        boxShadow: "0 4px 16px rgba(220, 38, 38, 0.08)",
        background: "#0f172a",
        userSelect: "none"
      }}
    >
      <img
        src="materials/ielts-task1-elnino-hd.jpg"
        alt="El Niño Conditions - High Definition 3D Model"
        style={{ width: "100%", height: "auto", display: "block" }}
      />

      {/* Interactive SVG Touch Hotspot Overlay */}
      <svg
        viewBox="0 0 1024 235"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none"
        }}
      >
        <defs>
          <filter id="studio-glow-red" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#dc2626" floodOpacity="0.75" />
          </filter>
        </defs>

        {/* 1. Australia Weather & Vegetation (Drought Inset + Displaced Cloud) */}
        <g
          pointerEvents="auto"
          cursor="pointer"
          onClick={() => onSelectHotspot("australia-weather")}
          style={{ transition: "all 0.2s ease" }}
        >
          <rect
            x="20"
            y="125"
            width="180"
            height="102"
            rx="8"
            fill={isAustraliaActive ? "rgba(220, 38, 38, 0.18)" : "transparent"}
            stroke={isAustraliaActive ? "#dc2626" : "rgba(220, 38, 38, 0.4)"}
            strokeWidth={isAustraliaActive ? 2.5 : 1.2}
            strokeDasharray={isAustraliaActive ? undefined : "4 3"}
            filter={isAustraliaActive ? "url(#studio-glow-red)" : undefined}
          />
          <rect
            x="365"
            y="12"
            width="215"
            height="145"
            rx="14"
            fill={isAustraliaActive ? "rgba(2, 132, 199, 0.14)" : "transparent"}
            stroke={isAustraliaActive ? "#0284c7" : "transparent"}
            strokeWidth={2}
            strokeDasharray="4 2"
          />
          {isAustraliaActive && (
            <g transform="translate(110, 134)">
              <rect x="-48" y="-12" width="96" height="20" rx="10" fill="#991b1b" />
              <text x="0" y="2" textAnchor="middle" fontSize="10" fontWeight="800" fill="#ffffff">
                SEVERE DROUGHT
              </text>
            </g>
          )}
        </g>

        {/* 2. Trade Winds & Upper Air Circulation */}
        <g
          pointerEvents="auto"
          cursor="pointer"
          onClick={() => onSelectHotspot("trade-winds")}
          style={{ transition: "all 0.2s ease" }}
        >
          {/* West Pacific Strong Winds */}
          <rect
            x="190"
            y="42"
            width="160"
            height="105"
            rx="12"
            fill={isWindsActive ? "rgba(37, 99, 235, 0.16)" : "transparent"}
            stroke={isWindsActive ? "#2563eb" : "rgba(37, 99, 235, 0.35)"}
            strokeWidth={isWindsActive ? 2.5 : 1}
            strokeDasharray={isWindsActive ? undefined : "3 3"}
            filter={isWindsActive ? "url(#studio-glow-red)" : undefined}
          />
          {/* East Pacific Weak Trade Winds */}
          <rect
            x="680"
            y="48"
            width="200"
            height="90"
            rx="12"
            fill={isWindsActive ? "rgba(37, 99, 235, 0.16)" : "transparent"}
            stroke={isWindsActive ? "#2563eb" : "rgba(37, 99, 235, 0.35)"}
            strokeWidth={isWindsActive ? 2.5 : 1}
            strokeDasharray={isWindsActive ? undefined : "3 3"}
            filter={isWindsActive ? "url(#studio-glow-red)" : undefined}
          />
          {isWindsActive && (
            <g transform="translate(780, 52)">
              <rect x="-56" y="-12" width="112" height="20" rx="10" fill="#1d4ed8" />
              <text x="0" y="2" textAnchor="middle" fontSize="10" fontWeight="800" fill="#ffffff">
                WEAK TRADES
              </text>
            </g>
          )}
        </g>

        {/* 3. Warm Water Pushed Eastwards */}
        <g
          pointerEvents="auto"
          cursor="pointer"
          onClick={() => onSelectHotspot("warm-pool")}
          style={{ transition: "all 0.2s ease" }}
        >
          <rect
            x="215"
            y="120"
            width="620"
            height="70"
            rx="8"
            fill={isWarmWaterActive ? "rgba(59, 130, 246, 0.2)" : "transparent"}
            stroke={isWarmWaterActive ? "#38bdf8" : "transparent"}
            strokeWidth={2}
          />
          {isWarmWaterActive && (
            <g transform="translate(420, 195)">
              <rect x="-65" y="-12" width="130" height="20" rx="10" fill="#0284c7" />
              <text x="0" y="2" textAnchor="middle" fontSize="10" fontWeight="800" fill="#ffffff">
                PUSHED EASTWARDS →
              </text>
            </g>
          )}
        </g>

        {/* 4. Suppressed Upwelling & Poor Nutrients */}
        <g
          pointerEvents="auto"
          cursor="pointer"
          onClick={() => onSelectHotspot("upwelling-nutrients")}
          style={{ transition: "all 0.2s ease" }}
        >
          <rect
            x="640"
            y="170"
            width="200"
            height="60"
            rx="8"
            fill={isUpwellingActive ? "rgba(100, 116, 139, 0.25)" : "transparent"}
            stroke={isUpwellingActive ? "#64748b" : "rgba(100, 116, 139, 0.35)"}
            strokeWidth={isUpwellingActive ? 2.5 : 1}
            strokeDasharray={isUpwellingActive ? undefined : "3 3"}
          />
          {isUpwellingActive && (
            <g transform="translate(740, 218)">
              <rect x="-56" y="-12" width="112" height="20" rx="10" fill="#475569" />
              <text x="0" y="2" textAnchor="middle" fontSize="10" fontWeight="800" fill="#ffffff">
                POOR NUTRIENTS
              </text>
            </g>
          )}
        </g>

        {/* 5. Peru Coastal Rains & Collapsed Fishery */}
        <g
          pointerEvents="auto"
          cursor="pointer"
          onClick={() => onSelectHotspot("peru-weather-fishery")}
          style={{ transition: "all 0.2s ease" }}
        >
          <rect
            x="850"
            y="125"
            width="155"
            height="102"
            rx="8"
            fill={isPeruActive ? "rgba(220, 38, 38, 0.16)" : "transparent"}
            stroke={isPeruActive ? "#dc2626" : "rgba(220, 38, 38, 0.4)"}
            strokeWidth={isPeruActive ? 2.5 : 1.2}
            strokeDasharray={isPeruActive ? undefined : "4 3"}
            filter={isPeruActive ? "url(#studio-glow-red)" : undefined}
          />
          {isPeruActive && (
            <g transform="translate(930, 134)">
              <rect x="-56" y="-12" width="112" height="20" rx="10" fill="#991b1b" />
              <text x="0" y="2" textAnchor="middle" fontSize="10" fontWeight="800" fill="#ffffff">
                FISHERY COLLAPSE ↓
              </text>
            </g>
          )}
        </g>
      </svg>
    </div>
  );
};

/**
 * Normal Conditions 3D Isometric SVG
 * 100% faithful to the official IELTS exam paper / student pamphlet diagram
 */
const NormalConditionsIsometricSvg: React.FC<{
  selectedHotspot: string;
  onSelectHotspot: (id: string) => void;
}> = ({ selectedHotspot, onSelectHotspot }) => {
  const isWindsActive = selectedHotspot === "trade-winds";
  const isWarmWaterActive = selectedHotspot === "warm-pool";
  const isUpwellingActive = selectedHotspot === "upwelling-nutrients";
  const isAustraliaActive = selectedHotspot === "australia-weather";
  const isPeruActive = selectedHotspot === "peru-weather-fishery";

  return (
    <svg
      viewBox="0 0 880 430"
      width="100%"
      height="auto"
      style={{ display: "block", background: "#f8fafc", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}
    >
      <defs>
        <linearGradient id="ribbon-grad-norm" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bfdbfe" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
        <linearGradient id="ribbon-dark-norm" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        <linearGradient id="normal-warm-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#bfdbfe" />
          <stop offset="60%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>
        <linearGradient id="normal-cool-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
      </defs>

      {/* Title */}
      <text x="30" y="32" fontSize="18" fontWeight="800" fill="#0f172a" letterSpacing="-0.01em">
        Normal Conditions
      </text>

      {/* West Pacific & Weak Winds 3D Ribbon Loop */}
      <g
        onClick={() => onSelectHotspot("trade-winds")}
        style={{ cursor: "pointer" }}
        filter={isWindsActive ? "drop-shadow(0 0 6px rgba(59,130,246,0.6))" : undefined}
      >
        <text x="125" y="65" fontSize="15" fontWeight="800" fill="#0f172a" textAnchor="middle">
          West
        </text>
        <text x="125" y="83" fontSize="15" fontWeight="800" fill="#0f172a" textAnchor="middle">
          Pacific
        </text>

        {/* Lower incoming ribbon from far left down-right towards ocean surface */}
        <path
          d="M 75,138 L 70,153 C 120,165 185,172 250,168 L 242,154 C 180,158 122,150 75,138 Z"
          fill="url(#ribbon-grad-norm)"
          stroke="#1e293b"
          strokeWidth="1.4"
        />
        {/* 3D Tubular mouth entrance on ribbon */}
        <ellipse cx="72" cy="146" rx="5" ry="9" transform="rotate(-15 72 146)" fill="#1e40af" stroke="#1e293b" strokeWidth="1.4" />
        <ellipse cx="72" cy="146" rx="3" ry="6" transform="rotate(-15 72 146)" fill="#0f172a" />
        {/* 180-deg inner fold */}
        <path
          d="M 250,168 C 270,166 280,152 268,138 C 260,130 248,132 238,138 L 242,154 C 250,148 258,148 260,152 C 262,156 256,164 250,168 Z"
          fill="url(#ribbon-dark-norm)"
          stroke="#1e293b"
          strokeWidth="1.4"
        />
        {/* Upper returning ribbon heading UP-LEFT */}
        <path
          d="M 238,138 C 215,150 182,130 168,115 L 180,102 C 192,118 220,135 248,124 L 238,138 Z"
          fill="url(#ribbon-grad-norm)"
          stroke="#1e293b"
          strokeWidth="1.4"
        />
        {/* Arrowhead pointing UP-LEFT (North-West) */}
        <path
          d="M 180,88 L 132,96 L 160,134 L 172,116 L 180,88 Z"
          fill="url(#ribbon-grad-norm)"
          stroke="#1e293b"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <text x="185" y="145" fontSize="13" fontWeight="700" fill="#1e293b" textAnchor="middle">
          weak
        </text>
        <text x="185" y="161" fontSize="13" fontWeight="700" fill="#1e293b" textAnchor="middle">
          winds
        </text>
      </g>

      {/* Storm Clouds & Rain */}
      <g
        onClick={() => onSelectHotspot("australia-weather")}
        style={{ cursor: "pointer" }}
        filter={isAustraliaActive ? "drop-shadow(0 0 6px rgba(37,99,235,0.4))" : undefined}
      >
        <text x="380" y="46" fontSize="14" fontWeight="700" fill="#0f172a" textAnchor="middle">
          storm
        </text>
        <text x="380" y="62" fontSize="14" fontWeight="700" fill="#0f172a" textAnchor="middle">
          clouds
        </text>

        {/* Fluffy Cumulus Cloud Shape */}
        <path
          d="M 310,115 C 290,115 280,95 300,80 C 305,60 335,55 350,70 C 365,55 405,55 420,75 C 440,75 455,90 445,110 C 460,120 450,140 430,140 L 325,140 C 305,140 300,125 310,115 Z"
          fill="#cbd5e1"
          stroke="#64748b"
          strokeWidth="1.5"
          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.08))"
        />
        <path
          d="M 330,125 C 320,125 315,112 328,102 C 330,90 350,85 360,95 C 370,85 395,85 405,98 C 418,98 425,108 418,122 C 428,128 420,138 408,138 L 340,138 Z"
          fill="#e2e8f0"
        />

        {/* Rain Streaks */}
        <g stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3 3">
          <line x1="330" y1="145" x2="320" y2="185" />
          <line x1="345" y1="145" x2="335" y2="185" />
          <line x1="360" y1="145" x2="350" y2="185" />
          <line x1="375" y1="145" x2="365" y2="185" />
          <line x1="390" y1="145" x2="380" y2="185" />
          <line x1="405" y1="145" x2="395" y2="185" />
        </g>
        <text x="425" y="165" fontSize="13" fontWeight="700" fill="#0284c7">
          rain
        </text>
      </g>

      {/* East Pacific & Strong Trade Winds 3D Ribbon Loop */}
      <g
        onClick={() => onSelectHotspot("trade-winds")}
        style={{ cursor: "pointer" }}
        filter={isWindsActive ? "drop-shadow(0 0 6px rgba(59,130,246,0.6))" : undefined}
      >
        <text x="745" y="65" fontSize="15" fontWeight="800" fill="#0f172a" textAnchor="middle">
          East
        </text>
        <text x="745" y="83" fontSize="15" fontWeight="800" fill="#0f172a" textAnchor="middle">
          Pacific
        </text>

        {/* Lower incoming band from lower right across ocean surface */}
        <path
          d="M 800,225 L 780,242 C 705,210 615,178 548,162 L 564,142 C 630,158 720,192 800,225 Z"
          fill="url(#ribbon-grad-norm)"
          stroke="#1e293b"
          strokeWidth="1.5"
        />
        {/* 3D Tubular mouth entrance on ribbon */}
        <ellipse cx="790" cy="233" rx="10" ry="16" transform="rotate(-30 790 233)" fill="#1d4ed8" stroke="#1e293b" strokeWidth="1.5" />
        <ellipse cx="790" cy="233" rx="6" ry="11" transform="rotate(-30 790 233)" fill="#0f172a" />
        {/* 180-deg inner fold */}
        <path
          d="M 548,162 C 528,156 518,140 532,122 C 542,110 560,114 574,122 L 564,142 C 554,136 544,140 542,148 C 540,154 544,160 548,162 Z"
          fill="url(#ribbon-dark-norm)"
          stroke="#1e293b"
          strokeWidth="1.5"
        />
        {/* Upper returning band heading UP-RIGHT */}
        <path
          d="M 574,122 C 602,136 642,124 672,112 L 666,94 C 636,108 600,118 560,106 L 574,122 Z"
          fill="url(#ribbon-grad-norm)"
          stroke="#1e293b"
          strokeWidth="1.5"
        />
        {/* Arrowhead pointing UP-RIGHT (North-East) */}
        <path
          d="M 654,78 L 724,92 L 674,128 L 668,111 L 654,78 Z"
          fill="url(#ribbon-grad-norm)"
          stroke="#1e293b"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <text x="705" y="128" fontSize="13" fontWeight="700" fill="#1e293b" textAnchor="middle">
          strong
        </text>
        <text x="705" y="145" fontSize="13" fontWeight="700" fill="#1e293b" textAnchor="middle">
          trade
        </text>
        <text x="705" y="162" fontSize="13" fontWeight="700" fill="#1e293b" textAnchor="middle">
          winds
        </text>
      </g>

      {/* 3D ISOMETRIC OCEAN CUTAWAY BLOCK */}

      {/* Australia 3D Coastal Headland & Beach (Left Coast) */}
      <g>
        {/* Rocky cliff base */}
        <polygon
          points="130,205 220,185 220,285 130,250"
          fill="#78350f"
          stroke="#451a03"
          strokeWidth="1.2"
          opacity="0.9"
        />
        {/* Coastal ridge & soil */}
        <polygon
          points="130,205 220,185 270,150 185,168"
          fill="#a16207"
          stroke="#78350f"
          strokeWidth="1.2"
        />
        {/* Sandy beach border */}
        <polygon
          points="216,185 220,185 220,285 216,282"
          fill="#fde047"
        />
        {/* Palm tree cluster matching generated illustration */}
        <g transform="translate(142, 148) scale(0.68)">
          <path d="M 22,46 Q 26,24 16,0 Q 25,24 24,46 Z" fill="#78350f" />
          <path d="M 16,0 Q -10,-12 -22,8 M 16,0 Q 2,-22 16,-26 M 16,0 Q 30,-22 46,-6 M 16,0 Q 38,6 42,22" stroke="#16a34a" strokeWidth="3.2" fill="none" strokeLinecap="round" />
        </g>
        <g transform="translate(178, 138) scale(0.56)">
          <path d="M 22,46 Q 16,24 26,0 Q 18,24 20,46 Z" fill="#78350f" />
          <path d="M 26,0 Q 2,-12 -8,8 M 26,0 Q 16,-22 26,-26 M 26,0 Q 42,-22 52,-6 M 26,0 Q 48,6 52,22" stroke="#15803d" strokeWidth="3.2" fill="none" strokeLinecap="round" />
        </g>
      </g>

      {/* Peru 3D Coastal Shoreline & Headland (Right Coast) */}
      <g>
        <polygon
          points="640,185 710,145 745,155 675,195"
          fill="#ca8a04"
          stroke="#854d0e"
          strokeWidth="1.2"
        />
        <polygon
          points="675,195 745,155 745,210 675,250"
          fill="#78350f"
          stroke="#451a03"
          strokeWidth="1.2"
          opacity="0.9"
        />
        <polygon
          points="640,185 644,185 679,195 675,195"
          fill="#fde047"
        />
        <ellipse cx="718" cy="154" rx="14" ry="7" fill="#15803d" />
      </g>

      {/* Top Ocean Surface Face */}
      <polygon
        points="220,185 640,185 710,145 290,145"
        fill="url(#normal-warm-grad)"
        stroke="#1e293b"
        strokeWidth="1.5"
      />
      {/* Wave lines on surface */}
      <path
        d="M 260,170 Q 280,165 300,170 T 340,170 M 380,160 Q 400,155 420,160 T 460,160 M 520,165 Q 540,160 560,165 T 600,165"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="1"
        opacity="0.6"
      />

      {/* Front Ocean Cross-Section Face */}
      <polygon
        points="220,185 640,185 640,345 220,310"
        fill="#f1f5f9"
        stroke="#1e293b"
        strokeWidth="1.5"
      />

      {/* Right Side Cutaway Depth Face */}
      <polygon
        points="640,185 710,145 710,305 640,345"
        fill="#cbd5e1"
        stroke="#1e293b"
        strokeWidth="1.5"
      />

      {/* Deep Warm Water Pool (West Pacific side) + Westward Arrow */}
      <g onClick={() => onSelectHotspot("warm-pool")} style={{ cursor: "pointer" }}>
        <path
          d="M 220,185 L 640,185 L 640,215 C 540,225 440,285 220,290 Z"
          fill="#93c5fd"
          stroke="#2563eb"
          strokeWidth={isWarmWaterActive ? 2.5 : 1}
        />
        {/* Horizontal Arrow pointing WEST */}
        <g fill="#2563eb" opacity="0.55">
          <rect x="285" y="223" width="135" height="12" rx="1" />
          <polygon points="255,229 287,216 287,242" />
        </g>
        <text x="305" y="256" fontSize="14" fontWeight="800" fill="#1e293b">
          warm water
        </text>
      </g>

      {/* Cool Water & Rich Nutrients Layer + Upward Vector Arrow */}
      <g onClick={() => onSelectHotspot("upwelling-nutrients")} style={{ cursor: "pointer" }}>
        <path
          d="M 220,290 C 440,285 540,225 640,215 L 640,345 L 220,310 Z"
          fill="url(#normal-cool-grad)"
          stroke="#1e293b"
          strokeWidth={isUpwellingActive ? 2.5 : 1}
          opacity="0.9"
        />

        {/* Vertical Upward Arrow for Upwelling */}
        <g fill="#60a5fa" opacity="0.75">
          <rect x="618" y="255" width="14" height="65" rx="1" />
          <polygon points="625,235 611,257 639,257" />
        </g>

        {/* Text inside East ocean: cool water and rich nutrients */}
        <text x="555" y="278" fontSize="13" fontWeight="800" fill="#ffffff" textAnchor="middle">
          cool water
        </text>
        <text x="555" y="294" fontSize="13" fontWeight="800" fill="#ffffff" textAnchor="middle">
          and rich
        </text>
        <text x="555" y="310" fontSize="13" fontWeight="800" fill="#ffffff" textAnchor="middle">
          nutrients
        </text>
      </g>

      {/* COASTAL INSET BOXES */}

      {/* AUSTRALIA INSET (Left: 2 Rain Clouds + 3 Lush Grass Clumps) */}
      <g
        onClick={() => onSelectHotspot("australia-weather")}
        style={{ cursor: "pointer" }}
        transform="translate(45, 220)"
      >
        <rect
          x="0"
          y="0"
          width="135"
          height="95"
          fill="#ffffff"
          stroke="#0f172a"
          strokeWidth={isAustraliaActive ? 2.5 : 1.5}
          rx="4"
        />
        <text x="8" y="18" fontSize="13" fontWeight="800" fill="#0f172a">
          Australia
        </text>

        {/* Cloud 1 (Left) */}
        <path
          d="M 20,38 C 15,38 10,30 18,24 C 22,17 36,17 42,23 C 50,21 56,28 52,36 C 54,40 48,42 42,40 Z"
          fill="#94a3b8"
        />
        <g stroke="#0284c7" strokeWidth="1" strokeDasharray="2 2">
          <line x1="22" y1="43" x2="18" y2="56" />
          <line x1="28" y1="43" x2="24" y2="56" />
          <line x1="34" y1="43" x2="30" y2="56" />
          <line x1="40" y1="43" x2="36" y2="56" />
        </g>

        {/* Cloud 2 (Right) */}
        <path
          d="M 75,34 C 71,34 68,28 73,23 C 76,18 86,18 90,22 C 96,21 100,26 97,32 C 99,35 94,37 90,35 Z"
          fill="#94a3b8"
        />
        <g stroke="#0284c7" strokeWidth="1" strokeDasharray="2 2">
          <line x1="76" y1="39" x2="73" y2="50" />
          <line x1="82" y1="39" x2="79" y2="50" />
          <line x1="88" y1="39" x2="85" y2="50" />
        </g>

        {/* 3 Clumps of Lush Spiky Green Grass */}
        <g stroke="#15803d" strokeWidth="1.8" fill="none">
          <path d="M 18,82 Q 13,68 8,66 M 18,82 Q 18,66 20,63 M 18,82 Q 22,70 28,68 M 18,82 L 18,63" />
          <path d="M 65,82 Q 58,68 52,66 M 65,82 Q 65,66 67,63 M 65,82 Q 72,70 78,68 M 65,82 L 65,63" />
          <path d="M 110,82 Q 103,68 97,66 M 110,82 Q 110,66 112,63 M 110,82 Q 117,70 123,68 M 110,82 L 110,63" />
        </g>
        <line x1="5" y1="82" x2="130" y2="82" stroke="#475569" strokeWidth="1" />
      </g>

      {/* PERU INSET (Right: Sun + 2 Fish + Upward Arrow ↑) */}
      <g
        onClick={() => onSelectHotspot("peru-weather-fishery")}
        style={{ cursor: "pointer" }}
        transform="translate(700, 220)"
      >
        <rect
          x="0"
          y="0"
          width="135"
          height="95"
          fill="#ffffff"
          stroke="#0f172a"
          strokeWidth={isPeruActive ? 2.5 : 1.5}
          rx="4"
        />
        <text x="8" y="18" fontSize="13" fontWeight="800" fill="#0f172a">
          Peru
        </text>

        {/* Shining Sun in Top Right */}
        <circle cx="105" cy="28" r="10" fill="#eab308" />
        <g stroke="#eab308" strokeWidth="1.5">
          <line x1="105" y1="12" x2="105" y2="7" />
          <line x1="105" y1="44" x2="105" y2="49" />
          <line x1="89" y1="28" x2="84" y2="28" />
          <line x1="121" y1="28" x2="126" y2="28" />
          <line x1="94" y1="17" x2="90" y2="13" />
          <line x1="116" y1="39" x2="120" y2="43" />
          <line x1="94" y1="39" x2="90" y2="43" />
          <line x1="116" y1="17" x2="120" y2="13" />
        </g>

        {/* Vertical Arrow pointing UP (↑) */}
        <line x1="18" y1="76" x2="18" y2="52" stroke="#0f172a" strokeWidth="2.5" />
        <path d="M 13,60 L 18,50 L 23,60" stroke="#0f172a" strokeWidth="2" fill="none" strokeLinejoin="round" />

        {/* 2 Swimming Fish */}
        <g transform="translate(35, 46)">
          <path
            d="M 0,6 Q 18,-2 32,6 Q 40,3 46,0 L 44,6 L 46,12 Q 40,9 32,6 Q 18,14 0,6 Z"
            fill="#64748b"
            stroke="#1e293b"
            strokeWidth="1"
          />
          <circle cx="8" cy="5" r="1.5" fill="#ffffff" />
        </g>
        <g transform="translate(42, 66)">
          <path
            d="M 0,6 Q 18,-2 32,6 Q 40,3 46,0 L 44,6 L 46,12 Q 40,9 32,6 Q 18,14 0,6 Z"
            fill="#64748b"
            stroke="#1e293b"
            strokeWidth="1"
          />
          <circle cx="8" cy="5" r="1.5" fill="#ffffff" />
        </g>
      </g>
    </svg>
  );
};

/**
 * El Niño Conditions 3D Isometric SVG
 * 100% faithful to the official IELTS exam paper / student pamphlet diagram
 */
const ElNinoConditionsIsometricSvg: React.FC<{
  selectedHotspot: string;
  onSelectHotspot: (id: string) => void;
}> = ({ selectedHotspot, onSelectHotspot }) => {
  const isWindsActive = selectedHotspot === "trade-winds";
  const isWarmWaterActive = selectedHotspot === "warm-pool";
  const isUpwellingActive = selectedHotspot === "upwelling-nutrients";
  const isAustraliaActive = selectedHotspot === "australia-weather";
  const isPeruActive = selectedHotspot === "peru-weather-fishery";

  return (
    <svg
      viewBox="0 0 880 430"
      width="100%"
      height="auto"
      style={{ display: "block", background: "#f8fafc", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}
    >
      <defs>
        <linearGradient id="ribbon-grad-el" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bfdbfe" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
        <linearGradient id="ribbon-dark-el" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        <linearGradient id="elnino-warm-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#bfdbfe" />
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>
      </defs>

      {/* Title */}
      <text x="30" y="32" fontSize="18" fontWeight="800" fill="#0f172a" letterSpacing="-0.01em">
        El Niño Conditions
      </text>

      {/* West Pacific & Strong Winds 3D Ribbon Loop (Wide & Bold) */}
      <g
        onClick={() => onSelectHotspot("trade-winds")}
        style={{ cursor: "pointer" }}
        filter={isWindsActive ? "drop-shadow(0 0 6px rgba(59,130,246,0.6))" : undefined}
      >
        <text x="125" y="65" fontSize="15" fontWeight="800" fill="#0f172a" textAnchor="middle">
          West
        </text>
        <text x="125" y="83" fontSize="15" fontWeight="800" fill="#0f172a" textAnchor="middle">
          Pacific
        </text>

        {/* Broad lower incoming band */}
        <path
          d="M 60,160 L 45,192 C 105,210 185,220 262,210 L 250,178 C 180,186 115,178 60,160 Z"
          fill="url(#ribbon-grad-el)"
          stroke="#1e293b"
          strokeWidth="1.5"
        />
        {/* 3D Tubular mouth entrance on ribbon */}
        <ellipse cx="52" cy="176" rx="9" ry="18" transform="rotate(-20 52 176)" fill="#1d4ed8" stroke="#1e293b" strokeWidth="1.5" />
        <ellipse cx="52" cy="176" rx="5" ry="13" transform="rotate(-20 52 176)" fill="#0f172a" />
        {/* 180-deg inner fold */}
        <path
          d="M 262,210 C 290,206 302,182 280,160 C 268,148 248,150 234,162 L 250,178 C 262,170 272,172 274,180 C 276,188 268,204 262,210 Z"
          fill="url(#ribbon-dark-el)"
          stroke="#1e293b"
          strokeWidth="1.5"
        />
        {/* Broad upper returning band heading UP-LEFT */}
        <path
          d="M 234,162 C 200,182 158,148 134,126 L 155,106 C 175,126 210,154 248,136 L 234,162 Z"
          fill="url(#ribbon-grad-el)"
          stroke="#1e293b"
          strokeWidth="1.5"
        />
        {/* Large 3D Arrowhead pointing UP-LEFT (North-West) */}
        <path
          d="M 152,84 L 95,94 L 130,144 L 145,122 L 152,84 Z"
          fill="url(#ribbon-grad-el)"
          stroke="#1e293b"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <text x="140" y="210" fontSize="13.5" fontWeight="800" fill="#1e293b" textAnchor="middle">
          strong
        </text>
        <text x="140" y="226" fontSize="13.5" fontWeight="800" fill="#1e293b" textAnchor="middle">
          winds
        </text>
      </g>

      {/* Displaced Storm Clouds & Rain in Central / East Basin */}
      <g
        onClick={() => onSelectHotspot("australia-weather")}
        style={{ cursor: "pointer" }}
        filter={isAustraliaActive ? "drop-shadow(0 0 6px rgba(37,99,235,0.4))" : undefined}
      >
        <text x="495" y="46" fontSize="14" fontWeight="700" fill="#0f172a" textAnchor="middle">
          storm
        </text>
        <text x="495" y="62" fontSize="14" fontWeight="700" fill="#0f172a" textAnchor="middle">
          clouds
        </text>

        {/* Cumulus Cloud Shape shifted eastward */}
        <path
          d="M 425,115 C 405,115 395,95 415,80 C 420,60 450,55 465,70 C 480,55 520,55 535,75 C 555,75 570,90 560,110 C 575,120 565,140 545,140 L 440,140 C 420,140 415,125 425,115 Z"
          fill="#cbd5e1"
          stroke="#64748b"
          strokeWidth="1.5"
          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.08))"
        />
        <path
          d="M 445,125 C 435,125 430,112 443,102 C 445,90 465,85 475,95 C 485,85 510,85 520,98 C 533,98 540,108 533,122 C 543,128 535,138 523,138 L 455,138 Z"
          fill="#e2e8f0"
        />

        {/* Rain Streaks */}
        <g stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3 3">
          <line x1="445" y1="145" x2="435" y2="185" />
          <line x1="460" y1="145" x2="450" y2="185" />
          <line x1="475" y1="145" x2="465" y2="185" />
          <line x1="490" y1="145" x2="480" y2="185" />
          <line x1="505" y1="145" x2="495" y2="185" />
          <line x1="520" y1="145" x2="510" y2="185" />
        </g>
        <text x="545" y="165" fontSize="13" fontWeight="700" fill="#0284c7">
          rain
        </text>
      </g>

      {/* East Pacific & Weak Trade Winds 3D Ribbon Loop (Thin & Slender) */}
      <g
        onClick={() => onSelectHotspot("trade-winds")}
        style={{ cursor: "pointer" }}
        filter={isWindsActive ? "drop-shadow(0 0 6px rgba(59,130,246,0.6))" : undefined}
      >
        <text x="745" y="65" fontSize="15" fontWeight="800" fill="#0f172a" textAnchor="middle">
          East
        </text>
        <text x="745" y="83" fontSize="15" fontWeight="800" fill="#0f172a" textAnchor="middle">
          Pacific
        </text>

        {/* Thin lower incoming band */}
        <path
          d="M 810,230 L 800,240 C 732,210 648,180 582,166 L 590,154 C 652,168 738,198 810,230 Z"
          fill="url(#ribbon-grad-el)"
          stroke="#1e293b"
          strokeWidth="1.2"
        />
        {/* 3D Tubular mouth entrance on ribbon */}
        <ellipse cx="805" cy="235" rx="6" ry="12" transform="rotate(-30 805 235)" fill="#1d4ed8" stroke="#1e293b" strokeWidth="1.2" />
        <ellipse cx="805" cy="235" rx="3.5" ry="8" transform="rotate(-30 805 235)" fill="#0f172a" />
        {/* 180-deg inner fold */}
        <path
          d="M 582,166 C 566,162 558,150 568,136 C 576,126 590,130 600,136 L 590,154 C 582,148 576,150 574,156 C 572,160 576,164 582,166 Z"
          fill="url(#ribbon-dark-el)"
          stroke="#1e293b"
          strokeWidth="1.2"
        />
        {/* Thin upper returning band heading UP-RIGHT */}
        <path
          d="M 600,136 C 624,148 662,136 700,124 L 696,112 C 660,124 624,134 592,124 L 600,136 Z"
          fill="url(#ribbon-grad-el)"
          stroke="#1e293b"
          strokeWidth="1.2"
        />
        {/* Arrowhead pointing UP-RIGHT (North-East) */}
        <path
          d="M 688,100 L 746,112 L 704,138 L 700,124 L 688,100 Z"
          fill="url(#ribbon-grad-el)"
          stroke="#1e293b"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <text x="705" y="146" fontSize="13" fontWeight="700" fill="#1e293b" textAnchor="middle">
          weak
        </text>
        <text x="705" y="162" fontSize="13" fontWeight="700" fill="#1e293b" textAnchor="middle">
          trade
        </text>
        <text x="705" y="178" fontSize="13" fontWeight="700" fill="#1e293b" textAnchor="middle">
          winds
        </text>
      </g>

      {/* 3D ISOMETRIC OCEAN CUTAWAY BLOCK */}

      {/* Australia 3D Coastal Arid Cliff (Left Coast) */}
      <g>
        <polygon
          points="130,205 220,185 220,285 130,250"
          fill="#78350f"
          stroke="#451a03"
          strokeWidth="1.2"
          opacity="0.9"
        />
        <polygon
          points="130,205 220,185 270,150 185,168"
          fill="#92400e"
          stroke="#78350f"
          strokeWidth="1.2"
        />
        <polygon
          points="216,185 220,185 220,285 216,282"
          fill="#d97706"
        />
        {/* Parched Withered Stumps on Cliff */}
        <path d="M 155,168 L 160,158 M 160,158 L 165,155 M 160,158 L 158,152" stroke="#451a03" strokeWidth="1.6" fill="none" />
        <path d="M 190,155 L 195,145 M 195,145 L 200,142 M 195,145 L 193,139" stroke="#451a03" strokeWidth="1.6" fill="none" />
      </g>

      {/* Peru 3D Coastal Shoreline & Headland (Right Coast) */}
      <g>
        <polygon
          points="640,185 710,145 745,155 675,195"
          fill="#b45309"
          stroke="#78350f"
          strokeWidth="1.2"
        />
        <polygon
          points="675,195 745,155 745,210 675,250"
          fill="#78350f"
          stroke="#451a03"
          strokeWidth="1.2"
          opacity="0.9"
        />
        <polygon
          points="640,185 644,185 679,195 675,195"
          fill="#ca8a04"
        />
      </g>

      {/* Top Ocean Surface Face */}
      <polygon
        points="220,185 640,185 710,145 290,145"
        fill="url(#elnino-warm-grad)"
        stroke="#1e293b"
        strokeWidth="1.5"
      />

      {/* Front Ocean Cross-Section Face */}
      <polygon
        points="220,185 640,185 640,345 220,310"
        fill="#f1f5f9"
        stroke="#1e293b"
        strokeWidth="1.5"
      />

      {/* Right Cutaway Depth Face */}
      <polygon
        points="640,185 710,145 710,305 640,345"
        fill="#cbd5e1"
        stroke="#1e293b"
        strokeWidth="1.5"
      />

      {/* Horizontal Warm Water Layer Across Surface + Eastward Arrow */}
      <g onClick={() => onSelectHotspot("warm-pool")} style={{ cursor: "pointer" }}>
        <polygon
          points="220,185 640,185 640,260 220,245"
          fill="#93c5fd"
          stroke="#2563eb"
          strokeWidth={isWarmWaterActive ? 2.5 : 1}
        />

        {/* Wide Horizontal Arrow: warm water pushed eastwards */}
        <g fill="#2563eb" opacity="0.55">
          <rect x="260" y="230" width="185" height="12" rx="1" />
          <polygon points="475,236 445,223 445,249" />
        </g>
        <text x="265" y="208" fontSize="14" fontWeight="800" fill="#0f172a">
          warm water
        </text>
        <text x="265" y="224" fontSize="14" fontWeight="800" fill="#0f172a">
          pushed eastwards
        </text>
      </g>

      {/* Flattened Deep Cool Water Layer */}
      <g onClick={() => onSelectHotspot("upwelling-nutrients")} style={{ cursor: "pointer" }}>
        <polygon
          points="220,245 640,260 640,345 220,310"
          fill="#64748b"
          stroke="#1e293b"
          strokeWidth={isUpwellingActive ? 2.5 : 1}
          opacity="0.9"
        />
        <text x="510" y="300" fontSize="14" fontWeight="800" fill="#ffffff">
          cool water
        </text>

        {/* Pointer Line: poor nutrients */}
        <line x1="675" y1="260" x2="710" y2="335" stroke="#0f172a" strokeWidth="1.8" />
        <text x="700" y="355" fontSize="14" fontWeight="800" fill="#0f172a">
          poor
        </text>
        <text x="700" y="371" fontSize="14" fontWeight="800" fill="#0f172a">
          nutrients
        </text>
      </g>

      {/* COASTAL INSET BOXES */}

      {/* AUSTRALIA INSET (Left: Drought & Blazing Sun) */}
      <g
        onClick={() => onSelectHotspot("australia-weather")}
        style={{ cursor: "pointer" }}
        transform="translate(45, 220)"
      >
        <rect
          x="0"
          y="0"
          width="135"
          height="95"
          fill="#ffffff"
          stroke="#0f172a"
          strokeWidth={isAustraliaActive ? 2.5 : 1.5}
          rx="4"
        />
        <text x="8" y="18" fontSize="13" fontWeight="800" fill="#0f172a">
          Australia
        </text>

        {/* Blazing Sun in Upper-Right */}
        <circle cx="105" cy="28" r="12" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
        <g stroke="#d97706" strokeWidth="1.8">
          <line x1="105" y1="10" x2="105" y2="4" />
          <line x1="105" y1="46" x2="105" y2="52" />
          <line x1="87" y1="28" x2="81" y2="28" />
          <line x1="123" y1="28" x2="129" y2="28" />
          <line x1="92" y1="15" x2="87" y2="10" />
          <line x1="118" y1="41" x2="123" y2="46" />
          <line x1="92" y1="41" x2="87" y2="46" />
          <line x1="118" y1="15" x2="123" y2="10" />
        </g>

        {/* Parched Cracked Ground Line */}
        <line x1="5" y1="84" x2="130" y2="84" stroke="#78350f" strokeWidth="1.5" />
        {/* 3 Shriveled Dead Withered Stumps/Twigs */}
        <path d="M 22,84 L 26,76 M 26,76 L 30,73 M 26,76 L 24,70" stroke="#78350f" strokeWidth="1.5" fill="none" />
        <path d="M 65,84 L 68,77 M 68,77 L 72,74 M 68,77 L 66,71" stroke="#78350f" strokeWidth="1.5" fill="none" />
        <path d="M 105,84 L 108,76 M 108,76 L 112,73 M 108,76 L 106,70" stroke="#78350f" strokeWidth="1.5" fill="none" />
      </g>

      {/* PERU INSET (Right: Storm Cloud & 1 Solitary Fish & Downward Arrow ↓) */}
      <g
        onClick={() => onSelectHotspot("peru-weather-fishery")}
        style={{ cursor: "pointer" }}
        transform="translate(700, 220)"
      >
        <rect
          x="0"
          y="0"
          width="135"
          height="95"
          fill="#ffffff"
          stroke="#0f172a"
          strokeWidth={isPeruActive ? 2.5 : 1.5}
          rx="4"
        />
        <text x="8" y="18" fontSize="13" fontWeight="800" fill="#0f172a">
          Peru
        </text>

        {/* Peru: Rain Cloud & Rain */}
        <path
          d="M 80,36 C 75,36 70,29 77,23 C 81,17 93,17 98,22 C 105,20 111,27 107,34 C 109,38 104,40 98,38 Z"
          fill="#94a3b8"
        />
        <g stroke="#0284c7" strokeWidth="1" strokeDasharray="2 2">
          <line x1="82" y1="41" x2="78" y2="52" />
          <line x1="88" y1="41" x2="84" y2="52" />
          <line x1="94" y1="41" x2="90" y2="52" />
          <line x1="100" y1="41" x2="96" y2="52" />
        </g>

        {/* Downward Arrow ↓ indicating collapsed fishery */}
        <line x1="18" y1="54" x2="18" y2="78" stroke="#0f172a" strokeWidth="2.5" />
        <path d="M 13,70 L 18,80 L 23,70" stroke="#0f172a" strokeWidth="2" fill="none" strokeLinejoin="round" />

        {/* 1 Solitary Fish */}
        <g transform="translate(38, 62)">
          <path
            d="M 0,6 Q 18,-2 32,6 Q 40,3 46,0 L 44,6 L 46,12 Q 40,9 32,6 Q 18,14 0,6 Z"
            fill="#64748b"
            stroke="#1e293b"
            strokeWidth="1"
          />
          <circle cx="8" cy="5" r="1.5" fill="#ffffff" />
        </g>
      </g>
    </svg>
  );
};

export const SmartBoardTableMatrix: React.FC<SmartBoardDiagramProps> = ({
  onSelectCountry: _onSelectCountry,
  selectedCountryId: _selectedCountryId,
  highlightMode: externalHighlightMode,
  onHighlightModeChange,
  showInternalToolbar = true,
  showDeepDiveCard = true
}) => {
  const [internalMode, setInternalMode] = useState<DiagramViewMode>("all");
  const [layoutStyle, setLayoutStyle] = useState<"stacked" | "side_by_side" | "pamphlet_comparison">("stacked");
  const [renderEngine, setRenderEngine] = useState<"studio_3d" | "vector">("studio_3d");
  const [selectedHotspotId, setSelectedHotspotId] = useState<string>("trade-winds");

  const activeMode: DiagramViewMode = (externalHighlightMode as DiagramViewMode) || internalMode;

  const handleModeChange = (mode: DiagramViewMode) => {
    if (onHighlightModeChange) {
      onHighlightModeChange(mode);
    } else {
      setInternalMode(mode);
    }
    const target = FILTER_DETAILS[mode]?.targetHotspotId;
    if (target) {
      setSelectedHotspotId(target);
    }
  };

  const activeHotspot = COMPARISON_HOTSPOTS.find((h) => h.id === selectedHotspotId) || COMPARISON_HOTSPOTS[0];

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
      {/* Top Filter & Presentation Mode Bar */}
      {showInternalToolbar && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
            background: "#ffffff",
            padding: "10px 14px",
            borderRadius: "16px",
            border: "1.5px solid var(--border-default)",
            boxShadow: "var(--shadow-xs)"
          }}
        >
          {/* System Feature Filters */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--slate-700)", marginRight: "4px" }}>
              DIAGRAM FILTERS:
            </span>
            {(
              [
                "all",
                "normal",
                "el_nino",
                "trade_winds",
                "upwelling",
                "rain_drought",
                "fisheries"
              ] as DiagramViewMode[]
            ).map((modeKey) => {
              const meta = FILTER_DETAILS[modeKey];
              const isSelected = activeMode === modeKey;
              return (
                <button
                  key={modeKey}
                  type="button"
                  onClick={() => handleModeChange(modeKey)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "6px 12px",
                    fontSize: "0.76rem",
                    fontWeight: isSelected ? 800 : 650,
                    borderRadius: "9px",
                    border: isSelected ? `1.5px solid ${meta.color}` : "1px solid var(--border-subtle)",
                    background: isSelected ? meta.color : "#ffffff",
                    color: isSelected ? "#ffffff" : "var(--slate-700)",
                    cursor: "pointer",
                    boxShadow: isSelected ? "0 2px 8px rgba(0,0,0,0.12)" : "none",
                    transition: "all 0.15s ease",
                    minHeight: "36px"
                  }}
                >
                  {meta.icon}
                  {meta.label}
                </button>
              );
            })}
          </div>

          {/* Presentation Layout Toggles & Render Engine Switch */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            {/* Render Engine: 3D Studio Model vs Vector Engine */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "var(--slate-100)",
                borderRadius: "10px",
                padding: "3px",
                border: "1px solid var(--border-subtle)"
              }}
            >
              <button
                type="button"
                onClick={() => setRenderEngine("studio_3d")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "5px 12px",
                  fontSize: "0.74rem",
                  fontWeight: renderEngine === "studio_3d" ? 800 : 650,
                  borderRadius: "8px",
                  border: "none",
                  background: renderEngine === "studio_3d" ? "#ffffff" : "transparent",
                  color: renderEngine === "studio_3d" ? "#0284c7" : "var(--slate-600)",
                  boxShadow: renderEngine === "studio_3d" ? "var(--shadow-xs)" : "none",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  minHeight: "30px"
                }}
                title="Render user-generated high-definition 3D studio illustration with interactive touch hotspots"
              >
                <Sparkles size={13} color={renderEngine === "studio_3d" ? "#0284c7" : "var(--slate-500)"} />
                3D Studio Model
              </button>
              <button
                type="button"
                onClick={() => setRenderEngine("vector")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "5px 12px",
                  fontSize: "0.74rem",
                  fontWeight: renderEngine === "vector" ? 800 : 650,
                  borderRadius: "8px",
                  border: "none",
                  background: renderEngine === "vector" ? "#ffffff" : "transparent",
                  color: renderEngine === "vector" ? "var(--slate-900)" : "var(--slate-600)",
                  boxShadow: renderEngine === "vector" ? "var(--shadow-xs)" : "none",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  minHeight: "30px"
                }}
                title="Render SVG vector engine"
              >
                <Layers size={13} />
                Vector Engine
              </button>
            </div>

            <button
              type="button"
              onClick={() => setLayoutStyle((s) => (s === "stacked" ? "side_by_side" : "stacked"))}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "6px 12px",
                fontSize: "0.75rem",
                fontWeight: 750,
                borderRadius: "9px",
                border: "1px solid var(--border-subtle)",
                background: layoutStyle !== "pamphlet_comparison" ? "var(--slate-100)" : "#ffffff",
                color: "var(--slate-800)",
                cursor: "pointer",
                minHeight: "36px"
              }}
              title="Toggle between Vertical Stacked (Paper Format) and Side-by-Side Dual View"
            >
              <Split size={14} color="#0066cc" />
              {layoutStyle === "stacked" ? "Switch to Side-by-Side" : "Switch to Stacked View"}
            </button>

            <button
              type="button"
              onClick={() =>
                setLayoutStyle((s) => (s === "pamphlet_comparison" ? "stacked" : "pamphlet_comparison"))
              }
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 14px",
                fontSize: "0.75rem",
                fontWeight: 800,
                borderRadius: "9px",
                border: layoutStyle === "pamphlet_comparison" ? "1.5px solid #0066cc" : "1px solid var(--border-subtle)",
                background: layoutStyle === "pamphlet_comparison" ? "#eff6ff" : "#ffffff",
                color: layoutStyle === "pamphlet_comparison" ? "#0066cc" : "var(--slate-800)",
                cursor: "pointer",
                minHeight: "36px"
              }}
            >
              <Eye size={14} color="#0066cc" />
              {layoutStyle === "pamphlet_comparison" ? "Hide Original Pamphlet" : "Compare with Exam Paper"}
            </button>
          </div>
        </div>
      )}

      {/* PAMPHLET VERIFICATION MODE: Splits screen into Active Interactive Engine on Left + Official Exam Scan on Right */}
      {layoutStyle === "pamphlet_comparison" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "14px",
            background: "#eff6ff",
            border: "2px solid #bfdbfe",
            borderRadius: "18px",
            padding: "16px"
          }}
        >
          {/* Left: Active Interactive Model / Vector Engine */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span className="apple-badge accent" style={{ fontSize: "0.78rem" }}>
                {renderEngine === "studio_3d" ? "Interactive 3D Studio Model" : "Interactive Vector Engine"} (Tap Any Hotspot)
              </span>
              <span style={{ fontSize: "0.76rem", fontWeight: 700, color: "#1e40af" }}>
                Exact Match with Student Handout
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#ffffff", padding: "12px", borderRadius: "14px" }}>
              {renderEngine === "studio_3d" ? (
                <>
                  <NormalConditionsStudioImage
                    selectedHotspot={selectedHotspotId}
                    onSelectHotspot={setSelectedHotspotId}
                  />
                  <ElNinoConditionsStudioImage
                    selectedHotspot={selectedHotspotId}
                    onSelectHotspot={setSelectedHotspotId}
                  />
                </>
              ) : (
                <>
                  <NormalConditionsIsometricSvg
                    selectedHotspot={selectedHotspotId}
                    onSelectHotspot={setSelectedHotspotId}
                  />
                  <ElNinoConditionsIsometricSvg
                    selectedHotspot={selectedHotspotId}
                    onSelectHotspot={setSelectedHotspotId}
                  />
                </>
              )}
            </div>
          </div>

          {/* Right: Original Scanned Exam Pamphlet */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span className="apple-badge neutral" style={{ fontSize: "0.78rem" }}>
                Official Exam Pamphlet (Student Handout)
              </span>
              <span style={{ fontSize: "0.76rem", color: "var(--slate-500)", fontWeight: 600 }}>
                High-Resolution Scan
              </span>
            </div>
            <div
              style={{
                background: "#ffffff",
                border: "1px solid var(--border-subtle)",
                borderRadius: "14px",
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }}
            >
              <img
                src={`materials/${TASK1_DATA.scanImageFileName || TASK1_DATA.imageFileName}`}
                alt="Official IELTS Pacific Ocean Diagram"
                style={{
                  maxWidth: "100%",
                  maxHeight: "720px",
                  objectFit: "contain",
                  borderRadius: "8px",
                  boxShadow: "var(--shadow-sm)"
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* STANDARD VECTOR DISPLAY MODES (Stacked vs Side-by-Side) */}
      {layoutStyle !== "pamphlet_comparison" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              layoutStyle === "side_by_side" && (activeMode === "all" || activeMode === "trade_winds" || activeMode === "upwelling")
                ? "1fr 1fr"
                : "1fr",
            gap: "16px"
          }}
        >
          {/* 1. NORMAL CONDITIONS DIAGRAM */}
          {(activeMode === "all" ||
            activeMode === "normal" ||
            activeMode === "trade_winds" ||
            activeMode === "upwelling" ||
            activeMode === "rain_drought" ||
            activeMode === "fisheries") && (
            <div
              style={{
                background: "#ffffff",
                border: "2px solid #bae6fd",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column"
              }}
            >
              {/* Header */}
              <div
                style={{
                  background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                  color: "#ffffff",
                  padding: "10px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      padding: "2px 8px",
                      borderRadius: "6px",
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase"
                    }}
                  >
                    Equilibrium Baseline
                  </span>
                  <strong style={{ fontSize: "1.05rem" }}>Diagram 1: Normal Conditions</strong>
                </div>
                <span style={{ fontSize: "0.78rem", opacity: 0.95 }}>
                  Strong Trade Winds • Deep Western Warm Pool • Nutrient-Rich Upwelling
                </span>
              </div>

              {/* Diagram Rendering: 3D Studio Model vs Vector Engine */}
              <div style={{ padding: "14px" }}>
                {renderEngine === "studio_3d" ? (
                  <NormalConditionsStudioImage
                    selectedHotspot={selectedHotspotId}
                    onSelectHotspot={setSelectedHotspotId}
                  />
                ) : (
                  <NormalConditionsIsometricSvg
                    selectedHotspot={selectedHotspotId}
                    onSelectHotspot={setSelectedHotspotId}
                  />
                )}
              </div>

              {/* Model Sentence for Body 1 */}
              <div style={{ padding: "10px 16px", background: "#f8fafc", borderTop: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "#0369a1", marginBottom: "2px" }}>
                  BAND 9 FORMULATION FOR BODY 1:
                </div>
                <div style={{ fontSize: "0.84rem", color: "var(--slate-800)", fontStyle: "italic", lineHeight: 1.45 }}>
                  {PACIFIC_CONDITIONS[0].band9Phrase}
                </div>
              </div>
            </div>
          )}

          {/* 2. EL NIÑO CONDITIONS DIAGRAM */}
          {(activeMode === "all" ||
            activeMode === "el_nino" ||
            activeMode === "trade_winds" ||
            activeMode === "upwelling" ||
            activeMode === "rain_drought" ||
            activeMode === "fisheries") && (
            <div
              style={{
                background: "#ffffff",
                border: "2px solid #fecaca",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column"
              }}
            >
              {/* Header */}
              <div
                style={{
                  background: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
                  color: "#ffffff",
                  padding: "10px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      padding: "2px 8px",
                      borderRadius: "6px",
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase"
                    }}
                  >
                    Climatic Inversion
                  </span>
                  <strong style={{ fontSize: "1.05rem" }}>Diagram 2: El Niño Conditions</strong>
                </div>
                <span style={{ fontSize: "0.78rem", opacity: 0.95 }}>
                  Weakened Trade Winds • Eastward Warm Surge • Australian Drought &amp; Fishery Collapse
                </span>
              </div>

              {/* Diagram Rendering: 3D Studio Model vs Vector Engine */}
              <div style={{ padding: "14px" }}>
                {renderEngine === "studio_3d" ? (
                  <ElNinoConditionsStudioImage
                    selectedHotspot={selectedHotspotId}
                    onSelectHotspot={setSelectedHotspotId}
                  />
                ) : (
                  <ElNinoConditionsIsometricSvg
                    selectedHotspot={selectedHotspotId}
                    onSelectHotspot={setSelectedHotspotId}
                  />
                )}
              </div>

              {/* Model Sentence for Body 2 */}
              <div style={{ padding: "10px 16px", background: "#f8fafc", borderTop: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "#991b1b", marginBottom: "2px" }}>
                  BAND 9 FORMULATION FOR BODY 2:
                </div>
                <div style={{ fontSize: "0.84rem", color: "var(--slate-800)", fontStyle: "italic", lineHeight: 1.45 }}>
                  {PACIFIC_CONDITIONS[1].band9Phrase}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* COMPARISON HOTSPOT DEEP-DIVE BAR */}
      {showDeepDiveCard && (
        <div
          style={{
            background: "#ffffff",
            border: "1.5px solid var(--border-default)",
            borderRadius: "16px",
            padding: "16px 20px",
            boxShadow: "var(--shadow-sm)",
            display: "flex",
            flexDirection: "column",
            gap: "10px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Compass size={18} color="var(--apple-blue)" />
              <strong style={{ fontSize: "0.92rem", color: "var(--slate-900)" }}>
                Pacific Basin Hotspot Examiner: Tap to Contrast Key Dynamics
              </strong>
            </div>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {COMPARISON_HOTSPOTS.map((h) => {
                const isActive = h.id === selectedHotspotId;
                return (
                  <button
                    key={h.id}
                    type="button"
                    onClick={() => setSelectedHotspotId(h.id)}
                    style={{
                      padding: "6px 12px",
                      borderRadius: "8px",
                      fontSize: "0.76rem",
                      fontWeight: isActive ? 800 : 650,
                      border: isActive ? "1.5px solid var(--slate-900)" : "1px solid var(--border-subtle)",
                      background: isActive ? "var(--slate-900)" : "var(--slate-100)",
                      color: isActive ? "#ffffff" : "var(--slate-700)",
                      cursor: "pointer",
                      minHeight: "34px",
                      transition: "all 0.15s ease"
                    }}
                  >
                    {h.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Hotspot Comparison Details */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1.2fr",
              gap: "12px",
              background: "var(--slate-50)",
              padding: "12px 14px",
              borderRadius: "12px",
              border: "1px solid var(--border-subtle)"
            }}
          >
            <div>
              <span className="apple-badge accent" style={{ fontSize: "0.68rem", marginBottom: "4px" }}>
                Normal State
              </span>
              <p style={{ fontSize: "0.85rem", color: "var(--slate-800)", margin: 0, fontWeight: 600 }}>
                {activeHotspot.normalState}
              </p>
            </div>
            <div>
              <span className="apple-badge neutral" style={{ background: "#fee2e2", color: "#dc2626", fontSize: "0.68rem", marginBottom: "4px" }}>
                El Niño State
              </span>
              <p style={{ fontSize: "0.85rem", color: "var(--slate-800)", margin: 0, fontWeight: 600 }}>
                {activeHotspot.elNinoState}
              </p>
            </div>
            <div style={{ borderLeft: "2px solid var(--border-subtle)", paddingLeft: "12px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--apple-blue)" }}>
                Band 9 Comparative Reporting Sentence
              </span>
              <p style={{ fontSize: "0.84rem", color: "var(--slate-900)", fontStyle: "italic", margin: "2px 0 0", lineHeight: 1.45 }}>
                {activeHotspot.band9Sentence}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const SmartBoardGraphSvg = SmartBoardTableMatrix;
