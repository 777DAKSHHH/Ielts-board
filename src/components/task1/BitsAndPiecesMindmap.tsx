import React, { useState } from "react";
import {
  Layers,
  ChevronRight,
  Sparkles,
  BookOpen,
  Award,
  CheckCircle2,
  TrendingUp,
  BarChart2,
  Eye,
  ArrowRight,
  Filter,
  Compass,
  Building,
  Car,
  Home,
  TreePine,
  GraduationCap
} from "lucide-react";

interface MindmapPiece {
  label: string;
  value?: string;
  detail: string;
  band9Application: string;
}

interface MindmapBranch {
  id: string;
  title: string;
  badge: string;
  color: string;
  borderColor: string;
  bgLight: string;
  icon: React.ReactNode;
  summary: string;
  tableCorrelation: string;
  pieces: MindmapPiece[];
}

const MINDMAP_BRANCHES: MindmapBranch[] = [
  {
    id: "parameters",
    title: "Piece 1: Introduction & Cartographic Parameters",
    badge: "Intro Anchor",
    color: "#2563eb",
    borderColor: "#bfdbfe",
    bgLight: "#eff6ff",
    icon: <BookOpen size={18} color="#2563eb" />,
    summary:
      "A Band 9 introduction paraphrases the prompt parameters accurately without using the word 'provided', identifying the comparative timeframe (current layout vs planned future development) and geographic focus (Islip town centre).",
    tableCorrelation:
      "Captures visual format (two comparative maps), geographic location (Islip town centre), and temporal scope (current layout vs planned future redevelopment).",
    pieces: [
      {
        label: "Visual Format & Reporting Verbs",
        value: "Two Comparative Maps",
        detail:
          "Accurately introduces the cartographic visuals using high-register reporting verbs without 'provided'.",
        band9Application:
          "“The maps illustrate the current layout of the town centre of Islip alongside the proposed transformations for its future redevelopment.”"
      },
      {
        label: "Geographic Location & Settlement Type",
        value: "Islip Town Centre",
        detail:
          "Clearly specifies the small town location and sets the civic planning context.",
        band9Application:
          "“...the centre of a small town called Islip...”"
      },
      {
        label: "Temporal Duality",
        value: "Now vs Planned Development",
        detail:
          "Contrasts the present reality with proposed future municipal developments.",
        band9Application:
          "“...as it is now, and plans for its development.”"
      }
    ]
  },
  {
    id: "overview",
    title: "Piece 2: Macro Qualitative Overview (Zero Numbers)",
    badge: "Strategic Core",
    color: "#059669",
    borderColor: "#bbf7d0",
    bgLight: "#ecfdf5",
    icon: <Sparkles size={18} color="#059669" />,
    summary:
      "A Band 9 overview synthesizes the holistic transformation from a road-bisected rural town into a pedestrianised commercial hub with an outer circumscribing bypass, noting the trade-off of open countryside and parkland for residential growth.",
    tableCorrelation:
      "Synthesizes macro vehicular redirection, central pedestrianisation, and suburban housing expansion.",
    pieces: [
      {
        label: "Pillar 1 — Transport & Civic Modernization",
        value: "Circumscribing Ring Road & Pedestrian Mall",
        detail:
          "Identifies the shift of through-traffic from the bisecting main road onto an outer perimeter dual carriageway.",
        band9Application:
          "“Overall, the town centre is slated to undergo extensive infrastructural modernization, transitioning from a traffic-bisected settlement into a predominantly pedestrianised commercial and residential hub.”"
      },
      {
        label: "Pillar 2 — Land-Use Trade-Offs & Expansion",
        value: "Residential Growth vs Green Space Loss",
        detail:
          "Notes commercial and housing developments expanding into former countryside and reducing municipal parkland.",
        band9Application:
          "“The most prominent changes involve the construction of a perimeter dual carriageway encircling the central core, alongside substantial residential and commercial expansion to the north and east at the expense of open countryside and recreational parkland.”"
      }
    ]
  },
  {
    id: "body1_transport_north",
    title: "Piece 3: Transport Infrastructure & Northern Zone (Body 1)",
    badge: "Body 1 Focus",
    color: "#7c3aed",
    borderColor: "#ddd6fe",
    bgLight: "#f5f3ff",
    icon: <Car size={18} color="#7c3aed" />,
    summary:
      "Details the construction of the circumscribing dual carriageway bypass, the conversion of the main road into a pedestrian street, the demolition of northern shops for a transit/commercial hub, and the new north-east housing estate.",
    tableCorrelation:
      "Covers perimeter ring road, pedestrian mall, bus station, shopping centre, car park, and north-east countryside housing.",
    pieces: [
      {
        label: "Perimeter Bypass Circumscription",
        value: "Outer Dual Carriageway",
        detail:
          "Diverts East-West through-traffic completely around the town core.",
        band9Application:
          "“To accommodate through vehicular traffic, a new dual carriageway will be constructed to circumscribe the entire urban core, linking the western and eastern access roads.”"
      },
      {
        label: "Central Road Pedestrianisation",
        value: "Pedestrians Only Thoroughfare",
        detail:
          "Eliminates motor vehicles from the town centre in favor of foot traffic.",
        band9Application:
          "“...the current main road bisecting the town centre will be converted into a pedestrianised thoroughfare.”"
      },
      {
        label: "Northern Commercial Hub & Countryside Housing",
        value: "Bus Station + Mall + Car Park + Homes",
        detail:
          "Northern shops demolished; tripartite transit/retail hub and new north-eastern housing built.",
        band9Application:
          "“Furthermore, the northern row of shops will be completely demolished to make way for a newly built bus station, shopping centre, and car park. North-east of this complex, on what is currently open countryside, a new housing development will be erected with dedicated road access.”"
      }
    ]
  },
  {
    id: "body2_southern_amenities",
    title: "Piece 4: Southern Zone Amenities & Parkland Diminution (Body 2)",
    badge: "Body 2 Focus",
    color: "#ea580c",
    borderColor: "#fed7aa",
    bgLight: "#fff7ed",
    icon: <Home size={18} color="#ea580c" />,
    summary:
      "Analyzes the southern half: retention of southern shops and existing residential streets, introduction of a second housing estate, marked diminution of the park, and upgraded direct ring-road access for the school.",
    tableCorrelation:
      "Covers southern shops preservation, south-west school road reconfiguration, south-east housing addition, and park reduction.",
    pieces: [
      {
        label: "Southern Retail & Residential Retention",
        value: "Shops & Existing Housing Intact",
        detail:
          "Unlike the northern shops, southern shops remain preserved along the new pedestrian precinct.",
        band9Application:
          "“Turning to the southern zone, the existing row of shops will be preserved intact alongside the residential neighborhood immediately to its south.”"
      },
      {
        label: "South-East Housing & Park Diminution",
        value: "New Homes Added • Park Reduced",
        detail:
          "A second new housing estate is built, significantly compressing the municipal park.",
        band9Application:
          "“In contrast, the south-eastern sector will undergo noticeable reconfiguration: a second new housing estate will be built, leading to a substantial diminution of the adjacent parkland.”"
      },
      {
        label: "South-Western School Ring-Road Feeder",
        value: "Preserved with Direct Access",
        detail:
          "The school is retained, with its access road connected straight to the southern dual carriageway arc.",
        band9Application:
          "“Finally, the school in the south-west will be retained, but its existing curved access route will be connected directly to the southern arc of the dual carriageway.”"
      }
    ]
  }
];

