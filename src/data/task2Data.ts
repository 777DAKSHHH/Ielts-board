import type {
  BodyParaStructure,
  BrainstormCard,
  ConsequenceItem,
  EvaluationArgument,
  FacultyAngle,
  FluidVocabItem,
  IdeaBankItem,
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
  IdeaBankItem,
  PowerExpression,
  StrategicLinkerGroup,
  Task2Data,
  VocabItem
};

/* ==========================================================================
   STUDENT IDEA BANK: VIEW 1 — CAR-FREE DAYS ARE EFFECTIVE (BODY PARA 1)
   ========================================================================== */
export const ADVANTAGES_IDEA_BANK: IdeaBankItem[] = [
  {
    id: "adv-1",
    badge: "View 1 Argument 01 • Immediate Emission Reductions",
    title: "Dramatic, instantaneous drop in urban tailpipe exhaust fumes",
    mainIdea:
      "Temporarily prohibiting private motor vehicles produces an immediate, measurable reduction in hazardous airborne pollutants across dense metropolitan centers.",
    supportingReason:
      "Internal combustion engines release significant volumes of nitrogen dioxide, carbon monoxide, and particulate matter (PM2.5); clearing roadways for a designated day instantly purges these toxic emissions from city air.",
    example:
      "During annual car-free days in Paris and Brussels, municipal air monitoring stations routinely record drops of 30% to 50% in localized nitrogen dioxide concentrations.",
    collocations: [
      "curb emissions",
      "toxic airborne pollutants",
      "tailpipe exhaust fumes",
      "measurable reduction"
    ]
  },
  {
    id: "adv-2",
    badge: "View 1 Argument 02 • Fostering Civic Environmental Awareness",
    title: "Transforming public psychology regarding automobile dependency",
    mainIdea:
      "Car-free events serve as powerful educational catalysts that challenge the deeply ingrained assumption that private cars are indispensable for daily life.",
    supportingReason:
      "Experiencing quiet, clear-aired streets encourages citizens to recognize the magnitude of vehicular pollution and prompts thoughtful reflection on personal commuting habits.",
    example:
      "Citywide awareness campaigns held on car-free Sundays prompting families to rethink daily school runs and experiment with shared transit options.",
    collocations: [
      "foster awareness",
      "automobile dependency",
      "civic consciousness",
      "educational catalyst"
    ]
  },
  {
    id: "adv-3",
    badge: "View 1 Argument 03 • Promoting Active & Green Transportation",
    title: "Encouraging regular walking, cycling, and public transit use",
    mainIdea:
      "When major avenues are reserved exclusively for pedestrians and non-motorized travel, residents actively engage with alternative commuting options.",
    supportingReason:
      "Removing the danger and stress of vehicular traffic creates an inviting environment for cycling and walking, building user confidence that persists well beyond the event.",
    example:
      "Bogotá's weekly 'Ciclovía' program transforming over 120 kilometers of thoroughfares into safe cycleways, significantly elevating regular bicycle adoption.",
    collocations: [
      "active transportation",
      "non-motorized travel",
      "pedestrianised thoroughfares",
      "alternative commuting"
    ]
  },
  {
    id: "adv-4",
    badge: "View 1 Argument 04 • Testing Ground for Permanent Pedestrianisation",
    title: "Empirical proof of concept for ambitious urban design reforms",
    mainIdea:
      "Designated car-free intervals allow municipal town planners to observe traffic redistribution and assess the viability of permanent pedestrian zones.",
    supportingReason:
      "Real-world street closures provide urban authorities with concrete logistical data, disproving fears that banning cars inevitably causes commercial decline or gridlock.",
    example:
      "Successful temporary weekend closures in central London and Ljubljana serving as direct blueprints for subsequent permanent pedestrianisation schemes.",
    collocations: [
      "pedestrianised zone",
      "viable alternative",
      "urban design reforms",
      "empirical proof"
    ]
  },
  {
    id: "adv-5",
    badge: "View 1 Argument 05 • Public Health & Community Reclamation",
    title: "Mitigating acoustic stress and creating vibrant recreational space",
    mainIdea:
      "Beyond improving ambient air quality, eliminating automobiles restores urban space for community recreation, physical activity, and social interaction.",
    supportingReason:
      "Excessive traffic noise is a proven source of cardiovascular stress; temporary vehicle bans substitute vehicular noise and congestion with lively, walkable public domains.",
    example:
      "Metropolitan centers reporting marked increases in outdoor physical activity and reductions in respiratory hospital admissions during car-free weekends.",
    collocations: [
      "recreational space",
      "acoustic stress",
      "mitigate the impact",
      "community wellbeing"
    ]
  }
];

/* ==========================================================================
   STUDENT IDEA BANK: VIEW 2 — OTHER WAYS ARE MORE EFFECTIVE (BODY PARA 2)
   ========================================================================== */
