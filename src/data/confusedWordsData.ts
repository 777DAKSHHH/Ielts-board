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
  blankWord: string;
  options: string[];
  explanation: string;
  ruleTag: string;
}

export interface MatrixRow {
  feature: string;
  wordValues?: Record<string, string>;
  below?: string;
  under?: string;
  underneath?: string;
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
  matrixComparison: MatrixRow[];
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

/* ==========================================================================
   EPISODE 02: RISE vs. RAISE vs. ARISE
   The Transitive vs. Intransitive Trap in IELTS Writing & Speaking
   ========================================================================== */
export const CONFUSED_WORDS_EPISODE_2: ConfusedWordsSeriesData = {
  seriesId: "episode-2",
  episodeNumber: 2,
  seriesTitle: "English Nuance Lab • Commonly Confused Words",
  seriesSubtitle: "Master the subtle grammatical and semantic distinctions in IELTS Academic English.",
  episodeTitle: "Rise vs. Raise vs. Arise",
  targetWords: ["RISE", "RAISE", "ARISE"],

  classroomPrompt: {
    leadQuestion: "Classroom Challenge: Why is 'wheat exports raised to 25m' a critical Band 5 error, while 'governments raised taxes' is Band 9?",
    subtext: "Before revealing the linguistic breakdown, challenge your students with these 3 questions to expose transitive vs. intransitive verb traps.",
    discussionQuestions: [
      {
        id: 1,
        question: "Can you spot the grammatical error: 'Between 1985 and 1988, the volume of Canadian grain raised dramatically'? What should it be, and why?",
        hint: "Did an external person physically pick up the grain, or did the statistical figure climb on its own?"
      },
      {
        id: 2,
        question: "Why do we say 'Governments should raise taxes' and 'He raised a valid question', but NEVER 'Taxes raised last year'?",
        hint: "Look for the direct object. Can 'raise' ever exist without an object receiving the action?"
      },
      {
        id: 3,
        question: "When do we use 'arise' instead of 'rise'? Can you say 'The sun arose' or 'Temperatures arose'?",
        hint: "Think about concrete physical ascent versus abstract problems, conflicts, or opportunities coming into existence."
      }
    ]
  },

  words: [
    {
      word: "RISE",
      pronunciation: "/raɪz/ • rose /rəʊz/, risen /ˈrɪz.ən/",
      partOfSpeech: "Intransitive Verb (No Direct Object)",
      themeColor: "#2563eb",
      bgLight: "#eff6ff",
      borderColor: "#bfdbfe",
      coreConcept: "Autonomous Upward Movement, Statistical Growth & Natural Ascent",
      visualMetaphor: "The Autonomous Hot Air Balloon",
      visualMetaphorDetail:
        "Picture a hot air balloon ascending into the dawn sky on its own. No rope is pulling it, and no person is pushing it upward. In English, when figures, temperatures, costs, or objects go up by themselves without a direct grammatical object receiving the action, you MUST use RISE.",
      keyRule:
        "Subject + RISE (+ Adverb / Prepositional Phrase). NEVER takes a direct object! (e.g. 'Exports rose sharply', NOT 'exports raised').",
      usageDomains: [
        {
          domainTitle: "IELTS Task 1 Data & Trends",
          description: "Describing line graphs, bar charts, and statistical climbs.",
          examples: [
            "Canadian wheat exports rose to an apex of 25 million tonnes in 1988.",
            "The proportion of elderly citizens is projected to rise steadily over the next decade."
          ]
        },
        {
          domainTitle: "Natural Phenomena & Physical Elevation",
          description: "Objects or elements ascending by natural or inherent forces.",
          examples: [
            "The sun rises in the east and sets in the west.",
            "Floodwaters continued to rise throughout the stormy night."
          ]
        },
        {
          domainTitle: "Economic & Market Indicators",
          description: "Prices, rates, inflation, or costs climbing autonomously.",
          examples: [
            "Consumer price indices rose by 3.8% during the fourth fiscal quarter.",
            "If greenhouse emissions continue unabated, global mean temperatures will inevitably rise."
          ]
        }
      ],
      abstractIdioms: [
        {
          phrase: "Rise to the occasion",
          meaning: "To perform extraordinarily well when confronted with a difficult crisis."
        },
        {
          phrase: "Rise through the ranks",
          meaning: "To advance from junior entry-level positions to executive leadership."
        },
        {
          phrase: "A meteoric rise",
          meaning: "An exceptionally rapid ascension to success, prestige, or prominence."
        }
      ],
      memoryHack:
        "Remember the 'I' in RISE: 'I' do it by myself! (Intransitive = Internal force, no external direct object).",
      commonPitfall:
        "Writing 'The graph illustrates that sales raised by 15%'. Sales cannot raise anything; sales ROSE!",
      sampleSentence:
        "During the five-year reporting period, the number of hours worked by doctors rose steeply from 40 to 52 hours per week."
    },
    {
      word: "RAISE",
      pronunciation: "/reɪz/ • raised /reɪzd/, raised /reɪzd/",
      partOfSpeech: "Transitive Verb (Requires a Direct Object)",
      themeColor: "#059669",
      bgLight: "#ecfdf5",
      borderColor: "#a7f3d0",
      coreConcept: "Actively Elevating, Increasing, or Cultivating Something Else",
      visualMetaphor: "The Industrial Crane",
      visualMetaphorDetail:
        "Picture a heavy-duty industrial crane lifting a steel girder into the sky. The crane (Agent) performs the lifting action ON the girder (Object). You cannot simply 'raise' in a void—you must always raise SOMETHING. In IELTS essays, this is used when people, governments, or institutions actively increase or elevate something.",
      keyRule:
        "Subject + RAISE + DIRECT OBJECT. Must always take an object! (e.g. 'The government raised taxes', 'Students raised their hands').",
      usageDomains: [
        {
          domainTitle: "Policy, Taxation & Fiscal Actions",
          description: "Governments or institutions actively increasing rates, tariffs, or fees.",
          examples: [
            "The administration raised municipal taxes to finance residential solar subsidies.",
            "Airlines raised international ticket fares to offset surging jet fuel costs."
          ]
        },
        {
          domainTitle: "Awareness, Standards & Dialogue",
          description: "Bringing topics to public consciousness or demanding higher criteria.",
          examples: [
            "Media campaigns play an indispensable role in raising public awareness about climate change.",
            "The recent investigative audit raised profound ethical questions about corporate accountability."
          ]
        },
        {
          domainTitle: "Nurturing, Funding & Upbringing",
          description: "Collecting capital, fostering children, or breeding livestock.",
          examples: [
            "The humanitarian agency successfully raised £3.2 million for disaster relief.",
            "Parents strive to raise conscientious children equipped for future challenges."
          ]
        }
      ],
      abstractIdioms: [
        {
          phrase: "Raise the bar",
          meaning: "To significantly elevate expectations, standards, or performance benchmarks."
        },
        {
          phrase: "Raise eyebrows",
          meaning: "To cause surprise, mild disapproval, or skepticism in observers."
        },
        {
          phrase: "Raise red flags",
          meaning: "To signal severe warning signs of imminent danger or irregularities."
        }
      ],
      memoryHack:
        "Remember the 'A' in RAISE: 'A'nother object is mandatory! (Transitive = Action transferred to an object).",
      commonPitfall:
        "Confusing passive with active voice: 'Taxes were raised by the state' is correct (passive), but never 'Taxes raised in 2024'.",
      sampleSentence:
        "To expedite national decarbonisation, policymakers must raise tariffs on carbon-intensive fossil fuel imports."
    },
    {
      word: "ARISE",
      pronunciation: "/əˈraɪz/ • arose /əˈrəʊz/, arisen /əˈrɪz.ən/",
      partOfSpeech: "Intransitive Verb (No Direct Object)",
      themeColor: "#d97706",
      bgLight: "#fffbeb",
      borderColor: "#fde68a",
      coreConcept: "Coming into Existence, Emerging, or Occurring as a Result of Circumstances",
      visualMetaphor: "Geothermal Steam Emerging from the Earth",
      visualMetaphorDetail:
        "Picture steam suddenly hissing and emerging out of fissures in volcanic rock. The steam was not lifted by a crane, nor is it a numerical bar chart going up. It is an abstract situation or challenge emerging into reality. In IELTS Task 2, ARISE is reserved for problems, dilemmas, disputes, and opportunities.",
      keyRule:
        "Subject (Abstract Noun) + ARISE. Almost exclusively used with abstract nouns: problems arise, disputes arise, opportunities arise. NO DIRECT OBJECT!",
      usageDomains: [
        {
          domainTitle: "Problems, Conflicts & Complications",
          description: "Obstacles or dilemmas emerging unexpectedly from an underlying situation.",
          examples: [
            "Severe logistical complications arose when the global supply chain fractured.",
            "Fierce border disputes frequently arise when transboundary water reserves run low."
          ]
        },
        {
          domainTitle: "Questions, Doubts & Inquiries",
          description: "Uncertainties surfacing during scholarly or legal investigations.",
          examples: [
            "Profound moral dilemmas arise when autonomous artificial intelligence directs warfare.",
            "Should any legal ambiguities arise, the arbitration tribunal will intervene."
          ]
        },
        {
          domainTitle: "Opportunities & Fortuitous Openings",
          description: "Favourable possibilities presenting themselves in new environments.",
          examples: [
            "Tremendous commercial opportunities arise as emerging markets pivot towards clean energy.",
            "As digital infrastructure matures, unprecedented avenues for remote collaboration arise."
          ]
        }
      ],
      abstractIdioms: [
        {
          phrase: "As the need arises",
          meaning: "Whenever a specific operational requirement or circumstance appears."
        },
        {
          phrase: "Should the occasion arise",
          meaning: "If the situation happens to present itself in due course."
        },
        {
          phrase: "Arising out of / from",
          meaning: "Stemming or resulting directly as a consequence of a prior event."
        }
      ],
      memoryHack:
        "Remember the 'A' + 'RISE' = 'A Real Issue Starts Emerging' (Abstract problems coming to life).",
      commonPitfall:
        "Never use 'arise' for physical heights or numerical data! Never write: 'Wheat exports arose to 25 million' ❌.",
      sampleSentence:
        "Substantial societal unrest may arise if rapid industrial automation displaces working-class labor without adequate retraining."
    }
  ],

  matrixComparison: [
    {
      feature: "Grammatical Transitivity",
      wordValues: {
        RISE: "Intransitive (NEVER takes a direct object: S + V)",
        RAISE: "Transitive (MUST take a direct object: S + V + O)",
        ARISE: "Intransitive (NEVER takes a direct object: S + V)"
      }
    },
    {
      feature: "Core Semantic Meaning",
      wordValues: {
        RISE: "To ascend, go up, or increase autonomously",
        RAISE: "To lift, elevate, or increase something else",
        ARISE: "To come into existence, emerge, or occur"
      }
    },
    {
      feature: "Principal Forms (Base / Past / Participle)",
      wordValues: {
        RISE: "rise / rose / risen (Irregular)",
        RAISE: "raise / raised / raised (Regular -ed)",
        ARISE: "arise / arose / arisen (Irregular)"
      }
    },
    {
      feature: "Typical Subjects / Objects",
      wordValues: {
        RISE: "Subjects: Figures, data, prices, sun, tides, temperatures",
        RAISE: "Objects: Taxes, funds, questions, children, hands, standards",
        ARISE: "Subjects: Problems, disputes, complications, doubts, opportunities"
      }
    },
    {
      feature: "IELTS High-Band Application",
      wordValues: {
        RISE: "Task 1 Line Graphs: 'Exports rose dramatically from 19m to 25m.'",
        RAISE: "Task 2 Solutions: 'Governments should raise taxes on polluters.'",
        ARISE: "Task 2 Challenges: 'Serious complications arise when capital is scarce.'"
      }
    },
    {
      feature: "Critical Pitfall to Avoid",
      wordValues: {
        RISE: "Never say 'exports raised' ❌ (must be 'rose')",
        RAISE: "Never omit the object: 'the prices raised' ❌ (must be 'were raised')",
        ARISE: "Never use for numbers: 'numbers arose' ❌ (must be 'rose')"
      }
    }
  ],

  practiceDrills: [
    {
      id: 1,
      sentence: "According to the bar chart, the proportion of female university graduates _____ significantly from 32% to 48% between 1995 and 2010.",
      blankWord: "rose",
      options: ["rose", "raised", "arose"],
      explanation:
        "Correct! We use the past tense 'rose' because statistical data increases autonomously without an external direct object.",
      ruleTag: "Task 1 Data Trend"
    },
    {
      id: 2,
      sentence: "To mitigate urban gridlock, local authorities voted to _____ the tolls on major arterial highways during peak hours.",
      blankWord: "raise",
      options: ["rise", "raise", "arise"],
      explanation:
        "Correct! 'Raise' is a transitive verb that directly acts upon the object ('the tolls on major arterial highways').",
      ruleTag: "Transitive Policy Action"
    },
    {
      id: 3,
      sentence: "Unforeseen complications may _____ if the government attempts to implement rapid decarbonisation without subsidising low-income households.",
      blankWord: "arise",
      options: ["rise", "raise", "arise"],
      explanation:
        "Correct! 'Arise' is the precise academic verb for problems, obstacles, or complications emerging into existence.",
      ruleTag: "Abstract Problem Emerging"
    },
    {
      id: 4,
      sentence: "The educational documentary successfully _____ global awareness concerning the alarming volume of plastic waste in our oceans.",
      blankWord: "raised",
      options: ["rose", "raised", "arose"],
      explanation:
        "Correct! 'Raise awareness' is a classic high-band academic collocation where 'awareness' is the direct object of 'raised'.",
      ruleTag: "Transitive Object"
    },
    {
      id: 5,
      sentence: "A heated legal dispute _____ between the patent holders and the pharmaceutical manufacturing conglomerate.",
      blankWord: "arose",
      options: ["rose", "raised", "arose"],
      explanation:
        "Correct! The past tense 'arose' is used when disputes, conflicts, or controversies come into being.",
      ruleTag: "Abstract Conflict Occurring"
    },
    {
      id: 6,
      sentence: "If consumer demand for electric vehicles continues to accelerate, the market price of battery minerals will undoubtedly _____.",
      blankWord: "rise",
      options: ["rise", "raise", "arise"],
      explanation:
        "Correct! When prices or economic indicators climb on their own without a direct object, 'rise' is required.",
      ruleTag: "Autonomous Price Movement"
    }
  ]
};

export const CONFUSED_WORDS_EPISODES: ConfusedWordsSeriesData[] = [
  CONFUSED_WORDS_EPISODE_1,
  CONFUSED_WORDS_EPISODE_2
];

