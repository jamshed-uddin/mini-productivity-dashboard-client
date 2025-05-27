"use client";

import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import TaskForm from "./TaskForm";
import { Task } from "@/lib/types";
import { useCreateTaskMutation } from "@/redux/api/taskApis";

const AddTaskButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [create, { isLoading }] = useCreateTaskMutation();

  const createTaskHandler = async (data: Task) => {
    return create(data).unwrap();
  };

  return (
    <div>
      <Button onClick={openModal}>Add task</Button>
      <Modal open={isOpen} close={closeModal}>
        <TaskForm
          onSubmit={createTaskHandler}
          onFormCancel={closeModal}
          isSubmitting={isLoading}
          onSubmitSuccess={closeModal}
        />
      </Modal>
    </div>
  );
};

export default AddTaskButton;
<Button>Add task</Button>;
