interface UpgradeProps { }

function Check({ highlight }: { highlight?: boolean }) {
  return (
    <span
      className={
        highlight
          ? "inline-flex items-center justify-center rounded bg-brand-500/15 text-brand-400 px-2 py-1"
          : "inline-flex items-center justify-center text-zinc-300"
      }
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden={true}>
        <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
      </svg>
    </span>
  );
}

function Dash() {
  return <span className="inline-flex items-center justify-center text-zinc-500">—</span>;
}

function Badge({ label, highlight }: { label: string; highlight?: boolean }) {
  return (
    <span
      className={
        highlight
          ? "inline-flex items-center justify-center rounded border border-brand-400/30 bg-brand-400/10 px-2 py-0.5 text-[12px] font-medium text-brand-300"
          : "inline-flex items-center justify-center rounded border border-zinc-500/30 bg-zinc-500/10 px-2 py-0.5 text-[12px] font-medium text-zinc-300"
      }
    >
      {label}
    </span>
  );
}

type PlanCell = boolean | string;
function Cell({ value, highlight }: { value: PlanCell; highlight?: boolean }) {
  if (typeof value === "string") {
    return <Badge label={value} highlight={highlight} />;
  }
  return value ? <Check highlight={highlight} /> : <Dash />;
}

function Upgrade({ }: UpgradeProps) {
  return (
    <section className="border-t border-zinc-900 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100">
              <span className="text-brand-500">Unlock more for $1.99/month.</span>
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-prose">
              Upgrade for unlimited rewinds, track your portfolio, set reminders and compare trades.
            </p>
          </div>
          <a
            href="/pro"
            className="rounded-lg bg-brand-500 px-3 py-2 text-sm font-semibold text-emerald-950 hover:bg-brand-400"
          >
            Upgrade
          </a>
        </header>

        <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/50">
          <table className="w-full text-sm">
            <thead className="text-zinc-300">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Feature</th>
                <th className="px-4 py-3 text-center font-medium">
                  <div>Free</div>
                  <div className="mt-0.5 text-xs text-zinc-500">$0</div>
                </th>
                <th className="px-4 py-3 text-center font-medium">
                  <div>Pro</div>
                  <div className="mt-0.5 text-xs font-semibold text-brand-400">$1.99/month</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {([
                { label: "Shareable Rewind links", free: true, pro: true },
                { label: "Unlimited Rewinds", free: true, pro: true },
                { label: "Save watchlist", free: "Up to 5", pro: "Unlimited" },
                { label: "Compare multiple stocks over time", free: false, pro: true },
                { label: "Set reminders for gain/loss on selected date", free: false, pro: true },
              ] as Array<{ label: string; free: boolean | string; pro: boolean | string }>).map((row, i) => (
                <tr key={i}>
                  <td className="px-4 py-3 text-zinc-200">{row.label}</td>
                  <td className="px-4 py-3 text-center"><Cell value={row.free} /></td>
                  <td className="px-4 py-3 text-center"><Cell value={row.pro} highlight /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <p className="mt-3 text-xs text-zinc-500">
                    Results are for illustration only. Market Rewind is not investment advice.
                </p> */}
      </div>
    </section>
  )
}

export default Upgrade;
