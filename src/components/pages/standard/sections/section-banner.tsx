import { SectionBannerStrapiType } from "@/components/strapi-types";

export default function SectionBanner({
  data,
}: {
  data: SectionBannerStrapiType | undefined;
}) {
  if (!data) return null;
  const primaryStyle =
    "w-fit cursor-pointer rounded-full transition text-center bg-[#C2262E] hover:bg-[#C2262E]/90 text-white font-bold font-sans text-sm py-4 px-8";
  const secondaryStyle =
    "w-fit cursor-pointer transition text-center text-white font-bold font-sans text-sm hover:underline py-4 px-8";
  return (
    <section className="bg-black flex flex-col gap-8 items-center">
      {data.is_video_banner && data.iframe_link ? (
        <iframe src={data.iframe_link} className="w-full h-auto aspect-video"/>
      ) : (
        <picture className="w-full h-auto">
          <source
            srcSet={data.image?.url?.toString()}
            media="(width >= 768px)"
          />
          <img src={data.image_mobile?.url?.toString() ?? data.image?.url?.toString()} alt={data.image?.alternativeText?.toString()} />
        </picture>
      )}
      {data.cta ? (
        <div className="flex gap-1 md:gap-4 items-center flex-wrap">
          {data.cta.map((cta, i) => {
            return (
              <a
                key={`cta-${i}`}
                href={cta.link}
                className={
                  cta.type == "primary" ? primaryStyle : secondaryStyle
                }
                target="_blank"
              >
                {cta.text}
              </a>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
