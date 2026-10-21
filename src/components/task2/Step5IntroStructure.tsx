import React from "react";
import { BookOpen, CheckCircle2, Award, Clock } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";

export const Step5IntroStructureT2: React.FC = () => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
        Step 05 / 09 • Sample Introduction &amp; Thesis
      </span>
      <h2 className="stage-title">Sample Introduction &amp; Dual Cause-Effect Outline</h2>
      <p className="stage-subtitle">
        Mandatory 2-Sentence Introduction Format: <strong>Paraphrase the question in Sentence 1 + Directly outline both root causes and victim effects in Sentence 2</strong>.
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
          <h4 style={{ fontSize: "1.22rem", fontWeight: 750 }}>Sample Introduction (Paraphrase + Outline)</h4>
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
          <Clock size={16} /> ~48 words • 2 sentences • Rapid exam timing (~2-2.5 mins)
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
            <li><strong>Paraphrase:</strong> International surge in financial fraud and identity theft.</li>
            <li><strong>Causes Outline:</strong> Ubiquitous digital financial transactions and massive corporate database leaks.</li>
            <li><strong>Effects Outline:</strong> Catastrophic monetary liabilities, credit ruin, and enduring psychological trauma for victims.</li>
          </ul>
        </div>

        <StructureCard
          icon={<CheckCircle2 size={18} />}
          title="1. Crisp Question Paraphrase (Sentence 1)"
          text="“In contemporary society, fraudulent activities centered around identity theft are experiencing an alarming surge across numerous nations.” (Paraphrases 'financial crime involving identity theft is increasing' using advanced academic terminology)."
        />
        <StructureCard
          icon={<Award size={18} />}
          title="2. Direct Dual Outline Thesis (Sentence 2)"
          text="“This modern financial crime is primarily driven by the ubiquity of vulnerable online financial transactions and rampant corporate data breaches, and it inflicts catastrophic monetary losses alongside profound psychological trauma on the individuals affected.”"
        />
        <StructureCard
          icon={<CheckCircle2 size={18} />}
          title="3. Word Economy & Roadmapping"
          text="Keep the introduction concise (~45-50 words across 2 sentences). By directly answering both prompt questions (Causes & Effects) from the start, you immediately secure Band 9 Task Achievement before developing Body 1 and Body 2."
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
    <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#059669", marginBottom: "6px" }}>
      {icon}
      <h5 style={{ fontSize: "1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>{title}</h5>
    </div>
    <p style={{ fontSize: "0.96rem", color: "var(--slate-700)", lineHeight: 1.55, margin: 0 }}>{text}</p>
  </div>
);
