export interface ConfusedWordItem {
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  themeColor: string;
  bgLight: string;
  borderColor: string;
  coreConcept: string;
  visualMetaphor: string;
  visualMetaphorDetail: string;
  keyRule: string;
  usageDomains: {
    domainTitle: string;
    description: string;
    examples: string[];
  }[];
  abstractIdioms?: {
    phrase: string;
    meaning: string;
  }[];
  memoryHack: string;
  commonPitfall: string;
  sampleSentence: string;
}

export interface PracticeQuizQuestion {
  id: number;
  sentence: string;
  blankWord: "below" | "under" | "underneath";
  options: ("below" | "under" | "underneath")[];
  explanation: string;
  ruleTag: string;
}

export interface ConfusedWordsSeriesData {
  seriesId: string;
  episodeNumber: number;
  seriesTitle: string;
  seriesSubtitle: string;
  episodeTitle: string;
  targetWords: string[];
  classroomPrompt: {
    leadQuestion: string;
    subtext: string;
    discussionQuestions: {
      id: number;
      question: string;
      hint: string;
    }[];
  };
  words: ConfusedWordItem[];
  matrixComparison: {
    feature: string;
    below: string;
    under: string;
    underneath: string;
  }[];
  practiceDrills: PracticeQuizQuestion[];
}

