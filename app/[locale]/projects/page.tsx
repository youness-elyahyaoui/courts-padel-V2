import {projects} from "../../../data/projects";
import ProjectCard from "../../../components/projects/project-card";
import CTASection from "@/sections/cta-section";

export default async function ProjectsPage({params}: {params: Promise<{locale:string}>}) {
  const {locale} = await params;
  return <main className="min-h-screen bg-[#F7F8FA] text-[#071426]">
    <section className="bg-[#071426] px-5 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-semibold tracking-widest text-[#F50087]">COURTS&PADEL / PROJEKTE</p>
        <h1 className="text-4xl font-extrabold md:text-6xl">Unsere Projekte</h1>
        <p className="mt-5 max-w-2xl text-slate-300">Einblicke in unsere realisierten Padelanlagen.</p>
      </div>
    </section>
    <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
      {projects.map(project => <ProjectCard key={project.slug} project={project} locale={locale}/>)}
    </section>
    <CTASection locale={locale} />
  </main>;
}
