"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SwitchLanguage() {
  const pathname = usePathname();

  return (
    <div>
      <Link
        href={"/en" + pathname.replace(/^\/(fr|en)/, "")}
        className={cn(
          "uppercase",
          "transition",
          pathname.startsWith("/en")
            ? "text-[#C2262E] font-semibold"
            : "text-[#fff] font-normal mix-blend-difference",
          "hover:font-semibold hover:text-[#C2262E] cursor-pointer"
        )}
      >
        en
      </Link>
      <span className="text-[#fff] mix-blend-difference"> / </span>
      <Link
        href={"/fr" + pathname.replace(/^\/(fr|en)/, "")}
        className={cn(
          "uppercase",
          "transition",
          pathname.startsWith("/fr")
            ? "text-[#C2262E] font-semibold"
            : "text-[#fff] font-normal mix-blend-difference",
          "hover:font-semibold hover:text-[#C2262E] cursor-pointer"
        )}
      >
        fr
      </Link>
    </div>
  );
}

export default SwitchLanguage;
