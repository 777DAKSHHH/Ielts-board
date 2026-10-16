import React from "react";
import { BookOpen, Sparkles, CheckCircle2, Split, Compass, Layers, Globe } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

const QuoteCard: React.FC<{ icon: React.ReactNode; title: string; text: string; annotation?: string }> = ({ icon, title, text, annotation }) => (
  <div style={{ background: "var(--slate-50)", border: "1.5px solid var(--border-subtle)", borderRadius: "20px", padding: "24px", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
      {icon}<h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--slate-900)" }}>{title}</h4>
    </div>
    <div style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", borderRadius: "14px", padding: "18px", fontSize: "1.05rem", color: "var(--slate-800)", lineHeight: 1.65, boxShadow: "var(--shadow-sm)" }}>
      “{text}”
    </div>
    {annotation && (
      <div style={{ marginTop: "14px", background: "#f1f5f9", borderRadius: "12px", padding: "12px 14px", fontSize: "0.88rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
        <strong>Band 9 Formula:</strong> {annotation}
      </div>
    )}
  </div>
);

export const Step4IntroOverview: React.FC = () => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge accent" style={{ marginBottom: "8px" }}>Step 04 / 08 • Sample Introduction &amp; Overview</span>
      <h2 className="stage-title">Build the Introduction and Macro Overview</h2>
      <p className="stage-subtitle">
        Master the Band 9 approach for comparative business bar graphs: state the graphic format, commercial enterprise, distribution channels, temporal range, and exact financial scale of measurement, followed by a 3-pillar macro overview.
      </p>
    </div>

    <div className="stage-grid-2col">
      <QuoteCard
        icon={<BookOpen size={20} color="var(--slate-800)" />}
        title="1. Sample Introduction (With Scale)"
        text={TASK1_DATA.sampleIntro}
        annotation="Paraphrases the prompt by integrating all key elements: 1) Graphic type (horizontal bar charts), 2) Business entity (SMG Entertainment), 3) Five audio formats, 4) Geographic & temporal scope (Germany, France, and Italy from 1997 to 2007), and 5) The explicit financial measurement scale ('measured on a scale of million euros / €m'), satisfying examiner Band 9 Task Achievement expectations."
      />
      <QuoteCard
        icon={<Sparkles size={20} color="var(--slate-800)" />}
        title="2. Sample Macro Overview"
        text={TASK1_DATA.sampleOverview}
        annotation="Synthesizes the 3 macro pillars: 1) Physical store CDs retained undisputed leadership despite sharp drops; 2) Legacy analog formats (cassettes and vinyl) were rendered completely obsolete with zero profit across all three markets; 3) Online channels expanded dynamically, while establishing Germany as the dominant profit generator."
      />
    </div>

    {/* Pedagogical Breakdown Grid */}
    <div className="stage-grid-2col" style={{ marginTop: "6px" }}>
      {/* 5-Parameter Intro Breakdown */}
      <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px", boxShadow: "var(--shadow-sm)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Compass size={18} color="var(--apple-blue)" />
          <h4 style={{ fontSize: "1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
            5-Element Introduction Paraphrase Formula
          </h4>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.88rem" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>1</span>
            <span><strong>Graphic Format &amp; Action:</strong> <em>“The horizontal bar charts illustrate / compare...”</em> (clear academic reporting verb).</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>2</span>
            <span><strong>Entity &amp; Subject:</strong> <em>“...the profits earned by SMG Entertainment, a music record enterprise...”</em></span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>3</span>
            <span><strong>Scope &amp; Categories:</strong> <em>“...across five distinct audio distribution formats...”</em></span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>4</span>
            <span><strong>Territories &amp; Timeframe:</strong> <em>“...in Germany, France, and Italy between 1997 and 2007...”</em></span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center", background: "#dbeafe", color: "#1e40af", fontWeight: 800 }}>5</span>
            <span><strong>Measurement Scale (Crucial):</strong> <em>“...with financial returns measured on a scale of million euros (€m).”</em></span>
          </div>
        </div>
      </div>

      {/* 3-Pillar Macro Overview Formula */}
      <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px", boxShadow: "var(--shadow-sm)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Split size={18} color="#16a34a" />
          <h4 style={{ fontSize: "1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
            3-Pillar Macro Overview Architecture
          </h4>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.88rem" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
            <span><strong>Pillar 1 — Persistent Physical Dominance:</strong> Emphasize that retail shop-bought CDs produced the vast majority of profit across all three nations in both years, despite sharp drops.</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
            <span><strong>Pillar 2 — Universal Analog Obsolescence:</strong> Highlight that cassettes and vinyl records suffered total extinction, recording zero revenue across all three countries by 2007.</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
            <span><strong>Pillar 3 — Digital Transition &amp; Geographic Leader:</strong> Note the dynamic emergence of downloads and online CD purchases, while identifying Germany as the premier revenue generator.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
