// src/components/ThemeToggle.tsx
import React from "react";
import { useTheme } from "../theme";

const ThemeToggle: React.FC = () => {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={theme === "light"}
      className="glow-ring inline-flex items-center gap-2 rounded-full border border-[var(--border)]
                 px-3 py-1.5 text-sm transition-colors
                 bg-[var(--btn-bg)] text-[var(--btn-fg)] hover:bg-[var(--btn-bg-hover)]"
      title={theme === "light" ? "Chuyển sang Dark (Galaxy)" : "Chuyển sang Light (Stardust Pastel)"}
    >
      <span className="inline-block h-4 w-4">
        {theme === "light" ? (
          // Biểu tượng mặt trời
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zm8.83-18.16l-1.79-1.79-1.8 1.79 1.8 1.79 1.79-1.79zM20 13h3v-2h-3v2zM6.76 19.16l-1.8 1.79 1.41 1.41 1.79-1.79-1.4-1.41zM17.24 19.16l1.79 1.79 1.41-1.41-1.8-1.79-1.4 1.41zM12 6a6 6 0 100 12 6 6 0 000-12z"/></svg>
        ) : (
          // Biểu tượng mặt trăng
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 15.31A8.998 8.998 0 0111.69 4a7 7 0 100 14 8.97 8.97 0 008.31-2.69z"/></svg>
        )}
      </span>
      <span className="select-none">{theme === "light" ? "Light" : "Dark"}</span>
    </button>
  );
};

export default ThemeToggle;
