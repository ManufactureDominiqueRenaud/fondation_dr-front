import { SectionBannerStrapiType } from "@/components/strapi-types";

export default function SectionBanner({
  data,
}: {
  data: SectionBannerStrapiType | undefined;
}) {
  if (!data) return null;
  return (
    <section className="bg-black flex items-center mb-16">
      <img
        src={data.image.url?.toString()}
        alt={data.image.alternativeText?.toString()}
        width={data.image.width}
        height={data.image.height}
        className="h-32 2xl-h-[20dvh] w-auto"
      />
    </section>
  );
}
