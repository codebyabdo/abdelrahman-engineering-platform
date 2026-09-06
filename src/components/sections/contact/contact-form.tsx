"use client";

import { useActionState, useEffect, useId, useRef } from "react";

import { Send } from "lucide-react";
import { useFormStatus } from "react-dom";

import {
  ContactFormState,
  sendContactEmail,
} from "@/actions/send-contact-email";

import { FadeUp, MotionButton } from "@/components/animations/motion";

interface ContactFormProps {
  onSuccess?: () => void;
}

const initialState: ContactFormState = {
  success: false,
  message: "",
  fieldErrors: {
    name: undefined,
    email: undefined,
    subject: undefined,
    message: undefined,
  },
};

const INPUT_CLASS =
  "w-full rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-xs tracking-wider text-white placeholder-white/30 transition-all duration-300 focus:border-blue-500/50 focus:bg-blue-500/[0.02] focus:outline-none focus:ring-1 focus:ring-blue-500/20";

const TEXTAREA_CLASS =
  "min-h-36 w-full resize-y rounded-2xl border border-white/10 bg-white/[0.03] p-4 font-mono text-xs text-white placeholder-white/30 transition-all duration-300 focus:border-blue-500/50 focus:bg-blue-500/[0.02] focus:outline-none focus:ring-1 focus:ring-blue-500/20";

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [state, formAction] = useActionState(sendContactEmail, initialState);

  const formRef = useRef<HTMLFormElement>(null);

  /**
   * useId is hydration-safe.
   *
   * Do NOT use crypto.randomUUID() directly during render
   * because the component is also rendered on the server.
   */
  const reactId = useId();

  const submissionId = `contact-${reactId.replace(/:/g, "")}`;

  /* =====================================================
     Success
  ===================================================== */

  useEffect(() => {
    if (!state.success) {
      return;
    }

    formRef.current?.reset();

    onSuccess?.();
  }, [state.success, onSuccess]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      {/* =================================================
          Submission ID
      ================================================= */}

      <input type="hidden" name="submissionId" value={submissionId} />

      {/* =================================================
          Header
      ================================================= */}

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
            Tell me about the role, project, technical challenge, or
            collaboration you have in mind.
          </p>
        </div>
      </FadeUp>

      {/* =================================================
          Name + Email
      ================================================= */}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField label="Your Name" error={state.fieldErrors?.name}>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. Sarah Vance"
            className={INPUT_CLASS}
            aria-invalid={Boolean(state.fieldErrors?.name)}
            aria-describedby={
              state.fieldErrors?.name ? "name-error" : undefined
            }
          />
        </FormField>

        <FormField label="Your Email" error={state.fieldErrors?.email}>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="s.vance@company.com"
            className={INPUT_CLASS}
            aria-invalid={Boolean(state.fieldErrors?.email)}
            aria-describedby={
              state.fieldErrors?.email ? "email-error" : undefined
            }
          />
        </FormField>
      </div>

      {/* =================================================
          Subject
      ================================================= */}

      <FormField label="Inquiry Type" error={state.fieldErrors?.subject}>
        <input
          name="subject"
          type="text"
          required
          placeholder="Frontend Engineer / Freelance Project / Collaboration"
          className={INPUT_CLASS}
          aria-invalid={Boolean(state.fieldErrors?.subject)}
          aria-describedby={
            state.fieldErrors?.subject ? "subject-error" : undefined
          }
        />
      </FormField>

      {/* =================================================
          Message
      ================================================= */}

      <FormField label="Message" error={state.fieldErrors?.message}>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell me about the role, team, technology stack, and business goals..."
          className={TEXTAREA_CLASS}
          aria-invalid={Boolean(state.fieldErrors?.message)}
          aria-describedby={
            state.fieldErrors?.message ? "message-error" : undefined
          }
        />
      </FormField>

      {/* =================================================
          Server Message
      ================================================= */}

      {state.message && !state.success && (
        <p
          role="alert"
          aria-live="assertive"
          className="text-center font-mono text-[10px] text-red-400"
        >
          {state.message}
        </p>
      )}

      {/* =================================================
          Submit
      ================================================= */}

      <SubmitButton />

      <p className="text-center font-mono text-[9px] uppercase tracking-wider text-white/25">
        Your information is used only to respond to your inquiry.
      </p>
    </form>
  );
}

/* =========================================================
   Submit Button
========================================================= */

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <MotionButton
      type="submit"
      disabled={pending}
      whileHover={!pending ? { y: -2 } : undefined}
      whileTap={!pending ? { scale: 0.98 } : undefined}
      transition={{ duration: 0.2 }}
      className="group flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 py-4 text-xs font-extrabold uppercase tracking-widest text-white shadow-lg shadow-blue-600/20 transition-colors duration-300 hover:bg-blue-500 disabled:pointer-events-none disabled:opacity-50"
    >
      <span className="flex items-center justify-center gap-3">
        {pending ? "Transmitting..." : "Submit Inquiry"}

        <Send size={14} className={pending ? "animate-pulse" : ""} />
      </span>
    </MotionButton>
  );
}

/* =========================================================
   Form Field
========================================================= */

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  const errorId = `${label.toLowerCase().replace(/\s+/g, "-")}-error`;

  return (
    <div className="space-y-2">
      <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-white/60">
        {label}
      </label>

      {children}

      {error && (
        <p
          id={errorId}
          role="alert"
          className="px-2 font-mono text-[9px] text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  );
}
