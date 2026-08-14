"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface ContactSuccessProps {
  onReset: () => void;
}

export function ContactSuccess({
  onReset,
}: ContactSuccessProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
        y: 10,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex min-h-105 flex-col items-center justify-center space-y-5 py-12 text-center"
    >
      {/* Success Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.15,
          duration: 0.45,
          type: "spring",
          stiffness: 180,
          damping: 15,
        }}
        className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
      >
        <CheckCircle2 className="h-8 w-8" />
      </motion.div>

      {/* Message */}
      <div className="space-y-3">
        <h3 className="text-2xl font-black uppercase tracking-tight text-white">
          Message Transmitted Successfully
        </h3>

        <p className="mx-auto max-w-md text-xs leading-relaxed text-white/60">
          Message received. Abd El-Rahman will review your
          inquiry and respond within 24 hours.
        </p>
      </div>

      {/* Reset */}
      <motion.button
        type="button"
        onClick={onReset}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-2.5 font-mono text-xs uppercase tracking-widest text-blue-400 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-600/10 hover:text-white"
      >
        Send Another Message
      </motion.button>
    </motion.div>
  );
}