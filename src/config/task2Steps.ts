import { StepDefinition } from "../types";

export const TASK2_STEPS: StepDefinition[] = [
  {
    id: "task2-step1",
    stepNumber: 1,
    title: "Audio Briefing & Topic Reveal",
    badge: "Step 01 / 09 • Cryptic Audio Briefing",
    description: "Listen First: Children and Early Digital Technology Immersion"
  },
  {
    id: "task2-step2",
    stepNumber: 2,
    title: "Task 2 Question & 4-Para Format",
    badge: "Step 02 / 09 • Task Reveal & Essay Format",
    description: "Deconstruct 'Children Using Technology at a Younger Age' & Master the 4-Paragraph Opinion Format"
  },
  {
    id: "task2-step3",
    stepNumber: 3,
    title: "Guided Brainstorm Challenge",
    badge: "Step 03 / 09 • Guided Brainstorm Challenge",
    description: "Think First. Reveal Later. (Positive Development vs Negative Development One-Liners)"
  },
  {
    id: "task2-step4",
    stepNumber: 4,
    title: "Academic Power Vocabulary",
    badge: "Step 04 / 09 • Lexical Resource",
    description: "Digital Fluency, Sedentary Habits & Cognitive Development: 12 Band 9 Vocabulary Items"
  },
  {
    id: "task2-step5",
    stepNumber: 5,
    title: "Sample Introduction & Opinion",
    badge: "Step 05 / 09 • Sample Introduction & Opinion",
    description: "Format: Paraphrase the question + Clear Opinion Statement"
  },
  {
    id: "task2-step6",
    stepNumber: 6,
    title: "Body 1: Opinion Reason 1",
    badge: "Step 06 / 09 • Body Para 1 (1 Main Reason + Supporting + Example)",
    description: "Physical Health Complications & Sedentary Habits (Pediatric Evidence)"
  },
  {
    id: "task2-step7",
    stepNumber: 7,
    title: "Body 2: Opinion Reason 2",
    badge: "Step 07 / 09 • Body Para 2 (1 Main Reason + Supporting + Example)",
    description: "Impaired Social Communication & Shortened Attention Spans (Classroom Evidence)"
  },
  {
    id: "task2-step8",
    stepNumber: 8,
    title: "Sample Conclusion & Restating Opinion",
    badge: "Step 08 / 09 • Sample Conclusion & Synthesis",
    description: "Format: Sum-up all the main reasons + Restate your opinion"
  },
  {
    id: "task2-step9",
    stepNumber: 9,
    title: "Final Essay Submission",
    badge: "Step 09 / 09 • Final Essay Submission",
    description: "Complete Band 9 Model Essay Response (4-Paragraph Opinion Stance)"
  }
];

export const TASK2_TITLES = TASK2_STEPS.map((s) => s.title);
