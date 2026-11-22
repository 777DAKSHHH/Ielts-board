import React, { useState } from "react";
import { CheckCircle2, Copy, Check, ChevronDown, ChevronUp, Layers, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

interface Step9SubmissionT2Props {
  onNavigateToNuanceLab?: () => void;
}

export const Step9SubmissionT2: React.FC<Step9SubmissionT2Props> = ({
  onNavigateToNuanceLab
}) => {
  const [copied, setCopied] = useState(false);
  const [showEssay, setShowEssay] = useState(false);

  const fullModelEssay = `It is often argued that designating car-free days serves as an effective strategy to combat urban air pollution, whereas others contend that more impactful alternatives exist. While temporary vehicle bans can foster environmental awareness and offer immediate short-term relief from exhaust emissions, I believe that systemic measures, such as expanding green public transit and enforcing strict industrial regulations, represent far more effective long-term solutions.

On the one hand, proponents of car-free days highlight their immediate environmental and civic benefits. Restricting private vehicular access to city centers, even for a single day, produces a dramatic and measurable reduction in toxic tailpipe emissions, such as nitrogen dioxide and fine particulate matter. In major metropolises like Paris and Bogota, annual car-free events have demonstrated sharp, observable drops in atmospheric pollutants, affording urban residents cleaner air and quieter streets. Furthermore, such initiatives serve a vital psychological function by fostering public awareness regarding automobile dependency. When urbanites experience pedestrianised boulevards firsthand, they are encouraged to consider active transportation modes like cycling and walking, which can stimulate long-term behavioural changes toward sustainable living.

On the other hand, critics argue that car-free days are merely symbolic and that alternative structural measures possess greater long-term efficacy. Because vehicle bans are transient, traffic congestion and emissions inevitably rebound the very next day, failing to deliver permanent ecological improvement. Instead, the most impactful way to curb air pollution is by developing comprehensive, affordable public transit infrastructure. When municipal governments invest heavily in electrified bus fleets and extensive underground metro networks, commuters are provided with viable daily alternatives to private car ownership. Additionally, governments can implement continuous economic deterrents, such as congestion charges and low-emission zones, alongside stringent regulatory standards on industrial output and fossil-fuel vehicles. These permanent policies address the root causes of pollution continuously rather than intermittently.

In conclusion, while car-free days provide valuable short-term benefits by temporarily reducing vehicular exhaust and encouraging public mindfulness, they are fundamentally insufficient as a standalone policy. In my view, achieving lasting air quality improvements requires permanent systemic solutions, primarily heavy investment in zero-emission public transit networks and the rigorous enforcement of stringent vehicle emission standards.`;

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
            Extreme concise one-liner revision checks for your Band 9 Discussion with Opinion response.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          {onNavigateToNuanceLab && (
            <button
              type="button"
              onClick={onNavigateToNuanceLab}
              style={{
                padding: "8px 14px",
                background: "linear-gradient(135deg, #1e1b4b, #312e81)",
                color: "#ffffff",
                border: "1.5px solid #4338ca",
                borderRadius: "10px",
                fontSize: "0.82rem",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(67, 56, 202, 0.2)",
                transition: "all 0.15s ease"
              }}
            >
              <Sparkles size={14} color="#a5b4fc" />
              <span>Nuance Lab (Below / Under / Underneath)</span>
              <span
                style={{
                  fontSize: "0.70rem",
                  background: "#4f46e5",
                  color: "#ffffff",
                  padding: "2px 6px",
                  borderRadius: "5px",
                  fontWeight: 750
                }}
              >
                Ep 01
              </span>
            </button>
          )}

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
      </div>

      {/* SECTION 1: 4-PARAGRAPH BALANCED ARCHITECTURE (STRICT ONE-LINERS) */}
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
            4-Paragraph Discussion with Opinion Architecture (One-Liner Revision)
          </h3>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {/* Intro */}
          <div style={{ background: "#faf5ff", border: "1px solid #e9d5ff", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#9333ea", color: "#ffffff", padding: "2px 7px", borderRadius: "4px" }}>
                1. INTRO
              </span>
              <strong style={{ fontSize: "0.86rem", color: "#6b21a8" }}>Paraphrase Question + Balanced Thesis Statement &amp; Opinion</strong>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "#3b0764", lineHeight: 1.45 }}>
              Paraphrase car-free days vs alternative measures + introduce temporary relief/awareness vs systemic solutions, giving clear personal opinion.
            </p>
          </div>

          {/* Body 1 */}
          <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#2563eb", color: "#ffffff", padding: "2px 7px", borderRadius: "4px" }}>
                2. BODY PARA 1 (VIEW 1: CAR-FREE DAYS)
              </span>
              <strong style={{ fontSize: "0.86rem", color: "#1d4ed8" }}>Immediate Exhaust Reduction &amp; Civic Environmental Awareness</strong>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "#1e3a8a", lineHeight: 1.45 }}>
              <strong>Point:</strong> Restricting private cars instantly purges toxic tailpipe emissions → <strong>Evidence:</strong> Paris/Bogota car-free days record 30–50% drops in nitrogen dioxide → <strong>Example:</strong> Pedestrianised avenues foster active cycling/walking habits.
            </p>
          </div>

          {/* Body 2 */}
          <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#ea580c", color: "#ffffff", padding: "2px 7px", borderRadius: "4px" }}>
                3. BODY PARA 2 (VIEW 2 &amp; OPINION: SYSTEMIC ALTERNATIVES)
              </span>
              <strong style={{ fontSize: "0.86rem", color: "#c2410c" }}>Electrified Mass Transit, Economic Deterrents &amp; Industrial Caps</strong>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "#7c2d12", lineHeight: 1.45 }}>
              <strong>Point:</strong> Car-free days are transient with next-day emission rebounds → <strong>Evidence:</strong> Electric transit networks &amp; congestion charges provide continuous deterrence → <strong>Example:</strong> Tokyo/Zurich electric rail and London's ULEZ 46% drop.
            </p>
          </div>

          {/* Conclusion */}
          <div style={{ background: "#f8fafc", border: "1px solid #cbd5e1", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#0f172a", color: "#ffffff", padding: "2px 7px", borderRadius: "4px" }}>
                4. CONCLUSION
              </span>
              <strong style={{ fontSize: "0.86rem", color: "#0f172a" }}>Sum-Up Both Views + Re-affirm Clear Personal Opinion</strong>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "#1e293b", lineHeight: 1.45 }}>
              Concede that car-free days offer valuable short-term awareness and exhaust relief, but firmly reaffirm that long-term efficacy requires permanent clean transit and strict regulations.
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
              rule: "Equal, nuanced evaluation of both perspectives with an unambiguous, consistently maintained personal opinion throughout."
            },
            {
              code: "CC",
              title: "Coherence & Cohesion",
              color: "#16a34a",
              bg: "#f0fdf4",
              rule: "Flawless discourse progression: 'It is often argued... While... On the one hand... On the other hand... In conclusion...'."
            },
            {
              code: "LR",
              title: "Lexical Resource",
              color: "#9333ea",
              bg: "#faf5ff",
              rule: "Authentic Band 9 mobility & environmental lexis: 'transient', 'pedestrianise', 'mitigate', 'infrastructure', 'subsidise', 'stringent regulatory standards'."
            },
            {
              code: "GRA",
              title: "Grammatical Accuracy",
              color: "#d97706",
              bg: "#fffbeb",
              rule: "Sophisticated concessive and compound-complex structures ('While temporary vehicle bans can foster...', 'Because vehicle bans are transient...') with flawless syntax."
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
              Complete Band 9 Model Essay (335 Words • 4-Paragraph Discussion with Opinion Architecture)
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
              <strong>1. Intro (Paraphrase + Balanced Thesis Statement &amp; Opinion):</strong> It is often argued that designating car-free days serves as an effective strategy to combat urban air pollution, whereas others contend that more impactful alternatives exist. While temporary vehicle bans can foster environmental awareness and offer immediate short-term relief from exhaust emissions, I believe that systemic measures, such as expanding green public transit and enforcing strict industrial regulations, represent far more effective long-term solutions.
            </p>
            <p style={{ margin: 0 }}>
              <strong>2. Body Para 1 (View 1: Car-Free Days Are Effective — Immediate Relief &amp; Civic Awareness):</strong> On the one hand, proponents of car-free days highlight their immediate environmental and civic benefits. Restricting private vehicular access to city centers, even for a single day, produces a dramatic and measurable reduction in toxic tailpipe emissions, such as nitrogen dioxide and fine particulate matter. In major metropolises like Paris and Bogota, annual car-free events have demonstrated sharp, observable drops in atmospheric pollutants, affording urban residents cleaner air and quieter streets. Furthermore, such initiatives serve a vital psychological function by fostering public awareness regarding automobile dependency. When urbanites experience pedestrianised boulevards firsthand, they are encouraged to consider active transportation modes like cycling and walking, which can stimulate long-term behavioural changes toward sustainable living.
            </p>
            <p style={{ margin: 0 }}>
              <strong>3. Body Para 2 (View 2 &amp; Opinion: Alternative Measures Are More Effective — Transit &amp; Regulations):</strong> On the other hand, critics argue that car-free days are merely symbolic and that alternative structural measures possess greater long-term efficacy. Because vehicle bans are transient, traffic congestion and emissions inevitably rebound the very next day, failing to deliver permanent ecological improvement. Instead, the most impactful way to curb air pollution is by developing comprehensive, affordable public transit infrastructure. When municipal governments invest heavily in electrified bus fleets and extensive underground metro networks, commuters are provided with viable daily alternatives to private car ownership. Additionally, governments can implement continuous economic deterrents, such as congestion charges and low-emission zones, alongside stringent regulatory standards on industrial output and fossil-fuel vehicles. These permanent policies address the root causes of pollution continuously rather than intermittently.
            </p>
            <p style={{ margin: 0 }}>
              <strong>4. Conclusion (Sum-Up Both Views + Re-affirm Clear Personal Opinion):</strong> In conclusion, while car-free days provide valuable short-term benefits by temporarily reducing vehicular exhaust and encouraging public mindfulness, they are fundamentally insufficient as a standalone policy. In my view, achieving lasting air quality improvements requires permanent systemic solutions, primarily heavy investment in zero-emission public transit networks and the rigorous enforcement of stringent vehicle emission standards.
            </p>
          </div>
        )}
      </div>

      {/* SECTION 4: ENGLISH NUANCE LAB EXTENSION LAUNCHPAD */}
      {onNavigateToNuanceLab && (
        <div
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
            border: "1.5px solid var(--border-subtle)",
            borderRadius: "18px",
            padding: "20px 24px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
            marginTop: "14px"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", flexWrap: "wrap", gap: "10px" }}>
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", margin: "0 0 4px" }}>
                Specialist Modules &amp; Vocabulary Series
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#64748b", margin: 0 }}>
                Explore dedicated teaching modules for subtle lexical distinctions and confusing prepositions.
              </p>
            </div>
            <span style={{ fontSize: "0.76rem", fontWeight: 800, background: "#e0e7ff", color: "#3730a3", padding: "4px 10px", borderRadius: "8px" }}>
              Step 9 Teaching Extension
            </span>
          </div>

          <div
            onClick={onNavigateToNuanceLab}
            style={{
              background: "linear-gradient(135deg, #f8fafc, #eff6ff)",
              border: "1.5px solid #bfdbfe",
              borderRadius: "16px",
              padding: "20px 24px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              boxShadow: "0 2px 10px rgba(37, 99, 235, 0.06)",
              transition: "all 0.2s ease"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Sparkles size={20} color="#2563eb" />
                </div>
                <div>
                  <strong style={{ fontSize: "1.05rem", color: "#0f172a" }}>English Nuance Lab (Words Often Misunderstood)</strong>
                  <div style={{ fontSize: "0.78rem", color: "#64748b" }}>Complete 5-Episode Series • Ep 01 to Ep 05 • Affect / Effect • Comprise / Compose • Specially / Especially</div>
                </div>
              </div>
              <span style={{ fontSize: "0.74rem", background: "#dbeafe", color: "#1e40af", fontWeight: 750, padding: "3px 10px", borderRadius: "6px", border: "1px solid #bfdbfe" }}>
                5 Episodes Active
              </span>
            </div>
            <p style={{ fontSize: "0.86rem", color: "#475569", margin: "4px 0 0", lineHeight: 1.5 }}>
              Interactive SmartBoard lesson: Master classic vocabulary traps including Prepositions (Below/Under), Transitive Verbs (Rise/Raise), Influence (Affect/Effect), Part-Whole (Comprise/Compose), and Custom Purpose (Specially/Especially).
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#2563eb", fontSize: "0.88rem", fontWeight: 750, marginTop: "6px" }}>
              <span>Launch Nuance Lab Page</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
