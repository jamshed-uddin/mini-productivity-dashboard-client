import AllGoals from "@/components/AllGoals";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Stride | Dashboard - Goals",
  description: "",
};

const GoalsPage = () => {
  return (
    <div>
      <AllGoals />
    </div>
  );
};

export default GoalsPage;
