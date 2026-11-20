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
    category: "Professional Etiquette" | "Internship & Learning" | "Corporate Operations" | "Formal Correspondence";
  }[];
  architectureRevision?: {
    step: string;
    stage: string;
    badgeColor: string;
    bgColor: string;
    borderColor: string;
    textColor: string;
    summary: string;
  }[];
}

export const GENERAL_TASK1_DATA: GeneralTask1Data = {
  id: "general-task1-internship-organisation-manager",
  taskType: "IELTS General Training • Writing Task 1",
  letterType: "Formal",
  title: "Formal Internship Letter to Organisation Manager",
  questionText:
    "FRIDAY (Formal)\n\nYou are a student and are going to spend three months doing an internship in an organisation. Write a letter to the manager of the organisation. In your letter,\n• Thank him/her for the opportunity / acceptance into the company\n• Explain what you hope to learn from this internship\n• Inquire about preparatory materials and confirm arrival details",
  salutation: "Dear Mr. Pritam,",
  signoff: "Yours sincerely,",
  senderName: "Arpit",
  wordCount: 222,

  architectureRevision: [
    {
      step: "1. Salutation & Opening",
      stage: "Formal Greeting & Acceptance Statement (Para 1)",
      badgeColor: "#1e3a8a",
      bgColor: "#eff6ff",
      borderColor: "#bfdbfe",
      textColor: "#1d4ed8",
      summary: "Formal salutation ('Dear Mr. Pritam,') + unambiguous statement of purpose confirming acceptance of the three-month internship offer commencing July 1st."
    },
    {
      step: "2. Body Para 1 (Bullet 1)",
      stage: "Thanking the Manager & Organisational Admiration",
      badgeColor: "#047857",
      bgColor: "#ecfdf5",
      borderColor: "#a7f3d0",
      textColor: "#047857",
      summary: "Gratitude: Sincere appreciation to the manager and selection committee → Alignment: Respect for the company's pioneering sustainable logistics and market reputation."
    },
    {
      step: "3. Body Para 2 (Bullet 2)",
      stage: "Learning Objectives & Professional Development",
      badgeColor: "#d97706",
      bgColor: "#fffbeb",
      borderColor: "#fde68a",
      textColor: "#b45309",
      summary: "Core Goals: Bridging theoretical university coursework in business analytics with practical project management, risk analysis, and live client deliverables."
    },
    {
      step: "4. Body Para 3 (Bullet 3)",
      stage: "Preparatory Inquiries & Onboarding Logistics",
      badgeColor: "#4338ca",
      bgColor: "#eef2ff",
      borderColor: "#c7d2fe",
      textColor: "#3730a3",
      summary: "Readiness: Inquiring about recommended pre-reading, internal software tools, compliance forms, or documentation to review prior to the first day."
    },
    {
      step: "5. Closing & Sign-off",
      stage: "Reiterated Thanks & Formal Sign-off (Para 5)",
      badgeColor: "#0f172a",
      bgColor: "#f8fafc",
      borderColor: "#cbd5e1",
      textColor: "#0f172a",
      summary: "Courteous close looking forward to joining the team + strict formal complimentary close: 'Yours sincerely,' followed by name ('Arpit')."
    }
  ],

  pptFormatRules: [
    {
      stage: "1. Salutation",
      description: "Formal salutation using title and surname / name (Dear Mr. [Name],)",
      specificRule: "When writing to a named manager in a formal letter, use 'Dear Mr. Pritam,' followed by a comma. Never use informal greetings ('Hi Pritam')."
    },
    {
      stage: "2. Opening (Paragraph 1)",
      description: "Clear, courteous statement of purpose and formal acceptance.",
      specificRule: "State the objective of the letter immediately without conversational filler: 'I am writing to express my sincere appreciation for offering me the three-month internship position... and to formally confirm my acceptance.'"
    },
    {
      stage: "3. Body Para 1 (Bullet 1)",
      description: "Express heartfelt gratitude to the manager and company.",
      specificRule: "Articulate specific admiration for the organisation: mention their industry leadership, groundbreaking projects, or reputation to demonstrate genuine alignment."
    },
    {
      stage: "4. Body Para 2 (Bullet 2)",
      description: "Detail specific skills, insights, and professional competencies you hope to gain.",
      specificRule: "Contrast theoretical academic knowledge with real-world application: project management, client negotiations, data analytics, and cross-functional team collaboration."
    },
    {
      stage: "5. Body Para 3 (Bullet 3)",
      description: "Proactively ask about onboarding preparations and first-day expectations.",
      specificRule: "Demonstrate initiative by asking for recommended software tutorials, compliance documentation, or reading material to study before starting."
    },
    {
      stage: "6. Closing & Sign-off",
      description: "Formal call-to-action & 'Yours sincerely,' + Sender Name.",
      specificRule: "Because the letter addresses a named manager ('Dear Mr. Pritam,'), close strictly with 'Yours sincerely,' followed by your name ('Arpit'). Contractions ('I'm', 'can't') are strictly prohibited."
    }
  ],

  bullets: [
    {
      id: "bullet-1",
      bulletNumber: 1,
      promptText: "Thank him/her for the opportunity / acceptance into the company",
      targetParagraph: "Body Paragraph 1",
      linkerRule: "Formal gratitude marker (e.g. 'First and foremost, I would like to extend my sincere gratitude...')",
      explanation:
        "Express dignified, professional thanks to the manager and selection committee for granting you the internship, highlighting your respect for the firm's reputation.",
      modelExcerpt:
        "First and foremost, I would like to extend my sincere gratitude to you and the selection committee for granting me this invaluable opportunity. Having followed your company’s groundbreaking work in sustainable supply chain logistics, I feel immensely privileged to be invited to join such an esteemed and innovative organization.",
      keyCollocations: [
        "extend my sincere gratitude",
        "selection committee",
        "invaluable opportunity",
        "groundbreaking work",
        "esteemed and innovative organization"
      ]
    },
    {
      id: "bullet-2",
      bulletNumber: 2,
      promptText: "Explain what you hope to learn from this internship",
      targetParagraph: "Body Paragraph 2",
      linkerRule: "Educational objective linkers (e.g. 'During this three-month placement, I hope to gain...', 'While my university studies have provided...')",
      explanation:
        "Explain how the internship will bridge the gap between academic theory and practical corporate execution, focusing on hands-on project management and data analysis.",
      modelExcerpt:
        "During this three-month placement, I hope to gain comprehensive hands-on exposure to commercial project management and data-driven risk assessment. While my university coursework in business analytics has provided me with a rigorous theoretical foundation, I am eager to observe how seasoned industry professionals navigate complex client briefs and streamline operational workflows under real-market constraints.",
      keyCollocations: [
        "hands-on exposure",
        "data-driven risk assessment",
        "rigorous theoretical foundation",
        "seasoned industry professionals",
        "streamline operational workflows"
      ]
    },
    {
      id: "bullet-3",
      bulletNumber: 3,
      promptText: "Inquire about preparatory materials and confirm arrival details",
      targetParagraph: "Body Paragraph 3",
      linkerRule: "Proactive preparatory markers (e.g. 'In preparation for my commencement date,...', 'Furthermore, please inform me of...')",
      explanation:
        "Demonstrate high professional initiative by asking for background documentation, software platforms to install, or administrative compliance forms required prior to day one.",
      modelExcerpt:
        "In preparation for my commencement date, I would be grateful if you could advise me on any preliminary background reading, internal software platforms, or procedural documentation I should review in advance. Furthermore, please inform me of any administrative compliance forms or security clearances required prior to my first morning at the office.",
      keyCollocations: [
        "in preparation for my commencement date",
        "preliminary background reading",
        "procedural documentation",
        "administrative compliance forms",
        "security clearances"
      ]
    }
  ],

  paragraphs: [
    {
      id: "opening",
      title: "Opening Paragraph: Formal Salutation & Acceptance Statement",
      purpose: "Formal statement of appreciation and official confirmation of internship acceptance",
      text: "I am writing to express my sincere appreciation for offering me the three-month internship position at Apex Global Solutions, scheduled to commence on Monday, 7th July. I am truly delighted to have been selected for this placement and wish to formally confirm my acceptance of the offer.",
      wordCount: 45,
      ruleHighlight: "Strict formal register: unambiguous purpose statement, exact starting date, zero informal contractions ('I am' instead of 'I'm')."
    },
    {
      id: "body1",
      title: "Body Paragraph 1: Gratitude for the Opportunity (Bullet 1)",
      purpose: "Express gratitude to the manager and selection committee while acknowledging firm prestige",
      bulletRef: 1,
      text: "First and foremost, I would like to extend my sincere gratitude to you and the selection committee for granting me this invaluable opportunity. Having followed your company’s groundbreaking work in sustainable supply chain logistics, I feel immensely privileged to be invited to join such an esteemed and innovative organization.",
      wordCount: 48,
      ruleHighlight: "Bullet 1 fully covered: formal expressions of gratitude combined with specific institutional admiration."
    },
    {
      id: "body2",
      title: "Body Paragraph 2: Learning Objectives & Career Growth (Bullet 2)",
      purpose: "Bridge academic coursework with hands-on corporate project management and practical skills",
      bulletRef: 2,
      text: "During this three-month placement, I hope to gain comprehensive hands-on exposure to commercial project management and data-driven risk assessment. While my university coursework in business analytics has provided me with a rigorous theoretical foundation, I am eager to observe how seasoned industry professionals navigate complex client briefs and streamline operational workflows under real-market constraints.",
      wordCount: 56,
      ruleHighlight: "Bullet 2 fully covered: sophisticated contrast between theoretical knowledge and practical workplace competencies."
    },
    {
      id: "body3",
      title: "Body Paragraph 3: Preparation & Administrative Inquiries (Bullet 3)",
      purpose: "Demonstrate initiative by asking for pre-reading, software access, and documentation",
      bulletRef: 3,
      text: "In preparation for my commencement date, I would be grateful if you could advise me on any preliminary background reading, internal software platforms, or procedural documentation I should review in advance. Furthermore, please inform me of any administrative compliance forms or security clearances required prior to my first morning at the office.",
      wordCount: 51,
      ruleHighlight: "Bullet 3 fully covered: proactive professional courtesy showing readiness and structured preparation."
    },
    {
      id: "closing",
      title: "Closing Paragraph & Formal Sign-off",
      purpose: "Reiterate thanks, express anticipation, and provide formal closing sign-off",
      text: "Thank you once again for your time, consideration, and this exceptional professional opportunity. I look forward to contributing positively to your team in July.\n\nYours sincerely,\nArpit",
      wordCount: 29,
      ruleHighlight: "Formal sign-off: 'Yours sincerely,' followed by sender name ('Arpit') matching the named salutation 'Dear Mr. Pritam,'."
    }
  ],

  modelLetter: `Dear Mr. Pritam,

I am writing to express my sincere appreciation for offering me the three-month internship position at Apex Global Solutions, scheduled to commence on Monday, 7th July. I am truly delighted to have been selected for this placement and wish to formally confirm my acceptance of the offer.

First and foremost, I would like to extend my sincere gratitude to you and the selection committee for granting me this invaluable opportunity. Having followed your company’s groundbreaking work in sustainable supply chain logistics, I feel immensely privileged to be invited to join such an esteemed and innovative organization.

During this three-month placement, I hope to gain comprehensive hands-on exposure to commercial project management and data-driven risk assessment. While my university coursework in business analytics has provided me with a rigorous theoretical foundation, I am eager to observe how seasoned industry professionals navigate complex client briefs and streamline operational workflows under real-market constraints.

In preparation for my commencement date, I would be grateful if you could advise me on any preliminary background reading, internal software platforms, or procedural documentation I should review in advance. Furthermore, please inform me of any administrative compliance forms or security clearances required prior to my first morning at the office.

Thank you once again for your time, consideration, and this exceptional professional opportunity. I look forward to contributing positively to your team in July.

Yours sincerely,
Arpit`,

  toneGuidelines: [
    {
      rule: "Maintain strict formal vocabulary and eliminate all contractions",
      doExample: "I am writing to express my sincere appreciation... / I would be grateful if...",
      dontExample: "I'm super thrilled to get this job! / Drop me a quick email with the stuff to read."
    },
    {
      rule: "Salutation and sign-off alignment for named individuals",
      doExample: "Dear Mr. Pritam, ... Yours sincerely, Arpit",
      dontExample: "Dear Pritam (informal first-name only), ... Best regards, Arpit OR Dear Sir, ... Yours sincerely, Arpit (mismatched salutation)"
    },
    {
      rule: "Express professional humility and proactive readiness",
      doExample: "I hope to gain comprehensive hands-on exposure under seasoned mentorship...",
      dontExample: "I plan to teach your staff how to use modern analytics tools."
    },
    {
      rule: "Concrete and task-focused inquiries for onboarding",
      doExample: "advise me on preliminary background reading, internal software platforms, or compliance forms...",
      dontExample: "What should I wear and when do we get lunch breaks?"
    }
  ],

  vocabList: [
    {
      term: "Extend My Sincere Gratitude",
      definition: "A formal and respectful phrase used to express profound appreciation.",
      example: "I would like to extend my sincere gratitude to the committee for this opportunity.",
      category: "Professional Etiquette"
    },
    {
      term: "Invaluable Opportunity",
      definition: "An occasion or placement offering benefits so great that they cannot be measured.",
      example: "Securing this three-month placement represents an invaluable opportunity for my career.",
      category: "Internship & Learning"
    },
    {
      term: "Hands-on Exposure",
      definition: "Direct, practical experience and involvement in real workplace operations.",
      example: "I look forward to gaining hands-on exposure to commercial risk modeling.",
      category: "Internship & Learning"
    },
    {
      term: "Rigorous Theoretical Foundation",
      definition: "A thorough, structured academic understanding of principles and theories.",
      example: "My university coursework has provided me with a rigorous theoretical foundation.",
      category: "Internship & Learning"
    },
    {
      term: "Seasoned Industry Professionals",
      definition: "Highly experienced, skilled practitioners in a specialized field.",
      example: "I am eager to learn alongside seasoned industry professionals at your headquarters.",
      category: "Corporate Operations"
    },
    {
      term: "Streamline Operational Workflows",
      definition: "To make business systems and organizational procedures faster, simpler, and more efficient.",
      example: "The logistics department works tirelessly to streamline operational workflows.",
      category: "Corporate Operations"
    },
    {
      term: "Preliminary Background Reading",
      definition: "Introductory texts, research, or briefs studied prior to beginning a project.",
      example: "Please recommend any preliminary background reading that would accelerate my onboarding.",
      category: "Corporate Operations"
    },
    {
      term: "Administrative Compliance",
      definition: "Adherence to official policies, regulatory rules, and documentation standards.",
      example: "I will submit all required administrative compliance forms well before day one.",
      category: "Formal Correspondence"
    }
  ]
};
