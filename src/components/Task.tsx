import type { Task } from "@/lib/types";
import React from "react";

const Task = ({ task }: { task: Task }) => {
  return <div>{task.title}</div>;
};

export default Task;
