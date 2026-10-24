import os
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn

OUTPUT_DIR = r"c:\Users\Hp\Desktop\Web Developer\Portfolio\cv"

def add_heading_with_bottom_border(doc, text, page_break_before=False):
    h = doc.add_paragraph()
    if page_break_before:
        h.paragraph_format.page_break_before = True
    h.paragraph_format.space_before = Pt(11)
    h.paragraph_format.space_after = Pt(3)
    h.paragraph_format.keep_with_next = True
    
    run = h.add_run(text)
    run.bold = True
    run.font.size = Pt(10.5)
    run.font.name = "Arial"
    run.font.color.rgb = RGBColor(15, 23, 42) # Slate 900
    
    # Add bottom border via XML
    pPr = h._p.get_or_add_pPr()
    pBdr = OxmlElement('w:pBdr')
    bottom = OxmlElement('w:bottom')
    bottom.set(qn('w:val'), 'single')
    bottom.set(qn('w:sz'), '6')
    bottom.set(qn('w:space'), '1')
    bottom.set(qn('w:color'), '94A3B8') # Slate 400
    pBdr.append(bottom)
    pPr.append(pBdr)
    return h

def set_run_font(run, name="Arial", size_pt=9.5, bold=False, italic=False, color_rgb=(51, 65, 85)):
    run.font.name = name
    run.font.size = Pt(size_pt)
    run.bold = bold
    run.italic = italic
    run.font.color.rgb = RGBColor(*color_rgb)

def add_bullet(doc, bold_prefix, text_content):
    p = doc.add_paragraph(style='List Bullet')
    p.paragraph_format.space_before = Pt(1)
    p.paragraph_format.space_after = Pt(2)
    p.paragraph_format.line_spacing = 1.15
    if bold_prefix:
        r1 = p.add_run(bold_prefix)
        set_run_font(r1, bold=True, size_pt=9.5, color_rgb=(15, 23, 42))
    r2 = p.add_run(text_content)
    set_run_font(r2, size_pt=9.5, color_rgb=(51, 65, 85))
    return p

