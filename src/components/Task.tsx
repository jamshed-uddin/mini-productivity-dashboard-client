"use client";

import type { Task } from "@/lib/types";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { useState } from "react";

const Task = ({ task }: { task: Task }) => {
  const [isComplete, setIsComplete] = useState(
    task.status === "pending" ? false : true
  );
  return (
    <div className="flex  items-start gap-2 py-2">
      <div>
        <input
          checked={isComplete}
          onChange={() => setIsComplete((p) => !p)}
          type="checkbox"
          name=""
          id=""
        />
      </div>
      <div className="flex-1">
        <h2 className={clsx(isComplete ? "line-through" : "")}>{task.title}</h2>
        <p className="text-sm">{task.description}</p>
      </div>
      <div className="flex items-center gap-3">
        <button>
          <PencilIcon className="w-4 h-4" />
        </button>
        <button>
          <TrashIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Task;
