#!/usr/bin/env python3
"""
Generator script for:
SOCIAL ENGINEERING IN THE AGE OF AI: How Technology Is Changing the Way Cybercriminals Exploit Trust
Presenter: Daksh Parekh
Degree: B.Sc. CA & IT (4-Year Honours), Academic Year 2026-27
Active Learning Activity - Cyber Security (US07HMABCA02)
"""

import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.dml.color import RGBColor

# ==============================================================================
# DESIGN SYSTEM & COLOR PALETTE
# ==============================================================================
BG_DARK = RGBColor(11, 17, 32)           # #0B1120 Deep Midnight Navy
SURFACE_CARD = RGBColor(21, 30, 50)      # #151E32 Slate 850 Card Surface
SURFACE_CARD_HOVER = RGBColor(30, 41, 59)# #1E293B Slate 800 Highlight Surface
CARD_BORDER = RGBColor(51, 65, 85)       # #334155 Slate 700 Border

# Accent Colors
CYAN_ACCENT = RGBColor(56, 189, 248)     # #38BDF8 Sky Cyan
CYAN_BORDER = RGBColor(14, 165, 233)     # #0EA5E9
CYAN_PILL_BG = RGBColor(12, 74, 110)     # #0C4A6E
CYAN_PILL_TEXT = RGBColor(186, 230, 253) # #BAE6FD

EMERALD_ACCENT = RGBColor(52, 211, 153)  # #34D399 Mint Emerald
EMERALD_BORDER = RGBColor(16, 185, 129)  # #10B981
EMERALD_PILL_BG = RGBColor(6, 78, 59)    # #064E3B
EMERALD_PILL_TEXT = RGBColor(167, 243, 208)

AMBER_ACCENT = RGBColor(251, 191, 36)    # #FBBF24 Warm Amber
AMBER_BORDER = RGBColor(245, 158, 11)    # #F59E0B
AMBER_PILL_BG = RGBColor(120, 53, 15)    # #78350F
AMBER_PILL_TEXT = RGBColor(254, 240, 138)

RED_ACCENT = RGBColor(248, 113, 113)     # #F87171 Coral Red
RED_BORDER = RGBColor(239, 68, 68)       # #EF4444
RED_PILL_BG = RGBColor(127, 29, 29)      # #7F1D1D
RED_PILL_TEXT = RGBColor(254, 202, 202)

PURPLE_ACCENT = RGBColor(167, 139, 250)  # #A78BFA Soft Purple
PURPLE_BORDER = RGBColor(139, 92, 246)   # #8B5CF6
PURPLE_PILL_BG = RGBColor(76, 29, 149)   # #4C1D95
PURPLE_PILL_TEXT = RGBColor(233, 213, 255)

# Text Colors
TEXT_WHITE = RGBColor(248, 250, 252)     # #F8FAFC Pure Crisp White
TEXT_BODY = RGBColor(203, 213, 225)      # #CBD5E1 Slate 300
TEXT_MUTED = RGBColor(148, 163, 184)     # #94A3B8 Slate 400
TEXT_DIM = RGBColor(100, 116, 139)       # #64748B Slate 500

FONT_HEADING = "Helvetica"
FONT_BODY = "Arial"

# ==============================================================================
# HELPER FUNCTIONS
# ==============================================================================
def create_base_slide(prs):
    """Creates a blank slide with dark theme background."""
    blank_layout = prs.slide_layouts[6]
    slide = prs.slides.add_slide(blank_layout)
    
    # Solid dark background
    bg = slide.shapes.add_shape(
        MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5)
    )
    bg.fill.solid()
    bg.fill.fore_color.rgb = BG_DARK
    bg.line.fill.background()
    return slide

def add_header(slide, tag_text, title_text, subtitle_text):
    """Adds a standardized, highly polished header to slides 2 to 14."""
    # Top Tag / Category Pill
    tag_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.40), Inches(11.733), Inches(0.28))
    tf_tag = tag_box.text_frame
    tf_tag.word_wrap = True
    tf_tag.margin_left = tf_tag.margin_right = tf_tag.margin_top = tf_tag.margin_bottom = 0
    p_tag = tf_tag.paragraphs[0]
    p_tag.text = tag_text.upper()
    p_tag.font.name = FONT_HEADING
    p_tag.font.size = Pt(9.5)
    p_tag.font.bold = True
    p_tag.font.color.rgb = CYAN_ACCENT

    # Main Slide Title
    title_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.68), Inches(11.733), Inches(0.48))
    tf_title = title_box.text_frame
    tf_title.word_wrap = True
    tf_title.margin_left = tf_title.margin_right = tf_title.margin_top = tf_title.margin_bottom = 0
    p_title = tf_title.paragraphs[0]
    p_title.text = title_text
    p_title.font.name = FONT_HEADING
    p_title.font.size = Pt(21)
    p_title.font.bold = True
    p_title.font.color.rgb = TEXT_WHITE

    # Subtitle / Analytical Focus
    sub_box = slide.shapes.add_textbox(Inches(0.8), Inches(1.18), Inches(11.733), Inches(0.32))
    tf_sub = sub_box.text_frame
    tf_sub.word_wrap = True
    tf_sub.margin_left = tf_sub.margin_right = tf_sub.margin_top = tf_sub.margin_bottom = 0
    p_sub = tf_sub.paragraphs[0]
    p_sub.text = subtitle_text
    p_sub.font.name = FONT_BODY
    p_sub.font.size = Pt(11.5)
    p_sub.font.color.rgb = TEXT_MUTED

    # Header Divider Line
    line = slide.shapes.add_shape(
        MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(1.54), Inches(11.733), Inches(0.015)
    )
    line.fill.solid()
    line.fill.fore_color.rgb = RGBColor(30, 41, 59)
    line.line.fill.background()

def add_footer(slide, current_slide, total_slides=14):
    """Adds a clean academic footer with slide numbers."""
    # Footer Divider Line
    line = slide.shapes.add_shape(
        MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(6.82), Inches(11.733), Inches(0.015)
    )
    line.fill.solid()
    line.fill.fore_color.rgb = RGBColor(30, 41, 59)
    line.line.fill.background()

    # Footer Left
    box_l = slide.shapes.add_textbox(Inches(0.8), Inches(6.92), Inches(5.0), Inches(0.3))
    tf_l = box_l.text_frame
    tf_l.margin_left = tf_l.margin_right = tf_l.margin_top = tf_l.margin_bottom = 0
    p_l = tf_l.paragraphs[0]
    p_l.text = "Social Engineering in the Age of AI • Active Learning Activity"
    p_l.font.name = FONT_BODY
    p_l.font.size = Pt(9)
    p_l.font.color.rgb = TEXT_DIM

    # Footer Center
    box_c = slide.shapes.add_textbox(Inches(4.5), Inches(6.92), Inches(4.333), Inches(0.3))
    tf_c = box_c.text_frame
    tf_c.margin_left = tf_c.margin_right = tf_c.margin_top = tf_c.margin_bottom = 0
    p_c = tf_c.paragraphs[0]
    p_c.alignment = PP_ALIGN.CENTER
    p_c.text = "Daksh Parekh | B.Sc. CA & IT (4-Year Honours) | 2026–27"
    p_c.font.name = FONT_BODY
    p_c.font.size = Pt(9)
    p_c.font.color.rgb = TEXT_DIM

    # Footer Right
    box_r = slide.shapes.add_textbox(Inches(9.533), Inches(6.92), Inches(3.0), Inches(0.3))
    tf_r = box_r.text_frame
    tf_r.margin_left = tf_r.margin_right = tf_r.margin_top = tf_r.margin_bottom = 0
    p_r = tf_r.paragraphs[0]
    p_r.alignment = PP_ALIGN.RIGHT
    p_r.text = f"Slide {current_slide} of {total_slides}"
    p_r.font.name = FONT_HEADING
    p_r.font.bold = True
    p_r.font.size = Pt(9.5)
    p_r.font.color.rgb = CYAN_ACCENT

def add_card(slide, left, top, width, height, bg_color=SURFACE_CARD, border_color=CARD_BORDER, border_width=1):
    """Creates a rounded rectangle card container."""
    card = slide.shapes.add_shape(
        MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height
    )
    card.fill.solid()
    card.fill.fore_color.rgb = bg_color
    if border_color:
        card.line.color.rgb = border_color
        card.line.width = Pt(border_width)
    else:
        card.line.fill.background()
    return card

def add_speaker_notes(slide, notes_text):
    pass  # Omitted to prevent Keynote import crash

# ==============================================================================
# SLIDE BUILDERS
# ==============================================================================

def build_slide_1(prs):
    """Slide 1: Title Slide"""
    slide = create_base_slide(prs)
    
    # Background Glow Box / Hero Container
    container = add_card(
        slide, Inches(0.8), Inches(0.7), Inches(11.733), Inches(5.85),
        bg_color=RGBColor(15, 23, 42), border_color=RGBColor(30, 58, 138), border_width=1.5
    )
    
    # Top Academic Badge
    badge = add_card(
        slide, Inches(1.3), Inches(1.15), Inches(5.8), Inches(0.36),
        bg_color=CYAN_PILL_BG, border_color=CYAN_BORDER, border_width=1
    )
    tf_b = badge.text_frame
    tf_b.margin_left = tf_b.margin_right = tf_b.margin_top = tf_b.margin_bottom = 0
    p_b = tf_b.paragraphs[0]
    p_b.alignment = PP_ALIGN.CENTER
    p_b.text = "ACTIVE LEARNING ACTIVITY • CYBER SECURITY (US07HMABCA02)"
    p_b.font.name = FONT_HEADING
    p_b.font.size = Pt(10)
    p_b.font.bold = True
    p_b.font.color.rgb = CYAN_PILL_TEXT
    
    # Title Text Box
    tbox = slide.shapes.add_textbox(Inches(1.3), Inches(1.75), Inches(10.7), Inches(1.4))
    tf = tbox.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = 0
    
    p1 = tf.paragraphs[0]
    p1.text = "SOCIAL ENGINEERING IN THE AGE OF AI"
    p1.font.name = FONT_HEADING
    p1.font.size = Pt(32)
    p1.font.bold = True
    p1.font.color.rgb = TEXT_WHITE
    p1.space_after = Pt(10)
    
    p2 = tf.add_paragraph()
    p2.text = "How Technology Is Changing the Way Cybercriminals Exploit Trust"
    p2.font.name = FONT_BODY
    p2.font.size = Pt(16.5)
    p2.font.bold = True
    p2.font.color.rgb = CYAN_ACCENT

    # Subtle horizontal line
    div = slide.shapes.add_shape(
        MSO_SHAPE.RECTANGLE, Inches(1.3), Inches(3.3), Inches(10.7), Inches(0.015)
    )
    div.fill.solid()
    div.fill.fore_color.rgb = RGBColor(30, 41, 59)
    div.line.fill.background()

    # Two Column Information Cards
    # Left Card: Presenter Details
    c_left = add_card(
        slide, Inches(1.3), Inches(3.6), Inches(5.15), Inches(2.4),
        bg_color=RGBColor(21, 30, 50), border_color=CARD_BORDER
    )
    tfl = c_left.text_frame
    tfl.word_wrap = True
    tfl.margin_left = tfl.margin_right = Inches(0.25)
    tfl.margin_top = tfl.margin_bottom = Inches(0.2)
    
    pl_h = tfl.paragraphs[0]
    pl_h.text = "PRESENTER INFORMATION"
    pl_h.font.name = FONT_HEADING
    pl_h.font.size = Pt(11)
    pl_h.font.bold = True
    pl_h.font.color.rgb = CYAN_ACCENT
    pl_h.space_after = Pt(8)
    
    lines_l = [
        ("Candidate Name: ", "Daksh Parekh"),
        ("Degree Programme: ", "B.Sc. Computer Applications & IT"),
        ("Course Structure: ", "4-Year Honours Degree"),
        ("Academic Year: ", "2026–27")
    ]
    for label, val in lines_l:
        p = tfl.add_paragraph()
        run1 = p.add_run()
        run1.text = label
        run1.font.name = FONT_BODY
        run1.font.size = Pt(10.5)
        run1.font.color.rgb = TEXT_MUTED
        run2 = p.add_run()
        run2.text = val
        run2.font.name = FONT_BODY
        run2.font.size = Pt(10.5)
        run2.font.bold = True
        run2.font.color.rgb = TEXT_WHITE
        p.space_after = Pt(3)

    # Right Card: Academic & Curricular Context
    c_right = add_card(
        slide, Inches(6.85), Inches(3.6), Inches(5.15), Inches(2.4),
        bg_color=RGBColor(21, 30, 50), border_color=CARD_BORDER
    )
    tfr = c_right.text_frame
    tfr.word_wrap = True
    tfr.margin_left = tfr.margin_right = Inches(0.25)
    tfr.margin_top = tfr.margin_bottom = Inches(0.2)
    
    pr_h = tfr.paragraphs[0]
    pr_h.text = "CURRICULAR CONTEXT & SCOPE"
    pr_h.font.name = FONT_HEADING
    pr_h.font.size = Pt(11)
    pr_h.font.bold = True
    pr_h.font.color.rgb = EMERALD_ACCENT
    pr_h.space_after = Pt(8)
    
    lines_r = [
        ("Course Title: ", "Fundamentals of Cyber Security"),
        ("Course Code: ", "US07HMABCA02"),
        ("Syllabus Alignment: ", "Units 1–3 (Social Eng., Threats, Defense)"),
        ("Evaluation Component: ", "Active Learning Activity (5 Marks)")
    ]
    for label, val in lines_r:
        p = tfr.add_paragraph()
        run1 = p.add_run()
        run1.text = label
        run1.font.name = FONT_BODY
        run1.font.size = Pt(10.5)
        run1.font.color.rgb = TEXT_MUTED
        run2 = p.add_run()
        run2.text = val
        run2.font.name = FONT_BODY
        run2.font.size = Pt(10.5)
        run2.font.bold = True
        run2.font.color.rgb = TEXT_WHITE
        p.space_after = Pt(3)

    # Presenter Notes
    notes = (
        "SPEAKER NOTES — SLIDE 1: INTRODUCTION\n\n"
        "Good morning, respected faculty and fellow students.\n"
        "My name is Daksh Parekh, pursuing the B.Sc. in Computer Applications and Information Technology 4-Year Honours degree.\n\n"
        "Today, I present our Active Learning Activity for Cyber Security on the topic: 'Social Engineering in the Age of AI: How Technology Is Changing the Way Cybercriminals Exploit Trust.'\n\n"
        "In our academic curriculum under course US07HMABCA02, we study how perimeters, firewalls, and encryption protocols are engineered to safeguard systems. However, this presentation explores a critical paradigm shift: when technological perimeters become difficult to breach, adversaries shift their focus from software vulnerabilities to human cognitive vulnerabilities.\n\n"
        "We will investigate how generative artificial intelligence, neural voice synthesis, and multi-modal deception are reshaping the cyber threat landscape, and examine the technical and behavioral frameworks required to build resilient defenses."
    )
    add_speaker_notes(slide, notes)


