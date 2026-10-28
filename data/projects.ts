import de from "@/messages/de.json";
import en from "@/messages/en.json";
import fr from "@/messages/fr.json";
import es from "@/messages/es.json";

export type Project = {
  slug: string;
  title: string;
  city: string;
  country: string;
  images: string[];
  description: string;
  overview: string;
  type?: string;
  courtCount?: string;
  courtType?: string;
  installation?: string;
  features?: string[];
};

type ProjectSource = Omit<
  Project,
  "description" | "overview" | "features"
>;

type ProjectTranslation = {
  title?: string;
  description: string;
  overview: string;
  features?: string[];
};

type ProjectsContent = {
  countries: Record<string, string>;
  terms: Record<string, string>;
  items: Record<string, ProjectTranslation>;
};

const translations: Record<string, ProjectsContent> = {
  de: de.projectsContent,
  en: en.projectsContent,
  fr: fr.projectsContent,
  es: es.projectsContent,
};

const baseProjects: ProjectSource[] = [
  {
    slug: "padel-field-soell",
    title: "Padel Field",
    city: "Söll",
    country: "Österreich",
    images: [
      "/projects/projet-01/01.webp",
      "/projects/projet-01/02.webp",
      "/projects/projet-01/03.webp",
      "/projects/projet-01/04.jpeg",
      "/projects/projet-01/05.jpeg",
      "/projects/projet-01/06.jpeg",
      "/projects/projet-01/07.jpeg",
    ],
  },
  {
    slug: "padel-factory-berlin",
    title: "Padel Factory",
    city: "Berlin",
    country: "Deutschland",
    type: "Indoor",
    courtCount: "12",
    courtType: "Panorama-Padelplätze",
    installation: "Indoor",
    images: [
      "/projects/projet-02/01.webp",
      "/projects/projet-02/02.webp",
      "/projects/projet-02/03.webp",
      "/projects/projet-02/04.webp",
      "/projects/projet-02/05.webp",
    ],
  },
  {
    slug: "padelwerk-dulliken",
    title: "Padelwerk",
    city: "Dulliken",
    country: "Schweiz",
    type: "Indoor",
    courtCount: "8",
    courtType: "Panorama-Padelplätze",
    installation: "Indoor",
    images: [
      "/projects/projet-03/01.webp",
      "/projects/projet-03/02.webp",
      "/projects/projet-03/03.webp",
      "/projects/projet-03/04.webp",
      "/projects/projet-03/05.webp",
      "/projects/projet-03/06.webp",
    ],
  },
  {
    slug: "padelfokus-hemer",
    title: "PadelFokus",
    city: "Hemer",
    country: "Deutschland",
    type: "Outdoor",
    courtCount: "3",
    courtType: "Panorama-Doppelplätze",
    installation: "Outdoor",
    images: [
      "/projects/projet-04/01.webp",
      "/projects/projet-04/02.webp",
      "/projects/projet-04/03.webp",
      "/projects/projet-04/04.webp",
    ],
  },
  {
    slug: "padel-city-rotenburg",
    title: "Padel City",
    city: "Rotenburg",
    country: "Deutschland",
    images: [
      "/projects/projet-05/01.webp",
    ],
  },
  {
    slug: "padel-arena-mering",
    title: "Padel Arena",
    city: "Mering",
    country: "Deutschland",
    images: [
      "/projects/projet-06/02.webp",
    ],
  },
  {
    slug: "tennisclub-gruen-berlin",
    title: "Tennisclub Brühl",
    city: "Berlin",
    country: "Deutschland",
    images: [
      "/projects/projet-07/01.webp",
      "/projects/projet-07/02.webp",
      "/projects/projet-07/03.webp",
      "/projects/projet-07/04.webp",
    ],
  },
  {
    slug: "sportfreunde-sachsenhausen",
    title: "Sportfreunde Sachsenhausen",
    city: "Frankfurt",
    country: "Deutschland",
    images: [
      "/projects/projet-08/01.webp",
      "/projects/projet-08/02.webp",
    ],
  },
  {
    slug: "padel-geldern",
    title: "Tennisclub Geldern",
    city: "Geldern",
    country: "Deutschland",
    images: [
      "/projects/projet-09/01.webp",
      "/projects/projet-09/02.webp",
      "/projects/projet-09/03.webp",
    ],
  },
  {
    slug: "eintracht-frankfurt-tennis",
    title: "Eintracht Frankfurt Tennis",
    city: "Frankfurt",
    country: "Deutschland",
    images: [
      "/projects/projet-10/01.webp",
      "/projects/projet-10/02.webp",
      "/projects/projet-10/03.webp",
    ],
  },
  {
    slug: "TSV-Meerbusch-e.V.-Tennis",
    title: "TSV Meerbusch e.V. - Tennis",
    city: "Meerbusch",
    country: "Deutschland",
    images: [
      "/projects/projet-11/01.jpeg",
      "/projects/projet-11/02.jpeg",
      "/projects/projet-11/03.jpeg",
      "/projects/projet-11/04.jpeg",
      "/projects/projet-11/05.jpeg",
      "/projects/projet-11/06.jpeg",
    ],
  },
  {
    slug: "Projekt-Meerbusch",
    title: "Projekt Meerbusch",
    city: "Meerbusch",
    country: "Deutschland",
    images: [
      "/projects/projet-12/04.jpeg",
      "/projects/projet-12/01.jpeg",
      "/projects/projet-12/02.jpeg",
      "/projects/projet-12/03.jpeg",
    ],
  },
];

function getContent(locale: string): ProjectsContent {
  return Object.prototype.hasOwnProperty.call(translations, locale)
    ? translations[locale]
    : translations.de;
}

export function getProjects(locale: string = "de"): Project[] {
  const content = getContent(locale);
  const fallback = translations.de;

  function translateTerm(
    value: string | undefined
  ): string | undefined {
    if (!value) return undefined;

    return content.terms[value] ?? fallback.terms[value] ?? value;
  }

  return baseProjects.map((project): Project => {
    const german = fallback.items[project.slug];
    const translated = content.items[project.slug] ?? german;

    if (!translated) {
      throw new Error(
        `Missing project translation: ${project.slug}`
      );
    }

    return {
      ...project,
      title:
        translated.title ??
        german?.title ??
        project.title,
      country:
        content.countries[project.country] ??
        fallback.countries[project.country] ??
        project.country,
      description: translated.description,
      overview: translated.overview,
      type: translateTerm(project.type),
      courtType: translateTerm(project.courtType),
      installation: translateTerm(project.installation),
      features: translated.features ?? german?.features,
    };
  });
}

const featuredSlugs = [
  "padel-factory-berlin",
  "padelfokus-hemer",
  "padelwerk-dulliken",
] as const;

export function getFeaturedProjects(
  locale: string = "de"
): Project[] {
  const localizedProjects = getProjects(locale);

  return featuredSlugs.flatMap((slug) => {
    const project = localizedProjects.find(
      (item) => item.slug === slug
    );

    return project ? [project] : [];
  });
}

// Compatibilité avec les anciens imports : allemand par défaut.
export const projects = getProjects("de");

export const featuredProjects = getFeaturedProjects("de");