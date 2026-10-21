import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step8Connectors: React.FC = () => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge success" style={{ marginBottom: "8px" }}>
        Step 08 / 08 • Academic Transitions &amp; Comparative Cohesion
      </span>
      <h2 className="stage-title">Discourse Connectors &amp; Temporal Flow for Diurnal Line Graphs</h2>
      <p className="stage-subtitle">
        Master academic discourse markers to establish seamless logical transitions between nocturnal troughs, rapid morning surges, midday crossover points, and evening prime-time spikes.
      </p>
    </div>

    {/* Connector Cards Grid */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", overflowY: "auto" }}>
      {TASK1_DATA.connectors.map((connector, index) => (
        <div
          key={connector.phrase}
          style={{
            background: "var(--slate-50)",
            border: "1.5px solid var(--border-subtle)",
            borderRadius: "16px",
            padding: "18px",
            display: "flex",
            flexDirection: "column",
            gap: "9px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <span className="apple-badge neutral">{index + 1}</span>
            <strong style={{ color: "var(--slate-900)", fontSize: "0.92rem" }}>{connector.phrase}</strong>
          </div>
          <div style={{ color: "var(--slate-500)", fontSize: "0.8rem", fontWeight: 600 }}>
            Function: {connector.purpose}
          </div>
          <div
            style={{
              background: "#ffffff",
              border: "1px solid var(--border-subtle)",
              borderRadius: "11px",
              padding: "11px 13px",
              color: "var(--slate-700)",
              lineHeight: 1.5,
              fontSize: "0.88rem"
            }}
          >
            {connector.example}
          </div>
        </div>
      ))}
    </div>

    {/* Recommended Cohesive Flow Pathway */}
    <div
      style={{
        background: "#ffffff",
        border: "1.5px solid var(--border-subtle)",
        borderRadius: "18px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        boxShadow: "var(--shadow-sm)"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <CheckCircle2 size={18} color="#16a34a" />
        <strong style={{ color: "var(--slate-900)", fontSize: "0.95rem" }}>
          Recommended Cohesive Discourse Pathway for Diurnal Line Graphs
        </strong>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem", color: "var(--slate-700)" }}>
        {/* Paragraph 3 / Body 1 Flow */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", background: "var(--slate-50)", padding: "10px 14px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
          <span className="apple-badge neutral" style={{ fontWeight: 700 }}>Body 1 (01:00–13:00)</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“Between 1:00 and 6:00,...”</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>Audience figures remain marginal (&lt;7%)</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“Radio then experienced a dramatic morning surge,...”</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>Apex of ~27% around 8:30 am</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“In contrast,...”</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>TV modest 7% bump down to 4% at 11:00</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“By 13:00,...”</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>Intersection where both mediums stand at 15%</span>
        </div>

        {/* Paragraph 4 / Body 2 Flow */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", background: "var(--slate-50)", padding: "10px 14px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
          <span className="apple-badge neutral" style={{ fontWeight: 700 }}>Body 2 (14:00–24:00)</span>
          <ArrowRight size={13} color="#16a34a" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“From 14:00 onwards,...”</span>
          <ArrowRight size={13} color="#16a34a" />
          <span>Television supersedes radio permanently</span>
          <ArrowRight size={13} color="#16a34a" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“Although radio exhibited a commute bump to 14%,...”</span>
          <ArrowRight size={13} color="#16a34a" />
          <span>its figures plummeted below 10% thereafter</span>
          <ArrowRight size={13} color="#16a34a" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“Conversely, television audiences skyrocketed...”</span>
          <ArrowRight size={13} color="#16a34a" />
          <span>Culminating in a prime-time peak of 45% (20:00–21:00)</span>
          <ArrowRight size={13} color="#16a34a" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“Late at night,...”</span>
          <ArrowRight size={13} color="#16a34a" />
          <span>TV drops to 15% by midnight, radio levels off at 4%</span>
        </div>
      </div>
    </div>
  </div>
);
