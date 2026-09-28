import React from "react";
import { AlertTriangle, CheckCircle2, TrendingDown } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";

export const Step7EvaluationT2: React.FC = () => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
        Step 07 / 09 • Body 2 — View 2: High Taxes as Detrimental
      </span>
      <h2 className="stage-title">Why High Taxes Are Perceived as a Bad Thing</h2>
      <p className="stage-subtitle">
        Deconstruct View 2: Work disincentives, purchasing power erosion, brain drain, and bureaucratic inefficiency, balanced against the market failure of privatisation.
      </p>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
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
            boxShadow: "var(--shadow-sm)"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "9px",
              marginBottom: "10px",
              color: item.type === "counterpoint" ? "#059669" : "var(--apple-red)"
            }}
          >
            {item.type === "counterpoint" ? (
              <CheckCircle2 size={20} />
            ) : idx === 0 ? (
              <TrendingDown size={20} />
            ) : (
              <AlertTriangle size={20} />
            )}
            <h4 style={{ fontSize: "1.05rem", fontWeight: 750 }}>{item.title}</h4>
          </div>
          <p style={{ fontSize: "0.88rem", color: "var(--slate-600)", lineHeight: 1.5 }}>
            <strong>Reason:</strong> {item.reason}
          </p>
          <p
            style={{
              fontSize: "0.88rem",
              color: "var(--slate-600)",
              lineHeight: 1.5,
              marginTop: "8px"
            }}
          >
            <strong>Development:</strong> {item.development}
          </p>
          <div
            style={{
              marginTop: "12px",
              background: "var(--slate-50)",
              borderRadius: "12px",
              padding: "10px 12px",
              fontSize: "0.85rem",
              color: "var(--slate-700)",
              lineHeight: 1.45
            }}
          >
            <strong>Example:</strong> {item.example}
          </div>
        </div>
      ))}
    </div>
  </div>
);
