'use client'

import { FadeUp, StaggerChildren, StaggerItem, motion } from '@/components/animations/motion'
import { useEffect, useState, useRef } from 'react'

const metrics = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: '+', label: 'Projects Delivered' },
  { value: 8, suffix: '', label: 'Team Members Led' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <span ref={ref} className="font-heading font-semibold text-5xl sm:text-6xl lg:text-7xl text-foreground">
      {count}{suffix}
    </span>
  )
}

export function MetricsSection() {
  return (
    <section className="py-24 lg:py-32 border-y border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <StaggerItem key={index}>
              <motion.div 
                className="text-center space-y-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <AnimatedNumber value={metric.value} suffix={metric.suffix} />
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  {metric.label}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
