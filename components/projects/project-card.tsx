
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "../../data/projects";

type Props = {
  project: Project;
  locale: string;
};

export default function ProjectCard({
  project,
  locale,
}: Props) {
  return (
    <Link
      href={`/${locale}/projects/${project.slug}`}
      className="group block min-w-0"
    >
      <article
        className="
          h-full overflow-hidden rounded-xl
          bg-white text-[#071426]
          shadow-sm transition-all duration-300
          hover:-translate-y-1
          hover:shadow-xl
        "
      >
        {/* PHOTO */}
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
          <Image
            src={project.images[0]}
            alt={`${project.title} – ${project.city}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {project.type && (
            <span className="absolute left-4 top-4 rounded-md bg-[#071426]/85 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm">
              {project.type}
            </span>
          )}

          <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#071426] shadow-md transition group-hover:bg-[#F50087] group-hover:text-white">
            <ArrowUpRight size={19} />
          </span>
        </div>

        {/* INFORMATIONS */}
        <div className="p-5">
          <h3 className="text-lg font-extrabold">
            {project.title}
          </h3>

          <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={16} className="shrink-0 text-[#F50087]" />
            {project.city}, {project.country}
          </p>

          {project.description && (
            <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600">
              {project.description}
            </p>
          )}

          <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#F50087]">
            PROJEKT ANSEHEN
            <ArrowUpRight size={15} />
          </div>
        </div>
      </article>
    </Link>
  );
}
