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
      <h2 className="stage-title">Build the Introduction and Macro Overview</h2>
      <p className="stage-subtitle">
        Master the Band 9 approach for double bar charts depicting demographic comparisons: state the graphic format, surveyed population, gender categories, age brackets, survey year, and exact percentage measurement scale, followed by a 3-pillar macro overview.
      </p>
    </div>

    <div className="stage-grid-2col">
      <QuoteCard
        icon={<BookOpen size={20} color="var(--slate-800)" />}
        title="1. Sample Introduction (With Scale & Demographic Scope)"
        text={TASK1_DATA.sampleIntro}
        annotation="Paraphrases the prompt by integrating all 5 critical parameters: 1) Graphic type (double bar chart), 2) Demographic audience (Australian men and women), 3) Age distribution (six distinct cohorts from 15 to 65+), 4) Subject & temporal span (regular physical activity in 2010), and 5) The explicit measurement unit (measured as a percentage of each demographic cohort / %), satisfying examiner Band 9 Task Achievement expectations."
      />
      <QuoteCard
        icon={<Sparkles size={20} color="var(--slate-800)" />}
        title="2. Sample Macro Overview (3 Core Pillars)"
        text={TASK1_DATA.sampleOverview}
        annotation="Synthesizes the 3 macro pillars: 1) Overall female preponderance (women lead across 5 of 6 age groups); 2) Youth anomaly (young men aged 15–24 are the sole demographic where males outpace females); 3) Trajectory divergence & senior convergence (female mid-life peak at 53.3% vs male U-shaped dip to 39.5%, culminating in virtual parity at 47% in retirement)."
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
            <span><strong>Graphic Format &amp; Action:</strong> <em>“The bar chart compares / illustrates...”</em> (accurate academic reporting verb).</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>2</span>
            <span><strong>Demographic Subject &amp; Gender:</strong> <em>“...the proportions of Australian men and women...”</em></span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>3</span>
            <span><strong>Age Distribution:</strong> <em>“...across six distinct age brackets (ranging from 15 to 65 and over)...”</em></span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>4</span>
            <span><strong>Activity &amp; Temporal Anchor:</strong> <em>“...who engaged in regular physical activity in the year 2010...”</em></span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center", background: "#dbeafe", color: "#1e40af", fontWeight: 800 }}>5</span>
            <span><strong>Measurement Scale (Crucial):</strong> <em>“...measured as a percentage of each demographic cohort (%).”</em></span>
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
            <span><strong>Pillar 1 — Female Participation Lead:</strong> Australian women generally recorded higher rates of regular exercise than men across five out of the six age categories.</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
            <span><strong>Pillar 2 — Youth Male Inversion:</strong> Young men (15–24) formed the sole exception where male participation outpaced females (52.8% vs 47.7%).</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
            <span><strong>Pillar 3 — Mid-Life Gap &amp; Senior Parity:</strong> Women reached a peak of 53.3% (45–54), while men dropped to a low of 39.5% (widest 13-point gap), before both sexes converged to near equality at age 65+ (~47%).</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
