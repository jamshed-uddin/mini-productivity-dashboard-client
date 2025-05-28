"use client";

import groupTaskByDate from "@/lib/groupTaskByDate";
import { Task } from "@/lib/types";
import { useGetTasksQuery } from "@/redux/api/taskApis";
import React from "react";
import Tasks from "./Tasks";
import ErrorMessage from "./ErrorMessage";

const OverviewTasks = () => {
  const { data, isLoading, isError } = useGetTasksQuery(undefined);

  if (!isLoading && isError) {
    return <ErrorMessage />;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  const tasksData = data?.data;
  const groupedTasks = groupTaskByDate(tasksData as Task[]);
  console.log(groupedTasks);

  const today = new Date().toISOString().split("T")[0];

  // console.log(today, groupedTasks);
  const todaysTask = groupedTasks[today];

  return (
    <div>
      <Tasks tasks={todaysTask} />
    </div>
  );
};

export default OverviewTasks;
