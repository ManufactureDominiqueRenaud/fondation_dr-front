import {
  SectionHeaderStrapiType,
  SectionTitleStrapiType,
  SectionContentStrapiType,
} from "@/components/strapi-types";
import SectionHeader from "@/components/pages/dom/section-header";
import { headers } from "next/headers";
import SectionTitle from "@/components/pages/dom/section-title";
import SectionContent from "@/components/pages/dom/section-content";

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
  sections: (
    | SectionHeaderStrapiType
    | SectionTitleStrapiType
    | SectionContentStrapiType
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

  const sections = pageData?.data[0]?.sections ?? [];
  const header = sections.find(
    (s): s is SectionHeaderStrapiType =>
      s.__component === "sections-dom.section-header",
  );
  const title = sections.find(
    (s): s is SectionTitleStrapiType =>
      s.__component === "sections-dom.section-title",
  );
  const content = sections.find(
    (s): s is SectionContentStrapiType =>
      s.__component === "sections-dom.section-content",
  );

  return (
    <div className="w-full px-8 md:px-16 lg:px-32 xl:px-48 py-16 md:py-32 xl:py-64 bg-black">
      <div className="2xl:grid grid-cols-2 gap-x-32 max-w-360 mx-auto">
        <SectionHeader data={header} />
        <div className="flex flex-col justify-center gap-16">
          <SectionTitle data={title} />
          <SectionContent data={content} />
        </div>
      </div>
    </div>
  );
}
