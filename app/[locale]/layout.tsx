import React from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Playfair_Display, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import "../globals.css"

import { WhatsAppButton } from "@/components/whatsapp-button"
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_META,
  isLocale,
  type Locale,
} from "@/i18n/config"
import { getDictionary } from "@/i18n/request"

const _playfair = Playfair_Display({ subsets: ["latin"] })
const _montserrat = Montserrat({ subsets: ["latin"] })

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://abbyluxuryboutique.com"

type LocaleParams = { params: Promise<{ locale: string }> }

/** Solo existen /en y /es: cualquier otro segmento devuelve 404. */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export const dynamicParams = false

function resolveLocale(locale: string): Locale {
  return isLocale(locale) ? locale : DEFAULT_LOCALE
}

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const { locale } = await params
  const current = resolveLocale(locale)
  const dict = getDictionary(current)

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    generator: "v0.app",
    alternates: {
      canonical: `/${current}`,
      languages: {
        en: "/en",
        es: "/es",
        "x-default": `/${DEFAULT_LOCALE}`,
      },
    },
    openGraph: {
      type: "website",
      url: `/${current}`,
      siteName: "Abby Luxury Boutique",
      title: dict.meta.title,
      description: dict.meta.description,
      locale: LOCALE_META[current].ogLocale,
      alternateLocale: LOCALES.filter((item) => item !== current).map(
        (item) => LOCALE_META[item].ogLocale,
      ),
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      ],
      shortcut: "/favicon-32x32.png",
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dict = getDictionary(locale)

  return (
    <html lang={LOCALE_META[locale].htmlLang}>
      <body className={`font-sans antialiased`}>
        {children}
        <WhatsAppButton
          ariaLabel={dict.whatsapp.ariaLabel}
          tooltip={dict.whatsapp.tooltip}
          message={dict.whatsapp.message}
        />
        <Analytics />
      </body>
    </html>
  )
}
