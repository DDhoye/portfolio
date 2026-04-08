import { personal, socials, resumeUrl } from "@/data/portfolio"
import { MapPin, Mail, Download } from "lucide-react"
import FadeIn from "@/components/FadeIn"
import Image from "next/image"


export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-2">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            The person behind the work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">


          <FadeIn>

             {/* Left — photo placeholder */}
          <div className="relative">
            <div className="aspect-square max-w-xs mx-auto md:mx-0 rounded-2xl bg-secondary overflow-hidden relative">
              <Image
                src="/images/profile.jpg"
                alt={personal.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative border offset */}
            <div className="absolute -bottom-4 -right-4 w-full max-w-sm aspect-square rounded-2xl border-2 border-border -z-10" />
          </div>

          </FadeIn>


          <FadeIn delay={0.3}>
              {/* Right — bio + details */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {personal.bio}
            </p>

            {/* Quick info */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
                <a
                  href={`mailto:${personal.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {personal.email}
                </a>
              </div>
              {personal.availableForWork && (
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-4 h-4 flex items-center justify-center shrink-0">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                  </span>
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    Open to new opportunities
                  </span>
                </div>
              )}
            </div>

            {/* What I do — three pillars */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { label: "Software Engineer", desc: "Angular, React, TypeScript & REST APIs" },
                { label: "Web Developer",     desc: "WordPress, Next.js & Custom Sites" },
                { label: "Graphic Designer",  desc: "UI/UX, Figma & Brand Identity" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-secondary text-center space-y-1"
                >
                  <p className="font-semibold text-sm">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-secondary transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>

          </FadeIn>
         

        

        </div>
      </div>
    </section>
  )
}
