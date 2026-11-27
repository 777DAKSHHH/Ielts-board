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
  Compass,
  MapPin,
  Building,
  Car,
  Home,
  TreePine,
  GraduationCap,
  Store
} from "lucide-react";

export type DiagramViewMode =
  | "all"
  | "ring-road"
  | "pedestrian-thoroughfare"
  | "northern-commercial"
  | "northeast-housing"
  | "southern-shops-retention"
  | "park-housing-reconfiguration"
  | "school-access"
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
  nowPin?: { left: string; top: string };
  highlight: { x: string; y: string; w: string; h: string };
  beforeHighlight?: { x: string; y: string; w: string; h: string; label: string };
  description: string;
  band9Phrase: string;
  grammaticalFocus: string;
  examinerFocus?: string;
  parameterMetrics?: ParameterMetric[];
}

export const STAGE_HOTSPOTS: HotspotDefinition[] = [
  {
    id: "ring-road",
    box: "phase-1",
    category: "Transport Infrastructure • Perimeter Bypass",
    number: "01",
    name: "Perimeter Dual Carriageway (Outer Ring)",
    equipmentOrRole: "Circumscribes Town Centre • Carries Through-Traffic",
    color: "#2563eb",
    pin: { left: "10.1%", top: "79.3%" },
    nowPin: { left: "50.0%", top: "18.2%" },
    highlight: { x: "13.9%", y: "55.1%", w: "72.1%", h: "39.8%" },
    beforeHighlight: { x: "2.6%", y: "16.2%", w: "94.7%", h: "4.0%", label: "Main Road (Bisected Settlement)" },
    description:
      "A newly constructed dual carriageway loops completely around the town centre, linking incoming traffic from the east and west without bisecting the settlement.",
    band9Phrase:
      "“To accommodate through vehicular traffic, a newly constructed dual carriageway will completely circumscribe the central town, connecting the incoming roads from the east and west.”",
    grammaticalFocus: "Infinitive of purpose + transitive verb: 'To accommodate through vehicular traffic, a newly constructed dual carriageway will completely circumscribe...'",
    examinerFocus: "Primary infrastructural change that diverts motor vehicles away from the central retail core.",
    parameterMetrics: [
      { label: "Infrastructure Type", value: "Dual Carriageway Bypass" },
      { label: "Trajectory", value: "Full Perimeter Circumscription" },
      { label: "Through-Traffic", value: "Diverted Around Town Core" },
      { label: "Key Junctions", value: "West & East Main Roads, School, Bus & Car Park" }
    ]
  },
  {
    id: "pedestrian-thoroughfare",
    box: "phase-1",
    category: "Central Core • East-West Axis",
    number: "02",
    name: "Central Pedestrian Thoroughfare",
    equipmentOrRole: "Converted from Main Road • 'Pedestrians Only'",
    color: "#059669",
    pin: { left: "50.0%", top: "71.9%" },
    nowPin: { left: "50.0%", top: "18.2%" },
    highlight: { x: "24.3%", y: "70.2%", w: "52.0%", h: "3.4%" },
    beforeHighlight: { x: "22.4%", y: "16.2%", w: "55.3%", h: "4.0%", label: "Main Road (Two-Way Traffic)" },
    description:
      "The current east-west main road bisecting the town centre is fully closed to vehicular traffic and designated as an exclusive pedestrian mall.",
    band9Phrase:
      "“The existing main road running through the heart of the town will be entirely pedestrianised, prohibiting vehicular access in favour of foot traffic.”",
    grammaticalFocus: "Participial clause expressing consequence: 'prohibiting vehicular access in favour of foot traffic.'",
    examinerFocus: "Contrast between current vehicular congestion and future pedestrian-exclusive accessibility.",
    parameterMetrics: [
      { label: "Current Status", value: "Two-way Vehicular Main Road" },
      { label: "Planned Status", value: "Pedestrians Only Mall" },
      { label: "Motor Vehicles", value: "Completely Excluded" },
      { label: "Retail Frontage", value: "Flanked by Shopping Centre & Preserved Shops" }
    ]
  },
  {
    id: "northern-commercial",
    box: "phase-1",
    category: "North Zone • Transit & Retail Hub",
    number: "03",
    name: "Northern Commercial Hub & Transit Complex",
    equipmentOrRole: "Bus Station + Shopping Centre + Car Park",
    color: "#7c3aed",
    pin: { left: "44.7%", top: "64.5%" },
    nowPin: { left: "50.0%", top: "14.1%" },
    highlight: { x: "24.3%", y: "60.0%", w: "39.5%", h: "9.0%" },
    beforeHighlight: { x: "22.4%", y: "12.5%", w: "55.3%", h: "3.2%", label: "Northern Shops (To Be Demolished)" },
    description:
      "The entire northern strip of roadside shops is completely demolished to construct a tripartite commercial hub consisting of a bus station, shopping centre, and car park.",
    band9Phrase:
      "“The northern row of shops will be completely demolished to make way for a comprehensive commercial and transit complex, comprising a bus station, a shopping centre, and an adjacent car park.”",
    grammaticalFocus: "Passive voice of demolition + tripartite prepositional phrase: 'demolished to make way for... comprising a bus station, a shopping centre, and an adjacent car park.'",
    examinerFocus: "Multi-facility transformation replacing single-frontage shops with coordinated transit and commercial facilities.",
    parameterMetrics: [
      { label: "Original Feature", value: "Row of Local Shops" },
      { label: "Action", value: "Complete Demolition" },
      { label: "New Facilities", value: "Bus Station, Shopping Centre, Car Park" },
      { label: "Accessibility", value: "Direct Link from Pedestrian Mall & Bypass" }
    ]
  },
  {
    id: "northeast-housing",
    box: "phase-1",
    category: "North-East Sector • Residential Expansion",
    number: "04",
    name: "North-Eastern Residential Expansion",
    equipmentOrRole: "Erected on Former Open Countryside",
    color: "#d97706",
    pin: { left: "70.7%", top: "64.5%" },
    nowPin: { left: "50.0%", top: "9.5%" },
    highlight: { x: "65.1%", y: "60.0%", w: "11.2%", h: "9.0%" },
    beforeHighlight: { x: "23.7%", y: "7.5%", w: "52.6%", h: "4.0%", label: "Open Rural Countryside" },
    description:
      "A new housing development is erected in what is currently open rural countryside north-east of the town centre, connected via a dedicated branch road from the dual carriageway.",
    band9Phrase:
      "“Further east in what is currently open countryside, a new residential development is planned, accessible via a branch road leading from the northern perimeter bypass.”",
    grammaticalFocus: "Relative locational clause + participial adjective phrase: 'in what is currently open countryside, a new residential development is planned, accessible via...'",
    examinerFocus: "Incursion into rural countryside indicating urbanization and population growth in Islip.",
    parameterMetrics: [
      { label: "Original Land Use", value: "Undeveloped Countryside" },
      { label: "Planned Land Use", value: "New Housing Estate" },
      { label: "Road Connection", value: "Spur off Northern Dual Carriageway" },
      { label: "Spatial Quadrant", value: "North-Eastern Sector" }
    ]
  },
  {
    id: "southern-shops-retention",
    box: "phase-2",
    category: "South Zone • Retail Preservation",
    number: "05",
    name: "Southern Shops Retention",
    equipmentOrRole: "Preserved Intact Along Pedestrian Precinct",
    color: "#0284c7",
    pin: { left: "50.0%", top: "75.8%" },
    nowPin: { left: "50.0%", top: "22.3%" },
    highlight: { x: "24.3%", y: "74.2%", w: "52.0%", h: "3.2%" },
    beforeHighlight: { x: "22.4%", y: "20.7%", w: "55.3%", h: "3.2%", label: "Southern Shops (Preserved)" },
    description:
      "In sharp contrast to the demolished northern shops, the southern row of shops remains intact, now opening directly onto the quiet pedestrian street.",
    band9Phrase:
      "“Unlike their northern counterparts, the shops along the southern side of the central thoroughfare will remain intact, bordering the newly pedestrianised strip.”",
    grammaticalFocus: "Contrastive prepositional opener: 'Unlike their northern counterparts, the shops... will remain intact, bordering...'",
    examinerFocus: "Critical contrast between northern demolition and southern structural preservation.",
    parameterMetrics: [
      { label: "Current Status", value: "Shops on South of Main Road" },
      { label: "Planned Status", value: "Preserved Intact (Unchanged Footprint)" },
      { label: "Contrast", value: "Northern Demolition vs Southern Retention" },
      { label: "Pedestrian Frontage", value: "Direct Access to Footpath Mall" }
    ]
  },
  {
    id: "park-housing-reconfiguration",
    box: "phase-2",
    category: "South-East Sector • Housing vs Parkland",
    number: "06",
    name: "Parkland Diminution & SE Housing",
    equipmentOrRole: "Park Substantially Reduced • New Housing Added",
    color: "#dc2626",
    pin: { left: "63.2%", top: "83.0%" },
    nowPin: { left: "80.0%", top: "34.8%" },
    highlight: { x: "50.7%", y: "78.5%", w: "25.7%", h: "9.0%" },
    beforeHighlight: { x: "70.4%", y: "27.5%", w: "19.1%", h: "14.5%", label: "Original Expansive Park" },
    description:
      "The large recreational park in the south-east is considerably reduced in area to provide land for a second new housing development between the existing houses and the park.",
    band9Phrase:
      "“In the south-eastern quadrant, the recreational park will undergo a noticeable diminution in size to accommodate an additional residential estate directly to its west.”",
    grammaticalFocus: "Formal nominalization: 'will undergo a noticeable diminution in size to accommodate...'",
    examinerFocus: "Environmental and spatial trade-off: municipal recreation area downsized to satisfy residential demand.",
    parameterMetrics: [
      { label: "Original Park", value: "Expansive Rectangular Parkland" },
      { label: "Planned Park", value: "Substantially Reduced in Area" },
      { label: "New Addition", value: "Second New Housing Estate" },
      { label: "Location", value: "East of Existing Central Housing" }
    ]
  },
  {
    id: "school-access",
    box: "phase-2",
    category: "South-West Sector • Educational Facility",
    number: "07",
    name: "South-Western School & Direct Bypass Link",
    equipmentOrRole: "School Preserved • Linked to Dual Carriageway",
    color: "#0d9488",
    pin: { left: "27.6%", top: "93.0%" },
    nowPin: { left: "20.8%", top: "42.0%" },
    highlight: { x: "21.1%", y: "87.5%", w: "13.2%", h: "8.0%" },
    beforeHighlight: { x: "14.5%", y: "36.0%", w: "12.5%", h: "8.5%", label: "School via Curved Cul-de-sac" },
    description:
      "The school situated in the south-west is preserved, but its previous dead-end access road is modified into a direct feeder linking straight to the southern arc of the dual carriageway.",
    band9Phrase:
      "“The school situated in the south-western corner will be preserved, but its access road will be reconfigured to connect directly into the southern arc of the dual carriageway.”",
    grammaticalFocus: "Compound passive voice with contrast coordinator: 'will be preserved, but its access road will be reconfigured to connect directly into...'",
    examinerFocus: "Preservation of civic educational infrastructure paired with upgraded vehicular connectivity.",
    parameterMetrics: [
      { label: "Educational Facility", value: "Town Primary / Secondary School" },
      { label: "Building Footprint", value: "Preserved in Original Location" },
      { label: "Road Infrastructure", value: "Connected to Dual Carriageway" },
      { label: "Safety Benefit", value: "School Traffic Avoids Pedestrian Core" }
    ]
  }
];

