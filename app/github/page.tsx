import Navbar from "@/components/Navbar"
import { personalInfo, projects } from "@/app/data/portfolio"
import { FaGithub } from "react-icons/fa"

export default function GitHubPage() {
  const githubUsername = personalInfo.github.replace("https://github.com/", "")
  const statsTheme = "transparent"

  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Navbar />

      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <p className="font-mono text-accent-blue text-sm mb-2">Github</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">GitHub</h1>
        <p className="text-text-secondary text-sm leading-relaxed mb-10">
          Links and repos I&apos;ve been building. For the most up-to-date view, head to the profile
          page.
        </p>

        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent-blue text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-accent-blue/90 glow-blue transition-all duration-200 mb-10"
        >
          <FaGithub size={20} />
          Open GitHub Profile ↗
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-14">
          <div className="bg-surface border border-border rounded-2xl p-4 sm:p-6">
            <h2 className="text-text-primary font-semibold mb-3">Stats</h2>
            <div className="flex flex-col gap-4">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&hide_border=true`}
                alt="GitHub stats"
                className="w-full max-w-full"
              />
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=${statsTheme}&hide_border=true`}
                alt="GitHub streak stats"
                className="w-full max-w-full"
              />
            </div>
          </div>
{/* 
          <div className="bg-surface border border-border rounded-2xl p-4 sm:p-6">
            <h2 className="text-text-primary font-semibold mb-3">Contributions</h2>
            <img
              src={`https://ghchart.rashidkhan.dev/${githubUsername}`}
              alt="GitHub contribution chart"
              className="w-full max-w-full"
            />
            <p className="text-text-muted text-xs font-mono mt-3">
              Chart source: `ghchart.rashidkhan.dev`
            </p>
          </div> */}
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-text-primary">Pinned Repositories</h2>
          <p className="text-text-secondary text-sm mt-2">
            A curated set of repos that map well to this portfolio&apos;s focus areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-surface border border-border rounded-2xl p-5 sm:p-6 glow-card"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-semibold text-text-primary">{project.title}</h3>
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

              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border text-text-secondary text-sm font-semibold px-4 py-2 rounded-lg hover:border-accent-blue/40 hover:text-text-primary transition-all duration-200"
              >
                Repo ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

