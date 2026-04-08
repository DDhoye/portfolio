import { personal, socials } from "@/data/portfolio"
import { Mail, MapPin } from "lucide-react"
import FadeIn from "@/components/FadeIn"


export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
<div className="mb-16">
  <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-2">
    Get In Touch
  </p>
  <h2 className="text-3xl md:text-4xl font-bold">
    Let&apos;s Work Together
  </h2>
</div>

<div className="grid md:grid-cols-2 gap-16">

  <FadeIn>
  {/* Left — contact info */}
  <div className="space-y-8">
    <p className="text-muted-foreground leading-relaxed">
      I&apos;m currently open to new opportunities — whether it&apos;s a full-time role,
      freelance project, or just a conversation. My inbox is always open.
    </p>

    <div className="space-y-4">
      <a href={`mailto:${personal.email}`}
        className="flex items-center gap-4 group">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Mail className="w-4 h-4" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Email</p>
          <p className="text-sm font-medium">{personal.email}</p>
        </div>
      </a>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
          <MapPin className="w-4 h-4" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Location</p>
          <p className="text-sm font-medium">{personal.location}</p>
        </div>
      </div>
    </div>
  </div>
  </FadeIn>

  <FadeIn delay={0.2}>
  {/* Right — quick links */}
  <div className="space-y-4">
    <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
      Find me on
    </p>
    <div className="flex flex-col gap-3">
      {socials.github && (
        <a href={socials.github} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-xl border border-border hover:bg-secondary transition-colors group">
          <span className="font-medium">GitHub</span>
          <Mail className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        </a>
      )}
      {socials.linkedin && (
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-xl border border-border hover:bg-secondary transition-colors group">
          <span className="font-medium">LinkedIn</span>
          <Mail className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        </a>
      )}
    </div>
  </div>
  </FadeIn>

</div>


      </div>
    </section>
  )
}
