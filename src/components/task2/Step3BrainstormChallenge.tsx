import React, { useState } from "react";
import {
  Brain,
  Check,
  ChevronLeft,
  ChevronRight,
  Eye,
  Lightbulb,
  RotateCcw,
  Target,
} from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";

type CardSide = 0 | 1 | 2;

export const Step3BrainstormChallengeT2: React.FC = () => {
  const [active, setActive] = useState(0);

  /*
   * 0 = Question
   * 1 = Thinking Lens
   * 2 = One Possible Developable Idea
   */
  const [sides, setSides] = useState<CardSide[]>(
    Array(TASK2_DATA.brainstormCards.length).fill(0)
  );

  const card = TASK2_DATA.brainstormCards[active];
  const currentSide = sides[active];

  /*
   * A card is considered fully explored only after the student
   * has reached Side 3 and seen the idea.
   */
  const exploredCount = sides.filter((side) => side === 2).length;

  const moveToNextSide = () => {
    setSides((previous) =>
      previous.map((side, index) => {
        if (index !== active) {
          return side;
        }

        if (side === 0) {
          return 1;
        }

        if (side === 1) {
          return 2;
        }

        return 0;
      })
    );
  };

  const reset = () => {
    setSides(Array(TASK2_DATA.brainstormCards.length).fill(0));
    setActive(0);
  };

  const goPrevious = () => {
    setActive((previous) => Math.max(0, previous - 1));
  };

  const goNext = () => {
    setActive((previous) =>
      Math.min(TASK2_DATA.brainstormCards.length - 1, previous + 1)
    );
  };

  const selectCard = (index: number) => {
    setActive(index);
  };

  const getActionText = () => {
    if (currentSide === 0) {
      return "Reveal Thinking Lens";
    }

    if (currentSide === 1) {
      return "Reveal Possible Idea";
    }

    return "Back to Question";
  };

  const getCurrentLabel = () => {
    if (currentSide === 0) {
      return "Question";
    }

    if (currentSide === 1) {
      return "Thinking Lens";
    }

    return "Possible Idea";
  };

  return (
    <div className="stage-card-wrapper">
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          alignItems: "flex-start",
        }}
      >
        <div>
          <span
            className="apple-badge accent"
            style={{ marginBottom: "8px" }}
          >
            Step 03 / 09 • Guided Brainstorm Challenge
          </span>

          <h2 className="stage-title">Think First. Reveal Later.</h2>

          <p className="stage-subtitle">
            Students generate their own ideas first, use the thinking lens to
            refine their reasoning, and only then see one possible developable
            IELTS idea.
          </p>
        </div>

        <button
          onClick={reset}
          className="apple-touch-btn secondary"
          style={{
            minHeight: "44px",
            gap: "7px",
            fontSize: "0.9rem",
          }}
        >
          <RotateCcw size={16} />
          Reset
        </button>
      </div>

      {/* RULE BAR */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "var(--slate-50)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "16px",
          padding: "12px 16px",
          margin: "8px 0 18px",
          gap: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "9px",
            color: "var(--slate-700)",
          }}
        >
          <Brain size={18} />

          <strong>Rule:</strong>

          <span>
            Answer aloud first → use the lens → reveal the possible idea last.
          </span>
        </div>

        <span className="apple-badge success">
          {exploredCount} / {TASK2_DATA.brainstormCards.length} explored
        </span>
      </div>

      {/* MAIN GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 280px",
          gap: "24px",
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* CARD AREA */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
          }}
        >
          {/* THREE-STATE CARD */}
          <div
            style={{
              flex: 1,
              minHeight: "390px",
              perspective: "1400px",
            }}
          >
            <div
              role="button"
              tabIndex={0}
              aria-label={`Brainstorm card ${active + 1
                }. Current side: ${getCurrentLabel()}`}
              onClick={moveToNextSide}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  moveToNextSide();
                }
              }}
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                minHeight: "390px",
                cursor: "pointer",
                outline: "none",
              }}
            >
              {/* =====================================================
                  SIDE 1 — QUESTION
                  ===================================================== */}
              <BrainstormCardFace
                visible={currentSide === 0}
                background="var(--slate-900)"
                color="#fff"
                zIndex={currentSide === 0 ? 3 : 1}
                animationDirection="forward"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                    padding: "34px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "20px",
                      color: "#cbd5e1",
                    }}
                  >
                    <Lightbulb size={24} />

                    <span
                      style={{
                        fontWeight: 700,
                        letterSpacing: "0.02em",
                      }}
                    >
                      Question {active + 1}
                    </span>

                    <span
                      style={{
                        marginLeft: "auto",
                        padding: "5px 10px",
                        borderRadius: "999px",
                        background: "rgba(255,255,255,0.08)",
                        color: "#94a3b8",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                      }}
                    >
                      1 / 3
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "clamp(1.45rem, 2.4vw, 2.2rem)",
                      lineHeight: 1.3,
                      maxWidth: "900px",
                    }}
                  >
                    {card.question}
                  </h3>

                  <p
                    style={{
                      marginTop: "26px",
                      color: "#94a3b8",
                      fontSize: "0.9rem",
                    }}
                  >
                    Think aloud → build your own answer → then flip.
                  </p>
                </div>
              </BrainstormCardFace>

              {/* =====================================================
                  SIDE 2 — THINKING LENS
                  ===================================================== */}
              <BrainstormCardFace
                visible={currentSide === 1}
                background="#ffffff"
                color="var(--slate-900)"
                zIndex={currentSide === 1 ? 3 : 1}
                animationDirection="forward"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                    padding: "34px",
                  }}
                >
                  <span
                    className="apple-badge success"
                    style={{
                      alignSelf: "flex-start",
                      marginBottom: "18px",
                    }}
                  >
                    <Check size={14} />
                    Thinking Lens • 2 / 3
                  </span>

                  <h3
                    style={{
                      fontSize: "clamp(1.2rem, 2vw, 1.55rem)",
                      lineHeight: 1.45,
                      marginBottom: "20px",
                    }}
                  >
                    {card.thinkingLens}
                  </h3>

                  <div
                    style={{
                      background: "var(--slate-50)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "16px",
                      padding: "18px",
                      color: "var(--slate-700)",
                      lineHeight: 1.55,
                    }}
                  >
                    <strong>Self-check:</strong> {card.selfCheck}
                  </div>

                  <div
                    style={{
                      marginTop: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "var(--slate-400)",
                      fontSize: "0.82rem",
                    }}
                  >
                    <Target size={15} />

                    <span>
                      Do not look for the model idea yet. Think again.
                    </span>
                  </div>
                </div>
              </BrainstormCardFace>

              {/* =====================================================
                  SIDE 3 — ONE POSSIBLE DEVELOPABLE IDEA
                  ===================================================== */}
              <BrainstormCardFace
                visible={currentSide === 2}
                background="var(--slate-900)"
                color="#ffffff"
                zIndex={currentSide === 2 ? 3 : 1}
                animationDirection="forward"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                    padding: "34px",
                  }}
                >
                  <span
                    className="apple-badge"
                    style={{
                      alignSelf: "flex-start",
                      marginBottom: "18px",
                      background: "#dcfce7",
                      color: "#15803d",
                    }}
                  >
                    <Check size={14} />
                    One Possible Developable Idea • 3 / 3
                  </span>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "18px",
                      color: "#cbd5e1",
                    }}
                  >
                    <Target size={24} />

                    <span
                      style={{
                        fontWeight: 700,
                        letterSpacing: "0.02em",
                      }}
                    >
                      One strong direction
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "clamp(1.3rem, 2.2vw, 2rem)",
                      lineHeight: 1.4,
                      maxWidth: "900px",
                    }}
                  >
                    {card.idea}
                  </h3>

                  <div
                    style={{
                      marginTop: "24px",
                      padding: "16px 18px",
                      borderRadius: "14px",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#cbd5e1",
                      lineHeight: 1.5,
                      fontSize: "0.9rem",
                    }}
                  >
                    <strong>Compare:</strong> Was your original idea similar,
                    different, or even better?
                  </div>

                  <p
                    style={{
                      marginTop: "18px",
                      color: "#94a3b8",
                      fontSize: "0.82rem",
                    }}
                  >
                    Tap to return to the question.
                  </p>
                </div>
              </BrainstormCardFace>
            </div>
          </div>

          {/* NAVIGATION */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              marginTop: "16px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={goPrevious}
              disabled={active === 0}
              className="apple-touch-btn secondary"
              style={{
                minHeight: "46px",
                opacity: active === 0 ? 0.4 : 1,
              }}
            >
              <ChevronLeft size={19} />
              Previous
            </button>

            <button
              onClick={moveToNextSide}
              className="apple-touch-btn primary"
              style={{
                minHeight: "46px",
                gap: "7px",
              }}
            >
              <Eye size={18} />
              {getActionText()}
            </button>

            <button
              onClick={goNext}
              disabled={
                active === TASK2_DATA.brainstormCards.length - 1
              }
              className="apple-touch-btn secondary"
              style={{
                minHeight: "46px",
                opacity:
                  active === TASK2_DATA.brainstormCards.length - 1
                    ? 0.4
                    : 1,
              }}
            >
              Next
              <ChevronRight size={19} />
            </button>
          </div>

          {/* THREE-STAGE INDICATOR */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              marginTop: "12px",
              color: "var(--slate-500)",
              fontSize: "0.78rem",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontWeight: currentSide === 0 ? 700 : 500,
                color:
                  currentSide === 0
                    ? "var(--slate-900)"
                    : "var(--slate-400)",
              }}
            >
              1. Question
            </span>

            <span>→</span>

            <span
              style={{
                fontWeight: currentSide === 1 ? 700 : 500,
                color:
                  currentSide === 1
                    ? "var(--slate-900)"
                    : "var(--slate-400)",
              }}
            >
              2. Thinking Lens
            </span>

            <span>→</span>

            <span
              style={{
                fontWeight: currentSide === 2 ? 700 : 500,
                color:
                  currentSide === 2
                    ? "var(--slate-900)"
                    : "var(--slate-400)",
              }}
            >
              3. Possible Idea
            </span>
          </div>
        </div>

        {/* ==========================================================
            CHALLENGE MAP
            ========================================================== */}
        <aside
          style={{
            background: "var(--slate-50)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "20px",
            padding: "18px",
            overflowY: "auto",
          }}
        >
          <h4
            style={{
              fontSize: "1rem",
              marginBottom: "12px",
            }}
          >
            Challenge Map
          </h4>

          <p
            style={{
              fontSize: "0.82rem",
              color: "var(--slate-500)",
              lineHeight: 1.45,
              marginBottom: "14px",
            }}
          >
            Each challenge moves through three stages: think independently →
            refine your reasoning → compare with one possible developable idea.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {TASK2_DATA.brainstormCards.map((item, index) => {
              const itemSide = sides[index];

              const fullyExplored = itemSide === 2;
              const lensReached = itemSide === 1;

              return (
                <button
                  key={item.question}
                  onClick={() => selectCard(index)}
                  style={{
                    textAlign: "left",
                    padding: "11px 12px",
                    borderRadius: "12px",
                    border:
                      index === active
                        ? "1.5px solid var(--slate-900)"
                        : "1px solid var(--border-subtle)",
                    background:
                      index === active ? "#fff" : "transparent",
                    color: "var(--slate-700)",
                    fontWeight: index === active ? 700 : 550,
                    fontSize: "0.82rem",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      width: "23px",
                      height: "23px",
                      borderRadius: "8px",
                      alignItems: "center",
                      justifyContent: "center",
                      background: fullyExplored
                        ? "#dcfce7"
                        : lensReached
                          ? "#fef3c7"
                          : "var(--slate-200)",
                      color: fullyExplored
                        ? "#15803d"
                        : lensReached
                          ? "#92400e"
                          : "var(--slate-700)",
                      marginRight: "8px",
                      flexShrink: 0,
                    }}
                  >
                    {fullyExplored ? (
                      <Check size={14} />
                    ) : (
                      index + 1
                    )}
                  </span>

                  {item.question}
                </button>
              );
            })}
          </div>
        </aside>
      </div>
    </div>
  );
};

