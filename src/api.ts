import type { TimeSeriesResponse } from "./types";

type TimeSeriesQuery = {
    symbol: string;
    start: string; // YYYY-MM-DD
    end: string; // YYYY-MM-DD
    interval: string;
}

export async function fetchTimeSeries(q: TimeSeriesQuery): Promise<TimeSeriesResponse>{

    const params = new URLSearchParams({
        symbol: q.symbol,
        start_date: q.start,
        end_date: q.end,
        interval: q.interval
    });

    console.log("Params from api.ts: ", q);

    const res = await fetch(`https://api.twelvedata.com/time_series?${params.toString()}&apikey=9c2e662474aa422eafb187f8416b4573`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as TimeSeriesResponse;
}