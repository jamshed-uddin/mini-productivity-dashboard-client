"use client";

import groupTaskByDate from "@/lib/groupTaskByDate";
import { Task } from "@/lib/types";
import { useGetTasksQuery } from "@/redux/api/taskApis";
import React from "react";
import Tasks from "./Tasks";

const OverviewTasks = () => {
  const { data, isLoading } = useGetTasksQuery(undefined);

  if (isLoading) {
    return null;
  }

  const tasksData = data?.data;
  const groupedTasks = groupTaskByDate(tasksData as Task[]);
  const today = new Date().toISOString().split("T")[0];
  const todaysTask = groupedTasks[today];
  console.log(groupedTasks, "today", today);

  return (
    <div>
      <Tasks tasks={todaysTask} />
    </div>
  );
};

export default OverviewTasks;
