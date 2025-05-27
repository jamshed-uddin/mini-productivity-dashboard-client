"use client";

import { useGetTasksQuery } from "@/redux/api/taskApis";
import React from "react";
import Task from "./Task";

const Tasks = () => {
  const { data } = useGetTasksQuery(undefined);
  console.log(data);

  return (
    <div className="h-full">
      {data?.data.map((task) => (
        <Task key={task._id} />
      ))}
    </div>
  );
};

export default Tasks;
