import ChartTest from "@/components/ChartTest"
interface RewindToolProps {

}

function Metric({ label, value, hint }: { label: string; value: string; hint?: string }) {
    return (
        <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-3">
            <div className="text-xs text-zinc-400">{label}</div>
            <div className="mt-1 text-lg font-semibold tracking-tight tabular-nums">{value}</div>
            {hint ? <div className="text-xs text-zinc-500">{hint}</div> : null}
        </div>
    );
}

function RewindTool({ }: RewindToolProps) {

    return (
        <div id="tool" className="lg:justify-self-end w-full">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 shadow-2xl">
                {/* Faux chart header to signal finance UI */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">AAPL</span>
                        {/* <span className="rounded bg-zinc-800/80 px-1.5 py-0.5 text-[10px]"></span> */}
                    </div>
                    <div className="text-xs text-zinc-400">

                    </div>
                </div>

                {/* Inputs */}
                <form className="mt-4 grid grid-cols-1 w-full gap-3 md:grid-cols-4">
                    <label className="flex flex-col gap-1">
                        <span className="text-xs text-zinc-400">Symbol</span>
                        <input
                            value=""
                            placeholder="AAPL"
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-zinc-500"
                            inputMode="text"
                            autoCapitalize="characters"
                            aria-label="Ticker"
                        />
                    </label>
                    <label className="flex flex-col gap-1">
                        <span className="text-xs text-zinc-400">Entry date</span>
                        <input
                            type="date"
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-zinc-500"
                            aria-label="Buy date"
                        />
                    </label>
                    <label className="flex flex-col gap-1">
                        <span className="text-xs text-zinc-400">Exit date</span>
                        <input
                            type="date"
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-zinc-500"
                            aria-label="Sell date"
                        />
                    </label>
                    <div className="flex items-end">
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-emerald-950 hover:bg-emerald-400"
                        >
                            Rewind
                        </button>
                    </div>
                </form>

                {/* Result stub (replace with real data) */}
                <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
                    <Metric label="Final Value" value="$25,410" hint="+$5,410" />
                    <Metric label="Return" value="+27.0%" hint="CAGR 2.4%" />
                    <Metric label="Shares (simulated)" value="142.8" hint="Split‑adjusted" />
                </div>

                {/* Mini chart placeholder */}
                <div className="mt-4 w-full rounded-lg border border-zinc-800 bg-zinc-950/60" aria-hidden>
                    <ChartTest />
                </div>


                <p className="mt-4 text-xs text-zinc-500">
                    Not investment advice.
                </p>
            </div>
        </div>
    )

}

export default RewindTool;