import React from "react";
import { BookOpen, Sparkles, CheckCircle2, Split, Compass } from "lucide-react";
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
      <h2 className="stage-title">Build the Introduction and Overview</h2>
      <p className="stage-subtitle">
        Master the Band 9 approach for comparative statistical tables: state the subject, tracked secondary schools, six-year timeframe, and percentage units, followed by a macro synthesis of the 4-to-1 trend split and key standouts.
      </p>
    </div>

    <div className="stage-grid-2col">
      <QuoteCard
        icon={<BookOpen size={20} color="var(--slate-800)" />}
        title="1. Sample Introduction"
        text={TASK1_DATA.sampleIntro}
        annotation="Paraphrases 'shows the percentage of pupils who entered higher education from five secondary school' into 'illustrates the proportion of pupils who proceeded to tertiary education from five secondary schools', explicitly naming all five institutions and specifying the 1995–2000 timeframe."
      />
      <QuoteCard
        icon={<Sparkles size={20} color="var(--slate-800)" />}
        title="2. Sample Overview"
        text={TASK1_DATA.sampleOverview}
        annotation="Captures the macro architecture: 1) The 4-to-1 trajectory dichotomy (four institutions expanded, while Greystone High was the sole school to decline), 2) The most dramatic surge (Harble nearly tripling to take 1st place at 80%), and 3) The static benchmark (Crackend Boys maintaining consistency between 59% and 62%)."
      />
    </div>

    {/* Pedagogical Breakdown Grid */}
    <div className="stage-grid-2col" style={{ marginTop: "6px" }}>
      {/* 4-Parameter Intro Breakdown */}
      <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px", boxShadow: "var(--shadow-sm)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Compass size={18} color="var(--apple-blue)" />
          <h4 style={{ fontSize: "1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
            4-Element Introduction Paraphrase Formula
          </h4>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.88rem" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>1</span>
            <span><strong>Visual Type &amp; Action:</strong> <em>“The table illustrates / outlines...”</em> (replaces repetitive “shows”).</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>2</span>
            <span><strong>Specific Subject:</strong> <em>“the proportion of pupils who proceeded to tertiary education”</em> (paraphrases entering higher education).</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>3</span>
            <span><strong>All 5 Tracked Schools:</strong> <em>“from five secondary schools—Royston Academy, Greystone High, Harble Secondary, Fairfield Girls, and Crackend Boys...”</em></span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>4</span>
            <span><strong>Timeframe:</strong> <em>“over the six-year timeframe from 1995 to 2000.”</em></span>
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
            <span><strong>Pillar 1 — The Macro Split (4 vs 1):</strong> Group the five schools logically: four experienced upward growth, whereas Greystone High was the solitary exception with a downward trend.</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
            <span><strong>Pillar 2 — The Meteoric Standout:</strong> Highlight Harble Secondary's dramatic surge from 30% to 80% to vault from last to first place.</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
            <span><strong>Pillar 3 — The Static Baseline:</strong> Contrast the dynamic movement with Crackend Boys, which maintained strict consistency between 59% and 62%.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
