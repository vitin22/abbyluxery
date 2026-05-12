import Image from "next/image"
import { Award, Users, Globe, Shield } from "lucide-react"

const stats = [
  { icon: Users, value: "15,000+", label: "Happy Travelers" },
  { icon: Globe, value: "25+", label: "Destinations" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Shield, value: "100%", label: "Secure Booking" },
]

const team = [
  {
    name: "Liudmila",
    role: "Directora Comercial",
    image: "/Liu.jpeg",
  },
  {
    name: "Abby",
    role: "Administradora",
    image: "/Abby.jpeg",
  },
  {
    name: "Yamile",
    role: "Directora de Marketing",
    image: "/Yami.jpeg",
  },
]

export function TravelAbout() {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/dubai.jpg"
                alt="Luxury travel experience"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg hidden md:block">
              <p className="font-serif text-4xl font-bold">10+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>

          <div>
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
              About Us
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              Your Gateway to Luxury Travel
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              For over a decade, we have been crafting extraordinary travel 
              experiences across the Middle East. Our team of expert travel 
              consultants combines local knowledge with world-class service to 
              create journeys that exceed expectations.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From the golden dunes of Dubai to the ancient wonders of Egypt, 
              we ensure every moment of your journey is nothing short of 
              exceptional. Our partnerships with the finest hotels, airlines, 
              and local guides guarantee an experience that is both authentic 
              and luxurious.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-serif text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* Team Section */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Our Team
          </p>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Meet Our Leadership
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.role} className="group text-center">
              <div className="relative h-80 w-full rounded-lg overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <h4 className="font-serif text-xl font-bold text-foreground mb-1">
                {member.name}
              </h4>
              <p className="text-primary font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
