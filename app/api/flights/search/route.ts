import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  console.log("llega aqui el mensaje de enviar datos", body)

  const res = await fetch('https://b2b.travelasistusa.com/api/v1/flights/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
      'secret-token': process.env.TRAVEL_ASIST_TOKEN || ''
    },
    body: JSON.stringify(body)
  });

  

  const data = await res.json();
  return NextResponse.json(data);
}