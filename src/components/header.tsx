"use client";
import SwitchLanguage from "./utils/switch-language";
import { HeaderSingle } from "./strapi-types";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Header({ data }: { data: HeaderSingle | null }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  if (!data) {
    return null;
  }

  const openMenu = () => setIsOpen(!isOpen);
  const linkRegex = /^\//;

  const navItems = data.navlink
    .filter((link) => !link.externalLink)
    .map((link) => ({
      id: link.id,
      label: link.label,
      url: `/${data.locale}${link.link == "/" ? "" : linkRegex.test(link.link) ? link.link : "/" + link.link}`,
    }));

  const navLink = (url: string, label: string) => (
    <Link
      href={url}
      className={`font-sans text-base uppercase hover:text-[#C2262E] ${url == pathname ? "text-[#C2262E] font-semibold" : "text-white"}`}
    >
      {label}
    </Link>
  );

  return (
    <header className="w-full fixed top-0 z-50">
      {/* la barre : porte le fond et le flou */}
      <div className="px-8 lg:px-24 py-8 bg-black/70 backdrop-blur-xs">
        <nav className="flex justify-between items-center">
          <Link href={`/${data.locale}`} className="flex items-center gap-4">
            <Image
              src={data.logo_mobile.url}
              alt={data.logo_mobile.alternativeText ?? ""}
              width={data.logo_mobile.width}
              height={data.logo_mobile.height}
              loading="eager"
              className="h-12 w-fit"
            />
            <Image
              src={data.logo.url}
              alt={data.logo.alternativeText ?? ""}
              width={data.logo.width}
              height={data.logo.height}
              loading="eager"
              className="h-10 w-fit hidden md:block"
            />
          </Link>
          <ul className="hidden lg:flex lg:gap-8 lg:items-center">
            {navItems.map((link) => (
              <li key={link.id}>
                {navLink(link.url, link.label)}
              </li>
            ))}
          </ul>
          <SwitchLanguage className="hidden lg:block" />
          <button
            className="lg:hidden"
            onClick={openMenu}
            aria-label="Menu"
            aria-expanded={isOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </button>
        </nav>
      </div>

      {/* le panneau mobile : frere de la barre, donc son flou compose contre la page */}
      {isOpen && (
        <div className="lg:hidden px-8 py-8 bg-black/70 backdrop-blur-xs">
          <ul>
            {navItems.map((link) => (
              <li className="mb-2" key={link.id}>
                {navLink(link.url, link.label)}
              </li>
            ))}
            <li className="mt-6">
              <SwitchLanguage />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
