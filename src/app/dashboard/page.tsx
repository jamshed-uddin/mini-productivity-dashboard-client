import DailyQuote from "@/components/DailyQuote";
import Goals from "@/components/Goals";
import OverviewHeader from "@/components/OverviewHeader";
import OverviewTasks from "@/components/OverviewTasks";

import React from "react";

const DashboardHome = () => {
  return (
    <div className="lg:h-screen w-full flex flex-col gap-5 p-5">
      <div>
        <OverviewHeader />
      </div>
      <div className="h-40  bg-white">
        <DailyQuote />
      </div>
      <div className=" flex-1 flex w-full gap-5">
        <div className="h-full bg-white rounded-xl  flex-1 p-4">
          <h2 className="text-2xl font-medium mb-3">Today&rsquo;s tasks</h2>
          <OverviewTasks />
        </div>
        <div className="h-full bg-white rounded-xl   flex-1 p-4">
          <h2 className="text-2xl font-medium">Goals</h2>
          <Goals />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
