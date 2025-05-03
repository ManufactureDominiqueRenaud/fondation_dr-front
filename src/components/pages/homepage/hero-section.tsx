"use client";

import HeadingStrapi from "@/components/global/heading-strapi";
import ParagraphStrapi from "@/components/global/paragraph-strapi";
import StrapiImage from "@/components/global/strapi-image";
import StrapiSvg from "@/components/global/strapi-svg";
import { HeroHeaderHomeStrapiType } from "@/components/strapi-types";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function HeroSection({ data }: { data: HeroHeaderHomeStrapiType | undefined }) {
  if (!data) return null;

  return (
    <>
      {/* //TABLET AND ABOVE */}
      <section className="lg:hidden bg-black w-screen min-h-screen flex flex-col items-center">
        <motion.div
          className="flex items-center gap-8 px-8 mt-20 mb-8 w-full md:w-2/3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-[75px]">
            <StrapiSvg data={data.logoIcon} />
          </div>
          <span className="w-[1px] h-full block bg-white">-</span>
          <div className="w-full">
            <StrapiSvg data={data.logoText} />
          </div>
        </motion.div>
        <motion.div
          className="w-full md:w-2/3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <StrapiImage imageData={data.image} formatKey="large" />
        </motion.div>
        <div className="w-full flex items-start gap-8 px-8 md:px-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
            >
              <HeadingStrapi
                data={data.heading}
                className="text-[#CBB0A5] text-2xl"
              />
            </motion.div>
            <div className="mt-8 space-y-4">
              {data.paragraph.map((paragraph, index) => (
                <motion.div
                  key={paragraph.id + paragraph.content}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.5 + 0.5 * index }}
                  viewport={{ once: true }}
                >
                  <ParagraphStrapi data={paragraph} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {data.showHexagonPattern && (
          <div className="absolute w-[50%] md:w-1/3 -bottom-[10svh] left-0 z-10">
            <Image
              src={"/temp/motif-hexa.png"}
              alt=""
              width={1181}
              height={787}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </section>
      {/* //LAPTOP */}
      <section className="hidden lg:flex bg-black items-center min-h-screen gap-12 py-8">
        <motion.div
          className="w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <StrapiImage imageData={data.image} formatKey="large" />
        </motion.div>
        <div className="w-1/2 flex items-start gap-8 pr-24">
          <div className="flex items-start">
            <motion.div
              className="w-[75px] h-[75px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0 }}
              viewport={{ once: true }}
            >
              <StrapiSvg data={data.logoIcon} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
            >
              <span className="w-[1px] h-[100px] xl:h-[200px] block bg-white ml-8">
                -
              </span>
            </motion.div>
          </div>
          <div>
            <motion.div
              className="h-[75px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0 }}
              viewport={{ once: true }}
            >
              <StrapiSvg data={data.logoText} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0 }}
              viewport={{ once: true }}
            >
              <HeadingStrapi
                data={data.heading}
                className="text-[#CBB0A5] mt-[100px] xl:mt-[200px]"
              />
            </motion.div>
            <div className="mt-16 space-y-4">
              {data.paragraph.map((paragraph, index) => (
                <motion.div
                  key={paragraph.id + paragraph.content}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 + 0.5 * index }}
                  viewport={{ once: true }}
                >
                  <ParagraphStrapi data={paragraph} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {data.showHexagonPattern && (
          <motion.div
            className="absolute w-1/5 -bottom-1/3 left-0 z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src={"/temp/motif-hexa.png"}
              alt=""
              width={1181}
              height={787}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </section>
    </>
  );
}

export default HeroSection;
