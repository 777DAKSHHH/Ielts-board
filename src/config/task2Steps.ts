import { StepDefinition } from "../types";

export const TASK2_STEPS: StepDefinition[] = [
  {
    id: "task2-step1",
    stepNumber: 1,
    title: "Audio Briefing & Topic Reveal",
    badge: "Step 01 / 09 • Cryptic Audio Briefing",
    description: "Listen First: The Psychology and Real-World Consequences of the 'Achieve Anything' Message"
  },
  {
    id: "task2-step2",
    stepNumber: 2,
    title: "Task 2 Question & 4-Para Format",
    badge: "Step 02 / 09 • Task Reveal & Essay Format",
    description: "Deconstruct 'Telling Children They Can Achieve Anything' & Master the 4-Paragraph Format"
  },
  {
    id: "task2-step3",
    stepNumber: 3,
    title: "Guided Brainstorm Challenge",
    badge: "Step 03 / 09 • Guided Brainstorm Challenge",
    description: "Think First. Reveal Later. (Advantages: Resilience & Social Mobility vs Disadvantages: Burnout & False Hopes)"
  },
  {
    id: "task2-step4",
    stepNumber: 4,
    title: "Academic Power Vocabulary",
    badge: "Step 04 / 09 • Lexical Resource",
    description: "Mindset, Aspiration & Cognitive Realism: 12 Band 9 Vocabulary Items & Model Sentences"
  },
  {
    id: "task2-step5",
    stepNumber: 5,
    title: "Sample Introduction & Thesis",
    badge: "Step 05 / 09 • Sample Introduction & Thesis",
    description: "Formula: Paraphrase the question + Clear Thesis Statement"
  },
  {
    id: "task2-step6",
    stepNumber: 6,
    title: "Body 1: Advantages",
    badge: "Step 06 / 09 • Body Para 1 (Advantages: 2 Reasons + Example)",
    description: "2 Main Reasons (Growth Mindset & Breaking Social Ceilings) + Supporting Reasons + Carol Dweck Example"
  },
  {
    id: "task2-step7",
    stepNumber: 7,
    title: "Body 2: Disadvantages",
    badge: "Step 07 / 09 • Body Para 2 (Disadvantages: 2 Reasons + Example)",
    description: "2 Main Reasons (Self-Blame/Burnout & Inherent Limitations) + Competitive System Example"
  },
  {
    id: "task2-step8",
    stepNumber: 8,
    title: "Sample Conclusion & Recommendation",
    badge: "Step 08 / 09 • Sample Conclusion & Synthesis",
    description: "Formula: Sum-up all the main reasons + Suggestion / Recommendation"
  },
  {
    id: "task2-step9",
    stepNumber: 9,
    title: "Final Essay Submission",
    badge: "Step 09 / 09 • Final Essay Submission",
    description: "Complete Band 9 Model Essay Response (Advantages & Disadvantages: 4-Paragraph Structure)"
  }
];

export const TASK2_TITLES = TASK2_STEPS.map((s) => s.title);
