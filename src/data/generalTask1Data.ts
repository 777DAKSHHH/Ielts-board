export interface GeneralTask1Bullet {
  id: string;
  bulletNumber: number;
  promptText: string;
  targetParagraph: string;
  explanation: string;
  modelExcerpt: string;
  keyCollocations: string[];
}

export interface GeneralTask1Data {
  id: string;
  taskType: string;
  letterType: "Semi-Formal" | "Formal" | "Informal";
  title: string;
  questionText: string;
  salutation: string;
  signoff: string;
  senderName: string;
  wordCount: number;
  bullets: GeneralTask1Bullet[];
  paragraphs: {
    id: string;
    title: string;
    purpose: string;
    text: string;
    wordCount: number;
    bulletRef?: number;
  }[];
  modelLetter: string;
  toneGuidelines: {
    rule: string;
    doExample: string;
    dontExample: string;
  }[];
  vocabList: {
    term: string;
    definition: string;
    example: string;
    category: "Musical Credentials" | "Pedagogical Temperament" | "Informal Letter Phrasing" | string;
  }[];
}

export const GENERAL_TASK1_DATA: GeneralTask1Data = {
  id: "general-task1-music-teacher-recommendation",
  taskType: "IELTS General Training • Writing Task 1",
  letterType: "Informal",
  title: "Recommending a Music Teacher for a Friend's Child",
  questionText:
    "Your friend has asked you to help him to find a music teacher for his/her child. Write a letter to your friend that you have found a suitable teacher.\n\nIn your letter,\n• What experience the teacher has\n• Why you think he/she is suitable\n• How to get in touch with the teacher",
  salutation: "Dear Mark,",
  signoff: "Warmly,",
  senderName: "Alex",
  wordCount: 202,

  bullets: [
    {
      id: "bullet-1",
      bulletNumber: 1,
      promptText: "What experience the teacher has",
      targetParagraph: "Teacher's Background & Musical Credentials (Paragraph 2)",
      explanation:
        "Detail the instructor's background, years of teaching, formal musical qualifications, and track record guiding young beginners through graded examinations.",
      modelExcerpt:
        "“Her name is Clara Bennett, and she has over a decade of teaching experience in classical and contemporary piano, backed by a master’s degree from the Royal Academy of Music. For the past six years, she has directed the youth music curriculum at Oakridge Arts Academy...”",
      keyCollocations: [
        "over a decade of teaching experience",
        "master’s degree from the Royal Academy of Music",
        "directed the youth music curriculum",
        "guiding young beginners through graded exams",
        "classical and contemporary piano"
      ]
    },
    {
      id: "bullet-2",
      bulletNumber: 2,
      promptText: "Why you think he/she is suitable",
      targetParagraph: "Teaching Philosophy & Rapport with Children (Paragraph 3)",
      explanation:
        "Explain why this particular teacher is ideal for a child: highlight patience, playful pedagogy, engaging interactive games, and personal evidence from a relative's success.",
      modelExcerpt:
        "“I immediately thought of Leo because Clara possesses exceptional patience and a wonderfully playful teaching manner. Rather than drilling dry theory, she incorporates interactive rhythm games and familiar movie themes, which keeps young children engaged and eager to practise...”",
      keyCollocations: [
        "exceptional patience and a playful teaching manner",
        "rather than drilling dry theory",
        "interactive rhythm games and ear training",
        "keeps young children engaged and eager to practise",
        "enthusiastically composing her own melodies"
      ]
    },
    {
      id: "bullet-3",
      bulletNumber: 3,
      promptText: "How to get in touch with the teacher",
      targetParagraph: "Contact Details, Availability & Trial Lesson (Paragraph 4)",
      explanation:
        "Provide direct contact information (phone number, email), mention available schedules, and suggest booking a complimentary trial session.",
      modelExcerpt:
        "“You can reach Clara directly on 07891 456 820 or email her at clara.music@email.com. She has a few afternoon slots opening up next term and is happy to offer a free 20-minute trial lesson. Give her a call and let me know how it goes!”",
      keyCollocations: [
        "reach her directly on...",
        "afternoon slots opening up next term",
        "free 20-minute trial lesson",
        "give her a call",
        "let me know how it goes"
      ]
    }
  ],

  paragraphs: [
    {
      id: "salutation",
      title: "Salutation",
      purpose: "Friendly, informal greeting using friend's first name",
      text: "Dear Mark,",
      wordCount: 2
    },
    {
      id: "p1",
      title: "Paragraph 1: Warm Opening & Reason for Writing",
      purpose: "Catch up informally and announce that a suitable teacher has been found",
      text: "I hope you and the family are doing well! You mentioned last week that you were looking for a talented music teacher for Leo, and I am thrilled to let you know that I have found the perfect person.",
      wordCount: 39
    },
    {
      id: "p2",
      title: "Paragraph 2: Teacher's Experience & Qualifications (Bullet 1)",
      purpose: "Detail credentials, conservatory training, and track record with youth",
      text: "Her name is Clara Bennett, and she has over a decade of teaching experience in classical and contemporary piano, backed by a master’s degree from the Royal Academy of Music. For the past six years, she has directed the youth music curriculum at Oakridge Arts Academy, guiding dozens of young beginners through their initial grades with flawless distinction.",
      wordCount: 58,
      bulletRef: 1
    },
    {
      id: "p3",
      title: "Paragraph 3: Why She Is Suitable for the Child (Bullet 2)",
      purpose: "Highlight patience, gamified learning, and personal evidence of success",
      text: "I immediately thought of Leo because Clara possesses exceptional patience and a wonderfully playful teaching manner. Rather than drilling dry theory, she incorporates interactive rhythm games and familiar movie themes, which keeps young children engaged and eager to practise. In fact, she taught my niece Sophie, who went from being hesitant about music to enthusiastically composing her own little melodies within months.",
      wordCount: 65,
      bulletRef: 2
    },
    {
      id: "p4",
      title: "Paragraph 4: How to Contact Her & Trial Lesson (Bullet 3)",
      purpose: "Provide contact details, schedule openings, and offer trial advice",
      text: "You can reach Clara directly on 07891 456 820 or email her at clara.music@email.com. She has a few afternoon slots opening up next term and is happy to offer a free 20-minute trial lesson. Give her a call and let me know how it goes!",
      wordCount: 47,
      bulletRef: 3
    },
    {
      id: "closing",
      title: "Closing & Sign-off",
      purpose: "Warm, informal sign-off with first name",
      text: "Warmly,\nAlex",
      wordCount: 2
    }
  ],

  modelLetter: `Dear Mark,

I hope you and the family are doing well! You mentioned last week that you were looking for a talented music teacher for Leo, and I am thrilled to let you know that I have found the perfect person.

Her name is Clara Bennett, and she has over a decade of teaching experience in classical and contemporary piano, backed by a master’s degree from the Royal Academy of Music. For the past six years, she has directed the youth music curriculum at Oakridge Arts Academy, guiding dozens of young beginners through their initial grades with flawless distinction.

I immediately thought of Leo because Clara possesses exceptional patience and a wonderfully playful teaching manner. Rather than drilling dry theory, she incorporates interactive rhythm games and familiar movie themes, which keeps young children engaged and eager to practise. In fact, she taught my niece Sophie, who went from being hesitant about music to enthusiastically composing her own little melodies within months.

You can reach Clara directly on 07891 456 820 or email her at clara.music@email.com. She has a few afternoon slots opening up next term and is happy to offer a free 20-minute trial lesson. Give her a call and let me know how it goes!

Warmly,
Alex`,

  toneGuidelines: [
    {
      rule: "Friendly & Natural Informal Opening",
      doExample: "“I hope you and the family are doing well! You mentioned last week...”",
      dontExample: "“I am writing this letter to notify you that I have found an instructor...” (too stiff and formal)"
    },
    {
      rule: "Conversational Contractions & Phrasal Verbs",
      doExample: "“I’m thrilled,” “opening up,” “give her a call,” “let me know”",
      dontExample: "“I am writing with reference to...” / “Please be informed that...” (inappropriate for a friend)"
    },
    {
      rule: "Authentic Personal Endorsement",
      doExample: "“In fact, she taught my niece Sophie, who went from hesitant to composing her own songs...”",
      dontExample: "“Her pedagogical rating is 4.8 out of 5 based on external reviews.” (unnatural in a friendly letter)"
    },
    {
      rule: "Warm Informal Sign-off",
      doExample: "“Warmly,” / “All the best,” / “Best wishes,” followed by First Name",
      dontExample: "“Yours faithfully,” or “Yours sincerely, Alex Vance” (formal letter sign-offs)"
    }
  ],

  vocabList: [
    {
      term: "Playful Pedagogy",
      definition: "An educational approach that uses games, interactive challenges, and curiosity to teach foundational concepts.",
      example: "Clara's playful pedagogy ensures young learners master complex notation without feeling overwhelmed.",
      category: "Pedagogical Temperament"
    },
    {
      term: "Royal Academy Credentials",
      definition: "Prestigious formal training and degree accreditation from a world-renowned music conservatory.",
      example: "She pairs her Royal Academy credentials with an innate warmth that puts timid children at ease.",
      category: "Musical Credentials"
    },
    {
      term: "Ear Training & Rhythm Games",
      definition: "Interactive activities designed to develop a child's listening skills, pitch recognition, and timing.",
      example: "Rather than dry drills, she uses rhythm games and ear training to build musical intuition.",
      category: "Musical Credentials"
    },
    {
      term: "Graded Exam Distinction",
      definition: "The highest grade tier achieved in international music evaluation frameworks (such as ABRSM or Trinity).",
      example: "She has guided dozens of students through graded examinations, often achieving high distinction.",
      category: "Musical Credentials"
    },
    {
      term: "Complimentary Trial Session",
      definition: "A free introductory lesson to assess a student's interests and ensure good rapport before committing.",
      example: "She offered to arrange a complimentary 20-minute trial session so Leo can explore the piano.",
      category: "Informal Letter Phrasing"
    },
    {
      term: "Customized Learning Pace",
      definition: "Tailoring the speed and style of instruction to match an individual student's temperament and aptitude.",
      example: "Her greatest strength is adapting to each child's customized learning pace without pressure.",
      category: "Pedagogical Temperament"
    },
    {
      term: "Enthusiastic Endorsement",
      definition: "A warm and genuine recommendation based on firsthand experience or credible witness.",
      example: "After seeing Sophie's progress, I give Clara my most enthusiastic endorsement.",
      category: "Informal Letter Phrasing"
    },
    {
      term: "Repertoire Breadth",
      definition: "The variety and scope of musical styles a teacher is capable of introducing, from classical to modern.",
      example: "Her repertoire breadth allows children to learn songs from movies alongside standard classical etudes.",
      category: "Musical Credentials"
    }
  ]
};
