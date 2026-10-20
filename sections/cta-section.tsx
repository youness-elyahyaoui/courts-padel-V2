import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Smartphone,
  Mail,
  MapPin,
} from "lucide-react";

// Renseigner les vraies coordonnées du client.
const contact = {
  phone: "+491776907473",
  email: "info@court-padel.de",
  location: "Monheim am Rhein",
};



type Props = {
  locale: string;
};

export default function CTASection({ locale }: Props) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="
        relative isolate overflow-hidden
        scroll-mt-24 bg-[#071426]
        py-12 text-white md:py-14
      "
    >
      {/* BACKGROUND */}
      <Image
        src="/images/hero-sunset.jpeg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />

      {/* DARK OVERLAY */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-gradient-to-r
          from-[#071426]/95
          via-[#071426]/80
          to-[#071426]/35
        "
      />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* HEADING */}
        <div className="max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-[10px] font-bold tracking-[0.16em]">
            <span className="h-[2px] w-8 bg-[#F50087]" />
            KONTAKT
          </p>

          <h2
            id="contact-title"
            className="
              text-3xl font-extrabold leading-tight
              tracking-[-0.035em] sm:text-4xl lg:text-[42px]
            "
          >
            Sie planen ein{" "}
            <span className="text-[#F50087]">
              Padelprojekt?
            </span>
          </h2>

          <p className="mt-4 max-w-[550px] text-sm leading-6 text-slate-200">
            Wir beraten Sie gerne und erstellen ein individuelles
            Angebot. Ob Neuinstallation, Erweiterung oder Wartung –
            wir finden gemeinsam die passende Lösung für Ihr Vorhaben.
          </p>
        </div>

        {/* BUTTONS + CONTACT DETAILS */}
        <div className="mt-7 flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/contact?type=project`}
              className="
                inline-flex min-h-12 items-center
                justify-center gap-4 rounded-sm
                bg-[#F50087] px-6 text-[11px]
                font-bold tracking-wide
                transition-colors hover:bg-[#d60075]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-white
              "
            >
              PROJEKT ANFRAGEN
              <ArrowRight size={16} aria-hidden="true" />
            </Link>

            <Link
              href={`/${locale}/contact?type=maintenance`}
              className="
                inline-flex min-h-12 items-center
                justify-center gap-4 rounded-sm
                border border-white/50
                bg-[#071426]/30 px-6 text-[11px]
                font-bold tracking-wide
                transition-colors hover:bg-white/10
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-white
              "
            >
              WARTUNG ANFRAGEN
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <address className="grid gap-5 not-italic sm:grid-cols-3 sm:gap-8">
            {/* PHONE */}
            <div className="flex items-start gap-3">
              <Smartphone
                size={27}
                strokeWidth={1.5}
                aria-hidden="true"
                className="shrink-0 text-[#F50087]"
              />

              <div className="min-w-0 text-xs">
                <p className="font-bold">Telefon</p>

                {contact.phone ? (
                  <a
                    href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
                    className="mt-1 block text-slate-200 hover:underline"
                  >
                    {contact.phone}
                  </a>
                ) : (
                  <p className="mt-1 text-slate-300">
                    Ihre Nummer hier
                  </p>
                )}
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-3">
              <Mail
                size={27}
                strokeWidth={1.5}
                aria-hidden="true"
                className="shrink-0 text-[#F50087]"
              />

              <div className="min-w-0 text-xs">
                <p className="font-bold">E-Mail</p>

                {contact.email ? (
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1 block break-all text-slate-200 hover:underline"
                  >
                    {contact.email}
                  </a>
                ) : (
                  <p className="mt-1 text-slate-300">
                    Ihre E-Mail hier
                  </p>
                )}
              </div>
            </div>

            {/* LOCATION */}
            <div className="flex items-start gap-3">
              <MapPin
                size={27}
                strokeWidth={1.5}
                aria-hidden="true"
                className="shrink-0 text-[#F50087]"
              />

              <div className="text-xs">
                <p className="font-bold">Standort</p>
                <p className="mt-1 text-slate-200">
                  {contact.location || "Ihr Standort hier"}
                </p>
              </div>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
}