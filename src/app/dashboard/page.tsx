import AddGoalButton from "@/components/AddGoalButton";
import AddTaskButton from "@/components/AddTaskButton";
import DailyQuote from "@/components/DailyQuote";
import OverviewGoals from "@/components/OverviewGoals";

import OverviewTasks from "@/components/OverviewTasks";

import React from "react";

const DashboardHome = () => {
  return (
    <div className="lg:h-screen w-full flex flex-col gap-5 ">
      <div className="min-h-40 h-fit  bg-white">
        <DailyQuote />
      </div>
      {/* tasks and goals */}
      <div className=" flex-1 flex flex-col lg:flex-row w-full gap-5">
        <div className="h-full bg-white rounded-xl  flex-1 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="g:text-2xl text-xl font-medium ">
              Today&rsquo;s tasks
            </h2>
            <AddTaskButton />
          </div>

          <OverviewTasks />
        </div>
        <div className="h-full bg-white rounded-xl   flex-1 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="lg:text-2xl text-xl font-medium ">Goals</h2>
            <AddGoalButton />
          </div>
          <OverviewGoals />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
