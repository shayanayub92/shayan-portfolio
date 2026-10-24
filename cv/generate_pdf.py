import os
import shutil
import subprocess

OUTPUT_DIR = r"c:\Users\Hp\Desktop\Web Developer\Portfolio\cv"
PUBLIC_DIR = r"c:\Users\Hp\Desktop\Web Developer\Portfolio\public"
EDGE_EXE = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

MASTER_HTML_CONTENT = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Muhammad Shayan Ayub - CV</title>
<style>
  @page {
    size: A4;
    margin: 12mm 15mm 12mm 15mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    color: #1e293b;
    background: #ffffff;
    font-size: 9.2pt;
    line-height: 1.34;
    -webkit-print-color-adjust: exact;
  }
  .header {
    margin-bottom: 8px;
    padding-bottom: 5px;
    border-bottom: 1.5px solid #0f172a;
  }
  h1 {
    font-size: 18pt;
    font-weight: 800;
    letter-spacing: -0.2px;
    color: #0f172a;
    text-transform: uppercase;
    margin-bottom: 2px;
  }
  .headline {
    font-size: 10.2pt;
    font-weight: 700;
    color: #1d4ed8;
    margin-bottom: 3px;
  }
  .contact-bar {
    font-size: 8.5pt;
    color: #475569;
    line-height: 1.35;
  }
  .contact-bar a {
    color: #2563eb;
    text-decoration: none;
  }
  .section-title {
    font-size: 10.2pt;
    font-weight: 800;
    color: #0f172a;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    margin-top: 9px;
    margin-bottom: 4px;
    padding-bottom: 2px;
    border-bottom: 1px solid #94a3b8;
    page-break-after: avoid;
  }
  .page-break {
    page-break-before: always;
  }
  .summary-text {
    font-size: 9.1pt;
    color: #334155;
    line-height: 1.36;
    text-align: justify;
    margin-bottom: 5px;
  }
  .skill-group {
    margin-bottom: 2.5px;
    font-size: 8.9pt;
    line-height: 1.32;
  }
  .skill-group strong {
    color: #0f172a;
    font-weight: 700;
  }
  .skill-group span {
    color: #334155;
  }
  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 5px;
    margin-bottom: 1px;
    page-break-after: avoid;
  }
  .item-title {
    font-size: 9.6pt;
    font-weight: 700;
    color: #0f172a;
  }
  .item-meta {
    font-size: 8.5pt;
    font-style: italic;
    color: #64748b;
    white-space: nowrap;
  }
  .item-sub {
    font-size: 8.5pt;
    color: #475569;
    font-style: italic;
    margin-bottom: 3px;
  }
  ul {
    list-style-type: square;
    margin-left: 15px;
    margin-bottom: 3px;
  }
  li {
    font-size: 8.8pt;
    color: #334155;
    margin-bottom: 2px;
    line-height: 1.32;
    text-align: justify;
  }
  li strong {
    color: #0f172a;
  }
  a {
    color: #2563eb;
    text-decoration: none;
  }
</style>
</head>
<body>

<!-- PAGE 1: Header, Summary, Technical Skills, Professional Experience -->
<div class="header">
  <h1>Muhammad Shayan Ayub</h1>
  <div class="headline">Full Stack Developer | Backend Engineering | Cybersecurity</div>
  <div class="contact-bar">
    Pakistan · Open to International Relocation (Subject to Work Authorization) &nbsp;|&nbsp;
    Email: <a href="mailto:muhammadshayanayub@gmail.com">muhammadshayanayub@gmail.com</a> &nbsp;|&nbsp;
    Phone/WhatsApp: Available upon request<br>
    LinkedIn: <a href="https://www.linkedin.com/in/muhammad-shayan-ayub-31b8a524a/">linkedin.com/in/muhammad-shayan-ayub-31b8a524a</a> &nbsp;|&nbsp;
    GitHub: <a href="https://github.com/shayanayub92">github.com/shayanayub92</a>
  </div>
</div>

<div class="section-title">Professional Summary</div>
<p class="summary-text">
  Computer Science graduate and Full Stack Web Developer with professional experience developing web applications, integrating APIs, implementing authentication functionality, and building backend services. Experienced with Python, FastAPI, React.js, PostgreSQL, Docker, Redis, Celery, WebSockets, and Tailwind CSS. Practical cybersecurity background includes PCAP-based malware traffic investigation, HTTP security header analysis, OWASP Top 10 concepts, and hands-on laboratory exercises. Seeking international opportunities in full-stack engineering, backend development, or software engineering.
