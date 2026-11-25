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
   STUDENT IDEA BANK: PROBLEMS CAUSED BY SINGLE-USE PRODUCTS (BODY PARA 1)
   ========================================================================== */
export const ADVANTAGES_IDEA_BANK: IdeaBankItem[] = [
  {
    id: "prob-1",
    badge: "Problem 01 • Landfill Saturation & Century-Long Degradation",
    title: "Overwhelming municipal landfills with non-biodegradable waste",
    mainIdea:
      "Disposable single-use items, especially petroleum-based plastics, persist in municipal dumps for centuries without decomposing, quickly exhausting urban waste capacities.",
    supportingReason:
      "Conventional plastics take between 400 and 1,000 years to break down; their rapid, disposable consumption creates mountains of permanent solid refuse that municipal waste systems cannot manage.",
    example:
      "Global municipal landfill sites reaching total capacity decades ahead of schedule due to billions of single-use beverage bottles and food wrappers discarded daily.",
    collocations: [
      "landfill saturation",
      "non-biodegradable waste",
      "century-long degradation",
      "exhaust municipal capacity"
    ]
  },
  {
    id: "prob-2",
    badge: "Problem 02 • Marine Ecosystem Contamination & Microplastics",
    title: "Devastating aquatic wildlife and contaminating marine food webs",
    mainIdea:
      "Lightweight disposable plastics easily escape waste management streams into waterways and oceans, causing fatal physical ingestion and toxic microplastic bioaccumulation.",
    supportingReason:
      "Marine fauna routinely mistake discarded bags and packaging for prey, leading to starvation, while fragmented microplastics absorb industrial toxins and enter seafood consumed by humans.",
    example:
      "The Great Pacific Garbage Patch accumulating millions of tons of single-use debris, with marine biologists finding plastic remnants in over 70% of sampled pelagic fish.",
    collocations: [
      "marine ecosystem contamination",
      "microplastic bioaccumulation",
      "fatal ingestion",
      "aquatic food webs"
    ]
  },
  {
    id: "prob-3",
    badge: "Problem 03 • Petrochemical Depletion & Heavy Carbon Footprint",
    title: "Accelerating non-renewable resource extraction and greenhouse emissions",
    mainIdea:
      "Manufacturing disposable items requires enormous quantities of fossil fuels for single-use lifespans of merely minutes, squandering finite natural resources.",
    supportingReason:
      "Refining virgin crude oil and gas into disposable polymers generates immense carbon emissions at every stage—from extraction and transport to high-temperature factory synthesis.",
    example:
      "The plastic packaging sector consuming over 10% of global oil refining outputs annually, generating more carbon emissions than global commercial aviation.",
    collocations: [
      "petrochemical depletion",
      "non-renewable resources",
      "finite natural reserves",
      "heavy carbon footprint"
    ]
  },
  {
    id: "prob-4",
    badge: "Problem 04 • Urban Drainage Obstruction & Secondary Flooding",
    title: "Choking city drainage canals and multiplying flood disasters",
    mainIdea:
      "Carelessly discarded disposable items frequently clog urban sewers and stormwater canals, exacerbating catastrophic street inundation during monsoons.",
    supportingReason:
      "Plastic bags and styrofoam containers create impermeable dams within drainage subterranean conduits, obstructing water runoff in densely populated metropolitan areas.",
    example:
      "Metropolises in South and Southeast Asia experiencing severe localized flash floods directly caused by thousands of single-use plastic bags choking municipal culverts.",
    collocations: [
      "drainage obstruction",
      "urban stormwater canals",
      "localized flash floods",
      "impermeable barrier"
    ]
  },
  {
    id: "prob-5",
    badge: "Problem 05 • Chemical Leaching into Soil & Groundwater",
    title: "Poisoning agricultural soils and freshwater aquifers through toxic runoff",
    mainIdea:
      "As disposable polymers slowly break down in unlined dump sites, hazardous chemical additives seep into surrounding soils and subterranean water tables.",
    supportingReason:
      "Substances such as phthalates, bisphenol A (BPA), and chemical plasticizers leach into irrigation channels and potable groundwater, posing long-term endocrine risks.",
    example:
      "Agricultural zones adjacent to uncontrolled waste heaps showing elevated soil toxicity and diminished crop yields due to chemical plasticizer runoff.",
    collocations: [
      "chemical leaching",
      "subterranean groundwater",
      "hazardous chemical additives",
      "potable water aquifers"
    ]
  }
];

/* ==========================================================================
   STUDENT IDEA BANK: SOLUTIONS TO SINGLE-USE PRODUCTS (BODY PARA 2)
   ========================================================================== */
