import DashboardNav from "@/components/DashboardNav";
import OverviewHeader from "@/components/OverviewHeader";
import { Metadata } from "next";
import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Stride | Dashboard",
  description: "",
};

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex w-full ">
      <div
        className="w-full lg:w-1/5 
       "
      >
        <DashboardNav />
      </div>
      <div
        className="w-full lg:w-4/5 
      bg-slate-50 absolute lg:static inset-0 h-full overflow-y-auto"
      >
        <Toaster />

        <OverviewHeader />

        <div className="px-5 ">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
