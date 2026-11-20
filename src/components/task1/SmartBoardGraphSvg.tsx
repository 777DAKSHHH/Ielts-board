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
  Sliders,
  ChevronRight,
  ArrowRight,
  Flame,
  Filter,
  RefreshCw,
  Wind,
  Sun,
  Tractor
} from "lucide-react";
import { SUGARCANE_PROCESS_STAGES } from "../../data/task1Data";

export type DiagramViewMode =
  | "all"
  | "stage-1"
  | "stage-2"
  | "stage-3"
  | "stage-4"
  | "stage-5"
  | "stage-6"
  | "stage-7"
  | "phase-1"
  | "phase-2"
  | "macro-overview"
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

export const STAGE_HOTSPOTS: HotspotDefinition[] = [
  {
    id: "stage-1",
    box: "phase-1",
    number: "Stage 01",
    name: "1. Growing (12–18 Months)",
    equipmentOrRole: "Agricultural Field Cultivation",
    color: "#16a34a",
    pin: { left: "49%", top: "27%" },
    highlight: { x: "36%", y: "21%", w: "28%", h: "13%" },
    description:
      "Sugarcanes are grown in agricultural fields over an extended maturation cycle spanning 12 to 18 months before reaching harvestable maturity.",
    band9Phrase:
      "“Sugarcanes are initially cultivated in open agricultural fields over an extended maturation timeframe of 12 to 18 months.”",
    grammaticalFocus: "Present simple passive: 'are initially cultivated in open agricultural fields over...'",
    examinerFocus: "Explicitly report the 12–18 month growing timeframe in Body Paragraph 1.",
    parameterMetrics: [
      { label: "Raw Input", value: "Sugarcane seedlings" },
      { label: "Maturation", value: "12–18 months" },
      { label: "Environment", value: "Agricultural Field" },
      { label: "Passive Verb", value: "are grown / cultivated" }
    ]
  },
  {
    id: "stage-2",
    box: "phase-1",
    number: "Stage 02",
    name: "2. Harvesting (Dual Method)",
    equipmentOrRole: "Combine Harvester vs Manual Sickle",
    color: "#059669",
    pin: { left: "49%", top: "45%" },
    highlight: { x: "18%", y: "37%", w: "64%", h: "15%" },
    description:
      "Mature stalks are harvested utilizing one of two methods: either mechanically by agricultural combine vehicles or manually by laborers cutting them with hand blades.",
    band9Phrase:
      "“Once mature, the canes are harvested utilizing one of two methods: either mechanically by combine vehicles or manually by agricultural workers using hand blades.”",
    grammaticalFocus: "Correlative conjunction + passive: 'either mechanically by combine vehicles or manually by agricultural workers...'",
    examinerFocus: "Essential Band 9 comparison: candidate must report BOTH mechanical and manual harvesting.",
    parameterMetrics: [
      { label: "Method A", value: "Mechanised combine vehicle" },
      { label: "Method B", value: "Manual reaping by hand" },
      { label: "Output", value: "Cut sugarcane stalks" },
      { label: "Passive Verb", value: "are harvested / cut" }
    ]
  },
  {
    id: "stage-3",
    box: "phase-1",
    number: "Stage 03",
    name: "3. Crushing (Juice Extraction)",
    equipmentOrRole: "Rotating Cylindrical Rollers",
    color: "#0284c7",
    pin: { left: "49%", top: "64%" },
    highlight: { x: "32%", y: "56%", w: "36%", h: "15%" },
    description:
      "Harvested stalks are fed into a mechanical crushing unit equipped with heavy rotating rollers, compressing the cane to extract raw liquid juice.",
    band9Phrase:
      "“Following the harvest, the raw stalks are fed through heavy rotating rollers in a crushing mill, which compress the plant material to extract raw liquid juice.”",
    grammaticalFocus: "Infinitive of purpose + passive: 'are fed through heavy rotating rollers... to extract raw liquid juice'",
    examinerFocus: "Mention the cylindrical crushing rollers explicitly and identify the extracted juice as intermediate output.",
    parameterMetrics: [
      { label: "Input", value: "Harvested stalks" },
      { label: "Apparatus", value: "Cylindrical crushing rollers" },
      { label: "Immediate Output", value: "Raw liquid juice" },
      { label: "Passive Verb", value: "are crushed / is extracted" }
    ]
  },
  {
    id: "stage-4",
    box: "phase-2",
    number: "Stage 04",
    name: "4. Purifying Juice (Limestone Filter)",
    equipmentOrRole: "Limestone Filtration Funnel",
    color: "#d97706",
    pin: { left: "77%", top: "72%" },
    highlight: { x: "66%", y: "65%", w: "26%", h: "14%" },
    description:
      "The extracted raw juice is poured through a specialized limestone filter to eliminate impurities, sediment, and solid particulates.",
    band9Phrase:
      "“In the subsequent phase, the extracted juice is poured through a limestone filter in order to purify the liquid and eliminate unwanted particulates.”",
    grammaticalFocus: "Prepositional sequencing: 'In the subsequent phase, the extracted juice is poured through... in order to purify...'",
    examinerFocus: "Identify limestone as the filtering medium; explain that the purpose is chemical purification.",
    parameterMetrics: [
      { label: "Input", value: "Raw extracted juice" },
      { label: "Filter Type", value: "Limestone filter medium" },
      { label: "Filtered Output", value: "Purified clarified juice" },
      { label: "Passive Verb", value: "is purified / is poured" }
    ]
  },
  {
    id: "stage-5",
    box: "phase-2",
    number: "Stage 05",
    name: "5. Evaporator (Thermal Concentration)",
    equipmentOrRole: "Evaporator Chamber • Direct Heat / Flame",
    color: "#ea580c",
    pin: { left: "58%", top: "86%" },
    highlight: { x: "48%", y: "77%", w: "24%", h: "18%" },
    description:
      "The clarified liquid is transferred to an evaporator vat where it is subjected to continuous heat; excess water evaporates, turning the liquid into thick syrup.",
    band9Phrase:
      "“Thereafter, the clarified liquid is transferred to an evaporator vat where it is heated over an open heat source, allowing water to evaporate and transforming the juice into thick syrup.”",
    grammaticalFocus: "Participle result clause: 'where it is heated..., allowing water to evaporate and transforming the juice into thick syrup'",
    examinerFocus: "Highlight the state change: thermal heating boils away moisture, converting juice into concentrated syrup.",
    parameterMetrics: [
      { label: "Input", value: "Purified juice" },
      { label: "Heat Source", value: "Direct flame / heat" },
      { label: "Dense Output", value: "Thick concentrated syrup" },
      { label: "Passive Verb", value: "is heated / is condensed" }
    ]
  },
  {
    id: "stage-6",
    box: "phase-2",
    number: "Stage 06",
    name: "6. Centrifuge (Rotational Separation)",
    equipmentOrRole: "High-Speed Centrifuge Machine",
    color: "#7c3aed",
    pin: { left: "36%", top: "90%" },
    highlight: { x: "26%", y: "81%", w: "22%", h: "18%" },
    description:
      "The concentrated syrup is placed into a high-speed centrifuge, which spins rapidly to separate solid sugar crystals from the remaining liquid syrup.",
    band9Phrase:
      "“Next, this thick syrup is introduced into a high-speed centrifuge, which spins rapidly to separate solid sugar crystals from the remaining liquid.”",
    grammaticalFocus: "Non-defining relative clause: 'into a high-speed centrifuge, which spins rapidly to separate solid sugar crystals from...'",
    examinerFocus: "Clearly state the mechanical function of the centrifuge: separating solid crystals from the remaining syrup.",
    parameterMetrics: [
      { label: "Input", value: "Thick syrup" },
      { label: "Force", value: "High-speed centrifugal spin" },
      { label: "Separated Output", value: "Solid sugar crystals" },
      { label: "Passive Verb", value: "is spun / are separated" }
    ]
  },
  {
    id: "stage-7",
    box: "phase-2",
    number: "Stage 07",
    name: "7. Drying and Cooling (Refined Sugar)",
    equipmentOrRole: "Drying & Cooling Cylinder Drum",
    color: "#0f172a",
    pin: { left: "21%", top: "73%" },
    highlight: { x: "12%", y: "64%", w: "22%", h: "17%" },
    description:
      "The separated crystals are placed into a large cylindrical drum for drying and cooling, producing the final refined dry sugar ready for commercial distribution.",
    band9Phrase:
      "“Finally, in the culminating stage, the damp crystals are fed into a cylindrical container for drying and cooling, yielding finished refined sugar ready for commercial distribution.”",
    grammaticalFocus: "Final-phase sequencing + participle: 'Finally, in the culminating stage, the damp crystals are fed into..., yielding finished refined sugar'",
    examinerFocus: "Report the final commercial product: dry, refined granulated sugar ready for use.",
    parameterMetrics: [
      { label: "Input", value: "Damp sugar crystals" },
      { label: "Apparatus", value: "Drying and cooling cylinder" },
      { label: "Final Product", value: "Refined dry sugar" },
      { label: "Passive Verb", value: "are dried and cooled" }
    ]
  }
];

