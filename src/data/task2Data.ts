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

export const CAUSES_IDEA_BANK: IdeaBankItem[] = [
  {
    id: "cause-1",
    badge: "Cause 01 • Satellite Services Demand",
    title: "Growing demand for satellite-based services",
    mainIdea: "Modern society increasingly depends on satellite technology for internet connectivity, GPS navigation, weather forecasting and communication. Consequently, companies are launching large numbers of satellites to meet this demand.",
    supportingReason: "Rapid expansion in consumer telecommunications and navigation needs drives commercial providers to place extensive satellite networks in near-Earth orbit.",
    example: "Satellite internet providers deploy thousands of small satellites to deliver broadband connectivity to remote areas.",
    collocations: ["satellite-based services", "broadband connectivity", "growing demand", "satellite technology"]
  },
  {
    id: "cause-2",
    badge: "Cause 02 • Commercial Space Race",
    title: "Commercialisation of space exploration",
    mainIdea: "The growing involvement of private companies has made space activities more commercially attractive. Businesses are competing to develop satellite networks and launch services, increasing the frequency of rocket launches.",
    supportingReason: "Private capital and declining launch costs have turned near-Earth space into an active competitive commercial marketplace.",
    example: "Private aerospace companies regularly conduct launches to deploy satellites and provide services to other organisations.",
    collocations: ["commercialisation of space", "private aerospace", "commercial satellite networks", "launch frequency"]
  },
  {
    id: "cause-3",
    badge: "Cause 03 • Derelict Space Junk",
    title: "Abandoned satellites and rocket components",
    mainIdea: "Many satellites eventually stop functioning, while discarded rocket stages and other equipment may remain in orbit. Without proper disposal procedures, these objects accumulate over time.",
    supportingReason: "Hardware left in orbit without dedicated deorbit systems circles the planet indefinitely as hazardous floating metal debris.",
    example: "A satellite that has completed its operational life may remain in orbit if it is not moved to a safer disposal orbit or deorbited.",
    collocations: ["abandoned satellites", "discarded rocket stages", "disposal procedures", "orbital accumulation"]
  },
  {
    id: "cause-4",
    badge: "Cause 04 • Cascading Collision Risk",
    title: "Collisions and fragmentation",
    mainIdea: "When satellites or other orbital objects collide, they can break into thousands of smaller fragments. These fragments may remain in orbit and create further collision risks.",
    supportingReason: "High-speed orbital impacts pulverize larger bodies into clouds of untrackable shrapnel, compounding the danger for all operational missions.",
    example: "The destruction of an old satellite during an accidental collision can produce debris that threatens other functioning spacecraft.",
    collocations: ["orbital collisions", "satellite fragmentation", "debris cloud", "collision risks"]
  },
  {
    id: "cause-5",
    badge: "Cause 05 • Geopolitical Interests",
    title: "International competition and strategic interests",
    mainIdea: "Countries are investing heavily in space technology for scientific, economic and national-security purposes. This competition can encourage frequent launches without sufficient attention to the long-term environmental consequences.",
    supportingReason: "National security priorities and technological prestige often take precedence over international debris-mitigation agreements.",
    example: "Governments may prioritise establishing satellite networks and strengthening space capabilities over investing in debris-management systems.",
    collocations: ["international competition", "strategic interests", "national security", "space capabilities"]
  }
];

export const SOLUTIONS_IDEA_BANK: IdeaBankItem[] = [
  {
    id: "sol-1",
    badge: "Solution 01 • Active Removal Tech",
    title: "Develop active debris-removal technology",
    mainIdea: "Space agencies and private companies should invest in spacecraft capable of capturing and removing dangerous debris from orbit.",
    supportingReason: "Targeting and deorbiting the heaviest defunct satellites directly eliminates the highest-risk collision hazards.",
    example: "Robotic spacecraft could attach to defunct satellites and guide them towards controlled re-entry into Earth's atmosphere.",
    collocations: ["active debris removal", "robotic spacecraft", "controlled re-entry", "defunct satellites"]
  },
  {
    id: "sol-2",
    badge: "Solution 02 • Disposal Protocols",
    title: "Enforce responsible satellite disposal",
    mainIdea: "Satellite operators should be required to remove inactive satellites from valuable orbital regions within a specified period after their missions end.",
    supportingReason: "Ensuring spacecraft vacate crowded orbits prevents dead hardware from cluttering prime operational altitudes.",
    example: "Operators could design satellites with propulsion systems that allow them to descend safely towards Earth's atmosphere after completing their operational lives.",
    collocations: ["responsible disposal", "propulsion systems", "post-mission descent", "inactive satellites"]
  },
  {
    id: "sol-3",
    badge: "Solution 03 • Surveillance & Warning",
    title: "Improve satellite tracking and collision prevention",
    mainIdea: "Countries should strengthen space surveillance systems to monitor objects in orbit and identify potential collisions before they occur.",
    supportingReason: "Precise real-time radar tracking enables mission controllers to detect hazardous flybys early and execute evasive burns.",
    example: "Satellite operators can receive collision warnings and adjust spacecraft trajectories to avoid dangerous encounters.",
    collocations: ["space surveillance", "collision warnings", "trajectory adjustment", "space tracking"]
  },
  {
    id: "sol-4",
    badge: "Solution 04 • Regulatory Governance",
    title: "Introduce stricter international regulations",
    mainIdea: "Governments should cooperate to establish common standards for satellite launches, orbital disposal and debris prevention.",
    supportingReason: "A unified global regulatory standard holds private corporations and nations equally accountable for sustainable operations.",
    example: "International agreements could make responsible disposal plans compulsory before a satellite receives launch approval.",
    collocations: ["international regulations", "common standards", "compulsory disposal plans", "launch approval"]
  },
  {
    id: "sol-5",
    badge: "Solution 05 • Sustainable Engineering",
    title: "Design satellites for sustainability",
    mainIdea: "Manufacturers should develop spacecraft that are easier to repair, reuse or safely dispose of once their missions are completed.",
    supportingReason: "Building satellites with modular hardware and non-fragmenting materials prevents debris generation at the engineering stage.",
    example: "Satellites could be designed with reliable deorbiting mechanisms and components that minimise the creation of additional fragments.",
    collocations: ["design for sustainability", "deorbiting mechanisms", "fragmentation minimisation", "spacecraft design"]
  }
];

