"use client";

import {
  ExternalLink,
  Link,
} from "lucide-react";
import { motion } from "framer-motion";

import { PERSONAL_INFO } from "@/lib/constants/personal-data";

export function ContactSocialLinks() {
  return (
    <div className="flex flex-wrap gap-2">
      <SocialLink
        href={PERSONAL_INFO.github}
        label="GitHub"
      />

      <SocialLink
        href={PERSONAL_INFO.linkedin}
        label="LinkedIn"
      />
    </div>
  );
}

function SocialLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3.5 py-2 text-[10px] font-bold uppercase tracking-widest text-white/70 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-600/10 hover:text-white"
    >
      <Link className="h-3.5 w-3.5 text-blue-400 transition-transform duration-300 group-hover:-rotate-8" />

      <span>{label}</span>

      <ExternalLink className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-60" />
    </motion.a>
  );
}