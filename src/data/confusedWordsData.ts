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

/* ==========================================================================
   EPISODE 03: AFFECT vs. EFFECT vs. IMPACT
   The Action Verb vs. The Noun Outcome vs. The Forceful Collision
   ========================================================================== */
export const CONFUSED_WORDS_EPISODE_3: ConfusedWordsSeriesData = {
  seriesId: "episode-3",
  episodeNumber: 3,
  seriesTitle: "English Nuance Lab • Commonly Confused Words",
  seriesSubtitle: "Master the fundamental divide between action verbs, noun results, and dramatic transformations.",
  episodeTitle: "Affect vs. Effect vs. Impact",
  targetWords: ["AFFECT", "EFFECT", "IMPACT"],

  classroomPrompt: {
    leadQuestion: "Classroom Challenge: Why is 'The policy had a major affect on crime' a Band 5 error, while 'The policy affected crime' is Band 9?",
    subtext: "Before revealing the linguistic breakdown, challenge your students with these 3 questions to expose the most famous verb-vs-noun trap in the English language.",
    discussionQuestions: [
      {
        id: 1,
        question: "Can you feel the arrow leaving the bow versus hitting the target? Which one is AFFECT, and which one is EFFECT?",
        hint: "A is for Action / Arrow (the active verb); E is for End Result / Echo (the noun consequence)."
      },
      {
        id: 2,
        question: "Did you know that 'effect' CAN be a verb and 'affect' CAN be a noun? When does a high-band academic writer use them?",
        hint: "To 'effect change' = to bring a reform into existence; psychological 'affect' = visible facial emotion."
      },
      {
        id: 3,
        question: "When does 'impact' become preferable to 'effect', and why do some examiners warn against overusing 'impact' as a verb?",
        hint: "Reserve 'impact' for massive, seismic, or explosive disruptions rather than subtle, gradual influences."
      }
    ]
  },

  words: [
    {
      word: "AFFECT",
      pronunciation: "/əˈfekt/",
      partOfSpeech: "Verb (Action of Influencing)",
      themeColor: "#2563eb",
      bgLight: "#eff6ff",
      borderColor: "#bfdbfe",
      coreConcept: "To Influence, Alter, or Produce a Change IN Something",
      visualMetaphor: "The Flying Arrow in Motion",
      visualMetaphorDetail:
        "Picture an arrow whistling through the air to hit a target. The arrow is actively doing something to the target. AFFECT is the active verb. It always acts upon an object: 'A affects B'. Whenever you are describing an action that causes a modification, you MUST use AFFECT.",
      keyRule:
        "Subject + AFFECT + Object. Active verb meaning 'to influence or produce a change in'. (Rare formal noun: psychological facial display of emotion).",
      usageDomains: [
        {
          domainTitle: "Academic & Environmental Influence",
          description: "Describing natural phenomena, climates, and ecological shifts.",
          examples: [
            "Rising ocean temperatures directly affect coral reef survival and marine biodiversity.",
            "Deforestation severely affects the hydrological cycle across the Amazon basin."
          ]
        },
        {
          domainTitle: "Socio-Economic & Policy Impact",
          description: "Analyzing governmental decisions, taxation, and demographic welfare.",
          examples: [
            "Escalating interest rates disproportionately affect younger first-time home buyers.",
            "Subsidies on green technology positively affect household energy consumption habits."
          ]
        },
        {
          domainTitle: "Emotional & Psychological Resonance",
          description: "Touching feelings, inspiring empathy, or inducing stress.",
          examples: [
            "The poignant documentary deeply affected audience members and inspired donations.",
            "Chronic workplace stress adversely affects sleep quality and mental well-being."
          ]
        }
      ],
      abstractIdioms: [
        {
          phrase: "Adversely affect",
          meaning: "To exert a noticeably harmful, disruptive, or detrimental influence."
        },
        {
          phrase: "Directly affect",
          meaning: "To influence without intermediate intermediaries or buffers."
        },
        {
          phrase: "Flat affect",
          meaning: "(Psychiatric diagnostic term) A total absence or dampening of emotional facial expression."
        }
      ],
      memoryHack:
        "Remember the 'A' in AFFECT: 'A' = 'Action / Arrow' (The active verb starting with A).",
      commonPitfall:
        "Writing 'It had a big affect on me' ❌. 'Affect' is the action verb, NEVER the noun aftermath!",
      sampleSentence:
        "Severe geopolitical turbulence continues to affect international energy markets and commodity pricing."
    },
    {
      word: "EFFECT",
      pronunciation: "/ɪˈfekt/",
      partOfSpeech: "Noun (The Consequence, Result or Echo)",
      themeColor: "#059669",
      bgLight: "#ecfdf5",
      borderColor: "#a7f3d0",
      coreConcept: "The Result, Consequence, Outcome, or Echo of an Action",
      visualMetaphor: "The Target Dent & Water Ripples",
      visualMetaphorDetail:
        "Picture the dent left in the shield after the arrow strikes it, or the concentric ripples spreading outward in a pond after a pebble drops. EFFECT is the NOUN. It is the tangible aftermath that exists because an action took place. You feel an effect, measure an effect, or observe an effect.",
      keyRule:
        "Noun meaning 'a result or consequence'. (Rare formal academic verb: 'to effect change' = to bring about or accomplish a systemic reform).",
      usageDomains: [
        {
          domainTitle: "Scientific & Climatological Phenomena",
          description: "Natural laws, scientific reactions, and atmospheric outcomes.",
          examples: [
            "The greenhouse effect traps solar radiation within the troposphere, warming the planet.",
            "Researchers evaluated the therapeutic effects of the clinical trial over six months."
          ]
        },
        {
          domainTitle: "Secondary Consequences & Chain Reactions",
          description: "Systemic aftermath, collateral results, and economic repercussions.",
          examples: [
            "The ripple effects of the microchip shortage paralyzed automobile production lines.",
            "Excessive screen usage produces detrimental side effects on adolescent attention spans."
          ]
        },
        {
          domainTitle: "Legal & Regulatory Operational Status",
          description: "Laws, treaties, or mandates officially becoming active and enforceable.",
          examples: [
            "The revised municipal building regulations will come into effect next January.",
            "The carbon taxation legislation remains in full legal effect across member states."
          ]
        }
      ],
      abstractIdioms: [
        {
          phrase: "Take effect",
          meaning: "To become legally operational, enforceable, or biochemically active."
        },
        {
          phrase: "In effect",
          meaning: "For all practical purposes; virtually or in reality."
        },
        {
          phrase: "To that effect",
          meaning: "Indicating that the general meaning or message was similar."
        }
      ],
      memoryHack:
        "Remember the 'E' in EFFECT: 'E' = 'End Result / Echo / Event' (The noun outcome starting with E).",
      commonPitfall:
        "Writing 'Smoking effects your health' ❌. (Must be: 'Smoking affects your health' or 'Smoking has adverse effects on your health').",
      sampleSentence:
        "Urban green corridors produce a measurable cooling effect, counteracting the heat island phenomenon."
    },
    {
      word: "IMPACT",
      pronunciation: "Noun: /ˈɪm.pækt/ • Verb: /ɪmˈpækt/",
      partOfSpeech: "Noun & Verb (Forceful Collision or Seismic Consequence)",
      themeColor: "#d97706",
      bgLight: "#fffbeb",
      borderColor: "#fde68a",
      coreConcept: "A Powerful Physical Collision, or a Striking, High-Magnitude Transformation",
      visualMetaphor: "The Meteorite Crater & Seismic Wave",
      visualMetaphorDetail:
        "Picture a massive meteorite slamming into the earth, carving a vast crater and sending shockwaves for hundreds of kilometers. Unlike a gentle or subtle 'effect', an IMPACT represents dramatic weight, seismic transformation, or physical collision. In IELTS essays, reserve IMPACT for changes that are profound, transformative, or disruptive.",
      keyRule:
        "Noun: 'have an impact on...' / Verb: 'impact...'. Best reserved for high-magnitude, transformative shifts rather than minor variations.",
      usageDomains: [
        {
          domainTitle: "Transformative Technological Shifts",
          description: "Revolutionary breakthroughs that fundamentally disrupt society or industry.",
          examples: [
            "The proliferation of artificial intelligence has had a transformative impact on education.",
            "Mobile internet connectivity made an indelible impact on financial inclusion in rural Africa."
          ]
        },
        {
          domainTitle: "Physical Collisions & Ballistics",
          description: "Heavy kinetic forces, crashes, and structural shock absorption.",
          examples: [
            "Modern vehicle chassis are designed to absorb the crushing impact of a head-on collision.",
            "Seismic engineers installed hydraulic dampers to lessen the impact of earthquake tremors."
          ]
        },
        {
          domainTitle: "High-Stakes Ecological Disruption",
          description: "Large-scale habitat destruction, global warming, and environmental audits.",
          examples: [
            "Commercial trawling leaves an catastrophic impact on seabed coral habitats.",
            "Developers must complete a thorough environmental impact assessment before breaking ground."
          ]
        }
      ],
      abstractIdioms: [
        {
          phrase: "Cushion the impact",
          meaning: "To soften or mitigate the painful blow of a financial or emotional shock."
        },
        {
          phrase: "Environmental impact assessment",
          meaning: "A rigorous formal survey measuring ecological disruption prior to major construction."
        },
        {
          phrase: "High-impact initiative",
          meaning: "A targeted strategy engineered to generate extraordinary, widespread results."
        }
      ],
      memoryHack:
        "IMPACT sounds like 'Compact / Crash' = High-voltage force, heavy collision, and seismic change.",
      commonPitfall:
        "Overusing 'impacted' for trivial everyday things: 'The rain impacted my morning walk' (Too dramatic! Say 'affected my walk').",
      sampleSentence:
        "Decentralized solar installations exert a profound positive impact on rural electrification and energy equity."
    }
  ],

  matrixComparison: [
    {
      feature: "Grammatical Part of Speech",
      wordValues: {
        AFFECT: "Verb (Action: to produce a change or influence)",
        EFFECT: "Noun (Result: the outcome or consequence of an action)",
        IMPACT: "Noun & Verb (Forceful collision or profound disruption)"
      }
    },
    {
      feature: "Physical Visual Metaphor",
      wordValues: {
        AFFECT: "The flying arrow whistling toward the target (Action)",
        EFFECT: "The dent in the shield / ripples in the pond (Result)",
        IMPACT: "The meteorite crater / seismic shockwave (Force)"
      }
    },
    {
      feature: "Relative Scale of Intensity",
      wordValues: {
        AFFECT: "Standard neutral influence (can be subtle, mild, or strong)",
        EFFECT: "Standard outcome or measured result (neutral)",
        IMPACT: "High-magnitude, striking, or transformative disruption"
      }
    },
    {
      feature: "Standard IELTS Collocations",
      wordValues: {
        AFFECT: "adversely affect, directly affect, disproportionately affect",
        EFFECT: "greenhouse effect, take effect, side effect, domino effect",
        IMPACT: "profound impact, environmental impact, cushion the impact"
      }
    },
    {
      feature: "Fatal Band 5 Blunder",
      wordValues: {
        AFFECT: "Using as a noun: 'It had a bad affect' ❌ (Must be 'effect')",
        EFFECT: "Using as a verb: 'It effected my score' ❌ (Must be 'affected')",
        IMPACT: "Overdramatizing tiny daily matters: 'The soup impacted me' ❌"
      }
    }
  ],

  practiceDrills: [
    {
      id: 1,
      sentence: "Prolonged atmospheric exposure to microplastics can severely _____ human metabolic and endocrine health.",
      blankWord: "affect",
      options: ["affect", "effect", "impact"],
      explanation:
        "Correct! We need the active verb 'affect' because microplastics are performing the action of harming human health.",
      ruleTag: "Action Verb (Influence)"
    },
    {
      id: 2,
      sentence: "The newly ratified international carbon tariff treaty will officially come into _____ on the first of January.",
      blankWord: "effect",
      options: ["affect", "effect", "impact"],
      explanation:
        "Correct! 'Come into effect' is a formal idiomatic collocation where 'effect' serves as the noun meaning legal operation.",
      ruleTag: "Legal Operation Noun"
    },
    {
      id: 3,
      sentence: "The sudden eruption of the underwater volcano had an explosive _____ on trans-Pacific maritime shipping routes.",
      blankWord: "impact",
      options: ["affect", "effect", "impact"],
      explanation:
        "Correct! 'Impact' conveys the dramatic, seismic, and high-magnitude disruption caused by the natural disaster.",
      ruleTag: "High-Magnitude Disruption"
    },
    {
      id: 4,
      sentence: "Educational researchers are striving to determine whether mandatory smartphone bans produce any measurable _____ on exam performance.",
      blankWord: "effect",
      options: ["affect", "effect", "impact"],
      explanation:
        "Correct! We need the noun 'effect' modified by 'any measurable' to denote the tangible outcome or result.",
      ruleTag: "Measurable Outcome Noun"
    },
    {
      id: 5,
      sentence: "Unseasonal spring frosts can disastrously _____ stone fruit orchards across the agricultural heartland.",
      blankWord: "affect",
      options: ["affect", "effect", "impact"],
      explanation:
        "Correct! 'Disastrously affect' uses the active verb following the modal auxiliary 'can'.",
      ruleTag: "Active Modal Verb"
    },
    {
      id: 6,
      sentence: "Modern reinforced concrete sea walls are engineered specifically to withstand the violent physical _____ of typhoon waves.",
      blankWord: "impact",
      options: ["affect", "effect", "impact"],
      explanation:
        "Correct! 'Physical impact' refers to the violent, kinetic collision force exerted by ocean storm surges.",
      ruleTag: "Physical Kinetic Force"
    }
  ]
};

