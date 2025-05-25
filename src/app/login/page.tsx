import React from "react";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="h-full bg-gradient-to-t to-50% from-indigo-300 to-white">
      <div className="h-full flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
