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
    category:
      | "Professional Etiquette"
      | "Internship & Learning"
      | "Corporate Operations"
      | "Formal Correspondence"
      | "Festive Traditions"
      | "Cultural Significance"
      | "Personal Impressions"
      | "Informal Conversational";
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
  id: "general-task1-friend-job-recommendation",
  taskType: "IELTS General Training • Writing Task 1",
  letterType: "Informal",
  title: "Informal Letter: Helping a Study-Abroad Friend Find a Job",
  questionText:
    "THURSDAY (Informal)\n\nA friend you made while you were studying abroad has written to ask you for help in finding a job in your country. You have heard about a job in a local company that might be suitable for him/her. Write a letter to this friend. In your letter,\n• Tell your friend about the job and what sort of work it involves\n• Say why you think the job would be suitable for him/her\n• Explain how to apply for the job",
  salutation: "Dear Pritam,",
  signoff: "Warm wishes,",
  senderName: "Arpit",
  wordCount: 268,

  architectureRevision: [
    {
      step: "1. Salutation & Opening",
      stage: "Affectionate Greeting & Reconnection (Para 1)",
      badgeColor: "#1e3a8a",
      bgColor: "#eff6ff",
      borderColor: "#bfdbfe",
      textColor: "#1d4ed8",
      summary: "Warm greeting to Pritam ('Dear Pritam,') + enthusiasm about catching up, reminiscing about shared university memories abroad, and excited announcement of an ideal local opening."
    },
    {
      step: "2. Body Para 1 (Bullet 1)",
      stage: "The Role & Daily Core Responsibilities",
      badgeColor: "#047857",
      bgColor: "#ecfdf5",
      borderColor: "#a7f3d0",
      textColor: "#047857",
      summary: "Detailing the position: International Client Coordinator at a prominent regional tech firm → Outlining daily tasks like cross-border liaising, bilingual communication, and client onboarding."
    },
    {
      step: "3. Body Para 2 (Bullet 2)",
      stage: "Personal Suitability & Competitive Edge",
      badgeColor: "#d97706",
      bgColor: "#fffbeb",
      borderColor: "#fde68a",
      textColor: "#b45309",
      summary: "Connecting Pritam's unique background: his international master's degree, multicultural adaptability, bilingual fluency, and problem-solving flair make him a tailor-made fit."
    },
    {
      step: "4. Body Para 3 (Bullet 3)",
      stage: "Application Blueprint & Insider Referral",
      badgeColor: "#4338ca",
      bgColor: "#eef2ff",
      borderColor: "#c7d2fe",
      textColor: "#3730a3",
      summary: "Actionable roadmap: tailoring his CV and cover letter, applying directly via the company careers portal, and Arpit offering to submit a personal internal employee recommendation."
    },
    {
      step: "5. Closing & Sign-off",
      stage: "Hospitable Invitation & Warm Sign-off",
      badgeColor: "#0f172a",
      bgColor: "#f8fafc",
      borderColor: "#cbd5e1",
      textColor: "#0f172a",
      summary: "Generous hospitality offer (staying at Arpit's place during interviews) + affectionate sign-off ('Warm wishes,\nArpit')."
    }
  ],

  pptFormatRules: [
    {
      stage: "1. Salutation",
      description: "Informal first-name greeting (Dear [First Name],)",
      specificRule: "When writing to a close friend from university, use 'Dear Pritam,' followed by a comma. Do not use formal titles like 'Mr.' or stiff corporate formulas."
    },
    {
      stage: "2. Opening (Paragraph 1)",
      description: "Warm, natural reconnection and enthusiastic statement of purpose.",
      specificRule: "Acknowledge his previous correspondence, briefly reference your shared study-abroad bond, and excitedly introduce the job news: 'It was fantastic to hear from you... you'll be thrilled to know that an ideal opening just came up...'"
    },
    {
      stage: "3. Body Para 1 (Bullet 1)",
      description: "Specific details about the company, job title, and daily tasks.",
      specificRule: "Specify the exact position (e.g. International Client Coordinator at Apex Solutions) and explain what the work actually entails: coordinating global accounts, managing partner communications, and preparing project briefs."
    },
    {
      stage: "4. Body Para 2 (Bullet 2)",
      description: "Explicit reasons why this specific friend is uniquely qualified.",
      specificRule: "Highlight personal attributes: his overseas academic training, bilingual linguistic fluency, exceptional interpersonal diplomacy, and proven teamwork."
    },
    {
      stage: "5. Body Para 3 (Bullet 3)",
      description: "Clear, helpful application instructions plus an internal referral offer.",
      specificRule: "Provide actionable guidance: submit via the online portal by next Friday, customize the portfolio, and promise to speak directly with the hiring manager."
    },
    {
      stage: "6. Closing & Sign-off",
      description: "Warm closing offer of hospitality and informal sign-off.",
      specificRule: "Offer him a place to stay when visiting for the interview and conclude warmly with 'Warm wishes,' or 'All the best,' followed by 'Arpit'."
    }
  ],

  bullets: [
    {
      id: "bullet-1",
      bulletNumber: 1,
      promptText: "Tell your friend about the job and what sort of work it involves",
      targetParagraph: "Body Paragraph 1",
      linkerRule: "Informal informational markers (e.g. 'The position is for an...', 'Basically, your main responsibilities would involve...')",
      explanation:
        "Introduce the company and describe the daily operational tasks, clarifying that the role demands international communication and project handling.",
      modelExcerpt:
        "The position is for an International Client Coordinator at Apex Digital, a fast-growing tech consultancy based right here in the city. Essentially, the role involves liaising between local software development teams and overseas corporate clients. You would be responsible for managing day-to-day client communications, scheduling international product demos, and ensuring project deliverables align seamlessly with customer specifications.",
      keyCollocations: [
        "fast-growing tech consultancy",
        "liaising between local development teams",
        "overseas corporate clients",
        "day-to-day client communications",
        "project deliverables"
      ]
    },
    {
      id: "bullet-2",
      bulletNumber: 2,
      promptText: "Say why you think the job would be suitable for him/her",
      targetParagraph: "Body Paragraph 2",
      linkerRule: "Complimentary reasoning linkers (e.g. 'Knowing your background,...', 'What makes this a tailor-made fit is...')",
      explanation:
        "Explain how the friend's educational credentials, linguistic skills, and multicultural background make him an ideal candidate.",
      modelExcerpt:
        "The moment I saw the job brief, I immediately thought of you because your background makes you a tailor-made fit. Given our postgraduate studies in international business, you already have a deep grasp of cross-cultural negotiations. Furthermore, your bilingual fluency and charismatic presentation skills are precisely what their management is looking for to spearhead global accounts.",
      keyCollocations: [
        "tailor-made fit",
        "postgraduate studies in international business",
        "cross-cultural negotiations",
        "bilingual fluency",
        "spearhead global accounts"
      ]
    },
    {
      id: "bullet-3",
      bulletNumber: 3,
      promptText: "Explain how to apply for the job",
      targetParagraph: "Body Paragraph 3",
      linkerRule: "Actionable instructional linkers (e.g. 'As for the application process,...', 'Make sure to highlight...')",
      explanation:
        "Provide direct steps: deadlines, portal submission, CV tailoring, and offering to provide an internal referral.",
      modelExcerpt:
        "To apply, you need to head over to their official careers portal and submit your updated CV alongside a tailored cover letter before the 15th of next month. Be sure to highlight our overseas group capstone project, as they value proven collaborative problem-solving. More importantly, my cousin works in their human resources division, so send me your resume beforehand and I will happily put in a glowing recommendation for you.",
      keyCollocations: [
        "official careers portal",
        "tailored cover letter",
        "overseas capstone project",
        "collaborative problem-solving",
        "put in a glowing recommendation"
      ]
    }
  ],

  paragraphs: [
    {
      id: "opening",
      title: "Opening Paragraph: Warm Reconnection & Exciting News",
      purpose: "Catch up affectionately, acknowledge his search, and introduce the promising local vacancy",
      text: "It was wonderful to receive your email last week, and it brought back so many great memories of our study sessions and late-night coffee runs during our semester abroad. I was thrilled to hear that you are planning to relocate to my home country, and you will be pleased to know that I have tracked down an opening that seems ideal for you.",
      wordCount: 65,
      ruleHighlight: "Engaging informal opening: personal warmth, shared memories, and natural introduction of the job opportunity."
    },
    {
      id: "body1",
      title: "Body Paragraph 1: The Vacancy & Scope of Work (Bullet 1)",
      purpose: "Name the company, job title, and clarify daily operational responsibilities",
      bulletRef: 1,
      text: "The position is for an International Client Coordinator at Apex Digital, a fast-growing tech consultancy based right here in the city. Essentially, the role involves liaising between local software development teams and overseas corporate clients. You would be responsible for managing day-to-day client communications, scheduling international product demos, and ensuring project deliverables align seamlessly with customer specifications.",
      wordCount: 56,
      ruleHighlight: "Bullet 1 fully addressed: clear explanation of company profile and tangible day-to-day duties."
    },
    {
      id: "body2",
      title: "Body Paragraph 2: Why Pritam Is the Ideal Match (Bullet 2)",
      purpose: "Link his academic qualifications, linguistic prowess, and personality to the job requirements",
      bulletRef: 2,
      text: "The moment I saw the job brief, I immediately thought of you because your background makes you a tailor-made fit. Given our postgraduate studies in international business, you already have a deep grasp of cross-cultural negotiations. Furthermore, your bilingual fluency and charismatic presentation skills are precisely what their management is looking for to spearhead global accounts.",
      wordCount: 56,
      ruleHighlight: "Bullet 2 fully addressed: highlights relevant academic foundation, cross-cultural competence, and bilingual skills."
    },
    {
      id: "body3",
      title: "Body Paragraph 3: Step-by-Step Application & Referral (Bullet 3)",
      purpose: "Give clear application deadlines, website steps, and offer an employee referral",
      bulletRef: 3,
      text: "To apply, you need to head over to their official careers portal and submit your updated CV alongside a tailored cover letter before the 15th of next month. Be sure to highlight our overseas group capstone project, as they value proven collaborative problem-solving. More importantly, my cousin works in their human resources division, so send me your resume beforehand and I will happily put in a glowing recommendation for you.",
      wordCount: 71,
      ruleHighlight: "Bullet 3 fully addressed: specific deadline, portal instructions, CV tips, and generous personal referral."
    },
    {
      id: "closing",
      title: "Closing Paragraph & Hospitality Offer",
      purpose: "Extend hospitality for interview visits, encourage him, and sign off warmly",
      text: "If you are invited for an in-person interview, my spare bedroom is completely yours for as long as you need. Keep me posted on your progress, and let me know if you want to jump on a quick video call to polish your resume.\n\nWarm wishes,\nArpit",
      wordCount: 47,
      ruleHighlight: "Affectionate closing: hospitality offer, offer of ongoing support, and warm informal sign-off."
    }
  ],

  modelLetter: `Dear Pritam,

It was wonderful to receive your email last week, and it brought back so many great memories of our study sessions and late-night coffee runs during our semester abroad. I was thrilled to hear that you are planning to relocate to my home country, and you will be pleased to know that I have tracked down an opening that seems ideal for you.

The position is for an International Client Coordinator at Apex Digital, a fast-growing tech consultancy based right here in the city. Essentially, the role involves liaising between local software development teams and overseas corporate clients. You would be responsible for managing day-to-day client communications, scheduling international product demos, and ensuring project deliverables align seamlessly with customer specifications.

The moment I saw the job brief, I immediately thought of you because your background makes you a tailor-made fit. Given our postgraduate studies in international business, you already have a deep grasp of cross-cultural negotiations. Furthermore, your bilingual fluency and charismatic presentation skills are precisely what their management is looking for to spearhead global accounts.

To apply, you need to head over to their official careers portal and submit your updated CV alongside a tailored cover letter before the 15th of next month. Be sure to highlight our overseas group capstone project, as they value proven collaborative problem-solving. More importantly, my cousin works in their human resources division, so send me your resume beforehand and I will happily put in a glowing recommendation for you.

If you are invited for an in-person interview, my spare bedroom is completely yours for as long as you need. Keep me posted on your progress, and let me know if you want to jump on a quick video call to polish your resume.

Warm wishes,
Arpit`,

  toneGuidelines: [
    {
      rule: "Adopt a natural, warm, and encouraging informal conversational tone",
      doExample: "It was wonderful to hear from you... you'll be pleased to know that I've found an opening...",
      dontExample: "With reference to your formal inquiry dated 12th instant regarding employment opportunities..."
    },
    {
      rule: "Use natural contractions and friendly expressions suitable for friends",
      doExample: "I'd love to help, you'll be thrilled, don't worry about staying in a hotel...",
      dontExample: "I shall endeavor to assist you with utmost priority."
    },
    {
      rule: "Reference shared personal history naturally",
      doExample: "Reminiscing about our late-night study sessions and campus group projects...",
      dontExample: "As documented in our previous institutional curriculum..."
    },
    {
      rule: "Provide practical, encouraging application advice",
      doExample: "Send me your CV and I'll put in a glowing recommendation with the HR team...",
      dontExample: "Candidates must adhere to statutory employment protocols."
    }
  ],

  vocabList: [
    {
      term: "Liaise",
      definition: "To work closely with someone and exchange information with them.",
      example: "In this role, you will liaise directly between overseas clients and engineering leads.",
      category: "Corporate Operations"
    },
    {
      term: "Tailor-made fit",
      definition: "Specially designed or extremely well-suited for a particular person, purpose, or situation.",
      example: "Your background in cross-border commerce makes you a tailor-made fit for this position.",
      category: "Personal Impressions"
    },
    {
      term: "Spearhead",
      definition: "To lead or be the driving force behind an attack, campaign, project, or activity.",
      example: "The firm is looking for a dynamic coordinator to spearhead global customer outreach.",
      category: "Corporate Operations"
    },
    {
      term: "Put in a glowing recommendation",
      definition: "To speak highly of someone to an employer to improve their chances of getting hired.",
      example: "I will gladly put in a glowing recommendation with the hiring manager on your behalf.",
      category: "Informal Conversational"
    },
    {
      term: "Collaborative problem-solving",
      definition: "The capacity of a group to work together to solve problems by sharing knowledge and skills.",
      example: "The consultancy heavily prioritizes candidates with proven collaborative problem-solving skills.",
      category: "Internship & Learning"
    },
    {
      term: "Bilingual fluency",
      definition: "The ability to speak, read, and write in two languages easily and accurately.",
      example: "Your bilingual fluency will give you an immediate edge over other local applicants.",
      category: "Internship & Learning"
    },
    {
      term: "Project deliverables",
      definition: "The tangible goods, services, or reports that must be provided upon the completion of a project phase.",
      example: "You will be tracking milestones to make sure project deliverables are dispatched on schedule.",
      category: "Corporate Operations"
    },
    {
      term: "Keep me posted",
      definition: "An informal phrase meaning to continue to inform someone about the latest news or developments.",
      example: "Good luck with the initial screening, and please keep me posted on how it goes!",
      category: "Informal Conversational"
    }
  ]
};
