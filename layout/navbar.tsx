
"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Link, useRouter } from "../i18n/navigation";
import LanguageSwitcher from "./language-switcher";
import {
  ArrowRight,
  ChevronDown,
  Globe2,
  Menu,
  X,
} from "lucide-react";

type Props = {
  locale: string;
};

export default function Navbar({ locale }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const pathWithoutLocale =
    pathname.replace(/^\/(de|en|fr)(?=\/|$)/, "") || "/";

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Leistungen", href: "/leistungen" },
    { label: "Projekte", href: "/projects" },
    { label: "Über uns", href: "/about" },
    { label: "Kontakt", href: "/contact" },
  ] as const;

  const isActive = (href: string) => {
    if (href === "/") return pathWithoutLocale === "/";
    if (href.startsWith("/#")) return false;
    return pathWithoutLocale.startsWith(href);
  };

  const changeLanguage = (lang: string) => {
    setLanguageOpen(false);
    setMenuOpen(false);

    const destination =
      `/${lang}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;

    window.location.assign(destination);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#ECEEF2] bg-white shadow-[0_2px_14px_rgba(0,0,0,0.035)]">
      <div className="mx-auto flex h-[68px] w-full max-w-[1440px] items-center justify-between gap-5 px-5 md:px-8 xl:px-12">

        {/* LOGO */}
        <Link
          href="/"
          className="relative z-10 flex shrink-0 items-center"
          aria-label="COURTS&PADEL - Home"
        >
         <Image
  src="/images/logo-courts-300.png"
  alt="COURTS&PADEL"
  width={150}
  height={60}
  priority
  className="h-auto w-[110px] object-contain sm:w-[130px] lg:w-[145px]"
/>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden h-full items-center gap-6 lg:flex xl:gap-9">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`group relative flex h-full items-center whitespace-nowrap text-[13px] font-medium transition-colors duration-200 ${
                  active
                    ? "text-[#071426]"
                    : "text-[#182238] hover:text-[#F50087]"
                }`}
              >
                {link.label}

                <span
                  className={`absolute bottom-[16px] left-0 h-[2px] bg-[#F50087] transition-all duration-300 ${
                    active
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 xl:gap-7">

         {/* LANGUAGE SELECTOR */}
<div className="relative z-[60] hidden md:block">
  <LanguageSwitcher />
</div>

          {/* CTA BUTTON */}
          <Link
            href="/contact?type=project"
            className="hidden h-[42px] items-center justify-center gap-3 whitespace-nowrap rounded-[4px] bg-[#F50087] px-5 text-[11px] font-semibold tracking-[0.15px] text-white shadow-[0_3px_8px_rgba(245,0,135,0.15)] transition-all duration-200 hover:bg-[#D90078] hover:shadow-[0_5px_14px_rgba(245,0,135,0.25)] md:inline-flex"
          >
            ANGEBOT ANFORDERN
            <ArrowRight size={16} strokeWidth={1.8} />
          </Link>

          {/* MOBILE HAMBURGER */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center text-[#071426] lg:hidden"
          >
            {menuOpen ? (
              <X size={26} strokeWidth={1.7} />
            ) : (
              <Menu size={27} strokeWidth={1.7} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="absolute left-0 top-full w-full border-t border-gray-100 bg-white px-6 py-6 shadow-xl lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-md px-4 py-3.5 text-[14px] font-semibold transition hover:bg-pink-50 ${
                  isActive(link.href)
                    ? "text-[#F50087]"
                    : "text-[#071426]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* MOBILE LANGUAGES */}
          <div className="mt-5 flex items-center gap-5 border-t border-gray-100 px-4 pt-5">
            <Globe2 size={18} className="text-[#071426]" />

            {["de", "en", "fr"].map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => changeLanguage(lang)}
                className={`text-[13px] font-bold ${
                  locale === lang
                    ? "text-[#F50087]"
                    : "text-gray-500"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* MOBILE CTA */}
          <Link
            href="/contact?type=project"
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex h-12 items-center justify-center gap-3 rounded-[4px] bg-[#F50087] text-[12px] font-bold text-white"
          >
            ANGEBOT ANFORDERN
            <ArrowRight size={17} />
          </Link>
        </nav>
      )}
    </header>
  );
}
