import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import {
  ArrowRight,
  Gem,
  Wrench,
  Handshake,
  SlidersHorizontal,
} from "lucide-react";

import CTASection from "@/sections/cta-section";

type Props = {
  params: Promise<{ locale: string }>;
};

const values = [
  { key: "quality", icon: Gem },
  { key: "expertise", icon: Wrench },
  { key: "reliability", icon: Handshake },
  { key: "tailored", icon: SlidersHorizontal },
] as const;

const projectImages = [
  {
    key: "indoor",
    src: "/images/about/project-indoor.png",
  },
  {
    key: "outdoor",
    src: "/images/about/project-outdoor.png",
  },
  {
    key: "aerial",
    src: "/images/about/project-aerial.png",
  },
] as const;

const buttonClass =
  "inline-flex min-h-11 items-center justify-center gap-4 " +
  "rounded-sm bg-[#F50087] px-6 py-3 text-[11px] font-bold " +
  "tracking-wide text-white transition-colors hover:bg-[#d60075] " +
  "focus-visible:outline-2 focus-visible:outline-offset-4 " +
  "focus-visible:outline-[#F50087]";

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "aboutPage",
  });

  return (
    <main className="bg-white text-[#071426]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#071426]">
        <Image
          src="/images/about/hero.png"
          alt={t("hero.imageAlt")}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#071426]/95 via-[#071426]/75 to-[#071426]/10"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="max-w-lg">
            <SectionLabel light>
              {t("hero.eyebrow")}
            </SectionLabel>

            <h1 className="mt-5 text-4xl font-extrabold text-white leading-[1.06] tracking-tight sm:text-5xl">
              {t("hero.title")}
              <br />
              {t("hero.subtitle")}
              <span className="block text-[#F50087]">
                {t("hero.highlight")}
              </span>
            </h1>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/85">
              {t("hero.description")}
            </p>

            <Link
              href={`/${locale}/contact?type=project`}
              className={`${buttonClass} mt-6`}
            >
              {t("hero.cta")}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-10 sm:px-8 lg:pt-12">
        <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
            <Image
              src="/images/about/court.png"
              alt={t("identity.imageAlt")}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <SectionLabel>
              {t("identity.eyebrow")}
            </SectionLabel>

            <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
              {t("identity.title")}
              <span className="block text-[#F50087]">
                {t("identity.highlight")}
              </span>
            </h2>

            <div className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <p>{t("identity.description")}</p>
              <p>{t("identity.commitment")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-4 sm:px-8">
        <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionLabel>
              {t("approach.eyebrow")}
            </SectionLabel>

            <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
              {t("approach.title")}
              <span className="block text-[#F50087]">
                {t("approach.highlight")}
              </span>
            </h2>

            <div className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <p>{t("approach.description")}</p>
              <p>{t("approach.coordination")}</p>
            </div>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
            <Image
              src="/images/about/planning.png"
              alt={t("approach.imageAlt")}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-[#F5F6F8]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-12">
          <SectionLabel>
            {t("values.eyebrow")}
          </SectionLabel>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t("values.title")}{" "}
            <span className="text-[#F50087]">
              {t("values.highlight")}
            </span>
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ key, icon: Icon }) => (
              <article key={key} className="bg-white p-6">
                <Icon
                  size={34}
                  strokeWidth={1.7}
                  aria-hidden="true"
                  className="text-[#F50087]"
                />

                <h3 className="mt-4 text-xs font-extrabold">
                  {t(`values.items.${key}.title`)}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {t(`values.items.${key}.description`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROJECTS */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-12">
        <div className="grid items-center gap-7 lg:grid-cols-[0.85fr_1.65fr] lg:gap-10">
          <div>
            <SectionLabel>
              {t("projects.eyebrow")}
            </SectionLabel>

            <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight">
              {t("projects.title")}
              <span className="block text-[#F50087]">
                {t("projects.highlight")}
              </span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              {t("projects.description")}
            </p>

            <Link
              href={`/${locale}/projects`}
              className={`${buttonClass} mt-5`}
            >
              {t("projects.cta")}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {projectImages.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}/projects`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-sm sm:aspect-[3/4]"
              >
                <Image
                  src={item.src}
                  alt={t(`projects.images.${item.key}`)}
                  fill
                  sizes="(min-width: 1024px) 23vw, (min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <CTASection locale={locale} />
    </main>
  );
}

function SectionLabel({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[10px] font-bold tracking-[0.13em] ${
        light ? "text-white" : "text-[#071426]"
      }`}
    >
      <span
        aria-hidden="true"
        className="h-[2px] w-8 shrink-0 bg-[#F50087]"
      />
      {children}
    </p>
  );
}