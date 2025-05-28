import DashboardNav from "@/components/DashboardNav";
import OverviewHeader from "@/components/OverviewHeader";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

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
      bg-slate-50 absolute lg:static inset-0"
      >
        <Toaster />

        <OverviewHeader />

        <div className="px-2">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
