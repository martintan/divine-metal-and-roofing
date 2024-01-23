"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

interface MenuItemProps {
  title: string;
  href?: string;
}

export function MenuItem({ title, href }: MenuItemProps) {
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
    <li>
      <a
        onMouseEnter={() => setMousehover(true)}
        onMouseLeave={() => setMousehover(false)}
        href={href}
        className="block p-4 uppercase text-neutral-300 text-sm"
        style={{
          borderLeft: "1px solid rgba(255, 255, 255, .1)",
          borderRight: "1px solid rgba(0, 0, 0, .4)",
          backgroundColor: mouseHover || isSelected ? "#302b27" : "",
        }}
      >
        {title}
      </a>
    </li>
  );
}
