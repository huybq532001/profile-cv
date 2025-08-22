import { motion } from "framer-motion";
import React from "react";

export default function Section({
  id, title, subtitle, children,
}: { id: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold tracking-tight text-[color:var(--fg)]"
        >
          {title}
        </motion.h2>

        {subtitle && (
          <p className="mt-2 text-[color:var(--fg)]/70">{subtitle}</p>
        )}

        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
