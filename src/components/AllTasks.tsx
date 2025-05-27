"use client";

import groupTaskByDate from "@/lib/groupTaskByDate";
import { Task } from "@/lib/types";
import { useGetTasksQuery } from "@/redux/api/taskApis";
import React from "react";
import Tasks from "./Tasks";
import formatDate from "@/lib/formatDate";

const AllTasks = () => {
  const { data, isLoading } = useGetTasksQuery(undefined);

  if (isLoading) {
    return null;
  }

  const tasksData = data?.data;
  const groupedTasks = groupTaskByDate(tasksData as Task[]);
  const groupDates = Object.keys(groupedTasks);

  console.log(groupedTasks);

  return (
    <div>
      <div className="space-y-4">
        {groupDates.map((date) => (
          <div key={date}>
            <h3 className="py-1 border-b border-gray-300 mb-3 font-semibold">
              {formatDate(date)}
            </h3>
            <Tasks tasks={groupedTasks[date]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
