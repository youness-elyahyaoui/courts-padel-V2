import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import type { Project } from "../../data/projects";

type Props = {
  project: Project;
  locale: string;
  viewLabel?: string;
};

export default function ProjectCard({
  project,
  locale,
  viewLabel = "PROJEKT ANSEHEN",
}: Props) {
  const image = project.images[0];

  return (
    <Link
      href={`/${locale}/projects/${project.slug}`}
      className="group block min-w-0"
    >
      <article
        className="h-full overflow-hidden rounded-xl bg-white text-[#071426]
                   shadow-sm transition-all duration-300 hover:-translate-y-1
                   hover:shadow-xl"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
          {image && (
            <Image
              src={image}
              alt={`${project.title} – ${project.city}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}

          {project.type && (
            <span className="absolute left-4 top-4 rounded-md bg-[#071426]/85 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm">
              {project.type}
            </span>
          )}

          <span
            aria-hidden="true"
            className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#071426] shadow-md transition group-hover:bg-[#F50087] group-hover:text-white"
          >
            <ArrowUpRight size={19} />
          </span>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-extrabold">{project.title}</h3>

          <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
            <MapPin
              size={16}
              className="shrink-0 text-[#F50087]"
              aria-hidden="true"
            />
            {project.city}, {project.country}
          </p>

          {project.description && (
            <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600">
              {project.description}
            </p>
          )}

          <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase text-[#F50087]">
            {viewLabel}
            <ArrowUpRight size={15} aria-hidden="true" />
          </div>
        </div>
      </article>
    </Link>
  );
}