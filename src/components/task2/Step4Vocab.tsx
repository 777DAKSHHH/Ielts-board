import React, { useState } from "react";
import {
  Globe,
  BookOpen,
  Compass,
  Sparkles,
  Volume2,
  Copy,
  Check,
  CheckCircle2,
  AlertTriangle,
  Layers
} from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";
import { VocabCard } from "../common/VocabCard";

interface Step4VocabProps {
  onSpeak: (text: string) => void;
  accent: "en-GB" | "en-US";
  setAccent: (accent: "en-GB" | "en-US") => void;
}

type TabType = "collocations" | "linkers" | "fluid";

export const Step4VocabT2: React.FC<Step4VocabProps> = ({ onSpeak, accent, setAccent }) => {
  const [activeTab, setActiveTab] = useState<TabType>("collocations");
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [collocSubTab, setCollocSubTab] = useState<"vocab" | "expressions">("vocab");

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => {
      setCopiedText(null);
    }, 2000);
  };

  const strategicLinkers = TASK2_DATA.strategicLinkers ?? [];
  const fluidVocab = TASK2_DATA.fluidVocab ?? [];

  return (
    <div className="stage-card-wrapper">
      {/* Top Header Bar */}
      <div
        style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: "14px",
          flexWrap: "wrap",
          gap: "12px"
        }}
      >
        <div>
          <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
            Step 04 / 09 • Lexical Resource &amp; Cohesion
          </span>
          <h2 className="stage-title">Academic Power Expressions &amp; Fluid Cohesion</h2>
          <p className="stage-subtitle" style={{ marginBottom: 0 }}>
            Master collocations, deploy discourse linkers with exact paragraph placement, and integrate Band 9 vocabulary that dissolves like sugar in water.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Accent Switcher */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--slate-100)",
              padding: "6px 12px",
              borderRadius: "12px"
            }}
          >
            <Globe size={16} color="var(--slate-600)" />
            <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--slate-600)" }}>
              Accent:
            </span>
            {(["en-GB", "en-US"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setAccent(v)}
                style={{
                  padding: "4px 10px",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  background: accent === v ? "#fff" : "transparent",
                  color: accent === v ? "var(--slate-900)" : "var(--slate-500)",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: accent === v ? "0 1px 3px rgba(0,0,0,0.08)" : "none"
                }}
              >
                {v === "en-GB" ? "UK" : "US"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Segmented Control Tabs */}
      <div
        style={{
          flexShrink: 0,
          display: "flex",
          gap: "8px",
          background: "var(--slate-100)",
          padding: "5px",
          borderRadius: "14px",
          marginBottom: "16px",
          overflowX: "auto"
        }}
      >
        <button
          onClick={() => setActiveTab("collocations")}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "10px 16px",
            borderRadius: "10px",
            border: "none",
            background: activeTab === "collocations" ? "#fff" : "transparent",
            color: activeTab === "collocations" ? "var(--apple-blue)" : "var(--slate-600)",
            fontWeight: 750,
            fontSize: "0.92rem",
            cursor: "pointer",
            boxShadow: activeTab === "collocations" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
            transition: "all 0.2s ease",
            whiteSpace: "nowrap"
          }}
        >
          <BookOpen size={17} />
          <span>Public Health Collocations ({TASK2_DATA.vocabList.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("linkers")}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "10px 16px",
            borderRadius: "10px",
            border: "none",
            background: activeTab === "linkers" ? "#fff" : "transparent",
            color: activeTab === "linkers" ? "var(--apple-blue)" : "var(--slate-600)",
            fontWeight: 750,
            fontSize: "0.92rem",
            cursor: "pointer",
            boxShadow: activeTab === "linkers" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
            transition: "all 0.2s ease",
            whiteSpace: "nowrap"
          }}
        >
          <Compass size={17} />
          <span>Strategic Linkers &amp; Where to Use ({strategicLinkers.length} Zones)</span>
        </button>

        <button
          onClick={() => setActiveTab("fluid")}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "10px 16px",
            borderRadius: "10px",
            border: "none",
            background: activeTab === "fluid" ? "#fff" : "transparent",
            color: activeTab === "fluid" ? "var(--apple-blue)" : "var(--slate-600)",
            fontWeight: 750,
            fontSize: "0.92rem",
            cursor: "pointer",
            boxShadow: activeTab === "fluid" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
            transition: "all 0.2s ease",
            whiteSpace: "nowrap"
          }}
        >
          <Sparkles size={17} color={activeTab === "fluid" ? "var(--apple-blue)" : "#9333ea"} />
          <span>Fluid Lexicon ("Sugar in Water") ({fluidVocab.length})</span>
        </button>
      </div>

      {/* TAB 1: COLLOCATIONS & POWER EXPRESSIONS */}
      {activeTab === "collocations" && (
        <div style={{ flex: 1, minHeight: 0, overflowY: "auto", paddingRight: "4px" }}>
          {/* Subtoggle between Vocab Cards and Power Expressions */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "16px"
            }}
          >
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => setCollocSubTab("vocab")}
                style={{
                  padding: "6px 14px",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  border: "1.5px solid var(--border-subtle)",
                  background: collocSubTab === "vocab" ? "var(--apple-blue)" : "#fff",
                  color: collocSubTab === "vocab" ? "#fff" : "var(--slate-700)",
                  cursor: "pointer"
                }}
              >
                Core Collocations ({TASK2_DATA.vocabList.length})
              </button>
              <button
                onClick={() => setCollocSubTab("expressions")}
                style={{
                  padding: "6px 14px",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  border: "1.5px solid var(--border-subtle)",
                  background: collocSubTab === "expressions" ? "var(--apple-blue)" : "#fff",
                  color: collocSubTab === "expressions" ? "#fff" : "var(--slate-700)",
                  cursor: "pointer"
                }}
              >
                Academic Power Collocations ({TASK2_DATA.powerExpressions.length})
              </button>
            </div>
            <span style={{ fontSize: "0.82rem", color: "var(--slate-500)", fontStyle: "italic" }}>
              Tap any phrase to listen with high-fidelity speech synthesis
            </span>
          </div>

          {collocSubTab === "vocab" ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "18px"
              }}
            >
              {TASK2_DATA.vocabList.map((vocab, index) => (
                <VocabCard key={vocab.word} vocab={vocab} onSpeak={onSpeak} index={index} />
              ))}
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px"
              }}
            >
              {TASK2_DATA.powerExpressions.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#fff",
                    border: "1.5px solid var(--border-subtle)",
                    borderRadius: "16px",
                    padding: "18px 20px",
                    boxShadow: "var(--shadow-sm)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span className="apple-badge neutral" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>
                      0{idx + 1}
                    </span>
                    <button
                      onClick={() => onSpeak(item.expression)}
                      className="apple-touch-btn secondary"
                      style={{ minHeight: "32px", width: "32px", padding: 0, borderRadius: "50%" }}
                      title="Listen"
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--slate-900)", lineHeight: 1.35 }}>
                    "{item.expression}"
                  </h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--slate-600)", lineHeight: 1.45, margin: 0 }}>
                    <strong>Function:</strong> {item.meaning}
                  </p>
                  <div
                    style={{
                      background: "var(--slate-50)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "10px",
                      padding: "10px 12px",
                      fontSize: "0.88rem",
                      color: "var(--slate-800)",
                      fontStyle: "italic",
                      lineHeight: 1.45,
                      marginTop: "4px"
                    }}
                  >
                    {item.example}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: DISCOURSE LINKERS & WHERE TO USE THEM */}
      {activeTab === "linkers" && (
        <div style={{ flex: 1, minHeight: 0, overflowY: "auto", paddingRight: "4px", display: "flex", flexDirection: "column", gap: "18px" }}>
          {/* Strategic Guidance Banner */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(147, 51, 234, 0.08) 100%)",
              border: "1.5px solid rgba(37, 99, 235, 0.2)",
              borderRadius: "16px",
              padding: "16px 20px",
              display: "flex",
              alignItems: "flex-start",
              gap: "14px"
            }}
          >
            <Compass size={22} color="var(--apple-blue)" style={{ flexShrink: 0, marginTop: "2px" }} />
            <div>
              <h4 style={{ fontSize: "0.98rem", fontWeight: 750, color: "var(--slate-900)", margin: "0 0 4px" }}>
                Strategic Linker Placement Principle
              </h4>
              <p style={{ fontSize: "0.88rem", color: "var(--slate-700)", lineHeight: 1.5, margin: 0 }}>
                Position discourse markers purposefully across the paragraph structure to open core arguments, unpack causal logic, bridge from problem to solution, and ground ideas with verified precedents.
              </p>
            </div>
          </div>

          {/* 5 Strategic Zones */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {strategicLinkers.map((zoneGroup, zoneIdx) => (
              <div
                key={zoneIdx}
                style={{
                  background: "#fff",
                  border: "1.5px solid var(--border-subtle)",
                  borderRadius: "18px",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-sm)"
                }}
              >
                {/* Zone Header */}
                <div
                  style={{
                    background: "var(--slate-50)",
                    borderBottom: "1.5px solid var(--border-subtle)",
                    padding: "14px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "8px"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Layers size={18} color="var(--apple-blue)" />
                    <h4 style={{ fontSize: "1.02rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                      {zoneGroup.zone}
                    </h4>
                  </div>
                  <span className="apple-badge accent" style={{ fontSize: "0.78rem" }}>
                    {zoneGroup.badge}
                  </span>
                </div>

                {/* Where Exactly to Use Placement Rule */}
                <div
                  style={{
                    background: "#f0fdf4",
                    borderBottom: "1px solid #bbf7d0",
                    padding: "10px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px"
                  }}
                >
                  <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0 }} />
                  <p style={{ margin: 0, fontSize: "0.86rem", color: "#166534", lineHeight: 1.45 }}>
                    <strong>Where Exactly to Use:</strong> {zoneGroup.placementRule}
                  </p>
                </div>

                {/* Linker Items */}
                <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
                  {zoneGroup.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      style={{
                        background: "var(--slate-50)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "12px",
                        padding: "14px 16px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px"
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "10px"
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.96rem",
                            fontWeight: 750,
                            color: "var(--apple-blue)",
                            fontFamily: "var(--font-mono)"
                          }}
                        >
                          "{item.phrase}"
                        </span>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <button
                            onClick={() => onSpeak(item.phrase)}
                            className="apple-touch-btn secondary"
                            style={{ minHeight: "30px", width: "30px", padding: 0, borderRadius: "50%" }}
                            title="Listen to phrase"
                          >
                            <Volume2 size={15} />
                          </button>
                          <button
                            onClick={() => handleCopy(item.phrase)}
                            className="apple-touch-btn secondary"
                            style={{ minHeight: "30px", padding: "0 10px", fontSize: "0.78rem", gap: "4px" }}
                            title="Copy linker phrase"
                          >
                            {copiedText === item.phrase ? (
                              <>
                                <Check size={14} color="#16a34a" />
                                <span style={{ color: "#16a34a" }}>Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy size={14} />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      <p style={{ margin: 0, fontSize: "0.86rem", color: "var(--slate-600)", lineHeight: 1.4 }}>
                        <strong>Strategic Function:</strong> {item.functionDesc}
                      </p>

                      <div
                        style={{
                          background: "#fff",
                          border: "1px solid var(--border-subtle)",
                          borderRadius: "8px",
                          padding: "9px 12px",
                          fontSize: "0.88rem",
                          color: "var(--slate-800)",
                          fontStyle: "italic",
                          lineHeight: 1.45
                        }}
                      >
                        <strong>Exam Application:</strong> “{item.example}”
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: FLUID BAND 9 LEXICAL PRECISION ("SUGAR IN WATER") */}
      {activeTab === "fluid" && (
        <div style={{ flex: 1, minHeight: 0, overflowY: "auto", paddingRight: "4px", display: "flex", flexDirection: "column", gap: "18px" }}>
          {/* Philosophy Banner */}
          <div
            style={{
              background: "linear-gradient(135deg, #fdf4ff 0%, #eff6ff 100%)",
              border: "1.5px solid rgba(147, 51, 234, 0.25)",
              borderRadius: "18px",
              padding: "20px 24px",
              display: "flex",
              alignItems: "flex-start",
              gap: "16px"
            }}
          >
            <Sparkles size={24} color="#9333ea" style={{ flexShrink: 0, marginTop: "2px" }} />
            <div>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: "0 0 6px" }}>
                Fluid Lexical Precision ("Sugar Dissolved in Water")
              </h4>
              <p style={{ fontSize: "0.92rem", color: "var(--slate-700)", lineHeight: 1.55, margin: 0 }}>
                High-level vocabulary must never feel like heavy boulders dropped awkwardly into a sentence. Like <strong>sugar completely dissolved in a glass of water</strong>, words such as <em>myopic</em>, <em>epitome</em>, <em>pervasive</em>, and <em>mitigate</em> should enrich the meaning and elevate the analytical register effortlessly—without sounding mechanical, pretentiously archaic, or robotic.
              </p>
            </div>
          </div>

          {/* Cards for each fluid word */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px" }}>
            {fluidVocab.map((vocabItem, vIdx) => (
              <div
                key={vIdx}
                style={{
                  background: "#fff",
                  border: "1.5px solid var(--border-subtle)",
                  borderRadius: "18px",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-sm)"
                }}
              >
                {/* Word Header */}
                <div
                  style={{
                    background: "var(--slate-50)",
                    borderBottom: "1.5px solid var(--border-subtle)",
                    padding: "16px 22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "10px"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8rem",
                        color: "var(--slate-400)",
                        fontWeight: 700
                      }}
                    >
                      0{vIdx + 1}
                    </span>
                    <h3
                      style={{
                        fontSize: "1.32rem",
                        fontWeight: 800,
                        color: "var(--slate-900)",
                        margin: 0,
                        letterSpacing: "-0.01em"
                      }}
                    >
                      {vocabItem.word}
                    </h3>
                    <span
                      style={{
                        background: "rgba(147, 51, 234, 0.1)",
                        color: "#7e22ce",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        padding: "2px 8px",
                        borderRadius: "6px"
                      }}
                    >
                      {vocabItem.pos}
                    </span>
                    <button
                      onClick={() => onSpeak(vocabItem.word)}
                      className="apple-touch-btn secondary"
                      style={{ minHeight: "32px", width: "32px", padding: 0, borderRadius: "50%" }}
                      title={`Listen to ${vocabItem.word}`}
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "0.82rem", color: "var(--slate-500)", fontWeight: 600 }}>
                      Natural Collocation:
                    </span>
                    <span className="apple-badge neutral" style={{ fontSize: "0.82rem", fontWeight: 700 }}>
                      {vocabItem.naturalCollocation}
                    </span>
                  </div>
                </div>

                {/* Definition */}
                <div style={{ padding: "14px 22px 10px" }}>
                  <p style={{ margin: 0, fontSize: "0.92rem", color: "var(--slate-600)", lineHeight: 1.45 }}>
                    <strong style={{ color: "var(--slate-800)" }}>Definition:</strong> {vocabItem.meaning}
                  </p>
                </div>

                {/* Comparison Grid: Dissolved in Context vs Mechanical Pitfall */}
                <div
                  style={{
                    padding: "8px 22px 18px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "14px"
                  }}
                >
                  {/* Organic Band 9 Usage */}
                  <div
                    style={{
                      background: "#f0fdf4",
                      border: "1.5px solid #86efac",
                      borderRadius: "14px",
                      padding: "14px 16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#166534" }}>
                      <CheckCircle2 size={16} color="#16a34a" />
                      <strong style={{ fontSize: "0.88rem" }}>✨ Natural Context Sentence</strong>
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.92rem",
                        color: "#14532d",
                        fontStyle: "italic",
                        lineHeight: 1.5
                      }}
                    >
                      “{vocabItem.organicExample}”
                    </p>
                    <button
                      onClick={() => onSpeak(vocabItem.organicExample)}
                      className="apple-touch-btn secondary"
                      style={{
                        alignSelf: "flex-start",
                        minHeight: "26px",
                        padding: "2px 8px",
                        fontSize: "0.75rem",
                        marginTop: "4px",
                        gap: "4px",
                        background: "#fff"
                      }}
                    >
                      <Volume2 size={13} />
                      <span>Hear Sentence</span>
                    </button>
                  </div>

                  {/* Mechanical Pitfall */}
                  <div
                    style={{
                      background: "#fef2f2",
                      border: "1.5px solid #fca5a5",
                      borderRadius: "14px",
                      padding: "14px 16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#991b1b" }}>
                      <AlertTriangle size={16} color="#dc2626" />
                      <strong style={{ fontSize: "0.88rem" }}>⚠️ Unnatural / Forced Usage</strong>
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.88rem",
                        color: "#7f1d1d",
                        lineHeight: 1.5
                      }}
                    >
                      {vocabItem.mechanicalPitfall}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
