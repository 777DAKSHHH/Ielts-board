import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, FileText, CheckCircle2, Search, Users } from "lucide-react";

interface TutorReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentModule: "task1" | "task2";
}

export const TutorReportModal: React.FC<TutorReportModalProps> = ({
  isOpen,
  onClose,
  currentModule
}) => {
  const [filterTerm, setFilterTerm] = useState("");

  if (!isOpen) return null;

  // Mock live student submissions for demonstration
  const submissions = [
    { student: "Aarav Sharma", type: "Table Chart", topic: "Airline passenger features (legroom vs entertainment)", accuracy: "High" },
    { student: "Pooja Patel", type: "Survey Report", topic: "Gender preferences in flight travel", accuracy: "High" },
    { student: "Rohan Verma", type: "Bar Graph", topic: "Airplane ticket booking habits", accuracy: "Moderate" },
    { student: "Ananya Iyer", type: "Table Comparison", topic: "Airline amenities prioritization", accuracy: "High" }
  ];

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
