import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Mic, Volume2, Cpu, Check, AlertCircle } from "lucide-react";

export type OrbState = "idle" | "listening" | "thinking" | "speaking" | "success" | "error";

interface LiquidGlassOrbProps {
  state?: OrbState;
  size?: number;
  onClick?: () => void;
  interactive?: boolean;
  label?: string;
  sublabel?: string;
  showStateBadge?: boolean;
  className?: string;
}

export const LiquidGlassOrb: React.FC<LiquidGlassOrbProps> = ({
  state = "idle",
  size = 56,
  onClick,
  interactive = true,
  label,
  sublabel,
  showStateBadge = false,
  className = ""
}) => {
  // Color themes depending on active state
  const stateThemes = {
    idle: {
      coreGradient: ["#1e3a8a", "#2563eb", "#06b6d4"],
      outerGlow: "rgba(59, 130, 246, 0.35)",
      rimColor: "rgba(147, 197, 253, 0.7)",
      badgeBg: "#eff6ff",
      badgeText: "#1d4ed8",
      badgeBorder: "#bfdbfe",
      badgeLabel: "AI Tutor Ready",
      icon: Sparkles
    },
    listening: {
      coreGradient: ["#064e3b", "#059669", "#10b981"],
      outerGlow: "rgba(16, 185, 129, 0.45)",
      rimColor: "rgba(167, 243, 208, 0.8)",
      badgeBg: "#ecfdf5",
      badgeText: "#047857",
      badgeBorder: "#a7f3d0",
      badgeLabel: "Listening...",
      icon: Mic
    },
    thinking: {
      coreGradient: ["#312e81", "#6366f1", "#8b5cf6"],
      outerGlow: "rgba(139, 92, 246, 0.45)",
      rimColor: "rgba(196, 181, 253, 0.8)",
      badgeBg: "#f5f3ff",
      badgeText: "#6d28d9",
      badgeBorder: "#ddd6fe",
      badgeLabel: "Analyzing...",
      icon: Cpu
    },
    speaking: {
      coreGradient: ["#1e3a8a", "#3b82f6", "#60a5fa"],
      outerGlow: "rgba(96, 165, 250, 0.5)",
      rimColor: "rgba(191, 219, 254, 0.9)",
      badgeBg: "#eff6ff",
      badgeText: "#1d4ed8",
      badgeBorder: "#93c5fd",
      badgeLabel: "Speaking",
      icon: Volume2
    },
    success: {
      coreGradient: ["#065f46", "#10b981", "#fbbf24"],
      outerGlow: "rgba(245, 158, 11, 0.4)",
      rimColor: "rgba(254, 240, 138, 0.85)",
      badgeBg: "#fefce8",
      badgeText: "#b45309",
      badgeBorder: "#fde047",
      badgeLabel: "Band 9 Verified",
      icon: Check
    },
    error: {
      coreGradient: ["#7f1d1d", "#dc2626", "#f87171"],
      outerGlow: "rgba(239, 68, 68, 0.45)",
      rimColor: "rgba(254, 202, 202, 0.8)",
      badgeBg: "#fef2f2",
      badgeText: "#b91c1c",
      badgeBorder: "#fca5a5",
      badgeLabel: "Attention Needed",
      icon: AlertCircle
    }
  };

  const currentTheme = stateThemes[state];
  const IconComponent = currentTheme.icon;

  return (
    <div
      className={`liquid-glass-orb-wrapper ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        userSelect: "none"
      }}
    >
      <motion.div
        onClick={interactive ? onClick : undefined}
        whileHover={interactive ? { scale: 1.05 } : undefined}
        whileTap={interactive ? { scale: 0.95 } : undefined}
        style={{
          position: "relative",
          width: size,
          height: size,
          cursor: interactive ? "pointer" : "default"
        }}
        title={label || currentTheme.badgeLabel}
      >
        {/* State Reactive Pulse / Ripple Rings */}
        {(state === "listening" || state === "speaking") && (
          <>
            <motion.div
              animate={{ scale: [1, 1.55, 1.8], opacity: [0.7, 0.3, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
              style={{
                position: "absolute",
                inset: -6,
                borderRadius: "50%",
                border: `2px solid ${currentTheme.rimColor}`,
                pointerEvents: "none"
              }}
            />
            <motion.div
              animate={{ scale: [1, 1.4, 1.6], opacity: [0.6, 0.25, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.6, ease: "easeOut" }}
              style={{
                position: "absolute",
                inset: -6,
                borderRadius: "50%",
                border: `1.5px solid ${currentTheme.rimColor}`,
                pointerEvents: "none"
              }}
            />
          </>
        )}

        {/* Ambient Outer Caustic Glow */}
        <div
          style={{
            position: "absolute",
            inset: -4,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${currentTheme.outerGlow} 0%, rgba(255,255,255,0) 70%)`,
            filter: "blur(6px)",
            pointerEvents: "none",
            transform: state === "thinking" ? "scale(1.15)" : "scale(1)",
            transition: "all 0.4s ease"
          }}
        />

        {/* Main Glass Sphere Body */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: `
              0 8px 24px -2px rgba(15, 23, 42, 0.2),
              0 0 16px 2px ${currentTheme.outerGlow},
              inset 0 -4px 8px rgba(0, 0, 0, 0.3),
              inset 0 3px 6px rgba(255, 255, 255, 0.6)
            `,
            background: `linear-gradient(135deg, ${currentTheme.coreGradient[0]} 0%, ${currentTheme.coreGradient[1]} 55%, ${currentTheme.coreGradient[2]} 100%)`
          }}
        >
          {/* Inner Refractive Swirling Caustics */}
          <div
            className={state === "thinking" ? "orb-rotate-anim" : "orb-pulse-anim"}
            style={{
              position: "absolute",
              inset: -size * 0.2,
              borderRadius: "50%",
              background: `radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 60%),
                           radial-gradient(ellipse at 70% 80%, ${currentTheme.coreGradient[2]} 0%, rgba(0,0,0,0) 50%)`,
              opacity: 0.85,
              pointerEvents: "none"
            }}
          />

          {/* Top-Left Specular Refraction Highlight (Physical Glass Crescent) */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "14%",
              width: "48%",
              height: "28%",
              borderRadius: "50%",
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.05) 100%)",
              transform: "rotate(-25deg)",
              pointerEvents: "none"
            }}
          />

          {/* Bottom Rim Optical Dispersion Glow */}
          <div
            style={{
              position: "absolute",
              bottom: "4%",
              left: "20%",
              right: "20%",
              height: "22%",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.35)",
              filter: "blur(2px)",
              pointerEvents: "none"
            }}
          />

          {/* Central AI Glyph / Activity Icon */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              textShadow: "0 1px 3px rgba(0,0,0,0.5)",
              zIndex: 2
            }}
          >
            <IconComponent size={Math.round(size * 0.42)} strokeWidth={2.4} />
          </div>
        </div>
      </motion.div>

      {/* Optional Side Label & State Badge */}
      {(label || showStateBadge) && (
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {label && (
            <span style={{ fontSize: "0.92rem", fontWeight: 750, color: "var(--slate-900)", lineHeight: 1.2 }}>
              {label}
            </span>
          )}
          {sublabel && (
            <span style={{ fontSize: "0.76rem", color: "var(--slate-500)", fontWeight: 550 }}>
              {sublabel}
            </span>
          )}
          {showStateBadge && (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "0.72rem",
                fontWeight: 750,
                background: currentTheme.badgeBg,
                color: currentTheme.badgeText,
                border: `1px solid ${currentTheme.badgeBorder}`,
                padding: "2px 8px",
                borderRadius: "6px",
                marginTop: "2px",
                width: "fit-content"
              }}
            >
              {currentTheme.badgeLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

