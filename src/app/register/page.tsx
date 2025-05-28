import React from "react";
import RegisterForm from "./RegisterForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Register = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  console.log(token);

  if (token) {
    redirect("/dashboard");
  }

  return (
    <div className="h-full bg-gradient-to-t to-40% from-indigo-200 to-white">
      <div className="h-full flex items-center justify-center">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
