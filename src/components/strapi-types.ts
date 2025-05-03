//COMPONENTS
//FOOTER
export type blocTeam = {
  title: string;
  presidentZoneHeading: string;
  presidentName: string;
  membersZoneHeading: string;
  members: {
    name: string;
  }[];
};

export type blocContact = {
  title: string;
  links: Link[];
  buttons: Button[];
};

//GLOBAL
export type Header = {
  logo: Image;
  showLogo: boolean;
  showLanguageSelector: boolean;
};

export type Footer = {
  blocContact: blocContact;
  blocTeam: blocTeam;
};

//GENERAL
export type Heading = {
  id: number;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  content: string;
  color: "black" | "white";
  font: "serif" | "sans";
  size:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "xl2"
    | "xl3"
    | "xl4"
    | "xl5"
    | "xl6";
  weight: "light" | "normal" | "semibold" | "bold";
};

export type Paragraph = {
  id: number;
  content: string;
  color: "black" | "white";
  font: "serif" | "sans";
  size:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "xl2"
    | "xl3"
    | "xl4"
    | "xl5"
    | "xl6";
  weight: "light" | "normal" | "semibold" | "bold";
};

export type Button = {
  id: number;
  label: string;
  link: string;
  externalLink: boolean;
  color: "black" | "white" | "primary";
  font: "serif" | "sans";
  size: "sm" | "base" | "lg";
  weight: "light" | "normal" | "semibold" | "bold";
};

export type Link = {
  id: number;
  label: string;
  link: string;
  externalLink: boolean;
  color: "black" | "white" | "primary";
  font: "serif" | "sans";
  size:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "xl2"
    | "xl3"
    | "xl4"
    | "xl5"
    | "xl6";
  weight: "light" | "normal" | "semibold" | "bold";
};

export type Image = {
  id: number;
  documentId: string | null;
  name: string | null;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: {
      name: string | null;
      hash: string | null;
      ext: string | null;
      mime: string | null;
      path: string | null;
      width: number;
      height: number;
      size: number;
      sizeInBytes: number;
      url: string | null;
    };
    small: {
      name: string | null;
      hash: string | null;
      ext: string | null;
      mime: string | null;
      path: string | null;
      width: number;
      height: number;
      size: number;
      sizeInBytes: number;
      url: string | null;
    };
    medium: {
      name: string | null;
      hash: string | null;
      ext: string | null;
      mime: string | null;
      path: string | null;
      width: number;
      height: number;
      size: number;
      sizeInBytes: number;
      url: string | null;
    };
    large: {
      name: string | null;
      hash: string | null;
      ext: string | null;
      mime: string | null;
      path: string | null;
      width: number;
      height: number;
      size: number;
      sizeInBytes: number;
      url: string | null;
    };
  };
  hash: string | null;
  ext: string | null;
  mime: string | null;
  size: 1060.56;
  url: string | null;
  previewUrl: string | null;
  provider: string | null;
  provider_metadata: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  publishedAt: string | null;
};

export type SvgStrapi = {
  id: number;
  documentId: string | null;
  name: string | null;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: null;
  hash: string | null;
  ext: string | null;
  mime: string | null;
  size: number;
  url: string | null;
  previewUrl: string | null;
  provider: string | null;
  provider_metadata: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  publishedAt: string | null;
};

//SECTIONS HOMEPAGE
export type HeroHeaderHomeStrapiType = {
  __component: "sections-homepage.hero-header";
  id: number;
  showHexagonPattern: boolean;
  image: Image;
  logoIcon: SvgStrapi;
  logoText: SvgStrapi;
  heading: Heading;
  paragraph: Paragraph[];
};

export type SectionModelStrapiType = {
  __component: "sections-homepage.section2-model";
  id: number;
  paragraphs: Paragraph[];
  image: Image;
};

export type SectionTraditionStrapiType = {
  __component: "sections-homepage.section3-tradition";
  id: number;
  showTrianglesPattern: boolean;
  heading: Heading;
  paragraphs: Paragraph[];
};

export type SectionAProposHomeStrapiType = {
  __component: "sections-homepage.section4-a-propos";
  id: number;
  heading: Heading;
  paragraphs: Paragraph[];
  image: Image;
};

