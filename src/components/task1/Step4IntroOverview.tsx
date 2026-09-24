import React from "react";
import { BookOpen, Sparkles } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

const QuoteCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div style={{ background: "var(--slate-50)", border: "1.5px solid var(--border-subtle)", borderRadius: "20px", padding: "24px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
      {icon}<h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--slate-900)" }}>{title}</h4>
    </div>
    <div style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", borderRadius: "14px", padding: "18px", fontSize: "1.05rem", color: "var(--slate-800)", lineHeight: 1.65, boxShadow: "var(--shadow-sm)" }}>
      “{text}”
    </div>
  </div>
);

export const Step4IntroOverview: React.FC = () => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge accent" style={{ marginBottom: "8px" }}>Step 04 / 08 • Sample Introduction & Overview</span>
      <h2 className="stage-title">Build the Introduction and Overview</h2>
      <p className="stage-subtitle">Use the two sample paragraphs from the workbook as the model for this process task.</p>
    </div>
    <div className="stage-grid-2col">
      <QuoteCard icon={<BookOpen size={20} color="var(--slate-800)" />} title="1. Sample Introduction" text={TASK1_DATA.sampleIntro} />
      <QuoteCard icon={<Sparkles size={20} color="var(--slate-800)" />} title="2. Sample Overview" text={TASK1_DATA.sampleOverview} />
    </div>
  </div>
);
