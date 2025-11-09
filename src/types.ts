export type Fields = {
    symbol: string; // AAPL
    entryDate: string; 
    exitDate: string;
    investedAmount: number | "";
}

export type Result = {
    meta: TimeSeriesMeta;
    entry: {
        date: string
        close: string
    }
    exit: {
        date: string;
        close: string;
    }
    shares: string;
    grossProceeds: string;
    netProceeds: string;
    pnlAmount: string;
    returnPct: string;
    pnlAmountNet: string;
    returnPctNet: string;
    isProfit: boolean;
    historicValues: TimeSeriesValuesFormatted[]
}

export type TimeSeriesValuesFormatted = {
    datetime: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}

// TwelveData
export type TimeSeriesStatus = "ok" | "error";

export interface TimeSeriesMeta  {
    symbol: string;
    interval: string;
    currency: string;
    exchange_timezone: string;
    exchange: string;
    mic_code: string;
    type: string;
}

export interface TimeSeriesValues {
    datetime: string;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
}

export interface TimeSeriesResponse {
    meta: TimeSeriesMeta;
    values: TimeSeriesValues[];
    status: TimeSeriesStatus;
}
