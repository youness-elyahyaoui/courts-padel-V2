import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Gem,
  Settings,
  Handshake,
  UsersRound,
} from "lucide-react";

const values = [
  {
    title: "QUALITÄT",
    description:
      "Hochwertige Materialien und eine präzise Ausführung.",
    icon: Gem,
  },
  {
    title: "KOMPETENZ",
    description:
      "Erfahrung in der Umsetzung verschiedener Padelprojekte.",
    icon: Settings,
  },
  {
    title: "ZUVERLÄSSIGKEIT",
    description:
      "Ein professioneller Partner von der Planung bis zur Fertigstellung.",
    icon: Handshake,
  },
  {
    title: "INDIVIDUELLE LÖSUNGEN",
    description:
      "Maßgeschneiderte Konzepte für Ihre Anforderungen.",
    icon: UsersRound,
  },
];

type Props = {
  locale: string;
};

export default function AboutSection({ locale }: Props) {
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
              ÜBER COURTS&PADEL
            </p>

            <h2
              id="about-title"
              className="
                text-3xl font-extrabold leading-[1.1]
                tracking-[-0.035em] sm:text-4xl lg:text-[42px]
              "
            >
              Ihr Partner für
              <span className="block text-[#F50087]">
                professionelle Padelanlagen.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-6 text-slate-600">
              COURTS&PADEL bietet professionelle Lösungen rund um
              Padelanlagen. Gemeinsam mit unseren Kunden planen und
              koordinieren wir die einzelnen Projektphasen – von der
              Fundamentierung und Lieferung über die fachgerechte
              Montage bis hin zur langfristigen Wartung.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Wir legen besonderen Wert auf präzise Arbeit, Qualität
              und eine zuverlässige Umsetzung unserer Projekte.
            </p>

            <Link
              href={`/${locale}/about`}
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
              MEHR ÜBER UNS
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-md">
            <Image
              src="/images/about-team.png"
              alt="Das COURTS&PADEL Team bei der Montage einer Padelanlage"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* FOUR VALUES */}
        <div className="mt-10 grid grid-cols-2 gap-y-8 md:mt-12 md:grid-cols-4">
          {values.map(({ title, description, icon: Icon }, index) => (
            <article
              key={title}
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
                {title}
              </h3>

              <p className="mx-auto mt-2 max-w-[220px] text-xs leading-5 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}