import { NextResponse } from 'next/server';

/**
 * Endpoint para buscar destinos de hoteles
 * URL de consumo: /api/destinations?term=mexico
 */
export async function GET(request: Request) {
  // 1. Extraer el término de búsqueda de la URL
  const { searchParams } = new URL(request.url);
  const term = searchParams.get('term');

  // Validar que el término exista para ahorrar llamadas innecesarias
  if (!term || term.length < 3) {
    return NextResponse.json({ status: false, data: [] }, { status: 400 });
  }

  try {
    // 2. Llamada a la API externa de TravelAsist
    const response = await fetch(
      `https://b2b.travelasistusa.com/api/v1/accommodation/destinations?term=${encodeURIComponent(term)}&language=es`,
      {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          // Usamos la variable de entorno para seguridad total
          'secret-token': process.env.TRAVEL_ASIST_TOKEN || '0950ea6978941707c0fb9fe4dff3646403d7174c'
        },
        // Configuramos caché de Next.js (60 segundos para evitar duplicar peticiones iguales)
        next: { revalidate: 60 } 
      }
    );

    // 3. Si la API falla, capturamos el error
    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { status: false, message: 'Error from TravelAsist API', detail: errorData },
        { status: response.status }
      );
    }

    // 4. Retornar los datos al frontend (cliente)
    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    // 5. Error de conexión o servidor
    console.error('Destinations API Error:', error);
    return NextResponse.json(
      { status: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}