import { Goal } from "@/lib/types";
import React from "react";
import GoalItem from "./GoalItem";
import NoGoalText from "./NoGoalText";

const GoalList = ({ goals }: { goals: Goal[] }) => {
  return (
    <div>
      {goals?.length ? (
        <div className="h-full space-y-3 divide-y divide-gray-300">
          {goals?.map((goal) => (
            <GoalItem key={goal._id} goal={goal} />
          ))}
        </div>
      ) : (
        <NoGoalText />
      )}
    </div>
  );
};

export default GoalList;
