import React from "react";

export const TaskItemSkeleton = () => {
  return (
    <div className={`bg-gray-200 rounded-xl animate-pulse h-16 w-full`}></div>
  );
};

export const TasksSkeleton = ({ amount = 10 }: { amount?: number }) => {
  return (
    <div className="space-y-3">
      {Array.from({ length: amount }).map((item, idx) => (
        <TaskItemSkeleton key={idx} />
      ))}
    </div>
  );
};

const DashboardSkeleton = () => {
  return (
    <div className="w-full h-fit flex flex-col space-y-10">
      <div className="h-36 w-full rounded-xl bg-gray-200 animate-pulse"></div>
      <div className="w-full flex flex-col lg:flex-row space-y-5 gap-x-5">
        <div className="flex-1">
          <TasksSkeleton amount={3} />
        </div>
        <div className="flex-1">
          <TasksSkeleton amount={3} />
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;
