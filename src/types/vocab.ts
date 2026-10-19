export interface VocabItem {
  word: string;
  meaning: string;
  example: string;
  phonetic?: string;
  pronunciation?: string;
  partOfSpeech?: string;
  pos?: string;
  band?: number;
  naturalCollocation?: string;
  organicExample?: string;
  mechanicalPitfall?: string;
  definition?: string;
  band9Context?: string;
  pitfall?: string;
  topic?: string;
  cefr?: string;
  usageNotes?: string;
  tutorTip?: string;
  collocations?: string[];
}
