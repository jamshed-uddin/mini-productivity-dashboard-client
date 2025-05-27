import DashboardNav from "@/components/DashboardNav";
import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex ">
      <div
        className="w-full lg:w-1/5 
       p-2 bg-indigo-50"
      >
        <DashboardNav />
      </div>
      <div
        className="w-full lg:w-4/5 
      bg-slate-50"
      >
        <Toaster />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
