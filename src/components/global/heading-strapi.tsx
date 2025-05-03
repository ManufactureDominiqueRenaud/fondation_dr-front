import React from "react";
import { Heading } from "../strapi-types";
import { cn } from "@/lib/utils";

export default function HeadingStrapi({ data, className }: { data: Heading, className?: string }) {
  if (!data) return null;

  const classNames = cn(
    "text-4xl font-bold uppercase",
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

  switch (data.type) {
    case "h1":
      return <h1 className={classNames}>{data.content}</h1>;
    case "h2":
      return <h2 className={classNames}>{data.content}</h2>;
    case "h3":
      return <h3 className={classNames}>{data.content}</h3>;
    case "h4":
      return <h4 className={classNames}>{data.content}</h4>;
    case "h5":
      return <h5 className={classNames}>{data.content}</h5>;
    case "h6":
      return <h6 className={classNames}>{data.content}</h6>;

    default:
      return null;
  }
}
