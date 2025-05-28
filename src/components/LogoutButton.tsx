"use client";

import { useAppDispatch } from "@/hooks/hook";
import { useLogoutUserMutation } from "@/redux/api/userApis";
import { removeUser } from "@/redux/features/userSlice";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import React from "react";

const LogoutButton = () => {
  const [logout] = useLogoutUserMutation();
  const dispath = useAppDispatch();

  const handleLogout = async () => {
    await logout(undefined).unwrap();
    dispath(removeUser());
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
