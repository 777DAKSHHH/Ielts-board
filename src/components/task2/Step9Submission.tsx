import React, { useState } from "react";
import { CheckCircle2, Copy, Check, BookOpen, Layers } from "lucide-react";

export const Step9SubmissionT2: React.FC = () => {
  const [viewMode, setViewMode] = useState<"essay" | "vocab">("essay");
  const [copied, setCopied] = useState(false);

  const fullModelEssay = `In many societies, children are consistently taught that hard work guarantees success in any endeavor. While this message fosters admirable resilience and ambition, it also risks severe self-blame and overlooks natural limitations.

On the positive side, imparting this message yields two primary advantages. First, it cultivates unyielding perseverance; when children believe that effort determines improvement, they view mistakes as constructive feedback rather than permanent defeat. For example, a student who performs poorly in mathematics is far more likely to practise regularly, seek assistance, and steadily elevate their performance instead of quitting out of embarrassment. Second, this mindset fosters ambition and independent problem-solving, encouraging youngsters to audition for challenging roles or experiment with alternative designs in science projects rather than waiting for adults to intervene. Through repeated practice, children develop a disciplined, transferable work ethic that enriches their adult endeavors.

Conversely, propagating this unconstrained narrative entails serious disadvantages. Foremost among these is the creation of unrealistic expectations, as children may assume that willpower alone guarantees success, overlooking financial boundaries, unequal opportunities, or natural aptitude. A talented student, for instance, may work exceptionally hard to gain admission into a prestigious university yet still find themselves unable to attend due to unaffordable tuition fees. Furthermore, when prolonged exertion fails to yield victory, children frequently experience acute guilt and diminished self-esteem, interpreting defeat as proof of personal inadequacy rather than recognizing external factors. This relentless pressure can also precipitate severe academic burnout or lead teenagers to stubbornly pursue unsuitable career paths simply because they fear quitting.

In conclusion, while reassuring children that diligence guarantees accomplishment instills commendable perseverance and ambition, it can equally foster unrealistic expectations and inflict debilitating self-reproach when uncontrollable obstacles arise. Educators and parents should therefore temper aspirational encouragement with pragmatic guidance, teaching young people to strive diligently while developing the self-compassion necessary to navigate real-world limitations.`;

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
                S1 Paraphrase (15 words) + S2 Explicit Thesis roadmapping resilience vs self-blame (18 words).
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
                • <em>6 Idea Bank Options:</em> Builds perseverance (math student) • Ambition (school play audition) • Personal responsibility • Less fear of mistakes (bicycle) • Independent problem-solving (science project) • Strong work ethic (young athlete).<br />
                • <em>Model Choice:</em> Perseverance + Ambition &amp; independent problem-solving.
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
                • <em>5 Idea Bank Options:</em> Unrealistic expectations (university fees) • Guilt &amp; low self-esteem (sports defeat) • Excessive pressure &amp; burnout (late-night study) • Confusing persistence with stubbornness (disliked career) • Unhealthy comparisons (peer tutors).<br />
                • <em>Model Choice:</em> Unrealistic expectations + Guilt &amp; burnout.
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
                S1 Sum up main reasons (perseverance &amp; ambition vs unrealistic expectations &amp; guilt) + S2 Pedagogical recommendation (balance effort with self-compassion).
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
                desc: "S1 Paraphrase (children told effort guarantees success) + S2 Explicit Thesis roadmapping resilience vs self-blame & natural limitations (33 words total)."
              },
              {
                step: "2. Body 1 (Advantages: 2 Reasons + Example)",
                desc: "Topic sentence + Reason 1 (Builds perseverance / seeing mistakes as feedback) + Relatable example (maths practice) + Reason 2 (Ambition & independent problem-solving: school play / science project)."
              },
              {
                step: "3. Body 2 (Disadvantages: 2 Reasons + Example)",
                desc: "Contrastive pivot + Reason 1 (Unrealistic expectations ignoring financial/structural realities: university tuition barrier) + Reason 2 (Guilt & low self-esteem after failure: sports defeat / burnout)."
              },
              {
                step: "4. Conclusion & Advice",
                desc: "S1 Recap dual impacts + S2 Actionable pedagogical recommendation: temper aspirational encouragement with pragmatic guidance and self-compassion."
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
                  INTRODUCTION (33 WORDS)
                </span>
                <p style={{ margin: "4px 0 0" }}>
                  In many societies, children are consistently taught that hard work guarantees success in any endeavor. While this message fosters admirable resilience and ambition, it also risks severe self-blame and overlooks natural limitations.
                </p>
              </div>

              <div>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, background: "#dcfce7", color: "#166534", padding: "1px 6px", borderRadius: "4px" }}>
                  BODY 1: ADVANTAGES [2 REASONS + SUPPORT + EXAMPLE]
                </span>
                <p style={{ margin: "4px 0 0" }}>
                  On the positive side, imparting this message yields two primary advantages. First, it cultivates unyielding perseverance; when children believe that effort determines improvement, they view mistakes as constructive feedback rather than permanent defeat. For example, a student who performs poorly in mathematics is far more likely to practise regularly, seek assistance, and steadily elevate their performance instead of quitting out of embarrassment. Second, this mindset fosters ambition and independent problem-solving, encouraging youngsters to audition for challenging roles or experiment with alternative designs in science projects rather than waiting for adults to intervene. Through repeated practice, children develop a disciplined, transferable work ethic that enriches their adult endeavors.
                </p>
              </div>

              <div>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, background: "#fee2e2", color: "#991b1b", padding: "1px 6px", borderRadius: "4px" }}>
                  BODY 2: DISADVANTAGES [2 REASONS + EXAMPLE]
                </span>
                <p style={{ margin: "4px 0 0" }}>
                  Conversely, propagating this unconstrained narrative entails serious disadvantages. Foremost among these is the creation of unrealistic expectations, as children may assume that willpower alone guarantees success, overlooking financial boundaries, unequal opportunities, or natural aptitude. A talented student, for instance, may work exceptionally hard to gain admission into a prestigious university yet still find themselves unable to attend due to unaffordable tuition fees. Furthermore, when prolonged exertion fails to yield victory, children frequently experience acute guilt and diminished self-esteem, interpreting defeat as proof of personal inadequacy rather than recognizing external factors. This relentless pressure can also precipitate severe academic burnout or lead teenagers to stubbornly pursue unsuitable career paths simply because they fear quitting.
                </p>
              </div>

              <div>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, background: "#f1f5f9", color: "#334155", padding: "1px 6px", borderRadius: "4px" }}>
                  CONCLUSION: SUM-UP + RECOMMENDATION
                </span>
                <p style={{ margin: "4px 0 0" }}>
                  In conclusion, while reassuring children that diligence guarantees accomplishment instills commendable perseverance and ambition, it can equally foster unrealistic expectations and inflict debilitating self-reproach when uncontrollable obstacles arise. Educators and parents should therefore temper aspirational encouragement with pragmatic guidance, teaching young people to strive diligently while developing the self-compassion necessary to navigate real-world limitations.
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
                  PRECISION BAND 9 VOCABULARY:
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {[
                    "growth mindset",
                    "intrinsic resilience",
                    "unyielding perseverance",
                    "independent problem-solving",
                    "personal responsibility",
                    "transferable work ethic",
                    "unrealistic expectations",
                    "debilitating self-blame",
                    "academic burnout",
                    "innate aptitude",
                    "structural inequities",
                    "pragmatic guidance",
                    "self-compassion",
                    "tenacity & grit"
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
                • <em>Intro opener:</em> “In many societies, children are consistently taught that hard work guarantees...”<br />
                • <em>Body 1 opener:</em> “On the positive side, imparting this message yields two primary advantages. First,... Second,...”<br />
                • <em>Body 2 opener:</em> “Conversely, propagating this unconstrained narrative entails two serious disadvantages. Foremost among these is...”<br />
                • <em>Conclusion opener:</em> “In conclusion, while reassuring children that diligence guarantees success...”<br />
                • <em>Recommendation:</em> “Educators and guardians should therefore temper aspirational encouragement with pragmatic realism...”
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
