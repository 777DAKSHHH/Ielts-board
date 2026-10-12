import type {
  Task1Data,
  VocabItem,
  PacificConditionFeature,
  ComparisonHotspot,
  SchoolData,
  Task1DiagramData
} from "../types";

export type {
  Task1Data,
  VocabItem,
  PacificConditionFeature,
  ComparisonHotspot,
  SchoolData,
  Task1DiagramData
};

export const PACIFIC_CONDITIONS: PacificConditionFeature[] = [
  {
    id: "normal",
    title: "Normal Pacific Conditions",
    badge: "Equilibrium Baseline",
    tradeWinds: "Strong easterly trade winds blowing westward across the Pacific toward the western basin",
    upperWinds: "Weak high-altitude winds blowing eastward",
    waterThermocline: "Thick pool of warm surface water accumulates in the West Pacific; cold thermocline close to surface off Peru",
    upwellingStatus: "Active upward surge of cool, nutrient-dense water along the Peruvian coastline",
    rainfallPattern: "Intense convective storm clouds and heavy precipitation centered over the West Pacific and Australia",
    australiaCondition: {
      climate: "Humid & rainy conditions sustaining lush green vegetation",
      weather: "Storm clouds & abundant rainfall",
      rainfall: "Frequent convective downpours supporting local ecosystems and farming",
      visualDetail: "Overcast skies, torrential showers, and flourishing green flora"
    },
    peruCondition: {
      climate: "Arid, clear coastal skies with abundant offshore marine harvests",
      marineLife: "Dense schools of cold-water fish thriving on rising nutrients",
      fisheryStatus: "Booming commercial fishing industry (illustrated by 2 large fish and an upward arrow)",
      visualDetail: "Bright sunshine, clear horizon, and thriving fish biomass"
    },
    band9Phrase:
      "“Under normal conditions, powerful trade winds propel warm surface water toward the western basin, fostering cloud formation and heavy rain over Australia, while cold, nutrient-laden currents upwell along the Peruvian coastline.”",
    summary:
      "Standard Pacific equilibrium: strong westward trade winds, deep western warm pool, rainfall over Australia, sunny skies and thriving fish stocks off Peru."
  },
  {
    id: "el_nino",
    title: "El Niño Conditions",
    badge: "Oceanic-Atmospheric Disruption",
    tradeWinds: "Weakened trade winds in the East Pacific; wind circulation falters",
    upperWinds: "Strong high-altitude winds blowing eastward over the West Pacific",
    waterThermocline: "Warm surface water is pushed eastward across the ocean basin, blanketing the thermocline",
    upwellingStatus: "Suppressed upwelling; warm surface layer traps cold water and yields poor nutrient levels",
    rainfallPattern: "Convective storm clouds and heavy precipitation shift eastward across the ocean to Peru",
    australiaCondition: {
      climate: "Severe aridity, parched terrain, and heightened bushfire danger",
      weather: "Scorching sun & cloudless skies",
      rainfall: "Near-total absence of rainfall, causing withered vegetation and drought",
      visualDetail: "Blazing sun icon, desiccated ground, and zero cloud cover"
    },
    peruCondition: {
      climate: "Uncharacteristic storm clouds, heavy rainfall, and flood vulnerability",
      marineLife: "Fish populations collapse due to warm surface water and severe nutrient starvation",
      fisheryStatus: "Severely depleted fishery (illustrated by a solitary thin fish and a downward arrow)",
      visualDetail: "Heavy rain clouds, downpours over coastal land, and impoverished marine stocks"
    },
    band9Phrase:
      "“During an El Niño event, this circulation pattern is disrupted: trade winds falter, warm water surges eastwards, and heavy rainfall shifts to Peru, while Australia experiences prolonged drought and Peruvian fisheries collapse under nutrient starvation.”",
    summary:
      "Climatic inversion: weakened trade winds, eastward warm surge, scorching drought in Australia, torrential rain and collapsed fisheries off Peru."
  }
];

