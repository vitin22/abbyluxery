import Image from "next/image"
import Link from "next/link"
import { TravelFooter } from "@/components/travel-footer"

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-primary font-medium mb-12">Abby Luxury Boutique SL</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              At Abby Luxury Boutique, we respect and protect the privacy of our customers and visitors. This Privacy
              Policy explains how we collect, use, disclose, and protect your information when you visit our website and
              when you purchase our tour packages online. By using the Site and purchasing our services, you agree to the 
              privacy practices described in this policy.
            </p>

            {/* Section 1 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                1. Information we Collect
              </h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                1.1 Personal Information
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We may collect information that personally identifies you, such as your name, email address, postal address, phone number, payment information and other similar identification information when you provide it voluntarily through forms on our Site, such as when you register for a tour, make a purchase or contact us.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">
                1.2 Non-Personal Information
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We may also collect non-personal information about your visit to our Site, such as 
                your IP address, browser type, browser language, pages visited, time spent on our site and other traffic data. This information is collected 
                through cookies and similar tracking technologies.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                2. Use of Information
              </h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                2.1 Use of Personal Information
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may use your personal information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                <li>Provide and maintain the Site and our services.</li>
                <li>Process your transactions and send you booking confirmations.</li>
                <li>Coordinate and manage the details of tourist tours.</li>
                <li>Answer your questions and provide customer support.</li>
                <li>Send you newsletters, updates and promotions, provided you have consented to receive such communications.</li>
                <li>Personalize your experience on the Site and during our tours.</li>
                <li>Improve our Site and our services.</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">
                2.2 Use of Non-Personal Information
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Non-personal information is used to analyze trends, administer the Site, 
                track user movement on the Site, and gather demographic information 
                about our user base as a whole.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                3. Sharing and Disclosure of Information
              </h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                3.1 Service Providers
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We may share your personal information with third-party 
                service providers who assist us in operating our Site, 
                conducting our business, or serving our users, as long as
                 those parties agree to keep this information confidential. 
                 This includes payment processors and tour booking service providers.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">
                3.2 Compliance with the Law
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may disclose your personal information if we believe in good faith that such 
                disclosure is necessary to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Comply with a legal obligation.</li>
                <li>Protect and defend our rights or property.</li>
                <li>Prevent or investigate possible infringements in connection with the Site.</li>
                <li>Protect the personal safety of Site users or the public.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                4. Information Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement reasonable security measures to protect your personal information 
                against unauthorized access, alteration, disclosure or destruction. However, no 
                data transmission over the Internet or electronic storage method is 100% secure.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                5. Your Rights and Choices
              </h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                5.1 Access and Correction of Personal Information
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                You have the right to access the personal information we have about you and to 
                request the correction of any incorrect or incomplete data.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">
                5.2 Opt-out of Communications
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                You can opt out of receiving promotional communications from us at any time by 
                following the unsubscribe instructions included in such communications.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                6. Changes to this Privacy Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new policy on our Site and updating the "Effective Date" at 
                the top of this page. We encourage you to review this Privacy Policy periodically 
                to stay informed about how we protect your information.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
       <TravelFooter />
    </div>
  )
}
