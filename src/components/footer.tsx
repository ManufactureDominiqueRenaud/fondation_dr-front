"use client";

import type { Footer as FooterType } from "./strapi-types";
import { cn } from "@/lib/utils";
import ButtonStrapi from "./global/button-strapi";
import LinkStrapi from "./global/Link-strapi";

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
