export interface UserInfo {
  createdAt: string;
  email: string;
  name: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

export interface Task {
  _id?: string;
  title: string;
  description?: string;
  status: "pending" | "completed";
  priority: "low" | "medium" | "high";
  goal?: string;
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
