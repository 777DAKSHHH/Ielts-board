import { StepDefinition } from "../types";

export const TASK1_STEPS: StepDefinition[] = [
  {
    id: "task1-step1",
    stepNumber: 1,
    title: "Cryptic Audio Guess",
    badge: "Step 01 / 08 • Cryptic Audio Guess",
    description: "Listen First: Guess the Energy Flow & Trophic Levels"
  },
  {
    id: "task1-step2",
    stepNumber: 2,
    title: "Task Prompt & Pyramid Analysis",
    badge: "Step 02 / 08 • Task Prompt & Diagram Analysis",
    description: "Analyse Trophic Levels, 10% Biomass Rule & Nutrient Cycles"
  },
  {
    id: "task1-step3",
    stepNumber: 3,
    title: "Ecological Power Vocabulary",
    badge: "Step 03 / 08 • Lexical Resource",
    description: "Trophic Levels, Biomass Transfer & Heat Dissipation Collocations"
  },
  {
    id: "task1-step4",
    stepNumber: 4,
    title: "Sample Introduction & Overview",
    badge: "Step 04 / 08 • Sample Introduction & Overview",
    description: "Build Paraphrase & Macro Overview (Unidirectional Energy Flow)"
  },
  {
    id: "task1-step5",
    stepNumber: 5,
    title: "Body 1: Upward Trophic Transfer",
    badge: "Step 05 / 08 • Body 1 — Trophic Hierarchy & Stored Biomass",
    description: "From Primary Producers (20,000 kcal) to Apex Raptors (2 kcal)"
  },
  {
    id: "task1-step6",
    stepNumber: 6,
    title: "Body 2: Heat Loss & Decomposers",
    badge: "Step 06 / 08 • Body 2 — Energy Dissipation & Nutrient Recycling",
    description: "Continuous Heat Dissipation & Closed-Loop Decomposer Cycling"
  },
  {
    id: "task1-step7",
    stepNumber: 7,
    title: "Diagrammatic Analytical Structures",
    badge: "Step 07 / 08 • Scientific Process Language & Passive Voice",
    description: "Energy Metrics (kcal/m²/yr), Energy Reduction & Natural Systems"
  },
  {
    id: "task1-step8",
    stepNumber: 8,
    title: "Cohesive Stage Transitions",
    badge: "Step 08 / 08 • Academic Transitions & Biological Cycling",
    description: "Sequence Ascending Trophic Tiers & Closed Ecological Loops"
  }
];

export const TASK1_TITLES = TASK1_STEPS.map((s) => s.title);
