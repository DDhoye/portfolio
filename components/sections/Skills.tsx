import { skills } from "@/data/portfolio"
import { Badge } from "@/components/ui/badge"
import FadeIn from "@/components/FadeIn"

export default function Skills(){
    return (
        <section id="skills" className="py-24 px-6 bg-secondary/30">
            <div className="max-w-6xl mx-auto">

                <FadeIn>
                {/* Section header*/}
                <div className="mb-16">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-2">
                        What I Work With
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Skills & Technologies
                    </h2>
                </div>
                </FadeIn>

                {/* Skills grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((group, index) => (
                    <FadeIn key={group.category} delay={index * 0.1}>
                    <div className="p-6 rounded-2xl bg-background border border-border space-y-4">
                    <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                        {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                        <Badge key={skill} variant="secondary">
                            {skill}
                        </Badge>
                        ))}
                    </div>
                    </div>
                    </FadeIn>
                ))}
                </div>

            </div>

        </section>
    )
}