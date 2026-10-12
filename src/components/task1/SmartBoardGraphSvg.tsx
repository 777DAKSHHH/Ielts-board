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
  Eye
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
        <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7" />
        </marker>
        <marker id="arrow-dark" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b" />
        </marker>
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

      {/* ATMOSPHERIC LABELS & ARROWS */}

      {/* West Pacific Label */}
      <g
        onClick={() => onSelectHotspot("trade-winds")}
        style={{ cursor: "pointer" }}
        opacity={isWindsActive ? 1 : 0.9}
      >
        <text x="125" y="68" fontSize="15" fontWeight="800" fill="#0f172a" textAnchor="middle">
          West
        </text>
        <text x="125" y="86" fontSize="15" fontWeight="800" fill="#0f172a" textAnchor="middle">
          Pacific
        </text>

        {/* Weak Winds Curved Arrow (pointing left / upward) */}
        <path
          d="M 285,152 C 220,155 130,140 100,105"
          fill="none"
          stroke="#0284c7"
          strokeWidth="6"
          strokeLinecap="round"
          markerEnd="url(#arrow-blue)"
        />
        <text x="200" y="125" fontSize="13" fontWeight="700" fill="#1e293b" textAnchor="middle">
          weak
        </text>
        <text x="200" y="141" fontSize="13" fontWeight="700" fill="#1e293b" textAnchor="middle">
          winds
        </text>
      </g>

      {/* Center Storm Clouds & Rain */}
      <g
        onClick={() => onSelectHotspot("australia-weather")}
        style={{ cursor: "pointer" }}
      >
        {/* Label: storm clouds */}
        <text x="375" y="46" fontSize="14" fontWeight="700" fill="#0f172a" textAnchor="middle">
          storm
        </text>
        <text x="375" y="62" fontSize="14" fontWeight="700" fill="#0f172a" textAnchor="middle">
          clouds
        </text>

        {/* Fluffy Cumulus Cloud Shape */}
        <path
          d="M 310,115 
             C 290,115 280,95 300,80 
             C 305,60 335,55 350,70 
             C 365,55 405,55 420,75 
             C 440,75 455,90 445,110 
             C 460,120 450,140 430,140 
             L 325,140 
             C 305,140 300,125 310,115 Z"
          fill="#cbd5e1"
          stroke="#64748b"
          strokeWidth="1.5"
          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.08))"
        />
        <path
          d="M 330,125 C 320,125 315,112 328,102 C 330,90 350,85 360,95 C 370,85 395,85 405,98 C 418,98 425,108 418,122 C 428,128 420,138 408,138 L 340,138 Z"
          fill="#e2e8f0"
        />

        {/* Falling Rain Streaks */}
        <g stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3 3">
          <line x1="330" y1="145" x2="320" y2="185" />
          <line x1="345" y1="145" x2="335" y2="185" />
          <line x1="360" y1="145" x2="350" y2="185" />
          <line x1="375" y1="145" x2="365" y2="185" />
          <line x1="390" y1="145" x2="380" y2="185" />
          <line x1="405" y1="145" x2="395" y2="185" />
        </g>
        <text x="375" y="165" fontSize="13" fontWeight="700" fill="#0284c7">
          rain
        </text>
      </g>

      {/* East Pacific & Strong Trade Winds Arrow */}
      <g
        onClick={() => onSelectHotspot("trade-winds")}
        style={{ cursor: "pointer" }}
      >
        <text x="735" y="68" fontSize="15" fontWeight="800" fill="#0f172a" textAnchor="middle">
          East
        </text>
        <text x="735" y="86" fontSize="15" fontWeight="800" fill="#0f172a" textAnchor="middle">
          Pacific
        </text>

        {/* Label: strong trade winds */}
        <text x="725" y="125" fontSize="13" fontWeight="700" fill="#1e293b" textAnchor="middle">
          strong
        </text>
        <text x="725" y="141" fontSize="13" fontWeight="700" fill="#1e293b" textAnchor="middle">
          trade
        </text>
        <text x="725" y="157" fontSize="13" fontWeight="700" fill="#1e293b" textAnchor="middle">
          winds
        </text>

        {/* Big Sweeping Trade Winds Arrow entering from right, dipping down and pointing west */}
        <path
          d="M 765,115 C 720,110 560,115 500,165 C 470,190 350,225 240,240"
          fill="none"
          stroke="#0284c7"
          strokeWidth="10"
          strokeLinecap="round"
          markerEnd="url(#arrow-blue)"
          opacity={isWindsActive ? 1 : 0.85}
        />
      </g>

      {/* 3D ISOMETRIC OCEAN CUTAWAY BLOCK */}

      {/* Top Ocean Surface Face (Isometric Parallelogram with shoreline waves) */}
      <polygon
        points="225,185 645,185 715,145 295,145"
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
        points="225,185 645,185 645,340 225,305"
        fill="#f1f5f9"
        stroke="#1e293b"
        strokeWidth="1.5"
      />

      {/* Right Side Cutaway Depth Face */}
      <polygon
        points="645,185 715,145 715,295 645,340"
        fill="#cbd5e1"
        stroke="#1e293b"
        strokeWidth="1.5"
      />

      {/* Deep Warm Water Pool (West Pacific side) */}
      <g onClick={() => onSelectHotspot("warm-pool")} style={{ cursor: "pointer" }}>
        <path
          d="M 225,185 
             L 645,185 
             L 645,215 
             C 540,225 440,285 225,295 
             Z"
          fill="#93c5fd"
          stroke="#2563eb"
          strokeWidth={isWarmWaterActive ? 2.5 : 1}
        />
        <text x="310" y="245" fontSize="15" fontWeight="800" fill="#1e293b">
          warm water
        </text>
      </g>

      {/* Cool Water & Rich Nutrients Layer + Upward Vector Arrow */}
      <g onClick={() => onSelectHotspot("upwelling-nutrients")} style={{ cursor: "pointer" }}>
        <path
          d="M 225,295 
             C 440,285 540,225 645,215 
             L 645,340 
             L 225,305 
             Z"
          fill="url(#normal-cool-grad)"
          stroke="#1e293b"
          strokeWidth={isUpwellingActive ? 2.5 : 1}
          opacity="0.85"
        />

        {/* Vertical Upward Arrow for Upwelling */}
        <line
          x1="620"
          y1="315"
          x2="620"
          y2="240"
          stroke="#0284c7"
          strokeWidth="8"
          strokeLinecap="round"
          markerEnd="url(#arrow-blue)"
        />

        {/* Text inside East ocean: cool water and rich nutrients */}
        <text x="560" y="275" fontSize="13" fontWeight="800" fill="#ffffff" textAnchor="middle">
          cool water
        </text>
        <text x="560" y="291" fontSize="13" fontWeight="800" fill="#ffffff" textAnchor="middle">
          and rich
        </text>
        <text x="560" y="307" fontSize="13" fontWeight="800" fill="#ffffff" textAnchor="middle">
          nutrients
        </text>
      </g>

      {/* COASTAL INSET BOXES */}

      {/* AUSTRALIA INSET (Left) */}
      <g
        onClick={() => onSelectHotspot("australia-weather")}
        style={{ cursor: "pointer" }}
        transform="translate(45, 230)"
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

        {/* Australia: Rain Clouds & Rain */}
        <path
          d="M 20,40 C 15,40 10,32 18,25 C 22,18 36,18 42,24 C 50,22 58,30 52,38 C 55,42 48,45 42,42 Z"
          fill="#94a3b8"
        />
        <g stroke="#0284c7" strokeWidth="1" strokeDasharray="2 2">
          <line x1="22" y1="45" x2="18" y2="60" />
          <line x1="28" y1="45" x2="24" y2="60" />
          <line x1="34" y1="45" x2="30" y2="60" />
          <line x1="40" y1="45" x2="36" y2="60" />
        </g>

        {/* Australia: Lush Flourishing Plants */}
        <g stroke="#15803d" strokeWidth="1.8" fill="none">
          {/* Plant 1 */}
          <path d="M 15,82 Q 12,70 8,68 M 15,82 Q 18,72 24,70 M 15,82 L 15,65" />
          {/* Plant 2 */}
          <path d="M 60,82 Q 54,68 48,66 M 60,82 Q 66,70 74,68 M 60,82 L 60,63" />
          {/* Plant 3 */}
          <path d="M 105,82 Q 98,69 92,67 M 105,82 Q 112,70 120,68 M 105,82 L 105,64" />
        </g>
        <line x1="5" y1="82" x2="130" y2="82" stroke="#475569" strokeWidth="1" />
      </g>

      {/* PERU INSET (Right) */}
      <g
        onClick={() => onSelectHotspot("peru-weather-fishery")}
        style={{ cursor: "pointer" }}
        transform="translate(700, 230)"
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

        {/* Peru: Shining Sun in Top Right */}
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

        {/* Upward Arrow ↑ indicating flourishing fish */}
        <line x1="16" y1="75" x2="16" y2="48" stroke="#16a34a" strokeWidth="3" markerEnd="url(#arrow-dark)" />
        <path d="M 12,54 L 16,46 L 20,54" stroke="#16a34a" strokeWidth="2.5" fill="none" />

        {/* 2 Swimming Fish */}
        {/* Fish 1 (Top) */}
        <g transform="translate(35, 48)">
          <path
            d="M 0,6 Q 18,-2 32,6 Q 40,3 46,0 L 44,6 L 46,12 Q 40,9 32,6 Q 18,14 0,6 Z"
            fill="#64748b"
            stroke="#1e293b"
            strokeWidth="1"
          />
          <circle cx="8" cy="5" r="1.5" fill="#ffffff" />
        </g>
        {/* Fish 2 (Bottom) */}
        <g transform="translate(42, 68)">
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
        <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626" />
        </marker>
        <marker id="arrow-blue-elnino" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb" />
        </marker>
        <linearGradient id="elnino-warm-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#bfdbfe" />
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>
      </defs>

      {/* Title */}
      <text x="30" y="32" fontSize="18" fontWeight="800" fill="#0f172a" letterSpacing="-0.01em">
        El Niño Conditions
      </text>

      {/* ATMOSPHERIC LABELS & ARROWS */}

      {/* West Pacific & Strong Winds Arrow (Curving Up & Left) */}
      <g
        onClick={() => onSelectHotspot("trade-winds")}
        style={{ cursor: "pointer" }}
      >
        <text x="125" y="68" fontSize="15" fontWeight="800" fill="#0f172a" textAnchor="middle">
          West
        </text>
        <text x="125" y="86" fontSize="15" fontWeight="800" fill="#0f172a" textAnchor="middle">
          Pacific
        </text>

        {/* Thick curved blue arrow curving up and left */}
        <path
          d="M 290,165 C 230,170 140,150 110,105"
          fill="none"
          stroke="#2563eb"
          strokeWidth="10"
          strokeLinecap="round"
          markerEnd="url(#arrow-blue-elnino)"
          opacity={isWindsActive ? 1 : 0.85}
        />
        <text x="195" y="145" fontSize="14" fontWeight="800" fill="#1e293b" textAnchor="middle">
          strong
        </text>
        <text x="195" y="162" fontSize="14" fontWeight="800" fill="#1e293b" textAnchor="middle">
          winds
        </text>
      </g>

      {/* Displaced Storm Clouds & Rain in Central / East Basin */}
      <g
        onClick={() => onSelectHotspot("australia-weather")}
        style={{ cursor: "pointer" }}
        transform="translate(140, 0)"
      >
        {/* Label: storm clouds */}
        <text x="375" y="46" fontSize="14" fontWeight="700" fill="#0f172a" textAnchor="middle">
          storm
        </text>
        <text x="375" y="62" fontSize="14" fontWeight="700" fill="#0f172a" textAnchor="middle">
          clouds
        </text>

        {/* Cumulus Cloud Shape shifted eastward */}
        <path
          d="M 310,115 
             C 290,115 280,95 300,80 
             C 305,60 335,55 350,70 
             C 365,55 405,55 420,75 
             C 440,75 455,90 445,110 
             C 460,120 450,140 430,140 
             L 325,140 
             C 305,140 300,125 310,115 Z"
          fill="#cbd5e1"
          stroke="#64748b"
          strokeWidth="1.5"
          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.08))"
        />

        {/* Rain streaks */}
        <g stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3 3">
          <line x1="330" y1="145" x2="320" y2="185" />
          <line x1="345" y1="145" x2="335" y2="185" />
          <line x1="360" y1="145" x2="350" y2="185" />
          <line x1="375" y1="145" x2="365" y2="185" />
          <line x1="390" y1="145" x2="380" y2="185" />
          <line x1="405" y1="145" x2="395" y2="185" />
        </g>
        <text x="375" y="165" fontSize="13" fontWeight="700" fill="#0284c7">
          rain
        </text>
      </g>

      {/* East Pacific & Weak Trade Winds Arrow */}
      <g
        onClick={() => onSelectHotspot("trade-winds")}
        style={{ cursor: "pointer" }}
      >
        <text x="735" y="68" fontSize="15" fontWeight="800" fill="#0f172a" textAnchor="middle">
          East
        </text>
        <text x="735" y="86" fontSize="15" fontWeight="800" fill="#0f172a" textAnchor="middle">
          Pacific
        </text>

        {/* Label: weak trade winds */}
        <text x="730" y="125" fontSize="13" fontWeight="700" fill="#1e293b" textAnchor="middle">
          weak
        </text>
        <text x="730" y="141" fontSize="13" fontWeight="700" fill="#1e293b" textAnchor="middle">
          trade
        </text>
        <text x="730" y="157" fontSize="13" fontWeight="700" fill="#1e293b" textAnchor="middle">
          winds
        </text>

        {/* Thinner curved trade winds arrow */}
        <path
          d="M 780,180 C 720,165 620,165 570,195"
          fill="none"
          stroke="#2563eb"
          strokeWidth="5"
          strokeLinecap="round"
          markerEnd="url(#arrow-blue-elnino)"
          opacity={isWindsActive ? 1 : 0.8}
        />
      </g>

      {/* 3D ISOMETRIC OCEAN CUTAWAY BLOCK */}

      {/* Top Ocean Surface Face */}
      <polygon
        points="225,185 645,185 715,145 295,145"
        fill="url(#elnino-warm-grad)"
        stroke="#1e293b"
        strokeWidth="1.5"
      />

      {/* Front Ocean Cross-Section Face */}
      <polygon
        points="225,185 645,185 645,340 225,305"
        fill="#f1f5f9"
        stroke="#1e293b"
        strokeWidth="1.5"
      />

      {/* Right Cutaway Depth Face */}
      <polygon
        points="645,185 715,145 715,295 645,340"
        fill="#cbd5e1"
        stroke="#1e293b"
        strokeWidth="1.5"
      />

      {/* Horizontal Warm Water Layer Across Surface (Warm water pushed eastwards) */}
      <g onClick={() => onSelectHotspot("warm-pool")} style={{ cursor: "pointer" }}>
        <polygon
          points="225,185 645,185 645,260 225,245"
          fill="#93c5fd"
          stroke="#2563eb"
          strokeWidth={isWarmWaterActive ? 2.5 : 1}
        />

        {/* Wide Horizontal Arrow: warm water pushed eastwards */}
        <line
          x1="260"
          y1="230"
          x2="480"
          y2="235"
          stroke="#3b82f6"
          strokeWidth="10"
          strokeLinecap="round"
          markerEnd="url(#arrow-blue-elnino)"
        />
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
          points="225,245 645,260 645,340 225,305"
          fill="#64748b"
          stroke="#1e293b"
          strokeWidth={isUpwellingActive ? 2.5 : 1}
          opacity="0.9"
        />
        <text x="500" y="305" fontSize="14" fontWeight="800" fill="#ffffff">
          cool water
        </text>

        {/* Pointer Line: poor nutrients */}
        <line x1="680" y1="365" x2="630" y2="300" stroke="#0f172a" strokeWidth="2" />
        <text x="640" y="380" fontSize="14" fontWeight="800" fill="#0f172a">
          poor
        </text>
        <text x="640" y="396" fontSize="14" fontWeight="800" fill="#0f172a">
          nutrients
        </text>
      </g>

      {/* COASTAL INSET BOXES */}

      {/* AUSTRALIA INSET (Left) - Severe Drought & Scorching Sun */}
      <g
        onClick={() => onSelectHotspot("australia-weather")}
        style={{ cursor: "pointer" }}
        transform="translate(45, 230)"
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

        {/* Blazing Sun in Center */}
        <circle cx="68" cy="48" r="14" fill="#dc2626" opacity="0.9" />
        <g stroke="#dc2626" strokeWidth="2">
          <line x1="68" y1="28" x2="68" y2="20" />
          <line x1="68" y1="68" x2="68" y2="76" />
          <line x1="48" y1="48" x2="40" y2="48" />
          <line x1="88" y1="48" x2="96" y2="48" />
          <line x1="54" y1="34" x2="48" y2="28" />
          <line x1="82" y1="62" x2="88" y2="68" />
          <line x1="54" y1="62" x2="48" y2="68" />
          <line x1="82" y1="34" x2="88" y2="28" />
        </g>

        {/* Parched / dry withered ground line */}
        <line x1="5" y1="84" x2="130" y2="84" stroke="#78350f" strokeWidth="1.5" />
        {/* Shriveled twigs */}
        <path d="M 25,84 L 28,78 M 68,84 L 66,77 M 105,84 L 108,77" stroke="#78350f" strokeWidth="1.5" />
      </g>

      {/* PERU INSET (Right) - Storm Clouds & Decimated Fish */}
      <g
        onClick={() => onSelectHotspot("peru-weather-fishery")}
        style={{ cursor: "pointer" }}
        transform="translate(700, 230)"
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
          d="M 65,40 C 60,40 55,32 63,25 C 67,18 81,18 87,24 C 95,22 103,30 97,38 C 100,42 93,45 87,42 Z"
          fill="#94a3b8"
        />
        <g stroke="#0284c7" strokeWidth="1" strokeDasharray="2 2">
          <line x1="67" y1="45" x2="63" y2="58" />
          <line x1="73" y1="45" x2="69" y2="58" />
          <line x1="79" y1="45" x2="75" y2="58" />
          <line x1="85" y1="45" x2="81" y2="58" />
        </g>

        {/* Downward Arrow ↓ indicating collapsed fishery */}
        <line x1="16" y1="48" x2="16" y2="75" stroke="#dc2626" strokeWidth="3" markerEnd="url(#arrow-red)" />
        <path d="M 12,69 L 16,77 L 20,69" stroke="#dc2626" strokeWidth="2.5" fill="none" />

        {/* 1 Solitary Fish */}
        <g transform="translate(38, 62)">
          <path
            d="M 0,6 Q 18,-2 32,6 Q 40,3 46,0 L 44,6 L 46,12 Q 40,9 32,6 Q 18,14 0,6 Z"
            fill="#94a3b8"
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

          {/* Presentation Layout Toggles */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
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

      {/* PAMPHLET VERIFICATION MODE: Splits screen into Vector Engine on Left + Official Exam Scan on Right */}
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
          {/* Left: Vector Engine */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span className="apple-badge accent" style={{ fontSize: "0.78rem" }}>
                Interactive Vector Diagram Engine (Tap Any Element)
              </span>
              <span style={{ fontSize: "0.76rem", fontWeight: 700, color: "#1e40af" }}>
                100% Identical to Official Exam Booklet
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#ffffff", padding: "12px", borderRadius: "14px" }}>
              <NormalConditionsIsometricSvg
                selectedHotspot={selectedHotspotId}
                onSelectHotspot={setSelectedHotspotId}
              />
              <ElNinoConditionsIsometricSvg
                selectedHotspot={selectedHotspotId}
                onSelectHotspot={setSelectedHotspotId}
              />
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
                src={`materials/${TASK1_DATA.imageFileName}`}
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

              {/* The Authentic 3D Isometric SVG Vector */}
              <div style={{ padding: "14px" }}>
                <NormalConditionsIsometricSvg
                  selectedHotspot={selectedHotspotId}
                  onSelectHotspot={setSelectedHotspotId}
                />
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

              {/* The Authentic 3D Isometric SVG Vector */}
              <div style={{ padding: "14px" }}>
                <ElNinoConditionsIsometricSvg
                  selectedHotspot={selectedHotspotId}
                  onSelectHotspot={setSelectedHotspotId}
                />
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
