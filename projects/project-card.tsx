import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight, MapPin} from "lucide-react";
import type {Project} from "../../data/projects";

export default function ProjectCard({project, locale}: {project: Project; locale: string}) {
  return (
    <Link href={`/${locale}/projects/${project.slug}`} className="group block min-w-0">
      <article className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
          <Image src={project.images[0]} alt={`${project.title} – ${project.city}`} fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105" />
          <span className="absolute bottom-4 right-4 rounded-full bg-white p-2 text-[#071426] shadow"><ArrowUpRight size={19}/></span>
        </div>
        <div className="p-5 text-[#071426]">
          <h3 className="text-lg font-bold">{project.title}</h3>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-600"><MapPin size={15} className="text-[#F50087]"/>{project.city}, {project.country}</p>
        </div>
      </article>
    </Link>
  );
}
