import Section from "./Section";
import { DATA } from "../data/portfolioData";
import { Mail, Phone, MapPin, Github, Facebook, Globe } from "lucide-react";

// map label -> icon
const socialIcons: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  facebook: <Facebook size={18} />,
};

export default function Contact() {
  return (
    <Section id="contact" title="Liên hệ">
      <div className="space-y-5 text-white/80">
        {/* location */}
        <p className="flex items-center gap-3">
          <MapPin size={18} className="text-cyan-400" /> {DATA.location}
        </p>

        {/* email */}
        <a
          href={`mailto:${DATA.email}`}
          className="flex items-center gap-3 hover:text-cyan-300 transition-colors"
        >
          <Mail size={18} className="text-fuchsia-400" /> {DATA.email}
        </a>

        {/* phone */}
        <a
          href={`tel:${DATA.phone}`}
          className="flex items-center gap-3 hover:text-cyan-300 transition-colors"
        >
          <Phone size={18} className="text-indigo-400" /> {DATA.phone}
        </a>

        {/* socials */}
        <div className="flex flex-wrap gap-3 pt-2">
          {(DATA.socials || []).map((s) => {
            const key = s.label.toLowerCase();
            const Icon = socialIcons[key] || <Globe size={18} />;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm hover:bg-white/10 transition"
              >
                {Icon} {s.label}
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
