import React, { useState } from "react";
import { CheckCircle2, Copy, Check, ChevronDown, ChevronUp, Layers, ShieldCheck, Sparkles } from "lucide-react";

export const Step9SubmissionT2: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showEssay, setShowEssay] = useState(false);

  const fullModelEssay = `In contemporary times, the exponential escalation in satellite launches and the accumulation of space debris orbiting Earth have emerged as severe planetary and technological threats. This critical crisis is primarily driven by the commercial space race and inadequate post-mission disposal protocols; however, it can be mitigated through mandatory self-deorbiting mechanisms and international space debris remediation treaties.

To begin with, the primary catalyst for orbital overcrowding is the rapid proliferation of commercial satellite constellations launched by private aerospace enterprises. With thousands of low-Earth orbit (LEO) satellites deployed simultaneously for telecommunications, orbital pathways are becoming dangerously congested. To mitigate this hazard, international regulatory bodies must mandate self-deorbiting mechanisms on all newly manufactured satellites. Equipping orbiters with automated propulsive thrusters ensures that defunct hardware re-enters Earth's atmosphere and vaporizes safely upon mission conclusion. For instance, aerospace regulations requiring commercial fleets like Starlink to execute automated atmospheric burn-up within five years of retirement substantially reduce long-term collision risks.

Furthermore, the hazard is exacerbated by decades of abandoned space junk and kinetic orbital collisions, which shatter defunct hardware into thousands of untrackable, hypervelocity fragments. A minor paint fleck traveling at orbital velocity can catastrophically pierce spacecraft, while uncontrolled dead satellites threaten satellite communication networks. The most viable remedy is the rapid deployment of Active Debris Removal (ADR) missions governed by legally binding international treaties. Space agencies must collaborate to finance robotic capture craft equipped with nets and magnetic claws to deorbit hazardous derelict objects. A prime example is the European Space Agency's ClearSpace-1 project, which aims to capture a discarded rocket stage, demonstrating that technological remediation can actively purge congested orbits.

In conclusion, the escalating menace of orbital overcrowding is driven primarily by the rapid expansion of commercial satellite constellations and the presence of uncontrolled legacy space debris. However, this crisis can be effectively resolved through the mandatory enforcement of automated self-deorbiting thrusters alongside international robotic debris removal missions. Moving forward, the global community must swiftly adopt an updated, legally binding United Nations space sustainability treaty before low-Earth orbit becomes permanently unusable.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullModelEssay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="stage-card-wrapper" style={{ overflowY: "auto", maxHeight: "100%" }}>
      {/* Stage Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px", marginBottom: "14px" }}>
        <div>
          <span className="apple-badge accent" style={{ marginBottom: "6px" }}>
            Step 09 / 09 • Final Essay Structure &amp; Revision
          </span>
          <h2 className="stage-title">Essay Structure &amp; Revision Cheat Sheet</h2>
          <p className="stage-subtitle" style={{ marginBottom: 0 }}>
            Extreme concise one-liner revision checks for your Band 9 Causes &amp; Solutions response.
          </p>
        </div>

        <button
          onClick={handleCopy}
          style={{
            padding: "8px 14px",
            borderRadius: "10px",
            border: "1px solid var(--border-subtle)",
            background: copied ? "#dcfce7" : "#0f172a",
            color: copied ? "#166534" : "#ffffff",
            fontSize: "0.82rem",
            fontWeight: 800,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          {copied ? <Check size={14} color="#166534" /> : <Copy size={14} />}
          <span>{copied ? "Copied Full Essay" : "Copy Complete Model Essay"}</span>
        </button>
      </div>

      {/* SECTION 1: 4-PARAGRAPH ARCHITECTURE (STRICT ONE-LINERS) */}
      <div
        style={{
          background: "#ffffff",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "16px",
          padding: "16px 20px",
          marginBottom: "14px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid #f1f5f9", paddingBottom: "8px" }}>
          <Layers size={16} color="var(--apple-blue)" />
          <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
            4-Paragraph Linked Structure (One-Liner Revision)
          </h3>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {/* Intro */}
          <div style={{ background: "#faf5ff", border: "1px solid #e9d5ff", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#9333ea", color: "#ffffff", padding: "2px 7px", borderRadius: "4px" }}>
                1. INTRODUCTION
              </span>
              <strong style={{ fontSize: "0.86rem", color: "#6b21a8" }}>Paraphrase Question + Causes &amp; Solutions Thesis</strong>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "#3b0764", lineHeight: 1.45 }}>
              Paraphrase commercial satellite proliferation &amp; debris threat + deliver a thesis mapping the commercial space race &amp; legacy debris to deorbit mandates &amp; UN cleanup treaties.
            </p>
          </div>

          {/* Body 1 */}
          <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#2563eb", color: "#ffffff", padding: "2px 7px", borderRadius: "4px" }}>
                2. BODY PARA 1
              </span>
              <strong style={{ fontSize: "0.86rem", color: "#1d4ed8" }}>Cause 1 + Solution 1 + Concrete Example</strong>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "#1e3a8a", lineHeight: 1.45 }}>
              <strong>Cause 1:</strong> Commercial mega-constellations saturate low-Earth orbits → <strong>Solution 1:</strong> Regulators mandate automated self-deorbiting thrusters → <strong>Example:</strong> Starlink 5-year atmospheric burn-up rule.
            </p>
          </div>

          {/* Body 2 */}
          <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#16a34a", color: "#ffffff", padding: "2px 7px", borderRadius: "4px" }}>
                3. BODY PARA 2
              </span>
              <strong style={{ fontSize: "0.86rem", color: "#15803d" }}>Cause 2 + Solution 2 + Concrete Example</strong>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "#14532d", lineHeight: 1.45 }}>
              <strong>Cause 2:</strong> Cascading hypervelocity shrapnel (Kessler syndrome) &amp; abandoned stages → <strong>Solution 2:</strong> Active robotic debris removal (ADR) &amp; UN launch treaties → <strong>Example:</strong> ESA ClearSpace-1 claw mission.
            </p>
          </div>

          {/* Conclusion */}
          <div style={{ background: "#f8fafc", border: "1px solid #cbd5e1", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#0f172a", color: "#ffffff", padding: "2px 7px", borderRadius: "4px" }}>
                4. CONCLUSION
              </span>
              <strong style={{ fontSize: "0.86rem", color: "#0f172a" }}>Sum-Up Causes, Solutions + Forward-Looking Policy Recommendation</strong>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "#1e293b", lineHeight: 1.45 }}>
              Synthesize commercial constellation saturation and legacy debris, restate automated deorbiting thrusters and robotic removal, and recommend a legally binding UN space sustainability treaty.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: BAND 9 EXAMINER REVISION CHECKPOINTS (STRICT ONE-LINERS) */}
      <div
        style={{
          background: "#ffffff",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "16px",
          padding: "16px 20px",
          marginBottom: "14px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid #f1f5f9", paddingBottom: "8px" }}>
          <ShieldCheck size={16} color="#16a34a" />
          <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
            4 Band 9 Examiner Revision Checkpoints (Strict One-Liners)
          </h3>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "10px" }}>
          {[
            {
              code: "TR",
              title: "Task Response",
              color: "#2563eb",
              bg: "#eff6ff",
              rule: "Both causes and both linked solutions are directly developed with verifiable real-world evidence."
            },
            {
              code: "CC",
              title: "Coherence & Cohesion",
              color: "#16a34a",
              bg: "#f0fdf4",
              rule: "Seamless progression markers: 'To begin with... To mitigate this hazard... Furthermore... In conclusion...'."
            },
            {
              code: "LR",
              title: "Lexical Resource",
              color: "#9333ea",
              bg: "#faf5ff",
              rule: "Natural Band 9 aerospace lexis: 'proliferation', 'congested', 'defunct', 'hypervelocity', 'remediation'."
            },
            {
              code: "GRA",
              title: "Grammatical Accuracy",
              color: "#d97706",
              bg: "#fffbeb",
              rule: "Complex passive constructions and conditional recommendations without punctuation or agreement errors."
            }
          ].map((chk) => (
            <div
              key={chk.code}
              style={{
                background: chk.bg,
                border: `1px solid ${chk.color}30`,
                borderRadius: "10px",
                padding: "10px 12px",
                display: "flex",
                flexDirection: "column",
                gap: "4px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontSize: "0.68rem", fontWeight: 800, background: chk.color, color: "#ffffff", padding: "1px 6px", borderRadius: "4px" }}>
                  {chk.code}
                </span>
                <strong style={{ fontSize: "0.84rem", color: "#0f172a" }}>{chk.title}</strong>
              </div>
              <p style={{ margin: 0, fontSize: "0.82rem", color: "#334155", lineHeight: 1.4 }}>
                {chk.rule}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: COMPACT EXPANDABLE FULL MODEL ESSAY DRAWER */}
      <div
        style={{
          background: "#ffffff",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "16px",
          padding: "14px 18px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
        }}
      >
        <button
          type="button"
          onClick={() => setShowEssay(!showEssay)}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Sparkles size={16} color="var(--apple-blue)" />
            <strong style={{ fontSize: "0.92rem", color: "#0f172a" }}>
              Complete Band 9 Model Essay (280 Words • Causes &amp; Solutions)
            </strong>
            <span style={{ fontSize: "0.72rem", background: "#f1f5f9", color: "#475569", padding: "2px 8px", borderRadius: "6px" }}>
              {showEssay ? "Click to collapse" : "Click to view full text"}
            </span>
          </div>

          {showEssay ? <ChevronUp size={16} color="#64748b" /> : <ChevronDown size={16} color="#64748b" />}
        </button>

        {showEssay && (
          <div
            style={{
              marginTop: "12px",
              paddingTop: "12px",
              borderTop: "1px solid #f1f5f9",
              fontSize: "0.90rem",
              lineHeight: 1.65,
              color: "#1e293b",
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            <p style={{ margin: 0 }}>
              <strong>Introduction:</strong> In contemporary times, the exponential escalation in satellite launches and the accumulation of space debris orbiting Earth have emerged as severe planetary and technological threats. This critical crisis is primarily driven by the commercial space race and inadequate post-mission disposal protocols; however, it can be mitigated through mandatory self-deorbiting mechanisms and international space debris remediation treaties.
            </p>
            <p style={{ margin: 0 }}>
              <strong>Body 1 (Cause 1 + Solution 1 + Example):</strong> To begin with, the primary catalyst for orbital overcrowding is the rapid proliferation of commercial satellite constellations launched by private aerospace enterprises. With thousands of low-Earth orbit (LEO) satellites deployed simultaneously for telecommunications, orbital pathways are becoming dangerously congested. To mitigate this hazard, international regulatory bodies must mandate self-deorbiting mechanisms on all newly manufactured satellites. Equipping orbiters with automated propulsive thrusters ensures that defunct hardware re-enters Earth's atmosphere and vaporizes safely upon mission conclusion. For instance, aerospace regulations requiring commercial fleets like Starlink to execute automated atmospheric burn-up within five years of retirement substantially reduce long-term collision risks.
            </p>
            <p style={{ margin: 0 }}>
              <strong>Body 2 (Cause 2 + Solution 2 + Example):</strong> Furthermore, the hazard is exacerbated by decades of abandoned space junk and kinetic orbital collisions, which shatter defunct hardware into thousands of untrackable, hypervelocity fragments. A minor paint fleck traveling at orbital velocity can catastrophically pierce spacecraft, while uncontrolled dead satellites threaten satellite communication networks. The most viable remedy is the rapid deployment of Active Debris Removal (ADR) missions governed by legally binding international treaties. Space agencies must collaborate to finance robotic capture craft equipped with nets and magnetic claws to deorbit hazardous derelict objects. A prime example is the European Space Agency's ClearSpace-1 project, which aims to capture a discarded rocket stage, demonstrating that technological remediation can actively purge congested orbits.
            </p>
            <p style={{ margin: 0 }}>
              <strong>Conclusion:</strong> In conclusion, the escalating menace of orbital overcrowding is driven primarily by the rapid expansion of commercial satellite constellations and the presence of uncontrolled legacy space debris. However, this crisis can be effectively resolved through the mandatory enforcement of automated self-deorbiting thrusters alongside international robotic debris removal missions. Moving forward, the global community must swiftly adopt an updated, legally binding United Nations space sustainability treaty before low-Earth orbit becomes permanently unusable.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
