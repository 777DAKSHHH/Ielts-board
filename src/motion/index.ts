import type { Transition, Variants } from "framer-motion";

/**
 * IELTS Teaching Wizard V2 — Centralized Motion Architecture
 * Precision-tuned spring physics, tactile press feedback, and reduced-motion resilience.
 */

// Core Spring Transitions
export const springTactile: Transition = {
  type: "spring",
  stiffness: 420,
  damping: 28,
  mass: 0.8
};

export const springStage: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 32,
  mass: 1
};

export const springModal: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 30,
  mass: 0.9
};

export const springSnap: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 35
};

export const transitionFast: Transition = {
  duration: 0.15,
  ease: [0.16, 1, 0.3, 1]
};

// Tactile Press & Hover Micro-Interactions
export const tactilePress = {
  scale: 0.96,
  transition: { duration: 0.08 }
};

export const tactileHover = {
  y: -1,
  transition: { duration: 0.12 }
};

export const cardSelectSquash = {
  scale: [1, 0.97, 1.01, 1],
  transition: { duration: 0.28, ease: "easeInOut" }
};

// Directional Stage Slide Variants
export const stageSlideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 180 : -180,
    opacity: 0,
    scale: 0.985
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: springStage,
      opacity: { duration: 0.18, ease: "easeOut" },
      scale: { duration: 0.2, ease: "easeOut" }
    }
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -180 : 180,
    opacity: 0,
    scale: 0.985,
    transition: {
      x: { ...springStage, stiffness: 360, damping: 30 },
      opacity: { duration: 0.14, ease: "easeIn" },
      scale: { duration: 0.14 }
    }
  })
};

// Modal Entrance & Exit Variants (Solid Opaque Backdrop & Snappy Dialog)
export const modalBackdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.16, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.14, ease: "easeIn" } }
};

export const modalDialogVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: springModal
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 8,
    transition: { duration: 0.12, ease: "easeIn" }
  }
};

// Reveal / Accordion Expand Variants
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
  }
};

// Reduced Motion Alternative Variants
export const reducedMotionSlideVariants: Variants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.12 } },
  exit: { opacity: 0, transition: { duration: 0.1 } }
};

export const reducedMotionModalVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.12 } },
  exit: { opacity: 0, transition: { duration: 0.1 } }
};
