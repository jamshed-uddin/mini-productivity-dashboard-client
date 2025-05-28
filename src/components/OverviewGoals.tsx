"use client";

import React from "react";
import ErrorMessage from "./ErrorMessage";
import { TrophyIcon } from "@heroicons/react/24/outline";
import { useGetGoalsQuery } from "@/redux/api/goalApis";
import GoalList from "./GoalList";
import { TasksSkeleton } from "./Skeletons";

const OverviewGoals = () => {
  const { data, isLoading, isError } = useGetGoalsQuery(undefined);

  if (isLoading) {
    return <TasksSkeleton amount={4} />;
  }

  if (!isLoading && isError) {
    return <ErrorMessage />;
  }

  const goals = data?.data.slice(0, 4);

  return (
    <div>
      {!goals?.length ? (
        <h3 className="flex flex-col items-center mt-5 font-medium">
          <span>
            <TrophyIcon className="w-8 h-8 text-indigo-500" />
          </span>
          <span> Set a goal today.</span>
        </h3>
      ) : (
        <GoalList goals={goals} />
      )}
    </div>
  );
};

export default OverviewGoals;
