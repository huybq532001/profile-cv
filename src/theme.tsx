// src/theme.tsx
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "dark" | "light";
type ThemeCtx = { theme: Theme; setTheme: (t: Theme) => void; toggle: () => void };

const ThemeContext = createContext<ThemeCtx | null>(null);

const STORAGE_KEY = "theme";

function detectInitial(): Theme {
  // Ưu tiên localStorage -> nếu không có thì theo OS -> nếu không thì "dark"
  const saved = (localStorage.getItem(STORAGE_KEY) as Theme | null);
  if (saved === "light" || saved === "dark") return saved;
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  return "dark";
}

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    try { return detectInitial(); } catch { return "dark"; }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);
    const root = document.documentElement;
    // Gỡ class cũ, thêm class mới để CSS áp dụng
    root.classList.remove("theme-dark", "theme-light");
    root.classList.add(theme === "light" ? "theme-light" : "theme-dark");
  }, [theme]);

  // Sync theo thay đổi OS nếu user chưa đặt thủ công (chỉ khi không có STORAGE_KEY)
  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const mql = window.matchMedia("(prefers-color-scheme: light)");
    const handler = (e: MediaQueryListEvent) => setTheme(e.matches ? "light" : "dark");
    mql.addEventListener?.("change", handler);
    return () => mql.removeEventListener?.("change", handler);
  }, []);

  const value = useMemo(() => ({
    theme,
    setTheme,
    toggle: () => setTheme((t) => (t === "light" ? "dark" : "light")),
  }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
