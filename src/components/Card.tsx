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
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur",
        "shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]",
        "transition-all p-5", className
      ].join(" ")}
    >
      {children}
    </motion.div>
  );
}
