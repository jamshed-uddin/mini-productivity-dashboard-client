"use client";

import clsx from "clsx";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
  className?: string;
  variant?: "primary" | "secondary" | "destructive";
}

const Button = ({
  children,
  loading,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  const baseStyle =
    "bg-indigo-500 text-white text-sm lg:text-base  rounded-lg lg:rounded-xl active:scale-95 font-medium  relative disabled:cursor-not-allowed cursor-pointer text-nowrap";

  const variantStyles: {
    primary: string;
    secondary: string;
    destructive: string;
  } = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-500",
    secondary: "bg-gray-200 text-gray-800 ",
    destructive: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      {...props}
      className={twMerge(clsx(baseStyle, variantStyles[variant], className))}
    >
      {loading && (
        <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full inline-block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 "></span>
      )}
      <span
        className={clsx(
          "border px-3 py-1.5 block",
          loading ? "opacity-0" : "opacity-100"
        )}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
