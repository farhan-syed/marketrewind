import type { TimeSeriesResponse, TimeSeriesValues, TimeSeriesValuesFormatted, Result } from "./types";
import { compute } from "./compute";
import { usd, prettyDate } from './formatting';


export function toResult(data: TimeSeriesResponse, investedAmount: number): Result {

    if (data.status !== "ok" || data.values.length === 0) {
        throw new Error("No data returned");
    }

    const first = data.values[0];
    const last = data.values[data.values.length - 1];

    const entryPrice = Number(last.close);
    const exitPrice = Number(first.close);

    const fmt = compute(investedAmount, entryPrice, exitPrice, 0);


    //convert values to numbers

    return {
        meta: data.meta,
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
        isProfit: fmt.isProfit,
        historicValues: toNumericTimeSeries(data.values.reverse())
    }
}

export function nextDayISO(dateISO: string): string {
    const d = new Date(dateISO + "T00:00:00Z");
    d.setUTCDate(d.getUTCDate() + 1);
    return d.toISOString().slice(0, 10); // YYYY-MM-DD
}

export function toNumericTimeSeries(
  values: TimeSeriesValues[]
): TimeSeriesValuesFormatted[] {
  return values.map((v) => ({
    datetime: v.datetime,
    open: Number(v.open),
    high: Number(v.high),
    low: Number(v.low),
    close: Number(v.close),
    volume: Number(v.volume),
  }));
}