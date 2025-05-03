"use client";

import HeadingStrapi from "@/components/global/heading-strapi";
import ParagraphStrapi from "@/components/global/paragraph-strapi";
import StrapiImage from "@/components/global/strapi-image";
import { SectionAProposHomeStrapiType } from "@/components/strapi-types";
import { motion } from "framer-motion";
import React from "react";

const SectionAPropos = ({
  data,
}: {
  data: SectionAProposHomeStrapiType | undefined;
}) => {
  if (!data) return null;

  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center lg:justify-between px-8 md:px-16 lg:px-32 xl:px-48 pb-24 lg:pt-16">
      <motion.div
        className="space-y-4 lg:w-[60%]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <HeadingStrapi data={data.heading} />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {data.paragraphs.map((paragraph) => (
            <ParagraphStrapi
              data={paragraph}
              key={paragraph.id + paragraph.content}
            />
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        className="w-[70%] sm:w-[50%] lg:w-[30%] xl:w-[20%] -translate-y-[15%] lg:-translate-y-[25%] z-20"
        initial={{ opacity: 1, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
        viewport={{ once: true }}
      >
        <StrapiImage imageData={data.image} formatKey="large" />
      </motion.div>
    </section>
  );
};

export default SectionAPropos;
