import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

type Props = {
  locale: string;
};

export default function HeroSection({ locale }: Props) {
  return (
    <section
      id="home"
      className="
        cp-motion relative isolate min-h-[690px]
        w-full overflow-hidden bg-[#071426] text-white
        sm:min-h-[650px] lg:min-h-[620px]
      "
    >
      {/* BACKGROUND */}
      <Image
        src="/images/hero-panoramic.png"
        alt="Padelanlagen bei Sonnenuntergang"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="
          cp-hero-image -z-20 object-cover
          object-[65%_center] sm:object-center
        "
      />

      {/* OVERLAY */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-gradient-to-t from-[#061226]/90
          via-[#061226]/45 to-[#061226]/15
          lg:bg-gradient-to-r lg:from-[#061226]/70
          lg:via-[#061226]/30 lg:to-transparent
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative mx-auto flex min-h-[690px]
          w-full max-w-[1280px] items-center
          px-6 pb-24 pt-16 sm:min-h-[650px]
          lg:min-h-[620px] lg:px-10 xl:px-12
        "
      >
        <div className="w-full max-w-[850px]">
          <div className="cp-hero-enter mb-5 flex items-center gap-3">
            <span className="h-[2px] w-9 shrink-0 bg-[#F50087]" />

            <span className="text-[10px] font-bold uppercase tracking-[1.8px] text-white sm:text-[12px]">
              PADELANLAGEN NACH MASS
            </span>
          </div>

          <h1
            className="
              cp-hero-enter cp-delay-1 max-w-[950px]
              text-[clamp(2.2rem,4.2vw,4rem)]
              font-black leading-[1.12]
              tracking-[-0.035em] text-white
            "
          >
            VERKAUF
            <span> · </span>
            <span className="text-[#F50087]">MONTAGE</span>
            <span> · </span>
            WARTUNG
          </h1>

          <p
            className="
              cp-hero-enter cp-delay-2 mt-6 max-w-[540px]
              text-[14px] leading-[1.8] text-slate-100
              sm:text-[16px] lg:text-[17px]
            "
          >
            Komplettlösungen für Padelanlagen – von der Planung
            und Fundamentierung über die Lieferung und
            professionelle Montage bis zur langfristigen Wartung.
          </p>

          <div className="cp-hero-enter cp-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/contact?type=project`}
              className="
                group inline-flex min-h-[49px]
                items-center justify-center gap-3
                rounded-[5px] bg-[#F50087] px-6
                text-[12px] font-bold text-white
                shadow-[0_6px_25px_rgba(245,0,135,0.2)]
                transition-[transform,background-color,box-shadow]
                duration-300 hover:-translate-y-0.5
                hover:bg-[#D90078]
                hover:shadow-[0_10px_30px_rgba(245,0,135,0.3)]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-white
              "
            >
              ANGEBOT ANFORDERN
              <ArrowUpRight
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
                className="
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>

            <Link
              href={`/${locale}/projects`}
              className="
                group inline-flex min-h-[49px]
                items-center justify-center gap-3
                rounded-[5px] border border-white/65
                bg-[#071426]/20 px-6 text-[12px]
                font-bold text-white backdrop-blur-[3px]
                transition-[background-color,border-color]
                duration-300 hover:border-white
                hover:bg-white/15
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-white
              "
            >
              PROJEKTE ANSEHEN
              <ArrowRight
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div
        className="
          cp-hero-enter cp-delay-4 absolute bottom-7 left-6
          lg:left-[max(2.5rem,calc((100vw-1280px)/2+3rem))]
        "
      >
        <a
          href="#services"
          className="
            group flex items-center gap-3 text-[11px]
            font-semibold tracking-[0.4px] text-white
            transition-colors hover:text-[#F50087]
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-white
          "
        >
          <span
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full border border-white/60
              transition-colors group-hover:border-[#F50087]
            "
          >
            <ArrowDown
              size={17}
              strokeWidth={1.7}
              aria-hidden="true"
              className="cp-scroll-arrow"
            />
          </span>

          MEHR ENTDECKEN
        </a>
      </div>
    </section>
  );
}