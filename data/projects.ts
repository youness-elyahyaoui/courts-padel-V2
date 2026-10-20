// COURTS&PADEL — données des projets.
// Les présentations courtes des projets 5 à 10 sont volontairement neutres :
// confirmer avec le client la nature exacte des travaux avant publication.
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

export const projects: Project[] = [
  {
    slug: "padel-field-soell",
    title: "Padel Field",
    city: "Söll",
    country: "Österreich",
    description: "Einblicke in die Padelanlage in Söll, Österreich.",
    overview: "Dieses Referenzprojekt befindet sich in Söll in Österreich. Die Projektgalerie zeigt die Anlage aus verschiedenen Perspektiven. Weitere technische Angaben und der genaue Leistungsumfang werden nach Abstimmung mit COURTS&PADEL ergänzt.",
    images: ["/projects/projet-01/01.webp", "/projects/projet-01/02.webp", "/projects/projet-01/03.webp"],
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
    description: "12 Panorama-Padelplätze in einer Indoor-Anlage in Berlin.",
    overview: "Die Padel Factory in Berlin umfasst zwölf Panorama-Padelplätze im Innenbereich. Die Bilder geben Einblicke in die Anlage und die räumliche Anordnung der Spielfelder. Ergänzende Angaben zu den ausgeführten Arbeiten können nach Bestätigung durch COURTS&PADEL ergänzt werden.",
    features: ["12 Panorama-Padelplätze", "Indoor-Anlage"],
    images: ["/projects/projet-02/01.webp", "/projects/projet-02/02.webp", "/projects/projet-02/03.webp", "/projects/projet-02/04.webp", "/projects/projet-02/05.webp"],
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
    description: "8 Panorama-Padelplätze in einer Indoor-Anlage in Dulliken.",
    overview: "Das Padelwerk in Dulliken in der Schweiz umfasst acht Panorama-Padelplätze im Innenbereich. In der Galerie sind unterschiedliche Ansichten der Anlage dokumentiert. Weitere technische Details werden ergänzt, sobald sie vom Kunden freigegeben sind.",
    features: ["8 Panorama-Padelplätze", "Indoor-Anlage"],
    images: ["/projects/projet-03/01.webp", "/projects/projet-03/02.webp", "/projects/projet-03/03.webp", "/projects/projet-03/04.webp", "/projects/projet-03/05.webp", "/projects/projet-03/06.webp"],
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
    description: "3 Panorama-Doppelplätze mit mobilen Systemen im Außenbereich.",
    overview: "Das Projekt PadelFokus in Hemer umfasst drei Panorama-Doppelplätze im Außenbereich. Die Anlage nutzt mobile Systeme. Die Galerie zeigt die Padelplätze sowie unterschiedliche Ansichten des Standorts.",
    features: ["3 Panorama-Doppelplätze", "Mobile Systeme", "Outdoor-Anlage"],
    images: ["/projects/projet-04/01.webp", "/projects/projet-04/02.webp", "/projects/projet-04/03.webp", "/projects/projet-04/04.webp"],
  },
  {
    slug: "padel-city-rotenburg",
    title: "Padel City",
    city: "Rotenburg",
    country: "Deutschland",
    description: "Einblicke in den Padelstandort in Rotenburg.",
    overview: "Padel City in Rotenburg ist Teil der Projektreferenzen von COURTS&PADEL. Das vorhandene Bild zeigt den Standort. Angaben zu Anzahl und Typ der Plätze sowie zum genauen Leistungsumfang werden nach Bestätigung ergänzt.",
    images: ["/projects/projet-05/01.webp"],
  },
  {
    slug: "padel-arena-mering",
    title: "Padel Arena",
    city: "Mering",
    country: "Deutschland",
    description: "Padelanlage in Mering – Impressionen aus dem Projekt.",
    overview: "Dieses Referenzprojekt befindet sich in Mering in Deutschland. Die Fotogalerie dokumentiert die Anlage aus mehreren Perspektiven. Der genaue technische Aufbau und die ausgeführten Leistungen werden nach Rücksprache mit COURTS&PADEL beschrieben.",
    images: ["/projects/projet-06/01.webp", "/projects/projet-06/02.webp"],
  },
  {
    slug: "tennisclub-gruen-berlin",
    title: "Tennisclub Grün",
    city: "Berlin",
    country: "Deutschland",
    description: "Projektimpressionen vom Tennisclub Grün in Berlin.",
    overview: "Die Bilder dieses Referenzprojekts zeigen den Standort des Tennisclubs Grün in Berlin. Weitere Informationen zur Padelanlage, zu den gewählten Systemen und zum ausgeführten Leistungsumfang folgen nach Freigabe durch den Kunden.",
    images: ["/projects/projet-07/01.webp", "/projects/projet-07/02.webp", "/projects/projet-07/03.webp", "/projects/projet-07/04.webp"],
  },
  {
    slug: "sportfreunde-sachsenhausen",
    title: "Sportfreunde Sachsenhausen",
    city: "Frankfurt",
    country: "Deutschland",
    description: "Einblicke in den Padelstandort in Frankfurt-Sachsenhausen.",
    overview: "Das Projekt bei den Sportfreunden Sachsenhausen befindet sich in Frankfurt am Main. Die bereitgestellten Bilder geben einen ersten Eindruck des Standorts. Weitere Angaben zu den Leistungen und den technischen Eigenschaften werden nach Bestätigung ergänzt.",
    images: ["/projects/projet-08/01.webp", "/projects/projet-08/02.webp"],
  },
  {
    slug: "padel-geldern",
    title: "Padelprojekt",
    city: "Geldern",
    country: "Deutschland",
    description: "Fotografische Einblicke in ein Padelprojekt in Geldern.",
    overview: "Dieses Referenzprojekt ist in Geldern in Deutschland verortet. Die Bilder dokumentieren die Padelanlage. Projektname, Ausführungsart und technische Details werden nach Bestätigung durch COURTS&PADEL ergänzt.",
    images: ["/projects/projet-09/01.webp", "/projects/projet-09/02.webp", "/projects/projet-09/03.webp"],
  },
  {
    slug: "eintracht-frankfurt-tennis",
    title: "Eintracht Frankfurt Tennis",
    city: "Frankfurt",
    country: "Deutschland",
    description: "Einblicke in das Padelprojekt bei Eintracht Frankfurt Tennis.",
    overview: "Die Projektreferenz Eintracht Frankfurt Tennis befindet sich in Frankfurt am Main. Die Galerie zeigt den Standort anhand der bereitgestellten Originalbilder. Zusätzliche Angaben zu Anzahl, Bauweise und Art der ausgeführten Arbeiten werden nach Rücksprache ergänzt.",
    images: ["/projects/projet-10/01.webp", "/projects/projet-10/02.webp", "/projects/projet-10/03.webp"],
  },
];

export const featuredProjects = [projects[1], projects[3], projects[2]];
