import type {
  Task1Data,
  VocabItem,
  CountryMarketData,
  MusicFormatItem,
  ComparisonHotspot,
  PacificConditionFeature,
  SchoolData,
  Task1DiagramData,
  HourlyAudiencePoint,
  MediaChannelInfo,
  AudienceHotspot,
  ActivityAgeGroup,
  ActivityGenderInfo,
  ActivityHotspot,
  SpendingCategoryItem,
  SpendingCategoryKey,
  SchoolSpendingYearData,
  SpendingHotspot,
  ProcessStageItem,
  ConcreteIngredientItem,
  ProfessionWorkloadStress,
  WheatExportRegion,
  WheatExportYearPoint
} from "../types";

export type {
  Task1Data,
  VocabItem,
  CountryMarketData,
  MusicFormatItem,
  ComparisonHotspot,
  PacificConditionFeature,
  SchoolData,
  Task1DiagramData,
  HourlyAudiencePoint,
  MediaChannelInfo,
  AudienceHotspot,
  ActivityAgeGroup,
  ActivityGenderInfo,
  ActivityHotspot,
  SpendingCategoryItem,
  SpendingCategoryKey,
  SchoolSpendingYearData,
  SpendingHotspot,
  ProcessStageItem,
  ConcreteIngredientItem,
  ProfessionWorkloadStress,
  WheatExportRegion,
  WheatExportYearPoint
};

// Backward compatibility shims
export const SUGARCANE_PROCESS_STAGES: ProcessStageItem[] = [];
export const CEMENT_PROCESS_STAGES: ProcessStageItem[] = [];
export const CONCRETE_INGREDIENTS: ConcreteIngredientItem[] = [];
export const WHEAT_EXPORTS_DATA: WheatExportRegion[] = [];
export const PROFESSIONS_DATA: ProfessionWorkloadStress[] = [];
export const SPENDING_CATEGORIES: SpendingCategoryItem[] = [];
export const SPENDING_YEARS: SchoolSpendingYearData[] = [];
export const SPENDING_HOTSPOTS: SpendingHotspot[] = [];

// ==========================================
// MASTER TASK 1 DATA OBJECT (ISLIP TOWN CENTRE DEVELOPMENT MAPS)
// Maps: Current Layout vs Planned Development
// ==========================================