def build_slide_2(prs):
    """Slide 2: Opening Question & The Perimeter Paradox"""
    slide = create_base_slide(prs)
    add_header(
        slide,
        "CONCEPTUAL INQUIRY • THE PERIMETER PARADOX",
        "Can a Secure System Be Compromised Without Breaking Into It?",
        "Why modern security architectures cannot rely entirely on algorithmic and network defenses"
    )
    add_footer(slide, 2)

    # Hero Question Card
    hero = add_card(
        slide, Inches(0.8), Inches(1.75), Inches(11.733), Inches(1.35),
        bg_color=RGBColor(15, 23, 42), border_color=CYAN_BORDER, border_width=1.5
    )
    tfh = hero.text_frame
    tfh.word_wrap = True
    tfh.margin_left = tfh.margin_right = Inches(0.3)
    tfh.margin_top = Inches(0.18)
    
    ph1 = tfh.paragraphs[0]
    ph1.text = "THE CENTRAL REVELATION"
    ph1.font.name = FONT_HEADING
    ph1.font.size = Pt(10.5)
    ph1.font.bold = True
    ph1.font.color.rgb = CYAN_ACCENT
    ph1.space_after = Pt(4)
    
    ph2 = tfh.add_paragraph()
    run = ph2.add_run()
    run.text = "Attackers do not always target technical system flaws. Frequently, they target the person operating the system."
    run.font.name = FONT_HEADING
    run.font.size = Pt(14)
    run.font.bold = True
    run.font.color.rgb = TEXT_WHITE
    ph2.space_after = Pt(4)
    
    ph3 = tfh.add_paragraph()
    ph3.text = "While modern cryptography and enterprise firewalls withstand direct brute-force computation, social engineering bypasses encryption entirely by inducing legitimate authorized users to open the gates themselves."
    ph3.font.name = FONT_BODY
    ph3.font.size = Pt(11)
    ph3.font.color.rgb = TEXT_BODY

    # 4 Flow Steps: The Psychological Exploitation Loop
    flow_y = Inches(3.35)
    card_w = Inches(2.7)
    card_h = Inches(2.35)
    gap = Inches(0.31)
    
    steps = [
        ("1. TRUST", CYAN_ACCENT, CYAN_BORDER, [
            ("Baseline Establishment", True),
            ("Targets rely on established digital trust: familiar company brands, management personas, or communication channels.", False),
            ("Cognitive Shortcut", True),
            ("Trust allows routine decisions to happen automatically without constant friction.", False)
        ]),
        ("2. EMOTION", AMBER_ACCENT, AMBER_BORDER, [
            ("Affective Disruption", True),
            ("Attackers introduce an emotional catalyst: fear of disciplinary action, curiosity, or a helpful desire to solve a crisis.", False),
            ("Bypassing Analysis", True),
            ("Heightened emotion impairs deliberate analytical reasoning.", False)
        ]),
        ("3. URGENCY", RED_ACCENT, RED_BORDER, [
            ("Artificial Deadline", True),
            ("'Action required within 15 minutes to avoid account deactivation or contract termination.'", False),
            ("Heuristic Reaction", True),
            ("Forces fast, instinctive thinking and prevents independent consultation.", False)
        ]),
        ("4. ACTION", EMERALD_ACCENT, EMERALD_BORDER, [
            ("Compromising Step", True),
            ("The target reveals credentials, approves an MFA push prompt, or authorizes an urgent payment.", False),
            ("Perimeter Bypassed", True),
            ("The breach succeeds using valid credentials without triggering code-level alarms.", False)
        ])
    ]
    
    for i, (stitle, scolor, sborder, items) in enumerate(steps):
        c_x = Inches(0.8) + i * (card_w + gap)
        scard = add_card(slide, c_x, flow_y, card_w, card_h, bg_color=SURFACE_CARD, border_color=sborder, border_width=1.2)
        tfs = scard.text_frame
        tfs.word_wrap = True
        tfs.margin_left = tfs.margin_right = Inches(0.2)
        tfs.margin_top = Inches(0.18)
        
        ps_t = tfs.paragraphs[0]
        ps_t.text = stitle
        ps_t.font.name = FONT_HEADING
        ps_t.font.size = Pt(12)
        ps_t.font.bold = True
        ps_t.font.color.rgb = scolor
        ps_t.space_after = Pt(6)
        
        for text, is_label in items:
            p = tfs.add_paragraph()
            if is_label:
                p.text = text.upper()
                p.font.name = FONT_HEADING
                p.font.size = Pt(9)
                p.font.bold = True
                p.font.color.rgb = TEXT_WHITE
                p.space_after = Pt(2)
            else:
                p.text = text
                p.font.name = FONT_BODY
                p.font.size = Pt(9.5)
                p.font.color.rgb = TEXT_MUTED
                p.space_after = Pt(5)

    # Bottom Takeaway Card
    bot_card = add_card(
        slide, Inches(0.8), Inches(5.9), Inches(11.733), Inches(0.72),
        bg_color=RGBColor(15, 23, 42), border_color=CARD_BORDER
    )
    tfb = bot_card.text_frame
    tfb.word_wrap = True
    tfb.margin_left = tfb.margin_right = Inches(0.25)
    tfb.margin_top = Inches(0.14)
    pb = tfb.paragraphs[0]
    r1 = pb.add_run()
    r1.text = "CORE THESIS: "
    r1.font.name = FONT_HEADING
    r1.font.size = Pt(10.5)
    r1.font.bold = True
    r1.font.color.rgb = CYAN_ACCENT
    r2 = pb.add_run()
    r2.text = "Social engineering does not defeat the cipher; it defeats the decision-maker. Understanding this attack mechanism is vital for designing effective human and technical defenses."
    r2.font.name = FONT_BODY
    r2.font.size = Pt(10.5)
    r2.font.color.rgb = TEXT_BODY

    notes = (
        "SPEAKER NOTES — SLIDE 2: THE CORE DILEMMA\n\n"
        "Let us open with an essential question: 'Can an enterprise-grade secure system be compromised without breaking into it?'\n\n"
        "The short answer is: absolutely. Over the past two decades, our industry has invested billions into cryptographic protocols, firewalls, and intrusion detection systems. Mathematically, AES-256 encryption or RSA key pairs are virtually unbreakable via direct brute-force computation in reasonable timeframes.\n\n"
        "Yet, organizations with world-class technical security suffer catastrophic breaches. Why? Because adversaries do not waste resources attacking unbreakable algorithms when they can simply target the human being holding the access keys.\n\n"
        "Notice the four-stage progression on the slide: Trust establishes the baseline; Emotion disrupts objective analysis; Urgency eliminates time for reflection; and Action completes the compromise. As Nobel laureate Daniel Kahneman observed, human cognition switches from slow, deliberate 'System 2' thinking to fast, reactive 'System 1' heuristics when stressed. Social engineering is explicitly engineered to force that cognitive shortcut."
    )
    add_speaker_notes(slide, notes)


