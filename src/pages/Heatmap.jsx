import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import { regionData } from "../data/mockData";

export default function Heatmap() {
  const [selected, setSelected] = useState(null);

  // Simple world heatmap using SVG-like circles plotted on a flat map
  // Each region has approximate x/y percentages on a 2:1 world map
  const regionPositions = {
    "North America":   { x: 18, y: 30 },
    "Europe":          { x: 48, y: 22 },
    "Asia Pacific":    { x: 74, y: 35 },
    "South America":   { x: 27, y: 62 },
    "Africa":          { x: 50, y: 55 },
    "Middle East":     { x: 58, y: 38 },
    "South Asia":      { x: 65, y: 42 },
    "Southeast Asia":  { x: 76, y: 52 },
  };

  return (
    <Layout title="Disease Heatmap">
      <div className="space-y-6">

        {/* Map visualization */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl overflow-hidden"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="p-5 border-b border-white/5">
            <h3 className="font-display font-semibold text-white">Global Disease Spread Heatmap</h3>
            <p className="text-xs text-slate-500 font-mono mt-0.5">Click a region to view detailed statistics</p>
          </div>

          {/* Map area */}
          <div className="relative" style={{ height: "380px", background: "rgba(0,212,255,0.02)" }}>
            {/* World map placeholder — gradient background */}
            <div className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse at center, rgba(0,212,255,0.03) 0%, transparent 70%)" }}
            />

            {/* Grid lines */}
            {[20, 40, 60, 80].map((pct) => (
              <div key={pct} className="absolute left-0 right-0 border-t border-white/3" style={{ top: `${pct}%` }} />
            ))}
            {[20, 40, 60, 80].map((pct) => (
              <div key={pct} className="absolute top-0 bottom-0 border-l border-white/3" style={{ left: `${pct}%` }} />
            ))}

            {/* Region bubbles */}
            {regionData.map((region, i) => {
              const pos = regionPositions[region.region];
              if (!pos) return null;
              const size = 20 + region.severity * 50;
              const color = region.severity > 0.8 ? "#ff0080" : region.severity > 0.7 ? "#ff6b35" : region.severity > 0.6 ? "#f59e0b" : "#00ff88";

              return (
                <motion.button
                  key={region.region}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  onClick={() => setSelected(selected?.region === region.region ? null : region)}
                  className="absolute rounded-full cursor-pointer"
                  style={{
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    width: size,
                    height: size,
                    transform: "translate(-50%, -50%)",
                    background: `${color}30`,
                    border: `2px solid ${color}60`,
                    boxShadow: `0 0 ${size}px ${color}40`,
                  }}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ border: `1px solid ${color}40` }}
                    animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                </motion.button>
              );
            })}

            {/* Selected region tooltip */}
            {selected && (() => {
              const pos = regionPositions[selected.region];
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute z-10 rounded-xl p-4 w-52"
                  style={{
                    left: `${Math.min(pos.x + 5, 70)}%`,
                    top: `${Math.max(pos.y - 15, 2)}%`,
                    background: "rgba(6,13,22,0.98)",
                    border: "1px solid rgba(0,212,255,0.25)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <p className="font-display font-semibold text-white text-sm">{selected.region}</p>
                  <p className="text-xs font-mono text-cyan-400 mt-1">{(selected.cases / 1000000).toFixed(2)}M cases</p>
                  <div className="mt-2 h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full rounded-full"
                      style={{ width: `${selected.severity * 100}%`, background: "linear-gradient(90deg, #00d4ff, #ff0080)" }}
                    />
                  </div>
                  <p className="text-xs text-slate-500 font-mono mt-1">Severity: {(selected.severity * 100).toFixed(0)}%</p>
                </motion.div>
              );
            })()}
          </div>
        </motion.div>

        {/* Region cards grid */}
        <div className="grid grid-cols-4 gap-4">
          {regionData.map((r, i) => {
            const color = r.severity > 0.8 ? "#ff0080" : r.severity > 0.7 ? "#ff6b35" : r.severity > 0.6 ? "#f59e0b" : "#00ff88";
            return (
              <motion.div key={r.region}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -3 }}
                className="rounded-xl p-4"
                style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${color}20` }}
              >
                <p className="text-xs font-body text-white font-medium mb-1">{r.region}</p>
                <p className="text-lg font-display font-bold" style={{ color }}>{(r.cases / 1000000).toFixed(1)}M</p>
                <div className="mt-2 h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div className="h-full rounded-full" style={{ background: color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${r.severity * 100}%` }}
                    transition={{ duration: 1, delay: i * 0.1 + 0.5 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}