import React from "react";
import { BookOpen, Sparkles, CheckCircle2, Split, Compass, Table } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

const QuoteCard: React.FC<{ icon: React.ReactNode; title: string; text: string; badge?: string }> = ({
  icon,
  title,
  text,
  badge
}) => (
  <div className="chromatic-glass-card" style={{ borderRadius: "20px", padding: "24px", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {icon}
        <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--slate-900)" }}>{title}</h4>
      </div>
      {badge && (
        <span className="apple-badge neutral chromatic-glass-badge" style={{ background: "#dcfce7", color: "#166534", fontWeight: 800 }}>
          {badge}
        </span>
      )}
    </div>
    <div style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", borderRadius: "14px", padding: "18px", fontSize: "1.05rem", color: "var(--slate-800)", lineHeight: 1.65, boxShadow: "var(--shadow-sm)" }}>
      “{text}”
    </div>
  </div>
);

export const Step4IntroOverview: React.FC = () => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge accent chromatic-glass-badge" style={{ marginBottom: "8px" }}>Step 04 / 08 • Sample Introduction &amp; Macro Overview</span>
      <h2 className="stage-title">Build the Introduction and Macro Overview</h2>
      <p className="stage-subtitle">
        Paraphrase the line graph parameters (three regions, wheat export volume, millions of tonnes, 1985–1990), and formulate a Band 9 macro overview strictly omitting all exact numerical figures.
      </p>
    </div>

    <div className="stage-grid-2col">
      <QuoteCard
        icon={<BookOpen size={20} color="var(--slate-800)" />}
        title="1. Sample Introduction (Line Graph Scope Paraphrase)"
        text={TASK1_DATA.sampleIntro}
        badge="Accurate Scope"
      />
      <QuoteCard
        icon={<Sparkles size={20} color="var(--slate-800)" />}
        title="2. Sample Macro Overview (Qualitative Synthesis)"
        text={TASK1_DATA.sampleOverview}
        badge="Zero Numbers Included"
      />
    </div>

    {/* Pedagogical Breakdown Grid */}
    <div className="stage-grid-2col" style={{ marginTop: "6px" }}>
      {/* 4-Element Introduction Architecture */}
      <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px", boxShadow: "var(--shadow-sm)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Compass size={18} color="var(--apple-blue)" />
          <h4 style={{ fontSize: "1rem", fontWeight: 750, color: "#0f172a", margin: 0 }}>
            4-Element Introduction Architecture for Line Graphs
          </h4>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.88rem" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>1</span>
            <span><strong>Graphic Type &amp; Reporting Verb:</strong> <em>“The line graph illustrates...”</em> (accurately identifies visual representation).</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>2</span>
            <span><strong>Subject Matter:</strong> <em>“...the volume of wheat exported...”</em> (captures agricultural trade commodity).</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>3</span>
            <span><strong>Geographic Scope:</strong> <em>“...by three different areas—Australia, Canada, and the European Community...”</em> (names all three examined regions).</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center", background: "#dbeafe", color: "#1e40af", fontWeight: 800 }}>4</span>
            <span><strong>Timeframe &amp; Measurement Unit:</strong> <em>“...between 1985 and 1990, measured in millions of tonnes.”</em> (establishes 6-year interval and metric).</span>
          </div>
        </div>
      </div>

      {/* 2-Pillar Macro Overview Architecture (Zero Numbers) */}
      <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px", boxShadow: "var(--shadow-sm)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Split size={18} color="#16a34a" />
          <h4 style={{ fontSize: "1rem", fontWeight: 750, color: "#0f172a", margin: 0 }}>
            Macro Overview Architecture • Qualitative Synthesis
          </h4>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.88rem" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
            <span><strong>Pillar 1 — Growth vs Decline Trajectories:</strong> The European Community witnessed sustained upward growth over the period to become the dominant wheat exporter by 1990, whereas Australia underwent a steady downward trajectory to finish in the lowest position.</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
            <span><strong>Pillar 2 — The Volatility &amp; Baseline Return:</strong> In contrast, Canada exhibited marked volatility throughout the six-year span, registering both the overall peak and a dramatic plunge before returning to its starting level.</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
            <span><strong>Strict Rule — Zero Numbers:</strong> Reserving all exact statistics (25m, 21m, 14m, 11m, etc.) for the body paragraphs ensures the overview functions as a true macro qualitative synthesis.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
