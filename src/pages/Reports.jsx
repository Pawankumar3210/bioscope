import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import { Download, FileText, Clock, CheckCircle, Loader } from "lucide-react";
import { reportsData } from "../data/mockData";

export default function Reports() {
  return (
    <Layout title="Reports">
      <div className="space-y-4">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-5"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <h3 className="font-display font-semibold text-white mb-4">Generated Reports</h3>
          <div className="space-y-3">
            {reportsData.map((report, i) => (
              <motion.div key={report.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(0,212,255,0.1)" }}>
                    <FileText size={16} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white font-body">{report.title}</p>
                    <p className="text-xs text-slate-500 font-mono">{report.id} · {report.date} · {report.size}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs px-2 py-1 rounded-full font-mono"
                    style={{
                      background: report.status === "Ready" ? "rgba(0,255,136,0.1)" : "rgba(255,107,53,0.1)",
                      color: report.status === "Ready" ? "#00ff88" : "#ff6b35",
                      border: `1px solid ${report.status === "Ready" ? "rgba(0,255,136,0.2)" : "rgba(255,107,53,0.2)"}`,
                    }}
                  >
                    {report.status === "Ready" ? <CheckCircle size={10} className="inline mr-1" /> : <Loader size={10} className="inline mr-1 animate-spin" />}
                    {report.status}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg transition-all"
                    style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}
                  >
                    <Download size={14} className="text-cyan-400" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}