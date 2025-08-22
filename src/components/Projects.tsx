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
    <Section id="projects" title="Dự án" subtitle="Một vài sản phẩm mình từng thực hiện">
      <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DATA.projects.map((p) => (
          <Card key={p.title} className="h-full p-0 overflow-hidden">
            {/* Ảnh */}
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img src={p.image as string} alt={p.title} className="h-full w-full object-cover" />
            </div>

            {/* Nội dung */}
            <div className="flex h-full flex-col p-5">
              <h4 className="text-lg font-medium text-[color:var(--fg)] line-clamp-2 min-h-[3.2rem]">
                {p.title}
              </h4>

              <p className="mt-1 text-sm text-[color:var(--fg)]/70 line-clamp-3">
                {p.desc}
              </p>

              <div className="mt-2">
                <button
                  onClick={() => setSelected(p)}
                  className="text-[color:var(--accent)] hover:underline text-sm"
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
                <a
                  href={p.link}
                  target="_blank"
                  className="hover:underline"
                  style={{ color: "var(--accent)" }}
                >
                  Xem Demo
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  className="text-[color:var(--fg)]/70 hover:text-[color:var(--fg)]"
                >
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
            <div className="overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--card)]">
              <img
                src={selected.image as string}
                alt={selected.title}
                className="w-full max-h-[360px] object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {selected.tags.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>

            <p className="whitespace-pre-line text-[color:var(--fg)]/85 leading-relaxed">
              {selected.desc}
            </p>

            <div className="flex gap-3 pt-2">
              <a
                href={selected.link}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2
             bg-indigo-600 text-white shadow hover:bg-indigo-700 transition"
              
              >
                Xem Demo
              </a>
              <a
                href={selected.repo}
                target="_blank"
                className="rounded-lg border px-3 py-1.5
                           border-[color:var(--border)] text-[color:var(--fg)]/85 hover:bg-black/5"
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
