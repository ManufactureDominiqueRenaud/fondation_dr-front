import {
  SectionBannerStrapiType,
  SectionImageContentStrapiType,
} from "@/components/strapi-types";
import { headers } from "next/headers";
import SectionImageContent from "@/components/pages/dom/section-image-content";
import SectionBanner from "@/components/pages/dom/section-banner";

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
  sections: (SectionBannerStrapiType | SectionImageContentStrapiType)[];
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
        .STRAPI_API_URL!}/api/pages?filters[slug][$eq]=openscience/dom&populate[header][fields][0]=*&status=published&locale=${locale}&populate[sections][populate]=*`,
      {
        next: {
          revalidate: 1,
          tags: ["page-dom-data"],
        }, // Revalidate every 7 days (604800 seconds)
      },
    );
    pageData = await pageRes.json();
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données du footer:",
      error,
    );
    pageData = null;
  }

  return (
    <div className="w-full px-8 md:px-16 lg:px-32 xl:px-48 py-24 md:py-32 xl:py-64 bg-black">
      {pageData?.data[0].sections.map((section) => {
        switch (section.__component) {
          case "sections-dom.section-banner":
            return (
              <SectionBanner
                data={section}
                key={section.id + section.__component}
              />
            );
          case "sections-dom.section-content":
            return (
              <SectionImageContent
                data={section}
                key={section.id + section.__component}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
