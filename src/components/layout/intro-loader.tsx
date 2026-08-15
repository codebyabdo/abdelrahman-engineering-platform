"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FadeUp } from "@/components/animations/motion";

const STORAGE_KEY = "portfolio-intro-seen";
const MIN_DURATION = 2000;

export function IntroLoader() {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if (sessionStorage.getItem(STORAGE_KEY)) {
      return;
    }

    sessionStorage.setItem(STORAGE_KEY, "true");

    let cancelled = false;

    async function initialize() {
      setLoading(true);

      try {
        if ("fonts" in document) {
          await document.fonts.ready;
        }

        if (cancelled) return;
        setStep(1);

        await new Promise((resolve) =>
          setTimeout(resolve, MIN_DURATION * 0.35)
        );

        if (cancelled) return;
        setStep(2);

        await new Promise((resolve) =>
          setTimeout(resolve, MIN_DURATION * 0.35)
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
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-100 flex select-none flex-col items-center justify-center bg-[#050505] p-4 sm:p-6"
        >
          {/* Grid Pattern from CSS */}
          <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20" />
          
          {/* Radial Glow Effects from CSS */}
          <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
          <div className="pointer-events-none absolute inset-0 bg-radial-glow-bottom" />

          {/* Subtle Glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
            <div className="h-100 w-100 rounded-full bg-blue-500/5 blur-[120px]" />
          </div>

          <div className="relative z-10 flex w-full max-w-sm flex-col items-center text-center px-2 sm:max-w-md">
            {/* Minimal Status */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 text-[10px] font-light tracking-[0.2em] text-white/20 sm:text-xs"
            >
              {step === 0 && "●"}
              {step === 1 && "●"}
              {step === 2 && "●"}
              {step >= 3 && "✦"}
            </motion.div>

            {/* Logo with Laser Border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: step >= 1 ? 1 : 0,
                scale: step >= 1 ? 1 : 0.7,
              }}
              transition={{
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="border-laser relative mb-5 rounded-full p-6"
            >
              <div className="relative">
                <span className="font-light text-4xl tracking-[0.15em] text-white/90 sm:text-5xl">
                  AA
                </span>
              </div>
            </motion.div>

            {/* Name with FadeUp Animation */}
            <div className="flex h-12 items-center justify-center overflow-hidden sm:h-14">
              <AnimatePresence mode="wait">
                {step >= 1 && (
                  <FadeUp delay={0.1} duration={0.5}>
                    <h1 className="text-base font-light tracking-[0.12em] text-white/80 sm:text-lg">
                      Abd El-Rahman Adel
                    </h1>
                  </FadeUp>
                )}
              </AnimatePresence>
            </div>

            {/* Title */}
            <div className="mt-1 h-5 overflow-hidden">
              <AnimatePresence mode="wait">
                {step >= 2 && (
                  <motion.p
                    initial={{ y: 8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-[10px] font-light tracking-[0.3em] text-white/30 sm:text-xs"
                  >
                    Frontend Engineer
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Progress Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: step >= 3 ? 60 : 0,
                opacity: step >= 3 ? 1 : 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-8 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent sm:mt-10"
            />

            {/* Status Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-4 text-[9px] font-light tracking-[0.15em] text-white/15 sm:mt-5 sm:text-[10px]"
            >
              {step === 0 && "initializing"}
              {step === 1 && "loading components"}
              {step === 2 && "building experience"}
              {step >= 3 && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-blue-400/50"
                >
                  ready
                </motion.span>
              )}
            </motion.div>

            {/* Version */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 3 ? 1 : 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-4 text-[8px] font-light tracking-[0.15em] text-white/10 sm:mt-5 sm:text-[9px]"
            >
              v2026
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}