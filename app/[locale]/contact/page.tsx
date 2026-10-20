"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Suspense,
  useState,
  type FormEvent,
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
} from "lucide-react";

/* Vérifier ces coordonnées avec le client avant publication. */
const contact = {
  phone: "+49 177 6907473",
  email: "info@court-padel.de",
  location: "Monheim am Rhein, Deutschland",
};

const requestTypes = [
  {
    value: "project",
    label: "Neue Padelanlage",
    icon: PanelsTopLeft,
  },
  {
    value: "installation",
    label: "Montage & Installation",
    icon: Wrench,
  },
  {
    value: "maintenance",
    label: "Wartung & Reparatur",
    icon: Settings,
  },
  {
    value: "other",
    label: "Sonstige Anfrage",
    icon: MessageCircle,
  },
];

const benefits = [
  {
    icon: MessagesSquare,
    title: "Schnelle Rückmeldung",
    text: "Wir melden uns zeitnah bei Ihnen.",
  },
  {
    icon: Handshake,
    title: "Individuelle Beratung",
    text: "Maßgeschneiderte Lösungen für Ihr Projekt.",
  },
  {
    icon: Settings,
    title: "Erfahrenes Team",
    text: "Fachgerechte und zuverlässige Umsetzung.",
  },
  {
    icon: Gem,
    title: "Komplettservice",
    text: "Von der Planung bis zur fertigen Padelanlage.",
  },
];

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
            <Label light>KONTAKT & BERATUNG</Label>

            <h1 className="mt-5 text-4xl text-white font-extrabold leading-[1.06] tracking-tight sm:text-5xl">
              Lassen Sie uns über
              <span className="block text-[#F50087]">
                Ihr Padelprojekt
              </span>
              sprechen.
            </h1>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/85">
              Sie planen eine neue Padelanlage, benötigen
              Unterstützung bei der Montage oder möchten
              Wartungsarbeiten anfragen? Kontaktieren Sie uns –
              wir freuen uns auf Ihr Vorhaben.
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
              alt="Padelanlage mit blauem Kunstrasen"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="bg-[#F7F8FA] p-5 sm:p-6">
            <Label>DIREKT KONTAKTIEREN</Label>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Unsere{" "}
              <span className="text-[#F50087]">
                Kontaktdaten.
              </span>
            </h2>

            <address className="mt-5 divide-y divide-slate-200 bg-white px-4 not-italic">
              <ContactItem icon={Phone} title="Telefon">
                <a
                  href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
                  className="hover:text-[#F50087]"
                >
                  {contact.phone}
                </a>
              </ContactItem>

              <ContactItem icon={Mail} title="E-Mail">
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all hover:text-[#F50087]"
                >
                  {contact.email}
                </a>
              </ContactItem>

              <ContactItem icon={MapPin} title="Standort">
                {contact.location}
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
                Unsere Erreichbarkeit
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Wir bemühen uns, Ihre Anfrage schnellstmöglich
                zu beantworten.
              </p>
            </div>
          </div>
        </aside>

        <div
          id="anfrage"
          className="scroll-mt-28 rounded-sm border border-slate-200 p-5 sm:p-7"
        >
          <Label>PROJEKTANFRAGE</Label>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight">
            Jetzt{" "}
            <span className="text-[#F50087]">
              unverbindlich anfragen.
            </span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Füllen Sie das Formular aus und wir melden uns
            schnellstmöglich bei Ihnen zurück.
          </p>

          <Suspense
            fallback={
              <p className="mt-6 text-sm">
                Formular wird geladen …
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
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-4">
              <Icon
                size={32}
                strokeWidth={1.6}
                aria-hidden="true"
                className="shrink-0 text-[#F50087]"
              />

              <div>
                <h3 className="text-sm font-bold">{title}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  {text}
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
            title="Standort Monheim am Rhein"
            src="https://maps.google.com/maps?q=Monheim%20am%20Rhein%2C%20Deutschland&z=11&output=embed"
            width="100%"
            height="280"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full border-0"
          />
        </div>

        <div>
          <Label>UNSER STANDORT</Label>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight">
            Monheim am Rhein,
            <span className="block text-[#F50087]">
              Deutschland
            </span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            Von unserem Standort in Monheim am Rhein aus
            betreuen wir Padelprojekte in Deutschland und den
            umliegenden Regionen. Wir freuen uns auf Ihre Anfrage.
          </p>

          <div className="mt-5 flex items-center gap-3 text-sm">
            <MapPin
              size={24}
              aria-hidden="true"
              className="shrink-0 text-[#F50087]"
            />
            {contact.location}
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
          <Label light>KONTAKT & BERATUNG</Label>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Gemeinsam Ihr
            <br />
            <span className="text-[#F50087]">
              Padelprojekt
            </span>{" "}
            realisieren.
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-6 text-white/85">
            Sie planen eine Padelanlage oder suchen einen
            zuverlässigen Partner für Ihr Vorhaben?
            Wir freuen uns auf Ihre Anfrage.
          </p>

          <a href="#anfrage" className={`${buttonClass} mt-6`}>
            JETZT KONTAKT AUFNEHMEN
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}

function ContactForm() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type");
  const { locale } = useParams<{ locale: string }>();

  const [selectedType, setSelectedType] = useState(
    requestTypes.some((item) => item.value === initialType)
      ? initialType!
      : "project"
  );

  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

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
      setMessage("Die Dateien dürfen zusammen maximal 3 MB groß sein.");
      return;
    }

    files.forEach((file) => data.append("attachments", file));

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Anfrage fehlgeschlagen");
      }

      setStatus("success");
      setMessage(
        "Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet."
      );

      form.reset();
      setFiles([]);
    } catch {
      setStatus("error");
      setMessage(
        "Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns per E-Mail."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 space-y-5"
      aria-busy={status === "sending"}
    >
      <fieldset>
  <legend className="text-xs font-bold">
    Art der Anfrage <span className="text-[#F50087]">*</span>
  </legend>

  <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
    {requestTypes.map(({ value, label, icon: Icon }) => (
      <label key={value} className="relative block cursor-pointer">
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
            {label}
          </span>
        </span>
      </label>
    ))}
  </div>
</fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-xs font-bold">
          Name / Unternehmen{" "}
          <span className="text-[#F50087]">*</span>
          <input
            name="name"
            required
            autoComplete="name"
            maxLength={160}
            placeholder="Ihr Name oder Unternehmen"
            className={inputClass}
          />
        </label>

        <label className="block text-xs font-bold">
          E-Mail-Adresse{" "}
          <span className="text-[#F50087]">*</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={254}
            placeholder="name@unternehmen.de"
            className={inputClass}
          />
        </label>

        <label className="block text-xs font-bold">
          Telefonnummer
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={50}
            placeholder="+49 …"
            className={inputClass}
          />
        </label>

        <label className="block text-xs font-bold">
          Projektstandort
          <input
            name="location"
            maxLength={200}
            placeholder="Stadt / Land"
            className={inputClass}
          />
        </label>
      </div>

      <label className="block text-xs font-bold">
        Ihre Nachricht <span className="text-[#F50087]">*</span>
        <textarea
          name="message"
          required
          rows={5}
          maxLength={5000}
          placeholder="Beschreiben Sie uns kurz Ihr Vorhaben, die Anzahl der Padelplätze, gewünschte Leistungen oder weitere Details …"
          className={`${inputClass} resize-y`}
        />
      </label>

      <div>
  <p className="text-xs font-bold">
    Dateien anhängen (optional)
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
      Dateien{" "}
      <span className="font-semibold text-[#F50087] underline">
        auswählen
      </span>

      <p className="text-[11px] text-slate-400">
        JPG, PNG, PDF · insgesamt max. 3 MB
      </p>
    </div>

    <input
      type="file"
      name="attachments"
      aria-label="Dateien auswählen"
      multiple
      accept=".jpg,.jpeg,.png,.pdf"
      onChange={(event) => {
        const selectedFiles = Array.from(
          event.currentTarget.files ?? []
        );

        // Annuler la fenêtre conserve la sélection précédente.
        if (selectedFiles.length === 0) return;

        const totalSize = selectedFiles.reduce(
          (total, file) => total + file.size,
          0
        );

        if (totalSize > 3 * 1024 * 1024) {
          setStatus("error");
          setMessage(
            "Die Dateien dürfen zusammen maximal 3 MB groß sein."
          );

          event.currentTarget.value = "";
          return;
        }

        setFiles(selectedFiles);
        setStatus("idle");
        setMessage("");
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
            aria-label={`Datei ${file.name} entfernen`}
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
          Ich habe die{" "}
          <a
            href="./datenschutz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F50087] underline"
          >
            Datenschutzerklärung
          </a>{" "}
          gelesen und akzeptiere sie.{" "}
          <span className="text-[#F50087]">*</span>
           </span>
          </label>

          <button
           type="submit"
          disabled={status === "sending"}
          className={`${buttonClass} w-full disabled:cursor-wait disabled:opacity-60`}
           >
           {status === "sending" ? "WIRD GESENDET …" : "ANFRAGE SENDEN"}
           <ArrowRight size={16} aria-hidden="true" />
          </button>

      <p
        role={status === "error" ? "alert" : "status"}
        aria-live="polite"
        className={`text-sm leading-6 ${
          status === "error" ? "text-red-600" : "text-green-700"
        }`}
      >
        {message}
        </p>
     </form>
      );
      }

       function Label({
  children,
  light = false,
}: {
  children: React.ReactNode;
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
  icon: typeof Phone;
  title: string;
  children: React.ReactNode;
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