export const COMPARISON_HOTSPOTS: ComparisonHotspot[] = [
  {
    id: "trade-winds",
    title: "Atmospheric Circulation & Trade Winds",
    zone: "atmosphere",
    normalState: "Strong trade winds blowing westward across East Pacific; weak upper winds in the west",
    elNinoState: "Trade winds weaken substantially; strong eastward-blowing winds dominate upper atmosphere",
    contrastKey: "Directional and velocity reversal of prevailing air currents",
    band9Sentence:
      "“Whereas robust trade winds normally blow westward across the basin, an El Niño episode witnesses these winds weaken, accompanied by strong eastward atmospheric flows.”"
  },
  {
    id: "warm-pool",
    title: "Surface Water & Thermocline Displacement",
    zone: "west_pacific",
    normalState: "Warm surface water is concentrated in a deep layer in the West Pacific",
    elNinoState: "Warm water is pushed eastwards across the Pacific, capping the thermocline across the basin",
    contrastKey: "Eastward thermal migration and ocean warming",
    band9Sentence:
      "“Consequently, the body of warm water that typically banks against the western Pacific surges eastwards toward South America.”"
  },
  {
    id: "upwelling-nutrients",
    title: "Peruvian Upwelling & Marine Nutrients",
    zone: "marine_depth",
    normalState: "Cool water and rich nutrients surge upwards to the surface along Peru",
    elNinoState: "Upwelling is blocked by the eastward warm water layer; coastal waters suffer poor nutrients",
    contrastKey: "Suppression of coastal upwelling and nutrient starvation",
    band9Sentence:
      "“This warm oceanic cap halts the upwelling of cold, nutrient-dense water along the Peruvian coastline, resulting in impoverished nutrient levels.”"
  },
  {
    id: "australia-weather",
    title: "Australian Weather & Vegetation",
    zone: "west_pacific",
    normalState: "Storm clouds produce frequent rain, nurturing lush green vegetation",
    elNinoState: "Cloudless skies, scorching sun, and severe drought with withered ground",
    contrastKey: "Transition from lush precipitation to arid drought",
    band9Sentence:
      "“As a result, Australia transitions from receiving abundant convective precipitation under normal conditions to experiencing arid conditions and blazing sunshine during El Niño.”"
  },
  {
    id: "peru-weather-fishery",
    title: "Peruvian Weather & Commercial Fisheries",
    zone: "east_pacific",
    normalState: "Clear, sunny skies accompanied by booming, abundant fish populations (upward arrow)",
    elNinoState: "Dark storm clouds bring heavy rain, while fish populations plummet (downward arrow)",
    contrastKey: "Inversion to coastal flooding and catastrophic fishery collapse",
    band9Sentence:
      "“Conversely, Peru experiences an inversion from clear skies and flourishing fish stocks to heavy rainfall accompanied by a precipitous decline in marine harvests.”"
  }
];

// Backwards-compatible stub data for any components still referencing school metrics
export const SCHOOLS_DATA: SchoolData[] = [
  {
    id: "normal_pacific",
    name: "Normal Equilibrium",
    color: "#0284c7",
    badge: "Westward Flow & Rain in West",
    netChange: "Equilibrium Baseline",
    trendSummary: "Strong westward trade winds drive warm water and rain to Australia; cold upwelling off Peru.",
    band9Phrase: "“Under normal conditions, strong trade winds push warm water westward, fostering rain over Australia.”",
    dataPoints: [
      { year: 1, value: 85, annotation: "Strong Trade Winds" },
      { year: 2, value: 90, annotation: "Western Warm Pool" },
      { year: 3, value: 95, annotation: "Australian Rain" },
      { year: 4, value: 90, annotation: "Peruvian Upwelling" },
      { year: 5, value: 95, annotation: "Booming Fish Stocks" }
    ]
  },
  {
    id: "el_nino_pacific",
    name: "El Niño Disruption",
    color: "#dc2626",
    badge: "Eastward Warm Surge & Drought",
    netChange: "Climatic Inversion",
    trendSummary: "Weak trade winds push warm water east; Australia suffers drought while Peru faces rain and fishery crash.",
    band9Phrase: "“During El Niño, weakened trade winds displace warm water east, plunging Australia into drought.”",
    dataPoints: [
      { year: 1, value: 30, annotation: "Weak Trade Winds" },
      { year: 2, value: 80, annotation: "Eastward Warm Surge" },
      { year: 3, value: 15, annotation: "Australian Drought" },
      { year: 4, value: 20, annotation: "Poor Nutrients" },
      { year: 5, value: 10, annotation: "Fishery Collapse" }
    ]
  }
];

