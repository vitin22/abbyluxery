import { NextResponse, type NextRequest } from "next/server"

import { LOCALE_COOKIE, isLocale } from "./i18n/config"
import { negotiateLocale } from "./i18n/negotiate"

/**
 * Rutas que NO se localizan: páginas heredadas, API e internos de Next.
 * El matcher ya excluye `_next`, `_vercel`, `api` y cualquier archivo con extensión.
 */
const UNLOCALIZED_ROOTS = new Set(["booking", "busqueda", "legal", "privacy", "cookies"])

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const segments = pathname.split("/").filter(Boolean)
  const first = segments[0]

  // Ya viene con prefijo de idioma válido (/es, /en/…): no hay nada que hacer.
  if (isLocale(first)) return NextResponse.next()

  // Páginas heredadas sin idioma o internos: se sirven tal cual.
  if (first && (UNLOCALIZED_ROOTS.has(first) || first.startsWith("_"))) {
    return NextResponse.next()
  }

  // cookie NEXT_LOCALE > Accept-Language > idioma por defecto.
  const locale = negotiateLocale(
    request.cookies.get(LOCALE_COOKIE)?.value,
    request.headers.get("accept-language"),
  )

  const url = request.nextUrl.clone()
  url.pathname = `/${[locale, ...segments].join("/")}`
  url.search = search

  const response = NextResponse.redirect(url)
  // El destino depende de la cookie y de la cabecera: que no se cachee una variante.
  response.headers.set("Vary", "Accept-Language, Cookie")

  return response
}

export const config = {
  matcher: ["/((?!api/|_next/|_vercel/|.*\\..*).*)"],
}
