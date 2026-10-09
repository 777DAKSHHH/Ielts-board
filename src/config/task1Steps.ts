import { StepDefinition } from "../types";

export const TASK1_STEPS: StepDefinition[] = [
  {
    id: "task1-step1",
    stepNumber: 1,
    title: "Cryptic Audio Guess",
    badge: "Step 01 / 08 • Cryptic Audio Guess",
    description: "Listen First: Higher Education Progression Across 5 Secondary Schools (1995–2000)"
  },
  {
    id: "task1-step2",
    stepNumber: 2,
    title: "Task Prompt & Table Analysis",
    badge: "Step 02 / 08 • Task Prompt & Table Analysis",
    description: "Deconstruct 5 Secondary Schools, Percentages, and 6-Year Trajectories"
  },
  {
    id: "task1-step3",
    stepNumber: 3,
    title: "Dynamic Trend Vocabulary",
    badge: "Step 03 / 08 • Lexical Resource",
    description: "Tertiary Rates, Meteoric Surges, Stepped Plateaus & Convergence Collocations"
  },
  {
    id: "task1-step4",
    stepNumber: 4,
    title: "Sample Introduction & Overview",
    badge: "Step 04 / 08 • Sample Introduction & Overview",
    description: "Paraphrase Prompt & Frame Overall Dichotomy (4 Rising vs 1 Declining)"
  },
  {
    id: "task1-step5",
    stepNumber: 5,
    title: "Body 1: Harble & Fairfield (Surging Risers)",
    badge: "Step 05 / 08 • Body 1 — The Surging Risers",
    description: "Harble's Meteoric Leap (30% → 80%) & Fairfield's Rebound to 2nd Place (79%)"
  },
  {
    id: "task1-step6",
    stepNumber: 6,
    title: "Body 2: Greystone, Royston, Crackend",
    badge: "Step 06 / 08 • Body 2 — Decliner & Moderates",
    description: "Greystone's Solitary Fall (90% → 70%), Royston's Steps & Crackend's Stability"
  },
  {
    id: "task1-step7",
    stepNumber: 7,
    title: "Mathematical & Comparative Structures",
    badge: "Step 07 / 08 • Analytical Language & Model Response",
    description: "Multipliers, Triple Convergence at 60%, and Full 194-Word Band 9 Report"
  },
  {
    id: "task1-step8",
    stepNumber: 8,
    title: "Cohesive Trend Connectors",
    badge: "Step 08 / 08 • Comparative Connectors & Flow",
    description: "Contrast Trajectories, Sequence Stepped Growth & Mark Convergence Points"
  }
];

export const TASK1_TITLES = TASK1_STEPS.map((s) => s.title);