</p>

<div class="section-title">Technical Skills</div>
<div class="skill-group"><strong>Programming Languages:</strong> <span>Python, JavaScript (ES6+), C++, SQL, HTML5, CSS3, PHP</span></div>
<div class="skill-group"><strong>Backend &amp; API Engineering:</strong> <span>FastAPI, RESTful APIs, JWT Authentication &amp; Authorization, WebSockets, Celery, Microservices Patterns, AsyncIO</span></div>
<div class="skill-group"><strong>Frontend Development:</strong> <span>React.js, Tailwind CSS, Responsive Web Design, Component Architecture, State Management, API Integration</span></div>
<div class="skill-group"><strong>Databases &amp; Data Management:</strong> <span>PostgreSQL, MySQL, SQLite, Relational Modeling, Schema Optimization, pgAdmin</span></div>
<div class="skill-group"><strong>Caching &amp; Background Tasks:</strong> <span>Redis, Celery Task Queues</span></div>
<div class="skill-group"><strong>DevOps &amp; Infrastructure:</strong> <span>Docker, Git, GitHub, Linux (Debian/Kali), VS Code, Postman</span></div>
<div class="skill-group"><strong>Cybersecurity &amp; Network Analysis:</strong> <span>OWASP Top 10 Mitigation, HTTP Security Headers, Wireshark, PCAP Forensics, NetworkMiner, Nmap Fundamentals</span></div>
<div class="skill-group"><strong>Cloud Fundamentals:</strong> <span>Microsoft Azure Concepts (Governance, Cost Management, Monitoring, Security Fundamentals)</span></div>

<div class="section-title">Professional Experience</div>
<div class="item-header">
  <div class="item-title">Full Stack Web Developer — HexaForge</div>
  <div class="item-meta">June 2025 – Present | Pakistan</div>
</div>
<div class="item-sub">Collaborative, project-based engineering environment delivering full-stack products and backend APIs</div>
<ul>
  <li>Engineered full-stack web applications in an agile environment, bridging client interfaces with scalable backend infrastructure.</li>
  <li>Developed and maintained performant RESTful APIs and WebSocket endpoints using Python and FastAPI for asynchronous operations.</li>
  <li>Implemented secure token-based authentication (JWT) and authorization mechanisms across web application workflows.</li>
  <li>Structured, queried, and administered relational databases with PostgreSQL, optimizing schema designs and data integrity.</li>
  <li>Built responsive, component-driven user interfaces utilizing React.js and Tailwind CSS with cross-device compatibility.</li>
  <li>Containerized microservices and development workflows using Docker to ensure environment parity and reproducible deployments.</li>
  <li>Integrated Redis caching and Celery task queues to handle asynchronous background processing and improve system throughput.</li>
</ul>

<!-- PAGE 2: Projects, Cybersecurity, Certifications, Education -->
<div class="section-title page-break">Selected Software Development Projects</div>

<div class="item-header">
  <div class="item-title">Digital Assets Marketplace</div>
  <div class="item-meta">React.js, FastAPI, PostgreSQL, Docker</div>
</div>
<ul>
  <li>Engineered a decoupled full-stack digital asset platform designed for listing, catalog discovery, and transactional asset workflows.</li>
  <li>Designed modular backend services with FastAPI, enforcing schema validation, role access, and relational constraints in PostgreSQL.</li>
  <li>Containerized frontend and backend services using Docker, facilitating multi-container local orchestration and deployment consistency.</li>
</ul>

<div class="item-header">
  <div class="item-title">Student Issue Management System</div>
  <div class="item-meta">Python, FastAPI, JavaScript, PostgreSQL | <a href="https://github.com/shayanayub92/Strike-Management-System">GitHub</a></div>
</div>
<ul>
  <li>Built an institutional ticket-tracking and issue resolution platform for university administrative and student workflows.</li>
  <li>Developed RESTful lifecycle endpoints in FastAPI to support issue logging, escalation tracking, and administrative resolution states.</li>
  <li>Integrated PostgreSQL relational schemas ensuring tamper-evident history, relational integrity, and reliable status persistence.</li>
</ul>

