"use client";

import { useGetGoalsQuery } from "@/redux/api/goalApis";
import React from "react";

import GoalList from "./GoalList";
import { TasksSkeleton } from "./Skeletons";

const AllGoals = () => {
  const { data, isLoading } = useGetGoalsQuery(undefined);

  if (isLoading) {
    return <TasksSkeleton />;
  }

  return (
    <div>
      <GoalList goals={data?.data || []} />
    </div>
  );
};

export default AllGoals;
