"use client";
import { SectionImageContentStrapiType } from "@/components/strapi-types";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { motion } from "framer-motion";
import {H1, H2, P, A} from "@/components/pages/standard/markdown/element-types";

function EM(props: Object) {
  return <em className="text-white/80" {...props} />;
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
    <section
      className={
        data.image
          ? "grid 2xl:grid-cols-2 gap-x-32 gap-y-8 md:gap-y-16"
          : "" + " max-w-360 mx-auto"
      }
    >
      {data.image ? (
        <motion.img
          src={data.image.url?.toString()}
          alt={data.image.alternativeText?.toString()}
          width={data.image.width}
          height={data.image.height}
          className="h-24 2xl:h-auto w-auto 2xl:w-full"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: true }}
        />
      ) : null}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
        viewport={{ once: true }}
        className={data.image ? "2xl:w-full md:w-2/3" : "md:w-2/3"}
      >
        <ReactMarkdown
          components={{ h1: H1, h2: H2, p: P, a: A, em: EM }}
          remarkPlugins={[remarkBreaks]}
        >
          {data.content}
        </ReactMarkdown>
        {data.cta ? (
          <div className="flex gap-1 md:gap-4 mt-8 items-center justify-center flex-wrap">
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
        ) : null}
      </motion.div>
    </section>
  );
}