<div class="item-header">
  <div class="item-title">Islamabad NGO Donation Website</div>
  <div class="item-meta">PHP, MySQL, HTML5, CSS3, JavaScript | <a href="https://github.com/shayanayub92/donate">GitHub</a></div>
</div>
<ul>
  <li>Created a donation management web platform supporting transparent philanthropic tracking and orphan support campaigns.</li>
  <li>Implemented relational donor records, administrative contribution logs, and responsive contribution dashboards in MySQL and PHP.</li>
</ul>

<div class="item-header">
  <div class="item-title">Mini Blog Application</div>
  <div class="item-meta">JavaScript, HTML5, CSS3 | <a href="https://github.com/shayanayub92/Mini-Blog-App">GitHub</a></div>
</div>
<ul>
  <li>Engineered a responsive web application for creating, managing, and categorizing publishing content with client-side state handling.</li>
</ul>

<div class="section-title">Cybersecurity Experience &amp; Practical Training</div>

<div class="item-header">
  <div class="item-title">CyberDefenders — DanaBot Digital Forensics Lab</div>
  <div class="item-meta">April 2025 | <a href="https://cyberdefenders.org/blueteam-ctf-challenges/achievements/Shayan_Ayub/danabot/">Verification Record</a></div>
</div>
<ul>
  <li>Executed a comprehensive PCAP network traffic forensic investigation to isolate malware behavior and suspicious host interactions.</li>
  <li>Analyzed packet captures using Wireshark and NetworkMiner to reconstruct command-and-control (C2) communication patterns.</li>
  <li>Correlated extracted binary payloads and network hashes with threat intelligence sources (VirusTotal, ANY.RUN).</li>
</ul>

<div class="item-header">
  <div class="item-title">TryHackMe — Hands-On Cybersecurity Learning</div>
  <div class="item-meta">2025 | <a href="https://tryhackme.com/p/ShayanAyub101">Platform Profile</a></div>
</div>
<ul>
  <li>Completed 22+ interactive rooms covering ethical hacking concepts, network enumeration, privilege escalation, and web security.</li>
  <li>Achieved a reported platform ranking placing within the top 25% of active global learners.</li>
</ul>

<div class="item-header">
  <div class="item-title">National Cybersecurity Training Program — MUST</div>
  <div class="item-meta">2025 | Mirpur University of Science &amp; Technology</div>
</div>
<ul>
  <li>Completed practical training covering SOC fundamentals, defensive countermeasures, network traffic analysis, and security controls.</li>
</ul>

<div class="section-title">Certifications &amp; Continuous Learning</div>
<ul>
  <li><strong>HackerRank Skill Certifications (2025):</strong> Verified skill certifications in C++ Problem Solving and MySQL Database Operations (<a href="https://www.hackerrank.com/certificates/409a3827dfb5">Verification</a>).</li>
  <li><strong>Microsoft Learn Cloud Achievements (2024–2025):</strong> Completed foundational learning modules covering Azure Architecture, Governance, Compliance, Monitoring, Cost Management, and Cloud Security (<a href="https://learn.microsoft.com/api/achievements/share/en-us/MuhammadShayanAyub-9156/3AV6PA9H?sharingId=96457741495030CA">Verification</a>).</li>
</ul>

<div class="section-title">Education</div>
<div class="item-header">
  <div class="item-title">Bachelor of Science in Computer Science (BSCS)</div>
  <div class="item-meta">Graduation: October 2026</div>
</div>
<div class="item-sub">Mirpur University of Science and Technology (MUST), Pakistan &nbsp;|&nbsp; <em>Official DMC / transcript pending formal issuance</em></div>
<div style="font-size: 8.5pt; color: #475569; margin-top: 2px;">
  <strong>Core Disciplines:</strong> Data Structures &amp; Algorithms, Database Systems, Computer Networks, Information Security, Operating Systems &amp; Linux Architecture, Software Engineering Methodologies.
</div>

