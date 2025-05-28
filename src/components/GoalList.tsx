import { Goal } from "@/lib/types";
import React from "react";
import GoalItem from "./GoalItem";

const GoalList = ({ goals }: { goals: Goal[] }) => {
  return (
    <div className="h-full space-y-3 divide-y divide-gray-300">
      {goals?.map((goal) => (
        <GoalItem key={goal._id} goal={goal} />
      ))}
    </div>
  );
};

export default GoalList;
