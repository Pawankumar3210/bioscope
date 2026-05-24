import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import TrendChart from "../components/charts/TrendChart";
import MonthlyBar from "../components/charts/MonthlyBar";
import DiseaseDonut from "../components/charts/DiseaseDonut";
import { diseaseDistribution, regionData } from "../data/mockData";

export default function Statistics() {
  return (
    <Layout title="Disease Statistics">
      <div className="space-y-6">

        <div className="grid grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl p-5"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <h3 className="font-display font-semibold text-white mb-1">Historical Trends</h3>
            <p className="text-xs text-slate-500 font-mono mb-4">Multi-disease 7-year analysis</p>
            <TrendChart />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="rounded-2xl p-5"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <h3 className="font-display font-semibold text-white mb-1">Monthly Distribution</h3>
            <p className="text-xs text-slate-500 font-mono mb-4">2024 cases and recoveries</p>
            <MonthlyBar />
          </motion.div>
        </div>

        {/* Regional breakdown table */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="rounded-2xl p-5"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <h3 className="font-display font-semibold text-white mb-4">Regional Breakdown</h3>
          <div className="space-y-3">
            {regionData.map((r, i) => (
              <div key={r.region} className="flex items-center gap-4">
                <span className="text-xs text-slate-400 font-body w-32">{r.region}</span>
                <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, #00d4ff, #a855f7)`, opacity: 0.6 + r.severity * 0.4 }}
                    initial={{ width: 0 }}
                    animate={{ width: `${r.severity * 100}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  />
                </div>
                <span className="text-xs font-mono text-slate-400 w-20 text-right">{(r.cases / 1000000).toFixed(1)}M cases</span>
                <span className="text-xs font-mono w-12 text-right" style={{ color: r.severity > 0.75 ? "#ff0080" : r.severity > 0.6 ? "#ff6b35" : "#00ff88" }}>
                  {(r.severity * 100).toFixed(0)}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}