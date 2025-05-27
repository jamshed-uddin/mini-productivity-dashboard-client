"use client";

import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import TaskForm from "./TaskForm";
import { Task } from "@/lib/types";

const AddTaskButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const createTask = (data: Task) => {
    console.log(data);
  };

  return (
    <div>
      <Button onClick={openModal}>Add task</Button>
      <Modal open={isOpen} close={closeModal}>
        <TaskForm onSubmit={createTask} onFormCancel={closeModal} />
      </Modal>
    </div>
  );
};

export default AddTaskButton;
<Button>Add task</Button>;
