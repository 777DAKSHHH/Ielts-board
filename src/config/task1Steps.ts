import { StepDefinition } from "../types";

export const TASK1_STEPS: StepDefinition[] = [
  {
    id: "task1-step1",
    stepNumber: 1,
    title: "Cryptic Audio Guess",
    badge: "Step 01 / 08 • Cryptic Audio Guess",
    description: "Listen First: Guess the 40-Year Emissions Trajectories"
  },
  {
    id: "task1-step2",
    stepNumber: 2,
    title: "Task Prompt & Graph Analysis",
    badge: "Step 02 / 08 • Task Prompt & Graph Analysis",
    description: "Deconstruct 4 European Nations, Metric Tonnes, and 40-Year Trends"
  },
  {
    id: "task1-step3",
    stepNumber: 3,
    title: "Dynamic Trend Vocabulary",
    badge: "Step 03 / 08 • Lexical Resource",
    description: "Per Capita Emissions, Volatility, Surges, Plateaus & Convergence Collocations"
  },
  {
    id: "task1-step4",
    stepNumber: 4,
    title: "Sample Introduction & Overview",
    badge: "Step 04 / 08 • Sample Introduction & Overview",
    description: "Paraphrase Prompt & Frame Overall Dichotomy (2 Decreasing vs 2 Increasing)"
  },
  {
    id: "task1-step5",
    stepNumber: 5,
    title: "Body 1: UK & Sweden (Net Decreases)",
    badge: "Step 05 / 08 • Body 1 — The Net Decreasers",
    description: "UK's Dominant Steady Descent & Sweden's Dramatic 1977 Peak and Plunge"
  },
  {
    id: "task1-step6",
    stepNumber: 6,
    title: "Body 2: Italy & Portugal (Net Increases)",
    badge: "Step 06 / 08 • Body 2 — The Net Increasers",
    description: "Italy's Overtaking Ascent to Plateau & Portugal's 4-Fold Convergence"
  },
  {
    id: "task1-step7",
    stepNumber: 7,
    title: "Mathematical & Comparative Structures",
    badge: "Step 07 / 08 • Analytical Language & Data Accuracy",
    description: "Proportional Multipliers, Intersections, Divergences, and Units"
  },
  {
    id: "task1-step8",
    stepNumber: 8,
    title: "Cohesive Trend Connectors",
    badge: "Step 08 / 08 • Comparative Connectors & Flow",
    description: "Contrast Diverging Trajectories, Sequence Decades & Mark Inflection Points"
  }
];

export const TASK1_TITLES = TASK1_STEPS.map((s) => s.title);
