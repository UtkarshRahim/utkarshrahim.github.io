"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { navLinks, personalInfo } from "@/app/data/portfolio"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-surface/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="font-mono text-accent-blue font-semibold text-sm tracking-wider hover:text-accent-cyan transition-colors"
          >
            {"<Utkarsh />"}
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop resume button */}
          <a
            href={personalInfo.resume}
            download
            className="hidden md:inline-flex items-center gap-2 border border-accent-blue/40 text-accent-blue text-xs font-mono px-4 py-2 rounded-lg hover:bg-accent-blue/10 hover:border-accent-blue transition-all duration-200"
          >
            Resume ↓
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-text-secondary transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-text-secondary transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-text-secondary transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>

        {/* Mobile drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } bg-surface/95 backdrop-blur-xl border-b border-border`}
        >
          <div className="px-4 py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-sm text-text-secondary hover:text-text-primary transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={personalInfo.resume}
              download
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center border border-accent-blue/40 text-accent-blue text-xs font-mono px-4 py-2.5 rounded-lg hover:bg-accent-blue/10 transition-all"
            >
              Download Resume ↓
            </a>
          </div>
        </div>
      </header>

      {/* Backdrop to close on outside tap */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  )
}
