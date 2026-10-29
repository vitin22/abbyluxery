import { notFound } from "next/navigation"

import { TravelNavigation } from "@/components/travel-navigation"
import { TravelHero } from "@/components/travel-hero"
import { TravelDestinations } from "@/components/travel-destinations"
import { TravelTours } from "@/components/travel-tours"
import { TravelPackages } from "@/components/travel-packages"
import { TravelAbout } from "@/components/travel-about"
import { TravelContact } from "@/components/travel-contact"
import { TravelFooter } from "@/components/travel-footer"
import { isLocale } from "@/i18n/config"
import { getDictionary } from "@/i18n/request"

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dict = getDictionary(locale)

  return (
    <>
      <TravelNavigation
        locale={locale}
        nav={dict.nav}
        language={dict.language}
        bookNow={dict.common.bookNow}
        phone={dict.contact.phone}
      />
      <main>
        <TravelHero dict={dict.hero} />
        <TravelDestinations dict={dict.destinations} />
        <TravelTours dict={dict.tours} />
        <TravelPackages dict={dict.packages} />
        <TravelAbout dict={dict.about} />
        <TravelContact dict={dict.contact} />
      </main>
      <TravelFooter locale={locale} dict={dict.footer} />
    </>
  )
}
