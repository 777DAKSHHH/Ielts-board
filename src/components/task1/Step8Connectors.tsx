import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step8Connectors: React.FC = () => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge success" style={{ marginBottom: "8px" }}>
        Step 08 / 08 • Academic Transitions &amp; Comparative Cohesion
      </span>
      <h2 className="stage-title">Cohesive Sequencing &amp; Contrastive Linking for Statistical Tables</h2>
      <p className="stage-subtitle">
        Master academic discourse markers to establish seamless logical transitions between the surging risers, the sole declining institution, stepped plateaus, and multi-school convergences.
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
          Recommended Cohesive Discourse Pathway for Table Reporting
        </strong>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem", color: "var(--slate-700)" }}>
        {/* Paragraph 3 / Body 1 Flow */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", background: "var(--slate-50)", padding: "10px 14px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
          <span className="apple-badge neutral" style={{ fontWeight: 700 }}>Body 1 (Surging Risers)</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“Turning first to the two highest-performing institutions by 2000,...”</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>Harble's 30% baseline</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>Steady climb to 60%</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>Leap by 20% to peak at 80% (nearly tripled)</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>Fairfield 65% → 75% tie in 1997</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“Despite a transient dip in 1999,...”</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>Rebound to conclude at 79% (2nd place)</span>
        </div>

        {/* Paragraph 4 / Body 2 Flow */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", background: "var(--slate-50)", padding: "10px 14px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
          <span className="apple-badge neutral" style={{ fontWeight: 700 }}>Body 2 (Decliner &amp; Moderates)</span>
          <ArrowRight size={13} color="#16a34a" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“In contrast, Greystone High was the only school to decline,...”</span>
          <ArrowRight size={13} color="#16a34a" />
          <span>Surrendered 90% lead → fell to 70%</span>
          <ArrowRight size={13} color="#16a34a" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“Meanwhile, Royston Academy progressed in a stepped manner,...”</span>
          <ArrowRight size={13} color="#16a34a" />
          <span>50% → 54% plateau → 60%</span>
          <ArrowRight size={13} color="#16a34a" />
          <span>Crackend stability (59%–62%)</span>
          <ArrowRight size={13} color="#16a34a" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“Notably, in 1999, Royston, Harble, and Crackend converged at exactly 60%.”</span>
        </div>
      </div>
    </div>
  </div>
);
