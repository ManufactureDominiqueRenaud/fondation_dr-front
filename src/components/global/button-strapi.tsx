import Link from "next/link";
import type { Button as ButtonProps } from "../strapi-types";
import { cn } from "@/lib/utils";

function ButtonStrapi({
  id,
  label,
  link,
  externalLink,
  color,
  font,
  size,
  weight,
}: ButtonProps) {
  return (
    <Link
      href={link || ""}
      target={externalLink ? "_blank" : ""}
      className={cn(
        id,
        "cursor-pointer rounded-full transition block text-center",

        color === "black" && "bg-black text-white",
        color === "white" && "bg-white text-black",
        color === "primary" && "bg-[#C2262E] hover:bg-[#C2262E]/90 text-black",

        font === "serif" && "font-serif",
        font === "sans" && "font-sans",

        size === "sm" && "text-sm py-4 px-8",
        size === "base" && "text-base py-4 px-8",
        size === "lg" && "text-lg py-6 px-12",

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

export default ButtonStrapi;
