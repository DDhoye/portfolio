"use client"

import { useState } from "react"
import Image from "next/image"
import { projects } from "@/data/portfolio"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import FadeIn from "@/components/FadeIn"


const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
)

const categories = ["All", "Web Apps", "wordpress", "design"]

export default function Projects() {
    const [active, setActive] = useState("All")

    const filtered = active === "All"
     ? projects
     : projects.filter((p) => p.category === active)

    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
            <div className="mb-10">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-2">
                My Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
                Projects
            </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
                <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors capitalize
                    ${active === cat
                    ? "bg-blue-600 text-primary-foreground border-primary"
                    : "border-border hover:bg-secondary"
                    }`}
                >
                {cat}
                </button>
            ))}
            </div>

            {/* Projects grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, index) => (
                <FadeIn key={project.title} delay={index * 0.1}>
                <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
                {/* Image area */}
                <div className="h-40 overflow-hidden bg-secondary relative">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">
                      No image yet
                    </div>
                  )}
                </div>

                <CardContent className="p-5 space-y-3">
                    {/* Title + links */}
                    <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-base leading-tight">{project.title}</h3>
                    <div className="flex items-center gap-2 shrink-0">
                        {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors">
                            <GithubIcon />
                        </a>
                        )}
                        {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors">
                            <ExternalLink className="w-4 h-4" />
                        </a>
                        )}
                    </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                        </Badge>
                    ))}
                    </div>
                    </CardContent>
                </Card>
                </FadeIn>
            ))}
            </div>



            </div>

        </section>
    ) 
}

