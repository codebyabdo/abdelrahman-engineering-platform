"use client";

import { FormEvent } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

import { FadeUp } from "@/components/animations/motion";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  form: ContactFormData;
  submitting: boolean;
  onSubmit: (
    event: FormEvent<HTMLFormElement>,
  ) => void;
  onUpdate: <K extends keyof ContactFormData>(
    field: K,
    value: ContactFormData[K],
  ) => void;
}

const INQUIRY_TYPES = [
  {
    value: "Senior Frontend Engineering Role",
    label: "Senior / Staff Frontend Engineering Role",
  },
  {
    value: "Design System & Token Architecture",
    label: "Design System & Component Architecture",
  },
  {
    value: "Performance & Core Web Vitals Audit",
    label: "Performance & Core Web Vitals Audit",
  },
  {
    value: "Technical Advisory",
    label: "Technical Advisory & Consultation",
  },
];

const INPUT_CLASS =
  "w-full rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-xs uppercase tracking-wider text-white placeholder-white/30 transition-all duration-300 focus:border-blue-500/50 focus:bg-blue-500/[0.02] focus:outline-none focus:ring-1 focus:ring-blue-500/20";

export function ContactForm({
  form,
  submitting,
  onSubmit,
  onUpdate,
}: ContactFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6"
    >
      {/* Header */}
      <FadeUp duration={0.45}>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-blue-500" />

            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
              Initialize Connection
            </span>
          </div>

          <h3 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
            Start a Conversation
          </h3>

          <p className="max-w-xl text-xs leading-relaxed text-white/45">
            Tell me about the role, project, technical challenge,
            or collaboration you have in mind.
          </p>
        </div>
      </FadeUp>

      {/* Name + Email */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField label="Your Name">
          <input
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(event) =>
              onUpdate("name", event.target.value)
            }
            placeholder="e.g. Sarah Vance"
            className={INPUT_CLASS}
          />
        </FormField>

        <FormField label="Your Email">
          <input
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(event) =>
              onUpdate("email", event.target.value)
            }
            placeholder="s.vance@company.com"
            className={INPUT_CLASS}
          />
        </FormField>
      </div>

      {/* Inquiry */}
      <FormField label="Inquiry Type">
        <select
          value={form.subject}
          onChange={(event) =>
            onUpdate("subject", event.target.value)
          }
          className={`${INPUT_CLASS} cursor-pointer appearance-none`}
        >
          {INQUIRY_TYPES.map((type) => (
            <option
              key={type.value}
              value={type.value}
            >
              {type.label}
            </option>
          ))}
        </select>
      </FormField>

      {/* Message */}
      <FormField label="Message">
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={(event) =>
            onUpdate("message", event.target.value)
          }
          placeholder="Tell me about the role, team, technology stack, and business goals..."
          className="min-h-36 w-full resize-y rounded-2xl border border-white/10 bg-white/3 p-4 font-mono text-xs text-white placeholder-white/30 transition-all duration-300 focus:border-blue-500/50 focus:bg-blue-500/2 focus:outline-none focus:ring-1 focus:ring-blue-500/20"
        />
      </FormField>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={submitting}
        whileHover={
          !submitting
            ? { y: -2 }
            : undefined
        }
        whileTap={
          !submitting
            ? { scale: 0.98 }
            : undefined
        }
        transition={{ duration: 0.2 }}
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 py-4 text-xs font-extrabold uppercase tracking-widest text-white shadow-lg shadow-blue-600/20 transition-colors duration-300 hover:bg-blue-500 disabled:pointer-events-none disabled:opacity-50"
      >
        {submitting ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

            <span>Transmitting...</span>
          </>
        ) : (
          <>
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

            <span>Submit Inquiry</span>
          </>
        )}
      </motion.button>

      <p className="text-center font-mono text-[9px] uppercase tracking-wider text-white/25">
        Your information is used only to respond to your inquiry.
      </p>
    </form>
  );
}

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-white/60">
        {label}
      </label>

      {children}
    </div>
  );
}