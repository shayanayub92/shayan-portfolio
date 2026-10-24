import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ShieldAlert,
  Search,
  ExternalLink,
  CheckCircle2,
  Terminal,
  Activity,
  Award,
  BookOpen,
  Calendar
} from 'lucide-react';
import { CYBERSECURITY_LEARNING } from '../data/portfolioData';

const Cybersecurity = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="cybersecurity"
      ref={ref}
      aria-label="Cybersecurity Experience and Practical Learning"
      className="relative py-28 bg-[#0a0a0a] overflow-hidden border-t border-white/5"
    >
      {/* Background radial accent */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-block text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            // Practical Learning & Threat Analysis
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Cybersecurity <span className="gradient-text-cyan">Experience</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Hands-on learning, PCAP digital forensics investigation, threat analysis, and platform exercises. Presented authentically as practical training and applied lab investigation.
          </p>
        </motion.div>

        {/* Labs & Training Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {CYBERSECURITY_LEARNING.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl bg-[#0f141c] border border-white/10 hover:border-cyan-500/40 p-6 sm:p-7 shadow-xl flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {item.platform}
                  </span>
                  <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                    <Calendar size={12} className="text-blue-400" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-400 mb-5 leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Investigation Highlights */}
                <div className="space-y-2 mb-6">
                  {item.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tools Utilized */}
                <div className="mb-6">
                  <span className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2">
                    Tools & Methodologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verification Link or Note */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                {item.verificationUrl ? (
                  <a
                    href={item.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>View Achievement Record</span>
                    <ExternalLink size={13} />
                  </a>
                ) : (
                  <span className="text-xs text-gray-400 font-mono">
                    {item.note || 'Academic Training'}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cybersecurity;
