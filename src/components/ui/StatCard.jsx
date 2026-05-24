import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useEffect, useState } from "react";

// Animated number counter hook
function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress === 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

export default function StatCard({ label, value, change, color, icon: IconName }) {
  const animatedValue = useCounter(value);

  // Format large numbers: 2847293 → 2.8M
  const formatNumber = (n) => {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
    if (n >= 1000) return (n / 1000).toFixed(1) + "K";
    return n.toLocaleString();
  };

  const isPositive = change > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="rounded-2xl p-5 relative overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${color}22`,
        boxShadow: `0 0 30px ${color}11`,
      }}
    >
      {/* Background glow blob */}
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-20"
        style={{ background: color }}
      />

      {/* Top row: label + change badge */}
      <div className="flex items-center justify-between mb-3 relative z-10">
        <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">{label}</span>
        <span
          className={`flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${
            isPositive ? "text-red-400 bg-red-400/10" : "text-green-400 bg-green-400/10"
          }`}
        >
          {isPositive ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
          {Math.abs(change)}%
        </span>
      </div>

      {/* Animated number */}
      <div
        className="text-3xl font-display font-bold relative z-10"
        style={{ color }}
      >
        {formatNumber(animatedValue)}
      </div>

      {/* Bottom sparkline bar */}
      <div className="mt-3 h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
          initial={{ width: "0%" }}
          animate={{ width: "68%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </div>
    </motion.div>
  );
}