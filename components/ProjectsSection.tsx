"use client"

import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { personalInfo, projects } from "@/app/data/portfolio"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-surface/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="font-mono text-accent-blue text-sm mb-2">Projects</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-surface border border-border rounded-2xl p-5 sm:p-6 glow-card"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">{project.title}</h3>
                </div>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent-blue transition-colors"
                  aria-label={`GitHub repo for ${project.title}`}
                >
                  <FaGithub size={20} />
                </a>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-text-muted text-xs font-mono bg-accent-blue/10 border border-accent-blue/20 rounded-full px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 bg-accent-blue text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-accent-blue/90 transition-all duration-200"
                >
                  View all projects →
                </Link>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border text-text-secondary text-sm font-semibold px-4 py-2 rounded-lg hover:border-accent-blue/40 hover:text-text-primary transition-all duration-200"
                >
                  Repo ↗
                </a>
              </div>
            </div>
          ))}

          <div className="bg-surface border border-border rounded-2xl p-5 sm:p-6 glow-card">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-xl font-semibold text-text-primary">Open GitHub</h3>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-blue transition-colors"
                aria-label="Open GitHub profile"
              >
                <FaGithub size={20} />
              </a>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-5">
              Browse more repositories and updates on your profile.
            </p>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-blue text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-accent-blue/90 glow-blue transition-all duration-200"
            >
              Open GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

