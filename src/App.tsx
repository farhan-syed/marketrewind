// App.tsx (UI-only / presentational)
import Header from "./components/Header";
import Hero from "./components/Hero";
// import MainCard from "./components/MainCard";
// import ResultCard from "./components/ResultCard";
import Upgrade from "./components/Upgrade";
// import RelatedSymbols from "./components/RelatedSymbols";
// import ErrorCard from "./components/ErrorCard";
import Footer from "./components/Footer";

// vercel analytics
import { Analytics } from "@vercel/analytics/react"

// import { fetchTimeSeries } from "./api";
// import { nextDayISO, toResult } from "./utils";
// import type { Fields, Result, TimeSeriesResponse } from "./types";
// import { useState, useRef } from "react";

// function Explainer({ title, body }: { title: string; body: string }) {
//   return (
//     <div className="">
//       <div className="text-base font-semibold text-zinc-100">{title}</div>
//       <p className="mt-1 text-sm text-zinc-300">{body}</p>
//     </div>
//   );
// }

function App() {

  // const [result, setResult] = useState<Result | null>(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);
  // const abortRef = useRef<AbortController | null>(null);

  // const handleCalculate = async (fields: Fields) => {
  //   try {
  //     setLoading(true);
  //     setError(null);
  //     setResult(null);

  //     abortRef.current?.abort()
  //     abortRef.current = new AbortController();

  //     const raw: TimeSeriesResponse = await fetchTimeSeries({
  //       symbol: fields.symbol.trim(),
  //       start: fields.entryDate,
  //       end: nextDayISO(fields.exitDate),
  //       interval: "1day"
  //     });

  //     const invested = fields.investedAmount === "" ? 0 : fields.investedAmount;
  //     setResult(toResult(raw, invested));
  //   } catch (err: unknown) {
  //     console.log('error on abort');
  //     if (err instanceof DOMException && err.name === "AbortError") {
  //       // ignore
  //     } else {
  //       setError(err instanceof Error ? err.message : String(err));
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  return (
    // <div className="App">
    <div className="min-h-svh flex flex-col bg-zinc-950 text-zinc-100">
      <Analytics />
      <Header />
      <main className="flex-1">
        <Hero />

        {/* EXPLAINER */}
        {/* <section className="border-t border-zinc-900 bg-zinc-950">
          <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-3">
            <Explainer
              title="Pick dates"
              body="Choose a buy date and sell date. We handle weekends and market holidays."
            />
            <Explainer
              title="We fetch & compute"
              body="We pull EOD data, account for splits, and compute shares, final value, and % return."
            />
            <Explainer
              title="Save & remind (Pro)"
              body="Save scenarios to Watch and get reminders on future sell dates."
            />
          </div>
        </section> */}


        {/* Give MainCard a no-op if it expects onSubmit */}
        {/* <MainCard onCalculate={handleCalculate} /> */}

        {/* If these components require props in your codebase, either:
            1) make their props optional, or
            2) pass placeholder data where needed. 
            For now, they’re commented out to keep this file UI-only. */}

        {/* <ErrorCard message="" /> */}

        {/* <RelatedSymbols symbols={[]} onSwitch={() => {}} /> */}

        {/* <ResultCard loading={loading} error={error} result={result} /> */}

        {/* <Upgrade /> */}

      </main>
      <Footer />
    </div>
    // </div>
  );
};

export default App;
