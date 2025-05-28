"use client";

import React from "react";
import NavLinks from "./NavLinks";
import LogoutButton from "./LogoutButton";
import { XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "@/hooks/hook";
import { toggleSideNav } from "@/redux/features/userSlice";

const DashboardNav = () => {
  const { isSideNavOpen } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const toggleNav = () => dispatch(toggleSideNav());

  return (
    <div
      className={clsx(
        " w-full  h-full absolute lg:static left-0 top-0 bottom-0  z-30 transition-all duration-500",
        isSideNavOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}
      onClick={toggleNav}
    >
      <div
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        className={clsx(
          "flex flex-col h-full px-5  w-[80%] lg:w-full  bg-indigo-50  pt-2"
        )}
      >
        {/* name and nav opener */}
        <div className="shrink-0   w-full flex  justify-between">
          <h3 className="text-indigo-500 text-xl font-bold">Stride</h3>
          <button
            onClick={toggleNav}
            className={clsx("cursor-pointer py-2   lg:hidden")}
          >
            <XMarkIcon className="w-5 h-5 " />
          </button>
        </div>

        {/* navlinks */}
        <div className="flex-1 mt-5">
          <NavLinks />
        </div>

        {/* logout button */}
        <div className="shrink-0 mb-5 pl-2">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
