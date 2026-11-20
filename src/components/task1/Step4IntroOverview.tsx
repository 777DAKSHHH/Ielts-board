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
        Paraphrase the process diagram parameters (7 sequential stages, raw sugarcane to refined sugar crystals, field cultivation to drying), and formulate a Band 9 macro overview highlighting the total stage count, starting/culminating steps, and the dual bifurcation between agricultural and chemical processing.
      </p>
    </div>

    <div className="stage-grid-2col">
      <QuoteCard
        icon={<BookOpen size={20} color="var(--slate-800)" />}
        title="1. Sample Introduction (Process Scope Paraphrase)"
        text={TASK1_DATA.sampleIntro}
        badge="Accurate Scope"
      />
      <QuoteCard
        icon={<Sparkles size={20} color="var(--slate-800)" />}
        title="2. Sample Macro Overview (Qualitative Synthesis)"
        text={TASK1_DATA.sampleOverview}
        badge="Start-to-Finish Synthesis"
      />
    </div>

    {/* Pedagogical Breakdown Grid */}
    <div className="stage-grid-2col" style={{ marginTop: "6px" }}>
      {/* 4-Element Introduction Architecture */}
      <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px", boxShadow: "var(--shadow-sm)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Compass size={18} color="var(--apple-blue)" />
          <h4 style={{ fontSize: "1rem", fontWeight: 750, color: "#0f172a", margin: 0 }}>
            4-Element Introduction Architecture for Process Diagrams
          </h4>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.88rem" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>1</span>
            <span><strong>Graphic Type &amp; Reporting Verb:</strong> <em>“The process diagram delineates...”</em> (accurately identifies visual representation and ordered flow).</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>2</span>
            <span><strong>Total Sequential Stages:</strong> <em>“...the seven sequential stages involved in...”</em> (explicitly counts all steps from 1 to 7).</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>3</span>
            <span><strong>Transformation Scope:</strong> <em>“...the manufacture of refined sugar from raw sugarcane...”</em> (captures raw input to finished commercial commodity).</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center", background: "#dbeafe", color: "#1e40af", fontWeight: 800 }}>4</span>
            <span><strong>Boundary Markers:</strong> <em>“...spanning from initial field cultivation to final drying and cooling.”</em> (establishes opening and concluding operations).</span>
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
            <span><strong>Pillar 1 — Linear Sequence Span:</strong> Overall, the manufacturing process is a linear sequence comprising seven distinct stages, beginning with agricultural cultivation and harvesting and culminating in the industrial drying and cooling of pure sugar crystals.</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
            <span><strong>Pillar 2 — Dual Harvesting &amp; Process Bifurcation:</strong> Notably, while the opening stages involve agricultural harvesting (performed either mechanically or manually) and mechanical juice extraction, the remaining phases rely on chemical filtration, thermal evaporation, and centrifugal separation.</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
            <span><strong>Examiner Anchor:</strong> Highlighting both the total number of stages and the two-phase structural division (agricultural harvesting vs industrial refining) guarantees Band 9 in Task Achievement (TA).</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
