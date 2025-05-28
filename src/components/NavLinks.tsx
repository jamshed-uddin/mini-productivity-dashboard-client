"use client";

import {
  RectangleGroupIcon,
  ListBulletIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "motion/react";
import clsx from "clsx";
import { useAppDispatch } from "@/hooks/hook";
import { toggleSideNav } from "@/redux/features/userSlice";

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
  const pathname = usePathname();
  const dispath = useAppDispatch();

  return (
    <div className="space-y-3">
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (
          <div
            onClick={() => dispath(toggleSideNav())}
            key={link.name}
            className="relative pl-2 py-1"
          >
            {pathname === link.href ? (
              <motion.div
                layoutId="background"
                className="absolute inset-0 bg-indigo-600  rounded-lg z-0"
              />
            ) : null}
            <Link
              href={link.href}
              className={clsx(
                "flex items-center gap-3  relative z-10",
                pathname === link.href
                  ? "text-white"
                  : "text-black hover:text-indigo-600"
              )}
            >
              <LinkIcon className="w-4 h-4" />
              <span> {link.name}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavLinks;