export const CONFUSED_WORDS_EPISODE_1: ConfusedWordsSeriesData = {
  seriesId: "commonly-confused-words",
  episodeNumber: 1,
  seriesTitle: "English Nuance Lab • Commonly Confused Words",
  seriesSubtitle: "Master the subtle distinctions that fluent native speakers make intuitively.",
  episodeTitle: "Below vs. Under vs. Underneath",
  targetWords: ["BELOW", "UNDER", "UNDERNEATH"],

  classroomPrompt: {
    leadQuestion: "Classroom Challenge: Can you explain the subtle difference between BELOW, UNDER, and UNDERNEATH?",
    subtext: "Before revealing the linguistic breakdown, challenge your students with these 3 questions to see how they distinguish position, level, and concealment.",
    discussionQuestions: [
      {
        id: 1,
        question: "Why do we say 'my apartment is below his' and 'the plane flew below the clouds', but NOT 'the dog is below the table'?",
        hint: "Think about an imaginary horizontal benchmark line vs. 3D physical overhead shelter."
      },
      {
        id: 2,
        question: "Why do we say 'under stress', 'under attack', and 'under control', but 'below average' and 'below freezing'?",
        hint: "Notice which one governs abstract states/conditions versus numerical measurements and scales."
      },
      {
        id: 3,
        question: "What extra nuance does 'underneath' add that 'under' doesn't always emphasize?",
        hint: "Consider whether something is hidden from sight, covered, or in direct surface-to-surface contact."
      }
    ]
  },

  words: [
    {
      word: "BELOW",
      pronunciation: "/bɪˈləʊ/",
      partOfSpeech: "Preposition & Adverb",
      themeColor: "#2563eb",
      bgLight: "#eff6ff",
      borderColor: "#bfdbfe",
      coreConcept: "Comparing Levels, Altitudes & Reference Benchmarks",
      visualMetaphor: "The Horizontal Reference Line",
      visualMetaphorDetail:
        "Imagine drawing an invisible horizontal line across space. If Object A is at a lower height, level, or rank than Object B—without needing to be directly covered or in physical contact—we use BELOW.",
      keyRule:
        "Used when comparing relative levels/altitudes of two separate objects, and for all numerical measurements, benchmarks, temperatures, and scales.",
      usageDomains: [
        {
          domainTitle: "1. Relative Levels & Heights (No Contact)",
          description: "Comparing two items on different horizontal planes or altitudes.",
          examples: [
            "My apartment is below his apartment on the fourth floor.",
            "The small passenger plane was flying below the heavy rain clouds.",
            "The valley village lies nestled below the mountain ridge."
          ]
        },
        {
          domainTitle: "2. Measurements, Scales & Benchmarks",
          description: "Used whenever numerical scales, standards, temperatures, or averages are referenced.",
          examples: [
            "His IELTS test scores were significantly below average on the first attempt.",
            "Winter temperatures in northern Canada frequently drop below minus twenty degrees.",
            "The Dead Sea shoreline lies over 400 meters below sea level."
          ]
        }
      ],
      memoryHack:
        "RULER RULE: If you can place a flat horizontal ruler between the two objects or on a measurement chart, use BELOW!",
      commonPitfall:
        "Avoid using 'below' for physical items directly beneath furniture (e.g. avoid 'the dog is below the table'—use 'under').",
      sampleSentence:
        "The pilots maintained cruising altitude below the turbulent clouds, while temperatures outside remained well below zero."
    },
    {
      word: "UNDER",
      pronunciation: "/ˈʌndər/",
      partOfSpeech: "Preposition & Adverb",
      themeColor: "#059669",
      bgLight: "#ecfdf5",
      borderColor: "#a7f3d0",
      coreConcept: "3D Physical Position & Direct Overhead Shelter / Abstract Conditions",
      visualMetaphor: "The Overhead Umbrella",
      visualMetaphorDetail:
        "Imagine an umbrella or roof directly above an object. Object B is vertically directly lower than Object A, where Object A provides shade, shelter, or hangs directly overhead.",
      keyRule:
        "The primary choice for direct 3D vertical positions (something directly beneath furniture or structures), and the standard choice for abstract conditions, legal status, and psychological pressure.",
      usageDomains: [
        {
          domainTitle: "1. 3D Physical Position & Overhead Shelter",
          description: "Direct vertical placement with an object directly above providing overhead cover or shelter.",
          examples: [
            "The golden retriever is sleeping peacefully under the dining table.",
            "The children took refuge under a large oak tree during the thunderstorm.",
            "He crawled under the automobile to inspect the leaking exhaust pipe."
          ]
        },
        {
          domainTitle: "2. Abstract States, Pressures & Legal Conditions",
          description: "Expressing psychological strain, administrative control, legal restrictions, or processes.",
          examples: [
            "The corporate leadership team was forced to make crucial decisions under immense stress.",
            "Despite unexpected turbulence, the flight crew kept the aircraft completely under control.",
            "The financial institution is currently under official government investigation for fraud."
          ]
        }
      ],
      abstractIdioms: [
        { phrase: "under attack", meaning: "Being subjected to active physical or verbal hostility" },
        { phrase: "under stress / pressure", meaning: "Experiencing acute psychological strain or urgency" },
        { phrase: "under control", meaning: "Managed properly without chaos or disruption" },
        { phrase: "under the impression", meaning: "Believing something to be true, often mistakenly" },
        { phrase: "under the age of 18", meaning: "Legally considered a minor before the threshold" },
        { phrase: "under construction / review", meaning: "Undergoing an active formal process" }
      ],
      memoryHack:
        "UMBRELLA & PRESSURE RULE: If it's directly sheltered overhead by an umbrella/table, or if it represents abstract pressure/condition, use UNDER!",
      commonPitfall:
        "Avoid using 'under' when simply comparing levels without overhead coverage (e.g., 'temperatures under zero' is unnatural—use 'below zero').",
      sampleSentence:
        "The team worked tirelessly under strict deadlines and immense pressure, keeping every phase of the project firmly under control."
    },
    {
      word: "UNDERNEATH",
      pronunciation: "/ˌʌndərˈniːθ/",
      partOfSpeech: "Preposition, Adverb & Noun",
      themeColor: "#d97706",
      bgLight: "#fffbeb",
      borderColor: "#fde68a",
      coreConcept: "Concealment, Hidden Layers & Direct Surface Contact",
      visualMetaphor: "The Hidden Layer Beneath",
      visualMetaphorDetail:
        "Imagine pulling back a blanket, rug, or clothing layer. UNDERNEATH strongly emphasizes that the item is hidden from sight, covered up, buried, or in direct touching contact beneath a surface layer.",
      keyRule:
        "The difference is often more obvious and visual: 'underneath' implies concealment, being covered, or tucked away so it is not visible from the surface.",
      usageDomains: [
        {
          domainTitle: "1. Hidden From View & Concealed Objects",
          description: "Emphasizes that an item is covered up and out of plain sight.",
          examples: [
            "She finally discovered her missing car keys hidden underneath the welcome doormat.",
            "The pirate map was buried underneath three feet of packed sand on the shoreline.",
            "The detective found a secret recording device taped underneath the wooden chair."
          ]
        },
        {
          domainTitle: "2. Direct Physical Contact & Layering",
          description: "Touching surfaces or clothing layers worn beneath other garments.",
          examples: [
            "During the Arctic expedition, the researchers wore thermal underwear underneath their heavy ski parkas.",
            "Inspect the plumbing pipes running underneath the wooden kitchen floorboards.",
            "Underneath the glossy paint of the classic vehicle lay original factory steel."
          ]
        },
        {
          domainTitle: "3. Figurative Hidden Feelings & True Nature",
          description: "Describing deep emotions or character traits concealed beneath an outward facade.",
          examples: [
            "Underneath his stern, intimidating exterior lay a remarkably compassionate and warm mentor.",
            "Underneath the polite corporate smile, she was seething with justified indignation."
          ]
        }
      ],
      memoryHack:
        "CONCEALED COAT RULE: Underneath = Under + Hidden! If something is covered, concealed from sight, or touching a layer above, choose UNDERNEATH!",
      commonPitfall:
        "Don't use 'underneath' for abstract states (never say 'underneath stress' or 'underneath control').",
      sampleSentence:
        "She reached underneath the sofa cushions and discovered the vintage gold watch that had been hidden for years."
    }
  ],

  matrixComparison: [
    {
      feature: "Primary Spatial Focus",
      below: "Comparing relative levels & altitudes",
      under: "Direct 3D vertical position & overhead cover",
      underneath: "Hidden, covered, or touching layers"
    },
    {
      feature: "Mental Visual Metaphor",
      below: "Horizontal baseline / level plane",
      under: "Overhead umbrella / 3D furniture roof",
      underneath: "Concealed layer beneath a covering"
    },
    {
      feature: "Physical Contact Required?",
      below: "No physical contact (spatially separated)",
      under: "Rarely touching (usually vertical space)",
      underneath: "Frequently in direct touching contact"
    },
    {
      feature: "Temperatures & Measurements",
      below: "✓ Standard (below zero, below average)",
      under: "✗ Incorrect (never *under freezing*)",
      underneath: "✗ Incorrect for numerical scales"
    },
    {
      feature: "Abstract States & Conditions",
      below: "✗ Rare (only fixed idioms like 'below the belt')",
      under: "✓ Dominant (under stress, under attack, under control)",
      underneath: "✗ Not used for abstract pressures"
    },
    {
      feature: "Concealment from Plain View",
      below: "Not implied (items can be fully visible)",
      under: "Neutral (can be visible or shaded)",
      underneath: "✓ Strongly emphasized (tucked away, masked)"
    }
  ],

  practiceDrills: [
    {
      id: 1,
      sentence: "The luxury apartment on the third floor is located immediately _____ our fourth-floor penthouse suite.",
      blankWord: "below",
      options: ["below", "under", "underneath"],
      explanation:
        "Correct! We use 'below' when comparing horizontal floor levels and building altitudes without direct overhead sheltering.",
      ruleTag: "Level Comparison"
    },
    {
      id: 2,
      sentence: "During the turbulent economic transition, the hospital staff worked _____ unprecedented pressure.",
      blankWord: "under",
      options: ["below", "under", "underneath"],
      explanation:
        "Correct! We say 'under pressure', 'under stress', or 'under attack' for abstract psychological or operational conditions.",
      ruleTag: "Abstract Pressure"
    },
    {
      id: 3,
      sentence: "The suspect had secretly taped an encrypted USB drive _____ the bottom of the conference table.",
      blankWord: "underneath",
      options: ["below", "under", "underneath"],
      explanation:
        "Correct! 'Underneath' is ideal here because it highlights concealment and direct physical contact with the surface.",
      ruleTag: "Hidden Concealment"
    },
    {
      id: 4,
      sentence: "According to the meteorological bureau, tonight's temperature will plunge well _____ freezing.",
      blankWord: "below",
      options: ["below", "under", "underneath"],
      explanation:
        "Correct! Numerical scales, benchmarks, and temperatures always take 'below' (below freezing, below zero, below average).",
      ruleTag: "Temperature / Measurement"
    },
    {
      id: 5,
      sentence: "The frightened puppy ran across the living room and hid safely _____ the dining room sofa.",
      blankWord: "under",
      options: ["below", "under", "underneath"],
      explanation:
        "Correct! 'Under' is the natural, primary preposition for 3D physical position directly beneath furniture.",
      ruleTag: "3D Physical Position"
    },
    {
      id: 6,
      sentence: "He wore a moisture-wicking thermal undershirt _____ his crisp formal tuxedo.",
      blankWord: "underneath",
      options: ["below", "under", "underneath"],
      explanation:
        "Correct! When garments or materials are layered in direct physical contact under another layer, 'underneath' is the most accurate word.",
      ruleTag: "Layering & Contact"
    }
  ]
};
