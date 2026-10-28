"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  Suspense,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock3,
  Paperclip,
  PanelsTopLeft,
  Wrench,
  Settings,
  MessageCircle,
  MessagesSquare,
  Handshake,
  Gem,
  type LucideIcon,
} from "lucide-react";

const contact = {
  phone: "+49 177 6907473",
  email: "info@court-padel.de",
  city: "Monheim am Rhein",
};

const requestTypes = [
  { value: "project", icon: PanelsTopLeft },
  { value: "installation", icon: Wrench },
  { value: "maintenance", icon: Settings },
  { value: "other", icon: MessageCircle },
] as const;

type RequestType = (typeof requestTypes)[number]["value"];

const benefits = [
  { key: "response", icon: MessagesSquare },
  { key: "advice", icon: Handshake },
  { key: "team", icon: Settings },
  { key: "service", icon: Gem },
] as const;

const inputClass =
  "mt-2 block w-full rounded-sm border border-slate-200 " +
  "bg-white px-3 py-2.5 text-sm text-[#071426] " +
  "outline-none placeholder:text-slate-400 " +
  "focus:border-[#F50087] focus:ring-2 focus:ring-[#F50087]/10";

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

function ContactForm() {
  const t = useTranslations("contactPage.form");
  const searchParams = useSearchParams();
  const { locale } = useParams<{ locale: string }>();

  const initialType = requestTypes.find(
    (item) => item.value === searchParams.get("type")
  )?.value ?? "project";

  const [selectedType, setSelectedType] =
    useState<RequestType>(initialType);

  const [files, setFiles] = useState<File[]>([]);

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [messageKey, setMessageKey] = useState<
    "sizeError" | "success" | "error" | null
  >(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);

    data.set("type", selectedType);
    data.delete("attachments");

    const totalSize = files.reduce(
      (total, file) => total + file.size,
      0
    );

    if (totalSize > 3 * 1024 * 1024) {
      setStatus("error");
      setMessageKey("sizeError");
      return;
    }

    files.forEach((file) => data.append("attachments", file));

    setStatus("sending");
    setMessageKey(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      form.reset();
      setFiles([]);
      setStatus("success");
      setMessageKey("success");
    } catch {
      setStatus("error");
      setMessageKey("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 space-y-5"
      aria-busy={status === "sending"}
    >
      <fieldset disabled={status === "sending"}>
        <legend className="text-xs font-bold">
          {t("requestType")}{" "}
          <span className="text-[#F50087]">*</span>
        </legend>

        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {requestTypes.map(({ value, icon: Icon }) => (
            <label
              key={value}
              className="relative block cursor-pointer"
            >
              <input
                type="radio"
                name="type"
                value={value}
                checked={selectedType === value}
                onChange={() => setSelectedType(value)}
                className="peer absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
              />

              <span
                className="
                  flex min-h-24 flex-col items-center justify-center
                  gap-2 rounded-sm border border-slate-200
                  bg-white px-2 py-3 text-center
                  transition-colors
                  peer-checked:border-[#F50087]
                  peer-checked:bg-[#F50087]/5
                  peer-checked:[&>svg]:text-[#F50087]
                  peer-focus-visible:ring-2
                  peer-focus-visible:ring-[#F50087]
                  peer-focus-visible:ring-offset-2
                "
              >
                <Icon
                  size={23}
                  aria-hidden="true"
                  className="text-slate-500"
                />

                <span className="text-[11px] font-semibold leading-4">
                  {t(`types.${value}`)}
                </span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-xs font-bold">
          {t("name")}{" "}
          <span className="text-[#F50087]">*</span>
          <input
            name="name"
            required
            autoComplete="name"
            maxLength={160}
            placeholder={t("namePlaceholder")}
            className={inputClass}
          />
        </label>

        <label className="block text-xs font-bold">
          {t("email")}{" "}
          <span className="text-[#F50087]">*</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={254}
            placeholder={t("emailPlaceholder")}
            className={inputClass}
          />
        </label>

        <label className="block text-xs font-bold">
          {t("phone")}
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={50}
            placeholder={t("phonePlaceholder")}
            className={inputClass}
          />
        </label>

        <label className="block text-xs font-bold">
          {t("location")}
          <input
            name="location"
            maxLength={200}
            placeholder={t("locationPlaceholder")}
            className={inputClass}
          />
        </label>
      </div>

      <label className="block text-xs font-bold">
        {t("message")}{" "}
        <span className="text-[#F50087]">*</span>
        <textarea
          name="message"
          required
          rows={5}
          maxLength={5000}
          placeholder={t("messagePlaceholder")}
          className={`${inputClass} resize-y`}
        />
      </label>

      <div>
        <p className="text-xs font-bold">
          {t("attachments")}
        </p>

        <div
          className="
            relative mt-2 flex min-h-24 items-center
            justify-center gap-3 rounded-sm border
            border-dashed border-slate-300 bg-[#FAFAFB]
            px-4 py-5
            focus-within:ring-2 focus-within:ring-[#F50087]/30
          "
        >
          <Paperclip
            size={25}
            aria-hidden="true"
            className="shrink-0 text-slate-400"
          />

          <div className="text-xs leading-5 text-slate-600">
            <span className="font-semibold text-[#F50087] underline">
              {t("chooseFiles")}
            </span>

            <p className="text-[11px] text-slate-400">
              {t("fileHint")}
            </p>
          </div>

          <input
            type="file"
            name="attachments"
            aria-label={t("chooseFiles")}
            multiple
            accept=".jpg,.jpeg,.png,.pdf"
            disabled={status === "sending"}
            onChange={(event) => {
              const selectedFiles = Array.from(
                event.currentTarget.files ?? []
              );

              // Cancelling the dialog keeps the previous selection.
              if (selectedFiles.length === 0) return;

              const totalSize = selectedFiles.reduce(
                (total, file) => total + file.size,
                0
              );

              if (totalSize > 3 * 1024 * 1024) {
                setStatus("error");
                setMessageKey("sizeError");
                event.currentTarget.value = "";
                return;
              }

              setFiles(selectedFiles);
              setStatus("idle");
              setMessageKey(null);
            }}
            className="
              absolute inset-0 z-10 h-full w-full
              cursor-pointer opacity-0
            "
          />
        </div>

        {files.length > 0 && (
          <div className="mt-3 space-y-2">
            {files.map((file, index) => (
              <div
                key={`${file.name}-${file.lastModified}-${index}`}
                className="
                  flex items-center justify-between gap-3
                  rounded-sm border border-slate-200
                  bg-white px-3 py-2
                "
              >
                <div className="min-w-0">
                  <p className="break-all text-xs font-medium">
                    {file.name}
                  </p>

                  <p className="mt-1 text-[11px] text-slate-400">
                    {(file.size / 1024).toFixed(0)} KB
                  </p>
                </div>

                <button
                  type="button"
                  disabled={status === "sending"}
                  aria-label={t("removeFile", {
                    name: file.name,
                  })}
                  onClick={() => {
                    setFiles((current) =>
                      current.filter((_, i) => i !== index)
                    );
                  }}
                  className="
                    shrink-0 px-2 py-1 text-lg
                    text-slate-400 hover:text-[#F50087]
                  "
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <label className="flex items-start gap-2 text-xs leading-5 text-slate-600">
        <input
          type="checkbox"
          name="privacy"
          required
          value="accepted"
          className="mt-1 h-4 w-4 shrink-0 accent-[#F50087]"
        />

        <span>
          {t.rich("privacy", {
            privacy: (chunks) => (
              <Link
                href={`/${locale}/datenschutz`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F50087] underline"
              >
                {chunks}
              </Link>
            ),
          })}{" "}
          <span className="text-[#F50087]">*</span>
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className={`${buttonClass} w-full disabled:cursor-wait disabled:opacity-60`}
      >
        {status === "sending" ? t("sending") : t("submit")}
        <ArrowRight size={16} aria-hidden="true" />
      </button>

      <p
        role={status === "error" ? "alert" : "status"}
        aria-live="polite"
        className={`text-sm leading-6 ${
          status === "error" ? "text-red-600" : "text-green-700"
        }`}
      >
        {messageKey ? t(messageKey) : ""}
      </p>
    </form>
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