"use client";

import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    // TODO: Handle login logic
  };

  return (
    <div className="lg:w-1/4">
      <h3 className="uppercase text-lg mb-4 font-semibold">Register</h3>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="text-sm font-medium mb-1 block">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className={`border rounded-xl p-2 block w-full ${
              errors.name
                ? "border-red-500 focus:outline-red-500"
                : "border-black focus:outline-indigo-500"
            }`}
          />
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name.message}</span>
          )}
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">Email</label>
          <input
            type="text"
            {...register("email", { required: "Email is required" })}
            className={`border rounded-xl p-2 block w-full ${
              errors.email
                ? "border-red-500 focus:outline-red-500"
                : "border-black focus:outline-indigo-500"
            }`}
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label className="flex justify-between items-center text-sm font-medium mb-1">
            <span>Password</span>
            <span
              onClick={() => setShowPassword((p) => !p)}
              className="cursor-pointer opacity-70"
            >
              {showPassword ? (
                <EyeIcon className="w-4 h-4" />
              ) : (
                <EyeSlashIcon className="w-4 h-4" />
              )}
            </span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: "Password is required" })}
            className={`border rounded-xl p-2 block w-full ${
              errors.password
                ? "border-red-500 focus:outline-red-500"
                : "border-black focus:outline-indigo-500"
            }`}
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="flex justify-center">
          <Button type="submit">Login</Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
