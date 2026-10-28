"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    key: "sales",
    icon: "/icons/icon 1.svg",
  },
  {
    key: "installation",
    icon: "/icons/icon 2.svg",
  },
  {
    key: "foundations",
    icon: "/icons/icon 3.svg",
  },
  {
    key: "mobile",
    icon: "/icons/icon 4.svg",
  },
  {
    key: "canopies",
    icon: "/icons/icon 5.svg",
  },
  {
    key: "maintenance",
    icon: "/icons/icon 6.svg",
  },
] as const;

export default function ServicesSection() {
  const t = useTranslations("servicesSection");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (
      !section ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const elements = Array.from(
      section.querySelectorAll<HTMLElement>("[data-cp-reveal]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;

          element.classList.remove("cp-reveal-pending");
          element.classList.add("cp-reveal-visible");
          observer.unobserve(element);
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) => {
      // Avoid hiding content that is already visible on page load.
      if (element.getBoundingClientRect().top < window.innerHeight) {
        return;
      }

      element.classList.add("cp-reveal-pending");
      observer.observe(element);
    });

    return () => {
      observer.disconnect();

      elements.forEach((element) => {
        element.classList.remove(
          "cp-reveal-pending",
          "cp-reveal-visible"
        );
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="
        cp-motion scroll-mt-24 bg-[#F7F8FA]
        py-20 text-[#071426] md:py-28
      "
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* HEADER */}
        <div data-cp-reveal className="mb-12 max-w-4xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[#F50087]" />

            <span className="text-[11px] font-bold tracking-[2px]">
              {t("eyebrow")}
            </span>
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
            {t("title")}{" "}
            <span className="text-[#F50087]">
              {t("titleHighlight")}
            </span>
          </h2>

          <p className="mt-6 max-w-[780px] text-sm leading-8 text-slate-600 md:text-base">
            {t("description")}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.key}
              data-cp-reveal
              className="h-full"
              style={
                {
                  "--cp-delay": `${(index % 3) * 70}ms`,
                } as CSSProperties
              }
            >
              <article
                className="
                  group relative flex h-full min-h-[290px]
                  flex-col items-center overflow-hidden
                  rounded-xl border border-[#E8EAF0]
                  bg-white px-4 py-7 text-center
                  shadow-[0_3px_20px_rgba(7,20,38,0.04)]
                  transition-[transform,border-color,box-shadow]
                  duration-300
                  hover:-translate-y-1
                  hover:border-pink-200
                  hover:shadow-[0_15px_35px_rgba(7,20,38,0.1)]
                  md:min-h-[330px] md:px-8 md:py-9
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute inset-x-0
                    top-0 h-24 bg-gradient-to-b
                    from-pink-50/70 to-transparent
                    opacity-0 transition-opacity duration-300
                    group-hover:opacity-100
                  "
                />

                <span
                  aria-hidden="true"
                  className="
                    absolute right-4 top-4 text-[11px]
                    font-semibold text-slate-300
                    transition-colors duration-300
                    group-hover:text-[#F50087]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative flex h-[100px] w-full items-center justify-center md:h-[135px]">
                  <Image
                    src={service.icon}
                    alt=""
                    width={150}
                    height={150}
                    unoptimized
                    className="
                      h-[95px] w-[110px] object-contain
                      transition-transform duration-300
                      group-hover:-translate-y-1
                      group-hover:scale-105
                      md:h-[125px] md:w-[150px]
                    "
                  />
                </div>

                <h3 className="relative mt-5 max-w-[300px] text-[12px] font-extrabold leading-snug md:text-[17px]">
                  {t(`items.${service.key}.title`)}
                </h3>

                <p className="relative mt-3 max-w-[320px] text-[11px] leading-relaxed text-slate-600 md:text-[14px]">
                  {t(`items.${service.key}.description`)}
                </p>

                <div className="mt-auto pt-7">
                  <span
                    aria-hidden="true"
                    className="
                      mx-auto block h-[2px] w-9 bg-[#F50087]
                      transition-[width] duration-300
                      group-hover:w-16
                    "
                  />
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div data-cp-reveal className="mt-12 flex justify-center">
          <Link
            href="/leistungen"
            className="
              group inline-flex items-center justify-center
              gap-3 rounded-md bg-[#ed008c]
              px-7 py-4 text-sm font-bold text-white
              transition-[background-color,transform]
              duration-300 hover:-translate-y-0.5
              hover:bg-[#c90077]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#F50087]
            "
          >
            {t("cta")}

            <ArrowRight
              size={18}
              aria-hidden="true"
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}