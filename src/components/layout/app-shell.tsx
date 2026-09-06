"use client";

import { AnimatePresence, motion } from "framer-motion";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "./navbar/navbar";
import { DialogProvider } from "@/providers/dialog-provider";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <DialogProvider>
      <div className="min-h-screen bg-[#050505] text-white">
        <Navbar />

        <main id="main-content" className="min-h-screen">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </DialogProvider>
  );
}