import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../theme";

const NAV_ITEMS = [
  { label: "Trang chủ", href: "#home" },
  { label: "Kỹ năng", href: "#skills" },
  { label: "Dự án", href: "#projects" },
  { label: "Kinh nghiệm", href: "#experience" },
  { label: "Học vấn", href: "#education" },
  { label: "Liên hệ", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Nền mờ + viền, dùng biến màu để “ăn” theme */}
      <div
        className="
          backdrop-blur-md border-b transition-colors
          bg-[color:var(--card)]/70 border-[color:var(--border)]
        "
        style={{
          WebkitBackdropFilter: "blur(12px)",
          backdropFilter: "blur(12px)",
        }}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <div className="h-8 w-8 shrink-0">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                alt="React Logo"
                className="h-8 w-8"
              />
            </div>
            <span className="text-[color:var(--fg)] text-lg">MyCV</span>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  transition-colors font-medium
                  text-[color:var(--fg)]/80 hover:text-[color:var(--fg)]
                "
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="
              md:hidden p-2 rounded-lg transition-colors
              text-[color:var(--fg)]
              hover:bg-black/10
            "
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden flex flex-col gap-3 px-4 pb-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  block py-2 rounded-lg px-2 font-medium transition-colors
                  text-[color:var(--fg)]/80 hover:text-[color:var(--fg)]
                  hover:bg-black/5
                "
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </div>
        )}
      </div>

      {/* Viền sáng rất nhẹ ở light để gợi “bụi sao” */}
      {theme === "light" && (
        <div
          aria-hidden
          className="pointer-events-none h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(2,6,23,0.1), transparent)",
          }}
        />
      )}
    </header>
  );
}
