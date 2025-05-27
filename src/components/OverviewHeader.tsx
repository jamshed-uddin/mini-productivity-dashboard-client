"use client";

import { useAppSelector } from "@/hooks/hook";
import React, { useEffect, useState } from "react";
import AddTaskButton from "./AddTaskButton";
import Button from "./Button";

const OverviewHeader = () => {
  const { userInfo } = useAppSelector((state) => state.user);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-medium">Hello, {userInfo?.name}</h3>

      <div className="flex gap-2">
        <AddTaskButton />
        <Button>Add goal</Button>
      </div>
    </div>
  );
};

export default OverviewHeader;
