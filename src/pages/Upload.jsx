import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/layout/Layout";
import { Upload as UploadIcon, CheckCircle, FileText, X } from "lucide-react";

export default function Upload() {
  const [dragging, setDragging] = useState(false);
  const [uploaded, setUploaded] = useState(null);
  const inputRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) processFile(file);
  };

  const processFile = (file) => {
    // Simulate file processing
    setTimeout(() => {
      setUploaded({
        name: file.name,
        size: (file.size / 1024).toFixed(1) + " KB",
        rows: Math.floor(Math.random() * 5000) + 1000,
        cols: Math.floor(Math.random() * 10) + 5,
        preview: [
          { id: 1, region: "Mumbai", disease: "Dengue", cases: 234, date: "2024-11" },
          { id: 2, region: "Delhi", disease: "COVID-19", cases: 891, date: "2024-11" },
          { id: 3, region: "Chennai", disease: "Influenza", cases: 156, date: "2024-11" },
          { id: 4, region: "Kolkata", disease: "Malaria", cases: 78, date: "2024-11" },
        ],
      });
    }, 1500);
  };

  return (
    <Layout title="Data Upload">
      <div className="max-w-3xl mx-auto space-y-6">

        {/* Drop zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current.click()}
          className="rounded-2xl p-12 text-center cursor-pointer transition-all duration-300"
          style={{
            background: dragging ? "rgba(0,212,255,0.08)" : "rgba(255,255,255,0.02)",
            border: dragging ? "2px dashed #00d4ff" : "2px dashed rgba(255,255,255,0.1)",
            boxShadow: dragging ? "0 0 40px rgba(0,212,255,0.15)" : "none",
          }}
        >
          <input
            ref={inputRef}
            type="file"
            accept=".csv,.json,.xlsx"
            className="hidden"
            onChange={(e) => e.target.files[0] && processFile(e.target.files[0])}
          />

          <motion.div
            animate={{ y: dragging ? -10 : 0 }}
            className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center"
            style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}
          >
            <UploadIcon size={32} className="text-cyan-400" />
          </motion.div>

          <h3 className="font-display font-semibold text-white text-xl mb-2">
            {dragging ? "Drop your file here!" : "Drag & Drop Dataset"}
          </h3>
          <p className="text-slate-400 text-sm font-body mb-4">
            Supports CSV, JSON, XLSX files up to 50MB
          </p>
          <span className="text-xs text-cyan-400 font-mono px-4 py-1.5 rounded-full"
            style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}
          >
            Browse Files
          </span>
        </motion.div>

        {/* Preview table */}
        <AnimatePresence>
          {uploaded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="rounded-2xl overflow-hidden"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,255,136,0.15)" }}
            >
              <div className="p-5 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-green-400" />
                  <div>
                    <p className="font-display font-semibold text-white text-sm">{uploaded.name}</p>
                    <p className="text-xs text-slate-500 font-mono">{uploaded.size} · {uploaded.rows.toLocaleString()} rows · {uploaded.cols} columns</p>
                  </div>
                </div>
                <button onClick={() => setUploaded(null)}>
                  <X size={16} className="text-slate-500 hover:text-white transition-colors" />
                </button>
              </div>

              <div className="p-4 overflow-x-auto">
                <p className="text-xs text-slate-500 font-mono mb-3">PREVIEW (first 4 rows)</p>
                <table className="w-full text-xs">
                  <thead>
                    <tr>
                      {["ID", "Region", "Disease", "Cases", "Date"].map((h) => (
                        <th key={h} className="text-left px-3 py-2 text-cyan-400 font-mono border-b border-white/5">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {uploaded.preview.map((row) => (
                      <tr key={row.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                        <td className="px-3 py-2 text-slate-500 font-mono">{row.id}</td>
                        <td className="px-3 py-2 text-slate-300">{row.region}</td>
                        <td className="px-3 py-2 text-cyan-400">{row.disease}</td>
                        <td className="px-3 py-2 text-slate-300 font-mono">{row.cases}</td>
                        <td className="px-3 py-2 text-slate-500 font-mono">{row.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full py-3 rounded-xl font-medium text-black text-sm"
                  style={{ background: "linear-gradient(135deg, #00ff88, #00d4ff)" }}
                >
                  Process Dataset with AI →
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </Layout>
  );
}