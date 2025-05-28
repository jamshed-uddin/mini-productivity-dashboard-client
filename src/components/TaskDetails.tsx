import React from "react";

import clsx from "clsx";
import { format } from "date-fns";
import { Task } from "@/lib/types";

type TaskDetailsProps = {
  task: Task;
};

const priorityColors = {
  low: "bg-green-100 text-green-800",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-red-100 text-red-800",
};

const TaskDetails = ({ task }: TaskDetailsProps) => {
  return (
    <div className="  space-y-4">
      <div className="flex flex-wrap items-center gap-3 text-xs">
        <span className="px-2 py-1 bg-gray-100 rounded-full">
          Status: <strong>{task.status}</strong>
        </span>

        <span
          className={clsx(
            "px-2 py-1 rounded-full text-xs",
            priorityColors[task.priority]
          )}
        >
          Priority: {task.priority}
        </span>

        {task.date && (
          <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs">
            Due: {format(new Date(task.date), "PP")}
          </span>
        )}
      </div>
      <div>
        <h2 className="text-xl font-semibold">{task.title}</h2>
        {task.description && (
          <p className="text-gray-600 mt-1">{task.description}</p>
        )}
      </div>

      {task.goal && (
        <div className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
          Goal: {task.goal.title}
        </div>
      )}
      <div className="text-xs text-gray-400">
        Created:{" "}
        {task.createdAt ? format(new Date(task.createdAt), "PPpp") : "N/A"}
      </div>
    </div>
  );
};

export default TaskDetails;
