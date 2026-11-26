import type {
  BodyParaStructure,
  BrainstormCard,
  CauseAndEffectChain,
  ClassroomChallengeData,
  ConsequenceItem,
  EvaluationArgument,
  FacultyAngle,
  FacultyDeeperItem,
  FluidVocabItem,
  FunctionalLinkerCategory,
  IdeaBankItem,
  PowerExpression,
  StrategicLinkerGroup,
  Task2Data,
  VocabItem
} from "../types";

export type {
  BodyParaStructure,
  BrainstormCard,
  CauseAndEffectChain,
  ClassroomChallengeData,
  ConsequenceItem,
  EvaluationArgument,
  FacultyAngle,
  FacultyDeeperItem,
  FluidVocabItem,
  FunctionalLinkerCategory,
  IdeaBankItem,
  PowerExpression,
  StrategicLinkerGroup,
  Task2Data,
  VocabItem
};

/* ==========================================================================
   STUDENT IDEA BANK: PROBLEMS CAUSED BY SINGLE-USE PRODUCTS (BODY PARA 1)
   ========================================================================== */
export const ADVANTAGES_IDEA_BANK: IdeaBankItem[] = [
  {
    id: "prob-1",
    badge: "Problem 01 • Environmental Pollution",
    title: "Environmental pollution and landfill accumulation",
    mainIdea:
      "Disposable products, particularly plastic items, frequently end up in landfills, rivers and oceans. Since many plastics take a very long time to break down, they accumulate in the natural environment.",
    supportingReason:
      "Because synthetic polymers do not naturally degrade over short timeframes, continuous disposal leads to severe accumulation in terrestrial habitats, drainage channels, and global marine water bodies.",
    example:
      "Plastic bags and packaging discarded on streets can eventually enter drainage systems and waterways.",
    collocations: [
      "environmental pollution",
      "plastic accumulation",
      "accumulate in the environment",
      "enter drainage systems"
    ]
  },
  {
    id: "prob-2",
    badge: "Problem 02 • Threat to Wildlife & Marine Ecosystems",
    title: "Threat to wildlife and marine ecosystems",
    mainIdea:
      "Animals may accidentally consume plastic waste or become trapped in discarded packaging. This can cause injuries, starvation and even death.",
    supportingReason:
      "Floating plastics closely resemble natural food sources for marine species, resulting in fatal digestive blockages, while discarded rings and nets entangle wildlife.",
    example:
      "Marine animals such as turtles and seabirds may mistake floating plastic for food.",
    collocations: [
      "marine ecosystems",
      "consume plastic waste",
      "fatal ingestion",
      "mistake plastic for food"
    ]
  },
  {
    id: "prob-3",
    badge: "Problem 03 • Excessive Consumption of Natural Resources",
    title: "Excessive consumption of natural resources",
    mainIdea:
      "Producing disposable goods requires raw materials, energy and water. Manufacturing products that are discarded after a single use creates unnecessary demand for resources.",
    supportingReason:
      "Virgin materials are extracted, refined, and converted into items that provide merely minutes of utility before being discarded, accelerating the depletion of non-renewable fossil fuels.",
    example:
      "Manufacturing large quantities of disposable plastic bottles requires petroleum-based raw materials and energy.",
    collocations: [
      "depletion of natural resources",
      "petroleum-based raw materials",
      "unnecessary demand for resources",
      "energy-intensive manufacturing"
    ]
  },
  {
    id: "prob-4",
    badge: "Problem 04 • Pressure on Waste-Management Systems",
    title: "Pressure on waste-management systems",
    mainIdea:
      "The continuous disposal of packaging and disposable items increases the volume of municipal waste. This places additional pressure on landfill sites and local waste-management authorities.",
    supportingReason:
      "Metropolitan authorities face unprecedented challenges in collecting, sorting, and processing the mounting volumes of low-value, single-use garbage generated every day.",
    example:
      "Cities with high consumption of takeaway packaging may struggle to collect, sort and process the resulting waste.",
    collocations: [
      "waste-management infrastructure",
      "volume of municipal waste",
      "pressure on landfill sites",
      "collect, sort and process"
    ]
  },
  {
    id: "prob-5",
    badge: "Problem 05 • Long-Term Financial Burden",
    title: "Long-term financial burden on public budgets",
    mainIdea:
      "Governments must spend considerable public resources on collecting, transporting and processing disposable waste. These expenses can divert funds from other essential public services.",
    supportingReason:
      "Maintaining expansive landfill sites, purchasing specialized collection fleets, and remediating contaminated areas consume millions in taxpayer capital annually.",
    example:
      "Municipal authorities may need to invest in additional waste collection vehicles, recycling facilities and landfill maintenance.",
    collocations: [
      "long-term financial burden",
      "considerable public resources",
      "divert funds from services",
      "landfill maintenance"
    ]
  }
];

/* ==========================================================================
   STUDENT IDEA BANK: SOLUTIONS TO SINGLE-USE PRODUCTS (BODY PARA 2)
   ========================================================================== */
