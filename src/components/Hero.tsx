import {  ArrowRight, MapPin, Mail, Phone, Sparkles } from "lucide-react";
import { DATA } from "../data/portfolioData";
import Particles from "./Particles";
import avata from "../assets/ava.png";
import { useTheme } from "../theme";

export default function Hero() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <header id="home" className="relative pt-28">
      {/* BACKDROP */}
      {isLight ? (
        <div className="heroLight-auroraWrap">
          <div className="aurora" />
          <div className="aurora aurora-2" />
          <div className="spotlight" />
        </div>
      ) : (
        <div className="galaxy-bg absolute inset-0 -z-10">
          <div className="galaxy-grid" />
          <div className="hidden md:block"><Particles /></div>
        </div>
      )}

      {/* CONTENT */}
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10">
        {/* Left */}
        <div>
          {/* pill */}
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
            style={isLight
              ? { background: "var(--pill-bg)", boxShadow: "var(--hero-shadow)", color: "var(--pill-text)" }
              : {}}
          >
            <Sparkles size={14} className={isLight ? "text-indigo-500" : "text-cyan-300"} />
            <span>{DATA.role}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            <span className="text-[color:var(--fg)]">Xin chào, mình là </span>
            <span
              className={`bg-clip-text text-transparent ${isLight ? "hero-name" : ""}`}
              style={{
                backgroundImage: isLight
                  ? "linear-gradient(90deg, var(--title-gradient-from), var(--title-gradient-via), var(--title-gradient-to))"
                  : "linear-gradient(90deg, #6366f1, #d946ef, #22d3ee)",
              }}
            >
              {DATA.name}
            </span>
          </h1>

          <p className="mt-4 text-lg text-[color:var(--fg)]/70 max-w-[62ch]">
            {DATA.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {/* Primary CTA */}
            <a
              href="https://www.topcv.vn/xem-cv/AFEOUw1TBQMBAlNcBggHD1ULAVIGAVAAVAMEDw3ecc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2
             bg-indigo-600 text-white shadow hover:bg-indigo-700 transition"
            >
              Xem CV
            </a>





            {/* Secondary CTA */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-[color:var(--fg)]/90"
              style={isLight
                ? {
                  background:
                    "linear-gradient(var(--hero-surface), var(--hero-surface)) padding-box, var(--outline-grad) border-box",
                  border: "1px solid transparent",
                  boxShadow: "var(--hero-shadow)",
                }
                : { border: "1px solid var(--border)" }}
            >
              Xem Dự án <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[color:var(--fg)]/70">
            <div className="inline-flex items-center gap-2"><MapPin size={16} /> {DATA.location}</div>
            <a className="inline-flex items-center gap-2 hover:underline" href={`mailto:${DATA.email}`}><Mail size={16} /> {DATA.email}</a>
            <a className="inline-flex items-center gap-2 hover:underline" href={`tel:${DATA.phone}`}><Phone size={16} /> {DATA.phone}</a>
          </div>
        </div>

        {/* Right: Avatar */}
        <div className="relative">
          {theme === "dark" && (
            <div className="absolute -inset-2 rounded-[28px] blur-3xl bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/25 to-cyan-400/25" />
          )}
          <div
            className="relative rounded-[28px] overflow-hidden backdrop-blur-sm"
            style={isLight
              ? {
                background:
                  "linear-gradient(var(--hero-surface), var(--hero-surface)) padding-box, var(--outline-grad) border-box",
                border: "1px solid transparent",
                boxShadow: "var(--hero-shadow)",
              }
              : { border: "1px solid var(--border)", background: "var(--card)" }}
          >
            <img src={avata} alt="avatar" className="relative h-72 md:h-[420px] w-full object-cover" />
          </div>
        </div>
      </div>

      {/* WAVE divider chỉ cho light */}
      {isLight && <div className="heroLight-wave" aria-hidden />}
    </header>
  );
}
