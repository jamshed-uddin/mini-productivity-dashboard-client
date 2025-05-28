"use client";

import { Goal, Task } from "@/lib/types";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import GoalForm from "./GoalForm";
import {
  useDeleteGoalMutation,
  useUpdateGoalMutation,
} from "@/redux/api/goalApis";
import toast from "react-hot-toast";
import GoalDetails from "./GoalDetails";
import { useGetTasksQuery } from "@/redux/api/taskApis";

const GoalItem = ({ goal }: { goal: Goal }) => {
  const [update, { isLoading: isUpdating }] = useUpdateGoalMutation();
  const [deleteGoal, { isLoading: isDeleting }] = useDeleteGoalMutation();
  const {
    data,
    isLoading: isTaskLoading,
    isError: isTaskError,
  } = useGetTasksQuery(undefined);

  const [isOpen, setIsOpen] = useState(false);

  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const openDetailModal = () => setIsDetailModalOpen(true);
  const closeDetailModal = () => setIsDetailModalOpen(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const [action, setAction] = useState("");

  const openAction = (actionStr: string) => {
    setAction(actionStr);
    openModal();
  };

  const updateGoalHandler = (data: Partial<Goal>) => {
    return update(data).unwrap();
  };

  const deleteTaskHandler = () => {
    if (!goal._id) return;
    try {
      deleteGoal(goal?._id).unwrap();
      toast.success("Goal deleted");
    } catch {
      toast.error("Failed to delete task");
    } finally {
      closeModal();
    }
  };

  const getAssociatedTasks = (): Task[] => {
    if (isTaskLoading || isTaskError || !data?.data) return [];

    const associatedTasks = data?.data.filter(
      (task) => task.goal?._id === goal._id
    );
    return associatedTasks;
  };

  return (
    <>
      {/* goal details modal */}
      {isDetailModalOpen && (
        <Modal
          open={isDetailModalOpen}
          close={closeDetailModal}
          internalCloseButton={true}
        >
          <GoalDetails goal={{ ...goal, tasks: getAssociatedTasks() }} />{" "}
        </Modal>
      )}
      {/* update and delete modal */}
      {isOpen && (
        <Modal open={isOpen} close={closeModal}>
          {action === "update" ? (
            <div>
              <GoalForm
                initialData={goal}
                onSubmit={updateGoalHandler}
                onFormCancel={closeModal}
                onSubmitSuccess={closeModal}
                isSubmitting={isUpdating}
              />
            </div>
          ) : (
            <div>
              <h3 className="text-sm font-medium mb-1">Delete task?</h3>
              <p>
                The <span className="font-medium">{goal.title}</span> goal will
                be permanently deleted.
              </p>
              <div className="flex items-center justify-end gap-2 mt-3">
                <Button onClick={closeModal} variant="secondary">
                  Cancel
                </Button>
                <Button
                  loading={isDeleting}
                  disabled={isDeleting}
                  onClick={deleteTaskHandler}
                  variant="destructive"
                >
                  Delete
                </Button>
              </div>
            </div>
          )}
        </Modal>
      )}
      <div
        onClick={openDetailModal}
        className="flex justify-between items-center cursor-pointer"
      >
        {/* goal info */}
        <div className="py-2">
          <h3 className="">{goal.title}</h3>
          <p className="text-sm">
            {goal.description
              ? goal.description.length > 30
                ? `${goal.description?.slice(0, 30)}...`
                : goal.description
              : ""}
          </p>
        </div>

        {/* actions */}
        <div className="flex items-center gap-3">
          <button
            className="p-1 hover:text-indigo-500 cursor-pointer"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              openAction("update");
            }}
          >
            <PencilIcon className="w-4 h-4" />
          </button>
          <button
            className="p-1 hover:text-indigo-500 cursor-pointer"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              openAction("delete");
            }}
          >
            <TrashIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};

export default GoalItem;
