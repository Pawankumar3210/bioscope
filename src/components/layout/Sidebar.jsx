import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import {
  LayoutDashboard, Home, Activity, Brain, Upload,
  FileText, Microscope, Map, ChevronRight, Zap,
} from "lucide-react";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/statistics", label: "Statistics", icon: Activity },
  { path: "/prediction", label: "AI Prediction", icon: Brain },
  { path: "/upload", label: "Data Upload", icon: Upload },
  { path: "/reports", label: "Reports", icon: FileText },
  { path: "/research", label: "Research", icon: Microscope },
  { path: "/heatmap", label: "Heatmaps", icon: Map },
];

export default function Sidebar() {
  const { isDark } = useTheme();
  const location = useLocation();

  return (
    <motion.aside
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 top-0 h-full w-64 z-50 flex flex-col transition-all duration-500"
      style={{
        background: isDark
          ? "rgba(6,13,22,0.97)"
          : "rgba(240,233,220,0.97)",      // warm parchment sidebar
        backdropFilter: "blur(30px)",
        borderRight: isDark
          ? "1px solid rgba(0,212,255,0.1)"
          : "1px solid rgba(180,160,130,0.3)",
      }}
    >
      {/* Logo */}
      <div
        className="p-6"
        style={{
          borderBottom: isDark
            ? "1px solid rgba(255,255,255,0.05)"
            : "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
              <Zap size={20} className="text-white" />
            </div>
            <div className="absolute inset-0 rounded-xl bg-cyan-400/30 blur-md" />
          </div>
          <div>
            <h1
              className="font-bold text-xl tracking-tight transition-colors duration-300"
              style={{ color: isDark ? "#ffffff" : "#2d2a24" }}
            >
              BioScope
            </h1>
            <p className="text-xs text-cyan-500 font-mono">AI Health Intelligence</p>
          </div>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item, i) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <motion.div
              key={item.path}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.05 + 0.2 }}
            >
              <Link
                to={item.path}
                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative"
                style={
                  isActive
                    ? {
                        background: "rgba(0,212,255,0.1)",
                        border: "1px solid rgba(0,212,255,0.25)",
                        color: "#00d4ff",
                      }
                    : {
                        background: "transparent",
                        border: "1px solid transparent",
                        color: isDark ? "#64748b" : "#8a7d6b",
                      }
                }
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-cyan-400 rounded-r-full"
                    style={{ boxShadow: "0 0 10px #00d4ff" }}
                  />
                )}
                <Icon
                  size={18}
                  style={{ color: isActive ? "#00d4ff" : isDark ? "#64748b" : "#94a3b8" }}
                />
                <span
                  className="font-medium text-sm transition-colors duration-300"
                  style={{ color: isActive ? "#00d4ff" : isDark ? "#94a3b8" : "#6b5e4e" }}
                >
                  {item.label}
                </span>
                {isActive && (
                  <ChevronRight size={14} className="ml-auto text-cyan-400" />
                )}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Bottom AI Status */}
      <div className="p-4" style={{ borderTop: isDark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.06)" }}>
        <div
          className="rounded-xl p-3"
          style={{
            background: "rgba(0,255,136,0.05)",
            border: "1px solid rgba(0,255,136,0.15)",
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-green-400 font-mono font-medium">
              AI Engine Online
            </span>
          </div>
          <p className="text-xs text-slate-500">Processing 2.4M data points</p>
          <div className="mt-2 h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "73%" }}
              transition={{ duration: 2, delay: 1 }}
            />
          </div>
        </div>
      </div>
    </motion.aside>
  );
}