import React from "react";
import { CheckCircle2 } from "lucide-react";

export const Step9SubmissionT2: React.FC = () => (
  <div className="stage-card-wrapper">
    {/* Stage Header */}
    <div style={{ flexShrink: 0, marginBottom: "18px" }}>
      <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
        Step 09 / 09 • Final Essay Structure &amp; Model
      </span>
      <h2 className="stage-title">Write Your Complete Cause &amp; Effect Essay</h2>
      <p className="stage-subtitle" style={{ marginBottom: 0 }}>
        Review your 4-paragraph architecture and mandatory formatting rules before writing the complete Band 9 response.
      </p>
    </div>

    {/* 3 Pillars Grid */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        flex: 1,
        minHeight: 0,
        alignItems: "stretch"
      }}
    >
      {/* Card 01: 4-Paragraph Format (Cause & Effect Architecture) */}
      <div
        style={{
          background: "#ffffff",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "18px",
          padding: "22px 24px",
          boxShadow: "var(--shadow-sm)",
          display: "flex",
          flexDirection: "column",
          gap: "14px"
        }}
      >
        <div>
          <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--apple-blue)" }}>
            4-PARAGRAPH FORMAT
          </span>
          <h3 style={{ fontSize: "1.28rem", fontWeight: 800, color: "var(--slate-900)", margin: "4px 0 0" }}>
            Direct Cause &amp; Effect Architecture
          </h3>
          <p style={{ margin: "4px 0 0", fontSize: "0.96rem", color: "var(--slate-600)" }}>
            [ Intro + Body 1 Causes + Body 2 Effects + Conclusion ]
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1, overflowY: "auto" }}>
          {/* Body 1 Box */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "12px",
              padding: "12px 14px",
              display: "flex",
              flexDirection: "column",
              gap: "6px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.82rem", fontWeight: 800, background: "#fef3c7", color: "#92400e", padding: "3px 8px", borderRadius: "6px" }}>
                BODY 1 • CAUSES
              </span>
              <strong style={{ fontSize: "1.02rem", color: "var(--slate-900)" }}>Digital Proliferation &amp; Data Leaks</strong>
            </div>
            <div style={{ fontSize: "0.95rem", color: "var(--slate-800)", lineHeight: 1.55 }}>
              • <strong>Main Reason:</strong> Ubiquitous online transactions and vulnerable corporate repositories<br />
              • <strong>Development:</strong> Infiltrators exfiltrate sensitive credentials and trade them on dark-web forums<br />
              • <strong>Example:</strong> Equifax breach compromising 147 million identities and credit files
            </div>
          </div>

          {/* Body 2 Box */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "12px",
              padding: "12px 14px",
              display: "flex",
              flexDirection: "column",
              gap: "6px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.82rem", fontWeight: 800, background: "#fee2e2", color: "#b91c1c", padding: "3px 8px", borderRadius: "6px" }}>
                BODY 2 • EFFECTS
              </span>
              <strong style={{ fontSize: "1.02rem", color: "var(--slate-900)" }}>Financial Ruin &amp; Psychological Trauma</strong>
            </div>
            <div style={{ fontSize: "0.95rem", color: "var(--slate-800)", lineHeight: 1.55 }}>
              • <strong>Main Reason:</strong> Direct account depletion, decimated credit scores, and chronic distress<br />
              • <strong>Development:</strong> Fraudulent debts freeze livelihoods; victims face arduous bureaucratic disputes<br />
              • <strong>Example:</strong> Victims denied home loans or battling credit agencies for years to clear their record
            </div>
          </div>

          {/* Task Balance Box */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "12px",
              padding: "12px 14px",
              display: "flex",
              flexDirection: "column",
              gap: "6px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.82rem", fontWeight: 800, background: "#dcfce7", color: "#166534", padding: "3px 8px", borderRadius: "6px" }}>
                TASK ACHIEVEMENT
              </span>
              <strong style={{ fontSize: "1.02rem", color: "var(--slate-900)" }}>Symmetrical 50/50 Coverage</strong>
            </div>
            <div style={{ fontSize: "0.95rem", color: "var(--slate-800)", lineHeight: 1.55 }}>
              • <strong>Causes (50%):</strong> Explaining the systemic and technological mechanisms driving fraud<br />
              • <strong>Victim Fallout (50%):</strong> Fully detailing the economic, legal, and mental ramifications
            </div>
          </div>
        </div>
      </div>

      {/* Card 02: 1 Main Reason Rule */}
      <div
        style={{
          background: "#ffffff",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "18px",
          padding: "22px 24px",
          boxShadow: "var(--shadow-sm)",
          display: "flex",
          flexDirection: "column",
          gap: "14px"
        }}
      >
        <div>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#059669" }}>
            PARAGRAPH DEPTH
          </span>
          <h3 style={{ fontSize: "1.18rem", fontWeight: 800, color: "var(--slate-900)", margin: "4px 0 0" }}>
            The 1 Main Reason Rule
          </h3>
          <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "var(--slate-500)" }}>
            [ 1 Main Reason + Supporting Reasons + Example ]
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
          {[
            {
              step: "1. Single Primary Anchor",
              desc: "Dedicate each body paragraph to 1 clear, overarching focus (Body 1: cyber infrastructure vulnerabilities; Body 2: multifaceted victim fallout). Never dump a random shopping list of points."
            },
            {
              step: "2. Causal Progression",
              desc: "Articulate the precise 'how' and 'why' progression (e.g., how credential harvesting leads to illicit loan creation, or how falsified credit logs trigger wrongful criminal liability)."
            },
            {
              step: "3. Real-World Proof",
              desc: "Provide verifiable, high-impact evidence (corporate data leaks like Equifax/Target, credit rating rejections, dark web credential auctions)."
            },
            {
              step: "4. Causal Synthesis",
              desc: "Ensure the topic sentences and conclusion mirror each other, weaving causes and effects into a coherent analytical narrative."
            }
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                background: "var(--slate-50)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "10px",
                padding: "10px 12px"
              }}
            >
              <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} />
              <div style={{ fontSize: "0.88rem", lineHeight: 1.45 }}>
                <strong style={{ color: "var(--slate-900)" }}>{item.step}:</strong>{" "}
                <span style={{ color: "var(--slate-700)" }}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Card 03: Lexical Precision & Cohesion */}
      <div
        style={{
          background: "#ffffff",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "18px",
          padding: "22px 24px",
          boxShadow: "var(--shadow-sm)",
          display: "flex",
          flexDirection: "column",
          gap: "14px"
        }}
      >
        <div>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#9333ea" }}>
            BAND 9 VOCABULARY &amp; COHESION
          </span>
          <h3 style={{ fontSize: "1.18rem", fontWeight: 800, color: "var(--slate-900)", margin: "4px 0 0" }}>
            Natural Academic Precision
          </h3>
          <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "var(--slate-500)" }}>
            Dissolved naturally like sugar in a glass of water
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
          <div
            style={{
              background: "var(--slate-50)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "10px",
              padding: "12px 14px"
            }}
          >
            <div style={{ fontSize: "0.82rem", fontWeight: 750, color: "var(--slate-500)", marginBottom: "6px" }}>
              PRECISION VOCABULARY:
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {["exfiltrate", "credential stuffing", "impersonation", "siphon", "decimate", "bureaucratic ordeal", "ubiquitous", "illicit", "rectify", "vulnerabilities"].map((w) => (
                <span
                  key={w}
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border-subtle)",
                    padding: "3px 8px",
                    borderRadius: "6px",
                    fontSize: "0.84rem",
                    fontWeight: 750,
                    color: "var(--slate-800)"
                  }}
                >
                  {w}
                </span>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "var(--slate-50)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "10px",
              padding: "12px 14px",
              fontSize: "0.86rem",
              color: "var(--slate-700)",
              lineHeight: 1.5
            }}
          >
            <strong style={{ color: "var(--slate-900)" }}>Discourse Linkers:</strong>
            <br />
            • <em>Body 1 opener:</em> “Foremost among the drivers behind the escalating incidence of identity theft is the ubiquity of...”<br />
            • <em>Body 2 opener:</em> “Turning to the ramifications, the consequences inflicted upon victims are both financially devastating and psychologically taxing...”<br />
            • <em>Example illustration:</em> “A salient illustration of this dynamic is observed when corporate databases are breached...”<br />
            • <em>Conclusion opener:</em> “In conclusion, the alarming surge in identity theft is propelled primarily by... leaving victims to endure...”
          </div>
        </div>
      </div>
    </div>
  </div>
);
