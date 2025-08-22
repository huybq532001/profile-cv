import Section from "./Section";
import Card from "./Card";
import { DATA } from "../data/portfolioData";

export default function Education() {
  return (
    <Section id="education" title="Học vấn">
      <div className="space-y-6">
        {DATA.education.map((edu) => (
          <Card key={edu.school} className="rounded-xl border border-white/10">
            <h4 className="font-medium text-white">{edu.school}</h4>
            <p className="text-sm text-white/70">{edu.major}</p>
            <p className="text-xs text-white/70">{edu.period}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
