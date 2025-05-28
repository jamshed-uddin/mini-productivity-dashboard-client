"use client";

import React from "react";
import ErrorMessage from "./ErrorMessage";
import { useGetGoalsQuery } from "@/redux/api/goalApis";
import GoalList from "./GoalList";
import { TasksSkeleton } from "./Skeletons";
import NoGoalText from "./NoGoalText";

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
    <div>{!goals?.length ? <NoGoalText /> : <GoalList goals={goals} />}</div>
  );
};

export default OverviewGoals;
