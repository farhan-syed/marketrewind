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
    investedAmount: "",
  });

  const [rawAmount, setRawAmount] = useState("");

  type FieldErrors = Partial<Record<keyof Fields, string>>;
  const [errors, setErrors] = useState<FieldErrors>({});

  const validate = (): boolean => {
    const newErrors: FieldErrors = {};

    if (!fields.symbol.trim()) {
      newErrors.symbol = "Symbol is required";
    }

    if (!fields.entryDate) {
      newErrors.entryDate = "Entry date is required";
    }

    if (!fields.exitDate) {
      newErrors.exitDate = "Exit date is required";
    }

    if (!fields.investedAmount || Number(fields.investedAmount) <= 0) {
      newErrors.investedAmount = "Enter a valid amount";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // handlers
  const onTickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.currentTarget.value.toUpperCase().replace(/[^A-Z]/g, "");
    if (v.length > 5) v = v.slice(0, 5);
    setFields((prev) => ({ ...prev, symbol: v }));
  };

  const onPurchaseDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.currentTarget.value;
    setFields((prev) => ({ ...prev, entryDate: v }));
  };

  const onSellDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.currentTarget.value;
    setFields((prev) => ({ ...prev, exitDate: v }));
  };

  const usdFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });

  const onAmountInvestedBlur = () => {
    if (rawAmount === "") return;

    const value = Number(rawAmount);
    if (Number.isNaN(value)) return;

    setRawAmount(usdFormatter.format(value)); // now show $1,000.00
  };

  const onAmountInvestedFocus = () => {
    if (!rawAmount) return;

    // Strip non-digits (remove $ and commas)
    const numeric = rawAmount.replace(/[^0-9.]/g, "");
    setRawAmount(numeric);
  };

  const onAmountInvestedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.currentTarget.value;

    // Allow only digits and one optional decimal
    if (!/^\d*\.?\d{0,2}$/.test(raw)) return;

    setRawAmount(raw); // keep what user types

    const value = Number(raw);
    setFields((prev) => ({
      ...prev,
      investedAmount: Number.isNaN(value) ? "" : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    onCalculate(fields);
    console.log("FROM handleSubmit in MainCard: ", JSON.stringify(fields));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-2 mb-5 grid grid-cols-1 w-full gap-3 md:grid-cols-8 font-mono tracking-wider"
    >
      <label className="flex flex-col gap-1 md:col-span-1">
        <span className="text-xs text-zinc-400">Symbol</span>
        <input
          type="text"
          maxLength={5}
          value={fields.symbol}
          onChange={onTickerChange}
          placeholder="AAPL"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-zinc-500 h-10"
          inputMode="text"
          autoCapitalize="characters"
          aria-label="Ticker Symbol"
        />
        {errors.symbol && (
          <p className="text-red-400 text-sm">{errors.symbol}</p>
        )}
      </label>
      <label className="flex flex-col gap-1 md:col-span-2">
        <span className="text-xs text-zinc-400">Entry date</span>
        <input
          type="date"
          placeholder="2020-03-19"
          value={fields.entryDate}
          onChange={onPurchaseDateChange}
          className="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-zinc-500 h-10"
          style={{ colorScheme: "dark" }}
          aria-label="Entry date"
        />

        {errors.entryDate && (
          <p className="text-red-400 text-sm">{errors.entryDate}</p>
        )}
      </label>
      <label className="flex flex-col gap-1 md:col-span-2">
        <span className="text-xs text-zinc-400">Exit date</span>
        <input
          type="date"
          placeholder="2025-03-19"
          value={fields.exitDate}
          onChange={onSellDateChange}
          className="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-zinc-500 h-10"
          style={{ colorScheme: "dark" }}
          aria-label="Exit date"
          max={new Date().toISOString().split("T")[0]}
        />

        {errors.exitDate && (
          <p className="text-red-400 text-sm">{errors.exitDate}</p>
        )}
      </label>
      <label className="flex flex-col gap-1 md:col-span-2">
        <span className="text-xs text-zinc-400">Amount</span>
        <input
          type="text"
          inputMode="decimal"
          placeholder="$10,000"
          value={rawAmount}
          onChange={onAmountInvestedChange}
          onBlur={onAmountInvestedBlur}
          onFocus={onAmountInvestedFocus}
          className="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-zinc-500 h-10"
          aria-label="Invested Amount"
          max={new Date().toISOString().split("T")[0]}
        />

        {errors.investedAmount && (
          <p className="text-red-400 text-sm">{errors.investedAmount}</p>
        )}
      </label>
      <div className="flex items-end md:col-span-1">
        <button
          type="submit"
          className="w-full rounded-lg bg-brand-500 hover:bg-brand-400 text-emerald-950
                     px-3 py-2 text-sm font-semibold h-10
                     inline-flex items-center justify-center gap-1 cursor-pointer"
        >
          <span className="md:hidden">Rewind</span>
          <span className="md:hidden">
            <RewindIcon size={18} strokeWidth={2} />
          </span>
          <span className="hidden md:block">
            <RewindIcon size={24} strokeWidth={2} />
          </span>
        </button>
      </div>
    </form>
  );
}

export default RewindToolForm;
