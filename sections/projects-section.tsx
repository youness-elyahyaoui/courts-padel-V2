import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ProjectCard from "../components/projects/project-card";
import { featuredProjects } from "../data/projects";

import de from "@/messages/de.json";
import en from "@/messages/en.json";
import fr from "@/messages/fr.json";
import es from "@/messages/es.json";

type Props = {
  locale: string;
};

const messages = { de, en, fr, es };

type Locale = keyof typeof messages;

function isSupportedLocale(locale: string): locale is Locale {
  return Object.prototype.hasOwnProperty.call(messages, locale);
}

export default function ProjectsSection({ locale }: Props) {
  const currentLocale = isSupportedLocale(locale) ? locale : "de";
  const t = messages[currentLocale].projectsSection;

  return (
    <section
      id="projects"
      className="bg-[#071426] py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-widest">
              <span className="h-0.5 w-9 bg-[#F50087]" />
              {t.eyebrow}
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              {t.title}{" "}
              <span className="text-[#F50087]">
                {t.titleHighlight}
              </span>
            </h2>
          </div>

          <Link
            href={`/${currentLocale}/projects`}
            className="
              inline-flex items-center gap-2
              rounded border border-white/60
              px-5 py-3 text-xs font-bold
              hover:bg-white hover:text-[#071426]
            "
          >
            {t.cta}
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              locale={currentLocale}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}