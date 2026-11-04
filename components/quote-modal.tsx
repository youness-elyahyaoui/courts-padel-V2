"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useTranslations } from "next-intl";

const STORAGE_KEY = "courts-padel-quote-modal-seen";

export default function QuoteModal({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const t = useTranslations("quoteModal");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const dialog = dialogRef.current;
      if (!dialog || dialog.open) return;

      try {
        if (window.localStorage.getItem(STORAGE_KEY)) return;
      } catch {
        // The dialog can still open when storage is blocked.
      }

      dialog.showModal();

      try {
        window.localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // Storage is optional.
      }
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="quote-modal-title"
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)]
           max-w-2xl overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-2xl bg-white p-5
           text-[#071426] shadow-2xl backdrop:bg-slate-950/55 sm:p-7"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-bold">COURTS&PADEL</p>
        <button
          type="button"
          autoFocus
          aria-label={t("close")}
          onClick={() => dialogRef.current?.close()}
          className="grid h-9 w-9 place-items-center rounded-full
                     text-2xl hover:bg-slate-100"
        >
          ×
        </button>
      </div>

      <h2 id="quote-modal-title" className="text-2xl font-bold sm:text-3xl">
        {t("title")} <span className="text-[#F50087]">{t("highlight")}</span>
      </h2>
      <p className="mt-2 text-sm text-slate-600">{t("description")}</p>

      {children}

      <a
        href="https://wa.me/491776907473"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 block rounded-md border border-green-600 p-2
                   text-center text-sm font-semibold text-green-700
                   hover:bg-green-50"
      >
        {t("whatsapp")}
      </a>
    </dialog>
  );
}