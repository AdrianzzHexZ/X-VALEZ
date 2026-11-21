const API_KEY = 'Adrian_Ganteng_Banget';

const credentials = {
  token:    process.env.GTC_TOKEN     || 'dlejiU245d657bc1404ca0fd6ed88ab4611345c2fd3443170aa7905179 ',
  finalKey: process.env.GTC_FINAL_KEY || '20442dae3725fb726206ec341632a46c99f6f4a0556f4674c69b3360611db7e3',
  deviceId: process.env.GTC_DEVICE_ID || '504b65dabddfb0fa',
  phone:    process.env.GTC_PHONE     || '+6289682091044',
};

export default function handler(req, res) {
  const key = req.headers['x-api-key'];
  if (key !== API_KEY) {
    return res.status(401).json({ success: false, error: 'Akses ditolak. Jangan nyolong api bang' });
  }
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.status(200).json({ success: true, credentials, timestamp: Date.now() });
}