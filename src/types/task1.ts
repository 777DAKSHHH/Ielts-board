import { VocabItem } from "./vocab";

export interface PacificConditionFeature {
  id: "normal" | "el_nino";
  title: string;
  badge: string;
  tradeWinds: string;
  upperWinds: string;
  waterThermocline: string;
  upwellingStatus: string;
  rainfallPattern: string;
  australiaCondition: {
    climate: string;
    weather: string;
    rainfall: string;
    visualDetail: string;
  };
  peruCondition: {
    climate: string;
    marineLife: string;
    fisheryStatus: string;
    visualDetail: string;
  };
  band9Phrase: string;
  summary: string;
}

export interface ComparisonHotspot {
  id: string;
  title: string;
  zone: "west_pacific" | "east_pacific" | "atmosphere" | "marine_depth";
  normalState: string;
  elNinoState: string;
  contrastKey: string;
  band9Sentence: string;
}

export interface Task1DiagramData {
  conditions: PacificConditionFeature[];
  hotspots: ComparisonHotspot[];
  comparisonsSummary: Record<string, string>;
  // Backwards compatibility aliases
  schools?: any[];
  countries?: any[];
  convergences?: any[];
  intersections?: any[];
}

export type Task1GraphData = Task1DiagramData;
export type Task1TableData = Task1DiagramData;

// Backwards-compatible dummy interfaces if imported elsewhere
export interface SchoolData {
  id: string;
  name: string;
  color: string;
  badge: string;
  dataPoints: { year: number; value: number; annotation?: string }[];
  netChange: string;
  trendSummary: string;
  band9Phrase: string;
}
export type CountryData = SchoolData;

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
  graphData: Task1DiagramData;
  tableData?: Task1DiagramData;
  vocabList: VocabItem[];
  vocabHunt: string[];
  bp1: BpSection;
  bp2: BpSection;
  processingGroups: ProcessingGroup[];
  connectors: ConnectorItem[];
  modelReport?: {
    wordCount: number;
    paragraphs: {
      id: string;
      title: string;
      text: string;
      wordCount: number;
      badges: string[];
    }[];
  };
}
