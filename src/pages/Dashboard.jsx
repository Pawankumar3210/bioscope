import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import StatCard from "../components/ui/StatCard";
import TrendChart from "../components/charts/TrendChart";
import DiseaseDonut from "../components/charts/DiseaseDonut";
import MonthlyBar from "../components/charts/MonthlyBar";
import { statsData, diseaseDistribution } from "../data/mockData";
import { Brain, Download, RefreshCw } from "lucide-react";

export default function Dashboard() {
  return (
    <Layout title="Analytics Dashboard">
      <div className="space-y-6">

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-4">
          {statsData.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>

        {/* Main charts row */}
        <div className="grid grid-cols-3 gap-4">

          {/* Trend chart — takes 2/3 width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="col-span-2 rounded-2xl p-5"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-display font-semibold text-white">Disease Trends 2018–2024</h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5">Annual case counts by pathogen</p>
              </div>
              <motion.button
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.4 }}
                className="p-2 rounded-lg"
                style={{ background: "rgba(0,212,255,0.1)" }}
              >
                <RefreshCw size={14} className="text-cyan-400" />
              </motion.button>
            </div>
            <TrendChart />
          </motion.div>

          {/* Donut chart — takes 1/3 width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl p-5"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <h3 className="font-display font-semibold text-white mb-1">Distribution</h3>
            <p className="text-xs text-slate-500 font-mono mb-3">Current burden share</p>
            <DiseaseDonut />
            {/* Legend */}
            <div className="space-y-2 mt-3">
              {diseaseDistribution.map((d) => (
                <div key={d.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: d.color }} />
                    <span className="text-slate-400 font-body">{d.name}</span>
                  </div>
                  <span className="font-mono" style={{ color: d.color }}>{d.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Monthly bar chart + AI Insights */}
        <div className="grid grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="col-span-2 rounded-2xl p-5"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <h3 className="font-display font-semibold text-white mb-1">Monthly Cases vs Recovery</h3>
            <p className="text-xs text-slate-500 font-mono mb-3">2024 — Cases (blue) vs Recovered (green)</p>
            <MonthlyBar />
          </motion.div>

          {/* AI Insight panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="rounded-2xl p-5"
            style={{ background: "rgba(168,85,247,0.05)", border: "1px solid rgba(168,85,247,0.15)" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Brain size={16} className="text-purple-400" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-white text-sm">AI Insights</h3>
                <p className="text-xs text-slate-500">Generated just now</p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { text: "Dengue shows 8.3% uptick in Southeast Asia. Monsoon pattern correlation detected.", color: "#ff6b35" },
                { text: "COVID-19 hospitalizations down 31% globally. Immunity threshold may be approaching.", color: "#00d4ff" },
                { text: "Novel influenza strain H3N9 detected in 3 provinces. Monitor closely.", color: "#ff0080" },
                { text: "Malaria cases declining in Sub-Saharan Africa following RTS,S rollout.", color: "#00ff88" },
              ].map((insight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="flex gap-2 p-2 rounded-lg"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div className="w-1 rounded-full flex-shrink-0 mt-0.5" style={{ background: insight.color, minHeight: "32px" }} />
                  <p className="text-xs text-slate-400 font-body leading-relaxed">{insight.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              className="mt-4 w-full py-2 rounded-xl text-xs font-medium text-white flex items-center justify-center gap-2"
              style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.2)" }}
            >
              <Download size={12} />
              Export Report
            </motion.button>
          </motion.div>
        </div>

      </div>
    </Layout>
  );
}