import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '../context/LoadingContext';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const { isLoading, setIsLoading } = useLoading();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setIsLoading(false), 350);
            return 100;
          }
          return prev + Math.floor(Math.random() * 22) + 10;
        });
      }, 120);

      return () => clearInterval(interval);
    }
  }, [isLoading, setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center"
        >
          {/* Subtle tech background gradient */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
            <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-[90px]" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            {/* Monogram / Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 via-violet-600/20 to-cyan-500/20 border border-white/10 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                <span className="font-mono text-xl font-bold tracking-wider text-white">MSA</span>
              </div>
              <h2 className="text-sm font-semibold tracking-[0.25em] text-gray-400 uppercase">
                Muhammad Shayan Ayub
              </h2>
            </motion.div>

            {/* Progress bar */}
            <div className="w-52 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>

            {/* Percentage & Status */}
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Initializing Portfolio environment ({Math.min(Math.round(progress), 100)}%)</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
