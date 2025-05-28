import AddGoalButton from "@/components/AddGoalButton";
import AddTaskButton from "@/components/AddTaskButton";
import DailyQuote from "@/components/DailyQuote";
import Goals from "@/components/Goals";

import OverviewTasks from "@/components/OverviewTasks";

import React from "react";

const DashboardHome = () => {
  return (
    <div className="lg:h-screen w-full flex flex-col gap-5 p-5">
      <div className="h-40  bg-white">
        <DailyQuote />
      </div>
      {/* tasks and goals */}
      <div className=" flex-1 flex flex-col lg:flex-row w-full gap-5">
        <div className="h-full bg-white rounded-xl  flex-1 p-4">
          <div className="flex justify-between items-center">
            <h2 className="g:text-2xl text-xl font-medium mb-3">
              Today&rsquo;s tasks
            </h2>
            <AddTaskButton />
          </div>

          <OverviewTasks />
        </div>
        <div className="h-full bg-white rounded-xl   flex-1 p-4">
          <div className="flex justify-between items-center">
            <h2 className="lg:text-2xl text-xl font-medium mb-3">Goals</h2>
            <AddGoalButton />
          </div>
          <Goals />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
