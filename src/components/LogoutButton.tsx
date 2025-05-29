"use client";

import { useAppDispatch } from "@/hooks/hook";
import { deleteCookie } from "@/lib/cookies";

import { removeUser } from "@/redux/features/userSlice";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import React from "react";

const LogoutButton = () => {
  const dispath = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie("token");
    dispath(removeUser());
    router.replace("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className=" cursor-pointer flex items-center gap-3 hover:text-indigo-600"
    >
      <ArrowLeftStartOnRectangleIcon className="w-4 h-4 " /> Logout
    </button>
  );
};

export default LogoutButton;
