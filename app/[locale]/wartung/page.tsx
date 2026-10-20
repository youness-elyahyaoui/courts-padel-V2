import Image from "next/image";
import { Link } from "@/i18n/navigation";
import CTASection from "@/sections/cta-section";

const services = [
  {
    id: "glas",
    number: "03",
    label: "GLASREINIGUNG & GLASAUSTAUSCH",
    title: "Klare Sicht und",
    highlight: "sichere Spielbedingungen.",
    description:
      "Wir reinigen die Glaselemente professionell und entfernen Verschmutzungen, um eine optimale Sicht zu gewährleisten. Bei Schäden oder Brüchen übernehmen wir den Austausch der Gläser mit passenden Originalelementen.",
    image: "/images/maintenance/glasreinigung.png",
    alt: "Professionelle Reinigung der Glasflächen einer Padelanlage",
  },
  {
    id: "konstruktion",
    number: "04",
    label: "KONSTRUKTION & SICHERHEIT",
    title: "Stabile und sichere",
    highlight: "Padelplätze.",
    description:
      "Wir überprüfen Stahlkonstruktionen, Befestigungen und weitere Bauteile auf Verschleiß, Beschädigungen oder mögliche Mängel und führen bei Bedarf entsprechende Instandhaltungs- und Reparaturarbeiten durch.",
    image: "/images/maintenance/konstruktion.png",
    alt: "Stahlkonstruktion und Befestigung eines Padelplatzes",
  },
  {
    id: "netz",
    number: "05",
    label: "NETZ & AUSSTATTUNG",
    title: "Auch die Details",
    highlight: "sind wichtig.",
    description:
      "Wir kontrollieren den Zustand der Netze und weiterer Ausstattungselemente wie Pfosten, Türen, Schlösser und Banden und führen bei Bedarf Reparatur- oder Austauscharbeiten durch.",
    image: "/images/maintenance/netz.png",
    alt: "Netz und Ausstattung eines Padelplatzes",
  },
  {
    id: "beleuchtung",
    number: "06",
    label: "BELEUCHTUNG",
    title: "Zuverlässige Beleuchtung",
    highlight: "für jedes Spiel.",
    description:
      "Wir überprüfen die Beleuchtungssysteme, reparieren defekte Komponenten und übernehmen bei Bedarf den Austausch von Scheinwerfern und anderen Elementen, damit Ihre Padelanlage optimal ausgeleuchtet ist.",
    image: "/images/maintenance/beleuchtung.png",
    alt: "LED-Scheinwerfer zur Beleuchtung einer Padelanlage",
  },
];

const buttonClass =
  "inline-flex min-h-12 items-center justify-center gap-4 rounded-sm " +
  "bg-[#F50087] px-6 py-3 text-xs font-bold tracking-wide text-white " +
  "transition-colors hover:bg-[#d60075] " +
  "focus-visible:outline-2 focus-visible:outline-offset-4 " +
  "focus-visible:outline-[#F50087]";

