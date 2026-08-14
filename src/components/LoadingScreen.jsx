import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#050816] text-white px-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Cyber glowing logo icon */}
          <motion.div
            className="w-20 h-20 mb-8 relative flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/30 animate-pulse" />
            <div className="absolute inset-2 rounded-xl border-2 border-purple-500/50 border-t-cyan-400" />
            <span className="font-bold text-2xl tracking-widest text-gradient">H</span>
          </motion.div>

          <h2 className="text-xl md:text-2xl font-semibold tracking-wider mb-2 text-slate-200">
            HIDAYATHULLAH
          </h2>
          <p className="text-xs md:text-sm text-cyan-400 tracking-widest uppercase mb-8">
            Initializing Cyber 3D Workspace
          </p>

          {/* Progress Bar Container */}
          <div className="w-64 md:w-80 h-1.5 bg-slate-800/80 rounded-full overflow-hidden relative border border-slate-700/50 mb-4">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full shadow-[0_0_12px_#00f0ff]"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>

          <div className="flex items-center justify-between w-64 md:w-80 text-xs font-mono text-slate-400">
            <span>LOADING ASSETS</span>
            <span className="text-cyan-400 font-bold">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
