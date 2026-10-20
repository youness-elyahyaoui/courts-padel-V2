
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

import { projects } from "../../../../data/projects";
import CTASection from "@/sections/cta-section";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return ["de", "en", "fr"].flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug,
    }))
  );
}

export default async function ProjectDetailPage({
  params,
}: Props) {
  const { locale, slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) notFound();

  const location = `${project.city}, ${project.country}`;

  const details = [
    { label: "Standort", value: location },
    { label: "Anzahl der Plätze", value: project.courtCount },
    { label: "Platztyp", value: project.courtType },
    { label: "Ausführung", value: project.installation },
  ].filter((item) => item.value);

  const [cover, ...gallery] = project.images;

  return (
    <main className="bg-[#F8F8F6] text-[#071426]">

      {/* ================= HEADER ================= */}
      <section className="mx-auto max-w-[1440px] px-6 pb-10 pt-10 md:px-12 lg:px-16 lg:pb-14 lg:pt-14">

        <Link
          href={`/${locale}/projects`}
          className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 transition hover:text-[#F50087]"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          Alle Projekte
        </Link>

        <div className="mt-12 grid items-end gap-8 lg:grid-cols-[1fr_auto]">

          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#F50087]">
              COURTS&PADEL — PROJEKTE
            </p>

            <h1 className="max-w-5xl text-[clamp(3.4rem,8vw,7.5rem)] font-bold leading-[0.95] tracking-[-0.065em]">
              {project.title}
              <span className="text-[#F50087]">.</span>
            </h1>

            <div className="mt-7 flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={16} />
              {location}
            </div>
          </div>

          {project.type && (
            <div className="hidden pb-2 lg:block">
              <span className="border-b border-[#071426] pb-3 text-xs font-bold uppercase tracking-[0.2em]">
                {project.type}
              </span>
            </div>
          )}

        </div>
      </section>

      {/* ================= FULL WIDTH PROJECT PHOTO ================= */}
      <section className="relative mx-auto max-w-[1600px] px-3 md:px-6">

        <div className="relative h-[400px] overflow-hidden bg-[#0D2440] md:h-[620px] xl:h-[760px]">

          <Image
            src={cover}
            alt={`${project.title} — ${location}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />

          <div className="absolute bottom-7 left-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-white md:bottom-10 md:left-10">
            <span className="h-[2px] w-7 bg-[#F50087]" />
            Projektaufnahme
          </div>

          <span className="absolute bottom-7 right-7 text-xs font-semibold text-white md:bottom-10 md:right-10">
            01 / {String(project.images.length).padStart(2, "0")}
          </span>

        </div>
      </section>

      {/* ================= EDITORIAL DESCRIPTION ================= */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28 lg:px-16">

        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">

          <div>
            <p className="mb-7 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F50087]">
              01 — Das Projekt
            </p>

            <h2 className="max-w-2xl text-3xl font-bold leading-[1.15] tracking-[-0.045em] md:text-5xl">
              Professionelle Lösungen.
              <br />
              <span className="text-slate-400">
                Individuell umgesetzt.
              </span>
            </h2>

            {project.description && (
              <p className="mt-9 max-w-xl text-lg font-medium leading-relaxed">
                {project.description}
              </p>
            )}

            {project.overview && (
              <p className="mt-5 max-w-xl text-[15px] leading-8 text-slate-600">
                {project.overview}
              </p>
            )}
          </div>

          {/* TECHNICAL SPECIFICATIONS */}
          {details.length > 0 && (
            <div className="lg:pt-12">
              <p className="mb-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Projektdaten
              </p>

              <div className="border-t border-slate-300">
                {details.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[42%_1fr] gap-4 border-b border-slate-300 py-5"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {item.label}
                    </span>

                    <span className="text-sm font-semibold">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ================= GALLERY ================= */}
      {gallery.length > 0 && (
        <section className="bg-white py-20 md:py-28">

          <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">

            <div className="mb-12 flex items-end justify-between gap-5">

              <div>
                <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F50087]">
                  02 — Galerie
                </p>

                <h2 className="text-4xl font-bold tracking-[-0.05em] md:text-6xl">
                  Einblicke<span className="text-[#F50087]">.</span>
                </h2>
              </div>

              <span className="text-xs font-semibold tracking-widest text-slate-400">
                {String(project.images.length).padStart(2, "0")} FOTOS
              </span>
            </div>

            {/* ASYMMETRIC PHOTO GRID */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">

              {gallery.map((image, index) => {
                const isWide = index % 3 === 0;
                const span = isWide
                  ? "md:col-span-12"
                  : "md:col-span-6";

                return (
                  <figure
                    key={image}
                    className={`group relative overflow-hidden bg-slate-100 ${span}`}
                  >
                    <div
                      className={`relative ${
                        isWide
                          ? "aspect-[16/10] md:aspect-[21/9]"
                          : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} — Aufnahme ${index + 2}`}
                        fill
                        sizes={
                          isWide
                            ? "100vw"
                            : "(max-width: 768px) 100vw, 50vw"
                        }
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                      />
                    </div>

                    <figcaption className="absolute bottom-5 left-5 bg-white/95 px-3 py-2 text-[11px] font-bold tracking-widest text-[#071426]">
                      {String(index + 2).padStart(2, "0")}
                    </figcaption>
                  </figure>
                );
              })}

            </div>
          </div>
        </section>
      )}

      {/* ================= FEATURES ================= */}
      {project.features && project.features.length > 0 && (
        <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-24 lg:px-16">

          <div className="grid gap-10 lg:grid-cols-2">

            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F50087]">
                03 — Ausführung
              </p>

              <h2 className="text-3xl font-bold tracking-[-0.045em] md:text-5xl">
                Projektmerkmale
              </h2>
            </div>

            <div className="border-t border-slate-300">
              {project.features.map((feature, index) => (
                <div
                  key={`${feature}-${index}`}
                  className="flex items-center gap-6 border-b border-slate-300 py-5"
                >
                  <span className="text-xs font-bold text-[#F50087]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm font-medium md:text-base">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#071426] text-white">

        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28 lg:px-16">

          <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">

            <div>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#F50087]">
                Ihr nächstes Projekt
              </p>

              <h2 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.05em] md:text-6xl">
                Ihre Idee.
                <br />
                Unsere Umsetzung<span className="text-[#F50087]">.</span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
                Wir beraten Sie persönlich und entwickeln gemeinsam
                mit Ihnen die passende Lösung für Ihre Padelanlage.
              </p>
            </div>

            <Link
              href={`/${locale}/contact?type=project`}
              className="group inline-flex min-h-14 items-center gap-10 bg-[#F50087] px-7 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#D90078]"
            >
              Projekt anfragen
              <ArrowUpRight
                size={20}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </div>
        </div>
      </section>

      <CTASection locale={locale} />

      {/* ================= NEXT NAVIGATION ================= */}
      <nav className="bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-6 py-9 md:px-12 lg:px-16">

          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wide transition hover:text-[#F50087]"
          >
            <ArrowLeft size={18} />
            Alle Projekte
          </Link>

          {(() => {
            const currentIndex = projects.findIndex(
              (item) => item.slug === slug
            );

            const nextProject =
              projects[(currentIndex + 1) % projects.length];

            return (
              <Link
                href={`/${locale}/projects/${nextProject.slug}`}
                className="group inline-flex items-center gap-3 text-right text-xs font-bold uppercase tracking-wide transition hover:text-[#F50087]"
              >
                <span className="hidden sm:inline">
                  Nächstes Projekt: {nextProject.title}
                </span>
                <span className="sm:hidden">
                  Nächstes Projekt
                </span>
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            );
          })()}

        </div>
      </nav>

    </main>
  );
}