def build_slide_3(prs):
    """Slide 3: What Is Social Engineering?"""
    slide = create_base_slide(prs)
    add_header(
        slide,
        "THEORETICAL FOUNDATIONS • THREAT TAXONOMY",
        "What Is Social Engineering? Definitions and Objectives",
        "Examining how deceptive psychology converts legitimate human authority into an attack vector"
    )
    add_footer(slide, 3)

    # Formal Academic Definition Card
    def_card = add_card(
        slide, Inches(0.8), Inches(1.75), Inches(11.733), Inches(1.2),
        bg_color=RGBColor(15, 23, 42), border_color=CYAN_BORDER, border_width=1.2
    )
    tfd = def_card.text_frame
    tfd.word_wrap = True
    tfd.margin_left = tfd.margin_right = Inches(0.3)
    tfd.margin_top = Inches(0.16)
    
    pd_t = tfd.paragraphs[0]
    pd_t.text = "ACADEMIC DEFINITION (COURSE CODE: US07HMABCA02, UNIT 1)"
    pd_t.font.name = FONT_HEADING
    pd_t.font.size = Pt(9.5)
    pd_t.font.bold = True
    pd_t.font.color.rgb = CYAN_ACCENT
    pd_t.space_after = Pt(3)
    
    pd_b = tfd.add_paragraph()
    r = pd_b.add_run()
    r.text = "“Social engineering is the use of deception or psychological manipulation to influence people into revealing confidential information, transferring valuable resources, or performing an unsafe action that benefits an attacker.”"
    r.font.name = FONT_BODY
    r.font.size = Pt(12)
    r.font.bold = True
    r.font.color.rgb = TEXT_WHITE

    # 3 Strategic Objectives Cards (Pillars)
    col_w = Inches(3.72)
    col_h = Inches(3.65)
    col_y = Inches(3.1)
    gap = Inches(0.28)

    pillars = [
        ("1. REVEAL", "INFORMATION EXFILTRATION", CYAN_ACCENT, CYAN_BORDER, [
            ("Primary Targets", True),
            ("Passwords, Multi-Factor OTPs, personal identity data (PII), session tokens, and cryptographic keys.", False),
            ("Operational Mechanism", True),
            ("Fake login portals, deceptive password reset alerts, or spoofed IT verification inquiries.", False),
            ("Security Consequence", True),
            ("Enables silent account takeover and lateral movement without triggering brute-force intrusion alarms.", False)
        ]),
        ("2. TRANSFER", "ASSET MISAPPROPRIATION", AMBER_ACCENT, AMBER_BORDER, [
            ("Primary Targets", True),
            ("Direct wire funds, proprietary code repositories, confidential business files, and intellectual property.", False),
            ("Operational Mechanism", True),
            ("Fabricated vendor invoices, executive transfer directives, or spoofed supplier account modification requests.", False),
            ("Security Consequence", True),
            ("Direct financial exfiltration and data loss, often with immediate irreversible business impact.", False)
        ]),
        ("3. AUTHORISE", "PRIVILEGE & ACCESS ABUSE", EMERALD_ACCENT, EMERALD_BORDER, [
            ("Primary Targets", True),
            ("MFA push approval requests, privileged role grants, firewall exceptions, or internal software installations.", False),
            ("Operational Mechanism", True),
            ("MFA prompt fatigue, simulated emergency IT maintenance calls, or contractor access impersonation.", False),
            ("Security Consequence", True),
            ("Legitimate users grant the attacker validated system access, undermining access control matrices.", False)
        ])
    ]

    for i, (title, sub, color, border, items) in enumerate(pillars):
        c_x = Inches(0.8) + i * (col_w + gap)
        card = add_card(slide, c_x, col_y, col_w, col_h, bg_color=SURFACE_CARD, border_color=border, border_width=1.2)
        tfc = card.text_frame
        tfc.word_wrap = True
        tfc.margin_left = tfc.margin_right = Inches(0.22)
        tfc.margin_top = Inches(0.2)
        
        p_t = tfc.paragraphs[0]
        p_t.text = title
        p_t.font.name = FONT_HEADING
        p_t.font.size = Pt(13.5)
        p_t.font.bold = True
        p_t.font.color.rgb = color
        p_t.space_after = Pt(2)
        
        p_s = tfc.add_paragraph()
        p_s.text = sub
        p_s.font.name = FONT_HEADING
        p_s.font.size = Pt(9)
        p_s.font.bold = True
        p_s.font.color.rgb = TEXT_MUTED
        p_s.space_after = Pt(10)
        
        for heading, is_hd in items:
            p = tfc.add_paragraph()
            if is_hd:
                p.text = heading.upper()
                p.font.name = FONT_HEADING
                p.font.size = Pt(8.5)
                p.font.bold = True
                p.font.color.rgb = TEXT_WHITE
                p.space_after = Pt(2)
            else:
                p.text = heading
                p.font.name = FONT_BODY
                p.font.size = Pt(9.5)
                p.font.color.rgb = TEXT_BODY
                p.space_after = Pt(6)

    notes = (
        "SPEAKER NOTES — SLIDE 3: WHAT IS SOCIAL ENGINEERING?\n\n"
        "Turning to Slide 3, we define social engineering using precise academic and syllabus terminology.\n\n"
        "As covered in Unit 1 of our Cyber Security course, social engineering is the use of deception or psychological manipulation to influence individuals into revealing information or performing an action that benefits the attacker.\n\n"
        "To understand an attacker's strategy, we can categorize their end goals into three distinct operational pillars:\n"
        "First: REVEAL. The objective here is extraction—stealing passwords, OTPs, session cookies, or personal data. This provides initial access.\n"
        "Second: TRANSFER. Here, the target is coerced into moving assets—whether that is an urgent bank transfer, dispatching proprietary source code, or emailing sensitive student databases.\n"
        "Third: AUTHORISE. This is increasingly critical in modern enterprise environments. Instead of stealing a password, the attacker triggers an MFA push notification and tricks the user into tapping 'Approve', or tricks an administrator into granting elevated privileges.\n\n"
        "Notice that in all three cases, the system's technical security functioned exactly as designed. The failure occurred at the verification and decision boundary."
    )
    add_speaker_notes(slide, notes)


def build_slide_4(prs):
    """Slide 4: Why Does Social Engineering Work?"""
    slide = create_base_slide(prs)
    add_header(
        slide,
        "BEHAVIORAL CYBERSECURITY • COGNITIVE EXPLOITATION",
        "Why Does Social Engineering Work? Psychological Triggers",
        "How threat actors systematically weaponize predictable human heuristics under pressure"
    )
    add_footer(slide, 4)

    # 4 Triggers Grid (2x2)
    grid_w = Inches(5.72)
    grid_h = Inches(2.15)
    row1_y = Inches(1.75)
    row2_y = Inches(4.05)
    col1_x = Inches(0.8)
    col2_x = Inches(6.81)

    cards_data = [
        (col1_x, row1_y, "1. URGENCY", "Time Pressure & Heuristic Execution", AMBER_ACCENT, AMBER_BORDER,
         "“Your account will be permanently blocked in 15 minutes unless verified.”",
         "When subjected to severe artificial time constraints, the brain suppresses slow deliberate evaluation and activates immediate risk-avoidance reflexes. Attackers create false urgency to prevent the victim from seeking independent second opinions."),
         
        (col2_x, row1_y, "2. AUTHORITY", "Hierarchical Compliance & Trust in Status", CYAN_ACCENT, CYAN_BORDER,
         "“Direct instruction from the University Dean / Corporate CISO.”",
         "Organizations depend on hierarchical command structures. Attackers emulate high-status figures because employees are conditioned to execute executive directives promptly without creating friction or questioning seniority."),
         
        (col1_x, row2_y, "3. FEAR & LOSS AVERSION", "Threat Mitigation & Anxiety Exploitation", RED_ACCENT, RED_BORDER,
         "“Security Alert: Unauthorized login attempt detected from foreign IP.”",
         "Behavioral economics demonstrates that individuals react more vigorously to prospective loss than prospective gain. Attackers induce anxiety regarding financial loss or disciplinary action, compelling victims into urgent self-defense maneuvers that actually trigger the exploit."),
         
        (col2_x, row2_y, "4. CURIOSITY & HELPFULNESS", "Social Cooperation & Professional Curiosity", EMERALD_ACCENT, EMERALD_BORDER,
         "“Confidential: Updated Faculty Salary Structure” or “Colleague locked out of server.”",
         "Human social structures rely on mutual assistance and curiosity. Attackers masquerade as struggling peers requiring temporary assistance or dangle intriguing internal materials to tempt users into clicking malicious payloads.")
    ]

    for (x, y, title, subtitle, color, border, quote, desc) in cards_data:
        c = add_card(slide, x, y, grid_w, grid_h, bg_color=SURFACE_CARD, border_color=border, border_width=1.2)
        tf = c.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = Inches(0.24)
        tf.margin_top = Inches(0.16)
        
        p1 = tf.paragraphs[0]
        p1.text = title
        p1.font.name = FONT_HEADING
        p1.font.size = Pt(12)
        p1.font.bold = True
        p1.font.color.rgb = color
        
        p_sub = tf.add_paragraph()
        p_sub.text = subtitle.upper()
        p_sub.font.name = FONT_HEADING
        p_sub.font.size = Pt(8.5)
        p_sub.font.bold = True
        p_sub.font.color.rgb = TEXT_MUTED
        p_sub.space_after = Pt(4)
        
        p_q = tf.add_paragraph()
        p_q.text = quote
        p_q.font.name = FONT_BODY
        p_q.font.size = Pt(10)
        p_q.font.bold = True
        p_q.font.color.rgb = TEXT_WHITE
        p_q.space_after = Pt(4)
        
        p_d = tf.add_paragraph()
        p_d.text = desc
        p_d.font.name = FONT_BODY
        p_d.font.size = Pt(9.2)
        p_d.font.color.rgb = TEXT_BODY

    # Bottom Perspective Banner
    bot = add_card(
        slide, Inches(0.8), Inches(6.3), Inches(11.733), Inches(0.42),
        bg_color=RGBColor(15, 23, 42), border_color=CARD_BORDER
    )
    tfb = bot.text_frame
    tfb.word_wrap = True
    tfb.margin_left = tfb.margin_right = Inches(0.2)
    tfb.margin_top = Inches(0.08)
    pb = tfb.paragraphs[0]
    pb.text = "CRITICAL PERSPECTIVE: The attacker is not attempting to break a password; they are engineering an environment to influence a decision. Victims are not unintelligent—social engineering exploits normal human reactions under calculated pressure."
    pb.font.name = FONT_BODY
    pb.font.size = Pt(9.5)
    pb.font.color.rgb = CYAN_ACCENT

    notes = (
        "SPEAKER NOTES — SLIDE 4: WHY DOES SOCIAL ENGINEERING WORK?\n\n"
        "A common misconception in cybersecurity is that victims of social engineering are simply gullible or technologically illiterate. In modern behavioral cybersecurity, this claim is thoroughly debunked.\n\n"
        "Social engineering succeeds because it exploits deeply ingrained cognitive heuristics. When people are subjected to acute cognitive pressure, their ability to conduct thorough verification degrades.\n\n"
        "Look at the four primary triggers here:\n"
        "1. URGENCY: Imposing an arbitrary deadline like '15 minutes' creates a perceived crisis that bypasses standard protocol.\n"
        "2. AUTHORITY: In any institutional setting, whether academia or corporate enterprise, challenging a senior director's request carries perceived social friction.\n"
        "3. FEAR: Exploiting loss aversion. Tell someone their account has been breached, and their instinct is to protect themselves immediately.\n"
        "4. CURIOSITY AND HELPFULNESS: Exploiting the fact that human workplaces thrive on collaboration.\n\n"
        "The key takeaway: Attackers do not attack human intelligence; they exploit human psychology under artificial conditions of stress."
    )
    add_speaker_notes(slide, notes)


