// App.tsx (UI-only / presentational)
import Header from "./components/Header";
import MainCard from "./components/MainCard";
import ResultCard from "./components/ResultCard";
// import RelatedSymbols from "./components/RelatedSymbols";
// import ErrorCard from "./components/ErrorCard";
import Footer from "./components/Footer";

import { fetchTimeSeries } from "./api";
import { nextDayISO, toResult } from "./utils";
import type { Fields, Result, TimeSeriesResponse } from "./types";
import { useState, useRef } from "react";

function App() {

  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const handleCalculate = async (fields: Fields) => {
    try {
      setLoading(true);
      setError(null);
      setResult(null);

      abortRef.current?.abort()
      abortRef.current = new AbortController();

      const raw: TimeSeriesResponse = await fetchTimeSeries({
        symbol: fields.symbol.trim(),
        start: fields.entryDate,
        end: nextDayISO(fields.exitDate),
        interval: "1day"
      });

      const invested = fields.investedAmount === "" ? 0 : fields.investedAmount;
      setResult(toResult(raw, invested));
    } catch (err: unknown) {
      console.log('error on abort');
      if (err instanceof DOMException && err.name === "AbortError"){
        // ignore
      } else {
        setError(err instanceof Error ? err.message : String(err));
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <div className="flex flex-col min-h-screen font-main dark:bg-dark-menu">
        <Header />

        {/* Give MainCard a no-op if it expects onSubmit */}
        <MainCard onCalculate={handleCalculate}/>

        {/* If these components require props in your codebase, either:
            1) make their props optional, or
            2) pass placeholder data where needed. 
            For now, they’re commented out to keep this file UI-only. */}

        {/* <ErrorCard message="" /> */}

        {/* <RelatedSymbols symbols={[]} onSwitch={() => {}} /> */}

        <ResultCard loading={loading} error={error} result={result}/>

        <Footer />
      </div>
    </div>
  );
};

export default App;
