import { StepDefinition } from "../types";

export const TASK1_STEPS: StepDefinition[] = [
  {
    id: "task1-step1",
    stepNumber: 1,
    title: "Cryptic Audio Guess",
    badge: "Step 01 / 08 • Cryptic Audio Guess",
    description: "Listen First: Islip Town Centre Redevelopment Briefing"
  },
  {
    id: "task1-step2",
    stepNumber: 2,
    title: "Task Prompt & Development Maps Smartboard",
    badge: "Step 02 / 08 • Prompt & Comparative Maps",
    description: "Interactive Scanned Maps & Hotspots (Current Layout vs Planned Future Development)"
  },
  {
    id: "task1-step3",
    stepNumber: 3,
    title: "Urban Planning & Map Transformation Lexicon",
    badge: "Step 03 / 08 • Academic Transformation Lexicon",
    description: "Pedestrianise, Circumscribe, Demolish, Reconfigure, Erect, Diminution, Bypass, Preserve"
  },
  {
    id: "task1-step4",
    stepNumber: 4,
    title: "Sample Introduction & Macro Overview",
    badge: "Step 04 / 08 • Sample Introduction & Macro Overview",
    description: "Map Scope Paraphrase & 2-Sentence Qualitative Overview (Zero 'Provided', Perimeter Bypass, Pedestrianised Hub & Green Space Reduction)"
  },
  {
    id: "task1-step5",
    stepNumber: 5,
    title: "Spatial Bifurcation & Grouping Strategy",
    badge: "Step 05 / 08 • Spatial Grouping Strategy",
    description: "Grouping Tactics: Body 1 Transport Infrastructure & Northern Zone vs Body 2 Southern Zone & Amenities"
  },
  {
    id: "task1-step6",
    stepNumber: 6,
    title: "Body 1: Transport & Northern Zone Overhaul",
    badge: "Step 06 / 08 • Body 1 — Transport & Northern Sector",
    description: "Dual Carriageway Circumscription, Main Road Pedestrianisation, Bus Station, Shopping Centre, Car Park & NE Housing"
  },
  {
    id: "task1-step7",
    stepNumber: 7,
    title: "Body 2 & Complete Band 9 Model",
    badge: "Step 07 / 08 • Body 2 & Full Model Report",
    description: "Southern Shops Retention, Parkland Diminution, SE Housing, School Bypass Connection & Full 254-Word Model Report"
  },
  {
    id: "task1-step8",
    stepNumber: 8,
    title: "Spatial Connectors & Extension",
    badge: "Step 08 / 08 • Spatial Prepositions & Connectors",
    description: "Directional Signposts, Spatial Prepositions, English Nuance Lab, and General Training Task 1 Masterclass"
  }
];

export const TASK1_TITLES = TASK1_STEPS.map((s) => s.title);
