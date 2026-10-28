import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const services = [
  {
    id: "verkauf",
    key: "sales",
    image: "/images/verkauf.png",
    icon: "/icons/icon 1.svg",
  },
  {
    id: "montage",
    key: "installation",
    image: "/images/montage.png",
    icon: "/icons/icon 2.svg",
  },
  {
    id: "fundamentierung",
    key: "foundations",
    image: "/images/fundamentierung.png",
    icon: "/icons/icon 3.svg",
  },
  {
    id: "mobile-systeme",
    key: "mobile",
    image: "/images/mobile-systeme.jpeg",
    icon: "/icons/icon 4.svg",
  },
  {
    id: "ueberdachungen",
    key: "canopies",
    image: "/images/ueberdachungen.png",
    icon: "/icons/icon 5.svg",
  },
  {
    id: "wartung",
    key: "maintenance",
    image: "/images/wartung.png",
    icon: "/icons/icon 6.svg",
  },
] as const;

export default async function LeistungenPage() {
  const t = await getTranslations("servicesPage");

  return (
    <main className="bg-white text-[#101329]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/hero.png"
          alt={t("hero.imageAlt")}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#070e20]/95 via-[#070e20]/65 to-[#070e20]/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:py-24">
          <div className="max-w-xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-white">
              <span className="h-px w-9 bg-[#ed008c]" />
              {t("hero.eyebrow")}
            </p>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t("hero.title")}
              <br />
              {t("hero.subtitle")}{" "}
              <span className="text-[#ed008c]">
                {t("hero.highlight")}
              </span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-white/90 sm:text-lg">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <div className="mx-auto max-w-7xl space-y-10 px-6 py-10 sm:px-10 lg:space-y-8 lg:py-12">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="grid scroll-mt-28 items-center gap-6 md:grid-cols-2 lg:gap-10"
          >
            <div
              className={`relative aspect-[16/9] overflow-hidden rounded-md ${
                index % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={service.image}
                alt={t(`items.${service.key}.imageAlt`)}
                fill
                sizes="(min-width: 1280px) 580px, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div
              className={`flex items-start gap-4 py-2 lg:gap-5 ${
                index % 2 === 1 ? "md:order-1" : ""
              }`}
            >
              <Image
                src={service.icon}
                alt=""
                width={54}
                height={54}
                className="h-11 w-11 shrink-0 object-contain lg:h-14 lg:w-14"
              />

              <div>
                <p className="mb-2 text-[10px] font-bold tracking-[0.08em] sm:text-xs">
                  {t(`items.${service.key}.label`)}
                </p>

                <h2 className="text-2xl font-extrabold leading-[1.12] tracking-tight lg:text-3xl">
                  {t(`items.${service.key}.title`)}
                  <br />
                  <span className="text-[#ed008c]">
                    {t(`items.${service.key}.highlight`)}
                  </span>
                </h2>

                <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-600 lg:text-base">
                  {t(`items.${service.key}.description`)}
                </p>

                {service.id === "wartung" && (
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-3 border border-[#ed008c] px-4 py-3 text-xs font-bold text-[#ed008c] transition-colors hover:bg-[#ed008c] hover:text-white"
                  >
                    {t("maintenanceCta")}
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CONTACT CTA */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#070e20]/95 via-[#070e20]/85 to-[#070e20]/45" />

        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:py-16">
          <p className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.15em] text-white">
            <span className="h-px w-8 bg-[#ed008c]" />
            {t("contact.eyebrow")}
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t("contact.title")}{" "}
            <span className="text-[#ed008c]">
              {t("contact.highlight")}
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
            {t("contact.description")}
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-4 bg-[#ed008c] px-6 py-4 text-xs font-bold text-white transition-colors hover:bg-[#c90077]"
          >
            {t("contact.cta")}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}