/* ================================================================
   CARD FACE COMPONENT

   This deliberately uses separate visible states rather than
   trying to make 0°, 180° and 360° into three physical faces.

   360° is visually identical to 0°, which was the problem in the
   previous implementation.

   Each state therefore owns its own face and uses a controlled
   3D flip animation when becoming visible.
   ================================================================ */

interface BrainstormCardFaceProps {
  visible: boolean;
  background: string;
  color: string;
  zIndex: number;
  animationDirection: "forward";
  children: React.ReactNode;
}

const BrainstormCardFace: React.FC<BrainstormCardFaceProps> = ({
  visible,
  background,
  color,
  zIndex,
  children,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        minHeight: "390px",
        background,
        color,
        border:
          background === "#ffffff"
            ? "1.5px solid var(--border-subtle)"
            : "none",
        borderRadius: "24px",
        boxShadow: "var(--shadow-lg)",
        overflow: "hidden",
        zIndex,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible
          ? "perspective(1400px) rotateY(0deg) scale(1)"
          : "perspective(1400px) rotateY(-90deg) scale(0.97)",
        transformOrigin: "center center",
        transition:
          "opacity 0.18s ease, transform 0.42s cubic-bezier(.2,.8,.2,1)",
      }}
    >
      {children}
    </div>
  );
};