def build_slide_5(prs):
    """Slide 5: Forms of Social Engineering"""
    slide = create_base_slide(prs)
    add_header(
        slide,
        "ATTACK TAXONOMY • MULTI-CHANNEL VECTORS",
        "Forms of Social Engineering: Channel Diversity, Unified Goal",
        "How the attack medium fluctuates across protocols while the underlying psychological exploit remains constant"
    )
    add_footer(slide, 5)

    # 6 Vector Cards (2 rows of 3)
    card_w = Inches(3.72)
    card_h = Inches(2.2)
    row1_y = Inches(1.75)
    row2_y = Inches(4.1)
    gap_x = Inches(0.28)

    vectors = [
        ("PHISHING", "Broad Email Lures", CYAN_ACCENT, CYAN_BORDER,
         "Mass-distributed deceptive emails mimicking trusted brands, financial institutions, or university portals.",
         "Core Tactic: Directs victims to convincing clone websites designed to harvest credentials or install malware payloads en masse."),
         
        ("SPEAR PHISHING", "Targeted Reconnaissance", CYAN_ACCENT, CYAN_BORDER,
         "Highly customized, intelligence-driven email attacks directed at specific individuals or organizational departments.",
         "Core Tactic: Ingests public biographies, role duties, and colleague names to make the deceptive communication appear completely routine."),
         
        ("SMISHING (SMS)", "Mobile Channel Urgency", AMBER_ACCENT, AMBER_BORDER,
         "Deceptive short message communications exploiting high open rates and immediate mobile attention.",
         "Core Tactic: Feigns missed postal deliveries, urgent bank alerts, or two-factor reset requests, exploiting truncated mobile display links."),
         
        ("VISHING", "Voice & Telephonic Manipulation", AMBER_ACCENT, AMBER_BORDER,
         "Direct telephone-based social engineering impersonating technical support desks, bank fraud divisions, or law enforcement.",
         "Core Tactic: Leverages live conversational cadence, emotional tone, and real-time verbal coercion to demand OTPs or remote computer access."),
         
        ("PRETEXTING", "Fabricated Identities & Roles", PURPLE_ACCENT, PURPLE_BORDER,
         "Constructing an elaborate fictional backstory and legitimate operational scenario to elicit confidential organizational data.",
         "Core Tactic: The attacker assumes the identity of a third-party auditor, vendor, or contractor to justify accessing sensitive personnel files."),
         
        ("BUSINESS EMAIL COMPROMISE", "Executive & Wire Fraud", RED_ACCENT, RED_BORDER,
         "Sophisticated impersonation or account compromise targeting executives and finance officers managing capital transfers.",
         "Core Tactic: Monitors commercial email threads to inject fraudulent wire routing numbers during high-value supplier transactions.")
    ]

    for i, (title, sub, color, border, desc1, desc2) in enumerate(vectors):
        col_idx = i % 3
        row_y = row1_y if i < 3 else row2_y
        c_x = Inches(0.8) + col_idx * (card_w + gap_x)
        
        c = add_card(slide, c_x, row_y, card_w, card_h, bg_color=SURFACE_CARD, border_color=border, border_width=1.2)
        tf = c.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = Inches(0.22)
        tf.margin_top = Inches(0.16)
        
        p1 = tf.paragraphs[0]
        p1.text = title
        p1.font.name = FONT_HEADING
        p1.font.size = Pt(12)
        p1.font.bold = True
        p1.font.color.rgb = color
        
        p_sub = tf.add_paragraph()
        p_sub.text = sub.upper()
        p_sub.font.name = FONT_HEADING
        p_sub.font.size = Pt(8.5)
        p_sub.font.bold = True
        p_sub.font.color.rgb = TEXT_MUTED
        p_sub.space_after = Pt(4)
        
        p_d1 = tf.add_paragraph()
        p_d1.text = desc1
        p_d1.font.name = FONT_BODY
        p_d1.font.size = Pt(9.5)
        p_d1.font.color.rgb = TEXT_WHITE
        p_d1.space_after = Pt(3)
        
        p_d2 = tf.add_paragraph()
        p_d2.text = desc2
        p_d2.font.name = FONT_BODY
        p_d2.font.size = Pt(8.8)
        p_d2.font.color.rgb = TEXT_MUTED

    # Bottom Unifying Principle Card
    bot = add_card(
        slide, Inches(0.8), Inches(6.38), Inches(11.733), Inches(0.36),
        bg_color=RGBColor(15, 23, 42), border_color=CARD_BORDER
    )
    tfb = bot.text_frame
    tfb.word_wrap = True
    tfb.margin_left = tfb.margin_right = Inches(0.2)
    tfb.margin_top = Inches(0.06)
    pb = tfb.paragraphs[0]
    pb.text = "THE UNIFYING PRINCIPLE: The communication vector may change—from an email link to an SMS alert to a live telephone call—but the underlying objective remains constant: exploiting unverified trust."
    pb.font.name = FONT_BODY
    pb.font.size = Pt(9.2)
    pb.font.bold = True
    pb.font.color.rgb = CYAN_ACCENT

    notes = (
        "SPEAKER NOTES — SLIDE 5: FORMS OF SOCIAL ENGINEERING\n\n"
        "In Slide 5, we examine the major attack vectors covered in our Cyber Security syllabus.\n\n"
        "It is vital not to view these as separate, unrelated phenomena. Rather, they are different delivery pipes delivering the exact same psychological exploit:\n\n"
        "1. Standard Phishing casts a wide net via bulk email.\n"
        "2. Spear Phishing narrows the focus, using specific personal intelligence to attack high-value targets.\n"
        "3. Smishing moves to SMS, exploiting the intimacy and high open rates of mobile devices.\n"
        "4. Vishing uses voice calls, where conversational pacing and emotional warmth disarm suspicion.\n"
        "5. Pretexting builds an elaborate false role or scenario, such as an external compliance auditor.\n"
        "6. Business Email Compromise, or BEC, represents the highest financial losses globally, where attackers impersonate CEOs or billing vendors to redirect wire payments.\n\n"
        "Remember: The channel changes; the psychological deception remains invariant."
    )
    add_speaker_notes(slide, notes)


def build_slide_6(prs):
    """Slide 6: What Changes When AI Enters the Picture?"""
    slide = create_base_slide(prs)
    add_header(
        slide,
        "TECHNOLOGICAL INFLECTION • THE GENERATIVE AI PARADIGM",
        "What Changes When AI Enters the Picture?",
        "Evaluating the transformation from manual social engineering to automated, context-aware deception"
    )
    add_footer(slide, 6)

    # 2 Big Comparison Columns
    col_w = Inches(5.72)
    col_h = Inches(4.35)
    col_y = Inches(1.75)
    c1_x = Inches(0.8)
    c2_x = Inches(6.81)

    # Left: Traditional
    c_trad = add_card(slide, c1_x, col_y, col_w, col_h, bg_color=SURFACE_CARD, border_color=CARD_BORDER)
    tft = c_trad.text_frame
    tft.word_wrap = True
    tft.margin_left = tft.margin_right = Inches(0.28)
    tft.margin_top = Inches(0.2)
    
    pt_h = tft.paragraphs[0]
    pt_h.text = "TRADITIONAL SOCIAL ENGINEERING"
    pt_h.font.name = FONT_HEADING
    pt_h.font.size = Pt(13)
    pt_h.font.bold = True
    pt_h.font.color.rgb = TEXT_MUTED
    
    pt_sub = tft.add_paragraph()
    pt_sub.text = "MANUAL, FRAGMENTED & RESOURCE-CONSTRAINED"
    pt_sub.font.name = FONT_HEADING
    pt_sub.font.size = Pt(8.5)
    pt_sub.font.bold = True
    pt_sub.font.color.rgb = TEXT_DIM
    pt_sub.space_after = Pt(12)

    trad_points = [
        ("Generic, Templated Phrasing", "Mass-distributed templates with static lures that are easily recognized by modern email security heuristics and vigilant users."),
        ("Detectable Linguistic Flaws", "Attackers frequently made spelling mistakes, awkward grammatical choices, and unnatural idioms when targeting foreign languages."),
        ("High Manual Research Costs", "Crafting a convincing spear-phishing attack required hours of manual Open Source Intelligence (OSINT) gathering per target."),
        ("Rigid Scale vs. Quality Trade-off", "Threat actors were forced to choose between sending high-volume generic spam or low-volume personalized spear-phishing.")
    ]
    for title, desc in trad_points:
        p = tft.add_paragraph()
        run1 = p.add_run()
        run1.text = "• " + title + ": "
        run1.font.name = FONT_HEADING
        run1.font.size = Pt(10)
        run1.font.bold = True
        run1.font.color.rgb = TEXT_WHITE
        run2 = p.add_run()
        run2.text = desc
        run2.font.name = FONT_BODY
        run2.font.size = Pt(9.5)
        run2.font.color.rgb = TEXT_MUTED
        p.space_after = Pt(8)

    # Right: AI-Assisted
    c_ai = add_card(slide, c2_x, col_y, col_w, col_h, bg_color=RGBColor(15, 23, 42), border_color=CYAN_BORDER, border_width=1.5)
    tfa = c_ai.text_frame
    tfa.word_wrap = True
    tfa.margin_left = tfa.margin_right = Inches(0.28)
    tfa.margin_top = Inches(0.2)
    
    pa_h = tfa.paragraphs[0]
    pa_h.text = "AI-ASSISTED CAMPAIGNS"
    pa_h.font.name = FONT_HEADING
    pa_h.font.size = Pt(13)
    pa_h.font.bold = True
    pa_h.font.color.rgb = CYAN_ACCENT
    
    pa_sub = tfa.add_paragraph()
    pa_sub.text = "AUTOMATED, CONTEXTUAL & RAPIDLY SCALABLE"
    pa_sub.font.name = FONT_HEADING
    pa_sub.font.size = Pt(8.5)
    pa_sub.font.bold = True
    pa_sub.font.color.rgb = CYAN_PILL_TEXT
    pa_sub.space_after = Pt(12)

    ai_points = [
        ("Flawless Natural Language Generation", "Large Language Models produce grammatically flawless, idiomatically natural prose matching specific corporate and academic tones."),
        ("Automated Contextual OSINT Ingestion", "AI scripts scrape LinkedIn, company publications, and public bios, instantly synthesizing highly tailored pretexts for individual targets."),
        ("Polyglot & Tone Adaptation", "Generates fluent communications in dozens of languages, removing regional spelling flags and matching executive communication styles."),
        ("Hyper-Personalization at Scale", "Eliminates the trade-off between scale and quality: thousands of bespoke, highly customized lures can be generated simultaneously.")
    ]
    for title, desc in ai_points:
        p = tfa.add_paragraph()
        run1 = p.add_run()
        run1.text = "• " + title + ": "
        run1.font.name = FONT_HEADING
        run1.font.size = Pt(10)
        run1.font.bold = True
        run1.font.color.rgb = CYAN_ACCENT
        run2 = p.add_run()
        run2.text = desc
        run2.font.name = FONT_BODY
        run2.font.size = Pt(9.5)
        run2.font.color.rgb = TEXT_BODY
        p.space_after = Pt(8)

    # Bottom Academic Caution Banner (ENISA Citation)
    bot = add_card(
        slide, Inches(0.8), Inches(6.25), Inches(11.733), Inches(0.48),
        bg_color=RGBColor(11, 17, 32), border_color=AMBER_BORDER, border_width=1
    )
    tfb = bot.text_frame
    tfb.word_wrap = True
    tfb.margin_left = tfb.margin_right = Inches(0.2)
    tfb.margin_top = Inches(0.08)
    pb = tfb.paragraphs[0]
    pb.text = "TECHNICAL NUANCE (ENISA THREAT LANDSCAPE): AI does not make attacks automatically successful or infallible. Rather, AI functions as a force multiplier—drastically reducing the marginal cost, time, and linguistic effort required to produce and distribute convincing deception."
    pb.font.name = FONT_BODY
    pb.font.size = Pt(9.2)
    pb.font.color.rgb = AMBER_ACCENT

    notes = (
        "SPEAKER NOTES — SLIDE 6: WHAT CHANGES WHEN AI ENTERS THE PICTURE?\n\n"
        "Turning to Slide 6, we address the core technological transition: What happens when generative AI enters social engineering?\n\n"
        "Traditionally, cybersecurity awareness relied heavily on spotting obvious linguistic red flags—spelling mistakes, broken grammar, or awkward phrasing. Furthermore, launching a targeted spear-phishing attack against a specific executive required significant manual research.\n\n"
        "Generative AI fundamentally changes this equation by eliminating the historical trade-off between volume and quality. With Large Language Models, an attacker can ingest a target's LinkedIn profile, recent company press releases, and departmental newsletters, and output a bespoke, idiomatically flawless lure in seconds.\n\n"
        "However, as technical professionals, we must avoid sensationalism. As noted by the European Union Agency for Cybersecurity (ENISA), AI does not magically make attacks invincible or infallible. Rather, it operates as a capability multiplier: it drastically lowers the marginal cost, time, and technical skill needed to produce highly convincing deceptive campaigns at scale."
    )
    add_speaker_notes(slide, notes)


