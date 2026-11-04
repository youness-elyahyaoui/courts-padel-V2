"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Suspense, type ReactNode } from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock3,
  Settings,
  MessagesSquare,
  Handshake,
  Gem,
  type LucideIcon,
} from "lucide-react";
import ContactForm from "@/components/contact-form";

const contact = {
  phone: "+49 177 6907473",
  email: "info@court-padel.de",
  city: "Monheim am Rhein",
};

const benefits = [
  { key: "response", icon: MessagesSquare },
  { key: "advice", icon: Handshake },
  { key: "team", icon: Settings },
  { key: "service", icon: Gem },
] as const;

const buttonClass =
  "inline-flex min-h-12 items-center justify-center gap-4 " +
  "rounded-sm bg-[#F50087] px-6 text-[11px] font-bold " +
  "tracking-wide text-white transition-colors " +
  "hover:bg-[#d60075] focus-visible:outline-2 " +
  "focus-visible:outline-offset-4 focus-visible:outline-[#F50087]";

export default function ContactPage() {
  const t = useTranslations("contactPage");
  const location = `${contact.city}, ${t("map.country")}`;

  return (
    <main className="bg-white text-[#071426]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#071426]">
        <Image
          src="/images/hero-sunset.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#071426]/95 via-[#071426]/75 to-[#071426]/10"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          <div className="max-w-xl">
            <Label light>{t("hero.eyebrow")}</Label>

            <h1 className="mt-5 text-4xl text-white font-extrabold leading-[1.06] tracking-tight sm:text-5xl">
              {t("hero.title")}
              <span className="block text-[#F50087]">
                {t("hero.highlight")}
              </span>
              {t("hero.ending")}
            </h1>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/85">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="mx-auto grid max-w-7xl items-start gap-7 px-5 py-10 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
        <aside className="space-y-5">
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
            <Image
              src="/images/about/court.png"
              alt={t("details.imageAlt")}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="bg-[#F7F8FA] p-5 sm:p-6">
            <Label>{t("details.eyebrow")}</Label>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              {t("details.title")}{" "}
              <span className="text-[#F50087]">
                {t("details.highlight")}
              </span>
            </h2>

            <address className="mt-5 divide-y divide-slate-200 bg-white px-4 not-italic">
              <ContactItem icon={Phone} title={t("details.phone")}>
                <a
                  href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
                  className="hover:text-[#F50087]"
                >
                  {contact.phone}
                </a>
              </ContactItem>

              <ContactItem icon={Mail} title={t("details.email")}>
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all hover:text-[#F50087]"
                >
                  {contact.email}
                </a>
              </ContactItem>

              <ContactItem icon={MapPin} title={t("details.location")}>
                {location}
              </ContactItem>
            </address>
          </div>

          <div className="flex items-start gap-4 bg-[#F7F8FA] p-6">
            <Clock3
              size={24}
              aria-hidden="true"
              className="shrink-0"
            />

            <div>
              <h3 className="text-sm font-bold">
                {t("details.availabilityTitle")}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {t("details.availabilityText")}
              </p>
            </div>
          </div>
        </aside>

        <div
          id="anfrage"
          className="scroll-mt-28 rounded-sm border border-slate-200 p-5 sm:p-7"
        >
          <Label>{t("form.eyebrow")}</Label>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight">
            {t("form.title")}{" "}
            <span className="text-[#F50087]">
              {t("form.highlight")}
            </span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            {t("form.description")}
          </p>

          <Suspense
            fallback={
              <p className="mt-6 text-sm">
                {t("form.loading")}
              </p>
            }
          >
            <ContactForm />
          </Suspense>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-y border-slate-100 bg-[#FAFAFB]">
        <div className="mx-auto grid max-w-7xl gap-7 px-5 py-7 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, key }) => (
            <div key={key} className="flex items-start gap-4">
              <Icon
                size={32}
                strokeWidth={1.6}
                aria-hidden="true"
                className="shrink-0 text-[#F50087]"
              />

              <div>
                <h3 className="text-sm font-bold">
                  {t(`benefits.${key}.title`)}
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-600">
                  {t(`benefits.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="mx-auto grid max-w-7xl items-center gap-7 px-5 py-10 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="overflow-hidden rounded-sm bg-slate-100">
          <iframe
            title={t("map.title")}
            src="https://maps.google.com/maps?q=Monheim%20am%20Rhein%2C%20Deutschland&z=11&output=embed"
            width="100%"
            height="280"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full border-0"
          />
        </div>

        <div>
          <Label>{t("map.eyebrow")}</Label>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight">
            {contact.city},
            <span className="block text-[#F50087]">
              {t("map.country")}
            </span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            {t("map.description")}
          </p>

          <div className="mt-5 flex items-center gap-3 text-sm">
            <MapPin
              size={24}
              aria-hidden="true"
              className="shrink-0 text-[#F50087]"
            />
            {location}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#071426] text-white">
        <Image
          src="/images/hero-sunset.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#071426]/95 via-[#071426]/80 to-[#071426]/35"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <Label light>{t("cta.eyebrow")}</Label>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {t("cta.title")}
            <br />
            <span className="text-[#F50087]">
              {t("cta.highlight")}
            </span>
            {t("cta.ending") === "." ? "" : " "}
            {t("cta.ending")}
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-6 text-white/85">
            {t("cta.description")}
          </p>

          <a href="#anfrage" className={`${buttonClass} mt-6`}>
            {t("cta.button")}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}

function Label({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[10px] font-bold tracking-[0.12em] ${
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

function ContactItem({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 py-4">
      <Icon
        size={26}
        strokeWidth={1.6}
        aria-hidden="true"
        className="shrink-0 text-[#F50087]"
      />

      <div className="min-w-0">
        <p className="text-xs font-bold">{title}</p>
        <div className="mt-1 text-sm">{children}</div>
      </div>
    </div>
  );
}
