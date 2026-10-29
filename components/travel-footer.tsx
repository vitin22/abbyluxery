import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

import es from "@/messages/es.json"

import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/request"

const socialIcons = [
  { icon: Facebook, key: "facebook", href: "#" },
  { icon: Instagram, key: "instagram", href: "#" },
  { icon: Twitter, key: "twitter", href: "#" },
  { icon: Youtube, key: "youtube", href: "#" },
] as const

type TravelFooterProps = {
  /** Idioma actual: se usa para el enlace del logo. */
  locale?: Locale
  /** Diccionario del pie; por defecto, el español (páginas no localizadas). */
  dict?: Dictionary["footer"]
}

export function TravelFooter({ locale, dict }: TravelFooterProps = {}) {
  const footer = dict ?? es.footer
  const homeHref = locale ? `/${locale}` : "/"
  const year = new Date().getFullYear()

  const columns = [
    { title: footer.destinationsTitle, links: footer.links.destinations },
    { title: footer.companyTitle, links: footer.links.company },
    { title: footer.supportTitle, links: footer.links.support },
  ]

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href={homeHref} className="inline-block mb-6">
              <Image
                src="/logo-tight.png"
                alt="Abby Luxury Boutique"
                width={860}
                height={420}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              {footer.tagline}
            </p>
            <div className="flex gap-4">
              {socialIcons.map((social) => (
                <a
                  key={social.key}
                  href={social.href}
                  aria-label={footer.social[social.key]}
                  className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-foreground mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {year} {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
