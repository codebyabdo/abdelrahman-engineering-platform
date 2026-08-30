"use client";

import {
  useEffect,
  useState,
  useCallback,
} from "react";

import {
  FadeUp,
  StaggerChildren,
} from "@/components/animations/motion";

import { ContactInfoCard } from "./contact-info-card";
import { ContactForm } from "./contact-form";
import { ContactSuccess } from "./contact-success";

import { MainHeader } from "@/components/shared/main-header";
import { Mail } from "lucide-react";

const header = {
  title: "Let's Build Something Exceptional",
  description:
    "Open to frontend engineering opportunities, freelance projects, SaaS development, and teams looking for scalable, maintainable web products.",
  subtitle: "CONTACT & INQUIRIES",
  highligh: "Direct Communication Protocol",
  icon: Mail,
};

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Cairo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };

      setTime(
        new Intl.DateTimeFormat(
          "en-US",
          options,
        ).format(now),
      );
    };

    updateClock();

    const timer = window.setInterval(
      updateClock,
      1000,
    );

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const handleSuccess = useCallback(() => {
    setSubmitted(true);
  }, []);

  const handleReset = useCallback(() => {
    setSubmitted(false);
  }, []);

  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 pb-16 pt-24 sm:px-6 sm:pt-32">
      {/* Header */}
      <MainHeader header={header} />

      {/* Content */}
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
        {/* Contact Information */}
        <StaggerChildren
          className="space-y-8 lg:col-span-5"
          delay={0.05}
        >
          <ContactInfoCard time={time} />
        </StaggerChildren>

        {/* Contact Form */}
        <FadeUp
          delay={0.15}
          duration={0.6}
          className="lg:col-span-7"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080808] shadow-2xl bg-radial-glow">
            <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-blue-600/5 blur-3xl" />

            <div className="relative p-8 sm:p-10">
              {submitted ? (
                <ContactSuccess
                  onReset={handleReset}
                />
              ) : (
                <ContactForm
                  onSuccess={handleSuccess}
                />
              )}
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}