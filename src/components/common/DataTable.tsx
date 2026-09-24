import React from "react";
import { TASK1_DATA } from "../../data/task1Data";

export const DataTable: React.FC = () => (
  <div style={{ overflowX: "auto", background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "14px" }}>
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.92rem" }}>
      <thead>
        <tr style={{ background: "var(--slate-100)" }}>
          <th style={{ textAlign: "left", padding: "12px" }}>Stage</th>
          <th style={{ textAlign: "left", padding: "12px" }}>Route / output</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: "12px", borderTop: "1px solid var(--border-subtle)" }}>Shared stage</td>
          <td style={{ padding: "12px", borderTop: "1px solid var(--border-subtle)" }}>{TASK1_DATA.processStages.cleanPulp.join(" → ")}</td>
        </tr>
        <tr>
          <td style={{ padding: "12px", borderTop: "1px solid var(--border-subtle)" }}>Route 1</td>
          <td style={{ padding: "12px", borderTop: "1px solid var(--border-subtle)" }}>{TASK1_DATA.processStages.route1.join(" → ")}</td>
        </tr>
        <tr>
          <td style={{ padding: "12px", borderTop: "1px solid var(--border-subtle)" }}>Route 2</td>
          <td style={{ padding: "12px", borderTop: "1px solid var(--border-subtle)" }}>{TASK1_DATA.processStages.route2.join(" → ")}</td>
        </tr>
      </tbody>
    </table>
  </div>
);
