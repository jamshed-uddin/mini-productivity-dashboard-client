"use client";

import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const links = [
  {
    name: "Home",
    href: "/dashbord",
    icon: HomeIcon,
  },
  {
    name: "Task",
    href: "/dashbord/tasks",
    icon: HomeIcon,
  },
  {
    name: "Goals",
    href: "/dashbord/goals",
    icon: HomeIcon,
  },
];

const NavLinks = () => {
  return (
    <div>
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex items-center gap-3"
          >
            <LinkIcon className="w-4 h-4" />
            <span> {link.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
