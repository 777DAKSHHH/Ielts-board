import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, FileText, Search } from "lucide-react";

interface TutorReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentModule: "task1" | "task2";
}

const TASK1_SUBMISSIONS = [
  { student: "Aarav Sharma", type: "Comparative Maps", topic: "Kimsville town redevelopment using city centre anchor (2002 vs today)", accuracy: "High" },
  { student: "Pooja Patel", type: "Map Transformation", topic: "Top-left housing & railway station additions left of city centre", accuracy: "High" },
  { student: "Rohan Verma", type: "Two Maps", topic: "Industrial factory replacement by software tech offices right of city centre", accuracy: "Moderate" },
  { student: "Ananya Iyer", type: "Comparative Maps", topic: "Old cinema conversion to pub & bottom-left football stadium", accuracy: "High" }
];

const TASK2_SUBMISSIONS = [
  { student: "Aarav Sharma", type: "Discussion Essay", topic: "High salary taxation for public roads and schools vs individual wealth retention", accuracy: "High" },
  { student: "Pooja Patel", type: "Balanced Opinion", topic: "State funding for essential infrastructure and wealth redistribution", accuracy: "High" },
  { student: "Rohan Verma", type: "Discuss Both Views", topic: "Economic disincentives of excessive income tax vs civic public goods", accuracy: "Moderate" },
  { student: "Ananya Iyer", type: "Discussion + Opinion", topic: "Progressive taxation for universal healthcare/schools vs economic liberty", accuracy: "High" }
];

export const TutorReportModal: React.FC<TutorReportModalProps> = ({
  isOpen,
  onClose,
  currentModule
}) => {
  const [filterTerm, setFilterTerm] = useState("");

  if (!isOpen) return null;

  const dataset = currentModule === "task1" ? TASK1_SUBMISSIONS : TASK2_SUBMISSIONS;
  const submissions = dataset.filter(
    (sub) =>
      sub.student.toLowerCase().includes(filterTerm.toLowerCase()) ||
      sub.topic.toLowerCase().includes(filterTerm.toLowerCase()) ||
      sub.type.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(15, 23, 42, 0.45)",
        backdropFilter: "blur(18px)",
        padding: "24px"
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 16 }}
        className="glass-panel"
        style={{
          width: "min(94vw, 780px)",
          maxHeight: "86vh",
          padding: "36px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.22)"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: "var(--slate-900)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <FileText size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700 }}>Tutor Live Participation Report</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--slate-500)" }}>
                Incoming student predictions from Step 1 active listening QR check
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="apple-touch-btn"
            style={{ width: "40px", height: "40px", padding: 0, borderRadius: "50%", background: "var(--slate-100)" }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Search / Filter bar */}
        <div style={{ position: "relative" }}>
          <Search size={18} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "var(--slate-400)" }} />
          <input
            type="text"
            placeholder="Search student or prediction..."
            value={filterTerm}
            onChange={(e) => setFilterTerm(e.target.value)}
            style={{
              width: "100%",
              height: "46px",
              paddingLeft: "42px",
              paddingRight: "14px",
              borderRadius: "12px",
              border: "1px solid var(--border-subtle)",
              background: "#ffffff",
              fontSize: "0.95rem"
            }}
          />
        </div>

        {/* Submissions Table */}
        <div style={{ overflowY: "auto", border: "1px solid var(--border-subtle)", borderRadius: "14px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.92rem" }}>
            <thead style={{ background: "var(--slate-100)", borderBottom: "1px solid var(--border-subtle)", color: "var(--slate-700)" }}>
              <tr>
                <th style={{ padding: "12px 16px" }}>Student Name</th>
                <th style={{ padding: "12px 16px" }}>Guessed Format</th>
                <th style={{ padding: "12px 16px" }}>Topic Prediction</th>
                <th style={{ padding: "12px 16px" }}>Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid var(--border-subtle)", background: idx % 2 === 0 ? "#ffffff" : "var(--slate-50)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: 600, color: "var(--slate-900)" }}>{sub.student}</td>
                  <td style={{ padding: "12px 16px" }}>{sub.type}</td>
                  <td style={{ padding: "12px 16px", color: "var(--slate-700)" }}>{sub.topic}</td>
                  <td style={{ padding: "12px 16px" }}>
                    <span className="apple-badge success">{sub.accuracy}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.85rem", color: "var(--slate-500)" }}>
          <span>Total connected students: 4</span>
          <span>Refreshes automatically via live channel</span>
        </div>
      </motion.div>
    </div>
  );
};
