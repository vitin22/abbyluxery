import HotelResultsList from "@/components/HotelResultsList";

async function getHotels(destCode: string) {
  const res = await fetch(`https://b2b.travelasistusa.com/api/v1/accommodation/hotels?destinationCode=${destCode}`, {
    headers: {
      'accept': 'application/json',
      'secret-token': process.env.TRAVEL_ASIST_TOKEN || ''
    }
  });
  return res.json();
}

export default async function Page({ searchParams }: any) {
  const { destCode, destName } = await searchParams;
  const response = await getHotels(destCode);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-serif mb-6">Hoteles en {destName}</h1>
      
      {/* Componente de cliente para manejar los filtros vivos */}
      <HotelResultsList 
        initialHotels={response.data?.products || []} 
        range={response.data?.range} 
      />
    </div>
  );
}