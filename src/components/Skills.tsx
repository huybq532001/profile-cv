/* eslint-disable @typescript-eslint/no-explicit-any */
import Section from "./Section";
import Card from "./Card";
import { DATA } from "../data/portfolioData";

export default function Skills() {
  return (
    <Section id="skills" title="Kỹ năng" subtitle="Những công cụ mình sử dụng thường xuyên">
      <div className="grid gap-6 md:grid-cols-3">
        {DATA.skills.map((group) => (
          <Card key={group.group}>
            <h4 className="font-medium mb-3 text-[color:var(--fg)]">{group.group}</h4>
            <div className="space-y-3">
              {group.items.map((s: any) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm text-[color:var(--fg)]/85">
                    <span>{s.name}</span>
                    <span>{s.level}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full overflow-hidden bg-[color:var(--track)]">
                    <div
                      style={{ width: `${s.level}%` }}
                      className="h-full"
                    >
                      {/* thanh fill: dùng gradient nhẹ theo mode qua var(--accent) */}
                      <div
                        className="h-full w-full"
                        style={{
                          background:
                            "linear-gradient(90deg, var(--accent), rgba(236,72,153,0.85))",
                        }}
                      />
                    </div>
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
