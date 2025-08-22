import { motion } from "framer-motion";
import React from "react";

export default function Card({
  children,
  className = "",
}: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={[
        "rounded-2xl border transition-all p-5",
        "border-[color:var(--border)] bg-[color:var(--card)]",
        // Đổ bóng theo biến theme
        "[box-shadow:var(--shadow-card)]",
        className,
      ].join(" ")}
    >
      {children}
    </motion.div>
  );
}
