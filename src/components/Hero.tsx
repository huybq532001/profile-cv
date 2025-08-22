import { Download, ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import { DATA } from "../data/portfolioData";
import Particles from "./Particles";
import avata from "../assets/ava.png"

export default function Hero() {
  return (
    <header id="home" className="relative pt-28 galaxy-bg">
      <div className="galaxy-grid" />
      <Particles />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white">
            Xin chào, mình là{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              {DATA.name}
            </span>
          </h1>
          <p className="mt-4 text-lg text-white/70">
            {DATA.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              className="group inline-flex items-center gap-2 rounded-xl px-4 py-2 text-white
                         bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500 glow-ring shadow hover:shadow-lg"
            >
              <Download size={18} /> Tải CV
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-white/90 hover:bg-white/5"
            >
              Xem Dự án <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
            <div className="inline-flex items-center gap-2"><MapPin size={16}/> {DATA.location}</div>
            <a className="inline-flex items-center gap-2 hover:underline" href={`mailto:${DATA.email}`}><Mail size={16}/> {DATA.email}</a>
            <a className="inline-flex items-center gap-2 hover:underline" href={`tel:${DATA.phone}`}><Phone size={16}/> {DATA.phone}</a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-2 rounded-[28px] blur-3xl bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/25 to-cyan-400/25" />
          <div className="relative rounded-[28px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur glow-ring">
            <img
              src={avata}
              alt="avatar"
              className="h-72 md:h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
