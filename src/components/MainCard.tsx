import { useState } from "react";
import type { Fields } from "../types";

interface MainCardProps {
  onCalculate: (f: Fields) => void;
}

function MainCard({ onCalculate }: MainCardProps){

  const [fields, setFields] = useState<Fields>({
    symbol: "",
    entryDate: "",
    exitDate: "",
    investedAmount: ""
  });

  // handlers
  const onTickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.currentTarget.value.toUpperCase();
    setFields(prev => ({ ...prev, symbol: v}))
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
    setFields(prev => ({ ...prev, investedAmount: Number.isNaN(n) ? "" : n}))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCalculate(fields);
    console.log("FROM handleSubmit in MainCard: ", JSON.stringify(fields))
  }

  return (
    <div className="flex-none">
        <div className="flex flex-col items-center">
          <div className="w-110 p-5 mb-5 rounded-md shadow-2xl bg-white dark:bg-dark">
            <p className="font-bold text-center text-black-900 dark:text-dark-p text-2xl leading-10 tracking-tight">
              Market Rewind
            </p>
            <p className="text-xs text-center font-semibold leading-none dark:text-dark-s">
              What you could’ve made...or lost.
            </p>
            <form onSubmit={handleSubmit}>
              <p className="pt-3 text-xs font-semibold leading-normal dark:text-dark-p">
                Ticker Symbol
              </p>

              <input
                type="text"
                placeholder="AAPL"
                name="symbol"
                value={fields.symbol}
                onChange={onTickerChange}
                className="h-7 w-full p-3 text-xs rounded-sm shadow-inner bg-gray-100 border-0 focus:ring-green-500 focus:bg-white"
              />

              <div className="flex justify-between">
                <div className="pr-1">
                  <p className="pt-3 text-xs font-semibold leading-normal dark:text-dark-p">
                    Purchase Date
                  </p>
                  <input type="text" placeholder="YYYY-MM-DD" onChange={onPurchaseDateChange} value={fields.entryDate} className="h-7 w-full p-3 text-xs rounded-sm shadow-inner bg-gray-100 border-0 focus:ring-green-500 focus:bg-white"/>
                </div>
                <div className="pl-1">
                  <p className="pt-3 text-xs font-semibold leading-normal dark:text-dark-p">
                    Sell Date
                  </p>
                  <input type="text" placeholder="YYYY-MM-DD" onChange={onSellDateChange} value={fields.exitDate} className="h-7 w-full p-3 text-xs rounded-sm shadow-inner bg-gray-100 border-0 focus:ring-green-500 focus:bg-white"/>
                </div>
              </div>

              <p className="pt-3 text-xs font-semibold leading-normal dark:text-dark-p">
                Amount Invested
              </p>
              <input
                type="number"
                placeholder="10000"
                name="amount"
                value={fields.investedAmount}
                onChange={onAmountInvestedChange}
                className="block h-7 w-full p-3 text-xs rounded-sm shadow-inner bg-gray-100 border-0 focus:ring-green-500 focus:bg-white"
              />

              <button
                type="submit"
                className="h-10 w-full text-center font-semibold mt-6 p-1 bg-green-500 text-white rounded-sm hover:bg-green-400 hover:text-white focus:outline-none dark:bg-dark-purple dark:hover:bg-purple-500"
              >
                Calculate
              </button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default MainCard;