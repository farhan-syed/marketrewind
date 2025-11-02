import type { TimeSeriesResponse, Result } from "./types";
import { compute } from "./compute";
import { usd, prettyDate } from './formatting';

export function toResult(data: TimeSeriesResponse, investedAmount: number): Result {
    console.log("data from toResult(): ", data);

    if (data.status !== "ok" || data.values.length === 0) {
        throw new Error("No data returned");
    }

    const first = data.values[0];
    const last = data.values[data.values.length -1 ];

    const entryPrice = Number(last.close);
    const exitPrice = Number(first.close);

    const fmt = compute(investedAmount, entryPrice, exitPrice, 0);

    console.log(fmt);

    return {
        symbol: data.meta.symbol,
        entry: {
            date: prettyDate(last.datetime),
            close: usd.format(entryPrice)
        },
        exit: {
            date: prettyDate(first.datetime),
            close: usd.format(exitPrice)
        },
        shares: fmt.shares,
        grossProceeds: fmt.grossProceeds,
        netProceeds: fmt.netProceeds,
        pnlAmount: fmt.pnlAmount,
        returnPct: fmt.returnPct,
        pnlAmountNet: fmt.pnlAmountNet,
        returnPctNet: fmt.returnPctNet,
        isProfit: fmt.isProfit
    }
}

export function nextDayISO(dateISO: string): string {
    const d = new Date(dateISO + "T00:00:00Z");
    d.setUTCDate(d.getUTCDate() + 1);
    return d.toISOString().slice(0,10); // YYYY-MM-DD
}