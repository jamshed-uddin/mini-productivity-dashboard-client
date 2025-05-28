import { Task } from "./types";

const groupTaskByDate = (tasks: Task[]): Record<string, Task[]> => {
  return tasks?.reduce((acc, task) => {
    const date = task.date?.split("T")[0] as string;

    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(task);
    return acc;
  }, {} as Record<string, Task[]>);
};

export default groupTaskByDate;
