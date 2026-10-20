import Image from "next/image";
import { Link } from "@/i18n/navigation";

const services = [
  {
    id: "verkauf",
    label: "PADELPLATZ-VERKAUF",
    title: "Der passende Court",
    highlight: "für Ihr Projekt.",
    description:
      "COURTS&PADEL bietet den Verkauf und die Lieferung verschiedener Padelplatzmodelle. Gemeinsam mit unseren Kunden finden wir die passende Lösung, die auf die Anforderungen und Gegebenheiten des jeweiligen Projekts abgestimmt ist.",
    image: "/images/verkauf.png",
    alt: "Padelanlage mit blauen Spielfeldern",
    icon: "/icons/icon 1.svg",
  },
  {
    id: "montage",
    label: "MONTAGE & INSTALLATION",
    title: "Präzision bei jedem",
    highlight: "Montageschritt.",
    description:
      "Die fachgerechte Montage ist entscheidend für die Qualität und Funktionalität einer Padelanlage. COURTS&PADEL übernimmt die professionelle Installation der Padelplätze – von der Stahlkonstruktion und den Glaselementen über den Kunstrasen bis hin zur Beleuchtung und Platzausstattung.",
    image: "/images/montage.png",
    alt: "Montage einer Padelanlage",
    icon: "/icons/icon 2.svg",
  },
  {
    id: "fundamentierung",
    label: "FUNDAMENTIERUNG",
    title: "Eine solide Grundlage",
    highlight: "für Ihre Padelanlage.",
    description:
      "Eine fachgerechte Fundamentierung bildet die Basis für eine langlebige und stabile Padelanlage. COURTS&PADEL bietet Fundament- und Betonarbeiten in Zusammenarbeit mit spezialisierten Partnerunternehmen an. Die Ausführung wird auf die Anforderungen des Projekts und die örtlichen Gegebenheiten abgestimmt.",
    image: "/images/fundamentierung.png",
    alt: "Fundamentarbeiten für einen Padelplatz",
    icon: "/icons/icon 3.svg",
  },
  {
    id: "mobile-systeme",
    label: "MOBILE SYSTEME & PLATTFORMEN",
    title: "Flexible Lösungen für",
    highlight: "besondere Anforderungen.",
    description:
      "Nicht jeder Standort bietet die gleichen baulichen Voraussetzungen. COURTS&PADEL übernimmt die Montage mobiler Padelplatzsysteme und Plattformen sowie die Installation der dazugehörigen Padelplätze. Diese Lösungen ermöglichen die Umsetzung von Padelprojekten an Standorten mit speziellen Anforderungen.",
    image: "/images/mobile-systeme.png",
    alt: "Padelplätze auf einer erhöhten Plattform",
    icon: "/icons/icon 4.svg",
  },
  {
    id: "ueberdachungen",
    label: "ÜBERDACHUNGEN",
    title: "Passende Überdachungslösungen",
    highlight: "für Ihre Padelanlage.",
    description:
      "COURTS&PADEL bietet die Lieferung und professionelle Montage von Überdachungen für Padelanlagen. Gemeinsam mit unseren Kunden finden wir passende Lösungen, die auf die Anforderungen des Projekts und die örtlichen Gegebenheiten abgestimmt sind.",
    image: "/images/ueberdachungen.png",
    alt: "Überdachte Padelanlage",
    icon: "/icons/icon 5.svg",
  },
  {
    id: "wartung",
    label: "WARTUNG & SERVICE",
    title: "Professionelle Pflege und",
    highlight: "Instandhaltung.",
    description:
      "Regelmäßige Wartung trägt dazu bei, die Spielqualität, Sicherheit und Funktionalität Ihrer Padelanlage langfristig zu erhalten. COURTS&PADEL übernimmt die Kontrolle und Reinigung der Anlage, die Kunstrasenpflege sowie bei Bedarf Reparatur- und Austauscharbeiten.",
    image: "/images/wartung.png",
    alt: "Professionelle Pflege eines Padelplatzes",
    icon: "/icons/icon 6.svg",
  },
];

export default function LeistungenPage() {
  return (
    <main className="bg-white text-[#101329]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Padelanlage bei Sonnenuntergang"
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
              UNSERE LEISTUNGEN
            </p>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Professionelle Lösungen
              <br />
              für{" "}
              <span className="text-[#ed008c]">
                Ihre Padelanlage.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-white/90 sm:text-lg">
              Ob neue Padelanlage, fachgerechte Montage oder Wartung
              bestehender Courts – COURTS&PADEL bietet individuelle
              Lösungen, abgestimmt auf die Anforderungen Ihres Projekts.
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
                alt={service.alt}
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
                  {service.label}
                </p>

                <h2 className="text-2xl font-extrabold leading-[1.12] tracking-tight lg:text-3xl">
                  {service.title}
                  <br />
                  <span className="text-[#ed008c]">
                    {service.highlight}
                  </span>
                </h2>

                <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-600 lg:text-base">
                  {service.description}
                </p>

                {service.id === "wartung" && (
                  <Link
                    href="/kontakt"
                    className="mt-5 inline-flex items-center gap-3 border border-[#ed008c] px-4 py-3 text-xs font-bold text-[#ed008c] transition-colors hover:bg-[#ed008c] hover:text-white"
                  >
                    WARTUNG ANFRAGEN
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
            IHR NÄCHSTES PROJEKT
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Sie planen ein{" "}
            <span className="text-[#ed008c]">Padelprojekt?</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
            Ob neue Padelanlage, professionelle Montage oder eine
            individuelle Lösung – sprechen Sie mit uns über Ihr
            Vorhaben. Wir beraten Sie gerne und erstellen ein
            passendes Angebot.
          </p>

          <Link
            href="/kontakt"
            className="mt-6 inline-flex items-center gap-4 bg-[#ed008c] px-6 py-4 text-xs font-bold text-white transition-colors hover:bg-[#c90077]"
          >
            JETZT ANGEBOT ANFORDERN
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}