export const DISADVANTAGES_IDEA_BANK: IdeaBankItem[] = [
  {
    id: "sol-1",
    badge: "Solution 01 • Restrict or Tax Disposable Products",
    title: "Restrict or tax unnecessary disposable products",
    mainIdea:
      "Governments can impose restrictions or additional charges on commonly used disposable products to discourage unnecessary consumption.",
    supportingReason:
      "Economic disincentives immediately alter consumer behavior; when disposable bags or cutlery carry direct fees, consumers rapidly switch to durable alternatives.",
    example:
      "Charging customers for plastic shopping bags can encourage them to carry reusable cloth bags.",
    collocations: [
      "impose restrictions",
      "additional charges",
      "discourage unnecessary consumption",
      "reusable cloth bags"
    ]
  },
  {
    id: "sol-2",
    badge: "Solution 02 • Promote Reusable Alternatives",
    title: "Promote reusable alternatives for daily living",
    mainIdea:
      "Consumers should be encouraged to replace disposable products with durable alternatives that can be used repeatedly.",
    supportingReason:
      "Transitioning from single-use items to long-lasting wares prevents waste generation at the source, drastically reducing the demand for disposable packaging.",
    example:
      "Using stainless-steel water bottles, reusable coffee cups and washable food containers can reduce daily waste.",
    collocations: [
      "reusable alternatives",
      "durable alternatives",
      "reduce daily waste",
      "washable food containers"
    ]
  },
  {
    id: "sol-3",
    badge: "Solution 03 • Encourage Sustainable Packaging Adoption",
    title: "Encourage manufacturers to adopt sustainable packaging",
    mainIdea:
      "Businesses should reduce unnecessary packaging and invest in recyclable, reusable or lower-impact materials.",
    supportingReason:
      "Manufacturers possess the design power to eliminate redundant wrapping and shift towards compostable, plant-based, or easily recyclable options.",
    example:
      "Restaurants can replace excessive plastic packaging with appropriately designed reusable or recyclable containers.",
    collocations: [
      "sustainable packaging",
      "reduce unnecessary packaging",
      "lower-impact materials",
      "recyclable containers"
    ]
  },
  {
    id: "sol-4",
    badge: "Solution 04 • Improve Recycling & Waste Infrastructure",
    title: "Improve recycling and waste-management infrastructure",
    mainIdea:
      "Governments should provide accessible recycling facilities and encourage households to separate waste according to material type.",
    supportingReason:
      "Comprehensive municipal sorting and modern processing technologies maximize the recovery of valuable materials and keep recyclable polymers out of landfills.",
    example:
      "Separate collection bins for plastic, paper, glass and organic waste can make recycling more efficient.",
    collocations: [
      "recycling infrastructure",
      "accessible recycling facilities",
      "separate waste by material",
      "separate collection bins"
    ]
  },
  {
    id: "sol-5",
    badge: "Solution 05 • Increase Public Awareness & Education",
    title: "Increase public awareness through educational campaigns",
    mainIdea:
      "Educational campaigns can help people understand the environmental consequences of disposable products and encourage responsible consumption.",
    supportingReason:
      "When citizens understand the life-cycle impact of what they buy, societal norms shift from disposable convenience toward conscientious stewardship.",
    example:
      "Schools can introduce activities encouraging students to avoid disposable bottles and bring reusable lunch containers.",
    collocations: [
      "increase public awareness",
      "educational campaigns",
      "responsible consumption",
      "environmental consequences"
    ]
  }
];

// Aliases for backward compatibility
export const OPINION_IDEA_BANK = ADVANTAGES_IDEA_BANK;
export const NON_OPINION_IDEA_BANK = DISADVANTAGES_IDEA_BANK;
export const CAUSES_IDEA_BANK = ADVANTAGES_IDEA_BANK;
export const SOLUTIONS_IDEA_BANK = DISADVANTAGES_IDEA_BANK;

/* ==========================================================================
   FACULTY IDEA BANKS: DEEPER PROBLEMS & MORE SOPHISTICATED APPROACHES
   ========================================================================== */
export const FACULTY_DEEPER_PROBLEMS: FacultyDeeperItem[] = [
  {
    name: "Microplastic contamination",
    development:
      "Some plastic products break into tiny particles that can enter water, soil and food chains."
  },
  {
    name: "Carbon emissions",
    development:
      "Manufacturing, transporting and disposing of disposable products can contribute to greenhouse gas emissions."
  },
  {
    name: "Throwaway culture",
    development:
      "Easy access to cheap disposable goods encourages a consumption pattern in which convenience takes priority over durability."
  },
  {
    name: "Unequal environmental burden",
    development:
      "Communities near landfills and waste-processing facilities may experience greater exposure to pollution."
  },
  {
    name: "Limited recycling effectiveness",
    development:
      "Contaminated, mixed-material or low-value packaging can be difficult or uneconomical to recycle."
  },
  {
    name: "Drainage and flooding",
    development:
      "Plastic waste blocking drainage channels can worsen waterlogging and flooding during heavy rainfall."
  },
  {
    name: "Loss of resource value",
    development:
      "Materials that could have been reused or recycled are discarded after very limited use."
  }
];

export const FACULTY_DEEPER_SOLUTIONS: FacultyDeeperItem[] = [
  {
    name: "Extended Producer Responsibility (EPR)",
    development:
      "Manufacturers should take financial or operational responsibility for collecting and managing packaging after consumers discard it."
  },
  {
    name: "Deposit-return schemes",
    development:
      "Customers pay a small refundable deposit when purchasing bottled drinks and receive it back when returning the empty containers."
  },
  {
    name: "Circular economy",
    development:
      "Encourage products and materials to remain in use for as long as possible through reuse, repair and recycling."
  },
  {
    name: "Mandatory packaging standards",
    development:
      "Governments can require businesses to minimise unnecessary packaging and meet minimum recyclability standards."
  },
  {
    name: "Incentives for sustainable innovation",
    development:
      "Tax benefits and grants can encourage companies to develop durable, reusable and environmentally responsible products."
  },
  {
    name: "Investment in recycling technology",
    development:
      "Better sorting and processing facilities can improve the recovery of materials that would otherwise be discarded."
  },
  {
    name: "Corporate accountability",
    development:
      "Businesses should be held responsible for excessive packaging and the environmental consequences of their production choices."
  },
  {
    name: "Behavioural interventions",
    development:
      "Retailers can make reusable options the default, while providing disposable alternatives only when customers request them."
  }
];

export const CAUSE_AND_EFFECT_CHAINS: CauseAndEffectChain[] = [
  {
    id: "chain-a",
    title: "Chain A — Environmental Damage",
    subtitle: "From consumption surge to ecological devastation",
    steps: [
      "Increasing consumption of disposable products",
      "Greater volume of discarded waste",
      "Plastic accumulation in landfills and waterways",
      "Damage to ecosystems and wildlife"
    ]
  },
  {
    id: "chain-b",
    title: "Chain B — Throwaway Culture",
    subtitle: "From cheap convenience to resource exhaustion",
    steps: [
      "Cheap and convenient disposable products",
      "Frequent purchasing and short product lifespans",
      "Increased demand for raw materials and manufacturing",
      "Greater resource consumption and waste generation"
    ]
  }
];