export const TASK1_DATA: Task1Data = {
  id: "task1-islip-town-centre-development-maps",
  taskType: "IELTS Academic Writing Task 1 • Development Maps (Now vs Planned Future Layout)",
  title: "Centre of a Small Town Called Islip: Current Layout vs Planned Development",
  companyName: "Cambridge IELTS Academic Writing Task 1",
  unit: "Urban Infrastructure, Zoning & Amenities",
  questionText:
    "The maps below show the centre of a small town called Islip as it is now, and plans for its development.\n\nSummarize the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
  imageFileName: "materials/islip_town_centre_maps.jpg",
  hdImageFileName: "materials/islip_town_centre_maps.jpg",
  scanImageFileName: "materials/islip_town_centre_maps.jpg",
  audioUrl: "materials/Taxation_and_Public_Services_Briefing.m4a",
  audioClueText:
    "The two comparative maps depict the town centre of Islip at present and its proposed future redevelopment. Currently, a straight east-west main road bisects the settlement, bordered by shops on both sides, with countryside to the north, central housing, a south-western school, and a south-eastern park. Under the planned development, vehicular thoroughfare will be routed around an outer dual carriageway that completely circumscribes the town. The central road will be pedestrianised. The northern row of shops will be demolished and replaced by a bus station, shopping centre, and car park, with new housing erected in the north-east countryside. South of the pedestrian street, the southern shops and residential zone remain, while an additional housing development reduces the park's size, and the school is linked directly to the new dual carriageway.",
  timingSeconds: 1200,

  sampleIntro:
    "The maps illustrate the current layout of the town centre of Islip alongside the proposed transformations for its future redevelopment.",

  sampleOverview:
    "Overall, the town centre is slated to undergo extensive infrastructural modernization, transitioning from a traffic-bisected settlement into a predominantly pedestrianised commercial and residential hub. The most prominent changes involve the construction of a perimeter dual carriageway encircling the central core, alongside substantial residential and commercial expansion to the north and east at the expense of open countryside and recreational parkland.",

  formats: [],
  countries: [],

  diagramData: {
    hotspots: [
      {
        id: "ring-road",
        title: "Perimeter Dual Carriageway",
        zone: "Transport Infrastructure • Outer Ring",
        normalState: "At present: No bypass exists; through-traffic travels straight through the central main road.",
        elNinoState: "Planned: A full perimeter dual carriageway encircles the entire town core, linking western and eastern arteries.",
        contrastKey: "Diverts through-traffic around the town, bypassing the central core entirely.",
        band9Sentence:
          "“To accommodate through vehicular traffic, a newly constructed dual carriageway will completely circumscribe the central town, connecting the incoming roads from the east and west.”"
      },
      {
        id: "pedestrian-thoroughfare",
        title: "Central Main Road Pedestrianisation",
        zone: "Central Core • East-West Axis",
        normalState: "At present: A standard vehicular main road running east-west with shops on both flanks.",
        elNinoState: "Planned: Designated as 'Pedestrians only', closed entirely to motor vehicles.",
        contrastKey: "Transformation from a vehicular main road into an exclusive pedestrian precinct.",
        band9Sentence:
          "“The existing main road running through the heart of the town will be entirely pedestrianised, prohibiting vehicular access in favour of foot traffic.”"
      },
      {
        id: "northern-commercial",
        title: "Northern Commercial Hub",
        zone: "Northern Sector • Former Shops & Countryside",
        normalState: "At present: A strip of roadside shops bordering open countryside to the north.",
        elNinoState: "Planned: Northern shops demolished; replaced by a bus station, shopping centre, and car park.",
        contrastKey: "Demolition of local roadside shops in favour of an integrated multi-modal transit and retail complex.",
        band9Sentence:
          "“The northern row of shops will be completely demolished to make way for a comprehensive commercial and transit complex, comprising a bus station, a shopping centre, and an adjacent car park.”"
      },
      {
        id: "northeast-housing",
        title: "North-Eastern Residential Expansion",
        zone: "North-East Sector • Rural Countryside",
        normalState: "At present: Undeveloped open countryside north of the central shops.",
        elNinoState: "Planned: A newly constructed residential estate ('New housing') with dedicated road access from the dual carriageway.",
        contrastKey: "Conversion of rural greenfield countryside into an urban residential neighborhood.",
        band9Sentence:
          "“Further east in what is currently open countryside, a new residential development is planned, accessible via a branch road leading from the northern perimeter bypass.”"
      },
      {
        id: "southern-shops-retention",
        title: "Southern Retail Row Retention",
        zone: "Central Sector • South of Pedestrian Zone",
        normalState: "At present: A row of shops along the southern perimeter of the main road.",
        elNinoState: "Planned: Fully preserved in its original location, facing the newly pedestrianised precinct.",
        contrastKey: "Stability and preservation contrasting with the complete demolition of the northern retail row.",
        band9Sentence:
          "“Unlike their northern counterparts, the shops along the southern side of the central thoroughfare will remain intact, bordering the newly pedestrianised strip.”"
      },
      {
        id: "park-housing-reconfiguration",
        title: "Parkland Diminution & South-East Housing",
        zone: "South-Eastern Quadrant • Amenities",
        normalState: "At present: A large rectangular park accessed via a branch road off the main road.",
        elNinoState: "Planned: Park size significantly reduced to make space for a second new housing estate.",
        contrastKey: "Substantial diminution of public green space to facilitate residential capacity.",
        band9Sentence:
          "“In the south-eastern quadrant, the recreational park will undergo a noticeable diminution in size to accommodate an additional residential estate directly to its west.”"
      },
      {
        id: "school-access",
        title: "South-Western School & Direct Bypass Access",
        zone: "South-Western Quadrant • Educational Facility",
        normalState: "At present: School situated at the end of a curved cul-de-sac branching from the main road.",
        elNinoState: "Planned: School building preserved, with its access road reconfigured to connect directly to the southern dual carriageway.",
        contrastKey: "Retention of educational infrastructure with upgraded direct connection to the outer ring road.",
        band9Sentence:
          "“The school situated in the south-western corner will be preserved, but its access road will be reconfigured to connect directly into the southern arc of the dual carriageway.”"
      }
    ],
    comparisonsSummary: {
      transport_reorganisation: "Through vehicular traffic will be diverted away from the centre onto an encircling dual carriageway, allowing the main street to become fully pedestrianised.",
      commercial_overhaul: "The northern shops will be completely demolished and replaced by a multi-modal hub (bus station, shopping centre, and car park), whereas southern shops remain preserved.",
      residential_growth: "Two new housing estates will be built: one in the north-east countryside and one in the south-east adjacent to a downsized park.",
      amenity_impact: "While the school is retained with modernized ring-road access, the park will suffer a noticeable loss of area to accommodate new residential housing."
    }
  },

  graphData: {
    hotspots: [],
    comparisonsSummary: {
      bifurcation: "Body 1 details the perimeter dual carriageway, central pedestrianisation, and northern commercial and residential development; Body 2 details the southern zone, highlighting shop retention, school preservation with new access, new housing, and park diminution."
    }
  },

  vocabList: [
    {
      word: "Pedestrianise",
      term: "Pedestrianise",
      pos: "verb",
      phonetic: "/pəˈdes.tri.ə.naɪz/",
      meaning: "To make a street or part of a town into an area where vehicles are not allowed.",
      definition: "To make a street or part of a town into an area where vehicles are not allowed.",
      example: "The central main road will be pedestrianised to create a vehicle-free shopping zone.",
      sampleSentence: "The central main road will be pedestrianised to create a vehicle-free shopping zone.",
      collocations: ["pedestrianise a street", "fully pedestrianised", "pedestrianised zone"]
    },
    {
      word: "Circumscribe",
      term: "Circumscribe",
      pos: "verb",
      phonetic: "/ˈsɜː.kəm.skraɪb/",
      meaning: "To draw a line around something; to encircle or delimit within boundaries.",
      definition: "To draw a line around something; to encircle or delimit within boundaries.",
      example: "A new perimeter dual carriageway will circumscribe the town centre, routing traffic away from the core.",
      sampleSentence: "A new perimeter dual carriageway will circumscribe the town centre, routing traffic away from the core.",
      collocations: ["circumscribe the town", "circumscribe the perimeter", "narrowly circumscribed"]
    },
    {
      word: "Demolish",
      term: "Demolish",
      pos: "verb",
      phonetic: "/dɪˈmɒl.ɪʃ/",
      meaning: "To pull or knock down a building or other structure.",
      definition: "To pull or knock down a building or other structure.",
      example: "The northern row of shops will be demolished to make way for a modern bus station and shopping centre.",
      sampleSentence: "The northern row of shops will be demolished to make way for a modern bus station and shopping centre.",
      collocations: ["completely demolished", "demolish existing buildings", "slated to be demolished"]
    },
    {
      word: "Reconfigure",
      term: "Reconfigure",
      pos: "verb",
      phonetic: "/ˌriː.kənˈfɪɡ.ər/",
      meaning: "To arrange or set up something in a different way or configuration.",
      definition: "To arrange or set up something in a different way or configuration.",
      example: "The local road network will be substantially reconfigured to connect with the new bypass.",
      sampleSentence: "The local road network will be substantially reconfigured to connect with the new bypass.",
      collocations: ["substantially reconfigure", "reconfigure the layout", "reconfigure road access"]
    },
    {
      word: "Erect",
      term: "Erect",
      pos: "verb",
      phonetic: "/ɪˈrekt/",
      meaning: "To build something; to put up a structure or building.",
      definition: "To build something; to put up a structure or building.",
      example: "New housing complexes will be erected in both the north-eastern and south-eastern quadrants.",
      sampleSentence: "New housing complexes will be erected in both the north-eastern and south-eastern quadrants.",
      collocations: ["erect new buildings", "erect housing", "newly erected"]
    },
    {
      word: "Diminution",
      term: "Diminution",
      pos: "noun",
      phonetic: "/ˌdɪm.ɪˈnjuː.ʃən/",
      meaning: "A reduction in the size, extent, or importance of something.",
      definition: "A reduction in the size, extent, or importance of something.",
      example: "The construction of new residential units will cause a significant diminution of the town park.",
      sampleSentence: "The construction of new residential units will cause a significant diminution of the town park.",
      collocations: ["significant diminution", "diminution of parkland", "marked diminution"]
    },
    {
      word: "Bypass",
      term: "Bypass",
      pos: "noun",
      phonetic: "/ˈbaɪ.pɑːs/",
      meaning: "A road that passes around a town or city to enable traffic to avoid the centre.",
      definition: "A road that passes around a town or city to enable traffic to avoid the centre.",
      example: "The dual carriageway will serve as an outer bypass, carrying through-traffic around Islip.",
      sampleSentence: "The dual carriageway will serve as an outer bypass, carrying through-traffic around Islip.",
      collocations: ["outer bypass", "perimeter bypass", "traffic bypass"]
    },
    {
      word: "Preserve",
      term: "Preserve",
      pos: "verb",
      phonetic: "/prɪˈzɜːv/",
      meaning: "To keep something in its original state or in good condition; to protect from harm or destruction.",
      definition: "To keep something in its original state or in good condition; to protect from harm or destruction.",
      example: "The southern retail shops and primary school will be preserved during the redevelopment.",
      sampleSentence: "The southern retail shops and primary school will be preserved during the redevelopment.",
      collocations: ["preserved intact", "preserve existing buildings", "carefully preserved"]
    },
    {
      word: "Infrastructure",
      term: "Infrastructure",
      pos: "noun",
      phonetic: "/ˈɪn.frəˌstrʌk.tʃər/",
      meaning: "The basic physical and organizational structures and facilities needed for the operation of a society or enterprise.",
      definition: "The basic physical and organizational structures and facilities needed for the operation of a society or enterprise.",
      example: "The proposed redevelopment will modernize the town's transport and civic infrastructure.",
      sampleSentence: "The proposed redevelopment will modernize the town's transport and civic infrastructure.",
      collocations: ["transport infrastructure", "civic infrastructure", "modern infrastructure"]
    },
    {
      word: "Dual carriageway",
      term: "Dual carriageway",
      pos: "noun",
      phonetic: "/ˌdʒuː.əl ˈkær.ɪdʒ.weɪ/",
      meaning: "A road with a dividing strip between the traffic in opposite directions and two or more lanes in each direction.",
      definition: "A road with a dividing strip between the traffic in opposite directions and two or more lanes in each direction.",
      example: "A ring dual carriageway will loop around the perimeter of the town centre.",
      sampleSentence: "A ring dual carriageway will loop around the perimeter of the town centre.",
      collocations: ["perimeter dual carriageway", "encircling dual carriageway", "connect to a dual carriageway"]
    },
    {
      word: "Quadrant",
      term: "Quadrant",
      pos: "noun",
      phonetic: "/ˈkwɒd.rənt/",
      meaning: "Any of the four parts into which a plane is divided by two perpendicular lines, or a quarter of an area.",
      definition: "Any of the four parts into which a plane is divided by two perpendicular lines, or a quarter of an area.",
      example: "New housing will be erected in both the north-eastern and south-eastern quadrants of the town.",
      sampleSentence: "New housing will be erected in both the north-eastern and south-eastern quadrants of the town.",
      collocations: ["north-eastern quadrant", "south-eastern quadrant", "in each quadrant"]
    },
    {
      word: "Thoroughfare",
      term: "Thoroughfare",
      pos: "noun",
      phonetic: "/ˈθʌr.ə.feər/",
      meaning: "A main road in a town or city that connects two places and allows through traffic.",
      definition: "A main road in a town or city that connects two places and allows through traffic.",
      example: "The former central thoroughfare will be restricted exclusively to pedestrians.",
      sampleSentence: "The former central thoroughfare will be restricted exclusively to pedestrians.",
      collocations: ["central thoroughfare", "major thoroughfare", "pedestrianised thoroughfare"]
    }
  ],

  vocabHunt: [
    "pedestrianise",
    "circumscribe",
    "demolish",
    "reconfigure",
    "erect",
    "diminution",
    "bypass",
    "preserve",
    "infrastructure",
    "dual carriageway",
    "quadrant",
    "thoroughfare"
  ],

  bp1: {
    title: "Body 1: Transport Infrastructure & Northern Zone Redevelopment",
    focus: "Detail the perimeter ring road, the conversion of the central road to a pedestrian street, and the complete transformation of the northern sector.",
    points: [
      "Perimeter Bypass: A new dual carriageway encircles the entire town core, linking the western and eastern entry points to route through-traffic away from the centre.",
      "Pedestrianisation: The central east-west main road is converted into a pedestrianised thoroughfare ('Pedestrians only').",
      "Northern Commercial Hub: The existing northern row of shops is completely demolished to make way for a bus station, shopping centre, and car park.",
      "North-East Expansion: On previously open countryside to the north-east, a new residential development ('New housing') is erected with direct access to the dual carriageway."
    ]
  },

  bp2: {
    title: "Body 2: Southern Zone Amenities, Housing Expansion & Parkland Diminution",
    focus: "Analyze the southern section: preservation of southern shops and existing housing, introduction of new housing, reduction of parkland, and school access reconfiguration.",
    points: [
      "Retail Retention: The southern row of shops remains intact and unchanged, bordering the new pedestrian area.",
      "South-Western School: The school remains in the south-west, with its access road reconfigured to connect directly to the southern loop of the dual carriageway.",
      "South-Eastern Housing: An additional residential estate ('New housing') is constructed in the south-east adjacent to the existing housing.",
      "Parkland Diminution: The park is substantially reduced in size to accommodate the new southern housing and the dual carriageway arc."
    ]
  },

  processingGroups: [
    {
      title: "1. Transport Infrastructure & Traffic Flow",
      items: [
        "Construction of an encircling dual carriageway forming a complete perimeter bypass",
        "Diversion of through-traffic away from the settlement core",
        "Full pedestrianisation of the central east-west main road",
        "Direct road access provided to the bus station and car park from the dual carriageway"
      ]
    },
    {
      title: "2. Northern Commercial & Civic Overhaul",
      items: [
        "Complete demolition of the northern row of retail shops",
        "Erection of an integrated commercial hub: bus station, shopping centre, and car park",
        "Invasion of former northern countryside by residential and transport developments",
        "Addition of new housing in the north-eastern quadrant"
      ]
    },
    {
      title: "3. Southern Amenities & Reorganisation",
      items: [
        "Preservation of the southern row of shops and existing central-south housing",
        "Retention of the south-western school with direct dual carriageway access",
        "Substantial diminution and compression of the south-eastern park",
        "Construction of a new housing sector between the retained houses and downsized park"
      ]
    },
    {
      title: "4. Holistic Transformation Syntheses",
      items: [
        "Macro Shift: From a rural road-bisected village to a modern pedestrianised commercial centre",
        "Land Use: Trade-off between open green space/countryside and expanded residential capacity",
        "Commercial contrast: Northern shops demolished vs southern shops fully retained",
        "Connectivity: Every zone connected efficiently to the new perimeter dual carriageway"
      ]
    }
  ],

  connectors: [
    {
      phrase: "In terms of transport infrastructure,...",
      purpose: "Body 1 Opener & Sector Marker",
      example: "In terms of transport infrastructure, the former central thoroughfare will be pedestrianised."
    },
    {
      phrase: "To accommodate through traffic,...",
      purpose: "Causal / Functional Transport Linker",
      example: "To accommodate through traffic, a new dual carriageway will completely circumscribe the central town."
    },
    {
      phrase: "In place of the former northern shops,...",
      purpose: "Replacement & Redevelopment Marker",
      example: "In place of the former northern shops, a newly built bus station, shopping centre, and car park will be constructed."
    },
    {
      phrase: "Turning to the southern sector,...",
      purpose: "Body 2 Directional Transition",
      example: "Turning to the southern sector, the existing row of shops will remain entirely intact."
    },
    {
      phrase: "In sharp contrast to...",
      purpose: "Spatial / Structural Direct Contrast",
      example: "In sharp contrast to the complete demolition to the north, the southern shops will be preserved."
    },
    {
      phrase: "Directly adjacent to...",
      purpose: "Spatial Proximity Linker",
      example: "Directly adjacent to the retained housing, a new residential estate will be erected."
    },
    {
      phrase: "Resulting in a marked diminution of...",
      purpose: "Consequence / Area Reduction Connector",
      example: "...resulting in a marked diminution of the municipal park."
    }
  ],

  modelReport: {
    wordCount: 254,
    paragraphs: [
      {
        id: "intro",
        title: "Introduction: Graphic Scope, Map Subjects & Planned Redevelopment",
        text: "The maps illustrate the current layout of the town centre of Islip alongside the proposed transformations for its future redevelopment.",
        wordCount: 20,
        badges: ["Paraphrase", "Current Layout vs Future Redevelopment", "Islip Town Centre", "Zero 'Provided'"]
      },
      {
        id: "overview",
        title: "Macro Overview: 2-Sentence Qualitative Synthesis (Circumscribing Bypass, Pedestrianisation & Expansion)",
        text: "Overall, the town centre is slated to undergo extensive infrastructural modernization, transitioning from a traffic-bisected settlement into a predominantly pedestrianised commercial and residential hub. The most prominent changes involve the construction of a perimeter dual carriageway encircling the central core, alongside substantial residential and commercial expansion to the north and east at the expense of open countryside and recreational parkland.",
        wordCount: 63,
        badges: ["Extensive Modernization", "Encircling Dual Carriageway", "Pedestrianised Hub", "Countryside & Park Reduction"]
      },
      {
        id: "body1",
        title: "Body Paragraph 1: Transport Infrastructure & Northern Sector Transformation",
        text: "Regarding transport infrastructure and the northern sector, the current main road bisecting the town centre will be converted into a pedestrianised thoroughfare. To accommodate through vehicular traffic, a new dual carriageway will be constructed to circumscribe the entire urban core, linking the western and eastern access roads. Furthermore, the northern row of shops will be completely demolished to make way for a newly built bus station, shopping centre, and car park. North-east of this complex, on what is currently open countryside, a new housing development will be erected with dedicated road access.",
        wordCount: 94,
        badges: ["Main Road Pedestrianised", "Dual Carriageway Bypass", "Northern Shops Demolished", "Bus Station, Shopping Centre & Car Park", "North-East Housing in Countryside"]
      },
      {
        id: "body2",
        title: "Body Paragraph 2: Southern Sector Amenities, Housing Expansion & Park Diminution",
        text: "Turning to the southern zone, the existing row of shops will be preserved intact alongside the residential neighborhood immediately to its south. In contrast, the south-eastern sector will undergo noticeable reconfiguration: a second new housing estate will be built, leading to a substantial diminution of the adjacent parkland. Finally, the school in the south-west will be retained, but its existing curved access route will be connected directly to the southern arc of the dual carriageway.",
        wordCount: 77,
        badges: ["Southern Shops Preserved", "South-East Housing Added", "Parkland Diminution", "School Retained with Bypass Link"]
      }
    ]
  }
};
