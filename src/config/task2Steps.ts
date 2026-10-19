import { StepDefinition } from "../types";

export const TASK2_STEPS: StepDefinition[] = [
  {
    id: "task2-step1",
    stepNumber: 1,
    title: "Audio Briefing & Guess",
    badge: "Step 01 / 09 • Cryptic Audio Guess",
    description: "Listen First: Educational Technology & the Future of Classroom Teaching"
  },
  {
    id: "task2-step2",
    stepNumber: 2,
    title: "Task 2 Question & 5-Para Format",
    badge: "Step 02 / 09 • Task Reveal & 5-Para Format (3 Body Paras)",
    description: "Deconstruct 'AI Replacing Teachers' (To What Extent) & 5-Paragraph Architecture"
  },
  {
    id: "task2-step3",
    stepNumber: 3,
    title: "Guided Brainstorm Challenge",
    badge: "Step 03 / 09 • Guided Brainstorm Challenge",
    description: "Think First. Reveal Later. (AI Capabilities vs Irreplaceable Human Mentorship)"
  },
  {
    id: "task2-step4",
    stepNumber: 4,
    title: "Academic Power Vocabulary",
    badge: "Step 04 / 09 • Lexical Resource",
    description: "AI & Educational Pedagogy Lexicon: 12 Band 9 Vocabulary Items & Model Sentences"
  },
  {
    id: "task2-step5",
    stepNumber: 5,
    title: "Sample Introduction & Thesis",
    badge: "Step 05 / 09 • Sample Introduction & Thesis",
    description: "Formula: Paraphrase Prompt + State Clear Largely Disagree Stance"
  },
  {
    id: "task2-step6",
    stepNumber: 6,
    title: "Body 1 & 2: Opinion Side",
    badge: "Step 06 / 09 • Opinion Side (Body Paras 1 & 2)",
    description: "Format: 1 Main Reason + Supporting Reasons + Example (Empathy & Critical Thinking)"
  },
  {
    id: "task2-step7",
    stepNumber: 7,
    title: "Body 3: Non-Opinion Side",
    badge: "Step 07 / 09 • Non-Opinion Side (Body Para 3 Concession)",
    description: "Format: 1 Main Reason + Supporting Reasons + Example (AI as Augmentative Tool)"
  },
  {
    id: "task2-step8",
    stepNumber: 8,
    title: "Sample Conclusion",
    badge: "Step 08 / 09 • Sample Conclusion & Synthesis",
    description: "Formula: Sum-Up All Main Ideas + Restate Decisive Disagree Opinion"
  },
  {
    id: "task2-step9",
    stepNumber: 9,
    title: "Final Essay Submission",
    badge: "Step 09 / 09 • Final Essay Submission",
    description: "Complete 5-Paragraph Band 9 Model Essay Response (AI vs Classroom Teachers)"
  }
];

export const TASK2_TITLES = TASK2_STEPS.map((s) => s.title);
