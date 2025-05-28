import React from "react";
import RegisterForm from "./RegisterForm";

const Register = async () => {
  return (
    <div className="h-full bg-gradient-to-t to-40% from-indigo-200 to-white">
      <div className="h-full flex items-center justify-center">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
