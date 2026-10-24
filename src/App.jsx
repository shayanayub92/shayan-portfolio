import { LoadingProvider, useLoading } from './context/LoadingContext';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Cybersecurity from './sections/Cybersecurity';
import Certifications from './sections/Certifications';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { motion } from 'framer-motion';

// Main App Content Container
const AppContent = () => {
  const { isLoading } = useLoading();

  // Initialize Lenis smooth scrolling
  useSmoothScroll();

  return (
    <>
      {/* Custom Cursor - desktop pointer only */}
      <CustomCursor />

      {/* Loading Screen */}
      <LoadingScreen />

      {/* Main Content - rendered after initial loading sequence */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-between"
        >
          <Navbar />
          <main id="main-content">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Cybersecurity />
            <Certifications />
            <Education />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
};

const App = () => {
  return (
    <LoadingProvider>
      <AppContent />
    </LoadingProvider>
  );
};

export default App;
