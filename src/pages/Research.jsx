import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import { TrendingUp, TrendingDown, Minus, Calendar, Tag } from "lucide-react";
import { researchInsights } from "../data/mockData";

const trendIcons = { rising: TrendingUp, declining: TrendingDown, stable: Minus };
const trendColors = { rising: "#ff6b35", declining: "#00ff88", stable: "#a855f7" };

export default function Research() {
  return (
    <Layout title="Research Insights">
      <div className="grid grid-cols-2 gap-4">
        {researchInsights.map((insight, i) => {
          const TrendIcon = trendIcons[insight.trend];
          const trendColor = trendColors[insight.trend];
          return (
            <motion.div key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-5"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-mono px-2 py-1 rounded-full"
                  style={{ background: "rgba(0,212,255,0.08)", color: "#00d4ff", border: "1px solid rgba(0,212,255,0.15)" }}>
                  {insight.category}
                </span>
                <div className="flex items-center gap-1 text-xs" style={{ color: trendColor }}>
                  <TrendIcon size={12} />
                  <span className="font-mono capitalize">{insight.trend}</span>
                </div>
              </div>

              <h3 className="font-display font-semibold text-white text-sm mb-2 leading-snug">{insight.title}</h3>
              <p className="text-xs text-slate-400 font-body leading-relaxed mb-4">{insight.summary}</p>

              <div className="flex items-center justify-between">
                <div className="flex gap-1 flex-wrap">
                  {insight.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full text-slate-500 font-mono"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-600 font-mono">
                  <Calendar size={10} />
                  {insight.date}
                </div>
              </div>

              {/* Confidence bar */}
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-slate-600 font-mono">AI CONFIDENCE</span>
                  <span className="font-mono text-cyan-400">{insight.confidence}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #00d4ff, #a855f7)" }}
                    initial={{ width: 0 }}
                    animate={{ width: `${insight.confidence}%` }}
                    transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Layout>
  );
}