export default function WartungPage() {
  return (
    <main className="bg-white text-[#101629]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#0b1424]">
        <Image
          src="/images/wartung.png"
          alt="Professionelle Wartung einer Padelanlage"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/95 via-[#07111f]/75 to-[#07111f]/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20">
          <div className="max-w-xl">
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.16em] text-white/85">
              <span className="h-px w-8 bg-[#F50087]" />
              WARTUNG & SERVICE
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Professionelle Wartung
              <br />
              für{" "}
              <span className="text-[#F50087]">
                langlebige Padelanlagen.
              </span>
            </h1>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/85 sm:text-base">
              Von der regelmäßigen Pflege über den vollständigen
              Kunstrasenaustausch bis hin zu Glasarbeiten,
              Beleuchtung und Reparaturen – COURTS&PADEL bietet
              umfassende Wartungs- und Instandhaltungsleistungen
              für bestehende Padelanlagen.
            </p>

            <Link
              href="/contact?type=maintenance"
              className={`${buttonClass} mt-7`}
            >
              WARTUNG ANFRAGEN
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:py-16">
        {/* KUNSTRASENPFLEGE */}
        <section className="grid items-center gap-7 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
            <Image
              src="/images/wartung.png"
              alt="Reinigung und Bürsten des Kunstrasens"
              fill
              sizes="(min-width: 1280px) 570px, (min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="lg:py-4">
            <ServiceLabel number="01">
              KUNSTRASENPFLEGE
            </ServiceLabel>

            <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight">
              Damit Ihre Spielfläche
              <span className="block text-[#F50087]">
                in bestem Zustand bleibt.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Der Kunstrasen ist täglich hohen Belastungen ausgesetzt.
              Wir reinigen die Spielfläche, bürsten die Kunstrasenfasern
              auf, kontrollieren und verteilen das Füllmaterial
              gleichmäßig. So erhalten wir die Spieleigenschaften und
              verlängern die Lebensdauer des Belags.
            </p>
          </div>
        </section>

        {/* KUNSTRASENAUSTAUSCH */}
        <section className="mt-12 grid items-center gap-8 rounded-lg bg-[#f5f6f8] p-6 sm:p-8 lg:mt-16 lg:grid-cols-2 lg:gap-12 lg:p-10">
          <div>
            <ServiceLabel number="02">
              KUNSTRASENAUSTAUSCH
            </ServiceLabel>

            <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight">
              Neuer Kunstrasen
              <span className="block text-[#F50087]">
                für Ihre bestehende Padelanlage.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Ist der Kunstrasen stark abgenutzt oder beschädigt,
              übernehmen wir die fachgerechte Entfernung des alten
              Belags und die professionelle Verlegung eines neuen
              Kunstrasens. So kann die Spielfläche erneuert werden,
              ohne die gesamte Padelanlage ersetzen zu müssen.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <ComparisonImage
              src="/images/maintenance/kunstrasen-vorher.png"
              alt="Abgenutzter Kunstrasen vor dem Austausch"
              label="Vorher"
            />

            <ComparisonImage
              src="/images/maintenance/kunstrasen-nachher.png"
              alt="Erneuerte Spielfläche nach dem Kunstrasenaustausch"
              label="Nachher"
              pink
            />
          </div>
        </section>

        {/* GLAS / KONSTRUKTION / NETZ / BELEUCHTUNG */}
        <section
          aria-label="Weitere Wartungsleistungen"
          className="mt-12 grid gap-x-10 gap-y-10 lg:mt-16 lg:grid-cols-2"
        >
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-28 border-t border-slate-200 pt-6"
            >
              <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 1280px) 570px, (min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <ServiceLabel number={service.number}>
                {service.label}
              </ServiceLabel>

              <h2 className="mt-4 text-2xl font-extrabold leading-[1.15] tracking-tight sm:text-3xl">
                {service.title}
                <span className="block text-[#F50087]">
                  {service.highlight}
                </span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                {service.description}
              </p>
            </article>
          ))}
        </section>

        {/* REPARATUR */}
        <section className="mt-12 grid items-center gap-8 rounded-lg bg-[#f5f6f8] p-6 sm:p-8 lg:mt-16 lg:grid-cols-2 lg:gap-12 lg:p-10">
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
            <Image
              src="/images/maintenance/reparatur.png"
              alt="Reparatur einer Befestigung an einer Padelanlage"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <ServiceLabel number="07">
              REPARATUR & INSTANDHALTUNG
            </ServiceLabel>

            <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight">
              Professionelle Lösungen
              <span className="block text-[#F50087]">
                bei Schäden und Verschleiß.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Beschädigte oder verschlissene Komponenten können die
              Nutzung einer Padelanlage beeinträchtigen. Wir bieten
              Reparatur- und Instandhaltungsarbeiten an verschiedenen
              Bestandteilen der Padelanlage und finden für jedes
              Problem eine passende Lösung.
            </p>
          </div>
        </section>
      </div>

      {/* CONTACT CTA */}
      <section className="relative isolate overflow-hidden bg-[#0b1424]">
        <Image
          src="/images/contact-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#07111f]/50" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:py-16">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.16em] text-white/75">
              WARTUNG ANFRAGEN
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              Ihre Padelanlage
              <span className="block text-[#F50087]">
                benötigt Wartung?
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
              Ob regelmäßige Pflege, Kunstrasenaustausch, Glasarbeiten
              oder Reparaturen – kontaktieren Sie COURTS&PADEL für
              eine individuelle Beratung und ein passendes Angebot.
            </p>
          </div>

          <Link
            href="/contact?type=maintenance"
            className={`${buttonClass} shrink-0 self-start lg:self-center`}
          >
            WARTUNG ANFRAGEN
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

function ServiceLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold text-[#F50087]">
        {number}
      </span>

      <span className="h-px w-5 bg-[#F50087]/40" />

      <p className="text-[10px] font-bold tracking-[0.1em] text-slate-600 sm:text-[11px]">
        {children}
      </p>
    </div>
  );
}

function ComparisonImage({
  src,
  alt,
  label,
  pink = false,
}: {
  src: string;
  alt: string;
  label: string;
  pink?: boolean;
}) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden rounded-md">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 25vw, 50vw"
        className="object-cover"
      />

      <span
        className={`absolute bottom-3 left-3 rounded-sm px-3 py-1.5 text-xs font-semibold text-white ${
          pink ? "bg-[#F50087]" : "bg-[#101629]/85"
        }`}
      >
        {label}
      </span>
    </div>
  );
}