def build_slide_7(prs):
    """Slide 7: Deepfakes and Digital Impersonation"""
    slide = create_base_slide(prs)
    add_header(
        slide,
        "SYNTHETIC MEDIA • SENSORY EXPLOITATION",
        "Deepfakes: When Digital Identity Can Be Synthesised",
        "How multimodal synthetic text, neural voice cloning, and synthetic video undermine visual and vocal verification"
    )
    add_footer(slide, 7)

    # 3 Category Columns
    col_w = Inches(3.72)
    col_h = Inches(4.35)
    col_y = Inches(1.75)
    gap_x = Inches(0.28)

    modalities = [
        ("SYNTHETIC TEXT", "LLM Stylometry & Persona Emulation", CYAN_ACCENT, CYAN_BORDER, [
            ("Core Technology", True),
            ("Large Language Models fine-tuned on writing samples, email corpora, and conversational archives.", False),
            ("Impersonation Capability", True),
            ("Emulates individual stylistic nuances: sign-offs, typical vocabulary, sentence brevity, and corporate idioms.", False),
            ("Attack Application", True),
            ("Highly authentic internal memos, spoofed executive directives, and convincing email replies in active threads.", False),
            ("Defensive Challenge", True),
            ("Static heuristic filters and human readers cannot easily flag anomalies based on writing style alone.", False)
        ]),
        ("SYNTHETIC VOICE", "Neural Audio & Timbre Cloning", AMBER_ACCENT, AMBER_BORDER, [
            ("Core Technology", True),
            ("Deep neural acoustic models that clone vocal timbre, pitch, inflection, and cadence from seconds of audio.", False),
            ("Impersonation Capability", True),
            ("Replicates a recognized manager's or family member's voice over standard telephone bandwidth.", False),
            ("Attack Application", True),
            ("Urgent voice memos, simulated executive phone calls directing transfers, and deceptive vishing operations.", False),
            ("Defensive Challenge", True),
            ("Acoustic familiarity triggers deep subconscious trust, directly disarming employee suspicion.", False)
        ]),
        ("SYNTHETIC VIDEO", "Generative Face & Motion Synthesis", PURPLE_ACCENT, PURPLE_BORDER, [
            ("Core Technology", True),
            ("Generative Adversarial Networks (GANs) and diffusion frameworks enabling real-time face and gesture swapping.", False),
            ("Impersonation Capability", True),
            ("Simulates realistic facial movements, eye contact, and lip synchronization to match synthetic speech.", False),
            ("Attack Application", True),
            ("Fraudulent virtual video meetings, simulated executive video broadcasts, and deceptive remote employee onboarding.", False),
            ("Defensive Challenge", True),
            ("Video presence has historically been viewed as the ultimate proof of authenticity, making deception potent.", False)
        ])
    ]

    for i, (mtitle, msub, mcolor, mborder, items) in enumerate(modalities):
        c_x = Inches(0.8) + i * (col_w + gap_x)
        c = add_card(slide, c_x, col_y, col_w, col_h, bg_color=SURFACE_CARD, border_color=mborder, border_width=1.2)
        tf = c.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = Inches(0.22)
        tf.margin_top = Inches(0.18)
        
        p1 = tf.paragraphs[0]
        p1.text = mtitle
        p1.font.name = FONT_HEADING
        p1.font.size = Pt(13)
        p1.font.bold = True
        p1.font.color.rgb = mcolor
        
        p2 = tf.add_paragraph()
        p2.text = msub.upper()
        p2.font.name = FONT_HEADING
        p2.font.size = Pt(8.5)
        p2.font.bold = True
        p2.font.color.rgb = TEXT_MUTED
        p2.space_after = Pt(10)
        
        for text, is_label in items:
            p = tf.add_paragraph()
            if is_label:
                p.text = text.upper()
                p.font.name = FONT_HEADING
                p.font.size = Pt(8.5)
                p.font.bold = True
                p.font.color.rgb = TEXT_WHITE
                p.space_after = Pt(2)
            else:
                p.text = text
                p.font.name = FONT_BODY
                p.font.size = Pt(9.2)
                p.font.color.rgb = TEXT_BODY
                p.space_after = Pt(6)

    # Bottom Core Security Lesson Card
    bot = add_card(
        slide, Inches(0.8), Inches(6.25), Inches(11.733), Inches(0.48),
        bg_color=RGBColor(15, 23, 42), border_color=CYAN_BORDER, border_width=1.2
    )
    tfb = bot.text_frame
    tfb.word_wrap = True
    tfb.margin_left = tfb.margin_right = Inches(0.2)
    tfb.margin_top = Inches(0.08)
    pb = tfb.paragraphs[0]
    pb.text = "CORE SECURITY LESSON: Sensory evidence is no longer proof of identity. In an age of synthetic media, appearance, voice, and video can no longer substitute for independent cryptographic and procedural verification."
    pb.font.name = FONT_BODY
    pb.font.size = Pt(9.5)
    pb.font.bold = True
    pb.font.color.rgb = CYAN_ACCENT

    notes = (
        "SPEAKER NOTES — SLIDE 7: DEEPFAKES AND DIGITAL IMPERSONATION\n\n"
        "Slide 7 introduces deepfakes and multimodal synthetic media.\n\n"
        "Historically, security protocols operated on an unspoken sensory rule: 'If I hear my manager's voice on the telephone, or see them on a video call, I can trust the communication.'\n\n"
        "Synthetic media directly breaks that assumption across three modalities:\n"
        "1. SYNTHETIC TEXT: Language models emulate stylometry—matching sentence length, common punctuation habits, and specific departmental phrases.\n"
        "2. SYNTHETIC VOICE: Using neural voice cloning, an attacker can ingest a 30-second recording of a professor or corporate director from YouTube or a podcast and produce a cloned voice message that is acoustically indistinguishable over phone frequencies.\n"
        "3. SYNTHETIC VIDEO: Using real-time facial re-enactment models to attend video conferences or deliver fraudulent announcements.\n\n"
        "The critical security principle to remember here: Sensory familiarity can no longer be equated with identity. Looking or sounding like someone is no longer cryptographic proof of who they are."
    )
    add_speaker_notes(slide, notes)


def build_slide_8(prs):
    """Slide 8: Case Scenario: The Fake Manager"""
    slide = create_base_slide(prs)
    add_header(
        slide,
        "HYPOTHETICAL CASE STUDY • OPERATIONAL ANALYSIS",
        "Case Scenario: The Urgent Voice Directive (The Fake Manager)",
        "Deconstructing how authority, urgency, synthetic voice, and psychological isolation converge in practice"
    )
    add_footer(slide, 8)

    # Top Educational Scenario Card (Audio Lure Simulation)
    scen_card = add_card(
        slide, Inches(0.8), Inches(1.75), Inches(11.733), Inches(1.9),
        bg_color=RGBColor(15, 23, 42), border_color=AMBER_BORDER, border_width=1.5
    )
    tfs = scen_card.text_frame
    tfs.word_wrap = True
    tfs.margin_left = tfs.margin_right = Inches(0.3)
    tfs.margin_top = Inches(0.18)
    
    ps_t = tfs.paragraphs[0]
    ps_t.text = "HYPOTHETICAL SCENARIO: VOICE NOTE DELIVERED VIA MOBILE COLLABORATION PLATFORM"
    ps_t.font.name = FONT_HEADING
    ps_t.font.size = Pt(9.5)
    ps_t.font.bold = True
    ps_t.font.color.rgb = AMBER_ACCENT
    ps_t.space_after = Pt(4)
    
    ps_c = tfs.add_paragraph()
    r = ps_c.add_run()
    r.text = "Context: An accounts officer in a university department receives an urgent voice note appearing to originate directly from their department head:\n"
    r.font.name = FONT_BODY
    r.font.size = Pt(10)
    r.font.color.rgb = TEXT_MUTED
    
    ps_q = tfs.add_paragraph()
    rq = ps_q.add_run()
    rq.text = "“Daksh, I’m currently stepping into a confidential academic review meeting. We need to clear an advance vendor payment of ₹75,000 for our laboratory software licenses immediately to avoid account suspension. I’ve sent the payment link via SMS. I cannot take incoming calls right now—please authorize this right away.”"
    rq.font.name = FONT_BODY
    rq.font.size = Pt(11.5)
    rq.font.bold = True
    rq.font.color.rgb = TEXT_WHITE

    # 4 Levers Grid Below
    box_w = Inches(2.7)
    box_h = Inches(1.9)
    box_y = Inches(3.8)
    gap = Inches(0.31)

    levers = [
        ("AUTHORITY", CYAN_ACCENT, CYAN_BORDER,
         "Emulates Senior Leadership",
         "The voice note purports to originate directly from a department head, creating immediate institutional compliance pressure."),
         
        ("URGENCY", RED_ACCENT, RED_BORDER,
         "Manufactured Crisis",
         "The threat of immediate service suspension and the demand for instant execution denies the employee time for reflection."),
         
        ("SYNTHETIC TRUST", AMBER_ACCENT, AMBER_BORDER,
         "Cloned Acoustic Profile",
         "The voice note carries the exact acoustic timbre and cadence of the familiar manager, bypassing initial skepticism."),
         
        ("ISOLATION", PURPLE_ACCENT, PURPLE_BORDER,
         "Verification Pre-emption",
         "The phrase 'I cannot take calls right now' deliberately blocks the employee from attempting normal verbal confirmation.")
    ]

    for i, (ltitle, lcolor, lborder, lsub, ldesc) in enumerate(levers):
        b_x = Inches(0.8) + i * (box_w + gap)
        b = add_card(slide, b_x, box_y, box_w, box_h, bg_color=SURFACE_CARD, border_color=lborder, border_width=1.2)
        tf = b.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = Inches(0.2)
        tf.margin_top = Inches(0.16)
        
        p1 = tf.paragraphs[0]
        p1.text = ltitle
        p1.font.name = FONT_HEADING
        p1.font.size = Pt(12)
        p1.font.bold = True
        p1.font.color.rgb = lcolor
        
        p2 = tf.add_paragraph()
        p2.text = lsub.upper()
        p2.font.name = FONT_HEADING
        p2.font.size = Pt(8.5)
        p2.font.bold = True
        p2.font.color.rgb = TEXT_MUTED
        p2.space_after = Pt(6)
        
        p3 = tf.add_paragraph()
        p3.text = ldesc
        p3.font.name = FONT_BODY
        p3.font.size = Pt(9.2)
        p3.font.color.rgb = TEXT_BODY

    # Bottom Decision & Resolution Card
    bot = add_card(
        slide, Inches(0.8), Inches(5.85), Inches(11.733), Inches(0.82),
        bg_color=RGBColor(15, 23, 42), border_color=EMERALD_BORDER, border_width=1.2
    )
    tfb = bot.text_frame
    tfb.word_wrap = True
    tfb.margin_left = tfb.margin_right = Inches(0.25)
    tfb.margin_top = Inches(0.12)
    
    pb1 = tfb.paragraphs[0]
    r_q = pb1.add_run()
    r_q.text = "THE CRITICAL QUESTION: Would the employee verify the request? "
    r_q.font.name = FONT_HEADING
    r_q.font.size = Pt(10.5)
    r_q.font.bold = True
    r_q.font.color.rgb = TEXT_WHITE
    
    pb2 = tfb.add_paragraph()
    r_ans = pb2.add_run()
    r_ans.text = "CORRECT DEFENSIVE ACTION: Verify through an independent, trusted channel. Under strict security protocol, high-value transfers or credential inputs must never be authorized based solely on an unverified audio message, regardless of apparent urgency or authority."
    r_ans.font.name = FONT_BODY
    r_ans.font.size = Pt(10)
    r_ans.font.color.rgb = EMERALD_ACCENT

    notes = (
        "SPEAKER NOTES — SLIDE 8: CASE SCENARIO (THE FAKE MANAGER)\n\n"
        "To ground these concepts in realistic operational reality, Slide 8 analyzes a hypothetical educational case scenario: 'The Fake Manager.'\n\n"
        "Let us examine how an attacker structures this attack:\n"
        "1. They leverage Authority: The directive purports to come from an institutional head.\n"
        "2. They inject Urgency: If ₹75,000 isn't transferred immediately, critical software licenses will supposedly be suspended.\n"
        "3. They deploy Synthetic Trust: Using a neural voice clone created from public lectures, the voice sounds identical to the manager.\n"
        "4. And most importantly: They manufacture Isolation. By stating 'I cannot take incoming calls right now', the attacker attempts to preemptively disarm the employee's natural verification instinct.\n\n"
        "This scenario highlights our central thesis: Under emotional duress, human instinct is to avoid conflict and execute the transfer. The correct operational protocol, however, requires an Out-of-Band verification—contacting the manager or finance office via established, independent internal procedures before moving assets."
    )
    add_speaker_notes(slide, notes)


