import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Cloud, Code, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="certifications"
      ref={ref}
      aria-label="Certifications and Continuous Learning"
      className="relative py-28 bg-[#0d1117] overflow-hidden border-t border-white/5"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-violet-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-block text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            // Verified Records
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Certifications & <span className="gradient-text-cyan">Continuous Learning</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Verified technical skill certifications and documented cloud learning modules, reflecting continuous professional development.
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl bg-[#161b22] border border-white/10 hover:border-blue-500/40 p-6 sm:p-8 shadow-xl flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {item.type}
                  </span>
                  <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                    <Calendar size={13} className="text-blue-400" />
                    {item.date}
                  </span>
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0 group-hover:text-cyan-300 transition-colors">
                    {item.issuer === 'HackerRank' ? <Code size={22} /> : <Cloud size={22} />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-gray-400 mt-0.5">
                      Issued by {item.issuer}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Topics / Modules Covered */}
                <div className="space-y-2 mb-8">
                  <span className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                    Core Topics & Concepts Covered:
                  </span>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {item.topics.map((topic) => (
                      <div
                        key={topic}
                        className="flex items-center gap-2 text-xs text-gray-300 p-2 rounded-lg bg-white/[0.02] border border-white/5"
                      >
                        <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link & Note */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                {item.verificationUrl ? (
                  <a
                    href={item.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs font-semibold transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={14} />
                  </a>
                ) : null}

                {item.note && (
                  <span className="text-[11px] text-gray-400 italic">
                    {item.note}
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

export default Certifications;
