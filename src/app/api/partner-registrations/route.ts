import { NextResponse } from 'next/server';

// Social-proof counter for the Partners page header: server-side proxy to the Partner fallback's
// public registrations count (avoids browser CORS). Count only, no PII.
export async function GET() {
  try {
    const res = await fetch('https://register.partner.alfa-can.com/api/v1/partner/stats/registrations', {
      next: { revalidate: 60 },
    });
    const data = await res.json();
    return NextResponse.json({ count: Number(data?.count) || 0 });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}
