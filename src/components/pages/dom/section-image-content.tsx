import { SectionImageContentStrapiType } from "@/components/strapi-types";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

function H1(props: Object) {
  return (
    <h1
      className="uppercase text-white font-serif text-2xl xl:text-3xl text-left text-balance mb-8"
      {...props}
    />
  );
}

function P(props: Object) {
  return (
    <p className="text-white font-sans text-sm xl:text-base mb-2" {...props} />
  );
}

export default function SectionImageContent({
  data,
}: {
  data: SectionImageContentStrapiType | undefined;
}) {
  if (!data) return null;
  const primaryStyle =
    "w-fit cursor-pointer rounded-full transition text-center bg-[#C2262E] hover:bg-[#C2262E]/90 text-white font-bold font-sans text-sm py-4 px-8";
  const secondaryStyle =
    "w-fit cursor-pointer transition text-center text-white font-bold font-sans text-sm hover:underline py-4 px-8";

  return (
    <section className="grid 2xl:grid-cols-2 gap-x-32 gap-y-8 md:gap-y-16 max-w-360 mx-auto items-center">
      <img
        src={data.image.url?.toString()}
        alt={data.image.alternativeText?.toString()}
        width={data.image.width}
        height={data.image.height}
        className="h-32 2xl-h-[20dvh] w-auto"
      />
      <div>
        <ReactMarkdown
          components={{ h1: H1, p: P }}
          remarkPlugins={[remarkBreaks]}
          allowedElements={["p", "strong", "em", "h1", "h2", "br"]}
          urlTransform={(url) =>
            url.startsWith("https://www.fondationdominiquerenaud.org")
              ? url
              : "#blocked"
          }
        >
          {data.content}
        </ReactMarkdown>
        <div className="flex gap-1 md:gap-4 mt-8 items-center flex-wrap">
          {data.cta.map((item, i) => {
            return (
              <a
                href={item.link}
                target="_blank"
                className={
                  item.type == "primary" ? primaryStyle : secondaryStyle
                }
                key={i}
              >
                {item.text}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
