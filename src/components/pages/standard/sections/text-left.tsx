import { cn } from "@/lib/utils";
import React from "react";

function TextLeft({
  isDark = true,
  className,
}: {
  isDark?: boolean;
  className?: string;
}) {
  return (
    <section
      className={cn(
        isDark ? "bg-black text-white" : "bg-[#efefef] text-black",
        "py-36 px-24",
        className
      )}
    >
      <p className="w-1/3">
        Dominique Renaud a contribué à façonner l&apos;horlogerie moderne grâce
        à son esprit pionnier et à ses collaborations avec les plus grandes
        maisons. Ses travaux sont aujourd&apos;hui des références pour les
        collectionneurs et passionnés du monde entier. La Fondation Dominique
        Renaud se donne pour mission de structurer et d&apos;organiser cet
        héritage d&apos;innovation afin de le rendre accessible à travers des
        expositions, des publications et des initiatives culturelles et
        éducatives.
      </p>
    </section>
  );
}

export default TextLeft;
