import { useState, useRef } from "react";

import RewindToolForm from "@/components/RewindToolForm";
import RewindToolResult from "@/components/RewindToolResult";


import { fetchTimeSeries } from "@/api";
import { nextDayISO, toResult } from "@/utils";
import type { Fields, Result, TimeSeriesResponse } from "@/types";


import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

interface RewindToolProps { }

function RewindTool({ }: RewindToolProps) {


  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const handleCalculate = async (fields: Fields) => {
    console.log('starting request...')
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
      if (err instanceof DOMException && err.name === "AbortError") {
        // ignore
      } else {
        setError(err instanceof Error ? err.message : String(err));
        console.log(err);
      }
    } finally {
      setLoading(false);
    }
  }



  return (
    <div id="tool" className="lg:justify-self-end w-full">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 shadow-2xl">
      
        {/* form component */}
        <RewindToolForm onCalculate={handleCalculate} />
         
        {/* result component */}
        <RewindToolResult loading={loading} error={error} result={result} />
        {/* end result component */}

      </div>
    </div>
  )

}

export default RewindTool;