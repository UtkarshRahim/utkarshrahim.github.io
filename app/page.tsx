"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt } from "react-icons/fa"
import Navbar from "@/components/Navbar"
import Skills from "@/components/Skills"
import ExperienceSection from "@/components/ExperienceSection"
import ProjectsSection from "@/components/ProjectsSection"
import { personalInfo } from "@/app/data/portfolio"

/* ── Typing effect hook ─────────────────────────────── */
function useTypingEffect(phrases: string[], typingSpeed = 80, deletingSpeed = 45, pauseMs = 1800) {
  const [displayed, setDisplayed] = useState("")
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    const current = phrases[phraseIdx]
    if (!isDeleting) {
      if (displayed.length < current.length) {
        timerRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typingSpeed)
      } else {
        timerRef.current = setTimeout(() => setIsDeleting(true), pauseMs)
      }
    } else {
      if (displayed.length > 0) {
        timerRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), deletingSpeed)
      } else {
        setIsDeleting(false)
        setPhraseIdx((p) => (p + 1) % phrases.length)
      }
    }
    return () => clearTimeout(timerRef.current)
  }, [displayed, isDeleting, phraseIdx, phrases, typingSpeed, deletingSpeed, pauseMs])

  return displayed
}

/* ── Component ──────────────────────────────────────── */
export default function Home() {
  const typed = useTypingEffect(personalInfo.taglines)

  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen flex items-center bg-grid overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-[500px] sm:h-[500px] rounded-full bg-accent-blue/5 blur-[120px] animate-glow-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 sm:w-[400px] sm:h-[400px] rounded-full bg-accent-purple/5 blur-[100px] animate-glow-pulse pointer-events-none" style={{ animationDelay: "1.5s" }} />

        {/* Decorative code snippet — desktop only */}
        <div className="hidden lg:block absolute top-28 right-12 font-mono text-accent-blue/10 text-xs leading-6 text-right select-none">
          <div>const dev = {"{"}</div>
          <div className="pl-4">name: &quot;Utkarsh&quot;,</div>
          <div className="pl-4">stack: &quot;Full-Stack&quot;,</div>
          <div className="pl-4">location: &quot;Bengaluru&quot;,</div>
          <div className="pl-4">status: &quot;open to work&quot;,</div>
          <div>{"}"}</div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">

          {/* Pre-label */}
          <div
            className="flex items-center gap-3 mb-5 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <div className="w-6 h-px bg-accent-blue" />
            <span className="font-mono text-accent-blue text-xs tracking-widest uppercase">
              Hello, world
            </span>
          </div>

          {/* Avatar */}
          <div
            className="mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-accent-blue/60"
              style={{ boxShadow: "0 0 20px rgba(59,130,246,0.4)" }}>
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                width={96}
                height={96}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Name */}
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-text-primary leading-tight mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            {personalInfo.name}
          </h1>

          {/* Typing tagline */}
          <h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 h-10 sm:h-14 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
          >
            <span className="gradient-text">{typed}</span>
            <span className="animate-blink text-accent-blue ml-0.5 font-light">|</span>
          </h2>

          {/* Bio */}
          <p
            className="max-w-2xl text-text-secondary text-base sm:text-lg leading-relaxed mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            {personalInfo.bio}
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-wrap gap-3 mb-12 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}
          >
            <Link
              href="#experience"
              className="inline-flex items-center gap-2 bg-accent-blue text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-accent-blue/90 glow-blue transition-all duration-200"
            >
              View Experience →
            </Link>
            <Link
              href="#skills"
              className="inline-flex items-center gap-2 border border-accent-cyan/40 text-accent-cyan text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-accent-cyan/10 transition-all duration-200"
            >
              Skills
            </Link>
            <a
              href={personalInfo.resume}
              download
              className="inline-flex items-center gap-2 border border-border text-text-secondary text-sm font-semibold px-5 py-2.5 rounded-lg hover:border-border/80 hover:text-text-primary transition-all duration-200"
            >
              Resume ↓
            </a>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-8 sm:gap-12 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            {[
              { value: "7+",  label: "Years Experience" },
              { value: "3",   label: "Companies" },
              { value: "30+", label: "Projects Shipped" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold gradient-text">{s.value}</span>
                <span className="text-text-muted text-xs font-mono mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 pointer-events-none">
          <span className="font-mono text-[10px] text-text-muted tracking-widest">SCROLL</span>
          <div className="w-px h-10 bg-gradient-to-b from-accent-blue to-transparent" />
        </div>
      </section>

      {/* ── About ─────────────────────────────────────── */}
      <section id="about" className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="font-mono text-accent-blue text-sm mb-2">About me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-10">Who I Am</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {/* Left — Bio + links */}
            <div>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-4">
                {personalInfo.bio}
              </p>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                When I&apos;m not writing code, I&apos;m out in the wild with my camera, capturing wildlife
                and landscapes across India.
              </p>

              {/* Location badge */}
              <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 mb-6">
                <FaMapMarkerAlt className="text-accent-blue" size={13} />
                <span className="font-mono text-text-secondary text-xs">{personalInfo.location}</span>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-5">
                <a href={personalInfo.github}   target="_blank" rel="noopener noreferrer"
                   className="text-text-muted hover:text-accent-blue transition-colors" aria-label="GitHub">
                  <FaGithub size={22} />
                </a>
                <a href={personalInfo.linkedin}  target="_blank" rel="noopener noreferrer"
                   className="text-text-muted hover:text-accent-blue transition-colors" aria-label="LinkedIn">
                  <FaLinkedin size={22} />
                </a>
                <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer"
                   className="text-text-muted hover:text-accent-purple transition-colors" aria-label="Instagram">
                  <FaInstagram size={22} />
                </a>
              </div>
            </div>

            {/* Right — Cards */}
            <div className="flex flex-col gap-4">
              {/* Education */}
              <div className="bg-surface border border-border rounded-2xl p-5 sm:p-6 glow-card">
                <p className="text-text-muted text-xs font-mono mb-3 uppercase tracking-widest">🎓 Education</p>
                <h3 className="text-text-primary font-semibold text-base">B.Tech — SRM University</h3>
                <p className="text-text-secondary text-sm mt-0.5">Bengaluru</p>
                <p className="text-text-muted text-xs font-mono mt-1">July 2013 – June 2017</p>
                <div className="mt-3 inline-flex items-center gap-2 bg-accent-blue/10 border border-accent-blue/20 rounded-full px-3 py-1">
                  <span className="text-accent-blue text-xs font-mono">CGPA: 8.7 / 10</span>
                </div>
              </div>

              {/* Beyond code */}
              <div className="bg-surface border border-border rounded-2xl p-5 sm:p-6 glow-card">
                <p className="text-text-muted text-xs font-mono mb-3 uppercase tracking-widest">📷 Beyond Code</p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Wildlife & nature photography enthusiast. Follow my lens on{" "}
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-purple hover:underline"
                  >
                    @lensofutkarsh
                  </a>{" "}
                  or browse the{" "}
                  <Link href="/wildlife" className="text-accent-cyan hover:underline">
                    gallery →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────── */}
      <Skills />

      {/* ── Experience ────────────────────────────────── */}
      <ExperienceSection />

      {/* ── Projects ─────────────────────────────────── */}
      <ProjectsSection />

      {/* ── Contact ───────────────────────────────────── */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-mono text-accent-blue text-sm mb-2">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-8">
            I&apos;m currently open to new opportunities. Whether you have a project in mind, a question,
            or just want to say hi — my inbox is always open.
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="gradient-text text-xl sm:text-2xl font-mono font-semibold hover:underline break-all"
          >
            {personalInfo.email}
          </a>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <a href={personalInfo.github}   target="_blank" rel="noopener noreferrer"
               className="text-text-muted hover:text-accent-blue transition-colors" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href={personalInfo.linkedin}  target="_blank" rel="noopener noreferrer"
               className="text-text-muted hover:text-accent-blue transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer"
               className="text-text-muted hover:text-accent-purple transition-colors" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────── */}
      <footer className="pb-8 text-center">
        <p className="text-text-muted text-xs font-mono">
          Built with Next.js &amp; Tailwind CSS · {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  )
}
