import type {
  BodyParaStructure,
  BrainstormCard,
  ConsequenceItem,
  EvaluationArgument,
  FacultyAngle,
  FluidVocabItem,
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
  StrategicLinkerGroup,
  Task2Data,
  VocabItem
};

export const TASK2_DATA: Task2Data = {
  id: "ai-replace-teachers-classroom-task2",

  taskType: "Agree or Disagree (To what extent do you agree or disagree?)",

  title: "IELTS Writing Task 2 — AI Replacing Teachers in the Classroom",

  questionText:
    "Artificial intelligence will soon replace teachers in the classroom.\n\nTo what extent do you agree or disagree?",

  audioUrl: "materials/Staying_Young_as_a_Survival_Tactic.m4a",

  timingSeconds: 180,

  recommendedPosition: "Largely disagree (AI is an augmentative tool, not a human replacement)",

  strongestArgument:
    "The strongest argument is that while artificial intelligence can deliver tailored learning drills and automate routine administrative grading, it fundamentally lacks the emotional intelligence, moral mentorship, and spontaneous facilitation required for holistic human education.",

  // 1. Sample introduction planning points
  introPlanningPoints: [
    "Paraphrase: The prospect of artificial intelligence supplanting human educators in the classroom.",
    "Opinion: Largely disagree with full replacement.",
    "Main reasons: AI serves as an augmentative tool, but human teachers provide irreplaceable emotional empathy, ethical mentorship, and critical discourse."
  ],

  sampleIntro:
    "With rapid advances in educational technology, it is often argued that artificial intelligence will soon supersede human teachers in the classroom. While I acknowledge that intelligent algorithms can enhance personalized instruction and automate routine administrative tasks, I largely disagree that they will ever fully replace human educators, whose emotional empathy, ethical mentorship, and dynamic classroom leadership remain fundamentally irreplaceable.",

  // 2. Sample conclusion planning points
  conclusionPlanningPoints: [
    "Main ideas: AI excels at automated grading and customized drill delivery (augmentative aid).",
    "Irreplaceable human core: Empathy, psychological pastoral care, and fostering ethical critical thinking.",
    "Restate opinion: AI will empower teachers, never replace them."
  ],

  sampleConclusion:
    "In conclusion, although artificial intelligence is poised to revolutionize schooling by automating assessment marking and tailoring practice drills to individual learning paces, I firmly disagree that it will replace classroom teachers. The essence of genuine education lies not merely in information retrieval, but in human empathy, moral stewardship, and inspirational mentorship—qualities that no algorithmic software can ever replicate.",

  // Five-Minute Planning Map & Teaching Recommendation
  fiveMinutePlanningMap: {
    positive: [
      "Emotional intelligence & pastoral care → supporting distressed or struggling learners",
      "Critical thinking & moral debate → challenging cognitive biases and ethical dilemmas",
      "Spontaneous classroom facilitation → inspiring curiosity and collaborative discovery"
    ],
    negative: [
      "Personalized pacing → adaptive drills customized to individual student velocity",
      "Administrative efficiency → instantaneous grading of objective tests and homework",
      "Scalable database access → 24/7 interactive knowledge retrieval"
    ],
    position: "Largely Disagree",
    body1: "Body 1 (Opinion): Irreplaceable emotional empathy, pastoral care, and psychological encouragement",
    body2: "Body 2 (Opinion): Cultivating independent critical thinking, ethical reasoning, and debate moderation",
    teachingRecommendation:
      "Instruct students to follow the exact format: 1 Main reason + Supporting reasons + Example for every body paragraph. Build Body 1 on emotional empathy and pastoral care, Body 2 on critical thinking and moral mentorship, and use Body 3 to concede AI's augmentative role in personalized drills and grading automation. Conclude decisively that assisting a teacher is fundamentally distinct from replacing one."
  },

  // Strongest Classroom Discussion Question
  classroomDiscussion: {
    question:
      "Can an algorithm inspire a child to love learning or comfort a student in tears the way a dedicated human teacher does?",
    followUps: [
      "What is the difference between transmitting information and genuine pedagogical teaching?",
      "Can artificial intelligence teach ethics and moral philosophy when it possesses no consciousness?",
      "Does automating homework grading mean the teacher is being replaced, or merely assisted?"
    ],
    pedagogicalInsight:
      "These questions help students realize that education is fundamentally relational and ethical, whereas computer programs are merely cognitive calculators."
  },

  // 3. Student Idea Bank & Body Paragraph Formats (Strict Format: 1 Main reason + Supporting reasons + Example)
  bodyParagraphs: [
    {
      paraNumber: 1,
      side: "strong_opinion",
      title: "Body Para 1 (Opinion Side) — Emotional Intelligence & Pastoral Care",
      theme: "Emotional Intelligence, Pastoral Empathy & Human Relational Support",
      mainReason:
        "Human educators possess emotional intelligence and psychological empathy, which are vital for student well-being and entirely beyond algorithmic replication.",
      supportingReasons:
        "Education is fundamentally a relational human journey. Learners, particularly young children and teenagers, routinely encounter emotional distress, self-doubt, and social friction. An observant teacher offers compassionate encouragement, emotional stability, and pastoral guidance, whereas an artificial intelligence system is inherently cold and incapable of genuine feeling.",
      example:
        "When an adolescent experiences acute exam anxiety or family bereavement, an attentive teacher recognizes non-verbal behavioral shifts and adapts expectations with warmth, whereas an algorithm would merely record missed deadlines as academic delinquency.",
      band9Snippet:
        "“Foremost among the reasons why artificial intelligence cannot supplant educators is that learning is an inherently relational endeavor requiring emotional intelligence and pastoral empathy.”",
      alternativeReasons: [
        {
          id: "body1-alt1",
          badge: "Reason 1 • Pastoral Empathy",
          title: "Pastoral Empathy & Psychological Safety",
          mainReason:
            "Human educators possess emotional intelligence and psychological empathy, which are vital for student well-being and entirely beyond algorithmic replication.",
          supportingReasons:
            "Education is fundamentally a relational human journey. Learners, particularly young children and teenagers, routinely encounter emotional distress, self-doubt, and social friction. An observant teacher offers compassionate encouragement, emotional stability, and pastoral guidance, whereas an artificial intelligence system is inherently cold and incapable of genuine feeling.",
          example:
            "When an adolescent experiences acute exam anxiety or family bereavement, an attentive teacher recognizes non-verbal behavioral shifts and adapts expectations with warmth, whereas an algorithm would merely record missed deadlines as academic delinquency.",
          band9Snippet:
            "“Foremost among the reasons why artificial intelligence cannot supplant educators is that learning is an inherently relational endeavor requiring emotional intelligence and pastoral empathy.”",
          modelParagraph:
            "Foremost among the reasons why artificial intelligence cannot supplant educators is that learning is an inherently relational endeavor requiring emotional intelligence and pastoral empathy. Children and adolescents do not merely acquire data; they undergo profound psychological development during which they frequently experience motivational crises, anxiety, and personal adversity. A human teacher can perceive subtle behavioral cues, listen with genuine compassion, and provide the psychological reassurance necessary to restore a pupil’s confidence. In contrast, artificial intelligence systems, regardless of their sophisticated computational power, possess zero consciousness or empathy. For example, when a student struggles academically due to domestic distress or bereavement, a sensitive teacher adapts deadlines and offers counseling, whereas an automated program would rigidly penalize the late submission as a quantitative failure.",
          examinerNotes:
            "High emotional resonance. Explains the critical boundary between machine computation and human relational connection."
        },
        {
          id: "body1-alt2",
          badge: "Reason 2 • Inspiration & Mentorship",
          title: "Inspirational Role Modeling & Character Formation",
          mainReason:
            "Teachers act as inspirational role models whose life stories, passion, and personal character stimulate a lifelong love of learning.",
          supportingReasons:
            "A charismatic teacher instills enthusiasm through shared human experiences, enthusiasm for their subject, and personal vulnerability. Algorithms can deliver curriculum checklists, but they cannot inspire passion or serve as ethical figures that young people seek to emulate.",
          example:
            "Countless accomplished scientists and writers attribute their life achievements to a specific school teacher who believed in their potential and ignited their curiosity.",
          band9Snippet:
            "“Beyond transmitting knowledge, teachers serve as vital role models whose infectious enthusiasm and personal mentorship kindle long-term academic ambition.”",
          modelParagraph:
            "Equally critical is the role of human teachers as inspirational role models whose personal passion can kindle lifelong academic ambition. Education is fundamentally ignited by human connection; when students witness an educator's authentic enthusiasm for literature, history, or mathematics, they are motivated to push past cognitive hurdles. An algorithm operates entirely on mechanical logic, devoid of genuine passion or human conviction. For instance, numerous renowned scientists and Nobel laureates recount that their career trajectory was not catalyzed by reading textbooks, but by a devoted instructor who recognized their unique spark, believed in their potential, and pushed them to excel.",
          examinerNotes:
            "Focuses on inspirational mentorship and long-term academic motivation."
        },
        {
          id: "body1-alt3",
          badge: "Reason 3 • Dynamic Conflict Resolution",
          title: "Interpersonal Socialization & Conflict Resolution",
          mainReason:
            "Classrooms are micro-societies where teachers teach students how to negotiate conflicts, collaborate harmoniously, and build social maturity.",
          supportingReasons:
            "Socialization is one of the primary pillars of schooling. Managing bullying, resolving playground disputes, and teaching children to cooperate with differing temperaments require acute human diplomacy that software cannot manage.",
          example:
            "When group work devolves into peer friction or social exclusion, a teacher steps in to mediate disagreements and guide students toward constructive compromise.",
          band9Snippet:
            "“Human teachers serve as essential mediators of social cohesion, teaching children the nuanced interpersonal skills needed to thrive within diverse communities.”",
          modelParagraph:
            "Furthermore, classrooms function as vital social crucibles where children learn to interact, collaborate, and resolve interpersonal discord under human supervision. Schooling is not conducted in solitary isolation; it involves group dynamics, teamwork, and navigating social friction. A human teacher intuitively manages classroom chemistry, detects bullying, and guides alienated students toward productive group integration. A digital interface cannot mediate playground squabbles or cultivate empathy among squabbling peers. For example, when cooperative projects break down due to personality clashes, an experienced teacher uses the moment as a lesson in negotiation, a pedagogical intervention entirely beyond algorithmic capability.",
          examinerNotes:
            "Highlights social learning theory and the classroom as an interpersonal community."
        }
      ]
    },
    {
      paraNumber: 2,
      side: "strong_opinion",
      title: "Body Para 2 (Opinion Side) — Critical Thinking, Ethics & Debate",
      theme: "Higher-Order Cognitive Skills, Ethical Discernment & Socratic Discourse",
      mainReason:
        "Cultivating independent critical thinking, ethical reasoning, and collaborative civic discourse requires active human facilitation rather than pre-programmed responses.",
      supportingReasons:
        "True education extends far beyond rote memorization of factual data; it involves challenging preconceptions, dissecting moral dilemmas, and participating in spontaneous classroom debate. While algorithms merely assemble predictive textual patterns from historical databases, human mentors provoke intellectual curiosity, challenge cognitive biases, and model moral integrity.",
      example:
        "In a history or literature seminar evaluating contentious historical events, an experienced teacher challenges students' assumptions and moderates respectful debate, orchestrating nuances that a pre-programmed chatbot cannot navigate.",
      band9Snippet:
        "“Equally significant is that cultivating higher-order cognitive faculties and moral reasoning necessitates spontaneous human dialogue and intellectual challenge.”",
      alternativeReasons: [
        {
          id: "body2-alt1",
          badge: "Reason 1 • Socratic Dialogue",
          title: "Socratic Debate & Questioning Preconceptions",
          mainReason:
            "Developing analytical rigor and nuanced argumentation depends on spontaneous Socratic questioning that forces students to justify their beliefs.",
          supportingReasons:
            "An experienced teacher can immediately detect logical fallacies in a student's verbal reasoning and pivot the discussion with counter-questions, fostering genuine intellectual agility rather than mechanical information retrieval.",
          example:
            "During a high school debate on environmental legislation, a teacher prompts students to reconcile conflicting economic and moral priorities through real-time philosophical inquiry.",
          band9Snippet:
            "“Socratic intellectual inquiry thrives upon dynamic teacher-led dialogue, compelling pupils to confront logical inconsistencies and defend complex hypotheses.”",
          modelParagraph:
            "Equally important is that cultivating critical thinking, ethical reasoning, and intellectual discernment necessitates dynamic human facilitation. Genuine education transcends rote memorization of static facts; it requires learners to interrogate orthodoxies, identify subtle biases, and engage in spontaneous debate. A human instructor employs Socratic questioning to challenge superficial thinking, pressing students to justify their assertions and consider alternate perspectives. Artificial intelligence, which merely synthesizes historical statistical correlations, is ill-equipped to guide philosophical inquiries or ethical debates. For instance, in a classroom discussion concerning bioethics or civil rights, a teacher skillfully steers the dialogue through moral ambiguities, prompting students to formulate independent convictions rather than accepting standardized algorithmic answers.",
          examinerNotes:
            "Targets Task Achievement at Band 9 by contrasting dynamic human inquiry with static computational databases."
        },
        {
          id: "body2-alt2",
          badge: "Reason 2 • Ethical Stewardship",
          title: "Moral Guidance & Ethical Character Building",
          mainReason:
            "Education is intrinsically linked to moral stewardship and instilling ethical values such as honesty, justice, and civic responsibility.",
          supportingReasons:
            "AI systems are trained on web text that frequently contains societal biases, misinformation, or moral apathy. Human educators embody moral accountability and teach students to distinguish right from wrong through lived ethical examples.",
          example:
            "When dealing with academic dishonesty or plagiarism, a teacher transforms an infraction into an impactful moral lesson about personal integrity.",
          band9Snippet:
            "“Teachers act as ethical anchors who instill enduring moral values and civic responsibility, whereas synthetic models operate without moral conscience.”",
          modelParagraph:
            "Moreover, educators serve as indispensable moral guides who cultivate ethical character, honesty, and civic responsibility in future generations. Artificial intelligence models are fundamentally amoral systems trained on uncurated internet data, often perpetuating algorithmic biases without moral awareness. Human teachers, by contrast, teach integrity through daily conduct, disciplining unfair behavior and instilling values of fairness and community service. For example, when an adolescent engages in academic dishonesty or cheating, a teacher does not simply issue an automatic grade deduction; they conduct a serious conversation about honor and personal responsibility, transforming an error into a formative ethical milestone.",
          examinerNotes:
            "Emphasizes character education and moral development as human-exclusive domains."
        },
        {
          id: "body2-alt3",
          badge: "Reason 3 • Adaptability to Diverse Needs",
          title: "Real-Time Pedagogical Intuition & Adaptive Delivery",
          mainReason:
            "Experienced educators possess professional intuition that enables them to spontaneously redesign lesson delivery when they sense a class is disengaged or confused.",
          supportingReasons:
            "While software follows rigid decision trees, human teachers can read the room, tell an illustrative anecdote, or switch to kinesthetic group work on the fly based on subtle collective energy.",
          example:
            "Noticing an afternoon class struggling with a dense theoretical physics concept, a teacher pivots to a spontaneous physical demonstration with everyday classroom objects.",
          band9Snippet:
            "“Experienced teachers wield an intuitive pedagogical flexibility that allows them to re-energize an exhausted classroom through spontaneous creative adaptations.”",
          modelParagraph:
            "Additionally, human teachers possess an intuitive pedagogical flexibility that allows them to adjust their instruction spontaneously in response to room dynamics. While artificial intelligence follows pre-programmed scripts and user metrics, an educator can sense when a whole classroom is mentally fatigued, distracted, or genuinely bewildered by a complex concept. They can immediately alter their tone, introduce an impromptu interactive demonstration, or tell a memorable humorous anecdote to re-engage attention. For instance, an intuitive science teacher observing blank stares during a lecture on molecular physics can abruptly set aside the textbook and stage an interactive physical simulation, an instinctive adaptation that rigid algorithmic tutors cannot match.",
          examinerNotes:
            "Highlights the intuitive, non-linear art of classroom teaching."
        }
      ]
    },
    {
      paraNumber: 3,
      side: "non_opinion",
      title: "Body Para 3 (Non-Opinion Side) — AI's Augmentative Efficiency & Personalized Pacing",
      theme: "Personalized Practice Drills, Administrative Relief & Scalable Tutoring",
      mainReason:
        "On the other hand, proponents legitimately emphasize that artificial intelligence has immense value as an augmentative educational aid that personalizes practice drills and streamlines administrative duties.",
      supportingReasons:
        "Intelligent tutoring platforms can instantaneously analyze individual performance metrics, dynamically adapting the difficulty of mathematical problem sets or foreign language vocabulary to a pupil's exact pace. Furthermore, automating routine paper grading frees teachers from administrative burdens.",
      example:
        "Adaptive software like Khan Academy or Duolingo enables students to practice foundational concepts at their own speed with immediate diagnostic feedback, allowing teachers to dedicate their classroom hours to higher-level discussions.",
      band9Snippet:
        "“On the other hand, proponents rightfully point out that artificial intelligence can function as an exceptional augmentative tool by optimizing repetitive tasks and customizing foundational exercises.”",
      alternativeReasons: [
        {
          id: "body3-alt1",
          badge: "Reason 1 • Personalized Pacing",
          title: "Adaptive Learning Pacing & Instant Feedback",
          mainReason:
            "On the other hand, proponents legitimately emphasize that artificial intelligence has immense value as an augmentative educational aid that personalizes practice drills and streamlines administrative duties.",
          supportingReasons:
            "Intelligent tutoring platforms can instantaneously analyze individual performance metrics, dynamically adapting the difficulty of mathematical problem sets or foreign language vocabulary to a pupil's exact pace. Furthermore, automating routine paper grading frees teachers from administrative burdens.",
          example:
            "Adaptive software like Khan Academy or Duolingo enables students to practice foundational concepts at their own speed with immediate diagnostic feedback, allowing teachers to dedicate their classroom hours to higher-level discussions.",
          band9Snippet:
            "“On the other hand, proponents rightfully point out that artificial intelligence can function as an exceptional augmentative tool by optimizing repetitive tasks and customizing foundational exercises.”",
          modelParagraph:
            "On the other hand, proponents of educational technology legitimately argue that artificial intelligence offers unprecedented benefits as a supplementary learning tool. Intelligent tutoring platforms can process vast pedagogical databases and track individual learning trajectories with surgical precision. By diagnosing a student's specific gaps in mathematics or grammar, algorithmic software can instantly generate customized exercises tailored to their unique pace, preventing gifted students from feeling bored and slower learners from falling behind. For example, platforms such as Khan Academy utilize machine learning algorithms to provide real-time hints and adaptive problem sets for homework. However, delivering customized drills is essentially an augmentative mechanism that enhances teacher effectiveness, rather than a justification for replacing educators altogether.",
          examinerNotes:
            "Demonstrates high balance. Acknowledges the strengths of AI without conceding the main thesis."
        },
        {
          id: "body3-alt2",
          badge: "Reason 2 • Administrative Liberation",
          title: "Automating Grading & Administrative Tedium",
          mainReason:
            "AI can eliminate the crushing burden of administrative paperwork and marking, liberating educators to spend more time directly mentoring students.",
          supportingReasons:
            "Teachers spend dozens of unpaid hours each week grading objective quizzes, entering attendance data, and drafting standardized reports. AI can automate these clerical tasks instantaneously.",
          example:
            "Automated assessment tools can evaluate multiple-choice papers and basic grammar tests in seconds, generating diagnostic class performance reports for the teacher.",
          band9Snippet:
            "“By automating tedious marking and clerical paperwork, intelligent systems empower teachers to reallocate their finite hours toward high-impact personal tutoring.”",
          modelParagraph:
            "Furthermore, artificial intelligence holds extraordinary promise in liberating educators from the crushing administrative workload that currently triggers widespread teacher burnout. A substantial portion of a teacher’s working week is consumed by repetitive clerical tasks, such as marking multiple-choice exams, recording attendance data, and compiling routine administrative documentation. Modern machine-learning applications can evaluate objective assessments instantaneously and identify class-wide conceptual weaknesses in seconds. For instance, automated scoring software can process hundreds of standardized tests in moments, freeing teachers from mechanical paperwork so they can dedicate their finite emotional energy to direct student mentorship.",
          examinerNotes:
            "Shows deep practical understanding of teacher workloads and technological automation."
        },
        {
          id: "body3-alt3",
          badge: "Reason 3 • Democratizing Global Access",
          title: "24/7 Educational Access in Underserved Regions",
          mainReason:
            "In impoverished or remote regions with severe teacher shortages, AI-powered interactive tutoring can democratize access to high-quality educational materials.",
          supportingReasons:
            "Millions of children globally lack access to qualified human instructors. Synthetic tutors can deliver foundational literacy and numeracy lessons via low-cost mobile devices around the clock.",
          example:
            "In rural sub-Saharan communities without certified teachers, conversational AI applications provide children with fundamental English and mathematics instruction.",
          band9Snippet:
            "“In remote communities plagued by chronic staffing deficits, algorithmic instruction can serve as an invaluable educational lifeline for marginalized learners.”",
          modelParagraph:
            "Finally, artificial intelligence has the power to democratize educational access for millions of learners living in remote or economically disadvantaged regions where qualified teachers are scarce. Globally, rural communities frequently suffer from chronic teacher deficits, leaving children without access to specialized tutors in science, foreign languages, or mathematics. In such environments, mobile AI tutoring applications can deliver structured, high-quality instruction directly to handheld devices at virtually zero marginal cost. While this demonstrates the vital social utility of educational software in filling institutional voids, it remains a stopgap measure rather than an optimal substitute for a qualified human teacher.",
          examinerNotes:
            "Broadens the essay's global perspective and shows high academic maturity."
        }
      ]
    }
  ],

  // Academic Lexicon (12 Band 9 Lexical Items)
  vocabList: [
    {
      word: "supersede",
      phonetic: "/ˌsuː.pəˈsiːd/",
      pos: "verb",
      meaning: "To take the place of a person or thing previously in authority or use; to supplant.",
      collocations: ["supersede human educators", "gradually supersede", "threaten to supersede"],
      example: "Advanced algorithms may streamline administrative duties, but they can never entirely supersede human teachers in the classroom.",
      tutorTip: "Far more sophisticated than 'replace'. Use it in your introduction thesis statement."
    },
    {
      word: "augmentative",
      phonetic: "/ɔːɡˈmen.tə.tɪv/",
      pos: "adjective",
      meaning: "Serving to increase, enhance, or supplement rather than substitute completely.",
      collocations: ["augmentative tool", "augmentative technology", "purely augmentative role"],
      example: "Artificial intelligence should be viewed as an augmentative aid that empowers educators rather than an autonomous replacement.",
      tutorTip: "The perfect conceptual word to describe AI's true relationship to teaching in Body 3."
    },
    {
      word: "pastoral care",
      phonetic: "/ˈpɑː.stər.əl keər/",
      pos: "noun",
      meaning: "The emotional, social, and psychological support given to students by an educational institution.",
      collocations: ["provide pastoral care", "essential pastoral support", "comprehensive pastoral duties"],
      example: "Schooling encompasses vital pastoral care that addresses student anxiety and emotional vulnerability, a domain completely inaccessible to machines.",
      tutorTip: "Demonstrates advanced British academic educational terminology in Body 1."
    },
    {
      word: "algorithmic",
      phonetic: "/ˌæl.ɡəˈrɪð.mɪk/",
      pos: "adjective",
      meaning: "Relating to or using a process or set of rules to be followed in calculations or problem-solving.",
      collocations: ["algorithmic tutoring", "algorithmic rigidity", "algorithmic feedback"],
      example: "An algorithmic system evaluates pupil performance through rigid metrics, failing to appreciate creative or unconventional reasoning.",
      tutorTip: "Use to contrast computational rules against human flexibility."
    },
    {
      word: "pedagogical",
      phonetic: "/ˌped.əˈɡɒdʒ.ɪ.kəl/",
      pos: "adjective",
      meaning: "Relating to the theory, methods, and principles of teaching.",
      collocations: ["pedagogical leadership", "pedagogical flexibility", "pedagogical efficacy"],
      example: "True pedagogical success is measured not by test score memorization, but by the development of independent critical inquiry.",
      tutorTip: "Replaces the simplistic word 'teaching-related' with authentic academic precision."
    },
    {
      word: "empathy",
      phonetic: "/ˈem.pə.θi/",
      pos: "noun",
      meaning: "The psychological capacity to understand, share, and resonate with the feelings of another.",
      collocations: ["interpersonal empathy", "genuine emotional empathy", "demonstrate deep empathy"],
      example: "A machine can generate grammatically flawless feedback, but it is utterly incapable of demonstrating authentic human empathy.",
      tutorTip: "The foundational core argument of your opinion side in Body 1."
    },
    {
      word: "nuanced",
      phonetic: "/ˈnjuː.ɑːnst/",
      pos: "adjective",
      meaning: "Characterized by subtle distinctions, variations in meaning, or intricate complexities.",
      collocations: ["nuanced debate", "nuanced understanding", "nuanced perspective"],
      example: "Moderating a nuanced discussion on historical ethics requires a human facilitator who understands social subtlety.",
      tutorTip: "Use in Body 2 when explaining why Socratic debate cannot be automated."
    },
    {
      word: "dissemination",
      phonetic: "/dɪˌsem.ɪˈneɪ.ʃən/",
      pos: "noun",
      meaning: "The act of spreading, distributing, or broadcasting information and knowledge widely.",
      collocations: ["knowledge dissemination", "information dissemination", "passive dissemination"],
      example: "Teaching cannot be reduced to the mere dissemination of facts; it is the active cultivation of intellectual curiosity.",
      tutorTip: "Use this contrast in your conclusion or Body 2 to show that education is more than data transfer."
    },
    {
      word: "indispensable",
      phonetic: "/ˌɪn.dɪˈspen.sə.bəl/",
      pos: "adjective",
      meaning: "Absolutely necessary, essential, or impossible to manage without.",
      collocations: ["indispensable asset", "remain indispensable", "indispensable component"],
      example: "The personal mentorship and moral stewardship provided by teachers remain indispensable to adolescent development.",
      tutorTip: "Band 9 synonym for 'essential' or 'very important'."
    },
    {
      word: "facilitator",
      phonetic: "/fəˈsɪl.ɪ.teɪ.tər/",
      pos: "noun",
      meaning: "A person who helps a group of people to understand their common objectives and guides them without imposing.",
      collocations: ["classroom facilitator", "discussion facilitator", "act as a facilitator"],
      example: "Modern educators function primarily as intellectual facilitators who guide collaborative student discovery.",
      tutorTip: "Demonstrates modern pedagogical understanding in Task 2."
    },
    {
      word: "rote learning",
      phonetic: "/rəʊt ˈlɜː.nɪŋ/",
      pos: "noun",
      meaning: "A memorization technique based on mechanical repetition rather than deep conceptual understanding.",
      collocations: ["mechanical rote learning", "discourage rote learning", "transcend rote learning"],
      example: "While automated software excels at drills and rote learning, it cannot nurture genuine philosophical creativity.",
      tutorTip: "Perfect contrasting term against higher-order critical thinking."
    },
    {
      word: "inimitable",
      phonetic: "/ɪˈnɪm.ɪ.tə.bəl/",
      pos: "adjective",
      meaning: "So good or unique that it is impossible to copy or emulate; matchless.",
      collocations: ["inimitable human warmth", "inimitable quality", "inimitable guidance"],
      example: "The inimitable guidance of a compassionate human mentor cannot be duplicated by lines of computer code.",
      tutorTip: "High-level closing adjective for your conclusion."
    }
  ],

  vocabHunt: [
    "supersede",
    "augmentative",
    "pastoral care",
    "algorithmic",
    "pedagogical",
    "empathy",
    "nuanced",
    "dissemination",
    "indispensable",
    "facilitator",
    "rote learning",
    "inimitable"
  ],

  // Consequences (Opinion Side vs Non-Opinion Side)
  consequences: [
    {
      type: "positive",
      title: "Body 1 (Opinion Side): Emotional Well-Being & Pastoral Support",
      desc: "Human teachers provide empathy, motivational reassurance, and pastoral care that algorithms cannot duplicate.",
      example: "An attentive teacher detects adolescent depression or exam distress and provides compassionate intervention.",
      level: "Core Argument",
      simpleTakeaway: "Empathy & Pastoral Care",
      collocation: "irreplaceable pastoral care"
    },
    {
      type: "positive",
      title: "Body 2 (Opinion Side): Critical Thinking & Moral Stewardship",
      desc: "Developing intellectual curiosity, ethical character, and civil discourse requires active human facilitation.",
      example: "In a literature seminar, a teacher guides nuanced ethical debates that synthetic chatbots cannot navigate.",
      level: "Core Argument",
      simpleTakeaway: "Critical Thinking & Ethics",
      collocation: "cultivate critical thinking"
    },
    {
      type: "negative",
      title: "Body 3 (Non-Opinion Side): AI's Augmentative Efficiency & Pacing",
      desc: "AI automates routine grading and personalizes practice drills, functioning as a high-powered assistant.",
      example: "Adaptive platforms like Khan Academy dynamically calibrate math problems to student skill levels.",
      level: "Concession",
      simpleTakeaway: "Augmentative Pacing & Grading",
      collocation: "augmentative educational tool"
    },
    {
      type: "positive",
      title: "Human Inspiration & Role Modeling",
      desc: "Passionate human educators inspire children to pursue ambitious careers through shared lived experience.",
      example: "Renowned innovators consistently credit a dedicated teacher who recognized their nascent talents.",
      level: "Supporting Angle",
      simpleTakeaway: "Inspirational Role Models",
      collocation: "inspire lifelong passion"
    },
    {
      type: "negative",
      title: "Administrative Liberation for Educators",
      desc: "Automating objective marking and attendance tracking frees educators to spend more time directly tutoring.",
      example: "Software marks hundreds of diagnostic quizzes in seconds, eliminating clerical exhaustion.",
      level: "Supporting Angle",
      simpleTakeaway: "Administrative Relief",
      collocation: "eliminate clerical burdens"
    },
    {
      type: "positive",
      title: "Classroom Socialization & Conflict Resolution",
      desc: "Teachers teach students how to negotiate interpersonal disagreements, work in teams, and build civic maturity.",
      example: "An educator mediates playground friction and teaches children the value of compromise and mutual respect.",
      level: "Supporting Angle",
      simpleTakeaway: "Socialization & Diplomacy",
      collocation: "foster social maturity"
    }
  ],

  evaluationArguments: [
    {
      type: "argument",
      title: "Empathy Cannot Be Programmed into Silicon",
      reason: "Artificial neural networks can simulate conversation, but they lack human consciousness and authentic empathy.",
      development: "Children are social beings who learn through emotional connection and psychological validation from trusted adults.",
      example: "An algorithm cannot offer sincere reassurance to a child weeping from social alienation or family trauma.",
      level: "Band 9",
      simpleTakeaway: "Lack of Machine Empathy",
      collocation: "devoid of authentic empathy"
    },
    {
      type: "argument",
      title: "Education is Cultivating Character, Not Data Transfer",
      reason: "If schooling were merely acquiring facts, the internet would have replaced teachers decades ago.",
      development: "True pedagogy shapes ethical discernment, resilience, civic duty, and the courage to challenge falsehoods.",
      example: "A teacher models integrity by admitting their own mistakes and guiding students through moral dilemmas.",
      level: "Band 9",
      simpleTakeaway: "Character Building Over Data",
      collocation: "moral stewardship"
    },
    {
      type: "counterpoint",
      title: "AI Excels at Scalable Repetition & Drill Adaptation",
      reason: "Computers do not get tired, impatient, or biased when a student requires 50 repetitions of an algebra drill.",
      development: "This makes AI an exceptional augmentative tool for homework and diagnostic gap analysis.",
      example: "Language learners benefit tremendously from 24/7 speech recognition pronunciation drills.",
      level: "Band 9",
      simpleTakeaway: "Scalable Repetitive Drills",
      collocation: "adaptive drill calibration"
    },
    {
      type: "argument",
      title: "Algorithmic Hallucination & Moral Bias Risks",
      reason: "Generative AI systems frequently produce fabricated historical data and inherit toxic societal biases.",
      development: "Entrusting children's education entirely to automated models without human oversight poses severe pedagogical risks.",
      example: "Uncurated AI outputs have generated biased historical interpretations in automated student assessments.",
      level: "Band 9",
      simpleTakeaway: "Algorithmic Bias Danger",
      collocation: "perpetuate algorithmic biases"
    },
    {
      type: "counterpoint",
      title: "Democratizing Access in Under-Resourced Regions",
      reason: "In impoverished rural areas where qualified teachers are unavailable, AI software provides a vital educational stopgap.",
      development: "However, this represents an emergency mitigation of staffing shortages, not an optimal educational replacement.",
      example: "Mobile AI learning apps in isolated villages offer foundational literacy where no schools exist.",
      level: "Band 9",
      simpleTakeaway: "Emergency Educational Lifeline",
      collocation: "mitigate teacher shortages"
    },
    {
      type: "argument",
      title: "Dynamic Classroom Chemistry & Non-Linear Teaching",
      reason: "Classrooms thrive on spontaneous humor, group discussions, and reading collective emotional energy.",
      development: "A human teacher pivots instructional strategy instantly when sensing student confusion or apathy.",
      example: "A physics teacher discards their planned slide deck to perform a spontaneous real-world experiment.",
      level: "Band 9",
      simpleTakeaway: "Pedagogical Flexibility",
      collocation: "intuitive pedagogical agility"
    }
  ],

  facultyAngles: [
    {
      title: "The Emotional & Relational Dimension (Body 1 Angle)",
      development: "Argue forcefully that learning is an inherently social and psychological process requiring human empathy and pastoral care.",
      type: "positive"
    },
    {
      title: "The Socratic & Critical Inquiry Dimension (Body 2 Angle)",
      development: "Highlight that independent critical thinking and ethical discernment require a human mentor to challenge dogmas and moderate debate.",
      type: "positive"
    },
    {
      title: "The Augmentative Technology Dimension (Body 3 Angle)",
      development: "Concede that AI is revolutionary as a 24/7 drill tutor and administrative grading assistant, but distinguish assisting from replacing.",
      type: "negative"
    },
    {
      title: "The Decisive Outweighing Conclusion Angle",
      development: "Reiterate that education encompasses character formation and moral guidance, which remain forever beyond the capabilities of code.",
      type: "positive"
    }
  ],

  powerExpressions: [
    {
      expression: "Supersede rather than merely supplement",
      meaning: "To completely take over and eliminate the need for the previous system.",
      example: "It is an exaggeration to claim that automated systems will supersede human educators rather than merely supplement them."
    },
    {
      expression: "An inherently relational human endeavor",
      meaning: "An activity that fundamentally relies on personal connection, trust, and mutual understanding.",
      example: "Pedagogy is an inherently relational human endeavor that shrivels when reduced to synthetic digital metrics."
    },
    {
      expression: "Devoid of conscious empathy",
      meaning: "Completely lacking the capacity to feel or care about another's distress.",
      example: "An artificial neural network remains completely devoid of conscious empathy or moral conviction."
    },
    {
      expression: "Transcend mere information dissemination",
      meaning: "To go far beyond the simple act of broadcasting facts and data.",
      example: "True educators transcend mere information dissemination to nurture critical thinking and moral maturity."
    },
    {
      expression: "Act as an augmentative educational aid",
      meaning: "To function as a valuable supportive tool that enhances teacher efficacy.",
      example: "Artificial intelligence should be celebrated as an augmentative educational aid that relieves administrative burdens."
    },
    {
      expression: "Inimitable human guidance",
      meaning: "Guidance that is so unique, compassionate, and wise that it cannot be copied by machines.",
      example: "No amount of algorithmic refinement can substitute for the inimitable human guidance of an inspiring teacher."
    }
  ],

  brainstormCards: [
    {
      question: "Why can't artificial intelligence provide authentic pastoral care to children?",
      thinkingLens: "Psychological & Emotional Development",
      selfCheck: "Are algorithms conscious? Can they feel sympathy or perceive emotional trauma?",
      idea: "Machines have zero consciousness or empathy; they cannot comfort a grieving student or detect quiet depression."
    },
    {
      question: "How does a teacher cultivate higher-order critical thinking during class discussions?",
      thinkingLens: "Pedagogical & Cognitive Rigor",
      selfCheck: "Is thinking just memorizing answers, or questioning assumptions?",
      idea: "Teachers use Socratic counter-questioning and moderate debate on moral gray areas, which static algorithms cannot do."
    },
    {
      question: "In what specific areas does AI outperform human teachers?",
      thinkingLens: "Technological & Administrative Efficiency",
      selfCheck: "What takes teachers hours of boring repetitive time?",
      idea: "Grading objective homework, instantaneous diagnostic test analysis, and generating 24/7 personalized practice drills."
    },
    {
      question: "What is the crucial difference between 'augmenting' and 'replacing' a profession?",
      thinkingLens: "Conceptual & Lexical Precision",
      selfCheck: "Does a doctor get replaced by an MRI machine?",
      idea: "Augmenting equips the professional with better diagnostic tools, whereas replacing renders the human obsolete."
    },
    {
      question: "Can an algorithm teach moral ethics and civic integrity to future citizens?",
      thinkingLens: "Societal & Ethical Character Building",
      selfCheck: "Where do children learn honesty, fairness, and accountability?",
      idea: "Children learn ethics by observing lived human role models who embody integrity, not by interacting with amoral code."
    },
    {
      question: "What would a classroom completely devoid of human teachers look like for students?",
      thinkingLens: "Socialization & Community Well-Being",
      selfCheck: "Would students feel motivated, connected, and socially mature?",
      idea: "Students would suffer from social isolation, lack of accountability, and mechanical disengagement."
    }
  ],

  connectorsTier: {
    sTier: [
      "Foremost among the reasons why artificial intelligence cannot supplant educators is that...",
      "Equally significant is that cultivating higher-order cognitive faculties necessitates...",
      "On the other hand, proponents legitimately emphasize that artificial intelligence has immense value as an augmentative tool...",
      "In conclusion, although artificial intelligence is poised to revolutionize schooling by automating routine grading, I firmly disagree that..."
    ],
    aTier: [
      "By deferring repetitive administrative duties to automated software, teachers can...",
      "It is a dangerous misconception to assume that algorithmic feedback can seamlessly substitute for...",
      "Whereas digital platforms excel at static information dissemination, human mentors...",
      "Consequently, the essence of genuine education lies not in computational retrieval, but in..."
    ],
    bTier: [
      "Furthermore,",
      "In addition,",
      "However,",
      "Consequently,"
    ]
  },

  strategicLinkers: [
    {
      zone: "Zone 1: Opening Opinion Body Paragraphs (Why AI Cannot Replace Teachers)",
      badge: "Opinion Side Openers",
      placementRule: "Use at the beginning of Body 1 and Body 2 to declare your primary arguments against full AI replacement.",
      items: [
        {
          phrase: "Foremost among the reasons why artificial intelligence cannot supplant educators is that...",
          functionDesc: "Declares your strongest argument (emotional empathy & pastoral care) immediately with academic authority.",
          example:
            "Foremost among the reasons why artificial intelligence cannot supplant educators is that learning is an inherently relational endeavor requiring emotional intelligence and pastoral empathy."
        },
        {
          phrase: "Equally significant is that cultivating higher-order cognitive faculties necessitates...",
          functionDesc: "Introduces your second major argument (critical thinking, ethics & debate) with seamless cohesion.",
          example:
            "Equally significant is that cultivating higher-order cognitive faculties and moral reasoning necessitates spontaneous human dialogue and intellectual challenge."
        }
      ]
    },
    {
      zone: "Zone 2: Concession & Augmentative AI Placement (Body 3)",
      badge: "Non-Opinion Concession",
      placementRule: "Use at the start of Body 3 to acknowledge AI's legitimate strengths in grading and pacing without surrendering your main thesis.",
      items: [
        {
          phrase: "On the other hand, proponents legitimately emphasize that artificial intelligence has immense value as an augmentative aid...",
          functionDesc: "Smoothly shifts to the counter-perspective while framing AI's capabilities as supportive rather than replacement.",
          example:
            "On the other hand, proponents legitimately emphasize that artificial intelligence has immense value as an augmentative educational aid that personalizes practice drills and streamlines administrative duties."
        },
        {
          phrase: "Nevertheless, delivering customized exercises is essentially an assistive mechanism rather than...",
          functionDesc: "Delivers the critical judgement anchor at the conclusion of Body 3.",
          example:
            "Nevertheless, delivering customized exercises is essentially an assistive mechanism rather than a justification for replacing educators altogether."
        }
      ]
    },
    {
      zone: "Zone 3: Decisive Outweighing Conclusion",
      badge: "Conclusion Synthesis",
      placementRule: "Use in the final paragraph to summarize the main points and restate your decisive disagree position.",
      items: [
        {
          phrase: "In conclusion, although artificial intelligence is poised to revolutionize schooling by automating routine grading, I firmly disagree that...",
          functionDesc: "Concedes AI's administrative and pacing role in the dependent clause and reasserts your disagree position in the main clause.",
          example:
            "In conclusion, although artificial intelligence is poised to revolutionize schooling by automating routine grading and tailoring practice drills, I firmly disagree that it will replace classroom teachers."
        },
        {
          phrase: "The essence of genuine education lies not merely in information retrieval, but in...",
          functionDesc: "Synthesizes the core reason why human teachers remain permanently irreplaceable.",
          example:
            "The essence of genuine education lies not merely in information retrieval, but in human empathy, moral stewardship, and inspirational mentorship."
        }
      ]
    }
  ],

  fluidVocab: [
    {
      word: "supersede",
      pos: "verb",
      meaning: "To supplant or replace something older or less advanced.",
      naturalCollocation: "supersede human educators in the classroom",
      organicExample: "It is profoundly naive to claim that predictive algorithms will supersede teachers who provide moral and emotional mentorship.",
      mechanicalPitfall: "Avoid using it casually as a synonym for 'change'. It implies full displacement.",
      examinerInsight: "Demonstrates Band 9 lexical resource when used in the opening thesis statement."
    },
    {
      word: "augmentative",
      pos: "adjective",
      meaning: "Serving to supplement, support, or enhance without replacing.",
      naturalCollocation: "augmentative pedagogical aid",
      organicExample: "Educational software should be embraced as an augmentative tool that liberates instructors from grading paperwork.",
      mechanicalPitfall: "Do not confuse with 'augmenting' as a progressive participle.",
      examinerInsight: "The definitive word examiners look for in balanced technology essays."
    },
    {
      word: "pastoral care",
      pos: "noun phrase",
      meaning: "Institutional emotional and psychological support for student well-being.",
      naturalCollocation: "deliver compassionate pastoral care",
      organicExample: "A machine can compute exam percentiles, but it cannot deliver pastoral care to an adolescent experiencing bereavement.",
      mechanicalPitfall: "Avoid spelling as 'pastoral cares'. It is an uncountable institutional concept.",
      examinerInsight: "Immediately signals native-level British academic education vocabulary."
    },
    {
      word: "dissemination",
      pos: "noun",
      meaning: "The distribution or broadcasting of facts and information.",
      naturalCollocation: "passive dissemination of factual data",
      organicExample: "Schooling transcends the mechanical dissemination of facts; it is the active incubation of moral and intellectual character.",
      mechanicalPitfall: "Do not use 'disseminate' for physical objects like books; it applies to ideas, knowledge, and data.",
      examinerInsight: "Creates sharp contrast between rote internet access and true teaching."
    },
    {
      word: "nuanced",
      pos: "adjective",
      meaning: "Subtle, complex, and full of fine distinctions.",
      naturalCollocation: "facilitate nuanced ethical debates",
      organicExample: "Guiding students through nuanced historical controversies requires an experienced human mediator.",
      mechanicalPitfall: "Do not say 'very nuanced'. Use nuanced with adverbs like 'subtly' or on its own.",
      examinerInsight: "Demonstrates academic depth when describing critical thinking."
    },
    {
      word: "inimitable",
      pos: "adjective",
      meaning: "Impossible to imitate or copy; matchless in quality.",
      naturalCollocation: "the inimitable warmth of a human mentor",
      organicExample: "Lines of computer code can never emulate the inimitable encouragement of a teacher who believes in a child's potential.",
      mechanicalPitfall: "Do not confuse with 'imitable' (which means can be copied).",
      examinerInsight: "A brilliant, sophisticated adjective to close an essay with authoritative elegance."
    }
  ],

  modelSentences: {
    positive:
      "Foremost among the reasons why artificial intelligence cannot supplant educators is that learning is an inherently relational endeavor requiring emotional intelligence and pastoral empathy.",
    balanced:
      "While artificial intelligence will undoubtedly transform classrooms as an augmentative tool that automates grading and tailors practice drills, I firmly disagree that it will ever replace human teachers whose empathy, moral mentorship, and dynamic facilitation remain irreplaceable."
  }
};