import type { Task1Data, VocabItem } from "../types";
export type { Task1Data, VocabItem };

export const TASK1_DATA: Task1Data = {
  id: "kimsville-map-transformation",
  taskType: "Two Comparative Maps (2002 vs Today - No Compass)",
  title: "Urban Transformation of Kimsville (2002 to Today)",
  questionText:
    "The maps show the changes made in the town of Kimsville.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
  imageFileName: "kimsville-maps.svg",
  audioUrl: "materials/kimsville-map-transformation-briefing.m4a",
  audioClueText:
    "Today’s task presents two comparative maps illustrating the urban and industrial transformation of the town of Kimsville from 2002 to the present day. Because this visual task does not include a compass rose, students must not use cardinal directions (north, south, east, west) as per IDP IELTS exam conventions. Instead, the unchanging central city centre serves as our essential reference anchor. Notice the changes situated relative to this anchor: directly above it, the shopping centre remains preserved, while the trees in the top-left corner were cleared for new residential apartments. To the left of the city centre, a new train station was built on previously open land. To the right of the central core, the industrial factory was demolished and replaced by a modern software company. Directly beneath the city centre, the old cinema was repurposed into a pub, and the trees in the bottom-left corner gave way to a football stadium, while the remaining woodland clusters in the other corners remained intact.",
  timingSeconds: 180,
  sampleIntro:
    "The two maps illustrate the principal infrastructural and architectural transformations that have taken place in the town of Kimsville between 2002 and the present day.",
  sampleOverview:
    "Overall, Kimsville has undergone extensive modernisation, transitioning from an industrial and semi-rural settlement into a contemporary commercial and residential hub. Taking the central city centre as an anchor point, the town gained a new railway station to the left, modern software offices replacing the former factory to the right, and residential and sports amenities in two opposite corners, while the city centre itself, the shopping centre directly above it, and two woodland zones remained unchanged.",
  mapData: {
    leftAndUpperZone: [
      {
        location: "Top-Left Corner",
        in2002: "Woodland / Trees",
        today: "New Apartments",
        changeType: "constructed",
        category: "residential",
        description: "The cluster of trees in the upper-left corner was cleared to erect high-density residential apartments."
      },
      {
        location: "Directly Above City Centre",
        in2002: "Shopping Centre",
        today: "Shopping Centre",
        changeType: "preserved",
        category: "commercial",
        description: "The retail shopping complex directly above the central core retained its original structure."
      },
      {
        location: "Top-Right Corner",
        in2002: "Woodland / Trees",
        today: "Woodland / Trees",
        changeType: "preserved",
        category: "greenery",
        description: "The woodland in the upper-right corner of the town remained untouched."
      },
      {
        location: "To the Left of City Centre",
        in2002: "Open Land",
        today: "New Train Station",
        changeType: "constructed",
        category: "transport",
        description: "A new railway station was constructed on previously open land on the left-hand side of the city centre."
      }
    ],
    rightAndLowerZone: [
      {
        location: "To the Right of City Centre",
        in2002: "Industrial Factory",
        today: "Software Company",
        changeType: "demolished_replaced",
        category: "commercial",
        description: "The factory to the right of the city centre was demolished and replaced by software company office towers."
      },
      {
        location: "Directly Below City Centre",
        in2002: "Old Cinema",
        today: "Pub",
        changeType: "repurposed",
        category: "leisure",
        description: "The historic cinema building directly beneath the central area underwent adaptive reuse and became a pub."
      },
      {
        location: "Bottom-Left Corner",
        in2002: "Woodland / Trees",
        today: "Football Stadium",
        changeType: "constructed",
        category: "leisure",
        description: "Trees in the lower-left corner were felled to construct a sizeable modern football stadium."
      },
      {
        location: "Bottom-Right Corner",
        in2002: "Woodland / Trees",
        today: "Woodland / Trees",
        changeType: "preserved",
        category: "greenery",
        description: "The natural woodland in the lower-right corner was preserved without alterations."
      },
      {
        location: "Central Anchor",
        in2002: "City Centre",
        today: "City Centre",
        changeType: "preserved",
        category: "commercial",
        description: "The rectangular city centre remained the unchanged central anchor of Kimsville throughout the period."
      }
    ]
  },
  vocabList: [
    {
      word: "relative to the central anchor",
      meaning: "using the fixed city centre as a spatial reference point rather than cardinal directions",
      example: "Describe changes relative to the central anchor when no compass rose is provided."
    },
    {
      word: "situated to the left of the city centre",
      meaning: "locating features on the horizontal left flank of the central core",
      example: "A new train station is situated to the left of the city centre."
    },
    {
      word: "to the right of the central core",
      meaning: "locating features on the horizontal right flank of the central landmark",
      example: "Modern software offices now stand to the right of the central core."
    },
    {
      word: "directly above / beneath the city centre",
      meaning: "describing vertical positions immediately superior or inferior to the anchor",
      example: "The shopping centre lies directly above the city centre, while the pub is situated directly beneath it."
    },
    {
      word: "in the top-left / bottom-left corner",
      meaning: "specifying peripheral corner developments on the map layout",
      example: "A football stadium was constructed in the bottom-left corner of the map."
    },
    {
      word: "undergo substantial modernisation",
      meaning: "experience major contemporary urban redevelopment and infrastructural upgrading",
      example: "Kimsville underwent substantial modernisation between 2002 and the present day."
    },
    {
      word: "give way to / make way for",
      meaning: "be cleared, demolished, or replaced to allow new construction",
      example: "Trees in the upper-left corner gave way to a block of new apartments."
    },
    {
      word: "converted / repurposed into",
      meaning: "adapt an existing building structure for a completely new commercial or public function",
      example: "The historic old cinema was repurposed into a popular pub."
    },
    {
      word: "demolished and replaced by",
      meaning: "tear down an older facility and erect a new structure in its place",
      example: "The polluting factory was demolished and replaced by modern corporate software offices."
    },
    {
      word: "remain virtually intact / unchanged",
      meaning: "undergo no structural alterations or relocations over the observed timeframe",
      example: "The city centre and shopping complex remained virtually intact throughout the period."
    }
  ],
  vocabHunt: [
    "relative to the central anchor",
    "situated to the left of the city centre",
    "to the right of the central core",
    "directly above / beneath the city centre",
    "in the top-left corner",
    "undergo substantial modernisation",
    "converted / repurposed into",
    "demolished and replaced by"
  ],
  bp1: {
    title: "Body 1 — Left-Hand & Upper Sectors (Housing, Transit & Commerce)",
    focus: "Developments situated to the left of and directly above the central city centre anchor.",
    points: [
      "In the top-left corner of the map, the former woodland was cleared to make way for a block of new apartments.",
      "Directly below this, to the left of the city centre, a new train station was erected on previously vacant land, introducing rail connectivity.",
      "Directly above the central area, the shopping centre remained preserved in its original location, as did the cluster of trees in the top-right corner."
    ],
    flow: [
      "Top-Left Corner: Woodland cleared → New Apartments constructed",
      "Left of City Centre: Open Land → New Train Station built",
      "Directly Above: Shopping Centre preserved intact",
      "Top-Right Corner: Woodland preserved unchanged"
    ]
  },
  bp2: {
    title: "Body 2 — Right-Hand & Lower Sectors (Commercial, Leisure & Industry)",
    focus: "Developments situated to the right of and directly below the central city centre anchor.",
    points: [
      "To the right of the city centre, the industrial factory with its smoking chimney was demolished and replaced by modern software company towers, marking a transition toward technology.",
      "Directly below the central core, the old cinema building underwent adaptive reuse and was converted into a pub.",
      "In the bottom-left corner, the trees were felled to construct a sizeable football stadium, whereas the woodland in the bottom-right corner and the central city centre itself remained completely untouched."
    ],
    flow: [
      "Right of City Centre: Factory demolished → Software Company high-rises erected",
      "Directly Below: Old Cinema converted → Pub",
      "Bottom-Left Corner: Trees cleared → Football Stadium built",
      "Bottom-Right & Center: Trees and City Centre preserved intact"
    ]
  },
  processingGroups: [
    {
      title: "ANCHOR-BASED RELATIONAL POSITIONS (NO COMPASS)",
      items: [
        "taking the central city centre as an anchor",
        "situated to the left / right of the city centre",
        "directly above / beneath the central core",
        "occupying the top-left / bottom-left corner"
      ]
    },
    {
      title: "DEMOLITION & REPLACEMENT",
      items: [
        "was demolished to make way for",
        "was cleared to accommodate",
        "was replaced by modern high-rise",
        "gave way to the construction of"
      ]
    },
    {
      title: "CONVERSION & ADAPTIVE REUSE",
      items: [
        "was converted / transformed into",
        "underwent adaptive reuse as a",
        "was repurposed from a cinema into a pub",
        "retained its structure with altered utility"
      ]
    }
  ],
  connectors: [
    {
      phrase: "Taking the city centre as an anchor",
      purpose: "establishing the fixed reference landmark required by IDP IELTS rules",
      example: "Taking the city centre as an anchor, major transformations occurred on both sides."
    },
    {
      phrase: "To the left of the city centre",
      purpose: "locating features horizontally without cardinal directions",
      example: "To the left of the city centre, a new train station was constructed."
    },
    {
      phrase: "On the opposite side to the right",
      purpose: "balancing spatial contrast across the central landmark",
      example: "On the opposite side to the right, a software company replaced the former factory."
    },
    {
      phrase: "Directly above / beneath",
      purpose: "describing vertical orientation relative to the core",
      example: "Directly above the central area, the shopping centre remained unchanged."
    },
    {
      phrase: "In the top-left / bottom-left corner",
      purpose: "specifying peripheral corner developments",
      example: "In the top-left corner, trees were cleared for new apartments."
    },
    {
      phrase: "Underwent adaptive reuse",
      purpose: "describing functional conversion of an existing building",
      example: "The old cinema underwent adaptive reuse, reopening as a pub."
    },
    {
      phrase: "Ultimately",
      purpose: "synthesising the overarching spatial transformation",
      example: "Ultimately, Kimsville evolved from an industrial outpost into a well-connected modern town."
    }
  ]
};
