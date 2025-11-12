import { useState } from "react";
import type { Fields } from "@/types";
import RewindIcon from "@/components/ui/RewindSVG";


interface RewindToolForm {
    onCalculate: (f: Fields) => void;
}

function RewindToolForm({ onCalculate }: RewindToolForm) {

    const [fields, setFields] = useState<Fields>({
        symbol: "",
        entryDate: "",
        exitDate: "",
        investedAmount: ""
    });

    // handlers
    const onTickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = e.currentTarget.value.toUpperCase();
        setFields(prev => ({ ...prev, symbol: v }))
    }

    const onPurchaseDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = e.currentTarget.value;
        setFields(prev => ({ ...prev, entryDate: v }))
    }

    const onSellDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = e.currentTarget.value;
        setFields(prev => ({ ...prev, exitDate: v }))
    }

    const onAmountInvestedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const n = e.currentTarget.valueAsNumber;
        setFields(prev => ({ ...prev, investedAmount: Number.isNaN(n) ? "" : n }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onCalculate(fields);
        console.log("FROM handleSubmit in MainCard: ", JSON.stringify(fields))
    }

    return (

        <form onSubmit={handleSubmit} className="mt-2 mb-5 grid grid-cols-1 w-full gap-3 md:grid-cols-5">
            <label className="flex flex-col gap-1">
                <span className="text-xs text-zinc-400">Symbol</span>
                <input
                    type="text"
                    value={fields.symbol}
                    onChange={onTickerChange}
                    placeholder="AAPL"
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-zinc-500 h-10"
                    inputMode="text"
                    autoCapitalize="characters"
                    aria-label="Ticker Symbol"
                />
            </label>
            <label className="flex flex-col gap-1">
                <span className="text-xs text-zinc-400">Entry date</span>
                <input
                    type="text"
                    placeholder="2020-03-19"
                    value={fields.entryDate}
                    onChange={onPurchaseDateChange}
                    className="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-zinc-500 h-10"
                    aria-label="Entry date"
                />
            </label>
            <label className="flex flex-col gap-1">
                <span className="text-xs text-zinc-400">Exit date</span>
                <input
                    type="text"
                    placeholder="2025-03-19"
                    value={fields.exitDate}
                    onChange={onSellDateChange}
                    className="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-zinc-500 h-10"
                    aria-label="Exit date"
                />
            </label>

            <label className="flex flex-col gap-1">
                <span className="text-xs text-zinc-400">Amount</span>
                <input
                    type="number"
                    placeholder="10000"
                    value={fields.investedAmount}
                    onChange={onAmountInvestedChange}
                    className="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-zinc-500 h-10"
                    aria-label="Invested Amount"
                />
            </label>

            <div className="flex items-end">
                <button
                    type="submit"
                    // className="w-full rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-emerald-950 hover:bg-emerald-400 h-10">
                    className="w-full rounded-lg bg-brand-500 hover:bg-brand-400 text-emerald-950 px-3 py-2 text-sm font-semibold h-10 inline-flex items-center gap-1">
                    Rewind<RewindIcon size={16} strokeWidth={3} />
                </button>
            </div>
        </form>
    )
}

export default RewindToolForm;
