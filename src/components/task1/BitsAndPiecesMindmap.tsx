import React, { useState } from "react";
import {
  Layers,
  TrendingDown,
  TrendingUp,
  ChevronRight,
  Sparkles,
  BookOpen,
  Maximize2,
  Tv,
  Radio,
  Clock,
  Crosshair
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
    title: "Piece 1: Introduction & Graph Parameters",
    badge: "Introduction Anchor",
    color: "#4338ca",
    borderColor: "#c7d2fe",
    bgLight: "#eef2ff",
    icon: <BookOpen size={20} color="#4f46e5" />,
    summary:
      "A Band 9 introduction paraphrases the essential parameters: graphic format (line graph), demographic subject (UK population aged four and above), two broadcasting channels (radio and television), temporal cycle (24 hours between October and December 1992), and measurement unit (percentage / %).",
    pieces: [
      {
        label: "Visual Format & Action",
        value: "Dual Line Graph of Diurnal Cycle",
        detail:
          "Continuous line graph tracking radio and television audiences across the 24 hours of day and night.",
        band9Application:
          "“The line graph illustrates the percentage of the UK population aged four and above who listened to the radio and watched television throughout a 24-hour cycle between October and December in 1992.”"
      },
      {
        label: "Demographic Target & Scope",
        value: "UK Population Aged Four and Above",
        detail:
          "Crucial demographic boundary specified in the Y-axis label: '(over 4-years old)'.",
        band9Application:
          "“...tracking the proportion of UK citizens aged four and older who engaged with broadcast media...”"
      },
      {
        label: "Measurement Scale & Period",
        value: "Percentage Scale (0%–50%) Over 24 Hours",
        detail:
          "Y-axis calibrated in 5% intervals from 0% to 50%; X-axis spans from 1.00 am to 24.00 (midnight).",
        band9Application:
          "“...calibrated as a percentage of the total national population, recorded over the final quarter of 1992.”"
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
      "The macro overview must synthesize the three decisive macro features: 1) Inverse diurnal patterns (radio morning supremacy vs TV afternoon/night domination); 2) Prime-time television achieving the single highest audience share of the day (45%); 3) The pivotal midday intersection where both mediums converge at approximately 15%.",
    pieces: [
      {
        label: "Pillar 1: Inverse Diurnal Trajectories",
        value: "Radio morning leader vs Television evening supreme",
        detail:
          "Radio commands breakfast and commute listening; television takes over decisively from 13:00 into late night.",
        band9Application:
          "“Overall, the two media displayed contrasting diurnal patterns; radio listenership was considerably higher during the morning hours, whereas television decisively dominated from the early afternoon through the night.”"
      },
      {
        label: "Pillar 2: Prime-Time Television Zenith",
        value: "45% Peak between 20:00 and 21:00",
        detail:
          "Television captivates nearly half the UK population during prime time, achieving the single highest point on the chart.",
        band9Application:
          "“Additionally, evening television viewing attracted the single highest audience share of the day, peaking at roughly 45% during prime time.”"
      },
      {
        label: "Pillar 3: Midday Crossover Convergence",
        value: "Both mediums intersect at 15% around 13:00",
        detail:
          "The critical pivot point where television viewership ascends to surpass declining radio listenership.",
        band9Application:
          "“...with both mediums briefly converging at an identical level around midday before embarking on opposite paths.”"
      }
    ]
  },
  {
    id: "body1_morning",
    title: "Piece 3: Body 1 (Morning Trends & Midday Crossover)",
    badge: "Body 1 Focus",
    color: "#dc2626",
    borderColor: "#fecaca",
    bgLight: "#fef2f2",
    icon: <Radio size={20} color="#dc2626" />,
    summary:
      "Document the first half of the diurnal cycle (01:00 to 13:00): nocturnal lull (<5%), the explosive climb of radio to its daily apex of ~27% at 8:30 am, television's modest morning bump (7% at 8:00) down to 3.5%, and the 13:00 intersection at 15%.",
    pieces: [
      {
        label: "Feature 1: Nocturnal Trough",
        value: "01:00 – 06:00 (Under 5% Engagement)",
        detail:
          "Both media hover below 5% overnight; radio bottoms out at 2%–3% while TV remains flat at 3%–4%.",
        band9Application:
          "“Between 1:00 and 6:00, audience figures for both platforms remained marginal at under 7%.”"
      },
      {
        label: "Feature 2: Radio Morning Surge & Peak",
        value: "06:00 – 09:00 (Apex of ~27% at 08:30)",
        detail:
          "Radio shoots up from 4% at 6:00 to 15% at 7:00, 25% at 8:00, peaking at approximately 27% around 8:30.",
        band9Application:
          "“Radio then experienced a dramatic morning surge, climbing steeply to reach a daily apex of approximately 27% around 8:30.”"
      },
      {
        label: "Feature 3: TV Morning Slump & Midday Crossover",
        value: "08:00 (7%) → 11:00 (3.5%) → 13:00 (15%)",
        detail:
          "TV has a brief 7% bump at 8:00, dips to 3.5% at 11:00, then climbs to meet falling radio at 15% at 13:00.",
        band9Application:
          "“In contrast, television engagement rose only modestly to 7% at 8:00 before sliding back to around 4% at 11:00. By 13:00, radio audiences had tapered off while television viewership climbed, resulting in an intersection where both mediums stood at roughly 15%.”"
      }
    ]
  },
  {
    id: "body2_evening",
    title: "Piece 4: Body 2 (Afternoon Ascent, Prime-Time Peak & Night)",
    badge: "Body 2 Focus",
    color: "#2563eb",
    borderColor: "#bfdbfe",
    bgLight: "#eff6ff",
    icon: <Tv size={20} color="#2563eb" />,
    summary:
      "Document the second half of the diurnal cycle (14:00 to 24:00): television permanently taking the lead, radio's secondary commute bump (14% at 17:00) followed by its plunge below 10%, TV's explosive prime-time surge to 45% (20:00–21:00), and late-night declines.",
    pieces: [
      {
        label: "Feature 1: TV Leadership Reversal",
        value: "14:00 Onwards (TV Supersedes Radio)",
        detail:
          "TV remains steady around 14%–15% while radio falls to 11%–12%, initiating permanent TV dominance.",
        band9Application:
          "“From 14:00 onwards, television superseded radio as the preferred broadcasting medium.”"
      },
      {
        label: "Feature 2: Radio Commute Bump & Slump",
        value: "17:00 (14% Bump) → Drops Below 10%",
        detail:
          "Radio enjoys a temporary bump to 14% at 17:00 as commuters travel home, before plunging below 10% after 18:00.",
        band9Application:
          "“Although radio exhibited a brief afternoon commute bump to 14% at 17:00, its figures plummeted below 10% thereafter.”"
      },
      {
        label: "Feature 3: Prime-Time 45% TV Explosion & Nightfall",
        value: "20:00 – 21:00 (Global Zenith of 45%)",
        detail:
          "TV rockets past 40% after 18:00 to peak at 45% between 20:00 and 21:00, before falling to 15% by midnight while radio sits at 4%.",
        band9Application:
          "“Conversely, television audiences skyrocketed from 16:00, culminating in a prime-time peak of 45% between 20:00 and 21:00. Late at night, television viewership dropped sharply to 15% by midnight, while radio leveled off at around 4%.”"
      }
    ]
  }
];

export const BitsAndPiecesMindmap: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>("parameters");
  const selectedBranch =
    MINDMAP_BRANCHES.find((b) => b.id === selectedBranchId) || MINDMAP_BRANCHES[0];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        width: "100%",
        fontFamily: "var(--font-sans)"
      }}
    >
      {/* Branch Selector Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "10px"
        }}
      >
        {MINDMAP_BRANCHES.map((branch) => {
          const isSelected = selectedBranchId === branch.id;
          return (
            <button
              key={branch.id}
              onClick={() => setSelectedBranchId(branch.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 16px",
                borderRadius: "16px",
                border: isSelected ? `2px solid ${branch.color}` : "1.5px solid var(--border-subtle)",
                background: isSelected ? branch.bgLight : "#ffffff",
                boxShadow: isSelected ? "var(--shadow-sm)" : "none",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.15s ease"
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: isSelected ? branch.color : "var(--slate-100)",
                  color: isSelected ? "#ffffff" : "var(--slate-600)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}
              >
                {branch.icon}
              </div>
              <div>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    color: isSelected ? branch.color : "var(--slate-500)",
                    display: "block"
                  }}
                >
                  {branch.badge}
                </span>
                <strong
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--slate-900)",
                    display: "block",
                    lineHeight: 1.3
                  }}
                >
                  {branch.title}
                </strong>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Branch Deep Dive */}
      <div
        style={{
          background: "#ffffff",
          border: `1.5px solid ${selectedBranch.borderColor}`,
          borderRadius: "20px",
          padding: "22px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          boxShadow: "var(--shadow-sm)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: selectedBranch.color,
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {selectedBranch.icon}
            </div>
            <div>
              <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                {selectedBranch.title}
              </h4>
              <p style={{ fontSize: "0.84rem", color: "var(--slate-600)", marginTop: "2px", margin: 0 }}>
                {selectedBranch.summary}
              </p>
            </div>
          </div>
          <span
            className="apple-badge neutral"
            style={{
              background: selectedBranch.bgLight,
              color: selectedBranch.color,
              fontWeight: 800,
              fontSize: "0.78rem"
            }}
          >
            {selectedBranch.badge}
          </span>
        </div>

        {/* Piece Items Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "12px" }}>
          {selectedBranch.pieces.map((piece, idx) => (
            <div
              key={piece.label}
              style={{
                background: "var(--slate-50)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "14px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    className="apple-badge neutral"
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: "0.74rem"
                    }}
                  >
                    {idx + 1}
                  </span>
                  <strong style={{ fontSize: "0.92rem", color: "var(--slate-900)" }}>
                    {piece.label}
                  </strong>
                </div>
                {piece.value && (
                  <span
                    className="apple-badge neutral"
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 750,
                      background: "#ffffff",
                      border: "1px solid var(--border-subtle)"
                    }}
                  >
                    {piece.value}
                  </span>
                )}
              </div>

              <p style={{ fontSize: "0.84rem", color: "var(--slate-600)", lineHeight: 1.45, margin: 0 }}>
                {piece.detail}
              </p>

              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "10px",
                  padding: "10px 12px",
                  fontSize: "0.82rem",
                  color: "var(--slate-800)",
                  lineHeight: 1.5,
                  marginTop: "auto"
                }}
              >
                <strong style={{ color: selectedBranch.color, display: "block", marginBottom: "2px" }}>
                  Band 9 Application:
                </strong>
                {piece.band9Application}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
