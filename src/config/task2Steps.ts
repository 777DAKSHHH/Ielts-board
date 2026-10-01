import { StepDefinition } from "../types";

export const TASK2_STEPS: StepDefinition[] = [
  {
    id: "task2-step1",
    stepNumber: 1,
    title: "Audio Briefing & Guess",
    badge: "Step 01 / 09 • Cryptic Audio Guess",
    description: "Listen First: Guess the Essay Topic"
  },
  {
    id: "task2-step2",
    stepNumber: 2,
    title: "Task 2 Question & Format",
    badge: "Step 02 / 09 • Task Reveal & 4-Para Format",
    description: "Deconstruct the Opinion Prompt (Agree or Disagree)"
  },
  {
    id: "task2-step3",
    stepNumber: 3,
    title: "Guided Brainstorm Challenge",
    badge: "Step 03 / 09 • Guided Brainstorm Challenge",
    description: "Think First. Reveal Later."
  },
  {
    id: "task2-step4",
    stepNumber: 4,
    title: "Academic Power Vocabulary",
    badge: "Step 04 / 09 • Lexical Resource",
    description: "Cultural Repatriation & Historical Justice Collocations"
  },
  {
    id: "task2-step5",
    stepNumber: 5,
    title: "Introduction & Thesis",
    badge: "Step 05 / 09 • Introduction & Opinion",
    description: "Paraphrase the Question + Direct Opinion Statement"
  },
  {
    id: "task2-step6",
    stepNumber: 6,
    title: "Agree Points: Repatriation",
    badge: "Step 06 / 09 • Agree Points (Return to Origin)",
    description: "Levelled Arguments: Living Identity, Colonial Justice, Contextual Reunification"
  },
  {
    id: "task2-step7",
    stepNumber: 7,
    title: "Disagree Points: Global Retention",
    badge: "Step 07 / 09 • Disagree Points (Keep in Global Museums)",
    description: "Levelled Arguments: Universal Access, Conservation, Shared Human Heritage"
  },
  {
    id: "task2-step8",
    stepNumber: 8,
    title: "Conclusion & Faculty Angles",
    badge: "Step 08 / 09 • Conclusion + Faculty Extension",
    description: "Sum-up Main Reasons, Restate Opinion & Policy Angles"
  },
  {
    id: "task2-step9",
    stepNumber: 9,
    title: "Final Submission & Wrap-up",
    badge: "Step 09 / 09 • Final Submission & Wrap-up",
    description: "From Guided Thinking to Independent Writing"
  }
];

export const TASK2_TITLES = TASK2_STEPS.map((s) => s.title);
