import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Gem,
  Settings,
  Handshake,
  UsersRound,
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

const values = [
  { key: "quality", icon: Gem },
  { key: "expertise", icon: Settings },
  { key: "reliability", icon: Handshake },
  { key: "tailored", icon: UsersRound },
] as const;

export default function AboutSection({ locale }: Props) {
  const currentLocale = isSupportedLocale(locale) ? locale : "de";
  const t = messages[currentLocale].aboutSection;

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-24 bg-[#F7F8FA] py-14 text-[#071426] md:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* TEXT + PHOTO */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[10px] font-bold tracking-[0.12em]">
              <span className="h-[2px] w-8 shrink-0 bg-[#F50087]" />
              {t.eyebrow}
            </p>

            <h2
              id="about-title"
              className="
                text-3xl font-extrabold leading-[1.1]
                tracking-[-0.035em] sm:text-4xl lg:text-[42px]
              "
            >
              {t.title}
              <span className="block text-[#F50087]">
                {t.titleHighlight}
              </span>
            </h2>

            <p className="mt-5 text-sm leading-6 text-slate-600">
              {t.description}
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {t.commitment}
            </p>

            <Link
              href={`/${currentLocale}/about`}
              className="
                mt-6 inline-flex min-h-11 items-center
                justify-center gap-4 rounded-sm
                bg-[#F50087] px-6 text-[11px]
                font-bold tracking-wide text-white
                transition-colors hover:bg-[#d60075]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#071426]
              "
            >
              {t.cta}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-md">
            <Image
              src="/images/about-team.png"
              alt={t.imageAlt}
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* FOUR VALUES */}
        <div className="mt-10 grid grid-cols-2 gap-y-8 md:mt-12 md:grid-cols-4">
          {values.map(({ key, icon: Icon }, index) => (
            <article
              key={key}
              className={`
                px-4 text-center sm:px-6
                ${index % 2 === 1 ? "border-l border-slate-200" : ""}
                ${index === 2 ? "md:border-l md:border-slate-200" : ""}
              `}
            >
              <Icon
                size={32}
                strokeWidth={1.5}
                aria-hidden="true"
                className="mx-auto mb-3 text-[#F50087]"
              />

              <h3 className="text-[11px] font-extrabold leading-4">
                {t.values[key].title}
              </h3>

              <p className="mx-auto mt-2 max-w-[220px] text-xs leading-5 text-slate-600">
                {t.values[key].description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}