import en from "@/messages/en.json"
import es from "@/messages/es.json"

import { DEFAULT_LOCALE, isLocale, type Locale } from "./config"

/**
 * El tipo del diccionario se infiere de `messages/es.json`: si a
 * `messages/en.json` le falta (o le sobra) una clave, `tsc` falla.
 */
export type Dictionary = typeof es

const dictionaries: Record<Locale, Dictionary> = { es, en }

/** Diccionario del idioma pedido (o el de por defecto si no es válido). */
export function getDictionary(locale: string | Locale): Dictionary {
  return dictionaries[isLocale(locale) ? locale : DEFAULT_LOCALE]
}
