import type { Result } from "@/types";

import ChartTest from "./Chart";

interface RewindToolResultProps {
  loading: boolean;
  error: string | null;
  result: Result | null;
}

function Metric({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-3">
      <div className="text-xs text-zinc-400">{label}</div>
      <div className="mt-1 text-lg font-semibold tracking-tight tabular-nums">
        {value}
      </div>
      {hint ? <div className="text-xs text-zinc-500">{hint}</div> : null}
    </div>
  );
}

function RewindToolResult({ loading, error, result }: RewindToolResultProps) {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!result) return null;

  return (
    <>
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4 font-mono tracking-wider">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{result.meta.symbol}</span>
          <span className="rounded bg-zinc-800/80 px-1.5 py-0.5 text-[10px]">
            {result.meta.type}
          </span>
        </div>
        {/* <div className="text-xs text-zinc-400">
                    {result.meta.currency}
                </div> */}
        <span className="rounded bg-zinc-800/80 px-1.5 py-0.5 text-[10px]">
          {result.meta.exchange}
        </span>
      </div>
      {/* Mini chart placeholder */}
      <div className="mt-4" aria-hidden>
        <ChartTest result={result} />
      </div>

      {/* Result stub (replace with real data) */}
      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3 font-mono tracking-tight tabular-nums">
        <Metric
          label="Shares"
          value={result.shares}
          hint={`${result.entry.close} / share`}
        />
        <Metric
          label="Return"
          value={result.pnlAmount}
          hint={`${result.returnPct}`}
        />
        <Metric
          label="Final Value"
          value={result.netProceeds}
          hint={`${result.exit.close} / share`}
        />
      </div>
    </>
  );
}

export default RewindToolResult;
