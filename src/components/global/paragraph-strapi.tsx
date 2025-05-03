import React from "react";
import { Paragraph } from "../strapi-types";
import { cn } from "@/lib/utils";

export default function ParagraphStrapi({
  data,
  className,
}: {
  data: Paragraph;
  className?: string;
}) {
  if (!data) return null;

  const classNames = cn(
    data.color === "black" ? "text-black" : "text-white",
    data.font === "serif" ? "font-serif" : "font-sans",
    data.size === "xs"
      ? "text-xs"
      : data.size === "sm"
      ? "text-xs xl:text-sm"
      : data.size === "base"
      ? "text-sm xl:text-base"
      : data.size === "lg"
      ? "text-base xl:text-lg"
      : data.size === "xl"
      ? "text-lg xl:text-xl"
      : data.size === "xl2"
      ? "text-xl xl:text-2xl"
      : data.size === "xl3"
      ? "text-2xl xl:text-3xl"
      : data.size === "xl4"
      ? "text-3xl xl:text-4xl"
      : data.size === "xl5"
      ? "text-4xl xl:text-5xl"
      : data.size === "xl6"
      ? "text-5xl xl:text-6xl"
      : "",
    data.weight === "light"
      ? "font-light"
      : data.weight === "normal"
      ? "font-normal"
      : data.weight === "semibold"
      ? "font-semibold"
      : data.weight === "bold"
      ? "font-bold"
      : "",
    className
  );

  return <p className={classNames}>{data.content}</p>;
}
