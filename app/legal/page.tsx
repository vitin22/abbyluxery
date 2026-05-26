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
          <p className="text-primary font-medium mb-12">MANANA SPIRIT S.L.</p>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                1. Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This Legal Notice regulates the use of the Website made available to the User by MANANA SPIRIT S.L., 
                with NIF (Tax Identification Number) B75297101 and registered office at Calle de la Princesa, 31 
                planta segunda, Moncloa, 28008, Madrid (hereinafter, &quot;MANANA Tour&quot;).
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This Legal Notice, the Privacy Policy, and the Cookie Policy collectively constitute the Terms 
                and Conditions governing access to and use of the public section of the Website.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The use, access, and browsing of the content hosted on this Website implies knowledge and 
                acceptance of this Legal Notice, the purpose of which is to inform users of their rights, 
                permitted uses, prohibitions, responsibilities, and other circumstances when browsing the Website.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The Website incorporates content protected by intellectual and industrial property regulations. 
                Any abusive use outside the limits established in this Legal Notice may result in liability.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This Website is intended for users who are of legal age; MANANA Tour is exempt from any liability 
                regarding the accuracy and/or truthfulness of the data provided or the use made by the user.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                2. Purpose of the Legal Notice
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Legal Notice regulates the access, browsing, and use of the Website, as well as the liabilities 
                arising from the use of its content, texts, graphics, drawings, designs, photographs, software, 
                codes, databases, images, information, or any other creation protected by national laws and 
                international treaties on intellectual and industrial property.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The conditions governing the various services available on the Website are subject to the following 
                regulations, where applicable:
              </p>
              <ul className="text-muted-foreground leading-relaxed mt-4 list-disc list-inside space-y-2">
                <li>
                  Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the 
                  protection of natural persons with regard to the processing of personal data and on the free 
                  movement of such data, and repealing Directive 95/46/EC (hereinafter, &quot;GDPR&quot;).
                </li>
                <li>
                  Organic Law 3/2018, of December 5, on the Protection of Personal Data and guarantee of digital 
                  rights (hereinafter, &quot;LOPDGDD&quot;).
                </li>
                <li>
                  Act 34/2002, of July 11, on information society services and electronic commerce (hereinafter, &quot;LSSI&quot;).
                </li>
                <li>
                  Any other current regulations that may apply.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                3. Ownership of the Website
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                In compliance with Article 10 of the LSSI, MANANA SPIRIT SL, with NIF B75297101 and registered 
                office at Calle de la Princesa, 31, planta segunda, Moncloa, 28008, Madrid.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                All products and services contained on the Website are provided by MANANA Tour in accordance 
                with current regulations.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Throughout your browsing experience, other means of contact may be made available or displayed, 
                particularly email addresses and links to forms, to which you may direct corresponding suggestions, 
                clarifications, or any other matters.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Likewise, we inform you that MANANA Tour is the owner of, or holds the corresponding license to 
                use, the various contents, texts, photographs, drawings, designs, software, source code, and 
                information incorporated for this purpose and displayed throughout the Website.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                4. Intellectual and Industrial Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                MANANA Tour is the owner of, or holds the corresponding license to use, the intellectual and 
                industrial property exploitation rights of the Website, as well as the content available through 
                it. In no case shall allowing the user access to the Website be construed as a waiver, transfer, 
                license, or assignment, in whole or in part, of said rights by MANANA Tour.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                It is expressly forbidden to delete, bypass, or manipulate any identification data regarding the 
                rights of the Website owner or its holders incorporated into the content, as well as any technical 
                protection devices or any information and/or identification mechanisms incorporated into the content. 
                Furthermore, it is forbidden to modify, copy, reuse, exploit, reproduce, publicly communicate, make 
                second or subsequent publications, upload files, send by mail, transmit, use, process, or distribute 
                in any way all or part of the content included on the Website for public or commercial purposes 
                without the express written authorization of MANANA Tour or, where applicable, the corresponding 
                rights holder.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The domain owned by MANANA Tour may not be used in connection with other content, products, or 
                services that are not owned by it, when such action may cause confusion for the end-user or 
                discredit the company. MANANA Tour reserves the right to use the domain or denomination in the 
                field where its owner carries out its activities and related areas. Similarly, it reserves the 
                right to prevent the use of domains derived from them which, due to their similarity, could lead 
                to error or confusion regarding the signs, denominations, or business origin of the services.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                5. Hypertext Links to the Website
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The user may access content provided, meaning reproduced, on third-party websites, but may not 
                perform operations and/or actions other than those established in the legal terms or conditions 
                by said third parties for the access, use, and exploitation of their content. For this reason, 
                if you access a third-party website through the links provided on our Website, an information 
                window will be displayed to inform you about it.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                6. General Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                MANANA Tour is not responsible for any misuse that the user may make of the Website, nor for 
                the continuity of the content, among other actions.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The insertion, linking, or mention of any advertising, directly or indirectly, in the services 
                that MANANA Tour makes available to you on this Website is expressly prohibited.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                MANANA Tour excludes any liability for damages of any nature that may be due to the user&apos;s 
                utilization of the services provided.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The user shall be liable for damages of any nature that MANANA Tour may suffer as a consequence 
                of non-compliance due to malpractice regarding the services and/or undue use of the content, as 
                well as those arising from legislation, international standards, and actions taken within national 
                and/or international jurisdictions.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                7. Information Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                MANANA Tour keeps any data provided by the user protected by means of a current and valid SSL 
                (&quot;Secure Sockets Layer&quot;) security certificate, which creates an encrypted link between the web 
                server and your browser in order to guarantee security between internet connections, preventing 
                potential cybercriminals from accessing or modifying the information transferred between the 
                two systems.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Through this certificate, MANANA Tour guarantees the protection of any information provided by 
                the user, such as:
              </p>
              <ul className="text-muted-foreground leading-relaxed mt-4 list-disc list-inside space-y-2">
                <li>Log-in credentials.</li>
                <li>Debit/credit card transactions or financial information.</li>
                <li>Personally identifiable information, such as full name, address, date of birth, or phone number.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                In this regard, the Confidentiality and Integrity of the information that the user may provide 
                is guaranteed through the cryptographic encryption of all communications using the SHA-256 hash 
                signature algorithm.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                8. Suspension of Website Access and Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                MANANA Tour may choose to interrupt, suspend, or unilaterally terminate access to the content 
                of the Website, regardless of the provisions in these conditions. These situations shall not 
                alter the validity of the prohibitions on the use of the content set forth in the Legal Notice.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Furthermore, MANANA Tour will take appropriate measures, as far as possible, to notify users 
                of this suspension, interruption, or termination of access to the content.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                9. Nullity and Ineffectiveness of Clauses
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                In the event that any provision or provisions of these conditions are considered null or 
                inapplicable, in whole or in part, by any competent Court, Tribunal, or administrative body, 
                such nullity or inapplicability shall not affect the remaining conditions contained on the Website.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The failure of MANANA Tour to exercise or enforce any right or provision contained in these 
                conditions shall not constitute a waiver thereof, unless acknowledged and agreed to in writing 
                by the company.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                10. Applicable Law and Jurisdiction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All terms of use inserted on this Website are governed by Spanish regulations. All conflicts, 
                controversies, or situations arising from these conditions shall be submitted to the Courts 
                and Tribunals of Madrid, with the parties expressly waiving any other jurisdiction that may 
                correspond to them.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                These terms of use are valid for as long as they remain displayed. Therefore, MANANA Tour 
                advises the user to review them carefully each time they access the Website.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                MANANA Tour reserves the right to unilaterally modify these conditions at any time, in whole 
                or in part. The modification will take effect from the moment of its publication on the Website.
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
