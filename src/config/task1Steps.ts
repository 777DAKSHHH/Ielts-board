import { StepDefinition } from "../types";

export const TASK1_STEPS: StepDefinition[] = [
  {
    id: "task1-step1",
    stepNumber: 1,
    title: "Cryptic Audio Guess",
    badge: "Step 01 / 08 • Cryptic Audio Guess",
    description: "Listen First: Guess the Anchor-Based Transformation"
  },
  {
    id: "task1-step2",
    stepNumber: 2,
    title: "Task Prompt & Map Analysis",
    badge: "Step 02 / 08 • Task Prompt & Map Analysis",
    description: "Analyse Maps Using the City Centre Anchor (No Compass)"
  },
  {
    id: "task1-step3",
    stepNumber: 3,
    title: "Anchor-Based Spatial Vocabulary",
    badge: "Step 03 / 08 • Lexical Resource",
    description: "Relational Positioning & Redevelopment Collocations"
  },
  {
    id: "task1-step4",
    stepNumber: 4,
    title: "Sample Introduction & Overview",
    badge: "Step 04 / 08 • Sample Introduction & Overview",
    description: "Build Paraphrase & Macro Overview (Zero Cardinal Points)"
  },
  {
    id: "task1-step5",
    stepNumber: 5,
    title: "Body 1: Left & Upper Sectors",
    badge: "Step 05 / 08 • Body 1 — Left & Upper Sectors (Anchor-Based)",
    description: "Apartments, Railway Station & Preserved Amenities"
  },
  {
    id: "task1-step6",
    stepNumber: 6,
    title: "Body 2: Right & Lower Sectors",
    badge: "Step 06 / 08 • Body 2 — Right & Lower Sectors (Anchor-Based)",
    description: "Software Offices, Pub Conversion & Football Stadium"
  },
  {
    id: "task1-step7",
    stepNumber: 7,
    title: "Anchor-Based Spatial Structures",
    badge: "Step 07 / 08 • Anchor-Based Spatial Language (No Compass)",
    description: "Relational Positioning, Demolition & Adaptive Reuse"
  },
  {
    id: "task1-step8",
    stepNumber: 8,
    title: "Cohesive Spatial Transitions",
    badge: "Step 08 / 08 • Academic Transitions & Relational Flow",
    description: "Connect Spatial Changes Using the Anchor Framework"
  }
];

export const TASK1_TITLES = TASK1_STEPS.map((s) => s.title);
