import { DATA } from "../data/portfolioData";

const NAV = [
  { id: "home", label: "Trang chủ" },
  { id: "about", label: "Giới thiệu" },
  { id: "skills", label: "Kỹ năng" },
  { id: "projects", label: "Dự án" },
  { id: "experience", label: "Kinh nghiệm" },
  { id: "education", label: "Học vấn" },
  { id: "contact", label: "Liên hệ" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_6px_rgba(34,211,238,0.4)]" />
            <span className="text-white/90 font-medium">{DATA.name}</span>
            <span className="text-white/50">— {DATA.role}</span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="text-white/60 hover:text-white transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {DATA.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
