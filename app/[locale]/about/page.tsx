import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Gem,
  Wrench,
  Handshake,
  SlidersHorizontal,
} from "lucide-react";

import CTASection from "@/sections/cta-section"; ;

type Props = {
  params: Promise<{ locale: string }>;
};

const values = [
  {
    icon: Gem,
    title: "QUALITÄT",
    text: "Sorgfältige Arbeit und präzise Ausführung in jedem Projekt.",
  },
  {
    icon: Wrench,
    title: "FACHKOMPETENZ",
    text: "Praxisorientierte Lösungen für unterschiedliche Padelprojekte.",
  },
  {
    icon: Handshake,
    title: "ZUVERLÄSSIGKEIT",
    text: "Verbindliche Zusammenarbeit und abgestimmte Projektabläufe.",
  },
  {
    icon: SlidersHorizontal,
    title: "INDIVIDUELLE LÖSUNGEN",
    text: "Anpassung an die Anforderungen des jeweiligen Projekts.",
  },
];

const projectImages = [
  {
    src: "/images/about/project-indoor.png",
    alt: "Indoor-Padelanlage",
  },
  {
    src: "/images/about/project-outdoor.png",
    alt: "Outdoor-Padelanlage mit blauem Kunstrasen",
  },
  {
    src: "/images/about/project-aerial.png",
    alt: "Padelanlage aus der Vogelperspektive",
  },
];

const buttonClass =
  "inline-flex min-h-11 items-center justify-center gap-4 " +
  "rounded-sm bg-[#F50087] px-6 py-3 text-[11px] font-bold " +
  "tracking-wide text-white transition-colors hover:bg-[#d60075] " +
  "focus-visible:outline-2 focus-visible:outline-offset-4 " +
  "focus-visible:outline-[#F50087]";

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;

  return (
    <main className="bg-white text-[#071426]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#071426]">
        <Image
          src="/images/about/hero.png"
          alt="Montage einer Padelanlage"
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
            <SectionLabel light>ÜBER UNS</SectionLabel>

            <h1 className="mt-5 text-4xl font-extrabold text-white leading-[1.06] tracking-tight sm:text-5xl">
              Ihr Partner für
              <br />
              professionelle
              <span className="block text-[#F50087]">
                Padelanlagen.
              </span>
            </h1>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/85">
              COURTS&PADEL steht für fachgerechte Arbeit,
              zuverlässige Zusammenarbeit und individuelle
              Lösungen rund um Padelanlagen.
            </p>

            <Link
              href={`/${locale}/contact?type=project`}
              className={`${buttonClass} mt-6`}
            >
              KONTAKT AUFNEHMEN
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* WER WIR SIND */}
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-10 sm:px-8 lg:pt-12">
        <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
            <Image
              src="/images/about/court.png"
              alt="Padelplatz mit Glaswänden und blauem Kunstrasen"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <SectionLabel>WER WIR SIND</SectionLabel>

            <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
              Leidenschaft für Padel.
              <span className="block text-[#F50087]">
                Anspruch an Qualität.
              </span>
            </h2>

            <div className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <p>
                COURTS&PADEL ist ein auf Padelanlagen
                spezialisiertes Unternehmen mit Sitz in Monheim
                am Rhein.
              </p>

              <p>
                Wir begleiten unterschiedliche Padelprojekte und
                legen besonderen Wert auf sorgfältige Ausführung,
                präzise Montage und eine vertrauensvolle
                Zusammenarbeit mit unseren Kunden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UNSERE ARBEITSWEISE */}
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-4 sm:px-8">
        <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionLabel>UNSERE ARBEITSWEISE</SectionLabel>

            <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
              Gemeinsam planen.
              <span className="block text-[#F50087]">
                Professionell umsetzen.
              </span>
            </h2>

            <div className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <p>
                Jedes Padelprojekt bringt unterschiedliche
                Anforderungen mit sich. Deshalb besprechen wir
                gemeinsam mit unseren Kunden die jeweiligen
                Gegebenheiten und stimmen die Umsetzung auf
                das Vorhaben ab.
              </p>

              <p>
                Wir stimmen die einzelnen Arbeitsschritte
                sorgfältig aufeinander ab und legen großen Wert
                auf eine fachgerechte Umsetzung.
              </p>
            </div>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
            <Image
              src="/images/about/planning.png"
              alt="Abstimmung der Planung für eine Padelanlage"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* UNSERE WERTE */}
      <section className="bg-[#F5F6F8]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-12">
          <SectionLabel>WAS UNS AUSZEICHNET</SectionLabel>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Unsere <span className="text-[#F50087]">Werte.</span>
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <article key={title} className="bg-white p-6">
                <Icon
                  size={34}
                  strokeWidth={1.7}
                  aria-hidden="true"
                  className="text-[#F50087]"
                />

                <h3 className="mt-4 text-xs font-extrabold">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* UNSERE PROJEKTE */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-12">
        <div className="grid items-center gap-7 lg:grid-cols-[0.85fr_1.65fr] lg:gap-10">
          <div>
            <SectionLabel>UNSERE PROJEKTE</SectionLabel>

            <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight">
              Projekte, die
              <span className="block text-[#F50087]">
                für sich sprechen.
              </span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              Erhalten Sie Einblicke in ausgewählte Padelanlagen,
              die COURTS&PADEL umgesetzt hat.
            </p>

            <Link
              href={`/${locale}/projects`}
              className={`${buttonClass} mt-5`}
            >
              UNSERE PROJEKTE ANSEHEN
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {projectImages.map((item) => (
              <Link
                key={item.src}
                href={`/${locale}/projects`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-sm sm:aspect-[3/4]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
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
  children: React.ReactNode;
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