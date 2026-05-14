import Image from "next/image"
import Link from "next/link"
import { TravelFooter } from "@/components/travel-footer"

export default function LegalNoticePage() {
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
            Legal Notice
          </h1>
          <p className="text-primary font-medium mb-12">Abby Luxury Boutique S.L.</p>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                1. Legal Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                In accordance with the provisions of Article 10.1 of Law 34/2002 of July 11, on 
                Information Society Services and Electronic Commerce, the service provider is 
                Abby Luxury Boutique (hereinafter, the PROVIDER), with its registered office 
                at Calle MÉNDEZ ÁLVARO 20, 28045 MADRID, with Tax Identification Number (CIF) 
                B26653956, registered in the Madrid Commercial Registry: Volume 307, Page 25192482.
                 The General Directorate of Tourism is the public body responsible for the 
                supervision of travel agency activities. The booking or participation in any of our combined 
                tours is subject to the acceptance of the General Conditions established in Royal Decree-Law 23/2018, 
                of December 21, on the transposition of directives relating to trademarks, rail transport, and combined 
                travel packages and linked travel services. These General Conditions apply to 
                all Combined Travel Contracts and are binding for both parties, together with 
                the specific conditions indicated in the travel documentation provided to both 
                contracting parties.
              </p>


              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                1.1 Guarantees and Regulatory Compliance (Royal Decree-Law 23/2018)
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Abby Luxury Boutique SL, in compliance with the provisions of Royal Decree-Law 23/2018, 
                of December 21, regarding the transposition of directives on package travel and linked travel 
                services, hereby informs you that activity packs, tours exceeding 24 hours, or itineraries 
                accommodation marketed on this website constitute, for legal purposes, a "Package Travel" (Combined trip).

                In accordance with current legislation, Abby Luxury Boutique SL guarantees that travelers will enjoy all the 
                rights that apply to package travel within the European Union. To this end, the company is responsible for the 
                proper execution of all travel services included in the contract and maintains an insolvency protection guarantee 
                duly subscribed with the entity [Insert Name of Insurer or Bank] (Policy No. [Number]), intended for the reimbursement 
                of your payments and, if transport is included, to guarantee your repatriation in the event that the company becomes insolvent.
              </p>


            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                2. Access and Use of the Website
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These General Conditions of Access and Use regulate the access and use of the website 
                &quot;www.abbyluxuryboutique.com&quot; (hereinafter, the Website) that the PROVIDER makes available to 
                Internet users. Its purpose is to provide the user with information about the 
                PROVIDER, its activities and products, who we are, the different business areas, 
                and the latest news published about the PROVIDER. Access to the Website implies 
                acceptance of these General Conditions of Access and Use; therefore, we ask you 
                to read them carefully before using the site. If you do not accept these conditions, 
                please refrain from using the Website and its content. Likewise, the PROVIDER 
                informs users of this Website that these General Conditions of Access and Use 
                may be adapted or modified at any time without prior notice. Consequently, the user 
                must read and accept these General Conditions of Access and Use each time they 
                wish to use the Website. The user undertakes to make diligent use of the Website, 
                as well as the information related to the products contained therein, in full 
                compliance with applicable regulations and these General Conditions.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                3. Disclaimer
              </h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                3.1 Use of the Website
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The PROVIDER, in compliance with its quality standards and comprehensive user care, 
                continuously reviews the information published using its technology and qualified 
                personnel, doing everything possible to ensure that the information is truthful 
                and accurate within the limits of current technology. However, it may occasionally 
                contain inaccuracies, typos, or errors of any kind.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">
                3.2 Modification of Website Information
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The PROVIDER reserves the right to make modifications, deletions, or updates to the
                 information contained on the Website, its configuration, or presentation at any time
                  and without prior notice.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">
                3.3 Use of Website Information
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Both access to the Website and the use that may be made of any information 
                contained therein are the exclusive responsibility of the user. The PROVIDER 
                will not be responsible for any damage or harm that may arise, directly or 
                indirectly, from the access or use of the information contained on the Website, 
                especially with regard to information related to third parties other than the 
                PROVIDER.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                4. User Responsibility
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Both access to the Website and the use that may be made of any information 
                contained therein are the exclusive responsibility of the user. The PROVIDER 
                is not responsible for any damage or harm that may arise, directly or indirectly, 
                from the access or use of the information contained on the Website, particularly 
                information related to third parties other than the PROVIDER.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                5. Personal Data Protection
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The PROVIDER undertakes to comply with current legislation on automated data 
                processing and, in particular, Organic Law 15/99 of December 13 on Personal 
                Data Protection (hereinafter LOPD). We invite you to read our{" "}
                <Link href="/privacy" className="text-primary hover:text-primary/80 underline">
                  Privacy Policy
                </Link>{" "}
                for further details.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                6. Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Part of the PROVIDER's services use cookies. We invite you to read our
                 Cookie Policy for further details.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                7. Copyright, Trademarks, and Software
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All contents of this Website, including text, trademarks, graphics, logos, icons, 
                buttons, images, and software, are the property of the PROVIDER or its content providers 
                and are protected by national and international industrial and intellectual property laws.
                The selection, collection, arrangement, programming, design, and assembly of all Website 
                content is the exclusive property of the PROVIDER and is protected by national and international 
                industrial and intellectual property laws. All software used on the Website is the property 
                of the PROVIDER or its software suppliers and is protected by national and international industrial 
                and intellectual property laws. Any other use of the Website's content or photographs, including
                reproduction, modification, distribution, transmission, subsequent publication, display, or total
                or partial representation, without the express consent of the PROVIDER or its suppliers, is
                strictly prohibited. The PROVIDER, as well as its graphics and logos, are protected trademarks 
                in the European Union and other countries. The names of other products, services, and companies
                mentioned herein may be registered trademarks of their respective owners.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                8. Applicable Law and Jurisdiction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Access to and use of the Website shall be governed by and interpreted in accordance 
                with Spanish law. Any controversy that may arise from the application of these conditions 
                shall be settled before the courts of Madrid (Spain), without prejudice to any other 
                jurisdiction that may correspond to the plaintiff party, in accordance with the provisions 
                of the applicable procedural regulations.
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
