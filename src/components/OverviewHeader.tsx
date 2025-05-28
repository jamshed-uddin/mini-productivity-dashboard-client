"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/hook";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import AddTaskButton from "./AddTaskButton";
import AddGoalButton from "./AddGoalButton";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { toggleSideNav } from "@/redux/features/userSlice";

const OverviewHeader = () => {
  const { userInfo } = useAppSelector((state) => state.user);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const pathname = usePathname();
  console.log(pathname);

  const dispatch = useAppDispatch();

  const pageHeader = () => {
    if (pathname === "/dashboard") {
      return (
        <div className="">
          <h3 className="text-lg lg:text-xl font-medium">
            Hello, {userInfo?.name}
          </h3>
        </div>
      );
    } else if (pathname === "/dashboard/tasks") {
      return (
        <div className="flex-1 flex justify-between items-center">
          <h3 className="text-lg lg:text-xl font-medium">Tasks</h3>
          <AddTaskButton />
        </div>
      );
    } else if (pathname === "/dashboard/goals") {
      return (
        <div className="flex-1 flex justify-between items-center">
          <h3 className="text-lg lg:text-xl font-medium">Goals</h3>
          <AddGoalButton />
        </div>
      );
    }
  };

  if (!mounted) return null;
  return (
    <div className="flex items-center gap-2 px-4 py-2">
      <div className="lg:hidden" onClick={() => dispatch(toggleSideNav())}>
        <Squares2X2Icon className="w-5 h-5" />
      </div>

      {pageHeader()}
    </div>
  );
};

export default OverviewHeader;
