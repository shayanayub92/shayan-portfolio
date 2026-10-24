import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="experience"
      ref={ref}
      aria-label="Professional Work Experience"
      className="relative py-28 bg-[#0a0a0a] overflow-hidden border-t border-white/5"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="inline-block text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            // Employment History
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="gradient-text-cyan">Experience</span>
          </h2>
          <p className="mt-2 text-gray-300 text-sm sm:text-base max-w-2xl">
            Hands-on software development experience delivering full-stack solutions, backend APIs, and database-driven features.
          </p>
        </motion.div>

        {/* Experience Timeline / Cards */}
        <div className="space-y-8">
          {WORK_EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="rounded-2xl bg-[#0f141c] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500" />

              {/* Role Header Info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <Briefcase size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-base font-medium text-cyan-400">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-gray-300">
                    <Calendar size={13} className="text-blue-400" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    {exp.badge}
                  </span>
                </div>
              </div>

              {/* Role Summary */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                {exp.description}
              </p>

              {/* Responsibilities List */}
              <div className="mb-8">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
                  <Layers size={14} className="text-blue-400" />
                  Key Responsibilities & Deliverables
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp) => (
                    <div
                      key={resp}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-300 leading-relaxed"
                    >
                      <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Utilized */}
              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400 mb-3">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-blue-950/40 text-blue-300 border border-blue-800/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
