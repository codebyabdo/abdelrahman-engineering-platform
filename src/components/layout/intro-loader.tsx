"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-intro-seen";
const MIN_DURATION = 1400;

export function IntroLoader() {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Show intro only once per session
    if (sessionStorage.getItem(STORAGE_KEY)) {
      return;
    }

    sessionStorage.setItem(STORAGE_KEY, "true");

    let cancelled = false;

    async function initialize() {
      setLoading(true);

      try {
        // Wait for fonts
        if ("fonts" in document) {
          await document.fonts.ready;
        }

        if (cancelled) return;

        setStep(1);

        await new Promise((resolve) =>
          setTimeout(resolve, MIN_DURATION * 0.35),
        );

        if (cancelled) return;

        setStep(2);

        await new Promise((resolve) =>
          setTimeout(resolve, MIN_DURATION * 0.35),
        );

        if (cancelled) return;

        setStep(3);

        await new Promise((resolve) => setTimeout(resolve, MIN_DURATION * 0.3));
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    initialize();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
          className="fixed inset-0 z-100 flex select-none flex-col items-center justify-center bg-[#06070a] bg-grid-pattern p-4 sm:p-6"
        >
          {/* Soft radial backdrop */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_55%)]" />

          <div className="relative z-10 flex w-full max-w-xl flex-col items-center text-center px-2 sm:px-0">
            {/* Logo & Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-300 sm:mb-8 sm:gap-3 sm:px-3.5"
            >
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-500 sm:h-2 sm:w-2" />
              </span>

              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 sm:text-xs">
                SYS.BOOT // V2026.8
              </span>
            </motion.div>

            {/* Central Logo Motif */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: step >= 1 ? 1 : 0,
                scale: step >= 1 ? 1 : 0.8,
              }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-500/30 bg-linear-to-br from-slate-900 via-slate-950 to-slate-900 shadow-[0_0_30px_rgba(56,189,248,0.15)] sm:mb-6 sm:h-16 sm:w-16"
            >
              <span className="font-mono text-lg font-bold tracking-tighter text-sky-400 sm:text-xl">
                &lt;AA /&gt;
              </span>
            </motion.div>

            {/* Headline Reveal */}
            <div className="flex h-14 items-center justify-center overflow-hidden sm:h-16">
              <AnimatePresence mode="wait">
                {step >= 1 && (
                  <motion.div
                    key="headline"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
                    }}
                    className="space-y-0.5 sm:space-y-1"
                  >
                    <h1 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl md:text-3xl">
                      ABD EL-RAHMAN ADEL
                    </h1>

                    <p className="font-mono text-[10px] uppercase tracking-widest text-sky-400/90 sm:text-xs md:text-sm">
                      Senior Frontend Engineer & Design Architect
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Engineering Pulse */}
            <div className="mt-6 flex h-6 items-center gap-0.5 sm:mt-8 sm:h-8 sm:gap-1">
              {[0.4, 0.8, 1, 0.6, 0.9, 0.5, 0.7, 1, 0.4].map(
                (height, index) => (
                  <motion.span
                    key={index}
                    initial={{ height: 3 }}
                    animate={{
                      height: step >= 2 ? height * 20 : 3,
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    className="w-0.5 rounded-full bg-sky-400/60 sm:w-1"
                  />
                ),
              )}
            </div>

            {/* Status */}
            <div className="mt-4 font-mono text-[9px] tracking-wider text-slate-500 sm:mt-6 sm:text-[11px]">
              {step === 0 && "INITIALIZING SYSTEM THREADS..."}
              {step === 1 && "LOADING COMPONENT SYSTEM & TOKENS..."}
              {step === 2 && "VERIFYING PRODUCTION AGENTS & ROUTER..."}
              {step >= 3 && "READY. COMPOSING PORTFOLIO..."}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
