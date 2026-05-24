import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { diseaseDistribution } from "../../data/mockData";

export default function DiseaseDonut() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie
          data={diseaseDistribution}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={3}
          dataKey="value"
        >
          {diseaseDistribution.map((entry, i) => (
            <Cell key={i} fill={entry.color} opacity={0.9} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            background: "rgba(6,13,22,0.95)",
            border: "1px solid rgba(0,212,255,0.2)",
            borderRadius: "12px",
            color: "#e2e8f0",
            fontSize: "12px",
          }}
          formatter={(val) => [`${val}%`, ""]}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}