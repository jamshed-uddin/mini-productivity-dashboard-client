"use client";

import React from "react";
import Button from "./Button";
import { Task } from "@/lib/types";
import { useForm } from "react-hook-form";

interface TaskFormProps {
  initialData?: Task;
  onSubmit: (data: Task) => void;
  onFormCancel?: () => void;
}

const TaskForm = ({ initialData, onSubmit, onFormCancel }: TaskFormProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Task>();

  const handleFormSubmit = (data: Task) => {
    onSubmit(data);
    reset();
  };

  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
        {initialData?._id && (
          <input
            type="hidden"
            {...register("_id")}
            defaultValue={initialData._id || ""}
          />
        )}
        <input
          {...register("title", { required: "Title is required" })}
          type="text"
          id=""
          defaultValue={initialData?.title || ""}
          placeholder="Title"
          className="focus:outline-0 block w-full text-2xl font-semibold"
        />
        {errors.title && (
          <span className="text-red-500 text-sm">{errors.title.message}</span>
        )}
        <textarea
          {...register("description")}
          name="description"
          id=""
          defaultValue={initialData?.description || ""}
          className="resize-none focus:outline-0 block  w-full"
          rows={1}
          placeholder="Description"
        />
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <label htmlFor="date-picker " className="cursor-pointer">
              Date
            </label>
            <input
              {...register("date")}
              type="date"
              id="date-picker"
              className="focus:outline-0 border border-black rounded-lg"
              min={new Date().toISOString().split("T")[0]}
              defaultValue={
                initialData?.date
                  ? initialData?.date.split("T")[0]
                  : new Date().toISOString().split("T")[0]
              }
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="priority">Priority</label>
            <select
              defaultValue={initialData?.priority || ""}
              {...register("priority")}
              id="priority"
              className="focus:outline-0 border border-black rounded-lg"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <label htmlFor="goal">Add to a goal</label>
            <select
              defaultValue={initialData?.goal || ""}
              {...register("goal")}
              id="goal"
              className="focus:outline-0 border border-black rounded-lg"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => {
              onFormCancel?.();
              reset();
            }}
            type="button"
            className="bg-gray-300 px-4 py-2 rounded-xl active:scale-95 font-medium cursor-pointer"
          >
            Cancel
          </button>
          <Button>Add task</Button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
