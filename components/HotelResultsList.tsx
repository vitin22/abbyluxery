"use client"
import { useState } from "react";
import HotelFilters from "./HotelFilters";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function HotelResultsList({ initialHotels, range }: any) {
  const [maxPrice, setMaxPrice] = useState(range?.maxPrice || 5000);

  const filtered = initialHotels.filter((h: any) => {
    const price = h.prices[0]?.offerPrice || h.prices[0]?.price;
    return price <= maxPrice;
  });

  return (
    <>
      <HotelFilters range={range} onFilterChange={setMaxPrice} onSortChange={function (sortType: string): void {
              throw new Error("Function not implemented.");
          } } />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((hotel: any) => (
          <Card key={hotel.code} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image src={hotel.image} alt={hotel.name} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2">{hotel.name}</h3>
              <p className="text-2xl font-black text-primary">
                {hotel.currency} {hotel.prices[0]?.price}
              </p>
              <button className="w-full mt-4 bg-primary text-white py-2 rounded">
                Ver Disponibilidad
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}