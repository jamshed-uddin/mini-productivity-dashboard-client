import React from "react";
import LoginForm from "./LoginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Login = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  console.log(token);

  if (token) {
    redirect("/dashboard");
  }

  return (
    <div className="h-full bg-gradient-to-t to-50% from-indigo-300 to-white">
      <div className="h-full flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
