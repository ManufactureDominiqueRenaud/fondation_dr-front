import Link from "next/link";
import type { Link as LinkProps } from "../strapi-types";
import { cn } from "@/lib/utils";

function LinkStrapi({
  id,
  label,
  link,
  externalLink,
  color,
  font,
  size,
  weight,
}: LinkProps) {
  return (
    <Link
      href={link || ""}
      target={externalLink ? "_blank" : ""}
      className={cn(
        id,
        "cursor-pointer transition hover:underline",

        color === "black" && "text-black",
        color === "white" && "text-white",
        color === "primary" && "text-[#C2262E]",

        font === "serif" && "font-serif",
        font === "sans" && "font-sans",

        size === "xs" && "text-xs",
        size === "sm" && "text-sm",
        size === "base" && "text-base",
        size === "lg" && "text-lg",
        size === "xl" && "text-xl",
        size === "xl2" && "text-2xl",
        size === "xl3" && "text-3xl",
        size === "xl4" && "text-4xl",
        size === "xl5" && "text-5xl",
        size === "xl6" && "text-6xl",

        weight === "light" && "font-light",
        weight === "normal" && "font-normal",
        weight === "semibold" && "font-semibold",
        weight === "bold" && "font-bold"
      )}
    >
      {label || "no label"}
    </Link>
  );
}

export default LinkStrapi;
