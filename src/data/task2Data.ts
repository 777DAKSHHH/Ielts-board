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
    "Balanced Assessment: While encouraging diligence fosters resilience and upward mobility, it must be counterbalanced with pragmatic realism to prevent severe self-blame, burnout, and disillusionment.",

  strongestArgument:
    "Praising effort builds a growth mindset that frees children from defeatism; however, promising that effort guarantees every outcome blinds children to genetic and structural limits, turning unavoidable failure into personal guilt.",

  // 1. Sample introduction planning points
  introPlanningPoints: [
    "Sentence 1 (Paraphrase): In many societies, children are consistently taught that hard work guarantees success in any endeavor.",
    "Sentence 2 (Thesis Statement): While this message fosters admirable resilience and ambition, it also risks severe self-blame and overlooks natural limitations."
  ],

  sampleIntro:
    "In many societies, children are consistently taught that hard work guarantees success in any endeavor. While this message fosters admirable resilience and ambition, it also risks severe self-blame and overlooks natural limitations.",

  // 2. Sample conclusion planning points
  conclusionPlanningPoints: [
    "Sum-up Main Reasons: Diligence fuels perseverance and upward mobility, yet absolutist expectations foster crippling self-reproach and blind youth to unalterable limits.",
    "Suggestion / Recommendation: Parents and educators should balance aspirational encouragement with pragmatic realism and self-compassion."
  ],

  sampleConclusion:
    "In conclusion, while reassuring children that diligence guarantees success fosters admirable tenacity and upward mobility, it can equally inflict crippling self-reproach and blind individuals to inevitable biological boundaries. Educators and guardians should therefore temper aspirational encouragement with pragmatic realism, teaching youth that while striving for excellence is commendable, developing self-compassion when facing unalterable realities is equally vital.",

  // Five-Minute Planning Map — Strictly showing Advantages vs Disadvantages in ONE-LINERS
  fiveMinutePlanningMap: {
    positive: [
      "1. Builds Perseverance: Children practise difficult skills rather than giving up (e.g. struggling math student improving through regular practice).",
      "2. Encourages Self-Confidence & Ambition: Children attempt challenging tasks and ambitious careers (e.g. nervous child auditioning for a school play).",
      "3. Develops Personal Responsibility: Children learn that consistent effort and preparation influence progress rather than waiting for luck.",
      "4. Reduces Fear of Making Mistakes: Children view errors as part of learning rather than incompetence (e.g. child practising bicycle after falling).",
      "5. Fosters Independent Problem-Solving: Children experiment with solutions and take learning ownership (e.g. revising a science project design).",
      "6. Cultivates a Strong Work Ethic: Establishes lifelong habits of practice and discipline (e.g. young athlete gaining fitness and teamwork skills)."
    ],
    negative: [
      "1. Creates Unrealistic Expectations: Overlooks financial limits, unequal opportunities, and aptitude (e.g. hardworking student unable to afford university fees).",
      "2. Leads to Guilt & Low Self-Esteem: Children interpret unavoidable failure as personal inadequacy (e.g. child losing sports match despite thorough prep).",
      "3. Encourages Excessive Pressure & Burnout: Children overwork and sacrifice sleep fearing failure (e.g. student studying late nightly experiencing exhaustion).",
      "4. Confuses Persistence with Misguided Stubbornness: Children persist in unsuitable paths fearing quitting equals failure (e.g. teenager preparing for disliked career).",
      "5. Encourages Unhealthy Social Comparisons: Assumes higher achievers simply worked harder, ignoring unequal tutoring and support (e.g. student feeling inferior to wealthy peer)."
    ],
    position: "4-Paragraph Advantages & Disadvantages Architecture",
    body1: "Body 1 (Advantages): Pick 2 Main Reasons (e.g. Perseverance + Confidence/Problem-Solving) + Supporting Explanation + Relatable Student Example.",
    body2: "Body 2 (Disadvantages): Pick 2 Main Reasons (e.g. Unrealistic Expectations + Guilt/Burnout) + Supporting Explanation + Relatable Real-World Example.",
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
      theme: "Perseverance, Ambition & Independent Problem-Solving",
      mainReason:
        "1. Builds perseverance and personal responsibility; 2. Fosters independent problem-solving and reduces fear of mistakes.",
      supportingReasons:
        "When children believe that effort determines improvement, they view mistakes as natural learning steps and take proactive ownership of difficult tasks.",
      example:
        "A student who performs poorly in mathematics practises regularly and seeks help, while a child learning to ride a bicycle persists after falling instead of quitting out of embarrassment.",
      band9Snippet:
        "“On the positive side, imparting this message yields two primary advantages: cultivating unyielding perseverance in the face of initial failure and fostering independent problem-solving skills.”",
      alternativeReasons: [
        {
          id: "adv-reason-1",
          badge: "Advantage 01 • Builds Perseverance",
          title: "Builds Perseverance & Practice Habits",
          category: "standard",
          mainReason:
            "Children may be more willing to practise difficult skills instead of giving up after initial failure.",
          supportingReasons:
            "Believing that improvement comes from practice encourages children to view difficulty as a normal learning stage rather than a permanent barrier.",
          example:
            "A student who performs poorly in mathematics may practise regularly, seek help and gradually improve their results.",
          band9Snippet:
            "“Primarily, this message instills admirable perseverance, encouraging pupils to practise demanding competencies rather than surrendering after early setbacks.”",
          modelParagraph:
            "On the positive side, imparting this empowering philosophy yields two substantial benefits. Primarily, it builds perseverance; children taught that diligence determines success are far more willing to practise challenging skills instead of quitting after early defeat. A clear example of this is a student who struggles in mathematics; rather than resigning to poor marks, they practise regularly, seek guidance, and steadily elevate their performance. Furthermore, this mindset fosters personal ambition and confidence, encouraging youngsters to audition for competitive roles or pursue demanding vocations without being paralyzed by self-doubt.",
          examinerNotes:
            "Relatable real-world academic perseverance example that examiners find immediately persuasive."
        },
        {
          id: "adv-reason-2",
          badge: "Advantage 02 • Self-Confidence & Ambition",
          title: "Encourages Self-Confidence & Ambition",
          category: "standard",
          mainReason:
            "Children may become more willing to attempt challenging tasks, participate in competitions or pursue demanding careers.",
          supportingReasons:
            "Believing improvement is always achievable lowers the fear of public evaluation and empowers youth to set bolder life targets.",
          example:
            "A child who believes improvement is possible may audition for a school play despite being nervous about performing in public.",
          band9Snippet:
            "“Furthermore, this encouraging belief bolsters self-confidence and ambition, inspiring young individuals to embrace intimidating public challenges.”",
          modelParagraph:
            "Secondly, this message functions as a powerful catalyst for self-confidence and personal ambition. Children conditioned to believe in the efficacy of effort become willing to undertake daunting challenges and enter competitive arenas. For instance, a child who believes that capability is expandable may courageously audition for a school theatrical production despite initial stage fright, recognizing that practice will bridge the gap between inexperience and competence.",
          examinerNotes:
            "Excellent psychological connection between effort attribution and public confidence."
        },
        {
          id: "adv-reason-3",
          badge: "Advantage 03 • Personal Responsibility",
          title: "Develops Personal Responsibility & Agency",
          category: "standard",
          mainReason:
            "Children learn that their choices, preparation and consistent effort can influence their progress rather than waiting for success to happen automatically.",
          supportingReasons:
            "Fosters an internal locus of control, replacing passive reliance on luck with disciplined self-directed preparation.",
          example:
            "A student creates an organized daily revision schedule for exams rather than relying on parents or luck.",
          band9Snippet:
            "“Additionally, it develops a robust sense of personal responsibility, teaching youth that proactive preparation dictates outcomes rather than passive fortune.”",
          modelParagraph:
            "Additionally, this philosophy cultivates a profound sense of personal responsibility. Young learners come to understand that their daily habits, preparation, and discipline directly govern their progress rather than waiting passively for good fortune. For example, a student facing final examinations will proactively design an organized daily revision schedule instead of relying on parental reminders or leaving outcomes to chance.",
          examinerNotes:
            "Emphasizes autonomy and self-directed discipline (Band 9 Task Response)."
        },
        {
          id: "adv-reason-4",
          badge: "Advantage 04 • Less Fear of Mistakes",
          title: "Children Become Less Afraid of Making Mistakes",
          category: "additional",
          mainReason:
            "If children believe that effort leads to improvement, they may see mistakes as part of learning rather than as evidence of incompetence.",
          supportingReasons:
            "Removes the social stigma and embarrassment of error, allowing learners to experiment freely without performance anxiety.",
          example:
            "A child learning to ride a bicycle may keep practising after falling instead of giving up out of embarrassment.",
          band9Snippet:
            "“Crucially, children become far less intimidated by mistakes, interpreting errors as informative feedback rather than humiliating verdicts on their competence.”",
          modelParagraph:
            "Moreover, children exposed to this ethos become significantly less fearful of making errors. When mistakes are viewed as necessary feedback on the road to mastery rather than proofs of incompetence, the emotional stigma of failure dissipates. This is clearly seen when a child learns to ride a bicycle; having fallen repeatedly, they simply brush themselves off and resume pedaling, untroubled by embarrassment because they understand falling is simply part of learning.",
          examinerNotes:
            "Highly original developmental insight that moves beyond conventional motivation cliches."
        },
        {
          id: "adv-reason-5",
          badge: "Advantage 05 • Independent Problem-Solving",
          title: "Fosters Independent Problem-Solving",
          category: "additional",
          mainReason:
            "Rather than immediately asking adults to solve every difficulty, children may experiment with different approaches and take greater ownership of their learning.",
          supportingReasons:
            "Overcomes learned helplessness by cultivating proactive resourcefulness and creative perseverance in the face of obstacles.",
          example:
            "A student struggling with a science project may research alternatives and revise the design instead of abandoning it.",
          band9Snippet:
            "“It also nurtures independent problem-solving skills, as young minds take ownership of their difficulties rather than demanding immediate adult intervention.”",
          modelParagraph:
            "Furthermore, this message nurtures independent problem-solving capabilities. Rather than succumbing to learned helplessness and demanding immediate adult rescue, children are inspired to test alternative solutions. A notable illustration is a student struggling with an uncooperative science project; instead of abandoning the experiment, they independently research alternative designs and iteratively refine their model until it succeeds.",
          examinerNotes:
            "Demonstrates self-regulation and intellectual independence."
        },
        {
          id: "adv-reason-6",
          badge: "Advantage 06 • Stronger Work Ethic",
          title: "Cultivates a Stronger, Lifelong Work Ethic",
          category: "additional",
          mainReason:
            "Repeated encouragement can help establish habits such as regular practice, preparation and discipline, which are valuable even when a particular goal remains out of reach.",
          supportingReasons:
            "Builds enduring self-discipline and character traits that transfer directly into adult professional and personal endeavors.",
          example:
            "A young athlete may not become a professional player but can still gain fitness, discipline and teamwork skills.",
          band9Snippet:
            "“Finally, it establishes an enduring work ethic, instilling disciplined routines whose value persists long after specific childhood targets have passed.”",
          modelParagraph:
            "Finally, this encouragement helps establish a lifelong, transferable work ethic. The daily discipline of structured preparation and regular practice remains immensely valuable even if a specific childhood aspiration is never fulfilled. For example, a young athlete who fails to secure a professional sports contract nonetheless retains physical health, mental resilience, and collaborative teamwork skills that enrich their subsequent adult career.",
          examinerNotes:
            "Pragmatic, mature argument recognizing the long-term utility of work habits."
        }
      ]
    },
    {
      paraNumber: 2,
      side: "non_opinion",
      title: "Body Para 2: Disadvantages of the 'Achieve Anything' Message",
      theme: "Unrealistic Expectations, Guilt & Misguided Stubbornness",
      mainReason:
        "1. Creates unrealistic expectations and excessive burnout; 2. Leads to crippling guilt, low self-esteem, and misguided stubbornness.",
      supportingReasons:
        "When success is framed solely as willpower, children blame themselves for external economic bottlenecks, overwork themselves to exhaustion, and refuse to abandon unsuitable goals.",
      example:
        "A talented student unable to afford university fees feels inadequate, while an overworked pupil experiences severe sleep deprivation and burnout.",
      band9Snippet:
        "“Conversely, propagating this unconstrained narrative entails profound drawbacks: the creation of unrealistic expectations and the infliction of acute self-blame.”",
      alternativeReasons: [
        {
          id: "disadv-reason-1",
          badge: "Disadvantage 01 • Unrealistic Expectations",
          title: "Creates Unrealistic Expectations & Ignores Limits",
          category: "standard",
          mainReason:
            "Children may assume that effort alone guarantees success, overlooking financial limitations, unequal opportunities, natural aptitude or circumstances beyond their control.",
          supportingReasons:
            "Blinds youth to real-world structural bottlenecks and resource barriers that personal exertion alone cannot dismantle.",
          example:
            "A talented student may work extremely hard to enter a prestigious university but still be unable to afford the fees.",
          band9Snippet:
            "“Foremost among these pitfalls is the cultivation of unrealistic expectations, as children are led to overlook tangible financial and systemic constraints.”",
          modelParagraph:
            "Conversely, propagating this unconstrained narrative entails severe disadvantages. Foremost among these is the creation of unrealistic expectations. When youth are told that dedication guarantees every outcome, they fail to account for structural economic hurdles, unequal opportunities, and inborn physical limits. For instance, a remarkably talented student may study relentlessly and earn admission to an elite university, only to find that exorbitant tuition fees render attendance impossible, shattering their worldview through no fault of their own.",
          examinerNotes:
            "Exposes socioeconomic reality and financial boundaries with high persuasive power."
        },
        {
          id: "disadv-reason-2",
          badge: "Disadvantage 02 • Guilt & Low Self-Esteem",
          title: "Leads to Guilt & Damaged Self-Esteem",
          category: "standard",
          mainReason:
            "When children fail despite working hard, they may interpret the outcome as proof that they are not capable or did not try enough.",
          supportingReasons:
            "Because success is framed solely as personal willpower, any loss is internalized as a shameful moral and intellectual shortcoming.",
          example:
            "A child who prepares thoroughly but loses a sports competition may feel personally inadequate rather than recognising the role of other competitors and circumstances.",
          band9Snippet:
            "“Furthermore, it frequently precipitates acute guilt and diminished self-esteem, prompting diligent children to interpret inevitable losses as personal inadequacies.”",
          modelParagraph:
            "Additionally, this doctrine frequently induces deep-seated guilt and diminished self-worth. If children believe that effort always yields victory, any subsequent failure is interpreted not as bad luck or superior competition, but as definitive proof of their own laziness or inadequacy. For example, a young athlete who trains exhaustively yet loses a match may spiral into self-loathing, completely blind to the fact that their opponent possessed greater experience or physiological advantages.",
          examinerNotes:
            "Penetrating psychological analysis of attribution error in young learners."
        },
        {
          id: "disadv-reason-3",
          badge: "Disadvantage 03 • Excessive Pressure & Burnout",
          title: "Encourages Excessive Pressure & Exhaustion",
          category: "standard",
          mainReason:
            "Children may overwork themselves, become afraid of failure or sacrifice sleep and leisure because they believe they must succeed at everything.",
          supportingReasons:
            "The relentless demand for perfection generates chronic anxiety, physical depletion, and early academic burnout.",
          example:
            "A student may study late every night to achieve top grades, eventually experiencing exhaustion and reduced concentration.",
          band9Snippet:
            "“In addition, it encourages excessive pressure and physical exhaustion, as youths sacrifice vital sleep and recreation in pursuit of flawless marks.”",
          modelParagraph:
            "Moreover, this message subjects impressionable minds to excessive psychological pressure and physical exhaustion. Believing that success in every arena is purely a matter of effort, students routinely overwork themselves, sacrificing restorative sleep and recreation. A typical case is an ambitious pupil who studies late every night to maintain flawless grades, only to experience severe fatigue, weakened immunity, and compromised concentration in the examination hall.",
          examinerNotes:
            "Directly addresses modern adolescent health and work-life balance."
        },
        {
          id: "disadv-reason-4",
          badge: "Disadvantage 04 • Misguided Persistence",
          title: "Confuses Persistence with Misguided Stubbornness",
          category: "additional",
          mainReason:
            "They might continue pursuing an unsuitable goal simply because they believe changing direction means they have failed.",
          supportingReasons:
            "Traps individuals in the sunk-cost fallacy, preventing them from pivoting toward vocations better matched to their genuine talents.",
          example:
            "A teenager may continue preparing for a career they dislike rather than exploring a field better suited to their interests.",
          band9Snippet:
            "“A less obvious danger is that youth may confuse healthy perseverance with obstinate refusal to pivot away from unsuitable goals.”",
          modelParagraph:
            "A further, less obvious drawback is that children may confuse healthy perseverance with misguided stubbornness. Conditioned to believe that abandoning any goal equates to personal failure, young people often cling obstinately to unsuitable pursuits. For instance, a teenager may spend years miserably preparing for a medical career they detest simply because quitting feels like cowardice, missing valuable opportunities to flourish in fields aligned with their natural affinities.",
          examinerNotes:
            "Brilliant analysis of the sunk-cost fallacy in youth career planning."
        },
        {
          id: "disadv-reason-5",
          badge: "Disadvantage 05 • Unhealthy Comparisons",
          title: "Encourages Unhealthy Social Comparisons",
          category: "additional",
          mainReason:
            "Children may assume that anyone who achieves more must have worked harder, overlooking differences in support, resources, prior experience and individual circumstances.",
          supportingReasons:
            "Breeds unwarranted feelings of inferiority or false arrogance, ignoring the immense role of private tutoring, wealth, and genetics.",
          example:
            "A student who receives lower marks than a classmate may feel inferior despite having made substantial progress.",
          band9Snippet:
            "“Finally, it invites corrosive social comparisons, prompting pupils to assume that peers who outperform them merely worked harder, regardless of systemic advantages.”",
          modelParagraph:
            "Finally, this simplistic outlook fuels toxic social comparisons. Children frequently assume that any classmate who scores higher simply exerted greater discipline, entirely overlooking disparities in parental assistance, private tutoring, or early childhood enrichment. Consequently, a hardworking student who makes tremendous personal progress may still feel bitter and inferior when outranked by an affluent peer who had access to expensive educational resources.",
          examinerNotes:
            "Highly sophisticated sociological argument exposing the myth of meritocratic equality."
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
      word: "Tenacity & Grit",
      term: "Tenacity & Grit",
      phonetic: "/təˈnæsəti ænd ɡrɪt/",
      meaning: "The quality of persistent determination and courage when working toward long-term goals.",
      definition: "The quality of persistent determination and courage when working toward long-term goals.",
      example: "Teaching children that skills improve with practice fosters the tenacity needed to master difficult subjects.",
      sampleSentence: "Teaching children that skills improve with practice fosters the tenacity needed to master difficult subjects.",
      collocations: ["unyielding tenacity", "demonstrate grit", "cultivate persistence and grit"]
    },
    {
      word: "Toxic Perfectionism",
      term: "Toxic Perfectionism",
      phonetic: "/ˈtɒksɪk pəˈfekʃənɪzəm/",
      meaning: "The pathological belief that anything less than flawless perfection is a humiliating personal failure.",
      definition: "The pathological belief that anything less than flawless perfection is a humiliating personal failure.",
      example: "Promising that effort guarantees every outcome inadvertently breeds toxic perfectionism in impressionable children.",
      sampleSentence: "Promising that effort guarantees every outcome inadvertently breeds toxic perfectionism in impressionable children.",
      collocations: ["foster toxic perfectionism", "paralyzing perfectionism", "combat perfectionism"]
    },
    {
      word: "Meritocratic Fallacy",
      term: "Meritocratic Fallacy",
      phonetic: "/ˌmerɪtəˈkrætɪk ˈfæləsi/",
      meaning: "The flawed assumption that individual success is determined solely by effort, ignoring systemic privilege and luck.",
      definition: "The flawed assumption that individual success is determined solely by effort, ignoring systemic privilege and luck.",
      example: "Telling disadvantaged youth that willpower conquers all perpetuates the meritocratic fallacy by downplaying structural poverty.",
      sampleSentence: "Telling disadvantaged youth that willpower conquers all perpetuates the meritocratic fallacy by downplaying structural poverty.",
      collocations: ["expose the meritocratic fallacy", "myth of meritocracy", "critique meritocracy"]
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
    "perfectionism",
    "meritocratic"
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
      question: "What happens when a student who performs poorly in mathematics is told they can achieve anything?",
      thinkingLens: "Academic Perseverance vs Giving Up Early",
      selfCheck: "Does it build steady practice habits or cause immediate surrender?",
      idea: "Believing improvement is possible encourages the student to practise regularly, seek help, and steadily elevate their performance instead of giving up."
    },
    {
      question: "How does this belief encourage a nervous child when considering a public school play audition?",
      thinkingLens: "Self-Confidence, Courage & Expanding Ambition",
      selfCheck: "Does knowing ability can grow lower the paralyzing fear of public failure?",
      idea: "The child auditions despite stage fright, knowing that skills and confidence develop through repeated practice rather than being an innate gift."
    },
    {
      question: "Why does a child learning to ride a bicycle keep practising after falling off?",
      thinkingLens: "Redefining Mistakes: Part of Learning vs Evidence of Incompetence",
      selfCheck: "What separates healthy persistence from embarrassment and quitting?",
      idea: "When effort leads to improvement, falling is seen as natural feedback rather than incompetence, eliminating embarrassment and sustaining determination."
    },
    {
      question: "How does a student react when an important science project design malfunctions?",
      thinkingLens: "Independent Problem-Solving vs Learned Helplessness",
      selfCheck: "Do they abandon the project or take proactive ownership?",
      idea: "Instead of immediately demanding adult intervention or quitting, the student independently tests alternative designs and takes ownership of their learning."
    },
    {
      question: "What happens when a hardworking student earns university admission but cannot afford tuition fees?",
      thinkingLens: "Unrealistic Expectations vs Financial & Structural Realities",
      selfCheck: "Can sheer effort overcome severe economic inequality alone?",
      idea: "Promising that effort guarantees success blinds youth to external financial limits, leading to bitter disappointment when poverty blocks attendance."
    },
    {
      question: "Why does a child who loses a sports competition despite thorough training feel deeply inadequate?",
      thinkingLens: "Unfair Self-Blame & Ignoring External Competitors",
      selfCheck: "What happens when failure is interpreted purely as a personal defect?",
      idea: "If children believe effort always wins, losing makes them feel personally incapable, ignoring competitors' superior experience or circumstances."
    },
    {
      question: "Why do students who study late every night often end up exhausted and unfocused in exams?",
      thinkingLens: "Excessive Pressure, Sleep Deprivation & Academic Burnout",
      selfCheck: "Does the belief that you must succeed at everything lead to overwork?",
      idea: "Fear of failure drives students to sacrifice sleep and recreation, causing chronic physical fatigue and cognitive burnout rather than success."
    },
    {
      question: "Why might a teenager continue preparing for a career they detest instead of switching fields?",
      thinkingLens: "Confusing Persistence with Misguided Stubbornness",
      selfCheck: "Does the fear of quitting prevent healthy, intelligent pivots?",
      idea: "Believing that changing direction equates to failure traps youngsters in disliked paths, preventing them from exploring careers matched to their natural talents."
    },
    {
      question: "Why does a student who receives lower test marks than a classmate with private tutors feel inferior?",
      thinkingLens: "Unhealthy Social Comparisons & Meritocratic Fallacy",
      selfCheck: "Do children overlook differences in resources, tutoring, and support?",
      idea: "Children assume the higher achiever simply worked harder, overlooking disparities in tutoring and wealth, producing unwarranted feelings of personal inferiority."
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
      title: "Advantage 01: Builds Perseverance",
      category: "standard",
      desc: "Children may be more willing to practise difficult skills instead of giving up after initial failure.",
      example: "A student who performs poorly in mathematics may practise regularly, seek help and gradually improve their results.",
      level: "Core Advantage",
      simpleTakeaway: "Effort drives steady practice over early surrender.",
      collocation: "cultivate unyielding perseverance"
    },
    {
      type: "positive",
      title: "Advantage 02: Self-Confidence & Ambition",
      category: "standard",
      desc: "Children may become more willing to attempt challenging tasks, participate in competitions or pursue demanding careers.",
      example: "A child who believes improvement is possible may audition for a school play despite being nervous about performing in public.",
      level: "Core Advantage",
      simpleTakeaway: "Expands courage and ambitious life horizons.",
      collocation: "bolster self-confidence and ambition"
    },
    {
      type: "positive",
      title: "Advantage 03: Personal Responsibility",
      category: "standard",
      desc: "Children learn that their choices, preparation and consistent effort can influence their progress rather than waiting for success automatically.",
      example: "A student creates an organized daily revision schedule for exams rather than relying on parents or luck.",
      level: "Core Advantage",
      simpleTakeaway: "Fosters an internal locus of control and agency.",
      collocation: "develop a sense of personal responsibility"
    },
    {
      type: "positive",
      title: "Advantage 04: Less Fear of Making Mistakes",
      category: "additional",
      desc: "If children believe effort leads to improvement, they see mistakes as part of learning rather than evidence of incompetence.",
      example: "A child learning to ride a bicycle may keep practising after falling instead of giving up out of embarrassment.",
      level: "Real-Life Angle",
      simpleTakeaway: "Dissolves embarrassment, treating errors as feedback.",
      collocation: "view mistakes as iterative feedback"
    },
    {
      type: "positive",
      title: "Advantage 05: Independent Problem-Solving",
      category: "additional",
      desc: "Rather than immediately asking adults to solve every difficulty, children experiment with different approaches and take ownership.",
      example: "A student struggling with a science project may research alternatives and revise the design instead of abandoning it.",
      level: "Real-Life Angle",
      simpleTakeaway: "Overcomes learned helplessness with creative autonomy.",
      collocation: "foster independent problem-solving skills"
    },
    {
      type: "positive",
      title: "Advantage 06: Stronger Work Ethic",
      category: "additional",
      desc: "Repeated encouragement helps establish habits of regular practice, preparation and discipline whose value persists lifelong.",
      example: "A young athlete may not become a professional player but can still gain fitness, discipline and teamwork skills.",
      level: "Real-Life Angle",
      simpleTakeaway: "Builds transferable lifelong habits of discipline.",
      collocation: "instill an enduring work ethic"
    }
  ],

  evaluationArguments: [
    {
      title: "Disadvantage 01: Creates Unrealistic Expectations",
      category: "standard",
      reason: "Children may assume that effort alone guarantees success, overlooking financial limitations, unequal opportunities, and inborn limits.",
      development: "Blinds youth to real-world structural bottlenecks and resource barriers that personal exertion alone cannot dismantle.",
      example: "A talented student may work extremely hard to enter a prestigious university but still be unable to afford the fees.",
      type: "argument",
      level: "Core Drawback",
      simpleTakeaway: "Willpower cannot overcome structural and financial limits alone.",
      collocation: "cultivate unrealistic expectations"
    },
    {
      title: "Disadvantage 02: Leads to Guilt & Low Self-Esteem",
      category: "standard",
      reason: "When children fail despite working hard, they may interpret the outcome as proof that they are not capable or did not try enough.",
      development: "Because success is framed solely as willpower, any loss is internalized as a shameful moral and personal inadequacy.",
      example: "A child who prepares thoroughly but loses a sports competition may feel personally inadequate rather than recognising competitors' advantages.",
      type: "argument",
      level: "Core Drawback",
      simpleTakeaway: "Framing all failure as laziness breeds self-loathing.",
      collocation: "inflict acute guilt and self-reproach"
    },
    {
      title: "Disadvantage 03: Encourages Excessive Pressure & Burnout",
      category: "standard",
      reason: "Children may overwork themselves, become afraid of failure or sacrifice sleep and leisure because they believe they must succeed at everything.",
      development: "The unrelenting demand for continuous striving precipitates chronic physical fatigue, emotional burnout, and weakened focus.",
      example: "A student may study late every night to achieve top grades, eventually experiencing exhaustion and reduced concentration.",
      type: "argument",
      level: "Core Drawback",
      simpleTakeaway: "Sacrificing rest and recreation causes early burnout.",
      collocation: "succumb to severe academic burnout"
    },
    {
      title: "Disadvantage 04: Confuses Persistence with Misguided Stubbornness",
      category: "additional",
      reason: "Children might continue pursuing an unsuitable goal simply because they believe changing direction means they have failed.",
      development: "Traps young people in the sunk-cost fallacy, preventing them from pivoting toward vocations better matched to their genuine talents.",
      example: "A teenager may continue preparing for a career they dislike rather than exploring a field better suited to their interests.",
      type: "argument",
      level: "Real-Life Angle",
      simpleTakeaway: "Fear of quitting prevents intelligent career pivots.",
      collocation: "confuse persistence with obstinacy"
    },
    {
      title: "Disadvantage 05: Encourages Unhealthy Social Comparisons",
      category: "additional",
      reason: "Children may assume that anyone who achieves more must have worked harder, overlooking differences in support, resources, and circumstances.",
      development: "Breeds unwarranted feelings of inferiority or false superiority, ignoring the immense role of private tutoring and wealth disparities.",
      example: "A student who receives lower marks than a classmate may feel inferior despite having made substantial progress.",
      type: "argument",
      level: "Real-Life Angle",
      simpleTakeaway: "Ignores tutoring and resource disparities, damaging self-worth.",
      collocation: "invite corrosive social comparisons"
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