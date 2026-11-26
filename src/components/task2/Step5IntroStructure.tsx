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

  const sentence1 =
    "The widespread use of single-use products has become a prominent feature of modern consumer society.";
  const sentence2 =
    "However, this trend contributes to environmental pollution, excessive resource consumption and growing waste-management challenges. These problems can be addressed through stricter government regulations, greater corporate responsibility and a shift towards reusable alternatives.";

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 05 / 09 • Sample Introduction &amp; Outline
        </span>
        <h2 className="stage-title">Sample Introduction: Paraphrase + Direct Problem &amp; Solution Outline</h2>
        <p className="stage-subtitle">
          Mandatory Introduction Format: <strong>Sentence 1: Paraphrase the question prompt + Sentence 2: Deliver your clear thesis outlining both primary problems and targeted solutions</strong>.
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
                Sample Introduction (3 Sentences • 52 Words)
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

          {/* Explicitly Split 2-Element Display */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {/* Element 1: Paraphrase */}
            <div
              style={{
                background: "#ffffff",
                border: "1.5px solid #bfdbfe",
                borderRadius: "14px",
                padding: "16px 18px",
                display: "flex",
                flexDirection: "column",
                gap: "6px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span className="apple-badge neutral" style={{ background: "#dbeafe", color: "#1e40af", fontSize: "0.74rem", fontWeight: 800 }}>
                  Sentence 1 • Paraphrase Prompt
                </span>
                <span style={{ fontSize: "0.74rem", color: "var(--slate-500)", fontWeight: 700 }}>~15 Words</span>
              </div>
              <p style={{ margin: 0, fontSize: "1.05rem", color: "var(--slate-900)", lineHeight: 1.6, fontWeight: 650 }}>
                “{sentence1}”
              </p>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-500)" }}>
                Restates “single-use products are very common” as “widespread use of single-use products has become a prominent feature of modern consumer society”.
              </span>
            </div>

            {/* Element 2: Direct Thesis & Outline */}
            <div
              style={{
                background: "#ffffff",
                border: "1.5px solid #bbf7d0",
                borderRadius: "14px",
                padding: "16px 18px",
                display: "flex",
                flexDirection: "column",
                gap: "6px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span className="apple-badge neutral" style={{ background: "#dcfce7", color: "#166534", fontSize: "0.74rem", fontWeight: 800 }}>
                  Sentences 2 &amp; 3 • Direct Outline (Problems &amp; Solutions)
                </span>
                <span style={{ fontSize: "0.74rem", color: "var(--slate-500)", fontWeight: 700 }}>~37 Words</span>
              </div>
              <p style={{ margin: 0, fontSize: "1.05rem", color: "var(--slate-900)", lineHeight: 1.6, fontWeight: 650 }}>
                “{sentence2}”
              </p>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-500)" }}>
                Directly flags the problems (pollution, resource consumption, waste management) and maps the solutions (regulations, corporate responsibility, reusables).
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: 4-Point Introduction Checklist */}
        <div
          style={{
            background: "#ffffff",
            border: "1.5px solid var(--border-default)",
            borderRadius: "20px",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            boxShadow: "var(--shadow-sm)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Award size={22} color="var(--apple-blue)" />
            <h4 style={{ fontSize: "1.15rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
              Band 9 Introduction Architecture Rules
            </h4>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              {
                title: "1. Paraphrase with Sophisticated Synonyms",
                desc: "Transform 'common' into 'a prominent feature of modern consumer society' and 'single-use products' into 'widespread use of single-use products'."
              },
              {
                title: "2. Clear 2-Part Thesis Statement",
                desc: "Explicitly mention both the core problem areas (environmental pollution & resource consumption) and the core solution angles (regulations & reusable alternatives)."
              },
              {
                title: "3. Multi-Stakeholder Approach",
                desc: "Name the key responsible parties: governments (stricter regulations), businesses (corporate responsibility), and consumers (shift to reusables)."
              },
              {
                title: "4. Rapid 3-Minute Execution",
                desc: "Keep the introduction focused (around 50 words) so you preserve 32+ minutes for rigorous body paragraph development and evaluation."
              }
            ].map((rule) => (
              <div
                key={rule.title}
                style={{
                  background: "var(--slate-50)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "12px",
                  padding: "12px 14px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "3px" }}>
                  <CheckCircle2 size={16} color="#16a34a" />
                  <strong style={{ fontSize: "0.90rem", color: "var(--slate-900)" }}>{rule.title}</strong>
                </div>
                <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--slate-600)", lineHeight: 1.45, paddingLeft: "24px" }}>
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
