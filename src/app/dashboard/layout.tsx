import DashboardNav from "@/components/DashboardNav";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen">
      <div>
        <DashboardNav />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
