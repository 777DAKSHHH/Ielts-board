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
        The scaffolding has now been removed. Students should write the complete Opinion Essay (Agree/Disagree) using their selected arguments, causal chains, and academic collocations.
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
          t: "Opinion Alignment Across Bodies",
          d: "Ensure both body paragraphs consistently champion your chosen stance: if Agree, pick 2 arguments from Step 6 (Identity & justice); if Disagree, pick 2 arguments from Step 7 (Universal access & conservation)."
        },
        {
          n: "02",
          t: "1 Reason + Support + Example",
          d: "Dedicate each body paragraph to 1 clear core reason, explain its causal mechanism with depth, and substantiate it with a verifiable historical case study."
        },
        {
          n: "03",
          t: "Sustained Stance Throughout",
          d: "Deliver an unequivocal position in your introduction, reinforce it in both body paragraphs, and reassert it powerfully in your conclusion."
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
        <h4 style={{ fontSize: "1.12rem", fontWeight: 700 }}>Teacher Checkpoint</h4>
        <p style={{ color: "#cbd5e1", lineHeight: 1.5, marginTop: "4px", fontSize: "0.92rem" }}>
          Before students begin writing, ask them to explain their two main reasons and supporting real-world examples aloud in under 60 seconds without checking their notes. This verbal recall check verifies that the concepts have translated into independent reasoning.
        </p>
      </div>
      <ArrowRight size={22} style={{ marginLeft: "auto", flexShrink: 0, color: "#94a3b8" }} />
    </div>
  </div>
);
