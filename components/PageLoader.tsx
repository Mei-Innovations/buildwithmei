'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from '@/components/Logo';

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Only show loader on first visit — not on every page navigation
    const hasLoaded = sessionStorage.getItem('mei-loaded');
    if (hasLoaded) return;

    setIsLoading(true);
    const t = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('mei-loaded', '1');
    }, 900); // 900ms — enough to feel considered, not enough to frustrate
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B1020]"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="absolute w-36 h-36 rounded-full bg-brand-emerald/15 blur-3xl"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-16 h-16 mb-6"
            >
              <Logo className="w-full h-full drop-shadow-2xl" />
            </motion.div>
            <div className="w-36 h-[1.5px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.85, ease: "circOut" }}
                className="h-full bg-gradient-to-r from-transparent via-brand-emerald to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
