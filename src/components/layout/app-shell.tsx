"use client";

import { AnimatePresence, motion } from "framer-motion";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "./navbar/navbar";
import { DialogProvider } from "@/providers/dialog-provider";
import { IntroLoader } from "./intro-loader";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <DialogProvider>
      <IntroLoader />
      <div className="min-h-screen bg-[#050505] text-white">
        {/* Global Navigation */}
        <Navbar />

        {/* Page Content */}
        <main id="main-content" className="min-h-screen">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </DialogProvider>
  );
}
