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
            Legal Notices
          </h1>
          <p className="text-primary font-medium mb-12">Abby Luxury Boutique S.L..</p>

          {/* Index */}
          <nav className="mb-12 p-6 bg-card rounded-lg border border-border">
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">Index</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li><a href="#introduccion" className="hover:text-primary transition-colors">Introduction</a></li>
              <li><a href="#objeto" className="hover:text-primary transition-colors">Purpose of the Legal Notice</a></li>
              <li><a href="#titularidad" className="hover:text-primary transition-colors">Website Ownership</a></li>
              <li><a href="#propiedad" className="hover:text-primary transition-colors">Intellectual and Industrial Property</a></li>
              <li><a href="#vinculos" className="hover:text-primary transition-colors">Hypertext Links to the Website</a></li>
              <li><a href="#limitacion" className="hover:text-primary transition-colors">General Limitation of Liability</a></li>
              <li><a href="#seguridad" className="hover:text-primary transition-colors">Information Security</a></li>
              <li><a href="#suspension" className="hover:text-primary transition-colors">Suspension of Website Access and Services</a></li>
              <li><a href="#nulidad" className="hover:text-primary transition-colors">Nullity and Ineffectiveness of Clauses</a></li>
              <li><a href="#ley" className="hover:text-primary transition-colors">Applicable Law and Jurisdiction</a></li>
              <li><a href="#ley34" className="hover:text-primary transition-colors">Law 34/2002 and Royal Decree-Law 23/2018</a></li>
            </ol>
          </nav>

          <div className="prose prose-invert max-w-none space-y-10">
            {/* Section 1 */}
            <section id="introduccion">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                1. Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This Legal Notice regulates the use of the Website made available to the User 
                by Abby Luxury Boutique SL., with Tax Identification Number (CIF) B26653956 and 
                registered office at Calle MÉNDEZ ÁLVARO 20, 28045 MADRID 
                (hereinafter, &quot;Abby Luxury Boutique&quot;).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This Legal Notice, the Privacy Policy, and the Cookie Policy collectively constitute 
                the Terms and Conditions governing access to and use of the public section of the Website.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The use, access, and browsing of the content hosted on this Website implies knowledge 
                and acceptance of this Legal Notice, the purpose of which is to inform users of their
                 rights, permitted uses, prohibitions, responsibilities, and other circumstances when 
                 browsing the Website.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Website incorporates content protected by intellectual and industrial property 
                regulations. Any abusive use outside the limits established in this Legal 
                Notice may result in liability.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This Website is intended for users who are of legal age; Abby Luxury Boutique is exempt 
                from any liability regarding the accuracy and/or truthfulness of the data provided or the
                 use made by the user.
              </p>
            </section>

            {/* Section 2 */}
            <section id="objeto">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                2. Purpose of the Legal Notice
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Legal Notice regulates the access, browsing, and use of the Website, as well as the 
                liabilities arising from the use of its content, texts, graphics, drawings, designs, 
                photographs, software, codes, databases, images, information, or any other creation 
                protected by national laws and international treaties on intellectual and industrial property.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The conditions governing the different services available on the Website are subject to the 
                following regulations, where applicable:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 
                  on the protection of natural persons with regard to the processing of personal data and on 
                  the free movement of such data, and repealing Directive 95/46/EC (hereinafter, "GDPR").</li>
                <li>Organic Law 3/2018, of December 5, on Personal Data Protection and guarantee of digital 
                  rights (hereinafter, &quot;LOPDGDD&quot;).</li>
                <li>Law 34/2002, of July 11, on information society services and electronic commerce 
                  (hereinafter, &quot;LSSI&quot;).</li>
                <li>Any other applicable current regulations.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="titularidad">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                3. Website Ownership
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In compliance with Article 10 of the LSSI, Abby Luxury Boutique SL, with Tax 
                Identification Number (CIF) B26653956, and registered office at Calle MÉNDEZ ÁLVARO 20, 28045 MADRID.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All products and services contained on the Website are provided by Abby Luxury 
                Boutique in accordance with current regulations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Throughout your browsing experience, other means of contact may be made available 
                or displayed, particularly email addresses and links to forms, to which you may direct 
                corresponding suggestions, clarifications, or any other matters.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Likewise, we inform you that Abby Luxury Boutique is the owner of, or holds the 
                corresponding license to use, the various contents, texts, photographs, drawings, 
                designs, software, source code, and information incorporated for this purpose and 
                displayed throughout the Website.
              </p>
            </section>

            {/* Section 4 */}
            <section id="propiedad">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                4. Intellectual and Industrial Property
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Abby Luxury Boutique is the owner of, or holds the corresponding license to use, 
                the intellectual and industrial property exploitation rights of the Website, as well 
                as the content available through it. In no case shall allowing the user access to 
                the Website be construed as a waiver, transfer, license, or assignment, in whole or
                 in part, of said rights by Abby Luxury Boutique.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
              </p>
              <p className="text-muted-foreground leading-relaxed">
               The domain owned by  Abby Luxury Boutique may not be used in connection with other content, 
               products, or services that are not owned by it, when such action may cause confusion 
               among end-users or discredit  Abby Luxury Boutique. Abby Luxury Boutique reserves the right to use the 
               domain or denomination in the field where its owner carries out its activities and 
               related fields. Similarly, it reserves the right to prevent the use of domains derived 
               from them which, due to their similarity, could mislead or cause confusion regarding 
               the signs, denominations, or business origin of the services.
              </p>
            </section>

            {/* Section 5 */}
            <section id="vinculos">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                5. Links or hyperlinks with the Website
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The user will be able to access content provided by third parties, that is, reproduced 
                on third-party websites, without being able to perform operations and/or actions 
                different from the conditions or legal terms that these third parties have established 
                for access, use and exploitation of their content. For this reason, in case you want 
                to access a third-party website through the links we provide on the Website, an 
                information window will be displayed that will inform you about the matter.
              </p>
            </section>

            {/* Section 6 */}
            <section id="limitacion">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                6. General Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Abby Luxury Boutique is not responsible for the misuse that the user may make of the
                 Website, nor for the continuity of the content, among other actions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The insertion, linking, or mention of any advertising, directly or indirectly, in the 
                services that Abby Luxury Boutique makes available on this Website is expressly prohibited.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Abby Luxury Boutique excludes any liability for damages of any kind that may be due 
                to the use of the services it provides by the user.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The user will be liable for damages of any kind that Abby Luxury Boutique may suffer 
                as a result of non-compliance due to malpractice of the services and/or improper use 
                of the content, as well as those derived from legislation, international norms, and 
                actions undertaken in national and/or international jurisdiction.
              </p>
            </section>

            {/* Section 7 */}
            <section id="seguridad">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                7. Information Security 
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Abby Luxury Boutique keeps any data provided by the user protected by a current and 
                valid SSL (&quot;Secure Sockets Layer&quot;) security certificate, which creates an
                 encrypted link between the web server and your browser to guarantee security
                  between Internet connections, preventing potential cybercriminals from accessing or
                   modifying the information transferred between the two systems.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Through this certificate, Abby Luxury Boutique guarantees the protection of any 
                information provided by the user, such as:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Login credentials.</li>
                <li>Debit card, credit card, or financial information transactions.</li>
                <li>Personally identifiable information, such as full name, address, date of birth, or phone number.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                In this sense, the confidentiality and integrity of the information that the user may
                 provide are guaranteed through cryptographic encryption of all
                  communications through the SHA-256 hash signing algorithm.
              </p>
            </section>

            {/* Section 8 */}
            <section id="suspension">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                8. Suspension of Access to the Website and Services
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Abby Luxury Boutique S.L. may choose to interrupt, suspend, or unilaterally terminate 
                access to the Website's content, regardless of the provisions in these conditions. These 
                situations shall not alter the validity of the prohibitions on the use of the content 
                set forth in this Legal Notice.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Furthermore, Abby Luxury Boutique S.L. will take appropriate measures, as far as possible, 
                to notify users of such suspension, interruption, or termination of access to the content.
              </p>
            </section>

            {/* Section 9 */}
            <section id="nulidad">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                9. Nullity and Ineffectiveness of Clauses
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In the event that any provision or provisions of these conditions are held to be null and 
                void or inapplicable, in whole or in part, by any competent Court, Tribunal, or administrative 
                body, such nullity or inapplicability shall not affect the remaining conditions contained on the Website.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The non-exercise or non-execution by Abby Luxury Boutique of any right or provision 
                contained in these conditions shall not constitute a waiver thereof, unless acknowledged 
                and agreed upon in writing by it.
              </p>
            </section>

            {/* Section 10 */}
            <section id="ley">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                10. Applicable Law and Jurisdiction
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All the terms of use inserted in this Website are governed by Spanish legislation. All 
                conflicts, disputes or situations arising from these conditions will be subject to the 
                Courts and Tribunals of Madrid, expressly waiving each party their right to forum.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The present terms of use have the validity that lasts during their exposure. In this way, 
                Abby Luxury Boutique advises that each time the user accesses the Website they review them with care.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Abby Luxury Boutique reserves the right to unilaterally modify these conditions at any 
                time, in their entirety or partially. The modification will take effect from its publication
                 on the Website.
              </p>
            </section>

            {/* Section 11 */}
            <section id="ley34">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                11. Law 34/2002, of July 11, on Information Society Services and Electronic Commerce and 
                Royal Decree-Law 23/2018
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This legal notice is governed by the provisions of Law 34/2002, of July 11, on Information 
                Society Services and Electronic Commerce, and Royal Decree-Law 23/2018, of December 21, on
                 the transposition of directives regarding trademarks, railway transport, and package travel 
                 and linked travel services.
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
