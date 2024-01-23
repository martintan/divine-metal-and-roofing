"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

interface MenuDropDownItems {
  title: string;
  route: string;
}

interface MenuItemProps {
  title: string;
  href?: string;
  childRoutes?: MenuDropDownItems[];
}

export function MenuItem({ title, href, childRoutes }: MenuItemProps) {
  const [mouseHover, setMousehover] = useState<boolean>(false);
  const pathname = usePathname();
  const paths = {
    Home: "/",
    Residential: "/residential",
    Commercial: "/commercial",
    "Replacement And Installation": "/replacement-and-installation",
    "Roof Repair": "roof-repair",
    Gallery: "gallery",
    "About Us": "/about-us",
  };
  const isSelected = pathname === paths[title];

  return (
    <div onMouseEnter={() => setMousehover(true)} onMouseLeave={() => setMousehover(false)}>
      <li>
        <a
          href={href}
          className="block p-4 uppercase text-neutral-300 text-sm flex flex-row"
          style={{
            borderLeft: "1px solid rgba(255, 255, 255, .1)",
            borderRight: "1px solid rgba(0, 0, 0, .4)",
            backgroundColor: mouseHover || isSelected ? "#302b27" : "",
          }}
        >
          {title}
          {childRoutes ? (
            <div className="w-3 self-center ml-1 invert">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>
          ) : null}
        </a>
        {mouseHover && childRoutes ? (
          <div className="absolute flex flex-col">
            {childRoutes.map((item, index) => (
              <a
                href={item.route}
                key={index}
                className="z-100 bg-[#504741] hover:bg-[#302b27] p-4 uppercase text-neutral-300 text-sm"
              >
                {item.title}
              </a>
            ))}
          </div>
        ) : (
          <></>
        )}
      </li>
    </div>
  );
}
