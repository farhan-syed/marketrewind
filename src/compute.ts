import { usd, pct } from './formatting';

export type ComputeOutput = {
    shares: string;
    grossProceeds: string;
    netProceeds: string;
    pnlAmount: string;
    returnPct: string;
    pnlAmountNet: string;
    returnPctNet: string;
    isProfit: boolean;
}

export function compute(
    investedAmount: number,
    entryPrice: number,
    exitPrice: number,
    fees = 0
): ComputeOutput {
    if (!(investedAmount > 0 && entryPrice > 0 && exitPrice > 0)){
        throw new Error("investedAmount, entryPrice, exitPrice must be > 0");
    }
    
    const sharesRaw = investedAmount / entryPrice;
    const grossProceedsRaw = sharesRaw * exitPrice;

    const pnlAmountRaw = grossProceedsRaw - investedAmount;
    const returnPctRaw = pnlAmountRaw / investedAmount;

    const netProceedsRaw = grossProceedsRaw - fees;
    const pnlAmountNetRaw = netProceedsRaw - investedAmount;
    const returnPctNetRaw = pnlAmountNetRaw / investedAmount;

    

    return {
        shares: sharesRaw.toFixed(0),
        grossProceeds: usd.format(grossProceedsRaw),
        netProceeds: usd.format(netProceedsRaw),
        pnlAmount: usd.format(pnlAmountRaw),
        returnPct: pct.format(returnPctRaw),
        pnlAmountNet: usd.format(pnlAmountNetRaw),
        returnPctNet: pct.format(returnPctNetRaw),
        isProfit: pnlAmountRaw > 0
    }
}