export const DISADVANTAGES_IDEA_BANK: IdeaBankItem[] = [
  {
    id: "dis-1",
    badge: "View 2 Argument 01 • The Flaw of Transient Measures",
    title: "Fleeting symbolic impact versus immediate emissions rebound",
    mainIdea:
      "Car-free days are fundamentally transient interventions that fail to generate lasting reductions in annual atmospheric pollution levels.",
    supportingReason:
      "Because vehicle bans occur only once a month or annually, motorists simply postpone trips or resume driving immediately the next day, resulting in complete emissions rebounds.",
    example:
      "Air quality measurements in European capitals demonstrating that ambient pollution levels return to baseline highs within twelve hours of car-free days concluding.",
    collocations: [
      "short-term measure",
      "transient nature",
      "emissions rebound",
      "symbolic intervention"
    ]
  },
  {
    id: "dis-2",
    badge: "View 2 Argument 02 • High-Capacity Clean Public Transit",
    title: "Investing in comprehensive electric rail and bus infrastructure",
    mainIdea:
      "The most potent permanent method to curb urban emissions is constructing extensive, reliable, and affordable zero-emission public transit networks.",
    supportingReason:
      "Motorists cannot abandon private vehicles unless practical alternatives exist; electrified metros and rapid buses remove thousands of cars from roads continuously year-round.",
    example:
      "Cities like Tokyo and Zurich, where world-class rail networks achieve over 70% public transit modal share and maintain remarkably low per-capita transport emissions.",
    collocations: [
      "public transit infrastructure",
      "sustainable alternative",
      "electrified rail networks",
      "modal shift"
    ]
  },
  {
    id: "dis-3",
    badge: "View 2 Argument 03 • Accelerated Electric Vehicle Transition",
    title: "Government subsidies and mandates replacing combustion engines",
    mainIdea:
      "Transitioning the entire vehicular fleet to electric and zero-emission vehicles eliminates tailpipe pollution without restricting citizen mobility.",
    supportingReason:
      "Providing purchasing subsidies, building widespread charging infrastructure, and setting phased bans on internal combustion engines permanently cuts vehicular emissions.",
    example:
      "Norway achieving an 85% electric vehicle market share through tax exemptions and toll discounts, slashing national urban exhaust pollution permanently.",
    collocations: [
      "subsidise electric vehicles",
      "combustion engine phase-out",
      "zero-emission mobility",
      "charging infrastructure"
    ]
  },
  {
    id: "dis-4",
    badge: "View 2 Argument 04 • Continuous Economic Deterrents",
    title: "Congestion pricing zones and ultra-low emission standards",
    mainIdea:
      "Enacting continuous monetary disincentives for high-polluting vehicles discourages non-essential urban driving every single day of the year.",
    supportingReason:
      "Daily congestion charges and clean-air zone fees make private driving financially disadvantageous while generating steady municipal revenue to fund green public transport.",
    example:
      "London's Ultra Low Emission Zone (ULEZ) cutting roadside nitrogen dioxide pollution by 46% over five years by imposing continuous daily levies on polluting vehicles.",
    collocations: [
      "congestion pricing",
      "effective deterrent",
      "stringent regulations",
      "continuous disincentive"
    ]
  },
  {
    id: "dis-5",
    badge: "View 2 Argument 05 • Industrial Controls & Urban Planning",
    title: "Stringent factory emission caps and mixed-use urban development",
    mainIdea:
      "Addressing non-transport pollution sources and restructuring cities to reduce commuting distances provides far greater cumulative ecological benefits.",
    supportingReason:
      "Industrial manufacturing, thermal power generation, and urban sprawl generate the bulk of regional particulates; enforcing factory emission scrubbers and 15-minute city designs tackles root causes.",
    example:
      "Relocating heavy coal-fired manufacturing plants away from urban basins and mandating industrial particulate filters dramatically improving regional air indices.",
    collocations: [
      "stringent regulatory standards",
      "systemic reform",
      "industrial emission caps",
      "urban sprawl reduction"
    ]
  }
];

// Aliases for layout compatibility
export const OPINION_IDEA_BANK = ADVANTAGES_IDEA_BANK;
export const NON_OPINION_IDEA_BANK = DISADVANTAGES_IDEA_BANK;
export const CAUSES_IDEA_BANK = ADVANTAGES_IDEA_BANK;
export const SOLUTIONS_IDEA_BANK = DISADVANTAGES_IDEA_BANK;

/* ==========================================================================
   MASTER TASK 2 DATASET: CAR-FREE DAYS VS ALTERNATIVE WAYS
   Discussion with Opinion Essay Architecture
   ========================================================================== */
