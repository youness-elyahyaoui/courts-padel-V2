import { getTranslations } from "next-intl/server";

import { projects } from "../../../data/projects";
import ProjectCard from "../../../components/projects/project-card";
import CTASection from "@/sections/cta-section";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "projectsPage",
  });

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#071426]">
      {/* HERO */}
      <section className="bg-[#071426] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold tracking-widest text-[#F50087]">
            {t("breadcrumb")}
          </p>

          <h1 className="text-4xl font-extrabold md:text-6xl">
            {t("title")}
          </h1>

          <p className="mt-5 max-w-2xl text-slate-300">
            {t("description")}
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            locale={locale}
          />
        ))}
      </section>

      {/* CONTACT CTA */}
      <CTASection locale={locale} />
    </main>
  );
}