export const BitsAndPiecesMindmap: React.FC = () => {
  const [activeBranchId, setActiveBranchId] = useState<string>("parameters");
  const activeBranch =
    MINDMAP_BRANCHES.find((b) => b.id === activeBranchId) || MINDMAP_BRANCHES[0];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
      {/* Mindmap Title & Core Premise */}
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
          color: "#ffffff",
          borderRadius: "16px",
          padding: "16px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px"
        }}
      >
        <div>
          <span style={{ fontSize: "0.72rem", color: "#94a3b8", fontWeight: 750, textTransform: "uppercase" }}>
            Cognitive Deconstruction
          </span>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 800, margin: "2px 0 0" }}>
            The 4 Bits &amp; Pieces of Islip Development Maps
          </h3>
        </div>
        <span style={{ fontSize: "0.75rem", background: "rgba(255,255,255,0.12)", padding: "4px 10px", borderRadius: "8px", fontWeight: 700 }}>
          IELTS Academic Map Blueprint
        </span>
      </div>

      {/* 4 Interactive Strategic Branches Strip */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px" }}>
        {MINDMAP_BRANCHES.map((b) => {
          const isSelected = activeBranchId === b.id;
          return (
            <div
              key={b.id}
              onClick={() => setActiveBranchId(b.id)}
              style={{
                background: isSelected ? b.bgLight : "#ffffff",
                border: isSelected ? `2px solid ${b.color}` : "1.5px solid #e2e8f0",
                borderRadius: "14px",
                padding: "12px 14px",
                cursor: "pointer",
                transition: "all 0.15s ease",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                boxShadow: isSelected ? `0 4px 14px ${b.color}20` : "none"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  {b.icon}
                  <span style={{ fontSize: "0.72rem", fontWeight: 800, color: b.color }}>
                    {b.badge}
                  </span>
                </div>
                {isSelected && <CheckCircle2 size={15} color={b.color} />}
              </div>
              <strong style={{ fontSize: "0.86rem", color: "#0f172a" }}>{b.title}</strong>
              <span style={{ fontSize: "0.72rem", color: "#64748b", lineHeight: 1.35 }}>
                {b.summary.slice(0, 75)}...
              </span>
            </div>
          );
        })}
      </div>

      {/* Deep Dive Panel for Selected Branch */}
      <div
        style={{
          background: "#ffffff",
          border: `1.5px solid ${activeBranch.borderColor}`,
          borderRadius: "18px",
          padding: "18px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          boxShadow: "var(--shadow-sm)"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  fontSize: "0.70rem",
                  fontWeight: 800,
                  background: activeBranch.bgLight,
                  color: activeBranch.color,
                  padding: "3px 8px",
                  borderRadius: "6px",
                  border: `1px solid ${activeBranch.borderColor}`
                }}
              >
                {activeBranch.badge}
              </span>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                {activeBranch.title}
              </h4>
            </div>
            <p style={{ fontSize: "0.82rem", color: "#64748b", margin: "4px 0 0" }}>
              {activeBranch.tableCorrelation}
            </p>
          </div>
        </div>

        {/* Pieces Breakdown Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "10px" }}>
          {activeBranch.pieces.map((p, idx) => (
            <div
              key={idx}
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "12px 14px",
                display: "flex",
                flexDirection: "column",
                gap: "6px"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong style={{ fontSize: "0.82rem", color: activeBranch.color }}>{p.label}</strong>
                {p.value && (
                  <span style={{ fontSize: "0.70rem", background: "#ffffff", border: "1px solid #cbd5e1", padding: "1px 6px", borderRadius: "4px", fontWeight: 750, color: "#0f172a" }}>
                    {p.value}
                  </span>
                )}
              </div>
              <p style={{ fontSize: "0.78rem", color: "#475569", margin: 0, lineHeight: 1.4 }}>
                {p.detail}
              </p>
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  padding: "8px 10px",
                  fontSize: "0.78rem",
                  fontStyle: "italic",
                  color: "#0f172a",
                  lineHeight: 1.45,
                  marginTop: "4px"
                }}
              >
                {p.band9Application}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
