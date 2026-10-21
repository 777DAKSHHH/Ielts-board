import React, { useState } from "react";
import { CheckCircle2, Split, Clock, Tv, Radio, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step5Bifurcation: React.FC = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<"diurnal" | "medium">("diurnal");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 05 / 08 • Structural Grouping Strategy
        </span>
        <h2 className="stage-title">Bifurcation Tactics: How to Group the 24-Hour Audience Data</h2>
        <p className="stage-subtitle">
          With two media channels (radio and television) spanning a 24-hour cycle, selecting the optimal logical bifurcation ensures Band 9 in Coherence &amp; Cohesion (CC) and Task Achievement (TA).
        </p>
      </div>

      {/* Strategy Switcher */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
        <button
          onClick={() => setSelectedStrategy("diurnal")}
          style={{
            flex: 1,
            padding: "14px 18px",
            borderRadius: "14px",
            border: selectedStrategy === "diurnal" ? "2px solid #0284c7" : "1.5px solid var(--border-subtle)",
            background: selectedStrategy === "diurnal" ? "#f0f9ff" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            boxShadow: selectedStrategy === "diurnal" ? "var(--shadow-sm)" : "none"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Clock size={20} color={selectedStrategy === "diurnal" ? "#0284c7" : "var(--slate-600)"} />
            <div style={{ textAlign: "left" }}>
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)", display: "block" }}>
                Strategy A: Diurnal Phase Bifurcation (Recommended)
              </strong>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Body 1: Morning Surge to Midday Crossover (01:00–13:00) • Body 2: Afternoon &amp; Prime-Time (14:00–24:00)
              </span>
            </div>
          </div>
          <span className="apple-badge neutral" style={{ background: "#dbeafe", color: "#1e40af", fontWeight: 800 }}>
            Band 9 Standard
          </span>
        </button>

        <button
          onClick={() => setSelectedStrategy("medium")}
          style={{
            flex: 1,
            padding: "14px 18px",
            borderRadius: "14px",
            border: selectedStrategy === "medium" ? "2px solid #7c3aed" : "1.5px solid var(--border-subtle)",
            background: selectedStrategy === "medium" ? "#f5f3ff" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            boxShadow: selectedStrategy === "medium" ? "var(--shadow-sm)" : "none"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Tv size={20} color={selectedStrategy === "medium" ? "#7c3aed" : "var(--slate-600)"} />
            <div style={{ textAlign: "left" }}>
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)", display: "block" }}>
                Strategy B: Medium-by-Medium Bifurcation
              </strong>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Body 1: Complete Radio Trajectory • Body 2: Complete Television Trajectory
              </span>
            </div>
          </div>
          <span className="apple-badge neutral" style={{ fontWeight: 700 }}>
            Alternative
          </span>
        </button>
      </div>

      {/* Selected Strategy Deep Dive Grid */}
      {selectedStrategy === "diurnal" ? (
        <div className="stage-grid-2col">
          {/* Body 1 Column */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "22px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#dc2626" }} />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Body Paragraph 1: Morning Surge to Midday Crossover (01:00 – 13:00)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#fee2e2", color: "#991b1b", fontWeight: 750 }}>
                75 Words
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Covers the pre-dawn lull (&lt;5%), the explosive breakfast climb of radio to its daily peak (~27% at 8:30 am), TV’s subdued morning performance (7% bump down to 3.5%), and the pivotal 13:00 crossover convergence at 15%.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>1. Nocturnal Baseline (01:00–06:00):</strong> Both media languish below 5% (radio ~2%–3%, TV ~3%–4%) with minimal engagement.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "#dc2626" }}>2. Radio Morning Apex (06:00–09:00):</strong> Shoots upward from 4% to reach a daily maximum of approximately 27% around 8:30 am.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "#2563eb" }}>3. Television Subdued Morning:</strong> Reaches a modest 7% news peak at 8:00 before sliding to a daytime trough of 3.5% at 11:00.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "#d97706" }}>4. Watershed Intersection (13:00):</strong> Radio falls while TV climbs, resulting in an exact crossover convergence at 15%.
              </div>
            </div>

            <div style={{ background: "#f8fafc", borderRadius: "10px", padding: "10px 12px", fontSize: "0.8rem", color: "var(--slate-700)", borderLeft: "3px solid #dc2626" }}>
              <strong>Teaching Note:</strong> Highlighting the 13:00 crossover at 15% is the essential transition bridge that links Body 1 directly into Body 2.
            </div>
          </div>

          {/* Body 2 Column */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "22px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#2563eb" }} />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Body Paragraph 2: Afternoon Ascent, Prime-Time Peak &amp; Nightfall (14:00 – 24:00)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#dbeafe", color: "#1e40af", fontWeight: 750 }}>
                63 Words
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Documents television permanently superseding radio, radio’s minor 17:00 commute bump followed by its drop below 10%, TV’s explosive surge to an overall 45% peak between 20:00–21:00, and late-night trajectories.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "#2563eb" }}>1. Leadership Reversal (14:00):</strong> Television takes permanent dominance from 14:00, staying above 14% while radio slides to 11%.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "#dc2626" }}>2. Radio Commute Bump &amp; Slump:</strong> Slight uptick to 14% at 17:00 before plunging below 10% after 18:00.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "#2563eb" }}>3. Prime-Time TV Explosion (18:00–21:00):</strong> Viewership skyrockets past 40% to reach its global peak of 45% (20:00–21:00).
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>4. Nightfall Stabilization:</strong> TV descends sharply to 15% by midnight, while radio hovers steadily around 4%.
              </div>
            </div>

            <div style={{ background: "#f8fafc", borderRadius: "10px", padding: "10px 12px", fontSize: "0.8rem", color: "var(--slate-700)", borderLeft: "3px solid #2563eb" }}>
              <strong>Teaching Note:</strong> Emphasize the contrasting verbs: <em>“skyrocketed,” “culminating in a prime-time peak,”</em> versus <em>“plummeted,” “leveled off.”</em>
            </div>
          </div>
        </div>
      ) : (
        /* Medium Grouping Strategy */
        <div className="stage-grid-2col">
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "22px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#dc2626" }} />
              <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                Body 1: Full Radio Trajectory
              </h4>
            </div>
            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Traces radio listenership across all 24 hours: overnight low, morning peak at 27%, afternoon decline, 17:00 commute bump, and flat evening below 7%.
            </p>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "0.84rem", color: "var(--slate-700)", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>Starts low at ~3% at 1:00, bottoming out at 2% between 2:00 and 4:00.</li>
              <li>Surges dramatically to its daily peak of ~27% at 8:30 am during morning breakfast and travel.</li>
              <li>Declines steadily through midday, meeting television at 15% at 13:00.</li>
              <li>Brief commute bump to 14% at 17:00 before sliding below 10% and closing at 4% by midnight.</li>
            </ul>
          </div>

          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "22px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#2563eb" }} />
              <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                Body 2: Full Television Trajectory &amp; Intersections
              </h4>
            </div>
            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Traces television viewership across all 24 hours: subdued daytime levels, midday intersection, dramatic evening explosion, and late-night fall.
            </p>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "0.84rem", color: "var(--slate-700)", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>Starts at 7% at 1:00 am, dropping to ~3% overnight and peaking only mildly at 7% at 8:00 am.</li>
              <li>Reaches a daytime low of 3.5% at 11:00 before ascending to meet radio at 15% at 13:00.</li>
              <li>Supercharges from 16:00 onwards, jumping from 17% to 25% (17:00) and 42% (18:00).</li>
              <li>Reaches a colossal prime-time zenith of 45% between 20:00 and 21:00, before falling to 15% by midnight.</li>
            </ul>
          </div>
        </div>
      )}

      {/* Rationale Banner */}
      <div
        style={{
          background: "#f8fafc",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "16px",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          gap: "12px"
        }}
      >
        <ShieldCheck size={22} color="#16a34a" style={{ flexShrink: 0 }} />
        <div style={{ fontSize: "0.88rem", color: "var(--slate-800)", lineHeight: 1.5 }}>
          <strong>Examiner Assessment Rationale:</strong> Strategy A (Diurnal Phase Bifurcation) is strongly recommended because it forces the student to compare both mediums side-by-side in each paragraph (satisfying the prompt instruction <em>"make comparisons where relevant"</em>), while highlighting the pivotal 13:00 crossover point.
        </div>
      </div>
    </div>
  );
};
