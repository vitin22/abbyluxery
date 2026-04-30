"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SlidersHorizontal, ArrowUpDown } from "lucide-react"

interface PriceRange {
  minPrice: number
  maxPrice: number
}

interface HotelFiltersProps {
  range: PriceRange
  onFilterChange: (maxPrice: number) => void
  onSortChange: (sortType: string) => void
}

export default function HotelFilters({ range, onFilterChange, onSortChange }: HotelFiltersProps) {
  const [currentMax, setCurrentMax] = useState(range.maxPrice)

  return (
    <div className="w-full bg-card border border-border rounded-xl p-6 mb-8 shadow-sm">
      <div className="flex flex-col md:flex-row items-end gap-8">
        
        {/* FILTRO DE PRECIO (SLIDER) */}
        <div className="flex-1 w-full space-y-4">
          <div className="flex items-center justify-between">
            <Label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <SlidersHorizontal className="h-3.5 w-3.5 text-primary" />
              Rango de Precio (Máx)
            </Label>
            <span className="text-sm font-black text-primary bg-primary/10 px-3 py-1 rounded-full">
              ${currentMax.toLocaleString()}
            </span>
          </div>
          
          <Slider
            defaultValue={[range.maxPrice]}
            max={range.maxPrice}
            min={range.minPrice}
            step={5}
            onValueChange={(value) => {
              setCurrentMax(value[0])
              onFilterChange(value[0])
            }}
            className="py-4"
          />
          
          <div className="flex justify-between text-[10px] font-mono text-muted-foreground uppercase">
            <span>Min: ${range.minPrice}</span>
            <span>Max: ${range.maxPrice}</span>
          </div>
        </div>

        {/* ORDENAMIENTO (SELECT) */}
        <div className="w-full md:w-64 space-y-2">
          <Label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <ArrowUpDown className="h-3.5 w-3.5 text-primary" />
            Ordenar por
          </Label>
          <Select onValueChange={onSortChange} defaultValue="recommended">
            <SelectTrigger className="w-full bg-background border-border focus:ring-primary">
              <SelectValue placeholder="Seleccionar orden" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">Recomendados</SelectItem>
              <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
              <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
              <SelectItem value="stars-desc">Estrellas: Máxima Categoría</SelectItem>
            </SelectContent>
          </Select>
        </div>

      </div>
    </div>
  )
}