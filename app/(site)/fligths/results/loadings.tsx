export default function LoadingFlights() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 animate-pulse">
      <div className="h-10 w-48 bg-muted rounded-md mb-8" />

      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="bg-card border border-border rounded-xl h-40 flex overflow-hidden">
          {/* Parte izquierda (Ruta) */}
          <div className="flex-1 p-8 flex items-center justify-between border-r border-border">
            <div className="space-y-2">
              <div className="h-8 w-16 bg-muted rounded" />
              <div className="h-4 w-10 bg-muted/60 rounded" />
            </div>
            <div className="flex-1 max-w-[150px] px-6">
              <div className="h-1 w-full bg-muted rounded" />
            </div>
            <div className="space-y-2 text-right">
              <div className="h-8 w-16 bg-muted rounded" />
              <div className="h-4 w-10 bg-muted/60 rounded" />
            </div>
          </div>
          {/* Parte derecha (Precio) */}
          <div className="w-64 bg-muted/20 p-8 flex flex-col items-center justify-center space-y-3">
            <div className="h-4 w-12 bg-muted rounded" />
            <div className="h-10 w-24 bg-muted rounded" />
            <div className="h-10 w-full bg-muted rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}