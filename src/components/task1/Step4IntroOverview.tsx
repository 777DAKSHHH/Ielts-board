import React from "react";
import { BookOpen, Sparkles, CheckCircle2, Split, Compass } from "lucide-react";
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
        Paraphrase the map parameters (Islip town centre, current layout vs planned development, strictly zero &lsquo;provided&rsquo;), and formulate a Band 9 macro overview highlighting extensive infrastructural modernization, outer circumscribing bypass, pedestrianised core, and green space diminution.
      </p>
    </div>

    <div className="stage-grid-2col">
      <QuoteCard
        icon={<BookOpen size={20} color="var(--slate-800)" />}
        title="1. Sample Introduction (Comparative Maps Scope Paraphrase)"
        text={TASK1_DATA.sampleIntro}
        badge="Zero 'Provided'"
      />
      <QuoteCard
        icon={<Sparkles size={20} color="var(--slate-800)" />}
        title="2. Sample Macro Overview (Qualitative Synthesis)"
        text={TASK1_DATA.sampleOverview}
        badge="Zero-Number Synthesis"
      />
    </div>

    {/* Pedagogical Breakdown Grid */}
    <div className="stage-grid-2col" style={{ marginTop: "6px" }}>
      {/* 4-Element Introduction Architecture */}
      <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px", boxShadow: "var(--shadow-sm)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Compass size={18} color="var(--apple-blue)" />
          <h4 style={{ fontSize: "1rem", fontWeight: 750, color: "#0f172a", margin: 0 }}>
            4-Element Introduction Architecture for Comparative Maps
          </h4>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.88rem" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>1</span>
            <span><strong>Graphic Identifier &amp; Reporting Verb:</strong> <em>“The maps illustrate...”</em> (accurately introduces cartographic visuals and avoids the mechanical banned word &lsquo;provided&rsquo;).</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>2</span>
            <span><strong>Subject &amp; Setting:</strong> <em>“...the town centre of Islip...”</em> (identifies the small town settlement core).</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>3</span>
            <span><strong>Temporal Relationship:</strong> <em>“...the current layout alongside proposed transformations...”</em> (establishes present baseline vs future masterplan).</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center", background: "#dbeafe", color: "#1e40af", fontWeight: 800 }}>4</span>
            <span><strong>Development Scope:</strong> <em>“...for its future redevelopment.”</em> (captures urban regeneration and restructuring).</span>
          </div>
        </div>
      </div>

      {/* 2-Pillar Macro Overview Architecture */}
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
            <span><strong>Pillar 1 — Transport &amp; Civic Shift:</strong> Overall, the town centre will transition from a traffic-bisected settlement into a pedestrianised core enclosed by an outer dual carriageway bypass.</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
            <span><strong>Pillar 2 — Expansion &amp; Green Space Trade-off:</strong> The core changes involve extensive commercial and residential expansion into the northern countryside and south-eastern sector at the expense of recreational parkland.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
