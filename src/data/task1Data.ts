import type { Task1Data, VocabItem } from "../types";
export type { Task1Data, VocabItem };

export const TASK1_DATA: Task1Data = {
  id: "food-chain-energy-pyramid-task1",
  taskType: "Natural Process & Ecological Flow Diagram (Energy Pyramid)",
  title: "Trophic Levels and Energy Flow in a Food Chain",
  questionText:
    "The diagram below shows the stages in the food production chain of the United States.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
  imageFileName: "food-chain-energy-pyramid.png",
  audioUrl: "materials/food-chain-energy-pyramid-briefing.m4a",
  audioClueText:
    "Today's visual task presents an ecological energy pyramid detailing the flow of energy and biomass across successive trophic levels in a food chain. At the foundation of the ecosystem, primary producers absorb light energy, generating twenty thousand kilocalories per square meter per year. As energy ascends through the biological hierarchy, from primary consumers like insects and mice, to secondary consumers such as birds and frogs, to tertiary snake predators, and finally reaching apex quaternary raptors, the stored biomass drops by an exact factor of ten at each consecutive stage, leaving a mere two kilocalories at the summit. Concurrently, metabolic heat is dissipated into the environment at every single tier, while organic waste and dead matter from all levels of the pyramid are channeled into decomposers, which also release metabolic heat into the atmosphere.",
  timingSeconds: 180,
  sampleIntro:
    "The diagram illustrates the stages and energy flows across five distinct trophic levels in an ecological food chain, alongside the continuous dissipation of metabolic heat and the funneling of waste and dead matter to decomposers.",
  sampleOverview:
    "Overall, energy enters the system as light energy and transfers upward from primary producers to quaternary consumers, diminishing tenfold at each successive tier. Concurrently, metabolic heat is dissipated into the atmosphere at every level, while biological waste and dead matter from across the pyramid are channeled into decomposers, which also release heat.",

  diagramData: {
    trophicTiers: [
      {
        id: "tier-1-producers",
        tierNumber: 1,
        name: "Primary Producers",
        badge: "Trophic Base (100% Energy)",
        category: "producers",
        energyKcal: "20,000 kcal/m²/yr",
        energyPercentOfBase: "100%",
        organisms: "Grass, trees, shrubs, and terrestrial vegetation",
        heatLoss: "Metabolic and cellular respiration heat",
        wasteToDecomposers: "Channels decaying plant tissue into decomposers (green arrow)",
        description:
          "Photosynthetic plants capturing incoming light energy and serving as the foundational energy source for the entire ecosystem.",
        band9Phrase:
          "“At the base of the trophic hierarchy, primary producers capture solar light energy to generate an initial 20,000 kcal/m²/yr of biomass.”"
      },
      {
        id: "tier-2-primary-consumers",
        tierNumber: 2,
        name: "Primary Consumers",
        badge: "Herbivores & Insects (10%)",
        category: "primary_consumers",
        energyKcal: "2,000 kcal/m²/yr",
        energyPercentOfBase: "10%",
        organisms: "Rodents/mice, grasshoppers, butterflies, moths, caterpillars, and ants",
        heatLoss: "Locomotive and body heat loss",
        wasteToDecomposers: "Excretory waste and dead tissue channeled to decomposers (cyan arrow)",
        description:
          "Herbivores and small rodents feeding directly on primary vegetation, retaining exactly 10% of the foundational biomass energy.",
        band9Phrase:
          "“Primary consumers, comprising herbivorous insects and small rodents, incorporate this energy but store only 2,000 kcal/m²/yr as biomass.”"
      },
      {
        id: "tier-3-secondary-consumers",
        tierNumber: 3,
        name: "Secondary Consumers",
        badge: "Carnivores / Insectivores (1%)",
        category: "secondary_consumers",
        energyKcal: "200 kcal/m²/yr",
        energyPercentOfBase: "1%",
        organisms: "Insectivorous birds, frogs/toads, and small mammals (moles/rats)",
        heatLoss: "Respiratory thermal heat loss",
        wasteToDecomposers: "Organic waste and decaying matter channeled to decomposers (yellow arrow)",
        description:
          "Carnivorous and insectivorous animals feeding on primary consumers, registering another tenfold diminution in available biomass.",
        band9Phrase:
          "“Secondary consumers—including frogs, birds, and small mammals—store 200 kcal/m²/yr, representing another tenfold diminution.”"
      },
      {
        id: "tier-4-tertiary-consumers",
        tierNumber: 4,
        name: "Tertiary Consumers",
        badge: "Secondary Predators (0.1%)",
        category: "tertiary_consumers",
        energyKcal: "20 kcal/m²/yr",
        energyPercentOfBase: "0.1%",
        organisms: "Predatory reptiles (snakes)",
        heatLoss: "Radiant metabolic heat loss",
        wasteToDecomposers: "Waste and carcasses channeled to decomposers",
        description:
          "Mid-level predatory carnivores preying on secondary consumers with a biomass yield of 20 kcal/m²/yr.",
        band9Phrase:
          "“Tertiary consumers, represented by snakes, retain a mere 20 kcal/m²/yr of biomass energy.”"
      },
      {
        id: "tier-5-quaternary-consumers",
        tierNumber: 5,
        name: "Quaternary Consumers",
        badge: "Apex Raptors (0.01%)",
        category: "quaternary_consumers",
        energyKcal: "2 kcal/m²/yr",
        energyPercentOfBase: "0.01%",
        organisms: "Apex birds of prey (eagles / raptors)",
        heatLoss: "Flight exertion and body heat dissipation",
        wasteToDecomposers: "Organic remains channeled to decomposers upon death (pink arrow)",
        description:
          "Apex predators residing at the pyramid pinnacle, retaining just 1/10,000th of the initial base energy.",
        band9Phrase:
          "“At the pinnacle of the pyramid, quaternary apex predators such as eagles retain just 2 kcal/m²/yr—one ten-thousandth of the initial base energy.”"
      }
    ],

    decomposerCycle: {
      title: "Decomposers & Waste Processing",
      inputs: [
        "Waste and dead tissue from quaternary apex raptors (pink arrow)",
        "Dead matter from secondary consumers (yellow arrow)",
        "Excretory waste from primary consumers (cyan arrow)",
        "Decaying plant matter from primary producers (green arrow)"
      ],
      outputs: [
        "Metabolic heat released into the atmosphere"
      ],
      role: "Biological decomposition of organic waste from all pyramid tiers",
      description:
        "Decomposers (bacteria and fungi) receive organic waste and dead matter from every trophic level—from foundational plants up to apex predators—and subsequently release metabolic heat.",
      band9Phrase:
        "“Biological waste and deceased matter from all tiers of the pyramid converge on decomposers, which in turn dissipate heat into the atmosphere.”"
    },

    energyLossSummary: {
      retentionRate: "10% per trophic tier (Lindeman's 10% Ecological Law)",
      lossRate: "90% dissipated as metabolic heat and unassimilated waste",
      baseEnergy: "20,000 kcal/m²/yr (Primary Producers)",
      apexEnergy: "2 kcal/m²/yr (Quaternary Apex Consumers)",
      lossMultiplier: "10,000-fold overall energy reduction (99.99% net dissipation)"
    }
  },

  vocabList: [
    {
      word: "trophic levels",
      meaning: "The hierarchical feeding positions occupied by organisms in a food web or energy pyramid.",
      example:
        "Energy diminishes significantly as it ascends across consecutive trophic levels in the food chain."
    },
    {
      word: "biomass energy transfer",
      meaning: "The conversion and passage of organic chemical energy from one biological tier to the next.",
      example:
        "The diagram illustrates the efficiency of biomass energy transfer between primary producers and herbivores."
    },
    {
      word: "tenfold reduction",
      meaning: "A dramatic decrease by a factor of ten (90% loss, leaving 10% retained) at each successive tier.",
      example:
        "Each stage in the ecological pyramid exhibits an exact tenfold reduction in stored kilocalories."
    },
    {
      word: "primary producers",
      meaning: "Autotrophic vegetation that synthesises organic compounds from solar radiation via photosynthesis.",
      example:
        "Primary producers form the broad foundation of the pyramid, generating twenty thousand kilocalories annually."
    },
    {
      word: "herbivorous primary consumers",
      meaning: "Organisms that feed directly on photosynthetic plants and vegetation.",
      example:
        "Insects and rodents act as herbivorous primary consumers, sustaining the secondary predators above them."
    },
    {
      word: "apex quaternary predator",
      meaning: "The top-tier carnivore situated at the summit of the food pyramid with no natural predators.",
      example:
        "Eagles function as the apex quaternary predator, receiving only two kilocalories per square metre annually."
    },
    {
      word: "metabolic heat dissipation",
      meaning: "The loss of thermal energy to the surrounding environment resulting from cellular respiration.",
      example:
        "At every single trophic level, a substantial volume of chemical energy is lost through metabolic heat dissipation."
    },
    {
      word: "saprophytic decomposers",
      meaning: "Microorganisms such as bacteria and fungi that break down non-living organic detritus and dead tissue.",
      example:
        "Saprophytic decomposers receive biological waste from all tiers, converting decaying matter while releasing heat."
    },
    {
      word: "unidirectional energy flow",
      meaning: "The non-cyclical, one-way movement of energy through an ecosystem from solar input to thermal dissipation.",
      example:
        "Energy exhibits an irreversible unidirectional flow, leaking outward into the environment at each consumer stage."
    },
    {
      word: "organic detritus",
      meaning: "Non-living particulate organic material including animal waste and decaying carcasses.",
      example:
        "Organic detritus from every trophic tier is channeled directly to decomposers positioned beside the base."
    }
  ],

  vocabHunt: [
    "trophic levels",
    "biomass energy transfer",
    "tenfold reduction",
    "primary producers",
    "herbivorous primary consumers",
    "apex quaternary predator",
    "metabolic heat dissipation",
    "saprophytic decomposers",
    "unidirectional energy flow",
    "organic detritus"
  ],

  bp1: {
    title: "Vertical Trophic Hierarchy & Stored Biomass (10% Transfer)",
    focus: "Upward progression from Primary Producers (20,000 kcal) to Apex Predators (2 kcal)",
    points: [
      "Light energy fuels primary producers at the base, yielding 20,000 kcal/m²/yr of stored biomass.",
      "Herbivorous primary consumers (insects and mice) incorporate 2,000 kcal/m²/yr (exactly 10%).",
      "Secondary consumers (frogs, birds, small mammals) register 200 kcal/m²/yr.",
      "Tertiary consumers (snakes) store 20 kcal/m²/yr.",
      "Quaternary apex raptors (eagles) receive only 2 kcal/m²/yr—a 99.99% overall loss from the base."
    ],
    takeaways: [
      "10% transfer rule: exactly one-tenth of energy is stored as biomass at each tier",
      "Base energy of 20,000 kcal/m²/yr shrinks to a minuscule 2 kcal/m²/yr at the summit"
    ]
  },

  bp2: {
    title: "Energy Dissipation (Heat) & Decomposer Detritus Flow",
    focus: "Metabolic heat loss at all levels alongside waste channeling into decomposers",
    points: [
      "Metabolic heat is continuously lost to the atmosphere at every single trophic tier.",
      "Dead organic matter and waste from all levels—including primary producers—are channeled into decomposers.",
      "Decomposers process this biological detritus and release further metabolic heat.",
      "No direct return flow is depicted from decomposers back into the pyramid."
    ],
    takeaways: [
      "Heat loss is continuous across all 5 tiers as well as from decomposers",
      "Decomposers serve as the final processing sink for waste and dead matter from all stages"
    ]
  },

  processingGroups: [
    {
      title: "Trophic & Energy Metrics",
      items: [
        "kcal/m²/yr (kilocalories per square metre per year)",
        "Tenfold reduction / order of magnitude drop",
        "Ten percent (10%) trophic efficiency rule",
        "One ten-thousandth (0.01%) retained at the apex"
      ]
    },
    {
      title: "Passive Voice for Natural Ecosystems",
      items: [
        "Light energy is absorbed by primary producers",
        "Biomass is assimilated by herbivorous consumers",
        "Thermal energy is dissipated as metabolic heat",
        "Organic matter is funneled to decomposers"
      ]
    },
    {
      title: "Sequential & Dissipative Connectors",
      items: [
        "Commencing with solar irradiation at the base",
        "Sequentially ascending through higher consumer tiers",
        "Concurrently expelling metabolic heat into the environment",
        "Simultaneously channeling waste to decomposers"
      ]
    }
  ],

  connectors: [
    {
      phrase: "Commencing at the foundation",
      purpose: "Initiating the trophic description",
      example:
        "Commencing at the foundation, primary producers absorb light energy to generate an initial 20,000 kcal/m²/yr."
    },
    {
      phrase: "Transferred sequentially to",
      purpose: "Ascending to the next biological level",
      example:
        "This chemical energy is transferred sequentially to primary consumers, who store exactly 2,000 kcal/m²/yr."
    },
    {
      phrase: "Diminishing by an order of magnitude",
      purpose: "Quantifying the tenfold reduction",
      example:
        "Stored biomass diminishes by an order of magnitude at each stage, dropping from 200 to 20 kcal/m²/yr."
    },
    {
      phrase: "At the summit of the hierarchy",
      purpose: "Highlighting the apex predator level",
      example:
        "At the summit of the hierarchy, quaternary raptors incorporate a mere 2 kcal/m²/yr of biological energy."
    },
    {
      phrase: "Concurrently dissipated as metabolic heat",
      purpose: "Describing parallel thermal losses",
      example:
        "At every single tier, unassimilated energy is concurrently dissipated as metabolic heat into the atmosphere."
    },
    {
      phrase: "Channeling detritus to decomposers",
      purpose: "Describing the flow of dead matter into decomposers",
      example:
        "Organic waste and dead matter from across the pyramid are channeled directly into decomposers, which concurrently radiate metabolic heat."
    }
  ]
};
