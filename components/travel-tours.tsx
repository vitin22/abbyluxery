import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"

import type { Dictionary } from "@/i18n/request"

export function TravelTours({ dict }: { dict: Dictionary["tours"] }) {
  return (
    <section id="tours" className="py-24 px-6 bg-secondary/30">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.items.map((tour) => (
            <article
              key={tour.number}
              className="group flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                <span className="absolute top-4 left-4 flex h-9 w-9 items-center justify-center rounded-full bg-background/70 font-serif text-sm font-bold text-primary backdrop-blur-sm">
                  {tour.number}
                </span>
                <span className="absolute bottom-4 left-4 text-primary text-xs font-medium tracking-[0.2em] uppercase">
                  {tour.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {tour.name}
                </h3>
                <p className="flex items-center gap-2 text-primary text-xs font-medium tracking-wider uppercase">
                  <Clock className="h-3.5 w-3.5" />
                  {tour.duration}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {tour.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {tour.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-full border border-border/60 px-3 py-1 text-xs text-foreground/70"
                    >
                      {highlight}
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
