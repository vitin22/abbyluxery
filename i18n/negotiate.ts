import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

import { DEFAULT_LOCALE, LOCALES, isLocale, type Locale } from "./config"

/**
 * Resuelve el idioma de una petición con esta prioridad:
 *
 *   1. cookie `NEXT_LOCALE` (elección manual del usuario)
 *   2. cabecera `Accept-Language` del navegador
 *   3. `DEFAULT_LOCALE`
 *
 * `es`, `es-ES`, `es-419`… → `es`;  `en`, `en-GB`, `fr`, `de`… → `en`.
 */
export function negotiateLocale(
  cookieValue?: string | null,
  acceptLanguage?: string | null,
): Locale {
  if (isLocale(cookieValue)) return cookieValue

  const requested = new Negotiator({
    headers: { "accept-language": acceptLanguage ?? "" },
  }).languages()

  try {
    // `match` lanza RangeError si la lista no es válida ("*" o vacía).
    return match(requested, [...LOCALES], DEFAULT_LOCALE) as Locale
  } catch {
    return DEFAULT_LOCALE
  }
}
