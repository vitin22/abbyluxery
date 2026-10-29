import React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"

import "../globals.css"

import { WhatsAppButton } from "@/components/whatsapp-button"

/**
 * Layout raíz de las páginas heredadas (booking, legal, cookies, privacy…),
 * que todavía no están traducidas. Usa el mismo <html>/<body> del sitio y el
 * diccionario español por defecto.
 */
export const metadata: Metadata = {
  title: "Abby Luxury Boutique | Luxury Middle East Travel",
  description:
    "Reserva de vuelos y hoteles, condiciones legales y políticas de Abby Luxury Boutique.",
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

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
