import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const API_KEY = 'Adrian_Ganteng_Banget';

// ==== ISI CREDENTIAL DI SINI ====
// Paste langsung, tanpa encode, tanpa split, tanpa base64.
const credentials = {
  token:    process.env.GTC_TOKEN     || 'PASTE_TOKEN_DISINI',
  finalKey: process.env.GTC_FINAL_KEY || 'PASTE_FINAL_KEY_DISINI',
  deviceId: process.env.GTC_DEVICE_ID || 'PASTE_DEVICE_ID_DISINI',
  phone:    process.env.GTC_PHONE     || 'PASTE_PHONE_DISINI',
};

export async function GET(req) {
  const key = req.headers.get('x-api-key');
  if (key !== API_KEY) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized' },
      { status: 401 }
    );
  }
  return NextResponse.json(
    { success: true, credentials, timestamp: Date.now() },
    { headers: { 'Cache-Control': 'no-store, max-age=0' } }
  );
}
