"use client";

import HeadingStrapi from "@/components/global/heading-strapi";
import ParagraphStrapi from "@/components/global/paragraph-strapi";
import { SectionTraditionStrapiType } from "@/components/strapi-types";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function SectionTradition({
  data,
}: {
  data: SectionTraditionStrapiType | undefined;
}) {
  if (!data) return null;

  return (
    <section className="relative bg-[#EDEDED] px-8 md:px-16 lg:px-32 xl:px-48 pt-52 md:pt-64 lg:pt-48 xl:pt-64 pb-52 md:pb-48 xl:pb-64">
      <motion.div
        className="space-y-4 lg:w-[60%]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <HeadingStrapi data={data.heading} className="text-left text-balance" />
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
      {data.showTrianglesPattern && (
        <motion.div
          className="absolute w-[50%] md:w-1/3 bottom-0 right-0 translate-y-[30%] sm:translate-y-[40%] z-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: true }}
        >
          <Image
            src={"/temp/motif_triangles.svg"}
            alt=""
            width={530}
            height={507}
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}
    </section>
  );
}

export default SectionTradition;
