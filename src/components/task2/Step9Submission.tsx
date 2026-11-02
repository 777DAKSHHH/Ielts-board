import React, { useState } from "react";
import { CheckCircle2, Copy, Check, BookOpen, Layers } from "lucide-react";

export const Step9SubmissionT2: React.FC = () => {
  const [viewMode, setViewMode] = useState<"essay" | "vocab">("essay");
  const [copied, setCopied] = useState(false);

  const fullModelEssay = `In contemporary society, the pervasive presence of digital technology has made early exposure among young children practically inevitable. While interactive software can foster foundational digital fluency, I firmly contend that this trend is predominantly a negative development due to its detrimental health consequences and discernible social delays.

First and foremost, premature technology adoption promotes an intensely sedentary lifestyle, leading to severe physical health complications. When young children spend prolonged hours engrossed in tablets, energetic outdoor play—which is biologically indispensable for cardiovascular and muscular growth—is inevitably displaced. Furthermore, excessive exposure to blue light emitted by screens suppresses nocturnal melatonin production, leading to chronic sleep deficits. For example, pediatric health research demonstrates that toddlers who regularly consume more than two hours of daily screen time exhibit double the rate of childhood obesity and experience frequent sleep disturbances compared to less screen-reliant peers.

Additionally, early dependency on technology severely undermines the cultivation of interpersonal communication skills and emotional empathy. Developing social competence requires reciprocal, face-to-face interaction where children learn to interpret vocal inflections, decipher subtle facial expressions, and build resilient emotional problem-solving habits. In contrast, digital interfaces offer one-way, algorithmically curated stimulation that provides transient amusement rather than deep cognitive focus. A clear illustration of this is observed in early primary classrooms, where kindergarten teachers increasingly report that screen-accustomed toddlers frequently suffer from discernible language delays and struggle to cooperate harmoniously with their peers.

In conclusion, although educational applications can provide transient academic benefits, I remain convinced that early technology immersion is an overwhelmingly negative development. Unchecked screen viewing makes sedentary habits inevitable and inflicts discernible harm on restorative sleep and face-to-face social competence during formative childhood years.`;

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
        <h2 className="stage-title">Write Your Complete Opinion Essay (Positive vs. Negative Development)</h2>
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
                <strong style={{ fontSize: "0.9rem", color: "var(--slate-900)" }}>Paraphrase + Opinion</strong>
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--slate-700)", marginTop: "4px", lineHeight: 1.4 }}>
                S1 Paraphrase (pervasive technology makes early exposure inevitable) + S2 Decisive personal opinion (predominantly negative development).
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
                <span style={{ fontSize: "0.74rem", fontWeight: 800, background: "#fee2e2", color: "#991b1b", padding: "2px 6px", borderRadius: "4px" }}>
                  BODY 1
                </span>
                <strong style={{ fontSize: "0.9rem", color: "var(--slate-900)" }}>Opinion Side: Reason 1 + Reasoning + Example</strong>
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--slate-700)", marginTop: "4px", lineHeight: 1.4 }}>
                • <em>Main Reason (One-Liner):</em> Promotes sedentary habits, leading to obesity, eye strain, and sleep disruption.<br />
                • <em>Supporting Reasoning:</em> Displaces outdoor exercise vital for skeletal growth; blue light suppresses melatonin.<br />
                • <em>Concrete Example:</em> Preschoolers using tablets &gt;2 hrs/day show doubled rates of pediatric obesity.
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
                <strong style={{ fontSize: "0.9rem", color: "var(--slate-900)" }}>Opinion Side: Reason 2 + Reasoning + Example</strong>
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--slate-700)", marginTop: "4px", lineHeight: 1.4 }}>
                • <em>Main Reason (One-Liner):</em> Impairs face-to-face interpersonal communication and emotional empathy.<br />
                • <em>Supporting Reasoning:</em> One-way digital stimuli cannot teach facial expressions, vocal cues, or sharing.<br />
                • <em>Concrete Example:</em> Kindergarten teachers report screen-heavy toddlers suffer language delays and social friction.
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
                <strong style={{ fontSize: "0.9rem", color: "var(--slate-900)" }}>Sum-Up + Restate Opinion</strong>
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--slate-700)", marginTop: "4px", lineHeight: 1.4 }}>
                S1 Sum-up the two main reasons (sedentary health risks + social communication deficits) + S2 Decisive restatement confirming it as an overwhelmingly negative development.
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
                desc: "S1 Paraphrase (pervasive technology makes early exposure inevitable) + S2 Clear Opinion (predominantly a negative development due to physical health hazards and social deficits)."
              },
              {
                step: "2. Body 1 (Opinion Side: Reason 1 + Reasoning + Example)",
                desc: "Topic sentence + Reason 1 (Sedentary lifestyle and obesity) + Supporting explanation (outdoor exercise displacement and blue light melatonin suppression) + Medical example (pediatric studies on doubled obesity rates)."
              },
              {
                step: "3. Body 2 (Opinion Side: Reason 2 + Reasoning + Example)",
                desc: "Second pillar topic sentence + Reason 2 (Interpersonal communication and social delay) + Supporting explanation (screens deliver one-way stimulation devoid of human empathy) + Classroom evidence (speech delays and peer conflict in kindergarten)."
              },
              {
                step: "4. Conclusion Formula",
                desc: "S1 Sum-up main reasons (sedentary obesity and communication setbacks) + S2 Restatement of personal opinion confirming the negative assessment."
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
                  INTRODUCTION (PARAPHRASE + OPINION)
                </span>
                <p style={{ margin: "4px 0 0" }}>
                  In contemporary society, the pervasive presence of digital technology has made early exposure among young children practically inevitable. While interactive software can foster foundational digital fluency, I firmly contend that this trend is predominantly a negative development due to its detrimental health consequences and discernible social delays.
                </p>
              </div>

              <div>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, background: "#fee2e2", color: "#991b1b", padding: "1px 6px", borderRadius: "4px" }}>
                  BODY 1: OPINION SIDE — REASON 1 + REASONING + EXAMPLE
                </span>
                <p style={{ margin: "4px 0 0" }}>
                  First and foremost, premature technology adoption promotes an intensely sedentary lifestyle, leading to severe physical health complications. When young children spend prolonged hours engrossed in tablets, energetic outdoor play—which is biologically indispensable for cardiovascular and muscular growth—is inevitably displaced. Furthermore, excessive exposure to blue light emitted by screens suppresses nocturnal melatonin production, leading to chronic sleep deficits. For example, pediatric health research demonstrates that toddlers who regularly consume more than two hours of daily screen time exhibit double the rate of childhood obesity and experience frequent sleep disturbances compared to less screen-reliant peers.
                </p>
              </div>

              <div>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, background: "#fee2e2", color: "#991b1b", padding: "1px 6px", borderRadius: "4px" }}>
                  BODY 2: OPINION SIDE — REASON 2 + REASONING + EXAMPLE
                </span>
                <p style={{ margin: "4px 0 0" }}>
                  Additionally, early dependency on technology severely undermines the cultivation of interpersonal communication skills and emotional empathy. Developing social competence requires reciprocal, face-to-face interaction where children learn to interpret vocal inflections, decipher subtle facial expressions, and build resilient emotional problem-solving habits. In contrast, digital interfaces offer one-way, algorithmically curated stimulation that provides transient amusement rather than deep cognitive focus. A clear illustration of this is observed in early primary classrooms, where kindergarten teachers increasingly report that screen-accustomed toddlers frequently suffer from discernible language delays and struggle to cooperate harmoniously with their peers.
                </p>
              </div>

              <div>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, background: "#f1f5f9", color: "#334155", padding: "1px 6px", borderRadius: "4px" }}>
                  CONCLUSION: SUM-UP MAIN REASONS + RESTATE OPINION
                </span>
                <p style={{ margin: "4px 0 0" }}>
                  In conclusion, although educational applications can provide transient academic benefits, I remain convinced that early technology immersion is an overwhelmingly negative development. Unchecked screen viewing makes sedentary habits inevitable and inflicts discernible harm on restorative sleep and face-to-face social competence during formative childhood years.
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
                  GENUINE HIGH-SCORING ESSAY VOCABULARY:
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {[
                    "pervasive",
                    "inevitable",
                    "discernible",
                    "transient",
                    "resilient",
                    "detrimental",
                    "conducive",
                    "susceptible",
                    "indispensable",
                    "ubiquitous",
                    "erode",
                    "sedentary lifestyle",
                    "melatonin suppression",
                    "reciprocal dialogue"
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
                • <em>Intro opener:</em> “In contemporary society, the pervasive presence of digital technology has made early exposure practically inevitable...”<br />
                • <em>Opinion statement:</em> “While interactive software can foster foundational digital fluency, I firmly contend that this trend is predominantly a negative development...”<br />
                • <em>Body 1 opener:</em> “First and foremost, premature technology adoption promotes an intensely sedentary lifestyle, leading to...”<br />
                • <em>Body 2 opener:</em> “Additionally, early dependency on technology severely undermines the cultivation of interpersonal communication skills...”<br />
                • <em>Conclusion opener:</em> “In conclusion, although educational applications can provide transient academic benefits, I remain convinced that...”<br />
                • <em>Restatement:</em> “Unchecked screen viewing makes sedentary habits inevitable and inflicts discernible harm on restorative sleep...”
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
