import type {
  BodyParaStructure,
  BrainstormCard,
  ConsequenceItem,
  EvaluationArgument,
  FacultyAngle,
  FluidVocabItem,
  PowerExpression,
  StrategicLinkerGroup,
  Task2Data,
  VocabItem
} from "../types";

export type {
  BodyParaStructure,
  BrainstormCard,
  ConsequenceItem,
  EvaluationArgument,
  FacultyAngle,
  FluidVocabItem,
  PowerExpression,
  StrategicLinkerGroup,
  Task2Data,
  VocabItem
};

export const TASK2_DATA: Task2Data = {
  id: "children-technology-younger-age-positive-or-negative",

  taskType: "Opinion Essay (Positive or Negative Development)",

  title: "IELTS Writing Task 2 — Children Using Technology at a Younger Age",

  questionText:
    "Nowadays, children are using technology at a younger age.\n\nIs this a positive or a negative development?",

  audioUrl: "materials/Taxation_and_Public_Services_Briefing.m4a",

  timingSeconds: 180,

  recommendedPosition:
    "Predominantly Negative Development: While basic digital fluency is acquired, the pervasive displacement of physical activity and the discernible delays in interpersonal communication render this trend predominantly detrimental.",

  strongestArgument:
    "The pervasive immersion in digital devices inevitably displaces essential outdoor exercise and produces discernible deficits in real-world conversational empathy.",

  // 1. Sample introduction planning points
  introPlanningPoints: [
    "Sentence 1 (Paraphrase): In contemporary society, the pervasive presence of digital technology has made early exposure among young children practically inevitable.",
    "Sentence 2 (Opinion): While interactive tools can foster digital fluency, I firmly contend that this trend is predominantly a negative development due to detrimental health consequences and discernible social delays."
  ],

  sampleIntro:
    "In contemporary society, the pervasive presence of digital technology has made early exposure among young children practically inevitable. While interactive software can foster foundational digital fluency, I firmly contend that this trend is predominantly a negative development due to its detrimental health consequences and discernible social delays.",

  // 2. Sample conclusion planning points
  conclusionPlanningPoints: [
    "Sentence 1 (Sum-up Main Reasons): Early screen dependency entrenches sedentary habits that trigger pediatric obesity, while transient virtual entertainment weakens sustained attention and interpersonal empathy.",
    "Sentence 2 (Restate Opinion): Therefore, despite minor educational conveniences, premature technological immersion remains an overwhelmingly unfavorable development."
  ],

  sampleConclusion:
    "In conclusion, although educational applications can provide transient academic benefits, I remain convinced that early technology immersion is an overwhelmingly negative development. Unchecked screen viewing makes sedentary habits inevitable and inflicts discernible harm on restorative sleep and face-to-face social competence during formative childhood years.",

  // Five-Minute Planning Map — Strictly CUT-TO-THE-CHASE ONE-LINERS
  fiveMinutePlanningMap: {
    positive: [
      "1. Interactive Learning: Gamified educational apps make abstract math and literacy intuitive through playful challenges.",
      "2. Early Digital Fluency: Interface familiarity provides foundational tech competence essential for computerized modern schooling.",
      "3. Long-Distance Connection: High-definition video calling sustains vital emotional bonds with distant relatives across time zones.",
      "4. Creative Exploration: Age-appropriate digital software enables children to experiment freely with digital art, music, and storytelling."
    ],
    negative: [
      "1. Reduces Physical Activity: Prolonged screen staring displaces active outdoor exercise, elevating risks of childhood obesity.",
      "2. Disrupts Sleep Architecture: Night-time screen viewing and blue light delay bedtime routines, causing chronic morning exhaustion.",
      "3. Weakens Social Communication: Passive digital entertainment replaces family dialogue, stunting conversational manners and emotional empathy.",
      "4. Erodes Attention Span: Fast-paced short videos condition young brains to crave instant gratification, undermining classroom focus.",
      "5. Inappropriate Online Content: Young children lack critical maturity, making them acutely susceptible to violent or harmful media.",
      "6. Creates Screen Dependency: Constant virtual amusement leaves children restless and unable to entertain themselves through independent play."
    ],
    position: "4-Paragraph Opinion Architecture",
    body1: "Body 1 (Opinion Side - Reason 1): Sedentary Habits & Pediatric Health Risks [ 1 Main Reason + Supporting Reasoning + Example ].",
    body2: "Body 2 (Opinion Side - Reason 2): Weakened Social Communication & Attention Span [ 1 Main Reason + Supporting Reasoning + Example ].",
    teachingRecommendation:
      "Follow the exact 4-paragraph format: Introduction (Paraphrase + Opinion), Body 1 (Opinion side: 1 Main Reason + Supporting Reasoning + Example), Body 2 (Opinion side: 1 Main Reason + Supporting Reasoning + Example), Conclusion (Sum-up main reasons + Restate opinion)."
  },

  // Strongest Classroom Discussion Question
  classroomDiscussion: {
    question:
      "When a three-year-old child knows how to swipe an iPad but struggles to speak or run outside, is technology accelerating their future or stealing their childhood?",
    followUps: [
      "Why are tech executives in Silicon Valley famously restricting their own young children from using smartphones and tablets?",
      "Can interactive educational applications ever replicate the cognitive and social benefits of playing with real physical toys and peers?",
      "What is the optimal age threshold for introducing personal touchscreen devices to children?"
    ],
    pedagogicalInsight:
      "This prompt immediately sparks active classroom engagement by juxtaposing modern technological necessity against biological and developmental health realities."
  },

  // 3. Body Paragraphs Data Structure (Format-Compliant: 1 Main Reason + Supporting Reasoning + Example)
  bodyParagraphs: [
    {
      paraNumber: 1,
      side: "strong_opinion",
      title: "Body Para 1 (Opinion Side): Sedentary Habits & Physical Health Complications",
      theme: "Physical Inactivity, Pediatric Obesity & Melatonin Suppression",
      mainReason:
        "Premature technology adoption fosters an intensely sedentary lifestyle, leading to severe physical health complications such as juvenile obesity and chronic sleep disruption.",
      supportingReasons:
        "Extended hours in front of screens inevitably displace energetic outdoor play vital for muscular growth, while night-time blue light suppresses natural melatonin synthesis.",
      example:
        "For example, medical research demonstrates that preschoolers using tablets for over two hours daily suffer double the rates of pediatric obesity and struggle to fall asleep.",
      band9Snippet:
        "“Primarily, premature technology adoption promotes an intensely sedentary routine, displacing energetic outdoor recreation vital for musculoskeletal growth and escalating the risk of pediatric obesity.”",
      alternativeReasons: [
        {
          id: "neg-reason-1",
          badge: "Disadvantage 01 • Sedentary Health Risks",
          title: "Reduces Physical Activity & Elevates Health Risks",
          category: "standard",
          mainReason:
            "Prolonged screen viewing displaces active outdoor exercise, elevating risks of childhood obesity, poor posture, and early eye strain.",
          supportingReasons:
            "Physical recreation is biologically indispensable for cardiovascular health, yet it is inevitably curtailed by continuous indoor screen sitting.",
          example:
            "Preschoolers who spend multiple hours daily on tablets face doubled risks of juvenile obesity and pediatric myopia.",
          band9Snippet:
            "“Primarily, premature exposure to digital screens fosters a deeply sedentary routine, displacing energetic outdoor play and escalating childhood obesity.”",
          modelParagraph:
            "First and foremost, premature technology adoption promotes an intensely sedentary lifestyle, leading to severe physical health complications. When young children spend multiple hours glued to tablets or smartphones, active outdoor recreation and physical exercise—which are biologically vital for cardiovascular and skeletal development—are inevitably displaced. Furthermore, prolonged exposure to blue light emitted by screens suppresses nocturnal melatonin production, leading to chronic sleep deficits. For example, pediatric health research demonstrates that toddlers who regularly consume more than two hours of daily screen time exhibit double the rate of childhood obesity and experience frequent sleep disturbances compared to less screen-reliant peers.",
          examinerNotes:
            "Focuses on tangible physiological consequences supported by credible medical reasoning (Band 9 Task Response)."
        },
        {
          id: "neg-reason-2",
          badge: "Disadvantage 02 • Social Communication Deficits",
          title: "Weakens Real-World Social Communication & Empathy",
          category: "standard",
          mainReason:
            "Excessive reliance on virtual entertainment hinders the development of natural conversation, emotional empathy, and social confidence.",
          supportingReasons:
            "One-way digital interfaces lack reciprocal feedback, stunting a child's ability to read facial expressions, vocal inflections, and cooperative sharing cues.",
          example:
            "Toddlers with heavy device use often show discernible speech delays and struggle to cooperate harmoniously with peers in nursery school.",
          band9Snippet:
            "“Furthermore, early device dependency severely stunts interpersonal communication, as artificial digital interfaces cannot replicate reciprocal human interaction.”",
          modelParagraph:
            "Additionally, early dependency on technology severely undermines the cultivation of interpersonal communication skills and emotional empathy. Developing social competence requires reciprocal, face-to-face interaction where children learn to interpret vocal inflections, decipher subtle facial expressions, and navigate peer disputes. In contrast, digital interfaces offer one-way, algorithmically curated stimulation that encourages passive consumption rather than active social dialogue. A clear illustration of this is observed in kindergarten classrooms, where teachers increasingly report that screen-accustomed toddlers frequently suffer from expressive language delays and struggle to engage in collaborative group activities.",
          examinerNotes:
            "Highlights psychological and developmental drawbacks with highly persuasive classroom evidence."
        },
        {
          id: "neg-reason-3",
          badge: "Disadvantage 03 • Sleep Architecture Disruption",
          title: "Disrupts Sleep Architecture & Causes Behavioral Tantrums",
          category: "standard",
          mainReason:
            "Night-time screen exposure disrupts restorative sleep cycles, while sudden device restriction triggers acute emotional tantrums.",
          supportingReasons:
            "Dopamine-driven digital loops condition young brains to crave nonstop stimulation, making device withdrawal emotionally distressing for toddlers.",
          example:
            "Children allowed to use smartphones before bedtime take 45 minutes longer to sleep and exhibit aggressive tantrums when devices are confiscated.",
          band9Snippet:
            "“Moreover, nighttime screen exposure disrupts restorative sleep cycles and triggers acute emotional volatility when devices are restricted.”",
          modelParagraph:
            "Moreover, unmonitored digital access profoundly disrupts sleep architecture and induces behavioral dysregulation. The artificial illumination produced by handheld screens delays the circadian rhythm, rendering young children irritable and fatigued during daylight hours. When parents attempt to enforce screen-free boundaries, the abrupt withdrawal of hyper-stimulating dopamine loops frequently triggers explosive emotional tantrums. For instance, clinical surveys indicate that young children using interactive media before bedtime take substantially longer to fall asleep and exhibit heightened daytime aggression.",
          examinerNotes:
            "Connects physiological sleep science to observable behavioral problems."
        },
        {
          id: "neg-reason-4",
          badge: "Disadvantage 04 • Attention Span Erosion",
          title: "Erodes Cognitive Attention Span & Fosters Impatience",
          category: "additional",
          mainReason:
            "Fast-paced digital media conditions young minds to crave constant novelty, eroding sustained focus and academic patience.",
          supportingReasons:
            "Rapid video switching habituates attention to jump continuously, making traditional school tasks like book reading feel painfully tedious.",
          example:
            "Pupils accustomed to short online video clips struggle to concentrate on single-page reading worksheets without becoming restless.",
          band9Snippet:
            "“Crucially, bite-sized digital entertainment habituates young minds to instant gratification, rapidly eroding their capacity for sustained academic focus.”",
          modelParagraph:
            "Crucially, rapid multimedia stimuli condition young minds to demand instant gratification, eroding their capacity for sustained cognitive focus. When children grow accustomed to short video algorithms that deliver immediate sensory novelty every few seconds, their tolerance for patient, contemplative tasks diminishes. In academic environments, this deficit becomes apparent when pupils struggle to concentrate on lengthy reading passages or deliberate arithmetic problem-solving. Education surveys confirm that young learners with extensive screen habits find static book reading exceptionally difficult to endure.",
          examinerNotes:
            "Connects cognitive habituation to real classroom learning deficits."
        }
      ]
    }
  ],

  // 4. Academic Vocabulary List (12 Genuine Band 8.5/9 Items Requested by Instructor)
  vocabList: [
    {
      word: "Pervasive",
      definition: "Spreading widely throughout an area, society, or aspect of life.",
      phonetic: "/pəˈveɪsɪv/",
      term: "Pervasive",
      meaning: "Spreading widely throughout an area, society, or aspect of life.",
      example: "The pervasive presence of handheld touchscreens has made early digital immersion almost inevitable.",
      sampleSentence: "The pervasive presence of handheld touchscreens has made early digital immersion almost inevitable.",
      collocations: ["pervasive influence", "pervasive presence", "pervasive technology"]
    },
    {
      word: "Inevitable",
      definition: "Certain to happen; unavoidable in the natural course of events.",
      phonetic: "/ɪnˈevɪtəbl/",
      term: "Inevitable",
      meaning: "Certain to happen; unavoidable in the natural course of events.",
      example: "A reduction in physical play is an inevitable outcome when children spend hours seated before screens.",
      sampleSentence: "A reduction in physical play is an inevitable outcome when children spend hours seated before screens.",
      collocations: ["inevitable consequence", "inevitable outcome", "practically inevitable"]
    },
    {
      word: "Discernible",
      definition: "Able to be detected, noticed, or clearly distinguished.",
      phonetic: "/dɪˈsɜːnəbl/",
      term: "Discernible",
      meaning: "Able to be detected, noticed, or clearly distinguished.",
      example: "Heavy device dependency produces discernible deficits in a toddler's interpersonal communication skills.",
      sampleSentence: "Heavy device dependency produces discernible deficits in a toddler's interpersonal communication skills.",
      collocations: ["discernible delay", "discernible deficit", "discernible improvement"]
    },
    {
      word: "Transient",
      definition: "Lasting only for a short time; fleeting and impermanent.",
      phonetic: "/ˈtrænziənt/",
      term: "Transient",
      meaning: "Lasting only for a short time; fleeting and impermanent.",
      example: "Digital video games provide transient amusement rather than cultivating resilient, long-term cognitive patience.",
      sampleSentence: "Digital video games provide transient amusement rather than cultivating resilient, long-term cognitive patience.",
      collocations: ["transient satisfaction", "transient entertainment", "transient novelty"]
    },
    {
      word: "Resilient",
      definition: "Able to withstand challenges, recover rapidly, and adapt constructively.",
      phonetic: "/rɪˈzɪliənt/",
      term: "Resilient",
      meaning: "Able to withstand challenges, recover rapidly, and adapt constructively.",
      example: "Children deprived of real-world social problem-solving struggle to build resilient emotional coping mechanisms.",
      sampleSentence: "Children deprived of real-world social problem-solving struggle to build resilient emotional coping mechanisms.",
      collocations: ["resilient mindset", "emotionally resilient", "resilient coping skills"]
    },
    {
      word: "Detrimental",
      definition: "Tending to cause noticeable harm, injury, or impairment.",
      phonetic: "/ˌdetrɪˈmentl/",
      term: "Detrimental",
      meaning: "Tending to cause noticeable harm, injury, or impairment.",
      example: "Excessive device immersion exerts a highly detrimental impact on a child's natural sleep architecture.",
      sampleSentence: "Excessive device immersion exerts a highly detrimental impact on a child's natural sleep architecture.",
      collocations: ["detrimental impact", "detrimental effect", "highly detrimental"]
    },
    {
      word: "Conducive",
      definition: "Making a desirable situation, skill, or outcome likely or possible.",
      phonetic: "/kənˈdjuːsɪv/",
      term: "Conducive",
      meaning: "Making a desirable situation, skill, or outcome likely or possible.",
      example: "Interactive counting software is conducive to accelerated numeracy acquisition during preschool years.",
      sampleSentence: "Interactive counting software is conducive to accelerated numeracy acquisition during preschool years.",
      collocations: ["conducive to learning", "conducive to development", "highly conducive"]
    },
    {
      word: "Susceptible",
      definition: "Likely or liable to be influenced, harmed, or swayed by external forces.",
      phonetic: "/səˈseptəbl/",
      term: "Susceptible",
      meaning: "Likely or liable to be influenced, harmed, or swayed by external forces.",
      example: "Preschoolers lack analytical discernment, rendering them acutely susceptible to inappropriate online content.",
      sampleSentence: "Preschoolers lack analytical discernment, rendering them acutely susceptible to inappropriate online content.",
      collocations: ["acutely susceptible", "highly susceptible", "susceptible to manipulation"]
    },
    {
      word: "Indispensable",
      definition: "Absolutely essential; unable to be managed without.",
      phonetic: "/ˌɪndɪˈspensəbl/",
      term: "Indispensable",
      meaning: "Absolutely essential; unable to be managed without.",
      example: "Physical recreation is indispensable for cardiovascular health, bone density, and gross motor development.",
      sampleSentence: "Physical recreation is indispensable for cardiovascular health, bone density, and gross motor development.",
      collocations: ["indispensable asset", "indispensable tool", "biologically indispensable"]
    },
    {
      word: "Ubiquitous",
      definition: "Present, appearing, or encountered everywhere simultaneously.",
      phonetic: "/juːˈbɪkwɪtəs/",
      term: "Ubiquitous",
      meaning: "Present, appearing, or encountered everywhere simultaneously.",
      example: "Because digital touchscreens are now ubiquitous, establishing strict screen limits has become paramount.",
      sampleSentence: "Because digital touchscreens are now ubiquitous, establishing strict screen limits has become paramount.",
      collocations: ["ubiquitous technology", "ubiquitous presence", "increasingly ubiquitous"]
    },
    {
      word: "Erode",
      definition: "Gradually destroy, diminish, or wear away over time.",
      phonetic: "/ɪˈrəʊd/",
      term: "Erode",
      meaning: "Gradually destroy, diminish, or wear away over time.",
      example: "Fast-paced digital media rapidly erodes a child's capacity for sustained academic concentration.",
      sampleSentence: "Fast-paced digital media rapidly erodes a child's capacity for sustained academic concentration.",
      collocations: ["erode attention span", "erode social skills", "erode patience"]
    },
    {
      word: "Sedentary",
      definition: "Involving prolonged periods of sitting and minimal physical exertion.",
      phonetic: "/ˈsedntri/",
      term: "Sedentary",
      meaning: "Involving prolonged periods of sitting and minimal physical exertion.",
      example: "Premature device addiction entrenches a sedentary routine directly tied to rising pediatric obesity rates.",
      sampleSentence: "Premature device addiction entrenches a sedentary routine directly tied to rising pediatric obesity rates.",
      collocations: ["sedentary lifestyle", "sedentary habits", "sedentary routine"]
    }
  ],

  vocabHunt: [
    "pervasive",
    "inevitable",
    "discernible",
    "transient",
    "resilient",
    "detrimental",
    "conducive",
    "susceptible",
    "indispensable",
    "ubiquitous",
    "erode",
    "sedentary"
  ],

  // 5. Power Expressions
  powerExpressions: [
    {
      expression: "Pervasive digital immersion",
      meaning: "All-encompassing daily screen exposure that dominates a child's waking hours",
      example: "Pervasive digital immersion displaces vital physical play and social learning milestones."
    },
    {
      expression: "Displacing outdoor recreation",
      meaning: "Crowding out healthy physical play and active exercise in favor of sedentary viewing",
      example: "Excessive tablet usage directly displaces outdoor recreation in growing toddlers."
    },
    {
      expression: "Eroding sustained cognitive focus",
      meaning: "Gradually weakening an individual's capacity to concentrate on lengthy scholastic tasks",
      example: "Fast-paced video algorithms undermine academic discipline by eroding sustained cognitive focus."
    },
    {
      expression: "Fostering foundational digital fluency",
      meaning: "Equipping young minds with natural, intuitive competence in navigating technology",
      example: "Early software engagement succeeds in fostering foundational digital fluency for future schooling."
    },
    {
      expression: "Disrupting natural circadian rhythms",
      meaning: "Interfering with the biological internal clock that regulates sleep and wakefulness via blue light",
      example: "Evening screen exposure harms young children by disrupting natural circadian rhythms."
    },
    {
      expression: "Stunting reciprocal human communication",
      meaning: "Impairing two-way conversational abilities that depend on empathy, eye contact, and vocal cues",
      example: "Substituting touchscreen games for family dialogue risks stunting reciprocal human communication."
    }
  ],

  // 6. Strategic Brainstorm Cards (Step 3: Exactly 4 Cards — Under 5, Non-Ambiguous & Cut-to-the-Chase)
  brainstormCards: [
    {
      question: "How do interactive educational apps and games enhance early childhood learning?",
      thinkingLens: "Multisensory Gamification & Visual Comprehension",
      selfCheck: "Do interactive counting games simplify abstract math concepts better than textbooks?",
      idea: "Gamified educational apps turn abstract math and literacy concepts into intuitive, easy-to-grasp games."
    },
    {
      question: "Why is early familiarity with computer interfaces an asset for modern schooling?",
      thinkingLens: "Foundational Digital Fluency & Academic Readiness",
      selfCheck: "Does early touchscreen experience give young students confidence in computer-based classes?",
      idea: "Early device familiarity equips children with foundational digital fluency, easing their transition into computerized schoolwork."
    },
    {
      question: "How does prolonged screen viewing directly harm a young child's physical health?",
      thinkingLens: "Sedentary Displacement & Sleep Architecture Disruption",
      selfCheck: "What happens to a child's fitness and sleep when screens replace active sports?",
      idea: "Prolonged screen viewing entrenches sedentary habits, displacing healthy physical exercise and delaying restful bedtime sleep."
    },
    {
      question: "Why does excessive reliance on digital entertainment weaken social skills and classroom focus?",
      thinkingLens: "Interpersonal Interaction & Sustained Cognitive Focus",
      selfCheck: "Can passive digital screens teach conversational empathy or develop patient academic concentration?",
      idea: "Over-reliance on screens stunts face-to-face conversational empathy and rapidly erodes patience for sustained reading."
    }
  ],

  // 7. Connectors Tier & Strategic Linkers
  connectorsTier: {
    sTier: [
      "In contemporary society, it is increasingly observable that...",
      "While early exposure fosters foundational digital fluency, I firmly contend...",
      "Primarily, premature technology adoption promotes an intensely sedentary routine...",
      "Furthermore, early device dependency produces discernible deficits in interpersonal communication...",
      "In conclusion, although educational applications can provide transient benefits...",
      "Therefore, the physical detriments overwhelmingly render this trend an unfavorable development."
    ],
    aTier: [
      "For instance, pediatric clinical research consistently reveals...",
      "Consequently, when young children are deprived of outdoor physical play,...",
      "A clear illustration of this is observed in early primary classrooms...",
      "In contrast, digital interfaces offer one-way, algorithmically curated stimulation..."
    ],
    bTier: [
      "First and foremost,...",
      "Additionally,...",
      "Moreover,...",
      "To conclude,..."
    ]
  },

  strategicLinkers: [
    {
      zone: "Introduction",
      badge: "Paraphrase + Opinion",
      placementRule: "Use to paraphrase the prompt and state a decisive personal opinion",
      items: [
        {
          phrase: "In contemporary society, the pervasive presence of digital technology has made early exposure practically inevitable.",
          functionDesc: "Opening paraphrase establishing the prompt's widespread modern reality",
          example: "In contemporary society, the pervasive presence of digital technology has made early exposure practically inevitable."
        },
        {
          phrase: "While early technological exposure fosters digital fluency, I firmly believe that this is predominantly a negative development...",
          functionDesc: "Clear thesis statement establishing a decisive personal stance",
          example: "While early technological exposure fosters digital fluency, I firmly believe that this is predominantly a negative development due to physical health hazards and impaired social skills."
        }
      ]
    },
    {
      zone: "Body Paragraph 1 (Reason 1)",
      badge: "Physical Health",
      placementRule: "Use to introduce the primary physical health drawback with supporting explanation and example",
      items: [
        {
          phrase: "First and foremost, premature technology adoption promotes an intensely sedentary lifestyle...",
          functionDesc: "Topic sentence introducing the physical health argument",
          example: "First and foremost, premature technology adoption promotes an intensely sedentary lifestyle, leading to severe physical complications."
        },
        {
          phrase: "Pediatric health research consistently demonstrates that...",
          functionDesc: "Introduces concrete empirical evidence and medical examples",
          example: "Pediatric health research consistently demonstrates that toddlers with heavy daily screen time exhibit double the rate of childhood obesity."
        }
      ]
    },
    {
      zone: "Body Paragraph 2 (Reason 2)",
      badge: "Social Skills",
      placementRule: "Use to introduce the second major developmental drawback regarding communication and focus",
      items: [
        {
          phrase: "Furthermore, early dependency on technology severely undermines the cultivation of interpersonal communication...",
          functionDesc: "Topic sentence introducing the social and cognitive communication argument",
          example: "Furthermore, early dependency on technology severely undermines the cultivation of interpersonal communication skills."
        },
        {
          phrase: "A clear illustration of this is observed in early primary classrooms, where...",
          functionDesc: "Presents real-world educational evidence of speech and attention delays",
          example: "A clear illustration of this is observed in early primary classrooms, where screen-dependent toddlers struggle to collaborate harmoniously with peers."
        }
      ]
    },
    {
      zone: "Conclusion",
      badge: "Sum-Up + Restatement",
      placementRule: "Use in the final paragraph to recap the two main reasons and restate your opinion",
      items: [
        {
          phrase: "In conclusion, although early engagement can cultivate foundational digital fluency, I am convinced that...",
          functionDesc: "Concessive restatement summarizing the two core pillars",
          example: "In conclusion, although early engagement can cultivate foundational digital fluency, I am convinced that this trend represents an overwhelmingly negative development."
        },
        {
          phrase: "Therefore, the physical health hazards coupled with social skill degradation clearly render early device adoption an unfavorable phenomenon.",
          functionDesc: "Final decisive clincher restating the personal opinion",
          example: "Therefore, the physical health hazards coupled with social skill degradation clearly render early device adoption an unfavorable phenomenon for developing minds."
        }
      ]
    }
  ],

  fluidVocab: [
    {
      word: "Pervasive",
      pos: "adjective",
      meaning: "Existing or spreading everywhere within modern society.",
      naturalCollocation: "pervasive digital presence",
      organicExample: "The pervasive presence of smartphones makes early technological immersion virtually inevitable.",
      mechanicalPitfall: "Do not write 'very common' when pervasive conveys deep societal saturation.",
      examinerInsight: "Immediately signals sophisticated sociological commentary."
    },
    {
      word: "Inevitable",
      pos: "adjective",
      meaning: "Completely unavoidable in contemporary life.",
      naturalCollocation: "practically inevitable",
      organicExample: "Sedentary lifestyle habits become inevitable when virtual gaming displaces outdoor exercise.",
      mechanicalPitfall: "Avoid 'bound to happen' in formal academic writing.",
      examinerInsight: "Demonstrates high-level Task Response and analytical precision."
    },
    {
      word: "Discernible",
      pos: "adjective",
      meaning: "Noticeable and measurable by observation.",
      naturalCollocation: "discernible developmental delay",
      organicExample: "Preschoolers accustomed to prolonged screen viewing exhibit discernible deficits in peer collaboration.",
      mechanicalPitfall: "Avoid informal words like 'clear' or 'seen'.",
      examinerInsight: "A high-scoring adjective widely celebrated in Band 9 IELTS evaluations."
    },
    {
      word: "Transient",
      pos: "adjective",
      meaning: "Lasting only briefly; temporary and fleeting.",
      naturalCollocation: "transient amusement",
      organicExample: "Short video clips provide transient entertainment but fail to foster enduring cognitive stamina.",
      mechanicalPitfall: "Do not confuse with 'short-term' when describing emotional dopamine spikes.",
      examinerInsight: "Contrasts temporary sensory satisfaction against long-term developmental growth."
    },
    {
      word: "Resilient",
      pos: "adjective",
      meaning: "Capable of recovering readily from adversity and frustration.",
      naturalCollocation: "resilient problem-solving",
      organicExample: "Children who rely on digital devices for instant comfort struggle to build resilient emotional coping skills.",
      mechanicalPitfall: "Avoid simplistic phrases like 'being strong'.",
      examinerInsight: "Key term in modern child psychology and cognitive resilience."
    },
    {
      word: "Sedentary",
      pos: "adjective",
      meaning: "Involving prolonged sitting and minimal physical movement.",
      naturalCollocation: "foster an intensely sedentary lifestyle",
      organicExample: "Premature device adoption fosters an intensely sedentary lifestyle linked to rising pediatric obesity.",
      mechanicalPitfall: "Do not write 'lazy life' or 'sitting without moving'.",
      examinerInsight: "Essential high-scoring collocation for health and lifestyle prompts."
    }
  ],

  // Extra helper arrays for compatibility
  consequences: [
    {
      type: "positive",
      title: "Advantage 01: Makes Learning Interactive",
      category: "standard",
      desc: "Gamified educational apps make abstract math and literacy intuitive through playful challenges.",
      example: "A preschooler learns basic addition through counting games rather than paper drill sheets.",
      level: "Core Advantage",
      simpleTakeaway: "Gamified apps make abstract math and literacy intuitive.",
      collocation: "conducive to rapid numeracy acquisition"
    },
    {
      type: "positive",
      title: "Advantage 02: Develops Early Digital Literacy",
      category: "standard",
      desc: "Interface familiarity provides foundational tech competence essential for computerized modern schooling.",
      example: "Children who use tablets early transition effortlessly to school research portals and typing assignments.",
      level: "Core Advantage",
      simpleTakeaway: "Early device navigation prepares learners for computer-based classes.",
      collocation: "acquire indispensable digital fluency"
    },
    {
      type: "positive",
      title: "Advantage 03: Maintains Long-Distance Relationships",
      category: "standard",
      desc: "High-definition video calling sustains vital emotional bonds with distant relatives across time zones.",
      example: "Toddlers stay emotionally bonded with grandparents living abroad via weekly video calls.",
      level: "Core Advantage",
      simpleTakeaway: "Video calls preserve emotional ties with distant relatives.",
      collocation: "sustain meaningful familial bonds"
    },
    {
      type: "positive",
      title: "Advantage 04: Encourages Creativity & Exploration",
      category: "additional",
      desc: "Age-appropriate digital software enables children to experiment freely with digital art, music, and storytelling.",
      example: "Children create animations or record spoken stories using beginner creative applications.",
      level: "Real-Life Angle",
      simpleTakeaway: "Creative software lets children explore art, music, and storytelling.",
      collocation: "stimulate creative self-expression"
    }
  ],

  evaluationArguments: [
    {
      title: "Disadvantage 01: Reduces Physical Activity",
      category: "standard",
      reason: "Prolonged screen staring displaces active outdoor exercise, elevating risks of childhood obesity.",
      development: "Physical recreation is indispensable for cardiovascular health, yet it is inevitably curtailed by continuous indoor sitting.",
      example: "Spending afternoons watching videos leaves children with fewer chances to cycle, run, or play football.",
      type: "argument",
      level: "Core Drawback",
      simpleTakeaway: "Screen staring replaces outdoor sports, fueling childhood obesity.",
      collocation: "entrench a sedentary routine"
    },
    {
      title: "Disadvantage 02: Disrupts Sleeping Habits",
      category: "standard",
      reason: "Night-time screen viewing and blue light delay bedtime routines, causing chronic morning exhaustion.",
      development: "The artificial illumination emitted by handheld screens suppresses natural melatonin release, postponing restorative sleep.",
      example: "Watching cartoons on tablets before bed pushes sleep onset back by up to an hour.",
      type: "argument",
      level: "Core Drawback",
      simpleTakeaway: "Night-time screen light delays sleep and causes morning exhaustion.",
      collocation: "disrupt restorative sleep architecture"
    },
    {
      title: "Disadvantage 03: Weakens Face-to-Face Communication",
      category: "standard",
      reason: "Passive digital entertainment replaces family dialogue, stunting conversational manners and emotional empathy.",
      development: "One-way screens provide artificial stimulation that fails to teach subtle facial expressions and reciprocal conversational turns.",
      example: "Children glued to phones at family meals miss crucial opportunities to practise conversational manners.",
      type: "argument",
      level: "Core Drawback",
      simpleTakeaway: "Screens lack human feedback, causing speech and empathy delays.",
      collocation: "produce discernible communication deficits"
    },
    {
      title: "Disadvantage 04: Reduces Attention Span & Focus",
      category: "additional",
      reason: "Fast-paced short videos condition young brains to crave instant gratification, undermining classroom focus.",
      development: "Rapid multimedia stimuli make traditional cognitive tasks like book reading feel excruciatingly tedious.",
      example: "Pupils accustomed to short clips grow restless when reading full book pages or doing extended homework.",
      type: "argument",
      level: "Real-Life Angle",
      simpleTakeaway: "Fast-paced media erodes patience and classroom reading focus.",
      collocation: "erode cognitive attention span"
    },
    {
      title: "Disadvantage 05: Exposes Inappropriate Content",
      category: "additional",
      reason: "Young children lack critical maturity, making them acutely susceptible to violent or harmful media.",
      development: "Immature young minds lack analytical filters to distinguish advertising manipulation or graphic online violence.",
      example: "Video autoplay algorithms can expose unattended preschoolers to graphic or frightening videos.",
      type: "argument",
      level: "Real-Life Angle",
      simpleTakeaway: "Preschoolers easily encounter violent or age-inappropriate online media.",
      collocation: "acutely susceptible to cyber hazards"
    },
    {
      title: "Disadvantage 06: Creates Screen Dependency",
      category: "additional",
      reason: "Constant virtual amusement leaves children restless and unable to entertain themselves through independent play.",
      development: "When digital entertainment is constantly used to cure boredom, children lose the capacity for imaginative, self-directed play.",
      example: "A toddler throws an intense tantrum and becomes restless whenever a mobile phone is removed.",
      type: "argument",
      level: "Real-Life Angle",
      simpleTakeaway: "Constant screen use prevents children from learning independent play.",
      collocation: "develop compulsive screen dependency"
    }
  ],

  facultyAngles: [
    {
      title: "Pediatric Health & Physical Fitness",
      development: "Focuses on sedentary screen time, blue light melatonin suppression, juvenile obesity, and myopia."
    },
    {
      title: "Childhood Social & Cognitive Psychology",
      development: "Examines face-to-face social reciprocity, speech delays, attention span erosion, and digital dopamine loops."
    }
  ]
};
