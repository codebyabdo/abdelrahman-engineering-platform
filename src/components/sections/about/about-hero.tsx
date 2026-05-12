"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FadeUp,
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/codebyabdo", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/codebyabdo",
    label: "LinkedIn",
  },
  { icon: FaXTwitter, href: "https://x.com/codebyabdo", label: "Twitter" },
];

export function AboutHero() {
  const [imgError, setImgError] = useState(false);

  const imageSrc = "/profile.png";
  return (
    <section className="py-24 lg:py-32 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <FadeUp className="order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-secondary">
              {/* background gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-primary/5" />

              {/* center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                {!imgError && imageSrc ? (
                  <div className="relative">
                    <Image
                      src={imageSrc}
                      alt="Profile Picture"
                      width={500}
                      height={500}
                      className="object-cover  ring-primary/20 shadow-xl"
                      onLoadingComplete={(result) => {
                        if (result.naturalWidth === 0) setImgError(true);
                      }}
                      onError={() => setImgError(true)}
                    />
                  </div>
                ) : (
                  <div className="w-[280px] h-[280px] rounded-full flex items-center justify-center bg-primary/10 ring-4 ring-primary/10">
                    <span className="text-8xl font-heading font-bold text-primary/20">
                      AA
                    </span>
                  </div>
                )}
              </div>
            </div>
          </FadeUp>

          {/* Content */}
          <StaggerChildren className="order-1 lg:order-2 space-y-8">
            <StaggerItem>
              <p className="text-sm text-primary font-medium uppercase tracking-wider">
                About Me
              </p>
            </StaggerItem>

            <StaggerItem>
              <h1 className="font-heading font-semibold text-4xl sm:text-5xl lg:text-6xl text-balance">
                Abd El-Rhman Adel
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-xl text-muted-foreground">
                Front-End Developer • React.js & Next.js Developer
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m a Front-End Developer specializing in building
                  modern, responsive, and scalable web applications using
                  React.js, Next.js, and Next.js. I focus on creating clean user
                  interfaces with smooth user experiences and maintainable
                  architectures.
                </p>

                <p>
                  I&apos;m currently studying Electrical Engineering at Future
                  Higher Institute of Engineering while actively working on
                  freelance projects and improving my skills in frontend
                  architecture, APIs integration, and modern web technologies.
                </p>

                <p>
                  I enjoy turning ideas into real products, building creative UI
                  experiences, and continuously learning new technologies to
                  grow as a developer.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="group">
                  <Link href="/contact">
                    Start a Project
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <div className="flex gap-2">
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
        </div>
      </div>
    </section>
  );
}
