"use client";

import ParagraphStrapi from "@/components/global/paragraph-strapi";
import StrapiImage from "@/components/global/strapi-image";
import {
  SectionModelStrapiType,
} from "@/components/strapi-types";
import React from "react";
import { motion } from "framer-motion";

function SectionModel({ data }: { data: SectionModelStrapiType | undefined }) {
  if (!data) return null;

  return (
    <section className="relative flex flex-col md:flex-row gap-8 items-center justify-between px-8 md:px-16 lg:px-32 xl:px-48 pt-0 pb-52 md:pb-64 lg:pb-48 xl:pb-64 lg:pt-32 xl:pt-64 bg-black">
      <div className="w-full lg:w-[60%] space-y-4">
        {data.paragraphs.map((paragraph) => (
          <motion.div
            key={paragraph.id + paragraph.content}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0 }}
            viewport={{ once: true }}
          >
            <ParagraphStrapi data={paragraph} />
          </motion.div>
        ))}
      </div>
      <motion.div
        className="absolute w-2/3 md:w-[60%] lg:w-1/2 xl:w-[40%] md:right-1/2 lg:right-0 bottom-0 z-10 translate-y-1/2 md:translate-x-1/2 lg:md:translate-x-0 lg:z-30"
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        <StrapiImage imageData={data.image} formatKey="large" />
      </motion.div>
    </section>
  );
}

export default SectionModel;
