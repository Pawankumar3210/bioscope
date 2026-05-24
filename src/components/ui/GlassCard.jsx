// Reusable glass card with hover glow effect
import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
  glowColor = "cyan",  // "cyan" | "green" | "purple" | "pink"
  hover = true,
  onClick,
}) {
  // Map glow color name → actual CSS color
  const glowColors = {
    cyan: "rgba(0, 212, 255, 0.15)",
    green: "rgba(0, 255, 136, 0.15)",
    purple: "rgba(168, 85, 247, 0.15)",
    pink: "rgba(255, 0, 128, 0.15)",
    orange: "rgba(255, 107, 53, 0.15)",
  };

  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`rounded-2xl relative overflow-hidden cursor-default ${className}`}
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
      }}
      // On hover, add colored glow
      whileHoverStyle={{ boxShadow: `0 8px 40px ${glowColors[glowColor]}` }}
    >
      {children}
    </motion.div>
  );
}