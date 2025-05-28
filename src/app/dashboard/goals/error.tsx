"use client";

import ErrorMessage from "@/components/ErrorMessage";
import React from "react";

const error = () => {
  return (
    <div className="h-full w-full flex justify-center items-cetner border">
      <ErrorMessage />
    </div>
  );
};

export default error;
