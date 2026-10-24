import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useScrollTo } from '../hooks/useSmoothScroll';
import { Menu, X, Github, Linkedin, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollTo = useScrollTo();

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleNavClick = (id) => {
    scrollTo(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navbar Container */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="group flex items-center gap-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 p-[1.5px] overflow-hidden">
              <img
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div>
              <span className="block text-sm font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                M. SHAYAN AYUB
              </span>
              <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                Full Stack & Cyber
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className="text-xs font-medium text-gray-300 hover:text-white transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Github size={18} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="/Muhammad_Shayan_Ayub_CV.pdf"
              download="Muhammad_Shayan_Ayub_CV.pdf"
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-full hover:from-blue-500 hover:to-violet-500 transition-all shadow-md shadow-blue-600/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              title="Download Muhammad Shayan Ayub's CV"
            >
              <FileDown size={14} />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="/Muhammad_Shayan_Ayub_CV.pdf"
              download="Muhammad_Shayan_Ayub_CV.pdf"
              aria-label="Download CV"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"
            >
              <FileDown size={13} />
              <span>CV</span>
            </a>
            <button
              className="p-2 text-gray-300 hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.25 }}
          className="md:hidden overflow-hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10"
        >
          <div className="px-6 py-5 flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className="text-sm font-medium text-gray-300 hover:text-blue-400 py-1.5 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="flex items-center justify-between pt-4 mt-2 border-t border-white/10">
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
              </div>

              <a
                href="/Muhammad_Shayan_Ayub_CV.pdf"
                download="Muhammad_Shayan_Ayub_CV.pdf"
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-full"
              >
                <FileDown size={14} />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
};

export default Navbar;
