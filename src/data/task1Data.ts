export interface VocabItem {
  word: string;
  meaning: string;
  example: string;
  phonetic?: string;
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
  processStages: {
    rawMaterial: string[];
    cleanPulp: string[];
    route1: string[];
    route2: string[];
  };
  vocabList: VocabItem[];
  vocabHunt: string[];
  bp1: {
    title: string;
    focus: string;
    points: string[];
    flow: string[];
  };
  bp2: {
    title: string;
    focus: string;
    points: string[];
    flow: string[];
  };
  processingGroups: {
    title: string;
    items: string[];
  }[];
  connectors: {
    phrase: string;
    purpose: string;
    example: string;
  }[];
}

export const TASK1_DATA: Task1Data = {
  id: "pulp-paper-process-week-13-wed",
  taskType: "Linear process with a branching point",
  title: "Pulp and Paper Making Process",
  questionText:
    "The diagram gives information about the process of making pulp and paper.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
  imageFileName: "week-13-wed-wt1-pulp-paper-process.png",
  audioUrl: "materials/week-13-wed-wt1-cryptic-briefing.wav",
  audioClueText:
    "Today’s diagram follows a manufacturing process with one main stage and two final routes. It begins with natural wood, which is turned into smaller pieces. At the same time, another supply of prepared wood pieces enters the system. Both sources are sent into a large processing vessel. The material then passes through washing and screening before a clean intermediate substance is produced. At that point, the process branches in two directions. The first route uses a forming machine, drying, a reel and a cutter, eventually producing stacked units. The second route involves additional cleaning, drying and several pressing stages before a final drying stage and a rolled product. Listen carefully and try to identify what is being manufactured, where the branching point occurs, and how the two routes differ.",
  timingSeconds: 180,
  sampleIntro:
    "The process illustrates the steps involved in producing pulp and paper, beginning with the preparation of wood and culminating in the manufacture of paper bales and rolls.",
  sampleOverview:
    "Overall, the process begins with two sources of wood material, which are converted into clean pulp before branching into two distinct production lines: one for rough paper used in boxes and the other for refined paper intended for printing.",
  processStages: {
    rawMaterial: [
      "Trees",
      "Logs",
      "Chipping",
      "Purchased wood chips"
    ],
    cleanPulp: [
      "Digestor",
      "Pulp",
      "Washers",
      "Pulp screen",
      "Clean pulp"
    ],
    route1: [
      "Clean pulp",
      "Pulp former",
      "Pulp dryers",
      "Pulp reel",
      "Pulp cutter",
      "Paper bales"
    ],
    route2: [
      "Clean pulp",
      "Pulp cleaners",
      "Pulp dryers",
      "Pulp presses",
      "Paper presses",
      "Paper dryers",
      "Paper rolls"
    ]
  },
  vocabList: [
    {
      word: "be converted into",
      meaning: "change into another form",
      example: "The logs are converted into wood chips."
    },
    {
      word: "be fed into",
      meaning: "be put into a machine/system for processing",
      example: "The wood chips are fed into the digestor."
    },
    {
      word: "undergo",
      meaning: "experience a process",
      example: "The material undergoes several stages of processing."
    },
    {
      word: "be subjected to",
      meaning: "undergo a particular treatment",
      example: "The pulp is subjected to washing and screening."
    },
    {
      word: "be processed into",
      meaning: "transformed through processing",
      example: "The material is processed into clean pulp."
    },
    {
      word: "branch into",
      meaning: "divide into separate routes",
      example: "The clean pulp branches into two production lines."
    },
    {
      word: "culminate in",
      meaning: "eventually result in",
      example: "The first production route culminates in paper bales."
    },
    {
      word: "subsequently",
      meaning: "afterwards",
      example: "The pulp is subsequently dried and pressed."
    },
    {
      word: "be channelled into",
      meaning: "be directed into a particular route",
      example: "The clean pulp is channelled into two separate production lines."
    },
    {
      word: "undergo further processing",
      meaning: "receive additional treatment",
      example: "The pulp undergoes further processing before becoming refined paper."
    }
  ],
  vocabHunt: [
    "be converted into",
    "be fed into",
    "undergo",
    "be subjected to",
    "be processed into",
    "branch into",
    "culminate in",
    "subsequently",
    "be channelled into",
    "undergo further processing"
  ],
  bp1: {
    title: "Body 1 — Raw Material → Clean Pulp",
    focus: "The shared pulp-making stage before the process divides.",
    points: [
      "Trees are converted into logs and then chipped.",
      "Purchased wood chips enter the process at the same time.",
      "Both sources are fed into the digestor, producing pulp.",
      "The pulp passes through washers and a pulp screen to become clean pulp."
    ],
    flow: [
      "Trees → Logs → Chipping",
      "Purchased wood chips → Digestor",
      "Both sources → Pulp → Washers → Pulp screen → Clean pulp"
    ]
  },
  bp2: {
    title: "Body 2 — Clean Pulp → Two Types of Paper",
    focus: "The two production routes and their different final products.",
    points: [
      "Route 1 produces rough paper for boxes through forming, drying, reeling and cutting, ending in paper bales.",
      "Route 2 produces refined paper for printing through additional cleaning, drying, pressing and a final drying stage, ending in paper rolls.",
      "The second route therefore involves additional cleaning, pressing and drying before the final product is produced in rolls."
    ],
    flow: [
      "Route 1: Clean pulp → Pulp former → Pulp dryers → Pulp reel → Pulp cutter → Paper bales",
      "Route 2: Clean pulp → Pulp cleaners → Pulp dryers → Pulp presses → Paper presses → Paper dryers → Paper rolls"
    ]
  },
  processingGroups: [
    {
      title: "PROCESSING",
      items: ["be converted into", "be fed into", "undergo", "be subjected to"]
    },
    {
      title: "STRUCTURE",
      items: ["branch into", "be channelled into"]
    },
    {
      title: "SEQUENCE / RESULT",
      items: ["subsequently", "culminate in"]
    }
  ],
  connectors: [
    {
      phrase: "Initially",
      purpose: "first stage",
      example: "Initially, trees are converted into logs."
    },
    {
      phrase: "At the same time",
      purpose: "parallel input",
      example: "At the same time, purchased wood chips are introduced into the process."
    },
    {
      phrase: "Following this",
      purpose: "next stage",
      example: "Following this, the material is washed and screened."
    },
    {
      phrase: "Once",
      purpose: "when one stage is completed",
      example: "Once clean pulp has been produced, it is directed into two separate routes."
    },
    {
      phrase: "Thereafter",
      purpose: "subsequent stage",
      example: "Thereafter, the pulp undergoes further processing."
    },
    {
      phrase: "Meanwhile",
      purpose: "parallel development",
      example: "Meanwhile, the second production line involves additional pressing and drying."
    },
    {
      phrase: "Ultimately",
      purpose: "final outcome",
      example: "Ultimately, the two routes produce paper bales and paper rolls."
    }
  ]
};
