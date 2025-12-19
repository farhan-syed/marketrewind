import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const { symbol, start, end, interval } = req.query;

  if (!symbol || !start || !end || !interval) {
    return res.status(400).json({ error: "Missing params" });
  }

  const params = new URLSearchParams({
    symbol: String(symbol),
    start_date: String(start),
    end_date: String(end),
    interval: String(interval),
    apikey: process.env.TWELVE_API_KEY!,
  });

  const response = await fetch(
    `https://api.twelvedata.com/time_series?${params.toString()}`
  );

  const data = await response.json();
  res.status(200).json(data);
}
