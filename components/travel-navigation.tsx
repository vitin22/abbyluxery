"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/request"

type TravelNavigationProps = {
  locale: Locale
  nav: Dictionary["nav"]
  language: Dictionary["language"]
  bookNow: string
  phone: string
}

export function TravelNavigation({
  locale,
  nav,
  language,
  bookNow,
  phone,
}: TravelNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: nav.home, href: "#home" },
    { label: nav.destinations, href: "#destinations" },
    { label: nav.tours, href: "#tours" },
    { label: nav.packages, href: "#packages" },
    { label: nav.about, href: "#about" },
    { label: nav.contact, href: "#contact" },
  ]

  const telHref = `tel:${phone.replace(/\s+/g, "")}`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-6 py-3 md:py-2 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex shrink-0 items-center">
          <Image
            src="/logo-tight.png"
            alt="Abby Luxury Boutique"
            width={860}
            height={420}
            className="h-14 w-auto md:h-16"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide uppercase whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          <LanguageSwitcher locale={locale} labels={language} />
          <Link
            href={telHref}
            className="hidden xl:flex items-center gap-2 text-primary whitespace-nowrap"
          >
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">{phone}</span>
          </Link>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap">
            {bookNow}
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher locale={locale} labels={language} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground"
            aria-label={nav.toggleMenu}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-2">
              {bookNow}
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

