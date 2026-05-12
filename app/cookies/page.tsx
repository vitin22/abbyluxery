import Image from "next/image"
import Link from "next/link"
import { TravelFooter } from "@/components/travel-footer"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="relative h-12 w-40">
            <Image src="/logo.png" alt="MANANA Tour" fill className="object-contain" />
          </Link>
          <Link 
            href="/" 
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cookie Policy
          </h1>
          <p className="text-primary font-medium mb-12">Abby Luxury Boutique SL.</p>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                1. General
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The DATA CONTROLLER may use cookies when the user browses the Website. Cookies are 
                associated solely with an anonymous User and their computer, and do not provide 
                references that allow the User&apos;s identity to be deduced. Thanks to cookies, it is 
                possible for the DATA CONTROLLER to recognize registered users after they have 
                registered for the first time, without them having to register on every visit to 
                access the areas and services reserved exclusively for them.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This website uses both first-party and third-party cookies during navigation. We use 
                first-party, session, and auto-login cookies to better provide our services and to 
                facilitate your navigation within the Portal. Session cookies are destroyed at the 
                end of each session, while auto-login cookies are persistent and allow the user to 
                avoid re-entering their username and password every time they enter the portal from 
                the same Computer or Mobile Device.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In many ways, cookies help make your visit to https://abbyluxuryboutique.com easier, more pleasant, 
                and more productive. Cookies are alphanumeric information files that your browser 
                automatically saves to your computer&apos;s hard drive every time you visit our website. 
                The use of cookies does not mean that we receive new personal data from you as an 
                online visitor. Most Internet browsers accept cookies automatically. However, you can 
                configure your browser so that it does not store cookies on your computer or always 
                asks for permission before saving them.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                2. Analytical Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This website uses analytical cookies to collect statistics on user activity when 
                visiting the page and the general activity of the site. The information collected 
                is anonymous and allows for the optimization of navigation on our website to ensure 
                the best service to the user. We use first-party and third-party cookies for the 
                analysis of our page. The user can exclude their activity through the opt-out systems 
                provided by the analytical tools.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                3. Cookies Used by Social Networks
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This website has installed social network buttons that allow users to share content 
                of interest with their social circle. The cookies used by social networks prevent 
                the user from having to re-enter their details to share said content. These buttons 
                do not have access to the data entered by users when sharing content on a social network.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                4. Cookies Used by External Content Plugins
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This website offers users content or services provided by third-party providers, such 
                as videos hosted on YouTube or Google Maps applications for locating real estate offices. 
                The cookies used by these providers are necessary for the user to access said service 
                and are governed by the provisions of the respective cookie policies of each third-party 
                provider of these services.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                5. Third-Party Cookies for Advertising Space Management
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These are cookies stored by third parties that manage the advertising spaces that users 
                see when accessing the web. These cookies are necessary to provide our services and 
                allow us to measure the effectiveness of our online campaigns, provide the user with 
                information of interest, and offer advertising content based on their preferences. 
                These cookies identify unique users and do not store personal information that 
                identifies the users.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                6. How to Disable Cookies in the Browser
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Chrome</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Settings &gt; Show advanced options &gt; Privacy &gt; Content settings. For more 
                    information, you can consult Google support or the browser&apos;s Help section.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Firefox</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tools &gt; Options &gt; Privacy &gt; History &gt; Custom Settings. For more 
                    information, you can consult Mozilla support or the browser&apos;s Help section.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Internet Explorer</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tools &gt; Internet Options &gt; Privacy &gt; Settings. For more information, 
                    you can consult Microsoft support or the browser&apos;s Help section.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Safari</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Preferences &gt; Security. For more information, you can consult Apple support 
                    or the browser&apos;s Help section.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
     <TravelFooter />
    </div>
  )
}
