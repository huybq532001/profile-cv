import Section from "./Section";
import { DATA } from "../data/portfolioData";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" title="Liên hệ">
      <div className="space-y-3">
        <p className="flex items-center gap-2">
          <MapPin size={16} /> {DATA.location}
        </p>
        <a href={`mailto:${DATA.email}`} className="flex items-center gap-2">
          <Mail size={16} /> {DATA.email}
        </a>
        <a href={`tel:${DATA.phone}`} className="flex items-center gap-2">
          <Phone size={16} /> {DATA.phone}
        </a>
      </div>
    </Section>
  );
}
