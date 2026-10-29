/**
 * Configuración de internacionalización del sitio.
 *
 * Idiomas soportados: inglés (por defecto) y español.
 * El idioma por defecto se usa cuando el navegador no pide ninguno de los dos
 * (ver `negotiateLocale`) y también como fallback de `getDictionary`.
 */

export const LOCALES = ["en", "es"] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = "en"

/** Cookie con la preferencia manual del usuario (1 año). */
export const LOCALE_COOKIE = "NEXT_LOCALE"
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365

type LocaleMeta = {
  /** Nombre del idioma en su propia lengua. */
  native: string
  /** Etiqueta corta para el selector. */
  short: string
  /** Valor de `<html lang>` y del parámetro `[locale]`. */
  htmlLang: string
  /** Valor de `og:locale`. */
  ogLocale: string
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: { native: "English", short: "EN", htmlLang: "en", ogLocale: "en_US" },
  es: { native: "Español", short: "ES", htmlLang: "es", ogLocale: "es_ES" },
}

export function isLocale(value: string | null | undefined): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value)
}

/**
 * Devuelve `pathname` con el prefijo de `locale`, sustituyendo el que tuviera.
 * `localizePath("/es/tours", "en")` → `/en/tours`
 * `localizePath("/", "es")` → `/es`
 */
export function localizePath(pathname: string, locale: Locale): string {
  const clean = pathname.startsWith("/") ? pathname : `/${pathname}`
  const segments = clean.split("/").filter(Boolean)

  if (isLocale(segments[0])) segments.shift()

  return `/${[locale, ...segments].join("/")}`
}

/** Extrae el prefijo de idioma de un pathname, si lo tiene. */
export function localeFromPath(pathname: string): Locale | null {
  const [first] = pathname.split("/").filter(Boolean)
  return isLocale(first) ? first : null
}
