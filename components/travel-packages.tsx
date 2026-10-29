import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarDays, Check } from "lucide-react"

import type { Dictionary } from "@/i18n/request"

export function TravelPackages({ dict }: { dict: Dictionary["packages"] }) {
  const programs = dict.items

  return (
    <section id="packages" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            {dict.eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            {dict.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <article
              key={program.name}
              className={`group flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg lg:flex-row ${
                index === programs.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <div className="relative h-56 w-full shrink-0 overflow-hidden lg:h-auto lg:w-1/3">
                <Image
                  src={program.image}
                  alt={program.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-card/40" />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase">
                  {program.tag}
                </p>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  {program.name}
                </h3>
                <p className="flex items-center gap-2 text-sm font-medium text-foreground/70">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  {program.duration}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {program.description}
                </p>
                <ul
                  className={`grid grid-cols-1 gap-x-4 gap-y-2 ${
                    index === programs.length - 1 ? "sm:grid-cols-2" : ""
                  }`}
                >
                  {program.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-medium text-primary transition-all hover:gap-3"
                >
                  {dict.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
