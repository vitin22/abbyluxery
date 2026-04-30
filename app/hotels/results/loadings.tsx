import { Card, CardContent } from "@/components/ui/card";

export default function LoadingHotels() {
  return (
    <div className="max-w-7xl mx-auto p-6 animate-pulse">
      {/* Skeleton del Título */}
      <div className="h-10 w-64 bg-muted rounded-md mb-2" />
      <div className="h-4 w-96 bg-muted/60 rounded-md mb-8" />

      {/* Skeleton de Filtros */}
      <div className="h-24 w-full bg-muted/40 rounded-xl mb-8" />

      {/* Grid de Tarjetas Skeletons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="border-border overflow-hidden">
            <div className="h-64 bg-muted" />
            <CardContent className="p-6 space-y-4">
              <div className="h-6 w-3/4 bg-muted rounded" />
              <div className="space-y-2">
                <div className="h-3 w-full bg-muted/60 rounded" />
                <div className="h-3 w-5/6 bg-muted/60 rounded" />
              </div>
              <div className="flex justify-between items-center pt-4">
                <div className="h-8 w-24 bg-muted rounded" />
                <div className="h-10 w-28 bg-muted rounded" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}