export const TASK2_DATA: Task2Data = {
  id: "satellite-launches-space-debris-causes-solutions",

  taskType: "Causes & Solutions Essay",

  title: "IELTS Writing Task 2 — Satellite Launches & Space Debris",

  questionText:
    "The increasing frequency of the satellite launches & space debris is becoming a threat to the Earth.\n\n• What are the main causes?\n• What measures can be taken to address this?",

  audioUrl: "materials/Taxation_and_Public_Services_Briefing.m4a",

  timingSeconds: 180,

  recommendedPosition:
    "Two-Part Linked Causes & Solutions: Orbital endangerment is primarily catalyzed by the rapid proliferation of commercial mega-constellations and decades of discarded rocket hardware; however, this crisis can be mitigated through mandatory built-in self-deorbiting propulsion and multilateral active robotic cleanup accords.",

  strongestArgument:
    "Compelling commercial satellite operators to install automated self-deorbiting mechanisms and establishing enforceable UN treaties with mandatory orbital remediation bonds provides direct technological and legal remedies.",

  // 1. Sample introduction planning points
  introPlanningPoints: [
    "Sentence 1 (Paraphrase): In contemporary times, the exponential escalation in satellite launches and the accumulation of space debris orbiting Earth have emerged as severe planetary and technological threats.",
    "Sentence 2 (Thesis): This critical crisis is primarily driven by the commercial space race and inadequate post-mission disposal protocols; however, it can be mitigated through mandatory self-deorbiting mechanisms and international space debris remediation treaties."
  ],

  sampleIntro:
    "In contemporary times, the exponential escalation in satellite launches and the accumulation of space debris orbiting Earth have emerged as severe planetary and technological threats. This critical crisis is primarily driven by the commercial space race and inadequate post-mission disposal protocols; however, it can be mitigated through mandatory self-deorbiting mechanisms and international space debris remediation treaties.",

  sampleConclusion:
    "In conclusion, the escalating menace of orbital overcrowding is driven primarily by the rapid expansion of commercial satellite constellations and the presence of uncontrolled legacy space debris. However, this planetary crisis can be effectively resolved through the mandatory enforcement of automated self-deorbiting thrusters alongside international robotic debris removal missions. Moving forward, the global community must swiftly adopt an updated, legally binding United Nations space sustainability treaty before low-Earth orbit becomes permanently unusable.",

  // 2. Five-minute planning map: 5 Causes + 5 Solutions (Student Idea Bank)
  fiveMinutePlanningMap: {
    causes: [
      {
        id: "c1",
        label: "Growing demand for satellite-based services",
        note: "Modern society increasingly depends on satellite technology for internet connectivity, GPS navigation, weather forecasting and communication."
      },
      {
        id: "c2",
        label: "Commercialisation of space exploration",
        note: "The growing involvement of private companies has made space activities commercially attractive, increasing the frequency of rocket launches."
      },
      {
        id: "c3",
        label: "Abandoned satellites and rocket components",
        note: "Many satellites stop functioning, while discarded rocket stages remain in orbit without proper disposal procedures, accumulating over time."
      },
      {
        id: "c4",
        label: "Collisions and fragmentation",
        note: "When satellites or other orbital objects collide, they break into thousands of smaller fragments that create further collision risks."
      },
      {
        id: "c5",
        label: "International competition and strategic interests",
        note: "Countries invest heavily in space technology for national security, encouraging frequent launches with insufficient attention to debris."
      }
    ],
    solutions: [
      {
        id: "s1",
        label: "Develop active debris-removal technology",
        note: "Space agencies and private companies should invest in spacecraft capable of capturing and removing dangerous debris from orbit."
      },
      {
        id: "s2",
        label: "Enforce responsible satellite disposal",
        note: "Satellite operators should be required to remove inactive satellites from valuable orbital regions within a specified period."
      },
      {
        id: "s3",
        label: "Improve satellite tracking and collision prevention",
        note: "Countries should strengthen space surveillance systems to monitor objects in orbit and identify potential collisions before they occur."
      },
      {
        id: "s4",
        label: "Introduce stricter international regulations",
        note: "Governments should cooperate to establish common standards for satellite launches, orbital disposal and debris prevention."
      },
      {
        id: "s5",
        label: "Design satellites for sustainability",
        note: "Manufacturers should develop spacecraft that are easier to repair, reuse or safely dispose of once their missions are completed."
      }
    ]
  },

  causesIdeaBank: CAUSES_IDEA_BANK,
  solutionsIdeaBank: SOLUTIONS_IDEA_BANK,

  // 3. Body paragraphs matching the MANDATORY LINKED STRUCTURE:
  // Body 1: Cause 1 + Solution 1 + Example
  // Body 2: Cause 2 + Solution 2 + Example
  bodyParagraphs: [
    {
      paraNumber: 1,
      side: "strong_opinion",
      title: "Body Para 1: Cause 1 + Solution 1 + Example",
      theme: "Commercial Mega-Constellations + Mandatory Automated Self-Deorbiting",
      mainReason:
        "The primary catalyst for orbital overcrowding is the rapid proliferation of commercial satellite constellations launched by private aerospace corporations.",
      supportingReasons:
        "With thousands of mass-produced orbiters deployed in dense orbital shells, low-Earth orbital highways have become dangerously congested; to counteract this, regulators must mandate automated self-deorbiting thrusters that guide defunct units into the atmosphere to vaporize safely.",
      example:
        "For instance, requiring commercial broadband fleets such as Starlink to equip every orbiter with autonomous thrusters guarantees they lower altitude and incinerate in the atmosphere within five years of retirement.",
      band9Snippet:
        "“Primarily, the unregulated proliferation of commercial satellite mega-constellations severely congests low-Earth orbit, necessitating mandatory automated deorbiting thrusters to ensure defunct units re-enter and vaporize safely.”",
      alternativeReasons: [
        {
          id: "cause-sol-1",
          badge: "Pairing 01 • Commercial Constellations & Auto-Deorbiting",
          title: "Commercial Mega-Constellations & Mandatory Re-Entry",
          category: "standard",
          mainReason:
            "Private aerospace enterprises are launching thousands of low-orbit satellites for broadband coverage, severely overcrowding critical orbital pathways.",
          supportingReasons:
            "When thousands of mass-produced orbiters occupy narrow altitude shells, the probability of catastrophic orbital gridlock escalates rapidly.",
          example:
            "Commercial internet fleets launching up to 60 satellites in a single rocket without standardized global altitude caps.",
          band9Snippet:
            "“First and foremost, the exponential growth of private aerospace fleets creates extreme orbital saturation, demanding strict engineering requirements for automated atmospheric burn-up.”",
          modelParagraph:
            "To begin with, the primary catalyst for orbital overcrowding is the rapid proliferation of commercial satellite constellations launched by private aerospace enterprises. With thousands of low-Earth orbit (LEO) satellites deployed simultaneously for telecommunications, orbital pathways are becoming dangerously congested. To mitigate this hazard, international regulatory bodies must mandate self-deorbiting mechanisms on all newly manufactured satellites. Equipping orbiters with automated propulsive thrusters or passive drag sails ensures that defunct hardware re-enters Earth's atmosphere and vaporizes safely upon mission conclusion. For instance, aerospace regulations requiring commercial fleets like Starlink to execute automated atmospheric burn-up within five years of retirement would substantially reduce long-term collision risks.",
          examinerNotes:
            "Perfect cause-solution linkage: directly links private commercial saturation to automated engineering deorbiting solutions."
        },
        {
          id: "cause-sol-2",
          badge: "Pairing 02 • Abandoned Rocket Stages & Standardized Disposal",
          title: "Spent Rocket Stages & Compulsory Atmospheric Disposal",
          category: "standard",
          mainReason:
            "Launch vehicles routinely discard empty upper rocket stages and booster casings in orbit, leaving massive metal hazards floating indefinitely.",
          supportingReasons:
            "Residual propellants inside abandoned booster tanks can explode over time due to solar radiation, generating thousands of sharp metal shards.",
          example:
            "Derelict rocket booster casings from past decades continuing to circle the Earth as uncontrolled multi-ton kinetic projectiles.",
          band9Snippet:
            "“Furthermore, discarding massive booster stages without controlled deorbit burns turns orbital corridors into hazardous obstacle courses, requiring mandatory fuel venting and tethered drag disposal.”",
          modelParagraph:
            "In addition, space launches frequently abandon expended upper rocket stages in orbit once payloads are released. Over decades, leftover propellants inside these floating fuel tanks degrade and detonate, scattering jagged metallic shrapnel across orbital corridors. To counteract this neglect, launch licensing agencies must enforce mandatory controlled deorbit burns on all booster stages immediately following payload deployment. Requiring aerospace contractors to retain sufficient propellant for a targeted ocean re-entry ensures that massive rocket bodies are removed before they can fragment into dangerous projectiles.",
          examinerNotes:
            "Highlights the physical danger of exploded boosters and presents a practical propulsion disposal mandate."
        }
      ]
    },
    {
      paraNumber: 2,
      side: "strong_opinion",
      title: "Body Para 2: Cause 2 + Solution 2 + Example",
      theme: "Legacy Debris & Cascading Shrapnel + Active Debris Removal Treaties",
      mainReason:
        "Another critical hazard is the accumulation of legacy orbital debris and cascading hypervelocity collisions (the Kessler syndrome), left unchecked by outdated space laws.",
      supportingReasons:
        "Dead satellites travel at hypervelocity speeds of over 25,000 km/h, meaning even millimeter-sized fragments can shatter operating spacecraft; resolving this requires active debris removal (ADR) technology backed by binding UN space treaties.",
      example:
        "For example, the European Space Agency's ClearSpace-1 initiative plans to deploy robotic capture arms and magnetic grapplers to capture and deorbit defunct satellite bodies.",
      band9Snippet:
        "“Furthermore, decades of abandoned space shrapnel threaten catastrophic kinetic collisions, demanding international investment in active debris removal technologies and binding UN orbital treaties.”",
      alternativeReasons: [
        {
          id: "cause-sol-3",
          badge: "Pairing 03 • Cascading Collisions & Robotic Debris Removal",
          title: "Kessler Syndrome Cascades & Active Robotic Salvage",
          category: "standard",
          mainReason:
            "Decades of accumulated space junk create a cascading chain reaction where collisions produce more shrapnel, exponentially multiplying debris.",
          supportingReasons:
            "High-speed kinetic impacts between derelict objects pulverize metal into untrackable clouds that threaten space stations and Earth satellites alike.",
          example:
            "The 2009 collision between the Cosmos and Iridium satellites which generated over 2,000 pieces of cataloged debris in seconds.",
          band9Snippet:
            "“Moreover, unchecked orbital debris risks triggering the Kessler syndrome, necessitating active debris removal craft equipped with robotic arms, nets, and magnetic clamps.”",
          modelParagraph:
            "Furthermore, the hazard is exacerbated by decades of abandoned space junk and kinetic orbital collisions, which shatter defunct hardware into thousands of untrackable, hypervelocity fragments. A minor paint fleck traveling at orbital velocity can catastrophically pierce space stations, while uncontrolled dead satellites threaten satellite communication networks. The most viable remedy is the rapid deployment of Active Debris Removal (ADR) missions governed by legally binding international treaties. Space agencies must collaborate to finance robotic capture craft equipped with harpoons, nets, and magnetic claws to deorbit hazardous derelict objects. A prime example is the European Space Agency's ClearSpace-1 project, which aims to rendezvous with and capture a discarded rocket stage, demonstrating that technological remediation can actively purge congested orbits.",
          examinerNotes:
            "Articulates the scientific concept of cascading collisions and couples it with state-of-the-art robotic cleanup missions."
        },
        {
          id: "cause-sol-4",
          badge: "Pairing 04 • Unregulated Space Treaties & UN Quota Frameworks",
          title: "Outdated Outer Space Treaties & Global Launch Quotas",
          category: "additional",
          mainReason:
            "The 1967 Outer Space Treaty fails to regulate modern commercial launches, offering no financial penalties or cleanup obligations for space polluters.",
          supportingReasons:
            "Without multilateral legal accountability, individual nations and private corporations have zero economic incentive to limit launches or clean up orbits.",
          example:
            "Nations conducting destructive anti-satellite (ASAT) missile tests without facing international financial sanctions or legal consequences.",
          band9Snippet:
            "“Crucially, the absence of binding international legislation allows corporations and nations to pollute orbital lanes with impunity, requiring an updated UN space sustainability accord.”",
          modelParagraph:
            "Crucially, the root cause of this crisis is the inadequacy of current international space law. The foundational Outer Space Treaty of 1967 was formulated long before commercial spaceflight existed, leaving low-Earth orbit completely devoid of enforceable pollution quotas or corporate liability. Consequently, operators face no legal penalties for abandoning defective hardware. To establish order, the United Nations Office for Outer Space Affairs (UNOOSA) must formulate a legally binding space governance framework. Under this treaty, all nations would enforce strict launch quotas and require operators to contribute to an international orbital remediation bond prior to launch authorization.",
          examinerNotes:
            "Analyzes the geopolitical and legal root causes and proposes an enforceable United Nations multilateral framework."
        }
      ]
    }
  ],

  // 4. Academic Vocabulary List (12 Genuine Band 8.5/9 Space & Environmental Items)
  vocabList: [
    {
      word: "Proliferation",
      definition: "Rapid increase in numbers, volume, or spread of something.",
      phonetic: "/prəˌlɪf.əˈreɪ.ʃən/",
      term: "Proliferation",
      meaning: "Rapid increase in numbers, volume, or spread of something.",
      example: "The rapid proliferation of commercial satellite constellations has severely congested low-Earth orbit.",
      sampleSentence: "The rapid proliferation of commercial satellite constellations has severely congested low-Earth orbit.",
      collocations: ["rapid proliferation", "satellite proliferation", "commercial proliferation"]
    },
    {
      word: "Congested",
      definition: "Extremely crowded and blocked with traffic or objects.",
      phonetic: "/kənˈdʒes.tɪd/",
      term: "Congested",
      meaning: "Extremely crowded and blocked with traffic or objects.",
      example: "Critical low-Earth orbital lanes are becoming dangerously congested, raising collision risks.",
      sampleSentence: "Critical low-Earth orbital lanes are becoming dangerously congested, raising collision risks.",
      collocations: ["congested orbits", "dangerously congested", "congested pathways"]
    },
    {
      word: "Defunct",
      definition: "No longer existing, operating, or functioning.",
      phonetic: "/dɪˈfʌŋkt/",
      term: "Defunct",
      meaning: "No longer existing, operating, or functioning.",
      example: "Thousands of defunct satellites remain adrift in space, posing severe collision hazards to active spacecraft.",
      sampleSentence: "Thousands of defunct satellites remain adrift in space, posing severe collision hazards to active spacecraft.",
      collocations: ["defunct satellites", "defunct hardware", "defunct equipment"]
    },
    {
      word: "Catastrophic",
      definition: "Involving or causing sudden, disastrous damage and ruin.",
      phonetic: "/ˌkæt.əˈstrɒf.ɪk/",
      term: "Catastrophic",
      meaning: "Involving or causing sudden, disastrous damage and ruin.",
      example: "A single hypervelocity impact could trigger a catastrophic chain reaction of orbital collisions.",
      sampleSentence: "A single hypervelocity impact could trigger a catastrophic chain reaction of orbital collisions.",
      collocations: ["catastrophic collision", "catastrophic damage", "catastrophic chain reaction"]
    },
    {
      word: "Remediation",
      definition: "The act of reversing, correcting, or cleaning up environmental damage.",
      phonetic: "/rɪˌmiː.diˈeɪ.ʃən/",
      term: "Remediation",
      meaning: "The act of reversing, correcting, or cleaning up environmental damage.",
      example: "Active orbital remediation craft are essential to capture and deorbit massive derelict rocket bodies.",
      sampleSentence: "Active orbital remediation craft are essential to capture and deorbit massive derelict rocket bodies.",
      collocations: ["orbital remediation", "environmental remediation", "remediation technology"]
    },
    {
      word: "Decommission",
      definition: "To officially withdraw an installation, spacecraft, or vessel from operational service.",
      phonetic: "/ˌdiː.kəˈmɪʃ.ən/",
      term: "Decommission",
      meaning: "To officially withdraw an installation, spacecraft, or vessel from operational service.",
      example: "Space agencies must enforce protocols to decommission and burn up satellites within five years of mission end.",
      sampleSentence: "Space agencies must enforce protocols to decommission and burn up satellites within five years of mission end.",
      collocations: ["decommission satellites", "safely decommission", "post-mission decommission"]
    },
    {
      word: "Hypervelocity",
      definition: "Extremely high speed, typically exceeding 3,000 meters per second.",
      phonetic: "/ˌhaɪ.pə.vəˈlɒs.ɪ.ti/",
      term: "Hypervelocity",
      meaning: "Extremely high speed, typically exceeding 3,000 meters per second.",
      example: "Even millimeter-sized flecks of paint traveling at hypervelocity speeds can shatter spacecraft hulls.",
      sampleSentence: "Even millimeter-sized flecks of paint traveling at hypervelocity speeds can shatter spacecraft hulls.",
      collocations: ["hypervelocity impact", "hypervelocity speeds", "hypervelocity projectile"]
    },
    {
      word: "Derelict",
      definition: "Abandoned, dilapidated, and discarded by the owner.",
      phonetic: "/ˈder.ə.lɪkt/",
      term: "Derelict",
      meaning: "Abandoned, dilapidated, and discarded by the owner.",
      example: "Derelict rocket stages continue to circle the globe as multi-ton uncontrollable kinetic missiles.",
      sampleSentence: "Derelict rocket stages continue to circle the globe as multi-ton uncontrollable kinetic missiles.",
      collocations: ["derelict rocket stages", "derelict satellites", "derelict craft"]
    },
    {
      word: "Mitigate",
      definition: "To make less severe, serious, painful, or damaging.",
      phonetic: "/ˈmɪt.ɪ.ɡeɪt/",
      term: "Mitigate",
      meaning: "To make less severe, serious, painful, or damaging.",
      example: "Mandatory deorbiting thrusters can substantially mitigate the dangers of low-Earth orbit saturation.",
      sampleSentence: "Mandatory deorbiting thrusters can substantially mitigate the dangers of low-Earth orbit saturation.",
      collocations: ["mitigate collision risks", "mitigate orbital hazards", "mitigate the threat"]
    },
    {
      word: "Shrapnel",
      definition: "Fragments of a bomb, shell, or shattered object thrown out by an explosion or collision.",
      phonetic: "/ˈʃræp.nəl/",
      term: "Shrapnel",
      meaning: "Fragments of a bomb, shell, or shattered object thrown out by an explosion or collision.",
      example: "Exploding booster tanks scatter millions of tiny pieces of untrackable metallic shrapnel.",
      sampleSentence: "Exploding booster tanks scatter millions of tiny pieces of untrackable metallic shrapnel.",
      collocations: ["metallic shrapnel", "orbital shrapnel", "clouds of shrapnel"]
    },
    {
      word: "Multilateral",
      definition: "Agreed upon, conducted by, or participated in by three or more governments or parties.",
      phonetic: "/ˌmʌl.tiˈlæt.ər.əl/",
      term: "Multilateral",
      meaning: "Agreed upon, conducted by, or participated in by three or more governments or parties.",
      example: "Solving orbital space junk requires a robust multilateral treaty with enforceable international sanctions.",
      sampleSentence: "Solving orbital space junk requires a robust multilateral treaty with enforceable international sanctions.",
      collocations: ["multilateral treaty", "multilateral cooperation", "multilateral framework"]
    },
    {
      word: "Sustainable",
      definition: "Able to be maintained over time without depleting resources or causing ecological collapse.",
      phonetic: "/səˈsteɪ.nə.bl/",
      term: "Sustainable",
      meaning: "Able to be maintained over time without depleting resources or causing ecological collapse.",
      example: "Enforcing responsible satellite disposal is critical to ensure sustainable outer space exploration.",
      sampleSentence: "Enforcing responsible satellite disposal is critical to ensure sustainable outer space exploration.",
      collocations: ["sustainable space exploration", "sustainable orbital environment", "sustainable practices"]
    }
  ],

  vocabHunt: [
    "proliferation",
    "congested",
    "defunct",
    "catastrophic",
    "remediation",
    "decommission",
    "hypervelocity",
    "derelict",
    "mitigate",
    "shrapnel",
    "multilateral",
    "sustainable"
  ],

  // 5. Power Expressions
  powerExpressions: [
    {
      expression: "Unchecked commercial proliferation",
      meaning: "The rapid, unregulated mass deployment of private satellites overloading orbital corridors",
      example: "Unchecked commercial proliferation has led to unprecedented satellite crowding."
    },
    {
      expression: "Cascading hypervelocity collisions",
      meaning: "Chain-reaction kinetic impacts where shattered fragments create further collisions (Kessler syndrome)",
      example: "Cascading hypervelocity collisions could render low-Earth orbit completely unusable for generations."
    },
    {
      expression: "Autonomous atmospheric re-entry",
      meaning: "Pre-programmed thrusters that automatically steer dead spacecraft into Earth's atmosphere to burn up",
      example: "Satellites must be engineered with autonomous atmospheric re-entry thrusters."
    },
    {
      expression: "Active orbital remediation",
      meaning: "Direct technological missions to capture and deorbit existing space junk using robotic salvage craft",
      example: "Active orbital remediation is essential to remove multi-ton derelict rocket stages."
    },
    {
      expression: "Multilateral space sustainability treaty",
      meaning: "A legally binding global agreement with mandatory corporate disposal bonds and launch caps",
      example: "World governments must ratify a multilateral space sustainability treaty."
    }
  ],

  // 6. Strategic Linker Groups
  strategicLinkers: [
    {
      id: "intro-linkers",
      zone: "Zone 1: Introductory Discourse & Thesis",
      title: "Introduction: Paraphrase & Thesis Linkers",
      themeColor: "#9333ea",
      badge: "Intro Architecture",
      badgeText: "Intro Architecture",
      academicRole: "Establishes contextual gravity and maps causes and solutions.",
      placementRule: "Use to paraphrase the prompt and state a clear causes and solutions thesis",
      zoneGroup: {
        zoneName: "Introductory Discourse",
        placementRule: "Deploy Sentence 1 to contextualize the threat, and Sentence 2 to roadmap causes and solutions."
      },
      items: [
        {
          phrase: "In contemporary times / In recent decades",
          functionDesc: "Formal academic substitute for 'Nowadays' establishing current urgency.",
          example: "In contemporary times, the exponential escalation of orbital satellite launches has triggered profound alarms."
        },
        {
          phrase: "This critical crisis is primarily driven by... however, it can be mitigated through...",
          functionDesc: "Symmetrical causes-and-solutions thesis sentence pairing.",
          example: "This critical crisis is primarily driven by commercial launch proliferation and uncurbed space shrapnel; however, it can be mitigated through mandated deorbit protocols and active debris removal."
        }
      ],
      linkers: [
        {
          linker: "In contemporary times",
          functionNote: "Formal academic substitute for 'Nowadays' establishing current urgency."
        },
        {
          linker: "This critical crisis is primarily driven by... however, it can be mitigated through...",
          functionNote: "Symmetrical causes-and-solutions thesis sentence pairing."
        }
      ]
    },
    {
      id: "body1-linkers",
      zone: "Zone 2: Cause 1 + Solution 1 Progression",
      title: "Body 1: Cause 1 + Solution 1 Linkers",
      themeColor: "#2563eb",
      badge: "Body 1 Progression",
      badgeText: "Body 1 Progression",
      academicRole: "Introduces the commercial launch cause and links it directly to the technical solution.",
      placementRule: "Use to introduce the primary cause (commercial constellations) and immediately link it to the primary technical solution (self-deorbiting thrusters)",
      zoneGroup: {
        zoneName: "Pillar 1 Architecture",
        placementRule: "Open with Cause 1, develop the risk, then present Solution 1 with concrete examples."
      },
      items: [
        {
          phrase: "To begin with / The foremost catalyst behind this crisis is...",
          functionDesc: "Signals the primary catalyst (commercial mega-constellations).",
          example: "The foremost catalyst behind this crisis is the rapid expansion of private commercial space enterprises deploying massive mega-constellations."
        },
        {
          phrase: "To counteract this escalating hazard / To mitigate this risk, authorities must mandate...",
          functionDesc: "Pivots seamlessly from the cause to the targeted technological remedy.",
          example: "To counteract this escalating hazard, aviation authorities must legally mandate that all satellites incorporate automated self-deorbiting thrusters."
        },
        {
          phrase: "For instance / A clear illustration is",
          functionDesc: "Introduces concrete real-world evidence (Starlink 5-year deorbit rule).",
          example: "A clear illustration is the recent regulatory requirement compelling low-Earth operators to safely deorbit craft within five years of mission end."
        }
      ],
      linkers: [
        {
          linker: "To begin with / First and foremost",
          functionNote: "Signals the primary catalyst (commercial mega-constellations)."
        },
        {
          linker: "To mitigate this hazard / To counteract this trend",
          functionNote: "Pivots seamlessly from the cause to the targeted technological remedy."
        },
        {
          linker: "For instance / A clear illustration is",
          functionNote: "Introduces concrete real-world evidence (Starlink 5-year deorbit rule)."
        }
      ]
    },
    {
      id: "body2-linkers",
      zone: "Zone 3: Cause 2 + Solution 2 Progression",
      title: "Body 2: Cause 2 + Solution 2 Linkers",
      themeColor: "#059669",
      badge: "Body 2 Progression",
      badgeText: "Body 2 Progression",
      academicRole: "Introduces the cascading debris hazard and connects to active robotic cleanup and UN treaties.",
      placementRule: "Use to introduce the secondary cause (cascading legacy debris) and link it to the secondary solution (robotic cleanup and global treaties)",
      zoneGroup: {
        zoneName: "Pillar 2 Architecture",
        placementRule: "Open with Cause 2 (Kessler syndrome), then introduce Solution 2 (ADR robotics + treaties)."
      },
      items: [
        {
          phrase: "Furthermore / Compounding this predicament is...",
          functionDesc: "Transitions to the second major cause (legacy debris and cascading collisions).",
          example: "Furthermore, compounding this predicament is the accumulation of defunct satellites and rocket stages that spawn thousands of hypervelocity shrapnel pieces."
        },
        {
          phrase: "The most viable remedy involves / An indispensable countermeasure is...",
          functionDesc: "Pivots directly to active robotic removal and multilateral treaties.",
          example: "The most viable remedy involves investing in active robotic remediation technologies, complemented by a binding United Nations space treaty."
        },
        {
          phrase: "A prime example is / Exemplifying this approach is...",
          functionDesc: "Grounds the argument with verifiable initiatives (ESA ClearSpace-1).",
          example: "Exemplifying this approach is the European Space Agency's ClearSpace-1 mission, designed to capture derelict rocket debris using robotic tentacles."
        }
      ],
      linkers: [
        {
          linker: "Furthermore / In addition to this",
          functionNote: "Transitions to the second major cause (legacy debris and shrapnel)."
        },
        {
          linker: "The most viable remedy is / An indispensable countermeasure is",
          functionNote: "Pivots directly to active robotic removal and multilateral treaties."
        },
        {
          linker: "A prime example is / Exemplifying this approach is",
          functionNote: "Grounds the argument with verifiable initiatives (ESA ClearSpace-1)."
        }
      ]
    },
    {
      id: "conclusion-linkers",
      zone: "Zone 4: Concluding Synthesis & Policy Recommendation",
      title: "Conclusion: Sum-Up & Recommendation Linkers",
      themeColor: "#0f766e",
      badge: "Conclusion Synthesis",
      badgeText: "Conclusion Synthesis",
      academicRole: "Recaps causes and solutions, then offers a forward-looking policy suggestion.",
      placementRule: "Use in the final paragraph to recap both cause-solution pairings and offer a forward-looking recommendation",
      zoneGroup: {
        zoneName: "Concluding Synthesis",
        placementRule: "Sentence 1 synthesizes both causes; Sentence 2 recaps solutions; Sentence 3 provides the policy recommendation."
      },
      items: [
        {
          phrase: "In conclusion / To conclude",
          functionDesc: "Definitive marker signaling the final synthesis.",
          example: "In conclusion, while commercial expansion and derelict debris severely jeopardize orbital lanes, strict technical mandates and international robotic missions offer effective solutions."
        },
        {
          phrase: "Moving forward, it is imperative that...",
          functionDesc: "Transitions smoothly into the forward-looking global recommendation.",
          example: "Moving forward, it is imperative that global governments sign a multilateral treaty imposing mandatory launch deposits to guarantee orbital sustainability."
        }
      ],
      linkers: [
        {
          linker: "In conclusion / To conclude",
          functionNote: "Definitive marker signaling the final synthesis."
        },
        {
          linker: "Moving forward, it is imperative that...",
          functionNote: "Transitions smoothly into the forward-looking global recommendation."
        }
      ]
    }
  ],

  // 7. Brainstorm Cards (UNDER 5 STEPS: EXACTLY 4 CARDS, ACCURATE & CUT-TO-THE-CHASE)
  brainstormCards: [
    {
      id: "card-1",
      stepNum: 1,
      badge: "Cause 01 • Orbital Saturation",
      title: "Commercial Mega-Constellations",
      question: "What is the primary commercial cause driving the sudden overcrowding of near-Earth orbit?",
      thinkingLens: "Focus on the transition from government missions to private aerospace corporations mass-producing satellite fleets.",
      selfCheck: "Did you mention mega-constellations like broadband networks filling narrow orbital lanes?",
      idea: "Private aerospace enterprises deploy thousands of mass-produced broadband satellites, dangerously saturating low-Earth orbital highways.",
      promptInsight: "Private broadband fleets launch thousands of orbiters, clogging narrow low-Earth altitudes.",
      collocations: ["commercial proliferation", "congested orbital lanes", "mega-constellations"],
      example: "Fleets deploying hundreds of mass-produced satellites annually without global altitude caps."
    },
    {
      id: "card-2",
      stepNum: 2,
      badge: "Solution 01 • Engineering Mandate",
      title: "Mandatory Self-Deorbiting Thrusters",
      question: "How can satellite manufacturers technically prevent retired spacecraft from becoming permanent hazards?",
      thinkingLens: "Think about automated end-of-life disposal mechanisms built directly into the satellite.",
      selfCheck: "Did you recommend automated thrusters or drag sails for atmospheric re-entry burn-up?",
      idea: "Mandate built-in automated deorbiting thrusters or drag sails that steer retired satellites into the atmosphere to vaporize safely.",
      promptInsight: "Require automated propulsive thrusters to guarantee satellites burn up in the atmosphere at end of life.",
      collocations: ["automated deorbiting thrusters", "atmospheric burn-up", "post-mission disposal"],
      example: "Mandating low-orbit satellites to execute automated atmospheric incinerations within five years."
    },
    {
      id: "card-3",
      stepNum: 3,
      badge: "Cause 02 • Kinetic Shrapnel",
      title: "Cascading Debris (Kessler Syndrome)",
      question: "Why does space debris multiply exponentially even when new launches are paused?",
      thinkingLens: "Examine the physics of hypervelocity collisions between abandoned rocket stages (the Kessler syndrome).",
      selfCheck: "Did you explain how high-speed kinetic impacts shatter metal into clouds of untrackable shrapnel?",
      idea: "Hypervelocity kinetic collisions smash derelict rocket stages into tens of thousands of bullet-speed shrapnel fragments.",
      promptInsight: "Decades of abandoned rocket bodies and hypervelocity collisions fragment metal into bullet-speed debris.",
      collocations: ["hypervelocity collisions", "metallic shrapnel", "Kessler syndrome"],
      example: "The 2009 Cosmos-Iridium collision producing over 2,000 pieces of lethal high-speed fragments."
    },
    {
      id: "card-4",
      stepNum: 4,
      badge: "Solution 02 • Global Remediation",
      title: "Active Robotic Removal & UN Treaties",
      question: "What international and technological countermeasures are needed to clean up existing space debris?",
      thinkingLens: "Combine active robotic salvage technology with enforceable multilateral United Nations treaties.",
      selfCheck: "Did you pair active robotic capture missions (like ClearSpace-1) with mandatory pollution bonds?",
      idea: "Deploy robotic capture craft to deorbit heavy derelict hardware, funded by mandatory UN orbital remediation bonds.",
      promptInsight: "Deploy robotic capture craft to deorbit heavy junk, backed by enforceable UN space pollution treaties.",
      collocations: ["active debris removal", "robotic salvage missions", "multilateral space treaties"],
      example: "The ESA ClearSpace-1 robotic arm capturing derelict rocket stages from orbit."
    }
  ],

  connectorsTier: {
    sTier: [
      "In contemporary times",
      "To mitigate this hazard",
      "Active orbital remediation",
      "Multilateral space sustainability"
    ],
    aTier: [
      "To begin with",
      "Furthermore",
      "A prime catalyst is",
      "Exemplifying this approach"
    ],
    bTier: [
      "Additionally",
      "Specifically",
      "In conclusion",
      "Consequently"
    ]
  },

  fluidVocab: [
    {
      word: "Proliferation",
      pos: "noun",
      meaning: "Rapid and uncontrolled increase in the volume or quantity of something.",
      naturalCollocation: "proliferation of commercial satellite constellations",
      organicExample: "The proliferation of commercial satellite fleets has severely congested low-Earth orbital highways.",
      mechanicalPitfall: "Avoid writing 'a lot of new satellites' in formal academic writing.",
      examinerInsight: "Immediately signals sophisticated technological and sociological analysis."
    },
    {
      word: "Congested",
      pos: "adjective",
      meaning: "Excessively crowded and packed to the point of blocking movement.",
      naturalCollocation: "dangerously congested orbital corridors",
      organicExample: "Without strict launch permits, low-Earth orbit will become too congested for safe spaceflight.",
      mechanicalPitfall: "Do not confuse with traffic congestion on city roads; explain orbital path density.",
      examinerInsight: "Establishes precise spatial comprehension of near-Earth orbits."
    },
    {
      word: "Defunct",
      pos: "adjective",
      meaning: "No longer functioning, active, or in working order.",
      naturalCollocation: "defunct satellites and derelict rocket boosters",
      organicExample: "Hundreds of defunct satellites remain in orbit as floating, unguided kinetic projectiles.",
      mechanicalPitfall: "Avoid simplistic words like 'dead' or 'broken' spacecraft.",
      examinerInsight: "Standard high-level terminology utilized by NASA and ESA orbital analysts."
    },
    {
      word: "Remediation",
      pos: "noun",
      meaning: "The technical process of reversing, neutralizing, or repairing environmental damage.",
      naturalCollocation: "active orbital debris remediation",
      organicExample: "Active debris remediation craft are essential to capture and deorbit multi-ton rocket upper stages.",
      mechanicalPitfall: "Do not write 'cleaning up'; remediation conveys scientific ecological restoration.",
      examinerInsight: "Celebrated Band 9 vocabulary demonstrating advanced policy discourse."
    },
    {
      word: "Decommission",
      pos: "verb",
      meaning: "To formally withdraw a satellite or system from operational service at mission end.",
      naturalCollocation: "decommission satellites via automated atmospheric burn-up",
      organicExample: "Operators must be legally mandated to decommission retired satellites within five years.",
      mechanicalPitfall: "Avoid 'turning off'; decommission includes safe orbital retirement.",
      examinerInsight: "Directly addresses Task Response regarding technological lifecycle management."
    },
    {
      word: "Multilateral",
      pos: "adjective",
      meaning: "Agreed upon and enforced collectively by multiple nations and governments.",
      naturalCollocation: "enforceable multilateral space treaties",
      organicExample: "Mitigating orbital clutter necessitates a multilateral treaty with mandatory corporate compliance bonds.",
      mechanicalPitfall: "Do not confuse with bilateral; space governance requires worldwide consensus.",
      examinerInsight: "Signals elevated understanding of global governance and international law."
    }
  ],

  consequences: [
    {
      type: "positive",
      title: "Cause 01: Commercial Mega-Constellations",
      category: "standard",
      desc: "Private aerospace enterprises launch thousands of broadband satellites, severely saturating narrow low-Earth orbital corridors.",
      example: "Commercial operators deploying hundreds of mass-produced orbiters in dense orbital shells.",
      level: "Core Cause",
      simpleTakeaway: "Private telecom fleets flood low-Earth orbit with thousands of mass-produced satellites.",
      collocation: "rapid proliferation of commercial constellations"
    },
    {
      type: "positive",
      title: "Cause 02: Abandoned Booster Hardware",
      category: "standard",
      desc: "Expended rocket stages and booster casings are left adrift in space for decades without fuel or propulsion to re-enter.",
      example: "Multi-ton metallic rocket casings circling Earth uncontrolled for over forty years.",
      level: "Core Cause",
      simpleTakeaway: "Spent rocket bodies are abandoned in orbit without means to deorbit.",
      collocation: "derelict upper rocket stages"
    },
    {
      type: "positive",
      title: "Cause 03: Cascading Shrapnel (Kessler Syndrome)",
      category: "standard",
      desc: "High-speed kinetic collisions and anti-satellite missile tests pulverize dead hardware into tens of thousands of bullet-speed metal fragments.",
      example: "The 2009 Iridium-Cosmos collision generating over 2,000 trackable pieces of hypervelocity shrapnel.",
      level: "Core Cause",
      simpleTakeaway: "Hypervelocity collisions shatter hardware into clouds of bullet-speed shrapnel.",
      collocation: "catastrophic cascading collisions"
    },
    {
      type: "positive",
      title: "Cause 04: Outdated International Space Treaties",
      category: "additional",
      desc: "The 1967 Outer Space Treaty lacks modern regulatory mandates, launch quotas, or pollution penalties for private aerospace firms.",
      example: "Private corporations launching mega-fleets with zero financial liability for debris cleanup.",
      level: "Root Legal Cause",
      simpleTakeaway: "Outdated space laws provide no legal penalties for creating orbital pollution.",
      collocation: "inadequacy of international space governance"
    }
  ],

  evaluationArguments: [
    {
      title: "Solution 01: Mandatory Built-In Self-Deorbiting Thrusters",
      category: "standard",
      reason: "Compel all newly manufactured satellites to carry automated thrusters or plasma drag sails that steer them into the atmosphere upon retirement.",
      development: "Autonomous propulsion ensures that dead satellites lower their altitude and vaporize safely within Earth's dense atmosphere rather than becoming permanent hazards.",
      example: "Requiring low-orbit broadband orbiters to burn up harmlessly within five years of decommission.",
      type: "argument",
      level: "Core Solution",
      simpleTakeaway: "Require all satellites to carry thrusters to burn up in the atmosphere at end of life.",
      collocation: "mandatory post-mission deorbiting protocols"
    },
    {
      title: "Solution 02: Active Debris Removal (ADR) Robotic Missions",
      category: "standard",
      reason: "Deploy specialized robotic space craft equipped with nets, harpoons, and magnetic grapplers to capture and deorbit heavy existing space junk.",
      development: "Robotic salvage craft can rendezvous with uncontrolled multi-ton rocket bodies and guide them into safe oceanic re-entry corridors.",
      example: "The European Space Agency's ClearSpace-1 mission deploying robotic arms to capture defunct rocket stages.",
      type: "argument",
      level: "Core Solution",
      simpleTakeaway: "Launch robotic space tugs to capture and deorbit large floating derelict hardware.",
      collocation: "active debris remediation technologies"
    },
    {
      title: "Solution 03: Legally Binding UN Space Treaties & Launch Quotas",
      category: "standard",
      reason: "Establish enforceable United Nations launch licensing permits and mandatory orbital cleanup insurance bonds for all space operators.",
      development: "Imposing heavy financial fines and capping annual launches forces aerospace corporations to prioritize reusable and recyclable mission profiles.",
      example: "Withholding launch authorizations unless satellite operators prove pre-funded disposal and deorbiting plans.",
      type: "argument",
      level: "Core Solution",
      simpleTakeaway: "Enforce UN launch permits with mandatory cleanup insurance bonds.",
      collocation: "binding multilateral space treaties"
    },
    {
      title: "Solution 04: Real-Time AI Collision Avoidance Systems",
      category: "additional",
      reason: "Equip active satellite constellations with automated radar tracking sensors and AI-guided thrusters to dodge space shrapnel autonomously.",
      development: "Ground-based radar paired with autonomous orbital thrusters enables active spacecraft to perform evasive maneuvers without human delay.",
      example: "Modern communication orbiters automatically adjusting trajectories to dodge passing debris fragments.",
      type: "argument",
      level: "Technological Solution",
      simpleTakeaway: "Equip active satellites with AI thrusters to dodge space debris autonomously.",
      collocation: "autonomous collision-avoidance maneuvers"
    }
  ],

  facultyAngles: [
    {
      title: "Orbital Mechanics & Aerospace Engineering",
      development: "Focuses on satellite constellation density, low-Earth orbit saturation, autonomous propulsive deorbiting, and atmospheric re-entry burn-up."
    },
    {
      title: "International Space Law & Environmental Governance",
      development: "Examines United Nations space treaties (UNOOSA), corporate launch quotas, active debris removal salvage rights, and the Kessler syndrome."
    }
  ]
};
