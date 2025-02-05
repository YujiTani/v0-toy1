"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { country: "スイス", income: 15.73 },
  { country: "米国", income: 14.02 },
  { country: "イスラエル", income: 13.39 },
  { country: "デンマーク", income: 11.13 },
  { country: "パナマ", income: 9.96 },
  { country: "ノルウェー", income: 9.61 },
  { country: "ドイツ", income: 9.28 },
  { country: "オーストラリア", income: 8.96 },
  { country: "フィンランド", income: 8.44 },
  { country: "オーストリア", income: 8.23 },
  { country: "オランダ", income: 8.22 },
  { country: "スウェーデン", income: 7.74 },
  { country: "アイルランド", income: 7.73 },
  { country: "英国", income: 7.65 },
  { country: "ニュージーランド", income: 7.55 },
  { country: "フランス", income: 6.99 },
  { country: "ベルギー", income: 6.89 },
  { country: "シンガポール", income: 6.67 },
  { country: "香港", income: 6.66 },
  { country: "日本", income: 6.03 },
].sort((a, b) => b.income - a.income)

export default function AverageIncomeChart() {
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>各国の平均年収比較</CardTitle>
        <CardDescription>単位: 百万円</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            income: {
              label: "平均年収",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[800px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart layout="vertical" data={data} margin={{ top: 5, right: 30, left: 80, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="country" type="category" width={80} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar dataKey="income" fill="var(--color-income)" name="平均年収" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

