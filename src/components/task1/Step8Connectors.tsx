import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step8Connectors: React.FC = () => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge success" style={{ marginBottom: "8px" }}>
        Step 08 / 08 • Academic Transitions &amp; Comparative Cohesion
      </span>
      <h2 className="stage-title">Financial Transitions &amp; Discourse Connectors for Comparative Bar Graphs</h2>
      <p className="stage-subtitle">
        Master academic discourse markers to establish seamless logical transitions between temporal baselines, market contractions, total obsolescence to nil, and burgeoning digital revenues.
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
          Recommended Cohesive Discourse Pathway for 10-Year Dynamic Bar Graphs
        </strong>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem", color: "var(--slate-700)" }}>
        {/* Paragraph 3 / Body 1 Flow */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", background: "var(--slate-50)", padding: "10px 14px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
          <span className="apple-badge neutral" style={{ fontWeight: 700 }}>Body 1 (1997 Baseline)</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“In 1997,...”</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>Shop CDs form overwhelming lion’s share</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>Germany (€40m) &gt; France (€25m) &gt; Italy (€20m)</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“By contrast,...”</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>Online CD orders negligible (&lt;€3m) + downloads nil</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“Regarding analog formats,...”</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>Italy leads cassettes (€6m) and vinyl (€3m)</span>
        </div>

        {/* Paragraph 4 / Body 2 Flow */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", background: "var(--slate-50)", padding: "10px 14px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
          <span className="apple-badge neutral" style={{ fontWeight: 700 }}>Body 2 (2007 Shift)</span>
          <ArrowRight size={13} color="#16a34a" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“A decade later,...”</span>
          <ArrowRight size={13} color="#16a34a" />
          <span>Shop CDs contract by €6m–€15m (yet remain #1)</span>
          <ArrowRight size={13} color="#16a34a" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“In stark contrast,...”</span>
          <ArrowRight size={13} color="#16a34a" />
          <span>Cassettes &amp; vinyl completely phased out to 0 €m</span>
          <ArrowRight size={13} color="#16a34a" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“The slack was partially absorbed by...”</span>
          <ArrowRight size={13} color="#16a34a" />
          <span>Online CD sales surge (€8m Germany, €7m France)</span>
          <ArrowRight size={13} color="#16a34a" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“Concurrently,...”</span>
          <ArrowRight size={13} color="#16a34a" />
          <span>Downloads emerge from zero to €5m each</span>
        </div>
      </div>
    </div>
  </div>
);
