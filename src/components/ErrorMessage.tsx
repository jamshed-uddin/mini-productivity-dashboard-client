import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import React from "react";

const ErrorMessage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <h3 className="flex items-center gap-2 text-red-400">
        <ExclamationTriangleIcon className="w-4 h-4 " />
        <span>Something went wrong</span>
      </h3>
    </div>
  );
};

export default ErrorMessage;
