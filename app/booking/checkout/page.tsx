"use client"

import { useState } from "react"
import { User, Mail, Phone, creditCard, ShieldCheck, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function CheckoutPage() {
  const [step, setStep] = useState(1)

  return (
    <main className="min-h-screen bg-secondary/20 pb-20 pt-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* COLUMNA IZQUIERDA: Formulario */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-serif text-2xl">
                <User className="text-primary" /> Passenger Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="As it appears on passport" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="As it appears on passport" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input type="email" placeholder="for booking confirmation" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input type="tel" placeholder="+1 234 567 890" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-serif text-2xl">
                <ShieldCheck className="text-primary" /> Travel Insurance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="space-y-1">
                  <p className="font-bold">Premium Protection Plan</p>
                  <p className="text-xs text-muted-foreground">Full refund for cancellations and medical coverage.</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">$49.00</p>
                  <button className="text-[10px] uppercase font-bold text-primary underline">Add to trip</button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* COLUMNA DERECHA: Resumen del Viaje */}
        <div className="space-y-6">
          <Card className="border-none shadow-lg bg-card sticky top-6">
            <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
              <CardTitle className="text-lg font-serif">Trip Summary</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Flight/Hotel Base</span>
                <span className="font-bold">$1,240.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Taxes & Fees</span>
                <span className="font-bold">$115.00</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-lg font-serif font-bold">Total Amount</span>
                <span className="text-2xl font-black text-primary">$1,355.00</span>
              </div>
              <p className="text-[10px] text-muted-foreground text-center italic">
                Secure checkout powered by TravelAsist API
              </p>
              <Button className="w-full h-12 bg-primary text-lg font-bold group">
                Confirm & Pay 
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>

      </div>
    </main>
  )
}