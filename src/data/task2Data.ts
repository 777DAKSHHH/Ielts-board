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
   STUDENT IDEA BANK: ADVANTAGES OF SOLAR ENERGY (BODY PARA 1)
   ========================================================================== */
export const ADVANTAGES_IDEA_BANK: IdeaBankItem[] = [
  {
    id: "adv-1",
    badge: "Advantage 01 • Clean Renewable Electricity",
    title: "Zero greenhouse gas emissions and ecological decarbonisation",
    mainIdea:
      "Solar power harnesses inexhaustible sunlight to generate clean electricity, completely eliminating carbon dioxide emissions during domestic power production.",
    supportingReason:
      "Unlike coal-fired and natural gas power plants that drive global climate change and urban air pollution, residential photovoltaic systems produce zero toxic airborne emissions.",
    example:
      "A standard 5kW rooftop solar installation offsets approximately four to five tonnes of carbon emissions annually, equivalent to planting over one hundred trees.",
    collocations: [
      "zero greenhouse emissions",
      "inexhaustible solar radiation",
      "ecological decarbonisation",
      "carbon footprint reduction"
    ]
  },
  {
    id: "adv-2",
    badge: "Advantage 02 • Long-Term Utility Bill Savings",
    title: "Substantial reduction in monthly household electricity expenses",
    mainIdea:
      "Generating on-site solar power shields homeowners from volatile utility tariffs and drastically reduces monthly electrical utility bills.",
    supportingReason:
      "Once the initial setup is operational, the raw energy source (sunlight) is entirely free, allowing families to satisfy a majority of their daytime energy needs without purchasing grid electricity.",
    example:
      "Homeowners in sunny climatic zones routinely save between 60% and 80% on their annual municipal utility bills after adopting rooftop photovoltaic panels.",
    collocations: [
      "utility bill reduction",
      "volatile power tariffs",
      "on-site power generation",
      "long-term financial savings"
    ]
  },
  {
    id: "adv-3",
    badge: "Advantage 03 • Energy Independence & Resilience",
    title: "Grid autonomy and protection against catastrophic power blackouts",
    mainIdea:
      "Equipping residences with solar panels and domestic battery storage grants households independence from unreliable centralised power grids.",
    supportingReason:
      "In regions prone to severe storms, heatwaves, or infrastructure failures, self-reliant solar homes maintain continuous power for refrigeration, lighting, and medical devices.",
    example:
      "Suburban and rural communities in hurricane-prone coastal regions utilizing standalone solar battery reserves during prolonged municipal grid blackouts.",
    collocations: [
      "energy independence",
      "grid autonomy",
      "decentralised energy systems",
      "blackout resilience"
    ]
  },
  {
    id: "adv-4",
    badge: "Advantage 04 • Revenue via Net-Metering",
    title: "Earning grid credits and rebates by exporting surplus electricity",
    mainIdea:
      "Many modern utility frameworks enable domestic solar producers to sell surplus midday electricity back into the municipal grid.",
    supportingReason:
      "Through bidirectional smart meters, homeowners receive utility bill credits or direct feed-in payments, transforming rooftops from cost centers into modest revenue streams.",
    example:
      "Families generating surplus solar electricity during peak summer hours receiving substantial credits that offset winter heating bills.",
    collocations: [
      "net-metering schemes",
      "feed-in tariffs",
      "surplus electricity",
      "bidirectional smart meters"
    ]
  },
  {
    id: "adv-5",
    badge: "Advantage 05 • Minimal Maintenance & Longevity",
    title: "Extremely low operating costs and 25–30 year operational lifespans",
    mainIdea:
      "Photovoltaic panels contain no moving mechanical parts, resulting in negligible mechanical wear and remarkably low maintenance demands.",
    supportingReason:
      "Aside from occasional cleaning to remove dust or leaves, modern solar arrays function reliably for several decades, supported by manufacturer performance warranties.",
    example:
      "Leading solar panel manufacturers guaranteeing 80% power output efficiency after twenty-five years of continuous exposure to outdoor elements.",
    collocations: [
      "negligible mechanical wear",
      "minimal maintenance demands",
      "operational longevity",
      "performance warranties"
    ]
  }
];

/* ==========================================================================
   STUDENT IDEA BANK: DISADVANTAGES OF SOLAR ENERGY (BODY PARA 2)
   ========================================================================== */
