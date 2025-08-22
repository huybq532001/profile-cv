import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import reactLogo from "../assets/react.svg"; // ✅ logo react từ vite mặc định

const NAV_ITEMS = [
  { id: "home", label: "Trang chủ" },
  { id: "skills", label: "Kỹ năng" },
  { id: "projects", label: "Dự án" },
  { id: "experience", label: "Kinh nghiệm" },
  { id: "education", label: "Học vấn" },
  { id: "contact", label: "Liên hệ" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-black/40 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* LOGO React */}
        <div className="flex items-center gap-2">
          <img
            src={reactLogo}
            alt="React Logo"
            className="h-10 w-10 animate-spin-slow drop-shadow-lg"
          />
          <span className="text-lg font-bold text-white">My Hồ Sơ</span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-white/80 hover:text-white relative transition group"
            >
              {item.label}
              {/* underline animation */}
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6 animate-fadeIn">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-white/90 hover:text-white text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