/* ==========================================================================
   EPISODE 04: COMPRISE vs. COMPOSE vs. CONSIST OF
   The Parts vs. The Whole Architectural Puzzle in IELTS Writing
   ========================================================================== */
export const CONFUSED_WORDS_EPISODE_4: ConfusedWordsSeriesData = {
  seriesId: "episode-4",
  episodeNumber: 4,
  seriesTitle: "English Nuance Lab • Commonly Confused Words",
  seriesSubtitle: "Master the architectural logic of parts versus wholes in Task 1 data & Task 2 structure.",
  episodeTitle: "Comprise vs. Compose vs. Consist of",
  targetWords: ["COMPRISE", "COMPOSE", "CONSIST OF"],

  classroomPrompt: {
    leadQuestion: "Classroom Challenge: Why is 'The United Kingdom comprises of four countries' a grammatical error in Academic English?",
    subtext: "Before revealing the linguistic breakdown, challenge your students with these 3 questions to untangle the classic 'parts vs. whole' architecture.",
    discussionQuestions: [
      {
        id: 1,
        question: "Which word starts with the PARTS and builds up to the WHOLE, and which starts with the WHOLE containing the parts?",
        hint: "The parts compose the whole; the whole comprises the parts."
      },
      {
        id: 2,
        question: "Can you EVER use 'consist' in the passive voice? Why is 'The solar panel is consisted of silicon cells' a fatal error?",
        hint: "'Consist' is strictly intransitive! It can never take the passive voice ('is consisted of' ❌)."
      },
      {
        id: 3,
        question: "Why do native speakers and editors argue endlessly over 'comprise of'? What is the strict Band 9 rule?",
        hint: "'Comprise' already means 'to embrace or contain'. Adding 'of' is redundant in active voice!"
      }
    ]
  },

  words: [
    {
      word: "COMPRISE",
      pronunciation: "/kəmˈpraɪz/",
      partOfSpeech: "Transitive Verb (The Whole Contains the Parts)",
      themeColor: "#2563eb",
      bgLight: "#eff6ff",
      borderColor: "#bfdbfe",
      coreConcept: "The Whole Contains, Includes, or Embraces the Constituent Parts",
      visualMetaphor: "The Shipping Container Holding Cargo",
      visualMetaphorDetail:
        "Picture a massive intermodal shipping container. The container (the whole) COMPRISES all fifty crates inside it. You say: 'The container comprises fifty crates'. NO 'OF'! The whole embraces the parts. In formal academic English, active 'comprise' NEVER takes the preposition 'of'.",
      keyRule:
        "The Whole + COMPRISE + The Parts. In active voice, NEVER add 'of' (e.g. 'The collection comprises 500 artifacts', NOT 'comprises of').",
      usageDomains: [
        {
          domainTitle: "IELTS Task 1 Data Charts",
          description: "Describing pie charts, segmented bar charts, and data groupings.",
          examples: [
            "The regional transport network comprises four primary suburban railway lines.",
            "The surveyed population comprises three distinct demographic cohorts."
          ]
        },
        {
          domainTitle: "National & Political Jurisdictions",
          description: "Territorial boundaries, provinces, cantons, and federations.",
          examples: [
            "The Swiss Confederation comprises twenty-six sovereign cantons.",
            "The European economic zone comprises both EU member states and EEA signatories."
          ]
        },
        {
          domainTitle: "Institutional & Board Membership",
          description: "Committees, advisory councils, and specialized research bodies.",
          examples: [
            "The ethics committee comprises senior jurists, bioethicists, and patient advocates.",
            "The doctoral research consortium comprises scholars from nine international universities."
          ]
        }
      ],
      abstractIdioms: [
        {
          phrase: "Comprise entirely",
          meaning: "To be constituted exclusively of the specified components without outside elements."
        },
        {
          phrase: "Substantially comprise",
          meaning: "To have a predominant majority of its makeup formed by certain materials."
        },
        {
          phrase: "Comprise diverse elements",
          meaning: "To embrace a wide, varied spectrum of constituent items."
        }
      ],
      memoryHack:
        "COMPRISE = 'COMPass / COMPrehend / Container' (The big outer container holds the parts).",
      commonPitfall:
        "Writing 'The committee comprises of five members' ❌. Drop the 'of'! ('The committee comprises five members').",
      sampleSentence:
        "The IELTS General Training examination comprises three distinct sections evaluating practical linguistic competence."
    },
    {
      word: "COMPOSE",
      pronunciation: "/kəmˈpəʊz/",
      partOfSpeech: "Verb (Parts Build the Whole)",
      themeColor: "#059669",
      bgLight: "#ecfdf5",
      borderColor: "#a7f3d0",
      coreConcept: "The Parts Make Up, Form, or Constitute the Whole Entity",
      visualMetaphor: "Lego Bricks Snapping Together",
      visualMetaphorDetail:
        "Picture individual Lego bricks snapping together to construct a fortress. The individual bricks (the parts) COMPOSE the fortress. Or in the passive: 'The fortress IS COMPOSED OF bricks'. When you start with the pieces that form the larger entity, you use COMPOSE.",
      keyRule:
        "Parts + COMPOSE + Whole (Active) OR Whole + IS COMPOSED OF + Parts (Passive with 'of').",
      usageDomains: [
        {
          domainTitle: "Chemical & Material Composition",
          description: "Molecules, elements, alloys, and composite hardware.",
          examples: [
            "Silicon wafers and silver conductive paste compose the core photovoltaic cell.",
            "The outer fuselage is composed of lightweight carbon-fiber composites."
          ]
        },
        {
          domainTitle: "Demographic Proportions (Task 1)",
          description: "Reporting percentages, workforce shares, and demographic slices.",
          examples: [
            "Women currently compose over forty percent of the engineering faculty.",
            "Service sector employment is composed primarily of retail and hospitality jobs."
          ]
        },
        {
          domainTitle: "Artistic, Literary & Musical Creation",
          description: "Writing symphonies, crafting poetry, or drafting essays.",
          examples: [
            "Ludwig van Beethoven composed his Ninth Symphony while profoundly deaf.",
            "Candidates must carefully compose a coherent introductory paragraph under time pressure."
          ]
        }
      ],
      abstractIdioms: [
        {
          phrase: "Compose yourself",
          meaning: "To regain emotional equilibrium, calm one's nerves, and steady one's composure."
        },
        {
          phrase: "Composed of",
          meaning: "Formed or constituted by specified individual ingredients or members."
        },
        {
          phrase: "Carefully composed",
          meaning: "Crafted with deliberate stylistic intention, balance, and precision."
        }
      ],
      memoryHack:
        "COMPOSE = 'CONSTRUCT / Put together' (The building blocks assemble the castle).",
      commonPitfall:
        "Forgetting the passive auxiliary: Writing 'The essay composed of four paragraphs' ❌ (Must be: 'is composed of').",
      sampleSentence:
        "Lithium, nickel, and cobalt compose the rechargeable battery cells utilized in modern electric automobiles."
    },
    {
      word: "CONSIST OF",
      pronunciation: "/kənˈsɪst ɒv/",
      partOfSpeech: "Intransitive Verb (Always Paired with 'of')",
      themeColor: "#d97706",
      bgLight: "#fffbeb",
      borderColor: "#fde68a",
      coreConcept: "To Have Something as Its Ingredients, Constituents, or Fundamental Character",
      visualMetaphor: "The Recipe List on a Glass Jar",
      visualMetaphorDetail:
        "Picture a glass jar with an ingredients label listing flour, sugar, and cocoa. The recipe CONSISTS OF these items. Notice two non-negotiable rules: it ALWAYS requires the preposition 'of', but it can NEVER be put into the passive voice ('is consisted of' does not exist in English!).",
      keyRule:
        "The Whole + CONSISTS OF + The Parts. Always needs 'of'. NEVER passive (No 'is consisted of'!).",
      usageDomains: [
        {
          domainTitle: "Structural Essay & Exam Architecture",
          description: "Outlining document sections, stages, and curriculum breakdowns.",
          examples: [
            "A Band 9 IELTS essay consists of four systematically sequenced paragraphs.",
            "The residential solar setup consists of rooftop panels, an inverter, and a backup battery."
          ]
        },
        {
          domainTitle: "Anatomy & Biological Structures",
          description: "Organs, biological systems, and anatomical structures.",
          examples: [
            "The adult human skeleton consists of two hundred and six distinct bones.",
            "The nervous system consists of the brain, spinal cord, and peripheral nerves."
          ]
        },
        {
          domainTitle: "Diets, Menus & Formulations",
          description: "Culinary recipes, nutritional regimes, and dietary components.",
          examples: [
            "The traditional Mediterranean diet consists largely of olive oil, legumes, and fresh seafood.",
            "The atmospheric air mixture consists predominantly of nitrogen and oxygen."
          ]
        }
      ],
      abstractIdioms: [
        {
          phrase: "Consist in",
          meaning: "(Special formal academic idiom) To have as an essential, inherent, or defining truth ('Happiness consists in contentment')."
        },
        {
          phrase: "Consist largely of",
          meaning: "To have the overwhelming majority of its substance formed by specified ingredients."
        },
        {
          phrase: "Consist essentially of",
          meaning: "To contain at its core only the vital elements mentioned."
        }
      ],
      memoryHack:
        "CONSIST OF = 'CONtains LIST OF' (The jar lists its contents with OF).",
      commonPitfall:
        "Writing 'The solar array is consisted of twenty panels' ❌. (Must be: 'The solar array consists of twenty panels').",
      sampleSentence:
        "The comprehensive renewable energy package consists of solar generation, heat pumps, and triple-glazed insulation."
    }
  ],

  matrixComparison: [
    {
      feature: "Structural Direction",
      wordValues: {
        COMPRISE: "Whole → Parts: The whole comprises the constituent parts",
        COMPOSE: "Parts → Whole: The parts compose the whole (Active)",
        "CONSIST OF": "Whole → Parts: The whole consists of the constituent parts"
      }
    },
    {
      feature: "Preposition 'of' Requirement",
      wordValues: {
        COMPRISE: "NEVER takes 'of' in active voice! (No 'comprises of')",
        COMPOSE: "Takes 'of' ONLY in passive construction: 'is composed of'",
        "CONSIST OF": "ALWAYS mandatory: 'consists of' (never bare 'consists')"
      }
    },
    {
      feature: "Passive Voice Permitted?",
      wordValues: {
        COMPRISE: "Disputed in formal editing (Prefer active 'comprises')",
        COMPOSE: "Standard academic norm: 'is composed of' ✓",
        "CONSIST OF": "STRICTLY IMPOSSIBLE! ❌ Never write 'is consisted of'"
      }
    },
    {
      feature: "Task 1 Line / Pie Chart Model",
      wordValues: {
        COMPRISE: "“The pie chart comprises five primary expenditure categories.”",
        COMPOSE: "“Manufacturing and logistics compose over 50% of the bar chart.”",
        "CONSIST OF": "“The household budget consists of housing, transport, and food.”"
      }
    },
    {
      feature: "Critical Pitfall to Avoid",
      wordValues: {
        COMPRISE: "Writing 'comprises of' ❌ (redundant preposition)",
        COMPOSE: "Omitting auxiliary 'is' in passive: 'the team composed of' ❌",
        "CONSIST OF": "Turning into passive: 'the system is consisted of' ❌"
      }
    }
  ],

  practiceDrills: [
    {
      id: 1,
      sentence: "The United Nations Security Council currently _____ five permanent members and ten rotating non-permanent members.",
      blankWord: "comprises",
      options: ["comprises", "composes", "consists of"],
      explanation:
        "Correct! 'The Council' is the whole entity containing the parts without needing the preposition 'of'.",
      ruleTag: "Whole Contains Parts (No 'of')"
    },
    {
      id: 2,
      sentence: "Atmospheric dry air _____ approximately 78% nitrogen, 21% oxygen, and trace noble gases.",
      blankWord: "consists of",
      options: ["comprises", "composes", "consists of"],
      explanation:
        "Correct! 'Consists of' naturally specifies the constituent recipe ingredients of the physical gas mixture.",
      ruleTag: "Mixture Ingredients (Always 'of')"
    },
    {
      id: 3,
      sentence: "Advanced aerospace fuselages are predominantly _____ ultra-lightweight titanium and carbon composites.",
      blankWord: "composed of",
      options: ["comprised", "composed of", "consisted of"],
      explanation:
        "Correct! Passive 'are composed of' is the grammatical standard for material structure.",
      ruleTag: "Passive Material Composition"
    },
    {
      id: 4,
      sentence: "Skilled blue-collar artisans _____ the predominant share of the regional industrial workforce.",
      blankWord: "compose",
      options: ["comprise", "compose", "consist of"],
      explanation:
        "Correct! The parts (artisans) build or make up the whole (the workforce) in active voice.",
      ruleTag: "Parts Build Whole (Active)"
    },
    {
      id: 5,
      sentence: "The complete Task 2 preparation curriculum _____ intensive lexis, grammar checkpoints, and full-length model essays.",
      blankWord: "consists of",
      options: ["comprises of", "composed", "consists of"],
      explanation:
        "Correct! 'Consists of' is standard; 'comprises of' is grammatically incorrect in academic prose.",
      ruleTag: "Curriculum Contents"
    },
    {
      id: 6,
      sentence: "The newly inaugurated medical research campus _____ four specialized surgical laboratories and an oncology ward.",
      blankWord: "comprises",
      options: ["comprises", "composes", "is consisted of"],
      explanation:
        "Correct! 'The campus' (the whole) comprises the four labs and oncology ward without 'of'.",
      ruleTag: "Whole Embraces Facilities"
    }
  ]
};

