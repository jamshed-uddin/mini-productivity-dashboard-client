import React from "react";
import NavLinks from "./NavLinks";
import LogoutButton from "./LogoutButton";

const DashboardNav = () => {
  return (
    <div className="flex flex-col h-full pl-5">
      <div className="shrink-0">
        <h3 className="text-indigo-500 text-2xl font-bold">Tasker</h3>
      </div>

      <div className="flex-1 mt-5">
        <NavLinks />
      </div>

      <div className="shrink-0 mb-5">
        <LogoutButton />
      </div>
    </div>
  );
};

export default DashboardNav;