export const USEFUL_LINKERS_BY_FUNCTION: FunctionalLinkerCategory[] = [
  {
    purpose: "Stating a Primary Problem (Formal Topic Sentences)",
    expressions: [
      "A primary concern associated with the proliferation of single-use goods is that…",
      "The foremost crisis precipitated by this disposable culture stems from…",
      "A fundamental environmental dilemma arising from non-biodegradable consumption is…"
    ]
  },
  {
    purpose: "Developing Causal Consequences (Formal Written Logic)",
    expressions: [
      "As a direct consequence, substantial volumes of synthetic polymer accumulate in…",
      "Consequently, this dynamic precipitates widespread ecological contamination…",
      "This, in turn, exerts severe strain on municipal waste-management infrastructure…",
      "Such indiscriminate disposal inevitably culminates in the disruption of aquatic ecosystems."
    ]
  },
  {
    purpose: "Introducing the Paired Solution (Within-Paragraph Transition)",
    expressions: [
      "To mitigate this dilemma effectively, statutory authorities could enact…",
      "A highly efficacious remedy for this issue lies in the imposition of targeted fiscal charges on…",
      "One viable policy intervention entails mandating corporate accountability through…",
      "This predicament can be substantially countered by promoting durable, reusable alternatives."
    ]
  },
  {
    purpose: "Explaining Policy Implementation & Mechanisms",
    expressions: [
      "Such an objective can be realized through the rigorous enforcement of statutory quotas…",
      "This strategy is best operationalised via targeted fiscal disincentives that discourage…",
      "By instituting Extended Producer Responsibility frameworks, regulatory bodies can compel compliance."
    ]
  },
  {
    purpose: "Projecting Outcomes & Structural Efficacy",
    expressions: [
      "Such measures would substantially attenuate the aggregate volume of discarded packaging.",
      "Consequently, the long-term environmental burden on municipal landfill facilities can be significantly curtailed.",
      "This dual approach fosters an enduring transition toward a resource-efficient circular economy."
    ]
  },
  {
    purpose: "Distinguishing Multi-Stakeholder Responsibilities",
    expressions: [
      "While legislative bodies are tasked with enacting statutory prohibitions, manufacturing enterprises must simultaneously assume liability for…",
      "Individual consumers likewise bear an indispensable civic obligation to adopt durable alternatives in daily routines.",
      "Resolving this systemic challenge necessitates coordinated cross-sectoral action between state regulators and industrial producers."
    ]
  },
  {
    purpose: "Analytical Concessions & Conditions (Advanced Syntax)",
    expressions: [
      "While single-use products afford undeniable transient convenience, their protracted ecological ramifications are severe.",
      "Unless stringent regulatory deterrents are instituted, consumer patterns will remain heavily reliant on non-biodegradable goods.",
      "Although recycling represents a commendable endeavor, it cannot independently resolve the crisis in the absence of source reduction."
    ]
  }
];

/* ==========================================================================
   MASTER TASK 2 DATASET: SINGLE-USE PRODUCTS (PROBLEMS AND SOLUTIONS)
   ========================================================================== */
