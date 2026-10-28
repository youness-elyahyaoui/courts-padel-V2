import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BrushCleaning,
  PanelsTopLeft,
  Volleyball,
  Wrench,
} from "lucide-react";

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

const services = [
  { key: "turf", icon: BrushCleaning },
  { key: "structure", icon: PanelsTopLeft },
  { key: "equipment", icon: Volleyball },
  { key: "repairs", icon: Wrench },
] as const;

export default function MaintenanceSection({ locale }: Props) {
  const currentLocale = isSupportedLocale(locale) ? locale : "de";
  const t = messages[currentLocale].maintenance;

  return (
    <section
      id="maintenance"
      aria-labelledby="maintenance-title"
      className="scroll-mt-24 bg-[#071426] text-white"
    >
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.95fr_1.05fr]">
        {/* PHOTO */}
        <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[510px]">
          <Image
            src="/images/maintenance.png"
            alt={t.imageAlt}
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover object-center"
          />

          {/* Transition douce vers le panneau de droite */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-0
              bg-gradient-to-t from-[#071426]/30 to-transparent
              lg:bg-gradient-to-l
            "
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
          <p className="mb-4 flex items-center gap-3 text-[10px] font-bold tracking-[0.16em]">
            <span className="h-[2px] w-8 shrink-0 bg-[#F50087]" />
            {t.eyebrow}
          </p>

          <h2
            id="maintenance-title"
            className="
              text-3xl font-extrabold leading-[1.1]
              tracking-[-0.035em] sm:text-4xl
            "
          >
            {t.title}
            <span className="block text-[#F50087]">
              {t.titleHighlight}
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
            {t.description}
          </p>

          {/* FOUR SERVICES */}
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {services.map(({ key, icon: Icon }) => (
              <article
                key={key}
                className="
                  rounded-sm border border-white/[0.07]
                  bg-white/[0.015] px-3 py-4
                "
              >
                <Icon
                  size={30}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="mb-3 text-[#F50087]"
                />

                <h3 className="text-[10px] font-extrabold leading-4">
                  {t.services[key].title}
                </h3>

                <p className="mt-2 text-[11px] leading-[1.6] text-slate-300">
                  {t.services[key].description}
                </p>
              </article>
            ))}
          </div>

          {/* BUTTON */}
          <Link
            href={`/${currentLocale}/wartung`}
            className="
              mt-6 inline-flex min-h-11 w-fit
              items-center justify-center gap-4
              rounded-sm bg-[#F50087] px-6
              text-[11px] font-bold tracking-wide
              transition-colors hover:bg-[#d60075]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-white
            "
          >
            {t.cta}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}