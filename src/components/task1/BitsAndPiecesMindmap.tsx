import React, { useState } from "react";
import {
  Layers,
  TrendingDown,
  TrendingUp,
  ChevronRight,
  Sparkles,
  BookOpen,
  Maximize2,
  Grid,
  Columns,
  Disc,
  Globe
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
  pieces: MindmapPiece[];
}

const MINDMAP_BRANCHES: MindmapBranch[] = [
  {
    id: "parameters",
    title: "Piece 1: Introduction & Essential Graph Parameters",
    badge: "Introduction Anchor",
    color: "#4338ca",
    borderColor: "#c7d2fe",
    bgLight: "#eef2ff",
    icon: <BookOpen size={20} color="#4f46e5" />,
    summary:
      "A Band 9 report begins with an unambiguous paraphrase of the core parameters: visual format (horizontal bar charts), subject (profit generation of SMG Entertainment record company), geographic scope (Germany, France, and Italy), 5 music formats, and unit (million euros).",
    pieces: [
      {
        label: "Visual Format & Subject",
        value: "Dual Comparative Horizontal Bar Charts",
        detail:
          "Two separate horizontal bar graphs detailing profits for record enterprise SMG Entertainment.",
        band9Application:
          "“The horizontal bar charts illustrate the profits earned by SMG Entertainment, a music record company, across five distinct audio distribution formats in Germany, France, and Italy between 1997 and 2007.”"
      },
      {
        label: "Geographic & Temporal Parameters",
        value: "3 European Nations Across a 10-Year Span (1997 vs 2007)",
        detail:
          "Tracks Germany, France, and Italy at two discrete snapshots marking the onset of the digital audio revolution.",
        band9Application:
          "“...comparing financial returns in three European nations across a 10-year period marking the shift from physical to digital media.”"
      },
      {
        label: "Measurement Unit & Categories",
        value: "Million Euros (€m) Across 5 Media Formats",
        detail:
          "Shop CDs, Online CDs, Internet downloads, Cassettes, and Vinyl singles/LPs calibrated from 0 to 40 million euros.",
        band9Application:
          "“...with profits measured in million euros across traditional brick-and-mortar sales, remote physical orders, digital downloads, and legacy magnetic/vinyl formats.”"
      }
    ]
  },
  {
    id: "overview",
    title: "Piece 2: Macro Overview (3-Pillar Synthesis)",
    badge: "Overview Engine",
    color: "#0369a1",
    borderColor: "#bae6fd",
    bgLight: "#f0f9ff",
    icon: <Layers size={20} color="#0284c7" />,
    summary:
      "The macro overview must identify the three decisive macro features: 1) Physical store CDs retained undisputed leadership despite sharp drops; 2) Legacy analog formats vanished completely to zero; 3) Digital downloads and online sales expanded dynamically, with Germany leading overall profits.",
    pieces: [
      {
        label: "Pillar 1: Persistent Store CD Dominance",
        value: "Highest earner in both 1997 and 2007 despite 30%-40% drop",
        detail:
          "Shop-bought CDs formed the overwhelming majority of earnings across all three nations in 1997 and remained the #1 source in 2007.",
        band9Application:
          "“Overall, retail store-bought compact discs remained the primary source of revenue in all three nations throughout the decade, despite experiencing marked contractions by 2007.”"
      },
      {
        label: "Pillar 2: Total Obsolescence of Legacy Analog",
        value: "Cassettes & Vinyl collapsed from up to €6m to 0 €m",
        detail:
          "Cassettes and vinyl records contributed noticeably in 1997 but were entirely phased out of profitability by 2007.",
        band9Application:
          "“Concurrently, legacy analog formats—namely cassettes and vinyl—became completely obsolete, generating zero profit across the board.”"
      },
      {
        label: "Pillar 3: Digital Emergence & German Leadership",
        value: "Online CDs & Downloads surged; Germany led all markets",
        detail:
          "Internet downloads rose from nil, online CDs multiplied, and Germany maintained commanding profitability in nearly every medium.",
        band9Application:
          "“...while digital distribution channels witnessed substantial growth, with Germany consistently generating the highest overall profits.”"
      }
    ]
  },
  {
    id: "body1_baseline",
    title: "Piece 3: Body 1 (1997 Baseline & Analog Distribution)",
    badge: "Body 1 Focus",
    color: "#059669",
    borderColor: "#a7f3d0",
    bgLight: "#ecfdf5",
    icon: <TrendingUp size={20} color="#059669" />,
    summary:
      "Document the initial 1997 commercial baseline: in-store CDs generating the immense lion's share, negligible online CDs, nonexistent internet downloads, and modest analog cassette/vinyl sales led by Italy.",
    pieces: [
      {
        label: "Store CD Supremacy",
        value: "Germany €40m, France €25m, Italy €20m",
        detail:
          "Physical store CD sales generated over 85% of total company revenue; Germany held a €15m lead over France and €20m over Italy.",
        band9Application:
          "“In 1997, retail purchases of CDs in shops represented the overwhelming lion’s share of SMG Entertainment’s earnings, with Germany generating 40 million euros, followed by France at 25 million and Italy at 20 million.”"
      },
      {
        label: "Digital Nonexistence & Online Triviality",
        value: "Downloads 0 €m; Online CDs under €3m",
        detail:
          "Downloads were 0 in all markets; online CD purchases were negligible at €3m in Germany, €1.5m in France, and 0 in Italy.",
        band9Application:
          "“By contrast, online CD orders were negligible, yielding 3 million euros in Germany and 1.5 million in France, while internet downloads were entirely nonexistent across all three territories.”"
      },
      {
        label: "Analog Mediums (Cassettes & Vinyl)",
        value: "Italy Led: Cassettes €6m, Vinyl €3m",
        detail:
          "Cassettes yielded €6m in Italy, €5m in Germany, and under €1m in France; vinyl yielded €3m in Italy and €2m in Germany.",
        band9Application:
          "“Regarding analog formats, Italy led cassette sales at 6 million euros, slightly ahead of Germany’s 5 million, while vinyl singles and LPs accounted for 3 million euros in Italy and 2 million in Germany.”"
      }
    ]
  },
  {
    id: "body2_shift",
    title: "Piece 4: Body 2 (2007 Contraction, Digital Surge & Obsolescence)",
    badge: "Body 2 Focus",
    color: "#d97706",
    borderColor: "#fde68a",
    bgLight: "#fffbeb",
    icon: <TrendingDown size={20} color="#d97706" />,
    summary:
      "Analyze the profound structural changes a decade later: in-store CDs plummeting by €6m–€15m, total wipe-out of cassettes and vinyl, and the rapid uptake of online CD ordering and internet downloads.",
    pieces: [
      {
        label: "Contraction in Store CDs",
        value: "Germany €25m (-15m), France €15m (-10m), Italy €14m (-6m)",
        detail:
          "Despite remaining the #1 profit contributor, shop CD earnings suffered steep declines of 30% to 40% in all territories.",
        band9Application:
          "“Although shop-bought CDs remained the leading profit contributor, earnings plummeted across all markets—sliding to 25 million euros in Germany, 15 million in France, and 14 million in Italy.”"
      },
      {
        label: "Total Extinction of Analog Formats",
        value: "0 €m for Cassettes & Vinyl in All 3 Countries",
        detail:
          "Analog media ceased to exist commercially, completely wiped off the balance sheet without a single euro of profit.",
        band9Application:
          "“In stark contrast, both cassettes and vinyl records were entirely phased out, generating zero profit across the board.”"
      },
      {
        label: "Surge of Remote & Digital Channels",
        value: "Online CDs (€8m Ger, €7m Fra) + Downloads (€5m Ger, €5m Fra)",
        detail:
          "Online CDs grew rapidly; internet downloads emerged from a standing start to generate €5m each in Germany and France, and €1.5m in Italy.",
        band9Application:
          "“The slack was partially absorbed by digital and remote channels; online CD sales surged to 8 million euros in Germany and 7 million in France, while internet downloads contributed 5 million euros each in both leading nations.”"
      }
    ]
  },
  {
    id: "national_rankings",
    title: "Piece 5: Geographic Market Comparison & Structural Impact",
    badge: "Comparative Synthesis",
    color: "#7c3aed",
    borderColor: "#ddd6fe",
    bgLight: "#f5f3ff",
    icon: <Globe size={20} color="#7c3aed" />,
    summary:
      "Contrast national agility and total earnings: Germany maintained undisputed supremacy (~€50m to ~€38m), France showed digital resilience (~€27m stable), while Italy suffered the sharpest net loss (~€29m down to ~€17m).",
    pieces: [
      {
        label: "Germany: Market Leader in Every Format",
        value: "Top profit generator in both 1997 and 2007",
        detail:
          "Dominated store CDs (€40m/€25m), online CDs (€8m), and matched France in downloads (€5m).",
        band9Application:
          "“Geographically, Germany stood out as the principal commercial engine for SMG Entertainment across both time periods.”"
      },
      {
        label: "France: Agile Digital Transition",
        value: "Net total profit remained stable (~€27m in both years)",
        detail:
          "Losses of €10m in store CDs were almost perfectly offset by gains in online CDs (+€5.5m) and downloads (+€5m).",
        band9Application:
          "“France exhibited remarkable digital agility, mitigating its retail CD losses through swift gains in remote and digital avenues.”"
      },
      {
        label: "Italy: Severe Contraction Due to Analog Lag",
        value: "Sharpest drop: from ~€29m down to ~€17m (-41%)",
        detail:
          "High initial reliance on cassettes (€6m) and vinyl (€3m) left it vulnerable when analog vanished, while digital uptake was slowest (€1.5m each).",
        band9Application:
          "“Conversely, Italy suffered a dramatic 41% contraction in total profit, crippled by the disappearance of its lucrative cassette trade and sluggish adoption of internet downloads.”"
      }
    ]
  }
];

