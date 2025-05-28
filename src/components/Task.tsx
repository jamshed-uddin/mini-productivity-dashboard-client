"use client";

import type { Task } from "@/lib/types";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { ChangeEvent, useState } from "react";
import Modal from "./Modal";
import TaskForm from "./TaskForm";
import {
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "@/redux/api/taskApis";
import Button from "./Button";
import toast from "react-hot-toast";
import TaskDetails from "./TaskDetails";

const Task = ({ task }: { task: Task }) => {
  const [isComplete, setIsComplete] = useState(
    task.status === "pending" ? false : true
  );
  const [update, { isLoading: isUpdating }] = useUpdateTaskMutation();
  const [deleteTask, { isLoading: isDeleting }] = useDeleteTaskMutation();

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

  const updateTaskHandler = (data: Partial<Task>) => {
    return update(data).unwrap();
  };

  const deleteTaskHandler = () => {
    if (!task._id) return;
    try {
      deleteTask(task?._id).unwrap();
      toast.success("Task deleted");
    } catch {
      toast.error("Failed to delete task");
    } finally {
      closeModal();
    }
  };

  const TaskCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const value = e.target.checked;
    setIsComplete((p) => !p);
    const status = value ? "completed" : "pending";

    try {
      update({ _id: task._id, status }).unwrap();
    } catch {
      toast.error("Failed to mark task completed");
      setIsComplete(false);
    }
  };

  return (
    <>
      {isDetailModalOpen && (
        <Modal
          open={isDetailModalOpen}
          close={closeDetailModal}
          internalCloseButton={true}
        >
          <TaskDetails task={task} />
        </Modal>
      )}

      {isOpen && (
        <Modal open={isOpen} close={closeModal}>
          {action === "update" ? (
            <div>
              <TaskForm
                initialData={task}
                onSubmit={updateTaskHandler}
                onFormCancel={closeModal}
                onSubmitSuccess={closeModal}
                isSubmitting={isUpdating}
              />
            </div>
          ) : (
            <div>
              <h3 className="text-sm font-medium mb-1">Delete task?</h3>
              <p>
                The <span className="font-medium">{task.title}</span> task will
                be permanently deleted.
              </p>
              <div className="flex items-center justify-end gap-2 mt-3">
                <Button variant="secondary" onClick={closeModal}>
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
        className="flex  items-start gap-2 py-2 cursor-pointer"
      >
        <div
          onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        >
          <input
            checked={isComplete}
            onChange={TaskCheckboxChange}
            type="checkbox"
            name=""
            id=""
            disabled={isUpdating}
          />
        </div>
        <div className="flex-1">
          <h2 className={clsx(isComplete ? "line-through" : "")}>
            {task.title}
          </h2>
          <p className="text-sm">{task.description}</p>
        </div>
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

export default Task;
