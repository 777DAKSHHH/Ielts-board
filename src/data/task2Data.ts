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
  id: "children-can-achieve-anything-advantages-disadvantages",

  taskType: "Advantages and Disadvantages Essay",

  title: "IELTS Writing Task 2 — Telling Children They Can Achieve Anything",

  questionText:
    "In some countries, children are often told that they can achieve anything if they try hard enough.\n\nWhat are the advantages and disadvantages of giving children this message?",

  audioUrl: "materials/Taxation_and_Public_Services_Briefing.m4a",

  timingSeconds: 180,

  recommendedPosition:
    "Balanced Assessment: While instilling unbridled ambition cultivates resilience and spurs social mobility, it must be counterbalanced with pragmatic realism to avert chronic self-blame, burnout, and disillusionment.",

  strongestArgument:
    "The strongest argument is that praising effort cultivates a growth mindset that frees children from defeatist thinking; however, promising that effort guarantees every outcome blinds children to genetic and systemic limits, turning unavoidable failure into devastating personal guilt.",

  // 1. Sample introduction planning points
  introPlanningPoints: [
    "Paraphrase Prompt: In various societies, youth are frequently told that limitless accomplishments are attainable solely through diligence.",
    "Thesis Statement: While this message instills admirable resilience, a growth mindset, and upward aspiration, it simultaneously introduces grave hazards, namely acute psychological distress and a naive disregard for innate boundaries."
  ],

  sampleIntro:
    "In various parts of the world, children are consistently instilled with the belief that boundless success is achievable solely through diligence and relentless effort. While this message undeniably nurtures resilience, a growth mindset, and high personal aspirations, it simultaneously introduces notable perils, particularly the risk of severe psychological distress and an unrealistic disregard for innate limitations.",

  // 2. Sample conclusion planning points
  conclusionPlanningPoints: [
    "Sum-up Main Reasons: Effort fuels determination and breaks social ceilings, but unconstrained expectations trigger self-reproach, burnout, and disillusionment.",
    "Suggestion / Recommendation: Parents and educators should temper aspirational optimism with pragmatic realism and self-compassion."
  ],

  sampleConclusion:
    "In conclusion, while reassuring children that effort unlocks all doors effectively instills tenacity and fuels upward mobility, it can equally inflict crippling self-reproach and blind individuals to inevitable biological and socioeconomic constraints. It is therefore recommended that educators and guardians balance aspirational encouragement with pragmatic guidance, teaching the youth that while giving their utmost effort is commendable, recognizing personal boundaries and developing self-compassion when facing unalterable realities are equally vital for lifelong well-being.",

  // Five-Minute Planning Map — Strictly showing Advantages vs Disadvantages in ONE-LINERS
  fiveMinutePlanningMap: {
    positive: [
      "Cultivates a Growth Mindset: Teaches children that intelligence and skills can be expanded through practice, building emotional grit against early failure.",
      "Promotes Upward Social Mobility: Inspires youth from impoverished or marginalized backgrounds to break generational ceilings and pursue ambitious vocations.",
      "Eradicates Defeatist Attitudes: Encourages perseverance in challenging disciplines like mathematics, athletics, and foreign languages without premature surrender."
    ],
    negative: [
      "Induces Severe Self-Blame & Burnout: Children erroneously believe every setback stems from personal laziness, leading to chronic perfectionism, anxiety, and depression.",
      "Denies Natural Biological Realities: Fosters false expectations in arenas demanding rare genetic prerequisites (e.g. height in basketball or innate musical pitch).",
      "Ignores Structural Socioeconomic Barriers: Overlooks economic inequalities and institutional bottlenecks, setting young adults up for bitter disillusionment."
    ],
    position: "4-Paragraph Advantages & Disadvantages Architecture",
    body1: "Body 1 (Advantages): 2 Main Reasons (Growth Mindset & Upward Mobility) + Supporting Explanation + Carol Dweck Educational Study Example.",
    body2: "Body 2 (Disadvantages): 2 Main Reasons (Self-Blame/Burnout & Inherent Limitations) + High-Stakes Competitive Exam Example.",
    teachingRecommendation:
      "Follow the exact 4-paragraph format: Introduction (Paraphrase + Thesis), Body 1 (Advantages: 2 Main Reasons + Supporting + Example), Body 2 (Disadvantages: 2 Main Reasons + Example), Conclusion (Sum-up all main reasons + Suggestion/Recommendation)."
  },

  // Strongest Classroom Discussion Question
  classroomDiscussion: {
    question:
      "When a child spends years practicing basketball but stops growing at 5 feet 4 inches, does telling them 'you can achieve anything' inspire them or set them up for heartbreak?",
    followUps: [
      "Why do students in high-pressure educational systems blame themselves when they fail entrance exams, even after studying 14 hours a day?",
      "How does Carol Dweck's concept of praising 'effort rather than talent' transform a child's resilience?",
      "Can pure willpower overcome structural poverty and economic disadvantages without institutional support?"
    ],
    pedagogicalInsight:
      "This question helps students immediately grasp the crucial distinction between encouraging healthy effort (growth mindset) and making false promises that defy biology and economic reality."
  },

  // 3. Body Paragraphs Data Structure (Format-Compliant)
  bodyParagraphs: [
    {
      paraNumber: 1,
      side: "strong_opinion",
      title: "Body Para 1: Advantages of the 'Achieve Anything' Message",
      theme: "Growth Mindset, Resilience & Social Mobility",
      mainReason:
        "1. Cultivates an intrinsic growth mindset and resilient work ethic; 2. Promotes upward social mobility by dismantling defeatist ceilings.",
      supportingReasons:
        "When children view outcomes as dependent on dedication rather than fixed talent, they treat setbacks as learning steps; furthermore, it empowers underprivileged children to dream boldly.",
      example:
        "Research by Dr. Carol Dweck demonstrated that students praised for effort exhibited significantly higher academic stamina than those praised for innate ability.",
      band9Snippet:
        "“On the positive side, imparting this empowering philosophy yields two substantial benefits: cultivating an intrinsic growth mindset and serving as a potent engine for social mobility.”",
      alternativeReasons: [
        {
          id: "adv-reason-1",
          badge: "Main Reason 1: Growth Mindset",
          title: "Fostering a Growth Mindset & Tenacious Work Ethic",
          mainReason:
            "It teaches children that intelligence and capability are malleable assets developed through disciplined practice rather than unchangeable genetic gifts.",
          supportingReasons:
            "When youth believe that effort dictates success, they interpret mistakes and setbacks not as humiliating verdicts on their worth, but as constructive feedback, developing long-term grit.",
          example:
            "Stanford psychologist Carol Dweck's landmark studies revealed that children praised for diligent exertion consistently outpaced peers who were praised for natural brilliance.",
          band9Snippet:
            "“Primarily, this message cultivates an intrinsic growth mindset and a strong work ethic, prompting young minds to interpret setbacks as constructive learning opportunities rather than insurmountable barriers.”",
          modelParagraph:
            "On the positive side, imparting this empowering philosophy yields two substantial benefits. Primarily, it cultivates an intrinsic growth mindset and a strong work ethic. When young minds are taught that achievement is determined by dedication rather than fixed hereditary talent, they interpret setbacks as constructive learning opportunities rather than insurmountable barriers, which bolsters emotional grit. Furthermore, this outlook serves as an engine for social mobility by eliminating self-imposed psychological ceilings, particularly for children from impoverished or marginalized backgrounds who might otherwise feel confined by their circumstances. A compelling illustration of this is evident in educational psychology research by Dr. Carol Dweck; students praised specifically for effort rather than innate intelligence demonstrated markedly higher perseverance and achieved superior long-term academic results across diverse socio-economic groups.",
          examinerNotes:
            "A rock-solid Band 9 argument pairing psychological theory with empirical educational research."
        },
        {
          id: "adv-reason-2",
          badge: "Main Reason 2: Social Mobility",
          title: "Unlocking Social Mobility & Eliminating Self-Doubt",
          mainReason:
            "It breaks generational defeatism by encouraging disadvantaged children to aspire toward prestigious, competitive vocations.",
          supportingReasons:
            "Children raised in marginalized environments frequently internalize social ceilings; telling them effort unlocks success provides the vital optimism needed to apply for top universities and careers.",
          example:
            "Pioneering figures from humble origins—such as former presidents, scientists, and entrepreneurs—often cite childhood encouragement as the catalyst that kept them striving.",
          band9Snippet:
            "“Furthermore, this optimistic outlook serves as a catalyst for social mobility by removing defeatist mental ceilings for youngsters from disadvantaged backgrounds.”",
          modelParagraph:
            "Secondly, this message functions as a vital catalyst for upward social mobility. Children from low-income or marginalized demographics frequently absorb defeatist expectations from their surroundings, assuming that elite professions like medicine, law, or engineering are reserved for privileged classes. Instilling the belief that dedication is the ultimate arbiter of success inspires these young individuals to dismantle internal barriers, apply to top-tier universities, and pursue ambitious vocations regardless of their family background.",
          examinerNotes:
            "Directly addresses societal progress and equity, demonstrating deep maturity in Task Response."
        }
      ]
    },
    {
      paraNumber: 2,
      side: "non_opinion",
      title: "Body Para 2: Disadvantages of the 'Achieve Anything' Message",
      theme: "Self-Blame, Psychological Burnout & Disillusionment",
      mainReason:
        "1. Inflicts acute self-blame, chronic anxiety, and burnout; 2. Fosters blindness toward natural biological limitations and systemic hurdles.",
      supportingReasons:
        "If success is framed solely as effort, every failure feels like a shameful personal inadequacy; additionally, it encourages youth to waste years chasing goals physically or structurally unfeasible.",
      example:
        "In high-stakes East Asian school systems, hyper-focus on effort causes severe adolescent depression when hardworking students fail to gain admission to capped elite academies.",
      band9Snippet:
        "“Conversely, propagating this unconstrained narrative produces two profound drawbacks: the onset of acute psychological self-blame and a naive blindness toward tangible genetic limitations.”",
      alternativeReasons: [
        {
          id: "disadv-reason-1",
          badge: "Main Reason 1: Self-Blame & Burnout",
          title: "Acute Psychological Guilt, Perfectionism & Burnout",
          mainReason:
            "Framing success purely as a product of willpower causes children to view every failure as evidence of personal laziness and moral deficiency.",
          supportingReasons:
            "When hardworking children inevitably fall short due to external competition or bad luck, they shoulder crushing guilt, precipitating anxiety, imposter syndrome, and emotional exhaustion.",
          example:
            "In intensely competitive academic cultures across South Korea and Singapore, extreme rates of adolescent stress and depressive symptoms are directly tied to the belief that lower marks mean one simply did not try hard enough.",
          band9Snippet:
            "“The foremost hazard is the onset of acute psychological distress and devastating self-blame; when children are led to believe that success is solely a product of willpower, they inevitably conclude that any failure is a shameful personal inadequacy.”",
          modelParagraph:
            "Conversely, propagating this unconstrained narrative produces two profound drawbacks. The foremost hazard is the onset of acute psychological distress and devastating self-blame. If children are led to believe that success is solely a product of willpower, they inevitably conclude that any failure is a direct personal deficiency, resulting in chronic anxiety, perfectionism, and early burnout. In addition, this simplistic doctrine fosters a naive blindness toward tangible genetic limitations and structural societal barriers, encouraging youngsters to pursue unviable ambitions where natural physical or intellectual prerequisites cannot be bridged by effort alone. For instance, in hyper-competitive educational environments such as South Korea, the relentless expectation that sheer exertion guarantees admission to elite academies has precipitated alarming rates of adolescent depression, as dedicated students shoulder overwhelming guilt when biological aptitudes or systemic bottlenecks prevent them from reaching top percentiles.",
          examinerNotes:
            "Exposes the dark psychological downside of relentless meritocracy with razor-sharp analytical precision."
        },
        {
          id: "disadv-reason-2",
          badge: "Main Reason 2: Inherent Limitations",
          title: "Disregard for Genetic Aptitudes & Structural Barriers",
          mainReason:
            "It promotes an unrealistic worldview that denies biological predispositions, financial inequities, and the undeniable role of luck.",
          supportingReasons:
            "Encouraging children to pursue careers where they lack necessary physical or cognitive attributes leads to squandered time, lost opportunities, and bitter adult disillusionment.",
          example:
            "A person lacking natural pitch perception or height cannot reach elite operatic or professional basketball tiers, regardless of thousands of practice hours.",
          band9Snippet:
            "“Furthermore, this doctrine fosters a naive disregard for biological realities and socioeconomic barriers, inducing youth to invest years chasing vocations where natural prerequisites cannot be bridged by effort alone.”",
          modelParagraph:
            "Additionally, this narrative breeds an ungrounded blindness toward biological predispositions and structural economic bottlenecks. Human beings possess distinct genetic aptitudes; an individual with below-average height or poor stereoscopic vision cannot become a professional basketball player or fighter pilot through sheer determination. Convincing children otherwise squanders precious formative years on unviable dreams, culminating in bitter adult disillusionment when unalterable realities assert themselves.",
          examinerNotes:
            "A compelling argument grounded in biological realism and pragmatic life balance."
        }
      ]
    }
  ],

  // 4. Band 9 Vocabulary List (12 Curated Items with Collocations & Phonetics)
  vocabList: [
    {
      word: "Growth Mindset",
      term: "Growth Mindset",
      phonetic: "/ɡrəʊθ ˈmaɪndset/",
      meaning: "The underlying belief that a person's intelligence, talents, and capabilities can be developed through dedication and effort.",
      definition: "The underlying belief that a person's intelligence, talents, and capabilities can be developed through dedication and effort.",
      example: "Instilling a growth mindset encourages young learners to treat mistakes as stepping stones toward mastery.",
      sampleSentence: "Instilling a growth mindset encourages young learners to treat mistakes as stepping stones toward mastery.",
      collocations: ["cultivate a growth mindset", "embrace a growth mindset", "growth mindset philosophy"]
    },
    {
      word: "Intrinsic Resilience",
      term: "Intrinsic Resilience",
      phonetic: "/ɪnˈtrɪnzɪk rɪˈzɪliəns/",
      meaning: "Inherent psychological toughness and emotional capacity to recover quickly from difficulties.",
      definition: "Inherent psychological toughness and emotional capacity to recover quickly from difficulties.",
      example: "Children who possess intrinsic resilience are far less likely to abandon difficult academic subjects.",
      sampleSentence: "Children who possess intrinsic resilience are far less likely to abandon difficult academic subjects.",
      collocations: ["bolster intrinsic resilience", "exhibit intrinsic resilience", "build emotional resilience"]
    },
    {
      word: "Social Mobility",
      term: "Social Mobility",
      phonetic: "/ˈsəʊʃl məʊˈbɪləti/",
      meaning: "The ability of individuals or families to move up or down the socioeconomic ladder.",
      definition: "The ability of individuals or families to move up or down the socioeconomic ladder.",
      example: "Telling youth that effort yields success serves as a powerful engine for upward social mobility.",
      sampleSentence: "Telling youth that effort yields success serves as a powerful engine for upward social mobility.",
      collocations: ["upward social mobility", "spur social mobility", "generational mobility"]
    },
    {
      word: "Self-Imposed Ceilings",
      term: "Self-Imposed Ceilings",
      phonetic: "/ˌself ɪmˈpəʊzd ˈsiːlɪŋz/",
      meaning: "Artificial psychological limitations or low expectations that individuals place upon their own potential.",
      definition: "Artificial psychological limitations or low expectations that individuals place upon their own potential.",
      example: "The encouraging message empowers disadvantaged pupils to shatter self-imposed ceilings.",
      sampleSentence: "The encouraging message empowers disadvantaged pupils to shatter self-imposed ceilings.",
      collocations: ["dismantle self-imposed ceilings", "eliminate self-imposed barriers", "break mental ceilings"]
    },
    {
      word: "Debilitating Self-Blame",
      term: "Debilitating Self-Blame",
      phonetic: "/dɪˈbɪlɪteɪtɪŋ ˌself ˈbleɪm/",
      meaning: "Crushing guilt and harsh internal criticism that paralyzes a person's mental well-being.",
      definition: "Crushing guilt and harsh internal criticism that paralyzes a person's mental well-being.",
      example: "When promised that effort guarantees victory, failed attempts often lead to debilitating self-blame.",
      sampleSentence: "When promised that effort guarantees victory, failed attempts often lead to debilitating self-blame.",
      collocations: ["inflict debilitating self-blame", "experience self-blame", "shoulder excessive self-blame"]
    },
    {
      word: "Perfectionism & Burnout",
      term: "Perfectionism & Burnout",
      phonetic: "/pəˈfekʃənɪzəm ænd ˈbɜːnaʊt/",
      meaning: "The relentless demand for flawless performance coupled with state of acute physical and mental exhaustion.",
      definition: "The relentless demand for flawless performance coupled with state of acute physical and mental exhaustion.",
      example: "Hyper-competitive adolescents frequently collapse under the combined weight of perfectionism and burnout.",
      sampleSentence: "Hyper-competitive adolescents frequently collapse under the combined weight of perfectionism and burnout.",
      collocations: ["suffer from burnout", "toxic perfectionism", "academic burnout"]
    },
    {
      word: "Innate Aptitude",
      term: "Innate Aptitude",
      phonetic: "/ɪˈneɪt ˈæptɪtjuːd/",
      meaning: "Natural, inborn talent or physiological capability that exists independently of training.",
      definition: "Natural, inborn talent or physiological capability that exists independently of training.",
      example: "No amount of training can fully compensate for a complete lack of innate aptitude in elite athletics.",
      sampleSentence: "No amount of training can fully compensate for a complete lack of innate aptitude in elite athletics.",
      collocations: ["possess innate aptitude", "biological aptitude", "differing innate aptitudes"]
    },
    {
      word: "Structural Inequities",
      term: "Structural Inequities",
      phonetic: "/ˈstrʌktʃərəl ɪnˈekwətiz/",
      meaning: "Systemic, institutional disadvantages in society that restrict opportunity regardless of individual effort.",
      definition: "Systemic, institutional disadvantages in society that restrict opportunity regardless of individual effort.",
      example: "The naive myth that anyone can make it overlooks persistent structural inequities in education.",
      sampleSentence: "The naive myth that anyone can make it overlooks persistent structural inequities in education.",
      collocations: ["entrenched structural inequities", "address structural barriers", "systemic inequities"]
    },
    {
      word: "Bitter Disillusionment",
      term: "Bitter Disillusionment",
      phonetic: "/ˈbɪtə ˌdɪsɪˈluːʒnmənt/",
      meaning: "A painful feeling of disappointment when discovering that an idealized belief is false in reality.",
      definition: "A painful feeling of disappointment when discovering that an idealized belief is false in reality.",
      example: "Young adults face bitter disillusionment when dedication fails to overcome entrenched nepotism.",
      sampleSentence: "Young adults face bitter disillusionment when dedication fails to overcome entrenched nepotism.",
      collocations: ["culminate in disillusionment", "suffer bitter disillusionment", "confront disillusionment"]
    },
    {
      word: "Pragmatic Guidance",
      term: "Pragmatic Guidance",
      phonetic: "/præɡˈmætɪk ˈɡaɪdns/",
      meaning: "Realistic, sensible counsel that considers practical facts and limitations rather than pure idealism.",
      definition: "Realistic, sensible counsel that considers practical facts and limitations rather than pure idealism.",
      example: "Mentors should combine emotional encouragement with pragmatic guidance regarding career choices.",
      sampleSentence: "Mentors should combine emotional encouragement with pragmatic guidance regarding career choices.",
      collocations: ["offer pragmatic guidance", "pragmatic realism", "grounded guidance"]
    },
    {
      word: "Self-Compassion",
      term: "Self-Compassion",
      phonetic: "/ˌself kəmˈpæʃn/",
      meaning: "Treating oneself with kindness and understanding during times of failure or inadequacy.",
      definition: "Treating oneself with kindness and understanding during times of failure or inadequacy.",
      example: "Developing self-compassion allows students to process defeat constructively without feeling worthless.",
      sampleSentence: "Developing self-compassion allows students to process defeat constructively without feeling worthless.",
      collocations: ["cultivate self-compassion", "practice self-compassion", "emotional self-compassion"]
    },
    {
      word: "Tenacity",
      term: "Tenacity",
      phonetic: "/təˈnæsəti/",
      meaning: "The quality of being determined and persistent; refusing to give up easily.",
      definition: "The quality of being determined and persistent; refusing to give up easily.",
      example: "Children praised for their diligence develop the tenacity required to master complex disciplines.",
      sampleSentence: "Children praised for their diligence develop the tenacity required to master complex disciplines.",
      collocations: ["unyielding tenacity", "demonstrate tenacity", "admirable tenacity"]
    }
  ],

  vocabHunt: [
    "growth mindset",
    "resilience",
    "social mobility",
    "self-blame",
    "burnout",
    "aptitude",
    "structural",
    "disillusionment",
    "pragmatic",
    "compassion",
    "tenacity",
    "perfectionism"
  ],

  // 5. Power Expressions for Advantages & Disadvantages
  powerExpressions: [
    {
      expression: "Cultivating an intrinsic growth mindset",
      meaning: "Fostering the belief that competence is expanded through deliberate practice",
      example: "Cultivating an intrinsic growth mindset equips children with resilience against early scholastic failure."
    },
    {
      expression: "Serving as an engine for social mobility",
      meaning: "Acting as a powerful vehicle to help disadvantaged individuals rise economically",
      example: "Optimistic encouragement serves as an engine for social mobility among marginalized youths."
    },
    {
      expression: "Dismantling self-imposed ceilings",
      meaning: "Eliminating internal mental boundaries that prevent ambitious pursuits",
      example: "Telling children they can succeed helps dismantle self-imposed ceilings in competitive fields."
    },
    {
      expression: "Inflicting debilitating self-reproach",
      meaning: "Causing severe personal guilt and emotional torment following a disappointment",
      example: "The belief that effort guarantees success inflicts debilitating self-reproach when goals are not reached."
    },
    {
      expression: "A naive disregard for biological realities",
      meaning: "An unrealistic refusal to acknowledge inborn physical or cognitive boundaries",
      example: "Chasing unviable athletic dreams reflects a naive disregard for biological realities."
    },
    {
      expression: "Balancing aspirational optimism with pragmatic realism",
      meaning: "Pairing high ambition with sensible, objective awareness of constraints",
      example: "Wise educators succeed by balancing aspirational optimism with pragmatic realism."
    }
  ],

  // 6. Strategic Brainstorm Cards (Step 3: Easy to explain on smart board)
  brainstormCards: [
    {
      question: "How does telling children that effort dictates success transform how they handle failure?",
      thinkingLens: "Psychological Attribution: Effort vs Inborn Talent",
      selfCheck: "Does it build grit, or does it make children give up when tasks become hard?",
      idea: "When children believe ability is built through practice (growth mindset), they treat mistakes as lessons; but if told effort always guarantees success, failing makes them feel lazy and ashamed."
    },
    {
      question: "How does this message impact children from economically disadvantaged backgrounds?",
      thinkingLens: "Social Mobility and Psychological Horizons",
      selfCheck: "Does it help break generational poverty or blind them to structural inequality?",
      idea: "It breaks defeatist generational cycles, encouraging underprivileged youth to aim for competitive careers like medicine or law without assuming they are disqualified from birth."
    },
    {
      question: "What happens when an adolescent tries their hardest but still cannot overcome a natural limitation?",
      thinkingLens: "Biological Aptitude vs Unrealistic Expectations",
      selfCheck: "Can dedication really compensate for every physical or cognitive constraint?",
      idea: "Biological constraints (e.g. height in basketball or innate spatial aptitude) cannot be bridged by effort alone; denying this leads to wasted years and bitter adult disillusionment."
    },
    {
      question: "Why do students in high-pressure school systems often suffer high rates of burnout and depression?",
      thinkingLens: "The Dark Side of Meritocracy and Guilt",
      selfCheck: "What occurs when failure is treated solely as a lack of effort?",
      idea: "Because success is framed entirely as personal willpower, students assume failing an exam means they are morally flawed and lazy, leading to chronic anxiety and suicidal ideation."
    }
  ],

  // 7. Connectors Tier & Strategic Linkers
  connectorsTier: {
    sTier: [
      "On the positive side, imparting this empowering philosophy yields two substantial benefits:",
      "Primarily, it cultivates an intrinsic growth mindset...",
      "Furthermore, this outlook serves as an engine for upward social mobility...",
      "Conversely, propagating this unconstrained narrative produces two profound drawbacks:",
      "The foremost hazard is the onset of acute psychological distress and devastating self-blame...",
      "In addition, this simplistic doctrine fosters a naive blindness toward tangible genetic limitations..."
    ],
    aTier: [
      "A compelling illustration of this is evident in...",
      "Consequently, when children fall short of impossible standards,...",
      "In conclusion, while reassuring children that effort unlocks all doors...",
      "It is therefore recommended that educators and guardians balance..."
    ],
    bTier: [
      "On the one hand,... / On the other hand,...",
      "For instance,...",
      "Moreover,...",
      "To summarize,..."
    ]
  },

  strategicLinkers: [
    {
      zone: "Advantages (Body 1)",
      badge: "Positive Merits",
      placementRule: "Use to introduce the primary and secondary psychological advantages",
      items: [
        {
          phrase: "On the positive side, imparting this empowering philosophy yields two substantial benefits:",
          functionDesc: "Topic sentence signaling the presentation of dual positive advantages",
          example: "On the positive side, imparting this empowering philosophy yields two substantial benefits."
        },
        {
          phrase: "Primarily, it cultivates an intrinsic growth mindset...",
          functionDesc: "Introduces the primary internal psychological advantage",
          example: "Primarily, it cultivates an intrinsic growth mindset and a strong work ethic."
        },
        {
          phrase: "Furthermore, this outlook serves as an engine for social mobility...",
          functionDesc: "Connects to the secondary societal and demographic advantage",
          example: "Furthermore, this outlook serves as an engine for social mobility by dismantling defeatist ceilings."
        }
      ]
    },
    {
      zone: "Disadvantages (Body 2)",
      badge: "Negative Perils",
      placementRule: "Use to pivot sharply into the psychological and realistic drawbacks",
      items: [
        {
          phrase: "Conversely, propagating this unconstrained narrative produces two profound drawbacks:",
          functionDesc: "Sharp contrastive topic sentence opening Body Paragraph 2",
          example: "Conversely, propagating this unconstrained narrative produces two profound drawbacks."
        },
        {
          phrase: "The foremost hazard is the onset of acute psychological distress...",
          functionDesc: "Spotlights the most damaging psychological disadvantage",
          example: "The foremost hazard is the onset of acute psychological distress and devastating self-blame."
        },
        {
          phrase: "In addition, this simplistic doctrine fosters a naive blindness toward...",
          functionDesc: "Introduces the secondary limitation regarding genetic and structural constraints",
          example: "In addition, this simplistic doctrine fosters a naive blindness toward tangible genetic limitations."
        }
      ]
    },
    {
      zone: "Recommendation (Conclusion)",
      badge: "Synthesis & Suggestion",
      placementRule: "Use in the final paragraph to deliver a balanced summary and actionable advice",
      items: [
        {
          phrase: "In conclusion, while reassuring children that effort unlocks all doors...",
          functionDesc: "Concessive summary synthesizing both merits and risks",
          example: "In conclusion, while reassuring children that effort unlocks all doors effectively instills tenacity..."
        },
        {
          phrase: "It is therefore recommended that educators and guardians balance...",
          functionDesc: "Delivers the actionable pedagogical recommendation",
          example: "It is therefore recommended that educators and guardians balance aspirational encouragement with pragmatic guidance."
        }
      ]
    }
  ],

  fluidVocab: [
    {
      word: "Growth Mindset",
      pos: "noun phrase",
      meaning: "Belief that intelligence and capabilities can be expanded through practice and learning.",
      naturalCollocation: "cultivate a growth mindset in young learners",
      organicExample: "Instilling a growth mindset encourages children to view academic struggles as constructive stepping stones.",
      mechanicalPitfall: "Avoid writing 'they get good thinking' or 'mind is growing'.",
      examinerInsight: "A high-scoring psychological collocation recognized internationally by Cambridge examiners."
    },
    {
      word: "Debilitating Self-Blame",
      pos: "noun phrase",
      meaning: "Excessive, paralyzing guilt where an individual holds themselves entirely responsible for failure.",
      naturalCollocation: "induce debilitating self-blame after defeat",
      organicExample: "Telling pupils that effort always succeeds induces debilitating self-blame when external competition prevails.",
      mechanicalPitfall: "Avoid simplistic phrases like 'feeling very bad about yourself'.",
      examinerInsight: "Demonstrates precise emotive and psychological vocabulary (Band 9 Lexical Resource)."
    },
    {
      word: "Social Mobility",
      pos: "noun phrase",
      meaning: "The movement of individuals or socioeconomic groups up or down the economic hierarchy.",
      naturalCollocation: "serve as a catalyst for upward social mobility",
      organicExample: "Believing that diligence trumps pedigree functions as a powerful catalyst for upward social mobility.",
      mechanicalPitfall: "Avoid vague phrasing like 'poor people getting rich'.",
      examinerInsight: "Accurately frames demographic and socioeconomic impacts."
    },
    {
      word: "Structural Inequities",
      pos: "noun phrase",
      meaning: "Systemic institutional barriers that restrict opportunity regardless of personal exertion.",
      naturalCollocation: "confront entrenched structural inequities",
      organicExample: "Individual determination often crashes against entrenched structural inequities in higher education.",
      mechanicalPitfall: "Do not confuse with general 'problems' or 'unfair things'.",
      examinerInsight: "Exhibits advanced sociological awareness in IELTS argumentation."
    },
    {
      word: "Pragmatic Realism",
      pos: "noun phrase",
      meaning: "A sensible, grounded approach that evaluates real-world constraints objectively.",
      naturalCollocation: "temper optimism with pragmatic realism",
      organicExample: "Wise mentors temper aspirational enthusiasm with pragmatic realism regarding career viability.",
      mechanicalPitfall: "Avoid informal terms like 'thinking practically'.",
      examinerInsight: "Ideal for the conclusion's recommendation sentence."
    },
    {
      word: "Self-Compassion",
      pos: "noun phrase",
      meaning: "Kindness and emotional forgiveness toward oneself when encountering limitations or defeat.",
      naturalCollocation: "foster emotional resilience and self-compassion",
      organicExample: "Learning self-compassion protects adolescents from the toxic perfectionism of modern meritocracy.",
      mechanicalPitfall: "Avoid confusing with self-pity.",
      examinerInsight: "A highly sophisticated modern psychological term that elevates the essay's conclusion."
    }
  ],

  // Extra helper arrays for compatibility
  consequences: [
    {
      type: "positive",
      title: "Advantage 1: Intrinsic Growth Mindset & Grit",
      desc: "Children learn that ability is developed through practice, making them resilient when encountering academic or athletic hurdles.",
      example: "Dr. Carol Dweck's research confirms that effort-praised students demonstrate far higher persistence.",
      level: "Primary Advantage",
      simpleTakeaway: "Effort equals improvement, not instant defeat.",
      collocation: "cultivate an intrinsic growth mindset"
    },
    {
      type: "positive",
      title: "Advantage 2: Upward Social Mobility & Aspiration",
      desc: "Dismantles defeatist generational mindsets, empowering children from modest origins to pursue elite careers.",
      example: "Underprivileged youth aiming for medical school or engineering without assuming they are disqualified.",
      level: "Secondary Advantage",
      simpleTakeaway: "Breaks internal glass ceilings.",
      collocation: "catalyst for upward social mobility"
    }
  ],

  evaluationArguments: [
    {
      title: "Disadvantage 1: Severe Self-Blame, Anxiety & Burnout",
      reason: "Framing success purely as effort leads children to conclude that any failure is proof of personal laziness and worthlessness.",
      development: "This produces toxic perfectionism and severe mental health crises when goals prove unattainable.",
      example: "High adolescent stress rates in East Asian educational systems tied to extreme academic guilt.",
      type: "argument",
      level: "Primary Disadvantage",
      simpleTakeaway: "Unchecked failure causes mental health collapse.",
      collocation: "induce debilitating self-blame"
    },
    {
      title: "Disadvantage 2: Blindness to Inborn Limits & Structural Realities",
      reason: "Denies biological predispositions and socioeconomic inequalities that effort alone cannot conquer.",
      development: "Encourages young adults to waste years chasing unviable careers, ending in bitter disillusionment.",
      example: "A person with below-average height spending years hoping to become an NBA center.",
      type: "argument",
      level: "Secondary Disadvantage",
      simpleTakeaway: "Effort cannot rewrite biology or economic barriers.",
      collocation: "naive disregard for biological realities"
    }
  ],

  facultyAngles: [
    {
      title: "Educational Psychology",
      development: "Focuses on growth mindset vs performance goals; effort praise builds resilience, while outcome promises trigger anxiety."
    },
    {
      title: "Sociology & Economics",
      development: "Examines the myth of pure meritocracy; systemic inequalities require institutional solutions, not just personal willpower."
    }
  ]
};