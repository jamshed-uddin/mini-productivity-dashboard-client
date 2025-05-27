"use client";

import { useAppSelector } from "@/hooks/hook";
import React from "react";
import AddTaskButton from "./AddTaskButton";

const OverviewHeader = () => {
  const { userInfo } = useAppSelector((state) => state.user);
  console.log(userInfo);
  return (
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-medium">Hello, {userInfo?.name}</h3>

      <div>
        <AddTaskButton />
      </div>
    </div>
  );
};

export default OverviewHeader;
