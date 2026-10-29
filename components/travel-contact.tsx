"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

import type { Dictionary } from "@/i18n/request"

export function TravelContact({ dict }: { dict: Dictionary["contact"] }) {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            {dict.eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            {dict.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{dict.callTitle}</h3>
                <p className="text-muted-foreground">{dict.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{dict.emailTitle}</h3>
                <p className="text-muted-foreground">{dict.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{dict.visitTitle}</h3>
                <p className="text-muted-foreground">{dict.address1}</p>
                <p className="text-muted-foreground">{dict.address2}</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder={dict.form.name}
                className="bg-background border-border"
              />
              <Input
                type="email"
                placeholder={dict.form.email}
                className="bg-background border-border"
              />
            </div>
            <Input
              placeholder={dict.form.destination}
              className="bg-background border-border"
            />
            <Textarea
              placeholder={dict.form.message}
              rows={5}
              className="bg-background border-border resize-none"
            />
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6">
              {dict.form.submit}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