def build_slide_9(prs):
    """Slide 9: The Social-Engineering Attack Chain"""
    slide = create_base_slide(prs)
    add_header(
        slide,
        "ATTACK LIFECYCLE • DEFENSE-IN-DEPTH",
        "The Social-Engineering Attack Chain: Multi-Stage Interventions",
        "Tracing the attack progression and identifying where technical and human controls can interrupt the lifecycle"
    )
    add_footer(slide, 9)

    # 6 Attack Stages in a Horizontal Flow
    stage_w = Inches(1.8)
    stage_h = Inches(4.35)
    stage_y = Inches(1.75)
    gap = Inches(0.18)

    stages = [
        ("STAGE 1", "RECONNAISSANCE", CYAN_ACCENT, CYAN_BORDER, [
            ("Attacker Focus", True),
            ("Gathers Open Source Intelligence (OSINT) from LinkedIn, social media, departmental directories, and publications.", False),
            ("Defensive Gate", True),
            ("Privacy Hygiene & OPSEC", True),
            ("Minimizing public credential leaks and sensitive institutional org-chart disclosures.", False)
        ]),
        ("STAGE 2", "WEAPONISATION", CYAN_ACCENT, CYAN_BORDER, [
            ("Attacker Focus", True),
            ("Generates contextual lures, synthetic voice notes, lookalike domains, or spoofed email addresses using AI.", False),
            ("Defensive Gate", True),
            ("DMARC & Gateway Filters", True),
            ("Automated SPF, DKIM, and advanced heuristic email filtering to block malicious origins.", False)
        ]),
        ("STAGE 3", "DELIVERY", AMBER_ACCENT, AMBER_BORDER, [
            ("Attacker Focus", True),
            ("Transmits deceptive communication via corporate email, SMS, instant messaging, or phone call.", False),
            ("Defensive Gate", True),
            ("Endpoint & Web Shields", True),
            ("URL sandboxing, browser-level reputation alerts, and external communication warning banners.", False)
        ]),
        ("STAGE 4", "COGNITIVE EXPLOIT", RED_ACCENT, RED_BORDER, [
            ("Attacker Focus", True),
            ("Engages human emotion: imposes artificial urgency, fear, authority, or curiosity to compel fast action.", False),
            ("Defensive Gate", True),
            ("Human Awareness Pause", True),
            ("Security awareness training: recognizing psychological pressure triggers before acting.", False)
        ]),
        ("STAGE 5", "VICTIM ACTION", AMBER_ACCENT, AMBER_BORDER, [
            ("Attacker Focus", True),
            ("Victim clicks link, enters credentials on clone portal, approves MFA push prompt, or executes transfer.", False),
            ("Defensive Gate", True),
            ("Phishing-Resistant MFA", True),
            ("FIDO2/WebAuthn hardware keys render harvested passwords completely useless to the attacker.", False)
        ]),
        ("STAGE 6", "COMPROMISE", PURPLE_ACCENT, PURPLE_BORDER, [
            ("Attacker Focus", True),
            ("Adversary exfiltrates confidential data, redirects organizational capital, or moves laterally inside systems.", False),
            ("Defensive Gate", True),
            ("Least Privilege & SIEM", True),
            ("Zero trust role boundaries, transaction anomaly detection, and immediate incident containment.", False)
        ])
    ]

    for i, (snum, sname, scolor, sborder, items) in enumerate(stages):
        s_x = Inches(0.8) + i * (stage_w + gap)
        sc = add_card(slide, s_x, stage_y, stage_w, stage_h, bg_color=SURFACE_CARD, border_color=sborder, border_width=1.2)
        tf = sc.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = Inches(0.14)
        tf.margin_top = Inches(0.16)
        
        p1 = tf.paragraphs[0]
        p1.text = snum
        p1.font.name = FONT_HEADING
        p1.font.size = Pt(9)
        p1.font.bold = True
        p1.font.color.rgb = scolor
        
        p2 = tf.add_paragraph()
        p2.text = sname
        p2.font.name = FONT_HEADING
        p2.font.size = Pt(10.5)
        p2.font.bold = True
        p2.font.color.rgb = TEXT_WHITE
        p2.space_after = Pt(8)
        
        for heading, is_hd, *is_accent in items:
            p = tf.add_paragraph()
            if is_hd:
                p.text = heading.upper()
                p.font.name = FONT_HEADING
                p.font.size = Pt(8)
                p.font.bold = True
                p.font.color.rgb = CYAN_ACCENT if is_accent and is_accent[0] else TEXT_MUTED
                p.space_after = Pt(1)
            else:
                p.text = heading
                p.font.name = FONT_BODY
                p.font.size = Pt(8.8)
                p.font.color.rgb = TEXT_BODY
                p.space_after = Pt(5)

    # Bottom Core Defense Principle Banner
    bot = add_card(
        slide, Inches(0.8), Inches(6.25), Inches(11.733), Inches(0.48),
        bg_color=RGBColor(15, 23, 42), border_color=CARD_BORDER
    )
    tfb = bot.text_frame
    tfb.word_wrap = True
    tfb.margin_left = tfb.margin_right = Inches(0.2)
    tfb.margin_top = Inches(0.08)
    pb = tfb.paragraphs[0]
    pb.text = "DEFENSE-IN-DEPTH PRINCIPLE: An attack requires an unbroken chain of consecutive successes. Security controls are positioned at multiple intervention points—breaking the chain at any single stage prevents total compromise."
    pb.font.name = FONT_BODY
    pb.font.size = Pt(9.5)
    pb.font.bold = True
    pb.font.color.rgb = CYAN_ACCENT

    notes = (
        "SPEAKER NOTES — SLIDE 9: THE SOCIAL-ENGINEERING ATTACK CHAIN\n\n"
        "Slide 9 illustrates the attack chain adapted for social engineering, mapping directly to concepts of Defense-in-Depth from our syllabus.\n\n"
        "An attack is never an isolated lightning strike; it is an orchestrated, sequential lifecycle:\n"
        "Stage 1 is Reconnaissance: The attacker gathers intelligence.\n"
        "Stage 2 is Weaponisation: Developing the lure and cloning the synthetic identity.\n"
        "Stage 3 is Delivery: Transmitting the communication.\n"
        "Stage 4 is Cognitive Exploitation: The psychological trap.\n"
        "Stage 5 is Victim Action: The target executing the request.\n"
        "Stage 6 is Compromise: Lateral movement or exfiltration.\n\n"
        "Notice the crucial defensive takeaway at the bottom: An attacker must succeed across every single link in this chain. Conversely, a resilient organization only needs to succeed in interrupting the attack at any one point—whether through automated DMARC filtering at delivery, an alert employee at the cognitive stage, or FIDO2 hardware keys at the action stage."
    )
    add_speaker_notes(slide, notes)


def build_slide_10(prs):
    """Slide 10: Technical Security vs. Human Controls"""
    slide = create_base_slide(prs)
    add_header(
        slide,
        "SECURITY ARCHITECTURE • COMPLEMENTARY CONTROLS",
        "Technical Security vs. Human Controls: A Complementary Ecosystem",
        "Why technological safeguards and human behavioral verification must operate as an integrated defensive system"
    )
    add_footer(slide, 10)

    # 2 Big Structured Columns
    col_w = Inches(5.72)
    col_h = Inches(4.35)
    col_y = Inches(1.75)
    c1_x = Inches(0.8)
    c2_x = Inches(6.81)

    # Column 1: Technical Controls
    c_tech = add_card(slide, c1_x, col_y, col_w, col_h, bg_color=SURFACE_CARD, border_color=CYAN_BORDER, border_width=1.2)
    tft = c_tech.text_frame
    tft.word_wrap = True
    tft.margin_left = tft.margin_right = Inches(0.28)
    tft.margin_top = Inches(0.2)
    
    pt_h = tft.paragraphs[0]
    pt_h.text = "TECHNICAL SAFEGUARDS"
    pt_h.font.name = FONT_HEADING
    pt_h.font.size = Pt(13)
    pt_h.font.bold = True
    pt_h.font.color.rgb = CYAN_ACCENT
    
    pt_sub = tft.add_paragraph()
    pt_sub.text = "INFRASTRUCTURE, PROTOCOLS & CRYPTOGRAPHY"
    pt_sub.font.name = FONT_HEADING
    pt_sub.font.size = Pt(8.5)
    pt_sub.font.bold = True
    pt_sub.font.color.rgb = CYAN_PILL_TEXT
    pt_sub.space_after = Pt(10)

    tech_items = [
        ("Phishing-Resistant MFA (FIDO2)", "Cryptographically binds authentication to verified domain origins via WebAuthn, defeating credential harvesting and relay attacks."),
        ("Email Authentication (DMARC / SPF / DKIM)", "Validates sender domain authenticity, preventing direct domain spoofing of executive and departmental addresses."),
        ("Endpoint Protection & Automated Sandboxing", "Detonates untrusted attachments, analyzes dynamic web links, and flags known malware payloads before reaching inboxes."),
        ("Behavioral Telemetry & SIEM Monitoring", "Detects anomalous access patterns: sudden out-of-region logins, irregular data egress, and uncharacteristic administrative actions.")
    ]
    for title, desc in tech_items:
        p = tft.add_paragraph()
        run1 = p.add_run()
        run1.text = "• " + title + ": "
        run1.font.name = FONT_HEADING
        run1.font.size = Pt(9.8)
        run1.font.bold = True
        run1.font.color.rgb = TEXT_WHITE
        run2 = p.add_run()
        run2.text = desc
        run2.font.name = FONT_BODY
        run2.font.size = Pt(9.2)
        run2.font.color.rgb = TEXT_MUTED
        p.space_after = Pt(7)

    # Column 2: Human Controls
    c_hum = add_card(slide, c2_x, col_y, col_w, col_h, bg_color=SURFACE_CARD, border_color=EMERALD_BORDER, border_width=1.2)
    tfh = c_hum.text_frame
    tfh.word_wrap = True
    tfh.margin_left = tfh.margin_right = Inches(0.28)
    tfh.margin_top = Inches(0.2)
    
    ph_h = tfh.paragraphs[0]
    ph_h.text = "HUMAN & PROCEDURAL CONTROLS"
    ph_h.font.name = FONT_HEADING
    ph_h.font.size = Pt(13)
    ph_h.font.bold = True
    ph_h.font.color.rgb = EMERALD_ACCENT
    
    ph_sub = tfh.add_paragraph()
    ph_sub.text = "VERIFICATION, COGNITION & ORGANIZATIONAL CULTURE"
    ph_sub.font.name = FONT_HEADING
    ph_sub.font.size = Pt(8.5)
    ph_sub.font.bold = True
    ph_sub.font.color.rgb = EMERALD_PILL_TEXT
    ph_sub.space_after = Pt(10)

    hum_items = [
        ("Independent Out-of-Band Verification", "Mandating that high-consequence requests (financial transfers, credential resets) must be confirmed via a secondary trusted channel."),
        ("Cognitive Pause & Skepticism", "Training personnel to recognize psychological urgency, authority pressure, and manufactured fear as indicators of deception."),
        ("Separation of Duties (Dual Authorization)", "Ensuring that no single employee has the sole authority to execute irreversible capital transfers or sensitive privilege escalations."),
        ("Blameless Incident Reporting Culture", "Empowering users to flag suspicious interactions rapidly without fear of embarrassment or disciplinary retribution.")
    ]
    for title, desc in hum_items:
        p = tfh.add_paragraph()
        run1 = p.add_run()
        run1.text = "• " + title + ": "
        run1.font.name = FONT_HEADING
        run1.font.size = Pt(9.8)
        run1.font.bold = True
        run1.font.color.rgb = TEXT_WHITE
        run2 = p.add_run()
        run2.text = desc
        run2.font.name = FONT_BODY
        run2.font.size = Pt(9.2)
        run2.font.color.rgb = TEXT_MUTED
        p.space_after = Pt(7)

    # Bottom Integrated Synthesis Banner
    bot = add_card(
        slide, Inches(0.8), Inches(6.25), Inches(11.733), Inches(0.48),
        bg_color=RGBColor(15, 23, 42), border_color=CARD_BORDER
    )
    tfb = bot.text_frame
    tfb.word_wrap = True
    tfb.margin_left = tfb.margin_right = Inches(0.2)
    tfb.margin_top = Inches(0.08)
    pb = tfb.paragraphs[0]
    pb.text = "CORE SYNTHESIS: Technical controls defend the digital infrastructure; human awareness interprets the operational context. Cybersecurity is strongest when technical tools and human procedures are designed to reinforce one another."
    pb.font.name = FONT_BODY
    pb.font.size = Pt(9.5)
    pb.font.bold = True
    pb.font.color.rgb = CYAN_ACCENT

    notes = (
        "SPEAKER NOTES — SLIDE 10: TECHNICAL SECURITY VS. HUMAN CONTROLS\n\n"
        "Slide 10 presents a core philosophical debate in modern cybersecurity: Technical controls versus Human controls.\n\n"
        "It is fundamentally incorrect to claim that technology is obsolete, just as it is incorrect to claim that humans are 'the weakest link.' Rather, they address completely different facets of security risk.\n\n"
        "Technical controls defend the infrastructure: FIDO2 hardware tokens mathematically defeat credential interception; DMARC prevents domain spoofing; sandboxes catch known malware.\n\n"
        "However, technical controls cannot read human intent. If a legitimate finance officer, holding valid credentials, is socially engineered into executing a wire transfer, the firewall sees a perfectly legitimate authenticated transaction.\n\n"
        "That is where Human and Procedural controls step in: Out-of-band verification, dual-authorization policies, and a supportive security culture. Cybersecurity resilience is achieved only when technical tools and human workflows reinforce each other."
    )
    add_speaker_notes(slide, notes)


