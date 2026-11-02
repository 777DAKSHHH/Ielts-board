import React, { useState } from "react";
import { BookOpen, CheckCircle2, Award, Clock, Copy, Check } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";

export const Step5IntroStructureT2: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(TASK2_DATA.sampleIntro);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sentence1 = "In contemporary society, children are being exposed to digital devices and technology at an increasingly early age.";
  const sentence2 = "While early technological exposure fosters digital literacy, I firmly believe that this is predominantly a negative development due to the physical health hazards and impaired social development it causes.";

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 05 / 09 • Sample Introduction &amp; Opinion
        </span>
        <h2 className="stage-title">Sample Introduction: Paraphrase + Clear Opinion Statement</h2>
        <p className="stage-subtitle">
          Mandatory Introduction Format: <strong>Sentence 1: Paraphrase the question prompt + Sentence 2: Deliver an unambiguous personal opinion</strong>.
        </p>
      </div>

      <div className="stage-grid-2col">
        {/* Left Column: Sample Introduction with Clear Visual Highlighting */}
        <div
          style={{
            background: "var(--slate-50)",
            border: "1.5px solid var(--border-subtle)",
            borderRadius: "20px",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <BookOpen size={22} color="var(--apple-blue)" />
              <h4 style={{ fontSize: "1.2rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                Sample Introduction (2 Sentences • ~39 Words)
              </h4>
            </div>

            <button
              onClick={handleCopy}
              style={{
                border: "1px solid var(--border-subtle)",
                background: copied ? "#dcfce7" : "#ffffff",
                padding: "5px 12px",
                borderRadius: "8px",
                fontSize: "0.82rem",
                fontWeight: 700,
                color: copied ? "#166534" : "var(--slate-700)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px"
              }}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>

          {/* Explicitly Split 2-Sentence Display */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {/* Sentence 1: Paraphrase */}
            <div
              style={{
                background: "#ffffff",
                border: "1.5px solid #bfdbfe",
                borderRadius: "14px",
                padding: "16px 18px",
                boxShadow: "var(--shadow-sm)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                <span
                  style={{
                    fontSize: "0.74rem",
                    fontWeight: 800,
                    background: "#eff6ff",
                    color: "#1e40af",
                    padding: "2px 8px",
                    borderRadius: "5px",
                    textTransform: "uppercase"
                  }}
                >
                  Sentence 1 • Paraphrase
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--slate-500)", fontWeight: 600 }}>
                  (17 words)
                </span>
              </div>
              <p style={{ margin: 0, fontSize: "1.15rem", fontWeight: 650, color: "var(--slate-900)", lineHeight: 1.55 }}>
                “{sentence1}”
              </p>
            </div>

            {/* Sentence 2: Explicit Opinion Statement */}
            <div
              style={{
                background: "#ffffff",
                border: "1.5px solid #bbf7d0",
                borderRadius: "14px",
                padding: "16px 18px",
                boxShadow: "var(--shadow-sm)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                <span
                  style={{
                    fontSize: "0.74rem",
                    fontWeight: 800,
                    background: "#f0fdf4",
                    color: "#166534",
                    padding: "2px 8px",
                    borderRadius: "5px",
                    textTransform: "uppercase"
                  }}
                >
                  Sentence 2 • Clear Opinion Statement
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--slate-500)", fontWeight: 600 }}>
                  (22 words)
                </span>
              </div>
              <p style={{ margin: 0, fontSize: "1.15rem", fontWeight: 650, color: "var(--slate-900)", lineHeight: 1.55 }}>
                “{sentence2}”
              </p>
            </div>
          </div>

          {/* Unified Full Intro Text Box */}
          <div
            style={{
              background: "#ffffff",
              border: "1px dashed var(--border-default)",
              borderRadius: "12px",
              padding: "14px 16px",
              fontSize: "0.98rem",
              lineHeight: 1.6,
              color: "var(--slate-700)"
            }}
          >
            <strong style={{ color: "var(--slate-900)" }}>Full Combined Introduction:</strong>{" "}
            {TASK2_DATA.sampleIntro}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--slate-600)", fontSize: "0.9rem", fontWeight: 600 }}>
            <Clock size={16} /> Exactly 39 words • 2 sentences • Fast exam execution (~1.5 mins)
          </div>
        </div>

        {/* Right Column: Breakdown & One-Liner Planning Points */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div
            style={{
              background: "#eff6ff",
              border: "1.5px solid #bfdbfe",
              borderRadius: "16px",
              padding: "16px 18px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--apple-blue)", marginBottom: "6px" }}>
              <Award size={18} />
              <h5 style={{ fontSize: "1.02rem", fontWeight: 750, margin: 0 }}>One-Liner Intro Planning Points</h5>
            </div>
            <ul style={{ margin: "4px 0 0", paddingLeft: "18px", fontSize: "0.94rem", color: "var(--slate-800)", lineHeight: 1.6 }}>
              <li><strong>Paraphrase:</strong> Children are being exposed to digital devices and tech at an increasingly early age.</li>
              <li><strong>Concession:</strong> Acknowledges that early exposure builds basic digital literacy.</li>
              <li><strong>Opinion:</strong> Firmly states it is predominantly a negative development (health hazards + social delays).</li>
            </ul>
          </div>

          <StructureCard
            icon={<CheckCircle2 size={18} />}
            badge="Sentence 1 Analysis"
            title="Question Paraphrase"
            text="“In contemporary society, children are being exposed to digital devices and technology at an increasingly early age.” Paraphrases 'Nowadays' → 'In contemporary society', 'using technology at a younger age' → 'exposed to digital devices and technology at an increasingly early age'."
          />

          <StructureCard
            icon={<Award size={18} />}
            badge="Sentence 2 Analysis"
            title="Explicit Opinion Statement"
            text="“While early technological exposure fosters digital literacy, I firmly believe that this is predominantly a negative development due to the physical health hazards and impaired social development it causes.” Sets a decisive stance and roadmaps Body 1 (health) and Body 2 (social development)."
          />

          <StructureCard
            icon={<CheckCircle2 size={18} />}
            badge="Band 9 Strategy"
            title="Direct Answer (Zero Ambiguity)"
            text="Answering 'Is this a positive or a negative development?' in Sentence 2 satisfies the Task Achievement Band 9 criterion for 'presenting a clear position throughout the response'."
          />
        </div>
      </div>
    </div>
  );
};

const StructureCard: React.FC<{ icon: React.ReactNode; badge: string; title: string; text: string }> = ({
  icon,
  badge,
  title,
  text
}) => (
  <div
    style={{
      background: "#fff",
      border: "1.5px solid var(--border-subtle)",
      borderRadius: "14px",
      padding: "14px 18px",
      boxShadow: "var(--shadow-sm)"
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#059669", marginBottom: "4px" }}>
      {icon}
      <span style={{ fontSize: "0.74rem", fontWeight: 800, background: "#ecfdf5", color: "#065f46", padding: "1px 6px", borderRadius: "4px" }}>
        {badge}
      </span>
      <h5 style={{ fontSize: "0.96rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>{title}</h5>
    </div>
    <p style={{ fontSize: "0.88rem", color: "var(--slate-700)", lineHeight: 1.5, margin: 0 }}>{text}</p>
  </div>
);
