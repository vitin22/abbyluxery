import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get('term');

  const res = await fetch(`https://b2b.travelasistusa.com/api/v1/flight/targets?term=${term}`, {
    headers: { 'accept': 'application/json', 'secret-token': process.env.TRAVEL_ASIST_TOKEN || '' }
  });
  const data = await res.json();
  return NextResponse.json(data);
}