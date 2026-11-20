const API_KEY = 'Adrian_Ganteng_Banget';

const credentials = {
  token:    process.env.GTC_TOKEN     || 'dlcurU142f1cb881394b6d1195692da5f9b360b90a38e9ee54c6efc29a',
  finalKey: process.env.GTC_FINAL_KEY || '6b445f7057e4ad04c5a9623cb31d6b644d273a0b745df354c8d06706c0db4d84',
  deviceId: process.env.GTC_DEVICE_ID || '26e753fdd5e3e22f',
  phone:    process.env.GTC_PHONE     || '+6289530706871',
};

export default function handler(req, res) {
  const key = req.headers['x-api-key'];
  if (key !== API_KEY) {
    return res.status(401).json({ success: false, error: 'Unauthorized' });
  }
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.status(200).json({ success: true, credentials, timestamp: Date.now() });
}