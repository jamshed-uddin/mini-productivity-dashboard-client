"use client";

import { useGetTasksQuery } from "@/redux/api/taskApis";
import React from "react";
import Task from "./Task";
import type { Task as TaskType } from "@/lib/types";

const Tasks = () => {
  const { data } = useGetTasksQuery(undefined);
  console.log(data);

  return (
    <div className="h-full">
      {data?.data.map((task: TaskType) => (
        <Task key={task._id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
