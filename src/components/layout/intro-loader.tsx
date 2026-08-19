"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { LogoBrand } from "../shared/logo-brand";

const STORAGE_KEY = "portfolio-intro-seen";
const MIN_DURATION = 2000;

export function IntroLoader() {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    if (sessionStorage.getItem(STORAGE_KEY)) {
      return;
    }

    sessionStorage.setItem(STORAGE_KEY, "true");

    let cancelled = false;

    const wait = (duration: number) =>
      new Promise<void>((resolve) => {
        setTimeout(resolve, duration);
      });

    async function initialize() {
      setLoading(true);

      try {
        /*
         * Step 0
         * Initializing
         */
        setStep(0);

        if ("fonts" in document) {
          await document.fonts.ready;
        }

        if (cancelled) return;

        /*
         * Step 1
         * Reveal Logo
         */
        setStep(1);

        await wait(MIN_DURATION * 0.35);

        if (cancelled) return;

        /*
         * Step 2
         * Reveal Role
         */
        setStep(2);

        await wait(MIN_DURATION * 0.35);

        if (cancelled) return;

        /*
         * Step 3
         * Ready
         */
        setStep(3);

        await wait(MIN_DURATION * 0.3);
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
          className="fixed inset-0 z-100 flex select-none flex-col items-center justify-center overflow-hidden bg-[#050505] p-4 sm:p-6"
        >
          {/* =====================================================
              Background
          ===================================================== */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-radial-glow"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-radial-glow-bottom"
          />

          {/* Central ambient glow */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: step >= 1 ? 1 : 0,
              scale: step >= 1 ? 1 : 0.7,
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/4 blur-[100px] sm:h-96 sm:w-96"
          />

          {/* =====================================================
              Main Content
          ===================================================== */}

          <div className="relative z-10 flex w-full max-w-sm flex-col items-center px-2 text-center sm:max-w-md">
            {/* =================================================
                Status Indicator
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-8 flex h-4 items-center justify-center font-mono text-[10px] tracking-[0.2em] text-white/20 sm:text-xs"
              aria-hidden="true"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={step >= 3 ? "ready" : "loading"}
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  {step >= 3 ? "✦" : "●"}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* =================================================
                Logo
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.72,
                y: 10,
              }}
              animate={{
                opacity: step >= 1 ? 1 : 0,
                scale: step >= 1 ? 1 : 0.72,
                y: step >= 1 ? 0 : 10,
              }}
              transition={{
                duration: 0.85,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="relative mb-6"
            >
              {/* Laser border */}
              <div className="border-laser relative rounded-full p-5 sm:p-6">
                {/* Inner glow */}
                <motion.div
                  aria-hidden="true"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: step >= 1 ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="pointer-events-none absolute inset-0 rounded-full bg-blue-500/4 blur-xl"
                />

                {/* Brand Logo */}
                <div className="relative flex items-center justify-center">
                  <LogoBrand />
                </div>
              </div>
            </motion.div>

            {/* =================================================
                Brand / Role
            ================================================= */}

            <div className="flex h-6 items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                {step >= 2 && (
                  <motion.p
                    key="frontend-engineer"
                    initial={{
                      opacity: 0,
                      y: 10,
                      filter: "blur(4px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-[10px] font-light uppercase tracking-[0.3em] text-white/35 sm:text-xs"
                  >
                    Frontend Engineer
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* =================================================
                Progress Line
            ================================================= */}

            <div className="mt-8 flex h-px w-16 items-center justify-center sm:mt-10">
              <motion.div
                initial={{
                  scaleX: 0,
                  opacity: 0,
                }}
                animate={{
                  scaleX: step >= 3 ? 1 : 0,
                  opacity: step >= 3 ? 1 : 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-px w-full origin-center bg-linear-to-r from-transparent via-blue-500/50 to-transparent"
              />
            </div>

            {/* =================================================
                Status Text
            ================================================= */}

            <div className="mt-4 flex h-4 items-center justify-center sm:mt-5">
              <AnimatePresence mode="wait">
                <motion.span
                  key={step >= 3 ? "ready" : step}
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -5,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className={`text-[9px] font-light tracking-[0.15em] sm:text-[10px] ${
                    step >= 3
                      ? "text-blue-400/60"
                      : "text-white/15"
                  }`}
                >
                  {step === 0 && "initializing"}
                  {step === 1 && "loading components"}
                  {step === 2 && "building experience"}
                  {step >= 3 && "ready"}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* =================================================
                Version
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 5,
              }}
              animate={{
                opacity: step >= 3 ? 1 : 0,
                y: step >= 3 ? 0 : 5,
              }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              className="mt-4 font-mono text-[8px] font-light tracking-[0.15em] text-white/10 sm:mt-5 sm:text-[9px]"
            >
              v2026
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}