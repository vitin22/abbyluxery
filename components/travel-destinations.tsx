import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

import type { Dictionary } from "@/i18n/request"

export function TravelDestinations({ dict }: { dict: Dictionary["destinations"] }) {
  return (
    <section id="destinations" className="py-24 px-6 bg-background">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.items.slice(0, 3).map((destination) => (
            <Link
              key={destination.slug}
              href={`#${destination.slug}`}
              className="group relative h-96 overflow-hidden rounded-lg"
            >
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={destination.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">
                  {destination.country}
                </p>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  {destination.name}
                </h3>
                <p className="text-foreground/70 text-sm mb-4">
                  {destination.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  {dict.exploreLabel} <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {dict.items.slice(3).map((destination) => (
            <Link
              key={destination.slug}
              href={`#${destination.slug}`}
              className="group relative h-80 overflow-hidden rounded-lg"
            >
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={destination.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">
                  {destination.country}
                </p>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  {destination.name}
                </h3>
                <p className="text-foreground/70 text-sm mb-4">
                  {destination.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  {dict.exploreLabel} <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
