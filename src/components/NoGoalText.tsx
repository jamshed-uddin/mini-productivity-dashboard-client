import { TrophyIcon } from "@heroicons/react/24/outline";
import React from "react";

const NoGoalText = () => {
  return (
    <div className="w-full flex justify-center">
      <div>
        <h3 className="flex flex-col items-center mt-5 font-medium">
          <span>
            <TrophyIcon className="w-8 h-8 text-indigo-500" />
          </span>
          <span> Set a goal today.</span>
        </h3>
      </div>
    </div>
  );
};

export default NoGoalText;
