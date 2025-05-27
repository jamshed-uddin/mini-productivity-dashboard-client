"use client";

import {
  RectangleGroupIcon,
  ListBulletIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const links = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: RectangleGroupIcon,
  },
  {
    name: "Tasks",
    href: "/dashboard/tasks",
    icon: ListBulletIcon,
  },
  {
    name: "Goals",
    href: "/dashboard/goals",
    icon: ClipboardDocumentListIcon,
  },
];

const NavLinks = () => {
  return (
    <div className="space-y-3">
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