def build_master_docx(filepath):
    doc = Document()
    
    for section in doc.sections:
        section.top_margin = Inches(0.55)
        section.bottom_margin = Inches(0.55)
        section.left_margin = Inches(0.65)
        section.right_margin = Inches(0.65)
        
    # Header: Name
    title_p = doc.add_paragraph()
    title_p.paragraph_format.space_before = Pt(0)
    title_p.paragraph_format.space_after = Pt(2)
    title_run = title_p.add_run("MUHAMMAD SHAYAN AYUB")
    set_run_font(title_run, size_pt=18, bold=True, color_rgb=(15, 23, 42))
    
    # Headline
    sub_p = doc.add_paragraph()
    sub_p.paragraph_format.space_before = Pt(0)
    sub_p.paragraph_format.space_after = Pt(4)
    sub_run = sub_p.add_run("Full Stack Developer | Backend Engineering | Cybersecurity")
    set_run_font(sub_run, size_pt=10.5, bold=True, color_rgb=(29, 78, 216))
    
    # Contact Details
    contact_p = doc.add_paragraph()
    contact_p.paragraph_format.space_before = Pt(0)
    contact_p.paragraph_format.space_after = Pt(6)
    c_run1 = contact_p.add_run("Pakistan (Open to International Relocation, Subject to Work Authorization)  |  ")
    set_run_font(c_run1, size_pt=9, color_rgb=(71, 85, 105))
    c_run2 = contact_p.add_run("Email: muhammadshayanayub@gmail.com\n")
    set_run_font(c_run2, size_pt=9, color_rgb=(71, 85, 105))
    c_run3 = contact_p.add_run("LinkedIn: linkedin.com/in/muhammad-shayan-ayub-31b8a524a  |  GitHub: github.com/shayanayub92")
    set_run_font(c_run3, size_pt=9, color_rgb=(71, 85, 105))
    
    # Professional Summary
    add_heading_with_bottom_border(doc, "PROFESSIONAL SUMMARY")
    sum_p = doc.add_paragraph()
    sum_p.paragraph_format.space_before = Pt(2)
    sum_p.paragraph_format.space_after = Pt(5)
    sum_p.paragraph_format.line_spacing = 1.18
    sum_run = sum_p.add_run(
        "Computer Science graduate and Full Stack Web Developer with professional experience developing web applications, "
        "integrating APIs, implementing authentication functionality, and building backend services. Experienced with Python, "
        "FastAPI, React.js, PostgreSQL, Docker, Redis, Celery, WebSockets, and Tailwind CSS. Practical cybersecurity background includes "
        "PCAP-based malware traffic investigation, HTTP security header analysis, OWASP Top 10 concepts, and hands-on laboratory exercises. "
        "Seeking international opportunities in full-stack engineering, backend development, or software engineering."
    )
    set_run_font(sum_run, size_pt=9.5, color_rgb=(51, 65, 85))
    
    # Technical Skills
    add_heading_with_bottom_border(doc, "TECHNICAL SKILLS")
    skills = [
        ("Programming Languages: ", "Python, JavaScript (ES6+), C++, SQL, HTML5, CSS3, PHP"),
        ("Backend & API Engineering: ", "FastAPI, RESTful APIs, JWT Authentication & Authorization, WebSockets, Celery, Microservices Patterns, AsyncIO"),
        ("Frontend Development: ", "React.js, Tailwind CSS, Responsive Web Design, Component Architecture, State Management, API Integration"),
        ("Databases & Data Management: ", "PostgreSQL, MySQL, SQLite, Relational Modeling, Schema Optimization, pgAdmin"),
        ("Caching & Background Tasks: ", "Redis, Celery Task Queues"),
        ("DevOps, Tools & Infrastructure: ", "Docker, Git, GitHub, Linux (Debian/Kali), VS Code, Postman"),
        ("Cybersecurity & Network Analysis: ", "OWASP Top 10 Mitigation, HTTP Security Headers, Wireshark, PCAP Forensics, NetworkMiner, Nmap Fundamentals"),
        ("Cloud Fundamentals: ", "Microsoft Azure Concepts (Governance, Cost Management, Monitoring, Security Fundamentals)")
    ]
    for cat, text in skills:
        add_bullet(doc, cat, text)
        
    # Professional Experience (Page 1)
    add_heading_with_bottom_border(doc, "PROFESSIONAL EXPERIENCE")
    job_p = doc.add_paragraph()
    job_p.paragraph_format.space_before = Pt(3)
    job_p.paragraph_format.space_after = Pt(1)
    job_p.paragraph_format.keep_with_next = True
    j_r1 = job_p.add_run("Full Stack Web Developer — HexaForge")
    set_run_font(j_r1, size_pt=10, bold=True, color_rgb=(15, 23, 42))
    j_r2 = job_p.add_run("\nJune 2025 – Present  |  Pakistan (Collaborative Environment)")
    set_run_font(j_r2, size_pt=9, italic=True, color_rgb=(100, 116, 139))
    
    exp_bullets = [
        "Engineered full-stack web applications in an agile, project-based development environment, bridging client interfaces with scalable backend infrastructure.",
        "Developed and maintained performant RESTful APIs and WebSocket endpoints using Python and FastAPI for real-time and asynchronous operations.",
        "Implemented secure token-based authentication (JWT) and authorization guards across web application workflows.",
        "Structured, queried, and administered relational databases with PostgreSQL, optimizing schema designs and data integrity.",
        "Built responsive, component-driven user interfaces utilizing React.js and Tailwind CSS with fluid cross-device compatibility.",
        "Containerized microservices and development workflows using Docker to ensure environment parity and reproducible deployments.",
        "Integrated Redis caching and Celery task queues to handle asynchronous background processing and improve system responsiveness."
    ]
    for b in exp_bullets:
        add_bullet(doc, "", b)
        
    # Selected Software Development Projects (Page 2 - Balanced Break)
    add_heading_with_bottom_border(doc, "SELECTED SOFTWARE DEVELOPMENT PROJECTS", page_break_before=True)
    
    # Project 1
    p1 = doc.add_paragraph()
    p1.paragraph_format.space_before = Pt(3)
    p1.paragraph_format.space_after = Pt(1)
    p1.paragraph_format.keep_with_next = True
    p1_r = p1.add_run("Digital Assets Marketplace")
    set_run_font(p1_r, size_pt=10, bold=True, color_rgb=(15, 23, 42))
    p1_t = p1.add_run(" | React.js, FastAPI, PostgreSQL, Docker")
    set_run_font(p1_t, size_pt=9, italic=True, color_rgb=(100, 116, 139))
    add_bullet(doc, "", "Engineered a decoupled full-stack digital asset platform designed for listing, catalog discovery, and transactional asset interactions.")
    add_bullet(doc, "", "Designed modular backend services with FastAPI, enforcing schema validation, role access, and relational constraints in PostgreSQL.")
    add_bullet(doc, "", "Containerized frontend and backend services using Docker, facilitating multi-container local orchestration and deployment consistency.")

    # Project 2
    p2 = doc.add_paragraph()
    p2.paragraph_format.space_before = Pt(3)
    p2.paragraph_format.space_after = Pt(1)
    p2.paragraph_format.keep_with_next = True
    p2_r = p2.add_run("Student Issue Management System")
    set_run_font(p2_r, size_pt=10, bold=True, color_rgb=(15, 23, 42))
    p2_t = p2.add_run(" | Python, FastAPI, JavaScript, PostgreSQL (github.com/shayanayub92/Strike-Management-System)")
    set_run_font(p2_t, size_pt=9, italic=True, color_rgb=(100, 116, 139))
    add_bullet(doc, "", "Built an institutional ticket-tracking and issue resolution platform for university administrative and student workflows.")
    add_bullet(doc, "", "Developed RESTful lifecycle endpoints in FastAPI to support issue logging, escalation tracking, and administrative resolution states.")
    add_bullet(doc, "", "Integrated PostgreSQL relational schemas ensuring tamper-evident history, relational integrity, and reliable status persistence.")

    # Project 3
    p3 = doc.add_paragraph()
    p3.paragraph_format.space_before = Pt(3)
    p3.paragraph_format.space_after = Pt(1)
    p3.paragraph_format.keep_with_next = True
    p3_r = p3.add_run("Islamabad NGO Donation Website")
    set_run_font(p3_r, size_pt=10, bold=True, color_rgb=(15, 23, 42))
    p3_t = p3.add_run(" | PHP, MySQL, HTML5, CSS3, JavaScript (github.com/shayanayub92/donate)")
    set_run_font(p3_t, size_pt=9, italic=True, color_rgb=(100, 116, 139))
    add_bullet(doc, "", "Created a donation management web platform supporting transparent philanthropic tracking and orphan support campaigns.")
    add_bullet(doc, "", "Implemented relational donor records, administrative contribution logs, and responsive contribution dashboards in MySQL and PHP.")

    # Project 4
    p4 = doc.add_paragraph()
    p4.paragraph_format.space_before = Pt(3)
    p4.paragraph_format.space_after = Pt(1)
    p4.paragraph_format.keep_with_next = True
    p4_r = p4.add_run("Mini Blog Application")
    set_run_font(p4_r, size_pt=10, bold=True, color_rgb=(15, 23, 42))
    p4_t = p4.add_run(" | JavaScript, HTML5, CSS3 (github.com/shayanayub92/Mini-Blog-App)")
    set_run_font(p4_t, size_pt=9, italic=True, color_rgb=(100, 116, 139))
    add_bullet(doc, "", "Engineered a responsive web application for creating, managing, and categorizing publishing content with client-side state handling.")

    # Cybersecurity Experience
    add_heading_with_bottom_border(doc, "CYBERSECURITY EXPERIENCE & PRACTICAL TRAINING")
    
    cb1 = doc.add_paragraph()
    cb1.paragraph_format.space_before = Pt(3)
    cb1.paragraph_format.space_after = Pt(1)
    cb1.paragraph_format.keep_with_next = True
    cb1_r = cb1.add_run("CyberDefenders — DanaBot Digital Forensics Lab")
    set_run_font(cb1_r, size_pt=10, bold=True, color_rgb=(15, 23, 42))
    cb1_t = cb1.add_run(" | April 2025")
    set_run_font(cb1_t, size_pt=9, italic=True, color_rgb=(100, 116, 139))
    add_bullet(doc, "", "Executed a comprehensive PCAP network traffic forensic investigation to isolate malware behavior and suspicious host interactions.")
    add_bullet(doc, "", "Analyzed packet captures using Wireshark and NetworkMiner to reconstruct command-and-control (C2) communication patterns.")
    add_bullet(doc, "", "Correlated extracted binary payloads and network hashes with threat intelligence sources (VirusTotal, ANY.RUN).")

    cb2 = doc.add_paragraph()
    cb2.paragraph_format.space_before = Pt(3)
    cb2.paragraph_format.space_after = Pt(1)
    cb2.paragraph_format.keep_with_next = True
    cb2_r = cb2.add_run("TryHackMe — Hands-On Cybersecurity Learning")
    set_run_font(cb2_r, size_pt=10, bold=True, color_rgb=(15, 23, 42))
    cb2_t = cb2.add_run(" | 2025 (tryhackme.com/p/ShayanAyub101)")
    set_run_font(cb2_t, size_pt=9, italic=True, color_rgb=(100, 116, 139))
    add_bullet(doc, "", "Completed 22+ interactive rooms covering ethical hacking concepts, network enumeration, privilege escalation, and web security.")
    add_bullet(doc, "", "Achieved a reported platform ranking placing within the top 25% of active global learners.")

    cb3 = doc.add_paragraph()
    cb3.paragraph_format.space_before = Pt(3)
    cb3.paragraph_format.space_after = Pt(1)
    cb3.paragraph_format.keep_with_next = True
    cb3_r = cb3.add_run("National Cybersecurity Training Program — MUST")
    set_run_font(cb3_r, size_pt=10, bold=True, color_rgb=(15, 23, 42))
    cb3_t = cb3.add_run(" | 2025")
    set_run_font(cb3_t, size_pt=9, italic=True, color_rgb=(100, 116, 139))
    add_bullet(doc, "", "Completed hands-on practical training covering SOC fundamentals, defensive countermeasures, network traffic analysis, and security controls.")

    # Certifications & Learning
    add_heading_with_bottom_border(doc, "CERTIFICATIONS & CONTINUOUS LEARNING")
    add_bullet(doc, "HackerRank Skill Certifications (2025): ", "Earned verified skill certifications in C++ Problem Solving and MySQL Database Operations (hackerrank.com/certificates/409a3827dfb5).")
    add_bullet(doc, "Microsoft Learn Cloud Achievements (2024–2025): ", "Completed foundational learning modules covering Azure Architecture, Governance, Compliance, Monitoring, Cost Management, and Cloud Security Fundamentals.")

    # Education
    add_heading_with_bottom_border(doc, "EDUCATION")
    edu_p = doc.add_paragraph()
    edu_p.paragraph_format.space_before = Pt(3)
    edu_p.paragraph_format.space_after = Pt(1)
    edu_p.paragraph_format.keep_with_next = True
    e_r1 = edu_p.add_run("Bachelor of Science in Computer Science (BSCS)")
    set_run_font(e_r1, size_pt=10, bold=True, color_rgb=(15, 23, 42))
    e_r2 = edu_p.add_run("\nMirpur University of Science and Technology (MUST), Pakistan  |  Graduation Date: October 2026")
    set_run_font(e_r2, size_pt=9, italic=True, color_rgb=(100, 116, 139))
    add_bullet(doc, "Status: ", "Degree coursework completed; official DMC / transcript pending formal issuance.")
    add_bullet(doc, "Core Disciplines: ", "Data Structures & Algorithms, Database Systems, Computer Networks, Information Security, Operating Systems & Linux Architecture, Software Engineering Methodologies.")

    doc.save(filepath)
    print(f"Updated Master DOCX saved to {filepath}")

