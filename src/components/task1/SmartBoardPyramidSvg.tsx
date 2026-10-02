import React, { useState } from "react";
import { Flame, Recycle, Zap, RotateCcw, Sun, ArrowUpRight } from "lucide-react";

export type HighlightMode =
  | "all"
  | "light_energy"
  | "biomass"
  | "heat"
  | "waste"
  | "decomposers";

interface SmartBoardPyramidSvgProps {
  onSelectTier?: (tierId: string) => void;
  selectedTierId?: string | null;
  highlightMode?: HighlightMode;
  onHighlightModeChange?: (mode: HighlightMode) => void;
  showInternalToolbar?: boolean;
}

const ASPECT_DETAILS: Record<
  HighlightMode,
  { label: string; icon: React.ReactNode; color: string; description: string }
> = {
  all: {
    label: "Complete Diagram",
    icon: <RotateCcw size={13} />,
    color: "var(--slate-900)",
    description: "Displaying the full ecological ecosystem: solar input, ascending trophic levels, continuous heat dissipation, and waste convergence into decomposers."
  },
  light_energy: {
    label: "Light energy",
    icon: <Sun size={13} />,
    color: "#ca8a04",
    description: "The sole external energy input powering the food chain, captured directly at the base by Primary Producers to generate 20,000 kcal/m²/yr."
  },
  biomass: {
    label: "Energy stored as biomass",
    icon: <Zap size={13} />,
    color: "#0284c7",
    description: "Retained energy decreases by an exact factor of ten (90% loss) at each ascending tier (20,000 → 2,000 → 200 → 20 → 2 kcal/m²/yr)."
  },
  heat: {
    label: "Heat Dissipation",
    icon: <Flame size={13} />,
    color: "#ea580c",
    description: "Metabolic heat is continuously expelled into the atmosphere from all five consumer tiers and decomposers through cellular respiration."
  },
  waste: {
    label: "Waste & dead matter",
    icon: <ArrowUpRight size={13} />,
    color: "#e11d48",
    description: "Four colored conduits channel organic detritus and deceased matter from every tier of the pyramid directly into DECOMPOSERS."
  },
  decomposers: {
    label: "DECOMPOSERS",
    icon: <Recycle size={13} />,
    color: "#16a34a",
    description: "The terminal biological sink receiving dead matter from all levels, processing organic material, and releasing metabolic heat into the atmosphere."
  }
};