export const TASK1_DIAGRAM_DATA: Task1DiagramData = {
  conditions: PACIFIC_CONDITIONS,
  hotspots: COMPARISON_HOTSPOTS,
  comparisonsSummary: {
    tradeWinds: "Strong westward winds under normal conditions vs. weakened trade winds & eastward upper winds during El Niño.",
    waterMovement: "Warm water pooled in western Pacific normally vs. warm water pushed eastwards across basin in El Niño.",
    peruOcean: "Cold upwelling with rich nutrients normally vs. capped thermocline with poor nutrients in El Niño.",
    australiaClimate: "Storm clouds & rain (lush flora) normally vs. blazing sun & drought in El Niño.",
    peruClimateFisheries: "Sunny skies & abundant fish normally vs. storm clouds, rain & decimated fish catch in El Niño."
  },
  schools: SCHOOLS_DATA,
  countries: SCHOOLS_DATA
};

export const TASK1_DATA: Task1Data = {
  id: "task1-pacific-el-nino",
  taskType: "Comparative Oceanographic Diagram",
  title: "Normal vs. El Niño Conditions in the Pacific Ocean",
  questionText:
    "The diagrams compare the normal condition with El Nino condition in the Pacific Ocean.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
  imageFileName: "pacific-el-nino-comparison.png",
  audioUrl: "https://actions.google.com/sounds/v1/weather/light_rain.ogg",
  audioClueText:
    "Listen carefully to the Pacific Ocean comparison briefing. Notice how the two diagrams reveal a dramatic climatic inversion. In the top diagram, under normal conditions, robust easterly trade winds blow from the East Pacific toward the West Pacific, pooling warm surface water off the Australian coast. This creates convective storm clouds and abundant rainfall over Australia. Meanwhile, off the Peruvian coastline in the East Pacific, cool water laden with rich nutrients surges upward from the depths, supporting clear sunny skies and thriving, abundant fish populations. In contrast, the bottom diagram depicts an El Niño event: the trade winds weaken, upper winds blow strongly eastward, and warm surface water is propelled across the ocean basin toward South America. This suppresses the cold thermocline and halts nutrient upwelling, causing Peruvian fish stocks to crash while dumping uncharacteristic storm rain on Peru. Concurrently, Australia is deprived of moisture, enduring scorching sun, clear skies, and severe drought.",
  sampleIntro:
    "The diagrams illustrate the atmospheric and oceanic differences between normal weather conditions and an El Niño phenomenon across the Pacific Ocean.",
  sampleOverview:
    "Overall, normal conditions are characterized by strong trade winds driving warm surface water and heavy rainfall westward toward Australia, while nutrient-rich cold upwelling sustains flourishing Peruvian fisheries. In sharp contrast, El Niño conditions feature weakened trade winds and eastward atmospheric flows, which displace warm water and storm clouds toward Peru while plunging Australia into drought and severely depleting Peruvian marine nutrients and fish stocks.",
  timingSeconds: 1200,
  diagramData: TASK1_DIAGRAM_DATA,
  graphData: TASK1_DIAGRAM_DATA,
  tableData: TASK1_DIAGRAM_DATA,
  vocabList: [
    {
      word: "Upwelling",
      meaning:
        "The upward vertical movement of colder, nutrient-dense deep ocean water toward the surface as surface water is pushed away.",
      example:
        "Off the coast of Peru, cool water and rich nutrients actively upwell from the ocean depths to nourish marine life under normal conditions.",
      partOfSpeech: "noun",
      pronunciation: "/ˈʌpˌwel.ɪŋ/",
      definition:
        "The upward vertical movement of colder, nutrient-dense deep ocean water toward the surface as surface water is pushed away.",
      band9Context:
        "Off the coast of Peru, cool water and rich nutrients actively upwell from the ocean depths to nourish marine life under normal conditions.",
      collocations: ["nutrient-rich upwelling", "coastal upwelling", "suppressed upwelling", "oceanic upwelling"]
    },
    {
      word: "Thermocline",
      meaning:
        "The distinct transitional layer in an ocean body separating warmer surface water from much colder, denser deep water.",
      example:
        "During an El Niño phase, warm surface water pushed eastward caps the ocean basin, suppressing the cool thermocline below.",
      partOfSpeech: "noun",
      pronunciation: "/ˈθɜː.mə.klaɪn/",
      definition:
        "The distinct transitional layer in an ocean body separating warmer surface water from much colder, denser deep water.",
      band9Context:
        "During an El Niño phase, warm surface water pushed eastward caps the ocean basin, suppressing the cool thermocline below.",
      collocations: ["steep thermocline", "suppress the thermocline", "thermocline displacement", "deep ocean layer"]
    },
    {
      word: "Trade Winds",
      meaning:
        "The prevailing tropical easterly winds that blow steadily across the equatorial ocean basin.",
      example:
        "Under normal conditions, powerful trade winds blow westward from the East Pacific toward the West Pacific basin.",
      partOfSpeech: "noun",
      pronunciation: "/ˈtreɪd wɪndz/",
      definition:
        "The prevailing tropical easterly winds that blow steadily across the equatorial ocean basin.",
      band9Context:
        "Under normal conditions, powerful trade winds blow westward from the East Pacific toward the West Pacific basin.",
      collocations: ["strong trade winds", "weakened trade winds", "prevailing trade winds", "easterly winds"]
    },
    {
      word: "Atmospheric Convection",
      meaning:
        "The vertical rising of warm, moisture-laden air that condenses into storm clouds and produces precipitation.",
      example:
        "The accumulation of warm water in the western basin triggers intense atmospheric convection, generating storm clouds and rain over Australia.",
      partOfSpeech: "noun",
      pronunciation: "/ˌæt.məsˈfer.ɪk kənˈvek.ʃən/",
      definition:
        "The vertical rising of warm, moisture-laden air that condenses into storm clouds and produces precipitation.",
      band9Context:
        "The accumulation of warm water in the western basin triggers intense atmospheric convection, generating storm clouds and rain over Australia.",
      collocations: ["convective storm clouds", "trigger convection", "convective precipitation", "atmospheric lift"]
    },
    {
      word: "Displace Eastward",
      meaning:
        "To shift, propel, or push a body of water or air mass across an oceanic expanse toward the eastern quadrant.",
      example:
        "As trade winds falter, a substantial layer of warm water is displaced eastwards toward the South American coastline.",
      partOfSpeech: "verb",
      pronunciation: "/dɪsˈpleɪs ˈiːst.wəd/",
      definition:
        "To shift, propel, or push a body of water or air mass across an oceanic expanse toward the eastern quadrant.",
      band9Context:
        "As trade winds falter, a substantial layer of warm water is displaced eastwards toward the South American coastline.",
      collocations: ["pushed eastwards", "displaced eastward", "eastward migration", "propel water east"]
    },
    {
      word: "Nutrient-Dense",
      meaning:
        "Containing a high concentration of organic and mineral compounds essential for sustaining marine food webs.",
      example:
        "Cold, nutrient-dense water rising off Peru provides the essential ecological foundation for abundant commercial fish harvests.",
      partOfSpeech: "adjective",
      pronunciation: "/ˈnjuː.tri.ənt dens/",
      definition:
        "Containing a high concentration of organic and mineral compounds essential for sustaining marine food webs.",
      band9Context:
        "Cold, nutrient-dense water rising off Peru provides the essential ecological foundation for abundant commercial fish harvests.",
      collocations: ["nutrient-dense currents", "rich nutrients", "poor nutrient levels", "nutrient starvation"]
    },
    {
      word: "Climatic Inversion",
      meaning:
        "A complete reversal or mirrored flip of established meteorological and atmospheric patterns across two regions.",
      example:
        "The onset of El Niño triggers a complete climatic inversion, converting wet Australia into an arid zone and dry Peru into a flood zone.",
      partOfSpeech: "noun",
      pronunciation: "/klaɪˈmæt.ɪk ɪnˈvɜː.ʃən/",
      definition:
        "A complete reversal or mirrored flip of established meteorological and atmospheric patterns across two regions.",
      band9Context:
        "The onset of El Niño triggers a complete climatic inversion, converting wet Australia into an arid zone and dry Peru into a flood zone.",
      collocations: ["climatic inversion", "meteorological reversal", "inverted weather patterns", "systemic shift"]
    },
    {
      word: "Precipitous Decline",
      meaning:
        "An extremely steep, sudden, and disastrous reduction in quantity or abundance.",
      example:
        "Due to the cessation of nutrient upwelling, Peruvian fish stocks suffer a precipitous decline as indicated by the downward arrow.",
      partOfSpeech: "noun",
      pronunciation: "/prɪˈsɪp.ɪ.təs dɪˈklaɪn/",
      definition:
        "An extremely steep, sudden, and disastrous reduction in quantity or abundance.",
      band9Context:
        "Due to the cessation of nutrient upwelling, Peruvian fish stocks suffer a precipitous decline as indicated by the downward arrow.",
      collocations: ["precipitous decline", "plummet rapidly", "severe depletion", "decimate stocks"]
    },
    {
      word: "Prolonged Aridity",
      meaning:
        "An extended period of severe dryness, characterized by an absence of precipitation and scorching temperatures.",
      example:
        "Deprived of warm convective sea surfaces, eastern Australia is subjected to prolonged aridity and blazing sunshine.",
      partOfSpeech: "noun",
      pronunciation: "/prəˈlɒŋd əˈrɪd.ə.ti/",
      definition:
        "An extended period of severe dryness, characterized by an absence of precipitation and scorching temperatures.",
      band9Context:
        "Deprived of warm convective sea surfaces, eastern Australia is subjected to prolonged aridity and blazing sunshine.",
      collocations: ["prolonged aridity", "severe drought", "arid conditions", "parched landscapes"]
    },
    {
      word: "Flourish",
      meaning:
        "To grow, develop, or thrive vigorously under optimal environmental and nutritional circumstances.",
      example:
        "Commercial fisheries flourish off the Peruvian coast during normal periods thanks to continuous nutrient replenishment.",
      partOfSpeech: "verb",
      pronunciation: "/ˈflʌr.ɪʃ/",
      definition:
        "To grow, develop, or thrive vigorously under optimal environmental and nutritional circumstances.",
      band9Context:
        "Commercial fisheries flourish off the Peruvian coast during normal periods thanks to continuous nutrient replenishment.",
      collocations: ["flourishing fish populations", "marine life flourishes", "thriving ecosystem", "abundant biomass"]
    },
    {
      word: "Attenuate",
      meaning:
        "To reduce the force, intensity, or velocity of a physical flow or meteorological wind system.",
      example:
        "During El Niño episodes, the standard westward trade winds attenuate, allowing warm water to migrate back eastward.",
      partOfSpeech: "verb",
      pronunciation: "/əˈten.ju.eɪt/",
      definition:
        "To reduce the force, intensity, or velocity of a physical flow or meteorological wind system.",
      band9Context:
        "During El Niño episodes, the standard westward trade winds attenuate, allowing warm water to migrate back eastward.",
      collocations: ["attenuated trade winds", "attenuate significantly", "weakened circulation", "faltering currents"]
    },
    {
      word: "Equilibrium Baseline",
      meaning:
        "The regular, balanced state of an environmental system against which anomalies and disruptions are measured.",
      example:
        "The normal Pacific diagram illustrates the equilibrium baseline, whereas El Niño depicts a transient yet disruptive anomaly.",
      partOfSpeech: "noun",
      pronunciation: "/ˌiː.kwɪˈlɪb.ri.əm ˈbeɪs.laɪn/",
      definition:
        "The regular, balanced state of an environmental system against which anomalies and disruptions are measured.",
      band9Context:
        "The normal Pacific diagram illustrates the equilibrium baseline, whereas El Niño depicts a transient yet disruptive anomaly.",
      collocations: ["equilibrium baseline", "climatic equilibrium", "oceanic balance", "systemic disruption"]
    }
  ],
  vocabHunt: [
    "Upwelling",
    "Thermocline",
    "Trade Winds",
    "Atmospheric Convection",
    "Displace Eastward",
    "Nutrient-Dense",
    "Climatic Inversion",
    "Precipitous Decline"
  ],
  bp1: {
    title: "Body 1: Normal Pacific Equilibrium (Westward Winds & Rich Upwelling)",
    focus: "Atmospheric circulation, western warm pool, Australian rainfall, and Peruvian nutrient upwelling.",
    points: [
      "Trade Winds: Powerful easterly trade winds blow westward from the East Pacific toward the West Pacific basin, while upper winds remain weak.",
      "Western Warm Pool: These trade winds push warm surface water westward, concentrating a deep thermal reservoir along the Australian coast.",
      "Australian Rainfall: This warm western pool fuels atmospheric convection, producing storm clouds and abundant rainfall that sustains green vegetation in Australia.",
      "Peruvian Cold Upwelling: Simultaneously, off the Peruvian coastline in the East Pacific, cool water laden with rich nutrients wells up from the deep ocean.",
      "Flourishing Fisheries: This continuous upwelling supports sunny coastal conditions and abundant fish populations (indicated by two large fish and an upward arrow)."
    ]
  },
  bp2: {
    title: "Body 2: El Niño Climatic Reversal (Eastward Shift & Ecological Collapse)",
    focus: "Weakened trade winds, eastward warm water displacement, Australian drought, and Peruvian flood & fishery crash.",
    points: [
      "Weakened Trade Winds: During an El Niño event, trade winds in the East Pacific weaken noticeably, while upper winds over the West Pacific strengthen eastward.",
      "Eastward Warm Surge: Consequently, warm surface water is pushed eastwards across the Pacific basin, capping the thermocline and blanketing cold deep water.",
      "Australian Drought: Deprived of warm water and convective energy, Australia experiences blazing sunshine, cloudless skies, and severe drought.",
      "Peruvian Storms: Storm clouds and heavy rain shift eastward, dumping uncharacteristic precipitation over the Peruvian coastal zone.",
      "Fishery Decimation: The warm layer halts the upwelling of cool nutrients, resulting in poor nutrient levels and a catastrophic collapse in fish stocks (a solitary thin fish and downward arrow)."
    ]
  },
  processingGroups: [
    {
      title: "Atmospheric & Wind Dynamics",
      items: [
        "Normal: Strong westward trade winds; weak eastward upper winds.",
        "El Niño: Weakened trade winds; strong eastward upper-level winds.",
        "Shift: Complete reversal in prevailing wind velocity and convective drivers."
      ]
    },
    {
      title: "Oceanic Thermocline & Water Layers",
      items: [
        "Normal: Deep warm surface water pool concentrated in the West Pacific.",
        "El Niño: Warm surface water is pushed eastward across the central and eastern Pacific.",
        "Subsurface: Cool thermocline suppressed by the invading warm surface layer."
      ]
    },
    {
      title: "Terrestrial Climate & Marine Ecology",
      items: [
        "Normal: Australia has storm clouds & rain; Peru has clear skies, cold upwelling, and rich fish stocks.",
        "El Niño: Australia suffers blazing sun & drought; Peru faces heavy rain, poor nutrients, and depleted fish.",
        "Impact: Simultaneous ecological inversion in both land vegetation and marine biomass."
      ]
    }
  ],
  connectors: [
    {
      phrase: "Under normal conditions,...",
      purpose: "Establish the baseline equilibrium state of the Pacific ocean-atmosphere system.",
      example: "Under normal conditions, powerful trade winds propel warm surface water toward the western Pacific."
    },
    {
      phrase: "In sharp contrast, during an El Niño phase,...",
      purpose: "Signal the comprehensive meteorological and oceanic disruption.",
      example: "In sharp contrast, during an El Niño phase, the trade winds weaken and winds blow strongly eastwards."
    },
    {
      phrase: "Consequently / As a direct result,...",
      purpose: "Establish clear causal links between wind changes and water mass movements.",
      example: "Consequently, the reservoir of warm surface water is pushed eastwards across the ocean basin."
    },
    {
      phrase: "This warm oceanic layer suppresses / halts...",
      purpose: "Explain the physical mechanism blocking nutrient upwelling off Peru.",
      example: "This warm oceanic layer halts the upwelling of cool, nutrient-dense water along the Peruvian coast."
    },
    {
      phrase: "Whereas Australia receives..., it experiences...",
      purpose: "Highlight the regional weather reversal from abundant rain to scorching drought.",
      example: "Whereas Australia normally receives abundant convective rainfall, it experiences scorching sunshine and drought during El Niño."
    },
    {
      phrase: "Conversely, off the Peruvian coast,...",
      purpose: "Pivot between geographical extremes across the Pacific basin.",
      example: "Conversely, off the Peruvian coast, clear skies give way to dark storm clouds and torrential downpours."
    },
    {
      phrase: "Deprived of vital nutrients,...",
      purpose: "Illustrate the ecological cause of collapsing marine life.",
      example: "Deprived of vital nutrients, coastal fish populations decline precipitously as denoted by the downward arrow."
    },
    {
      phrase: "Simultaneously / Concurrently,...",
      purpose: "Link co-occurring atmospheric and marine phenomena across the Pacific.",
      example: "Concurrently, storm clouds migrate eastwards, displacing convective rainfall toward South America."
    }
  ],
  modelReport: {
    wordCount: 214,
    paragraphs: [
      {
        id: "intro",
        title: "Paragraph 1: Introduction (Paraphrase)",
        text: "The diagrams illustrate the atmospheric and oceanic differences between normal weather conditions and an El Niño phenomenon across the Pacific Ocean.",
        wordCount: 21,
        badges: ["Paraphrase", "Dual System Scope", "Oceanic & Atmospheric Focus"]
      },
      {
        id: "overview",
        title: "Paragraph 2: Macro Overview (Key Dichotomy)",
        text: "Overall, normal conditions are characterized by strong trade winds driving warm water and heavy rainfall westward toward Australia, alongside nutrient-rich cold upwelling that sustains thriving Peruvian fisheries. In sharp contrast, El Niño conditions feature weakened trade winds and eastward atmospheric flows, which displace warm water and rainfall to Peru while plunging Australia into drought and severely depleting marine nutrients and fish stocks.",
        wordCount: 64,
        badges: ["Macro Contrast", "Wind & Thermal Shift", "Ecological & Climatic Inversion"]
      },
      {
        id: "body1",
        title: "Paragraph 3: Body 1 (Normal Conditions)",
        text: "Under normal conditions, powerful trade winds blow westward from the East Pacific, pushing warm surface water to accumulate in the western basin. This generates convective storm clouds and substantial rainfall over Australia. Meanwhile, off the Peruvian coast, cool water laden with rich nutrients wells up from the ocean depths beneath sunny skies, fostering flourishing fish populations.",
        wordCount: 55,
        badges: ["Westward Trade Winds", "Western Warm Pool", "Australian Rain", "Peruvian Upwelling & Fish"]
      },
      {
        id: "body2",
        title: "Paragraph 4: Body 2 (El Niño Conditions)",
        text: "During an El Niño phase, this system undergoes a marked reversal. Trade winds in the East Pacific weaken, while strong upper winds blow eastwards from the West Pacific. As a result, warm surface water is propelled eastwards, capping the colder layers below and suppressing the upwelling of nutrients. Consequently, Australia suffers from scorching sun and severe drought, whereas storm clouds migrate to Peru, bringing heavy rain accompanied by a sharp decline in coastal fish stocks.",
        wordCount: 74,
        badges: ["Wind Reversal", "Eastward Warm Surge", "Suppressed Nutrients", "Australian Drought & Peruvian Crash"]
      }
    ]
  }
};
