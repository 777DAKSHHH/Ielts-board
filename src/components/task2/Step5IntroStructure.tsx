import React from "react";
import { BookOpen, CheckCircle2, Award, Clock } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";

export const Step5IntroStructureT2: React.FC = () => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
        Step 05 / 09 • Sample Introduction &amp; Thesis
      </span>
      <h2 className="stage-title">Sample Introduction &amp; Decisive Opinion Thesis</h2>
      <p className="stage-subtitle">
        Ideal IELTS Positive/Negative Development Introduction: Paraphrase the trend of postponing marriage and childbearing in Sentence 1 + deliver a decisive opinion thesis arguing that the development is overwhelmingly positive in Sentence 2.
      </p>
    </div>
    <div className="stage-grid-2col">
      <div
        style={{
          background: "var(--slate-50)",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "20px",
          padding: "24px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
          <BookOpen size={22} color="var(--apple-blue)" />
          <h4 style={{ fontSize: "1.22rem", fontWeight: 750 }}>Sample Introduction (Concise &amp; Focused)</h4>
        </div>
        <div
          style={{
            background: "#fff",
            border: "1.5px solid var(--border-default)",
            borderRadius: "16px",
            padding: "22px 24px",
            fontSize: "1.24rem",
            fontWeight: 650,
            lineHeight: 1.75,
            boxShadow: "var(--shadow-sm)",
            color: "var(--slate-900)"
          }}
        >
          {TASK2_DATA.sampleIntro}
        </div>
        <div style={{ marginTop: "14px", display: "flex", alignItems: "center", gap: "8px", color: "var(--slate-600)", fontSize: "0.92rem", fontWeight: 600 }}>
          <Clock size={16} /> 49 words • 2 sentences • Rapid exam timing (~2-2.5 mins)
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <div
          style={{
            background: "#eff6ff",
            border: "1.5px solid #bfdbfe",
            borderRadius: "16px",
            padding: "18px 20px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--apple-blue)", marginBottom: "8px" }}>
            <Award size={20} />
            <h5 style={{ fontSize: "1.05rem", fontWeight: 750, margin: 0 }}>One-Liner Planning Points</h5>
          </div>
          <ul style={{ margin: "6px 0 0", paddingLeft: "18px", fontSize: "1.02rem", color: "var(--slate-800)", lineHeight: 1.6 }}>
            <li><strong>Trend:</strong> Marriage and parenthood occur later in life.</li>
            <li><strong>Opinion:</strong> Largely positive development.</li>
            <li><strong>Main reasons:</strong> Financial independence + emotional maturity.</li>
          </ul>
        </div>

        <StructureCard
          icon={<CheckCircle2 size={18} />}
          title="1. Crisp Prompt Paraphrase (Sentence 1)"
          text="“In many societies, individuals are increasingly choosing to establish their careers and achieve personal stability before getting married and starting a family.” (States the modern trend naturally without template cliché)."
        />
        <StructureCard
          icon={<Award size={18} />}
          title="2. Decisive Opinion Thesis (Sentence 2)"
          text="“I consider this a largely positive development, as greater financial security and emotional maturity can help couples build more stable family environments, despite the potential challenges associated with delayed parenthood.”"
        />
        <StructureCard
          icon={<CheckCircle2 size={18} />}
          title="3. Word Economy & Roadmapping"
          text="Keep the introduction concise (~45–55 words across 2 sentences). A punchy opening establishes a crystal-clear position from the outset, setting up your body paragraphs."
        />
      </div>
    </div>
  </div>
);

const StructureCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({
  icon,
  title,
  text
}) => (
  <div
    style={{
      background: "#fff",
      border: "1.5px solid var(--border-subtle)",
      borderRadius: "16px",
      padding: "18px 20px",
      boxShadow: "var(--shadow-sm)"
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        color: "var(--apple-blue)",
        marginBottom: "6px"
      }}
    >
      {icon}
      <h5 style={{ fontSize: "1.04rem", fontWeight: 750 }}>{title}</h5>
    </div>
    <p style={{ fontSize: "1.02rem", color: "var(--slate-800)", lineHeight: 1.55, margin: 0 }}>{text}</p>
  </div>
);
