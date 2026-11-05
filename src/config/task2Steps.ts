import { StepDefinition } from "../types";

export const TASK2_STEPS: StepDefinition[] = [
  {
    id: "task2-step1",
    stepNumber: 1,
    title: "Question Briefing & Topic Overview",
    badge: "Step 01 / 09 • Topic Briefing",
    description: "Satellite Launches & Space Debris Threatening Earth"
  },
  {
    id: "task2-step2",
    stepNumber: 2,
    title: "Task Question & Format Panel",
    badge: "Step 02 / 09 • Task Reveal & Essay Format",
    description: "Deconstruct Satellite Prompt & Master the Mandatory Linked Causes & Solutions Format"
  },
  {
    id: "task2-step3",
    stepNumber: 3,
    title: "Guided Brainstorm Challenge",
    badge: "Step 03 / 09 • Guided Brainstorm Challenge",
    description: "Think First. Reveal Later. (4 One-Liner Causes & Solutions Cards)"
  },
  {
    id: "task2-step4",
    stepNumber: 4,
    title: "Academic Power Vocabulary",
    badge: "Step 04 / 09 • Lexical Resource",
    description: "Aerospace, Orbital Saturation & Environmental Remediation: 12 Band 9 Items"
  },
  {
    id: "task2-step5",
    stepNumber: 5,
    title: "Sample Introduction & Thesis",
    badge: "Step 05 / 09 • Sample Introduction & Thesis",
    description: "Format: Paraphrase the question + Clear Thesis Statement"
  },
  {
    id: "task2-step6",
    stepNumber: 6,
    title: "Idea Bank: Main Causes",
    badge: "Step 06 / 09 • Idea Bank: Main Causes",
    description: "Explore 5 Cut-to-the-Chase Causes of Satellite Overcrowding & Space Debris"
  },
  {
    id: "task2-step7",
    stepNumber: 7,
    title: "Idea Bank: Effective Solutions",
    badge: "Step 07 / 09 • Idea Bank: Effective Solutions",
    description: "Explore 5 Practical Solutions & International Remediation Measures"
  },
  {
    id: "task2-step8",
    stepNumber: 8,
    title: "Sample Conclusion & Recommendation",
    badge: "Step 08 / 09 • Sample Conclusion & Recommendation",
    description: "Format: Sum-up all the main causes, solutions + suggestion / recommendation"
  },
  {
    id: "task2-step9",
    stepNumber: 9,
    title: "Final Essay Structure & Revision",
    badge: "Step 09 / 09 • Final Essay Structure & Revision",
    description: "Ultra-Concise One-Liner Exam Revision & 4-Paragraph Architecture Check"
  }
];

export const TASK2_TITLES = TASK2_STEPS.map((s) => s.title);
