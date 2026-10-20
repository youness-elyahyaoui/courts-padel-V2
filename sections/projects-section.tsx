import Link from "next/link";
import {ArrowRight} from "lucide-react";
import ProjectCard from "../components/projects/project-card"
import {featuredProjects} from "../data/projects";

export default function ProjectsSection({locale}: {locale: string}) {
  return (
    <section id="projects" className="bg-[#071426] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-widest"><span className="h-0.5 w-9 bg-[#F50087]"/>UNSERE PROJEKTE</p>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Realisierte <span className="text-[#F50087]">Padelanlagen.</span></h2>
          </div>
          <Link href={`/${locale}/projects`} className="inline-flex items-center gap-2 rounded border border-white/60 px-5 py-3 text-xs font-bold hover:bg-white hover:text-[#071426]">ALLE PROJEKTE ANSEHEN <ArrowRight size={17}/></Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map(project => <ProjectCard key={project.slug} locale={locale} project={project}/>)}
        </div>
      </div>
    </section>
  );
}
