import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/layout/Layout";
import { Brain, AlertTriangle, CheckCircle, Loader } from "lucide-react";
import { riskFactors } from "../data/mockData";

export default function Prediction() {
  const [form, setForm] = useState({ age: "", fever: "", symptoms: "", riskFactor: "", region: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  // Simulate AI prediction with a delay
  const handlePredict = () => {
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      const risk = Math.floor(Math.random() * 60) + 20; // random 20–80%
      setResult({
        disease: ["Dengue Fever", "Influenza A", "COVID-19 Subvariant", "Malaria"][Math.floor(Math.random() * 4)],
        risk,
        confidence: Math.floor(Math.random() * 15) + 82,
        action: risk > 60 ? "Seek immediate medical attention" : risk > 40 ? "Monitor symptoms, consult doctor if worsening" : "Low risk — continue standard precautions",
        level: risk > 60 ? "high" : risk > 40 ? "medium" : "low",
      });
      setLoading(false);
    }, 2500);
  };

  const riskColor = result?.level === "high" ? "#ff0080" : result?.level === "medium" ? "#ff6b35" : "#00ff88";

  return (
    <Layout title="AI Disease Prediction">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-6 text-center"
          style={{ background: "rgba(168,85,247,0.05)", border: "1px solid rgba(168,85,247,0.15)" }}
        >
          <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
            <Brain size={28} className="text-purple-400" />
          </div>
          <h2 className="font-display font-bold text-white text-2xl mb-2">AI Prediction Engine</h2>
          <p className="text-slate-400 font-body text-sm">Enter patient health metrics to receive AI-powered disease risk assessment</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {/* Input Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="rounded-2xl p-6 space-y-4"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <h3 className="font-display font-semibold text-white mb-4">Patient Data Input</h3>

            {/* Age input */}
            <div>
              <label className="text-xs text-slate-400 font-mono mb-1 block">AGE</label>
              <input
                type="number"
                placeholder="e.g. 35"
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none focus:border-cyan-400/50 transition-all"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              />
            </div>

            {/* Fever input */}
            <div>
              <label className="text-xs text-slate-400 font-mono mb-1 block">BODY TEMPERATURE (°C)</label>
              <input
                type="number"
                step="0.1"
                placeholder="e.g. 38.5"
                value={form.fever}
                onChange={(e) => setForm({ ...form, fever: e.target.value })}
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none focus:border-cyan-400/50 transition-all"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              />
            </div>

            {/* Symptoms */}
            <div>
              <label className="text-xs text-slate-400 font-mono mb-1 block">PRIMARY SYMPTOMS</label>
              <input
                type="text"
                placeholder="e.g. fatigue, headache, rash"
                value={form.symptoms}
                onChange={(e) => setForm({ ...form, symptoms: e.target.value })}
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              />
            </div>

            {/* Risk factor dropdown */}
            <div>
              <label className="text-xs text-slate-400 font-mono mb-1 block">PRE-EXISTING CONDITIONS</label>
              <select
                value={form.riskFactor}
                onChange={(e) => setForm({ ...form, riskFactor: e.target.value })}
                className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all"
                style={{ background: "rgba(6,13,22,0.95)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <option value="">Select condition</option>
                {riskFactors.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>

            {/* Region */}
            <div>
              <label className="text-xs text-slate-400 font-mono mb-1 block">REGION</label>
              <select
                value={form.region}
                onChange={(e) => setForm({ ...form, region: e.target.value })}
                className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none"
                style={{ background: "rgba(6,13,22,0.95)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <option value="">Select region</option>
                {["South Asia", "Southeast Asia", "Sub-Saharan Africa", "Europe", "North America", "Latin America", "Middle East"].map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            {/* Submit button */}
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(168,85,247,0.4)" }}
              whileTap={{ scale: 0.98 }}
              onClick={handlePredict}
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold text-white font-body flex items-center justify-center gap-2 mt-2"
              style={{ background: "linear-gradient(135deg, #a855f7, #00d4ff)" }}
            >
              {loading ? <Loader size={16} className="animate-spin" /> : <Brain size={16} />}
              {loading ? "Analyzing..." : "Run AI Prediction"}
            </motion.button>
          </motion.div>

          {/* Result Card */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
            className="rounded-2xl p-6 flex flex-col justify-center"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
          >
            <AnimatePresence mode="wait">
              {!result && !loading && (
                <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="text-center py-8"
                >
                  <Brain size={48} className="text-slate-700 mx-auto mb-4" />
                  <p className="text-slate-600 font-body text-sm">Fill in patient data and click<br />"Run AI Prediction" to see results</p>
                </motion.div>
              )}

              {loading && (
                <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="text-center py-8 space-y-4"
                >
                  <div className="w-20 h-20 rounded-full border-2 border-purple-500/30 border-t-purple-400 animate-spin mx-auto" />
                  <p className="text-purple-400 font-mono text-sm">Consulting AI model...</p>
                  {["Analyzing symptoms", "Cross-referencing epidemiological data", "Computing risk vectors", "Generating prediction"].map((step, i) => (
                    <motion.p key={step} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.5 }}
                      className="text-xs text-slate-600 font-mono"
                    >
                      ▸ {step}...
                    </motion.p>
                  ))}
                </motion.div>
              )}

              {result && !loading && (
                <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="space-y-5"
                >
                  {/* Disease name */}
                  <div className="text-center">
                    <p className="text-xs text-slate-500 font-mono mb-1">PREDICTED CONDITION</p>
                    <h3 className="font-display font-bold text-2xl text-white">{result.disease}</h3>
                    <p className="text-xs text-slate-500 mt-1 font-mono">Confidence: {result.confidence}%</p>
                  </div>

                  {/* Risk percentage ring */}
                  <div className="relative w-36 h-36 mx-auto">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2.5" />
                      <motion.circle
                        cx="18" cy="18" r="15.9" fill="none"
                        stroke={riskColor} strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray={`${result.risk} ${100 - result.risk}`}
                        initial={{ strokeDasharray: "0 100" }}
                        animate={{ strokeDasharray: `${result.risk} ${100 - result.risk}` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-display font-bold text-2xl" style={{ color: riskColor }}>{result.risk}%</span>
                      <span className="text-xs text-slate-500 font-mono">RISK</span>
                    </div>
                  </div>

                  {/* Recommendation */}
                  <div className="p-4 rounded-xl" style={{ background: `${riskColor}10`, border: `1px solid ${riskColor}25` }}>
                    <div className="flex items-center gap-2 mb-1">
                      {result.level === "high" ? <AlertTriangle size={14} style={{ color: riskColor }} /> : <CheckCircle size={14} style={{ color: riskColor }} />}
                      <span className="text-xs font-mono font-medium uppercase" style={{ color: riskColor }}>
                        {result.level} RISK — Recommended Action
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-body">{result.action}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}