'use client'

import { techCategories } from '@/lib/constants/tech-data'

import {
  FadeUp,
  StaggerChildren,
  StaggerItem,
  motion,
} from '@/components/animations/motion'




export function TechStackSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <FadeUp className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <p className="text-primary text-sm font-medium uppercase tracking-[0.2em]">
            Engineering Stack
          </p>

          <h2 className="font-heading text-3xl font-semibold text-balance sm:text-4xl lg:text-5xl">
            Technologies I Work With
          </h2>

          <p className="text-muted-foreground leading-relaxed text-pretty">
            Focused on building scalable frontend systems, modern dashboard
            experiences, authentication workflows, and maintainable product
            architectures using modern web technologies.
          </p>
        </FadeUp>

        {/* Grid */}
        <StaggerChildren className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {techCategories.map((category, index) => (
            <StaggerItem key={index}>
              <div className="space-y-5">
                <h3 className="font-heading text-primary text-sm font-medium uppercase tracking-[0.18em]">
                  {category.title}
                </h3>

                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="group flex cursor-default items-center gap-3"
                    >
                      <span className="bg-primary/50 group-hover:bg-primary h-1.5 w-1.5 rounded-full transition-colors" />

                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Bottom Text */}
        <FadeUp delay={0.4} className="mt-20 text-center">
          <p className="text-muted-foreground mx-auto max-w-3xl text-sm leading-relaxed">
            Experienced in building SaaS platforms, role-based dashboards,
            healthcare systems, inventory management tools, and scalable frontend
            architectures with strong focus on maintainability, performance,
            and product-oriented development workflows.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}