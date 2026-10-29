"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Plane, Hotel, MapPin, Calendar, Users, Search, ArrowLeft, Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

type TabType = "flights" | "hotels" | "tours"

const popularDestinations = [
  { name: "Dubai", country: "UAE", image: "/dubai.jpg", flightPrice: "$450", hotelPrice: "$180/night" },
  { name: "Doha", country: "Qatar", image: "/qatar.jpg", flightPrice: "$520", hotelPrice: "$220/night" },
  { name: "Cairo", country: "Egypt", image: "/egypt.jpg", flightPrice: "$380", hotelPrice: "$120/night" },
  { name: "Abu Dhabi", country: "UAE", image: "/abudhabi.jpg", flightPrice: "$470", hotelPrice: "$200/night" },
]

const featuredTours = [
  {
    title: "Dubai Grand Tour",
    duration: "5 Days / 4 Nights",
    price: "$1,299",
    rating: 4.9,
    image: "/dubai.jpg",
    includes: ["5-Star Hotel", "Desert Safari", "Burj Khalifa Tour", "Dubai Mall"],
  },
  {
    title: "Egyptian Wonders",
    duration: "7 Days / 6 Nights",
    price: "$1,899",
    rating: 4.8,
    image: "/egypt.jpg",
    includes: ["Nile Cruise", "Pyramids Tour", "Valley of Kings", "All Meals"],
  },
  {
    title: "Qatar Explorer",
    duration: "4 Days / 3 Nights",
    price: "$999",
    rating: 4.7,
    image: "/qatar.jpg",
    includes: ["Luxury Hotel", "City Tour", "Desert Adventure", "Cultural Shows"],
  },
]

export default function BookingPage() {
  const [activeTab, setActiveTab] = useState<TabType>("flights")

  const tabs = [
    { id: "flights" as TabType, label: "Flights", icon: Plane },
    { id: "hotels" as TabType, label: "Accommodation", icon: Hotel },
    { id: "tours" as TabType, label: "Tour Packages", icon: MapPin },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Luxury Travel Logo"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
          </Link>
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Book Your <span className="text-primary">Journey</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Search and book flights, luxury accommodations, and exclusive tour packages to the finest Middle East destinations
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="relative -mt-8 px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-card border-border shadow-2xl">
            <CardContent className="p-0">
              {/* Tabs */}
              <div className="flex border-b border-border">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 font-medium transition-colors ${
                      activeTab === tab.id
                        ? "text-primary border-b-2 border-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Search Forms */}
              <div className="p-6">
                {activeTab === "flights" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">From</label>
                        <div className="relative">
                          <Plane className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="Departure city" className="pl-10 bg-input border-border" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">To</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="Dubai, Qatar, Egypt..." className="pl-10 bg-input border-border" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Departure Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input type="date" className="pl-10 bg-input border-border" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Return Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input type="date" className="pl-10 bg-input border-border" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Passengers</label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input type="number" placeholder="2" min="1" className="pl-10 bg-input border-border" />
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-lg">
                      <Search className="h-5 w-5 mr-2" />
                      Search Flights
                    </Button>
                  </div>
                )}

                {activeTab === "hotels" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Destination</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="Dubai, Doha, Cairo..." className="pl-10 bg-input border-border" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Hotel Name (Optional)</label>
                        <div className="relative">
                          <Hotel className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="Search by hotel name" className="pl-10 bg-input border-border" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Check-in</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input type="date" className="pl-10 bg-input border-border" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Check-out</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input type="date" className="pl-10 bg-input border-border" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Guests & Rooms</label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="2 Guests, 1 Room" className="pl-10 bg-input border-border" />
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-lg">
                      <Search className="h-5 w-5 mr-2" />
                      Search Hotels
                    </Button>
                  </div>
                )}

                {activeTab === "tours" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Destination</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="Dubai, Egypt, Qatar..." className="pl-10 bg-input border-border" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Tour Type</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="Adventure, Cultural, Luxury..." className="pl-10 bg-input border-border" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Travel Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input type="date" className="pl-10 bg-input border-border" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Duration</label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="3-7 days" className="pl-10 bg-input border-border" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Travelers</label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input type="number" placeholder="2" min="1" className="pl-10 bg-input border-border" />
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-lg">
                      <Search className="h-5 w-5 mr-2" />
                      Search Tours
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 px-6 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
            Popular <span className="text-primary">Destinations</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Discover our most sought-after Middle East destinations
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((dest) => (
              <Card key={dest.name} className="bg-card border-border overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-serif text-xl font-bold text-foreground">{dest.name}</h3>
                    <p className="text-muted-foreground text-sm">{dest.country}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="text-muted-foreground">Flights from</p>
                      <p className="text-primary font-semibold">{dest.flightPrice}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground">Hotels from</p>
                      <p className="text-primary font-semibold">{dest.hotelPrice}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
            Featured <span className="text-primary">Tour Packages</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            All-inclusive luxury experiences curated just for you
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <Card key={tour.title} className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-xl font-bold text-foreground">{tour.title}</h3>
                    <div className="flex items-center gap-1 text-primary">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{tour.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Clock className="h-4 w-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.includes.map((item) => (
                      <span key={item} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Luxury Travel Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-muted-foreground text-sm">
            Luxury Travel - Your Gateway to the Middle East
          </p>
          <Link href="/" className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
            Back to Home
          </Link>
        </div>
      </footer>
    </main>
  )
}
