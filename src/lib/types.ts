export interface UserInfo {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface Task {
  _id?: string;
  title: string;
  description?: string;
  status: "pending" | "completed";
  priority: "low" | "medium" | "high";
  goal?: Goal;
  user: string;
  date?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Goal {
  _id?: string;
  title: string;
  description: string;
  status: "active" | "completed";
  tasks: Task[];
}
