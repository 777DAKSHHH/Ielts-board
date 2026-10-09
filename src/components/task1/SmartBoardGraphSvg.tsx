import React, { useState } from "react";
import {
  RotateCcw,
  TrendingDown,
  TrendingUp,
  GitCommit,
  Layers,
  School,
  Sparkles,
  ArrowUpDown
} from "lucide-react";
import { SCHOOLS_DATA } from "../../data/task1Data";
import { SchoolData } from "../../types/task1";

export type TableHighlightMode =
  | "all"
  | "risers"
  | "decliner"
  | "stable"
  | "convergences"
  | "harble"
  | "fairfield"
  | "greystone"
  | "royston"
  | "crackend";

// Backwards-compatible alias for any code importing GraphHighlightMode
export type GraphHighlightMode = TableHighlightMode;

interface SmartBoardTableMatrixProps {
  onSelectCountry?: (countryId: string) => void;
  selectedCountryId?: string | null;
  highlightMode?: TableHighlightMode;
  onHighlightModeChange?: (mode: TableHighlightMode) => void;
  showInternalToolbar?: boolean;
  showDeepDiveCard?: boolean;
}

const FILTER_DETAILS: Record<
  TableHighlightMode,
  { label: string; icon: React.ReactNode; color: string; description: string }
> = {
  all: {
    label: "All 5 Schools",
    icon: <RotateCcw size={13} />,
    color: "var(--slate-900)",
    description:
      "Displaying all five secondary schools across the full six-year survey (1995–2000) entering higher education."
  },
  risers: {
    label: "Surging Risers (Harble & Fairfield)",
    icon: <TrendingUp size={13} />,
    color: "#059669",
    description:
      "Harble Secondary surged from 30% to 80% (vaulting from last to first), while Fairfield Girls grew from 65% to 79% to finish 2nd."
  },
  decliner: {
    label: "Sole Decliner (Greystone High)",
    icon: <TrendingDown size={13} />,
    color: "#dc2626",
    description:
      "Greystone High was the sole school to suffer an uninterrupted decline, falling 20 percentage points from 90% down to 70%."
  },
  stable: {
    label: "Stepped & Static (Royston & Crackend)",
    icon: <Layers size={13} />,
    color: "#d97706",
    description:
      "Royston Academy progressed in stepped plateaus from 50% to 60%, while Crackend Boys remained virtually static between 59% and 62%."
  },
  convergences: {
    label: "1997 & 1999 Milestones",
    icon: <GitCommit size={13} />,
    color: "#7c3aed",
    description:
      "1997: Fairfield & Greystone equalized at 75%. 1999: Royston, Harble, and Crackend all converged at an identical 60%."
  },
  harble: {
    label: "Harble Secondary",
    icon: <School size={13} />,
    color: "#059669",
    description:
      "The most dramatic climb: leaped from 30% to 80% (+50% pts, nearly tripling), vaulting from last to first place."
  },
  fairfield: {
    label: "Fairfield Girls",
    icon: <School size={13} />,
    color: "#4f46e5",
    description:
      "Strong upward climb from 65% to 79% (+14% pts), briefly leading in 1998 and rebounding from a 1999 dip to conclude 2nd."
  },
  greystone: {
    label: "Greystone High",
    icon: <School size={13} />,
    color: "#dc2626",
    description:
      "Sole downward trajectory: began with a commanding 90% lead but dropped consecutively each year to finish 3rd at 70%."
  },
  royston: {
    label: "Royston Academy",
    icon: <School size={13} />,
    color: "#d97706",
    description:
      "Stepped pattern: 50% in 1995, plateaued at 54% (1997–98), and leveled off at 60% in 1999–2000 (+10% pts net)."
  },
  crackend: {
    label: "Crackend Boys",
    icon: <School size={13} />,
    color: "#475569",
    description:
      "Remarkable stability: hovered between 59% and 62% across all 6 years, ending with a negligible 2% net increase."
  }
};

