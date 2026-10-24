import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code,
  Shield,
  Database,
  Server,
  Globe,
  GraduationCap,
  CheckCircle2,
  Lock,
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const corePillars = [
    {
      icon: Server,
      title: 'Backend Engineering & APIs',
      description:
        'Architecting resilient backend systems with Python and FastAPI, developing REST APIs, WebSockets, background tasks with Celery, and caching via Redis.',
    },
    {
      icon: Code,
      title: 'Full Stack Frontend Integration',
      description:
        'Building responsive, modular frontend interfaces in React.js and Tailwind CSS with clean state flows and direct backend API integrations.',
    },
    {
      icon: Database,
      title: 'Database Architecture',
      description:
        'Structuring relational schemas, queries, and migrations using PostgreSQL, MySQL, and SQLite with database administration tooling.',
    },
    {
      icon: Shield,
      title: 'Application & Network Security',
      description:
        'Practical cybersecurity grounding in HTTP security headers, OWASP Top 10 concepts, defensive countermeasures, and Wireshark PCAP traffic analysis.',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      aria-label="About Muhammad Shayan Ayub"
      className="relative py-28 bg-[#0a0a0a] overflow-hidden border-t border-white/5"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="inline-block text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            // Profile & Focus
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text-cyan">Muhammad Shayan Ayub</span>
          </h2>
        </motion.div>

        {/* Two-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Professional Summary Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-7 space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f141c] border border-white/10 shadow-xl space-y-5">
              <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                <div className="w-14 h-14 rounded-2xl p-[2px] bg-gradient-to-br from-blue-500 to-cyan-400 shrink-0 overflow-hidden shadow-lg shadow-blue-500/20">
                  <img
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top rounded-[14px]"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono">
                    {PERSONAL_INFO.headline}
                  </p>
                </div>
              </div>

              <p className="text-white font-medium">
                I am a Computer Science graduate from Mirpur University of Science and Technology (MUST), Pakistan, with professional experience in full-stack web development. I work with React.js, Python, FastAPI, PostgreSQL, Docker, Redis, Celery, WebSockets, and Tailwind CSS to develop web applications and backend functionality.
              </p>
              <p className="text-gray-300">
                Alongside software engineering, I have pursued hands-on cybersecurity learning involving HTTP security headers, OWASP Top 10 concepts, simulated attack-and-defense exercises, and PCAP-based malware traffic investigation.
              </p>
              <p className="text-gray-300">
                I am interested in building secure, reliable, and maintainable software systems and am seeking international opportunities in full-stack development, backend engineering, or entry-level cybersecurity.
              </p>
            </div>

            {/* Quick Fact Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="block text-xs font-mono text-gray-400 mb-1">Location</span>
                <p className="text-sm font-semibold text-white">Pakistan</p>
                <span className="text-[11px] text-cyan-400">Open to Relocation</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="block text-xs font-mono text-gray-400 mb-1">Education</span>
                <p className="text-sm font-semibold text-white">BS Computer Science</p>
                <span className="text-[11px] text-gray-400">MUST, Pakistan</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 col-span-2 sm:col-span-1">
                <span className="block text-xs font-mono text-gray-400 mb-1">Target Roles</span>
                <p className="text-sm font-semibold text-white">Full Stack / Backend / Cyber</p>
                <span className="text-[11px] text-emerald-400">Available</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Technical Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="lg:col-span-5 space-y-4"
          >
            {corePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-5 rounded-xl bg-[#0f141c]/90 border border-white/10 hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <pillar.icon size={20} className="text-blue-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1.5 group-hover:text-blue-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
