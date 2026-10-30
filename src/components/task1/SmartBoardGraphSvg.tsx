import React, { useState } from "react";
import {
  RotateCcw,
  Sparkles,
  Info,
  CheckCircle2,
  Award,
  Layers,
  ChevronRight,
  Flame,
  Boxes,
  Workflow,
  Eye,
  EyeOff,
  Maximize2
} from "lucide-react";

export type DiagramViewMode =
  | "all"
  | "both"
  | "cement"
  | "concrete"
  | "crushing"
  | "mixing"
  | "heating"
  | "grinding"
  | "packaging"
  | "gravel"
  | "sand"
  | "cement_ing"
  | "water"
  | "mixer_drum"
  | string;

export type TableHighlightMode = DiagramViewMode;
export type GraphHighlightMode = DiagramViewMode;

export interface ParameterMetric {
  label: string;
  value: string;
}

export interface HotspotDefinition {
  id: string;
  box: "cement" | "concrete";
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

export const CEMENT_HOTSPOTS: HotspotDefinition[] = [
  {
    id: "crushing",
    box: "cement",
    number: "1",
    name: "1. Limestone & Clay Crusher",
    equipmentOrRole: "Crusher (Two Rollers)",
    color: "#2563eb",
    pin: { left: "44%", top: "21%" },
    highlight: { x: "18%", y: "13%", w: "58%", h: "23%" },
    description: "Raw limestone and clay are fed into a mechanical crusher to be pulverized into a fine powder.",
    band9Phrase: "“Initially, limestone and clay are passed through a crusher to be pulverized into a fine powder.”",
    grammaticalFocus: "Passive Voice: 'are passed through... to be pulverized'",
    examinerFocus: "Accurately specifies raw input minerals (limestone and clay) and passive transformation into fine powder.",
    parameterMetrics: [
      { label: "Process Stage", value: "Stage 1 of 5" },
      { label: "Machinery", value: "Two Counter-Rotating Rollers" },
      { label: "Physical Change", value: "Pulverized into Powder" }
    ]
  },
  {
    id: "mixing",
    box: "cement",
    number: "2",
    name: "2. Industrial Blending Mixer",
    equipmentOrRole: "Mixer (Horizontal Drum)",
    color: "#0284c7",
    pin: { left: "76%", top: "35%" },
    highlight: { x: "54%", y: "27%", w: "43%", h: "20%" },
    description: "The powdered mixture is transferred to an industrial mixer to achieve a uniform, homogeneous blend.",
    band9Phrase: "“This powdered mixture is then fed into an industrial mixer to achieve a uniform blend...”",
    grammaticalFocus: "Sequential Linker: 'is then fed into... to achieve a uniform blend'",
    examinerFocus: "Bridges mechanical crushing with thermal processing using clear sequential discourse cohesion.",
    parameterMetrics: [
      { label: "Process Stage", value: "Stage 2 of 5" },
      { label: "Machinery", value: "Industrial Blending Chamber" },
      { label: "Outcome", value: "Uniform Mineral Blend" }
    ]
  },
  {
    id: "heating",
    box: "cement",
    number: "3",
    name: "3. Rotating Heater / Kiln",
    equipmentOrRole: "Rotating Heater + Direct Flame",
    color: "#ea580c",
    pin: { left: "55%", top: "54%" },
    highlight: { x: "15%", y: "47%", w: "76%", h: "27%" },
    description: "The mixture enters an inclined rotating cylinder heater where intense heat is applied directly from the base as the drum turns.",
    band9Phrase: "“...entering an elongated, rotating cylinder heater, where the substance is subjected to intense heat applied from the lower end.”",
    grammaticalFocus: "Participial Detail: 'subjected to intense heat applied from the lower end as the drum revolves'",
    examinerFocus: "Identifies central thermal alteration in an inclined rotating cylinder kiln with direct flame from the base.",
    parameterMetrics: [
      { label: "Process Stage", value: "Stage 3 of 5" },
      { label: "Machinery", value: "Inclined Rotating Cylinder" },
      { label: "Thermal Source", value: "Direct Intense Heat from Base" }
    ]
  },
  {
    id: "grinding",
    box: "cement",
    number: "4",
    name: "4. Conveyor Belt & Grinder",
    equipmentOrRole: "Grinder & Moving Belt",
    color: "#7c3aed",
    pin: { left: "36%", top: "75%" },
    highlight: { x: "18%", y: "68%", w: "52%", h: "20%" },
    description: "Having exited the heater, the material travels along a conveyor belt to a grinder, where it is milled into fine cement.",
    band9Phrase: "“After being heated, the resulting mixture is transported along a conveyor belt to a grinder, where it is milled into fine cement.”",
    grammaticalFocus: "Prepositional Clause: 'After being heated, the resulting mixture is transported...'",
    examinerFocus: "Captures intermediate conveyor transport and secondary milling into refined finished cement clinker.",
    parameterMetrics: [
      { label: "Process Stage", value: "Stage 4 of 5" },
      { label: "Transport", value: "Moving Conveyor Belt" },
      { label: "Final Milling", value: "Milled into Fine Cement" }
    ]
  },
  {
    id: "packaging",
    box: "cement",
    number: "5",
    name: "5. Packaging & Bagging",
    equipmentOrRole: "Bags of Cement",
    color: "#059669",
    pin: { left: "80%", top: "84%" },
    highlight: { x: "62%", y: "77%", w: "35%", h: "20%" },
    description: "The finished cement is poured into heavy-duty bags, ready for commercial storage, transport, or immediate concrete mixing.",
    band9Phrase: "“Finally, the finished product is poured into heavy-duty bags, ready for commercial distribution or immediate construction use.”",
    grammaticalFocus: "Concluding Marker: 'Finally, the finished product is poured into bags...'",
    examinerFocus: "Marks culminating output: commercial bagging ready for distribution or the subsequent concrete batch mix.",
    parameterMetrics: [
      { label: "Process Stage", value: "Stage 5 of 5" },
      { label: "Packaging Format", value: "Heavy-Duty Sealed Sacks" },
      { label: "Application", value: "Storage / Concrete Formulation" }
    ]
  }
];

export const CONCRETE_HOTSPOTS: HotspotDefinition[] = [
  {
    id: "gravel",
    box: "concrete",
    number: "50%",
    name: "Gravel* (50%) — Coarse Aggregate",
    equipmentOrRole: "Coarse Aggregate (*small stones)",
    color: "#475569",
    pin: { left: "75%", top: "25%" },
    highlight: { x: "58%", y: "17%", w: "38%", h: "22%" },
    description: "Gravel (small stones) constitutes precisely half (50%) of the total mixture, serving as the primary bulk aggregate.",
    band9Phrase: "“Gravel, consisting of small stones, constitutes half (50%) of the total mixture, serving as the primary coarse aggregate.”",
    grammaticalFocus: "Proportion Verb: 'constitutes half (50%) of the total mixture'",
    examinerFocus: "Reports the dominant 50% coarse aggregate (small stones) that accounts for half the entire volume.",
    parameterMetrics: [
      { label: "Mixture Ratio", value: "50% (Exactly Half)" },
      { label: "Structural Role", value: "Primary Coarse Aggregate" },
      { label: "Physical Form", value: "Small Stones" }
    ]
  },
  {
    id: "sand",
    box: "concrete",
    number: "25%",
    name: "Sand (25%) — Fine Aggregate",
    equipmentOrRole: "Fine Aggregate",
    color: "#d97706",
    pin: { left: "32%", top: "25%" },
    highlight: { x: "12%", y: "17%", w: "38%", h: "22%" },
    description: "Sand accounts for a quarter (25%) of the blend, filling interstitial voids between the larger gravel stones.",
    band9Phrase: "“...followed by sand, which accounts for a quarter (25%) of the blend as a fine aggregate.”",
    grammaticalFocus: "Fractional Precision: 'accounts for a quarter (25%)'",
    examinerFocus: "Combines with gravel to form total aggregates (75%) while accurately isolating the 25% fraction.",
    parameterMetrics: [
      { label: "Mixture Ratio", value: "25% (One Quarter)" },
      { label: "Structural Role", value: "Fine Aggregate" },
      { label: "Combined Aggregates", value: "75% (Gravel + Sand)" }
    ]
  },
  {
    id: "cement_ing",
    box: "concrete",
    number: "15%",
    name: "Cement (15%) — Binding Agent",
    equipmentOrRole: "Binder (from Diagram 1)",
    color: "#2563eb",
    pin: { left: "18%", top: "15%" },
    highlight: { x: "6%", y: "7%", w: "36%", h: "20%" },
    description: "Manufactured cement from Diagram 1 comprises 15% of the composition to act as the essential binding adhesive.",
    band9Phrase: "“Cement makes up 15% of the composition to bind the components together.”",
    grammaticalFocus: "Purpose Infinitive: 'makes up 15% to bind the components together'",
    examinerFocus: "Vital inter-diagram cohesion: output of Diagram 1 serves as the prerequisite 15% binder in Diagram 2.",
    parameterMetrics: [
      { label: "Mixture Ratio", value: "15% Binder" },
      { label: "Structural Role", value: "Primary Binding Adhesive" },
      { label: "Prerequisite", value: "Manufactured via Diagram 1" }
    ]
  },
  {
    id: "water",
    box: "concrete",
    number: "10%",
    name: "Water (10%) — Hydration Liquid",
    equipmentOrRole: "Hydration Activator",
    color: "#0284c7",
    pin: { left: "82%", top: "15%" },
    highlight: { x: "65%", y: "7%", w: "32%", h: "22%" },
    description: "Water represents the smallest fraction at 10%, activating the chemical hydration reaction to turn dry powders into workable wet slurry.",
    band9Phrase: "“...while water represents the smallest portion at just 10% to activate hydration.”",
    grammaticalFocus: "Superlative Comparison: 'represents the smallest portion at just 10%'",
    examinerFocus: "Identifies smallest proportion (10%) triggering hydration without which the binder cannot harden.",
    parameterMetrics: [
      { label: "Mixture Ratio", value: "10% (Smallest Portion)" },
      { label: "Chemical Role", value: "Hydration Activator" },
      { label: "Output State", value: "Fluid Workable Slurry" }
    ]
  },
  {
    id: "mixer_drum",
    box: "concrete",
    number: "Mixer",
    name: "Concrete Mixer (Rotating Drum)",
    equipmentOrRole: "Rotating Mechanical Mixer",
    color: "#059669",
    pin: { left: "50%", top: "68%" },
    highlight: { x: "14%", y: "44%", w: "74%", h: "50%" },
    description: "All four ingredients are poured simultaneously into the concrete drum, which rotates clockwise to blend them into usable wet concrete.",
    band9Phrase: "“Once all four elements are poured simultaneously into the concrete drum, the machine rotates to blend the slurry into usable wet concrete.”",
    grammaticalFocus: "Simultaneous Process: 'Once all four elements are poured simultaneously...'",
    examinerFocus: "Highlights contrast between single-stage simultaneous rotation and the 5 linear cement stages.",
    parameterMetrics: [
      { label: "Mixing Mode", value: "Single-Stage Batch Mix" },
      { label: "Vessel", value: "Rotating Cylindrical Drum" },
      { label: "Final Product", value: "Usable Wet Concrete" }
    ]
  }
];

export const ALL_HOTSPOTS = [...CEMENT_HOTSPOTS, ...CONCRETE_HOTSPOTS];

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
  selectedCohortId: controlledCategoryId,
  onSelectCohort,
  showInternalToolbar = true,
  showDeepDiveCard = true
}) => {
  const [activeViewTab, setActiveViewTab] = useState<"both" | "cement" | "concrete">("both");
  const [activeHotspotId, setActiveHotspotId] = useState<string>("heating");
  const [showPins, setShowPins] = useState<boolean>(true);

  // Synchronize internal state when controlled selection changes from the presenter dock
  React.useEffect(() => {
    if (controlledCategoryId && controlledCategoryId !== "all") {
      setActiveHotspotId(controlledCategoryId);
      const match = ALL_HOTSPOTS.find((h) => h.id === controlledCategoryId);
      if (match && activeViewTab !== "both" && activeViewTab !== match.box) {
        setActiveViewTab(match.box);
      }
    }
  }, [controlledCategoryId]);

  React.useEffect(() => {
    if (
      highlightMode &&
      highlightMode !== "all" &&
      highlightMode !== "both" &&
      highlightMode !== "cement" &&
      highlightMode !== "concrete"
    ) {
      const match = ALL_HOTSPOTS.find((h) => h.id === highlightMode);
      if (match) {
        setActiveHotspotId(match.id);
        if (activeViewTab !== "both" && activeViewTab !== match.box) {
          setActiveViewTab(match.box);
        }
      }
    }
  }, [highlightMode]);

  const activeHotspot =
    ALL_HOTSPOTS.find((h) => h.id === activeHotspotId) || CEMENT_HOTSPOTS[2];

  const handleSelectHotspot = (hotspot: HotspotDefinition) => {
    setActiveHotspotId(hotspot.id);
    if (onSelectCohort) onSelectCohort(hotspot.id);
    if (onHighlightModeChange) onHighlightModeChange(hotspot.id);
  };

  const handleReset = () => {
    setActiveViewTab("both");
    setActiveHotspotId("heating");
    setShowPins(true);
    if (onHighlightModeChange) onHighlightModeChange("all");
  };

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
          {/* View Toggles */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--slate-500, #64748b)" }}>
              View:
            </span>
            {[
              { id: "both", label: "Both Diagrams (Student Pamphlet Format)" },
              { id: "cement", label: "1. Cement Production (5 Stages)" },
              { id: "concrete", label: "2. Concrete Production (4 Ingredients)" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveViewTab(tab.id as any)}
                style={{
                  padding: "5px 12px",
                  borderRadius: "8px",
                  fontSize: "0.78rem",
                  fontWeight: 750,
                  border: activeViewTab === tab.id ? "1.5px solid #0f172a" : "1px solid #e2e8f0",
                  background: activeViewTab === tab.id ? "#0f172a" : "#f8fafc",
                  color: activeViewTab === tab.id ? "#ffffff" : "#334155",
                  cursor: "pointer",
                  transition: "all 0.15s ease"
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick-Jump Step Chips & Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--slate-500, #64748b)" }}>
              Steps:
            </span>

            {/* Cement Stage Buttons */}
            {CEMENT_HOTSPOTS.map((h) => {
              const isSelected = activeHotspotId === h.id;
              return (
                <button
                  key={h.id}
                  onClick={() => handleSelectHotspot(h)}
                  title={h.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "3px 8px",
                    borderRadius: "6px",
                    fontSize: "0.74rem",
                    fontWeight: 750,
                    border: isSelected ? `2px solid ${h.color}` : "1px solid #e2e8f0",
                    background: isSelected ? `${h.color}18` : "#ffffff",
                    color: isSelected ? h.color : "#475569",
                    cursor: "pointer"
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: h.color
                    }}
                  />
                  <span>{h.equipmentOrRole.split(" ")[0]}</span>
                </button>
              );
            })}

            {/* Concrete Ingredient Buttons */}
            {CONCRETE_HOTSPOTS.map((h) => {
              const isSelected = activeHotspotId === h.id;
              return (
                <button
                  key={h.id}
                  onClick={() => handleSelectHotspot(h)}
                  title={h.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "3px 8px",
                    borderRadius: "6px",
                    fontSize: "0.74rem",
                    fontWeight: 750,
                    border: isSelected ? `2px solid ${h.color}` : "1px solid #e2e8f0",
                    background: isSelected ? `${h.color}18` : "#ffffff",
                    color: isSelected ? h.color : "#475569",
                    cursor: "pointer"
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: h.color
                    }}
                  />
                  <span>{h.number}</span>
                </button>
              );
            })}

            {/* Toggle Pins Button */}
            <button
              onClick={() => setShowPins(!showPins)}
              title={showPins ? "Hide Hotspot Pins" : "Show Hotspot Pins"}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "3px 8px",
                borderRadius: "6px",
                fontSize: "0.74rem",
                fontWeight: 700,
                border: "1px solid #e2e8f0",
                background: showPins ? "#f8fafc" : "#e2e8f0",
                color: "#475569",
                cursor: "pointer"
              }}
            >
              {showPins ? <Eye size={12} /> : <EyeOff size={12} />}
              <span>{showPins ? "Pins On" : "Pins Off"}</span>
            </button>

            {/* Reset */}
            <button
              onClick={handleReset}
              title="Reset Filters"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "3px 8px",
                borderRadius: "6px",
                fontSize: "0.74rem",
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

      {/* Main Diagrams Stage — EXACT IDENTICAL PAMPHLET LAYOUT (SIDE-BY-SIDE BOXES) */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "18px",
          border: "1.5px solid var(--border-subtle, #cbd5e1)",
          padding: "16px 20px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "center"
        }}
      >
        {/* Stage Header Info Banner */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Workflow size={18} color="#2563eb" />
            <strong style={{ fontSize: "0.98rem", color: "#0f172a" }}>
              Authentic Task Visuals • Identical Format to Student Pamphlet
            </strong>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                fontSize: "0.74rem",
                fontWeight: 750,
                background: "#f1f5f9",
                color: "#475569",
                padding: "2px 8px",
                borderRadius: "6px",
                border: "1px solid #e2e8f0"
              }}
            >
              Touch any equipment or pin on the Smartboard to explore
            </span>
          </div>
        </div>

        {/* Side-by-Side Diagram Boxes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              activeViewTab === "both"
                ? "repeat(2, minmax(0, 1fr))"
                : "minmax(0, 520px)",
            justifyContent: "center",
            gap: "20px",
            width: "100%",
            maxWidth: activeViewTab === "both" ? "880px" : "520px",
            margin: "0 auto"
          }}
        >
          {/* Box 1: Cement Production (Left Box in Student Pamphlet) */}
          {(activeViewTab === "both" || activeViewTab === "cement") && (
            <div
              style={{
                position: "relative",
                background: "#ffffff",
                border: "2px solid #1e293b",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              {/* Box Image: Exact reproduction of Cement Production from student pamphlet */}
              <img
                src="materials/cement_production_clean.png"
                alt="Cement Production Process Diagram"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  userSelect: "none",
                  pointerEvents: "none"
                }}
              />

              {/* Interactive SVG Hotspot Overlays */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "auto"
                }}
              >
                {CEMENT_HOTSPOTS.map((h) => {
                  const isSelected = activeHotspotId === h.id;
                  return (
                    <React.Fragment key={h.id}>
                      {/* Clickable Zone & Glowing Highlight Halo */}
                      <div
                        onClick={() => handleSelectHotspot(h)}
                        style={{
                          position: "absolute",
                          left: h.highlight.x,
                          top: h.highlight.y,
                          width: h.highlight.w,
                          height: h.highlight.h,
                          borderRadius: "8px",
                          border: isSelected
                            ? `2.5px solid ${h.color}`
                            : "1.5px solid transparent",
                          background: isSelected ? `${h.color}15` : "transparent",
                          boxShadow: isSelected ? `0 0 12px ${h.color}60` : "none",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          zIndex: isSelected ? 15 : 5
                        }}
                      />

                      {/* Floating Hotspot Pin Beacon */}
                      {showPins && (
                        <div
                          onClick={() => handleSelectHotspot(h)}
                          title={`${h.name} — Click to inspect`}
                          style={{
                            position: "absolute",
                            left: h.pin.left,
                            top: h.pin.top,
                            transform: "translate(-50%, -50%)",
                            cursor: "pointer",
                            zIndex: isSelected ? 20 : 10,
                            display: "flex",
                            alignItems: "center",
                            gap: "4px"
                          }}
                        >
                          <div
                            style={{
                              width: isSelected ? "24px" : "20px",
                              height: isSelected ? "24px" : "20px",
                              borderRadius: "50%",
                              background: h.color,
                              color: "#ffffff",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontWeight: 800,
                              fontSize: isSelected ? "0.76rem" : "0.7rem",
                              boxShadow: isSelected
                                ? `0 0 0 4px ${h.color}30, 0 3px 8px rgba(0,0,0,0.3)`
                                : "0 2px 5px rgba(0,0,0,0.25)",
                              transition: "all 0.2s ease"
                            }}
                          >
                            {h.number}
                          </div>

                          {isSelected && (
                            <span
                              style={{
                                background: "#0f172a",
                                color: "#ffffff",
                                fontSize: "0.68rem",
                                fontWeight: 750,
                                padding: "2px 6px",
                                borderRadius: "4px",
                                whiteSpace: "nowrap",
                                boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
                              }}
                            >
                              {h.equipmentOrRole.split(" ")[0]}
                            </span>
                          )}
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          )}

          {/* Box 2: Concrete Production (Right Box in Student Pamphlet) */}
          {(activeViewTab === "both" || activeViewTab === "concrete") && (
            <div
              style={{
                position: "relative",
                background: "#ffffff",
                border: "2px solid #1e293b",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              {/* Box Image: Exact reproduction of Concrete Production from student pamphlet */}
              <img
                src="materials/concrete_production_clean.png"
                alt="Concrete Production Process Diagram"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  userSelect: "none",
                  pointerEvents: "none"
                }}
              />

              {/* Interactive SVG Hotspot Overlays */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "auto"
                }}
              >
                {CONCRETE_HOTSPOTS.map((h) => {
                  const isSelected = activeHotspotId === h.id;
                  return (
                    <React.Fragment key={h.id}>
                      {/* Clickable Zone & Glowing Highlight Halo */}
                      <div
                        onClick={() => handleSelectHotspot(h)}
                        style={{
                          position: "absolute",
                          left: h.highlight.x,
                          top: h.highlight.y,
                          width: h.highlight.w,
                          height: h.highlight.h,
                          borderRadius: "8px",
                          border: isSelected
                            ? `2.5px solid ${h.color}`
                            : "1.5px solid transparent",
                          background: isSelected ? `${h.color}15` : "transparent",
                          boxShadow: isSelected ? `0 0 12px ${h.color}60` : "none",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          zIndex: isSelected ? 15 : 5
                        }}
                      />

                      {/* Floating Hotspot Pin Beacon */}
                      {showPins && (
                        <div
                          onClick={() => handleSelectHotspot(h)}
                          title={`${h.name} — Click to inspect`}
                          style={{
                            position: "absolute",
                            left: h.pin.left,
                            top: h.pin.top,
                            transform: "translate(-50%, -50%)",
                            cursor: "pointer",
                            zIndex: isSelected ? 20 : 10,
                            display: "flex",
                            alignItems: "center",
                            gap: "4px"
                          }}
                        >
                          <div
                            style={{
                              padding: "2px 6px",
                              borderRadius: "10px",
                              background: h.color,
                              color: "#ffffff",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontWeight: 800,
                              fontSize: "0.68rem",
                              boxShadow: isSelected
                                ? `0 0 0 4px ${h.color}30, 0 3px 8px rgba(0,0,0,0.3)`
                                : "0 2px 5px rgba(0,0,0,0.25)",
                              transition: "all 0.2s ease"
                            }}
                          >
                            {h.number}
                          </div>

                          {isSelected && (
                            <span
                              style={{
                                background: "#0f172a",
                                color: "#ffffff",
                                fontSize: "0.68rem",
                                fontWeight: 750,
                                padding: "2px 6px",
                                borderRadius: "4px",
                                whiteSpace: "nowrap",
                                boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
                              }}
                            >
                              {h.name.split(" ")[0]}
                            </span>
                          )}
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Synchronized Smartboard Pedagogical Deep Dive Card */}
      {showDeepDiveCard && activeHotspot && (
        <div
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            border: `1.5px solid ${activeHotspot.color}40`,
            padding: "16px 20px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
            display: "flex",
            flexDirection: "column",
            gap: "10px"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Award size={18} color={activeHotspot.color} />
              <h4 style={{ fontSize: "1.02rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                {activeHotspot.name}
              </h4>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  padding: "2px 8px",
                  borderRadius: "6px",
                  background: activeHotspot.box === "cement" ? "#eff6ff" : "#ecfdf5",
                  color: activeHotspot.box === "cement" ? "#1e40af" : "#065f46"
                }}
              >
                {activeHotspot.box === "cement" ? "Cement Production Stage" : "Concrete Component"}
              </span>
            </div>

            <span
              style={{
                fontSize: "0.74rem",
                fontWeight: 800,
                padding: "3px 10px",
                borderRadius: "8px",
                background: `${activeHotspot.color}15`,
                color: activeHotspot.color
              }}
            >
              {activeHotspot.grammaticalFocus}
            </span>
          </div>

          <p style={{ fontSize: "0.88rem", color: "#334155", margin: 0, lineHeight: 1.5 }}>
            <strong>Mechanical Operation:</strong> {activeHotspot.description}
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderLeft: `3.5px solid ${activeHotspot.color}`,
              borderRadius: "8px",
              padding: "10px 14px",
              fontSize: "0.92rem",
              color: "#1e293b",
              lineHeight: 1.55,
              fontStyle: "italic"
            }}
          >
            {activeHotspot.band9Phrase}
          </div>
        </div>
      )}
    </div>
  );
};
