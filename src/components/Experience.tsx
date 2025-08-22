import Section from "./Section";
import Card from "./Card";
import { DATA } from "../data/portfolioData";

export default function Experience() {
  return (
    <Section id="experience" title="Kinh nghiệm" subtitle="Hoạt động & công việc liên quan">
      <div className="grid gap-6 md:grid-cols-2">
        {DATA.experience.map((exp) => (
          <Card key={exp.role}>
            <h4 className="font-medium text-[color:var(--fg)]">{exp.role}</h4>
            <p className="text-sm text-[color:var(--fg)]/70">{exp.company}</p>
            <p className="text-xs text-[color:var(--fg)]/60">{exp.period}</p>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-[color:var(--fg)]/85">
              {exp.points.map((pt: string, i: number) => <li key={i}>{pt}</li>)}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
