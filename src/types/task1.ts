import { VocabItem } from "./vocab";

export interface MapZoneFeature {
  location: string;
  in2002: string;
  today: string;
  changeType: "constructed" | "demolished_replaced" | "repurposed" | "preserved";
  description: string;
  category: "residential" | "commercial" | "industrial" | "transport" | "leisure" | "greenery";
}

export interface Task1MapData {
  leftAndUpperZone: MapZoneFeature[];
  rightAndLowerZone: MapZoneFeature[];
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
  mapData: Task1MapData;
  vocabList: VocabItem[];
  vocabHunt: string[];
  bp1: BpSection;
  bp2: BpSection;
  processingGroups: ProcessingGroup[];
  connectors: ConnectorItem[];
}
