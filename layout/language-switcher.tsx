"use client";

import { useParams, usePathname } from "next/navigation";
import { ChevronDown, Globe2 } from "lucide-react";

const languages = [
  { code: "de", label: "Deutsch" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
];

export default function LanguageSwitcher() {
  const { locale } = useParams<{ locale: string }>();
  const pathname = usePathname();

  const pathWithoutLocale =
    pathname.replace(/^\/(de|en|fr)(?=\/|$)/, "") || "/";

  return (
    <details className="relative">
      <summary
        className="
          flex min-h-10 cursor-pointer list-none
          items-center gap-2 rounded-sm
          border border-slate-200 bg-white px-3
          text-xs font-semibold text-[#071426]
          [&::-webkit-details-marker]:hidden
        "
      >
        <Globe2 size={17} aria-hidden="true" />
        <span>{(locale || "de").toUpperCase()}</span>
        <ChevronDown size={14} aria-hidden="true" />
      </summary>

      <div
        className="
          absolute right-0 top-full z-[100]
          mt-2 min-w-40 rounded-md
          border border-slate-200 bg-white p-2
          shadow-xl
        "
      >
        {languages.map((language) => (
          <a
            key={language.code}
            href={`/${language.code}${
              pathWithoutLocale === "/" ? "" : pathWithoutLocale
            }`}
            className={`
              block rounded-sm px-3 py-2.5
              text-sm hover:bg-pink-50
              ${
                locale === language.code
                  ? "font-bold text-[#F50087]"
                  : "text-[#071426]"
              }
            `}
          >
            {language.label}
          </a>
        ))}
      </div>
    </details>
  );
}