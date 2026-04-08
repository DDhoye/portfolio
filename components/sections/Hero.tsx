"use client"

import { personal, socials, resumeUrl } from "@/data/portfolio"
import { ArrowDown, Download, Mail } from "lucide-react"

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Subtle background gradient blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">

        {/* Availability badge */}
        {personal.availableForWork && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for work
          </div>
        )}

        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I&apos;m{" "}
            <span className="relative inline-block">
              {personal.name.split(" ")[0]}
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-600 rounded-full" />
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            {personal.title}
          </p>
        </div>

        {/* Tagline */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {personal.tagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
            <ArrowDown className="w-4 h-4" />
          </button>
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-secondary transition-colors font-medium"
          >
            <Mail className="w-4 h-4" />
            Get In Touch
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-secondary transition-colors font-medium"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5 pt-2">
          {socials.github && (
            <a href={socials.github} target="_blank" rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors">
              <GithubIcon />
            </a>
          )}
          {socials.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors">
              <LinkedinIcon />
            </a>
          )}
          {personal.email && (
            <a href={`mailto:${personal.email}`} aria-label="Email"
              className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          )}
        </div>

      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </button>

    </section>
  )
}
