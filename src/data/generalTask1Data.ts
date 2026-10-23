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
    category: "Hardware Specs" | "Commercial & Pricing" | "Semi-Formal Phrasing";
  }[];
}

export const GENERAL_TASK1_DATA: GeneralTask1Data = {
  id: "general-task1-computer-quotation",
  taskType: "IELTS General Training • Writing Task 1",
  letterType: "Semi-Formal",
  title: "Computer Procurement Inquiry & Price Quotation Letter",
  questionText:
    "You want to buy some computers. Therefore, write to a vendor seeking information and price quotation for the same.\n\nIn your letter,\n• Introduce yourself\n• Give details on what type of computers you are looking for\n• Request the quotation",
  salutation: "Dear Sales Manager,",
  signoff: "Yours sincerely,",
  senderName: "Marcus Vance",
  wordCount: 188,

  bullets: [
    {
      id: "bullet-1",
      bulletNumber: 1,
      promptText: "Introduce yourself",
      targetParagraph: "Opening & Background",
      explanation:
        "State who you are, your organizational role or company background, and the clear commercial context of why you are reaching out to the vendor.",
      modelExcerpt:
        "“I am writing to inquire about purchasing a batch of desktop computers for our creative agency, Apex Media Solutions, where I serve as the Senior IT Procurement Officer. As our design team is expanding next month, we need to upgrade our current workstations...”",
      keyCollocations: [
        "serve as the Senior IT Procurement Officer",
        "inquire about purchasing a batch of...",
        "our team is expanding",
        "upgrade our current workstations"
      ]
    },
    {
      id: "bullet-2",
      bulletNumber: 2,
      promptText: "Give details on what type of computers you are looking for",
      targetParagraph: "Technical Specifications & Hardware Scope",
      explanation:
        "Provide explicit, realistic technical specifications: machine category (desktops vs laptops), processor, RAM, storage, graphics capability, peripherals, and quantity required (15 units).",
      modelExcerpt:
        "“Specifically, we are looking to procure 15 high-performance desktop systems. Each unit should be equipped with an Intel Core i7 processor (13th generation or later), a minimum of 32 GB of RAM, and a 1 TB NVMe SSD for fast data processing. Furthermore, each machine must feature a dedicated graphics card with at least 8 GB of VRAM, bundled with a 27-inch 4K monitor.”",
      keyCollocations: [
        "looking to procure 15 high-performance desktop systems",
        "equipped with an Intel Core i7 processor",
        "a minimum of 32 GB of RAM",
        "fast data processing",
        "dedicated graphics card with at least 8 GB of VRAM",
        "bundled with a 27-inch 4K monitor"
      ]
    },
    {
      id: "bullet-3",
      bulletNumber: 3,
      promptText: "Request the quotation",
      targetParagraph: "Commercial Terms, Pricing & Quotation Request",
      explanation:
        "Politely and formally request an itemized quotation, inquire about volume/bulk discounts, warranty terms, delivery timelines, and after-sales support.",
      modelExcerpt:
        "“Could you please provide an itemized price quotation for the hardware described above, including all applicable taxes? In addition, I would be grateful if you could clarify whether your company offers corporate volume discounts for bulk orders, as well as details regarding delivery lead times, warranty coverage, and ongoing technical support.”",
      keyCollocations: [
        "itemized price quotation",
        "including all applicable taxes",
        "corporate volume discounts for bulk orders",
        "delivery lead times",
        "warranty coverage and technical support"
      ]
    }
  ],

  paragraphs: [
    {
      id: "salutation",
      title: "Salutation",
      purpose: "Formal business address to vendor",
      text: "Dear Sales Manager,",
      wordCount: 3
    },
    {
      id: "p1",
      title: "Paragraph 1: Purpose & Introduction (Bullet 1)",
      purpose: "Establish identity, organizational context, and reason for writing",
      text: "I am writing to inquire about purchasing a batch of desktop computers for our creative agency, Apex Media Solutions, where I serve as the Senior IT Procurement Officer. As our design department is expanding next month, we need to upgrade our current workstations to comfortably handle high-demand digital media applications.",
      wordCount: 52,
      bulletRef: 1
    },
    {
      id: "p2",
      title: "Paragraph 2: Hardware Specifications (Bullet 2)",
      purpose: "Detail required specs, computing power, peripherals, and quantity",
      text: "Specifically, we are looking to procure 15 high-performance desktop workstations. Each unit should ideally be equipped with an Intel Core i7 processor (13th generation or later), a minimum of 32 GB of RAM, and a 1 TB NVMe solid-state drive for rapid rendering and data processing. Furthermore, as our personnel routinely produce video animation and 3D modeling, each machine must feature a dedicated graphics card with at least 8 GB of VRAM. We would also appreciate each computer being bundled with a 27-inch 4K color-calibrated monitor.",
      wordCount: 88,
      bulletRef: 2
    },
    {
      id: "p3",
      title: "Paragraph 3: Quotation Request & Terms (Bullet 3)",
      purpose: "Request itemized quotation, discounts, warranty, and lead times",
      text: "Could you please provide an itemized price quotation for the configuration outlined above, including applicable taxes? Furthermore, I would be grateful if you could state whether your firm offers corporate volume discounts for bulk orders, alongside details regarding delivery lead times, warranty coverage, and after-sales technical maintenance.",
      wordCount: 51,
      bulletRef: 3
    },
    {
      id: "closing",
      title: "Closing & Sign-off",
      purpose: "Polite call to action and professional sign-off",
      text: "I look forward to receiving your prompt quotation.\n\nYours sincerely,\nMarcus Vance",
      wordCount: 14
    }
  ],

  modelLetter: `Dear Sales Manager,

I am writing to inquire about purchasing a batch of desktop computers for our creative agency, Apex Media Solutions, where I serve as the Senior IT Procurement Officer. As our design department is expanding next month, we need to upgrade our current workstations to comfortably handle high-demand digital media applications.

Specifically, we are looking to procure 15 high-performance desktop workstations. Each unit should ideally be equipped with an Intel Core i7 processor (13th generation or later), a minimum of 32 GB of RAM, and a 1 TB NVMe solid-state drive for rapid rendering and data processing. Furthermore, as our personnel routinely produce video animation and 3D modeling, each machine must feature a dedicated graphics card with at least 8 GB of VRAM. We would also appreciate each computer being bundled with a 27-inch 4K color-calibrated monitor.

Could you please provide an itemized price quotation for the configuration outlined above, including applicable taxes? Furthermore, I would be grateful if you could state whether your firm offers corporate volume discounts for bulk orders, alongside details regarding delivery lead times, warranty coverage, and after-sales technical maintenance.

I look forward to receiving your prompt quotation.

Yours sincerely,
Marcus Vance`,

  toneGuidelines: [
    {
      rule: "Professional & Polite Opening",
      doExample: "“I am writing to inquire about purchasing a batch of computers...”",
      dontExample: "“Hey, I want to buy some PCs from your shop...” (too casual)"
    },
    {
      rule: "Indirect Polite Modals for Commercial Requests",
      doExample: "“Could you please provide an itemized price quotation...” / “I would be grateful if you could clarify...”",
      dontExample: "“Send me your price list right now.” (too abrupt/demanding)"
    },
    {
      rule: "Precise Commercial & Technical Terminology",
      doExample: "“procure 15 workstations,” “volume discount,” “warranty coverage,” “lead times”",
      dontExample: "“get some stuff,” “cheaper deal,” “send it fast” (informal vocabulary)"
    },
    {
      rule: "Standard Semi-Formal Sign-off",
      doExample: "“Yours sincerely,” or “Kind regards,” + Full Name",
      dontExample: "“Cheers,” “Talk soon,” or “Bye”"
    }
  ],

  vocabList: [
    {
      term: "Procure / Procurement",
      definition: "The formal process of obtaining or purchasing goods and equipment for an organization.",
      example: "We are looking to procure 15 desktop workstations for our design department.",
      category: "Commercial & Pricing"
    },
    {
      term: "Itemized Price Quotation",
      definition: "A detailed breakdown listing the individual prices of each component, service, and tax.",
      example: "Could you please supply an itemized quotation covering both the units and installation?",
      category: "Commercial & Pricing"
    },
    {
      term: "Corporate Volume Discount",
      definition: "A reduced unit price offered to commercial clients ordering in bulk quantities.",
      example: "We would like to confirm if a volume discount applies to orders exceeding ten units.",
      category: "Commercial & Pricing"
    },
    {
      term: "High-Performance Workstation",
      definition: "A powerful computer designed for demanding technical and creative tasks.",
      example: "The workstations must feature multi-core processors and expanded RAM.",
      category: "Hardware Specs"
    },
    {
      term: "Dedicated Graphics Card (VRAM)",
      definition: "A discrete video card with independent memory for graphic-intensive processing.",
      example: "A dedicated GPU with 8 GB VRAM is required for video rendering.",
      category: "Hardware Specs"
    },
    {
      term: "Delivery Lead Time",
      definition: "The total duration required between placing an order and receiving delivery.",
      example: "Please indicate your standard delivery lead times for dispatched hardware.",
      category: "Commercial & Pricing"
    },
    {
      term: "Warranty Coverage & After-Sales Support",
      definition: "Manufacturer guarantee for repairs and replacement accompanied by technical assistance.",
      example: "We require information regarding warranty coverage and on-site servicing options.",
      category: "Commercial & Pricing"
    },
    {
      term: "I would be grateful if you could...",
      definition: "A polite semi-formal formula for requesting information or commercial terms.",
      example: "I would be grateful if you could clarify payment options and invoicing terms.",
      category: "Semi-Formal Phrasing"
    }
  ]
};
