"use client";

import {
  motion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

/* =========================================================
   Animation Configuration
========================================================= */

const EASE = [0.16, 1, 0.3, 1] as const;

/* =========================================================
   Variants
========================================================= */

export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const scaleUpVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* =========================================================
   Fade Up
========================================================= */

interface FadeUpProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.5,
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-50px",
      }}
      variants={fadeUpVariants}
      transition={{
        duration,
        delay,
        ease: EASE,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   Stagger Container
========================================================= */

interface StaggerChildrenProps
  extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  stagger?: number;
}

export function StaggerChildren({
  children,
  delay = 0,
  stagger = 0.1,
  ...props
}: StaggerChildrenProps) {
  const variants: Variants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-50px",
      }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   Stagger Item
========================================================= */

interface StaggerItemProps
  extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

export function StaggerItem({
  children,
  ...props
}: StaggerItemProps) {
  return (
    <motion.div
      variants={fadeUpVariants}
      transition={{
        duration: 0.5,
        ease: EASE,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   Hover Card
========================================================= */

interface HoverCardProps
  extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

export function HoverCard({
  children,
  ...props
}: HoverCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.2,
        ease: EASE,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   Page Transition
========================================================= */

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export function PageTransition({
  children,
  className,
}: PageTransitionProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.3,
        ease: EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   Motion Export
========================================================= */

export { motion };