import React from "react";
import { format } from "date-fns";

import Tasks from "./Tasks";
import { Goal } from "@/lib/types";

type GoalDetailsProps = {
  goal: Goal;
};

const GoalDetails = ({ goal }: GoalDetailsProps) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3 text-xs">
        <span className="px-2 py-1 bg-gray-100 rounded-full">
          Status: <strong>{goal.status || "N/A"}</strong>
        </span>

        <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">
          Tasks: {goal.tasks ? goal.tasks.length : 0}
        </span>
      </div>

      <div>
        <h2 className="text-xl font-semibold">{goal.title}</h2>
        {goal.description && (
          <p className="text-gray-600 mt-1">{goal.description}</p>
        )}
      </div>

      <div className="text-xs text-gray-400 space-y-1">
        <div>
          Created:{" "}
          {goal.createdAt ? format(new Date(goal.createdAt), "PPpp") : "N/A"}
        </div>
        <div>
          Updated:{" "}
          {goal.updatedAt ? format(new Date(goal.updatedAt), "PPpp") : "N/A"}
        </div>
      </div>

      {goal.tasks && goal.tasks.length > 0 ? (
        <div>
          <h3 className="text-lg font-semibold mt-4 mb-2">Tasks</h3>
          <Tasks tasks={goal.tasks} />
        </div>
      ) : (
        <p className="text-gray-500 mt-2">No tasks for this goal yet.</p>
      )}
    </div>
  );
};

export default GoalDetails;
