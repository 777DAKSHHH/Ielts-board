import { VocabItem } from "./vocab";

export interface TrophicTier {
  id: string;
  tierNumber: number;
  name: string;
  badge: string;
  category: "producers" | "primary_consumers" | "secondary_consumers" | "tertiary_consumers" | "quaternary_consumers" | "decomposers";
  energyKcal: number | string;
  energyPercentOfBase: string;
  organisms: string;
  heatLoss: string;
  wasteToDecomposers: string;
  description: string;
  band9Phrase: string;
}

export interface Task1DiagramData {
  trophicTiers: TrophicTier[];
  decomposerCycle: {
    title: string;
    inputs: string[];
    outputs: string[];
    role: string;
    description: string;
    band9Phrase: string;
  };
  energyLossSummary: {
    retentionRate: string;
    lossRate: string;
    baseEnergy: string;
    apexEnergy: string;
    lossMultiplier: string;
  };
}

export interface BpSection {
  title: string;
  focus: string;
  points: string[];
  flow?: string[];
  takeaways?: string[];
}

export interface ProcessingGroup {
  title: string;
  items: string[];
}

export interface ConnectorItem {
  phrase: string;
  purpose: string;
  example: string;
}

export interface Task1Data {
  id: string;
  taskType: string;
  title: string;
  questionText: string;
  imageFileName: string;
  audioUrl: string;
  audioClueText: string;
  sampleIntro: string;
  sampleOverview: string;
  timingSeconds: number;
  diagramData: Task1DiagramData;
  vocabList: VocabItem[];
  vocabHunt: string[];
  bp1: BpSection;
  bp2: BpSection;
  processingGroups: ProcessingGroup[];
  connectors: ConnectorItem[];
}