</body>
</html>
"""

CYBER_HTML_CONTENT = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Muhammad Shayan Ayub - Cybersecurity CV</title>
<style>
  @page {
    size: A4;
    margin: 12mm 15mm 12mm 15mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    color: #1e293b;
    background: #ffffff;
    font-size: 9.2pt;
    line-height: 1.34;
    -webkit-print-color-adjust: exact;
  }
  .header {
    margin-bottom: 8px;
    padding-bottom: 5px;
    border-bottom: 1.5px solid #0f172a;
  }
  h1 {
    font-size: 18pt;
    font-weight: 800;
    letter-spacing: -0.2px;
    color: #0f172a;
    text-transform: uppercase;
    margin-bottom: 2px;
  }
  .headline {
    font-size: 10.2pt;
    font-weight: 700;
    color: #0e7490;
    margin-bottom: 3px;
  }
  .contact-bar {
    font-size: 8.5pt;
    color: #475569;
    line-height: 1.35;
  }
  .contact-bar a {
    color: #0284c7;
    text-decoration: none;
  }
  .section-title {
    font-size: 10.2pt;
    font-weight: 800;
    color: #0f172a;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    margin-top: 9px;
    margin-bottom: 4px;
    padding-bottom: 2px;
    border-bottom: 1px solid #94a3b8;
    page-break-after: avoid;
  }
  .page-break {
    page-break-before: always;
  }
  .summary-text {
    font-size: 9.1pt;
    color: #334155;
    line-height: 1.36;
    text-align: justify;
    margin-bottom: 5px;
  }
  .skill-group {
    margin-bottom: 2.5px;
    font-size: 8.9pt;
    line-height: 1.32;
  }
  .skill-group strong {
    color: #0f172a;
    font-weight: 700;
  }
  .skill-group span {
    color: #334155;
  }
  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 5px;
    margin-bottom: 1px;
    page-break-after: avoid;
  }
  .item-title {
    font-size: 9.6pt;
    font-weight: 700;
    color: #0f172a;
  }
  .item-meta {
    font-size: 8.5pt;
    font-style: italic;
    color: #64748b;
    white-space: nowrap;
  }
  .item-sub {
    font-size: 8.5pt;
    color: #475569;
    font-style: italic;
    margin-bottom: 3px;
  }
  ul {
    list-style-type: square;
    margin-left: 15px;
    margin-bottom: 3px;
  }
  li {
    font-size: 8.8pt;
    color: #334155;
    margin-bottom: 2px;
    line-height: 1.32;
    text-align: justify;
  }
  li strong {
    color: #0f172a;
  }
  a {
    color: #0284c7;
    text-decoration: none;
  }
</style>
</head>
<body>

<!-- PAGE 1: Header, Summary, Cybersecurity Skills, Cybersecurity Experience & Labs -->
<div class="header">
  <h1>Muhammad Shayan Ayub</h1>
  <div class="headline">Cybersecurity Analyst | Application Security | Backend Engineering</div>
  <div class="contact-bar">
    Pakistan · Open to International Relocation (Subject to Work Authorization) &nbsp;|&nbsp;
    Email: <a href="mailto:muhammadshayanayub@gmail.com">muhammadshayanayub@gmail.com</a> &nbsp;|&nbsp;
    Phone/WhatsApp: Available upon request<br>
    LinkedIn: <a href="https://www.linkedin.com/in/muhammad-shayan-ayub-31b8a524a/">linkedin.com/in/muhammad-shayan-ayub-31b8a524a</a> &nbsp;|&nbsp;
    GitHub: <a href="https://github.com/shayanayub92">github.com/shayanayub92</a>
  </div>
</div>

<div class="section-title">Professional Summary</div>
<p class="summary-text">
  Computer Science graduate and Developer with practical hands-on experience in cybersecurity investigations, network traffic analysis, and secure application development. Proven background in PCAP-based malware forensic analysis (DanaBot investigation using Wireshark and NetworkMiner), HTTP security header evaluation, OWASP Top 10 vulnerability remediation, and ethical hacking fundamentals (Top 25% ranking across 22+ TryHackMe rooms). Complemented by professional full-stack development experience building authenticated backend services and APIs using Python, FastAPI, PostgreSQL, and Docker. Seeking entry-level cybersecurity, SOC analyst, or application security roles.
</p>

<div class="section-title">Cybersecurity &amp; Technical Skills</div>
<div class="skill-group"><strong>Cybersecurity &amp; Network Analysis:</strong> <span>OWASP Top 10 Mitigation, HTTP Security Headers, Wireshark, PCAP Network Forensics, NetworkMiner, Nmap, Malware Traffic Analysis, C2 Identification, Threat Intelligence (VirusTotal, ANY.RUN)</span></div>
<div class="skill-group"><strong>Application Security &amp; Backend:</strong> <span>Secure API Design, JWT Authentication, Password Hashing, Role-Based Access Control (RBAC), FastAPI, Python, WebSockets</span></div>
<div class="skill-group"><strong>Cloud Security &amp; Infrastructure:</strong> <span>Microsoft Azure Security Concepts, Cloud Governance, Monitoring &amp; Telemetry, Docker Container Security, Linux (Debian, Kali)</span></div>
<div class="skill-group"><strong>Databases &amp; Data Integrity:</strong> <span>PostgreSQL, MySQL, SQLite, Relational Modeling, pgAdmin</span></div>
<div class="skill-group"><strong>Languages &amp; Scripting:</strong> <span>Python, JavaScript, C++, SQL, Bash Basics, HTML5, CSS3, PHP</span></div>
<div class="skill-group"><strong>DevOps &amp; Development Tools:</strong> <span>Git, GitHub, Docker, Postman, VS Code</span></div>

<div class="section-title">Cybersecurity Experience &amp; Practical Training</div>

<div class="item-header">
  <div class="item-title">CyberDefenders — DanaBot Digital Forensics Lab</div>
  <div class="item-meta">April 2025 | <a href="https://cyberdefenders.org/blueteam-ctf-challenges/achievements/Shayan_Ayub/danabot/">Verification Record</a></div>
</div>
<ul>
  <li>Executed an in-depth PCAP-based digital forensics investigation into a suspected DanaBot malware infection.</li>
  <li>Analyzed packet captures using Wireshark and NetworkMiner to trace malicious TCP/HTTP streams and uncover command-and-control (C2) servers.</li>
  <li>Extracted embedded payloads and malicious artifacts, correlating indicators of compromise (IOCs) across VirusTotal and ANY.RUN.</li>
  <li>Documented findings, forensic timelines, and evidence-based remediation recommendations.</li>
</ul>

<div class="item-header">
  <div class="item-title">TryHackMe — Hands-On Cybersecurity Learning</div>
  <div class="item-meta">2025 | <a href="https://tryhackme.com/p/ShayanAyub101">Platform Profile</a></div>
</div>
<ul>
  <li>Completed 22+ interactive security labs covering penetration testing methodology, network enumeration, privilege escalation, and web security.</li>
  <li>Demonstrated consistent problem-solving in defensive and offensive techniques, achieving a ranking in the top 25% of active global learners.</li>
</ul>

<div class="item-header">
  <div class="item-title">National Cybersecurity Training Program — MUST</div>
  <div class="item-meta">2025 | Mirpur University of Science &amp; Technology</div>
</div>
<ul>
  <li>Completed university-sponsored training exploring SOC operations, incident response workflows, ethical hacking concepts, and defensive security architectures.</li>
</ul>

<!-- PAGE 2: Experience, Projects, Certifications, Education -->
<div class="section-title page-break">Professional Experience</div>
<div class="item-header">
  <div class="item-title">Full Stack Web Developer — HexaForge</div>
  <div class="item-meta">June 2025 – Present | Pakistan</div>
</div>
<div class="item-sub">Collaborative environment engineering secure web applications and robust backend services</div>
<ul>
  <li>Developed full-stack web applications adhering to secure coding best practices, least privilege principles, and modular architecture.</li>
  <li>Implemented token-based authentication (JWT) and authorization guards in Python and FastAPI to safeguard backend API endpoints against unauthorized access.</li>
  <li>Administered PostgreSQL databases, designing relational constraints and schema protections to prevent SQL injection and ensure transactional integrity.</li>
  <li>Containerized application environments using Docker to enforce reproducible dependencies and isolated execution boundaries.</li>
  <li>Utilized Redis and Celery for background processing, decoupling heavy workloads from synchronous API threads.</li>
  <li>Built responsive, accessible frontend interfaces in React.js and Tailwind CSS with sanitized user inputs.</li>
</ul>

<div class="section-title">Selected Software &amp; Security Projects</div>

<div class="item-header">
  <div class="item-title">Digital Assets Marketplace (Secure Full-Stack Platform)</div>
  <div class="item-meta">React.js, FastAPI, PostgreSQL, Docker</div>
</div>
<ul>
  <li>Engineered a decoupled digital asset platform featuring authenticated user flows and catalog management.</li>
  <li>Implemented robust backend API validation and parameterized database queries with FastAPI and PostgreSQL to mitigate injection attacks.</li>
  <li>Containerized multi-service deployment with Docker for controlled container isolation.</li>
</ul>

<div class="item-header">
  <div class="item-title">Student Issue Management System</div>
  <div class="item-meta">Python, FastAPI, JavaScript, PostgreSQL | <a href="https://github.com/shayanayub92/Strike-Management-System">GitHub</a></div>
</div>
<ul>
  <li>Built a university ticket-tracking system featuring structured workflow states and audit logs.</li>
  <li>Enforced backend authorization rules to ensure students and administrators only access permissible data.</li>
  <li>Structured relational records in PostgreSQL to ensure data integrity and traceability throughout the issue lifecycle.</li>
</ul>

<div class="item-header">
  <div class="item-title">Islamabad NGO Donation Website</div>
  <div class="item-meta">PHP, MySQL, HTML5, CSS3, JavaScript | <a href="https://github.com/shayanayub92/donate">GitHub</a></div>
</div>
<ul>
  <li>Developed an NGO donation portal providing transparent contribution logging and campaign tracking.</li>
  <li>Applied input validation and structured relational database operations in MySQL to ensure accountability.</li>
</ul>

<div class="section-title">Certifications &amp; Technical Learning</div>
<ul>
  <li><strong>Microsoft Learn Cloud &amp; Security Achievements (2024–2025):</strong> Completed curriculum modules covering cloud security fundamentals, governance, compliance, monitoring, and infrastructure security controls (<a href="https://learn.microsoft.com/api/achievements/share/en-us/MuhammadShayanAyub-9156/3AV6PA9H?sharingId=96457741495030CA">Verification</a>).</li>
  <li><strong>HackerRank Skill Certifications (2025):</strong> Verified problem-solving credentials in C++ and MySQL relational database management (<a href="https://www.hackerrank.com/certificates/409a3827dfb5">Verification</a>).</li>
</ul>

<div class="section-title">Education</div>
<div class="item-header">
  <div class="item-title">Bachelor of Science in Computer Science (BSCS)</div>
  <div class="item-meta">Graduation: October 2026</div>
</div>
<div class="item-sub">Mirpur University of Science and Technology (MUST), Pakistan &nbsp;|&nbsp; <em>Official DMC / transcript pending formal issuance</em></div>
<div style="font-size: 8.5pt; color: #475569; margin-top: 2px;">
  <strong>Relevant Coursework:</strong> Information &amp; Network Security, Computer Networks, Operating Systems, Database Systems, Data Structures &amp; Algorithms, Software Engineering.
</div>

</body>
</html>
"""

