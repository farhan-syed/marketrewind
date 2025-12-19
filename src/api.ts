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

    const res = await fetch(`/api/time-series?${params.toString()}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as TimeSeriesResponse;
}