import { getTranslations } from "next-intl/server";

import { projects } from "../../../data/projects";
import ProjectCard from "../../../components/projects/project-card";
import CTASection from "@/sections/cta-section";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "projectsPage",
  });

  const tProjects = await getTranslations({
    locale,
    namespace: "projectsContent",
  });

  const viewLabel = tProjects.has("viewProject")
    ? tProjects("viewProject")
    : undefined;

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#071426]">
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

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {projects.map((project) => {
          const itemKey =
            project.slug === "TSV-Meerbusch-e.V.-Tennis"
              ? "tsv-meerbusch-ev-tennis"
              : project.slug;

          const descriptionKey = `items.${itemKey}.description`;
          const countryKey = `countries.${itemKey}.country`;

          return (
            <ProjectCard
              key={project.slug}
              locale={locale}
              viewLabel={viewLabel}
              project={{
                ...project,
                description: tProjects.has(descriptionKey)
                  ? tProjects(descriptionKey)
                  : project.description,
                country: tProjects.has(countryKey)
                  ? tProjects(countryKey)
                  : project.country,
              }}
            />
          );
        })}
      </section>

      <CTASection locale={locale} />
    </main>
  );
}