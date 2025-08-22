import { useState } from "react";
import Section from "./Section";
import Card from "./Card";
import Tag from "./Tag";
import Modal from "./Modal";
import { DATA } from "../data/portfolioData";

type Project = (typeof DATA)["projects"][number];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section id="projects" title="Dự án">
      <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DATA.projects.map((p) => (
          <Card key={p.title} className="h-full p-0 overflow-hidden">
            {/* Ảnh: cố định tỉ lệ */}
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
            </div>

            {/* Nội dung */}
            <div className="flex h-full flex-col p-5">
              <h4 className="text-lg font-medium text-white line-clamp-2 min-h-[3.2rem]">
                {p.title}
              </h4>

              <p className="mt-1 text-sm text-white/70 line-clamp-3">
                {p.desc}
              </p>

              <div className="mt-2">
                <button
                  onClick={() => setSelected(p)}
                  className="text-cyan-300 hover:underline text-sm"
                >
                  Xem thêm
                </button>
              </div>

              <div className="mt-3 flex flex-wrap gap-2 max-h-[72px] overflow-hidden">
                {p.tags.map((t: string) => (
                  <Tag key={t} label={t} />
                ))}
              </div>

              <div className="mt-auto pt-4 flex gap-4 text-sm">
                <a href={p.link} target="_blank" className="text-cyan-300 hover:underline">
                  Xem Demo
                </a>
                <a href={p.repo} target="_blank" className="text-white/60 hover:text-white">
                  GitHub
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal chi tiết */}
      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title}
      >
        {selected && (
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl border border-white/10">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full max-h-[360px] object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {selected.tags.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>

            <p className="whitespace-pre-line text-white/80 leading-relaxed">
              {selected.desc}
            </p>

            <div className="flex gap-4 pt-2">
              <a
                href={selected.link}
                target="_blank"
                className="rounded-lg border border-white/15 px-3 py-1.5 text-cyan-300 hover:bg-white/5"
              >
                Xem Demo
              </a>
              <a
                href={selected.repo}
                target="_blank"
                className="rounded-lg border border-white/15 px-3 py-1.5 text-white/80 hover:bg-white/5"
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
}
