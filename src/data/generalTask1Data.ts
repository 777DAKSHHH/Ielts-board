export interface GeneralTask1Bullet {
  id: string;
  bulletNumber: number;
  promptText: string;
  targetParagraph: string;
  linkerRule: string;
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
    ruleHighlight?: string;
  }[];
  modelLetter: string;
  toneGuidelines: {
    rule: string;
    doExample: string;
    dontExample: string;
  }[];
  pptFormatRules: {
    stage: string;
    description: string;
    specificRule: string;
  }[];
  vocabList: {
    term: string;
    definition: string;
    example: string;
    category: "Problem Description" | "Constructive Solutions" | "Escalation & Legal Action" | "Semi-Formal Register";
  }[];
}

export const GENERAL_TASK1_DATA: GeneralTask1Data = {
  id: "general-task1-neighbour-problem-complaint",
  taskType: "IELTS General Training • Writing Task 1",
  letterType: "Semi-Formal",
  title: "Addressing a Persistent Problem with a Neighbour",
  questionText:
    "You have had a problem with your neighbour for the past few months. You have not been able to meet your neighbour to discuss the problem. Write a letter to your neighbour.\n\nIn your letter,\n• Explain the problem\n• Suggest a solution\n• Explain what action you will take if the situation does not improve",
  salutation: "Dear Mr. Patel,",
  signoff: "Yours sincerely,",
  senderName: "Chirag Mehta",
  wordCount: 178,

  pptFormatRules: [
    {
      stage: "1. Salutation",
      description: "Semi-Formal greeting using neighbor's surname (Dear Mr./Ms. [Surname],)",
      specificRule: "Never use informal 'Hi' or overly formal 'Dear Sir/Madam' when writing to a known neighbor."
    },
    {
      stage: "2. Opening (Paragraph 1)",
      description: "State 'Who are you?' followed immediately by 'Why are you writing?'",
      specificRule: "Identify your residence clearly: 'My name is [Name], your next-door neighbor at [Apt]... I am writing this letter to bring an issue to your attention...'"
    },
    {
      stage: "3. Body Para 1 (Bullet 1)",
      description: "Explain the problem in detail with dates, times, and why in-person meeting failed.",
      specificRule: "CRITICAL PPT RULE: Do NOT begin Body Paragraph 1 / Bullet 1 with a linker!"
    },
    {
      stage: "4. Body Para 2 (Bullet 2)",
      description: "Suggest constructive, practical, and courteous solutions.",
      specificRule: "CRITICAL PPT RULE: Begin with a SUPPORTING LINKER (e.g. Furthermore, In addition to this, Additionally, Apart from this)."
    },
    {
      stage: "5. Body Para 3 (Bullet 3)",
      description: "Explain subsequent steps if unresolved (building management / municipal council).",
      specificRule: "CRITICAL PPT RULE: Begin with a CONTRADICTING LINKER (e.g. However, On the other hand, On the contrary)."
    },
    {
      stage: "6. Closing & Sign-off",
      description: "Assertive yet polite expectation of resolution + Semi-formal closure.",
      specificRule: "Tone: 'I trust/hope you will resolve this...' + 'Yours sincerely,' + Real Full Name (NO XYZ)."
    }
  ],

  bullets: [
    {
      id: "bullet-1",
      bulletNumber: 1,
      promptText: "Explain the problem",
      targetParagraph: "The Problem & Failed In-Person Meeting (Paragraph 2)",
      linkerRule: "DO NOT start with a linker (PPT Slide 7 Rule)",
      explanation:
        "Detail the nature of the issue (late-night television/music noise, hours between 11:30 PM and 2:00 AM), explain that conflicting shifts prevented meeting in person, and state the personal impact (sleep deprivation).",
      modelExcerpt:
        "“For the past three months, excessive noise has been emanating from your apartment late at night, particularly loud television audio and heavy bass music between 11:30 PM and 2:00 AM on weekdays. I have knocked on your door on several occasions to discuss this in person, but our contrasting work schedules have made a face-to-face meeting impossible. This persistent disturbance severely disrupts my sleep, leaving me chronically exhausted for my early morning commitments.”",
      keyCollocations: [
        "excessive noise emanating from your apartment",
        "between 11:30 PM and 2:00 AM on weekdays",
        "contrasting work schedules",
        "face-to-face meeting impossible",
        "chronically exhausted for morning commitments"
      ]
    },
    {
      id: "bullet-2",
      bulletNumber: 2,
      promptText: "Suggest a solution",
      targetParagraph: "Constructive & Practical Remedies (Paragraph 3)",
      linkerRule: "Must begin with a Supporting Linker: 'Furthermore,' (PPT Slide 8 & 9 Rule)",
      explanation:
        "Offer realistic, reasonable compromises: lowering volume after 10 PM on weeknights, wearing wireless headphones, or moving sound equipment away from shared walls / adding a rug.",
      modelExcerpt:
        "“Furthermore, I would like to propose a straightforward and practical compromise that would resolve this matter comfortably for both of us. If you could kindly lower the volume after 10:00 PM on weeknights or consider utilizing wireless headphones when watching television late, it would make an immediate difference. Alternatively, positioning your sound system away from the shared bedroom wall or placing a thick rug underneath would significantly dampen the acoustic vibrations.”",
      keyCollocations: [
        "propose a straightforward compromise",
        "lower the volume after 10:00 PM",
        "utilizing wireless headphones",
        "shared bedroom wall",
        "dampen the acoustic vibrations"
      ]
    },
    {
      id: "bullet-3",
      bulletNumber: 3,
      promptText: "Explain what action you will take if the situation does not improve",
      targetParagraph: "Formal Escalation & Legal Recourse (Paragraph 4)",
      linkerRule: "Must begin with a Contradicting Linker: 'However,' (PPT Slide 8 & 9 Rule)",
      explanation:
        "Outline clear, polite escalation measures if the nuisance continues: reporting to building management committee and lodging a noise complaint with the municipal council, while expressing a sincere desire to avoid conflict.",
      modelExcerpt:
        "“However, if this excessive noise continues unabated and no discernible effort is made to rectify the situation, I will be left with no choice but to escalate this matter to the building management committee and lodge a formal complaint with the local municipal council for noise ordinance violations. I sincerely hope this will not be necessary, as I genuinely value maintaining a cordial and respectful relationship between neighbours.”",
      keyCollocations: [
        "continues unabated",
        "no discernible effort is made",
        "left with no choice but to escalate",
        "building management committee",
        "lodge a formal complaint with the municipal council",
        "cordial and respectful relationship"
      ]
    }
  ],

  paragraphs: [
    {
      id: "salutation",
      title: "Salutation",
      purpose: "Semi-formal greeting using neighbour's surname (PPT Slide 5)",
      text: "Dear Mr. Patel,",
      wordCount: 3,
      ruleHighlight: "Semi-Formal: Dear + Title + Surname (Never Dear Sir/Madam for a known neighbour)"
    },
    {
      id: "p1",
      title: "Paragraph 1: Identification & Reason for Writing",
      purpose: "State who you are and clearly declare the purpose of the letter (PPT Slide 6)",
      text: "My name is Chirag Mehta, and I am your next-door neighbour residing at Apartment 3B. I am writing this letter to bring an urgent and persistent matter to your attention regarding recurring disturbances over the past few months.",
      wordCount: 38,
      ruleHighlight: "Opening formula: Who are you? + Why are you writing? (No informal conversational greetings)"
    },
    {
      id: "p2",
      title: "Paragraph 2 (Bullet 1): Nature of the Problem",
      purpose: "Explain the issue in detail and why in-person discussion failed (PPT Slide 7)",
      text: "For the past three months, excessive noise has been emanating from your apartment late at night, particularly loud television audio and heavy bass music between 11:30 PM and 2:00 AM on weekdays. I have knocked on your door on several occasions to discuss this in person, but our contrasting work schedules have made a face-to-face meeting impossible. This persistent disturbance severely disrupts my sleep, leaving me chronically exhausted for my early morning commitments.",
      wordCount: 76,
      bulletRef: 1,
      ruleHighlight: "MANDATORY PPT RULE: Bullet 1 / Body Paragraph 1 must NOT begin with a linker!"
    },
    {
      id: "p3",
      title: "Paragraph 3 (Bullet 2): Suggested Solutions",
      purpose: "Propose reasonable, practical compromises (PPT Slide 8 & 9)",
      text: "Furthermore, I would like to propose a straightforward and practical compromise that would resolve this matter comfortably for both of us. If you could kindly lower the volume after 10:00 PM on weeknights or consider utilizing wireless headphones when watching television late, it would make an immediate difference. Alternatively, positioning your sound system away from the shared bedroom wall or placing a thick rug underneath would significantly dampen the acoustic vibrations.",
      wordCount: 72,
      bulletRef: 2,
      ruleHighlight: "MANDATORY PPT RULE: Bullet 2 must begin with a SUPPORTING LINKER ('Furthermore,')"
    },
    {
      id: "p4",
      title: "Paragraph 4 (Bullet 3): Subsequent Action if Unresolved",
      purpose: "Outline escalation steps while expressing goodwill (PPT Slide 8 & 9)",
      text: "However, if this excessive noise continues unabated and no discernible effort is made to rectify the situation, I will be left with no choice but to escalate this matter to the building management committee and lodge a formal complaint with the local municipal council for noise ordinance violations. I sincerely hope this will not be necessary, as I genuinely value maintaining a cordial and respectful relationship between neighbours.",
      wordCount: 69,
      bulletRef: 3,
      ruleHighlight: "MANDATORY PPT RULE: Bullet 3 must begin with a CONTRADICTING LINKER ('However,')"
    },
    {
      id: "closing",
      title: "Paragraph 5: Closing & Complementary Sign-off",
      purpose: "Polite expectation of resolution + Semi-formal closure (PPT Slide 10 & 11)",
      text: "I trust that you will take this matter seriously and that we can reach an amicable resolution.\n\nYours sincerely,\nChirag Mehta",
      wordCount: 22,
      ruleHighlight: "Semi-Formal Closure: Yours sincerely, + Full Name (Never 'Yours faithfully' or informal 'Best regards')"
    }
  ],

  modelLetter: `Dear Mr. Patel,

My name is Chirag Mehta, and I am your next-door neighbour residing at Apartment 3B. I am writing this letter to bring an urgent and persistent matter to your attention regarding recurring disturbances over the past few months.

For the past three months, excessive noise has been emanating from your apartment late at night, particularly loud television audio and heavy bass music between 11:30 PM and 2:00 AM on weekdays. I have knocked on your door on several occasions to discuss this in person, but our contrasting work schedules have made a face-to-face meeting impossible. This persistent disturbance severely disrupts my sleep, leaving me chronically exhausted for my early morning commitments.

Furthermore, I would like to propose a straightforward and practical compromise that would resolve this matter comfortably for both of us. If you could kindly lower the volume after 10:00 PM on weeknights or consider utilizing wireless headphones when watching television late, it would make an immediate difference. Alternatively, positioning your sound system away from the shared bedroom wall or placing a thick rug underneath would significantly dampen the acoustic vibrations.

However, if this excessive noise continues unabated and no discernible effort is made to rectify the situation, I will be left with no choice but to escalate this matter to the building management committee and lodge a formal complaint with the local municipal council for noise ordinance violations. I sincerely hope this will not be necessary, as I genuinely value maintaining a cordial and respectful relationship between neighbours.

I trust that you will take this matter seriously and that we can reach an amicable resolution.

Yours sincerely,
Chirag Mehta`,

  toneGuidelines: [
    {
      rule: "Opening Formula (PPT Slide 6)",
      doExample: "“My name is Chirag Mehta, your next-door neighbour at Apartment 3B. I am writing to bring a matter to your attention...”",
      dontExample: "“Hi mate, how are you doing? Hope all is well...” (Overly informal) or “To Whom It May Concern” (Too distant)"
    },
    {
      rule: "Linker Placement Rule (PPT Slide 7, 8, 9)",
      doExample: "Start Body 1 with direct context ('For the past three months...'). Start Body 2 with 'Furthermore,'. Start Body 3 with 'However,'.",
      dontExample: "Beginning Body 1 with 'Firstly,' or 'Furthermore,' which violates Cambridge cohesion rules."
    },
    {
      rule: "Tone of Complaint (PPT Slide 10)",
      doExample: "“I would appreciate it if you could lower the volume after 10:00 PM...” (Polite, firm, and constructive)",
      dontExample: "“You are being completely inconsiderate and driving me crazy!” (Aggressive, emotional, and unprofessional)"
    },
    {
      rule: "Sign-Off & Name (PPT Slide 11 & 12)",
      doExample: "“Yours sincerely,” followed by full name “Chirag Mehta” (Proper semi-formal closing)",
      dontExample: "“Yours faithfully” (used only for Dear Sir/Madam) or “With love” / “XYZ”"
    }
  ],

  vocabList: [
    {
      term: "Emanating from",
      definition: "Originating, issuing, or spreading out from a specific physical source.",
      example: "Excessive television bass has been persistently emanating from your apartment past midnight.",
      category: "Problem Description"
    },
    {
      term: "Contrasting work schedules",
      definition: "Differing daily work hours that prevent two individuals from meeting directly.",
      example: "Our contrasting work schedules have made direct face-to-face dialogue impossible to arrange.",
      category: "Problem Description"
    },
    {
      term: "Chronically exhausted",
      definition: "Suffering from severe, ongoing physical and mental fatigue due to sleeplessness.",
      example: "Continuous late-night noise has left me chronically exhausted for my early morning commitments.",
      category: "Problem Description"
    },
    {
      term: "Straightforward compromise",
      definition: "An uncomplicated, practical mutual agreement that satisfies both parties fairly.",
      example: "I would like to propose a straightforward compromise that comfortably resolves this situation.",
      category: "Constructive Solutions"
    },
    {
      term: "Dampen acoustic vibrations",
      definition: "To absorb or lessen the intensity of sound waves passing through physical walls or floors.",
      example: "Placing a thick rug beneath the subwoofer would significantly dampen acoustic vibrations.",
      category: "Constructive Solutions"
    },
    {
      term: "Wireless headphones",
      definition: "Audio listening devices that allow private late-night listening without wall transmission.",
      example: "Utilizing wireless headphones late at night would ensure zero disturbance to surrounding units.",
      category: "Constructive Solutions"
    },
    {
      term: "Continues unabated",
      definition: "Persisting without any reduction in intensity, volume, or frequency.",
      example: "If the late-night music continues unabated, I will have no choice but to escalate the complaint.",
      category: "Escalation & Legal Action"
    },
    {
      term: "Discernible effort",
      definition: "A clear, noticeable, and measurable attempt to fix or improve a situation.",
      example: "If no discernible effort is made to rectify the noise level, formal steps will be taken.",
      category: "Escalation & Legal Action"
    },
    {
      term: "Building management committee",
      definition: "The governing administrative body overseeing resident conduct and building bylaws.",
      example: "I will be compelled to lodge a formal petition with the building management committee.",
      category: "Escalation & Legal Action"
    },
    {
      term: "Noise ordinance violations",
      definition: "Breaches of municipal statutes and local residential noise regulations.",
      example: "Local council authorities actively enforce strict penalties for residential noise ordinance violations.",
      category: "Escalation & Legal Action"
    },
    {
      term: "Cordial and respectful",
      definition: "Warm, polite, friendly, and considerate toward another person.",
      example: "I genuinely prioritize maintaining a cordial and respectful relationship between neighbours.",
      category: "Semi-Formal Register"
    },
    {
      term: "Amicable resolution",
      definition: "A peaceful, friendly agreement achieved without hostility or legal conflict.",
      example: "I trust that we can communicate constructively and reach an amicable resolution.",
      category: "Semi-Formal Register"
    }
  ]
};
