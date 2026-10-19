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
        Mandatory 2-Sentence Introduction Format: <strong>Paraphrase the question in Sentence 1 + State your clear opinion thesis in Sentence 2</strong>.
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
          <h4 style={{ fontSize: "1.22rem", fontWeight: 750 }}>Sample Introduction (Paraphrase + Opinion)</h4>
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
          <Clock size={16} /> 51 words • 2 sentences • Rapid exam timing (~2-2.5 mins)
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
            <li><strong>Paraphrase:</strong> Assertion that artificial intelligence will supersede classroom educators.</li>
            <li><strong>Opinion:</strong> Largely disagree with full replacement.</li>
            <li><strong>Main reasons:</strong> AI serves as an augmentative aid, while human teachers provide irreplaceable emotional empathy, ethical mentorship, and critical discourse.</li>
          </ul>
        </div>

        <StructureCard
          icon={<CheckCircle2 size={18} />}
          title="1. Crisp Question Paraphrase (Sentence 1)"
          text="“With rapid advances in educational technology, it is often argued that artificial intelligence will soon supersede human teachers in the classroom.” (Replaces 'replace' with 'supersede' and frames the modern educational context without robotic clichés)."
        />
        <StructureCard
          icon={<Award size={18} />}
          title="2. Decisive Opinion Thesis (Sentence 2)"
          text="“While I acknowledge that intelligent algorithms can enhance personalized instruction and automate routine administrative tasks, I largely disagree that they will ever fully replace human educators, whose emotional empathy, ethical mentorship, and dynamic classroom leadership remain fundamentally irreplaceable.”"
        />
        <StructureCard
          icon={<CheckCircle2 size={18} />}
          title="3. Word Economy & Roadmapping"
          text="Keep the introduction concise (~50 words across 2 sentences). A punchy opening establishes a crystal-clear position from the outset, paving the way for Body 1 & 2 (Opinion side) and Body 3 (Non-opinion side)."
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
