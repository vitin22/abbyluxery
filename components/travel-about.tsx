import Image from "next/image"
import { Award, Users, Globe, Shield } from "lucide-react"

import type { Dictionary } from "@/i18n/request"

const statIcons = [Users, Globe, Award, Shield]

export function TravelAbout({ dict }: { dict: Dictionary["about"] }) {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/dubai.jpg"
                alt={dict.imageAlt}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg hidden md:block">
              <p className="font-serif text-4xl font-bold">{dict.badgeValue}</p>
              <p className="text-sm">{dict.badgeLabel}</p>
            </div>
          </div>

          <div>
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
              {dict.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              {dict.title}
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {dict.body1}
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {dict.body2}
            </p>

            <div className="grid grid-cols-2 gap-6">
              {dict.stats.map((stat, index) => {
                const Icon = statIcons[index]
                return (
                  <div key={stat.label} className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-serif text-2xl font-bold text-foreground">
                        {stat.value}
                      </p>
                      <p className="text-muted-foreground text-sm">{stat.label}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            {dict.teamEyebrow}
          </p>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            {dict.teamTitle}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.team.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="relative h-80 w-full rounded-lg overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <h4 className="font-serif text-xl font-bold text-foreground mb-1">
                {member.name}
              </h4>
              <p className="text-primary font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