def build_slide_11(prs):
    """Slide 11: How to Defend Against Social Engineering"""
    slide = create_base_slide(prs)
    add_header(
        slide,
        "PRACTICAL MITIGATION • OPERATIONAL PLAYBOOK",
        "How to Defend Against Social Engineering: The S-V-P-R Framework",
        "A practical, memorable four-step defensive framework for individuals and organizations"
    )
    add_footer(slide, 11)

    # 4 Framework Steps
    step_w = Inches(2.7)
    step_h = Inches(4.25)
    step_y = Inches(1.75)
    gap = Inches(0.31)

    framework = [
        ("1. STOP", "Cognitive Pause", AMBER_ACCENT, AMBER_BORDER, [
            ("Core Principle", True),
            ("Never react impulsively to high-pressure, emotional, or time-sensitive communications.", False),
            ("Actionable Rule", True),
            ("Treat extreme urgency, unexpected authority, and secrecy demands as primary indicators of risk.", False),
            ("Practical Habit", True),
            ("Step back physically and mentally before clicking any link or disclosing sensitive data.", False)
        ]),
        ("2. VERIFY", "Out-of-Band Validation", CYAN_ACCENT, CYAN_BORDER, [
            ("Core Principle", True),
            ("Confirm authenticity through a completely independent, pre-established channel.", False),
            ("Actionable Rule", True),
            ("Never verify a request using contact information provided inside the suspicious message itself.", False),
            ("Practical Habit", True),
            ("Lookup official phone directories or confirm verbally in person prior to transferring assets.", False)
        ]),
        ("3. PROTECT", "Technical Hardening", EMERALD_ACCENT, EMERALD_BORDER, [
            ("Core Principle", True),
            ("Implement strong cryptographic safeguards that reduce reliance on human memory alone.", False),
            ("Actionable Rule", True),
            ("Enforce phishing-resistant multi-factor authentication (FIDO2 / Hardware Security Keys).", False),
            ("Practical Habit", True),
            ("Utilize enterprise password managers and adhere strictly to least-privilege role boundaries.", False)
        ]),
        ("4. REPORT", "Organizational Telemetry", PURPLE_ACCENT, PURPLE_BORDER, [
            ("Core Principle", True),
            ("Transform individual awareness into collective organizational intelligence.", False),
            ("Actionable Rule", True),
            ("Promptly flag suspicious messages, unexpected invoices, and irregular calls to the security team.", False),
            ("Practical Habit", True),
            ("Reporting enables security teams to blacklist hostile domains and shield colleagues.", False)
        ])
    ]

    for i, (stitle, ssub, scolor, sborder, items) in enumerate(framework):
        s_x = Inches(0.8) + i * (step_w + gap)
        sc = add_card(slide, s_x, step_y, step_w, step_h, bg_color=SURFACE_CARD, border_color=sborder, border_width=1.2)
        tf = sc.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = Inches(0.2)
        tf.margin_top = Inches(0.18)
        
        p1 = tf.paragraphs[0]
        p1.text = stitle
        p1.font.name = FONT_HEADING
        p1.font.size = Pt(14)
        p1.font.bold = True
        p1.font.color.rgb = scolor
        
        p2 = tf.add_paragraph()
        p2.text = ssub.upper()
        p2.font.name = FONT_HEADING
        p2.font.size = Pt(8.5)
        p2.font.bold = True
        p2.font.color.rgb = TEXT_MUTED
        p2.space_after = Pt(10)
        
        for text, is_label in items:
            p = tf.add_paragraph()
            if is_label:
                p.text = text.upper()
                p.font.name = FONT_HEADING
                p.font.size = Pt(8.5)
                p.font.bold = True
                p.font.color.rgb = TEXT_WHITE
                p.space_after = Pt(2)
            else:
                p.text = text
                p.font.name = FONT_BODY
                p.font.size = Pt(9.2)
                p.font.color.rgb = TEXT_BODY
                p.space_after = Pt(6)

    # Bottom Golden Rule Banner
    bot = add_card(
        slide, Inches(0.8), Inches(6.15), Inches(11.733), Inches(0.58),
        bg_color=RGBColor(15, 23, 42), border_color=RED_BORDER, border_width=1.5
    )
    tfb = bot.text_frame
    tfb.word_wrap = True
    tfb.margin_left = tfb.margin_right = Inches(0.25)
    tfb.margin_top = Inches(0.1)
    pb = tfb.paragraphs[0]
    r_g1 = pb.add_run()
    r_g1.text = "THE GOLDEN RULE OF VERIFICATION: "
    r_g1.font.name = FONT_HEADING
    r_g1.font.size = Pt(10.5)
    r_g1.font.bold = True
    r_g1.font.color.rgb = RED_ACCENT
    r_g2 = pb.add_run()
    r_g2.text = "Never verify a suspicious request using the contact details, phone numbers, or links provided by the suspicious request itself."
    r_g2.font.name = FONT_BODY
    r_g2.font.size = Pt(10.5)
    r_g2.font.bold = True
    r_g2.font.color.rgb = TEXT_WHITE

    notes = (
        "SPEAKER NOTES — SLIDE 11: DEFENSIVE PLAYBOOK (THE S-V-P-R FRAMEWORK)\n\n"
        "Slide 11 translates our theoretical analysis into an actionable, four-step mitigation playbook: The S-V-P-R Framework:\n\n"
        "1. STOP: When an unexpected request creates urgency or anxiety, pause. Recognize that urgency is an attacker's primary weapon.\n"
        "2. VERIFY: Confirm the legitimacy of the request through an Out-of-Band channel. And remember the Golden Rule highlighted in red at the bottom: Never verify a message using the phone number or link inside the message itself. That simply routes your call back to the attacker.\n"
        "3. PROTECT: Deploy technical armor. Traditional SMS OTPs can be intercepted via proxy phishing. We must transition to FIDO2 hardware tokens and password managers.\n"
        "4. REPORT: When you spot a phishing attempt, report it immediately. Prompt user reporting alerts security analysts, enabling domain takedowns that shield fellow colleagues.\n\n"
        "By ingraining these four habits, individuals become active sensors in the enterprise defense fabric."
    )
    add_speaker_notes(slide, notes)


def build_slide_12(prs):
    """Slide 12: The Security Challenge Is Changing"""
    slide = create_base_slide(prs)
    add_header(
        slide,
        "STRATEGIC EVOLUTION • PRINCIPLES FOR THE AI ERA",
        "The Security Challenge Is Changing: Strategic Principles",
        "Adapting enterprise security architectures to counter scalable, automated, and multimodal deception"
    )
    add_footer(slide, 12)

    # Top Central Dynamic Banner (Trust Equation)
    banner = add_card(
        slide, Inches(0.8), Inches(1.75), Inches(11.733), Inches(0.95),
        bg_color=RGBColor(15, 23, 42), border_color=CYAN_BORDER, border_width=1.2
    )
    tfb = banner.text_frame
    tfb.word_wrap = True
    tfb.margin_left = tfb.margin_right = Inches(0.3)
    tfb.margin_top = Inches(0.12)
    
    pb1 = tfb.paragraphs[0]
    pb1.text = "THE CORE ARCHITECTURAL EQUATION"
    pb1.font.name = FONT_HEADING
    pb1.font.size = Pt(9.5)
    pb1.font.bold = True
    pb1.font.color.rgb = CYAN_ACCENT
    pb1.space_after = Pt(2)
    
    pb2 = tfb.add_paragraph()
    r = pb2.add_run()
    r.text = "HUMAN TRUST  +  AI-ENABLED SYNTHETIC MEDIA  =  THE MANDATE FOR CONTINUOUS VERIFICATION"
    r.font.name = FONT_HEADING
    r.font.size = Pt(12)
    r.font.bold = True
    r.font.color.rgb = TEXT_WHITE

    # 4 Future Security Principles (2x2 Grid)
    grid_w = Inches(5.72)
    grid_h = Inches(1.85)
    row1_y = Inches(2.9)
    row2_y = Inches(4.9)
    col1_x = Inches(0.8)
    col2_x = Inches(6.81)

    principles = [
        (col1_x, row1_y, "1. ZERO TRUST ARCHITECTURE", "“Never Trust, Always Verify”", CYAN_ACCENT, CYAN_BORDER,
         "Eliminate implicit trust based on network location or apparent identity. Every access request, API call, and transaction must be continuously authenticated, authorized, and cryptographically validated regardless of whether it originates inside or outside the firewall."),
         
        (col2_x, row1_y, "2. LEAST PRIVILEGE & DUAL CONTROL", "Separation of Duties", EMERALD_ACCENT, EMERALD_BORDER,
         "Limit user access rights strictly to the minimum necessary for daily duties. Mandate multi-party consensus (dual authorization) for high-value financial transactions or critical system configuration changes to prevent single-point exploitation."),
         
        (col1_x, row2_y, "3. CONTEXTUAL ANOMALY TELEMETRY", "Behavioral Baseline Analytics", AMBER_ACCENT, AMBER_BORDER,
         "Deploy machine learning analytics to identify behavioral deviations—unusual access hours, uncharacteristic data exfiltration, or sudden wire instruction alterations—detecting compromised sessions even when valid credentials are used."),
         
        (col2_x, row2_y, "4. ADAPTIVE RESILIENCE TRAINING", "Habit-Building Over Punishment", PURPLE_ACCENT, PURPLE_BORDER,
         "Move away from punitive 'gotcha' phishing tests toward supportive, scenario-based resilience training. Build an organizational culture that rewards healthy skepticism, routine verification, and transparent disclosure.")
    ]

    for (x, y, title, subtitle, color, border, desc) in principles:
        c = add_card(slide, x, y, grid_w, grid_h, bg_color=SURFACE_CARD, border_color=border, border_width=1.2)
        tf = c.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = Inches(0.24)
        tf.margin_top = Inches(0.14)
        
        p1 = tf.paragraphs[0]
        p1.text = title
        p1.font.name = FONT_HEADING
        p1.font.size = Pt(11.5)
        p1.font.bold = True
        p1.font.color.rgb = color
        
        p_sub = tf.add_paragraph()
        p_sub.text = subtitle.upper()
        p_sub.font.name = FONT_HEADING
        p_sub.font.size = Pt(8.5)
        p_sub.font.bold = True
        p_sub.font.color.rgb = TEXT_MUTED
        p_sub.space_after = Pt(4)
        
        p_d = tf.add_paragraph()
        p_d.text = desc
        p_d.font.name = FONT_BODY
        p_d.font.size = Pt(9.2)
        p_d.font.color.rgb = TEXT_BODY

    notes = (
        "SPEAKER NOTES — SLIDE 12: THE SECURITY CHALLENGE IS CHANGING\n\n"
        "Slide 12 examines the strategic principles required for cybersecurity in the AI era.\n\n"
        "Notice the fundamental equation at the top: Human trust combined with AI-powered synthetic media necessitates a continuous verification architecture.\n\n"
        "To adapt, modern cybersecurity relies on four foundational pillars:\n"
        "1. Zero Trust: Formally documented in NIST SP 800-207. We must eliminate implicit perimeter trust. An internal message or an authenticated user is not automatically trustworthy; every action must be evaluated.\n"
        "2. Least Privilege and Dual Control: If no single person has the sole power to wire ₹100,000 or grant database root access, social engineering a single individual cannot compromise the enterprise.\n"
        "3. Behavioral Anomaly Detection: Systems must monitor context—detecting if a user suddenly accesses files they never normally touch.\n"
        "4. Positive Culture: Transforming security training from punitive tests into supportive resilience building.\n\n"
        "Remember the closing axiom: The goal is not to cultivate universal paranoia. It is to establish verifiable certainty before important actions are executed."
    )
    add_speaker_notes(slide, notes)


