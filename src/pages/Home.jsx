import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Activity, Brain, Shield, Globe, Zap, TrendingUp } from "lucide-react";
import ParticlesBg from "../components/ui/ParticlesBg";

// Animated floating stat cards for hero
const heroStats = [
  { label: "Active Cases", value: "2.8M", color: "#00d4ff" },
  { label: "AI Accuracy", value: "94.2%", color: "#00ff88" },
  { label: "Countries", value: "147", color: "#a855f7" },
];

const features = [
  { icon: Brain, title: "AI Prediction Engine", desc: "Predict outbreaks 3 weeks in advance with 94% accuracy using deep learning models trained on 50M+ data points.", color: "#00d4ff" },
  { icon: Globe, title: "Global Disease Surveillance", desc: "Real-time monitoring across 147 countries. Track emerging threats before they become pandemics.", color: "#a855f7" },
  { icon: Shield, title: "Early Warning System", desc: "Automated alerts and risk scoring keep health agencies one step ahead of every outbreak.", color: "#00ff88" },
  { icon: Activity, title: "Clinical Analytics", desc: "Hospital-grade analytics with HIPAA-compliant dashboards designed for epidemiologists and public health experts.", color: "#ff6b35" },
];

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ background: "#020408" }}>
      <ParticlesBg />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
        style={{ background: "rgba(2,4,8,0.8)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
            <Zap size={16} className="text-white" />
          </div>
          <span className="font-display font-bold text-white text-lg">BioScope</span>
        </div>

        <div className="flex items-center gap-6">
          {["Features", "About", "Research", "Contact"].map((item) => (
            <a key={item} href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors font-body">
              {item}
            </a>
          ))}
        </div>

        <Link to="/dashboard">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-xl text-sm font-medium text-black font-body"
            style={{ background: "linear-gradient(135deg, #00d4ff, #a855f7)" }}
          >
            Launch App →
          </motion.button>
        </Link>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-8 pt-20">
        {/* Background glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: "#00d4ff" }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: "#a855f7" }} />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs text-cyan-400 font-mono">AI-Powered Global Disease Intelligence Platform</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-7xl font-display font-bold text-white leading-tight mb-6"
          >
            The Future of
            <br />
            <span className="gradient-text">Disease Intelligence</span>
            <br />
            is Here
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 font-body leading-relaxed"
          >
            BioScope combines AI, real-time global surveillance, and predictive analytics
            to give health agencies superhuman disease detection capabilities.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            <Link to="/dashboard">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0,212,255,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 rounded-2xl text-black font-semibold font-body"
                style={{ background: "linear-gradient(135deg, #00d4ff 0%, #a855f7 100%)" }}
              >
                <Brain size={18} />
                Open Dashboard
                <ArrowRight size={16} />
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold font-body"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <Activity size={18} />
              Live Demo
            </motion.button>
          </motion.div>

          {/* Hero stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-6 mt-16"
          >
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                className="px-6 py-4 rounded-2xl text-center"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${stat.color}22`,
                  boxShadow: `0 0 30px ${stat.color}11`,
                }}
              >
                <div className="text-2xl font-display font-bold" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-xs text-slate-500 font-mono mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Enterprise-Grade <span className="gradient-text">AI Capabilities</span>
            </h2>
            <p className="text-slate-400 font-body">Built for epidemiologists, public health agencies, and healthcare AI teams.</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="p-6 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${feature.color}15`, border: `1px solid ${feature.color}30` }}
                  >
                    <Icon size={22} style={{ color: feature.color }} />
                  </div>
                  <h3 className="font-display font-semibold text-white text-lg mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm font-body leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative px-8 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(0,212,255,0.08), rgba(168,85,247,0.08))",
              border: "1px solid rgba(0,212,255,0.15)",
            }}
          >
            <div className="absolute inset-0 opacity-5"
              style={{ background: "linear-gradient(135deg, #00d4ff, #a855f7)" }} />
            <TrendingUp size={40} className="text-cyan-400 mx-auto mb-4" />
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Ready to Reshape Healthcare Intelligence?
            </h2>
            <p className="text-slate-400 font-body mb-8">
              Join 2,400+ epidemiologists and health agencies using BioScope to stay ahead of outbreaks.
            </p>
            <Link to="/dashboard">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(0,212,255,0.4)" }}
                className="px-10 py-4 rounded-2xl font-semibold text-black font-body"
                style={{ background: "linear-gradient(135deg, #00d4ff, #a855f7)" }}
              >
                Get Started Free →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 py-8 border-t border-white/5 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
            <Zap size={12} className="text-white" />
          </div>
          <span className="font-display font-bold text-white">BioScope</span>
        </div>
        <p className="text-slate-600 text-xs font-mono">
          © 2024 BioScope AI — Powered by Anthropic Claude · Built for Humanity
        </p>
      </footer>
    </div>
  );
}