export const DISADVANTAGES_IDEA_BANK: IdeaBankItem[] = [
  {
    id: "sol-1",
    badge: "Solution 01 • Statutory Bans & Fiscal Disincentives",
    title: "Enacting strict legislative prohibitions and single-use plastic taxes",
    mainIdea:
      "National governments must implement outright legal bans on superfluous single-use plastics while levying steep fiscal charges on remaining disposable goods.",
    supportingReason:
      "Economic disincentives immediately alter consumer behavior; when disposable bags or cutlery carry substantial fees, consumers rapidly switch to durable reusable options.",
    example:
      "Ireland's plastic bag tax slashing single-use bag consumption by 90% within months of introduction and raising millions for green environmental funds.",
    collocations: [
      "statutory ban",
      "fiscal disincentive",
      "single-use plastic tax",
      "legislative prohibition"
    ]
  },
  {
    id: "sol-2",
    badge: "Solution 02 • Subsidising Biodegradable & Compostable Materials",
    title: "Providing state grants and tax breaks for plant-based packaging innovation",
    mainIdea:
      "Governments can accelerate the commercial replacement of plastics by subsidising manufacturers developing organic, fully compostable packaging alternatives.",
    supportingReason:
      "Packaging derived from agricultural waste, seaweed, cornstarch, or mycelium decomposes harmlessly within weeks, eliminating permanent environmental residue.",
    example:
      "Startups in Europe deploying seaweed and mushroom-root packaging for takeaway food, supported by government clean-technology research grants.",
    collocations: [
      "subsidise clean technology",
      "biodegradable alternative",
      "plant-based packaging",
      "compostable materials"
    ]
  },
  {
    id: "sol-3",
    badge: "Solution 03 • Enforcing Extended Producer Responsibility (EPR)",
    title: "Mandating that manufacturers finance the end-of-life recovery of packaging",
    mainIdea:
      "Corporations producing disposable packaging must be legally obligated to fund collection, sorting, and circular recycling infrastructure.",
    supportingReason:
      "When companies are financially accountable for post-consumer waste management, they are powerfully incentivized to redesign products using minimal, recyclable materials.",
    example:
      "Germany's dual-system EPR laws requiring beverage and food conglomerates to cover 100% of municipal packaging collection, driving national recycling rates over 75%.",
    collocations: [
      "extended producer responsibility",
      "circular recycling infrastructure",
      "corporate accountability",
      "end-of-life recovery"
    ]
  },
  {
    id: "sol-4",
    badge: "Solution 04 • Deposit-Return Schemes & Reusable Ecosystems",
    title: "Establishing financial deposit incentives and widespread refill stations",
    mainIdea:
      "Implementing mandatory deposit-return schemes on beverage containers creates immediate economic rewards for consumers who return bottles for reuse.",
    supportingReason:
      "Charging a modest refundable deposit ensures that containers are treated as valuable commodities rather than trash, achieving near-perfect recovery rates.",
    example:
      "Scandinavian countries operating automated reverse-vending deposit kiosks, maintaining container recovery rates in excess of 95%.",
    collocations: [
      "deposit-return scheme",
      "reverse-vending kiosk",
      "reusable ecosystem",
      "refill stations"
    ]
  },
  {
    id: "sol-5",
    badge: "Solution 05 • Public Education & Normalizing Reusable Culture",
    title: "Nationwide civic campaigns and institutional mandates for reusable wares",
    mainIdea:
      "Sustained educational awareness and institutional rules in schools, workplaces, and cafes must normalize carrying reusable mugs, bottles, and food containers.",
    supportingReason:
      "Shifting societal norms removes the cultural expectation of disposable convenience, transforming reusable alternatives into standard civic etiquette.",
    example:
      "Café chains offering discounts to customers who provide their own thermos mugs, drastically cutting disposable paper cup refuse.",
    collocations: [
      "normalize reusable culture",
      "civic awareness campaign",
      "reusable alternatives",
      "societal norms"
    ]
  }
];

// Aliases for layout compatibility
export const OPINION_IDEA_BANK = ADVANTAGES_IDEA_BANK;
export const NON_OPINION_IDEA_BANK = DISADVANTAGES_IDEA_BANK;
export const CAUSES_IDEA_BANK = ADVANTAGES_IDEA_BANK;
export const SOLUTIONS_IDEA_BANK = DISADVANTAGES_IDEA_BANK;

/* ==========================================================================
   MASTER TASK 2 DATASET: SINGLE-USE PRODUCTS (PROBLEMS AND SOLUTIONS)
   ========================================================================== */
