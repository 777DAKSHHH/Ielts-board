import React from "react";
import { BookOpen, Sparkles, CheckCircle2, Split, Compass, Table } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

const QuoteCard: React.FC<{ icon: React.ReactNode; title: string; text: string; badge?: string }> = ({
  icon,
  title,
  text,
  badge
}) => (
  <div style={{ background: "var(--slate-50)", border: "1.5px solid var(--border-subtle)", borderRadius: "20px", padding: "24px", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {icon}
        <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--slate-900)" }}>{title}</h4>
      </div>
      {badge && (
        <span className="apple-badge neutral" style={{ background: "#dcfce7", color: "#166534", fontWeight: 800 }}>
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
      <span className="apple-badge accent" style={{ marginBottom: "8px" }}>Step 04 / 08 • Sample Introduction &amp; Macro Overview</span>
      <h2 className="stage-title">Build the Introduction and Macro Overview</h2>
      <p className="stage-subtitle">
        Paraphrase the dual chart parameters (8 occupations, weekly hours worked, stress-related illness), and formulate a Band 9 macro overview strictly omitting all exact numerical figures.
      </p>
    </div>

    <div className="stage-grid-2col">
      <QuoteCard
        icon={<BookOpen size={20} color="var(--slate-800)" />}
        title="1. Sample Introduction (Dual Chart Scope Paraphrase)"
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
            4-Element Introduction Architecture for Dual Charts
          </h4>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.88rem" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>1</span>
            <span><strong>Graphic Types &amp; Reporting Verb:</strong> <em>“The bar chart and pie chart illustrate...”</em> (explicitly names both visual components).</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>2</span>
            <span><strong>First Metric (Bar Chart):</strong> <em>“...the average weekly working hours...”</em> (captures weekly labor volume).</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>3</span>
            <span><strong>Second Metric (Pie Chart):</strong> <em>“...and the proportion of individuals suffering from stress-related illnesses...”</em> (captures medical illness distribution).</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center", background: "#dbeafe", color: "#1e40af", fontWeight: 800 }}>4</span>
            <span><strong>Professional Scope:</strong> <em>“...across eight professional occupations.”</em> (defines the comparative groups).</span>
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
            <span><strong>Pillar 1 — Working Hours Spectrum:</strong> Business men committed the longest hours per week by a considerable margin, whereas lecturers logged the fewest hours.</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
            <span><strong>Pillar 2 — The Non-Correlation Paradox:</strong> Working time did not correlate directly with stress-related conditions; movie producers and lecturers constituted the two largest segments of stress sufferers, while programmers recorded the lowest prevalence.</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
            <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
            <span><strong>Strict Rule — Zero Numbers:</strong> Reserving all exact statistics (70h, 25%, 18%, etc.) for the body paragraphs ensures the overview functions as a true macro qualitative synthesis.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
