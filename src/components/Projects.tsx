import Section from "./Section";
import Card from "./Card";
import Tag from "./Tag";
import { DATA } from "../data/portfolioData";

export default function Projects() {
  return (
    <Section id="projects" title="Dự án">
      <div className="grid gap-6 md:grid-cols-3">
        {DATA.projects.map((p) => (
          <Card key={p.title} className="rounded-xl border border-white/10">
            <img src={p.image} alt={p.title} className="rounded-xl mb-3" />
            <h4 className="text-lg font-medium text-white">{p.title}</h4>
            <p className=" dark:text-gray-300 text-sm mt-1 text-white/70">
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {p.tags.map((t: string) => (
                <Tag key={t} label={t} />
              ))}
            </div>
            <div className="mt-4 flex gap-3 text-sm">
              <a href={p.link} target="_blank" className="text-indigo-600">
                Xem Demo
              </a>
              <a href={p.repo} target="_blank" className="text-gray-600">
                GitHub
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
