import DashboardNav from "@/components/DashboardNav";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex ">
      <div className="w-full lg:w-1/5 border p-2">
        <DashboardNav />
      </div>
      <div className="w-full lg:w-4/5 border p-2">{children}</div>
    </div>
  );
};

export default DashboardLayout;
