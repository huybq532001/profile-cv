import Section from "./Section";
import Card from "./Card";
import { DATA } from "../data/portfolioData";

export default function Experience() {
  return (
    <Section id="experience" title="Kinh nghiệm">
      <div className="space-y-6">
        {DATA.experience.map((exp) => (
          <Card key={exp.role} className="rounded-xl border border-white/10">
            <h4 className="font-medium text-white">{exp.role}</h4>
            <p className="text-sm text-gray-500 text-white/70">{exp.company}</p>
            <p className="text-xs text-gray-400">{exp.period}</p>
            <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
              {exp.points.map((pt: string, i: number) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
