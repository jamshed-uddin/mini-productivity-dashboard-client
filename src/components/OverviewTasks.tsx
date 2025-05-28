"use client";

import groupTaskByDate from "@/lib/groupTaskByDate";
import { Task } from "@/lib/types";
import { useGetTasksQuery } from "@/redux/api/taskApis";
import React from "react";
import Tasks from "./Tasks";
import ErrorMessage from "./ErrorMessage";
import { TasksSkeleton } from "./Skeletons";
import NoTaskText from "./NoTaskText";

const OverviewTasks = () => {
  const { data, isLoading, isError } = useGetTasksQuery(undefined);

  if (isLoading) {
    return <TasksSkeleton amount={4} />;
  }

  if (!isLoading && isError) {
    return <ErrorMessage />;
  }

  const tasksData = data?.data;
  const groupedTasks = groupTaskByDate(tasksData as Task[]);

  const today = new Date()?.toISOString()?.split("T")[0];

  const todaysTask = groupedTasks[today];

  return (
    <div>
      {!todaysTask?.length ? <NoTaskText /> : <Tasks tasks={todaysTask} />}
    </div>
  );
};

export default OverviewTasks;
