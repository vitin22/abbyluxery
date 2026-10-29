import { Plane, Clock, Luggage, ShieldCheck, ArrowRight, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// 1. Función para obtener disponibilidad de vuelos desde el servidor
async function getFlightAvailability(from: string, to: string) {
  // Nota: Ajusta esta URL según el endpoint exacto de disponibilidad de TravelAsist
  const res = await fetch(
    `https://b2b.travelasistusa.com/api/v1/flights/availability?source=${from}&destination=${to}&language=es`,
    {
      headers: {
        'accept': 'application/json',
        'secret-token': process.env.TRAVEL_ASIST_TOKEN || ''
      },
      next: { revalidate: 0 } // Los precios de vuelos cambian rápido, mejor no cachear mucho
    }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function FlightResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ from: string; to: string; fromName: string; toName: string }>;
}) {
  const { from, to, fromName, toName } = await searchParams;
  const response = await getFlightAvailability(from, to);

  // Mapeamos los itinerarios (ajustar según la respuesta real de la API)
  const itineraries = response?.data?.itineraries || [];

  return (
    <main className="min-h-screen bg-secondary/20 pb-20">
      <div className="max-w-5xl mx-auto p-6">
        
        {/* Encabezado de la búsqueda */}
        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="text-left">
              <p className="text-xs text-muted-foreground uppercase font-bold">Origen</p>
              <h2 className="text-xl font-bold">{fromName || "Origin"}</h2>
            </div>
            <ArrowRight className="text-primary h-5 w-5" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground uppercase font-bold">Destino</p>
              <h2 className="text-xl font-bold">{toName || "Destination"}</h2>
            </div>
          </div>
          <Badge variant="outline" className="w-fit border-primary text-primary px-4 py-1">
            {itineraries.length} Vuelos encontrados
          </Badge>
        </header>

        {/* Listado de Vuelos */}
        <div className="space-y-6">
          {itineraries.length > 0 ? (
            itineraries.map((flight: any) => (
              <Card key={flight.id} className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    
                    {/* Sección de Itinerario */}
                    <div className="flex-[2] p-8 flex items-center justify-between bg-white">
                      {/* Salida */}
                      <div className="text-center md:text-left">
                        <p className="text-3xl font-black text-foreground">{flight.departureTime}</p>
                        <p className="text-sm font-bold text-primary uppercase">{flight.originCode}</p>
                        <p className="text-[10px] text-muted-foreground">{flight.originName}</p>
                      </div>

                      {/* Línea de Trayecto */}
                      <div className="flex flex-col items-center px-6 flex-1 max-w-[250px]">
                        <span className="text-[11px] font-bold text-muted-foreground mb-2 flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {flight.duration}
                        </span>
                        <div className="relative w-full h-[2px] bg-slate-200 flex items-center justify-center">
                          <div className="absolute h-2 w-2 rounded-full bg-slate-300 left-0" />
                          <Plane className="h-5 w-5 text-primary absolute bg-white px-1 group-hover:translate-x-2 transition-transform duration-700" />
                          <div className="absolute h-2 w-2 rounded-full bg-slate-300 right-0" />
                        </div>
                        <span className="text-[10px] mt-2 font-medium text-green-600 uppercase tracking-wider">
                          {flight.stops === 0 ? "Vuelo Directo" : `${flight.stops} Escala(s)`}
                        </span>
                      </div>

                      {/* Llegada */}
                      <div className="text-center md:text-right">
                        <p className="text-3xl font-black text-foreground">{flight.arrivalTime}</p>
                        <p className="text-sm font-bold text-primary uppercase">{flight.destinationCode}</p>
                        <p className="text-[10px] text-muted-foreground">{flight.destinationName}</p>
                      </div>
                    </div>

                    {/* Sección de Precio y CTA */}
                    <div className="flex-1 bg-slate-50 border-l border-dashed border-slate-200 p-8 flex flex-col justify-center items-center">
                      <div className="text-center mb-6">
                        <p className="text-xs text-muted-foreground font-medium mb-1">Precio Final</p>
                        <p className="text-4xl font-black text-primary">
                          <span className="text-lg font-bold mr-1">$</span>
                          {flight.price}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-tighter">Impuestos incluidos</p>
                      </div>
                      <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
                        Seleccionar <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Detalles Extras (Footer del Ticket) */}
                  <div className="bg-slate-100/50 px-8 py-3 flex flex-wrap items-center gap-6 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                      <Luggage className="h-3.5 w-3.5 text-primary" /> Equipaje: {flight.baggage || "1 pieza 23kg"}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                      <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Tarifa Reembolsable
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                       <span className="text-[10px] text-slate-400 italic">Operado por</span>
                       <span className="text-xs font-bold text-slate-700 uppercase">{flight.airline}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-dashed">
              <Info className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold">No se encontraron vuelos</h3>
              <p className="text-muted-foreground">Intenta cambiar las fechas o el destino de tu búsqueda.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}