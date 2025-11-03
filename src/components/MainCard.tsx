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
    <div className="">
        <div className="">
          <div className="">
            <p className="">
              Market Rewind
            </p>
            <p className="">
              What you could’ve made...or lost.
            </p>
            <form onSubmit={handleSubmit}>
              <p className="">
                Ticker Symbol
              </p>

              <input
                type="text"
                placeholder="AAPL"
                name="symbol"
                value={fields.symbol}
                onChange={onTickerChange}
                className=""
              />

              <div className="">
                <div className="">
                  <p className="">
                    Purchase Date
                  </p>
                  <input type="text" placeholder="YYYY-MM-DD" onChange={onPurchaseDateChange} value={fields.entryDate} className=""/>
                </div>
                <div className="">
                  <p className="">
                    Sell Date
                  </p>
                  <input type="text" placeholder="YYYY-MM-DD" onChange={onSellDateChange} value={fields.exitDate} className=""/>
                </div>
              </div>

              <p className="">
                Amount Invested
              </p>
              <input
                type="number"
                placeholder="10000"
                name="amount"
                value={fields.investedAmount}
                onChange={onAmountInvestedChange}
                className=""
              />

              <button
                type="submit"
                className=""
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