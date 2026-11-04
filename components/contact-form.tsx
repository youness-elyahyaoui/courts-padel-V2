"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Paperclip,
  PanelsTopLeft,
  Wrench,
  Settings,
  MessageCircle,
} from "lucide-react";

const requestTypes = [
  { value: "project", icon: PanelsTopLeft },
  { value: "installation", icon: Wrench },
  { value: "maintenance", icon: Settings },
  { value: "other", icon: MessageCircle },
] as const;

type RequestType = (typeof requestTypes)[number]["value"];

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

export default function ContactForm() {
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
