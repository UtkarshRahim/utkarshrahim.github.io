"use client"

import { motion } from "framer-motion"
import { experience } from "@/app/data/experience"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-surface/20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <p className="font-mono text-accent-blue text-sm mb-2">Experience</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-12">
          Where I&apos;ve Worked
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — hidden on mobile */}
          <div className="hidden sm:block absolute left-[7px] top-3 bottom-3 w-px bg-border" />

          <div className="flex flex-col gap-8">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative sm:pl-10"
              >
                {/* Timeline dot */}
                <div className="hidden sm:block absolute left-0 top-6 w-3.5 h-3.5 rounded-full bg-accent-blue"
                  style={{ boxShadow: "0 0 8px rgba(59,130,246,0.7)" }}
                />

                <div className="bg-surface border border-border rounded-2xl p-5 sm:p-6 glow-card">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-text-primary">
                        {job.company}
                      </h3>
                      <p className="font-mono text-accent-blue text-sm mt-0.5">
                        {job.role} &mdash; {job.location}
                      </p>
                    </div>
                    <span className="font-mono text-text-muted text-xs whitespace-nowrap mt-1 sm:mt-1">
                      {job.period}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="list-disc pl-4 space-y-1.5">
                    {job.points.map((point, j) => (
                      <li key={j} className="text-text-secondary text-sm leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
