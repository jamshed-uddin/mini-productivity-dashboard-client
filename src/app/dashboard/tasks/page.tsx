import AddTaskButton from "@/components/AddTaskButton";
import AllTasks from "@/components/AllTasks";

import React from "react";

const TasksPage = () => {
  return (
    <div className="p-5">
      <div className="mb-4  flex justify-between items-center">
        <h2 className="text-xl font-semibold">Tasks</h2>
        <AddTaskButton />
      </div>

      <AllTasks />
    </div>
  );
};

export default TasksPage;
