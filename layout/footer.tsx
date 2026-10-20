import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

type Props = {
  locale: string;
};

// Remplacer par les vraies coordonnées du client.
const contact = {
  email: "",
  phone: "",
  address: "",
};

const translations = {
  de: {
    description:
      "Professionelle Lösungen für Ihre Padelanlage. Von der Planung und Montage bis zur langfristigen Wartung.",
    navigation: "Entdecken",
    home: "Startseite",
    services: "Leistungen",
    projects: "Projekte",
    about: "Über uns",
    contact: "Kontakt",
    projectTitle: "Ihr nächstes Padelprojekt",
    projectDescription:
      "Lassen Sie uns gemeinsam Ihre Padelanlage realisieren.",
    projectButton: "Projekt anfragen",
    maintenanceButton: "Wartung anfragen",
    rights: "Alle Rechte vorbehalten.",
    backToTop: "Nach oben",
  },
  en: {
    description:
      "Professional solutions for your padel facility. From planning and installation to long-term maintenance.",
    navigation: "Explore",
    home: "Home",
    services: "Services",
    projects: "Projects",
    about: "About us",
    contact: "Contact",
    projectTitle: "Your next padel project",
    projectDescription:
      "Let’s bring your padel facility to life together.",
    projectButton: "Request a project quote",
    maintenanceButton: "Request maintenance",
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },
  fr: {
    description:
      "Des solutions professionnelles pour votre installation de padel. De la conception et du montage à la maintenance.",
    navigation: "Découvrir",
    home: "Accueil",
    services: "Services",
    projects: "Projets",
    about: "À propos",
    contact: "Contact",
    projectTitle: "Votre prochain projet de padel",
    projectDescription:
      "Réalisons ensemble votre installation de padel.",
    projectButton: "Demander un devis",
    maintenanceButton: "Demander une maintenance",
    rights: "Tous droits réservés.",
    backToTop: "Retour en haut",
  },
};

export default function Footer({ locale }: Props) {
  const t =
    translations[locale as keyof typeof translations] ??
    translations.de;

  const navigation = [
    { label: t.home, href: `/${locale}` },
    { label: t.services, href: `/${locale}#services` },
    { label: t.projects, href: `/${locale}/projects` },
    { label: t.about, href: `/${locale}/about` },
    { label: t.contact, href: `/${locale}/contact` },
  ];

  const linkClass =
    "transition-colors hover:text-white " +
    "focus-visible:outline-2 focus-visible:outline-offset-4 " +
    "focus-visible:outline-[#F50087]";

  return (
    <footer className="border-t border-white/10 bg-[#050E1B] text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* MAIN FOOTER */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr_1.2fr] lg:gap-12 lg:py-16">
          {/* BRAND */}
          <div>
            <Link
              href={`/${locale}`}
              aria-label={`COURTS&PADEL — ${t.home}`}
              className="inline-flex rounded-sm bg-white px-4 py-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F50087]"
            >
              <Image
                src="/images/logo-courts-300.png"
                alt="COURTS&PADEL"
                width={180}
                height={70}
                className="h-auto w-[155px] object-contain"
              />
            </Link>

            <p className="mt-5 max-w-[300px] text-sm leading-7 text-slate-400">
              {t.description}
            </p>

            <span
              aria-hidden="true"
              className="mt-6 block h-[2px] w-10 bg-[#F50087]"
            />
          </div>

          {/* NAVIGATION */}
          <nav aria-label={t.navigation}>
            <h2 className="text-xs font-bold uppercase tracking-[0.14em]">
              {t.navigation}
            </h2>

            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm text-slate-400 ${linkClass}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CONTACT */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.14em]">
              {t.contact}
            </h2>

            <address className="mt-5 space-y-4 text-sm not-italic text-slate-400">
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className={`flex items-start gap-3 ${linkClass}`}
                >
                  <Mail
                    size={18}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-[#F50087]"
                  />
                  <span className="break-all">{contact.email}</span>
                </a>
              )}

              {contact.phone && (
                <a
                  href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
                  className={`flex items-start gap-3 ${linkClass}`}
                >
                  <Phone
                    size={18}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-[#F50087]"
                  />
                  <span>{contact.phone}</span>
                </a>
              )}

              {contact.address && (
                <p className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-[#F50087]"
                  />
                  <span className="leading-6">{contact.address}</span>
                </p>
              )}
            </address>

            <Link
              href={`/${locale}/contact`}
              className={`mt-5 inline-flex items-center gap-2 text-sm text-slate-300 ${linkClass}`}
            >
              {t.contact}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>

          {/* PROJECT CTA */}
          <div>
            <h2 className="text-lg font-bold leading-snug">
              {t.projectTitle}
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              {t.projectDescription}
            </p>

            <Link
              href={`/${locale}/contact?type=project`}
              className="
                mt-5 inline-flex min-h-11 items-center
                justify-center gap-3 rounded-sm
                bg-[#F50087] px-5 text-xs font-bold
                transition-colors hover:bg-[#d60075]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-white
              "
            >
              {t.projectButton}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>

            <Link
              href={`/${locale}/contact?type=maintenance`}
              className={`mt-4 flex w-fit items-center gap-2 text-xs text-slate-400 ${linkClass}`}
            >
              {t.maintenanceButton}
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center">
          <p className="text-xs leading-5 text-slate-500">
            © 2026 COURTS&PADEL. {t.rights}
          </p>

          <a
            href="#"
            className={`inline-flex items-center gap-2 text-xs text-slate-400 ${linkClass}`}
          >
            {t.backToTop}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}