export const MACRO_HOTSPOTS: HotspotDefinition[] = [
  {
    id: "phase-1",
    box: "phase-1",
    number: "Phase 1",
    name: "Phase 1: Agricultural & Extraction (Stages 1–3)",
    equipmentOrRole: "Growing (12–18m), Dual Reaping & Roller Crushing",
    color: "#16a34a",
    pin: { left: "49%", top: "35%" },
    highlight: { x: "15%", y: "20%", w: "70%", h: "45%" },
    description:
      "The first half of the manufacturing procedure covers field cultivation over 12–18 months, dual harvesting (mechanised tractor vs manual sickle), and mechanical roller crushing to extract raw liquid juice.",
    band9Phrase:
      "“The process commences with agricultural cultivation and mechanical extraction, wherein canes mature over 12 to 18 months, are harvested either mechanically or by hand, and are crushed by rollers to yield raw juice.”",
    grammaticalFocus: "Compound passive structure with relative adverb: 'wherein canes mature..., are harvested either... or..., and are crushed by rollers...'",
    examinerFocus: "Ideal grouping for Body Paragraph 1: covers stages 1, 2, and 3 cohesively.",
    parameterMetrics: [
      { label: "Stages", value: "Stages 1 to 3" },
      { label: "Nature", value: "Agricultural & Mechanical" },
      { label: "Duration", value: "12–18 Months Maturation" },
      { label: "Body Para", value: "Body Paragraph 1" }
    ]
  },
  {
    id: "phase-2",
    box: "phase-2",
    number: "Phase 2",
    name: "Phase 2: Chemical & Thermal Refining (Stages 4–7)",
    equipmentOrRole: "Limestone Filter, Evaporation, Centrifuge & Drying Drum",
    color: "#ea580c",
    pin: { left: "50%", top: "80%" },
    highlight: { x: "10%", y: "60%", w: "82%", h: "35%" },
    description:
      "The second half of production takes place in industrial processing units: limestone filtration purifies the juice, an evaporator concentrates it into syrup, a centrifuge separates crystals, and a cylinder dries and cools the sugar.",
    band9Phrase:
      "“The subsequent phases rely on chemical filtration through limestone, thermal concentration in an evaporator, centrifugal separation of solid crystals, and final drying and cooling inside a cylinder.”",
    grammaticalFocus: "Parallel prepositional phrases: 'through limestone, thermal concentration in an evaporator, centrifugal separation of solid crystals, and final drying and cooling...'",
    examinerFocus: "Ideal grouping for Body Paragraph 2: covers stages 4, 5, 6, and 7 seamlessly.",
    parameterMetrics: [
      { label: "Stages", value: "Stages 4 to 7" },
      { label: "Nature", value: "Chemical & Industrial" },
      { label: "Final Output", value: "Pure Refined Sugar" },
      { label: "Body Para", value: "Body Paragraph 2" }
    ]
  },
  {
    id: "macro-overview",
    box: "overview",
    number: "Macro",
    name: "7-Stage Linear Process Overview",
    equipmentOrRole: "Linear Flow • Raw Cane to Refined Sugar",
    color: "#2563eb",
    pin: { left: "50%", top: "50%" },
    highlight: { x: "10%", y: "15%", w: "80%", h: "80%" },
    description:
      "A linear manufacturing sequence comprising seven distinct stages, beginning with field cultivation and dual harvesting, and concluding with centrifugal separation and drying into refined dry sugar.",
    band9Phrase:
      "“Overall, the manufacturing process is a linear sequence comprising seven distinct stages, beginning with agricultural cultivation and harvesting and culminating in the industrial drying and cooling of pure sugar crystals.”",
    grammaticalFocus: "Participle framework for process overviews: 'beginning with agricultural cultivation... and culminating in...'",
    examinerFocus: "Qualitative overview must state: total number of stages (7), starting point, culminating point, and main bifurcation.",
    parameterMetrics: [
      { label: "Process Type", value: "Linear Multi-Stage" },
      { label: "Total Stages", value: "7 Sequential Stages" },
      { label: "Starting Stage", value: "Growing (12–18m)" },
      { label: "Culmination", value: "Refined Sugar Crystals" }
    ]
  }
];

