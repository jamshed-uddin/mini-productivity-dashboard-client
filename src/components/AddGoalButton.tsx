"use client";

import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import { Goal } from "@/lib/types";
import GoalForm from "./GoalForm";
import { useCreateGoalMutation } from "@/redux/api/goalApis";

const AddGoalButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [create, { isLoading }] = useCreateGoalMutation();

  const createGoalHandler = (data: Goal) => {
    return create(data).unwrap();
  };

  return (
    <div>
      <Button onClick={openModal}>Add goal</Button>
      {isOpen && (
        <Modal open={isOpen} close={closeModal}>
          <GoalForm
            onSubmit={createGoalHandler}
            onSubmitSuccess={closeModal}
            isSubmitting={isLoading}
            onFormCancel={closeModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default AddGoalButton;
