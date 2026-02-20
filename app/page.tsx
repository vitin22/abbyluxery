import { TravelNavigation } from "@/components/travel-navigation"
import { TravelHero } from "@/components/travel-hero"
import { TravelDestinations } from "@/components/travel-destinations"
import { TravelPackages } from "@/components/travel-packages"
import { TravelAbout } from "@/components/travel-about"
import { TravelContact } from "@/components/travel-contact"
import { TravelFooter } from "@/components/travel-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <TravelNavigation />
      <TravelHero />
      <TravelDestinations />
      <TravelPackages />
      <TravelAbout />
      <TravelContact />
      <TravelFooter />
    </main>
  )
}
