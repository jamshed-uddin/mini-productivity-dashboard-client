"use client";

import groupTaskByDate from "@/lib/groupTaskByDate";
import { Task } from "@/lib/types";
import { useGetTasksQuery } from "@/redux/api/taskApis";
import React from "react";
import Tasks from "./Tasks";
import ErrorMessage from "./ErrorMessage";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { TasksSkeleton } from "./Skeletons";

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
      {!todaysTask?.length ? (
        <h3 className="flex flex-col items-center mt-5 font-medium">
          <span>
            <SparklesIcon className="w-8 h-8 text-indigo-500" />
          </span>
          <span> What do you need to get done today?</span>
        </h3>
      ) : (
        <Tasks tasks={todaysTask} />
      )}
    </div>
  );
};

export default OverviewTasks;