export const DISADVANTAGES_IDEA_BANK: IdeaBankItem[] = [
  {
    id: "dis-1",
    badge: "Disadvantage 01 • High Upfront Capital Costs",
    title: "Prohibitive initial purchase and professional installation expenses",
    mainIdea:
      "The primary barrier to household solar adoption is the substantial capital expenditure required to purchase and install the complete photovoltaic system.",
    supportingReason:
      "Solar panels, high-grade inverters, electrical wiring, mounting brackets, and specialized installation labor create an upfront cost that is out of reach for many low- and middle-income families.",
    example:
      "A typical residential solar setup often costs between $12,000 and $22,000 before government incentives, taking 7 to 10 years to reach financial break-even.",
    collocations: [
      "high capital expenditure",
      "prohibitive upfront cost",
      "financial break-even period",
      "economic barrier"
    ]
  },
  {
    id: "dis-2",
    badge: "Disadvantage 02 • Weather Dependency & Intermittency",
    title: "Fluctuating generation and inability to produce power during darkness",
    mainIdea:
      "Solar energy is inherently intermittent, as electricity generation depends entirely on the availability and intensity of ambient sunlight.",
    supportingReason:
      "Power output plummets during heavily overcast days, rainy seasons, and winter months, and ceases entirely at night when household lighting and heating demands peak.",
    example:
      "Households in northern European climates experiencing severe drops in solar power production during long, gloomy winter weeks.",
    collocations: [
      "weather dependency",
      "intermittent generation",
      "seasonal fluctuations",
      "ambient sunlight intensity"
    ]
  },
  {
    id: "dis-3",
    badge: "Disadvantage 03 • Exorbitant Battery Storage Costs",
    title: "Expensive storage units with limited operational lifespans",
    mainIdea:
      "To ensure round-the-clock electricity without relying on the public grid, homes require costly battery storage banks that degrade over time.",
    supportingReason:
      "Modern lithium-ion batteries add thousands of dollars to the installation bill and generally need complete replacement every 10 to 12 years due to chemical wear.",
    example:
      "Adding a 10kWh domestic battery unit increasing overall installation expenditure by $7,000 to $10,000, significantly extending the system's payback period.",
    collocations: [
      "battery storage units",
      "chemical degradation",
      "prolonged payback period",
      "replacement expenditure"
    ]
  },
  {
    id: "dis-4",
    badge: "Disadvantage 04 • Roof Space & Structural Constraints",
    title: "Orientation, shading, and architectural limitations of dwellings",
    mainIdea:
      "Solar power generation is directly constrained by the available surface area, angle, and structural condition of a home's roof.",
    supportingReason:
      "Properties surrounded by tall trees, neighboring apartment complexes, or historic architecture with steep or shaded roofs cannot accommodate an efficient array.",
    example:
      "Urban apartment dwellers and tenants who do not own individual roof space are virtually excluded from adopting personal rooftop solar systems.",
    collocations: [
      "structural constraints",
      "roof space availability",
      "architectural limitations",
      "unfavorable roof orientation"
    ]
  },
  {
    id: "dis-5",
    badge: "Disadvantage 05 • Manufacturing & E-Waste Concerns",
    title: "Toxic chemical processing and future solar panel electronic waste",
    mainIdea:
      "While clean during operation, the manufacturing and disposal lifecycle of solar components carries significant ecological drawbacks.",
    supportingReason:
      "Fabricating silicon photovoltaic cells requires hazardous chemicals and energy-intensive processing, while decommissioned panels pose electronic waste hazards if not recycled.",
    example:
      "Millions of early-generation solar panels reaching the end of their operational lifecycle and threatening to overwhelm local electronic recycling centers.",
    collocations: [
      "hazardous chemical solvents",
      "electronic waste accumulation",
      "manufacturing lifecycle",
      "end-of-life recycling challenges"
    ]
  }
];

// Aliases for compatibility
export const OPINION_IDEA_BANK = ADVANTAGES_IDEA_BANK;
export const NON_OPINION_IDEA_BANK = DISADVANTAGES_IDEA_BANK;
export const CAUSES_IDEA_BANK = ADVANTAGES_IDEA_BANK;
export const SOLUTIONS_IDEA_BANK = DISADVANTAGES_IDEA_BANK;

/* ==========================================================================
   MASTER TASK 2 DATASET: HOUSEHOLD SOLAR ENERGY
   Advantages and Disadvantages Essay Architecture
   ========================================================================== */