export const MACRO_HOTSPOTS: HotspotDefinition[] = STAGE_HOTSPOTS;
export const TABLE_CELL_HOTSPOTS: HotspotDefinition[] = STAGE_HOTSPOTS;
export const CATEGORY_HOTSPOTS: HotspotDefinition[] = STAGE_HOTSPOTS;
export const ALL_HOTSPOTS: HotspotDefinition[] = STAGE_HOTSPOTS;

interface SmartBoardMapVisualizerProps {
  highlightMode: DiagramViewMode;
  onSelectHotspot: (id: string) => void;
  inModal?: boolean;
}

export const SmartBoardTableMatrix: React.FC<SmartBoardMapVisualizerProps> = ({
  highlightMode,
  onSelectHotspot,
  inModal = false
}) => {
  const [activeTab, setActiveTab] = useState<"scanned_exam" | "smartboard_vector">("scanned_exam");
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const activeId = highlightMode === "all" ? "ring-road" : highlightMode;
  const activeHotspot = STAGE_HOTSPOTS.find((h) => h.id === activeId) || STAGE_HOTSPOTS[0];

  const handleSelect = (id: string) => {
    onSelectHotspot(id);
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
            Development Map Visualizer
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
              Interactive Scanned Maps
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
              Transformation Matrix
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

      {/* TAB 1: INTERACTIVE SCANNED EXAM DIAGRAM WITH HOTSPOT PINS */}
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
              maxWidth: inModal ? "680px" : "500px",
              width: "100%",
              transform: `scale(${zoomLevel})`,
              transformOrigin: "center center",
              transition: "transform 0.2s ease"
            }}
          >
            {/* Scanned Original Image */}
            <img
              src="/materials/islip_town_centre_maps.jpg"
              alt="Centre of a small town called Islip as it is now and plans for its development - Cambridge IELTS Task 1"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "10px",
                boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
                pointerEvents: "none"
              }}
            />

            {/* Clickable Touch Zones for all 7 features across both Now and Planned maps */}
            {STAGE_HOTSPOTS.map((stage) => (
              <React.Fragment key={`hitbox-${stage.id}`}>
                {/* Now Map Hitbox */}
                {stage.beforeHighlight && (
                  <div
                    onClick={() => handleSelect(stage.id)}
                    title={`Click to analyze original layout: ${stage.beforeHighlight.label}`}
                    style={{
                      position: "absolute",
                      left: stage.beforeHighlight.x,
                      top: stage.beforeHighlight.y,
                      width: stage.beforeHighlight.w,
                      height: stage.beforeHighlight.h,
                      cursor: "pointer",
                      zIndex: 11
                    }}
                  />
                )}
                {/* Planned Map Hitbox */}
                {stage.highlight && (
                  <div
                    onClick={() => handleSelect(stage.id)}
                    title={`Click to analyze planned redevelopment: ${stage.name}`}
                    style={{
                      position: "absolute",
                      left: stage.highlight.x,
                      top: stage.highlight.y,
                      width: stage.highlight.w,
                      height: stage.highlight.h,
                      cursor: "pointer",
                      zIndex: 11
                    }}
                  />
                )}
              </React.Fragment>
            ))}

            {/* Interactive Pulsing Hotspot Pins (Planned Development Map) */}
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
                    width: isActive ? "34px" : "26px",
                    height: isActive ? "34px" : "26px",
                    borderRadius: "50%",
                    background: stage.color,
                    color: "#ffffff",
                    border: "2.5px solid #ffffff",
                    boxShadow: isActive
                      ? `0 0 0 5px ${stage.color}45, 0 4px 14px rgba(0,0,0,0.35)`
                      : "0 2px 8px rgba(0,0,0,0.25)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 850,
                    fontSize: isActive ? "0.82rem" : "0.70rem",
                    transition: "all 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
                    zIndex: isActive ? 22 : 14
                  }}
                >
                  {stage.number}
                </button>
              );
            })}

            {/* Active Before Hotspot Pin Indicator (On Left 'Now' Map) */}
            {activeHotspot && activeHotspot.nowPin && (
              <div
                onClick={() => handleSelect(activeHotspot.id)}
                title={`Original layout baseline: ${activeHotspot.beforeHighlight?.label || activeHotspot.name}`}
                style={{
                  position: "absolute",
                  left: activeHotspot.nowPin.left,
                  top: activeHotspot.nowPin.top,
                  transform: "translate(-50%, -50%)",
                  padding: "2px 7px",
                  borderRadius: "6px",
                  background: "#0f172a",
                  color: "#ffffff",
                  border: `2px solid ${activeHotspot.color}`,
                  boxShadow: `0 0 0 4px ${activeHotspot.color}35, 0 4px 10px rgba(0,0,0,0.3)`,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontWeight: 850,
                  fontSize: "0.68rem",
                  transition: "all 0.2s ease",
                  zIndex: 22
                }}
              >
                <span>NOW</span>
                <span style={{ color: activeHotspot.color, fontWeight: 900 }}>#{activeHotspot.number}</span>
              </div>
            )}

            {/* Active Before Highlight Bounding Box (On Left 'Now' Map) */}
            {activeHotspot && activeHotspot.beforeHighlight && (
              <div
                onClick={() => handleSelect(activeHotspot.id)}
                style={{
                  position: "absolute",
                  left: activeHotspot.beforeHighlight.x,
                  top: activeHotspot.beforeHighlight.y,
                  width: activeHotspot.beforeHighlight.w,
                  height: activeHotspot.beforeHighlight.h,
                  border: `2.5px dashed ${activeHotspot.color}`,
                  borderRadius: "8px",
                  background: `${activeHotspot.color}20`,
                  boxShadow: `0 0 0 2px ${activeHotspot.color}25, 0 4px 16px rgba(0,0,0,0.12)`,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  zIndex: 16
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-19px",
                    left: "2px",
                    background: "#0f172a",
                    color: "#ffffff",
                    fontSize: "0.60rem",
                    fontWeight: 800,
                    padding: "1px 6px",
                    borderRadius: "4px",
                    whiteSpace: "nowrap",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                    border: "1px solid rgba(255,255,255,0.2)"
                  }}
                >
                  BEFORE: {activeHotspot.beforeHighlight.label}
                </span>
              </div>
            )}

            {/* Active Highlight Bounding Box (On Right 'Planned' Map) */}
            {activeHotspot && activeHotspot.highlight && (
              <div
                onClick={() => handleSelect(activeHotspot.id)}
                style={{
                  position: "absolute",
                  left: activeHotspot.highlight.x,
                  top: activeHotspot.highlight.y,
                  width: activeHotspot.highlight.w,
                  height: activeHotspot.highlight.h,
                  border: `2.5px dashed ${activeHotspot.color}`,
                  borderRadius: "8px",
                  background: `${activeHotspot.color}18`,
                  boxShadow: `0 0 0 2px ${activeHotspot.color}30, 0 4px 16px rgba(0,0,0,0.12)`,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  zIndex: 16
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-19px",
                    left: "2px",
                    background: activeHotspot.color,
                    color: "#ffffff",
                    fontSize: "0.60rem",
                    fontWeight: 800,
                    padding: "1px 6px",
                    borderRadius: "4px",
                    whiteSpace: "nowrap",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                    border: "1px solid rgba(255,255,255,0.35)"
                  }}
                >
                  AFTER: {activeHotspot.name}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: SMARTBOARD TRANSFORMATION MATRIX */}
      {activeTab === "smartboard_vector" && (
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            overflowY: "auto",
            paddingRight: "2px"
          }}
        >
          {/* Phase 1: Transport & North Zone Transformations */}
          <div
            style={{
              background: "#eff6ff",
              border: "1.5px solid #bfdbfe",
              borderRadius: "14px",
              padding: "12px 14px",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Car size={16} color="#2563eb" />
                <strong style={{ fontSize: "0.86rem", color: "#1e3a8a" }}>
                  Phase 1: Transport Bypass &amp; Northern Redevelopment
                </strong>
              </div>
              <span style={{ fontSize: "0.72rem", background: "#dbeafe", color: "#1e40af", fontWeight: 800, padding: "2px 7px", borderRadius: "4px" }}>
                Features 01 – 04
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {STAGE_HOTSPOTS.slice(0, 4).map((feat) => {
                const isSelected = activeId === feat.id;
                return (
                  <div
                    key={feat.id}
                    onClick={() => handleSelect(feat.id)}
                    style={{
                      background: isSelected ? "#ffffff" : "rgba(255,255,255,0.75)",
                      border: isSelected ? `2px solid ${feat.color}` : "1px solid #bfdbfe",
                      borderRadius: "10px",
                      padding: "8px 10px",
                      cursor: "pointer",
                      boxShadow: isSelected ? `0 4px 12px ${feat.color}25` : "none",
                      transition: "all 0.15s ease"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3px" }}>
                      <span style={{ fontSize: "0.70rem", fontWeight: 850, color: feat.color }}>
                        Feature {feat.number}
                      </span>
                      <span style={{ fontSize: "0.68rem", background: `${feat.color}18`, color: feat.color, padding: "1px 6px", borderRadius: "4px", fontWeight: 750 }}>
                        {feat.name.split(" ")[0]}
                      </span>
                    </div>
                    <strong style={{ fontSize: "0.80rem", color: "#0f172a", display: "block" }}>
                      {feat.name}
                    </strong>
                    <span style={{ fontSize: "0.68rem", color: "#64748b", display: "block", marginTop: "2px" }}>
                      {feat.equipmentOrRole}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Phase 2: South Zone Amenities & Housing */}
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
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Home size={16} color="#16a34a" />
                <strong style={{ fontSize: "0.86rem", color: "#14532d" }}>
                  Phase 2: Southern Zone Amenities, Parkland &amp; School
                </strong>
              </div>
              <span style={{ fontSize: "0.72rem", background: "#dcfce7", color: "#166534", fontWeight: 800, padding: "2px 7px", borderRadius: "4px" }}>
                Features 05 – 07
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
              {STAGE_HOTSPOTS.slice(4, 7).map((feat) => {
                const isSelected = activeId === feat.id;
                return (
                  <div
                    key={feat.id}
                    onClick={() => handleSelect(feat.id)}
                    style={{
                      background: isSelected ? "#ffffff" : "rgba(255,255,255,0.75)",
                      border: isSelected ? `2px solid ${feat.color}` : "1px solid #bbf7d0",
                      borderRadius: "10px",
                      padding: "8px 10px",
                      cursor: "pointer",
                      boxShadow: isSelected ? `0 4px 12px ${feat.color}25` : "none",
                      transition: "all 0.15s ease"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3px" }}>
                      <span style={{ fontSize: "0.70rem", fontWeight: 850, color: feat.color }}>
                        Feature {feat.number}
                      </span>
                    </div>
                    <strong style={{ fontSize: "0.80rem", color: "#0f172a", display: "block" }}>
                      {feat.name}
                    </strong>
                    <span style={{ fontSize: "0.68rem", color: "#64748b", display: "block", marginTop: "2px" }}>
                      {feat.equipmentOrRole}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
