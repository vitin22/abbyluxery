import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

import type { Dictionary } from "@/i18n/request"

export function TravelHero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <Image
        src="/hero-bg.jpg"
        alt={dict.imageAlt}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6">
          {dict.eyebrow}
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground text-balance">
          {dict.title}
        </h1>
        <p className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {dict.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base">
            {dict.ctaPrimary}
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-base bg-transparent">
            {dict.ctaSecondary}
          </Button>
        </div>
      </div>

      <a 
        href="#destinations" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce"
        aria-label={dict.scroll}
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  )
}

