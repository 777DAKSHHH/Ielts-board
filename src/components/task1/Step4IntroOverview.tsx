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
        Paraphrase the survey graphic parameters (two tables and one pie chart, Auckland New Zealand shopping complex, four satisfaction tiers), and formulate a Band 9 macro overview highlighting dominant overall positive reception and the stark dining gender divergence.
      </p>
    </div>

    <div className="stage-grid-2col">
      <QuoteCard
        icon={<BookOpen size={20} color="var(--slate-800)" />}
        title="1. Sample Introduction (Multi-Graphic Scope Paraphrase)"
        text={TASK1_DATA.sampleIntro}
        badge="Accurate Scope"
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
            4-Element Introduction Architecture for Multi-Graphic Surveys
          </h4>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.88rem" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>1</span>
            <span><strong>Graphic Types &amp; Reporting Verb:</strong> <em>“The two tables and accompanying pie chart delineate...”</em> (accurately identifies multiple visual formats).</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>2</span>
            <span><strong>Subject &amp; Geographic Location:</strong> <em>“...the results of a visitor satisfaction survey regarding a newly opened shopping complex in Auckland, New Zealand...”</em> (names facility and city).</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>3</span>
            <span><strong>Evaluated Domains:</strong> <em>“...evaluating visitor sentiment across retail shops, dining establishments, and overall architectural design...”</em> (specifies all 3 measured areas).</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center", background: "#dbeafe", color: "#1e40af", fontWeight: 800 }}>4</span>
            <span><strong>Measurement Scale:</strong> <em>“...expressed in percentage terms across four distinct sentiment classifications.”</em> (establishes percentages and 4 satisfaction tiers).</span>
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
            <span><strong>Pillar 1 — Dominant Overall Positive Reception:</strong> Overall, the shopping complex garnered predominantly positive feedback across all evaluated domains, with architectural design receiving the highest aggregate approval.</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
            <span><strong>Pillar 2 — Key Gender Divergence:</strong> Notably, while dissatisfaction with retail shops was identical between genders, dining facilities revealed a pronounced disparity, as females were considerably more critical than males.</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
            <span><strong>Examiner Anchor:</strong> Highlighting both the overarching favorable trend and the sharp dining disparity between sexes (without citing raw numbers) guarantees Band 9 in Task Achievement (TA).</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
