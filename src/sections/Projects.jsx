import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  X,
  Code2,
  Database,
  Server,
  Layers,
  Sparkles,
  CheckCircle2,
  FolderGit2,
  ShieldCheck,
  Lock
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

// Visual header generator for project cards (No fake screenshots)
const ProjectVisual = ({ title, technologies, category }) => {
  return (
    <div className="h-44 w-full bg-gradient-to-br from-[#111827] via-[#0f172a] to-[#1e1b4b] border-b border-white/10 p-5 flex flex-col justify-between relative overflow-hidden group">
      {/* Subtle decorative grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      <div className="flex items-center justify-between relative z-10">
        <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-blue-500/10 text-cyan-300 border border-blue-500/20">
          {category}
        </span>
        <div className="flex items-center gap-1.5 text-gray-500 text-[11px] font-mono">
          <FolderGit2 size={13} className="text-gray-400" />
          <span>v1.0</span>
        </div>
      </div>

      <div className="relative z-10">
        <div className="font-mono text-xs text-blue-400 mb-1 flex items-center gap-1.5">
          <Code2 size={13} />
          <span>Architecture & Stack</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono text-gray-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-1.5 py-0.5 rounded">
              +{technologies.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const filterOptions = ['All', 'Full Stack', 'Web Application'];

  const filteredProjects =
    filter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(filter) || (filter === 'Full Stack' && p.category.includes('Full Stack')));

  return (
    <section
      id="projects"
      ref={ref}
      aria-label="Software Development Projects"
      className="relative py-28 bg-[#0d1117] overflow-hidden border-t border-white/5"
    >
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            // Technical Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured <span className="gradient-text-cyan">Projects</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Real software development projects demonstrating full-stack engineering, API architecture, database management, and structured issue resolution.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filter === opt
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col rounded-2xl overflow-hidden bg-[#161b22] border border-white/10 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 h-full"
            >
              {/* Card Visual Header */}
              <ProjectVisual
                title={project.title}
                technologies={project.technologies}
                category={project.category}
              />

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5 min-h-[48px]">
                    {project.description}
                  </p>

                  {/* Highlights preview */}
                  <div className="mb-5 space-y-1.5">
                    {project.highlights.slice(0, 2).map((h) => (
                      <div key={h} className="flex items-start gap-2 text-xs text-gray-400">
                        <CheckCircle2 size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-gray-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links (Only verified links are clickable) */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 hover:text-white transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github size={15} />
                        <span>Source Code</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                        <Lock size={13} />
                        <span>Private Repo</span>
                      </span>
                    )}

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    ) : null}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-blue-400 hover:text-cyan-300 transition-colors"
                  >
                    Details &rarr;
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#161b22] border border-white/15 p-6 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="mb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Technical Highlights */}
              <div className="mb-6">
                <h4 className="text-xs font-mono font-semibold uppercase text-gray-400 mb-3">
                  Architecture & Implementation Highlights
                </h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-gray-300"
                    >
                      <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-xs font-mono font-semibold uppercase text-gray-400 mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-blue-950/50 text-blue-300 border border-blue-800/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                {selectedProject.github ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-white text-dark-900 hover:bg-gray-100 transition-colors"
                  >
                    <Github size={15} />
                    <span>View Repository</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-gray-400 bg-white/5 rounded-lg border border-white/10">
                    <Lock size={13} />
                    <span>Private Repository / In Active Development</span>
                  </span>
                )}

                {selectedProject.demo ? (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors"
                  >
                    <ExternalLink size={15} />
                    <span>Live Deployment</span>
                  </a>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