export const BitsAndPiecesMindmap: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>("parameters");
  const [viewMode, setViewMode] = useState<"detail" | "matrix">("detail");

  const selectedBranch =
    MINDMAP_BRANCHES.find((b) => b.id === selectedBranchId) || MINDMAP_BRANCHES[0];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
      {/* Top Controller Strip */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
          background: "var(--slate-50)",
          padding: "10px 16px",
          borderRadius: "14px",
          border: "1px solid var(--border-subtle)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Sparkles size={18} color="var(--apple-blue)" />
          <span style={{ fontSize: "0.86rem", fontWeight: 800, color: "var(--slate-900)" }}>
            SMG Entertainment Mindmap Architecture (5 Strategic Pieces)
          </span>
        </div>

        <div style={{ display: "flex", gap: "6px" }}>
          <button
            onClick={() => setViewMode("detail")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "5px 10px",
              borderRadius: "8px",
              fontSize: "0.75rem",
              fontWeight: 700,
              border: "1px solid var(--border-subtle)",
              background: viewMode === "detail" ? "var(--slate-900)" : "#ffffff",
              color: viewMode === "detail" ? "#ffffff" : "var(--slate-700)",
              cursor: "pointer"
            }}
          >
            <Columns size={12} /> Detailed Explorer
          </button>
          <button
            onClick={() => setViewMode("matrix")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "5px 10px",
              borderRadius: "8px",
              fontSize: "0.75rem",
              fontWeight: 700,
              border: "1px solid var(--border-subtle)",
              background: viewMode === "matrix" ? "var(--slate-900)" : "#ffffff",
              color: viewMode === "matrix" ? "#ffffff" : "var(--slate-700)",
              cursor: "pointer"
            }}
          >
            <Grid size={12} /> Full Overview Matrix
          </button>
        </div>
      </div>

      {/* Piece Tabs */}
      <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "4px" }}>
        {MINDMAP_BRANCHES.map((b) => {
          const isSelected = selectedBranchId === b.id;
          return (
            <button
              key={b.id}
              onClick={() => setSelectedBranchId(b.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 14px",
                borderRadius: "12px",
                border: isSelected ? `2px solid ${b.color}` : "1.5px solid var(--border-subtle)",
                background: isSelected ? b.bgLight : "#ffffff",
                color: isSelected ? b.color : "var(--slate-700)",
                fontWeight: isSelected ? 800 : 650,
                fontSize: "0.82rem",
                cursor: "pointer",
                whiteSpace: "nowrap",
                boxShadow: isSelected ? "var(--shadow-sm)" : "none",
                transition: "all 0.15s ease"
              }}
            >
              {b.icon}
              {b.badge}
            </button>
          );
        })}
      </div>

      {viewMode === "detail" ? (
        /* Detailed View of Active Branch */
        <div
          style={{
            background: "#ffffff",
            border: `2px solid ${selectedBranch.borderColor}`,
            borderRadius: "18px",
            padding: "20px 22px",
            boxShadow: "var(--shadow-sm)",
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <span
                style={{
                  fontSize: "0.74rem",
                  fontWeight: 800,
                  color: selectedBranch.color,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}
              >
                {selectedBranch.badge}
              </span>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--slate-900)", margin: "4px 0 0 0" }}>
                {selectedBranch.title}
              </h3>
            </div>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: selectedBranch.bgLight,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {selectedBranch.icon}
            </div>
          </div>

          <p style={{ fontSize: "0.9rem", color: "var(--slate-600)", lineHeight: 1.5, margin: 0 }}>
            {selectedBranch.summary}
          </p>

          {/* Sub-pieces */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px" }}>
            {selectedBranch.pieces.map((piece) => (
              <div
                key={piece.label}
                style={{
                  background: "var(--slate-50)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "14px",
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "6px" }}>
                  <strong style={{ fontSize: "0.92rem", color: "var(--slate-900)" }}>
                    {piece.label}
                  </strong>
                  {piece.value && (
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 750,
                        padding: "2px 8px",
                        borderRadius: "6px",
                        background: "#ffffff",
                        border: "1px solid var(--border-subtle)",
                        color: selectedBranch.color
                      }}
                    >
                      {piece.value}
                    </span>
                  )}
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
                  {piece.detail}
                </div>
                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    border: "1px solid var(--border-subtle)",
                    fontSize: "0.82rem",
                    color: "var(--slate-800)",
                    fontStyle: "italic",
                    marginTop: "4px",
                    lineHeight: 1.45
                  }}
                >
                  <strong style={{ fontStyle: "normal", color: "var(--slate-900)" }}>Band 9 Phrasing:</strong>{" "}
                  {piece.band9Application}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Matrix View Across All 5 Branches */
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px" }}>
          {MINDMAP_BRANCHES.map((b) => (
            <div
              key={b.id}
              style={{
                background: "#ffffff",
                border: `1.5px solid ${b.borderColor}`,
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                boxShadow: "var(--shadow-sm)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {b.icon}
                <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)" }}>{b.badge}</strong>
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
                {b.summary}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "auto" }}>
                {b.pieces.map((p) => (
                  <div
                    key={p.label}
                    style={{
                      background: "var(--slate-50)",
                      borderRadius: "8px",
                      padding: "6px 8px",
                      fontSize: "0.75rem",
                      color: "var(--slate-700)",
                      border: "1px solid var(--border-subtle)"
                    }}
                  >
                    <strong>{p.label}:</strong> {p.value}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