export const SmartBoardPyramidSvg: React.FC<SmartBoardPyramidSvgProps> = ({
  onSelectTier,
  selectedTierId,
  highlightMode: externalHighlightMode,
  onHighlightModeChange,
  showInternalToolbar = true
}) => {
  const [internalHighlightMode, setInternalHighlightMode] = useState<HighlightMode>("all");
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  const activeMode = externalHighlightMode !== undefined ? externalHighlightMode : internalHighlightMode;

  const handleModeChange = (mode: HighlightMode) => {
    if (onHighlightModeChange) {
      onHighlightModeChange(mode);
    } else {
      setInternalHighlightMode(mode);
    }
  };

  // Specific visibility checks
  const isLightEnergyActive =
    activeMode === "all" || activeMode === "light_energy";

  const isBiomassActive =
    activeMode === "all" ||
    activeMode === "biomass" ||
    activeMode === "light_energy";

  const isHeatActive =
    activeMode === "all" || activeMode === "heat" || activeMode === "decomposers";

  const isWasteActive =
    activeMode === "all" || activeMode === "waste" || activeMode === "decomposers";

  const isDecomposersActive =
    activeMode === "all" || activeMode === "decomposers" || activeMode === "waste";

  const currentAspect = ASPECT_DETAILS[activeMode];

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>
      {/* Smart Board Interactive Filter Toolbar */}
      {showInternalToolbar && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            background: "var(--slate-100)",
            padding: "10px 12px",
            borderRadius: "14px",
            border: "1px solid var(--border-subtle)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "6px" }}>
            <span style={{ fontSize: "0.76rem", fontWeight: 800, color: "var(--slate-700)" }}>
              DIAGRAM ASPECT FOCUS:
            </span>

            <div style={{ display: "flex", alignItems: "center", gap: "5px", flexWrap: "wrap" }}>
              {/* 1. Show All */}
              <button
                type="button"
                onClick={() => handleModeChange("all")}
                className="apple-touch-btn"
                style={{
                  padding: "5px 10px",
                  fontSize: "0.74rem",
                  fontWeight: 750,
                  background: activeMode === "all" ? "var(--slate-900)" : "#ffffff",
                  color: activeMode === "all" ? "#ffffff" : "var(--slate-700)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "8px"
                }}
              >
                All Aspects
              </button>

              {/* 2. Light energy */}
              <button
                type="button"
                onClick={() => handleModeChange("light_energy")}
                className="apple-touch-btn"
                style={{
                  padding: "5px 10px",
                  fontSize: "0.74rem",
                  fontWeight: 750,
                  background: activeMode === "light_energy" ? "#ca8a04" : "#ffffff",
                  color: activeMode === "light_energy" ? "#ffffff" : "#854d0e",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                }}
              >
                <Sun size={12} /> Light energy
              </button>

              {/* 3. Energy stored as biomass */}
              <button
                type="button"
                onClick={() => handleModeChange("biomass")}
                className="apple-touch-btn"
                style={{
                  padding: "5px 10px",
                  fontSize: "0.74rem",
                  fontWeight: 750,
                  background: activeMode === "biomass" ? "#0284c7" : "#ffffff",
                  color: activeMode === "biomass" ? "#ffffff" : "#0369a1",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                }}
              >
                <Zap size={12} /> Energy stored as biomass
              </button>

              {/* 4. Heat */}
              <button
                type="button"
                onClick={() => handleModeChange("heat")}
                className="apple-touch-btn"
                style={{
                  padding: "5px 10px",
                  fontSize: "0.74rem",
                  fontWeight: 750,
                  background: activeMode === "heat" ? "#ea580c" : "#ffffff",
                  color: activeMode === "heat" ? "#ffffff" : "#c2410c",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                }}
              >
                <Flame size={12} /> Heat
              </button>

              {/* 5. Waste & dead matter */}
              <button
                type="button"
                onClick={() => handleModeChange("waste")}
                className="apple-touch-btn"
                style={{
                  padding: "5px 10px",
                  fontSize: "0.74rem",
                  fontWeight: 750,
                  background: activeMode === "waste" ? "#e11d48" : "#ffffff",
                  color: activeMode === "waste" ? "#ffffff" : "#9f1239",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                }}
              >
                <ArrowUpRight size={12} /> Waste &amp; dead matter
              </button>

              {/* 6. DECOMPOSERS */}
              <button
                type="button"
                onClick={() => handleModeChange("decomposers")}
                className="apple-touch-btn"
                style={{
                  padding: "5px 10px",
                  fontSize: "0.74rem",
                  fontWeight: 750,
                  background: activeMode === "decomposers" ? "#16a34a" : "#ffffff",
                  color: activeMode === "decomposers" ? "#ffffff" : "#15803d",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                }}
              >
                <Recycle size={12} /> DECOMPOSERS
              </button>
            </div>
          </div>

          {/* Aspect Callout Pill */}
          <div
            style={{
              background: "#ffffff",
              border: `1.5px solid ${currentAspect.color}`,
              borderRadius: "10px",
              padding: "6px 12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.8rem",
              color: "var(--slate-800)"
            }}
          >
            <span
              style={{
                background: currentAspect.color,
                color: "#ffffff",
                fontSize: "0.68rem",
                fontWeight: 800,
                padding: "2px 7px",
                borderRadius: "5px",
                display: "inline-flex",
                alignItems: "center",
                gap: "3px"
              }}
            >
              {currentAspect.icon} {currentAspect.label}
            </span>
            <span>{currentAspect.description}</span>
          </div>
        </div>
      )}

      {/* SVG Canvas with Crisp 4K Vector Graphics */}
      <div
        style={{
          width: "100%",
          background: "#ffffff",
          borderRadius: "16px",
          border: "1.5px solid var(--border-subtle)",
          boxShadow: "var(--shadow-sm)",
          padding: "16px 14px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <svg
          viewBox="0 0 980 630"
          style={{ width: "100%", height: "auto", maxHeight: "580px", userSelect: "none" }}
        >
          <defs>
            {/* Arrowhead Markers */}
            <marker id="arrow-black" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M 1 1 L 7 4 L 1 7 Z" fill="#0f172a" />
            </marker>
            <marker id="arrow-pink" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M 1 1 L 7 4 L 1 7 Z" fill="#f43f5e" />
            </marker>
            <marker id="arrow-yellow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M 1 1 L 7 4 L 1 7 Z" fill="#eab308" />
            </marker>
            <marker id="arrow-cyan" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M 1 1 L 7 4 L 1 7 Z" fill="#0284c7" />
            </marker>
            <marker id="arrow-green" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M 1 1 L 7 4 L 1 7 Z" fill="#16a34a" />
            </marker>

            {/* Subtle drop shadow */}
            <filter id="tier-shadow" x="-5%" y="-5%" width="110%" height="115%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.09" />
            </filter>
            <filter id="tier-glow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#0284c7" floodOpacity="0.45" />
            </filter>
            <filter id="heat-glow" x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#ea580c" floodOpacity="0.6" />
            </filter>
            <filter id="sun-glow" x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#eab308" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* QUESTION PROMPT BANNER AT TOP - EXACT UNCHANGED WORDING */}
          <g>
            <rect x="25" y="10" width="930" height="66" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />
            <text x="490" y="34" textAnchor="middle" fill="#0f172a" fontSize="13.5" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">
              The diagram below shows the stages in the food production chain of the United States. Summarise the information by
            </text>
            <text x="490" y="55" textAnchor="middle" fill="#0f172a" fontSize="13.5" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">
              selecting and reporting the main features, and make comparisons where relevant.
            </text>
          </g>

          {/* ========================================================
              PYRAMID TIERS (CENTER)
              Apex: x=490, y=145
              Base: y=465
             ======================================================== */}

          {/* TIER 5: Quaternary consumers */}
          <g
            cursor="pointer"
            onClick={() => onSelectTier?.("tier5")}
            onMouseEnter={() => setHoveredElement("tier5")}
            onMouseLeave={() => setHoveredElement(null)}
            opacity={!isBiomassActive && selectedTierId !== "tier5" ? 0.16 : 1}
            style={{ transition: "opacity 0.2s ease" }}
          >
            <polygon
              points="490,145 435,210 545,210"
              fill={selectedTierId === "tier5" || hoveredElement === "tier5" ? "#fecdd3" : "#ffe4e6"}
              stroke={selectedTierId === "tier5" ? "#e11d48" : "#fb7185"}
              strokeWidth={selectedTierId === "tier5" ? 3.5 : 2}
              filter={selectedTierId === "tier5" ? "url(#tier-glow)" : "url(#tier-shadow)"}
            />
            {/* Eagle / raptor icon silhouette */}
            <g transform="translate(470, 160) scale(0.7)" fill="#881337">
              <path d="M 28,10 C 20,4 5,8 2,18 C 12,18 20,24 25,28 C 30,24 38,18 48,18 C 45,8 36,4 28,10 Z M 25,28 L 22,40 L 28,36 L 34,40 L 31,28 Z" />
              <polygon points="27,16 29,16 31,20 25,20" fill="#f59e0b" />
            </g>
            <text x="490" y="202" textAnchor="middle" fill="#881337" fontSize="11.5" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif">
              Quaternary consumers
            </text>
          </g>

          {/* TIER 4: Tertiary consumers */}
          <g
            cursor="pointer"
            onClick={() => onSelectTier?.("tier4")}
            onMouseEnter={() => setHoveredElement("tier4")}
            onMouseLeave={() => setHoveredElement(null)}
            opacity={!isBiomassActive && selectedTierId !== "tier4" ? 0.16 : 1}
          >
            <polygon
              points="435,210 545,210 595,275 385,275"
              fill={selectedTierId === "tier4" || hoveredElement === "tier4" ? "#ffedd5" : "#fed7aa"}
              stroke={selectedTierId === "tier4" ? "#ea580c" : "#f97316"}
              strokeWidth={selectedTierId === "tier4" ? 3.5 : 2}
              filter={selectedTierId === "tier4" ? "url(#tier-glow)" : "url(#tier-shadow)"}
            />
            {/* Coiled snakes silhouette */}
            <g transform="translate(440, 222)" stroke="#9a3412" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 15,20 C 5,10 5,30 20,32 C 35,34 35,15 50,18 C 65,21 70,35 85,25" />
              <circle cx="87" cy="24" r="3.5" fill="#9a3412" stroke="none" />
            </g>
            <text x="490" y="267" textAnchor="middle" fill="#9a3412" fontSize="12" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif">
              Tertiary consumers
            </text>
          </g>

          {/* TIER 3: Secondary consumers */}
          <g
            cursor="pointer"
            onClick={() => onSelectTier?.("tier3")}
            onMouseEnter={() => setHoveredElement("tier3")}
            onMouseLeave={() => setHoveredElement(null)}
            opacity={!isBiomassActive && selectedTierId !== "tier3" ? 0.16 : 1}
          >
            <polygon
              points="385,275 595,275 645,345 335,345"
              fill={selectedTierId === "tier3" || hoveredElement === "tier3" ? "#fef9c3" : "#fef08a"}
              stroke={selectedTierId === "tier3" ? "#ca8a04" : "#eab308"}
              strokeWidth={selectedTierId === "tier3" ? 3.5 : 2}
              filter={selectedTierId === "tier3" ? "url(#tier-glow)" : "url(#tier-shadow)"}
            />
            {/* Animals: rodent, bird, frog */}
            <g opacity="0.85">
              {/* Rodent */}
              <ellipse cx="400" cy="305" rx="16" ry="10" fill="#a16207" />
              <circle cx="414" cy="301" r="6" fill="#a16207" />
              <path d="M 384,305 Q 375,312 370,309" stroke="#a16207" strokeWidth="2" fill="none" />
              {/* Bird */}
              <path d="M 478,296 Q 490,286 502,296 Q 508,308 496,313 Q 484,310 478,296 Z" fill="#854d0e" />
              <polygon points="502,298 508,299 502,302" fill="#ca8a04" />
              {/* Frog */}
              <ellipse cx="575" cy="306" rx="14" ry="9" fill="#4d7c0f" />
              <circle cx="568" cy="301" r="4.5" fill="#4d7c0f" />
              <circle cx="570" cy="300" r="1.5" fill="#fef08a" />
            </g>
            <text x="490" y="337" textAnchor="middle" fill="#713f12" fontSize="12.5" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif">
              Secondary consumers
            </text>
          </g>

          {/* TIER 2: Primary consumers */}
          <g
            cursor="pointer"
            onClick={() => onSelectTier?.("tier2")}
            onMouseEnter={() => setHoveredElement("tier2")}
            onMouseLeave={() => setHoveredElement(null)}
            opacity={!isBiomassActive && selectedTierId !== "tier2" ? 0.16 : 1}
          >
            <polygon
              points="335,345 645,345 695,415 285,415"
              fill={selectedTierId === "tier2" || hoveredElement === "tier2" ? "#e0f2fe" : "#bae6fd"}
              stroke={selectedTierId === "tier2" ? "#0284c7" : "#38bdf8"}
              strokeWidth={selectedTierId === "tier2" ? 3.5 : 2}
              filter={selectedTierId === "tier2" ? "url(#tier-glow)" : "url(#tier-shadow)"}
            />
            {/* Organisms: mouse, grasshopper, butterfly, caterpillar, ant */}
            <g opacity="0.9">
              {/* Mouse */}
              <ellipse cx="340" cy="375" rx="17" ry="11" fill="#475569" />
              <circle cx="354" cy="372" r="6" fill="#475569" />
              <path d="M 323,378 Q 312,385 306,382" stroke="#475569" strokeWidth="2" fill="none" />
              {/* Grasshopper */}
              <path d="M 408,382 L 422,370 L 434,382" stroke="#15803d" strokeWidth="2.8" fill="none" />
              <ellipse cx="420" cy="374" rx="9" ry="4" fill="#16a34a" />
              {/* Butterfly */}
              <circle cx="488" cy="374" r="3.5" fill="#d97706" />
              <path d="M 484,370 C 472,356 470,380 484,376 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
              <path d="M 492,370 C 504,356 506,380 492,376 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
              {/* Caterpillar */}
              <rect x="548" y="373" width="28" height="6.5" rx="3.2" fill="#65a30d" />
              <circle cx="578" cy="376" r="3" fill="#65a30d" />
              {/* Ant */}
              <ellipse cx="628" cy="377" rx="6" ry="4" fill="#991b1b" />
              <ellipse cx="636" cy="377" rx="5" ry="3" fill="#991b1b" />
            </g>
            <text x="490" y="407" textAnchor="middle" fill="#0369a1" fontSize="12.5" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif">
              Primary consumers
            </text>
          </g>

          {/* TIER 1: Primary producers */}
          <g
            cursor="pointer"
            onClick={() => onSelectTier?.("tier1")}
            onMouseEnter={() => setHoveredElement("tier1")}
            onMouseLeave={() => setHoveredElement(null)}
            opacity={!isBiomassActive && !isLightEnergyActive && selectedTierId !== "tier1" ? 0.16 : 1}
          >
            <polygon
              points="285,415 695,415 725,480 255,480"
              fill={selectedTierId === "tier1" || hoveredElement === "tier1" ? "#166534" : "#14532d"}
              stroke={selectedTierId === "tier1" ? "#22c55e" : "#15803d"}
              strokeWidth={selectedTierId === "tier1" ? 3.5 : 2}
              filter={selectedTierId === "tier1" ? "url(#tier-glow)" : "url(#tier-shadow)"}
            />
            {/* Landscape with grass/trees silhouette */}
            <g opacity="0.65">
              <circle cx="410" cy="438" r="14" fill="#4ade80" />
              <circle cx="430" cy="432" r="16" fill="#86efac" />
              <circle cx="450" cy="439" r="13" fill="#4ade80" />
              <path d="M 660,460 L 670,432 L 680,460 Z" fill="#22c55e" />
              <path d="M 675,460 L 685,426 L 695,460 Z" fill="#4ade80" />
            </g>
            <text x="490" y="472" textAnchor="middle" fill="#f0fdf4" fontSize="13.5" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif">
              Primary producers
            </text>
          </g>

          {/* ========================================================
              BOTTOM INPUT: Light energy
             ======================================================== */}
          <g
            opacity={isLightEnergyActive ? 1 : 0.16}
            filter={activeMode === "light_energy" ? "url(#sun-glow)" : "none"}
          >
            <line x1="490" y1="545" x2="490" y2="492" stroke="#0f172a" strokeWidth={activeMode === "light_energy" ? 3.5 : 2.8} markerEnd="url(#arrow-black)" />
            <text
              x="490"
              y="568"
              textAnchor="middle"
              fill={activeMode === "light_energy" ? "#ca8a04" : "#0f172a"}
              fontSize={activeMode === "light_energy" ? "16.5" : "15"}
              fontWeight="800"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              Light energy
            </text>
          </g>

          {/* ========================================================
              RIGHT SIDE: Energy stored as biomass & kcal/m2/yr values
             ======================================================== */}
          <g
            opacity={isBiomassActive ? 1 : 0.16}
            filter={activeMode === "biomass" ? "url(#tier-glow)" : "none"}
          >
            {/* TIER 5 Value */}
            <text x="640" y="180" fill="#f43f5e" fontSize="14" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif">
              2 kcal/m²/yr
            </text>

            {/* TIER 4 Value */}
            <text x="660" y="245" fill="#f97316" fontSize="14" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif">
              20 kcal/m²/yr
            </text>

            {/* TIER 3 Value */}
            <text x="690" y="315" fill="#ca8a04" fontSize="14" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif">
              200 kcal/m²/yr
            </text>

            {/* TIER 2 Value */}
            <text x="725" y="385" fill="#0284c7" fontSize="14" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif">
              2,000 kcal/m²/yr
            </text>

            {/* TIER 1 Value */}
            <text x="750" y="455" fill="#16a34a" fontSize="14" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif">
              20,000 kcal/m²/yr
            </text>

            {/* Curved upward arrows on right */}
            <path d="M 720,440 Q 710,405 700,390" fill="none" stroke="#0f172a" strokeWidth="2" markerEnd="url(#arrow-black)" />
            <path d="M 685,370 Q 675,340 660,320" fill="none" stroke="#0f172a" strokeWidth="2" markerEnd="url(#arrow-black)" />
            <path d="M 645,300 Q 630,270 615,250" fill="none" stroke="#0f172a" strokeWidth="2" markerEnd="url(#arrow-black)" />
            <path d="M 590,230 Q 575,205 560,190" fill="none" stroke="#0f172a" strokeWidth="2" markerEnd="url(#arrow-black)" />

            {/* Bracket and Label: Energy stored as biomass */}
            <path d="M 740,496 L 740,504 L 945,504 L 945,496" fill="none" stroke="#0f172a" strokeWidth="2.2" />
            <text x="842" y="528" textAnchor="middle" fill="#0f172a" fontSize="13.5" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif">
              Energy stored
            </text>
            <text x="842" y="548" textAnchor="middle" fill="#0f172a" fontSize="13.5" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif">
              as biomass
            </text>
          </g>

          {/* ========================================================
              LEFT SIDE: HEAT DISSIPATION SQUIGGLY ARROWS
             ======================================================== */}
          <g
            opacity={isHeatActive ? 1 : 0.16}
            filter={activeMode === "heat" ? "url(#heat-glow)" : "none"}
          >
            {/* Heat from Quaternary */}
            <path d="M 430,175 Q 418,170 412,160 Q 406,150 400,152" fill="none" stroke={activeMode === "heat" ? "#ea580c" : "#0f172a"} strokeWidth={activeMode === "heat" ? 3 : 2} markerEnd="url(#arrow-black)" />
            <text x="395" y="142" textAnchor="end" fill={activeMode === "heat" ? "#ea580c" : "#0f172a"} fontSize={activeMode === "heat" ? "15" : "13"} fontWeight="800">Heat</text>

            {/* Heat from Tertiary */}
            <path d="M 380,240 Q 365,235 358,225 Q 350,215 342,217" fill="none" stroke={activeMode === "heat" ? "#ea580c" : "#0f172a"} strokeWidth={activeMode === "heat" ? 3 : 2} markerEnd="url(#arrow-black)" />
            <text x="338" y="210" textAnchor="end" fill={activeMode === "heat" ? "#ea580c" : "#0f172a"} fontSize={activeMode === "heat" ? "15" : "13"} fontWeight="800">Heat</text>

            {/* Heat from Secondary */}
            <path d="M 330,305 Q 315,300 308,290 Q 300,280 292,282" fill="none" stroke={activeMode === "heat" ? "#ea580c" : "#0f172a"} strokeWidth={activeMode === "heat" ? 3 : 2} markerEnd="url(#arrow-black)" />
            <text x="288" y="275" textAnchor="end" fill={activeMode === "heat" ? "#ea580c" : "#0f172a"} fontSize={activeMode === "heat" ? "15" : "13"} fontWeight="800">Heat</text>

            {/* Heat from Primary Consumers */}
            <path d="M 280,375 Q 265,370 258,360 Q 250,350 242,352" fill="none" stroke={activeMode === "heat" ? "#ea580c" : "#0f172a"} strokeWidth={activeMode === "heat" ? 3 : 2} markerEnd="url(#arrow-black)" />
            <text x="238" y="345" textAnchor="end" fill={activeMode === "heat" ? "#ea580c" : "#0f172a"} fontSize={activeMode === "heat" ? "15" : "13"} fontWeight="800">Heat</text>

            {/* Heat from Primary Producers */}
            <path d="M 250,440 Q 235,435 228,425 Q 220,415 212,417" fill="none" stroke={activeMode === "heat" ? "#ea580c" : "#0f172a"} strokeWidth={activeMode === "heat" ? 3 : 2} markerEnd="url(#arrow-black)" />
            <text x="208" y="410" textAnchor="end" fill={activeMode === "heat" ? "#ea580c" : "#0f172a"} fontSize={activeMode === "heat" ? "15" : "13"} fontWeight="800">Heat</text>

            {/* Heat from DECOMPOSERS */}
            <path d="M 95,405 Q 85,395 82,385 Q 78,375 75,377" fill="none" stroke={activeMode === "heat" ? "#ea580c" : "#0f172a"} strokeWidth={activeMode === "heat" ? 3 : 2} markerEnd="url(#arrow-black)" />
            <text x="72" y="365" textAnchor="middle" fill={activeMode === "heat" ? "#ea580c" : "#0f172a"} fontSize={activeMode === "heat" ? "15" : "13"} fontWeight="800">Heat</text>
          </g>

          {/* ========================================================
              LEFT SIDE: DECOMPOSERS & WASTE/DEAD MATTER
              EXACT ARROWS: ALL CONVERGE FROM PYRAMID INTO DECOMPOSERS!
             ======================================================== */}
          <g opacity={isWasteActive || isDecomposersActive ? 1 : 0.16}>
            {/* Label: Waste & dead matter */}
            <text
              x="175"
              y="222"
              textAnchor="middle"
              fill={activeMode === "waste" ? "#e11d48" : "#0f172a"}
              fontSize={activeMode === "waste" ? "15" : "13.5"}
              fontWeight="800"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              Waste &amp;
            </text>
            <text
              x="175"
              y="242"
              textAnchor="middle"
              fill={activeMode === "waste" ? "#e11d48" : "#0f172a"}
              fontSize={activeMode === "waste" ? "15" : "13.5"}
              fontWeight="800"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              dead matter
            </text>

            {/* 1. Pink arrow: FROM Quaternary consumers (Tier 5) INTO top of DECOMPOSERS */}
            <path
              d="M 435,185 C 240,185 140,260 115,410"
              fill="none"
              stroke="#f43f5e"
              strokeWidth={activeMode === "waste" ? 3.5 : 2.5}
              markerEnd="url(#arrow-pink)"
            />

            {/* 2. Yellow arrow: FROM Secondary consumers (Tier 3) INTO top of DECOMPOSERS */}
            <path
              d="M 335,310 C 225,320 150,355 135,410"
              fill="none"
              stroke="#eab308"
              strokeWidth={activeMode === "waste" ? 3.5 : 2.4}
              markerEnd="url(#arrow-yellow)"
            />

            {/* 3. Cyan arrow: FROM Primary consumers (Tier 2) INTO side of DECOMPOSERS */}
            <line
              x1="285"
              y1="385"
              x2="185"
              y2="425"
              stroke="#0284c7"
              strokeWidth={activeMode === "waste" ? 3.5 : 2.4}
              markerEnd="url(#arrow-cyan)"
            />

            {/* 4. Green arrow: FROM Primary producers (Tier 1) CURVING UP INTO bottom of DECOMPOSERS */}
            <path
              d="M 255,455 C 205,485 130,485 107,455"
              fill="none"
              stroke="#16a34a"
              strokeWidth={activeMode === "waste" ? 3.5 : 2.5}
              markerEnd="url(#arrow-green)"
            />

            {/* DECOMPOSERS BOX */}
            <g
              cursor="pointer"
              onClick={() => onSelectTier?.("decomposers")}
              onMouseEnter={() => setHoveredElement("decomposers")}
              onMouseLeave={() => setHoveredElement(null)}
              opacity={isDecomposersActive ? 1 : 0.16}
            >
              <rect
                x="35"
                y="415"
                width="145"
                height="35"
                rx="4"
                fill={
                  selectedTierId === "decomposers" ||
                  hoveredElement === "decomposers" ||
                  activeMode === "decomposers"
                    ? "#f0fdf4"
                    : "#ffffff"
                }
                stroke={activeMode === "decomposers" ? "#16a34a" : "#0f172a"}
                strokeWidth={
                  selectedTierId === "decomposers" || activeMode === "decomposers" ? 3.5 : 2
                }
                filter={
                  selectedTierId === "decomposers" || activeMode === "decomposers"
                    ? "url(#tier-glow)"
                    : "none"
                }
              />
              <text
                x="107"
                y="438"
                textAnchor="middle"
                fill={activeMode === "decomposers" ? "#166534" : "#0f172a"}
                fontSize="13"
                fontWeight="800"
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                DECOMPOSERS
              </text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};
