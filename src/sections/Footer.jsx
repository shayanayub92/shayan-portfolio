import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { useScrollTo } from '../hooks/useSmoothScroll';
import { PERSONAL_INFO } from '../data/portfolioData';

const Footer = () => {
  const scrollTo = useScrollTo();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Cybersecurity', id: 'cybersecurity' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="relative bg-[#07090e] border-t border-white/10 pt-16 pb-12 overflow-hidden text-gray-400">
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          {/* Identity Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 p-[1px]">
                <div className="w-full h-full bg-[#0a0a0a] rounded-[11px] flex items-center justify-center">
                  <span className="font-mono text-xs font-bold text-white">MSA</span>
                </div>
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

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Computer Science graduate specializing in scalable backend engineering, full-stack web applications, relational databases, and hands-on cybersecurity forensics.
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
              <MapPin size={13} className="text-blue-400" />
              <span>{PERSONAL_INFO.locationBadge}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider mb-4">
              Directory & Sections
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.id);
                  }}
                  className="hover:text-cyan-300 transition-colors py-0.5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider mb-4">
              Connect & Verify
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Github size={15} className="text-gray-400" />
                <span>github.com/shayanayub92</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin size={15} className="text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={15} className="text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>

            {/* Back to top */}
            <div className="pt-3">
              <button
                onClick={() => scrollTo('hero')}
                className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors group"
              >
                <span>Back to Top</span>
                <span className="p-1 rounded bg-white/5 border border-white/10 group-hover:border-blue-400 transition-colors">
                  <ArrowUp size={12} />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-gray-400 font-mono">
            <span>Built with React, Tailwind CSS, & Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
