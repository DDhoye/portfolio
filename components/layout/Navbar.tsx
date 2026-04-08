"use client"

import { useState, useEffect } from "react"
import { navLinks, personal } from "@/data/portfolio"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Add background blur when user scrolls down
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#dbeafe]/95 backdrop-blur-md shadow-sm"
          : "bg-[#dbeafe]"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo — your name/initials */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-blue-900 hover:opacity-80 transition-opacity"
        >
          {personal.name.split(" ")[0]}
          <span className="text-blue-500">.</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-blue-700 hover:text-blue-900 transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={`mailto:${personal.email}`}
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          Hire Me
        </a>

        {/* Mobile hamburger menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button aria-label="Open menu" className="text-blue-900">
              <Menu className="w-5 h-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <div className="flex flex-col gap-6 mt-10 px-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-base font-medium hover:text-primary transition-colors pl-2"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center justify-center px-6 py-2 rounded-full text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>

      </nav>
    </header>
  )
}
