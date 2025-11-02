// currency and percent formatting
export function createNumberFormatter(
    locale = "en-US",
    currency: string = "USD"
){
    const money = new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    const percent = new Intl.NumberFormat(locale, {
        style: "percent",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    return { money, percent }
}

export const { money: usd, percent: pct } = createNumberFormatter("en-US", "USD");

// date formatting
function ordinal(n: number): string {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export function prettyDate(ymd: string): string {
  // ymd expected as "YYYY-MM-DD"
  const [y, m, d] = ymd.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d)); // avoid local TZ shifting

  const month = date.toLocaleString("en-US", { month: "long", timeZone: "UTC" });
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  return `${month} ${ordinal(day)}, ${year}`;
}