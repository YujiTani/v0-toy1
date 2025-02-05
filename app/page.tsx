"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
  { country: "インド", income: 5.0 },
  { country: "中国", income: 2.5 },
  { country: "フィリピン", income: 3.0 },
  { country: "タイ", income: 1.8 },
  { country: "ベトナム", income: 1.5 },
  { country: "インドネシア", income: 1.2 },
].sort((a, b) => b.income - a.income)

const getColor = (income) => {
  const minIncome = Math.min(...data.map((d) => d.income))
  const maxIncome = Math.max(...data.map((d) => d.income))
  const normalizedIncome = (income - minIncome) / (maxIncome - minIncome)
  return `rgb(0, ${Math.floor(100 + normalizedIncome * 155)}, ${Math.floor(200 + normalizedIncome * 55)})`
}

export default function UpdatedAverageIncomeChart() {
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>各国の平均年収比較</CardTitle>
        <CardDescription>単位: 百万円</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[1000px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart layout="vertical" data={data} margin={{ top: 5, right: 30, left: 80, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="country" type="category" width={80} />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-2 border border-gray-300 rounded shadow">
                        <p className="font-bold">{payload[0].payload.country}</p>
                        <p>{`平均年収: ${payload[0].value.toFixed(2)}百万円`}</p>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Legend />
              <Bar
                dataKey="income"
                name="平均年収"
                fill="#0066cc"
                shape={(props) => {
                  return (
                    <rect
                      x={props.x}
                      y={props.y}
                      width={props.width}
                      height={props.height}
                      fill={getColor(props.payload.income)}
                      rx={4}
                      ry={4}
                    />
                  )
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

