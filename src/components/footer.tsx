"use client";

import type { Footer as FooterType } from "./strapi-types";
import { cn } from "@/lib/utils";
import ButtonStrapi from "./global/button-strapi";
import LinkStrapi from "./global/Link-strapi";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/fondationdominiquerenaud/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
        aria-hidden
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/108520529/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
        aria-hidden
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@FondationDominiqueRenaud",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
        aria-hidden
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    ),
  },
] as const;

export default function Footer({ data }: { data: FooterType | null }) {
  if (!data) {
    return null; // or some fallback UI
  }

  return (
    <footer
      className={cn(
        "bg-black text-white p-8 md:p-16 lg:p-32 lg:py-24 xl:p-48 xl:py-24",
        "flex flex-col md:flex-row md:gap-16 items-center md:items-stretch"
      )}
    >
      <div className="border-l border-white pl-4 w-full md:2/3">
        <p className="font-semibold uppercase">{data.blocTeam.title}</p>
        <div className="flex jusitfy-between gap-8 w-full mt-8">
          <div className="w-full">
            <p className="font-semibold uppercase">
              {data.blocTeam.presidentZoneHeading}
            </p>
            <p className="mt-4">{data.blocTeam.presidentName}</p>
          </div>
          <div className="w-full">
            <p className="font-semibold uppercase">
              {data.blocTeam.membersZoneHeading}
            </p>
            <div className="mt-4">
              {data.blocTeam.members.map((member, index) => (
                <p key={index} className="">
                  {member.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden my-16">
        {data.blocContact.buttons.map((button, index) => (
          <ButtonStrapi
            id={button.id}
            key={index}
            label={button.label}
            link={button.link}
            externalLink={button.externalLink}
            color={button.color}
            font={button.font}
            size={button.size}
            weight={button.weight}
          />
        ))}
      </div>
      <div className="border-l border-white pl-4 w-full md:w-auto shrink-0 mb-16 md:mb-0">
        <p className="font-semibold uppercase">Social</p>
        <div className="mt-4 md:mt-6 flex gap-4">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:opacity-70 transition-opacity"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
      <div className="border-l border-white pl-4 w-full md:w-1/3">
        <p className="font-semibold uppercase">{data.blocContact.title}</p>

        <div className="mt-4 md:mt-6">
          {data.blocContact.links.map((link, index) => (
            <LinkStrapi
              id={link.id}
              key={index}
              label={link.label}
              link={link.link}
              externalLink={link.externalLink}
              color={link.color}
              font={link.font}
              size={"sm"}
              weight={link.weight}
            />
          ))}
        </div>
        <div className="hidden md:block mt-4 md:mt-6">
          {data.blocContact.buttons.map((button, index) => (
            <ButtonStrapi
              id={button.id}
              key={index}
              label={button.label}
              link={button.link}
              externalLink={button.externalLink}
              color={button.color}
              font={button.font}
              size={"sm"}
              weight={button.weight}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
