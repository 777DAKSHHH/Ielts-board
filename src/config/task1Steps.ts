import { StepDefinition } from "../types";

export const TASK1_STEPS: StepDefinition[] = [
  {
    id: "task1-step1",
    stepNumber: 1,
    title: "Cryptic Audio Guess",
    badge: "Step 01 / 08 • Cryptic Audio Guess",
    description: "Listen First: Sugarcane to Refined Sugar Manufacturing Briefing"
  },
  {
    id: "task1-step2",
    stepNumber: 2,
    title: "Task Prompt & Process Diagram Stage",
    badge: "Step 02 / 08 • Prompt & 7-Stage Process Smartboard",
    description: "Interactive Diagram & Stage Pipeline (Growing, Dual Harvest, Rollers, Limestone, Evaporator, Centrifuge, Drying)"
  },
  {
    id: "task1-step3",
    stepNumber: 3,
    title: "Process & Passive Lexicon",
    badge: "Step 03 / 08 • Manufacturing Process Lexical Resource",
    description: "Linear Sequence, Maturation Cycle, Mechanised Harvester, Limestone Filtration, Thermal Evaporation, Centrifugal Separation"
  },
  {
    id: "task1-step4",
    stepNumber: 4,
    title: "Sample Introduction & Macro Overview",
    badge: "Step 04 / 08 • Sample Introduction & Overview",
    description: "7-Stage Scope Paraphrase & 2-Sentence Qualitative Overview (Zero Numbers, Dual Harvest & Agricultural vs Chemical Split)"
  },
  {
    id: "task1-step5",
    stepNumber: 5,
    title: "Process Grouping & Bifurcation",
    badge: "Step 05 / 08 • Structural Grouping Strategy",
    description: "Bifurcation Tactics: Body 1 Agricultural & Extraction (Stages 1–3) vs Body 2 Refining & Crystallization (Stages 4–7)"
  },
  {
    id: "task1-step6",
    stepNumber: 6,
    title: "Body 1: Agricultural & Extraction Flow",
    badge: "Step 06 / 08 • Body 1 — Growing, Harvest & Crushing",
    description: "Field Maturation (12–18m), Dual Reaping (Machine vs Sickle), and Roller Compression into Raw Juice"
  },
  {
    id: "task1-step7",
    stepNumber: 7,
    title: "Body 2 & Complete Band 9 Model",
    badge: "Step 07 / 08 • Body 2 & Full Model Report",
    description: "Limestone Filtration, Evaporation into Syrup, Centrifuge Spin, Cylinder Drying, and Full 258-Word Model"
  },
  {
    id: "task1-step8",
    stepNumber: 8,
    title: "Sequential Connectors & Extension",
    badge: "Step 08 / 08 • Process Transitions & Connectors",
    description: "Chronological Sequence Markers, Passive Voice Formulas, English Nuance Lab, and General Training Task 1 Masterclass"
  }
];

export const TASK1_TITLES = TASK1_STEPS.map((s) => s.title);
