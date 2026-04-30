"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Plane, Hotel, MapPin, Calendar, Users, Search, ArrowLeft, Star, Clock, Loader2, Baby, UserCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type TabType = "flights" | "hotels" | "tours"

// --- DATOS ESTÁTICOS ---
const popularDestinations = [
  { name: "Dubai", country: "UAE", image: "/dubai.jpg", flightPrice: "$450", hotelPrice: "$180/night" },
  { name: "Doha", country: "Qatar", image: "/qatar.jpg", flightPrice: "$520", hotelPrice: "$220/night" },
  { name: "Cairo", country: "Egypt", image: "/egypt.jpg", flightPrice: "$380", hotelPrice: "$120/night" },
  { name: "Abu Dhabi", country: "UAE", image: "/abudhabi.jpg", flightPrice: "$470", hotelPrice: "$200/night" },
]

// --- COMPONENTE: TARJETA DE VUELO (Estilo Original) ---
function FlightCard({ flight }: { flight: any }) {
  const ticket = flight.tickets[0];
  const mainClass = flight.classes[0];
  if (!ticket || !mainClass) return null;

  return (
    <Card className="bg-card border-none shadow-md hover:shadow-xl transition-all overflow-hidden group mb-4">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="flex-[3] p-6 flex items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-2xl font-black text-foreground">{ticket.source.hour}</p>
              <p className="text-sm font-bold text-primary">{ticket.source.code}</p>
              <p className="text-[10px] text-muted-foreground uppercase truncate max-w-[100px]">{ticket.source.name}</p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <p className="text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-tighter">{ticket.duration}</p>
              <div className="relative w-full h-[1px] bg-border flex items-center justify-center">
                <Plane className="h-4 w-4 text-primary bg-card absolute" />
              </div>
              <p className="text-[10px] text-muted-foreground mt-1">Direct</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-2xl font-black text-foreground">{ticket.target.hour}</p>
              <p className="text-sm font-bold text-primary">{ticket.target.code}</p>
              <p className="text-[10px] text-muted-foreground uppercase truncate max-w-[100px]">{ticket.target.name}</p>
            </div>
          </div>
          <div className="flex-1 bg-secondary/10 p-6 border-l border-dashed border-border flex flex-col justify-center items-center">
            <p className="text-[10px] font-bold text-muted-foreground uppercase">{mainClass.name}</p>
            <p className="text-3xl font-black text-primary">${mainClass.price}</p>
            <Button size="sm" className="w-full mt-2 bg-primary text-white hover:bg-primary/90 rounded-full">Select</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// --- COMPONENTE: ESTADO VACÍO (Estilo Original) ---
function EmptyResults({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center animate-in fade-in zoom-in duration-500">
      <div className="bg-secondary/30 p-8 rounded-full mb-6">
        <Plane className="h-12 w-12 text-primary/40 rotate-45" />
      </div>
      <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">No Flights <span className="text-primary">Found</span></h3>
      <p className="text-muted-foreground max-w-md mx-auto mb-8">We couldn't find any flights for your selected dates or route.</p>
      <Button onClick={onReset} className="bg-primary px-8 h-12 rounded-full font-bold">Modify Search</Button>
    </div>
  );
}

export default function BookingPage() {
 
  const [activeTab, setActiveTab] = useState<TabType>("flights")
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState<any>(null)

  const [fromSearch, setFromSearch] = useState("")
  const [toSearch, setToSearch] = useState("")
  const [fromData, setFromData] = useState<any>(null)
  const [toData, setToData] = useState<any>(null)
  const [fromResults, setFromResults] = useState([])
  const [toResults, setToResults] = useState([])
  
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  
  // Estados de Pasajeros
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)

  const tabs = [
    { id: "flights" as TabType, label: "Flights", icon: Plane },
    { id: "hotels" as TabType, label: "Accommodation", icon: Hotel },
    { id: "tours" as TabType, label: "Tour Packages", icon: MapPin },
  ]

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (fromSearch.length >= 3 && !fromSearch.includes("(")) {
        const res = await fetch(`/api/flights/sources?term=${fromSearch}`)
        const json = await res.json()
        setFromResults(json.data?.sources || [])
      } else { setFromResults([]) }
    }, 400)
    return () => clearTimeout(timer)
  }, [fromSearch])

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (toSearch.length >= 3 && !toSearch.includes("(")) {
        const res = await fetch(`/api/flights/targets?term=${toSearch}`)
        const json = await res.json()
        setToResults(json.data?.targets || [])
      } else { setToResults([]) }
    }, 400)
    return () => clearTimeout(timer)
  }, [toSearch])

  const handleFlightSearch = async () => {
    console.log("Botón presionado. Datos actuales:", { fromData, toData, startDate }); // <--- AÑADE ESTO
    if (!fromData || !toData || !startDate) return alert("Please complete search details")
    setIsSearching(true)
    setResults(null)

    const payload = {
      start: startDate,
      end: endDate || startDate,
      composition: { adults, children, infants },
      combinations: [
        { source: fromData.code3, target: toData.code3 },
        ...(endDate ? [{ source: toData.code3, target: fromData.code3 }] : [])
      ],
      roundTrip: !!endDate,
      currency: "USD",
      language: "es"
    }

    try {
      const res = await fetch('/api/flights/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const responseJson = await res.json()
      console.log("Respuesta de la API:", responseJson);
      setResults(responseJson.status && responseJson.data ? responseJson.data : { outbound: [], inbound: [] })
    } catch (error) {
      console.error("Fetch error:", error)
    } finally {
      setIsSearching(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header Estilo Original */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={48} height={48} className="h-12 w-auto" />
          </Link>
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Estilo Original */}
      <section className="relative py-20 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">Book Your <span className="text-primary">Journey</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Luxury flights and exclusive destinations</p>
        </div>
      </section>

      {/* Search Bar Estilo Original */}
      <section className="relative -mt-8 px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-card border-border shadow-2xl overflow-visible">
            <CardContent className="p-0">
              <div className="flex border-b">
                {tabs.map((tab) => (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 font-medium transition-colors ${
                      activeTab === tab.id ? "text-primary border-b-2 border-primary bg-primary/5" : "text-muted-foreground hover:bg-muted/50"
                    }`}>
                    <tab.icon className="h-5 w-5" /> <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>

              <div className="p-6 space-y-4">
                {activeTab === "flights" && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Origen */}
                      <div className="relative space-y-2">
                        <label className="text-sm font-bold text-slate-700">From</label>
                        <div className="relative">
                          <Plane className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                          <Input className="pl-10 text-white font-bold" value={fromSearch} onChange={(e) => setFromSearch(e.target.value)} />
                        </div>
                        {fromResults.length > 0 && (
                          <div className="absolute z-[100] w-full bg-white border border-slate-200 shadow-2xl rounded-xl mt-1 max-h-60 overflow-auto border-t-4 border-t-primary">
                            {fromResults.map((item: any) => (
                              <div key={item.code} onClick={() => { setFromData(item); setFromSearch(`${item.name} (${item.code3})`); setFromResults([]) }}
                                className="p-3 hover:bg-slate-50 cursor-pointer flex justify-between items-center border-b border-slate-100 last:border-none group">
                                <div className="flex items-center gap-3">
                                  <Plane className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
                                  <span className="text-sm font-bold text-black">{item.name}</span>
                                </div>
                                <Badge variant="outline" className="text-black border-slate-200 font-bold">{item.code3}</Badge>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Destino */}
                      <div className="relative space-y-2">
                        <label className="text-sm font-bold text-slate-700">To</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                          <Input className="pl-10 text-white font-bold" value={toSearch} onChange={(e) => setToSearch(e.target.value)} />
                        </div>
                        {toResults.length > 0 && (
                          <div className="absolute z-[100] w-full bg-white border border-slate-200 shadow-2xl rounded-xl mt-1 max-h-60 overflow-auto border-t-4 border-t-primary">
                            {toResults.map((item: any) => (
                              <div key={item.code} onClick={() => { setToData(item); setToSearch(`${item.name} (${item.code3})`); setToResults([]) }}
                                className="p-3 hover:bg-slate-50 cursor-pointer flex justify-between items-center border-b border-slate-100 last:border-none group">
                                <div className="flex items-center gap-3">
                                  <Plane className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
                                  <span className="text-sm font-bold text-black">{item.name}</span>
                                </div>
                                <Badge variant="outline" className="text-white border-slate-200 font-bold">{item.code3}</Badge>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Fila de Fechas y Composición de Pasajeros */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Departure</label>
                        <Input type="date" className="text-white font-bold" onChange={(e)=>setStartDate(e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Return</label>
                        <Input type="date" className="text-white font-bold" onChange={(e)=>setEndDate(e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Adults</label>
                        <Input type="number" min="1" className="text-white font-bold" value={adults} onChange={(e)=>setAdults(Number(e.target.value))} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Children</label>
                        <Input type="number" min="0" className="text-white font-bold" value={children} onChange={(e)=>setChildren(Number(e.target.value))} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Infants</label>
                        <Input type="number" min="0" className="text-white font-bold" value={infants} onChange={(e)=>setInfants(Number(e.target.value))} />
                      </div>
                    </div>

                    <Button onClick={handleFlightSearch} disabled={isSearching} className="w-full h-14 bg-primary text-primary-foreground text-lg font-bold">
                      {isSearching ? <Loader2 className="animate-spin mr-2" /> : <Search className="mr-2 h-5 w-5" />}
                      {isSearching ? "Searching..." : "Search Premium Flights"}
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Render Dinámico Estilo Original */}
      {results ? (
        <section className="max-w-5xl mx-auto py-12 px-6">
          {(results.outbound?.length > 0 && results.outbound[0].flights?.length > 0) ? (
            <div className="space-y-12">
              <div className="space-y-4">
                <Badge className="bg-primary px-4 py-1 uppercase tracking-wider text-white">Outbound</Badge>
                {results.outbound[0].flights.map((f: any) => <FlightCard key={f.id} flight={f} />)}
              </div>
              {results.inbound?.length > 0 && results.inbound[0].flights?.length > 0 && (
                <div className="space-y-4 pt-10 border-t border-dashed border-border">
                  <Badge variant="outline" className="border-primary text-primary px-4 py-1 uppercase tracking-wider">Inbound</Badge>
                  {results.inbound[0].flights.map((f: any) => <FlightCard key={f.id} flight={f} />)}
                </div>
              )}
            </div>
          ) : (
            <EmptyResults onReset={() => setResults(null)} />
          )}
        </section>
      ) : (
        <section className="py-16 px-6 bg-secondary/50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-12 text-foreground">Popular <span className="text-primary">Destinations</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularDestinations.map((dest) => (
                <Card key={dest.name} className="bg-card border-none overflow-hidden group">
                  <div className="relative h-48">
                    <Image src={dest.image} alt={dest.name} fill className="object-cover" />
                    <div className="absolute bottom-4 left-4 text-white text-left text-lg font-bold">{dest.name}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="bg-card border-t border-border py-8 px-6 text-center">
        <p className="text-muted-foreground text-sm">Luxury Travel - Your Gateway to the Middle East</p>
      </footer>
    </main>
  )
}