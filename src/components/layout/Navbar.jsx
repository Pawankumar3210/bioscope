import { motion } from "framer-motion";
import { Bell, Search, Sun, Moon, Mic, User } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar({ title = "BioScope" }) {
  const { isDark, toggleTheme } = useTheme();

  const bg = isDark
    ? "rgba(6,13,22,0.85)"
    : "rgba(245,240,232,0.90)";
  const border = isDark
    ? "rgba(255,255,255,0.05)"
    : "rgba(180,160,130,0.25)";
  const inputBg = isDark
    ? "rgba(255,255,255,0.05)"
    : "rgba(210,195,175,0.35)";
  const textColor = isDark ? "#e2e8f0" : "#2d2a24";
  const subText   = isDark ? "#64748b"  : "#8a7d6b";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 right-0 left-64 h-16 z-40 flex items-center px-6 gap-4 transition-all duration-500"
      style={{
        background: bg,
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${border}`,
      }}
    >
      {/* Page Title */}
      <h2
        className="font-bold text-lg flex-1 transition-colors duration-300"
        style={{ color: textColor }}
      >
        {title}
      </h2>

      {/* Search Bar */}
      <div
        className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300"
        style={{ background: inputBg, border: `1px solid ${border}` }}
      >
        <Search size={14} style={{ color: subText }} />
        <input
          type="text"
          placeholder="Search diseases, regions..."
          className="bg-transparent text-sm outline-none w-48 transition-colors duration-300"
          style={{ color: textColor }}
        />
      </div>

      {/* Voice Assistant */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-9 h-9 rounded-xl flex items-center justify-center"
        style={{
          background: "rgba(168,85,247,0.15)",
          border: "1px solid rgba(168,85,247,0.3)",
        }}
      >
        <Mic size={16} className="text-purple-400" />
      </motion.button>

      {/* Notifications */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
        style={{ background: inputBg, border: `1px solid ${border}` }}
      >
        <Bell size={16} style={{ color: textColor }} />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-400 rounded-full" />
      </motion.button>

      {/* Theme Toggle */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-500"
        style={{
          background: isDark
            ? "rgba(250,204,21,0.15)"
            : "rgba(99,102,241,0.12)",
          border: isDark
            ? "1px solid rgba(250,204,21,0.3)"
            : "1px solid rgba(180,160,130,0.4)",
        }}
        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        <motion.div
          key={isDark ? "sun" : "moon"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isDark
            ? <Sun size={16} className="text-yellow-400" />
            : <Moon size={16} className="text-indigo-400" />
          }
        </motion.div>
      </motion.button>

      {/* User Avatar */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
          <User size={16} className="text-white" />
        </div>
        <div className="hidden md:block">
          <p className="text-xs font-medium" style={{ color: textColor }}>Dr. Analyst</p>
          <p className="text-xs" style={{ color: subText }}>Admin</p>
        </div>
      </div>
    </motion.header>
  );
}