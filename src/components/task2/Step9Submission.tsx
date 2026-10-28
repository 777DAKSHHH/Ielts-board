import React, { useState } from "react";
import { CheckCircle2, Copy, Check, BookOpen, Layers } from "lucide-react";

export const Step9SubmissionT2: React.FC = () => {
  const [viewMode, setViewMode] = useState<"essay" | "vocab">("essay");
  const [copied, setCopied] = useState(false);

  const fullModelEssay = `In various parts of the world, children are consistently instilled with the belief that boundless success is achievable solely through diligence and relentless effort. While this message undeniably nurtures resilience, a growth mindset, and high personal aspirations, it simultaneously introduces notable perils, particularly the risk of severe psychological distress and an unrealistic disregard for innate limitations.

On the positive side, imparting this empowering philosophy yields two substantial benefits. Primarily, it cultivates an intrinsic growth mindset and a strong work ethic. When young minds are taught that achievement is determined by dedication rather than fixed hereditary talent, they interpret setbacks as constructive learning opportunities rather than insurmountable barriers, which bolsters emotional grit. Furthermore, this outlook serves as an engine for social mobility by eliminating self-imposed psychological ceilings, particularly for children from impoverished or marginalized backgrounds who might otherwise feel confined by their circumstances. A compelling illustration of this is evident in educational psychology research by Dr. Carol Dweck; students praised specifically for effort rather than innate intelligence demonstrated markedly higher perseverance and achieved superior long-term academic results across diverse socio-economic groups.

Conversely, propagating this unconstrained narrative produces two profound drawbacks. The foremost hazard is the onset of acute psychological distress and devastating self-blame. If children are led to believe that success is solely a product of willpower, they inevitably conclude that any failure is a direct personal deficiency, resulting in chronic anxiety, perfectionism, and early burnout. In addition, this simplistic doctrine fosters a naive blindness toward tangible genetic limitations and structural societal barriers, encouraging youngsters to pursue unviable ambitions where natural physical or intellectual prerequisites cannot be bridged by effort alone. For instance, in hyper-competitive educational environments such as South Korea, the relentless expectation that sheer exertion guarantees admission to elite academies has precipitated alarming rates of adolescent depression, as dedicated students shoulder overwhelming guilt when biological aptitudes or systemic bottlenecks prevent them from reaching top percentiles.

In conclusion, while reassuring children that effort unlocks all doors effectively instills tenacity and fuels upward mobility, it can equally inflict crippling self-reproach and blind individuals to inevitable biological and socioeconomic constraints. It is therefore recommended that educators and guardians balance aspirational encouragement with pragmatic guidance, teaching the youth that while giving their utmost effort is commendable, recognizing personal boundaries and developing self-compassion when facing unalterable realities are equally vital for lifelong well-being.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullModelEssay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="stage-card-wrapper">
      {/* Stage Header */}
      <div style={{ flexShrink: 0, marginBottom: "16px" }}>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 09 / 09 • Final Essay Structure &amp; Model
        </span>
        <h2 className="stage-title">Write Your Complete Advantages &amp; Disadvantages Essay</h2>
        <p className="stage-subtitle" style={{ marginBottom: 0 }}>
          Review your 4-paragraph architecture and mandatory formatting rules before writing the complete Band 9 response.
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "18px",
          flex: 1,
          minHeight: 0,
          alignItems: "stretch"
        }}
      >
        {/* Card 01: 4-Paragraph Format */}
        <div
          style={{
            background: "#ffffff",
            border: "1.5px solid var(--border-subtle)",
            borderRadius: "18px",
            padding: "20px 22px",
            boxShadow: "var(--shadow-sm)",
            display: "flex",
            flexDirection: "column",
            gap: "12px"
          }}
        >
          <div>
            <span style={{ fontSize: "0.85rem", fontWeight: 750, color: "var(--apple-blue)" }}>
              4-PARAGRAPH FORMAT
            </span>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--slate-900)", margin: "4px 0 0" }}>
              Essay Architecture
            </h3>
            <p style={{ margin: "2px 0 0", fontSize: "0.86rem", color: "var(--slate-500)" }}>
              [ Intro + Body 1 + Body 2 + Conclusion ]
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1, overflowY: "auto" }}>
            {/* Intro Box */}
            <div
              style={{
                background: "var(--slate-50)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "10px",
                padding: "9px 12px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontSize: "0.74rem", fontWeight: 800, background: "#f3e8ff", color: "#7e22ce", padding: "2px 6px", borderRadius: "4px" }}>
                  INTRO
                </span>
                <strong style={{ fontSize: "0.9rem", color: "var(--slate-900)" }}>Paraphrase + Thesis</strong>
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--slate-700)", marginTop: "4px", lineHeight: 1.4 }}>
                Paraphrase the prompt + balanced thesis outlining growth mindset vs psychological risks.
              </div>
            </div>

            {/* Body 1 Box */}
            <div
              style={{
                background: "var(--slate-50)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "10px",
                padding: "9px 12px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontSize: "0.74rem", fontWeight: 800, background: "#dcfce7", color: "#166534", padding: "2px 6px", borderRadius: "4px" }}>
                  BODY 1
                </span>
                <strong style={{ fontSize: "0.9rem", color: "var(--slate-900)" }}>Advantages [2 Reasons + Supporting + Example]</strong>
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--slate-700)", marginTop: "4px", lineHeight: 1.4 }}>
                1. Growth Mindset &amp; emotional grit; 2. Social mobility breaking generational ceilings. Example: Dr. Carol Dweck Stanford study.
              </div>
            </div>

            {/* Body 2 Box */}
            <div
              style={{
                background: "var(--slate-50)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "10px",
                padding: "9px 12px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontSize: "0.74rem", fontWeight: 800, background: "#fee2e2", color: "#991b1b", padding: "2px 6px", borderRadius: "4px" }}>
                  BODY 2
                </span>
                <strong style={{ fontSize: "0.9rem", color: "var(--slate-900)" }}>Disadvantages [2 Reasons + Example]</strong>
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--slate-700)", marginTop: "4px", lineHeight: 1.4 }}>
                1. Severe self-blame, perfectionism &amp; burnout; 2. Biological &amp; structural ceilings. Example: East Asian high-stakes exams.
              </div>
            </div>

            {/* Conclusion Box */}
            <div
              style={{
                background: "var(--slate-50)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "10px",
                padding: "9px 12px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontSize: "0.74rem", fontWeight: 800, background: "#f1f5f9", color: "#334155", padding: "2px 6px", borderRadius: "4px" }}>
                  CONCLUSION
                </span>
                <strong style={{ fontSize: "0.9rem", color: "var(--slate-900)" }}>Sum-Up + Suggestion / Recommendation</strong>
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--slate-700)", marginTop: "4px", lineHeight: 1.4 }}>
                Recap dual impacts concisely + recommend balancing aspirational goals with pragmatic guidance &amp; self-compassion.
              </div>
            </div>
          </div>
        </div>

        {/* Card 02: Paragraph Development Logic */}
        <div
          style={{
            background: "#ffffff",
            border: "1.5px solid var(--border-subtle)",
            borderRadius: "18px",
            padding: "20px 22px",
            boxShadow: "var(--shadow-sm)",
            display: "flex",
            flexDirection: "column",
            gap: "12px"
          }}
        >
          <div>
            <span style={{ fontSize: "0.82rem", fontWeight: 750, color: "#059669" }}>
              PARAGRAPH DEVELOPMENT
            </span>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--slate-900)", margin: "4px 0 0" }}>
              Paragraph Logic &amp; Balance
            </h3>
            <p style={{ margin: "2px 0 0", fontSize: "0.86rem", color: "var(--slate-500)" }}>
              [ Topic Sentence + Explanation + Concrete Evidence ]
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "9px", flex: 1, overflowY: "auto" }}>
            {[
              {
                step: "1. Introduction Formula",
                desc: "Paraphrase the prompt objectively, then present a thesis acknowledging both resilience benefits and psychological hazards."
              },
              {
                step: "2. Body 1 (Advantages)",
                desc: "Open with a clear topic sentence. Detail Reason 1 (growth mindset & grit) + Reason 2 (social mobility) + Dr. Carol Dweck study."
              },
              {
                step: "3. Body 2 (Disadvantages)",
                desc: "Pivot sharply to drawbacks. Unpack Reason 1 (crippling self-blame & burnout) + Reason 2 (inborn/systemic limits) + exam pressure example."
              },
              {
                step: "4. Conclusion & Advice",
                desc: "Sum up all key points in 2 sentences, followed by an actionable recommendation for educators: pragmatic guidance with self-compassion."
              }
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  background: "var(--slate-50)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "10px",
                  padding: "9px 12px"
                }}
              >
                <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div style={{ fontSize: "0.84rem", lineHeight: 1.45 }}>
                  <strong style={{ color: "var(--slate-900)" }}>{item.step}:</strong>{" "}
                  <span style={{ color: "var(--slate-700)" }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 03: Complete Model Essay & Lexical Resource */}
        <div
          style={{
            background: "#ffffff",
            border: "1.5px solid var(--border-subtle)",
            borderRadius: "18px",
            padding: "20px 22px",
            boxShadow: "var(--shadow-sm)",
            display: "flex",
            flexDirection: "column",
            gap: "12px"
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <span style={{ fontSize: "0.82rem", fontWeight: 750, color: "#9333ea" }}>
                BAND 9 MODEL &amp; VOCABULARY
              </span>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--slate-900)", margin: "4px 0 0" }}>
                {viewMode === "essay" ? "Complete Model Essay" : "Precision Academic Lexis"}
              </h3>
            </div>

            <div style={{ display: "flex", gap: "6px" }}>
              <button
                onClick={() => setViewMode(viewMode === "essay" ? "vocab" : "essay")}
                style={{
                  padding: "4px 10px",
                  borderRadius: "8px",
                  border: "1px solid var(--border-subtle)",
                  background: "var(--slate-100)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "var(--slate-700)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                }}
              >
                {viewMode === "essay" ? <Layers size={13} /> : <BookOpen size={13} />}
                <span>{viewMode === "essay" ? "View Lexis" : "View Essay"}</span>
              </button>

              {viewMode === "essay" && (
                <button
                  onClick={handleCopy}
                  style={{
                    padding: "4px 10px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-subtle)",
                    background: copied ? "#dcfce7" : "var(--slate-100)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: copied ? "#166534" : "var(--slate-700)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px"
                  }}
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              )}
            </div>
          </div>

          {viewMode === "essay" ? (
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                background: "var(--slate-50)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "10px",
                padding: "12px 14px",
                fontSize: "0.82rem",
                color: "var(--slate-800)",
                lineHeight: 1.55,
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              }}
            >
              <div>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, background: "#f3e8ff", color: "#7e22ce", padding: "1px 6px", borderRadius: "4px" }}>
                  INTRODUCTION
                </span>
                <p style={{ margin: "4px 0 0" }}>
                  In various parts of the world, children are consistently instilled with the belief that boundless success is achievable solely through diligence and relentless effort. While this message undeniably nurtures resilience, a growth mindset, and high personal aspirations, it simultaneously introduces notable perils, particularly the risk of severe psychological distress and an unrealistic disregard for innate limitations.
                </p>
              </div>

              <div>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, background: "#dcfce7", color: "#166534", padding: "1px 6px", borderRadius: "4px" }}>
                  BODY 1: ADVANTAGES [2 REASONS + SUPPORT + EXAMPLE]
                </span>
                <p style={{ margin: "4px 0 0" }}>
                  On the positive side, imparting this empowering philosophy yields two substantial benefits. Primarily, it cultivates an intrinsic growth mindset and a strong work ethic. When young minds are taught that achievement is determined by dedication rather than fixed hereditary talent, they interpret setbacks as constructive learning opportunities rather than insurmountable barriers, which bolsters emotional grit. Furthermore, this outlook serves as an engine for social mobility by eliminating self-imposed psychological ceilings, particularly for children from impoverished or marginalized backgrounds who might otherwise feel confined by their circumstances. A compelling illustration of this is evident in educational psychology research by Dr. Carol Dweck; students praised specifically for effort rather than innate intelligence demonstrated markedly higher perseverance and achieved superior long-term academic results across diverse socio-economic groups.
                </p>
              </div>

              <div>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, background: "#fee2e2", color: "#991b1b", padding: "1px 6px", borderRadius: "4px" }}>
                  BODY 2: DISADVANTAGES [2 REASONS + EXAMPLE]
                </span>
                <p style={{ margin: "4px 0 0" }}>
                  Conversely, propagating this unconstrained narrative produces two profound drawbacks. The foremost hazard is the onset of acute psychological distress and devastating self-blame. If children are led to believe that success is solely a product of willpower, they inevitably conclude that any failure is a direct personal deficiency, resulting in chronic anxiety, perfectionism, and early burnout. In addition, this simplistic doctrine fosters a naive blindness toward tangible genetic limitations and structural societal barriers, encouraging youngsters to pursue unviable ambitions where natural physical or intellectual prerequisites cannot be bridged by effort alone. For instance, in hyper-competitive educational environments such as South Korea, the relentless expectation that sheer exertion guarantees admission to elite academies has precipitated alarming rates of adolescent depression, as dedicated students shoulder overwhelming guilt when biological aptitudes or systemic bottlenecks prevent them from reaching top percentiles.
                </p>
              </div>

              <div>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, background: "#f1f5f9", color: "#334155", padding: "1px 6px", borderRadius: "4px" }}>
                  CONCLUSION: SUM-UP + RECOMMENDATION
                </span>
                <p style={{ margin: "4px 0 0" }}>
                  In conclusion, while reassuring children that effort unlocks all doors effectively instills tenacity and fuels upward mobility, it can equally inflict crippling self-reproach and blind individuals to inevitable biological and socioeconomic constraints. It is therefore recommended that educators and guardians balance aspirational encouragement with pragmatic guidance, teaching the youth that while giving their utmost effort is commendable, recognizing personal boundaries and developing self-compassion when facing unalterable realities are equally vital for lifelong well-being.
                </p>
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1, overflowY: "auto" }}>
              <div
                style={{
                  background: "var(--slate-50)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "10px",
                  padding: "10px 12px"
                }}
              >
                <div style={{ fontSize: "0.78rem", fontWeight: 750, color: "var(--slate-500)", marginBottom: "6px" }}>
                  PRECISION VOCABULARY:
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {[
                    "growth mindset",
                    "intrinsic resilience",
                    "social mobility",
                    "self-imposed ceilings",
                    "debilitating self-blame",
                    "perfectionism & burnout",
                    "innate aptitude",
                    "structural inequities",
                    "pragmatic realism",
                    "self-compassion"
                  ].map((w) => (
                    <span
                      key={w}
                      style={{
                        background: "#fff",
                        border: "1px solid var(--border-subtle)",
                        padding: "3px 8px",
                        borderRadius: "6px",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: "var(--slate-800)"
                      }}
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: "var(--slate-50)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "10px",
                  padding: "10px 12px",
                  fontSize: "0.82rem",
                  color: "var(--slate-700)",
                  lineHeight: 1.45
                }}
              >
                <strong style={{ color: "var(--slate-900)" }}>Discourse Linkers:</strong>
                <br />
                • <em>Intro opener:</em> “In various parts of the world, children are consistently instilled with the belief that...”<br />
                • <em>Body 1 opener:</em> “On the positive side, imparting this empowering philosophy yields two substantial benefits...”<br />
                • <em>Body 2 opener:</em> “Conversely, propagating this unconstrained narrative produces two profound drawbacks...”<br />
                • <em>Conclusion opener:</em> “In conclusion, while reassuring children that effort unlocks all doors...”<br />
                • <em>Recommendation:</em> “It is therefore recommended that educators and guardians balance aspirational encouragement with pragmatic guidance...”
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
