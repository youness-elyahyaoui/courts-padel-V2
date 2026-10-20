
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";

import Navbar from "../../layout/navbar";
import Footer from "../../layout/footer";

import HeroSection from "../../sections/hero-section";
import ServicesSection from "../../sections/services-section";
import ProjectsSection from "../../sections/projects-section";
import MaintenanceSection from "../../sections/maintenance-section";
import AboutSection from "../../sections/about-section";
import CTASection from "../../sections/cta-section";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <>
      {/* <Navbar locale={locale} /> */}

      <main>
        <HeroSection locale={locale} />
        <ServicesSection />
        <ProjectsSection locale={locale} />
        <MaintenanceSection locale={locale} />
        <AboutSection locale={locale} />
        <CTASection locale={locale} />
      </main>

      {/* <Footer locale={locale} /> */}
    </>
  );
}
