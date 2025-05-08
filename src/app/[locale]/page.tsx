import SectionAPropos from "@/components/pages/homepage/a-propos";
import HeroSection from "@/components/pages/homepage/hero-section";
import SectionModel from "@/components/pages/homepage/model";
import SectionTradition from "@/components/pages/homepage/tradition";
import {
  Header,
  HeroHeaderHomeStrapiType,
  SectionAProposHomeStrapiType,
  SectionModelStrapiType,
  SectionTraditionStrapiType,
} from "@/components/strapi-types";
import { headers } from "next/headers";

type PageStrapiType = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  header: Header;
  sections: (
    | SectionAProposHomeStrapiType
    | HeroHeaderHomeStrapiType
    | SectionTraditionStrapiType
    | SectionModelStrapiType
  )[];
};

type pageDataExport = {
  data: PageStrapiType[];
};

export default async function Home() {
  const headerList = await headers();
  const pathname = headerList.get("x-current-path");
  const locale = pathname?.split("/")[1];

  //DATA PAGE
  let pageData: pageDataExport | null = null;
  try {
    const pageRes = await fetch(
      `${process.env
        .STRAPI_API_URL!}/api/pages?filters[slug][$eq]=home&populate[header][fields][0]=*&status=published&locale=${locale}&populate[sections][populate]=*`,
      {
        next: {
          revalidate: 604800,
          tags: ["page-homepage-data"],
        }, // Revalidate every 7 days (604800 seconds)
      }
    );
    pageData = await pageRes.json();
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données du footer:",
      error
    );
    pageData = null;
  }

  return (
    <>
      {pageData?.data[0].sections.map((section) => {
        switch (section.__component) {
          case "sections-homepage.hero-header":
            return (
              <HeroSection
                data={section}
                key={section.id + section.__component}
              />
            );
          case "sections-homepage.section2-model":
            return (
              <SectionModel
                data={section}
                key={section.id + section.__component}
              />
            );
          case "sections-homepage.section3-tradition":
            return (
              <SectionTradition
                data={section}
                key={section.id + section.__component}
              />
            );
          case "sections-homepage.section4-a-propos":
            return (
              <SectionAPropos
                data={section}
                key={section.id + section.__component}
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
}
