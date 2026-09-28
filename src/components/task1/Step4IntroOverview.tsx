import React from "react";
import { BookOpen, Sparkles } from "lucide-react";
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
      <span className="apple-badge accent" style={{ marginBottom: "8px" }}>Step 04 / 08 • Sample Introduction & Overview</span>
      <h2 className="stage-title">Build the Introduction and Overview</h2>
      <p className="stage-subtitle">Master the Band 9 approach for map tasks: paraphrase the timeframe and spatial setting, then synthesize the macro urban transformation.</p>
    </div>
    <div className="stage-grid-2col">
      <QuoteCard
        icon={<BookOpen size={20} color="var(--slate-800)" />}
        title="1. Sample Introduction"
        text={TASK1_DATA.sampleIntro}
        annotation="Paraphrases 'maps show changes made in Kimsville' into 'illustrate the principal infrastructural and architectural transformations that have taken place in the town of Kimsville between 2002 and the present day'."
      />
      <QuoteCard
        icon={<Sparkles size={20} color="var(--slate-800)" />}
        title="2. Sample Overview"
        text={TASK1_DATA.sampleOverview}
        annotation="Captures the macro shift: 1) Kimsville evolved from an industrial/semi-rural town into a modern commercial/residential hub, 2) Key additions (apartments, software company, rail station, stadium), and 3) Explicitly cites what remained unchanged (city centre, shopping centre, two woodland zones)."
      />
    </div>
  </div>
);