export const TASK2_DATA: Task2Data = {
  id: "single-use-products-problems-and-solutions",

  taskType: "Problems and Solutions Essay",

  title: "IELTS Writing Task 2 — Problems and Solutions: The Proliferation of Single-Use Products",

  questionText:
    "Today single use products are very common.\n\n- What are the problems caused by this?\n- What could be the possible solutions?",

  audioUrl: "materials/Taxation_and_Public_Services_Briefing.m4a",

  timingSeconds: 180,

  recommendedPosition:
    "A direct, structured approach establishing that the proliferation of single-use products inflicts catastrophic ecological damage—principally landfill saturation and marine microplastic contamination. Resolving this crisis requires coordinated multi-stakeholder action: statutory government bans, fiscal levies on disposable plastics, and legally mandated Extended Producer Responsibility (EPR) alongside state-subsidised biodegradable alternatives.",

  strongestArgument:
    "Disposable single-use items create centuries of non-biodegradable pollution for merely minutes of consumer convenience, but enforcing statutory bans, packaging levies, and corporate extended producer responsibility can rapidly accelerate the global shift toward a circular, reusable economy.",

  // 1. Sample introduction planning points
  introPlanningPoints: [
    "Sentence 1 (Paraphrase): In contemporary society, manufactured single-use items have become exceptionally ubiquitous across domestic and commercial sectors.",
    "Sentence 2 (Thesis / Outline): While this disposable culture inflicts severe environmental degradation, notably acute landfill saturation and marine contamination, viable solutions exist, including statutory product bans, fiscal deterrents, and state subsidies for biodegradable alternatives."
  ],

  sampleIntro:
    "In contemporary society, manufactured single-use items have become exceptionally ubiquitous across domestic and commercial sectors. While this disposable culture inflicts severe environmental degradation, notably acute landfill saturation and marine contamination, viable solutions exist, including statutory product bans, fiscal deterrents, and state subsidies for biodegradable alternatives.",

  sampleConclusion:
    "In conclusion, the widespread prevalence of single-use items poses grave ecological threats, chiefly the overwhelming of municipal landfills and the pervasive contamination of aquatic ecosystems. Nevertheless, through decisive government intervention—including strict legislative bans, targeted packaging taxes, and the subsidisation of biodegradable materials—societies can effectively reverse this disposable trend and transition toward a sustainable circular economy.",

  // 2. Five-minute planning map
  fiveMinutePlanningMap: {
    causes: [
      {
        id: "prob-1",
        label: "Landfill saturation & centuries-long persistence",
        note: "Disposable plastics take hundreds of years to decompose, exhausting municipal waste capacities."
      },
      {
        id: "prob-2",
        label: "Marine contamination & microplastic ingestion",
        note: "Aquatic wildlife consumes plastic fragments, poisoning marine ecosystems and human seafood chains."
      },
      {
        id: "prob-3",
        label: "Petrochemical depletion & carbon emissions",
        note: "Refining fossil fuels for items discarded in minutes squanders finite resources and drives climate change."
      },
      {
        id: "prob-4",
        label: "Urban sewer clogging & flash flooding",
        note: "Discarded plastic packaging obstructs municipal storm drains, multiplying destructive flood risks."
      },
      {
        id: "prob-5",
        label: "Toxic chemical leaching into soil and aquifers",
        note: "Additives such as phthalates and BPA seep into surrounding agricultural soils and potable groundwater."
      }
    ],
    solutions: [
      {
        id: "sol-1",
        label: "Statutory product bans & plastic taxes",
        note: "Legal prohibitions and steep charges on single-use items instantly curb non-essential consumption."
      },
      {
        id: "sol-2",
        label: "Subsidising organic biodegradable packaging",
        note: "State grants for seaweed, cornstarch, and mycelium packaging provide harmless compostable substitutes."
      },
      {
        id: "sol-3",
        label: "Extended Producer Responsibility (EPR) mandates",
        note: "Holding manufacturers legally accountable for packaging waste forces circular product redesign."
      },
      {
        id: "sol-4",
        label: "Deposit-return schemes & reverse-vending kiosks",
        note: "Refundable container deposits motivate consumers to return bottles and cans for recycling."
      },
      {
        id: "sol-5",
        label: "Normalizing reusable containers through education",
        note: "Civic awareness and retail incentives encourage patrons to bring personal flasks and containers."
      }
    ]
  },

  causesIdeaBank: ADVANTAGES_IDEA_BANK,
  solutionsIdeaBank: DISADVANTAGES_IDEA_BANK,

  // 3. Body paragraphs matching the MANDATORY 4-PARAGRAPH PROBLEMS & SOLUTIONS ARCHITECTURE:
  // Body 1: The Problems caused by single-use products
  // Body 2: The Possible Solutions to tackle this crisis
  bodyParagraphs: [
    {
      paraNumber: 1,
      side: "advantages",
      title: "Body Para 1: The Grave Ecological Problems Caused by Single-Use Products",
      theme: "Landfill Exhaustion, Non-Biodegradable Persistence & Marine Toxicity",
      mainReason:
        "The proliferation of single-use goods generates catastrophic environmental consequences, most prominently the overwhelming saturation of municipal waste sites and the irreversible devastation of marine ecosystems.",
      supportingReasons:
        "Because petroleum-based polymers do not biologically degrade, they linger in the biosphere for centuries, quickly exhausting landfill capacity. Furthermore, immense volumes of disposable packaging drift into oceans, where animals mistake them for food, leading to lethal intestinal blockage and the bioaccumulation of toxic microplastics across aquatic food chains.",
      example:
        "The Great Pacific Garbage Patch accumulating millions of tons of single-use plastics, with microplastic particles now detected in over 70% of commercial seafood.",
      band9Snippet:
        "“To begin with, the unchecked dominance of single-use commodities triggers immense ecological crises, most notably acute landfill exhaustion and pervasive marine pollution.”",
      alternativeReasons: [
        {
          id: "prob-model-1",
          badge: "Problem Analysis • Band 9",
          title: "Landfill Saturation & Marine Food Web Poisoning",
          category: "standard",
          mainReason:
            "Single-use items persist for centuries in landfills and shatter into toxic microplastics that devastate marine food webs.",
          supportingReasons:
            "Petroleum-based packaging takes up to a millennium to decompose, generating mountainous waste. In waterways, lightweight plastics choke marine fauna and release hazardous chemical plasticizers.",
          example:
            "Global dumps overflowing decades ahead of target projections and marine fauna dying from plastic impaction.",
          band9Snippet:
            "“The primary dilemma stemming from single-use items is the staggering volume of non-biodegradable waste they inject into the biosphere.”",
          modelParagraph:
            "To begin with, the unchecked dominance of single-use commodities triggers immense ecological crises, most notably acute landfill exhaustion and pervasive marine pollution. Because petroleum-based plastics are engineered for durability rather than biodegradability, they linger in landfills for centuries, overwhelming municipal waste management infrastructure worldwide. Furthermore, a substantial percentage of lightweight disposable containers inevitably escapes waste streams and migrates into aquatic environments. In oceans, marine wildlife routinely ingests discarded plastic fragments, suffering fatal internal blockages and starvation. Over time, these polymers fragment into toxic microplastics, which absorb industrial carcinogens and bioaccumulate through marine trophic levels, ultimately posing severe endocrine and oncological risks to human consumers.",
          examinerNotes:
            "Masterful problem analysis: explicitly establishes the longevity of non-biodegradable plastics, logically links terrestrial dumping to oceanic migration, and traces microplastics up the trophic ladder."
        }
      ]
    },
    {
      paraNumber: 2,
      side: "disadvantages",
      title: "Body Para 2: Actionable Strategic Solutions to Overcome Single-Use Waste",
      theme: "Statutory Prohibitions, Packaging Levies, Subsidies & Producer Accountability",
      mainReason:
        "Addressing this crisis requires decisive government intervention combined with corporate accountability, chiefly through statutory bans, fiscal deterrents, and extended producer responsibility.",
      supportingReasons:
        "Levying steep taxes on disposable plastics immediately suppresses consumer demand, while investing state subsidies into plant-based biodegradable substitutes ensures viable commercial alternatives. Simultaneously, enforcing Extended Producer Responsibility laws obligates manufacturers to finance the circular collection and recycling of their packaging.",
      example:
        "Ireland's plastic bag levy reducing bag usage by 90% in months, and Germany's packaging laws compelling corporations to finance nationwide recycling schemes.",
      band9Snippet:
        "“Nevertheless, this environmental catastrophe can be effectively mitigated through a multi-pronged strategy encompassing legislative deterrents and industrial innovation.”",
      alternativeReasons: [
        {
          id: "sol-model-1",
          badge: "Solution Analysis • Band 9",
          title: "Legislative Levies, Organic Subsidies & Corporate EPR",
          category: "standard",
          mainReason:
            "Governments must implement statutory bans on superfluous disposables, subsidise organic packaging, and hold manufacturers financially accountable.",
          supportingReasons:
            "Taxes rapidly shift consumer behavior towards reusable receptacles. In addition, providing state research grants for compostable algae and cornstarch alternatives eliminates plastic dependence.",
          example:
            "Scandinavian deposit-return systems achieving 95% container return rates and national packaging taxes driving reusable container adoption.",
          band9Snippet:
            "“To resolve this dilemma, governments must wield both legislative restrictions and targeted financial mechanisms.”",
          modelParagraph:
            "Nevertheless, this environmental dilemma can be effectively resolved through a coordinated approach combining legislative deterrents, material innovation, and corporate accountability. Firstly, national governments must institute statutory bans on unnecessary single-use items, accompanied by substantial fiscal levies on remaining disposable packaging. As evidenced by jurisdictions like Ireland, implementing plastic taxes rapidly curtails consumer reliance on disposables by making reusable alternatives economically advantageous. Secondly, authorities should provide research subsidies and tax breaks to companies developing fully compostable materials derived from seaweed, cornstarch, or agricultural residues. Finally, enforcing stringent Extended Producer Responsibility mandates would require manufacturers to cover the full financial cost of collecting and recycling their packaging, compelling multinational corporations to transition toward sustainable, circular product designs.",
          examinerNotes:
            "Exemplary solutions paragraph: presents a prioritized multi-tier response (legislative deterrents, technological material subsidies, corporate extended producer responsibility), citing verifiable global precedents."
        }
      ]
    }
  ],

  // 4. Academic Vocabulary List (12 Genuine Band 8.5/9 Items with Pure, Original Dictionary Meanings)
  vocabList: [
    {
      word: "Proliferation",
      definition: "Rapid increase in the number or amount of something; rapid reproduction or growth.",
      phonetic: "/prəˌlɪf.əˈreɪ.ʃən/",
      term: "Proliferation",
      meaning: "Rapid increase in the number or amount of something; rapid reproduction or growth.",
      example: "The proliferation of disposable goods has placed an unsustainable burden on municipal landfills.",
      sampleSentence: "The proliferation of disposable goods has placed an unsustainable burden on municipal landfills.",
      collocations: ["rapid proliferation", "proliferation of waste", "unchecked proliferation"]
    },
    {
      word: "Biodegradable",
      definition: "Capable of being decomposed by biological agents, especially bacteria and living microorganisms.",
      phonetic: "/ˌbaɪ.əʊ.dɪˈɡreɪ.də.bəl/",
      term: "Biodegradable",
      meaning: "Capable of being decomposed by biological agents, especially bacteria and living microorganisms.",
      example: "State subsidies can stimulate the production of fully biodegradable packaging alternatives.",
      sampleSentence: "State subsidies can stimulate the production of fully biodegradable packaging alternatives.",
      collocations: ["biodegradable materials", "readily biodegradable", "biodegradable packaging"]
    },
    {
      word: "Ubiquitous",
      definition: "Present, appearing, or found everywhere simultaneously; omnipresent.",
      phonetic: "/juːˈbɪk.wɪ.təs/",
      term: "Ubiquitous",
      meaning: "Present, appearing, or found everywhere simultaneously; omnipresent.",
      example: "Single-use plastic bottles have become ubiquitous in metropolitan retail outlets.",
      sampleSentence: "Single-use plastic bottles have become ubiquitous in metropolitan retail outlets.",
      collocations: ["ubiquitous presence", "become ubiquitous", "ubiquitous in modern society"]
    },
    {
      word: "Saturation",
      definition: "The state or process that occurs when no more of something can be absorbed, combined with, or added.",
      phonetic: "/ˌsætʃ.ərˈeɪ.ʃən/",
      term: "Saturation",
      meaning: "The state or process that occurs when no more of something can be absorbed, combined with, or added.",
      example: "Municipal waste sites in developing nations are rapidly approaching total saturation.",
      sampleSentence: "Municipal waste sites in developing nations are rapidly approaching total saturation.",
      collocations: ["landfill saturation", "reach saturation", "point of saturation"]
    },
    {
      word: "Deterrent",
      definition: "A thing that discourages or is intended to discourage someone from doing something.",
      phonetic: "/dɪˈter.ənt/",
      term: "Deterrent",
      meaning: "A thing that discourages or is intended to discourage someone from doing something.",
      example: "Financial levies on plastic bags serve as an effective deterrent against careless disposal.",
      sampleSentence: "Financial levies on plastic bags serve as an effective deterrent against careless disposal.",
      collocations: ["effective deterrent", "act as a deterrent", "fiscal deterrent"]
    },
    {
      word: "Mandate",
      definition: "An official order, directive, or authorization to act in a specified manner.",
      phonetic: "/ˈmæn.deɪt/",
      term: "Mandate",
      meaning: "An official order, directive, or authorization to act in a specified manner.",
      example: "The government issued a strict mandate requiring food vendors to phase out plastic cutlery.",
      sampleSentence: "The government issued a strict mandate requiring food vendors to phase out plastic cutlery.",
      collocations: ["legal mandate", "statutory mandate", "issue a mandate"]
    },
    {
      word: "Depletion",
      definition: "Reduction in the number, quantity, or supply of something; exhaustion of resources.",
      phonetic: "/dɪˈpliː.ʃən/",
      term: "Depletion",
      meaning: "Reduction in the number, quantity, or supply of something; exhaustion of resources.",
      example: "Manufacturing billions of disposable items accelerates the depletion of global petroleum reserves.",
      sampleSentence: "Manufacturing billions of disposable items accelerates the depletion of global petroleum reserves.",
      collocations: ["resource depletion", "depletion of reserves", "rapid depletion"]
    },
    {
      word: "Non-renewable",
      definition: "Existing in finite quantity; not capable of being replenished naturally within a human timeframe.",
      phonetic: "/ˌnɒn.rɪˈnjuː.ə.bəl/",
      term: "Non-renewable",
      meaning: "Existing in finite quantity; not capable of being replenished naturally within a human timeframe.",
      example: "Fossil fuels are non-renewable resources that should not be squandered on short-lived packaging.",
      sampleSentence: "Fossil fuels are non-renewable resources that should not be squandered on short-lived packaging.",
      collocations: ["non-renewable resources", "non-renewable energy", "finite non-renewable reserves"]
    },
    {
      word: "Leach",
      definition: "To drain away or cause chemicals or nutrients to percolate through soil or another material by the action of liquid.",
      phonetic: "/liːtʃ/",
      term: "Leach",
      meaning: "To drain away or cause chemicals or nutrients to percolate through soil or another material by the action of liquid.",
      example: "Hazardous plasticizers leach from unlined waste repositories directly into freshwater aquifers.",
      sampleSentence: "Hazardous plasticizers leach from unlined waste repositories directly into freshwater aquifers.",
      collocations: ["leach into soil", "leach toxic chemicals", "chemical leaching"]
    },
    {
      word: "Subsidise",
      definition: "To support financially; to pay part of the cost of producing something in order to keep its price accessible.",
      phonetic: "/ˈsʌb.sɪ.daɪz/",
      term: "Subsidise",
      meaning: "To support financially; to pay part of the cost of producing something in order to keep its price accessible.",
      example: "The ministry proposed to subsidise industrial facilities producing compostable plant containers.",
      sampleSentence: "The ministry proposed to subsidise industrial facilities producing compostable plant containers.",
      collocations: ["heavily subsidise", "subsidise innovation", "subsidise clean alternatives"]
    },
    {
      word: "Contaminate",
      definition: "To make something impure, unclean, or poisonous by adding an external or harmful substance.",
      phonetic: "/kənˈtæm.ɪ.neɪt/",
      term: "Contaminate",
      meaning: "To make something impure, unclean, or poisonous by adding an external or harmful substance.",
      example: "Degraded plastic particles contaminate oceanic habitats and poison aquatic feeding chains.",
      sampleSentence: "Degraded plastic particles contaminate oceanic habitats and poison aquatic feeding chains.",
      collocations: ["severely contaminate", "contaminate groundwater", "contaminate ecosystems"]
    },
    {
      word: "Incentivise",
      definition: "To motivate or encourage someone to do something, especially by offering a reward or financial benefit.",
      phonetic: "/ɪnˈsen.tɪ.vaɪz/",
      term: "Incentivise",
      meaning: "To motivate or encourage someone to do something, especially by offering a reward or financial benefit.",
      example: "Deposit-return programs incentivise shoppers to return glass and metal drink receptacles.",
      sampleSentence: "Deposit-return programs incentivise shoppers to return glass and metal drink receptacles.",
      collocations: ["incentivise consumers", "financially incentivise", "incentivise recycling"]
    }
  ],

  vocabHunt: [
    "proliferation",
    "biodegradable",
    "ubiquitous",
    "saturation",
    "deterrent",
    "mandate",
    "depletion",
    "non-renewable",
    "leach",
    "subsidise",
    "contaminate",
    "incentivise"
  ],

  connectorsTier: {
    sTier: [
      "To begin with, the unchecked dominance of single-use commodities...",
      "Furthermore, lightweight disposable packaging migrates into oceans...",
      "Nevertheless, this environmental dilemma can be effectively resolved through...",
      "In conclusion, the widespread prevalence of single-use items poses grave ecological threats..."
    ],
    aTier: [
      "Consequently, municipal landfills are exhausted decades ahead of schedule.",
      "As evidenced by jurisdictions like Ireland, implementing plastic taxes rapidly curtails demand.",
      "Over time, these polymers fragment into toxic microplastics that bioaccumulate."
    ],
    bTier: [
      "Firstly, national governments must institute statutory bans.",
      "Secondly, authorities should provide research subsidies for compostable materials.",
      "Finally, enforcing extended producer responsibility compels circular designs."
    ]
  },

  // 5. Academic Power Expressions & Authentic Collocations
  powerExpressions: [
    {
      expression: "Single-use item",
      meaning: "A product designed to be used once or for a short period before being discarded.",
      example: "The proliferation of the single-use item has exacerbated global waste management crises."
    },
    {
      expression: "Environmental degradation",
      meaning: "The deterioration of the environment through depletion of resources such as air, water, and soil.",
      example: "Accumulated consumer refuse contributes significantly to long-term environmental degradation."
    },
    {
      expression: "Fiscal deterrent",
      meaning: "A financial disincentive, such as a tax or penalty, implemented to discourage specific actions or consumption.",
      example: "Implementing a fiscal deterrent on plastic packaging prompts manufacturers to rethink materials."
    },
    {
      expression: "Sustainable alternative",
      meaning: "An option or choice that meets present needs without compromising the ability of future generations to meet theirs.",
      example: "Compostable paper pulp offers a commercially viable and sustainable alternative to polystyrene."
    },
    {
      expression: "Extended producer responsibility",
      meaning: "An environmental policy approach in which a manufacturer's responsibility for a product is extended to the post-consumer stage of a product's life cycle.",
      example: "Legislation mandating extended producer responsibility forces companies to finance packaging reclamation."
    }
  ],

  // 6. Guided Brainstorm Cards (2 for Problems, 2 for Solutions)
  brainstormCards: [
    {
      id: "card-1",
      stepNum: 1,
      badge: "Problem 01 • Terrestrial Persistence",
      title: "Landfill Saturation & Longevity",
      question:
        "Why does the transient consumption of disposable goods cause permanent problems in municipal waste management?",
      thinkingLens:
        "Contrast the minutes-long utility of disposable packaging against the centuries required for synthetic polymers to decompose.",
      selfCheck:
        "Did you explain that non-biodegradable plastics persist for centuries, exhausting landfill capacity?",
      idea:
        "Petroleum-based plastics do not degrade naturally; discarding billions of short-lived items daily rapidly saturates landfill capacity, creating permanent solid waste mountains.",
      promptInsight:
        "Single-use items are discarded in minutes but remain in the biosphere for 400 to 1,000 years, exhausting municipal disposal grounds.",
      collocations: [
        "landfill saturation",
        "non-biodegradable waste",
        "exhaust municipal capacity"
      ],
      example:
        "Global municipal landfills overflowing decades ahead of target projections due to billions of discarded plastic containers."
    },
    {
      id: "card-2",
      stepNum: 2,
      badge: "Problem 02 • Aquatic Toxicity",
      title: "Marine Pollution & Microplastics",
      question:
        "What specific hazards do discarded single-use packaging items pose to marine life and human health?",
      thinkingLens:
        "Trace plastic fragments from city drains into oceans, examining physical wildlife ingestion and microplastics entering human seafood.",
      selfCheck:
        "Did you link marine fauna ingestion to microplastic bioaccumulation up the food chain?",
      idea:
        "Floating plastic debris is ingested by aquatic species causing lethal blockages; degraded microplastics absorb toxins and travel up the food chain to human plates.",
      promptInsight:
        "Marine animals choke on plastic debris, and fragmented microplastics poison marine ecosystems and commercial seafood.",
      collocations: [
        "microplastic bioaccumulation",
        "marine ecosystem contamination",
        "trophic levels"
      ],
      example:
        "The Great Pacific Garbage Patch accumulating millions of tons of single-use debris, with microplastics detected in 70%+ of pelagic fish."
    },
    {
      id: "card-3",
      stepNum: 3,
      badge: "Solution 01 • Government Intervention",
      title: "Legislative Prohibitions & Fiscal Taxes",
      question:
        "How can state authorities most quickly and effectively curb consumer reliance on disposable single-use items?",
      thinkingLens:
        "Analyze how statutory prohibitions on non-essential items combined with point-of-sale taxes force an instant pivot to reusables.",
      selfCheck:
        "Did you connect financial disincentives directly to sudden shifts in consumer purchasing habits?",
      idea:
        "Banning non-recyclable cutlery and imposing hefty levies on disposable bags makes single-use convenience economically irrational, driving widespread adoption of durable alternatives.",
      promptInsight:
        "Bans eliminate the worst offenders, while fees on remaining items incentivize shoppers to carry reusables.",
      collocations: [
        "statutory ban",
        "fiscal deterrent",
        "curb consumption"
      ],
      example:
        "Ireland's plastic bag levy reducing consumption by 90% in months and raising millions for green environmental funds."
    },
    {
      id: "card-4",
      stepNum: 4,
      badge: "Solution 02 • Corporate Responsibility",
      title: "Subsidies & Extended Producer Responsibility",
      question:
        "How can governments motivate corporations to replace plastic packaging with harmless compostable options?",
      thinkingLens:
        "Examine state grants for organic material science alongside legal mandates forcing manufacturers to pay for waste cleanup.",
      selfCheck:
        "Did you mention Extended Producer Responsibility (EPR) and state subsidies for plant-based packaging?",
      idea:
        "Providing research subsidies for biodegradable seaweed/cornstarch packaging while enforcing Extended Producer Responsibility laws obligates firms to fund circular product lifecycles.",
      promptInsight:
        "Subsidies make clean materials commercially competitive, while EPR ensures polluters pay for collection.",
      collocations: [
        "extended producer responsibility",
        "biodegradable alternative",
        "circular economy"
      ],
      example:
        "Germany's dual-system EPR laws compelling manufacturers to finance national packaging recycling schemes."
    }
  ],

  // 7. Academic Fluid Vocabulary for Cohesion
  fluidVocab: [
    {
      word: "Non-biodegradable",
      pos: "adjective",
      meaning: "Not capable of being broken down or decomposed by natural biological agents or microorganisms.",
      naturalCollocation: "non-biodegradable synthetic polymers",
      organicExample: "The persistence of non-biodegradable synthetic polymers in the ocean causes severe long-term environmental degradation.",
      mechanicalPitfall: "Avoid 'plastics that never die'; non-biodegradable is the precise scientific term.",
      examinerInsight: "Essential technical descriptor rewarded in Band 9 Lexical Resource."
    },
    {
      word: "Bioaccumulation",
      pos: "noun",
      meaning: "The gradual accumulation of substances, such as toxins or microplastics, in the tissue of an organism over time.",
      naturalCollocation: "toxic microplastic bioaccumulation",
      organicExample: "The bioaccumulation of chemical plasticizers across marine trophic levels poses severe risks to human health.",
      mechanicalPitfall: "Do not write 'plastics piling up inside fish'; bioaccumulation is the authoritative scientific term.",
      examinerInsight: "Demonstrates advanced lexical range and precision in environmental biology."
    },
    {
      word: "Circularity",
      pos: "noun",
      meaning: "An economic model targeting zero waste by keeping resources in continuous use through recycling and regeneration.",
      naturalCollocation: "transition toward economic circularity",
      organicExample: "Mandatory extended producer responsibility compels manufacturing conglomerates to design packaging with high circularity.",
      mechanicalPitfall: "Avoid colloquial 'recycle loops'; circularity is the recognized economic policy term.",
      examinerInsight: "High-level sustainability term highly prized by academic examiners."
    },
    {
      word: "Microplastics",
      pos: "noun",
      meaning: "Extremely small pieces of plastic debris in the environment resulting from the disposal and breakdown of consumer products.",
      naturalCollocation: "pervasive airborne and marine microplastics",
      organicExample: "Sunlight and oceanic waves fragment discarded containers into microscopic particles known as microplastics.",
      mechanicalPitfall: "Do not say 'tiny plastic dots'; microplastics is the exact environmental term.",
      examinerInsight: "Essential topical terminology reflecting contemporary global discourse."
    }
  ],

  // 8. Consequences & Evaluation Idea Banks
  consequences: [
    {
      type: "negative",
      title: "Problem 01: Landfill Capacity Exhaustion",
      category: "standard",
      desc: "Petroleum-based plastics do not decompose, rapidly filling municipal disposal facilities decades ahead of schedule.",
      example: "Metropolitan landfills overflowing with billions of discarded food containers and disposable plastic bottles.",
      level: "Problem Core Feature",
      simpleTakeaway: "Non-biodegradable trash takes centuries to break down, filling up city dumps completely.",
      collocation: "landfill saturation"
    },
    {
      type: "negative",
      title: "Problem 02: Oceanic Microplastic Contamination",
      category: "standard",
      desc: "Discarded lightweight packaging migrates into oceans, poisoning marine species and bioaccumulating in human seafood.",
      example: "The Great Pacific Garbage Patch harboring millions of tons of single-use debris harming marine life.",
      level: "Problem Core Feature",
      simpleTakeaway: "Plastics in the ocean kill sea animals and break down into toxic particles eaten in seafood.",
      collocation: "marine ecosystem contamination"
    },
    {
      type: "negative",
      title: "Problem 03: Fossil Resource Depletion",
      category: "additional",
      desc: "Extracting petroleum to create packaging designed for minutes of utility squanders finite non-renewable reserves.",
      example: "Over 10% of global oil refining dedicated to short-lived plastic consumer packaging.",
      level: "Problem Strategic Feature",
      simpleTakeaway: "Using non-renewable oil to make products used for only five minutes wastes valuable natural resources.",
      collocation: "petrochemical depletion"
    },
    {
      type: "negative",
      title: "Problem 04: Urban Drainage Clogging",
      category: "additional",
      desc: "Littered plastic packaging chokes stormwater canals, turning routine rainstorms into destructive urban flood disasters.",
      example: "South Asian metropolises experiencing severe street flooding caused by blocked subterranean drains.",
      level: "Problem Strategic Feature",
      simpleTakeaway: "Discarded plastic packaging clogs city drains, causing severe street flooding during rains.",
      collocation: "drainage obstruction"
    }
  ],

  evaluationArguments: [
    {
      title: "Solution 01: Statutory Bans & Plastic Levies",
      category: "standard",
      reason:
        "Legal bans on non-essential disposables and fees on remaining items make single-use packaging economically unattractive.",
      development:
        "When disposable bags and cups carry notable point-of-sale costs, consumer behavior shifts instantly to durable reusables.",
      example:
        "Ireland's plastic bag tax slashing single-use consumption by 90% within months of implementation.",
      type: "argument",
      level: "Solution Core Policy",
      simpleTakeaway: "Banning non-essential plastics and taxing disposable items makes people switch to reusables.",
      collocation: "statutory ban"
    },
    {
      title: "Solution 02: State Subsidies for Biodegradable Materials",
      category: "standard",
      reason:
        "Government grants and tax exemptions accelerate the market adoption of plant-based compostable packaging.",
      development:
        "Packaging crafted from algae, cornstarch, or mushroom mycelium naturally degrades in soil without leaving toxic residues.",
      example:
        "European startups mass-producing compostable takeout food containers funded by green innovation grants.",
      type: "argument",
      level: "Solution Core Policy",
      simpleTakeaway: "Government subsidies help businesses make compostable packaging from plants and seaweed.",
      collocation: "biodegradable alternative"
    },
    {
      title: "Solution 03: Extended Producer Responsibility (EPR)",
      category: "standard",
      reason:
        "Holding manufacturing corporations legally responsible for post-consumer waste forces sustainable circular product design.",
      development:
        "When companies must finance packaging disposal, they redesign products to use minimal, easily recyclable materials.",
      example:
        "Germany's dual-system EPR laws obligating corporations to fund nationwide recycling, achieving 75%+ recovery.",
      type: "argument",
      level: "Solution Strategic Policy",
      simpleTakeaway: "Forcing corporations to pay for cleaning up their packaging motivates them to design recyclable products.",
      collocation: "extended producer responsibility"
    },
    {
      title: "Solution 04: Deposit-Return Schemes & Refill Kiosks",
      category: "additional",
      reason:
        "Refundable deposits on beverage containers turn waste into a valuable commodity, maximizing recovery rates.",
      development:
        "Reverse-vending machines reward consumers instantly for returning bottles and cans, achieving near 100% recycling.",
      example:
        "Scandinavian reverse-vending machines maintaining container collection and recycling rates above 95%.",
      type: "argument",
      level: "Solution Practical Measure",
      simpleTakeaway: "Deposit-return machines give people cash back for recycling bottles, keeping trash off the streets.",
      collocation: "deposit-return scheme"
    }
  ],

  facultyAngles: [
    {
      title: "Environmental Science & Marine Toxicology (Problems Perspective)",
      development:
        "Examines how non-biodegradable synthetic polymers persist for centuries in landfills, disrupt drainage networks, and fragment into carcinogenic microplastics that contaminate global aquatic trophic webs."
    },
    {
      title: "Public Policy & Circular Economics (Solutions Perspective)",
      development:
        "Analyzes the efficacy of market-based fiscal deterrents, statutory single-use bans, research subsidies for plant-based alternatives, and mandatory Extended Producer Responsibility frameworks in driving a circular economy."
    }
  ]
};
