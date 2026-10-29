"use client"

import { usePathname, useRouter } from "next/navigation"
import { Globe } from "lucide-react"

import {
  LOCALES,
  LOCALE_COOKIE,
  LOCALE_COOKIE_MAX_AGE,
  LOCALE_META,
  localizePath,
  type Locale,
} from "@/i18n/config"
import type { Dictionary } from "@/i18n/request"
import { cn } from "@/lib/utils"

type LanguageSwitcherProps = {
  locale: Locale
  labels: Dictionary["language"]
  className?: string
}

/**
 * Selector de idioma ES / EN.
 *
 * Al cambiar: guarda la cookie `NEXT_LOCALE` durante un año (para que el
 * middleware la priorice sobre `Accept-Language` en las siguientes visitas)
 * y navega a la misma ruta con el prefijo del idioma elegido.
 */
export function LanguageSwitcher({ locale, labels, className }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()

  function switchTo(next: Locale) {
    if (next === locale) return

    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; samesite=lax`

    const search = typeof window === "undefined" ? "" : window.location.search
    router.push(`${localizePath(pathname, next)}${search}`)
  }

  return (
    <div
      role="group"
      aria-label={labels.label}
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border/60 bg-secondary/40 p-1",
        className,
      )}
    >
      <Globe className="ml-1.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
      {LOCALES.map((option) => {
        const isActive = option === locale
        return (
          <button
            key={option}
            type="button"
            onClick={() => switchTo(option)}
            aria-pressed={isActive}
            aria-label={labels.switchTo.replace("{language}", LOCALE_META[option].native)}
            title={LOCALE_META[option].native}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-medium uppercase tracking-wider transition-colors",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-foreground/70 hover:text-primary",
            )}
          >
            {LOCALE_META[option].short}
          </button>
        )
      })}
    </div>
  )
}
