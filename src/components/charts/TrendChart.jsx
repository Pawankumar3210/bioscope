import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { diseaseTrendData } from "../../data/mockData";

// Custom tooltip popup
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl p-3" style={{
      background: "rgba(6,13,22,0.95)",
      border: "1px solid rgba(0,212,255,0.2)",
      backdropFilter: "blur(20px)",
    }}>
      <p className="text-cyan-400 font-mono text-xs mb-2">{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} className="text-xs" style={{ color: entry.color }}>
          {entry.name}: <span className="font-bold">{entry.value.toLocaleString()}</span>
        </p>
      ))}
    </div>
  );
};

export default function TrendChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={diseaseTrendData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
        <XAxis dataKey="year" tick={{ fill: "#64748b", fontSize: 11, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Legend wrapperStyle={{ fontSize: "11px", color: "#64748b" }} />
        <Line type="monotone" dataKey="COVID" stroke="#00d4ff" strokeWidth={2} dot={false} activeDot={{ r: 5, fill: "#00d4ff" }} />
        <Line type="monotone" dataKey="Influenza" stroke="#a855f7" strokeWidth={2} dot={false} activeDot={{ r: 5 }} />
        <Line type="monotone" dataKey="Dengue" stroke="#00ff88" strokeWidth={2} dot={false} activeDot={{ r: 5 }} />
        <Line type="monotone" dataKey="Malaria" stroke="#ff6b35" strokeWidth={2} dot={false} activeDot={{ r: 5 }} />
        <Line type="monotone" dataKey="Tuberculosis" stroke="#ff0080" strokeWidth={2} dot={false} activeDot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}