export const TASK2_DATA: Task2Data = {
  id: "single-use-products-problems-and-solutions",

  taskType: "Problems and Solutions Essay",

  title: "IELTS Writing Task 2 — Single-Use Products: Problems and Solutions",

  questionText:
    "Today single-use products are very common.\n\n- What are the problems caused by this?\n- What could be the possible solutions?",

  audioUrl: "materials/Taxation_and_Public_Services_Briefing.m4a",

  timingSeconds: 180,

  recommendedPosition:
    "A direct, balanced approach establishing that the proliferation of single-use items creates grave environmental degradation, resource depletion, and landfill pressures. Resolving this requires coordinated action: stricter government regulations, corporate accountability for packaging, and an active public transition toward reusable alternatives.",

  strongestArgument:
    "Single-use products create a linear consumption model — resources are extracted, manufactured into products, used briefly and then discarded. This is fundamentally less sustainable than a circular model based on reuse, repair and recycling.",

  // Sample introduction planning points
  introPlanningPoints: [
    "Sentence 1 (Paraphrase): The widespread use of single-use products has become a prominent feature of modern consumer society.",
    "Sentence 2 (Thesis / Outline): However, this trend contributes to environmental pollution, excessive resource consumption and growing waste-management challenges. These problems can be addressed through stricter government regulations, greater corporate responsibility and a shift towards reusable alternatives."
  ],

  sampleIntro:
    "The widespread use of single-use products has become a prominent feature of modern consumer society. However, this trend contributes to environmental pollution, excessive resource consumption and growing waste-management challenges. These problems can be addressed through stricter government regulations, greater corporate responsibility and a shift towards reusable alternatives.",

  sampleConclusion:
    "In conclusion, the widespread use of single-use products contributes to environmental pollution, resource depletion and increasing pressure on waste-management systems. Nevertheless, these problems can be mitigated through stricter regulations, responsible manufacturing practices and greater public adoption of reusable alternatives.",

  // Five-minute planning map
  fiveMinutePlanningMap: {
    causes: [
      {
        id: "prob-1",
        label: "Environmental pollution",
        note: "Plastics accumulate in landfills, rivers and oceans, taking centuries to break down."
      },
      {
        id: "prob-2",
        label: "Threat to wildlife & marine ecosystems",
        note: "Fauna accidentally ingest plastics or become trapped in packaging, causing death."
      },
      {
        id: "prob-3",
        label: "Excessive consumption of natural resources",
        note: "Manufacturing disposable goods creates unnecessary demand for petroleum, water and energy."
      },
      {
        id: "prob-4",
        label: "Pressure on waste-management systems",
        note: "Continuous disposal overwhelms municipal sorting, collection and landfill capacities."
      },
      {
        id: "prob-5",
        label: "Long-term financial burden",
        note: "Municipalities spend vast public funds on waste haulage, diverting capital from public services."
      }
    ],
    solutions: [
      {
        id: "sol-1",
        label: "Restrict or tax unnecessary disposables",
        note: "Imposing charges and statutory restrictions discourages unnecessary consumption."
      },
      {
        id: "sol-2",
        label: "Promote reusable alternatives",
        note: "Encourage consumers to use stainless-steel bottles, cloth bags, and washable containers."
      },
      {
        id: "sol-3",
        label: "Encourage sustainable packaging",
        note: "Businesses should minimize excess packaging and adopt recyclable, lower-impact materials."
      },
      {
        id: "sol-4",
        label: "Improve recycling infrastructure",
        note: "Provide accessible sorting bins and modern facilities to make material recovery efficient."
      },
      {
        id: "sol-5",
        label: "Increase public awareness",
        note: "Educational campaigns in schools and communities foster responsible consumption habits."
      }
    ],
    teachingRecommendation:
      "Focus on two major problems (environmental pollution + excessive resource consumption) and two well-developed solutions (government restrictions + reusable alternatives and producer responsibility). Important distinction: Recycling deals with waste after it has been created, whereas reducing and reusing prevent waste from being generated in the first place."
  },

  causesIdeaBank: ADVANTAGES_IDEA_BANK,
  solutionsIdeaBank: DISADVANTAGES_IDEA_BANK,

  // Body paragraphs matching the MANDATORY 4-PARAGRAPH PROBLEMS & SOLUTIONS ARCHITECTURE (PAIRED METHOD):
  bodyParagraphs: [
    {
      paraNumber: 1,
      side: "advantages",
      title: "Body Paragraph 1 — Problem 1 & Targeted Solution (Paired Architecture)",
      theme: "Problem 1 (Environmental & Marine Pollution) → Targeted Solution (Restrictions & Fiscal Levies) + Example",
      mainReason:
        "The primary dilemma associated with disposable goods is severe environmental degradation, which can be effectively mitigated through targeted statutory restrictions.",
      supportingReasons:
        "Because single-use items are manufactured from non-biodegradable plastics, they persist in landfills and oceans for centuries, inflicting fatal harm on marine wildlife. To directly resolve this issue, governments should impose charges or prohibitions on disposable products. For example, plastic-bag levies in numerous countries have dramatically reduced single-use packaging consumption by shifting consumers toward reusable alternatives.",
      example:
        "Charging customers for plastic shopping bags drastically reducing usage while encouraging durable cloth alternatives.",
      band9Snippet:
        "“The primary dilemma associated with disposable goods is severe environmental degradation, which can be effectively mitigated through targeted statutory restrictions.”",
      alternativeReasons: [
        {
          id: "prob-model-1",
          badge: "Problem 1 + Solution • Band 9",
          title: "Plastic Accumulation & Targeted Fiscal Charges",
          category: "standard",
          mainReason:
            "State Problem 1 (oceanic plastic persistence and ecological harm) and directly pair it with Solution 1 (statutory charges and bans).",
          supportingReasons:
            "Plastics accumulate in waterways, causing fatal animal ingestion and ecosystem harm. Fiscal charges eliminate unnecessary consumption at the source by making disposable convenience economically disadvantageous.",
          example:
            "Point-of-sale bag levies driving nationwide adoption of reusable bags across supermarket chains.",
          band9Snippet:
            "“The primary dilemma associated with disposable goods is severe environmental degradation, which can be effectively mitigated through targeted statutory restrictions.”",
          modelParagraph:
            "The primary dilemma associated with disposable goods is their severe contribution to environmental degradation. Because most single-use products are manufactured from non-biodegradable plastics, they persist in ecosystems for centuries, accumulating in waterways and posing a fatal threat to marine animals that ingest discarded fragments. To resolve this issue effectively, state authorities should impose statutory restrictions and fiscal charges on unnecessary disposable packaging. For instance, national plastic-bag levies have dramatically reduced bag consumption in numerous countries by making reusable cloth alternatives economically advantageous.",
          examinerNotes:
            "Exemplary paired architecture: clearly states Problem 1, elaborates its causal mechanisms, and immediately presents the targeted Solution with a verified real-world example."
        }
      ]
    },
    {
      paraNumber: 2,
      side: "disadvantages",
      title: "Body Paragraph 2 — Problem 2 & Targeted Solution (Paired Architecture)",
      theme: "Problem 2 (Resource Depletion & Waste Burden) → Targeted Solution (Corporate EPR & Reusables) + Example",
      mainReason:
        "Beyond localized pollution, the manufacturing and disposal of single-use items exhaust natural resources and overwhelm municipal infrastructure, demanding corporate accountability and circular alternatives.",
      supportingReasons:
        "Producing short-lived goods requires continuous extraction of petroleum, energy, and water, generating high carbon emissions while municipalities struggle to manage soaring waste volumes. To tackle this, manufacturers must be held accountable through Extended Producer Responsibility policies, compelling them to fund collection and design recyclable packaging. Simultaneously, public education must promote durable substitutes like refillable bottles and lunch containers.",
      example:
        "Extended Producer Responsibility mandates and deposit-return schemes compelling beverage firms to collect and reuse containers.",
      band9Snippet:
        "“Beyond localized pollution, the manufacturing and disposal of single-use items exhaust natural resources and overwhelm municipal infrastructure.”",
      alternativeReasons: [
        {
          id: "sol-model-1",
          badge: "Problem 2 + Solution • Band 9",
          title: "Resource Exhaustion & Extended Producer Responsibility",
          category: "standard",
          mainReason:
            "State Problem 2 (resource exhaustion and landfill saturation) and directly pair it with Solution 2 (Extended Producer Responsibility and reusable alternatives).",
          supportingReasons:
            "Mass production depletes raw materials and overwhelms city waste services. Mandatory producer responsibility compels companies to finance closed-loop recycling and phase out non-recyclable materials.",
          example:
            "Deposit-return schemes and corporate packaging collection schemes achieving high return rates.",
          band9Snippet:
            "“Beyond localized pollution, the manufacturing and disposal of single-use items exhaust natural resources and overwhelm municipal infrastructure.”",
          modelParagraph:
            "Beyond localized contamination, single-use manufacturing accelerates resource depletion while the resulting volume of packaging overwhelms municipal waste-management systems. Extracting fossil fuels to create items discarded within minutes places an unsustainable burden on local authorities. To counter this, governments should enforce Extended Producer Responsibility mandates, obligating corporations to fund the collection and processing of their packaging. Furthermore, educational initiatives should encourage the normalization of durable wares, such as stainless-steel bottles and washable containers, fostering a permanent shift toward a circular economy.",
          examinerNotes:
            "Flawless paired architecture: states Problem 2, details resource and civic infrastructure consequences, and establishes comprehensive corporate and consumer solutions with verified models."
        }
      ]
    }
  ],

  // 16 Genuine High-Band Vocabulary Items with Authentic Dictionary Meanings
  vocabList: [
    {
      word: "Pervasive",
      definition: "Existing in all parts of a place or thing; spreading widely throughout an area or group of people.",
      phonetic: "/pəˈveɪ.sɪv/",
      term: "Pervasive",
      meaning: "Widespread; existing everywhere throughout a society or environment.",
      example: "The use of disposable packaging has become pervasive in modern consumer culture.",
      sampleSentence: "The use of disposable packaging has become pervasive in modern consumer culture.",
      collocations: ["pervasive presence", "become pervasive", "pervasive influence"]
    },
    {
      word: "Proliferation",
      definition: "Rapid increase in the number or amount of something; rapid reproduction or growth.",
      phonetic: "/prəˌlɪf.əˈreɪ.ʃən/",
      term: "Proliferation",
      meaning: "Rapid increase in amount or numbers.",
      example: "The proliferation of single-use plastics has intensified environmental concerns.",
      sampleSentence: "The proliferation of single-use plastics has intensified environmental concerns.",
      collocations: ["rapid proliferation", "proliferation of plastics", "unchecked proliferation"]
    },
    {
      word: "Accumulation",
      definition: "The acquisition or gradual gathering of something over a period of time.",
      phonetic: "/əˌkjuː.mjəˈleɪ.ʃən/",
      term: "Accumulation",
      meaning: "Gradual collection or gathering of substances.",
      example: "The accumulation of plastic waste poses a serious ecological threat.",
      sampleSentence: "The accumulation of plastic waste poses a serious ecological threat.",
      collocations: ["waste accumulation", "accumulation of toxins", "gradual accumulation"]
    },
    {
      word: "Degradation",
      definition: "The process in which the beauty, quality, or integrity of something is destroyed or spoiled.",
      phonetic: "/ˌdeɡ.rəˈdeɪ.ʃən/",
      term: "Degradation",
      meaning: "Decline in quality or condition; deterioration.",
      example: "Plastic pollution contributes to environmental degradation.",
      sampleSentence: "Plastic pollution contributes to environmental degradation.",
      collocations: ["environmental degradation", "ecological degradation", "land degradation"]
    },
    {
      word: "Detrimental",
      definition: "Causing harm or damage; injurious.",
      phonetic: "/ˌdet.rɪˈmen.təl/",
      term: "Detrimental",
      meaning: "Harmful or damaging.",
      example: "Disposable products can have detrimental effects on marine ecosystems.",
      sampleSentence: "Disposable products can have detrimental effects on marine ecosystems.",
      collocations: ["detrimental effects", "detrimental impact", "highly detrimental"]
    },
    {
      word: "Depletion",
      definition: "Reduction in the number or quantity of something; the exhaustion of resources.",
      phonetic: "/dɪˈpliː.ʃən/",
      term: "Depletion",
      meaning: "Reduction in available supplies or reserves.",
      example: "Excessive manufacturing can accelerate the depletion of natural resources.",
      sampleSentence: "Excessive manufacturing can accelerate the depletion of natural resources.",
      collocations: ["depletion of natural resources", "resource depletion", "ozone depletion"]
    },
    {
      word: "Indiscriminate",
      definition: "Done at random or without careful judgment; not discriminating.",
      phonetic: "/ˌɪn.dɪˈskrɪm.ɪ.nət/",
      term: "Indiscriminate",
      meaning: "Without careful consideration or distinction.",
      example: "Indiscriminate disposal of plastic waste can contaminate waterways.",
      sampleSentence: "Indiscriminate disposal of plastic waste can contaminate waterways.",
      collocations: ["indiscriminate waste disposal", "indiscriminate dumping", "indiscriminate use"]
    },
    {
      word: "Unsustainable",
      definition: "Not able to be maintained at the current rate or level without exhausting natural resources.",
      phonetic: "/ˌʌn.səˈsteɪ.nə.bəl/",
      term: "Unsustainable",
      meaning: "Not environmentally or economically maintainable.",
      example: "A throwaway culture represents an unsustainable pattern of consumption.",
      sampleSentence: "A throwaway culture represents an unsustainable pattern of consumption.",
      collocations: ["unsustainable pattern", "ecologically unsustainable", "unsustainable consumption"]
    },
    {
      word: "Perpetuate",
      definition: "To make something continue indefinitely, especially something undesirable.",
      phonetic: "/pəˈpetʃ.u.eɪt/",
      term: "Perpetuate",
      meaning: "To cause something to continue.",
      example: "Cheap disposable packaging can perpetuate wasteful consumer habits.",
      sampleSentence: "Cheap disposable packaging can perpetuate wasteful consumer habits.",
      collocations: ["perpetuate habits", "perpetuate wastefulness", "perpetuate a cycle"]
    },
    {
      word: "Mitigate",
      definition: "To make something bad less severe, serious, or painful.",
      phonetic: "/ˈmɪt.ɪ.ɡeɪt/",
      term: "Mitigate",
      meaning: "To reduce the severity or impact of something.",
      example: "Reusable alternatives can help mitigate environmental damage.",
      sampleSentence: "Reusable alternatives can help mitigate environmental damage.",
      collocations: ["mitigate environmental damage", "mitigate risks", "mitigate pollution"]
    },
    {
      word: "Stringent",
      definition: "Strict, precise, and exacting; demanding strict adherence.",
      phonetic: "/ˈstrɪn.dʒənt/",
      term: "Stringent",
      meaning: "Strict and rigorous.",
      example: "Governments should introduce stringent packaging regulations.",
      sampleSentence: "Governments should introduce stringent packaging regulations.",
      collocations: ["stringent regulations", "stringent standards", "stringent laws"]
    },
    {
      word: "Viable",
      definition: "Capable of working successfully; feasible and practical.",
      phonetic: "/ˈvaɪ.ə.bəl/",
      term: "Viable",
      meaning: "Practical and workable.",
      example: "Reusable containers offer a viable alternative to disposable packaging.",
      sampleSentence: "Reusable containers offer a viable alternative to disposable packaging.",
      collocations: ["viable alternative", "commercially viable", "economically viable"]
    },
    {
      word: "Decompose",
      definition: "To decay or cause something to decay; to break down into simpler parts.",
      phonetic: "/ˌdiː.kəmˈpəʊz/",
      term: "Decompose",
      meaning: "Break down naturally through biological or chemical decay.",
      example: "Many conventional plastics do not readily decompose in natural environments.",
      sampleSentence: "Many conventional plastics do not readily decompose in natural environments.",
      collocations: ["readily decompose", "decompose naturally", "slow to decompose"]
    },
    {
      word: "Contamination",
      definition: "The action or state of making or being made impure by polluting or poisoning.",
      phonetic: "/kənˌtæm.ɪˈneɪ.ʃən/",
      term: "Contamination",
      meaning: "Pollution or impurity.",
      example: "Improper disposal can lead to soil and water contamination.",
      sampleSentence: "Improper disposal can lead to soil and water contamination.",
      collocations: ["water contamination", "soil contamination", "ecosystem contamination"]
    },
    {
      word: "Resource-intensive",
      definition: "Requiring large amounts of raw materials, energy, or labor to produce.",
      phonetic: "/rɪˈzɔːs.ɪnˌten.sɪv/",
      term: "Resource-intensive",
      meaning: "Requiring substantial resources.",
      example: "The production of disposable goods can be resource-intensive.",
      sampleSentence: "The production of disposable goods can be resource-intensive.",
      collocations: ["resource-intensive manufacturing", "highly resource-intensive", "resource-intensive production"]
    },
    {
      word: "Accountability",
      definition: "The fact or condition of being accountable; responsibility.",
      phonetic: "/əˌkaʊn.təˈbɪl.ə.ti/",
      term: "Accountability",
      meaning: "Responsibility for actions and outcomes.",
      example: "Manufacturers should demonstrate greater accountability for packaging waste.",
      sampleSentence: "Manufacturers should demonstrate greater accountability for packaging waste.",
      collocations: ["corporate accountability", "demonstrate accountability", "greater accountability"]
    }
  ],

  vocabHunt: [
    "pervasive",
    "proliferation",
    "accumulation",
    "degradation",
    "detrimental",
    "depletion",
    "indiscriminate",
    "unsustainable",
    "perpetuate",
    "mitigate",
    "stringent",
    "viable",
    "decompose",
    "contamination",
    "resource-intensive",
    "accountability"
  ],

  connectorsTier: {
    sTier: [
      "A primary concern associated with... is that...",
      "Consequently, this dynamic precipitates...",
      "This, in turn, exerts severe strain on...",
      "A highly efficacious remedy lies in the imposition of..."
    ],
    aTier: [
      "Of equal severity is the concomitant escalation of...",
      "Compounding this predicament, [clause]...",
      "Such an objective can be realized through the rigorous enforcement of..."
    ],
    bTier: [
      "As a direct consequence, [clause]...",
      "This approach fosters an enduring transition toward...",
      "While legislative bodies are tasked with regulatory enforcement, corporations must simultaneously assume liability for..."
    ]
  },

  // 14 Particularly Useful Collocations
  powerExpressions: [
    {
      expression: "Single-use plastic consumption",
      meaning: "The purchase, utilization, and disposal of short-lived plastic goods.",
      example: "Curbing single-use plastic consumption is essential to safeguarding marine habitats."
    },
    {
      expression: "Disposable packaging",
      meaning: "Containers or wrapping designed to be used once and thrown away.",
      example: "Takeaway restaurants generate excessive volumes of disposable packaging daily."
    },
    {
      expression: "Throwaway culture",
      meaning: "A societal mindset that prioritizes convenience and short-term utility over reuse and durability.",
      example: "A throwaway culture encourages consumers to discard items rather than repair them."
    },
    {
      expression: "Environmental degradation",
      meaning: "The deterioration of the natural world through pollution and resource depletion.",
      example: "Plastic accumulation in rivers contributes directly to acute environmental degradation."
    },
    {
      expression: "Marine ecosystem contamination",
      meaning: "The pollution of oceanic habitats by synthetic chemicals and debris.",
      example: "Floating debris leads to severe marine ecosystem contamination worldwide."
    },
    {
      expression: "Depletion of natural resources",
      meaning: "The exhaustion of finite materials, minerals, and fossil fuels.",
      example: "Manufacturing billions of plastic bottles accelerates the depletion of natural resources."
    },
    {
      expression: "Waste-management infrastructure",
      meaning: "The physical facilities, vehicles, and systems used to collect, sort, and process refuse.",
      example: "Municipalities must invest in modern waste-management infrastructure to handle urban refuse."
    },
    {
      expression: "Sustainable consumption patterns",
      meaning: "Practices of buying and using goods that protect the environment for future generations.",
      example: "Public campaigns encourage households to adopt sustainable consumption patterns."
    },
    {
      expression: "Reusable alternatives",
      meaning: "Durable products crafted to replace single-use items through continuous reuse.",
      example: "Stainless-steel bottles serve as practical and reusable alternatives to plastic."
    },
    {
      expression: "Circular economy",
      meaning: "An economic model emphasizing reuse, sharing, repair, and recycling to eliminate waste.",
      example: "Transitioning towards a circular economy keeps valuable materials in circulation."
    },
    {
      expression: "Extended producer responsibility",
      meaning: "Policy requiring manufacturers to fund and manage the post-consumer disposal of their packaging.",
      example: "Enforcing extended producer responsibility compels corporations to design recyclable products."
    },
    {
      expression: "Resource-efficient manufacturing",
      meaning: "Industrial production that minimizes raw material usage, water, and energy.",
      example: "Companies should invest in resource-efficient manufacturing to shrink their ecological footprint."
    },
    {
      expression: "Indiscriminate waste disposal",
      meaning: "Careless, unmanaged dumping of trash into public streets and natural environments.",
      example: "Indiscriminate waste disposal clogs drainage channels and exacerbates flooding."
    },
    {
      expression: "Long-term ecological consequences",
      meaning: "Permanent or multi-generational impacts on biodiversity and natural ecosystems.",
      example: "Discarding non-biodegradable polymers carries profound long-term ecological consequences."
    }
  ],

  // Guided Brainstorm Cards matching the User's Lesson Plan
  brainstormCards: [
    {
      id: "card-1",
      stepNum: 1,
      badge: "Problem 01 • Environmental Pollution",
      title: "Landfill & Oceanic Accumulation",
      question:
        "Why does the accumulation of disposable plastics pose such an enduring environmental threat?",
      thinkingLens:
        "Examine the mismatch between minutes of single-use convenience and the centuries required for synthetic polymers to break down in nature.",
      selfCheck:
        "Did you mention that plastic items accumulate in landfills, rivers, and oceans without breaking down?",
      idea:
        "Disposable items frequently end up in landfills, waterways, and oceans, where they persist for centuries and accumulate in natural ecosystems.",
      promptInsight:
        "Plastics do not break down quickly; unmanaged disposal causes permanent solid waste buildup.",
      collocations: [
        "environmental pollution",
        "plastic accumulation",
        "accumulate in the environment"
      ],
      example:
        "Plastic bags and packaging discarded on streets can enter drainage systems and waterways."
    },
    {
      id: "card-2",
      stepNum: 2,
      badge: "Problem 02 • Wildlife & Marine Threats",
      title: "Wildlife Ingestion & Ecosystem Harm",
      question:
        "In what specific ways does discarded single-use packaging endanger terrestrial and marine animals?",
      thinkingLens:
        "Analyze animal feeding behavior when plastic debris floats in natural habitats, leading to mistaking waste for food.",
      selfCheck:
        "Did you highlight that animals mistake plastic for prey or become trapped in discarded wrapping?",
      idea:
        "Animals accidentally consume plastic waste or become trapped in packaging, causing severe internal blockages, injuries, and death.",
      promptInsight:
        "Marine fauna ingest fragments or get entangled in synthetic packaging, disrupting aquatic ecosystems.",
      collocations: [
        "marine ecosystems",
        "consume plastic waste",
        "fatal ingestion"
      ],
      example:
        "Marine animals such as turtles and seabirds mistaking floating plastic bags for jellyfish and food."
    },
    {
      id: "card-3",
      stepNum: 3,
      badge: "Solution 01 • Restrictions & Fiscal Charges",
      title: "Targeted Taxes & Consumption Limits",
      question:
        "How can state authorities most directly discourage unnecessary consumer reliance on single-use items?",
      thinkingLens:
        "Consider how point-of-sale pricing disincentives rapidly shift day-to-day shopping habits toward durable alternatives.",
      selfCheck:
        "Did you explain how charges on disposable items prompt shoppers to switch to reusables?",
      idea:
        "Governments can impose legal restrictions or additional charges on single-use items to make disposable convenience economically disadvantageous.",
      promptInsight:
        "Taxes and bag levies encourage consumers to bring durable cloth bags and containers.",
      collocations: [
        "impose restrictions",
        "additional charges",
        "discourage unnecessary consumption"
      ],
      example:
        "Charging customers for plastic shopping bags encouraging them to carry reusable cloth bags."
    },
    {
      id: "card-4",
      stepNum: 4,
      badge: "Solution 02 • Reusables & Corporate Responsibility",
      title: "Promoting Reusables & Sustainable Packaging",
      question:
        "What coordinated steps should consumers and manufacturers take to eliminate disposable waste?",
      thinkingLens:
        "Pair consumer adoption of durable wares with corporate obligations to redesign packaging using recyclable, lower-impact materials.",
      selfCheck:
        "Did you emphasize reusable personal containers alongside manufacturers adopting sustainable packaging?",
      idea:
        "Consumers should embrace reusable bottles and containers, while businesses reduce packaging and adopt recyclable materials.",
      promptInsight:
        "Durable alternatives eliminate waste at the source, while responsible corporate design minimizes packaging volume.",
      collocations: [
        "reusable alternatives",
        "sustainable packaging",
        "reduce daily waste"
      ],
      example:
        "Using stainless-steel water bottles, reusable coffee cups, and restaurants adopting recyclable food packaging."
    }
  ],

  fluidVocab: [
    {
      word: "Throwaway culture",
      pos: "noun phrase",
      meaning: "A societal pattern in which goods are purchased cheaply and discarded after short use.",
      naturalCollocation: "combat the throwaway culture",
      organicExample: "A pervasive throwaway culture encourages consumers to prioritize convenience over ecological sustainability.",
      mechanicalPitfall: "Avoid 'throwing things away society'; use the recognized academic term 'throwaway culture'.",
      examinerInsight: "Powerful sociological term rewarded in Task Achievement and Lexical Resource."
    },
    {
      word: "Linear consumption model",
      pos: "noun phrase",
      meaning: "An industrial model where resources are extracted, manufactured, used briefly, and dumped as waste.",
      naturalCollocation: "unsustainable linear consumption model",
      organicExample: "Single-use products exemplify a linear consumption model that rapidly exhausts non-renewable natural reserves.",
      mechanicalPitfall: "Do not write 'straight line economy'; linear consumption model is the precise economic term.",
      examinerInsight: "Demonstrates high-level economic understanding when contrasted with the circular economy."
    },
    {
      word: "Circular economy",
      pos: "noun phrase",
      meaning: "An economic system aimed at eliminating waste through the continual use of resources via reuse, repair, and recycling.",
      naturalCollocation: "transition to a circular economy",
      organicExample: "Establishing a circular economy ensures that packaging materials remain in industrial loops rather than reaching landfills.",
      mechanicalPitfall: "Avoid colloquial 'recycle loops'; circular economy is the global policy standard.",
      examinerInsight: "Examiners recognize this as a hallmark of sophisticated environmental policy analysis."
    },
    {
      word: "Extended Producer Responsibility",
      pos: "noun phrase",
      meaning: "A policy principle extending a manufacturer's financial and operational duty to post-consumer product disposal.",
      naturalCollocation: "mandatory extended producer responsibility",
      organicExample: "Enforcing extended producer responsibility obligates corporations to finance municipal packaging reclamation.",
      mechanicalPitfall: "Do not say 'making companies pay for garbage'; EPR is the established legal policy term.",
      examinerInsight: "Accurately names the most prominent global packaging policy framework."
    }
  ],

  consequences: [
    {
      type: "negative",
      title: "Problem 01: Environmental Pollution",
      category: "standard",
      desc: "Disposable products, particularly plastic items, frequently end up in landfills, rivers and oceans, accumulating in nature.",
      example: "Plastic bags and packaging discarded on streets can eventually enter drainage systems and waterways.",
      level: "Problem Core Feature",
      simpleTakeaway: "Plastics take centuries to break down, polluting land, rivers, and oceans.",
      collocation: "environmental pollution"
    },
    {
      type: "negative",
      title: "Problem 02: Threat to Wildlife & Marine Ecosystems",
      category: "standard",
      desc: "Animals accidentally consume plastic waste or become trapped in packaging, causing injuries, starvation and death.",
      example: "Marine animals such as turtles and seabirds may mistake floating plastic for food.",
      level: "Problem Core Feature",
      simpleTakeaway: "Animals eat or get trapped in plastic rubbish, causing severe injury or death.",
      collocation: "marine ecosystem contamination"
    },
    {
      type: "negative",
      title: "Problem 03: Excessive Natural Resource Consumption",
      category: "standard",
      desc: "Producing disposable goods consumes raw materials, energy and water for products discarded after one use.",
      example: "Manufacturing large quantities of disposable plastic bottles requires petroleum-based raw materials and energy.",
      level: "Problem Core Feature",
      simpleTakeaway: "Making single-use items uses up valuable oil, water, and energy for minutes of utility.",
      collocation: "depletion of natural resources"
    },
    {
      type: "negative",
      title: "Problem 04: Pressure on Waste-Management Systems",
      category: "standard",
      desc: "Continuous disposal increases municipal waste volumes, overwhelming landfill sites and local collection authorities.",
      example: "Cities with high consumption of takeaway packaging may struggle to collect, sort and process the resulting waste.",
      level: "Problem Core Feature",
      simpleTakeaway: "Cities struggle to collect, sort, and process the rising mountain of disposable packaging.",
      collocation: "waste-management infrastructure"
    },
    {
      type: "negative",
      title: "Problem 05: Long-Term Financial Burden",
      category: "standard",
      desc: "Governments must spend considerable public resources on waste haulage and landfills, diverting funds from other services.",
      example: "Municipal authorities needing to invest in additional waste collection vehicles, recycling facilities and landfill maintenance.",
      level: "Problem Core Feature",
      simpleTakeaway: "Cleaning up disposable waste costs millions that could be spent on hospitals and schools.",
      collocation: "long-term financial burden"
    }
  ],

  evaluationArguments: [
    {
      title: "Solution 01: Restrict or Tax Disposable Products",
      category: "standard",
      reason:
        "Imposing restrictions or additional charges on disposable products discourages unnecessary consumer reliance.",
      development:
        "Point-of-sale charges alter consumer habits instantly by making single-use convenience financially disadvantageous.",
      example:
        "Charging customers for plastic shopping bags can encourage them to carry reusable cloth bags.",
      type: "argument",
      level: "Solution Core Policy",
      simpleTakeaway: "Taxes and bag charges make people switch to reusable alternatives.",
      collocation: "impose restrictions"
    },
    {
      title: "Solution 02: Promote Reusable Alternatives",
      category: "standard",
      reason:
        "Encouraging consumers to replace disposable products with durable alternatives prevents waste at the source.",
      development:
        "Carrying personal reusable wares avoids generating trash in the first place, shrinking individual ecological footprints.",
      example:
        "Using stainless-steel water bottles, reusable coffee cups and washable food containers to reduce daily waste.",
      type: "argument",
      level: "Solution Practical Measure",
      simpleTakeaway: "Using refillable bottles and washable food containers stops waste before it starts.",
      collocation: "reusable alternatives"
    },
    {
      title: "Solution 03: Encourage Sustainable Packaging",
      category: "standard",
      reason:
        "Businesses should reduce excess packaging and shift toward recyclable or lower-impact materials.",
      development:
        "Redesigning commercial packaging with compostable or easily recyclable materials eliminates permanent synthetic waste.",
      example:
        "Restaurants replacing excessive plastic packaging with appropriately designed reusable or recyclable containers.",
      type: "argument",
      level: "Solution Business Responsibility",
      simpleTakeaway: "Companies must cut excess wrapping and use recyclable or compostable materials.",
      collocation: "sustainable packaging"
    },
    {
      title: "Solution 04: Improve Recycling Infrastructure",
      category: "standard",
      reason:
        "Accessible recycling facilities and household waste separation make material recovery far more efficient.",
      development:
        "Providing clear, dedicated sorting bins ensures that plastics, glass, and paper can be recycled without contamination.",
      example:
        "Separate collection bins for plastic, paper, glass and organic waste making municipal recycling more efficient.",
      type: "argument",
      level: "Solution Municipal Upgrade",
      simpleTakeaway: "Separate bins and better sorting facilities make recycling efficient.",
      collocation: "recycling infrastructure"
    },
    {
      title: "Solution 05: Increase Public Awareness",
      category: "standard",
      reason:
        "Educational campaigns help citizens understand environmental impacts and build responsible consumption habits.",
      development:
        "Educating students and communities dismantles the throwaway mentality and normalizes reusable alternatives.",
      example:
        "Schools introducing activities encouraging students to avoid disposable bottles and bring reusable lunch containers.",
      type: "argument",
      level: "Solution Educational Campaign",
      simpleTakeaway: "School and community campaigns teach people why avoiding disposables matters.",
      collocation: "increase public awareness"
    }
  ],

  facultyAngles: [
    {
      title: "Linear Consumption Model vs Circular Economy (Core Argument)",
      development:
        "Single-use products create a linear consumption model — resources are extracted, manufactured into products, used briefly and then discarded. This is fundamentally less sustainable than a circular model based on reuse, repair and recycling."
    },
    {
      title: "The Critical Distinction: Recycling vs Reducing & Reusing",
      development:
        "Recycling is not the same as reducing consumption. Recycling deals with waste after it has been generated, whereas reusing products and reducing unnecessary packaging prevent waste from being created in the first place."
    }
  ],

  // Extended Curriculum Fields
  causeAndEffectChains: CAUSE_AND_EFFECT_CHAINS,
  facultyDeeperProblems: FACULTY_DEEPER_PROBLEMS,
  facultyDeeperSolutions: FACULTY_DEEPER_SOLUTIONS,
  linearVsCircularModel: {
    title: "Linear vs Circular Consumption Models",
    linear: "Resources Extracted → Manufactured into Products → Used Briefly → Discarded into Biosphere",
    circular: "Resources Kept in Use → Reused & Repaired → Recycled back into Production Loops",
    coreArgument:
      "Single-use products create a linear consumption model — resources are extracted, manufactured into products, used briefly and then discarded. This is fundamentally less sustainable than a circular model based on reuse, repair and recycling."
  },
  usefulLinkersByFunction: USEFUL_LINKERS_BY_FUNCTION,
  smartboardBrainstormMap: {
    title: "Single-Use Products: Problems → Solutions",
    problems: [
      "Plastic pollution",
      "Wildlife damage",
      "Resource depletion",
      "Landfill pressure",
      "Throwaway culture"
    ],
    solutions: [
      "Restrict disposable items",
      "Reusable alternatives",
      "Sustainable packaging",
      "Better recycling",
      "Public awareness"
    ],
    centralMessage:
      "Move away from a throwaway culture towards responsible production and consumption."
  },
  fiveMinuteClassroomChallenge: {
    questions: [
      "Why do people prefer disposable products even when reusable alternatives are available?",
      "How does throwing away a plastic bottle after a few minutes create a long-term environmental problem?",
      "Should manufacturers or consumers bear greater responsibility for reducing disposable waste?",
      "Would banning all single-use products be practical, considering medical and hygiene requirements?"
    ],
    discussionQuestion:
      "If reusable products are environmentally better, why do so many consumers continue choosing disposable ones?",
    discussionContext:
      "This question encourages students to consider convenience, affordability, consumer habits and the availability of alternatives."
  },
  teachingRecommendation: {
    bestProblems: "Environmental pollution + excessive resource consumption",
    bestSolutions: "Government restrictions + reusable alternatives and producer responsibility",
    recyclingVsReducingDistinction:
      "Recycling is not the same as reducing consumption. Recycling deals with waste after it has been generated, whereas reusing products and reducing unnecessary packaging prevent waste from being created in the first place."
  }
};
