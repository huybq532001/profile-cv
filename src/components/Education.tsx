import Section from "./Section";
import Card from "./Card";
import { DATA } from "../data/portfolioData";

export default function Education() {
  return (
    <Section id="education" title="Học vấn" subtitle="Quá trình đào tạo">
      <div className="grid gap-6 md:grid-cols-2">
        {DATA.education.map((edu) => (
          <Card key={edu.school}>
            <h4 className="font-medium text-[color:var(--fg)]">{edu.school}</h4>
            <p className="text-sm text-[color:var(--fg)]/70">{edu.major}</p>
            <p className="text-xs text-[color:var(--fg)]/60">{edu.period}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
