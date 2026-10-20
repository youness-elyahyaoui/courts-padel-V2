import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | COURTS&PADEL",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten bei COURTS&PADEL.",
  // Supprimer après validation et remplacement des champs à compléter.
  robots: {
    index: false,
    follow: true,
  },
};

/*
 * ENTWURF:
 * Vor Veröffentlichung alle Platzhalter ersetzen und die Angaben
 * mit der tatsächlichen technischen Konfiguration abgleichen.
 */
const company = {
  legalName: "[Vollständiger Firmenname / Name des Inhabers]",
  street: "[Straße und Hausnummer]",
  city: "[Postleitzahl und Ort]",
  country: "Deutschland",
  email: "[Datenschutz-Kontaktadresse]",
  phone: "[Telefonnummer]",
};

const sections = [
  { id: "verantwortlicher", title: "Verantwortlicher" },
  { id: "hosting", title: "Website und Hosting" },
  { id: "kontakt", title: "Kontakt und Anfragen" },
  { id: "email", title: "E-Mail-Versand und Postfach" },
  { id: "speicherung", title: "Speicherdauer" },
  { id: "karten", title: "Google Maps" },
  { id: "cookies", title: "Cookies und weitere Dienste" },
  { id: "rechte", title: "Ihre Rechte" },
  { id: "widerspruch", title: "Widerspruch und Widerruf" },
  { id: "aktualisierung", title: "Aktualisierung" },
];

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="bg-white text-[#071426]">
      {/* HEADER */}
      <section className="relative overflow-hidden bg-[#071426] text-white">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#F50087]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-xs text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Zur Startseite
          </Link>

          <p className="mt-9 flex items-center gap-3 text-[10px] font-bold tracking-[0.18em]">
            <span className="h-[2px] w-8 bg-[#F50087]" />
            DATENSCHUTZ
          </p>

          <h1 className="mt-5 break-words text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Datenschutzerklärung<span className="text-[#F50087]">.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75">
            Hier informieren wir Sie über die Verarbeitung
            personenbezogener Daten bei der Nutzung unserer Website
            und bei der Kontaktaufnahme mit COURTS&PADEL.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:py-16">
        {/* CONTENTS */}
        <aside>
          <nav
            aria-label="Inhaltsverzeichnis"
            className="rounded-sm border border-slate-200 bg-[#F8F9FB] p-5 lg:sticky lg:top-28"
          >
            <p className="text-xs font-extrabold uppercase tracking-wider">
              Inhalt
            </p>

            <ol className="mt-5 space-y-3">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex gap-3 text-xs leading-5 text-slate-600 transition-colors hover:text-[#F50087]"
                  >
                    <span className="font-bold text-[#F50087]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        {/* LEGAL TEXT */}
        <article className="min-w-0 max-w-3xl">
          <PrivacySection
            id="verantwortlicher"
            number="01"
            title="Verantwortlicher"
          >
            <p>
              Verantwortlich für die Verarbeitung personenbezogener
              Daten auf dieser Website ist:
            </p>

            <address className="rounded-sm border-l-2 border-[#F50087] bg-[#F8F9FB] p-5 not-italic">
              <strong className="text-[#071426]">
                {company.legalName}
              </strong>
              <br />
              {company.street}
              <br />
              {company.city}
              <br />
              {company.country}
              <br />
              E-Mail: {company.email}
              <br />
              Telefon: {company.phone}
            </address>

            <p>
              Bei Fragen zum Datenschutz oder zur Ausübung Ihrer
              Rechte können Sie sich an die oben genannte
              Kontaktadresse wenden.
            </p>
          </PrivacySection>

          <PrivacySection
            id="hosting"
            number="02"
            title="Website und Hosting"
          >
            <p>
              Diese Website wird über Vercel bereitgestellt. Beim
              Aufruf können technisch erforderliche Verbindungs-
              und Zugriffsdaten verarbeitet werden, insbesondere
              IP-Adresse, Zeitpunkt des Zugriffs, angeforderte
              Seite, Browserinformationen und Betriebssystem.
            </p>

            <p>
              Die Verarbeitung dient der Bereitstellung, Stabilität
              und Sicherheit der Website. Rechtsgrundlage ist
              Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse
              besteht im sicheren und zuverlässigen Betrieb
              unseres Internetangebots.
            </p>

            <p>
              [Vor Veröffentlichung ergänzen: genaue
              Anbieteridentität, tatsächlich aktivierte
              Protokollierungsfunktionen, Speicherdauer sowie
              die einschlägigen vertraglichen Regelungen zur
              Auftragsverarbeitung.]
            </p>

            <p>
              Soweit Daten außerhalb des Europäischen
              Wirtschaftsraums verarbeitet werden, sind die für
              die konkrete Konfiguration geltenden
              Übermittlungsgrundlagen anzugeben.
              [Anwendbare Garantien und Bezugsmöglichkeiten
              ergänzen.]
            </p>

            <ExternalLink href="https://vercel.com/legal/privacy-policy">
              Datenschutzhinweise von Vercel
            </ExternalLink>
          </PrivacySection>

          <PrivacySection
            id="kontakt"
            number="03"
            title="Kontakt und Anfragen"
          >
            <p>
              Wenn Sie uns über das Kontaktformular, per E-Mail
              oder telefonisch kontaktieren, verarbeiten wir
              Ihre Angaben zur Bearbeitung Ihrer Anfrage und
              zur Kommunikation mit Ihnen.
            </p>

            <p>
              Je nach Eingabe umfasst dies insbesondere:
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>Name und gegebenenfalls Unternehmen;</li>
              <li>E-Mail-Adresse und optionale Telefonnummer;</li>
              <li>Art der Anfrage und Projektstandort;</li>
              <li>Inhalt Ihrer Nachricht;</li>
              <li>
                freiwillig übermittelte Dateien, etwa Fotos,
                Pläne oder Skizzen;
              </li>
              <li>
                Zeitpunkt der Anfrage und Bestätigung der
                Kenntnisnahme der Datenschutzhinweise.
              </li>
            </ul>

            <p>
              Soweit Ihre Anfrage auf einen Vertrag mit Ihnen
              oder auf vorvertragliche Maßnahmen gerichtet ist,
              erfolgt die Verarbeitung auf Grundlage von
              Art. 6 Abs. 1 lit. b DSGVO. Bei sonstigen Anfragen
              stützt sie sich auf Art. 6 Abs. 1 lit. f DSGVO.
              Unser berechtigtes Interesse liegt in der
              Bearbeitung eingehender Anfragen.
            </p>

            <p>
              Die Bereitstellung der Angaben ist grundsätzlich
              freiwillig. Als erforderlich gekennzeichnete
              Angaben benötigen wir, um Ihre Anfrage über das
              Formular bearbeiten zu können. Ohne diese
              Angaben ist eine Übermittlung über das Formular
              nicht möglich.
            </p>

            <p>
              Bitte übermitteln Sie nur Dateien und
              personenbezogene Angaben, die für Ihre Anfrage
              erforderlich sind.
            </p>
          </PrivacySection>

          <PrivacySection
            id="email"
            number="04"
            title="E-Mail-Versand und Postfach"
          >
            <p>
              Für die Übermittlung von Formularanfragen per
              E-Mail ist der Einsatz von Resend vorgesehen.
              Dabei werden die Formularinhalte einschließlich
              gegebenenfalls hochgeladener Anhänge und die
              für den Versand erforderlichen Metadaten
              verarbeitet.
            </p>

            <p>
              [Nach Einrichtung bestätigen und ergänzen:
              Anbieteridentität, Verarbeitungsregion,
              Auftragsverarbeitungsvertrag, Speicherdauer
              sowie gegebenenfalls Garantien für
              Drittlandübermittlungen.]
            </p>

            <ExternalLink href="https://resend.com/legal/privacy-policy">
              Datenschutzhinweise von Resend
            </ExternalLink>

            <p>
              Eingehende Anfragen werden außerdem in unserem
              geschäftlichen E-Mail-Postfach verarbeitet.
              [Tatsächlichen E-Mail-Anbieter und die für das
              Konto geltenden Datenschutzinformationen
              ergänzen, beispielsweise Zoho.]
            </p>
          </PrivacySection>

          <PrivacySection
            id="speicherung"
            number="05"
            title="Speicherdauer"
          >
            <p>
              Personenbezogene Daten werden nur so lange
              aufbewahrt, wie dies für die jeweiligen Zwecke
              erforderlich ist oder gesetzliche
              Aufbewahrungspflichten bestehen.
            </p>

            <p>
              Anfragen werden nach abschließender Bearbeitung
              gelöscht, sobald keine rechtlichen oder
              sonstigen berechtigten Gründe für eine weitere
              Speicherung bestehen.
            </p>

            <p>
              [Konkrete Löschfristen oder nachvollziehbare
              Kriterien für Anfragen, Anhänge, E-Mail-Postfach,
              Versandprotokolle, Hosting-Logs und gegebenenfalls
              Sicherungskopien ergänzen.]
            </p>
          </PrivacySection>

          <PrivacySection
            id="karten"
            number="06"
            title="Google Maps"
          >
            <p>
              Auf unserer Kontaktseite wird eine Karte von
              Google Maps eingebunden. Beim Laden der Karte
              wird eine Verbindung zu Google hergestellt.
              Dabei können insbesondere Ihre IP-Adresse und
              weitere technische Verbindungsdaten an Google
              übermittelt werden.
            </p>

            <p>
              [Vor Veröffentlichung festlegen und ergänzen:
              zuständiger Anbieter, Rechtsgrundlage,
              Einwilligungsmechanismus, gegebenenfalls
              Zugriff auf Endgeräteinformationen sowie
              Drittlandübermittlungen und deren Garantien.]
            </p>

            <p>
              Wird die Karte auf Grundlage Ihrer Einwilligung
              geladen, können Sie diese für die Zukunft über
              [Ort der Datenschutzeinstellungen ergänzen]
              widerrufen.
            </p>

            <ExternalLink href="https://policies.google.com/privacy?hl=de">
              Datenschutzhinweise von Google
            </ExternalLink>
          </PrivacySection>

          <PrivacySection
            id="cookies"
            number="07"
            title="Cookies und weitere Dienste"
          >
            <p>
              [Nach technischer Prüfung ergänzen: tatsächlich
              verwendete Cookies, lokale Speichertechniken,
              Analysefunktionen und sonstige externe Dienste,
              jeweils mit Zweck, Anbieter, Rechtsgrundlage
              und Speicherdauer.]
            </p>

            <p>
              Soweit eine Einwilligung erforderlich ist,
              werden die betreffenden Dienste erst nach
              Ihrer Einwilligung aktiviert. Die hierzu
              erforderliche technische Umsetzung ist vor
              Veröffentlichung zu prüfen.
            </p>
          </PrivacySection>

          <PrivacySection
            id="rechte"
            number="08"
            title="Ihre Rechte"
          >
            <p>
              Unter den gesetzlichen Voraussetzungen stehen
              Ihnen insbesondere folgende Rechte zu:
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>Auskunft nach Art. 15 DSGVO;</li>
              <li>Berichtigung nach Art. 16 DSGVO;</li>
              <li>Löschung nach Art. 17 DSGVO;</li>
              <li>
                Einschränkung der Verarbeitung nach
                Art. 18 DSGVO;
              </li>
              <li>
                Datenübertragbarkeit nach Art. 20 DSGVO;
              </li>
              <li>Widerspruch nach Art. 21 DSGVO.</li>
            </ul>

            <p>
              Sie haben außerdem das Recht, sich bei einer
              Datenschutzaufsichtsbehörde zu beschweren,
              insbesondere in dem Mitgliedstaat Ihres
              Aufenthaltsorts, Ihres Arbeitsplatzes oder
              des Orts des mutmaßlichen Verstoßes.
            </p>

            <p>
              [Für den Verantwortlichen zuständige
              Aufsichtsbehörde mit Kontaktdaten ergänzen.]
            </p>
          </PrivacySection>

          <PrivacySection
            id="widerspruch"
            number="09"
            title="Widerspruch und Widerruf"
          >
            <p>
              Erfolgt eine Verarbeitung auf Grundlage von
              Art. 6 Abs. 1 lit. f DSGVO, haben Sie das Recht,
              aus Gründen, die sich aus Ihrer besonderen
              Situation ergeben, jederzeit Widerspruch
              gegen die Verarbeitung einzulegen.
            </p>

            <p>
              Soweit eine Verarbeitung auf Ihrer Einwilligung
              beruht, können Sie diese jederzeit mit Wirkung
              für die Zukunft widerrufen. Die Rechtmäßigkeit
              der Verarbeitung bis zum Widerruf bleibt
              unberührt.
            </p>

            <p>
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte
              an die unter „Verantwortlicher“ angegebene
              Kontaktadresse.
            </p>
          </PrivacySection>

          <PrivacySection
            id="aktualisierung"
            number="10"
            title="Aktualisierung"
          >
            <p>
              Diese Datenschutzerklärung wird angepasst,
              wenn sich unsere Datenverarbeitung oder die
              rechtlichen Anforderungen ändern.
            </p>

            <p>Stand: [Datum der abschließenden Prüfung]</p>
          </PrivacySection>

          <div className="mt-10 border-t border-slate-200 pt-6">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-3 text-sm font-bold text-[#F50087] hover:underline"
            >
              Zum Kontakt
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}

function PrivacySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-28 border-b border-slate-200 py-8 first:pt-0"
    >
      <div className="flex items-start gap-3">
        <span className="mt-1 text-xs font-bold text-[#F50087]">
          {number}
        </span>

        <h2
          id={`${id}-title`}
          className="text-xl font-extrabold tracking-tight sm:text-2xl"
        >
          {title}
        </h2>
      </div>

      <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
        {children}
      </div>
    </section>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 font-medium text-[#F50087] underline underline-offset-4"
    >
      {children}
      <ArrowUpRight
        size={14}
        aria-hidden="true"
        className="shrink-0"
      />
    </a>
  );
}