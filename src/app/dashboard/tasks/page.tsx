import AllTasks from "@/components/AllTasks";
import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Stride | Dashboard - Tasks",
  description: "",
};

const TasksPage = () => {
  return (
    <div className="">
      <AllTasks />
    </div>
  );
};

export default TasksPage;
