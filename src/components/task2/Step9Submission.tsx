import React from "react";
import { ClipboardCheck, ArrowRight } from "lucide-react";

export const Step9SubmissionT2: React.FC = () => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
        Step 09 / 09 • Final Submission & Wrap-up
      </span>
      <h2 className="stage-title">From Guided Thinking to Independent Writing</h2>
      <p className="stage-subtitle">
        The scaffolding is complete. Write the full Two-Part essay directly answering both prompt questions with academic collocations and well-developed paragraphs.
      </p>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "18px",
        marginTop: "10px"
      }}
    >
      {[
        {
          n: "01",
          t: "Balanced 2-Question Coverage",
          d: "Dedicate Body 1 to evaluating the extent to which monetary bonuses work (short-term output vs. diminishing returns), and Body 2 to presenting superior non-monetary alternatives (autonomy, promotion ladders, recognition)."
        },
        {
          n: "02",
          t: "1 Reason + Support + Example",
          d: "Dedicate each body paragraph to 1 clear core reason, explain its causal mechanism with depth, and substantiate it with a concrete workplace or corporate case study."
        },
        {
          n: "03",
          t: "Academic Tone & Cohesion",
          d: "Connect your evaluation smoothly using advanced transitions and precise organizational psychology collocations (e.g. intrinsic motivation, meritocratic career progression)."
        }
      ].map((x) => (
        <div
          key={x.n}
          style={{
            background: "#fff",
            border: "1.5px solid var(--border-subtle)",
            borderRadius: "18px",
            padding: "22px",
            boxShadow: "var(--shadow-sm)"
          }}
        >
          <span className="apple-badge neutral">{x.n}</span>
          <h4 style={{ marginTop: "14px", fontSize: "1.05rem", fontWeight: 700 }}>{x.t}</h4>
          <p style={{ marginTop: "8px", color: "var(--slate-600)", lineHeight: 1.5, fontSize: "0.92rem" }}>
            {x.d}
          </p>
        </div>
      ))}
    </div>

    <div
      style={{
        marginTop: "22px",
        background: "var(--slate-900)",
        color: "#fff",
        borderRadius: "20px",
        padding: "24px 28px",
        display: "flex",
        alignItems: "center",
        gap: "18px"
      }}
    >
      <ClipboardCheck size={28} style={{ flexShrink: 0, color: "var(--apple-blue)" }} />
      <div>
        <h4 style={{ fontSize: "1.12rem", fontWeight: 700 }}>Board Writing Checkpoint</h4>
        <p style={{ color: "#cbd5e1", lineHeight: 1.5, marginTop: "4px", fontSize: "0.92rem" }}>
          Before you write, challenge yourself to explain your answers to both prompt questions aloud in under 60 seconds without checking your notes. This verbal recall check verifies that your arguments, causal links, and real-world examples are fully internalized.
        </p>
      </div>
      <ArrowRight size={22} style={{ marginLeft: "auto", flexShrink: 0, color: "#94a3b8" }} />
    </div>
  </div>
);
