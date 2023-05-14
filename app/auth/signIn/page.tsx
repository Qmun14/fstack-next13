"use client";

import { signIn } from "next-auth/react";
import React, { useState } from "react";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName,
      password: pass,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-green-400 shadow-xl flex justify-center items-center">
        <div className="card-body">
          <div className="form-content flex flex-col gap-2">
            <label className="text-[#0F172A] text-lg font-semibold">User Name</label>
            <input
              type="text"
              placeholder="User Name"
              className="input input-bordered w-full max-w-xs"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label className="text-[#0F172A] text-lg font-semibold">Password</label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered w-full max-w-xs"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-outline btn-info btn-wide" onClick={onSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
