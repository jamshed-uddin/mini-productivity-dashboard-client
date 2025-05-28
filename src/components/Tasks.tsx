"use client";
import React from "react";
import Task from "./Task";
import type { Task as TaskType } from "@/lib/types";

const Tasks = ({ tasks }: { tasks: TaskType[] }) => {
  return (
    <div className="h-full space-y-3 divide-y divide-gray-300">
      {tasks?.map((task) => (
        <Task key={task._id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
