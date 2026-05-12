"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  FadeUp,
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/motion";

import { contactInfo, socialLinks } from "@/lib/constants/contact-data";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <StaggerChildren className="space-y-8">
            <StaggerItem>
              <p className="text-sm text-primary font-medium uppercase tracking-wider">
                Contact
              </p>
            </StaggerItem>

            <StaggerItem>
              <h1 className="font-heading font-semibold text-4xl sm:text-5xl text-balance">
                Let&apos;s build something great together
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-lg text-muted-foreground text-pretty">
                I&apos;m always interested in collaborating on modern web
                applications, SaaS products, admin dashboards, and scalable
                frontend systems built with React, Next.js, and TypeScript.
              </p>
            </StaggerItem>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.title}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>

            {/* Social Links */}
            <StaggerItem>
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">
                  Connect with me
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                      aria-label={link.label}
                    >
                      <link.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerChildren>

          {/* Right Column - Form */}
          <FadeUp delay={0.2}>
            <div className="p-6 lg:p-8 rounded-2xl border border-border/50 bg-card/50">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl">
                    Message Sent Successfully
                  </h3>

                  <p className="text-muted-foreground">
                    Thanks for reaching out. I&apos;ll get back to you as soon
                    as possible.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        required
                        className="bg-background border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="bg-background border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Company or startup name"
                      className="bg-background border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Tell me about your project"
                      required
                      className="bg-background border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, idea, or opportunity..."
                      rows={5}
                      required
                      className="bg-background border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Inquiry
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