def build_cybersecurity_docx(filepath):
    doc = Document()
    
    for section in doc.sections:
        section.top_margin = Inches(0.55)
        section.bottom_margin = Inches(0.55)
        section.left_margin = Inches(0.65)
        section.right_margin = Inches(0.65)
        
    title_p = doc.add_paragraph()
    title_p.paragraph_format.space_before = Pt(0)
    title_p.paragraph_format.space_after = Pt(2)
    title_run = title_p.add_run("MUHAMMAD SHAYAN AYUB")
    set_run_font(title_run, size_pt=18, bold=True, color_rgb=(15, 23, 42))
    
    sub_p = doc.add_paragraph()
    sub_p.paragraph_format.space_before = Pt(0)
    sub_p.paragraph_format.space_after = Pt(4)
    sub_run = sub_p.add_run("Cybersecurity Analyst | Application Security | Backend Engineering")
    set_run_font(sub_run, size_pt=10.5, bold=True, color_rgb=(14, 116, 144))
    
    contact_p = doc.add_paragraph()
    contact_p.paragraph_format.space_before = Pt(0)
    contact_p.paragraph_format.space_after = Pt(6)
    c_run1 = contact_p.add_run("Pakistan (Open to International Relocation, Subject to Work Authorization)  |  ")
    set_run_font(c_run1, size_pt=9, color_rgb=(71, 85, 105))
    c_run2 = contact_p.add_run("Email: muhammadshayanayub@gmail.com\n")
    set_run_font(c_run2, size_pt=9, color_rgb=(71, 85, 105))
    c_run3 = contact_p.add_run("LinkedIn: linkedin.com/in/muhammad-shayan-ayub-31b8a524a  |  GitHub: github.com/shayanayub92")
    set_run_font(c_run3, size_pt=9, color_rgb=(71, 85, 105))
    
    add_heading_with_bottom_border(doc, "PROFESSIONAL SUMMARY")
    sum_p = doc.add_paragraph()
    sum_p.paragraph_format.space_before = Pt(2)
    sum_p.paragraph_format.space_after = Pt(5)
    sum_p.paragraph_format.line_spacing = 1.18
    sum_run = sum_p.add_run(
        "Computer Science graduate and Developer with practical hands-on experience in cybersecurity investigations, "
        "network traffic analysis, and secure application development. Proven background in PCAP-based malware forensic analysis "
        "(DanaBot investigation using Wireshark and NetworkMiner), HTTP security header evaluation, OWASP Top 10 vulnerability remediation, "
        "and ethical hacking fundamentals (Top 25% ranking across 22+ TryHackMe rooms). Complemented by professional full-stack development "
        "experience building authenticated backend services and APIs using Python, FastAPI, PostgreSQL, and Docker. "
        "Seeking entry-level cybersecurity, SOC analyst, or application security roles."
    )
    set_run_font(sum_run, size_pt=9.5, color_rgb=(51, 65, 85))
    
    add_heading_with_bottom_border(doc, "CYBERSECURITY & TECHNICAL SKILLS")
    skills = [
        ("Cybersecurity & Network Analysis: ", "OWASP Top 10 Mitigation, HTTP Security Headers, Wireshark, PCAP Forensics, NetworkMiner, Nmap, Malware Traffic Analysis, C2 Identification, Threat Intelligence (VirusTotal, ANY.RUN)"),
        ("Application Security & Backend: ", "Secure API Design, JWT Authentication, Password Hashing, Role-Based Access Control (RBAC), FastAPI, Python, WebSockets"),
        ("Cloud Security & Infrastructure: ", "Microsoft Azure Security Concepts, Cloud Governance, Monitoring & Telemetry, Docker Container Security, Linux (Debian, Kali)"),
        ("Databases & Data Integrity: ", "PostgreSQL, MySQL, SQLite, Relational Modeling, pgAdmin"),
        ("Languages & Scripting: ", "Python, JavaScript, C++, SQL, Bash Basics, HTML5, CSS3, PHP"),
        ("DevOps & Development Tools: ", "Git, GitHub, Docker, Postman, VS Code")
    ]
    for cat, text in skills:
        add_bullet(doc, cat, text)
        
    add_heading_with_bottom_border(doc, "CYBERSECURITY EXPERIENCE & PRACTICAL TRAINING")
    
    cb1 = doc.add_paragraph()
    cb1.paragraph_format.space_before = Pt(3)
    cb1.paragraph_format.space_after = Pt(1)
    cb1.paragraph_format.keep_with_next = True
    cb1_r = cb1.add_run("CyberDefenders — DanaBot Digital Forensics Lab")
    set_run_font(cb1_r, size_pt=10, bold=True, color_rgb=(15, 23, 42))
    cb1_t = cb1.add_run(" | April 2025")
    set_run_font(cb1_t, size_pt=9, italic=True, color_rgb=(100, 116, 139))
    add_bullet(doc, "", "Executed an in-depth PCAP-based digital forensics investigation into a suspected DanaBot malware infection.")
    add_bullet(doc, "", "Analyzed packet captures using Wireshark and NetworkMiner to trace malicious TCP/HTTP streams and uncover command-and-control (C2) servers.")
    add_bullet(doc, "", "Extracted embedded payloads and malicious artifacts, correlating indicators of compromise (IOCs) across VirusTotal and ANY.RUN.")
    add_bullet(doc, "", "Documented findings, forensic timelines, and evidence-based remediation recommendations.")

    cb2 = doc.add_paragraph()
    cb2.paragraph_format.space_before = Pt(3)
    cb2.paragraph_format.space_after = Pt(1)
    cb2.paragraph_format.keep_with_next = True
    cb2_r = cb2.add_run("TryHackMe — Hands-On Cybersecurity Learning")
    set_run_font(cb2_r, size_pt=10, bold=True, color_rgb=(15, 23, 42))
    cb2_t = cb2.add_run(" | 2025 (tryhackme.com/p/ShayanAyub101)")
    set_run_font(cb2_t, size_pt=9, italic=True, color_rgb=(100, 116, 139))
    add_bullet(doc, "", "Completed 22+ interactive security labs covering penetration testing methodology, network enumeration, privilege escalation, and web security.")
    add_bullet(doc, "", "Demonstrated consistent problem-solving in defensive and offensive techniques, achieving a ranking in the top 25% of active global learners.")

    cb3 = doc.add_paragraph()
    cb3.paragraph_format.space_before = Pt(3)
    cb3.paragraph_format.space_after = Pt(1)
    cb3.paragraph_format.keep_with_next = True
    cb3_r = cb3.add_run("National Cybersecurity Training Program — MUST")
    set_run_font(cb3_r, size_pt=10, bold=True, color_rgb=(15, 23, 42))
    cb3_t = cb3.add_run(" | 2025")
    set_run_font(cb3_t, size_pt=9, italic=True, color_rgb=(100, 116, 139))
    add_bullet(doc, "", "Completed university-sponsored training exploring SOC operations, incident response workflows, ethical hacking concepts, and defensive security architectures.")

    # Professional Experience (Page 2 - Balanced Break)
    add_heading_with_bottom_border(doc, "PROFESSIONAL EXPERIENCE", page_break_before=True)
    job_p = doc.add_paragraph()
    job_p.paragraph_format.space_before = Pt(3)
    job_p.paragraph_format.space_after = Pt(1)
    job_p.paragraph_format.keep_with_next = True
    j_r1 = job_p.add_run("Full Stack Web Developer — HexaForge")
    set_run_font(j_r1, size_pt=10, bold=True, color_rgb=(15, 23, 42))
    j_r2 = job_p.add_run("\nJune 2025 – Present  |  Pakistan (Collaborative Environment)")
    set_run_font(j_r2, size_pt=9, italic=True, color_rgb=(100, 116, 139))
    
    exp_bullets = [
        "Developed full-stack web applications adhering to secure coding best practices, least privilege principles, and modular architecture.",
        "Implemented token-based authentication (JWT) and authorization guards in Python and FastAPI to safeguard backend API endpoints against unauthorized access.",
        "Administered PostgreSQL databases, designing relational constraints and schema protections to prevent SQL injection and ensure transactional integrity.",
        "Containerized application environments using Docker to enforce reproducible dependencies and isolated execution boundaries.",
        "Utilized Redis and Celery for background processing, decoupling heavy workloads from synchronous API threads.",
        "Built responsive, accessible frontend interfaces in React.js and Tailwind CSS with sanitized user inputs."
    ]
    for b in exp_bullets:
        add_bullet(doc, "", b)

    add_heading_with_bottom_border(doc, "SELECTED SOFTWARE & SECURITY PROJECTS")
    
    p1 = doc.add_paragraph()
    p1.paragraph_format.space_before = Pt(3)
    p1.paragraph_format.space_after = Pt(1)
    p1.paragraph_format.keep_with_next = True
    p1_r = p1.add_run("Digital Assets Marketplace (Secure Full-Stack Platform)")
    set_run_font(p1_r, size_pt=10, bold=True, color_rgb=(15, 23, 42))
    p1_t = p1.add_run(" | React.js, FastAPI, PostgreSQL, Docker")
    set_run_font(p1_t, size_pt=9, italic=True, color_rgb=(100, 116, 139))
    add_bullet(doc, "", "Engineered a decoupled digital asset platform featuring authenticated user flows and catalog management.")
    add_bullet(doc, "", "Implemented robust backend API validation and parameterized database queries with FastAPI and PostgreSQL to mitigate injection attacks.")
    add_bullet(doc, "", "Containerized multi-service deployment with Docker for controlled container isolation.")

    p2 = doc.add_paragraph()
    p2.paragraph_format.space_before = Pt(3)
    p2.paragraph_format.space_after = Pt(1)
    p2.paragraph_format.keep_with_next = True
    p2_r = p2.add_run("Student Issue Management System")
    set_run_font(p2_r, size_pt=10, bold=True, color_rgb=(15, 23, 42))
    p2_t = p2.add_run(" | Python, FastAPI, JavaScript, PostgreSQL (github.com/shayanayub92/Strike-Management-System)")
    set_run_font(p2_t, size_pt=9, italic=True, color_rgb=(100, 116, 139))
    add_bullet(doc, "", "Built a university ticket-tracking system featuring structured workflow states and audit logs.")
    add_bullet(doc, "", "Enforced backend authorization rules to ensure students and administrators only access permissible data.")
    add_bullet(doc, "", "Structured relational records in PostgreSQL to ensure data integrity and traceability throughout the issue lifecycle.")

    p3 = doc.add_paragraph()
    p3.paragraph_format.space_before = Pt(3)
    p3.paragraph_format.space_after = Pt(1)
    p3.paragraph_format.keep_with_next = True
    p3_r = p3.add_run("Islamabad NGO Donation Website")
    set_run_font(p3_r, size_pt=10, bold=True, color_rgb=(15, 23, 42))
    p3_t = p3.add_run(" | PHP, MySQL, HTML5, CSS3, JavaScript (github.com/shayanayub92/donate)")
    set_run_font(p3_t, size_pt=9, italic=True, color_rgb=(100, 116, 139))
    add_bullet(doc, "", "Developed an NGO donation portal providing transparent contribution logging and campaign tracking.")
    add_bullet(doc, "", "Applied input validation and structured relational database operations in MySQL to ensure accountability.")

    add_heading_with_bottom_border(doc, "CERTIFICATIONS & TECHNICAL LEARNING")
    add_bullet(doc, "Microsoft Learn Cloud & Security Achievements (2024–2025): ", "Completed curriculum modules covering cloud security fundamentals, governance, compliance, monitoring, and infrastructure security controls.")
    add_bullet(doc, "HackerRank Skill Certifications (2025): ", "Verified problem-solving credentials in C++ and MySQL relational database management (hackerrank.com/certificates/409a3827dfb5).")

    add_heading_with_bottom_border(doc, "EDUCATION")
    edu_p = doc.add_paragraph()
    edu_p.paragraph_format.space_before = Pt(3)
    edu_p.paragraph_format.space_after = Pt(1)
    edu_p.paragraph_format.keep_with_next = True
    e_r1 = edu_p.add_run("Bachelor of Science in Computer Science (BSCS)")
    set_run_font(e_r1, size_pt=10, bold=True, color_rgb=(15, 23, 42))
    e_r2 = edu_p.add_run("\nMirpur University of Science and Technology (MUST), Pakistan  |  Graduation Date: October 2026")
    set_run_font(e_r2, size_pt=9, italic=True, color_rgb=(100, 116, 139))
    add_bullet(doc, "Status: ", "Degree coursework completed; official DMC / transcript pending formal issuance.")
    add_bullet(doc, "Relevant Coursework: ", "Information & Network Security, Computer Networks, Operating Systems, Database Systems, Data Structures & Algorithms, Software Engineering.")

    doc.save(filepath)
    print(f"Updated Cybersecurity DOCX saved to {filepath}")

if __name__ == "__main__":
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    master_docx = os.path.join(OUTPUT_DIR, "Muhammad_Shayan_Ayub_CV.docx")
    cyber_docx = os.path.join(OUTPUT_DIR, "Muhammad_Shayan_Ayub_Cybersecurity_CV.docx")
    
    try:
        build_master_docx(master_docx)
    except PermissionError:
        fallback_master = os.path.join(OUTPUT_DIR, "Muhammad_Shayan_Ayub_CV_Latest.docx")
        build_master_docx(fallback_master)
        print(f"Master DOCX was in use by Word. Saved updated version to: {fallback_master}")
        
    try:
        build_cybersecurity_docx(cyber_docx)
    except PermissionError:
        fallback_cyber = os.path.join(OUTPUT_DIR, "Muhammad_Shayan_Ayub_Cybersecurity_CV_Latest.docx")
        build_cybersecurity_docx(fallback_cyber)
        print(f"Cybersecurity DOCX was in use by Word. Saved updated version to: {fallback_cyber}")

