import { SectionContentStrapiType } from "@/components/strapi-types";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

function P(props: Object) {
  return (
    <p className="text-white font-sans text-sm xl:text-base mb-2" {...props} />
  );
}

export default function SectionContent({
  data,
}: {
  data: SectionContentStrapiType | undefined;
}) {
  if (!data) return null;
  const primaryStyle = "w-fit cursor-pointer rounded-full transition text-center bg-[#C2262E] hover:bg-[#C2262E]/90 text-white font-bold font-sans text-sm py-4 px-8";
  const secondaryStyle = "w-fit cursor-pointer transition text-center text-white font-bold font-sans text-sm hover:underline py-4 px-8";

  return (
    <section className="bg-black">
      <ReactMarkdown
        components={{ p: P }}
        remarkPlugins={[remarkBreaks]}
        allowedElements={["p", "strong", "em", "h1", "br"]}
        urlTransform={(url) =>
          url.startsWith("https://www.fondationdominiquerenaud.org")
            ? url
            : "#blocked"
        }
      >
        {data.content}
      </ReactMarkdown>
      <div className="flex gap-1 md:gap-4 mt-16 items-center flex-wrap">
        {data.cta.map((item, i) => {
          return (
            <a
              href={item.link}
              target="_blank"
              className={item.type == "primary" ? primaryStyle : secondaryStyle}
              key={i}
            >
              {item.text}
            </a>
          );
        })}
      </div>
    </section>
  );
}
