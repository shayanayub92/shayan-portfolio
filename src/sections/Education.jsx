import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, AlertCircle, CheckCircle2 } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="education"
      ref={ref}
      aria-label="Academic Background and Education"
      className="relative py-28 bg-[#0a0a0a] overflow-hidden border-t border-white/5"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-block text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            // Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Formal <span className="gradient-text-cyan">Education</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Academic foundation in computer science, software design principles, systems architecture, and information security.
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="rounded-2xl bg-[#0f141c] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden"
        >
          {/* Top colored strip */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-violet-600" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/10">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {EDUCATION.degree}
                </h3>
                <p className="text-base font-semibold text-cyan-400 mt-0.5">
                  {EDUCATION.institution}
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-gray-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-blue-400" />
                    {EDUCATION.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-cyan-400" />
                    Graduation: {EDUCATION.graduationDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Accurate Document Status Badge */}
            <div className="flex flex-col items-start lg:items-end">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30">
                <AlertCircle size={14} className="text-amber-400" />
                {EDUCATION.transcriptStatus}
              </span>
              <span className="text-[11px] text-gray-400 mt-1.5 max-w-xs text-left lg:text-right">
                {EDUCATION.statusNote}
              </span>
            </div>
          </div>

          {/* Core Curriculum & Disciplines */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
              <BookOpen size={14} className="text-blue-400" />
              Core Academic Disciplines & Coursework
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {EDUCATION.relevantCourses.map((course) => (
                <div
                  key={course}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-300"
                >
                  <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
