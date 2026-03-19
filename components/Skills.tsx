"use client"

import { FaAngular, FaNodeJs, FaDocker, FaReact, FaGitAlt, FaAws } from "react-icons/fa"
import { SiJavascript, SiTypescript, SiMongodb, SiKubernetes,
         SiExpress, SiPostgresql, SiRedis, SiTailwindcss,
         SiGithubactions, SiElixir, SiAppsmith } from "react-icons/si"
import { motion } from "framer-motion"

const skills = [
  { name: "TypeScript",      icon: <SiTypescript   size={32} className="text-blue-400" /> },
  { name: "Angular",         icon: <FaAngular      size={32} className="text-red-500"  /> },
  { name: "React / Next.js", icon: <FaReact        size={32} className="text-cyan-400" /> },
  { name: "Node.js",         icon: <FaNodeJs       size={32} className="text-green-500"/> },
  { name: "JavaScript",      icon: <SiJavascript   size={32} className="text-yellow-400"/> },
  { name: "Tailwind CSS",    icon: <SiTailwindcss  size={32} className="text-cyan-300" /> },
  { name: "MongoDB",         icon: <SiMongodb      size={32} className="text-green-400"/> },
  { name: "PostgreSQL",      icon: <SiPostgresql   size={32} className="text-blue-300" /> },
  { name: "Redis",           icon: <SiRedis        size={32} className="text-red-400"  /> },
  { name: "Docker",          icon: <FaDocker       size={32} className="text-blue-400" /> },
  { name: "Kubernetes",      icon: <SiKubernetes   size={32} className="text-blue-500" /> },
  { name: "AWS",             icon: <FaAws          size={32} className="text-orange-400"/> },
  { name: "Git",             icon: <FaGitAlt       size={32} className="text-orange-500"/> },
  { name: "GitHub Actions",  icon: <SiGithubactions size={32} className="text-text-secondary"/> },
  { name: "Elixir",          icon: <SiElixir       size={32} className="text-purple-400"/> },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <p className="font-mono text-accent-blue text-sm mb-2">Skills</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-12">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="bg-surface border border-border rounded-xl p-4 sm:p-5 flex flex-col items-center gap-3 glow-card cursor-default"
            >
              <div>{skill.icon}</div>
              <span className="text-text-secondary text-xs sm:text-sm text-center leading-tight">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
