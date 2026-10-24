import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
  Wrench,
  ShieldAlert,
  Cloud,
  CheckCircle
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const categoryIcons = {
  'Programming Languages': Code2,
  'Frontend Development': Layout,
  'Backend Engineering': Server,
  'Databases': Database,
  'Caching & Background Processing': Cpu,
  'Development Tools & Infrastructure': Wrench,
  'Cybersecurity & Network Analysis': ShieldAlert,
  'Cloud Fundamentals': Cloud,
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      ref={ref}
      aria-label="Technical Skills and Core Competencies"
      className="relative py-28 bg-[#0d1117] overflow-hidden border-t border-white/5"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            // Core Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Technical <span className="gradient-text-cyan">Skills</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Grouped competencies covering full-stack software development, backend systems, database management, and hands-on cybersecurity analysis.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, index) => {
            const IconComponent = categoryIcons[cat.title] || Code2;

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-2xl p-6 bg-[#161b22]/90 border border-white/10 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/5">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <IconComponent size={18} />
                    </div>
                    <h3 className="text-sm font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills Pills */}
                  <ul className="space-y-2">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-xs text-gray-300 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70 group-hover:bg-cyan-300 shrink-0" />
                        <span className="group-hover:text-white transition-colors">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