export const SmartBoardTableMatrix: React.FC<SmartBoardTableMatrixProps> = ({
  onSelectCountry,
  selectedCountryId,
  highlightMode: externalHighlightMode,
  onHighlightModeChange,
  showInternalToolbar = true,
  showDeepDiveCard = true
}) => {
  const [internalHighlightMode, setInternalHighlightMode] =
    useState<TableHighlightMode>("all");
  const [tableDisplayMode, setTableDisplayMode] = useState<"clean" | "heatmap">("heatmap");
  const [sortOrder, setSortOrder] = useState<"exam_order" | "ranked_2000" | "grouped">("exam_order");

  const rawActiveMode = externalHighlightMode ?? internalHighlightMode;
  // Map "intersections" to "convergences" for backwards compatibility
  const activeMode: TableHighlightMode =
    rawActiveMode === ("intersections" as string) ? "convergences" : rawActiveMode;

  const setHighlightMode = (mode: TableHighlightMode) => {
    if (onHighlightModeChange) {
      onHighlightModeChange(mode);
    } else {
      setInternalHighlightMode(mode);
    }
  };

  const isSchoolDimmed = (schoolId: string) => {
    if (activeMode === "all") return false;
    if (activeMode === "risers") return schoolId !== "harble" && schoolId !== "fairfield";
    if (activeMode === "decliner") return schoolId !== "greystone";
    if (activeMode === "stable") return schoolId !== "royston" && schoolId !== "crackend";
    if (activeMode === "convergences") return false;
    return activeMode !== schoolId;
  };

  const isSchoolHighlighted = (schoolId: string) => {
    if (selectedCountryId === schoolId) return true;
    if (activeMode === "all") return true;
    if (activeMode === "risers") return schoolId === "harble" || schoolId === "fairfield";
    if (activeMode === "decliner") return schoolId === "greystone";
    if (activeMode === "stable") return schoolId === "royston" || schoolId === "crackend";
    return activeMode === schoolId;
  };

  // Static immutable reference guaranteed to always have all 5 schools
  const schoolsList = SCHOOLS_DATA;

  // Sorting
  const sortedSchools: SchoolData[] = [...schoolsList].sort((a, b) => {
    if (sortOrder === "ranked_2000") {
      const a2000 = a.dataPoints.find((p) => p.year === 2000)?.value || 0;
      const b2000 = b.dataPoints.find((p) => p.year === 2000)?.value || 0;
      return b2000 - a2000;
    }
    if (sortOrder === "grouped") {
      const groupRank: Record<string, number> = { net_increase: 1, net_decrease: 2, steady: 3 };
      return (groupRank[a.group] || 4) - (groupRank[b.group] || 4);
    }
    // "exam_order" uses the original exam paper order (Royston, Greystone, Harble, Fairfield, Crackend)
    return 0;
  });

  const activeSchool =
    schoolsList.find((c) => c.id === selectedCountryId) || schoolsList[0];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100%",
        userSelect: "none",
        position: "relative",
        background: "#ffffff"
      }}
    >
      {/* Aspect Mode Quick Toolbar */}
      {showInternalToolbar && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
            padding: "10px 16px",
            background: "#f8fafc",
            borderBottom: "1.5px solid var(--border-subtle)",
            zIndex: 10
          }}
        >
          {/* Group 1: Strategic Trajectory Filters */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: "0.74rem",
                fontWeight: 800,
                color: "var(--slate-500)",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                marginRight: "2px"
              }}
            >
              Macro Focus:
            </span>
            {(
              [
                "all",
                "risers",
                "decliner",
                "stable",
                "convergences"
              ] as const
            ).map((mode) => {
              const details = FILTER_DETAILS[mode];
              const isActive = activeMode === mode;
              return (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setHighlightMode(mode)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "5px 11px",
                    borderRadius: "8px",
                    fontSize: "0.78rem",
                    fontWeight: 750,
                    border: isActive ? `1.5px solid ${details.color}` : "1.5px solid var(--border-subtle)",
                    background: isActive ? details.color : "#ffffff",
                    color: isActive ? "#ffffff" : "var(--slate-700)",
                    cursor: "pointer",
                    boxShadow: isActive ? "0 2px 6px rgba(0,0,0,0.12)" : "none",
                    transition: "all 0.15s ease"
                  }}
                >
                  {details.icon}
                  <span>{details.label}</span>
                </button>
              );
            })}
          </div>

          {/* Group 2: Table Presentation Toggles (Clean vs Heatmap) */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            {/* View Mode Toggle */}
            <div
              style={{
                display: "inline-flex",
                background: "#e2e8f0",
                borderRadius: "8px",
                padding: "2px"
              }}
            >
              <button
                type="button"
                onClick={() => setTableDisplayMode("clean")}
                style={{
                  padding: "4px 10px",
                  fontSize: "0.74rem",
                  fontWeight: 750,
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  background: tableDisplayMode === "clean" ? "#ffffff" : "transparent",
                  color: tableDisplayMode === "clean" ? "var(--slate-900)" : "var(--slate-600)",
                  boxShadow: tableDisplayMode === "clean" ? "0 1px 3px rgba(0,0,0,0.1)" : "none"
                }}
                title="Display standard clean exam table without badges"
              >
                Clean Exam Mode
              </button>
              <button
                type="button"
                onClick={() => setTableDisplayMode("heatmap")}
                style={{
                  padding: "4px 10px",
                  fontSize: "0.74rem",
                  fontWeight: 750,
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  background: tableDisplayMode === "heatmap" ? "var(--apple-blue)" : "transparent",
                  color: tableDisplayMode === "heatmap" ? "#ffffff" : "var(--slate-600)",
                  boxShadow: tableDisplayMode === "heatmap" ? "0 1px 3px rgba(0,0,0,0.1)" : "none"
                }}
                title="Display SmartBoard interactive heatmap and milestone highlights"
              >
                SmartBoard Heatmap
              </button>
            </div>

            {/* Sort Toggle */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                background: "#ffffff",
                border: "1px solid var(--border-subtle)",
                borderRadius: "8px",
                padding: "3px 8px"
              }}
            >
              <ArrowUpDown size={12} color="var(--slate-500)" />
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as any)}
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: "0.74rem",
                  fontWeight: 700,
                  color: "var(--slate-800)",
                  cursor: "pointer",
                  outline: "none"
                }}
              >
                <option value="exam_order">Exam Paper Order</option>
                <option value="ranked_2000">Ranked by 2000 (80% → 60%)</option>
                <option value="grouped">Trajectory Groups</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Main 4K Interactive Table Matrix View */}
      <div
        style={{
          flex: 1,
          width: "100%",
          padding: "16px 20px",
          overflowX: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "14px"
        }}
      >
        {/* Table Title Banner */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
            borderBottom: "1.5px solid var(--border-subtle)",
            paddingBottom: "10px"
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span className="apple-badge accent" style={{ fontSize: "0.72rem", fontWeight: 800 }}>
                IELTS Table Dataset
              </span>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-500)", fontWeight: 650 }}>
                5 Secondary Schools • 6 Annual Intervals (1995–2000) • Unit: Percentage (%)
              </span>
            </div>
            <h3
              style={{
                fontSize: "1.15rem",
                fontWeight: 800,
                color: "var(--slate-900)",
                margin: "4px 0 0"
              }}
            >
              Percentage of pupils who entered higher education from five secondary schools
            </h3>
          </div>

          <div style={{ display: "flex", gap: "6px", alignItems: "center", flexWrap: "wrap" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "0.74rem",
                fontWeight: 750,
                padding: "3px 8px",
                borderRadius: "6px",
                background: "#fef3c7",
                color: "#92400e",
                border: "1px solid #fde68a"
              }}
            >
              <span>⚡ 1997:</span> Fairfield &amp; Greystone Tie (75%)
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "0.74rem",
                fontWeight: 750,
                padding: "3px 8px",
                borderRadius: "6px",
                background: "#ede9fe",
                color: "#5b21b6",
                border: "1px solid #ddd6fe"
              }}
            >
              <span>⚡ 1999:</span> Triple Convergence at 60%
            </span>
          </div>
        </div>

        {/* The 4K SmartBoard Table */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "14px",
            border: "1.5px solid #cbd5e1",
            boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
            overflowX: "auto",
            overflowY: "visible",
            flexShrink: 0
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "center"
            }}
          >
            <thead>
              <tr style={{ background: "#0f172a", color: "#ffffff" }}>
                <th
                  style={{
                    padding: "14px 18px",
                    fontWeight: 800,
                    textAlign: "left",
                    width: "220px",
                    fontSize: "0.88rem",
                    letterSpacing: "0.04em",
                    borderRight: "1px solid #334155"
                  }}
                >
                  SECONDARY SCHOOL
                </th>
                <th style={{ padding: "14px 10px", fontWeight: 800, fontSize: "0.9rem", borderRight: "1px solid #334155" }}>
                  1995
                </th>
                <th style={{ padding: "14px 10px", fontWeight: 800, fontSize: "0.9rem", borderRight: "1px solid #334155" }}>
                  1996
                </th>
                <th style={{ padding: "14px 10px", fontWeight: 800, fontSize: "0.9rem", borderRight: "1px solid #334155" }}>
                  1997
                </th>
                <th style={{ padding: "14px 10px", fontWeight: 800, fontSize: "0.9rem", borderRight: "1px solid #334155" }}>
                  1998
                </th>
                <th style={{ padding: "14px 10px", fontWeight: 800, fontSize: "0.9rem", borderRight: "1px solid #334155" }}>
                  1999
                </th>
                <th style={{ padding: "14px 10px", fontWeight: 800, fontSize: "0.9rem", borderRight: "1px solid #334155" }}>
                  2000
                </th>
                <th
                  style={{
                    padding: "14px 14px",
                    fontWeight: 800,
                    fontSize: "0.88rem",
                    background: "#1e293b",
                    color: "#f8fafc"
                  }}
                >
                  NET CHANGE
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedSchools.map((school, rowIndex) => {
                const isSelected = selectedCountryId === school.id;
                const isDimmed = isSchoolDimmed(school.id);
                const isHighlighted = isSchoolHighlighted(school.id);

                return (
                  <tr
                    key={school.id}
                    onClick={() => onSelectCountry && onSelectCountry(school.id)}
                    style={{
                      borderBottom: rowIndex < sortedSchools.length - 1 ? "1.5px solid #e2e8f0" : "none",
                      background: isSelected
                        ? "rgba(224, 242, 254, 0.65)"
                        : isHighlighted
                        ? "#ffffff"
                        : "#f8fafc",
                      cursor: "pointer",
                      opacity: isDimmed ? 0.22 : 1,
                      transition: "all 0.15s ease"
                    }}
                  >
                    {/* School Name & Trajectory Tag */}
                    <td
                      style={{
                        padding: "13px 18px",
                        textAlign: "left",
                        fontWeight: 800,
                        borderRight: "1.5px solid #cbd5e1",
                        background: isSelected ? "rgba(224, 242, 254, 0.85)" : "#f8fafc"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span
                          style={{
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            background: school.color,
                            flexShrink: 0
                          }}
                        />
                        <div>
                          <div style={{ fontSize: "0.96rem", color: "var(--slate-900)", fontWeight: 800 }}>
                            {school.name}
                          </div>
                          <div style={{ fontSize: "0.72rem", color: "var(--slate-500)", fontWeight: 650 }}>
                            {school.badge.split("(")[0].trim()}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* 1995 */}
                    <td
                      style={{
                        padding: "12px 10px",
                        borderRight: "1px solid #e2e8f0",
                        background:
                          tableDisplayMode === "heatmap" && school.id === "greystone"
                            ? "rgba(220, 38, 38, 0.08)"
                            : undefined
                      }}
                    >
                      <div
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: 800,
                          fontVariantNumeric: "tabular-nums",
                          color:
                            tableDisplayMode === "heatmap" && school.id === "greystone"
                              ? "#dc2626"
                              : "#0f172a"
                        }}
                      >
                        {school.dataPoints.find((p) => p.year === 1995)?.value}%
                      </div>
                      {tableDisplayMode === "heatmap" && school.id === "greystone" && (
                        <span style={{ fontSize: "0.68rem", color: "#dc2626", fontWeight: 800, display: "block" }}>
                          Leader (90%)
                        </span>
                      )}
                      {tableDisplayMode === "heatmap" && school.id === "harble" && (
                        <span style={{ fontSize: "0.68rem", color: "var(--slate-500)", fontWeight: 700, display: "block" }}>
                          Lowest (30%)
                        </span>
                      )}
                    </td>

                    {/* 1996 */}
                    <td style={{ padding: "12px 10px", borderRight: "1px solid #e2e8f0" }}>
                      <div
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: 800,
                          fontVariantNumeric: "tabular-nums",
                          color: "#0f172a"
                        }}
                      >
                        {school.dataPoints.find((p) => p.year === 1996)?.value}%
                      </div>
                    </td>

                    {/* 1997 */}
                    <td
                      style={{
                        padding: "12px 10px",
                        borderRight: "1px solid #e2e8f0",
                        background:
                          tableDisplayMode === "heatmap" &&
                          (school.id === "greystone" || school.id === "fairfield")
                            ? "rgba(245, 158, 11, 0.12)"
                            : undefined
                      }}
                    >
                      <div
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: 800,
                          fontVariantNumeric: "tabular-nums",
                          color:
                            tableDisplayMode === "heatmap" &&
                            (school.id === "greystone" || school.id === "fairfield")
                              ? "#b45309"
                              : "#0f172a"
                        }}
                      >
                        {school.dataPoints.find((p) => p.year === 1997)?.value}%
                      </div>
                      {tableDisplayMode === "heatmap" &&
                        (school.id === "greystone" || school.id === "fairfield") && (
                          <span
                            style={{
                              fontSize: "0.66rem",
                              color: "#92400e",
                              fontWeight: 800,
                              background: "#fef3c7",
                              padding: "1px 5px",
                              borderRadius: "4px",
                              display: "inline-block"
                            }}
                          >
                            ⚡ 75% Tie
                          </span>
                        )}
                    </td>

                    {/* 1998 */}
                    <td style={{ padding: "12px 10px", borderRight: "1px solid #e2e8f0" }}>
                      <div
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: 800,
                          fontVariantNumeric: "tabular-nums",
                          color: "#0f172a"
                        }}
                      >
                        {school.dataPoints.find((p) => p.year === 1998)?.value}%
                      </div>
                      {tableDisplayMode === "heatmap" && school.id === "fairfield" && (
                        <span style={{ fontSize: "0.66rem", color: "#4f46e5", fontWeight: 800, display: "block" }}>
                          Sole Lead (75%)
                        </span>
                      )}
                    </td>

                    {/* 1999 */}
                    <td
                      style={{
                        padding: "12px 10px",
                        borderRight: "1px solid #e2e8f0",
                        background:
                          tableDisplayMode === "heatmap" &&
                          (school.id === "royston" || school.id === "harble" || school.id === "crackend")
                            ? "rgba(124, 58, 237, 0.1)"
                            : undefined
                      }}
                    >
                      <div
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: 800,
                          fontVariantNumeric: "tabular-nums",
                          color:
                            tableDisplayMode === "heatmap" &&
                            (school.id === "royston" || school.id === "harble" || school.id === "crackend")
                              ? "#6d28d9"
                              : "#0f172a"
                        }}
                      >
                        {school.dataPoints.find((p) => p.year === 1999)?.value}%
                      </div>
                      {tableDisplayMode === "heatmap" &&
                        (school.id === "royston" || school.id === "harble" || school.id === "crackend") && (
                          <span
                            style={{
                              fontSize: "0.66rem",
                              color: "#5b21b6",
                              fontWeight: 800,
                              background: "#ede9fe",
                              padding: "1px 5px",
                              borderRadius: "4px",
                              display: "inline-block"
                            }}
                          >
                            ⚡ 60% Convergence
                          </span>
                        )}
                    </td>

                    {/* 2000 */}
                    <td
                      style={{
                        padding: "12px 10px",
                        borderRight: "1.5px solid #cbd5e1",
                        background:
                          tableDisplayMode === "heatmap" && school.id === "harble"
                            ? "rgba(5, 150, 105, 0.12)"
                            : undefined
                      }}
                    >
                      <div
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 850,
                          fontVariantNumeric: "tabular-nums",
                          color:
                            tableDisplayMode === "heatmap" && school.id === "harble"
                              ? "#047857"
                              : "#0f172a"
                        }}
                      >
                        {school.dataPoints.find((p) => p.year === 2000)?.value}%
                      </div>
                      {tableDisplayMode === "heatmap" && school.id === "harble" && (
                        <span
                          style={{
                            fontSize: "0.66rem",
                            color: "#047857",
                            fontWeight: 800,
                            background: "#d1fae5",
                            padding: "1px 5px",
                            borderRadius: "4px",
                            display: "inline-block"
                          }}
                        >
                          🏆 1st Place (80%)
                        </span>
                      )}
                      {tableDisplayMode === "heatmap" && school.id === "fairfield" && (
                        <span style={{ fontSize: "0.66rem", color: "#4f46e5", fontWeight: 800, display: "block" }}>
                          🥈 2nd Place (79%)
                        </span>
                      )}
                      {tableDisplayMode === "heatmap" && school.id === "greystone" && (
                        <span style={{ fontSize: "0.66rem", color: "#dc2626", fontWeight: 800, display: "block" }}>
                          🥉 3rd Place (70%)
                        </span>
                      )}
                    </td>

                    {/* Net Change */}
                    <td
                      style={{
                        padding: "12px 14px",
                        fontWeight: 850,
                        fontSize: "0.95rem",
                        background: isSelected ? "rgba(224, 242, 254, 0.85)" : "#f8fafc"
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          padding: "4px 10px",
                          borderRadius: "8px",
                          fontWeight: 800,
                          fontSize: "0.85rem",
                          background:
                            school.group === "net_decrease"
                              ? "#fee2e2"
                              : school.group === "steady"
                              ? "#f1f5f9"
                              : "#dcfce7",
                          color:
                            school.group === "net_decrease"
                              ? "#b91c1c"
                              : school.group === "steady"
                              ? "#475569"
                              : "#15803d"
                        }}
                      >
                        {school.netChange.split(" ")[0]}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Selected School Analytical Deep-Dive Card (shown when no inspector is displayed) */}
        {showDeepDiveCard && activeSchool && (
          <div
            style={{
              background: "#ffffff",
              border: `2px solid ${activeSchool.color}`,
              borderRadius: "14px",
              padding: "16px 20px",
              boxShadow: "0 3px 12px rgba(0,0,0,0.04)",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              flexShrink: 0
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    background: activeSchool.color
                  }}
                />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  {activeSchool.name}
                </h4>
                <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: `${activeSchool.color}15`, color: activeSchool.color }}>
                  {activeSchool.badge}
                </span>
              </div>
              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  color: activeSchool.group === "net_decrease" ? "#dc2626" : "#059669"
                }}
              >
                Overall Net Change: {activeSchool.netChange}
              </span>
            </div>

            <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
              {activeSchool.trendSummary}
            </p>

            <div
              style={{
                background: "var(--slate-50)",
                borderRadius: "10px",
                padding: "10px 14px",
                borderLeft: `3.5px solid ${activeSchool.color}`,
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <Sparkles size={16} color={activeSchool.color} style={{ flexShrink: 0 }} />
              <span style={{ fontSize: "0.88rem", fontStyle: "italic", color: "var(--slate-800)", lineHeight: 1.45 }}>
                {activeSchool.band9Phrase}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Description Strip below Table */}
      <div
        style={{
          padding: "10px 18px",
          background: "var(--slate-50)",
          borderTop: "1.5px solid var(--border-subtle)",
          fontSize: "0.84rem",
          color: "var(--slate-700)",
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}
      >
        <span
          className="apple-badge accent"
          style={{
            background: FILTER_DETAILS[activeMode].color,
            color: "#ffffff",
            fontSize: "0.72rem",
            padding: "2px 8px",
            flexShrink: 0
          }}
        >
          {FILTER_DETAILS[activeMode].label}
        </span>
        <span style={{ lineHeight: 1.45 }}>{FILTER_DETAILS[activeMode].description}</span>
      </div>
    </div>
  );
};

// Backwards-compatible alias
export const SmartBoardGraphSvg = SmartBoardTableMatrix;
