"use client";

import { useGetGoalsQuery } from "@/redux/api/goalApis";
import React from "react";

import GoalList from "./GoalList";

const AllGoals = () => {
  const { data } = useGetGoalsQuery(undefined);

  return (
    <div>
      <GoalList goals={data?.data} />
    </div>
  );
};

export default AllGoals;