def generate_pdf_from_html(html_path, pdf_path):
    cmd = [
        EDGE_EXE,
        "--headless",
        "--disable-gpu",
        "--no-pdf-header-footer",
        "--run-all-compositor-stages-before-draw",
        f"--print-to-pdf={pdf_path}",
        html_path
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error printing {html_path}: {result.stderr}")
    else:
        print(f"Clean PDF generated (no browser headers/footers): {pdf_path}")

if __name__ == "__main__":
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    os.makedirs(PUBLIC_DIR, exist_ok=True)
    
    master_html = os.path.join(OUTPUT_DIR, "Muhammad_Shayan_Ayub_CV.html")
    with open(master_html, "w", encoding="utf-8") as f:
        f.write(MASTER_HTML_CONTENT)
        
    cyber_html = os.path.join(OUTPUT_DIR, "Muhammad_Shayan_Ayub_Cybersecurity_CV.html")
    with open(cyber_html, "w", encoding="utf-8") as f:
        f.write(CYBER_HTML_CONTENT)
        
    master_pdf = os.path.join(OUTPUT_DIR, "Muhammad_Shayan_Ayub_CV.pdf")
    cyber_pdf = os.path.join(OUTPUT_DIR, "Muhammad_Shayan_Ayub_Cybersecurity_CV.pdf")
    
    generate_pdf_from_html(master_html, master_pdf)
    generate_pdf_from_html(cyber_html, cyber_pdf)
    
    # Also place master CV directly in public/ directory for instant portfolio website downloads
    public_pdf = os.path.join(PUBLIC_DIR, "Muhammad_Shayan_Ayub_CV.pdf")
    shutil.copyfile(master_pdf, public_pdf)
    print(f"Copied Master PDF to public directory: {public_pdf}")
