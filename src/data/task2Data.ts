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
  id: "history-relevance-discussion-task2",

  taskType: "Discussion with Opinion (Discuss Both Views & Give Opinion)",

  title: "IELTS Writing Task 2 — The Relevance of History in Understanding the Present",

  questionText:
    "Some people believe that history has little to teach us about today, while others think that the study of the past helps us to understand the present.\n\nDiscuss both the views and give your opinion.",

  audioUrl: "materials/Taxation_and_Public_Services_Briefing.m4a",

  timingSeconds: 180,

  recommendedPosition:
    "Balanced View: While modern demographic scale and novel technology create blindspots for historical archives, physical path dependency and cyclical human psychology make studying the past indispensable.",

  strongestArgument:
    "The strongest argument is that while modern cities and technologies operate on an unprecedented scale, our physical infrastructure (such as Roman roads), financial psychology (speculative manias like Tulip Mania), and public health responses (1918 flu quarantines) are direct continuations of historical patterns.",

  // 1. Sample introduction planning points
  introPlanningPoints: [
    "Paraphrase: Divergent views on whether historical archives offer practical guidance for modern society.",
    "Outline View 1: Survivorship bias in historical texts and the trap of preparing for past crises.",
    "Outline View 2 & Opinion: Physical path dependency, cyclical market psychology, and pandemic protocols proving the past remains vital."
  ],

  sampleIntro:
    "While some individuals argue that historical records provide little practical guidance in our fast-evolving modern world, others maintain that analyzing the past is essential for comprehending contemporary reality. In my opinion, although rapid urban and technological changes present unprecedented challenges, studying historical human psychology and institutional foundations remains indispensable for sound decision-making.",

  // 2. Sample conclusion planning points
  conclusionPlanningPoints: [
    "Summary of View 1: Elitist bias in ancient records and the novel scale of modern megacities.",
    "Summary of View 2: Physical infrastructure foundations, market mania psychology, and public health playbooks.",
    "Final Opinion Restatement: History provides the indispensable blueprint to navigate recurring human patterns."
  ],

  sampleConclusion:
    "In conclusion, although the elitist bias of historical archives and the novel scale of modern society lead some to dismiss the past, history remains an indispensable guide. Understanding the physical foundations of our cities and the cyclical nature of human psychology is essential for interpreting the present and making defensible decisions.",

  // Five-Minute Planning Map — Strictly showing points for View 1 and View 2 (ONE-LINERS ONLY)
  fiveMinutePlanningMap: {
    positive: [
      "Survivorship Bias in Records: History was written only by victorious kings, ignoring how ordinary people survived crises.",
      "The 'Fighting the Last War' Trap: Fixating on past historical disasters blinds leaders to completely new, unexpected threats.",
      "Radical Megacity Scale: Ancient small-town direct democracies cannot manage modern twenty-million-person megacities.",
      "Fragile Global Supply Chains: Ancient localized kingdoms offer zero playbook for hyper-synchronized international supply shocks."
    ],
    negative: [
      "Physical Path Dependency: Modern highways and city centers are built directly on ancient Roman and medieval roads.",
      "Speculative Market Manias: Modern cryptocurrency and stock crashes follow the exact psychological stages of the 1637 Dutch Tulip Mania.",
      "Pandemic Containment Playbooks: Modern quarantine protocols, contact tracing, and mask rules were copied directly from the 1918 Spanish Flu.",
      "Diplomatic Peace Pacts: Centuries-old international treaties (like the 1815 Treaty of Paris) still sustain modern Swiss neutrality."
    ],
    position: "5-Paragraph Discussion with Opinion Structure",
    body1: "Body 1 (1st View): Survivorship bias in records, fighting the last war, megacity scale, and fragile supply chains.",
    body2: "Body 2 (2nd View): Physical Roman road foundations, Tulip Mania market psychology, 1918 flu playbooks, and peace pacts.",
    teachingRecommendation:
      "Instruct students to follow the exact 5-paragraph structure: Intro (Paraphrase + Opinion), Body 1 (Ideas for 1st View), Body 2 (Ideas for 2nd View), Body 3 (Ideas for Opinion), Conclusion (Sum-up main points + Restate opinion). Use these fresh, easy-to-justify one-liners!"
  },

  // Strongest Classroom Discussion Question
  classroomDiscussion: {
    question:
      "Why do modern highway maps across Europe still follow roads paved by Roman soldiers two thousand years ago?",
    followUps: [
      "Did the public panic during COVID-19 reveal that human nature in a pandemic hasn't changed since 1918?",
      "Why did building the giant Maginot Line wall fail to protect France in World War II?",
      "Can studying the 1637 Dutch Tulip Mania help regular investors avoid losing money in modern cryptocurrency bubbles?"
    ],
    pedagogicalInsight:
      "These concrete questions instantly prove to students that history is not an abstract subject in old textbooks—it is physically under our car tires and psychologically behind our financial decisions today."
  },

  // 3. Student Idea Bank — Strictly Points for View 1 (Body 1) and View 2 (Body 2) in ONE-LINERS
  bodyParagraphs: [
    {
      paraNumber: 1,
      side: "strong_opinion",
      title: "Body Para 1 (1st View) — Why History Fails to Guide Modern Society",
      theme: "Survivorship Bias, Strategic Blindspots & Unprecedented Scale",
      mainReason:
        "Historical records were written only by ruling elites and victors, offering zero advice for common people's problems.",
      supportingReasons:
        "Preparing for past crises blinds modern leaders to novel threats, just as small ancient town rules fail in modern megacities.",
      example:
        "France built the static Maginot Line wall to prevent another trench war, but modern tanks easily bypassed it in days.",
      band9Snippet:
        "“On the one hand, proponents argue that historical archives suffer from profound survivorship bias and prepare policymakers for yesterday's battles rather than today's reality.”",
      alternativeReasons: [
        {
          id: "body1-alt1",
          badge: "View 1 • Point 1: Survivorship Bias",
          title: "Survivorship Bias & Elitist Historical Records",
          mainReason:
            "History was recorded exclusively by victorious kings and elites, ignoring how ordinary citizens survived daily crises.",
          supportingReasons:
            "Ancient chronicles glorify royal conquests and palace intrigues rather than the economic struggles of common laborers.",
          example:
            "Ancient texts celebrate emperor military triumphs, but record virtually nothing about how working-class families coped with famine.",
          band9Snippet:
            "“Historical archives suffer from profound survivorship bias, having been authored almost exclusively by ruling elites to chronicle military triumphs rather than the lived realities of ordinary citizens.”",
          modelParagraph:
            "On the one hand, proponents argue that historical lessons are inherently flawed because the historical archive suffers from profound survivorship bias. Throughout antiquity, documentation was written almost exclusively by the victorious ruling elite, monks, and monarchical scribes. Consequently, history predominantly chronicles royal palace intrigues and imperial battlefield conquests, while entirely ignoring the socioeconomic realities and survival strategies of ordinary working-class citizens. For instance, ancient Greek and Roman chronicles offer detailed accounts of military generals, but record virtually nothing regarding how common artisans and laborers navigated localized economic depressions.",
          examinerNotes:
            "A brilliant, original argument exposing the structural incompleteness of historical evidence."
        },
        {
          id: "body1-alt2",
          badge: "View 1 • Point 2: The 'Last War' Trap",
          title: "The Past-Crisis Blindspot ('Fighting the Last War')",
          mainReason:
            "Fixating on past historical disasters blinds modern leaders to completely new, unexpected forms of crisis.",
          supportingReasons:
            "Applying yesterday's defensive solutions creates a false sense of security against novel technological threats.",
          example:
            "France built the massive static Maginot Line wall to prevent another WWI trench war, only for modern tanks and planes to bypass it in days.",
          band9Snippet:
            "“Overreliance on historical precedent frequently induces the dangerous fallacy of 'fighting the last war,' leaving institutions fatally blind to novel, asymmetric threats.”",
          modelParagraph:
            "Furthermore, an overreliance on historical precedent often traps policymakers in the dangerous psychological fallacy of 'fighting the last war.' When leaders uncritically apply solutions from previous crises, they construct rigid defenses that leave them fatally vulnerable to unprecedented modern threats. A salient military illustration is the French construction of the Maginot Line following World War I; having studied the trench warfare of the previous conflict, planners built an impenetrable concrete barrier, only for modern mechanized divisions and aircraft to easily bypass it within days.",
          examinerNotes:
            "Compelling historical proof showing how excessive historical focus creates modern strategic blindspots."
        },
        {
          id: "body1-alt3",
          badge: "View 1 • Point 3: Radical Demographic Scale",
          title: "Radical Demographic Scale & Megacity Realities",
          mainReason:
            "Ancient agrarian governance was designed for tiny populations and cannot manage modern twenty-million-person megacities.",
          supportingReasons:
            "Administrative mechanisms that succeeded in homogeneous ancient city-states fail completely in complex, hyper-dense global metropolises.",
          example:
            "Ancient Athenian direct democracy required citizens to physically gather in a town square, a model mathematically impossible in modern multi-million nations.",
          band9Snippet:
            "“The unprecedented demographic scale of contemporary megacities renders the administrative frameworks of small, ancient city-states mathematically and practically unworkable.”",
          modelParagraph:
            "Additionally, the sheer demographic scale of contemporary society invalidates ancient administrative models. Ancient classical civilizations operated on minuscule population scales compared to today's twenty-million-person urban conurbations. For example, ancient Athenian direct democracy functioned only because a few thousand citizens could assemble in a single town square to vote on municipal policies. Attempting to derive modern civic administration from such small-scale historical models is mathematically unworkable in an era of sprawling, multicultural megacities managing complex automated transit and sanitation systems.",
          examinerNotes:
            "Sharp, intuitive contrast highlighting the immense population and urban scale divergence."
        },
        {
          id: "body1-alt4",
          badge: "View 1 • Point 4: Global Supply Chains",
          title: "Hyper-Fragile Global Supply Chain Networks",
          mainReason:
            "Ancient economies were localized and self-contained, whereas today a single foreign disruption paralyzes global survival.",
          supportingReasons:
            "Historical isolationist doctrines offer no playbook for managing just-in-time international food, energy, and semiconductor networks.",
          example:
            "A single container ship stuck in the Suez Canal halted ten billion dollars in global daily trade, an economic shock unknown in ancient history.",
          band9Snippet:
            "“Unlike ancient self-sufficient agrarian fiefdoms, contemporary civilization depends on hyper-synchronized global supply chains that have no historical equivalent.”",
          modelParagraph:
            "Finally, contemporary economic vulnerability is rooted in hyper-connected global supply networks that have no historical parallel. Ancient civilizations operated as largely localized, self-contained agrarian economies where supply disruptions were geographically confined. In contrast, modern nations rely on fragile, just-in-time international supply chains for food, energy, and microchips. For instance, when a single container vessel ran aground in the Suez Canal in 2021, it paralyzed nearly ten billion dollars in global trade daily—an interconnected systemic shock that historical economic models offer zero guidance to resolve.",
          examinerNotes:
            "Fresh, highly modern real-world evidence demonstrating supply chain vulnerability."
        }
      ]
    },
    {
      paraNumber: 2,
      side: "non_opinion",
      title: "Body Para 2 (2nd View) — How the Past Silently Shapes the Present",
      theme: "Physical Path Dependency, Cyclical Psychology & Epidemiological Playbooks",
      mainReason:
        "Modern infrastructure, speculative financial psychology, and public health playbooks are direct continuations of history.",
      supportingReasons:
        "European highways still follow Roman soldier roads, while human panic during modern crypto crashes and pandemics repeats past events.",
      example:
        "Modern quarantine and mask mandates during COVID-19 were copied directly from public health rules used during the 1918 Spanish Flu.",
      band9Snippet:
        "“On the other hand, the study of the past is indispensable because modern physical infrastructure, financial speculation, and epidemiological responses are direct legacies of historical blueprints.”",
      alternativeReasons: [
        {
          id: "body2-alt1",
          badge: "View 2 • Point 1: Physical Infrastructure",
          title: "Physical Path Dependency & Roman Road Networks",
          mainReason:
            "Modern highways, railway lines, and European city centers are built directly on ancient Roman and medieval foundations.",
          supportingReasons:
            "Contemporary traffic bottlenecks and urban growth patterns can only be understood by studying the routes ancient military engineers laid down.",
          example:
            "Major British and European highways (such as Watling Street in the UK) still follow the exact paved routes constructed by Roman soldiers two thousand years ago.",
          band9Snippet:
            "“Through the lens of path dependency, modern infrastructure remains physically anchored to ancient foundations, with contemporary European transit corridors directly tracing Roman military roads.”",
          modelParagraph:
            "On the other hand, advocates emphasize that contemporary society is physically anchored to historical foundations through the phenomenon of path dependency. Modern transport corridors, city layouts, and trade hubs did not emerge in a vacuum; they sit directly on top of ancient engineering decisions. For example, across the United Kingdom and continental Europe, major contemporary highways and freight corridors still follow the exact paved trajectories surveyed and constructed by Roman military engineers over two millennia ago. Understanding why modern cities experience specific logistical bottlenecks requires studying the historical urban footprints that dictate their expansion.",
          examinerNotes:
            "Fascinating, concrete physical proof that history literally lies under our modern roads."
        },
        {
          id: "body2-alt2",
          badge: "View 2 • Point 2: Speculative Market Manias",
          title: "The Psychology of Speculative Financial Bubbles",
          mainReason:
            "While financial technology changes, human greed and collective delusion during market crashes follow identical historical patterns.",
          supportingReasons:
            "Studying how public hysteria inflates speculative assets helps modern investors and regulators recognize irrational market bubbles before they burst.",
          example:
            "The rapid rise and catastrophic collapse of speculative cryptocurrency schemes mirrored the exact stages of the 1637 Dutch Tulip Mania.",
          band9Snippet:
            "“While financial instruments evolve, the collective psychology of speculative greed remains immutable, with modern digital asset collapses mirroring the classic anatomy of seventeenth-century Dutch Tulip Mania.”",
          modelParagraph:
            "Equally compelling is the realization that human financial psychology follows cyclical patterns that history documents with remarkable precision. While financial technology has progressed from physical ledgers to decentralized digital algorithms, the underlying human vices of irrational exuberance and panic remain identical. A salient illustration is observed in modern cryptocurrency and meme-stock crashes, which unfolded through the exact psychological stages of speculative mania and sudden collapse first recorded during the Dutch Tulip Mania of 1637. By analyzing historical asset bubbles, economists can identify the warning signs of market irrationality before widespread economic devastation ensues.",
          examinerNotes:
            "Brilliant comparison between 1637 Tulip Mania and modern cryptocurrency crashes."
        },
        {
          id: "body2-alt3",
          badge: "View 2 • Point 3: Pandemic Containment",
          title: "Epidemiological Protocols & Human Compliance",
          mainReason:
            "Human behavioral reactions and containment strategies during deadly disease outbreaks repeat identically across centuries.",
          supportingReasons:
            "Modern epidemiologists successfully deployed border quarantines and mask policies because historical data proved they flatten infection curves.",
          example:
            "Modern public health responses during COVID-19—such as isolation zones and social distancing—were directly derived from protocols refined during the 1918 Spanish Flu.",
          band9Snippet:
            "“In public health, contemporary epidemiological strategies—spanning quarantine mandates to contact tracing—derive directly from empirical protocols developed during the 1918 influenza pandemic.”",
          modelParagraph:
            "Furthermore, historical archives supply proven blueprints for managing acute global crises, particularly in public health. When novel epidemics emerge, human sociological responses—including initial denial, panic buying, and resistance to restrictions—mirror past behavioral patterns. During the recent COVID-19 pandemic, public health authorities did not invent containment protocols from scratch; they dusted off empirical non-pharmaceutical interventions, such as municipal quarantines, contact tracing, and mask mandates, that were rigorously refined during the 1918 Spanish Influenza pandemic. Without historical epidemiological data demonstrating that social distancing flattens mortality curves, modern response efforts would have been drastically delayed.",
          examinerNotes:
            "Exceptionally relatable and justifiable evidence linking the 1918 flu to COVID-19 response measures."
        },
        {
          id: "body2-alt4",
          badge: "View 2 • Point 4: Century-Old Peace Pacts",
          title: "Diplomatic Neutrality & Century-Old Peace Pacts",
          mainReason:
            "Contemporary international diplomacy and border stability rely entirely on enduring peace treaties established centuries ago.",
          supportingReasons:
            "Diplomats cannot maintain international peace accords without honoring the historical grievances and compromises that created them.",
          example:
            "Switzerland's renowned modern role as a neutral diplomatic mediator is the direct result of the 1815 Treaty of Paris signed after the Napoleonic Wars.",
          band9Snippet:
            "“Contemporary geopolitical stability is sustained by long-standing institutional pacts, exemplified by Swiss diplomatic neutrality rooted in the post-Napoleonic 1815 Treaty of Paris.”",
          modelParagraph:
            "Finally, contemporary international law and diplomatic stability are direct outcomes of historical treaties that have endured for centuries. Peaceful coexistence among nations requires an understanding of the historical compromises that established modern borders and sovereign statuses. For instance, Switzerland's modern status as an unshakeable, neutral sanctuary for international peace talks is not an arbitrary modern policy, but the direct legacy of the 1815 Treaty of Paris following the Napoleonic Wars. Ignoring the historical foundations of such treaties would dismantle the fragile international consensus that maintains global diplomatic order.",
          examinerNotes:
            "Elevated geopolitical insight illustrating the enduring validity of historic diplomatic treaties."
        }
      ]
    }
  ],

  // 4. Band 9 Academic Power Vocabulary (History & Modern Era)
  vocabList: [
    {
      word: "path dependency",
      pos: "noun phrase",
      meaning: "The tendency of past decisions and ancient layouts to constrain and dictate modern choices and routes.",
      example: "Modern European railway and road networks exhibit profound path dependency, following ancient Roman routes."
    },
    {
      word: "survivorship bias",
      pos: "noun phrase",
      meaning: "A logical error focusing only on successful or surviving records while ignoring hidden or forgotten failures.",
      example: "Historical archives suffer from survivorship bias because ancient scribes only preserved the triumphs of victorious kings."
    },
    {
      word: "speculative mania",
      pos: "noun phrase",
      meaning: "An irrational period of collective financial greed where asset prices skyrocket far beyond their real value.",
      example: "The sudden boom and bust of cryptocurrency mirrored the speculative mania of seventeenth-century Dutch tulips."
    },
    {
      word: "epidemiological",
      pos: "adjective",
      meaning: "Relating to the branch of medicine and science dealing with the incidence, distribution, and control of disease.",
      example: "Modern epidemiological playbooks on quarantine and social distancing were adapted directly from the 1918 influenza records."
    },
    {
      word: "fallacy",
      pos: "noun",
      meaning: "A mistaken belief or flawed reasoning, especially one based on unsound argument.",
      example: "Preparing solely for past military battles commits the strategic fallacy of fighting the last war."
    },
    {
      word: "conurbation",
      pos: "noun",
      meaning: "An extended urban area, typically consisting of several towns merging with the suburbs of one or more cities.",
      example: "Managing a modern conurbation of twenty million citizens requires tools unknown to ancient village democracies."
    },
    {
      word: "autarky",
      pos: "noun",
      meaning: "Economic independence or self-sufficiency, where a kingdom or nation does not rely on international trade.",
      example: "Ancient feudal kingdoms operated under relative autarky, whereas modern economies collapse if international shipping halts."
    },
    {
      word: "anachronistic",
      pos: "adjective",
      meaning: "Belonging to a past era; out of date or chronologically misplaced in modern society.",
      example: "Applying ancient agrarian laws to regulate modern automated financial algorithms is entirely anachronistic."
    },
    {
      word: "precedent",
      pos: "noun",
      meaning: "An earlier event, decision, or action that serves as an authoritative guide or model for subsequent situations.",
      example: "Historical judicial precedents provide the constitutional backbone for modern democratic legal systems."
    },
    {
      word: "indispensable",
      pos: "adjective",
      meaning: "Absolutely essential; impossible to operate effectively without.",
      example: "Studying past market panics is indispensable for central bankers trying to prevent modern economic collapse."
    },
    {
      word: "immutable",
      pos: "adjective",
      meaning: "Unchanging over time or unable to be altered.",
      example: "While modern digital gadgets evolve rapidly, basic human emotions of fear and greed remain essentially immutable."
    },
    {
      word: "unprecedented",
      pos: "adjective",
      meaning: "Never having occurred or existed at any point in prior human history.",
      example: "The global synchronization of modern just-in-time supply chains is unprecedented in scale."
    }
  ],

  vocabHunt: [
    "path dependency",
    "survivorship bias",
    "speculative mania",
    "epidemiological",
    "fallacy",
    "conurbation",
    "autarky",
    "anachronistic",
    "precedent",
    "indispensable",
    "immutable",
    "unprecedented"
  ],

  // 5. Guided Brainstorm Challenge Cards (Strictly View 1 & View 2 — Easy to Understand, One-Liner Ideas)
  brainstormCards: [
    {
      question: "Why do ancient historical books fail to help ordinary working people today?",
      thinkingLens: "Survivorship Bias (History written by kings & victors)",
      selfCheck: "Did ancient scrolls record everyday citizens or just wealthy emperors?",
      idea: "Ancient history only recorded the victories of emperors and kings, leaving out how everyday people lived and solved problems."
    },
    {
      question: "How can preparing for past disasters actually make us weaker against modern threats?",
      thinkingLens: "The 'Fighting the Last War' Trap (Preparing for yesterday's crisis)",
      selfCheck: "Does building a wall protect against modern airplanes and tanks?",
      idea: "Obsessing over past mistakes blinds leaders to completely new threats, just as France built a huge wall that modern tanks simply bypassed."
    },
    {
      question: "Why can't ancient city rules run modern megacities?",
      thinkingLens: "Population Scale (Small tribes vs 20-million-person megacities)",
      selfCheck: "Can millions of modern city residents meet in a town square like ancient Athens?",
      idea: "Ancient direct democracy required small crowds in a town square, which is mathematically impossible in a city of twenty million people."
    },
    {
      question: "How do ancient Roman roads still dictate our daily commute today?",
      thinkingLens: "Physical Path Dependency (Cities built on ancient foundations)",
      selfCheck: "Why do modern European highway maps trace Roman soldier paths?",
      idea: "Modern highways and train routes in Europe still sit directly on top of paved stone roads built by Roman soldiers two thousand years ago."
    },
    {
      question: "Why does the 1637 Dutch Tulip Mania explain today's cryptocurrency crashes?",
      thinkingLens: "Speculative Greed & Market Manias",
      selfCheck: "Does human greed change when buying internet coins instead of flowers?",
      idea: "Human greed and panic during financial crashes are identical whether people are speculating on seventeenth-century tulips or modern internet coins."
    },
    {
      question: "Where did modern pandemic rules like quarantine and masks come from?",
      thinkingLens: "Epidemiological History (1918 Spanish Flu)",
      selfCheck: "Did doctors invent quarantine during COVID-19 or copy it from the past?",
      idea: "Modern lockdown and mask rules were copied directly from public health strategies developed during the 1918 Spanish Flu pandemic."
    }
  ],

  connectorsTier: {
    sTier: [
      "On the one hand, proponents argue that historical archives suffer from profound survivorship bias...",
      "On the other hand, through the lens of path dependency, modern society remains physically anchored to...",
      "In my view, while the demographic and technological scale of modern life is novel, the cyclical patterns of...",
      "Consequently, analyzing past market crashes and epidemiological records provides an indispensable blueprint..."
    ],
    aTier: [
      "Furthermore, fixating on past battles creates the dangerous fallacy of...",
      "Equally compelling is the realization that human financial psychology...",
      "A salient historical illustration of this dynamic is observed in...",
      "In conclusion, although the elitist bias of historical records leads some to..."
    ],
    bTier: [
      "In addition to this...",
      "For instance, studying Roman roads...",
      "Therefore, history teaches us...",
      "To summarize everything..."
    ]
  },

  strategicLinkers: [
    {
      zone: "Zone 1: Opening 1st View (History Fails Modernity)",
      badge: "View 1 Transitions",
      placementRule: "Use at the beginning of Body 1 to establish the perspective that past archives are biased and structurally mismatched with modernity.",
      items: [
        {
          phrase: "On the one hand, proponents argue that historical lessons are increasingly unhelpful because past archives suffer from...",
          functionDesc: "Introduces the argument that ancient evidence is incomplete and biased toward ruling elites.",
          example:
            "On the one hand, proponents argue that historical lessons are increasingly unhelpful because past archives suffer from severe survivorship bias."
        },
        {
          phrase: "Advocates of this viewpoint emphasize that fixating on past precedents blinds leaders to...",
          functionDesc: "Highlights the strategic blindspot of fighting yesterday's battles.",
          example:
            "Advocates of this viewpoint emphasize that fixating on past precedents blinds leaders to novel, asymmetric modern threats."
        }
      ]
    },
    {
      zone: "Zone 2: Opening 2nd View (Past Silently Shapes Present)",
      badge: "View 2 Transitions",
      placementRule: "Use at the beginning of Body 2 to pivot toward how physical infrastructure and cyclical psychology bind today to the past.",
      items: [
        {
          phrase: "On the other hand, analyzing historical developments is indispensable because through path dependency, modern society is...",
          functionDesc: "Establishes that current city infrastructure and institutions are literally built on ancient foundations.",
          example:
            "On the other hand, analyzing historical developments is indispensable because through path dependency, modern society is physically anchored to ancient foundations."
        },
        {
          phrase: "While financial and medical technologies evolve, the collective human psychology of...",
          functionDesc: "Demonstrates that human reactions to market bubbles and disease outbreaks follow timeless cycles.",
          example:
            "While financial and medical technologies evolve, the collective human psychology of speculative greed and pandemic fear remains essentially immutable."
        }
      ]
    },
    {
      zone: "Zone 3: Expressing Author Opinion & Synthesizing",
      badge: "Opinion & Conclusion",
      placementRule: "Use in Body 3 or Conclusion to deliver a clear, balanced, defensible stance.",
      items: [
        {
          phrase: "In my view, while the demographic scale of modern civilization is unprecedented, the underlying architecture of...",
          functionDesc: "Delivers a nuanced stance reconciling unprecedented modern scale with timeless human nature.",
          example:
            "In my view, while the demographic scale of modern civilization is unprecedented, the underlying architecture of human governance and financial mania remains identical."
        },
        {
          phrase: "In conclusion, although the elitist bias of historical archives leads some to dismiss history, the past remains...",
          functionDesc: "Summarizes both perspectives succinctly before confirming the final personal stance.",
          example:
            "In conclusion, although the elitist bias of historical archives leads some to dismiss history, the past remains an indispensable roadmap for modern civilization."
        }
      ]
    }
  ],

  fluidVocab: [
    {
      word: "path dependency",
      pos: "noun phrase",
      meaning: "The structural reality where current choices and layouts are dictated by past historical decisions.",
      naturalCollocation: "exhibit profound path dependency / physical infrastructure",
      organicExample: "Modern European transport corridors exhibit profound path dependency, tracing Roman military roads.",
      mechanicalPitfall: "Avoid 'history makes roads'; 'path dependency' demonstrates masterclass academic precision."
    },
    {
      word: "survivorship bias",
      pos: "noun phrase",
      meaning: "The flaw of drawing conclusions from only surviving written records while overlooking unrecorded realities.",
      naturalCollocation: "suffer from survivorship bias / elitist documentation",
      organicExample: "Historical texts suffer from survivorship bias because ancient scribes only recorded the victories of emperors.",
      mechanicalPitfall: "Do not say 'one-sided history'; 'survivorship bias' is Band 9 terminology."
    },
    {
      word: "speculative mania",
      pos: "noun phrase",
      meaning: "A period of irrational collective financial greed where asset prices skyrocket and crash.",
      naturalCollocation: "anatomy of speculative mania / financial bubble",
      organicExample: "The boom and bust of cryptocurrency mirrored the classic anatomy of seventeenth-century Dutch Tulip Mania.",
      mechanicalPitfall: "Saying 'people got too greedy' is informal; use 'speculative mania'."
    },
    {
      word: "immutable",
      pos: "adjective",
      meaning: "Unchanging and permanent across all eras of human existence.",
      naturalCollocation: "immutable human nature / psychological traits",
      organicExample: "While digital gadgets evolve rapidly, human psychological reactions to crisis remain immutable.",
      mechanicalPitfall: "Avoid 'stays the same'; 'immutable human psychology' is Band 9."
    }
  ],

  powerExpressions: [
    {
      expression: "physical path dependency",
      meaning: "The concept that modern physical infrastructure remains locked into ancient routes and layouts.",
      example: "European highway systems demonstrate physical path dependency by directly following Roman military roads."
    },
    {
      expression: "the fallacy of fighting the last war",
      meaning: "The dangerous strategic mistake of preparing for previous crises rather than modern threats.",
      example: "Military planners fell victim to the fallacy of fighting the last war by building static fortifications against aircraft."
    },
    {
      expression: "cyclical anatomy of speculative bubbles",
      meaning: "The repeating psychological pattern of greed, euphoria, and collapse in financial markets.",
      example: "Understanding the cyclical anatomy of speculative bubbles protects investors from recurring market crashes."
    },
    {
      expression: "empirical epidemiological blueprints",
      meaning: "Proven public health strategies derived from historical disease outbreaks.",
      example: "Modern quarantine mandates during global pandemics rely on empirical epidemiological blueprints refined since 1918."
    }
  ],

  // Consequences strictly for View 1
  consequences: [
    {
      type: "positive",
      title: "Survivorship Bias & Elitist Records",
      desc: "History was recorded exclusively by victorious monarchs and wealthy elites, offering zero practical guidance for common citizens' modern struggles.",
      example: "Ancient chronicles celebrate royal conquests, but record virtually nothing about how working-class families coped with economic depressions.",
      collocation: "survivorship bias / elitist documentation"
    },
    {
      type: "positive",
      title: "The 'Fighting the Last War' Blindspot",
      desc: "Fixating on past crises creates a false sense of security, blinding modern leadership to novel, asymmetric technological threats.",
      example: "France heavily fortified the static Maginot Line after WWI, only for modern tanks and aircraft to bypass it in days.",
      collocation: "strategic blindspot / fighting the last war"
    },
    {
      type: "positive",
      title: "Radical Megacity Demographic Scale",
      desc: "Ancient small-town governance frameworks cannot manage modern twenty-million-person multicultural megacities with automated infrastructure.",
      example: "Ancient Athenian direct democracy required a few thousand citizens in a town square, a model mathematically impossible in modern nations.",
      collocation: "radical demographic scale / unworkable civic models"
    },
    {
      type: "positive",
      title: "Fragile Global Supply Chains",
      desc: "Ancient economies were localized and self-contained, whereas today a single foreign disruption halts international food and medicine.",
      example: "A single container vessel grounded in the Suez Canal halted $10 billion in global daily trade, an economic shock unknown in ancient history.",
      collocation: "hyper-synchronized supply chains / systemic vulnerability"
    }
  ],

  // Arguments strictly for View 2
  evaluationArguments: [
    {
      title: "Physical Path Dependency & Roman Roads",
      reason: "Modern highways, train routes, and city centers are built directly on top of ancient Roman and medieval engineering foundations.",
      development: "Contemporary European transit corridors and logistical bottlenecks can only be understood by examining the routes Roman legions paved two thousand years ago.",
      example: "Major British highways (like Watling Street) still follow the exact stone routes paved by Roman soldiers over two millennia ago.",
      type: "argument",
      collocation: "physical path dependency / ancient Roman foundations"
    },
    {
      title: "The Psychology of Speculative Bubbles",
      reason: "While financial instruments change from physical ledgers to internet coins, human greed and collective panic follow identical historical cycles.",
      development: "Studying past market manias enables economists and investors to identify the psychological warning signs of an asset bubble before it collapses.",
      example: "Modern cryptocurrency and meme-stock crashes mirrored the exact psychological stages of the 1637 Dutch Tulip Mania.",
      type: "argument",
      collocation: "speculative market mania / cyclical financial euphoria"
    },
    {
      title: "Epidemiological Protocols & Pandemics",
      reason: "Human behavioral reactions and containment strategies during disease outbreaks repeat identically across historical eras.",
      development: "Modern public health agencies successfully managed recent outbreaks because historical records from 1918 proved that quarantines and mask-wearing flatten mortality curves.",
      example: "Modern COVID-19 containment measures—including municipal quarantines and social distancing—were adapted directly from the 1918 Spanish Flu playbook.",
      type: "argument",
      collocation: "epidemiological protocols / empirical containment blueprints"
    },
    {
      title: "Century-Old Peace Treaties & Diplomacy",
      reason: "Contemporary international law, sovereign borders, and diplomatic neutrality are direct continuations of historic peace treaties.",
      development: "International peace accords cannot be maintained without honoring the historical compromises and border treaties that established modern sovereign states.",
      example: "Switzerland's modern status as an unshakeable neutral mediator is the direct legacy of the 1815 Treaty of Paris signed after the Napoleonic Wars.",
      type: "argument",
      collocation: "enduring peace treaties / institutional diplomatic neutrality"
    }
  ],

  facultyAngles: [
    {
      title: "Historical Bias & Methodology Angle (View 1)",
      development: "Explains how survivorship bias and elite-centered records distort our understanding of common human problems, making ancient chronicles a flawed guide."
    },
    {
      title: "Technological & Demographic Scale Angle (View 1)",
      development: "Highlights that twenty-million-person megacities and synchronized global supply chains are mathematically beyond the scope of ancient village rules."
    },
    {
      title: "Physical Infrastructure & Path Dependency Angle (View 2)",
      development: "Demonstrates that history is not an abstract concept; modern highways, city centers, and train lines literally rest upon Roman foundations."
    },
    {
      title: "Behavioral Constancy Angle (View 2)",
      development: "Shows that human greed during financial bubbles (Tulip Mania vs Crypto) and fear during pandemics (1918 Flu vs COVID-19) remain completely immutable."
    }
  ]
};