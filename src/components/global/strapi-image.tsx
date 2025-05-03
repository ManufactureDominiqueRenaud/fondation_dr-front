import Image from "next/image";
import React from "react";
import { Image as StrapiImageType } from "../strapi-types";

export default function StrapiImage ({
  imageData,
  formatKey,
}: {
  imageData: StrapiImageType;
  formatKey: "small" | "medium" | "large";
}) {
  console.log(process.env.STRAPI_API_URL!)

  const imageFormat = imageData.formats?.[formatKey];
  const src = process.env.STRAPI_API_URL! + imageFormat?.url || imageData.url || "";
  const width = imageFormat?.width || imageData.width;
  const height = imageFormat?.height || imageData.height;
  const blurDataURL = process.env.STRAPI_API_URL! + imageData.formats?.thumbnail?.url || "";

  return (
    <Image
      src={src}
      alt={imageData.alternativeText || ""}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={blurDataURL}
    />
  );
};