export const TASK2_DATA: Task2Data = {
  id: "car-free-days-vs-alternative-measures-air-pollution",

  taskType: "Discussion with Opinion Essay",

  title: "IELTS Writing Task 2 — Car-Free Days vs. Other Ways to Reduce Air Pollution",

  questionText:
    "Some people believe that car-free days are effective to reduce air pollution. However, others argue that there are other ways that are more effective.\n\n• Discuss both the views and give your opinion.",

  audioUrl: "materials/Taxation_and_Public_Services_Briefing.m4a",

  timingSeconds: 180,

  recommendedPosition:
    "A nuanced, balanced perspective establishing that while car-free days are effective in generating immediate, short-term emission drops and raising public environmental awareness, they are fundamentally insufficient on their own. Truly lasting air quality improvements require systemic interventions, principally expanding green public transit and enforcing strict regulatory controls on vehicular and industrial emissions.",

  strongestArgument:
    "Car-free days raise public consciousness and provide instantaneous localized relief from toxic exhaust, but only comprehensive infrastructural investments—such as electrified public transit networks and congestion pricing—can permanently eradicate urban air pollution.",

  // 1. Sample introduction planning points
  introPlanningPoints: [
    "Sentence 1 (Paraphrase): It is often argued that designating car-free days serves as an effective strategy to combat urban air pollution, whereas others contend that more impactful alternatives exist.",
    "Sentence 2 (Thesis / Opinion): While temporary vehicle bans can foster environmental awareness and offer immediate short-term relief from exhaust emissions, I believe that systemic measures, such as expanding green public transit and enforcing strict industrial regulations, represent far more effective long-term solutions."
  ],

  sampleIntro:
    "It is often argued that designating car-free days serves as an effective strategy to combat urban air pollution, whereas others contend that more impactful alternatives exist. While temporary vehicle bans can foster environmental awareness and offer immediate short-term relief from exhaust emissions, I believe that systemic measures, such as expanding green public transit and enforcing strict industrial regulations, represent far more effective long-term solutions.",

  sampleConclusion:
    "In conclusion, while car-free days provide valuable short-term benefits by temporarily reducing vehicular exhaust and encouraging public mindfulness, they are fundamentally insufficient as a standalone policy. In my view, achieving lasting air quality improvements requires permanent systemic solutions, primarily heavy investment in zero-emission public transit networks and the rigorous enforcement of stringent vehicle emission standards.",

  // 2. Five-minute planning map
  fiveMinutePlanningMap: {
    causes: [
      {
        id: "view1-1",
        label: "Immediate, measurable drop in tailpipe emissions",
        note: "Halting motor traffic instantly purges toxic nitrogen dioxide and particulate matter from congested streets."
      },
      {
        id: "view1-2",
        label: "Fostering civic environmental awareness",
        note: "Highlights reliance on automobiles and prompts citizens to rethink personal commuting habits."
      },
      {
        id: "view1-3",
        label: "Promoting active walking and cycling",
        note: "Safe, pedestrianised streets build user confidence and encourage regular adoption of non-motorized travel."
      },
      {
        id: "view1-4",
        label: "Viable trial for permanent pedestrian zones",
        note: "Gives urban planners empirical data proving that core street pedestrianisation does not cause economic ruin."
      },
      {
        id: "view1-5",
        label: "Acoustic relief and community health revitalization",
        note: "Reduces traffic noise stress and reclaims streets as vibrant communal recreational spaces."
      }
    ],
    solutions: [
      {
        id: "view2-1",
        label: "Transient nature & inevitable emissions rebound",
        note: "One-day bans are merely symbolic; drivers postpone trips and pollution returns to peak levels the next day."
      },
      {
        id: "view2-2",
        label: "High-capacity electrified public transit",
        note: "Affordable, modern metros and electric buses provide continuous, year-round alternatives for daily commuters."
      },
      {
        id: "view2-3",
        label: "Accelerated electric vehicle transition",
        note: "Government subsidies and charging networks permanently replace internal combustion engines."
      },
      {
        id: "view2-4",
        label: "Continuous economic deterrents (Congestion charges / ULEZ)",
        note: "Daily levies discourage non-essential urban driving every day and generate funding for green infrastructure."
      },
      {
        id: "view2-5",
        label: "Industrial emission caps & 15-minute city planning",
        note: "Regulating factories and designing self-sufficient neighborhoods addresses root pollution sources permanently."
      }
    ]
  },

  causesIdeaBank: ADVANTAGES_IDEA_BANK,
  solutionsIdeaBank: DISADVANTAGES_IDEA_BANK,

  // 3. Body paragraphs matching the MANDATORY 4-PARAGRAPH BALANCED ARCHITECTURE:
  // Body 1: View 1 (Car-free days are effective: immediate emissions reduction & awareness)
  // Body 2: View 2 & Author's Opinion (Alternative systemic measures are more effective)
  bodyParagraphs: [
    {
      paraNumber: 1,
      side: "advantages",
      title: "Body Para 1: View 1 — Car-Free Days Are Effective",
      theme: "Immediate Toxic Exhaust Reduction & Civic Awareness",
      mainReason:
        "Proponents of car-free days emphasize their ability to generate immediate, measurable improvements in air quality while altering public attitudes toward private car dependency.",
      supportingReasons:
        "Restricting motor traffic removes the primary source of urban nitrogen dioxide and fine particulate matter (PM2.5). Furthermore, walking along car-free thoroughfares offers urbanites firsthand experience of a cleaner living environment, encouraging shifts toward active travel.",
      example:
        "Annual car-free initiatives in cities like Paris and Bogota recording up to a 50% drop in localized air pollution and inspiring thousands of commuters to adopt daily cycling.",
      band9Snippet:
        "“On the one hand, proponents of car-free days highlight their immediate environmental and civic benefits, noting that temporary vehicle bans produce sharp reductions in harmful exhaust fumes while fostering ecological consciousness.”",
      alternativeReasons: [
        {
          id: "view1-model-1",
          badge: "View 1 Analysis • Band 9",
          title: "Immediate Exhaust Relief & Behavioral Catalyst",
          category: "standard",
          mainReason:
            "Car-free days produce an immediate drop in toxic emissions and prompt urban citizens to rethink vehicular dependency.",
          supportingReasons:
            "Restricting private vehicles eliminates the main contributor to nitrogen dioxide and particulates. Additionally, pedestrianising major avenues allows residents to experience active transport modes like cycling in a safe environment.",
          example:
            "Paris recording a 30% to 50% decline in nitrogen dioxide levels along major boulevards during designated car-free events.",
          band9Snippet:
            "“On the one hand, advocates maintain that car-free days yield immediate, tangible ecological relief while serving as an indispensable catalyst for public awareness.”",
          modelParagraph:
            "On the one hand, proponents of car-free days highlight their immediate environmental and civic benefits. Restricting private vehicular access to city centers, even for a single day, produces a dramatic and measurable reduction in toxic tailpipe emissions, such as nitrogen dioxide and fine particulate matter. In major metropolises like Paris and Bogota, annual car-free events have demonstrated sharp, observable drops in atmospheric pollutants, affording urban residents cleaner air and quieter streets. Furthermore, such initiatives serve a vital psychological function by fostering public awareness regarding automobile dependency. When urbanites experience pedestrianised boulevards firsthand, they are encouraged to consider active transportation modes like cycling and walking, which can stimulate long-term behavioural changes toward sustainable living.",
          examinerNotes:
            "Exemplary paragraph development: begins with a clear topic sentence, explains the chemical/physical relief, expands into the psychological/civic dimension, and cites verifiable global examples."
        }
      ]
    },
    {
      paraNumber: 2,
      side: "disadvantages",
      title: "Body Para 2: View 2 & Author's Opinion — Alternative Measures Are More Effective",
      theme: "Systemic Infrastructure, Electric Mobility & Economic Deterrents",
      mainReason:
        "Conversely, critics argue—and I concur—that alternative measures are vastly more effective because car-free days are transient and fail to address the systemic causes of air pollution.",
      supportingReasons:
        "One-day closures merely postpone vehicle usage without diminishing overall transport demand. In contrast, comprehensive public transit infrastructure, electric vehicle subsidies, congestion pricing, and industrial regulations achieve continuous, permanent emission reductions.",
      example:
        "London's Ultra Low Emission Zone (ULEZ) achieving a sustained 46% reduction in roadside emissions, and Zurich's comprehensive rail network maintaining consistently pristine air quality year-round.",
      band9Snippet:
        "“On the other hand, critics argue—and I agree—that car-free days are merely symbolic, and that long-term efficacy lies in permanent infrastructural solutions such as expanding electrified transit and enacting continuous congestion pricing.”",
      alternativeReasons: [
        {
          id: "view2-model-1",
          badge: "View 2 Analysis • Band 9",
          title: "Systemic Infrastructure & Continuous Policy Deterrents",
          category: "standard",
          mainReason:
            "Car-free days are fleeting interventions; permanent pollution reduction requires expanding electrified mass transit and implementing continuous regulatory deterrents.",
          supportingReasons:
            "Because temporary bans do not change daily commuting needs, emissions rebound immediately the next morning. Conversely, affordable electric public transit and congestion charges permanently discourage car usage.",
          example:
            "Tokyo and Zurich where high-capacity electric rail networks capture the vast majority of commuter traffic, drastically curbing per-capita urban emissions permanently.",
          band9Snippet:
            "“Nevertheless, I side with those who contend that alternative, permanent interventions are far more potent than occasional car-free events.”",
          modelParagraph:
            "On the other hand, critics argue that car-free days are merely symbolic and that alternative structural measures possess greater long-term efficacy. Because vehicle bans are transient, traffic congestion and emissions inevitably rebound the very next day, failing to deliver permanent ecological improvement. Instead, the most impactful way to curb air pollution is by developing comprehensive, affordable public transit infrastructure. When municipal governments invest heavily in electrified bus fleets and extensive underground metro networks, commuters are provided with viable daily alternatives to private car ownership. Additionally, governments can implement continuous economic deterrents, such as congestion charges and low-emission zones, alongside stringent regulatory standards on industrial output and fossil-fuel vehicles. These permanent policies address the root causes of pollution continuously rather than intermittently.",
          examinerNotes:
            "Demonstrates masterly cohesion and critical nuance: logically contrasts temporary bans with permanent infrastructure, integrates the author's opinion naturally, and outlines concrete policy alternatives."
        }
      ]
    }
  ],

  // 4. Academic Vocabulary List (12 Genuine Band 8.5/9 Items with Pure, Original Dictionary Meanings)
  vocabList: [
    {
      word: "Mitigate",
      definition: "To make something less severe, harmful, painful, or serious; to alleviate or moderate.",
      phonetic: "/ˈmɪt.ɪ.ɡeɪt/",
      term: "Mitigate",
      meaning: "To make something less severe, harmful, painful, or serious; to alleviate or moderate.",
      example: "Government subsidies can help mitigate the financial cost of transitioning to clean technology.",
      sampleSentence: "Government subsidies can help mitigate the financial cost of transitioning to clean technology.",
      collocations: ["mitigate the impact", "mitigate risks", "mitigate the effects"]
    },
    {
      word: "Transient",
      definition: "Lasting only for a short time; temporary, fleeting, or impermanent.",
      phonetic: "/ˈtræn.zi.ənt/",
      term: "Transient",
      meaning: "Lasting only for a short time; temporary, fleeting, or impermanent.",
      example: "The economic relief provided by the seasonal grant proved to be merely transient.",
      sampleSentence: "The economic relief provided by the seasonal grant proved to be merely transient.",
      collocations: ["transient nature", "transient effect", "transient phenomenon"]
    },
    {
      word: "Pedestrianise",
      definition: "To convert a street or area into a zone designated exclusively for the use of people walking, with vehicles prohibited.",
      phonetic: "/pəˈdes.tri.ə.naɪz/",
      term: "Pedestrianise",
      meaning: "To convert a street or area into a zone designated exclusively for the use of people walking, with vehicles prohibited.",
      example: "Many European capitals have chosen to pedestrianise historic city centers to protect architectural heritage.",
      sampleSentence: "Many European capitals have chosen to pedestrianise historic city centers to protect architectural heritage.",
      collocations: ["pedestrianise the center", "fully pedestrianised zone", "pedestrianise streets"]
    },
    {
      word: "Infrastructure",
      definition: "The basic physical and organizational structures and facilities (e.g. buildings, roads, power supplies) needed for the operation of a society or enterprise.",
      phonetic: "/ˈɪn.frəˌstrʌk.tʃər/",
      term: "Infrastructure",
      meaning: "The basic physical and organizational structures and facilities (e.g. buildings, roads, power supplies) needed for the operation of a society or enterprise.",
      example: "A thriving modern economy requires continuous investment in transportation and communication infrastructure.",
      sampleSentence: "A thriving modern economy requires continuous investment in transportation and communication infrastructure.",
      collocations: ["transport infrastructure", "critical infrastructure", "infrastructure investment"]
    },
    {
      word: "Stringent",
      definition: "(Of regulations, requirements, or conditions) extremely strict, precise, and rigorously enforced.",
      phonetic: "/ˈstrɪn.dʒənt/",
      term: "Stringent",
      meaning: "(Of regulations, requirements, or conditions) extremely strict, precise, and rigorously enforced.",
      example: "Pharmaceutical laboratories must adhere to stringent hygiene and testing protocols.",
      sampleSentence: "Pharmaceutical laboratories must adhere to stringent hygiene and testing protocols.",
      collocations: ["stringent regulations", "stringent standards", "stringent measures"]
    },
    {
      word: "Deterrent",
      definition: "A thing that discourages or is intended to discourage someone from doing something by creating fear of consequences or costs.",
      phonetic: "/dɪˈter.ənt/",
      term: "Deterrent",
      meaning: "A thing that discourages or is intended to discourage someone from doing something by creating fear of consequences or costs.",
      example: "Heavy monetary fines serve as an effective deterrent against unlawful waste dumping.",
      sampleSentence: "Heavy monetary fines serve as an effective deterrent against unlawful waste dumping.",
      collocations: ["effective deterrent", "financial deterrent", "act as a deterrent"]
    },
    {
      word: "Viable",
      definition: "Capable of working successfully; feasible, practical, and able to be sustained.",
      phonetic: "/ˈvaɪ.ə.bəl/",
      term: "Viable",
      meaning: "Capable of working successfully; feasible, practical, and able to be sustained.",
      example: "Before committing significant funds, the committee evaluated whether the proposal was economically viable.",
      sampleSentence: "Before committing significant funds, the committee evaluated whether the proposal was economically viable.",
      collocations: ["viable alternative", "commercially viable", "economically viable"]
    },
    {
      word: "Congestion",
      definition: "A state of excessive overcrowding, obstruction, or clogging, especially in roads and traffic networks.",
      phonetic: "/kənˈdʒes.tʃən/",
      term: "Congestion",
      meaning: "A state of excessive overcrowding, obstruction, or clogging, especially in roads and traffic networks.",
      example: "Rapid urban population growth has led to severe traffic congestion during peak morning hours.",
      sampleSentence: "Rapid urban population growth has led to severe traffic congestion during peak morning hours.",
      collocations: ["traffic congestion", "chronic congestion", "congestion charge"]
    },
    {
      word: "Incentivise",
      definition: "To motivate or encourage someone to perform an action by offering rewards, advantages, or favorable conditions.",
      phonetic: "/ɪnˈsen.tɪ.vaɪz/",
      term: "Incentivise",
      meaning: "To motivate or encourage someone to perform an action by offering rewards, advantages, or favorable conditions.",
      example: "Tax rebates are frequently utilized to incentivise commercial investment in renewable technologies.",
      sampleSentence: "Tax rebates are frequently utilized to incentivise commercial investment in renewable technologies.",
      collocations: ["incentivise consumers", "strongly incentivise", "incentivise behavior"]
    },
    {
      word: "Proliferation",
      definition: "A rapid and substantial increase in the number, spread, or quantity of something.",
      phonetic: "/prəˌlɪf.əˈreɪ.ʃən/",
      term: "Proliferation",
      meaning: "A rapid and substantial increase in the number, spread, or quantity of something.",
      example: "The proliferation of digital technologies has fundamentally transformed communication across the globe.",
      sampleSentence: "The proliferation of digital technologies has fundamentally transformed communication across the globe.",
      collocations: ["rapid proliferation", "proliferation of technology", "prevent the proliferation"]
    },
    {
      word: "Systemic",
      definition: "Relating to or affecting an entire system as a whole, rather than isolated or individual components.",
      phonetic: "/sɪˈstem.ɪk/",
      term: "Systemic",
      meaning: "Relating to or affecting an entire system as a whole, rather than isolated or individual components.",
      example: "Addressing socioeconomic inequality requires systemic legislative reform rather than isolated charitable programs.",
      sampleSentence: "Addressing socioeconomic inequality requires systemic legislative reform rather than isolated charitable programs.",
      collocations: ["systemic reform", "systemic change", "systemic failure"]
    },
    {
      word: "Subsidise",
      definition: "To support an organization, activity, or product financially, typically through government funds, to keep prices low or encourage adoption.",
      phonetic: "/ˈsʌb.sɪ.daɪz/",
      term: "Subsidise",
      meaning: "To support an organization, activity, or product financially, typically through government funds, to keep prices low or encourage adoption.",
      example: "Many municipal governments subsidise public transit to keep fares affordable for lower-income commuters.",
      sampleSentence: "Many municipal governments subsidise public transit to keep fares affordable for lower-income commuters.",
      collocations: ["heavily subsidise", "subsidise public transit", "government subsidized"]
    }
  ],

  vocabHunt: [
    "Mitigate",
    "Transient",
    "Pedestrianise",
    "Infrastructure",
    "Stringent",
    "Deterrent",
    "Viable",
    "Congestion",
    "Incentivise",
    "Proliferation",
    "Systemic",
    "Subsidise"
  ],

  // 5. Academic Power Expressions with PURE, ORIGINAL DICTIONARY MEANINGS
  powerExpressions: [
    {
      expression: "curb emissions",
      meaning: "To restrain, check, or limit the release of gases or waste products into the environment.",
      example: "International climate treaties mandate that member nations take decisive steps to curb emissions."
    },
    {
      expression: "foster awareness",
      meaning: "To encourage the development, recognition, or understanding of an idea, issue, or reality.",
      example: "Educational workshops aim to foster awareness among young citizens regarding civic responsibilities."
    },
    {
      expression: "short-term measure",
      meaning: "An action, policy, or step designed to address an immediate concern rather than providing a permanent remedy.",
      example: "Emergency food rations served as a short-term measure until regular supply lines could be re-established."
    },
    {
      expression: "sustainable alternative",
      meaning: "A substitute method, product, or approach that can be maintained over a long duration without depleting resources or causing lasting harm.",
      example: "Electric buses and high-speed rail offer a sustainable alternative to private passenger automobiles."
    },
    {
      expression: "stringent regulatory standards",
      meaning: "Rigorous, legally binding rules and criteria that mandate strict compliance and adherence.",
      example: "The industrial chemical facility operates under stringent regulatory standards to prevent ecological contamination."
    }
  ],

  // 6. Brainstorm Cards (EXACTLY 4 CARDS: 2 for View 1 & 2 for View 2)
  brainstormCards: [
    {
      id: "card-1",
      stepNum: 1,
      badge: "View 1 • Direct Impact",
      title: "Immediate Air Quality Relief",
      question: "How do car-free days produce an immediate reduction in urban air pollution?",
      thinkingLens: "Think about vehicular exhaust, nitrogen dioxide, carbon monoxide, and particulate matter in dense centers.",
      selfCheck: "Did you explain that stopping private vehicles instantly purges harmful tailpipe emissions from congested streets?",
      idea: "Prohibiting motor vehicles halts the continuous discharge of toxic tailpipe emissions, resulting in immediate, measurable drops in urban airborne pollutants.",
      promptInsight: "Vehicular exhaust is the predominant source of toxic air in city centers; removing traffic delivers instant atmospheric cleansing.",
      collocations: ["curb emissions", "toxic airborne pollutants", "tailpipe emissions"],
      example: "Paris and Brussels recording drops of up to 40% in nitrogen dioxide concentrations during designated car-free events."
    },
    {
      id: "card-2",
      stepNum: 2,
      badge: "View 1 • Civic Mindset",
      title: "Fostering Environmental Awareness",
      question: "How do car-free days influence public behavior and attitudes toward personal transport?",
      thinkingLens: "Consider how experiencing quiet, walkable streets challenges private vehicle dependency.",
      selfCheck: "Did you highlight that experiencing pedestrianised streets encourages citizens to adopt cycling, walking, or shared transit?",
      idea: "Car-free days act as educational catalysts, allowing residents to experience walkable urban environments and encouraging long-term shifts toward active travel.",
      promptInsight: "Experiencing car-free avenues disproves the belief that private cars are indispensable, fostering receptivity to green commuting.",
      collocations: ["foster awareness", "automobile dependency", "pedestrianised streets"],
      example: "Bogotá's weekly Ciclovía program inspiring thousands of daily commuters to switch permanently to bicycle commuting."
    },
    {
      id: "card-3",
      stepNum: 3,
      badge: "View 2 • Structural Limitation",
      title: "The Transient Flaw & Emissions Rebound",
      question: "Why do critics argue that temporary car-free days fail to solve air pollution permanently?",
      thinkingLens: "Consider what happens the day after a car-free event: do driving habits and pollution levels remain low, or rebound?",
      selfCheck: "Did you explain that temporary bans are merely symbolic because emissions resume immediately once restrictions lift?",
      idea: "Car-free days are transient measures; because daily commuting demands remain unchanged, vehicular emissions rebound to peak levels immediately the next day.",
      promptInsight: "Occasional one-day restrictions cannot alter the structural dependency on cars without year-round infrastructure.",
      collocations: ["transient nature", "short-term measure", "emissions rebound"],
      example: "Pollution monitoring indicating that urban air quality returns to baseline toxicity within hours of car-free events concluding."
    },
    {
      id: "card-4",
      stepNum: 4,
      badge: "View 2 • Systemic Alternatives",
      title: "Infrastructural & Policy Solutions",
      question: "What permanent measures are vastly more effective in reducing urban air pollution continuously?",
      thinkingLens: "Think about public transit networks, electric vehicle adoption, congestion charges, and industrial regulations.",
      selfCheck: "Did you emphasize that investing in electrified transit and enforcing strict vehicle standards delivers permanent, year-round pollution cuts?",
      idea: "Developing comprehensive electric public transit networks, incentivising zero-emission vehicles, and enacting congestion pricing address pollution root causes permanently.",
      promptInsight: "Sustainable air purification requires permanent systemic alternatives that allow citizens to commute cleanly every single day.",
      collocations: ["sustainable alternative", "public transit infrastructure", "stringent regulations"],
      example: "London's Ultra Low Emission Zone (ULEZ) achieving sustained 46% roadside pollution reductions through continuous enforcement."
    }
  ],

  connectorsTier: {
    sTier: [
      "On the one hand, proponents argue that",
      "On the other hand, it is widely contended that",
      "A primary justification for this view is that",
      "In contrast to transient interventions"
    ],
    aTier: [
      "Furthermore",
      "Consequently",
      "Nevertheless",
      "A prime illustration is"
    ],
    bTier: [
      "Additionally",
      "In my perspective",
      "In conclusion",
      "Therefore"
    ]
  },

  fluidVocab: [
    {
      word: "Mitigate",
      pos: "verb",
      meaning: "To make something less severe, harmful, painful, or serious; to alleviate or moderate.",
      naturalCollocation: "mitigate the impact of environmental damage",
      organicExample: "Transitioning to electrified transit systems serves to mitigate the impact of urban pollution on respiratory health.",
      mechanicalPitfall: "Do not confuse with 'militate' (which means to act as a powerful factor against something).",
      examinerInsight: "A core Band 9 academic verb that demonstrates precise nuance in policy and scientific argumentation."
    },
    {
      word: "Transient",
      pos: "adjective",
      meaning: "Lasting only for a short time; temporary, fleeting, or impermanent.",
      naturalCollocation: "merely a transient effect",
      organicExample: "While car-free events demonstrate clean air in the short term, their overall ecological impact remains transient.",
      mechanicalPitfall: "Avoid using 'short' or 'momentary' when discussing policy duration; transient captures impermanence perfectly.",
      examinerInsight: "Elevated stylistic descriptor contrasting temporary symbolic gestures with enduring structural reforms."
    },
    {
      word: "Pedestrianise",
      pos: "verb",
      meaning: "To convert a street or area into a zone designated exclusively for the use of people walking, with vehicles prohibited.",
      naturalCollocation: "pedestrianise metropolitan city centers",
      organicExample: "Municipal councils that choose to pedestrianise shopping districts frequently experience higher retail activity and lower emissions.",
      mechanicalPitfall: "Avoid wordy constructions like 'make streets only for walking people'; pedestrianise is the precise urban planning term.",
      examinerInsight: "Demonstrates domain-specific lexical mastery rewarded under Band 9 Lexical Resource."
    },
    {
      word: "Infrastructure",
      pos: "noun",
      meaning: "The basic physical and organizational structures and facilities needed for the operation of a society or enterprise.",
      naturalCollocation: "sustainable public transit infrastructure",
      organicExample: "Substantial capital investment in railway and subway infrastructure is essential to reduce vehicular congestion.",
      mechanicalPitfall: "Infrastructure is an uncountable noun in this context; avoid saying 'infrastructures'.",
      examinerInsight: "Indispensable civic and economic terminology expected in high-scoring public policy essays."
    },
    {
      word: "Stringent",
      pos: "adjective",
      meaning: "(Of regulations, requirements, or conditions) extremely strict, precise, and rigorously enforced.",
      naturalCollocation: "stringent environmental regulations",
      organicExample: "Enforcing stringent emission limits on industrial manufacturing plants tackles pollution at its institutional source.",
      mechanicalPitfall: "Avoid generic adjectives like 'hard' or 'tight' rules; stringent accurately connotes rigorous formal oversight.",
      examinerInsight: "A high-utility formal academic adjective indicating sophisticated command of evaluative vocabulary."
    },
    {
      word: "Deterrent",
      pos: "noun",
      meaning: "A thing that discourages or is intended to discourage someone from doing something by creating fear of consequences or costs.",
      naturalCollocation: "act as an effective financial deterrent",
      organicExample: "Daily urban congestion charges act as an effective financial deterrent against unnecessary private automobile trips.",
      mechanicalPitfall: "Ensure correct prepositional pairing: something acts as a deterrent 'to' or 'against' an action.",
      examinerInsight: "Precise behavioral economics term that enhances task response depth in problem-solution discussions."
    }
  ],

  consequences: [
    {
      type: "positive",
      title: "View 1 Merits 01: Instantaneous Exhaust Reduction",
      category: "standard",
      desc: "Halting motor vehicle traffic instantly purges toxic nitrogen dioxide and particulate matter from congested street corridors.",
      example: "European capitals recording up to 50% drops in localized air pollution during annual car-free events.",
      level: "View 1 Core Argument",
      simpleTakeaway: "Stopping cars for a day immediately clears the air of toxic exhaust fumes.",
      collocation: "curb emissions"
    },
    {
      type: "positive",
      title: "View 1 Merits 02: Civic Mindset & Lifestyle Shift",
      category: "standard",
      desc: "Experiencing car-free streets challenges private vehicle dependency and prompts reflection on commuting choices.",
      example: "Citizens testing bicycles or walking and discovering that active travel is feasible for short daily trips.",
      level: "View 1 Core Argument",
      simpleTakeaway: "Walking on open streets encourages people to rethink their reliance on private automobiles.",
      collocation: "foster awareness"
    },
    {
      type: "positive",
      title: "View 1 Merits 03: Active Commuting Confidence",
      category: "standard",
      desc: "Safe, traffic-free streets encourage families and workers to try cycling and public transport without road danger.",
      example: "Bogotá's weekly Ciclovía program engaging over a million citizens in regular non-motorized travel.",
      level: "View 1 Core Argument",
      simpleTakeaway: "People feel safe trying bicycles and walking when roads are closed to cars.",
      collocation: "sustainable alternative"
    },
    {
      type: "positive",
      title: "View 1 Merits 04: Empirical Urban Planning Testing",
      category: "additional",
      desc: "Provides municipal planners with real-world data proving that pedestrianising key districts does not cause commercial gridlock.",
      example: "Weekend street closures in Ljubljana serving as the direct blueprint for permanent pedestrian zones.",
      level: "View 1 Strategic Argument",
      simpleTakeaway: "Temporary closures prove to city councils that permanent pedestrian streets can work.",
      collocation: "pedestrianised streets"
    }
  ],

  evaluationArguments: [
    {
      title: "View 2 Counterpoint 01: The Flaw of Transient Measures",
      category: "standard",
      reason:
        "One-off car-free days fail to alter daily commuting demands; motorists simply defer trips, causing pollution to rebound immediately.",
      development:
        "Because the intervention is temporary, annual atmospheric pollution averages remain virtually unchanged.",
      example:
        "Air monitoring data showing particulate levels returning to standard hazardous highs within twelve hours of car-free events.",
      type: "counterpoint",
      level: "View 2 Core Counterpoint",
      simpleTakeaway: "A single car-free day is only temporary; pollution rebounds completely the very next morning.",
      collocation: "short-term measure"
    },
    {
      title: "View 2 Alternative 02: Electrified Public Transit Investment",
      category: "standard",
      reason:
        "Expanding high-capacity electric bus and metro rail networks provides a permanent, year-round alternative to driving.",
      development:
        "When public transit is rapid, reliable, and subsidized, thousands of commuters willingly abandon private automobiles every day.",
      example:
        "Tokyo and Zurich achieving vast public transit ridership and maintaining permanently low per-capita emissions.",
      type: "counterpoint",
      level: "View 2 Superior Solution",
      simpleTakeaway: "Investing in fast, clean subways and electric buses gives people a real alternative to driving every day.",
      collocation: "public transit infrastructure"
    },
    {
      title: "View 2 Alternative 03: Electric Vehicle Transition Mandates",
      category: "standard",
      reason:
        "Government subsidies and internal combustion bans transition the entire vehicle fleet to zero-emission technology permanently.",
      development:
        "Electric vehicles eliminate tailpipe exhaust completely without forcing citizens to sacrifice personal mobility.",
      example:
        "Norway achieving over 80% electric vehicle sales through progressive tax relief, permanently slashing urban air toxicity.",
      type: "counterpoint",
      level: "View 2 Superior Solution",
      simpleTakeaway: "Subsidising electric cars and phasing out petrol vehicles removes tailpipe emissions permanently.",
      collocation: "subsidise clean technology"
    },
    {
      title: "View 2 Alternative 04: Congestion Pricing & Industrial Caps",
      category: "additional",
      reason:
        "Continuous economic deterrents and strict industrial emission standards tackle pollution at its institutional source 365 days a year.",
      development:
        "Daily congestion charges deter unnecessary driving continuously, while factory scrubbers address non-vehicular smog.",
      example:
        "London's Ultra Low Emission Zone (ULEZ) achieving sustained 46% roadside nitrogen dioxide reductions.",
      type: "counterpoint",
      level: "View 2 Superior Solution",
      simpleTakeaway: "Daily congestion fees and strict factory regulations curb pollution continuously all year round.",
      collocation: "stringent regulatory standards"
    }
  ],

  facultyAngles: [
    {
      title: "Urban Planning & Transport Ecology (View 1 Perspective)",
      development:
        "Examines how temporary vehicle closures create immediate air quality improvements, reduce urban acoustic stress, and serve as educational catalysts to break private automobile dependency."
    },
    {
      title: "Environmental Economics & Public Policy (View 2 Perspective)",
      development:
        "Analyzes the transient limitations of symbolic one-day bans, contrasting them with systemic capital investments in electrified mass transit, congestion pricing deterrents, and strict industrial regulations."
    }
  ]
};
