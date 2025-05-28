"use client";

import React, { useState } from "react";
import Button from "./Button";
import { Task } from "@/lib/types";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useGetGoalsQuery } from "@/redux/api/goalApis";
interface TaskFormProps {
  initialData?: Task;
  onSubmit: (data: Task) => void;
  onFormCancel?: () => void;
  isSubmitting?: boolean;
  onSubmitSuccess?: () => void;
}

const TaskForm = ({
  initialData,
  onSubmit,
  onFormCancel,
  isSubmitting = false,
  onSubmitSuccess,
}: TaskFormProps) => {
  const [formChange, setFormChange] = useState(false);
  const { data, isLoading, isError } = useGetGoalsQuery(undefined);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Task>();

  const handleFormSubmit = async (data: Task) => {
    try {
      const res = await onSubmit(data);
      toast.success(`Task ${initialData?._id ? "updated" : "added"}`);
      reset();
      onSubmitSuccess?.();
      console.log("task res", res);
    } catch {
      toast.error(`Failed to ${initialData?._id ? "update" : "add"} task`);
    }
  };

  return (
    <div>
      <form
        className="space-y-7"
        onSubmit={handleSubmit(handleFormSubmit)}
        onChange={() => setFormChange(true)}
      >
        {initialData?._id && (
          <input
            type="hidden"
            {...register("_id")}
            defaultValue={initialData._id || ""}
          />
        )}

        {/* title */}
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

        {/* description */}
        <textarea
          {...register("description")}
          name="description"
          id=""
          defaultValue={initialData?.description || ""}
          className="resize-none focus:outline-0 block  w-full"
          rows={1}
          placeholder="Description"
        />

        {/* date and priority input */}
        <div className="flex items-center flex-wrap gap-x-3 space-y-7 lg:space-y-0">
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

        {/* goals to assign */}
        <div>
          <div className="flex items-center gap-2">
            <label htmlFor="goal">Add to a goal</label>
            <select
              {...register("goal")}
              id="goal"
              className="focus:outline-0 border border-black rounded-lg"
              defaultValue={initialData?.goal?._id || ""}
            >
              <option value="">Select a goal</option>
              {!isLoading &&
                !isError &&
                data?.data.map((goal) => (
                  <option key={goal._id} value={goal._id}>
                    {goal.title}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* buttons */}
        <div className="flex items-center justify-end gap-2">
          <Button
            variant="secondary"
            onClick={() => {
              onFormCancel?.();
              reset();
            }}
            type="button"
          >
            Cancel
          </Button>
          <Button loading={isSubmitting} disabled={isSubmitting || !formChange}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