export const REGION_HOTSPOTS = STAGE_HOTSPOTS;
export const PROFESSION_HOTSPOTS = STAGE_HOTSPOTS;
export const TABLE_CELL_HOTSPOTS = STAGE_HOTSPOTS;
export const CATEGORY_HOTSPOTS = MACRO_HOTSPOTS;
export const COUNTRY_HOTSPOTS = STAGE_HOTSPOTS;
export const ALL_HOTSPOTS = [...STAGE_HOTSPOTS, ...MACRO_HOTSPOTS];

interface SmartBoardTableMatrixProps {
  highlightMode?: DiagramViewMode;
  onHighlightModeChange?: (mode: DiagramViewMode) => void;
  selectedComponentId?: string | null;
  onSelectComponent?: (id: string) => void;
  selectedCohortId?: string | null;
  onSelectCohort?: (id: string) => void;
  inModal?: boolean;
  showInternalToolbar?: boolean;
  showDeepDiveCard?: boolean;
}

export const SmartBoardTableMatrix: React.FC<SmartBoardTableMatrixProps> = ({
  highlightMode = "stage-1",
  onHighlightModeChange,
  selectedComponentId,
  onSelectComponent,
  selectedCohortId,
  onSelectCohort,
  inModal = false,
  showInternalToolbar,
  showDeepDiveCard
}) => {
  const [activeTab, setActiveTab] = useState<"scanned_exam" | "smartboard_vector">("scanned_exam");
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const activeId =
    selectedCohortId ||
    selectedComponentId ||
    (highlightMode !== "all" ? highlightMode : null) ||
    "stage-1";

  const activeHotspot =
    ALL_HOTSPOTS.find((h) => h.id === activeId) || STAGE_HOTSPOTS[0];

  const handleSelect = (id: string) => {
    if (onSelectComponent) onSelectComponent(id);
    if (onSelectCohort) onSelectCohort(id);
    if (onHighlightModeChange) onHighlightModeChange(id as DiagramViewMode);
  };

  return (
    <div
      style={{
        background: "#ffffff",
        border: "1.5px solid var(--border-subtle, #cbd5e1)",
        borderRadius: "20px",
        padding: inModal ? "18px 22px" : "16px 18px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        height: "100%",
        minHeight: inModal ? "auto" : "440px"
      }}
    >
      {/* Header Controls: Tab Switcher & Zoom */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "8px",
          borderBottom: "1.5px solid #f1f5f9",
          paddingBottom: "10px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <FileImage size={17} color="#2563eb" />
          <span style={{ fontSize: "0.86rem", fontWeight: 800, color: "#0f172a" }}>
            7-Stage Process Visualizer
          </span>
          <span
            style={{
              fontSize: "0.72rem",
              fontWeight: 800,
              background: "#eff6ff",
              color: "#1e40af",
              padding: "2px 7px",
              borderRadius: "5px",
              border: "1px solid #bfdbfe"
            }}
          >
            Cambridge Official
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* View Mode Switcher */}
          <div style={{ display: "flex", gap: "4px", background: "#f1f5f9", padding: "3px", borderRadius: "8px" }}>
            <button
              type="button"
              onClick={() => setActiveTab("scanned_exam")}
              style={{
                padding: "4px 10px",
                borderRadius: "6px",
                fontSize: "0.74rem",
                fontWeight: 750,
                border: "none",
                background: activeTab === "scanned_exam" ? "#ffffff" : "transparent",
                color: activeTab === "scanned_exam" ? "#0f172a" : "#64748b",
                boxShadow: activeTab === "scanned_exam" ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
                cursor: "pointer"
              }}
            >
              Interactive Scanned Diagram
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("smartboard_vector")}
              style={{
                padding: "4px 10px",
                borderRadius: "6px",
                fontSize: "0.74rem",
                fontWeight: 750,
                border: "none",
                background: activeTab === "smartboard_vector" ? "#ffffff" : "transparent",
                color: activeTab === "smartboard_vector" ? "#0f172a" : "#64748b",
                boxShadow: activeTab === "smartboard_vector" ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
                cursor: "pointer"
              }}
            >
              7-Stage Process Flow Pipeline
            </button>
          </div>

          {/* Reset Zoom */}
          {activeTab === "scanned_exam" && (
            <button
              type="button"
              onClick={() => setZoomLevel((z) => (z === 1 ? 1.3 : 1))}
              style={{
                padding: "4px 9px",
                borderRadius: "6px",
                fontSize: "0.72rem",
                fontWeight: 750,
                background: "#f8fafc",
                border: "1px solid #cbd5e1",
                color: "#475569",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px"
              }}
            >
              <Maximize2 size={13} />
              <span>{zoomLevel === 1 ? "Zoom 130%" : "Reset 100%"}</span>
            </button>
          )}
        </div>
      </div>

      {/* TAB 1: INTERACTIVE SCANNED EXAM DIAGRAM WITH 7 HOTSPOT PINS */}
      {activeTab === "scanned_exam" && (
        <div
          style={{
            position: "relative",
            width: "100%",
            flex: 1,
            minHeight: inModal ? "480px" : "380px",
            background: "#ffffff",
            borderRadius: "14px",
            border: "1px solid #e2e8f0",
            overflow: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px"
          }}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "580px",
              width: "100%",
              transform: `scale(${zoomLevel})`,
              transformOrigin: "center center",
              transition: "transform 0.2s ease"
            }}
          >
            {/* Scanned Original Image */}
            <img
              src="/materials/sugarcane_sugar_production.jpg"
              alt="The process of making sugar from sugarcane - Cambridge IELTS Task 1"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "10px",
                boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
                pointerEvents: "none"
              }}
            />

            {/* 7 Interactive Pulsing Hotspot Pins */}
            {STAGE_HOTSPOTS.map((stage) => {
              const isActive = activeId === stage.id;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => handleSelect(stage.id)}
                  title={`${stage.name}: ${stage.equipmentOrRole}`}
                  style={{
                    position: "absolute",
                    left: stage.pin.left,
                    top: stage.pin.top,
                    transform: "translate(-50%, -50%)",
                    width: isActive ? "32px" : "26px",
                    height: isActive ? "32px" : "26px",
                    borderRadius: "50%",
                    background: stage.color,
                    color: "#ffffff",
                    border: "2.5px solid #ffffff",
                    boxShadow: isActive
                      ? `0 0 0 5px ${stage.color}45, 0 4px 12px rgba(0,0,0,0.3)`
                      : "0 2px 8px rgba(0,0,0,0.25)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 850,
                    fontSize: isActive ? "0.85rem" : "0.75rem",
                    transition: "all 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
                    zIndex: isActive ? 20 : 10
                  }}
                >
                  {stage.number.replace("Stage ", "")}
                </button>
              );
            })}

            {/* Active Stage Highlight Bounding Box */}
            {activeHotspot && activeHotspot.highlight && (
              <div
                style={{
                  position: "absolute",
                  left: activeHotspot.highlight.x,
                  top: activeHotspot.highlight.y,
                  width: activeHotspot.highlight.w,
                  height: activeHotspot.highlight.h,
                  border: `2.5px dashed ${activeHotspot.color}`,
                  borderRadius: "10px",
                  background: `${activeHotspot.color}15`,
                  pointerEvents: "none",
                  transition: "all 0.2s ease"
                }}
              />
            )}
          </div>
        </div>
      )}

      {/* TAB 2: INTERACTIVE 7-STAGE PROCESS FLOW PIPELINE */}
      {activeTab === "smartboard_vector" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            flex: 1,
            overflowY: "auto",
            padding: "4px"
          }}
        >
          {/* Phase 1: Agricultural Cultivation & Extraction */}
          <div
            style={{
              background: "#f0fdf4",
              border: "1.5px solid #bbf7d0",
              borderRadius: "14px",
              padding: "12px 14px",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#16a34a", color: "#ffffff", padding: "2px 7px", borderRadius: "5px" }}>
                  PHASE 1
                </span>
                <strong style={{ fontSize: "0.88rem", color: "#14532d" }}>
                  Agricultural Cultivation &amp; Juice Extraction (Stages 1–3)
                </strong>
              </div>
              <span style={{ fontSize: "0.72rem", color: "#166534", fontWeight: 700 }}>
                Body Paragraph 1
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
              {STAGE_HOTSPOTS.slice(0, 3).map((st) => {
                const isSelected = activeId === st.id;
                return (
                  <div
                    key={st.id}
                    onClick={() => handleSelect(st.id)}
                    style={{
                      background: isSelected ? "#ffffff" : "rgba(255,255,255,0.7)",
                      border: isSelected ? `2px solid ${st.color}` : "1px solid #dcfce7",
                      borderRadius: "10px",
                      padding: "8px 10px",
                      cursor: "pointer",
                      boxShadow: isSelected ? "0 4px 12px rgba(22, 163, 74, 0.15)" : "none",
                      transition: "all 0.15s ease"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <span style={{ fontSize: "0.68rem", fontWeight: 800, background: st.color, color: "#ffffff", padding: "1px 6px", borderRadius: "4px" }}>
                        {st.number}
                      </span>
                      <span style={{ fontSize: "0.68rem", color: "#64748b", fontWeight: 700 }}>
                        {st.id === "stage-1" ? "12–18m" : st.id === "stage-2" ? "Dual Harvest" : "Crushing"}
                      </span>
                    </div>
                    <strong style={{ fontSize: "0.82rem", color: "#0f172a", display: "block" }}>
                      {st.name.split(".")[1]?.trim()}
                    </strong>
                    <div style={{ fontSize: "0.72rem", color: "#475569", marginTop: "3px" }}>
                      {st.equipmentOrRole}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Phase 2: Chemical & Thermal Refining */}
          <div
            style={{
              background: "#fff7ed",
              border: "1.5px solid #fed7aa",
              borderRadius: "14px",
              padding: "12px 14px",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#ea580c", color: "#ffffff", padding: "2px 7px", borderRadius: "5px" }}>
                  PHASE 2
                </span>
                <strong style={{ fontSize: "0.88rem", color: "#7c2d12" }}>
                  Chemical Filtration, Evaporation, Separation &amp; Drying (Stages 4–7)
                </strong>
              </div>
              <span style={{ fontSize: "0.72rem", color: "#9a3412", fontWeight: 700 }}>
                Body Paragraph 2
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
              {STAGE_HOTSPOTS.slice(3, 7).map((st) => {
                const isSelected = activeId === st.id;
                return (
                  <div
                    key={st.id}
                    onClick={() => handleSelect(st.id)}
                    style={{
                      background: isSelected ? "#ffffff" : "rgba(255,255,255,0.7)",
                      border: isSelected ? `2px solid ${st.color}` : "1px solid #ffedd5",
                      borderRadius: "10px",
                      padding: "8px 10px",
                      cursor: "pointer",
                      boxShadow: isSelected ? "0 4px 12px rgba(234, 88, 12, 0.15)" : "none",
                      transition: "all 0.15s ease"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <span style={{ fontSize: "0.68rem", fontWeight: 800, background: st.color, color: "#ffffff", padding: "1px 6px", borderRadius: "4px" }}>
                        {st.number}
                      </span>
                      <span style={{ fontSize: "0.66rem", color: "#64748b", fontWeight: 700 }}>
                        {st.id === "stage-4" ? "Filter" : st.id === "stage-5" ? "Syrup" : st.id === "stage-6" ? "Crystals" : "Final Sugar"}
                      </span>
                    </div>
                    <strong style={{ fontSize: "0.80rem", color: "#0f172a", display: "block" }}>
                      {st.name.split(".")[1]?.trim()}
                    </strong>
                    <div style={{ fontSize: "0.70rem", color: "#475569", marginTop: "3px" }}>
                      {st.equipmentOrRole}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Quick-Stage Selector Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "6px",
          borderTop: "1.5px solid #f1f5f9",
          paddingTop: "8px"
        }}
      >
        <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase" }}>
          Select Stage:
        </span>
        <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
          {STAGE_HOTSPOTS.map((st) => {
            const isCurrent = activeId === st.id;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => handleSelect(st.id)}
                style={{
                  padding: "3px 8px",
                  borderRadius: "6px",
                  fontSize: "0.74rem",
                  fontWeight: 750,
                  border: isCurrent ? `1.5px solid ${st.color}` : "1px solid #e2e8f0",
                  background: isCurrent ? st.color : "#f8fafc",
                  color: isCurrent ? "#ffffff" : "#475569",
                  cursor: "pointer",
                  transition: "all 0.15s ease"
                }}
              >
                {st.number}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