def build_slide_13(prs):
    """Slide 13: Key Takeaways"""
    slide = create_base_slide(prs)
    add_header(
        slide,
        "SYNTHESIS & SUMMARY • EXECUTIVE TAKEAWAYS",
        "Key Takeaways: Navigating Social Engineering in the AI Era",
        "Five fundamental conclusions for cybersecurity students, practitioners, and organizations"
    )
    add_footer(slide, 13)

    # 5 Sequential Takeaway Cards
    card_w = Inches(11.733)
    card_h = Inches(0.85)
    gap = Inches(0.12)
    start_y = Inches(1.75)

    takeaways = [
        ("1. COGNITION OVER CODE", CYAN_ACCENT, CYAN_BORDER,
         "Social engineering targets human psychology, emotional instincts, and operational trust rather than underlying software flaws. Strong technical perimeters mean attackers focus on manipulating decisions."),
         
        ("2. A SPECTRUM OF DECEPTION", CYAN_ACCENT, CYAN_BORDER,
         "Phishing, spear phishing, smishing, vishing, and Business Email Compromise represent different delivery channels of the exact same core psychological exploit."),
         
        ("3. AI AS A FORCE MULTIPLIER", AMBER_ACCENT, AMBER_BORDER,
         "Generative AI enhances the speed, personalization, linguistic naturalness, and scale of attacks—substantially reducing the operational cost and technical skill required for deception."),
         
        ("4. THE EROSION OF SENSORY TRUST", RED_ACCENT, RED_BORDER,
         "Multimodal synthetic media (cloned audio, deepfake video, stylometric text) means visual and vocal familiarity can no longer be accepted as definitive proof of identity."),
         
        ("5. COLLABORATIVE DEFENSE-IN-DEPTH", EMERALD_ACCENT, EMERALD_BORDER,
         "Resilient cybersecurity requires an integrated triad: robust technical controls (FIDO2, DMARC), verifiable operational procedures (Out-of-Band verification), and trained human awareness.")
    ]

    for i, (title, color, border, text) in enumerate(takeaways):
        c_y = start_y + i * (card_h + gap)
        c = add_card(slide, Inches(0.8), c_y, card_w, card_h, bg_color=SURFACE_CARD, border_color=border, border_width=1.2)
        tf = c.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = Inches(0.25)
        tf.margin_top = Inches(0.12)
        
        p = tf.paragraphs[0]
        run1 = p.add_run()
        run1.text = title + "  —  "
        run1.font.name = FONT_HEADING
        run1.font.size = Pt(11)
        run1.font.bold = True
        run1.font.color.rgb = color
        
        run2 = p.add_run()
        run2.text = text
        run2.font.name = FONT_BODY
        run2.font.size = Pt(10)
        run2.font.color.rgb = TEXT_WHITE

    # Bottom Axiom Card
    bot = add_card(
        slide, Inches(0.8), Inches(6.28), Inches(11.733), Inches(0.45),
        bg_color=RGBColor(15, 23, 42), border_color=CARD_BORDER
    )
    tfb = bot.text_frame
    tfb.word_wrap = True
    tfb.margin_left = tfb.margin_right = Inches(0.2)
    tfb.margin_top = Inches(0.08)
    pb = tfb.paragraphs[0]
    pb.text = "CLOSING PRINCIPLE: The objective of modern cybersecurity is not cynical universal distrust. It is establishing unambiguous, verifiable trust before high-consequence actions are executed."
    pb.font.name = FONT_BODY
    pb.font.size = Pt(9.5)
    pb.font.bold = True
    pb.font.color.rgb = CYAN_ACCENT

    notes = (
        "SPEAKER NOTES — SLIDE 13: KEY TAKEAWAYS\n\n"
        "To summarize our investigation today, let us review the five key takeaways:\n\n"
        "First: Social engineering targets human cognition and decisions, not just software code.\n"
        "Second: Phishing, vishing, and BEC are different channels of a single underlying psychological exploit.\n"
        "Third: AI functions as a force multiplier—drastically increasing speed, scale, and personalization without requiring greater manual effort.\n"
        "Fourth: Deepfakes and voice cloning have permanently broken sensory trust; seeing and hearing can no longer be equated with knowing.\n"
        "Fifth: The only effective defense is a true partnership between technical controls, verified procedures, and human awareness.\n\n"
        "As future computer application professionals, our task is not merely to build secure firewalls, but to build secure, verifiable workflows that empower people to make safe decisions."
    )
    add_speaker_notes(slide, notes)


def build_slide_14(prs):
    """Slide 14: References & Authoritative Sources"""
    slide = create_base_slide(prs)
    add_header(
        slide,
        "SCHOLARLY CITATIONS • CURRICULUM & INSTITUTIONAL SOURCES",
        "References & Authoritative Cyber Security Sources",
        "Authoritative academic literature, international standards, and curriculum alignment"
    )
    add_footer(slide, 14)

    # 5 References Cards
    card_w = Inches(11.733)
    card_h = Inches(0.82)
    gap = Inches(0.1)
    start_y = Inches(1.75)

    references = [
        ("1. ENISA — EUROPEAN UNION AGENCY FOR CYBERSECURITY (2025–2026)", CYAN_ACCENT,
         "ENISA Threat Landscape: An Analysis of Emerging Cyber Threats, Social Engineering, and AI-Driven Exploits.",
         "Publications Office of the European Union. Direct source for threat actor evolution, capability scaling, and synthetic deception vectors. URL: https://www.enisa.europa.eu/publications/enisa-threat-landscape"),
         
        ("2. NATIONAL INSTITUTE OF STANDARDS AND TECHNOLOGY — NIST (2023–2024)", CYAN_ACCENT,
         "Human-Centered Cybersecurity: Phishing Detection, Analysis, and Susceptibility Framework.",
         "NIST Special Publication Series. U.S. Department of Commerce. Foundational source for cognitive heuristics, employee decision-making, and behavioral defenses. URL: https://csrc.nist.gov/publications"),
         
        ("3. NATIONAL INSTITUTE OF STANDARDS AND TECHNOLOGY — NIST (2024–2025)", AMBER_ACCENT,
         "Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations (NIST AI 100-2e2025).",
         "Gaithersburg, MD: NIST. Definitive taxonomic reference for generative AI risks, multimodal synthetic impersonation, and automated deception. URL: https://csrc.nist.gov/pubs/ai/100/2/e2025/final"),
         
        ("4. UNIVERSITY CURRICULUM REFERENCE (ACADEMIC YEAR 2026–27)", EMERALD_ACCENT,
         "Course Code: US07HMABCA02 — Fundamentals of Cyber Security (Units 1–3: Threat Paradigms, Social Engineering & Defense).",
         "B.Sc. Computer Applications & Information Technology (4-Year Honours Programme). Core academic alignment for terminology, attack categories, MFA, and access controls."),
         
        ("5. CYBERSECURITY AND INFRASTRUCTURE SECURITY AGENCY — CISA (2024–2025)", PURPLE_ACCENT,
         "Phishing-Resistant MFA Implementation and Enterprise Social Engineering Defense Guidelines.",
         "CISA Technical Guidance Series. Operational reference for FIDO2/WebAuthn migration, out-of-band verification standards, and zero trust identity principles. URL: https://www.cisa.gov")
    ]

    for i, (title, color, desc1, desc2) in enumerate(references):
        c_y = start_y + i * (card_h + gap)
        c = add_card(slide, Inches(0.8), c_y, card_w, card_h, bg_color=SURFACE_CARD, border_color=CARD_BORDER, border_width=1)
        tf = c.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = Inches(0.24)
        tf.margin_top = Inches(0.09)
        
        p1 = tf.paragraphs[0]
        p1.text = title
        p1.font.name = FONT_HEADING
        p1.font.size = Pt(10)
        p1.font.bold = True
        p1.font.color.rgb = color
        
        p2 = tf.add_paragraph()
        p2.text = desc1
        p2.font.name = FONT_BODY
        p2.font.size = Pt(9.5)
        p2.font.bold = True
        p2.font.color.rgb = TEXT_WHITE
        
        p3 = tf.add_paragraph()
        p3.text = desc2
        p3.font.name = FONT_BODY
        p3.font.size = Pt(8.5)
        p3.font.color.rgb = TEXT_MUTED

    # Bottom Academic Submission Note
    bot = add_card(
        slide, Inches(0.8), Inches(6.35), Inches(11.733), Inches(0.38),
        bg_color=RGBColor(15, 23, 42), border_color=CYAN_BORDER, border_width=1
    )
    tfb = bot.text_frame
    tfb.word_wrap = True
    tfb.margin_left = tfb.margin_right = Inches(0.2)
    tfb.margin_top = Inches(0.06)
    pb = tfb.paragraphs[0]
    pb.text = "ACTIVE LEARNING SUBMISSION: Prepared by Daksh Parekh | B.Sc. CA & IT (4-Year Honours) | Academic Year 2026–27 | Evaluated under Cyber Security (US07HMABCA02)"
    pb.font.name = FONT_BODY
    pb.font.size = Pt(9.2)
    pb.font.bold = True
    pb.font.color.rgb = CYAN_ACCENT

    notes = (
        "SPEAKER NOTES — SLIDE 14: REFERENCES & CLOSING\n\n"
        "Here on Slide 14 are our primary academic and governmental sources, including the European Union Agency for Cybersecurity (ENISA), NIST Special Publications on Human-Centered Cybersecurity, NIST AI 100-2 on Adversarial Machine Learning, CISA guidelines, and our prescribed syllabus under course US07HMABCA02.\n\n"
        "This concludes my presentation on 'Social Engineering in the Age of AI: How Technology Is Changing the Way Cybercriminals Exploit Trust.'\n\n"
        "Thank you, respected faculty and fellow peers, for your kind attention. I now welcome any questions, observations, or discussion points from the evaluation committee."
    )
    add_speaker_notes(slide, notes)


# ==============================================================================
# MAIN EXECUTION
# ==============================================================================
def main():
    prs = Presentation()
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)

    print("Generating Slide 1: Title Slide...")
    build_slide_1(prs)
    
    print("Generating Slide 2: Opening Question & Core Dilemma...")
    build_slide_2(prs)
    
    print("Generating Slide 3: What Is Social Engineering?...")
    build_slide_3(prs)
    
    print("Generating Slide 4: Why Does Social Engineering Work?...")
    build_slide_4(prs)
    
    print("Generating Slide 5: Forms of Social Engineering...")
    build_slide_5(prs)
    
    print("Generating Slide 6: What Changes When AI Enters the Picture?...")
    build_slide_6(prs)
    
    print("Generating Slide 7: Deepfakes and Digital Impersonation...")
    build_slide_7(prs)
    
    print("Generating Slide 8: Case Scenario: The Fake Manager...")
    build_slide_8(prs)
    
    print("Generating Slide 9: The Social-Engineering Attack Chain...")
    build_slide_9(prs)
    
    print("Generating Slide 10: Technical Security vs. Human Controls...")
    build_slide_10(prs)
    
    print("Generating Slide 11: How to Defend Against Social Engineering...")
    build_slide_11(prs)
    
    print("Generating Slide 12: The Security Challenge Is Changing...")
    build_slide_12(prs)
    
    print("Generating Slide 13: Key Takeaways...")
    build_slide_13(prs)
    
    print("Generating Slide 14: References & Authoritative Sources...")
    build_slide_14(prs)

    output_path = "/Users/dakshparekh/Downloads/ielts-board-3-3/Social_Engineering_in_the_Age_of_AI_Daksh_Parekh.pptx"
    prs.save(output_path)
    print(f"\nSUCCESS! Complete 14-slide presentation successfully generated and saved to:\n{output_path}")

if __name__ == "__main__":
    main()
