import Image from "next/image";
import React from "react";
import { SvgStrapi } from "../strapi-types";

const StrapiSvg = ({ data }: { data: SvgStrapi }) => {
  const src = process.env.STRAPI_API_URL! + data?.url || "";
  const width = data.width;
  const height = data.height;
  return (
    <Image
      src={src}
      alt={data.alternativeText || ""}
      width={width}
      height={height}
    />
  );
};

export default StrapiSvg;
