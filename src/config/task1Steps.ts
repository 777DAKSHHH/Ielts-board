import { StepDefinition } from "../types";

export const TASK1_STEPS: StepDefinition[] = [
  {
    id: "task1-step1",
    stepNumber: 1,
    title: "Cryptic Audio Guess",
    badge: "Step 01 / 08 • Cryptic Audio Guess",
    description: "Listen First: Atmospheric Winds, Warm Water Shifts & El Niño Inversion in the Pacific"
  },
  {
    id: "task1-step2",
    stepNumber: 2,
    title: "Task Prompt & Diagram Analysis",
    badge: "Step 02 / 08 • Task Prompt & Diagram Analysis",
    description: "Deconstruct Pacific Ocean Cross-Sections: Normal vs. El Niño Conditions"
  },
  {
    id: "task1-step3",
    stepNumber: 3,
    title: "Oceanographic & Meteorological Lexicon",
    badge: "Step 03 / 08 • Lexical Resource",
    description: "Upwelling, Thermocline, Trade Winds, Convection, Aridity & Nutrient Depletion"
  },
  {
    id: "task1-step4",
    stepNumber: 4,
    title: "Sample Introduction & Overview",
    badge: "Step 04 / 08 • Sample Introduction & Overview",
    description: "Paraphrase Prompt & Contrast Dual Pacific Climatic Systems (Equilibrium vs Disruption)"
  },
  {
    id: "task1-step5",
    stepNumber: 5,
    title: "Body 1: Normal Pacific Equilibrium",
    badge: "Step 05 / 08 • Body 1 — Normal Equilibrium",
    description: "Westward Trade Winds, Australian Rainfall, Cold Upwelling & Booming Peruvian Fisheries"
  },
  {
    id: "task1-step6",
    stepNumber: 6,
    title: "Body 2: El Niño Climatic Reversal",
    badge: "Step 06 / 08 • Body 2 — El Niño Disruption",
    description: "Weakened Winds, Eastward Warm Surge, Australian Drought & Peruvian Fishery Collapse"
  },
  {
    id: "task1-step7",
    stepNumber: 7,
    title: "Comparative Systems & Band 9 Model",
    badge: "Step 07 / 08 • Analytical Language & Model Response",
    description: "Ocean-Atmosphere Linkages, Spatial Contrasts & Full 214-Word Band 9 Report"
  },
  {
    id: "task1-step8",
    stepNumber: 8,
    title: "Cohesive Meteorological Connectors",
    badge: "Step 08 / 08 • Comparative Connectors & Flow",
    description: "Contrast Basin Extremes, Track Eastward Shifts & Frame Cause-and-Effect Sequences"
  }
];

export const TASK1_TITLES = TASK1_STEPS.map((s) => s.title);
