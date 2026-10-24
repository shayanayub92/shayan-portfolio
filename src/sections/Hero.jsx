import { motion } from 'framer-motion';
import {
  ArrowDown,
  FileDown,
  Github,
  Linkedin,
  MapPin,
  ShieldCheck,
  Server,
  Database,
  Terminal,
  Layers,
  Sparkles,
  ExternalLink,
  Mail
} from 'lucide-react';
import { useScrollTo } from '../hooks/useSmoothScroll';
import { PERSONAL_INFO } from '../data/portfolioData';

const Hero = () => {
  const scrollTo = useScrollTo();

  return (
    <section
      id="hero"
      aria-label="Introduction and Overview"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Gradients & Tech Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[110px]" />

        {/* Minimal grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left"
          >
            {/* Status & Relocation Badge */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-gray-300 flex items-center gap-1.5">
                <MapPin size={13} className="text-blue-400" />
                {PERSONAL_INFO.locationBadge}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              {PERSONAL_INFO.name}
            </h1>

            {/* Professional Headline */}
            <div className="text-xl sm:text-2xl font-semibold mb-6">
              <span className="gradient-text-cyan">
                {PERSONAL_INFO.headline}
              </span>
            </div>

            {/* Recruiter-friendly Authentic Introduction */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.heroIntro}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-violet-600 text-white font-medium text-sm hover:opacity-95 shadow-lg shadow-blue-600/25 transition-all transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>View My Projects</span>
                <ArrowDown size={16} />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 font-medium text-sm transition-all transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Mail size={16} className="text-blue-400" />
                <span>Contact Me</span>
              </button>

              <a
                href="/Muhammad_Shayan_Ayub_CV.pdf"
                download="Muhammad_Shayan_Ayub_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-dark-700 hover:bg-dark-600 text-gray-200 border border-white/10 font-medium text-sm transition-all transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <FileDown size={16} className="text-cyan-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Secondary Social Links & Quick Tags */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10">
              <span className="text-xs text-gray-400 uppercase tracking-wider font-mono">
                Connect Directly:
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gray-300 hover:text-white transition-colors"
              >
                <Github size={16} className="text-gray-400" />
                <span>GitHub</span>
                <ExternalLink size={12} className="text-gray-500" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={16} className="text-blue-400" />
                <span>LinkedIn</span>
                <ExternalLink size={12} className="text-gray-500" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={16} className="text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Picture & System Telemetry */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* DP Portrait Card */}
            <div className="relative flex flex-col items-center">
              {/* Decorative ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-cyan-400/20 to-violet-600/20 rounded-3xl blur-2xl -z-10" />

              <div className="relative group">
                {/* Gradient Ring Frame */}
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl p-[3px] bg-gradient-to-tr from-blue-500 via-cyan-400 to-violet-500 shadow-2xl shadow-blue-500/20">
                  <div className="w-full h-full rounded-[21px] overflow-hidden bg-[#0d1117] relative">
                    <img
                      src={PERSONAL_INFO.avatar}
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Subtle glass overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-60" />
                    
                    <div className="absolute bottom-3 left-3 right-3 text-center">
                      <p className="text-xs font-mono font-semibold text-white drop-shadow-md">
                        {PERSONAL_INFO.name}
                      </p>
                      <p className="text-[10px] font-mono text-cyan-300">
                        Full Stack & Security
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 1 - Top Left */}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="absolute -top-3 -left-4 px-3 py-1.5 rounded-xl bg-[#0f141c]/90 border border-blue-500/30 shadow-lg backdrop-blur-md flex items-center gap-2"
                >
                  <Server size={14} className="text-blue-400" />
                  <span className="text-[11px] font-mono font-semibold text-gray-200">
                    FastAPI · React
                  </span>
                </motion.div>

                {/* Floating Badge 2 - Bottom Right */}
                <motion.div
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="absolute -bottom-3 -right-4 px-3 py-1.5 rounded-xl bg-[#0f141c]/90 border border-cyan-500/30 shadow-lg backdrop-blur-md flex items-center gap-2"
                >
                  <ShieldCheck size={14} className="text-cyan-400" />
                  <span className="text-[11px] font-mono font-semibold text-gray-200">
                    Cybersecurity
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Architecture & Telemetry Terminal */}
            <div className="relative rounded-2xl border border-white/10 bg-[#0d1117]/90 shadow-2xl backdrop-blur-xl overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-gray-400">system-telemetry.sh</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-0.5 rounded border border-cyan-800/40">
                  <ShieldCheck size={13} />
                  <span>SECURE RUNTIME</span>
                </div>
              </div>

              {/* Terminal / System Status Body */}
              <div className="p-5 font-mono text-xs space-y-4">
                {/* Active Services */}
                <div>
                  <div className="text-gray-400 text-[11px] mb-1 flex items-center justify-between">
                    <span>// Core Engineering Stack</span>
                    <span className="text-emerald-400">HEALTH: OK</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-gray-200">
                    <div className="p-2 rounded bg-white/[0.03] border border-white/5 flex items-center gap-2">
                      <Server size={14} className="text-blue-400 shrink-0" />
                      <span>FastAPI + Python</span>
                    </div>
                    <div className="p-2 rounded bg-white/[0.03] border border-white/5 flex items-center gap-2">
                      <Layers size={14} className="text-cyan-400 shrink-0" />
                      <span>React.js + Tailwind</span>
                    </div>
                    <div className="p-2 rounded bg-white/[0.03] border border-white/5 flex items-center gap-2">
                      <Database size={14} className="text-violet-400 shrink-0" />
                      <span>PostgreSQL + Redis</span>
                    </div>
                    <div className="p-2 rounded bg-white/[0.03] border border-white/5 flex items-center gap-2">
                      <Terminal size={14} className="text-amber-400 shrink-0" />
                      <span>Docker + Celery</span>
                    </div>
                  </div>
                </div>

                {/* API & Route inspection */}
                <div className="pt-2 border-t border-white/10">
                  <div className="text-gray-400 text-[11px] mb-2 flex items-center gap-1.5">
                    <Sparkles size={12} className="text-blue-400" />
                    <span>REST & WebSocket Endpoints</span>
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex items-center justify-between p-1.5 rounded bg-black/40 border border-white/5">
                      <span className="text-emerald-400 font-bold">POST</span>
                      <span className="text-gray-300">/api/v1/auth/jwt-token</span>
                      <span className="text-gray-500">200 OK</span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 rounded bg-black/40 border border-white/5">
                      <span className="text-blue-400 font-bold">GET</span>
                      <span className="text-gray-300">/api/v1/assets/catalog</span>
                      <span className="text-gray-500">PostgreSQL</span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 rounded bg-black/40 border border-white/5">
                      <span className="text-violet-400 font-bold">WS</span>
                      <span className="text-gray-300">/ws/telemetry-stream</span>
                      <span className="text-gray-500">Redis Broker</span>
                    </div>
                  </div>
                </div>

                {/* Security Headers & Traffic Analysis */}
                <div className="pt-2 border-t border-white/10">
                  <div className="text-gray-400 text-[11px] mb-2">
                    // Security & Forensics Controls
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      OWASP Top 10 Mitigation
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      HTTP Security Headers
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-violet-500/10 text-violet-300 border border-violet-500/20">
                      PCAP Traffic Analysis
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      Wireshark Forensics
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
