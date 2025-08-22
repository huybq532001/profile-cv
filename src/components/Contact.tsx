import Section from "./Section";
import { DATA } from "../data/portfolioData";
import { Mail, Phone, MapPin, Github, Facebook, Linkedin, Twitter, Globe } from "lucide-react";

const socialIcons: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  facebook: <Facebook size={18} />,
  linkedin: <Linkedin size={18} />,
  twitter: <Twitter size={18} />,
};

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border p-5 border-[color:var(--border)] bg-[color:var(--card)] [box-shadow:var(--shadow-card)]">
      {children}
    </div>
  );
}

export default function Contact() {
  return (
    <Section id="contact" title="Liên hệ" subtitle="Sẵn sàng trao đổi cơ hội hợp tác">
      <div className="grid gap-6 md:grid-cols-3">
        <Panel>
          <div className="space-y-3">
            <div className="flex items-start gap-3 text-[color:var(--fg)]/80">
              <MapPin size={18} className="text-cyan-500" />
              <span>{DATA.location}</span>
            </div>
            <a href={`mailto:${DATA.email}`} className="flex items-start gap-3 hover:underline text-[color:var(--fg)]/80">
              <Mail size={18} className="text-fuchsia-500" />
              <span>{DATA.email}</span>
            </a>
            <a href={`tel:${DATA.phone}`} className="flex items-start gap-3 hover:underline text-[color:var(--fg)]/80">
              <Phone size={18} className="text-indigo-500" />
              <span>{DATA.phone}</span>
            </a>
          </div>
        </Panel>

        {/* <Panel>
          <div className="text-[color:var(--fg)] font-medium mb-3">Kết nối nhanh</div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${DATA.email}`}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-white
                         bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500 shadow hover:shadow-lg"
            >
              Gửi email
            </a>
            <a
              href={`tel:${DATA.phone}`}
              className="rounded-xl border px-4 py-2
                         border-[color:var(--border)] text-[color:var(--fg)]/90 hover:bg-black/5"
            >
              Gọi điện
            </a>
            <a
              href="/resume.pdf"
              className="rounded-xl border px-4 py-2
                         border-[color:var(--border)] text-[color:var(--fg)]/90 hover:bg-black/5"
            >
              Xem CV
            </a>
          </div>
        </Panel> */}

        <Panel>
          <div className="text-[color:var(--fg)] font-medium mb-3">Mạng xã hội</div>
          <div className="flex flex-wrap gap-2">
            {(DATA.socials || []).map((s) => {
              const key = s.label.toLowerCase();
              const Icon = socialIcons[key] || <Globe size={18} />;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm
                             border-[color:var(--border)] text-[color:var(--fg)]/80 hover:bg-black/5"
                >
                  {Icon} {s.label}
                </a>
              );
            })}
          </div>
        </Panel>
      </div>
    </Section>
  );
}