/* ==========================================================================
   EPISODE 05: SPECIALLY vs. ESPECIALLY vs. PARTICULARLY
   Bespoke Custom Crafting vs. Category Spotlighting vs. Academic Emphasis
   ========================================================================== */
export const CONFUSED_WORDS_EPISODE_5: ConfusedWordsSeriesData = {
  seriesId: "episode-5",
  episodeNumber: 5,
  seriesTitle: "English Nuance Lab • Commonly Confused Words",
  seriesSubtitle: "Master bespoke custom purpose versus spotlight emphasis in advanced writing & speaking.",
  episodeTitle: "Specially vs. Especially vs. Particularly",
  targetWords: ["SPECIALLY", "ESPECIALLY", "PARTICULARLY"],

  classroomPrompt: {
    leadQuestion: "Classroom Challenge: Why is 'This wheelchair was especially built for mountain trails' a subtle lexical error?",
    subtext: "Before revealing the linguistic breakdown, challenge your students with these 3 questions to master the bespoke purpose vs spotlight emphasis trap.",
    discussionQuestions: [
      {
        id: 1,
        question: "Which one means 'custom-tailored for a specific individual purpose', and which means 'above all others'?",
        hint: "Specially = Specific bespoke design; Especially = Exceptional spotlight."
      },
      {
        id: 2,
        question: "Can you spot the difference: 'I love all tropical fruit, especially mangoes' vs 'This mango dessert was specially prepared for the VIP'?",
        hint: "One singles out a favorite item; the other describes custom culinary preparation."
      },
      {
        id: 3,
        question: "When is 'Particularly' the ideal academic substitute for 'Especially', and when can it be used as a sentence adverb?",
        hint: "'Particularly in rural areas...' / 'She was not particularly keen on the proposal.'"
      }
    ]
  },

  words: [
    {
      word: "SPECIALLY",
      pronunciation: "/ˈspeʃ.əl.i/",
      partOfSpeech: "Adverb (Bespoke Purpose & Custom Creation)",
      themeColor: "#2563eb",
      bgLight: "#eff6ff",
      borderColor: "#bfdbfe",
      coreConcept: "For a Specific Purpose, Custom-Built, Tailor-Made, or Exclusively Designed",
      visualMetaphor: "The Savile Row Tailor's Measuring Tape",
      visualMetaphorDetail:
        "Picture a master tailor cutting bespoke fabric measured precisely for one person, or an engineer crafting a custom tool for a specific task. When something is created, trained, adapted, or designed for one designated function, you MUST use SPECIALLY.",
      keyRule:
        "Used with past participles (specially designed, specially built, specially trained, specially commissioned) to denote custom bespoke purpose.",
      usageDomains: [
        {
          domainTitle: "Custom Hardware & Engineering",
          description: "Equipment, machinery, or architecture built for a designated purpose.",
          examples: [
            "The lunar rover was specially designed to navigate powdery extraterrestrial regolith.",
            "Ramps were specially constructed to allow wheelchair access into the historical auditorium."
          ]
        },
        {
          domainTitle: "Specialized Professional Training",
          description: "Personnel, service dogs, or teams prepared for specific crises.",
          examples: [
            "The search-and-rescue team is specially trained for sub-zero alpine operations.",
            "These medical detection dogs are specially conditioned to identify diabetic fluctuations."
          ]
        },
        {
          domainTitle: "Dedicated Provisions & Formulations",
          description: "Recipes, medicines, and curricula engineered for unique audiences.",
          examples: [
            "A quiet contemplation room was specially provided for neurodivergent students.",
            "Modern solar inverters use specially formulated heat-dissipation silicon gels."
          ]
        }
      ],
      abstractIdioms: [
        {
          phrase: "Specially crafted",
          meaning: "Made with bespoke artisanal skill for a single designated recipient or task."
        },
        {
          phrase: "Specially adapted",
          meaning: "Modified mechanically or biologically to suit extreme environmental constraints."
        },
        {
          phrase: "Specially commissioned",
          meaning: "Formally contracted by an institution to produce a unique piece of work."
        }
      ],
      memoryHack:
        "SPECIALLY starts with 'SPEC' = 'SPECific purpose / SPECification' (Bespoke custom build).",
      commonPitfall:
        "Writing 'A suit especially tailored for the wedding' ❌. Tailoring is a custom bespoke build (SPECIALLY!).",
      sampleSentence:
        "Modern electric vehicles utilize specially formulated tire compounds to handle heavier battery weights."
    },
    {
      word: "ESPECIALLY",
      pronunciation: "/ɪˈspeʃ.əl.i/",
      partOfSpeech: "Adverb (Spotlight Emphasis & Superlative Degree)",
      themeColor: "#059669",
      bgLight: "#ecfdf5",
      borderColor: "#a7f3d0",
      coreConcept: "Particularly, Above All Others, To an Exceptional Extent, or In Particular",
      visualMetaphor: "The Stage Spotlight on the Lead Actor",
      visualMetaphorDetail:
        "Picture a theatre stage where five actors are performing, but a bright golden spotlight illuminates one person above the rest. ESPECIALLY singles out one standout member from a wider category. It answers: 'Which one in particular?'.",
      keyRule:
        "Used to single out one person, item, or circumstance above all others ('in particular'). Also intensifies adjectives ('especially difficult').",
      usageDomains: [
        {
          domainTitle: "Singling Out from Categories",
          description: "Highlighting a prime example from a wider demographic or geographical group.",
          examples: [
            "Air pollution plagues major metropolises, especially during stifling summer heatwaves.",
            "Household debt has surged rapidly, especially among younger families with mortgages."
          ]
        },
        {
          domainTitle: "Intensifying Adjectives & Conditions",
          description: "Denoting an exceptional degree of difficulty, importance, or urgency.",
          examples: [
            "Writing Task 2 essays under strict exam conditions is especially challenging for ESL learners.",
            "Early morning commutes are especially treacherous following overnight freezing rain."
          ]
        },
        {
          domainTitle: "Target Policy Beneficiaries",
          description: "Highlighting demographic groups most in need of governmental assistance.",
          examples: [
            "Subsidies for residential solar are imperative, especially for households in rural agrarian regions.",
            "Preventative healthcare outreach is especially vital for marginalized immigrant communities."
          ]
        }
      ],
      abstractIdioms: [
        {
          phrase: "Especially true",
          meaning: "Applicable to an extraordinarily high or undeniable degree in this instance."
        },
        {
          phrase: "Especially notable",
          meaning: "Deserving prominent, exceptional attention or recognition above peers."
        },
        {
          phrase: "Especially vulnerable",
          meaning: "Exposed to heightened risk or acute danger compared to the general baseline."
        }
      ],
      memoryHack:
        "ESPECIALLY starts with 'E' = 'EXCEPTIONAL / EXTRA spotlight' (Singling out from the crowd).",
      commonPitfall:
        "Starting a standalone sentence with 'Especially, ...' ❌. (In formal academic English, write 'In particular, ...').",
      sampleSentence:
        "Transitioning to green energy infrastructure is critical, especially for industrial cities dependent on coal."
    },
    {
      word: "PARTICULARLY",
      pronunciation: "/pəˈtɪk.jə.lə.li/",
      partOfSpeech: "Adverb (Academic Precision & Notable Degree)",
      themeColor: "#d97706",
      bgLight: "#fffbeb",
      borderColor: "#fde68a",
      coreConcept: "Specifically, Unusually, or With Distinct Academic Focus",
      visualMetaphor: "The Scientist's Magnifying Glass",
      visualMetaphorDetail:
        "Picture a scientist holding a magnifying glass over a microscope slide, scrutinizing one specific cell with focused precision. PARTICULARLY is the elevated, formal academic counterpart to 'especially'. It also functions naturally in negative qualifications ('not particularly keen').",
      keyRule:
        "Formal academic adverb functioning both to intensify ('particularly acute') and to modify negative states ('not particularly effective').",
      usageDomains: [
        {
          domainTitle: "Formal Academic Stance",
          description: "Writing formal essays, dissertations, and research evaluations.",
          examples: [
            "The economic fallout was particularly acute among small and medium-sized enterprises.",
            "The historical correlation between literacy rates and economic growth is particularly pronounced."
          ]
        },
        {
          domainTitle: "Negative Qualifications & Understatement",
          description: "Expressing polite restraint or modest enthusiasm.",
          examples: [
            "The initial prototype was not particularly durable under extreme weather trials.",
            "The municipal council was not particularly receptive to the proposed commercial rezoning."
          ]
        },
        {
          domainTitle: "Prepositional Geographical Scopes",
          description: "Targeting specific regions, demographics, or sectors in academic analyses.",
          examples: [
            "Particularly in developing economies, infrastructure bottlenecks impede solar adoption.",
            "Youth unemployment remains high, particularly among humanities and liberal arts graduates."
          ]
        }
      ],
      abstractIdioms: [
        {
          phrase: "Particularly noteworthy",
          meaning: "Deserving explicit academic citation and critical scholarly analysis."
        },
        {
          phrase: "Not particularly keen",
          meaning: "A polite academic understatement meaning distinctly unenthusiastic or skeptical."
        },
        {
          phrase: "Particularly pronounced",
          meaning: "Noticeably visible, prominent, or distinct in a statistical distribution."
        }
      ],
      memoryHack:
        "PARTICULARLY = 'PARTICULAR / Precise microscope' (Formal scholarly focus).",
      commonPitfall:
        "Misspelling or slurring syllables: 'particly' ❌. Pronounce all five syllables: /pə-TIK-yuh-luh-lee/.",
      sampleSentence:
        "The disparity between rural and urban educational funding is particularly glaring in remote mountain provinces."
    }
  ],

  matrixComparison: [
    {
      feature: "Core Functional Purpose",
      wordValues: {
        SPECIALLY: "Bespoke custom creation for a specific single purpose",
        ESPECIALLY: "Singling out one item from a group / intense degree",
        PARTICULARLY: "Formal academic focus or notable specific degree"
      }
    },
    {
      feature: "Typical Collocations",
      wordValues: {
        SPECIALLY: "specially designed, specially trained, specially formulated",
        ESPECIALLY: "especially important, especially true, especially vulnerable",
        PARTICULARLY: "particularly acute, particularly pronounced, not particularly"
      }
    },
    {
      feature: "Means 'Custom-Built / Tailor-Made'?",
      wordValues: {
        SPECIALLY: "YES! 100% (e.g. 'specially adapted wheelchair')",
        ESPECIALLY: "NO! ❌ (Never use for custom tailoring/building)",
        PARTICULARLY: "NO! ❌ (Never use for custom tailoring/building)"
      }
    },
    {
      feature: "Works in Negative 'Not Very' Contexts?",
      wordValues: {
        SPECIALLY: "NO ❌ (Never 'not specially keen')",
        ESPECIALLY: "Rare / informal ('not especially keen')",
        PARTICULARLY: "YES! Standard: 'not particularly effective' ✓"
      }
    },
    {
      feature: "Band 9 IELTS Sample Test",
      wordValues: {
        SPECIALLY: "“The software was specially designed to analyze IELTS syntax.”",
        ESPECIALLY: "“Renewable energy, especially solar, requires initial subsidies.”",
        PARTICULARLY: "“This wage disparity is particularly stark among young graduates.”"
      }
    }
  ],

  practiceDrills: [
    {
      id: 1,
      sentence: "The software engineers developed a proprietary neural network _____ configured to detect fraudulent financial transactions.",
      blankWord: "specially",
      options: ["specially", "especially", "particularly"],
      explanation:
        "Correct! The algorithm was custom-built and tailor-made for that single designated function ('specially configured').",
      ruleTag: "Custom Bespoke Purpose"
    },
    {
      id: 2,
      sentence: "Accelerating sea level rise threatens coastal infrastructure globally, _____ low-lying deltaic agrarian regions.",
      blankWord: "especially",
      options: ["specially", "especially", "particularly"],
      explanation:
        "Correct! 'Especially' singles out the most vulnerable delta regions from the global category.",
      ruleTag: "Category Spotlight Emphasis"
    },
    {
      id: 3,
      sentence: "The senior examiner noted that the candidate's mastery of complex grammatical structures was _____ impressive.",
      blankWord: "particularly",
      options: ["specially", "especially", "particularly"],
      explanation:
        "Correct! 'Particularly impressive' is the elevated academic intensification adverb of choice.",
      ruleTag: "Formal Academic Degree"
    },
    {
      id: 4,
      sentence: "These guide dogs are _____ trained over two years to assist visually impaired individuals navigate busy metropolitan transit networks.",
      blankWord: "specially",
      options: ["specially", "especially", "particularly"],
      explanation:
        "Correct! Training for a specific designated vocation requires 'specially' ('specially trained').",
      ruleTag: "Dedicated Custom Training"
    },
    {
      id: 5,
      sentence: "Consumer advocates found the airline's automated refund policy to be not _____ helpful during peak holiday flight cancellations.",
      blankWord: "particularly",
      options: ["specially", "especially", "particularly"],
      explanation:
        "Correct! 'Not particularly helpful' is a standard formal understatement modifying negative utility.",
      ruleTag: "Negative Understatement"
    },
    {
      id: 6,
      sentence: "Escalating commercial mortgage interest rates penalize all businesses, _____ small independent retailers operating on razor-thin margins.",
      blankWord: "especially",
      options: ["specially", "especially", "particularly"],
      explanation:
        "Correct! 'Especially' singles out small independent retailers as the most acutely impacted group.",
      ruleTag: "Singling Out Beneficiaries"
    }
  ]
};

export const CONFUSED_WORDS_EPISODES: ConfusedWordsSeriesData[] = [
  CONFUSED_WORDS_EPISODE_1,
  CONFUSED_WORDS_EPISODE_2,
  CONFUSED_WORDS_EPISODE_3,
  CONFUSED_WORDS_EPISODE_4,
  CONFUSED_WORDS_EPISODE_5
];


