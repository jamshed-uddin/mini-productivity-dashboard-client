import { Goal } from "@/lib/types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "./Button";
interface GoalFormProps {
  initialData?: Goal;
  onSubmit: (data: Goal) => void;
  onFormCancel?: () => void;
  isSubmitting?: boolean;
  onSubmitSuccess?: () => void;
}
const GoalForm = ({
  initialData,
  onSubmit,
  onFormCancel,
  isSubmitting = false,
  onSubmitSuccess,
}: GoalFormProps) => {
  const [formChange, setFormChange] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Goal>();

  const handleFormSubmit = (data: Goal) => {
    try {
      const res = onSubmit(data);
      toast.success(`Goal ${initialData?._id ? "updated" : "added"}`);
      reset();
      onSubmitSuccess?.();
      console.log("goal res", res);
    } catch {
      toast.error(`Failed to ${initialData?._id ? "update" : "add"} Goal`);
    }
  };

  return (
    <div>
      <form
        className="space-y-4"
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
          <Button loading={isSubmitting} disabled={isSubmitting || !formChange}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GoalForm;
