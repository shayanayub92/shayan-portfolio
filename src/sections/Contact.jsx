import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct mailto URL to launch the user's default email client transparently
    const subjectLine = encodeURIComponent(
      formData.subject.trim() || `Inquiry from ${formData.name.trim() || 'Portfolio Visitor'}`
    );
    const bodyContent = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subjectLine}&body=${bodyContent}`;

    window.location.href = mailtoUrl;

    setStatusMessage('Opening your email client to send your message directly...');
    setTimeout(() => setStatusMessage(''), 8000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      aria-label="Contact and Inquiries"
      className="relative py-28 bg-[#0d1117] overflow-hidden border-t border-white/5"
    >
      {/* Background accents */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            // Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Build <span className="gradient-text-cyan">Something Meaningful.</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            I am open to opportunities in full-stack development, backend engineering, and entry-level cybersecurity, including international opportunities subject to work authorization.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-2xl bg-[#161b22] border border-white/10 p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Direct Contact Channels
              </h3>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                Whether you have an engineering opening, a project collaboration, or technical questions, feel free to reach out directly.
              </p>

              {/* Primary Email Card with Quick Copy */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                    <Mail size={14} className="text-cyan-400" />
                    Direct Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-blue-400 hover:text-cyan-300 transition-colors"
                    title="Copy Email Address"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-blue-400 transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Location & Relocation */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-8">
                <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5 mb-1">
                  <MapPin size={14} className="text-blue-400" />
                  Location & Relocation
                </span>
                <p className="text-sm font-semibold text-white">
                  {PERSONAL_INFO.location}
                </p>
                <p className="text-xs text-cyan-400 mt-1">
                  {PERSONAL_INFO.careerObjective}
                </p>
              </div>

              {/* Professional Profiles */}
              <div>
                <span className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-3">
                  Verified Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/10 hover:border-blue-500/40 text-gray-300 hover:text-white transition-all text-xs font-medium"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin size={16} className="text-blue-400" />
                      LinkedIn
                    </span>
                    <ExternalLink size={13} className="text-gray-500" />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/10 hover:border-blue-500/40 text-gray-300 hover:text-white transition-all text-xs font-medium"
                  >
                    <span className="flex items-center gap-2">
                      <Github size={16} className="text-gray-300" />
                      GitHub
                    </span>
                    <ExternalLink size={13} className="text-gray-500" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Preserved & Improved Email Message Composer */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl bg-[#161b22] border border-white/10 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Prepares a formatted email dispatch directly to {PERSONAL_INFO.email}
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <MessageSquare size={18} />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-gray-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Alex Johnson"
                      className="w-full px-3.5 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-gray-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g., alex@company.com"
                      className="w-full px-3.5 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-gray-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g., Software Engineering Opportunity / Discussion"
                    className="w-full px-3.5 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-gray-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe the opportunity, technical challenge, or project details..."
                    className="w-full px-3.5 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit / Dispatch Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-violet-600 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-blue-600/25 transition-all transform active:scale-95"
                >
                  <span>Dispatch via Email Client</span>
                  <Send size={15} />
                </button>

                {statusMessage && (
                  <p className="text-center text-xs text-cyan-300 pt-2 animate-fade-in font-mono">
                    {statusMessage}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
