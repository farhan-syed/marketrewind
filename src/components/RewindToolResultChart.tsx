import type { Result } from "@/types";

interface RewindToolResultChartProps {
  result: Result; 
}

import { CartesianGrid, Area, AreaChart, XAxis } from "recharts";

import type { ChartConfig } from "@/components/ui/chart";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardFooter,
//   CardTitle
// } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// import { TrendingUp } from "lucide-react"

const chartConfig = {
  close: {
    label: "Price",
    color: "",
  },
} satisfies ChartConfig;

export default function ChartLineInteractive({
  result,
}: RewindToolResultChartProps) {
  return (
    // <Card>
    //   <CardHeader>
    //     <CardTitle>Area Chart</CardTitle>
    //     <CardDescription>
    //       Showing total visitors for the last 6 months
    //     </CardDescription>
    //   </CardHeader>
    //   <CardContent>
    <ChartContainer config={chartConfig} >
      <AreaChart
        accessibilityLayer
        data={result.historicValues}
        margin={{
          left: 0,
          right: 0,
          top: 5,
          bottom: 0,
        }}
      >
        <CartesianGrid horizontal={false} vertical={false} />
        <XAxis hide tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip
          hideLabel
          cursor={false}
          content={<ChartTooltipContent className="text-zinc-200" indicator="line"  color={result.isProfit ? "var(--color-brand-500)" : "var(--color-red-500)"}/>}
        />
        <Area
          dataKey="close"
          type="linear"
          fill={result.isProfit ? "var(--color-brand-500)" : "var(--color-red-500)"} // color of area
          fillOpacity={0.4}
          stroke= {result.isProfit ? "var(--color-brand-500)" : "var(--color-red-500)"} // color of line
          activeDot={{r: 4, fill: "var(--color-zinc-300)", strokeWidth: 0}}
        />
      </AreaChart>
    </ChartContainer>
    // </CardContent>
    // <CardFooter>
    //   <div className="flex w-full items-start gap-2 text-sm">
    //     <div className="grid gap-2">
    //       <div className="flex items-center gap-2 leading-none font-medium">
    //         Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
    //       </div>
    //       <div className="text-muted-foreground flex items-center gap-2 leading-none">
    //         January - June 2024
    //       </div>
    //     </div>
    //   </div>
    // </CardFooter>
    // </Card>
  );
}
