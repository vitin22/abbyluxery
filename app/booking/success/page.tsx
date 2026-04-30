"use client"

import { CheckCircle, Download, Share2, Printer, MapPin, Calendar, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function SuccessPage() {
  // En un escenario real, aquí obtendrías los datos de la URL o de un estado global
  const bookingId = "TA-98442100"
  
  return (
    <main className="min-h-screen bg-secondary/10 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Icono de Éxito Animado */}
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-green-100 p-4 animate-bounce">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
        </div>

        <h1 className="text-4xl font-serif font-bold text-foreground mb-2">
          ¡Booking Confirmed!
        </h1>
        <p className="text-muted-foreground mb-10">
          Your luxury journey is ready. We've sent the itinerary to your email.
        </p>

        {/* Ticket de Confirmación Estilo "Luxury" */}
        <Card className="border-none shadow-2xl overflow-hidden mb-8 bg-white">
          <div className="bg-primary p-4 text-white flex justify-between items-center">
            <span className="text-xs font-bold tracking-widest uppercase">Booking Voucher</span>
            <span className="text-sm font-mono">{bookingId}</span>
          </div>
          
          <CardContent className="p-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary rounded-lg"><Plane className="h-5 w-5 text-primary" /></div>
                  <div>
                    <p className="text-[10px] uppercase text-muted-foreground font-bold">Flight/Hotel</p>
                    <p className="font-bold text-sm">Grand Hyatt Dubai - Premium Suite</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary rounded-lg"><Calendar className="h-5 w-5 text-primary" /></div>
                  <div>
                    <p className="text-[10px] uppercase text-muted-foreground font-bold">Dates</p>
                    <p className="font-bold text-sm">Oct 12 - Oct 19, 2024</p>
                  </div>
                </div>
              </div>

              {/* QR Code Placeholder */}
              <div className="flex flex-col items-center justify-center border-l border-dashed border-border pl-8">
                <div className="w-32 h-32 bg-secondary flex items-center justify-center rounded-lg border-2 border-muted">
                   <span className="text-[10px] text-muted-foreground text-center px-2">QR Code for Check-in</span>
                </div>
                <p className="text-[10px] mt-2 font-mono text-muted-foreground">Digital Signature: 0x882...AF</p>
              </div>
            </div>
          </CardContent>
          
          <div className="bg-muted/50 p-4 border-t border-dashed border-border flex justify-around">
            <Button variant="ghost" size="sm" className="text-xs hover:text-primary">
              <Download className="h-4 w-4 mr-2" /> Download PDF
            </Button>
            <Button variant="ghost" size="sm" className="text-xs hover:text-primary">
              <Printer className="h-4 w-4 mr-2" /> Print Ticket
            </Button>
            <Button variant="ghost" size="sm" className="text-xs hover:text-primary">
              <Share2 className="h-4 w-4 mr-2" /> Share Trip
            </Button>
          </div>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="outline" className="w-full sm:w-auto">Return to Home</Button>
          </Link>
          <Button className="w-full sm:w-auto bg-primary">Manage My Booking</Button>
        </div>
      </div>
    </main>
  )
}