import React from "react";
import { CheckCircle2, Award, Compass, HeartHandshake, Star, BookOpen, CircleCheck } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";

export const Step7EvaluationT2: React.FC = () => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
        Step 07 / 09 • Question 2: Remedial Measures &amp; Strategic Interventions
      </span>
      <h2 className="stage-title">Question 2: Comprehensive Remedial Measures &amp; Public Health Solutions</h2>
      <p className="stage-subtitle">
        Levelled arguments for strategic interventions. Pair core policy solutions—such as targeted fiscal sugar levies for Body 1 (Healthcare Strain) and active municipal transit for Body 2 (Workforce Inactivity)—to build an integrated, paired argument.
      </p>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "18px",
        overflowY: "auto"
      }}
    >
      {TASK2_DATA.evaluationArguments.map((item, idx) => (
        <div
          key={item.title}
          style={{
            background: "#fff",
            border: "1.5px solid var(--border-subtle)",
            borderRadius: "18px",
            padding: "20px",
            boxShadow: "var(--shadow-sm)",
            display: "flex",
            flexDirection: "column",
            gap: "10px"
          }}
        >
          {/* Level & Vocabulary Badge Row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "6px" }}>
            <span
              className="apple-badge accent"
              style={{
                fontSize: "0.74rem",
                fontWeight: 750,
                background: item.type === "argument" ? "rgba(147, 51, 234, 0.1)" : "rgba(5, 150, 105, 0.1)",
                color: item.type === "argument" ? "#7e22ce" : "#047857",
                border: item.type === "argument" ? "1px solid rgba(147, 51, 234, 0.25)" : "1px solid rgba(5, 150, 105, 0.25)"
              }}
            >
              {item.level || (item.type === "argument" ? "Core Motivator" : "Strategic Implementation")}
            </span>
            {item.collocation && (
              <span
                style={{
                  fontSize: "0.74rem",
                  color: "var(--slate-600)",
                  fontFamily: "monospace",
                  background: "var(--slate-100)",
                  padding: "2px 8px",
                  borderRadius: "6px",
                  border: "1px solid var(--border-subtle)"
                }}
              >
                ✦ {item.collocation}
              </span>
            )}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "9px",
              color: item.type === "counterpoint" ? "#059669" : "#7e22ce"
            }}
          >
            {item.type === "counterpoint" ? (
              <CheckCircle2 size={19} style={{ flexShrink: 0 }} />
            ) : idx === 0 ? (
              <Award size={19} style={{ flexShrink: 0 }} />
            ) : idx === 1 ? (
              <Compass size={19} style={{ flexShrink: 0 }} />
            ) : idx === 2 ? (
              <Star size={19} style={{ flexShrink: 0 }} />
            ) : (
              <HeartHandshake size={19} style={{ flexShrink: 0 }} />
            )}
            <h4 style={{ fontSize: "1.02rem", fontWeight: 750, color: "var(--slate-900)" }}>{item.title}</h4>
          </div>

          {/* Levelled Comprehension: Student Quick Take */}
          {item.simpleTakeaway && (
            <div
              style={{
                background: item.type === "argument" ? "#faf5ff" : "#f0fdf4",
                borderLeft: item.type === "argument" ? "3.5px solid #9333ea" : "3.5px solid #059669",
                borderRadius: "0 8px 8px 0",
                padding: "7px 12px",
                fontSize: "0.85rem",
                color: item.type === "argument" ? "#6b21a8" : "#166534",
                lineHeight: 1.45,
                fontWeight: 550
              }}
            >
              <BookOpen size={13} style={{ verticalAlign: "-2px", marginRight: "6px", display: "inline" }} />
              <strong>Student Quick Take:</strong> {item.simpleTakeaway}
            </div>
          )}

          <p style={{ fontSize: "0.89rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
            <strong>Core Reason:</strong> {item.reason}
          </p>
          <p style={{ fontSize: "0.89rem", color: "var(--slate-600)", lineHeight: 1.55 }}>
            <strong>Logical Development:</strong> {item.development}
          </p>

          {/* Real-World Concrete Example */}
          <div
            style={{
              marginTop: "auto",
              background: "var(--slate-50)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "12px",
              padding: "10px 12px",
              fontSize: "0.85rem",
              color: "var(--slate-700)",
              lineHeight: 1.45
            }}
          >
            <CircleCheck size={14} style={{ verticalAlign: "-2px", marginRight: "6px", color: "var(--apple-blue)" }} />
            <strong>Example:</strong> {item.example}
          </div>
        </div>
      ))}
    </div>
  </div>
);