export const TASK2_DATA: Task2Data = {
  id: "solar-energy-household-advantages-disadvantages",

  taskType: "Advantages and Disadvantages Essay",

  title: "IELTS Writing Task 2 — Household Solar Energy",

  questionText:
    "Solar energy is becoming more and more popular as a source of household energy in many countries around the world.\n\n• What are the advantages and disadvantages of solar energy?",

  audioUrl: "materials/Taxation_and_Public_Services_Briefing.m4a",

  timingSeconds: 180,

  recommendedPosition:
    "A balanced assessment establishing that while domestic solar power offers profound environmental sustainability and significant long-term reductions in electricity bills, these benefits must be weighed against high initial capital expenditure and vulnerability to weather intermittency.",

  strongestArgument:
    "Solar energy delivers inexhaustible, zero-emission green electricity and protects households from volatile utility tariffs, yet requires substantial upfront investment and depends heavily on sunny weather conditions.",

  // 1. Sample introduction planning points
  introPlanningPoints: [
    "Sentence 1 (Paraphrase): In recent times, an increasing number of households worldwide have embraced solar energy as a primary domestic power source.",
    "Sentence 2 (Outline Statement): While this shift offers substantial environmental sustainability and long-term utility bill savings, it is accompanied by distinct drawbacks, most notably high upfront installation costs and dependency on weather conditions."
  ],

  sampleIntro:
    "In recent times, an increasing number of households worldwide have embraced solar energy as a primary domestic power source. While this shift offers substantial environmental sustainability and long-term utility bill savings, it is accompanied by distinct drawbacks, most notably high upfront installation costs and dependency on weather conditions.",

  sampleConclusion:
    "In conclusion, household solar energy presents compelling advantages by delivering clean, renewable electricity and lowering long-term domestic power bills. However, these merits are counterbalanced by the heavy initial capital investment required and the system's inherent weather dependency, suggesting that government subsidies and advancements in battery storage will remain critical for widespread residential adoption.",

  // 2. Five-minute planning map
  fiveMinutePlanningMap: {
    causes: [
      {
        id: "adv1",
        label: "Zero greenhouse gas emissions & decarbonisation",
        note: "Harnesses inexhaustible sunlight without producing toxic air pollution or carbon emissions."
      },
      {
        id: "adv2",
        label: "Drastic long-term reduction in household electricity bills",
        note: "Once installed, sunlight is free; families save 60–80% and are protected against utility tariff inflation."
      },
      {
        id: "adv3",
        label: "Grid independence & resilience against blackouts",
        note: "Decentralized power paired with battery reserves ensures essential power during grid failures."
      },
      {
        id: "adv4",
        label: "Revenue generation through net-metering schemes",
        note: "Surplus electricity generated at midday can be exported back to the grid for monetary credits."
      },
      {
        id: "adv5",
        label: "Low operating maintenance & 25–30 year panel lifespan",
        note: "No moving parts; reliable performance guaranteed for decades with minimal servicing."
      }
    ],
    solutions: [
      {
        id: "dis1",
        label: "Prohibitive upfront capital expenditure & installation fees",
        note: "Panels, inverters, and professional labor cost $12,000–$22,000, creating a high barrier for low-income homes."
      },
      {
        id: "dis2",
        label: "Weather dependency & seasonal intermittency",
        note: "Power output drops sharply during overcast or winter days, and ceases completely during night hours."
      },
      {
        id: "dis3",
        label: "Exorbitant cost & finite lifespan of battery storage",
        note: "Lithium-ion storage adds thousands to costs and requires replacement every 10–12 years."
      },
      {
        id: "dis4",
        label: "Roof space, shading & structural constraints",
        note: "Homes with shaded, small, or weak roofs, plus apartment dwellers, cannot install effective arrays."
      },
      {
        id: "dis5",
        label: "Manufacturing chemical hazards & e-waste disposal",
        note: "Silicon processing involves toxic chemicals; decommissioned panels pose recycling challenges."
      }
    ]
  },

  causesIdeaBank: ADVANTAGES_IDEA_BANK,
  solutionsIdeaBank: DISADVANTAGES_IDEA_BANK,

  // 3. Body paragraphs matching the MANDATORY 4-PARAGRAPH BALANCED ARCHITECTURE:
  // Body 1: Advantages (Clean Renewable Power & Utility Bill Reduction)
  // Body 2: Disadvantages (High Initial Outlay & Weather Intermittency)
  bodyParagraphs: [
    {
      paraNumber: 1,
      side: "advantages",
      title: "Body Para 1: Primary Advantages — Clean Power & Bill Reduction",
      theme: "Environmental Sustainability & Long-Term Economic Savings",
      mainReason:
        "The primary advantage of domestic solar energy is its remarkable ecological sustainability and ability to deliver substantial long-term electricity bill savings.",
      supportingReasons:
        "Unlike fossil fuel generation, photovoltaic cells produce zero greenhouse gas emissions. Furthermore, on-site solar generation insulates families from escalating commercial utility tariffs and enables surplus energy sales via net-metering.",
      example:
        "Rooftop solar installations routinely reducing household carbon emissions by four tonnes annually while cutting family electricity expenses by up to seventy percent.",
      band9Snippet:
        "“On the one hand, the primary advantage of domestic solar power is its exceptional environmental sustainability, paired with substantial financial savings over time.”",
      alternativeReasons: [
        {
          id: "adv-model-1",
          badge: "Advantage Analysis • Band 9",
          title: "Renewable Decarbonisation & Utility Autonomy",
          category: "standard",
          mainReason:
            "Harnessing inexhaustible sunlight cuts household emissions and delivers long-term financial relief from escalating energy tariffs.",
          supportingReasons:
            "Photovoltaic panels generate clean electricity with no toxic emissions; moreover, net-metering schemes allow homeowners to sell surplus electricity back to utility suppliers.",
          example:
            "Homeowners in sunny climatic regions cutting monthly utility expenses by 60% to 80% while shielding themselves from grid rate hikes.",
          band9Snippet:
            "“On the one hand, domestic solar systems drastically diminish household carbon footprints while sheltering families from volatile energy tariffs.”",
          modelParagraph:
            "On the one hand, the primary advantage of domestic solar power is its exceptional environmental sustainability. Unlike conventional electricity generated from fossil fuels, photovoltaic systems harness inexhaustible solar radiation without discharging greenhouse gases or airborne pollutants. Consequently, widespread household adoption drastically curtails domestic carbon footprints and contributes directly to mitigating global climate change. Furthermore, residential solar panels yield profound economic savings over time. Once the system is installed, families generate their own electricity, shielding themselves from escalating commercial utility tariffs and saving up to seventy percent on monthly power bills. Additionally, in jurisdictions with net-metering schemes, households can even sell surplus power back to the regional grid, turning their roofs into modest revenue streams.",
          examinerNotes:
            "Clear topic sentence, cohesive progression from environmental benefits to domestic financial savings, and concrete real-world development with net-metering illustration."
        }
      ]
    },
    {
      paraNumber: 2,
      side: "disadvantages",
      title: "Body Para 2: Primary Disadvantages — Upfront Costs & Intermittency",
      theme: "Steep Initial Capital Expenditure & Weather Dependency",
      mainReason:
        "On the other hand, the principal drawbacks of solar energy are the prohibitive upfront capital investment and the system's inherent weather dependency.",
      supportingReasons:
        "Purchasing panels, inverters, and battery storage units demands heavy upfront capital. Moreover, energy output plummets during cloudy days and ceases entirely at night, requiring backup power.",
      example:
        "Residential installations often requiring $15,000 to $20,000 in upfront capital, while northern European homes experience sharp drops in generation during winter months.",
      band9Snippet:
        "“On the other hand, the principal drawback of solar energy is the steep initial capital expenditure required for installation, coupled with its inherent weather dependency.”",
      alternativeReasons: [
        {
          id: "dis-model-1",
          badge: "Disadvantage Analysis • Band 9",
          title: "Capital Prohibitive Barrier & Intermittent Generation",
          category: "standard",
          mainReason:
            "High upfront hardware and battery expenses prevent widespread adoption, while solar intermittency poses energy reliability challenges.",
          supportingReasons:
            "Solar arrays require significant upfront capital that is out of reach for lower-income families; additionally, winter and nighttime hours necessitate costly battery storage or continued grid reliance.",
          example:
            "Adding a domestic lithium-ion battery bank adding $8,000 to total setup costs, considerably lengthening the system's financial payback period.",
          band9Snippet:
            "“Nevertheless, high initial installation costs and fluctuating generation during overcast weather represent formidable obstacles for many families.”",
          modelParagraph:
            "On the other hand, the principal drawback of solar energy is the steep initial capital expenditure required for purchase and installation. High-efficiency solar panels, power inverters, mounting hardware, and professional labor demand an upfront investment often ranging between ten and twenty thousand dollars, making adoption prohibitive for lower-income households. Moreover, solar generation suffers from inherent weather dependency and seasonal intermittency. Solar panels produce minimal electricity during overcast days, heavy rainfall, or harsh winter seasons, and cannot generate power during night hours. To maintain continuous electricity supply, homeowners must either remain connected to the conventional grid or invest in expensive lithium-ion battery banks, which have limited lifespans and add substantial additional costs to the household budget.",
          examinerNotes:
            "Exemplary paragraph coherence: transitions seamlessly from initial financial costs to technical intermittency and battery storage constraints."
        }
      ]
    }
  ],

  // 4. Academic Vocabulary List (12 Genuine Band 8.5/9 Clean Tech & Environmental Items)
  vocabList: [
    {
      word: "Photovoltaic",
      definition: "Relating to the production of electric current at the junction of two substances exposed to light.",
      phonetic: "/ˌfəʊ.təʊ.vɒlˈteɪ.ɪk/",
      term: "Photovoltaic",
      meaning: "Relating to the direct conversion of light into electricity using semiconductor devices.",
      example: "Rooftop photovoltaic panels convert ambient sunlight directly into household electricity.",
      sampleSentence: "Rooftop photovoltaic panels convert ambient sunlight directly into household electricity.",
      collocations: ["photovoltaic cells", "photovoltaic panels", "photovoltaic technology"]
    },
    {
      word: "Intermittency",
      definition: "The quality of occurring at non-continuous intervals, stopping and starting irregularly.",
      phonetic: "/ˌɪn.təˈmɪt.ən.si/",
      term: "Intermittency",
      meaning: "The unpredictable variation in power generation due to fluctuating sunlight or weather conditions.",
      example: "The intermittency of solar radiation necessitates backup power systems or battery banks.",
      sampleSentence: "The intermittency of solar radiation necessitates backup power systems or battery banks.",
      collocations: ["power intermittency", "generation intermittency", "inherent intermittency"]
    },
    {
      word: "Decarbonisation",
      definition: "The reduction or complete elimination of carbon dioxide emissions from an energy system.",
      phonetic: "/diːˌkɑː.bən.aɪˈzeɪ.ʃən/",
      term: "Decarbonisation",
      meaning: "The transition towards energy sources that do not discharge greenhouse gas emissions.",
      example: "Household solar adoption plays a pivotal role in national decarbonisation strategies.",
      sampleSentence: "Household solar adoption plays a pivotal role in national decarbonisation strategies.",
      collocations: ["rapid decarbonisation", "decarbonisation strategy", "economic decarbonisation"]
    },
    {
      word: "Autonomy",
      definition: "The state of being independent, self-governing, and self-sufficient.",
      phonetic: "/ɔːˈtɒn.ə.mi/",
      term: "Autonomy",
      meaning: "Energy independence from commercial power suppliers and centralised municipal grids.",
      example: "Combining solar panels with home storage batteries provides complete energy autonomy.",
      sampleSentence: "Combining solar panels with home storage batteries provides complete energy autonomy.",
      collocations: ["energy autonomy", "household autonomy", "operational autonomy"]
    },
    {
      word: "Capital Expenditure",
      definition: "Funds used by a household or company to acquire, upgrade, and maintain physical assets.",
      phonetic: "/ˈkæp.ɪ.təl ɪkˈspen.dɪ.tʃər/",
      term: "Capital Expenditure",
      meaning: "The substantial initial financial outlay required to purchase and install equipment.",
      example: "High initial capital expenditure remains the chief impediment for prospective solar adopters.",
      sampleSentence: "High initial capital expenditure remains the chief impediment for prospective solar adopters.",
      collocations: ["initial capital expenditure", "heavy capital expenditure", "upfront expenditure"]
    },
    {
      word: "Inexhaustible",
      definition: "Existing in unlimited quantities so that cannot be used up or exhausted.",
      phonetic: "/ˌɪn.ɪɡˈzɔː.stə.bəl/",
      term: "Inexhaustible",
      meaning: "A natural energy source that will never deplete or run out over human timescales.",
      example: "Solar radiation is an inexhaustible resource unlike finite petroleum and coal reserves.",
      sampleSentence: "Solar radiation is an inexhaustible resource unlike finite petroleum and coal reserves.",
      collocations: ["inexhaustible resource", "inexhaustible energy", "virtually inexhaustible"]
    },
    {
      word: "Net Metering",
      definition: "A billing mechanism that credits solar energy system owners for the electricity they export to the grid.",
      phonetic: "/ˌnet ˈmiː.tər.ɪŋ/",
      term: "Net Metering",
      meaning: "A utility system allowing households to sell surplus daytime electricity back to the supplier.",
      example: "Net metering policies incentivize homeowners by turning excess solar electricity into monetary credits.",
      sampleSentence: "Net metering policies incentivize homeowners by turning excess solar electricity into monetary credits.",
      collocations: ["net metering scheme", "net metering credits", "net metering framework"]
    },
    {
      word: "Amortisation",
      definition: "The gradual reduction or recovery of the initial cost of an asset over its operational lifetime.",
      phonetic: "/əˌmɔː.taɪˈzeɪ.ʃən/",
      term: "Amortisation",
      meaning: "The financial process of recovering upfront installation expenses through subsequent utility bill savings.",
      example: "Through monthly bill reductions, the amortisation period for solar panels is typically eight years.",
      sampleSentence: "Through monthly bill reductions, the amortisation period for solar panels is typically eight years.",
      collocations: ["amortisation period", "cost amortisation", "rapid amortisation"]
    },
    {
      word: "Subsidise",
      definition: "To support financially, often through government grants, tax credits, or rebates.",
      phonetic: "/ˈsʌb.sɪ.daɪz/",
      term: "Subsidise",
      meaning: "To provide state financial assistance to reduce the cost of clean technology for citizens.",
      example: "Many governments subsidise solar installations to accelerate the transition away from fossil fuels.",
      sampleSentence: "Many governments subsidise solar installations to accelerate the transition away from fossil fuels.",
      collocations: ["heavily subsidise", "government subsidized", "subsidise installations"]
    },
    {
      word: "Ecological Footprint",
      definition: "The environmental impact of human activities measured in terms of resource consumption and waste.",
      phonetic: "/ˌiː.kəˈlɒdʒ.ɪ.kəl ˈfʊt.prɪnt/",
      term: "Ecological Footprint",
      meaning: "The total measure of greenhouse emissions and environmental degradation caused by household living.",
      example: "Switching from coal-derived power to solar energy significantly shrinks a family's ecological footprint.",
      sampleSentence: "Switching from coal-derived power to solar energy significantly shrinks a family's ecological footprint.",
      collocations: ["ecological footprint", "shrink ecological footprint", "household footprint"]
    },
    {
      word: "Surplus",
      definition: "An amount of something left over when requirements have been satisfied; excess.",
      phonetic: "/ˈsɜː.pləs/",
      term: "Surplus",
      meaning: "Extra electrical power produced by solar panels beyond immediate household consumption needs.",
      example: "During sunny summer afternoons, household panels frequently generate a surplus of electricity.",
      sampleSentence: "During sunny summer afternoons, household panels frequently generate a surplus of electricity.",
      collocations: ["surplus electricity", "surplus energy", "generate a surplus"]
    },
    {
      word: "Depletion",
      definition: "Reduction in the number, quantity, or volume of a finite resource.",
      phonetic: "/dɪˈpliː.ʃən/",
      term: "Depletion",
      meaning: "The progressive exhaustion of non-renewable fossil fuel reserves.",
      example: "Transitioning to solar power helps counteract the progressive depletion of natural gas reserves.",
      sampleSentence: "Transitioning to solar power helps counteract the progressive depletion of natural gas reserves.",
      collocations: ["resource depletion", "fossil fuel depletion", "prevent depletion"]
    }
  ],

  vocabHunt: [
    "Photovoltaic",
    "Intermittency",
    "Decarbonisation",
    "Autonomy",
    "Expenditure",
    "Inexhaustible",
    "Net Metering",
    "Amortisation",
    "Subsidise",
    "Ecological Footprint",
    "Surplus",
    "Depletion"
  ],

  powerExpressions: [
    {
      expression: "harness inexhaustible solar radiation",
      meaning: "To capture unlimited energy emitted by the sun for electrical power generation.",
      example: "Rooftop photovoltaic arrays harness inexhaustible solar radiation with zero greenhouse emissions."
    },
    {
      expression: "curtail household carbon footprints",
      meaning: "To significantly diminish the volume of greenhouse gases produced by domestic living.",
      example: "Widespread residential solar adoption drastically curtails household carbon footprints."
    },
    {
      expression: "insulate against volatile energy tariffs",
      meaning: "To protect family finances from unpredictable and escalating utility prices.",
      example: "Generating electricity on-site insulates homeowners against volatile utility tariffs."
    },
    {
      expression: "prohibitive initial capital expenditure",
      meaning: "An extremely high upfront financial cost that prevents adoption by ordinary families.",
      example: "The prohibitive initial capital expenditure remains a formidable barrier for lower-income households."
    },
    {
      expression: "inherent weather dependency and intermittency",
      meaning: "The unavoidable operational limitation of stopping or reducing generation during dark or cloudy conditions.",
      example: "The inherent weather dependency and intermittency of solar cells requires expensive battery backups."
    }
  ],

  // 7. Brainstorm Cards (EXACTLY 4 CARDS: 2 Advantages & 2 Disadvantages)
  brainstormCards: [
    {
      id: "card-1",
      stepNum: 1,
      badge: "Advantage 01 • Ecological Sustainability",
      title: "Clean Renewable Electricity",
      question: "How does domestic solar energy contribute to combating environmental degradation?",
      thinkingLens: "Think about fossil fuel power stations, greenhouse gas emissions, and urban air quality.",
      selfCheck: "Did you explain that photovoltaic cells harness inexhaustible sunlight with zero emissions?",
      idea: "Photovoltaic systems convert infinite solar radiation into clean electricity without releasing greenhouse gases, dramatically curtailing domestic carbon footprints.",
      promptInsight: "Solar energy is completely renewable and emission-free during operation, eliminating reliance on polluting coal and gas power plants.",
      collocations: ["zero emissions", "inexhaustible solar radiation", "carbon footprint reduction"],
      example: "A typical 5kW rooftop array preventing four to five tonnes of carbon dioxide from entering the atmosphere each year."
    },
    {
      id: "card-2",
      stepNum: 2,
      badge: "Advantage 02 • Household Economic Relief",
      title: "Utility Bill Savings & Net Metering",
      question: "What financial benefits do homeowners experience after adopting solar energy?",
      thinkingLens: "Consider monthly power bills, inflation of utility tariffs, and selling excess electricity.",
      selfCheck: "Did you highlight ongoing monthly bill reductions and the potential to earn credits via net metering?",
      idea: "On-site power generation shields families from escalating commercial electricity prices, reducing utility bills by up to 80% and allowing surplus power sales.",
      promptInsight: "Once installed, sunlight is free, saving families substantial money over 25–30 years and providing revenue through feed-in tariffs.",
      collocations: ["utility bill reduction", "net metering credits", "volatile electricity tariffs"],
      example: "Families in sunny regions receiving monthly utility credits by feeding surplus daytime electricity back into the grid."
    },
    {
      id: "card-3",
      stepNum: 3,
      badge: "Disadvantage 01 • Financial Barriers",
      title: "High Upfront Capital Investment",
      question: "Why is the initial cost of solar energy a major obstacle for ordinary families?",
      thinkingLens: "Consider purchasing panels, inverters, battery storage units, and professional installation labor.",
      selfCheck: "Did you explain that the high initial outlay makes solar energy unaffordable for lower-income households?",
      idea: "Purchasing high-efficiency photovoltaic panels and inverters demands a substantial upfront capital expenditure ($12,000–$20,000) with a multi-year payback period.",
      promptInsight: "The heavy initial equipment and installation cost creates a steep financial barrier, making solar inaccessible without subsidies or loans.",
      collocations: ["high capital expenditure", "upfront installation costs", "financial payback period"],
      example: "Low- and middle-income families unable to afford the initial $15,000 hardware investment despite long-term savings."
    },
    {
      id: "card-4",
      stepNum: 4,
      badge: "Disadvantage 02 • Intermittency & Storage",
      title: "Weather Dependency & Nighttime Limitations",
      question: "What technical challenges arise from the intermittent nature of solar radiation?",
      thinkingLens: "Think about nighttime hours, overcast skies, winter seasons, and battery degradation.",
      selfCheck: "Did you mention that solar cannot generate power at night or during heavy cloud cover without expensive batteries?",
      idea: "Solar power is strictly weather-dependent; output drops drastically during overcast winter periods and ceases at night, requiring backup grid power or costly batteries.",
      promptInsight: "Because generation varies with weather and stops at night, homes must invest in expensive battery storage or remain tethered to the traditional grid.",
      collocations: ["weather dependency", "power intermittency", "battery storage expenditure"],
      example: "Homes in cloudy northern climates experiencing 70% drops in electricity output during winter months."
    }
  ],

  connectorsTier: {
    sTier: [
      "On the one hand, a primary advantage of",
      "On the other hand, the principal drawback of",
      "Inherent weather dependency and intermittency",
      "Substantial initial capital expenditure"
    ],
    aTier: [
      "Furthermore",
      "Consequently",
      "Nevertheless",
      "A prime illustration is"
    ],
    bTier: [
      "Additionally",
      "In contrast",
      "In conclusion",
      "Therefore"
    ]
  },

  fluidVocab: [
    {
      word: "Photovoltaic",
      pos: "adjective",
      meaning: "Relating to the direct conversion of light into electricity using semiconducting materials.",
      naturalCollocation: "residential photovoltaic installations",
      organicExample: "The rapid adoption of residential photovoltaic systems has transformed suburban rooftops into micro-generators.",
      mechanicalPitfall: "Avoid overusing 'solar stuff'; photovoltaic is the precise academic and technological term.",
      examinerInsight: "Demonstrates technical and scientific precision rewarded in Band 9 Lexical Resource."
    },
    {
      word: "Intermittency",
      pos: "noun",
      meaning: "The irregular or fluctuating nature of power generation dependent on ambient weather conditions.",
      naturalCollocation: "power generation intermittency",
      organicExample: "Addressing the intermittency of solar energy requires significant investment in domestic battery storage.",
      mechanicalPitfall: "Do not say 'the stopping and starting of sun'; intermittency captures this phenomenon accurately.",
      examinerInsight: "Precise energy economics vocabulary signaling advanced band mastery."
    },
    {
      word: "Decarbonisation",
      pos: "noun",
      meaning: "The systemic process of reducing and eliminating carbon emissions from domestic and industrial activities.",
      naturalCollocation: "accelerating residential decarbonisation",
      organicExample: "Decentralised household solar power accelerates national decarbonisation goals by replacing coal-fired power.",
      mechanicalPitfall: "Avoid 'stopping bad gas'; decarbonisation encapsulates policy and environmental strategy.",
      examinerInsight: "Key environmental policy term highly respected by Cambridge examiners."
    },
    {
      word: "Autonomy",
      pos: "noun",
      meaning: "Self-reliance and independence from centralised external utility grids.",
      naturalCollocation: "greater household energy autonomy",
      organicExample: "Combining solar panels with smart storage batteries affords homeowners complete energy autonomy.",
      mechanicalPitfall: "Avoid simplistic 'living alone without electric companies'; autonomy conveys self-sufficiency.",
      examinerInsight: "Sophisticated formal vocabulary applicable to macroeconomic and technological contexts."
    },
    {
      word: "Expenditure",
      pos: "noun",
      meaning: "The spending of substantial financial funds on capital assets or infrastructure.",
      naturalCollocation: "substantial upfront capital expenditure",
      organicExample: "The heavy capital expenditure required for solar installation deters many working-class families.",
      mechanicalPitfall: "Do not overuse 'cost' or 'spending money'; capital expenditure reflects long-term asset acquisition.",
      examinerInsight: "Formal financial and economic diction expected in top-tier essays."
    },
    {
      word: "Inexhaustible",
      pos: "adjective",
      meaning: "Incapable of being depleted or used up, existing in unlimited quantities.",
      naturalCollocation: "virtually inexhaustible solar radiation",
      organicExample: "Solar energy represents an inexhaustible resource that will outlast finite fossil fuel reserves.",
      mechanicalPitfall: "Avoid 'sun that never dies'; inexhaustible is the standard academic adjective.",
      examinerInsight: "Elevated stylistic descriptor contrasting renewable resources with finite hydrocarbons."
    }
  ],

  consequences: [
    {
      type: "positive",
      title: "Advantage 01: Zero-Emission Electricity",
      category: "standard",
      desc: "Harnessing ambient sunlight releases zero greenhouse gases or airborne pollutants during operation.",
      example: "Rooftop solar systems preventing 4–5 tonnes of carbon emissions per household every year.",
      level: "Core Advantage",
      simpleTakeaway: "Solar power produces clean, green electricity without polluting the atmosphere.",
      collocation: "zero greenhouse emissions"
    },
    {
      type: "positive",
      title: "Advantage 02: Long-Term Bill Reduction",
      category: "standard",
      desc: "Generating power on-site eliminates expensive monthly utility bills and cushions families against tariff inflation.",
      example: "Households in sunny regions slashing their annual electricity bills by 60% to 80%.",
      level: "Core Advantage",
      simpleTakeaway: "Once installed, sunlight is free, saving families substantial money on electricity.",
      collocation: "long-term utility bill savings"
    },
    {
      type: "positive",
      title: "Advantage 03: Energy Independence & Resilience",
      category: "standard",
      desc: "Decentralized home power protects residents from municipal grid blackouts caused by severe weather or overloads.",
      example: "Rural communities sustaining essential refrigeration and lighting during storm-induced grid outages.",
      level: "Core Advantage",
      simpleTakeaway: "Homes with solar and batteries maintain power even when the main grid fails.",
      collocation: "energy autonomy and resilience"
    },
    {
      type: "positive",
      title: "Advantage 04: Net-Metering Financial Credits",
      category: "additional",
      desc: "Homeowners can export excess midday electricity back into the public grid in exchange for utility credits or rebates.",
      example: "Domestic solar owners receiving credit statements from utility companies for surplus exported power.",
      level: "Strategic Advantage",
      simpleTakeaway: "Extra electricity produced during the day can be sold back to the power company.",
      collocation: "net-metering feed-in credits"
    }
  ],

  evaluationArguments: [
    {
      title: "Disadvantage 01: High Upfront Installation Costs",
      category: "standard",
      reason:
        "Purchasing high-efficiency solar panels, power inverters, and hiring licensed electrical technicians demands large upfront capital.",
      development:
        "The initial outlay often ranges from $12,000 to $22,000, creating an insurmountable barrier for low- and middle-income families.",
      example:
        "Working families unable to finance the upfront equipment cost despite potential long-term savings.",
      type: "counterpoint",
      level: "Core Disadvantage",
      simpleTakeaway: "Solar panels are very expensive to buy and install initially.",
      collocation: "high upfront capital expenditure"
    },
    {
      title: "Disadvantage 02: Weather Intermittency & Night Limitations",
      category: "standard",
      reason:
        "Solar generation depends completely on the intensity of ambient sunlight, producing zero electricity during nighttime hours.",
      development:
        "Overcast days, persistent cloud cover, and short winter days cause electricity generation to plummet dramatically.",
      example:
        "Northern European homes producing 70% less solar electricity during cloudy winter months.",
      type: "counterpoint",
      level: "Core Disadvantage",
      simpleTakeaway: "Panels do not generate electricity at night and produce much less on cloudy or winter days.",
      collocation: "weather dependency and intermittency"
    },
    {
      title: "Disadvantage 03: Expensive Battery Storage Replacement",
      category: "standard",
      reason:
        "To achieve 24/7 reliability, homes must purchase lithium-ion battery banks, which are costly and degrade after 10–12 years.",
      development:
        "Adding battery storage adds $7,000 to $10,000 to the total bill, significantly lengthening the financial payback period.",
      example:
        "Homeowners facing expensive replacement costs when battery storage units lose chemical efficiency after a decade.",
      type: "counterpoint",
      level: "Core Disadvantage",
      simpleTakeaway: "Batteries to store daytime power are expensive and must be replaced every decade.",
      collocation: "battery storage expenditure"
    },
    {
      title: "Disadvantage 04: Roof Space & Architectural Constraints",
      category: "additional",
      reason:
        "Solar generation requires ample unshaded roof space with optimal geographical orientation toward the sun.",
      development:
        "Properties with small, shaded, or fragile roofs—as well as high-density apartments—cannot accommodate functional solar arrays.",
      example:
        "Apartment dwellers and tenants without private roof access being unable to adopt solar energy.",
      type: "counterpoint",
      level: "Structural Constraint",
      simpleTakeaway: "Many homes do not have large or sunny enough roofs to install panels.",
      collocation: "roof space and shading constraints"
    }
  ],

  facultyAngles: [
    {
      title: "Environmental Science & Renewable Engineering (Advantages)",
      development:
        "Analyzes zero-emission power generation, lifecycle decarbonisation, infinite solar radiation, and reduced dependence on polluting fossil fuel power grids."
    },
    {
      title: "Energy Economics & Infrastructure Realities (Disadvantages)",
      development:
        "Examines high initial capital expenditure, payback periods, solar intermittency, battery chemical storage limitations, and architectural roof constraints."
    }
  ]
};
