/* eslint-disable @typescript-eslint/no-explicit-any */
import Section from "./Section";
import Card from "./Card";
import { DATA } from "../data/portfolioData";

export default function Skills() {
  return (
    <Section id="skills" title="Kỹ năng">
      <div className="grid gap-6 md:grid-cols-3">
        {DATA.skills.map((group) => (
          <Card key={group.group}>
            <h4 className="font-medium mb-3">{group.group}</h4>
            <div className="space-y-3">
              {group.items.map((s: any) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm">
                    <span>{s.name}</span>
                    <span>{s.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${s.level}%` }}
                      className="h-full bg-indigo-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
