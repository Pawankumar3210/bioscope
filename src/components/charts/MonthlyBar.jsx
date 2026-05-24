import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from "recharts";
import { monthlyCases } from "../../data/mockData";

export default function MonthlyBar() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={monthlyCases} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
        <XAxis dataKey="month" tick={{ fill: "#64748b", fontSize: 10 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: "#64748b", fontSize: 10 }} axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={{
            background: "rgba(6,13,22,0.95)",
            border: "1px solid rgba(0,212,255,0.2)",
            borderRadius: "12px",
            fontSize: "11px",
          }}
        />
        <Bar dataKey="cases" fill="#00d4ff" radius={[4, 4, 0, 0]} opacity={0.8} />
        <Bar dataKey="recovered" fill="#00ff88" radius={[4, 4, 0, 0]} opacity={0.8} />
      </BarChart>
    </ResponsiveContainer>
  );
}