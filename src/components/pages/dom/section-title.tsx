import { SectionTitleStrapiType } from "@/components/strapi-types";
import ReactMarkdown from "react-markdown";

function H1(props: Object) {
  return (
    <h1
      className="uppercase text-white font-serif text-2xl xl:text-3xl text-left text-balance"
      {...props}
    />
  );
}

export default function SectionTitle({
  data,
}: {
  data: SectionTitleStrapiType | undefined;
}) {
  if (!data) return null;
  return (
    <section className="bg-black">
      <ReactMarkdown
        components={{ h1: H1 }}
        allowedElements={["p", "strong", "em", "h1"]}
        urlTransform={(url) =>
          url.startsWith("https://example.com") ? url : "#blocked"
        }
      >
        {data.title}
      </ReactMarkdown>
    </section>
  );
}
